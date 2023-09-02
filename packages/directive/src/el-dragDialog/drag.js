export default{
  inserted (el) {
    const dragDom = el.querySelector('.el-dialog')
    const cachDragCssText = dragDom.style.cssText
    dragDom.cachDragCssText = cachDragCssText
  },
  update (el, binding, vnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderEl.style.cssText += ';cursor:move;'
    // dragDom.style.cssText = el.cachDragCssText
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle = (function() {
      if (document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr]
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr]
      }
    })()
    dialogHeaderEl.onmousedown = (e) => {
      if (e.target.tagName === 'I') return 
      
      // 鼠标按下，计算当前元素距离可视区的距离
      // const disX = e.clientX - dialogHeaderEl.offsetLeft
      // const disY = e.clientY - dialogHeaderEl.offsetTop
      const startX = e.clientX // 点击的X坐标
      const startY = e.clientY // 点击的Y坐标
      const dragDomWidth = dragDom.offsetWidth // 弹窗的宽度
      const dragDomheight = dragDom.offsetHeight // 弹窗的高度
      const dragDomLeft = dragDom.offsetLeft // 弹窗距离父级的left值
      const dragDomTop = dragDom.offsetTop // 弹窗距离父级的top值
      if (el.dragDomLeft === undefined) el.dragDomLeft = dragDomLeft
      if (el.dragDomTop === undefined) el.dragDomTop = dragDomTop
      const clientWidth = document.body.clientWidth
      const clientHeight = document.body.clientHeight
      const minDragDomLeft = -el.dragDomLeft
      const maxDragDomLeft = clientWidth - el.dragDomLeft - dragDomWidth
      const minDragDomTop = -el.dragDomTop
      const maxDragDomTop = clientHeight - el.dragDomTop - dragDomheight
      
      
      // 正常情况下

      // 获取到的值带px 正则匹配替换
      let styL = getStyle(dragDom, 'left')
      let styT = getStyle(dragDom, 'top')

      if (styL.includes('%')) {
        // styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
        // styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
        styL = +document.body.clientWidth * (+styL.replace(/%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - startX + styL
        let top = e.clientY - startY + styT

        // 边界处理
        if (left < minDragDomLeft) {
          left = minDragDomLeft
        } else if (left > maxDragDomLeft && (Math.abs(minDragDomLeft) >= Math.abs(maxDragDomLeft))) {
          left = maxDragDomLeft
        } else {
          left = Math.min(Math.abs(maxDragDomLeft), left)
        }

        if (top < minDragDomTop) {
          top = minDragDomTop
        } else if (top > maxDragDomTop && (Math.abs(minDragDomTop) >= Math.abs(maxDragDomTop))) {
          top = maxDragDomTop
        } else {
          top = Math.min(Math.abs(maxDragDomTop), top)
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left}px;top:${top}px;`
        vnode.child.$emit('dragDialog')
      }

      document.onmouseup = function() {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  install: function(Vue) {
    Vue.directive('el-drag-dialog', drag)
  }
}
