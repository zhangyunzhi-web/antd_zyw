import {
  Fragment,
  computed,
  createVNode,
  defineComponent,
  inject,
  mergeProps,
  onBeforeUnmount,
  provide,
  ref,
  shallowRef,
  unref,
  watch
} from "./chunk-LZPJ5JBW.js";

// node_modules/.pnpm/@emotion+hash@0.9.0/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var emotion_hash_esm_default = murmur2;

// node_modules/.pnpm/@emotion+unitless@0.8.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var emotion_unitless_esm_default = unitlessKeys;

// node_modules/.pnpm/stylis@4.1.3/node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";

// node_modules/.pnpm/stylis@4.1.3/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}

// node_modules/.pnpm/stylis@4.1.3/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/.pnpm/stylis@4.1.3/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j2 = 0, k = 0; i < index; ++i)
    for (var x2 = 0, y = substr(value, post + 1, post = abs(j2 = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y : replace(y, /&\f/g, rule[x2])))
        props[k++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/.pnpm/stylis@4.1.3/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/.pnpm/@antd-tiny-vue+cssinjs@0.0.6_vue@3.2.47/node_modules/@antd-tiny-vue/cssinjs/dist/index.mjs
var $e = Object.defineProperty;
var _e = (r, e, t) => e in r ? $e(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var b = (r, e, t) => (_e(r, typeof e != "symbol" ? e + "" : e, t), t);
var Ie = class {
  constructor() {
    b(this, "cache", /* @__PURE__ */ new Map());
  }
  get(e) {
    return this.cache.get(e.join("%")) || null;
  }
  update(e, t) {
    const n = e.join("%"), o = this.cache.get(n), i = t(o);
    i === null ? this.cache.delete(n) : this.cache.set(n, i);
  }
};
var I = "data-token-hash";
var _ = "data-css-hash";
var Pe = "data-dev-cache-path";
var P = "__cssinjs_instance__";
var W = Math.random().toString(12).slice(2);
function J() {
  if (typeof document < "u" && document.head && document.body) {
    const r = document.body.querySelectorAll(`style[${_}]`) || [], {
      firstChild: e
    } = document.head;
    Array.from(r).forEach((n) => {
      n[P] = n[P] || W, document.head.insertBefore(n, e);
    });
    const t = {};
    Array.from(document.querySelectorAll(`style[${_}]`)).forEach((n) => {
      var i;
      const o = n.getAttribute(_);
      t[o] ? n[P] === W && ((i = n.parentNode) == null || i.removeChild(n)) : t[o] = true;
    });
  }
  return new Ie();
}
var fe = Symbol("StyleContextKey");
var X = () => inject(fe, {
  hashPriority: "low",
  cache: J(),
  defaultCache: true
});
var mt = (r) => {
  const e = X();
  return computed(() => {
    const n = {
      ...e
    }, o = unref(r);
    Object.keys(o).forEach((a) => {
      const s = o[a];
      o[a] !== void 0 && (n[a] = s);
    });
    const {
      cache: i
    } = o;
    return n.cache = n.cache || J(), n.defaultCache = !i && e.defaultCache, n;
  });
};
var gt = defineComponent({
  name: "StyleProvider",
  props: {
    autoClear: Boolean,
    mock: String,
    cache: {
      type: Object,
      default: () => J()
    },
    hashPriority: {
      type: String,
      default: "low"
    },
    container: Object,
    ssrInline: Boolean,
    transformers: Array,
    linters: Array,
    defaultCache: {
      type: Boolean,
      default: true
    }
  },
  setup(r, e) {
    return provide(fe, r), () => {
      var t, n;
      return (n = (t = e.slots).default) == null ? void 0 : n.call(t);
    };
  }
});
function Q() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xe(r, e) {
  if (!r)
    return false;
  if (r.contains)
    return r.contains(e);
  let t = e;
  for (; t; ) {
    if (t === r)
      return true;
    t = t.parentNode;
  }
  return false;
}
var re = "data-rc-order";
var Me = "rc-util-key";
var z = /* @__PURE__ */ new Map();
function he({ mark: r } = {}) {
  return r ? r.startsWith("data-") ? r : `data-${r}` : Me;
}
function V(r) {
  return r.attachTo ? r.attachTo : document.querySelector("head") || document.body;
}
function We(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function pe(r) {
  return Array.from(
    (z.get(r) || r).children
  ).filter((e) => e.tagName === "STYLE");
}
function me(r, e = {}) {
  if (!Q())
    return null;
  const { csp: t, prepend: n } = e, o = document.createElement("style");
  o.setAttribute(re, We(n)), t != null && t.nonce && (o.nonce = t == null ? void 0 : t.nonce), o.innerHTML = r;
  const i = V(e), { firstChild: a } = i;
  if (n) {
    if (n === "queue") {
      const s = pe(i).filter(
        (l) => ["prepend", "prependQueue"].includes(l.getAttribute(re))
      );
      if (s.length)
        return i.insertBefore(
          o,
          s[s.length - 1].nextSibling
        ), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function ge(r, e = {}) {
  const t = V(e);
  return pe(t).find(
    (n) => n.getAttribute(he(e)) === r
  );
}
function ye(r, e = {}) {
  const t = ge(r, e);
  t && V(e).removeChild(t);
}
function je(r, e) {
  const t = z.get(r);
  if (!t || !xe(document, t)) {
    const n = me("", e), { parentNode: o } = n;
    z.set(r, o), r.removeChild(n);
  }
}
function q(r, e, t = {}) {
  var a, s, l;
  const n = V(t);
  je(n, t);
  const o = ge(e, t);
  if (o)
    return (a = t.csp) != null && a.nonce && o.nonce !== ((s = t.csp) == null ? void 0 : s.nonce) && (o.nonce = (l = t.csp) == null ? void 0 : l.nonce), o.innerHTML !== r && (o.innerHTML = r), o;
  const i = me(r, t);
  return i.setAttribute(he(t), e), i;
}
function j(r) {
  let e = "";
  return Object.keys(r).forEach((t) => {
    const n = r[t];
    e += t, n && typeof n == "object" ? e += j(n) : e += n;
  }), e;
}
function He(r, e) {
  return emotion_hash_esm_default(`${e}_${j(r)}`);
}
var x = `layer-${Date.now()}-${Math.random()}`.replace(/\./g, "");
var Se = "903px";
function Ve(r, e) {
  var t;
  if (Q()) {
    q(r, x);
    const n = document.createElement("div");
    n.style.position = "fixed", n.style.left = "0", n.style.top = "0", e == null || e(n), document.body.appendChild(n), n.innerHTML = "Test", n.style.zIndex = "9999999";
    const o = getComputedStyle(n).width === Se;
    return (t = n.parentNode) == null || t.removeChild(n), ye(x), o;
  }
  return false;
}
var D;
function De() {
  return D === void 0 && (D = Ve(
    `@layer ${x} { .${x} { width: ${Se}!important; } }`,
    (r) => {
      r.className = x;
    }
  )), D;
}
var F = false;
var Oe = false;
function ze() {
  return F || Oe;
}
var qe = false ? Ke : ze;
if (typeof module < "u" && module && // @ts-ignore
module.hot) {
  const r = window;
  if (typeof r.webpackHotUpdate == "function") {
    const e = r.webpackHotUpdate;
    r.webpackHotUpdate = (...t) => (F = true, setTimeout(() => {
      F = false;
    }, 0), e(...t));
  }
}
function be(r, e, t, n) {
  const o = X(), i = shallowRef(""), a = computed(() => [r, ...e.value]), s = ref([...a.value]), l = (c) => {
    o.cache.update(c, (h) => {
      const [E = 0, C] = h || [];
      return E - 1 === 0 ? (n == null || n(C, false), null) : [E - 1, C];
    });
  };
  watch(() => a.value.slice(), (c, h) => {
    l(h), s.value = c, i.value = c.join("-");
  });
  const u = qe(), f = () => {
    o.cache.update(a.value, (c) => {
      const [h = 0, E] = c || [];
      let C = E;
      E && u && (n == null || n(C, u), C = null);
      const L = C || t();
      return [h + 1, L];
    });
  };
  return watch(i, () => {
    f();
  }, {
    immediate: true
  }), onBeforeUnmount(() => {
    l(a.value);
  }), computed(() => o.cache.get(s.value)[1]);
}
var ne = {};
var Fe = true ? "css-dev-only-do-not-override" : "css";
var A = /* @__PURE__ */ new Map();
function Ue(r) {
  A.set(r, (A.get(r) || 0) + 1);
}
function Ye(r) {
  typeof document < "u" && document.querySelectorAll(`style[${I}="${r}"]`).forEach((t) => {
    var n;
    t[P] === W && ((n = t.parentNode) == null || n.removeChild(t));
  });
}
function Ge(r) {
  A.set(r, (A.get(r) || 0) - 1);
  const e = Array.from(A.keys()), t = e.filter((n) => (A.get(n) || 0) <= 0);
  t.length < e.length && t.forEach((n) => {
    Ye(n), A.delete(n);
  });
}
function yt(r, e, t = ref({})) {
  const n = computed(() => Object.assign({}, ...e.value)), o = computed(() => j(n.value)), i = computed(() => j(t.value.override || ne));
  return be("token", computed(() => [t.value.salt || "", r.value.id, o.value, i.value]), () => {
    const {
      salt: a = "",
      override: s = ne,
      formatToken: l
    } = t.value;
    let f = {
      ...r.value.getDerivativeToken(n.value),
      ...s
    };
    l && (f = l(f));
    const c = He(f, a);
    f._tokenKey = c, Ue(c);
    const h = `${Fe}-${emotion_hash_esm_default(c)}`;
    return f._hashId = h, [f, h];
  }, (a) => {
    Ge(a[0]._tokenKey);
  });
}
var oe = {};
function Ce(r, e) {
  !r && console !== void 0 && console.error(`Warning: ${e}`);
}
function Je(r, e, t) {
  !e && !oe[t] && (r(false, t), oe[t] = true);
}
function Xe(r, e) {
  Je(Ce, r, e);
}
function N(r, e) {
  const { path: t, parentSelectors: n } = e;
  Xe(
    false,
    `[Ant Design CSS-in-JS] ${t ? `Error in ${t}: ` : ""}${r}${n.length ? ` Selector: ${n.join(" | ")}` : ""}`
  );
}
var Qe = (r, e, t) => {
  if (r === "content") {
    const n = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof e != "string" || !["normal", "none", "initial", "inherit", "unset"].includes(e) && !n.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && N(
      `You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${e}"'\`.`,
      t
    );
  }
};
var Ze = (r, e, t) => {
  r === "animation" && t.hashId && e !== "none" && N(
    `You seem to be using hashed animation '${e}', in which case 'animationName' with Keyframe as value is recommended.`,
    t
  );
};
function et(r) {
  var n;
  return (((n = r.match(/:not\(([^)]*)\)/)) == null ? void 0 : n[1]) || "").split(/(\[[^[]*])|(?=[.#])/).filter((o) => o).length > 1;
}
function tt(r) {
  return r.parentSelectors.reduce((e, t) => e ? t.includes("&") ? t.replace(/&/g, e) : `${e} ${t}` : t, "");
}
var St = (r, e, t) => {
  const o = tt(t).match(/:not\([^)]*\)/g) || [];
  o.length > 0 && o.some(et) && N("Concat ':not' selector not support in legacy browsers.", t);
};
var bt = (r, e, t) => {
  switch (r) {
    case "marginLeft":
    case "marginRight":
    case "paddingLeft":
    case "paddingRight":
    case "left":
    case "right":
    case "borderLeft":
    case "borderLeftWidth":
    case "borderLeftStyle":
    case "borderLeftColor":
    case "borderRight":
    case "borderRightWidth":
    case "borderRightStyle":
    case "borderRightColor":
    case "borderTopLeftRadius":
    case "borderTopRightRadius":
    case "borderBottomLeftRadius":
    case "borderBottomRightRadius":
      N(
        `You seem to be using non-logical property '${r}' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        t
      );
      return;
    case "margin":
    case "padding":
    case "borderWidth":
    case "borderStyle":
      if (typeof e == "string") {
        const n = e.split(" ").map((o) => o.trim());
        n.length === 4 && n[1] !== n[3] && N(
          `You seem to be using '${r}' property with different left ${r} and right ${r}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
          t
        );
      }
      return;
    case "clear":
    case "textAlign":
      (e === "left" || e === "right") && N(
        `You seem to be using non-logical value '${e}' of ${r}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        t
      );
      return;
    case "borderRadius":
      typeof e == "string" && e.split("/").map((i) => i.trim()).reduce((i, a) => {
        if (i)
          return i;
        const s = a.split(" ").map((l) => l.trim());
        return s.length >= 2 && s[0] !== s[1] || s.length === 3 && s[1] !== s[2] || s.length === 4 && s[2] !== s[3] ? true : i;
      }, false) && N(
        `You seem to be using non-logical value '${e}' of ${r}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`,
        t
      );
  }
};
var Ct = (r, e, t) => {
  t.parentSelectors.some((n) => n.split(",").some((i) => i.split("&").length > 2)) && N("Should not use more than one `&` in a selector.", t);
};
var ie = Q();
var Ee = "_skip_check_";
function se(r) {
  return serialize(compile(r), stringify).replace(/\{%%%\:[^;];}/g, ";");
}
function rt(r) {
  return typeof r == "object" && r && Ee in r;
}
function nt(r, e, t) {
  if (!e)
    return r;
  const n = `.${e}`, o = t === "low" ? `:where(${n})` : n;
  return r.split(",").map((a) => {
    var f;
    const s = a.trim().split(/\s+/);
    let l = s[0] || "";
    const u = ((f = l.match(/^\w+/)) == null ? void 0 : f[0]) || "";
    return l = `${u}${o}${l.slice(u.length)}`, [l, ...s.slice(1)].join(" ");
  }).join(",");
}
var U = /* @__PURE__ */ new Set();
var Y = (r, e = {}, {
  root: t,
  injectHash: n,
  parentSelectors: o
} = {
  root: true,
  parentSelectors: []
}) => {
  const {
    hashId: i,
    layer: a,
    path: s,
    hashPriority: l,
    transformers: u = [],
    linters: f = []
  } = e;
  let c = "", h = {};
  function E(m) {
    const p = m.getName(i);
    if (!h[p]) {
      const [y] = Y(m.style, e, {
        root: false,
        parentSelectors: o
      });
      h[p] = `@keyframes ${m.getName(i)}${y}`;
    }
  }
  function C(m, p = []) {
    return m.forEach((y) => {
      Array.isArray(y) ? C(y, p) : y && p.push(y);
    }), p;
  }
  if (C(Array.isArray(r) ? r : [r]).forEach((m) => {
    const p = typeof m == "string" && !t ? {} : m;
    if (typeof p == "string")
      c += `${p}
`;
    else if (p._keyframe)
      E(p);
    else {
      const y = u.reduce((g, d) => {
        var S;
        return ((S = d == null ? void 0 : d.visit) == null ? void 0 : S.call(d, g)) || g;
      }, p);
      Object.keys(y).forEach((g) => {
        const d = y[g];
        if (typeof d == "object" && d && (g !== "animationName" || !d._keyframe) && !rt(d)) {
          let S = false, T = g.trim(), $ = false;
          (t || n) && i ? T.startsWith("@") ? S = true : T = nt(g, i, l) : t && !i && (T === "&" || T === "") && (T = "", $ = true);
          const [B, Te] = Y(d, e, {
            root: $,
            injectHash: S,
            parentSelectors: [...o, T]
          });
          h = {
            ...h,
            ...Te
          }, c += `${T}${B}`;
        } else {
          const S = (d == null ? void 0 : d.value) ?? d;
          (typeof d != "object" || !(d != null && d[Ee])) && [Qe, Ze, ...f].forEach((B) => B(g, S, {
            path: s,
            hashId: i,
            parentSelectors: o
          }));
          const T = g.replace(/[A-Z]/g, (B) => `-${B.toLowerCase()}`);
          let $ = S;
          !emotion_unitless_esm_default[g] && typeof $ == "number" && $ !== 0 && ($ = `${$}px`), g === "animationName" && (d != null && d._keyframe) && (E(d), $ = d.getName(i)), c += `${T}:${$};`;
        }
      });
    }
  }), !t)
    c = `{${c}}`;
  else if (a && De()) {
    const m = a.split(",");
    c = `@layer ${m[m.length - 1].trim()} {${c}}`, m.length > 1 && (c = `@layer ${a}{%%%:%}${c}`);
  }
  return [c, h];
};
function ot(r, e) {
  return emotion_hash_esm_default(`${r.join("%")}${e}`);
}
function ae() {
  return null;
}
function Et(r, e, t) {
  const n = X(), o = computed(() => r.value.token._tokenKey), i = computed(() => [o.value, ...r.value.path]);
  let a = ie;
  n.mock !== void 0 && (a = n.mock === "client");
  const s = be(
    "style",
    i,
    // Create cache if needed
    () => {
      const l = e(), {
        hashPriority: u,
        container: f,
        transformers: c,
        linters: h
      } = n, {
        path: E,
        hashId: C,
        layer: L
      } = r.value, [m, p] = Y(l, {
        hashId: C,
        hashPriority: u,
        layer: L,
        path: E.join("-"),
        transformers: c,
        linters: h
      }), y = se(m), g = ot(i.value, y);
      if (a) {
        const d = q(y, g, {
          mark: _,
          prepend: "queue",
          attachTo: f
        });
        d[P] = W, d.setAttribute(I, o.value), d.setAttribute(Pe, i.value.join("|")), Object.keys(p).forEach((S) => {
          U.has(S) || (U.add(S), q(se(p[S]), `_effect-${S}`, {
            mark: _,
            prepend: "queue",
            attachTo: f
          }));
        });
      }
      return [y, o.value, g];
    },
    // Remove cache if no need
    ([, , l], u) => {
      (u || n.autoClear) && ie && ye(l, {
        mark: _
      });
    }
  );
  return (t == null ? void 0 : t.sfc) === true ? defineComponent({
    name: "StyleRegister",
    inheritAttrs: false,
    setup(l, {
      slots: u
    }) {
      return () => {
        var c;
        let f;
        return !n.ssrInline || a || !n.defaultCache ? f = createVNode(ae, null, null) : f = createVNode("style", mergeProps({
          [I]: s.value[1],
          [_]: s.value[2]
        }, {
          innerHTML: s.value[0]
        }), null), createVNode(Fragment, null, [f, (c = u.default) == null ? void 0 : c.call(u)]);
      };
    }
  }) : (l) => {
    let u;
    return !n.ssrInline || a || !n.defaultCache ? u = createVNode(ae, null, null) : u = createVNode("style", mergeProps({
      [I]: s.value[1],
      [_]: s.value[2]
    }, {
      innerHTML: s.value[0]
    }), null), createVNode(Fragment, null, [u, l]);
  };
}
function Tt(r) {
  const e = Array.from(r.cache.keys()).filter((n) => n.startsWith("style%"));
  let t = "";
  return e.forEach((n) => {
    const [o, i, a] = r.cache.get(n)[1];
    t += `<style ${I}="${i}" ${_}="${a}">${o}</style>`;
  }), t;
}
var $t = class {
  constructor(e, t) {
    b(this, "name");
    b(this, "style");
    b(this, "_keyframe", true);
    this.name = e, this.style = t;
  }
  getName(e = "") {
    return e ? `${e}-${this.name}` : this.name;
  }
};
function it(r, e) {
  if (r.length !== e.length)
    return false;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return false;
  return true;
}
var H = class {
  constructor() {
    b(this, "cache");
    b(this, "keys");
    b(this, "cacheCallTimes");
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(e, t = false) {
    let n = { map: this.cache };
    return e.forEach((o) => {
      var i;
      n ? n = (i = n == null ? void 0 : n.map) == null ? void 0 : i.get(o) : n = void 0;
    }), n != null && n.value && t && (n.value[1] = this.cacheCallTimes++), n == null ? void 0 : n.value;
  }
  get(e) {
    var t;
    return (t = this.internalGet(e, true)) == null ? void 0 : t[0];
  }
  has(e) {
    return !!this.internalGet(e);
  }
  set(e, t) {
    if (!this.has(e)) {
      if (this.size() + 1 > H.MAX_CACHE_SIZE + H.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce(
          (i, a) => {
            const [, s] = i;
            return this.internalGet(a)[1] < s ? [a, this.internalGet(a)[1]] : i;
          },
          [this.keys[0], this.cacheCallTimes]
        );
        this.delete(o);
      }
      this.keys.push(e);
    }
    let n = this.cache;
    e.forEach((o, i) => {
      if (i === e.length - 1)
        n.set(o, { value: [t, this.cacheCallTimes++] });
      else {
        const a = n.get(o);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : n.set(o, { map: /* @__PURE__ */ new Map() }), n = n.get(o).map;
      }
    });
  }
  deleteByPath(e, t) {
    var i;
    const n = e.get(t[0]);
    if (t.length === 1)
      return n.map ? e.set(t[0], { map: n.map }) : e.delete(t[0]), (i = n.value) == null ? void 0 : i[0];
    const o = this.deleteByPath(n.map, t.slice(1));
    return (!n.map || n.map.size === 0) && !n.value && e.delete(t[0]), o;
  }
  delete(e) {
    if (this.has(e))
      return this.keys = this.keys.filter(
        (t) => !it(t, e)
      ), this.deleteByPath(this.cache, e);
  }
};
var v = H;
b(v, "MAX_CACHE_SIZE", 20), b(v, "MAX_CACHE_OFFSET", 5);
var le = 0;
var st = class {
  constructor(e) {
    b(this, "derivatives");
    b(this, "id");
    this.derivatives = Array.isArray(e) ? e : [e], this.id = le, e.length === 0 && Ce(
      e.length > 0,
      "[Ant Design CSS-in-JS] Theme should have at least one derivative function."
    ), le += 1;
  }
  getDerivativeToken(e) {
    return this.derivatives.reduce(
      (t, n) => n(e, t),
      void 0
    );
  }
};
var K = new v();
function _t(r) {
  const e = Array.isArray(r) ? r : [r];
  return K.has(e) || K.set(e, new st(e)), K.get(e);
}
function at(r) {
  if (typeof r == "number")
    return [[r], false];
  const e = String(r).trim(), t = e.match(/(.*)(!important)/), n = (t ? t[1] : e).trim().split(/\s+/);
  let o = "", i = 0;
  return [
    n.reduce((a, s) => (s.includes("(") ? (o += s, i += s.split("(").length - 1) : s.includes(")") ? (o += s, i -= s.split(")").length - 1, i === 0 && (a.push(o), o = "")) : i > 0 ? o += s : a.push(s), a), []),
    !!t
  ];
}
function R(r) {
  return r.notSplit = true, r;
}
var lt = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: R(["borderTop", "borderBottom"]),
  borderBlockStart: R(["borderTop"]),
  borderBlockEnd: R(["borderBottom"]),
  borderInline: R(["borderLeft", "borderRight"]),
  borderInlineStart: R(["borderLeft"]),
  borderInlineEnd: R(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};
function M(r, e) {
  let t = r;
  return e && (t = `${t} !important`), { _skip_check_: true, value: t };
}
var wt = {
  visit: (r) => {
    const e = {};
    return Object.keys(r).forEach((t) => {
      const n = r[t], o = lt[t];
      if (o && (typeof n == "number" || typeof n == "string")) {
        const [i, a] = at(n);
        o.length && o.notSplit ? o.forEach((s) => {
          e[s] = M(n, a);
        }) : o.length === 1 ? e[o[0]] = M(n, a) : o.length === 2 ? o.forEach((s, l) => {
          e[s] = M(
            i[l] ?? i[0],
            a
          );
        }) : o.length === 4 ? o.forEach((s, l) => {
          e[s] = M(
            i[l] ?? i[l - 2] ?? i[0],
            a
          );
        }) : e[t] = n;
      } else
        e[t] = n;
    }), e;
  }
};
var O = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function ct(r, e) {
  const t = Math.pow(10, e + 1), n = Math.floor(r * t);
  return Math.round(n / 10) * 10 / t;
}
var Nt = (r = {}) => {
  const { rootValue: e = 16, precision: t = 5, mediaQuery: n = false } = r, o = (a, s) => {
    if (!s)
      return a;
    const l = parseFloat(s);
    return l <= 1 ? a : `${ct(l / e, t)}rem`;
  };
  return { visit: (a) => {
    const s = { ...a };
    return Object.entries(a).forEach(([l, u]) => {
      if (typeof u == "string" && u.includes("px")) {
        const c = u.replace(O, o);
        s[l] = c;
      }
      !emotion_unitless_esm_default[l] && typeof u == "number" && u !== 0 && (s[l] = `${u}px`.replace(O, o));
      const f = l.trim();
      if (f.startsWith("@") && f.includes("px") && n) {
        const c = l.replace(O, o);
        s[c] = s[l], delete s[l];
      }
    }), s;
  } };
};
export {
  $t as Keyframes,
  gt as StyleProvider,
  st as Theme,
  J as createCache,
  _t as createTheme,
  Tt as extractStyle,
  wt as legacyLogicalPropertiesTransformer,
  St as legacyNotSelectorLinter,
  bt as logicalPropertiesLinter,
  Ct as parentSelectorLinter,
  Nt as px2remTransformer,
  yt as useCacheToken,
  X as useStyleInject,
  mt as useStyleProvider,
  Et as useStyleRegister
};
//# sourceMappingURL=@antd-tiny-vue_cssinjs.js.map
