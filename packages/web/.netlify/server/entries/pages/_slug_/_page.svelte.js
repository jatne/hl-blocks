import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { P as PageBuilder } from "../../../chunks/PageBuilder.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(PageBuilder, "PageBuilder").$$render($$result, { blocks: (_a = data.pageData) == null ? void 0 : _a.content }, {}, {})}`;
});
export {
  Page as default
};
