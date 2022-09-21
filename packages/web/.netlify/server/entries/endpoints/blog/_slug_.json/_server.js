import { c as client } from "../../../../chunks/client.js";
import { b as getPostBySlug } from "../../../../chunks/queries.js";
async function GET(req) {
  try {
    const slug = req.params.slug;
    const data = await client.fetch(getPostBySlug, { slug });
    return new Response(JSON.stringify({ data }), {
      headers: {
        "content-type": "application/json; charset=utf-8"
      }
    });
  } catch (err) {
    return new Response();
  }
}
export {
  GET
};
