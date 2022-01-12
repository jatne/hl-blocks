var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  f: () => fetchQuery
});
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
