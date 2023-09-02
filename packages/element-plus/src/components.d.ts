import * as components from "./components/index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};