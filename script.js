((e) => {
  const t = Symbol(),
    r = Symbol(),
    n = Symbol(),
    i = Symbol(),
    s = Symbol(),
    o = Symbol(),
    a = Symbol(),
    l = Symbol(),
    c = new Map(),
    $ = {},
    d = new WeakMap(),
    u = [],
    h = {},
    p = new Map(),
    g = new Map(),
    m = {},
    f = new Map(),
    w = new Map(),
    y = "about:blank",
    v = (e) => e.split(","),
    S = (e) => {
      if (((e = h.C + e), new URL(e).origin != location.origin))
        throw "Invalid " + e;
      return e;
    },
    I = v(
      "clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"
    ),
    b = v(
      "childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"
    ),
    M = v("insertBefore,remove,removeChild,replaceChild"),
    T = v("className,width,height,hidden,innerHTML,innerText,textContent"),
    E = v("setAttribute,setAttributeNS,setProperty"),
    N = v("addEventListener,dispatchEvent,removeEventListener"),
    x = N.concat(E, v("add,observe,remove,unobserve")),
    L = /^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,
    C = () => {},
    R = (e) => e.length,
    H = (e) => {
      var t, r, n;
      try {
        const r =
          null === (t = null == e ? void 0 : e.constructor) || void 0 === t
            ? void 0
            : t.name;
        if (r) return r;
      } catch (e) {}
      try {
        const t =
          null ===
            (n =
              null ===
                (r = null == e ? void 0 : e.__zone_symbol__originalInstance) ||
              void 0 === r
                ? void 0
                : r.constructor) || void 0 === n
            ? void 0
            : n.name;
        if (t) return t;
      } catch (e) {}
      return "";
    },
    W = [],
    P = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36),
    A = "text/partytown",
    O = (e, t, r) =>
      Object.defineProperty(e, t, {
        ...r,
        configurable: !0,
      }),
    j = (e, t) =>
      O(e, "name", {
        value: t,
      }),
    k = (e, t, r) => O(e.prototype, t, r),
    D = (e, t) => Object.defineProperties(e.prototype, t),
    U = (e, t, r) =>
      k(e, t, {
        value: r,
        writable: !0,
      }),
    _ = (e, t) => t in e[o],
    B = (e, t) => e[o][t],
    F = (e, t, r) => (e[o][t] = r),
    V = (e, t, r, n, i) => (
      !(i = c.get(t)) && r && m[e] && ((i = m[e].k(r, t, n)), c.set(t, i)), i
    ),
    z = (e, t) => U(e, "nodeType", t),
    X = (e, t) =>
      t.map((t) =>
        k(e, t, {
          get() {
            let e = q(this, t),
              r = w.get(e);
            return r || ((r = de(this, [t])), w.set(e, r)), r;
          },
        })
      ),
    q = (e, n, i) =>
      [
        e[t],
        e[r],
        n,
        ...(i || W).map((e) => String(e && e[t] ? e[r] : e)),
      ].join("."),
    G = (e, t) =>
      v(t).map((t) =>
        k(e, t, {
          get() {
            return _(this, t) || F(this, t, de(this, [t])), B(this, t);
          },
          set(e) {
            B(this, t) !== e && ue(this, [t], e), F(this, t, e);
          },
        })
      ),
    J = (e) =>
      I.map((t) =>
        k(e, t, {
          get() {
            const e = f.get(q(this, t));
            if ("number" == typeof e) return e;
            const r = de(this, [t], I);
            return r && "object" == typeof r
              ? (Object.entries(r).map(([e, t]) => f.set(q(this, e), t)), r[t])
              : r;
          },
        })
      ),
    Z = (e, t) =>
      t.map((t) => {
        e.prototype[t] = function (...e) {
          let r = q(this, t, e),
            n = f.get(r);
          return n || ((n = he(this, [t], e)), f.set(r, n)), n;
        };
      }),
    Y = (e, n, i, s, o) => {
      return void 0 !== i && (o = typeof i)
        ? "string" === o || "boolean" === o || "number" === o || null == i
          ? [0, i]
          : "function" === o
          ? [
              4,
              {
                V: e,
                w: n,
                L:
                  ((a = i),
                  (l = d.get(a)) || (d.set(a, (l = P())), ($[l] = a)),
                  l),
              },
            ]
          : (s = s || new Set()) && Array.isArray(i)
          ? s.has(i)
            ? [1, []]
            : s.add(i) && [1, i.map((t) => Y(e, n, t, s))]
          : "object" === o
          ? i[r]
            ? [3, [i[t], i[r]]]
            : i instanceof Event
            ? [5, Q(e, n, i, !1, s)]
            : K && i instanceof TrustedHTML
            ? [0, i.toString()]
            : i instanceof ArrayBuffer
            ? [8, i]
            : ArrayBuffer.isView(i)
            ? [9, i.buffer, H(i)]
            : [2, Q(e, n, i, !0, s)]
          : void 0
        : i;
      var a, l;
    },
    K = "undefined" != typeof TrustedHTML,
    Q = (e, t, r, n, i, s, o, a) => {
      if (((s = {}), !i.has(r)))
        for (o in (i.add(r), r))
          (a = r[o]), (n || "function" != typeof a) && (s[o] = Y(e, t, a, i));
      return s;
    },
    ee = (e, n) => (e ? Y(e[t], e[r], n) : [0, n]),
    te = (e, t, r, n, i, s, o, a) => {
      if (n) {
        if (((i = n[0]), (s = n[1]), 0 === i || 11 === i || 12 === i)) return s;
        if (4 === i) return ne(r, s);
        if (6 === i)
          return e && r.length > 0 ? (...t) => he(m[e].U, r, t, 1) : C;
        if (3 === i) return re(s);
        if (7 === i) return new se(s.map(re));
        if (10 === i) return new oe(s);
        if (1 === i) return s.map((n) => te(e, t, r, n));
        if (14 === i) return new ie(s);
        for (a in ((o = {}), s)) o[a] = te(e, t, [...r, a], s[a]);
        if (13 === i) return new m[e].U.CSSStyleDeclaration(e, t, r, o);
        if (5 === i) {
          if ("message" === o.type && o.origin) {
            let e,
              t = JSON.stringify(o.data),
              r = u.find((e) => e.m === t);
            r &&
              ((e = m[r.V]), e && ((o.source = e.U), (o.origin = e.E.origin)));
          }
          return new Proxy(new Event(o.type, o), {
            get: (e, t) =>
              t in o
                ? o[t]
                : "function" == typeof e[String(t)]
                ? C
                : e[String(t)],
          });
        }
        if (2 === i) return o;
      }
    },
    re = ([e, t, r]) => (t === e && m[e] ? m[e].U : V(e, t, r)),
    ne = (e, { V: t, w: r, G: n, L: i }) => (
      $[i] ||
        d.set(
          ($[i] = function (...i) {
            const s = V(t, r, n);
            return he(s, e, i);
          }),
          i
        ),
      $[i]
    );
  class ie extends Error {
    constructor(e) {
      super(e.message),
        (this.name = e.name),
        (this.message = e.message),
        (this.stack = e.stack);
    }
  }
  class se {
    constructor(e) {
      (this._ = e).map((e, t) => (this[t] = e));
    }
    entries() {
      return this._.entries();
    }
    forEach(e, t) {
      this._.map(e, t);
    }
    item(e) {
      return this[e];
    }
    keys() {
      return this._.keys();
    }
    get length() {
      return R(this._);
    }
    values() {
      return this._.values();
    }
    [Symbol.iterator]() {
      return this._[Symbol.iterator]();
    }
  }
  const oe = class {
      constructor(e) {
        (this.name = e[0]), (this.value = e[1]);
      }
      get nodeName() {
        return this.name;
      }
      get nodeType() {
        return 2;
      }
    },
    ae = (e, t, r) =>
      console.warn(`Partytown unable to ${e} cross-origin ${t}: ` + r.E),
    le = [],
    ce = (e, n, i, o, a, l) => {
      if (e[s]) {
        if (
          (le.push({
            V: e[t],
            w: e[r],
            a: [...e[s], ...n],
            d: o,
            r: a,
          }),
          3 === i)
        )
          h.K(
            [
              12,
              {
                F: P(),
                Q: [...le],
              },
            ],
            l ? [l instanceof ArrayBuffer ? l : l.buffer] : void 0
          ),
            (le.length = 0);
        else if (1 === i) return $e(!0);
        h.c = setTimeout($e, 20);
      }
    },
    $e = (e) => {
      if ((clearTimeout(h.c), R(le))) {
        const t = le[R(le) - 1],
          r = {
            F: P(),
            Q: [...le],
          };
        if (((le.length = 0), e)) {
          const e = ((e, t) => {
              const r = new XMLHttpRequest();
              return (
                r.open("POST", S("proxytown"), !1),
                r.send(JSON.stringify(t)),
                JSON.parse(r.responseText)
              );
            })(0, r),
            n = e.z,
            i = te(t.V, t.w, t.a, e.M);
          if (e.p) {
            if (n) return Promise.reject(e.p);
            throw new Error(e.p);
          }
          return n ? Promise.resolve(i) : i;
        }
        h.K([12, r]);
      }
    },
    de = (e, t, r, n) =>
      h.i.get && (n = h.i.get(ge(e, t))) !== a
        ? n
        : (n = ce(e, t, 1, void 0, r)),
    ue = (e, t, r, n) => {
      if (h.i.set) {
        if (
          (n = h.i.set({
            value: r,
            prevent: l,
            ...ge(e, t),
          })) === l
        )
          return;
        n !== a && (r = n);
      }
      T.some((e) => t.includes(e)) && (f.clear(), t[t.length - 1]),
        (t = [...t, ee(e, r), 0]),
        ce(e, t, 2);
    },
    he = (e, t, r, n, i, s, o, l) =>
      h.i.apply &&
      (o = h.i.apply({
        args: r,
        ...ge(e, t),
      })) !== a
        ? o
        : ((l = t[R(t) - 1]),
          (t = [...t, ee(e, r)]),
          (n = n || (x.includes(l) ? 2 : 1)),
          "setAttribute" === l && _(e, r[0])
            ? F(e, r[0], r[1])
            : M.includes(l)
            ? (f.clear(), w.clear())
            : E.includes(l) && ((n = 2), f.clear()),
          (o = ce(e, t, n, i, void 0, s))),
    pe = (e, t, r) => {
      ce(e, [1, t, ee(e, r)], 1);
    },
    ge = (e, r) => ({
      name: r.join("."),
      continue: a,
      nodeName: e[n],
      constructor: H(e),
      instance: e,
      window: m[e[t]].U,
    }),
    me = (e, t, r, n, i) => {
      let s,
        o,
        a = (t) => ((t = r.get(e.origin)) || r.set(e.origin, (t = [])), t),
        l = (e) => a().findIndex((t) => t[fe] === e),
        c = {
          getItem: (e) => ((s = l(e)), s > -1 ? a()[s][we] : null),
          setItem(r, o) {
            (s = l(r)),
              s > -1 ? (a()[s][we] = o) : a().push([r, o]),
              n ? he(e, [t, "setItem"], [r, o], 2) : ae("set", t, i);
          },
          removeItem(r) {
            (s = l(r)),
              s > -1 && a().splice(s, 1),
              n ? he(e, [t, "removeItem"], [r], 2) : ae("remove", t, i);
          },
          key: (e) => ((o = a()[e]), o ? o[fe] : null),
          clear() {
            (a().length = 0), n ? he(e, [t, "clear"], W, 2) : ae("clear", t, i);
          },
          get length() {
            return a().length;
          },
        };
      e[t] = new Proxy(c, {
        get: (e, t) => (Reflect.has(e, t) ? Reflect.get(e, t) : e.getItem(t)),
        set: (e, t, r) => (e.setItem(t, r), !0),
        has: (e, t) =>
          !!Reflect.has(e, t) ||
          ("string" == typeof t && null !== e.getItem(t)),
        deleteProperty: (e, t) => (e.removeItem(t), !0),
      });
    },
    fe = 0,
    we = 1,
    ye = (e, t, r) => {
      e[r] = j(
        class extends t {
          constructor(e, t, r, i) {
            return (
              super(e, t, r, i || {}),
              new Proxy(this, {
                get: (e, t) =>
                  e[t]
                    ? e[t]
                    : (e[t] ||
                        "string" != typeof t ||
                        e[n][t] ||
                        (e[n][t] = de(e, [t])),
                      e[n][t]),
                set: (e, t, r) => ((e[n][t] = r), ue(e, [t], r), f.clear(), !0),
              })
            );
          }
          setProperty(...e) {
            (this[n][e[0]] = e[1]),
              he(this, ["setProperty"], e, 2),
              e[0],
              f.clear();
          }
          getPropertyValue(e) {
            return this[e];
          }
          removeProperty(e) {
            let t = this[n][e];
            return (
              he(this, ["removeProperty"], [e], 2),
              f.clear(),
              (this[n][e] = void 0),
              t
            );
          }
        },
        r
      );
    },
    ve = (e, t) => {
      e[t] = j(
        class {
          constructor(e) {
            this.ownerNode = e;
          }
          get cssRules() {
            const e = this.ownerNode;
            return new Proxy(
              {},
              {
                get(t, r) {
                  const n = String(r);
                  return "item" === n
                    ? (t) => Ie(e, t)
                    : "length" === n
                    ? Se(e).length
                    : isNaN(n)
                    ? t[r]
                    : Ie(e, n);
                },
              }
            );
          }
          insertRule(e, t) {
            const r = Se(this.ownerNode);
            return (
              (t = void 0 === t ? 0 : t) >= 0 &&
                t <= r.length &&
                (he(this.ownerNode, ["sheet", "insertRule"], [e, t], 2),
                r.splice(t, 0, 0)),
              this.ownerNode,
              f.clear(),
              t
            );
          }
          deleteRule(e) {
            he(this.ownerNode, ["sheet", "deleteRule"], [e], 2),
              Se(this.ownerNode).splice(e, 1),
              this.ownerNode,
              f.clear();
          }
          get type() {
            return "text/css";
          }
        },
        t
      );
      const r = {
        sheet: {
          get() {
            return new e[t](this);
          },
        },
      };
      D(e.HTMLStyleElement, r);
    },
    Se = (e, t) => (
      (t = B(e, 2)) || ((t = de(e, ["sheet", "cssRules"])), F(e, 2, t)), t
    ),
    Ie = (e, t, r) => (
      0 === (r = Se(e))[t] &&
        (r[t] = de(e, ["sheet", "cssRules", parseInt(t, 10)])),
      r[t]
    ),
    be = "0.7.4",
    Me = (e, t, r, n, i) => {
      try {
        (e.l = t), Te(e, r);
      } catch (e) {
        console.error(r, e), (i = String(e.stack || e));
      }
      return (e.l = ""), i;
    },
    Te = (e, t, r) => {
      (e.N = 1),
        (t =
          `with(this){${t
            .replace(/\bthis\b/g, "(thi$(this)?window:this)")
            .replace(
              /\/\/# so/g,
              "//Xso"
            )}\n;function thi$(t){return t===this}};${(h.i.globalFns || [])
            .filter((e) => /[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))
            .map((e) => `(typeof ${e}=='function'&&(this.${e}=${e}))`)
            .join(";")};` + (r ? "\n//# sourceURL=" + r : "")),
        e.A || (t = t.replace(/.postMessage\(/g, `.postMessage('${e.V}',`)),
        new Function(t).call(e.U),
        (e.N = 0);
    },
    Ee = (e, t, r) => {
      (r = B(e, t)) &&
        setTimeout(() =>
          r.map((e) =>
            e({
              type: t,
            })
          )
        );
    },
    Ne = (e, t, r, n, i, s) => {
      for (n = e.E; !n.host && ((n = (e = m[e.J]).E), e.V !== e.J); );
      return (
        (i = new URL(t || "", n)),
        r && h.i.resolveUrl && (s = h.i.resolveUrl(i, n, r)) ? s : i
      );
    },
    xe = (e, t, r) => Ne(e, t, r) + "",
    Le = () => `<script src="${S("partytown.js?v=" + be)}"><\/script>`,
    Ce = (e) =>
      class {
        constructor() {
          (this.s = ""), (this.l = []), (this.e = []), (this.style = {});
        }
        get src() {
          return this.s;
        }
        set src(t) {
          (this.s = t),
            fetch(xe(e, t, "image"), {
              mode: "no-cors",
              credentials: "include",
              keepalive: !0,
            }).then(
              (e) => {
                e.ok || 0 === e.status
                  ? this.l.map((e) =>
                      e({
                        type: "load",
                      })
                    )
                  : this.e.map((e) =>
                      e({
                        type: "error",
                      })
                    );
              },
              () =>
                this.e.forEach((e) =>
                  e({
                    type: "error",
                  })
                )
            );
        }
        addEventListener(e, t) {
          "load" === e && this.l.push(t), "error" === e && this.e.push(t);
        }
        get onload() {
          return this.l[0];
        }
        set onload(e) {
          this.l = [e];
        }
        get onerror() {
          return this.e[0];
        }
        set onerror(e) {
          this.e = [e];
        }
      },
    Re = {
      addEventListener: {
        value(...e) {
          const t = e[0],
            r = B(this, t) || [];
          r.push(e[1]), F(this, t, r);
        },
      },
      async: {
        get: C,
        set: C,
      },
      defer: {
        get: C,
        set: C,
      },
      onload: {
        get() {
          let e = B(this, "load");
          return (e && e[0]) || null;
        },
        set(e) {
          F(this, "load", e ? [e] : null);
        },
      },
      onerror: {
        get() {
          let e = B(this, "error");
          return (e && e[0]) || null;
        },
        set(e) {
          F(this, "error", e ? [e] : null);
        },
      },
      getAttribute: {
        value(e) {
          return "src" === e ? this.src : he(this, ["getAttribute"], [e]);
        },
      },
      setAttribute: {
        value(e, t) {
          He.includes(e) ? (this[e] = t) : he(this, ["setAttribute"], [e, t]);
        },
      },
    },
    He = v("src,type"),
    We = (e, t) => {
      const r = {
        innerHTML: Pe,
        innerText: Pe,
        src: {
          get() {
            return B(this, 4) || "";
          },
          set(e) {
            const r = xe(t, e, null),
              n = h.i;
            (e = xe(t, e, "script")),
              F(this, 4, e),
              ue(this, ["src"], e),
              r !== e && ue(this, ["dataset", "ptsrc"], r),
              this.type &&
                n.loadScriptsOnMainThread &&
                n.loadScriptsOnMainThread.some((t) => t === e) &&
                ue(this, ["type"], "text/javascript");
          },
        },
        textContent: Pe,
        type: {
          get() {
            return de(this, ["type"]);
          },
          set(e) {
            Ae(e) || (F(this, 5, e), ue(this, ["type"], e));
          },
        },
        ...Re,
      };
      D(e, r);
    },
    Pe = {
      get() {
        const e = de(this, ["type"]);
        return Ae(e) ? B(this, 3) || "" : de(this, ["innerHTML"]);
      },
      set(e) {
        F(this, 3, e);
      },
    },
    Ae = (e) => !e || "text/javascript" === e,
    Oe = (e, i, s) => {
      const o = h.i,
        a = j(
          class extends s {
            appendChild(e) {
              return this.insertBefore(e, null);
            }
            get href() {}
            set href(e) {}
            insertBefore(e, s) {
              var a, l;
              const c = (e[t] = this[t]),
                $ = e[r],
                d = e[n],
                u = "SCRIPT" === d,
                p = "IFRAME" === d;
              if (u) {
                const t = B(e, 3),
                  r = B(e, 5);
                if (t) {
                  if (Ae(r)) {
                    const r = e.id;
                    if (
                      r &&
                      (null ===
                        (l =
                          null === (a = o.loadScriptsOnMainThread) ||
                          void 0 === a
                            ? void 0
                            : a.includes) || void 0 === l
                        ? void 0
                        : l.call(a, r))
                    )
                      ue(e, ["type"], "text/javascript");
                    else {
                      const r = Me(i, $, t, 0, ""),
                        n = r ? "pterror" : "ptid",
                        s = r || $;
                      ue(e, ["type"], A + "-x"), ue(e, ["dataset", n], s);
                    }
                  }
                  ue(e, ["innerHTML"], t);
                }
              }
              if ((he(this, ["insertBefore"], [e, s], 2), p)) {
                const t = B(e, 0);
                if (t && t.startsWith("javascript:")) {
                  const e = t.split("javascript:")[1];
                  Me(i, $, e, 0, "");
                }
                ((e, t) => {
                  let r,
                    n,
                    i = 0,
                    s = () => {
                      m[e] && m[e].x && !m[e].y
                        ? ((r = B(t, 1) ? "error" : "load"),
                          (n = B(t, r)),
                          n &&
                            n.map((e) =>
                              e({
                                type: r,
                              })
                            ))
                        : i++ > 2e3
                        ? ((n = B(t, "error")),
                          n &&
                            n.map((e) =>
                              e({
                                type: "error",
                              })
                            ))
                        : setTimeout(s, 9);
                    };
                  s();
                })($, e);
              }
              return u && ($e(!0), h.K([7, c])), e;
            }
            get nodeName() {
              return "#s" === this[n] ? "#document-fragment" : this[n];
            }
            get nodeType() {
              return 3;
            }
            get ownerDocument() {
              return i.n;
            }
          },
          "Node"
        );
      X(
        a,
        v(
          "childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling"
        )
      ),
        (e.Node = a);
    },
    je = v("AUDIO,CANVAS,VIDEO"),
    ke = v("Audio,MediaSource"),
    De = (e, r, n) => {
      D(e, {
        body: {
          get: () => r.e,
        },
        cookie: {
          get() {
            return r.A ? de(this, ["cookie"]) : (ae("get", "cookie", r), "");
          },
          set(e) {
            r.A && ue(this, ["cookie"], e);
          },
        },
        createElement: {
          value(e) {
            if (((e = e.toUpperCase()), !L.test(e))) throw e + " not valid";
            const r = "IFRAME" === e,
              n = this[t],
              i = (r ? "f_" : "") + P();
            he(this, ["createElement"], [e], 2, i);
            const s = V(n, i, e);
            if (r)
              (et(
                {
                  V: i,
                  J: n,
                  S: y,
                },
                !0
              ).U.fetch = fetch),
                ue(s, ["srcdoc"], Le());
            else if ("SCRIPT" === e) {
              const e = B(s, 5);
              Ae(e) && ue(s, ["type"], A);
            }
            return s;
          },
        },
        createElementNS: {
          value(e, r) {
            const n = P(),
              i = V(this[t], n, r, e);
            return he(this, ["createElementNS"], [e, r], 2, n), i;
          },
        },
        createTextNode: {
          value(e) {
            const r = this[t],
              n = P(),
              i = V(r, n, "#text");
            return he(this, ["createTextNode"], [e], 2, n), i;
          },
        },
        createEvent: {
          value: (e) => new Event(e),
        },
        currentScript: {
          get() {
            return r.l ? V(this[t], r.l, "SCRIPT") : null;
          },
        },
        defaultView: {
          get: () => (n ? null : r.U),
        },
        documentElement: {
          get: () => r.o,
        },
        getElementsByTagName: {
          value(e) {
            return "BODY" === (e = e.toUpperCase())
              ? [r.e]
              : "HEAD" === e
              ? [r.s]
              : he(this, ["getElementsByTagName"], [e]);
          },
        },
        head: {
          get: () => r.s,
        },
        images: {
          get() {
            return de(this, ["images"]);
          },
        },
        implementation: {
          get() {
            return {
              hasFeature: () => !0,
              createHTMLDocument: (e) => {
                const t = P();
                return (
                  he(this, ["implementation", "createHTMLDocument"], [e], 1, {
                    V: t,
                  }),
                  et(
                    {
                      V: t,
                      J: t,
                      S: r.E + "",
                      T: "hidden",
                    },
                    !0,
                    !0
                  ).n
                );
              },
            };
          },
        },
        location: {
          get: () => r.E,
          set(e) {
            r.E.href = e + "";
          },
        },
        nodeType: {
          value: 9,
        },
        parentNode: {
          value: null,
        },
        parentElement: {
          value: null,
        },
        readyState: {
          value: "complete",
        },
        visibilityState: {
          get: () => r.T || "visible",
        },
      }),
        G(e, "compatMode,referrer,forms");
    },
    Ue = (e, t) => {
      D(e, {
        parentElement: {
          get() {
            return this.parentNode;
          },
        },
        parentNode: {
          get: () => t.o,
        },
      });
    },
    _e = (e, t) => {
      D(e, {
        localName: {
          get() {
            return this[n].toLowerCase();
          },
        },
        namespaceURI: {
          get() {
            return this[i] || "http://www.w3.org/1999/xhtml";
          },
        },
        nodeType: {
          value: 1,
        },
        tagName: {
          get() {
            return this[n];
          },
        },
      }),
        X(e, b),
        G(e, "id"),
        J(t),
        Z(t, v("getClientRects,getBoundingClientRect"));
    },
    Be = (e, t) => {
      const r = {};
      v("hash,host,hostname,href,origin,pathname,port,protocol,search").map(
        (e) => {
          r[e] = {
            get() {
              let r,
                n = B(this, 4);
              return (
                "string" != typeof n &&
                  ((r = de(this, ["href"])),
                  F(this, 4, r),
                  (n = new URL(r)[e])),
                Ne(t, n, null)[e]
              );
            },
            set(r) {
              let n;
              if ("href" === e)
                if (
                  ((e) => {
                    try {
                      return new URL(e), !0;
                    } catch (e) {
                      return !1;
                    }
                  })(r)
                )
                  n = new URL(r);
                else {
                  const e = t.E.href;
                  (n = Ne(t, e, null)), (n.href = new URL(r + "", n.href));
                }
              else (n = Ne(t, this.href, null)), (n[e] = r);
              F(this, 4, n.href), ue(this, ["href"], n.href);
            },
          };
        }
      ),
        D(e, r);
    },
    Fe = (e, t) => {
      const r = {
        contentDocument: {
          get() {
            return qe(this).n;
          },
        },
        contentWindow: {
          get() {
            return qe(this).U;
          },
        },
        src: {
          get() {
            let e = B(this, 0);
            return e && e.startsWith("javascript:")
              ? e
              : ((e = qe(this).E.href), e.startsWith("about:") ? "" : e);
          },
          set(e) {
            if (e)
              if (e.startsWith("javascript:")) F(this, 0, e);
              else if (!e.startsWith("about:")) {
                let t,
                  r = new XMLHttpRequest(),
                  n = qe(this);
                (n.E.href = e = xe(n, e, "iframe")),
                  (n.y = 1),
                  F(this, 1, void 0),
                  r.open("GET", e, !1),
                  r.send(),
                  (t = r.status),
                  t > 199 && t < 300
                    ? (ue(
                        this,
                        ["srcdoc"],
                        `<base href="${e}">` +
                          r.responseText.replace(ze, (e, t) => {
                            const r = [];
                            let n,
                              i = !1;
                            for (; (n = Xe.exec(t)); ) {
                              let [e] = n;
                              e.startsWith("type=") &&
                                ((i = !0),
                                (e = e.replace(
                                  /(application|text)\/javascript/,
                                  A
                                ))),
                                r.push(e);
                            }
                            return (
                              i || r.push('type="text/partytown"'),
                              `<script ${r.join(" ")}>`
                            );
                          }) +
                          Le()
                      ),
                      $e(!0),
                      h.K([7, n.V]))
                    : (F(this, 1, t), (n.y = 0));
              }
          },
        },
        ...Re,
      };
      D(e, r);
    },
    Ve = "((?:\\w|-)+(?:=(?:(?:\\w|-)+|'[^']*'|\"[^\"]*\")?)?)",
    ze = new RegExp(`<script\\s*((${Ve}\\s*)*)>`, "mg"),
    Xe = new RegExp(Ve, "mg"),
    qe = (e) => {
      const n = e[r];
      return (
        m[n] ||
          et(
            {
              V: n,
              J: e[t],
              S: de(e, ["src"]) || y,
            },
            !0
          ),
        m[n]
      );
    },
    Ge = (e) => {
      const t = (e, t) => {
          const { a: r, b: n, c: i, d: s, e: o, f: a } = he(e, [t], W);
          return new DOMMatrixReadOnly([r, n, i, s, o, a]);
        },
        r = {
          ...e,
          getCTM: {
            value: function () {
              return t(this, "getCTM");
            },
          },
          getScreenCTM: {
            value: function () {
              return t(this, "getScreenCTM");
            },
          },
        };
      D(e, r);
    },
    Je = (e, t) => {
      e.NamedNodeMap = j(
        class extends t {
          constructor(e, t, r) {
            return (
              super(e, t, r),
              new Proxy(this, {
                get(e, t) {
                  const r = Ye[t];
                  return r ? r.bind(e, [t]) : de(e, [t]);
                },
                set(e, t, r) {
                  if (Ye[t])
                    throw new Error(
                      "Can't set read-only property: " + String(t)
                    );
                  return ue(e, [t], r), !0;
                },
              })
            );
          }
        },
        "NamedNodeMap"
      );
    };
  function Ze(e, ...t) {
    return he(this, e, t, 1);
  }
  const Ye = {
      getNamedItem: Ze,
      getNamedItemNS: Ze,
      item: Ze,
      removeNamedItem: Ze,
      removeNamedItemNS: Ze,
      setNamedItem: Ze,
      setNamedItemNS: Ze,
    },
    Ke = (a, l, c, $, d, f) => {
      let w, I, M;
      const T = class {
          constructor(e, l, c, $, d) {
            (this[t] = e || a),
              (this[r] = l || w || P()),
              (this[s] = c || []),
              (this[n] = $ || I),
              (this[i] = d || M),
              (this[o] = {}),
              (w = I = M = void 0);
          }
        },
        E = new (j(
          class extends URL {
            assign() {}
            reload() {}
            replace() {}
          },
          "Location"
        ))(c),
        x = E.origin === h.I || E.origin === y,
        L = l === a,
        C = {},
        W = () => {
          let e,
            t,
            r = [];
          for (e in m) (t = m[e]), t.J !== a || t.B || r.push(t);
          return r;
        },
        A = j(
          class extends T {
            constructor() {
              super(a, a);
              let n,
                i,
                o = this,
                c = 0,
                u = () => {
                  c ||
                    ((h.u ||
                      ((e.g = [de, ue, he, pe, D, P, t, r, s]),
                      h.t(S("partytown-media.js?v=" + be)),
                      (h.u = e.f),
                      delete e.f),
                    h.u)(T, Y, C, o, ke),
                    (c = 1));
                },
                m = {},
                y = (e, t, r) => {
                  je.includes(e) && u();
                  const n = m[e] ? m[e] : e.includes("-") ? m.UNKNOWN : m.I;
                  return (w = t), (I = e), (M = r), new n();
                };
              var N, R;
              if (
                ((o.Window = A),
                (o.name = name + a),
                Oe(o, C, T),
                ((e) => {
                  e.NodeList = j(se, "NodeList");
                })(o),
                Je(o, T),
                ye(o, T, "CSSStyleDeclaration"),
                ((e, t, r) => {
                  e[r] = j(
                    class extends t {
                      now() {
                        return performance.now();
                      }
                    },
                    r
                  );
                })(o, T, "Performance"),
                ((e, t) => {
                  const r = "customElements",
                    n = new Map();
                  e.customElements = {
                    define(i, s, o) {
                      n.set(i, s), (t[i.toUpperCase()] = s);
                      const a = [s.name, s.observedAttributes];
                      he(e, [r, "define"], [i, a, o]);
                    },
                    get: (t) => n.get(t) || he(e, [r, "get"], [t]),
                    whenDefined: (t) =>
                      n.has(t)
                        ? Promise.resolve()
                        : he(e, [r, "whenDefined"], [t]),
                    upgrade: (t) => he(e, [r, "upgrade"], [t]),
                  };
                })(o, m),
                h.v.map(([e, t, n, i, l]) => {
                  const c = Qe[e]
                      ? q
                      : "EventTarget" === t
                      ? Y
                      : "Object" === t
                      ? T
                      : o[t],
                    $ = (o[e] = j(
                      12 === i
                        ? class extends T {
                            constructor(...t) {
                              super(), pe(this, e, t);
                            }
                          }
                        : o[e] || class extends c {},
                      e
                    ));
                  l && (m[l] = $),
                    n.map(([e, t, n]) => {
                      e in $.prototype ||
                        e in c.prototype ||
                        ("string" == typeof t
                          ? k($, e, {
                              get() {
                                if (!_(this, e)) {
                                  const n = this[r],
                                    i = [...this[s], e],
                                    l = o[t];
                                  l && F(this, e, new l(a, n, i));
                                }
                                return B(this, e);
                              },
                              set(t) {
                                F(this, e, t);
                              },
                            })
                          : 5 === t
                          ? U($, e, function (...t) {
                              return he(this, [e], t);
                            })
                          : t > 0 &&
                            (void 0 !== n
                              ? U($, e, n)
                              : k($, e, {
                                  get() {
                                    return de(this, [e]);
                                  },
                                  set(t) {
                                    return ue(this, [e], t);
                                  },
                                })));
                    });
                }),
                v(
                  "atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval"
                ).map((t) => {
                  delete A.prototype[t],
                    t in o ||
                      ((n = e[t]),
                      null != n &&
                        (o[t] =
                          "function" != typeof n ||
                          n.toString().startsWith("class")
                            ? n
                            : n.bind(e)));
                }),
                Object.getOwnPropertyNames(e).map((t) => {
                  t in o || (o[t] = e[t]);
                }),
                ke.map((e) =>
                  O(o, e, {
                    get: () => (u(), o[e]),
                  })
                ),
                "trustedTypes" in e && (o.trustedTypes = e.trustedTypes),
                _e(o.Element, o.HTMLElement),
                De(o.Document, C, f),
                (N = o.DocumentFragment),
                z(N, 11),
                X(N, b),
                Be(o.HTMLAnchorElement, C),
                (R = o.HTMLFormElement),
                D(R, {}),
                G(R, "elements"),
                Fe(o.HTMLIFrameElement),
                We(o.HTMLScriptElement, C),
                Ge(o.SVGGraphicsElement),
                Ue(o.HTMLHeadElement, C),
                Ue(o.HTMLBodyElement, C),
                ((e, t) => {
                  D(e, {
                    parentElement: {
                      value: null,
                    },
                    parentNode: {
                      get: () => t.n,
                    },
                  });
                })(o.HTMLHtmlElement, C),
                ve(o, "CSSStyleSheet"),
                z(o.Comment, 8),
                z(o.DocumentType, 10),
                Object.assign(C, {
                  V: a,
                  J: l,
                  U: new Proxy(o, {
                    get: (e, t) => {
                      var r;
                      if ("string" != typeof t || isNaN(t))
                        return (
                          null === (r = h.i.mainWindowAccessors) || void 0 === r
                            ? void 0
                            : r.includes(t)
                        )
                          ? de(this, [t])
                          : e[t];
                      {
                        let e = W()[t];
                        return e ? e.U : void 0;
                      }
                    },
                    has: () => !0,
                  }),
                  n: y("#document", a + ".d"),
                  o: y("HTML", a + ".e"),
                  s: y("HEAD", a + ".h"),
                  e: y("BODY", a + ".b"),
                  E: E,
                  T: $,
                  A: x,
                  B: L,
                  k: y,
                }),
                (o.requestAnimationFrame = (e) =>
                  setTimeout(() => e(performance.now()), 9)),
                (o.cancelAnimationFrame = (e) => clearTimeout(e)),
                (o.requestIdleCallback = (e, t) => (
                  (t = Date.now()),
                  setTimeout(
                    () =>
                      e({
                        didTimeout: !1,
                        timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
                      }),
                    1
                  )
                )),
                (o.cancelIdleCallback = (e) => clearTimeout(e)),
                me(o, "localStorage", p, x, C),
                me(o, "sessionStorage", g, x, C),
                x || (o.indexeddb = void 0),
                d)
              )
                (i = {}),
                  (o.history = {
                    pushState(e) {
                      i = e;
                    },
                    replaceState(e) {
                      i = e;
                    },
                    get state() {
                      return i;
                    },
                    length: 0,
                  }),
                  (o.indexeddb = void 0);
              else {
                const e = o.history.pushState.bind(o.history),
                  t = o.history.replaceState.bind(o.history);
                (o.history.pushState = (t, r, n) => {
                  !1 !== C.$propagateHistoryChange$ && e(t, r, n);
                }),
                  (o.history.replaceState = (e, r, n) => {
                    !1 !== C.$propagateHistoryChange$ && t(e, r, n);
                  });
              }
              o.Worker = void 0;
            }
            addEventListener(...e) {
              "load" === e[0]
                ? C.N &&
                  setTimeout(() =>
                    e[1]({
                      type: "load",
                    })
                  )
                : he(this, ["addEventListener"], e, 2);
            }
            get body() {
              return C.e;
            }
            get document() {
              return C.n;
            }
            get documentElement() {
              return C.o;
            }
            fetch(e, t) {
              return (
                (e =
                  "string" == typeof e || e instanceof URL ? String(e) : e.url),
                fetch(xe(C, e, "fetch"), t)
              );
            }
            get frames() {
              return C.U;
            }
            get frameElement() {
              return L ? null : V(l, a, "IFRAME");
            }
            get globalThis() {
              return C.U;
            }
            get head() {
              return C.s;
            }
            get length() {
              return W().length;
            }
            get location() {
              return E;
            }
            set location(e) {
              E.href = e + "";
            }
            get Image() {
              return Ce(C);
            }
            get navigator() {
              return ((e) => {
                let t,
                  r = {
                    sendBeacon: (t, r) => {
                      try {
                        return (
                          fetch(xe(e, t, null), {
                            method: "POST",
                            body: r,
                            mode: "no-cors",
                            keepalive: !0,
                          }),
                          !0
                        );
                      } catch (e) {
                        return console.error(e), !1;
                      }
                    },
                  };
                for (t in navigator) r[t] = navigator[t];
                return r;
              })(C);
            }
            get origin() {
              return E.origin;
            }
            set origin(e) {}
            get parent() {
              for (let e in m) if (m[e].V === l) return m[e].U;
              return C.U;
            }
            postMessage(...e) {
              m[e[0]] &&
                (R(u) > 50 && u.splice(0, 5),
                u.push({
                  V: e[0],
                  m: JSON.stringify(e[1]),
                }),
                (e = e.slice(1))),
                he(this, ["postMessage"], e, 3);
            }
            get self() {
              return C.U;
            }
            get top() {
              for (let e in m) if (m[e].B) return m[e].U;
              return C.U;
            }
            get window() {
              return C.U;
            }
            get XMLHttpRequest() {
              const e = XMLHttpRequest,
                t = String(e),
                r = j(
                  class extends e {
                    open(...e) {
                      (e[1] = xe(C, e[1], "xhr")), super.open(...e);
                    }
                    set withCredentials(e) {}
                    toString() {
                      return t;
                    }
                  },
                  H(e)
                );
              return (r.prototype.constructor.toString = () => t), r;
            }
          },
          "Window"
        ),
        q = class extends T {
          constructor(e, t, r, n) {
            return (
              super(e, t, r, n),
              new Proxy(this, {
                get: (e, t) => de(e, [t]),
                set: (e, t, r) => (ue(e, [t], r), !0),
              })
            );
          }
        },
        Y = class extends T {};
      return (
        N.map(
          (e) =>
            (Y.prototype[e] = function (...t) {
              return he(this, [e], t, 2);
            })
        ),
        G(A, "devicePixelRatio"),
        J(A),
        Z(A, ["getComputedStyle"]),
        new A(),
        C
      );
    },
    Qe = {
      DOMStringMap: 1,
      NamedNodeMap: 1,
    },
    et = ({ V: e, J: t, S: r, T: n }, i, s) => (
      m[e] || (m[e] = Ke(e, t, r, n, i, s)), h.K([7, e]), m[e]
    ),
    tt = [],
    rt = (t) => {
      const r = t.data,
        n = r[0],
        i = r[1];
      if (h.x)
        if (7 === n)
          (async (e) => {
            let t,
              r = e.V,
              n = e.w,
              i = V(r, n, "SCRIPT"),
              s = e.j,
              o = e.S,
              a = e.H,
              l = "",
              c = m[r],
              $ = [
                "text/jscript",
                "text/javascript",
                "text/x-javascript",
                "application/javascript",
                "application/x-javascript",
                "text/ecmascript",
                "text/x-ecmascript",
                "application/ecmascript",
              ];
            if (o)
              try {
                if (
                  ((o = Ne(c, o, "script") + ""),
                  F(i, 4, o),
                  (t = await fetch(o)),
                  t.ok)
                ) {
                  let e = t.headers.get("content-type");
                  $.some((t) => {
                    var r, n, i;
                    return null ===
                      (i =
                        null === (r = null == e ? void 0 : e.toLowerCase) ||
                        void 0 === r
                          ? void 0
                          : (n = r.call(e)).includes) || void 0 === i
                      ? void 0
                      : i.call(n, t);
                  }) && ((s = await t.text()), (c.l = n), Te(c, s, a || o)),
                    Ee(i, "load");
                } else (l = t.statusText), Ee(i, "error");
              } catch (e) {
                console.error(e), (l = String(e.stack || e)), Ee(i, "error");
              }
            else s && (l = Me(c, n, s, 0, l));
            (c.l = ""), h.K([6, r, n, l]);
          })(i);
        else if (9 === n)
          (({ V: e, w: t, L: r, R: n, b: i }) => {
            if ($[r])
              try {
                $[r].apply(te(e, t, [], n), te(e, t, [], i));
              } catch (e) {
                console.error(e);
              }
          })(i);
        else if (10 === n)
          (({ V: e, q: t, b: r }) => {
            try {
              let n = m[e].U,
                i = 0,
                s = R(t);
              for (; i < s; i++)
                i + 1 < s
                  ? (n = n[t[i]])
                  : n[t[i]].apply(n, te(null, e, [], r));
            } catch (e) {
              console.error(e);
            }
          })(i);
        else if (5 === n) et(i);
        else if (8 === n) (m[i].x = 1), (m[i].y = 0);
        else if (14 === n) m[i].T = r[2];
        else if (13 === n) {
          const e = i.V,
            t = m[e];
          (t.E.href = i.url),
            (function (e, t, r) {
              const n = t.U.history;
              switch (r.type) {
                case 0:
                  t.$propagateHistoryChange$ = !1;
                  try {
                    n.pushState(r.state, "", r.newUrl);
                  } catch (e) {}
                  t.$propagateHistoryChange$ = !0;
                  break;
                case 1:
                  t.$propagateHistoryChange$ = !1;
                  try {
                    n.replaceState(r.state, "", r.newUrl);
                  } catch (e) {}
                  t.$propagateHistoryChange$ = !0;
              }
            })(i.V, t, i);
        } else
          15 === n &&
            ((e, t, r, n, i) => {
              const s = V(t, r);
              s && "function" == typeof s[n] && s[n].apply(s, i);
            })(...r);
      else
        1 === n
          ? (((t) => {
              const r = (h.i = JSON.parse(t.i)),
                n = t.I;
              (h.t = importScripts.bind(e)),
                (h.v = t.v),
                (h.C = t.C),
                (h.I = n),
                (h.K = postMessage.bind(e)),
                (h.P = t.P),
                p.set(n, t.D),
                g.set(n, t.O),
                (e.importScripts = void 0),
                delete e.postMessage,
                delete e.WorkerGlobalScope,
                v("resolveUrl,get,set,apply").map((e) => {
                  r[e] && (r[e] = new Function("return " + r[e])());
                });
            })(i),
            h.K([2]))
          : 3 === n
          ? ((h.v = [...h.v, ...i]),
            (h.x = 1),
            h.K([4]),
            [...tt].map(rt),
            (tt.length = 0))
          : tt.push(t);
    };
  (e.onmessage = rt), postMessage([0]);
})(self);

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "We",
  "You",
  "Like",
  "It",
  "Please",
  "Give",
  "a Love",
  ":)",
  "by @DotOnion"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();
