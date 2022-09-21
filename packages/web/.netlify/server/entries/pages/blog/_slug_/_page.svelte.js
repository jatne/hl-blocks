import { c as create_ssr_component, d as add_attribute, f as escape, v as validate_component, e as each } from "../../../../chunks/index.js";
import { R as RichEditor } from "../../../../chunks/RichEditor.js";
import { i as imageUrl } from "../../../../chunks/helpers.js";
const Author = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author } = $$props;
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  return `<div class="${"flex items-center mr-3 text-sm text-gray-900 dark:text-white"}">${author.avatar ? `<img class="${"mr-4 w-16 h-16 rounded-full"}"${add_attribute("src", imageUrl(author.avatar).url(), 0)}${add_attribute("alt", author.name, 0)}>` : `<svg viewBox="${"0 0 128 128"}" role="${"img"}" aria-label="${"avatar"}" class="${"mr-4 w-16 h-16 rounded-full w-16 h-16"}"><path fill="${"currentColor"}" d="${"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}"></path><path fill="${"currentColor"}" d="${"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}"></path></svg>`}

	<div><a href="${"/author/" + escape(author.slug.current, true)}" rel="${"author"}" class="${"text-xl font-bold text-gray-900 dark:text-white"}">${escape(author.name)}</a></div></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  const getHeroImage = imageUrl(image).url();
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"w-full h-96 bg-cover bg-center"}" style="${"background-image: url('" + escape(getHeroImage, true) + "');"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article class="${"space-y-5"}">${data.postData.imageFeatured._id ? `${validate_component(Hero, "Hero").$$render($$result, { image: data.postData.imageFeatured }, {}, {})}` : ``}
	<div class="${"mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg pb-6 px-3"}"><header class="${"pt-4 mb-4 lg:mb-6 not-format text-center"}"><h1 class="${"mb-1 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl"}">${escape(data.postData.name)}</h1>
			<p class="${"text-base font-light text-gray-500 dark:text-gray-400"}"><time pubdate${add_attribute("datetime", data.postData.date, 0)}${add_attribute("title", data.postData.date, 0)}>${escape(new Date(data.postData.date).toDateString())}</time></p></header>
		<div class="${"mb-8"}">${data.postData.content ? `${validate_component(RichEditor, "RichEditor").$$render($$result, { content: data.postData.content }, {}, {})}` : ``}</div>
		<footer class="${"flex items-center mb-6 not-italic"}"><div class="${"space-y-5"}">${each(data.postData.author, (author) => {
    return `${validate_component(Author, "Author").$$render($$result, { author }, {}, {})}`;
  })}</div></footer></div></article>`;
});
export {
  Page as default
};
