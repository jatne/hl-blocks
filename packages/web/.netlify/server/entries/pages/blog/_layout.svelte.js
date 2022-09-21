import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
