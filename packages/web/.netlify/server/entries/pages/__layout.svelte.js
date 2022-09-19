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
  default: () => _layout,
  load: () => load
});
var import_index_790fe6b2 = __toModule(require("../../chunks/index-790fe6b2.js"));
var import_helpers_6eb64bb9 = __toModule(require("../../chunks/helpers-6eb64bb9.js"));
var app = "";
const getStores = () => {
  const stores = (0, import_index_790fe6b2.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var MenuItems_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-b8nu5u{-webkit-text-decoration-color:#06b6d4;text-decoration-color:#06b6d4;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-decoration-thickness:2px}",
  map: null
};
const MenuItems = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_790fe6b2.a)(page, (value) => $page = value);
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${(0, import_index_790fe6b2.e)(items, ({ url, external, label }) => {
    return `<li class="${"flex"}">${external ? `<a${(0, import_index_790fe6b2.b)("href", url, 0)} target="${"_blank"}" class="${"flex items-center px-4 -mb-1 border-b-2 border-transparent"}">${(0, import_index_790fe6b2.d)(label)}
			</a>` : `<a data-sveltekit-prefetch${(0, import_index_790fe6b2.b)("href", url, 0)} class="${[
      "flex items-center px-4 -mb-1 border-b-2 border-transparent svelte-b8nu5u",
      $page.url.pathname == url ? "active" : ""
    ].join(" ").trim()}">${(0, import_index_790fe6b2.d)(label)}
			</a>`}
	</li>`;
  })}`;
});
const Signet = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { pageName = false } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  return `<div class="${"grid grid-flow-col gap-x-2 items-center"}"><svg width="${"28"}" height="${"32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8"}"><path class="${"stroke-cyan-500"}" stroke-width="${"2"}" d="${"M1 1h26v12H1zM13 27h6v4h-6zM23 27h4v4h-4zM1 17h8v14H1zM13 17h14v6H13z"}"></path></svg>
	${pageName ? `<span class="${"font-bold"}">hl blocks</span>` : ``}</div>`;
});
const Header = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<header class="${"container flex items-center justify-between h-16 mx-auto px-4 rounded bg-white"}"><a href="${"/"}" aria-label="${"Back to homepage"}" class="${"p-2"}">${(0, import_index_790fe6b2.v)(Signet, "Signet").$$render($$result, { pageName: true }, {}, {})}</a>
	${items.length ? `<ul class="${"items-stretch hidden space-x-3 md:flex"}">${(0, import_index_790fe6b2.v)(MenuItems, "MenuItems").$$render($$result, { items }, {}, {})}</ul>` : ``}

	<button class="${"flex justify-end p-4 md:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></header>`;
});
const Footer = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<footer><div class="${"px-4 py-8 bg-white text-gray-600 container mx-auto grid gap-y-14"}"><div class="${"flex justify-center"}"><ul class="${"flex flex-wrap space-x-4 sm:space-x-8"}">${(0, import_index_790fe6b2.v)(MenuItems, "MenuItems").$$render($$result, { items }, {}, {})}</ul></div>
		<div><div class="${"flex justify-center"}">${(0, import_index_790fe6b2.v)(Signet, "Signet").$$render($$result, { pageName: true }, {}, {})}</div>
			<div class="${"pt-4"}"><p class="${"text-center"}">Svelte Kit / Sanity / Tailwind<br>
					<span class="${"text-gray-400"}">2021</span></p></div></div></div></footer>`;
});
async function load({ fetch }) {
  const settings = await (0, import_helpers_6eb64bb9.f)({ fetch, dataJson: "/settings.json" });
  return { props: { settings } };
}
const _layout = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  const { navMenuHeader, navMenuFooter } = settings;
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  return `${$$result.head += `<style data-svelte="svelte-psuykx">@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;600;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");</style>`, ""}

<div class="${"min-h-screen bg-gray-100 text-gray-800 px-6 py-2"}">${(0, import_index_790fe6b2.v)(Header, "Header").$$render($$result, { items: navMenuHeader }, {}, {})}
	<main class="${"py-6"}"><div class="${"container mx-auto"}">${slots.default ? slots.default({}) : ``}</div></main>
	${(0, import_index_790fe6b2.v)(Footer, "Footer").$$render($$result, { items: navMenuFooter }, {}, {})}</div>`;
});
