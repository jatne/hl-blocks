import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const MenuItems_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-115fu40{text-decoration-color:#06b6d4;text-decoration-line:underline;text-decoration-thickness:2px}",
  map: null
};
const MenuItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${each(items, ({ url, external, label }) => {
    return `<li class="${"flex"}">${external ? `<a${add_attribute("href", url, 0)} target="${"_blank"}" class="${"flex items-center px-4 -mb-1 border-b-2 border-transparent"}">${escape(label)}
			</a>` : `<a data-sveltekit-prefetch${add_attribute("href", url, 0)} class="${[
      "flex items-center px-4 -mb-1 border-b-2 border-transparent svelte-115fu40",
      $page.url.pathname == url ? "active" : ""
    ].join(" ").trim()}">${escape(label)}
			</a>`}
	</li>`;
  })}`;
});
const Signet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageName = false } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  return `<div class="${"grid grid-flow-col gap-x-2 items-center"}"><svg width="${"28"}" height="${"32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8"}"><path class="${"stroke-primary-500"}" stroke-width="${"2"}" d="${"M1 1h26v12H1zM13 27h6v4h-6zM23 27h4v4h-4zM1 17h8v14H1zM13 17h14v6H13z"}"></path></svg>
	${pageName ? `<span class="${"font-bold"}">hl blocks</span>` : ``}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<header class="${"container flex items-center justify-between h-16 mx-auto px-4 rounded bg-white"}"><a href="${"/"}" aria-label="${"Back to homepage"}" class="${"p-2"}">${validate_component(Signet, "Signet").$$render($$result, { pageName: true }, {}, {})}</a>
	${items.length ? `<ul class="${"items-stretch hidden space-x-3 md:flex"}">${validate_component(MenuItems, "MenuItems").$$render($$result, { items }, {}, {})}</ul>` : ``}

	<button class="${"flex justify-end p-4 md:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<footer><div class="${"px-4 py-8 bg-white text-gray-600 container mx-auto grid gap-y-14"}"><div class="${"flex justify-center"}"><ul class="${"flex flex-wrap space-x-4 sm:space-x-8"}">${validate_component(MenuItems, "MenuItems").$$render($$result, { items }, {}, {})}</ul></div>
		<div><div class="${"flex justify-center"}">${validate_component(Signet, "Signet").$$render($$result, { pageName: true }, {}, {})}</div>
			<div class="${"pt-4"}"><p class="${"text-center"}">Svelte Kit / Sanity / Tailwind<br>
					<span class="${"text-gray-400"}">2021</span></p></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { navMenuHeader, navMenuFooter } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<style data-svelte="svelte-psuykx">@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;600;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");</style>`, ""}

<div class="${"min-h-screen bg-gray-100 text-gray-800 px-6 py-2"}">${validate_component(Header, "Header").$$render($$result, { items: navMenuHeader }, {}, {})}
	<main class="${"py-6"}"><div class="${"container mx-auto"}">${slots.default ? slots.default({}) : ``}</div></main>
	${validate_component(Footer, "Footer").$$render($$result, { items: navMenuFooter }, {}, {})}</div>`;
});
export {
  Layout as default
};
