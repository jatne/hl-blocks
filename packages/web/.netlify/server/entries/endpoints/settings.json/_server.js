import { c as client } from "../../../chunks/client.js";
import { a as getMenus } from "../../../chunks/queries.js";
async function GET() {
  try {
    const data = await client.fetch(getMenus);
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
