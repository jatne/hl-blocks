import { c as client } from "./client.js";
import imageUrlBuilder from "@sanity/image-url";
async function fetchQuery({ fetch, dataJson }) {
  try {
    const res = await fetch(dataJson);
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}
const builder = imageUrlBuilder(client);
function imageUrl(source) {
  return builder.image(source);
}
export {
  fetchQuery as f,
  imageUrl as i
};
