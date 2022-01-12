var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  P: () => PageBuilder
});
var import_index_790fe6b2 = __toModule(require("./index-790fe6b2.js"));
var EmptySpace_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".emptySpace.svelte-wxouqv{display:block;margin:0;padding-bottom:2rem;padding-top:2rem;width:100%}.emptySpace--large.svelte-wxouqv{padding-bottom:3rem;padding-top:3rem}.emptySpace--small.svelte-wxouqv{padding-bottom:1rem;padding-top:1rem}",
  map: null
};
const EmptySpace = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { size } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div class="${"emptySpace emptySpace--" + (0, import_index_790fe6b2.d)(size) + " svelte-wxouqv"}"></div>`;
});
const Image = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"image"}"></div>`;
});
const ReportError = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { message = "error" } = $$props;
  let { ignoreUnknownTypes = true } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.ignoreUnknownTypes === void 0 && $$bindings.ignoreUnknownTypes && ignoreUnknownTypes !== void 0)
    $$bindings.ignoreUnknownTypes(ignoreUnknownTypes);
  {
    if (ignoreUnknownTypes) {
      console.info(`[PortableText] ${message}`);
    } else {
      throw `[PortableText] ${message}`;
    }
  }
  return ``;
});
const BlockSpan = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let span;
  let block;
  let serializers;
  let allMarks;
  let currentMark;
  let nestedSpan;
  let nestedProps;
  let customComponent;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  span = portableText.span;
  block = portableText.block;
  serializers = portableText.serializers;
  allMarks = span.marks || [];
  currentMark = ((block === null || block === void 0 ? void 0 : block.markDefs) || []).find((def) => def._key === allMarks[0]) || allMarks[0];
  nestedSpan = __spreadProps(__spreadValues({}, span), { marks: allMarks.slice(1) });
  nestedProps = __spreadProps(__spreadValues({}, portableText), { span: nestedSpan });
  customComponent = (serializers === null || serializers === void 0 ? void 0 : serializers.marks) ? typeof currentMark === "string" ? serializers.marks[currentMark] : serializers.marks[currentMark === null || currentMark === void 0 ? void 0 : currentMark._type] : void 0;
  return `${!currentMark ? `
  ${slots.default ? slots.default({}) : ``}` : `${customComponent ? `${(0, import_index_790fe6b2.v)(customComponent || import_index_790fe6b2.m, "svelte:component").$$render($$result, {
    portableText: __spreadProps(__spreadValues({}, portableText), { mark: currentMark })
  }, {}, {
    default: () => {
      return `
    ${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}` : `${currentMark === "strong" ? `<strong>${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</strong>` : `${currentMark === "em" ? `<em>${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</em>` : `${currentMark === "code" ? `<code>${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</code>` : `${currentMark === "underline" ? `<u>${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</u>` : `${currentMark === "strike-through" ? `<s>${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</s>` : `${(0, import_index_790fe6b2.v)(ReportError, "ReportError").$$render($$result, {
    message: "Mark of type " + (typeof currentMark === "string" ? currentMark : currentMark._type) + " has no compatible renderer or is missing markDefs (block " + block._key + ", child " + span._key + ")",
    ignoreUnknownTypes: portableText.ignoreUnknownTypes || !!(serializers == null ? void 0 : serializers.unknownMark)
  }, {}, {})}
  ${(serializers == null ? void 0 : serializers.unknownMark) ? `${(0, import_index_790fe6b2.v)(serializers.unknownMark || import_index_790fe6b2.m, "svelte:component").$$render($$result, {
    portableText: __spreadProps(__spreadValues({}, portableText), { mark: currentMark })
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `
    ${(0, import_index_790fe6b2.v)(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}`}`}`}`}`}`}`}`;
});
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return __spreadValues({
    _key: span._key || getRandomKey()
  }, span);
}
function assertBlockKey(block) {
  return __spreadValues(__spreadValues({
    _key: block._key || getRandomKey()
  }, block), block._type === "block" && Array.isArray(block.children) ? {
    children: block.children.map(assertSpanKey)
  } : {});
}
const LIST_TYPE = "__internal_pt-list";
const BLOCK_LIST_ITEMS = "__internal_pt-listChildren";
function assertListItem(block) {
  return block._type === "block" && typeof block.level === "number" && ["bullet", "number"].includes(block.listItem);
}
function nestLists(blocks, level = 1) {
  return blocks.reduce((normalizedBlocks, entry, curIndex) => {
    if (!assertListItem(entry)) {
      return [...normalizedBlocks, assertBlockKey(entry)];
    }
    const curBlock = entry;
    if (curBlock.level !== level) {
      return normalizedBlocks;
    }
    const followingBlocks = blocks.slice(curIndex + 1);
    const firstNonNested = followingBlocks.findIndex((block) => !assertListItem(block) || block.listItem !== curBlock.listItem || block.level <= curBlock.level);
    const nestedBlocks = followingBlocks.slice(0, firstNonNested >= 0 ? firstNonNested : void 0);
    const listChildren = nestLists(nestedBlocks, level + 1);
    const parsedBlock = assertBlockKey(__spreadValues(__spreadValues({}, curBlock), (listChildren === null || listChildren === void 0 ? void 0 : listChildren.length) > 0 ? { [BLOCK_LIST_ITEMS]: listChildren } : {}));
    const previousBlock = normalizedBlocks.slice(-1)[0];
    if ((previousBlock === null || previousBlock === void 0 ? void 0 : previousBlock._type) === LIST_TYPE && previousBlock.listItem === curBlock.listItem) {
      const parentBlock = previousBlock;
      return [
        ...normalizedBlocks.slice(0, -1),
        __spreadProps(__spreadValues({}, parentBlock), {
          children: [...parentBlock.children, parsedBlock]
        })
      ];
    }
    const finalBlock = level === 1 ? assertBlockKey({
      _key: curBlock._key,
      _type: LIST_TYPE,
      listItem: curBlock.listItem,
      children: [parsedBlock]
    }) : parsedBlock;
    return [...normalizedBlocks, finalBlock];
  }, []);
}
const BlockWrapper = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let block;
  let style;
  let customStyle;
  var _a, _b;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  block = portableText.block;
  style = (block === null || block === void 0 ? void 0 : block._type) === "block" ? assertListItem(block) ? `listItem_${block.listItem}` : block.style || "normal" : `list_${block.listItem}`;
  customStyle = ((_b = (_a = portableText.serializers) === null || _a === void 0 ? void 0 : _a.blockStyles) === null || _b === void 0 ? void 0 : _b[style]) || void 0;
  return `${customStyle ? `${(0, import_index_790fe6b2.v)(customStyle || import_index_790fe6b2.m, "svelte:component").$$render($$result, { portableText }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${style === "h1" ? `<h1>${slots.default ? slots.default({}) : ``}</h1>` : `${style === "h2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${style === "h3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${style === "h4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${style === "h5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${style === "h6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : `${style === "blockquote" ? `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>` : `${style === "normal" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${style === "list_bullet" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${style === "list_number" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${style === "listItem_bullet" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${style === "listItem_number" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${(0, import_index_790fe6b2.v)(ReportError, "ReportError").$$render($$result, {
    message: "Style " + style + " has no compatible renderer (block " + block._key + ")"
  }, {}, {})}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const BlockRenderer = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let block;
  let serializers;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  block = portableText.block;
  serializers = portableText.serializers;
  return `${(0, import_index_790fe6b2.v)(BlockWrapper, "BlockWrapper").$$render($$result, { portableText }, {}, {
    default: () => {
      var _a;
      return `${block._type === "block" ? `${(0, import_index_790fe6b2.e)(block.children, (child) => {
        var _a2;
        return `${((_a2 = serializers == null ? void 0 : serializers.types) == null ? void 0 : _a2[child._type]) ? `
        ${(0, import_index_790fe6b2.v)(serializers.types[child._type] || import_index_790fe6b2.m, "svelte:component").$$render($$result, {
          portableText: __spreadProps(__spreadValues({}, portableText), {
            parentBlock: block,
            block: child
          })
        }, {}, {})}` : `${child._type === "span" ? `
        ${(0, import_index_790fe6b2.v)(BlockSpan, "BlockSpan").$$render($$result, {
          portableText: {
            block,
            serializers,
            ignoreUnknownTypes: portableText.ignoreUnknownTypes,
            span: child,
            context: portableText.context
          }
        }, {}, {
          default: () => {
            return `${(0, import_index_790fe6b2.d)(child.text)}`;
          }
        })}` : `${(0, import_index_790fe6b2.v)(ReportError, "ReportError").$$render($$result, {
          message: "Block child of type " + child._type + " has no compatible renderer (child " + child._key + " in block " + block._key + ")"
        }, {}, {})}`}`}`;
      })}

    
    ${((_a = block[BLOCK_LIST_ITEMS]) == null ? void 0 : _a.length) ? `${(0, import_index_790fe6b2.v)(BlockRenderer, "svelte:self").$$render($$result, {
        portableText: __spreadProps(__spreadValues({}, portableText), {
          block: {
            _type: LIST_TYPE,
            _key: block._key,
            listItem: block.listItem,
            children: block[BLOCK_LIST_ITEMS]
          }
        })
      }, {}, {})}` : ``}` : `${block._type === LIST_TYPE ? `${(0, import_index_790fe6b2.e)(block.children, (child, nestedIndex) => {
        return `${(0, import_index_790fe6b2.v)(BlockRenderer, "svelte:self").$$render($$result, {
          portableText: __spreadProps(__spreadValues({}, portableText), {
            index: nestedIndex,
            block: child
          })
        }, {}, {})}`;
      })}` : ``}`}`;
    }
  })}`;
});
const PortableText = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let normalizedBlocks;
  let { blocks = [] } = $$props;
  let { serializers = void 0 } = $$props;
  let { ignoreUnknownTypes = true } = $$props;
  let { context = {} } = $$props;
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  if ($$props.serializers === void 0 && $$bindings.serializers && serializers !== void 0)
    $$bindings.serializers(serializers);
  if ($$props.ignoreUnknownTypes === void 0 && $$bindings.ignoreUnknownTypes && ignoreUnknownTypes !== void 0)
    $$bindings.ignoreUnknownTypes(ignoreUnknownTypes);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  normalizedBlocks = nestLists(blocks);
  return `${(0, import_index_790fe6b2.e)(normalizedBlocks, (block, index) => {
    var _a;
    return `${((_a = serializers == null ? void 0 : serializers.types) == null ? void 0 : _a[block._type]) ? `
    ${(0, import_index_790fe6b2.v)(serializers.types[block._type] || import_index_790fe6b2.m, "svelte:component").$$render($$result, {
      portableText: {
        _rawBlocks: blocks,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers,
        context
      }
    }, {}, {})}` : `${block._type === "block" || block._type === LIST_TYPE ? `${(0, import_index_790fe6b2.v)(BlockRenderer, "BlockRenderer").$$render($$result, {
      portableText: {
        _rawBlocks: blocks,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers,
        context
      }
    }, {}, {})}` : `${(0, import_index_790fe6b2.v)(ReportError, "ReportError").$$render($$result, {
      message: "Block of type " + block._type + " has no compatible renderer (block " + block._key + ")",
      ignoreUnknownTypes: ignoreUnknownTypes || !!(serializers == null ? void 0 : serializers.unknownType)
    }, {}, {})}
    ${(serializers == null ? void 0 : serializers.unknownType) ? `${(0, import_index_790fe6b2.v)(serializers.unknownType || import_index_790fe6b2.m, "svelte:component").$$render($$result, {
      portableText: {
        _rawBlocks: blocks,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers,
        context
      }
    }, {}, {})}` : ``}`}`}`;
  })}`;
});
const RichEditor = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${(0, import_index_790fe6b2.v)(PortableText, "PortableText").$$render($$result, { blocks: content }, {}, {})}`;
});
const Feature = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${title ? `<div class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}" class="${"flex-shrink-0 w-6 h-6 text-cyan-600"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg>
		<div class="${"ml-3"}"><dt class="${"text-lg font-medium"}">${(0, import_index_790fe6b2.d)(title)}</dt>
			${description ? `<dd class="${"mt-2 text-gray-600"}">${(0, import_index_790fe6b2.d)(description)}</dd>` : ``}</div></div>` : ``}`;
});
const Features = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${content.length > 0 ? `<dl class="${"grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm-gap-8"}">${(0, import_index_790fe6b2.e)(content, ({ title, description }, i) => {
    return `${(0, import_index_790fe6b2.v)(Feature, "Feature").$$render($$result, { title, description }, {}, {})}`;
  })}</dl>` : ``}`;
});
var TitleWithText_svelte_svelte_type_style_lang = "";
const css = {
  code: ".center.svelte-1momitt{margin:auto;text-align:center}.right.svelte-1momitt{margin:0 0 0 auto;text-align:right}",
  map: null
};
const TitleWithText = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { text } = $$props;
  let { alignment } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  $$result.css.add(css);
  return `${title || text ? `<div class="${[
    "max-w-3xl svelte-1momitt",
    (alignment === "right" ? "right" : "") + " " + (alignment === "center" ? "center" : "")
  ].join(" ").trim()}">${title ? `<h2 class="${"text-2xl font-bold tracking-tight sm:text-4xl text-gray-900"}">${(0, import_index_790fe6b2.d)(title)}</h2>` : ``}

		${text ? `<p class="${"mt-4 text-xl text-gray-600"}">${(0, import_index_790fe6b2.d)(text)}</p>` : ``}</div>` : ``}`;
});
const PageBuilder = (0, import_index_790fe6b2.c)(($$result, $$props, $$bindings, slots) => {
  let { blocks = false } = $$props;
  console.log(blocks);
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  return `${blocks ? `${(0, import_index_790fe6b2.e)(blocks, (block) => {
    return `
		${block._type === "emptySpace" ? `${(0, import_index_790fe6b2.v)(EmptySpace, "EmptySpace").$$render($$result, { size: block.value }, {}, {})}` : `${block._type === "image" ? `${(0, import_index_790fe6b2.v)(Image, "Image").$$render($$result, { asset: block.asset }, {}, {})}` : `${block._type === "richEditor" ? `${(0, import_index_790fe6b2.v)(RichEditor, "RichEditor").$$render($$result, { content: block.content }, {}, {})}` : `${block._type === "featureBox" ? `${(0, import_index_790fe6b2.v)(Features, "Features").$$render($$result, { content: block.features }, {}, {})}` : `${block._type === "titleWithText" ? `${(0, import_index_790fe6b2.v)(TitleWithText, "TitleWithText").$$render($$result, {
      title: block.title,
      text: block.text,
      alignment: block.alignment
    }, {}, {})}` : `${block._type === "slice" ? `${(0, import_index_790fe6b2.v)(PageBuilder, "svelte:self").$$render($$result, { blocks: block.content }, {}, {})}` : ``}`}`}`}`}`}
		`;
  })}` : ``}`;
});
