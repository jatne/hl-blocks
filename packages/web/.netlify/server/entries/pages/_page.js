import { f as fetchQuery } from "../../chunks/helpers.js";
async function load({ fetch }) {
  const pageData = await fetchQuery({ fetch, dataJson: "/frontpage.json" });
  return {
    pageData
  };
}
export {
  load
};
