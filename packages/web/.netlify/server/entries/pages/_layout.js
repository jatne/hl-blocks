import { f as fetchQuery } from "../../chunks/helpers.js";
async function load({ fetch }) {
  const {
    navMenuHeader,
    navMenuFooter
  } = await fetchQuery({ fetch, dataJson: "/settings.json" });
  return {
    navMenuHeader,
    navMenuFooter
  };
}
export {
  load
};
