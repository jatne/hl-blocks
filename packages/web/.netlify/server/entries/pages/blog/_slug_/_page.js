import { f as fetchQuery } from "../../../../chunks/helpers.js";
const prerender = true;
async function load({ fetch, params }) {
  const postData = await fetchQuery({
    fetch,
    dataJson: `/blog/${params.slug}.json`
  });
  return {
    postData
  };
}
export {
  load,
  prerender
};
