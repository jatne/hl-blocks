import { f as fetchQuery } from "../../../chunks/helpers.js";
const prerender = true;
async function load({ fetch, params }) {
  const pageData = await fetchQuery({
    fetch,
    dataJson: `/${params.slug}.json`
  });
  return {
    pageData
  };
}
export {
  load,
  prerender
};
