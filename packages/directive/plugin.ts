import { Plugin, type OutputChunk } from "rollup";
import { Node } from "estree";
import { walk } from "estree-walker";
import MagicString from "magic-string";
import { posix as path } from "path";

type OutputChunkNew = OutputChunk & { isChange: true }
enum NodeType {
  Literal = "Literal",
  CallExpression = "CallExpression",
  Identifier = "Identifier",
  ImportDeclaration = "ImportDeclaration",
}

function isEmpty(array: any[] | undefined) {
  return !array || array.length === 0;
}

function getRequireSource(node: any): Node | false {
  if (node.type !== NodeType.CallExpression) {
    return false;
  }

  if (node.callee.type !== NodeType.Identifier || isEmpty(node.arguments)) {
    return false;
  }

  const args = node.arguments;

  if (node.callee.name !== "require" || args[0].type !== NodeType.Literal) {
    return false;
  }

  return args[0];
}

function getImportSource(node: any): Node | false {
  if (
    node.type !== NodeType.ImportDeclaration ||
    node.source.type !== NodeType.Literal
  ) {
    return false;
  }

  return node.source;
}

const importNodeTypes = [NodeType.ImportDeclaration, NodeType.CallExpression];
const isValid = (fileName: string, replaceReg: string | RegExp) => {
  return (typeof replaceReg === 'string') && fileName.includes(replaceReg) ||
  (typeof replaceReg === 'object') && replaceReg.test(fileName)
}
const plugin = (
  moduleName: string | ((fileName: string) => string) = "external",
  replaceReg: string | RegExp = /node_modules/,
  sourceMaps = true
): Plugin => {
  const replace =
    typeof moduleName === "string"
      ? (fileName: string) => fileName.replace(replaceReg, moduleName)
      : moduleName;
  return {
    name: "rename-external-node-modules",
    generateBundle(_, bundle) {
      const changedFiles: string[] = [];
      Object.entries(bundle).forEach(([fileName, chunkInfo]) => {
        if (isValid(fileName, replaceReg)) {
          const newFileName = replace(fileName);
          chunkInfo.fileName = newFileName;
          changedFiles.push(fileName);
        }
        if ("code" in chunkInfo) {
          if (chunkInfo.imports.some((i) => i.includes("node_modules"))) {
            const magicString = new MagicString(chunkInfo.code);
            const ast = this.parse(chunkInfo.code, {
              ecmaVersion: "latest",
              sourceType: "module",
            });
            walk(ast, {
              enter(node) {
                if (importNodeTypes.includes(node.type as NodeType)) {
                  const req: any =
                    getRequireSource(node) || getImportSource(node);

                  if (req && req.value && req.value.includes('modules')) {
                    const { start, end } = req;
                    // compute a new path relative to the bundle root

                    const bundlePath = replace( // 找到引入文件的路径
                      path.join(path.dirname(fileName), req.value)
                    );
                    // and then format the path relative to the updated chunk path
                    const newPath = path.relative( // 需要生成的新的文件路径
                      path.dirname(chunkInfo.fileName),
                      bundlePath
                    );

                    // add ./ to files relative to project root
                    const normalizedPath =
                      newPath.startsWith("./") || newPath.startsWith("../")
                        ? newPath
                        : `${newPath}`;
                    // 修改字符串
                    magicString.overwrite(start, end, `'${normalizedPath}'`);
                  }
                }
              },
            });

            if (sourceMaps) {
              chunkInfo.map = magicString.generateMap();
            }
            chunkInfo.code = magicString.toString();
          }
          // // 处理node_modules下面的
          if (isValid(fileName, replaceReg)) {
            const magicString = new MagicString(chunkInfo.code);
            const ast = this.parse(chunkInfo.code, {
              ecmaVersion: "latest",
              sourceType: "module",
            });

            walk(ast, {
              enter(node) {
                if (importNodeTypes.includes(node.type as NodeType)) {
                  const req: any =
                  getRequireSource(node) || getImportSource(node);
                  if (req) {
                    const { start, end } = req;
                    // compute a new path relative to the bundle root
                    if (req && req.value && req.value.startsWith('../')) {
                      const bundlePath = replace( // 找到引入文件的路径
                        path.join(path.dirname(fileName), req.value)
                      );
                      // and then format the path relative to the updated chunk path
                      const newPath = path.relative( // 需要生成的新的文件路径
                        replace(path.dirname(fileName)),
                        bundlePath
                      );
                      // add ./ to files relative to project root
                      const normalizedPath =
                        newPath.startsWith("./") || newPath.startsWith("../")
                          ? newPath
                          : `${newPath}`;
                      // 修改字符串
                      magicString.overwrite(start, end, `'${normalizedPath}'`);
                    }
                  }
                }
              },
            });

            if (sourceMaps) {
              chunkInfo.map = magicString.generateMap();
            }
            chunkInfo.code = magicString.toString();
          }
        }
        
      });
      for (const fileName of changedFiles) { // 需要改变的文件

        const file = bundle[fileName];
        const newFileName = file.fileName;
        delete bundle[fileName];
        bundle[newFileName] = file;
        // this.emitFile({
        //   type: 'asset',
        //   name: fileName,
        //   fileName: fileName,
        //   source: '123123123'
        // })
      }
    },
  };
};

export default plugin;