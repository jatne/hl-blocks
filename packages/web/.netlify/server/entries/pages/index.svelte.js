var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Routes,
  load: () => load,
  prerender: () => prerender
});
var import_index_790fe6b2 = __toModule(require("../../chunks/index-790fe6b2.js"));
var import_helpers_6eb64bb9 = __toModule(require("../../chunks/helpers-6eb64bb9.js"));
var import_PageBuilder_0127b942 = __toModule(require("../../chunks/PageBuilder-0127b942.js"));
const prerender = true;
async function load({ fetch }) {
  const frontPageData = await (0, import_helpers_6eb64bb9.f)({ fetch, dataJson: "/index.json" });
  return { props: { frontPageData } };
}
const Routes = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { frontPageData } = $$props;
  if ($$props.frontPageData === void 0 && $$bindings.frontPageData && frontPageData !== void 0)
    $$bindings.frontPageData(frontPageData);
  return `<div class="${"space-y-6"}">${(0, import_index_790fe6b2.v)(import_PageBuilder_0127b942.P, "PageBuilder").$$render($$result, { blocks: frontPageData.content }, {}, {})}</div>`;
});
