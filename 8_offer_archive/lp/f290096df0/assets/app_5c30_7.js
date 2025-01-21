(function(t) {
    function e(e) {
        for (var n, s, o = e[0], u = e[1], l = e[2], c = 0, d = []; c < o.length; c++) s = o[c], a[s] && d.push(a[s][0]), a[s] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
        h && h(e);
        while (d.length) d.shift()();
        return r.push.apply(r, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], n = !0, s = 1; s < i.length; s++) {
                var o = i[s];
                0 !== a[o] && (n = !1)
            }
            n && (r.splice(e--, 1), t = u(u.s = i[0]))
        }
        return t
    }
    var n = {},
        s = {
            app: 0
        },
        a = {
            app: 0
        },
        r = [];

    function o(t) {
        return u.p + "js/" + ({
            emoji: "emoji",
            "final-page": "final-page",
            popover: "popover",
            swiper: "swiper"
        }[t] || t) + "." + {
            "chunk-16ac490e": "88a8cb6d",
            emoji: "31ce88d5",
            "final-page": "4e0c103c",
            popover: "50f258eb",
            swiper: "97a2a693"
        }[t] + ".js"
    }

    function u(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, u), i.l = !0, i.exports
    }
    u.e = function(t) {
        var e = [],
            i = {
                "chunk-16ac490e": 1,
                emoji: 1,
                "final-page": 1,
                popover: 1,
                swiper: 1
            };
        s[t] ? e.push(s[t]) : 0 !== s[t] && i[t] && e.push(s[t] = new Promise(function(e, i) {
            for (var n = "css/" + ({
                    emoji: "emoji",
                    "final-page": "final-page",
                    popover: "popover",
                    swiper: "swiper"
                }[t] || t) + "." + {
                    "chunk-16ac490e": "f48dc168",
                    emoji: "8ac079ad",
                    "final-page": "113b87e6",
                    popover: "6f8113bb",
                    swiper: "48ae4259"
                }[t] + ".css", a = u.p + n, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                var l = r[o],
                    c = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (c === n || c === a)) return e()
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
                l = d[o], c = l.getAttribute("data-href");
                if (c === n || c === a) return e()
            }
            var h = document.createElement("link");
            h.rel = "stylesheet", h.type = "text/css", h.onload = e, h.onerror = function(e) {
                var n = e && e.target && e.target.src || a,
                    r = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = n, delete s[t], h.parentNode.removeChild(h), i(r)
            }, h.href = a;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(h)
        }).then(function() {
            s[t] = 0
        }));
        var n = a[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise(function(e, i) {
                    n = a[t] = [e, i]
                });
                e.push(n[2] = r);
                var l, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = o(t), l = function(e) {
                    c.onerror = c.onload = null, clearTimeout(d);
                    var i = a[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                s = e && e.target && e.target.src,
                                r = new Error("Loading chunk " + t + " failed.\n(" + n + ": " + s + ")");
                            r.type = n, r.request = s, i[1](r)
                        }
                        a[t] = void 0
                    }
                };
                var d = setTimeout(function() {
                    l({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = l, document.head.appendChild(c)
            }
        return Promise.all(e)
    }, u.m = t, u.c = n, u.d = function(t, e, i) {
        u.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, u.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, u.t = function(t, e) {
        if (1 & e && (t = u(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (u.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) u.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, u.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return u.d(e, "a", e), e
    }, u.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, u.p = "//cdn.mrqz.me/", u.oe = function(t) {
        throw console.error(t), t
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var d = 0; d < l.length; d++) e(l[d]);
    var h = c;
    r.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "0089": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "whitelabel"
                }, [t.isWhiteLabelActive ? t._e() : i("div", {
                    staticClass: "whitelabel__container"
                }, [t._m(0), i("span", {
                    staticClass: "whitelabel__desktop"
                }, [t._v(t._s(t.$t("Сделано в")) + " ")]), i("a", {
                    attrs: {
                        href: t.link,
                        target: "_blank"
                    }
                }, [t._v("Marquiz")])])])
            },
            s = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "whitelabel__icon-bg"
                }, [n("img", {
                    staticClass: "whitelabel__icon",
                    attrs: {
                        src: i("e7f0")
                    }
                })])
            }],
            a = i("cebc"),
            r = i("2f62"),
            o = {
                name: "WhiteLabel",
                computed: Object(a["a"])({}, Object(r["d"])(["lang"]), Object(r["d"])("quiz", ["id"]), Object(r["c"])("quiz", ["isWhiteLabelActive"]), {
                    link: function() {
                        return this.lang && "ru" !== this.lang ? "https://www.marquiz.io?utm_source=widget&utm_content=".concat(this.id) : "https://www.marquiz.ru?utm_source=widget&utm_content=".concat(this.id)
                    }
                })
            },
            u = o,
            l = (i("ef71"), i("2877")),
            c = Object(l["a"])(u, n, s, !1, null, "44fad548", null);
        e["a"] = c.exports
    },
    "0149": function(t, e, i) {
        "use strict";
        var n = i("1ad3"),
            s = i.n(n);
        s.a
    },
    "0287": function(t, e, i) {
        "use strict";
        var n = i("337b"),
            s = i.n(n);
        s.a
    },
    "0378": function(t, e, i) {},
    "039b": function(t, e, i) {},
    "0a62": function(t, e, i) {},
    "0bfd": function(t, e, i) {
        "use strict";
        var n = i("d152"),
            s = i.n(n);
        s.a
    },
    "0d14": function(t, e, i) {
        "use strict";
        var n = i("cb5b"),
            s = i.n(n);
        s.a
    },
    "103e": function(t, e, i) {
        "use strict";
        var n = i("e9ba"),
            s = i.n(n);
        s.a
    },
    "13c6": function(t, e, i) {},
    1467: function(t, e, i) {},
    "14b5": function(t, e, i) {},
    1542: function(t, e, i) {},
    1765: function(t, e, i) {
        "use strict";
        var n = i("501b"),
            s = i.n(n);
        s.a
    },
    "1ad3": function(t, e, i) {},
    "1b62": function(t, e, i) {},
    "1b6a": function(t, e, i) {
        "use strict";
        var n = i("1467"),
            s = i.n(n);
        s.a
    },
    "1f69": function(t, e, i) {
        "use strict";
        var n = i("13c6"),
            s = i.n(n);
        s.a
    },
    "222e": function(t, e, i) {
        "use strict";
        var n = i("aa5f"),
            s = i.n(n);
        s.a
    },
    2524: function(t, e, i) {},
    "26df": function(t, e, i) {},
    "279f": function(t, e, i) {},
    "27bb": function(t, e, i) {},
    2921: function(t, e, i) {},
    2958: function(t, e, i) {
        "use strict";
        var n = i("1542"),
            s = i.n(n);
        s.a
    },
    "297b": function(t, e, i) {
        "use strict";
        var n = i("e521"),
            s = i.n(n);
        s.a
    },
    "2adf": function(t, e, i) {
        "use strict";
        var n = i("a500"),
            s = i.n(n);
        s.a
    },
    "2b3b": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "discount-label"
                }, [i("div", {
                    staticClass: "discount-label__circle"
                }), i("div", {
                    staticClass: "discount-label__value"
                }, [t._t("default", [t._v(t._s(t.value))])], 2)])
            },
            s = [],
            a = (i("c5f6"), {
                props: {
                    value: [String, Number]
                }
            }),
            r = a,
            o = (i("8b38"), i("2877")),
            u = Object(o["a"])(r, n, s, !1, null, null, null);
        e["a"] = u.exports
    },
    "2b5e": function(t, e, i) {},
    "2c09": function(t, e, i) {
        "use strict";
        var n = i("5f64"),
            s = i.n(n);
        s.a
    },
    "2c32": function(t, e, i) {},
    "2c90": function(t, e, i) {},
    "31f0": function(t, e, i) {},
    "337b": function(t, e, i) {},
    "3a5e": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        name: t.animation
                    }
                }, [i("div", {
                    staticClass: "loading"
                }, [t.isActive ? i("div", {
                    staticClass: "loading-overlay is-active",
                    class: {
                        "is-full-page": t.isFullPage
                    }
                }, [i("div", {
                    staticClass: "loading-background",
                    on: {
                        click: t.cancel
                    }
                }, [i("SvgIcon", {
                    staticClass: "loading-icon2",
                    attrs: {
                        name: "loading",
                        color: "var(--color)"
                    }
                }), t._t("default")], 2)]) : t._e()])])
            },
            s = [],
            a = i("4955"),
            r = {
                extends: a["Loading"]
            },
            o = r,
            u = (i("7275"), i("2877")),
            l = Object(u["a"])(o, n, s, !1, null, null, null);
        e["a"] = l.exports
    },
    "3b39": function(t, e, i) {
        "use strict";
        var n = i("453c"),
            s = i.n(n);
        s.a
    },
    "3bc9": function(t, e, i) {},
    "3cf9": function(t, e, i) {
        "use strict";
        var n = i("d6d0"),
            s = i.n(n);
        s.a
    },
    "3f6f": function(t, e, i) {
        "use strict";
        var n = i("57d9"),
            s = i.n(n);
        s.a
    },
    "42c1": function(t, e) {
        function i(t) {
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        i.keys = function() {
            return []
        }, i.resolve = i, t.exports = i, i.id = "42c1"
    },
    "453c": function(t, e, i) {},
    "45d5": function(t, e, i) {},
    "496c": function(t, e, i) {},
    "4a1b": function(t, e, i) {
        "use strict";
        var n = i("279f"),
            s = i.n(n);
        s.a
    },
    "4ad0": function(t, e, i) {
        "use strict";
        var n = i("6617"),
            s = i.n(n);
        s.a
    },
    "4d55": function(t, e, i) {
        "use strict";
        var n = i("039b"),
            s = i.n(n);
        s.a
    },
    "4dbf": function(t, e, i) {
        t.exports = i.p + "img/catalog.150ec5dc.png"
    },
    "4eee": function(t, e, i) {},
    "501b": function(t, e, i) {},
    5308: function(t, e, i) {
        "use strict";
        i("ac6a");
        var n = i("c64e"),
            s = i("a78e"),
            a = 2;
        e["a"] = {
            values: {
                uuid: null,
                answerId: null
            },
            init: function(t) {
                this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.quizId = t;
                try {
                    this.set("answerId", s.get(this.getCookieName("answerId"))), this.set("uuid", s.get(this.getCookieName("uuid"))), this.values.uuid || this.set("uuid", n())
                } catch (e) {
                    this.set("uuid", n())
                }
            },
            getCookieName: function(t) {
                return "".concat(t, "_").concat(this.quizId)
            },
            get: function(t) {
                return t ? this.values[t] : this.values
            },
            set: function(t, e) {
                this.values[t] = e, e ? s.set(this.getCookieName(t), e, {
                    expires: this.expires
                }) : s.remove(this.getCookieName(t))
            },
            updateSessionLiveTime: function() {
                for (var t in this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.values) this.values[t] && this.set(t, this.values[t])
            }
        }
    },
    "534a": function(t, e, i) {
        "use strict";
        var n = i("2c32"),
            s = i.n(n);
        s.a
    },
    "55f6": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "progress-bar-linear",
                    class: t.classes
                }, ["progress-bar" === t.type ? i("div", {
                    staticClass: "progress-bar-linear__label"
                }, [t._v(t._s(t.$t("Готово")) + ":"), i("span", [t._v(t._s(t.percent) + "%")])]) : t._e(), i("div", {
                    staticClass: "progress-bar-linear__field"
                }, [i("span", {
                    style: "width: " + t.percent + "%"
                }), t.hasMark ? i("div", {
                    staticClass: "progress-bar-linear__field-mark",
                    style: {
                        left: t.percent + "%"
                    }
                }, [i("div", {
                    staticClass: "progress-bar-linear__field-percent"
                }, [t._v(t._s(t.percent) + "%")]), i("div", {
                    staticClass: "progress-bar-linear__field-pointer"
                })]) : t._e()])])
            },
            s = [],
            a = (i("c5f6"), i("8a30")),
            r = i.n(a),
            o = {
                name: "ProgressBarLinear",
                props: {
                    type: {
                        type: String,
                        default: "progress-bar"
                    },
                    percent: Number,
                    darkColor: Boolean
                },
                computed: {
                    classes: function() {
                        return {
                            "progress-bar-linear_dynamic": "dynamic-progress-bar" === this.type,
                            "progress-bar-linear_dark": this.darkColor,
                            "progress-bar-linear_mobile": "mobile" === this.type
                        }
                    },
                    hasMark: function() {
                        return r()(["dynamic-progress-bar", "final"], this.type)
                    }
                }
            },
            u = o,
            l = (i("a7b4"), i("2877")),
            c = Object(l["a"])(u, n, s, !1, null, null, null);
        e["a"] = c.exports
    },
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("386d"), i("cadf"), i("551c"), i("f751"), i("097d"), i("54ba");
        var n = i("2b0e"),
            s = i("8a03"),
            a = i.n(s),
            r = (i("ac6a"), i("28a5"), i("9b02")),
            o = i.n(r),
            u = i("5f34"),
            l = i("55d9"),
            c = i("6612"),
            d = i.n(c),
            h = i("16e8"),
            f = i("ac22"),
            m = i.n(f),
            p = i("bf0f"),
            g = i.n(p);
        n["default"].use(l["a"]), u["a"].use(m.a).use(h["a"]).init({
            backend: {
                loadPath: function(t, e) {
                    return "/static/locales/".concat(t, "/").concat(e, ".json")
                }
            },
            preload: [],
            nsSeparator: !1,
            keySeparator: !1,
            fallbackLng: {
                uk: ["ru"],
                be: ["ru"],
                kz: ["ru"],
                default: ["en"]
            },
            load: "languageOnly",
            cleanCode: !0,
            interpolation: {
                prefix: "{",
                suffix: "}",
                format: function(t, e, i) {
                    if (e.split("|").length >= 2) {
                        var n = e.split(" | ");
                        return n.forEach(function(e, n) {
                            var s = e.trim();
                            t = u["a"].options.interpolation.format(t, s, i)
                        }), t
                    }
                    if ("bold" === e) return "<b>" + t + "</b>";
                    if ("rub" === e) return t + "₽";
                    if ("number" === typeof t || "number" === e.split(" ")[0]) {
                        var s = e.split(" ")[1];
                        return "number" !== e || s || (s = "0,0"), d()(t).format(s)
                    }
                }
            },
            debug: !1
        }), u["a"].addResourceBundle("en", "translation", g.a.en.translation, !0, !0), u["a"].addResourceBundle("ru", "translation", g.a.ru.translation, !0, !0), u["a"].on("languageChanged", function(t) {
            if (t) {
                var e = {
                        uk: "uk-ua",
                        nl: "nl-nl",
                        be: "ru",
                        kz: "ru",
                        hy: "ru"
                    },
                    i = o()(e, t, t.split("-")[0]);
                try {
                    d.a.localeData(i), d.a.locale(i)
                } catch (n) {
                    console.error("marquiz-error", "Unexisting numeral locale", i), d.a.locale("en")
                }
            }
        });
        var b = new l["a"](u["a"]),
            v = i("2f62"),
            _ = (i("5df3"), i("96cf"), i("3b8d")),
            y = i("cebc"),
            w = (i("b54a"), i("6cd4")),
            k = i.n(w),
            C = i("4cfe"),
            x = i.n(C),
            q = i("b8ce"),
            D = i.n(q),
            S = i("b047c"),
            $ = i.n(S),
            A = i("0f40"),
            T = i.n(A),
            O = i("345a"),
            P = i.n(O),
            z = i("0f5c"),
            M = i.n(z),
            E = i("c5a2"),
            B = i.n(E),
            V = i("8a30"),
            L = i.n(V),
            I = i("93c6"),
            j = i.n(I),
            F = i("6373"),
            R = i.n(F),
            N = i("13ea"),
            H = i.n(N),
            Q = i("6747"),
            U = i.n(Q),
            W = i("0644"),
            Y = i.n(W),
            G = i("2769"),
            Z = i.n(G),
            K = i("c228"),
            J = i.n(K),
            X = i("dd61"),
            tt = i.n(X),
            et = i("ba84"),
            it = i.n(et),
            nt = i("2f9f"),
            st = i.n(nt),
            at = i("2442"),
            rt = i.n(at),
            ot = i("9380"),
            ut = i.n(ot),
            lt = i("51f5"),
            ct = i.n(lt),
            dt = i("c641"),
            ht = i.n(dt),
            ft = i("78b0"),
            mt = i.n(ft),
            pt = (i("6b54"), i("a481"), i("4917"), {
                getUserTimezone: function() {
                    var t = (new Date).getTimezoneOffset() / 60;
                    return 0 === t ? 0 : t < 0 ? Math.abs(t) : -1 * t
                },
                getFormattedDate: function(t, e) {
                    return t.isRange ? t.hasTime ? this._getRangeDateWithTime(e) : this._getRangeDate(e) : t.hasTime ? this._getDateWithTime(e) : this.getLocaleFormattedDate(e, this.localeDateString())
                },
                getPartsDate: function(t, e) {
                    var i = e || "dd.mm.yyyy",
                        n = t.match(/(\d+)/g),
                        s = 0,
                        a = {};
                    return i.replace(/(yyyy|dd|mm)/g, function(t) {
                        a[t] = s, s += 1
                    }), null !== n ? {
                        year: n[a.yyyy],
                        month: n[a.mm],
                        day: n[a.dd]
                    } : null
                },
                getDateObjectByParts: function(t) {
                    var e = "yyyy-mm-dd";
                    return e = e.replace("yyyy", t.year), e = e.replace("mm", t.month), e = e.replace("dd", t.day), new Date(e)
                },
                getLocaleFormattedDate: function(t, e) {
                    var i = e,
                        n = t.getDate();
                    n = n.toString().length > 1 ? n : "0".concat(n.toString()), i = i.replace("dd", n);
                    var s = t.getMonth() + 1;
                    s = s.toString().length > 1 ? s : "0".concat(s.toString()), i = i.replace("mm", s);
                    var a = t.getFullYear();
                    return i = i.replace("yyyy", a), i
                },
                localeDateString: function() {
                    var t = window.navigator ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage : null;
                    return t = void 0 !== t && null !== t ? t.substring(0, 2) : "ru", this._locales[t] || "dd.mm.yyyy"
                },
                _getRangeDateWithTime: function(t) {
                    var e = o()(t, "from", !1) ? this.getLocaleFormattedDate(t.from, this.localeDateString()) : "",
                        i = o()(t, "to", !1) ? this.getLocaleFormattedDate(t.to, this.localeDateString()) : "",
                        n = this._getTimeFrom(t),
                        s = this._getTimeTo(t);
                    return "".concat(e, " ").concat(n, " - ").concat(i, " ").concat(s)
                },
                _getRangeDate: function(t) {
                    var e = o()(t, "from", !1) ? this.getLocaleFormattedDate(t.from, this.localeDateString()) : "",
                        i = o()(t, "to", !1) ? this.getLocaleFormattedDate(t.to, this.localeDateString()) : "";
                    return "".concat(e, " - ").concat(i)
                },
                _getTimeFrom: function(t) {
                    if (null !== o()(t, "timeFrom", null)) {
                        var e = "0".concat(t.timeFrom.getHours()).slice(-2),
                            i = "0".concat(t.timeFrom.getMinutes()).slice(-2);
                        return "".concat(e, ":").concat(i)
                    }
                    return ""
                },
                _getTimeTo: function(t) {
                    if (null !== o()(t, "timeTo", null)) {
                        var e = "0".concat(t.timeTo.getHours()).slice(-2),
                            i = "0".concat(t.timeTo.getMinutes()).slice(-2);
                        return "".concat(e, ":").concat(i)
                    }
                    return ""
                },
                _getDateWithTime: function(t) {
                    var e = o()(t, "time", !1) ? "0".concat(t.time.getHours()).slice(-2) : "",
                        i = o()(t, "time", !1) ? "0".concat(t.time.getMinutes()).slice(-2) : "",
                        n = "".concat(e, ":").concat(i),
                        s = o()(t, "date", !1) ? this.getLocaleFormattedDate(t.date, this.localeDateString()) : "";
                    return "".concat(s, " ").concat(n)
                },
                _locales: {
                    en: "mm/dd/yyyy",
                    fr: "dd/mm/yyyy",
                    it: "dd/mm/yyyy",
                    ja: "yyyy/mm/dd",
                    ru: "dd.mm.yyyy",
                    uk: "dd.mm.yyyy",
                    be: "dd.mm.yyyy",
                    hy: "dd.mm.yyyy",
                    zh: "yyyy/mm/dd",
                    de: "dd.mm.yyyy",
                    es: "dd/mm/yyyy",
                    kk: "dd.mm.yyyy"
                }
            }),
            gt = i("72bf"),
            bt = i.n(gt),
            vt = (i("c5f6"), i("d173")),
            _t = i.n(vt),
            yt = i("e636"),
            wt = i.n(yt);

        function kt(t, e, i) {
            var n = e.a;
            "one-image" === t.type && (t.select = "one"), "one" === t.select && (n = [n], i.union = "or"), !0 === t.other && ht()(n, function(e, i) {
                Z()(t.answers, {
                    id: e
                }) || (n[i] = "OTHER")
            });
            var s = _t()(i.answer, n).length;
            if (i.union || (i.union = "or"), x()(i.unionExtra) && "only" === i.union ? (i.union = "and", i.unionExtra = !1) : x()(i.unionExtra) && (i.unionExtra = !0), !0 === i.unionExtra) {
                if ("or" === i.union && s) return !0;
                if ("and" === i.union && s >= i.answer.length) return !0
            } else if (!1 === i.unionExtra) {
                if ("or" === i.union && s && n.length === s) return !0;
                if ("and" === i.union && s === i.answer.length && s === n.length) return !0
            }
            return !1
        }

        function Ct(t, e, i) {
            var n = o()(t, "options.isRange", !1),
                s = Number(o()(i, "answer.0")),
                a = Number(o()(i, "answer.1"));
            if (n) {
                var r = e.a;
                switch (i.operator) {
                    case "in":
                        if (r.from >= s && r.to <= a) return !0;
                        break;
                    case "contain":
                        if (r.from < s && r.to > a) return !0;
                        break;
                    case "out":
                        if (r.from < s && r.to < s) return !0;
                        if (r.from > a && r.to > a) return !0;
                        break;
                    case "touch":
                        if (r.from <= s && r.to >= s) return !0;
                        if (r.from <= a && r.to >= a) return !0;
                        break;
                    default:
                        break
                }
            } else {
                var u = Number(e.a);
                switch (i.operator) {
                    case "less":
                        if (u <= s) return !0;
                        break;
                    case "more":
                        if (u >= s) return !0;
                        break;
                    case "equal":
                        if (u === s) return !0;
                        break;
                    case "between":
                        if (u >= s && u <= a) return !0;
                        break;
                    default:
                        break
                }
            }
            return !1
        }

        function xt(t, e, i) {
            var n = String(e.a).split(" "),
                s = 0;
            return ht()(i.answer, function(t) {
                ht()(n, function(e) {
                    var i = wt()(t.trim(), e.trim());
                    i > s && (s = i)
                })
            }), "contain" === i.operator ? s > .7 : s < .7
        }
        var qt = function(t, e, i) {
                var n = "show" === o()(t, "mode", "show"),
                    s = o()(t, "conditions", []),
                    a = o()(t, "union", "or");
                if (!H()(s)) {
                    var r = [];
                    return s.forEach(function(t, n) {
                        if (x()(t.answer)) return !1;
                        var s = Z()(i, {
                                q: t.question
                            }),
                            a = Z()(e, {
                                id: t.question
                            });
                        if (s) switch (a.type) {
                            case "slider":
                                Ct(a, s, t) && r.push(n);
                                break;
                            case "input":
                                xt(a, s, t) && r.push(n);
                                break;
                            default:
                                kt(a, s, t) && r.push(n);
                                break
                        }
                    }), "and" === a && r.length === s.length ? !!n && r.length : "or" === a && r.length ? !!n && r.length : !n
                }
            },
            Dt = i("6217"),
            St = function(t) {
                (function(t, e, i, n, s) {
                    t.roistatProjectId = s, t.roistatHost = n;
                    var a = "https:" == e.location.protocol ? "https://" : "http://",
                        r = /^.*roistat_visit=[^;]+(.*)?$/.test(e.cookie) ? "/dist/module.js" : "/api/site/1.0/" + s + "/init?referrer=" + encodeURIComponent(e.location.href),
                        o = e.createElement(i);
                    o.charset = "UTF-8", o.async = 1, o.src = a + n + r;
                    var u = e.getElementsByTagName(i)[0];
                    u.parentNode.insertBefore(o, u)
                })(window, document, "script", "cloud.roistat.com", t)
            },
            $t = i("a78e"),
            At = i.n($t),
            Tt = i("2d30"),
            Ot = i.n(Tt),
            Pt = i("d225"),
            zt = i("b0b4"),
            Mt = i("42454"),
            Et = i.n(Mt),
            Bt = i("2768"),
            Vt = i.n(Bt),
            Lt = i("9948"),
            It = i.n(Lt),
            jt = i("1a8c"),
            Ft = i.n(jt),
            Rt = i("5ddc"),
            Nt = i.n(Rt),
            Ht = {
                valid: function(t) {
                    try {
                        return JSON.parse(t), !0
                    } catch (e) {
                        return !1
                    }
                }
            },
            Qt = function() {
                function t() {
                    Object(Pt["a"])(this, t), this.params = {}, this.load(), this.watch()
                }
                return Object(zt["a"])(t, [{
                    key: "get",
                    value: function() {
                        return Object(y["a"])({}, this.params)
                    }
                }, {
                    key: "load",
                    value: function() {
                        this.loadParamsFromQS()
                    }
                }, {
                    key: "loadParamsFromQS",
                    value: function() {
                        var t = this,
                            e = bt.a.parse(window.location.search);
                        this.add("href", e.href || window.location.href);
                        var i = {};
                        for (var n in e)
                            if (Nt()(n, "utm_")) {
                                if (String(n).indexOf(".") >= 0) continue;
                                i[R()(n, "utm_", "")] = e[n]
                            }
                        i.campaign && (i.name = i.campaign), this.add("utm", i), ["_ga", "yclid", "ymclid", "gclid", "fbclid", "ad"].forEach(function(i) {
                            t.add(i, e[i])
                        }), e.params && Ht.valid(e.params) && this.add(JSON.parse(e.params)), e.cookies && Ht.valid(e.cookies) && this.add("cookies", JSON.parse(e.cookies))
                    }
                }, {
                    key: "add",
                    value: function(t, e) {
                        var i = this;
                        if (Ft()(t) && x()(e) && !H()(t)) It()(t, function(t, e) {
                            return i.add(e, t)
                        });
                        else if (Ft()(e) && this.add(), (!Ft()(e) || !H()(e)) && !Vt()(e)) {
                            var n = e;
                            Ft()(n) && (n = Et()(o()(this.params, t, {}), n)), M()(this.params, t, n)
                        }
                    }
                }, {
                    key: "watch",
                    value: function() {
                        var t = this;
                        window.addEventListener("message", function(e) {
                            "addParam" === e.data.method && t.add(e.data.data)
                        }, !1)
                    }
                }]), t
            }(),
            Ut = new Qt,
            Wt = i("b4d8"),
            Yt = i("4ec3"),
            Gt = i.n(Yt),
            Zt = Object(Wt["create"])({
                objectHash: function(t, e) {
                    return t.id || t.key || e
                },
                cloneDiffValues: Y.a,
                matchByPosition: !0
            });
        Zt.processor.pipes.diff.replace("arrays", Gt.a.diffFilter), Zt.processor.pipes.patch.replace("arrays", Gt.a.patchFilter).replace("arraysCollectChildren", Gt.a.collectChildrenPatchFilter), Zt.processor.pipes.reverse.replace("arrays", Gt.a.reverseFilter).replace("arraysCollectChildren", Gt.a.collectChildrenReverseFilter);
        var Kt = Zt,
            Jt = function(t, e) {
                return B()(t.answers, function(i, n) {
                    var s = Object(Dt["b"])(e, t.id, n.id);
                    return s > 0 && i.push(n.id), i
                }, [])
            },
            Xt = function(t, e, i) {
                var n = ut()(t, function(t) {
                    if (!H()(t)) {
                        var n = Z()(i, function(e) {
                            return e.q === t.q
                        });
                        if (n) {
                            var s = Z()(e, function(t) {
                                    return t.id === n.q
                                }),
                                a = "many" === s.select;
                            return a ? _t()(n.a, t.a).length === n.a.length : L()(n.a, t.a)
                        }
                    }
                });
                return n
            },
            te = {
                discountInterval: null
            },
            ee = bt.a.parse(window.location.search),
            ie = function(t) {
                return mt()(t, {
                    length: 80
                })
            },
            ne = {
                USD: "$",
                RUB: "₽",
                EUR: "€",
                UAH: "₴",
                BYB: "Br",
                KZT: "₸",
                CNY: "¥",
                CZK: "Kč",
                HUF: "Ft",
                PLN: "zł"
            },
            se = {
                namespaced: !0,
                state: {
                    loaded: !1,
                    id: null,
                    isDemo: !1,
                    questions: [],
                    activeQuestion: 0,
                    leadForm: !1,
                    leadFormDisabled: !1,
                    results: {},
                    isResultsShow: !1,
                    isResultShow: !1,
                    isResultLoaderShow: !1,
                    mode: ee.mode || "modal",
                    isWidgetOpen: !1,
                    info: {
                        title: "",
                        name: "",
                        assistant: {
                            name: "",
                            title: "",
                            avatar: ""
                        },
                        form: {
                            text: "",
                            fields: ["name", "phone", "email"],
                            thanks: "",
                            extra: ""
                        },
                        marketing: {
                            discount: {}
                        },
                        design: {
                            colors: {
                                main: "#ca2f94",
                                buttonTextColor: "#fff"
                            },
                            buttonStyle: "round",
                            progressType: "progress-bar",
                            animationStyle: "rightLeft",
                            theme: "light",
                            font: {
                                name: "Gilroy"
                            }
                        }
                    },
                    settings: {
                        enabled: !0,
                        rateLimit: !0
                    },
                    whiteLabelDate: null,
                    discount: 0,
                    fixedDiscount: 0,
                    answers: [],
                    answersId: [],
                    analyticUnique: !1,
                    analyticFinished: !1,
                    quizStarted: !1,
                    hint: null,
                    selectedResult: null,
                    domain: null,
                    isQuestionSwipeHintShow: !0,
                    projectId: null,
                    redirectUrl: null,
                    isResultAnimation: !1,
                    currency: "RUB",
                    redirectParamsEnabled: !1
                },
                getters: {
                    bonusesTitle: function(t) {
                        return o()(t, "info.marketing.bonusesTitle", !1)
                    },
                    isBonusesEnabled: function(t) {
                        return o()(t, "info.marketing.isBonusesEnabled", !0) && !!o()(t, "info.marketing.bonuses", []).length
                    },
                    hasCondition: function(t) {
                        var e = !1;
                        return ht()(t.questions, function(t) {
                            if (o()(t, "display.conditions", []).length > 0) return e = !0, !1
                        }), e
                    },
                    getQuestion: function(t) {
                        return t.questions[t.activeQuestion]
                    },
                    countQuestions: function(t, e) {
                        return e.countingQuestions.length
                    },
                    countAllQuestions: function(t) {
                        return t.questions.length
                    },
                    questionNumber: function(t, e) {
                        if (!e.getQuestion) return null;
                        if (e.getQuestion.isNotCounting) {
                            var i = ct()(e.activeQuestions, {
                                    id: e.getQuestion.id
                                }),
                                n = ut()(e.activeQuestions, function(t, e) {
                                    return !t.isNotCounting && e < i
                                });
                            return rt()(n, function(t) {
                                return !t.isNotCounting
                            }) + 1
                        }
                        return ct()(e.countingQuestions, {
                            id: e.getQuestion.id
                        }) + 1
                    },
                    isIncreasingDiscount: function(t) {
                        var e = o()(t, "info.marketing.discount");
                        return e && "increasing" === e.type
                    },
                    isMeltingDiscount: function(t) {
                        var e = o()(t, "info.marketing.discount");
                        return e && "melting" === e.type
                    },
                    isIncreasingPercentDiscount: function(t) {
                        var e = o()(t, "info.marketing.discount");
                        return e && "increasingPercent" === e.type
                    },
                    getIncreasingDiscountStep: function(t, e) {
                        var i = o()(t, "info.marketing.discount");
                        return o()(i, "value") ? Math.round(o()(i, "value") / e.countQuestions) : o()(i, "percent") ? Math.round(o()(i, "percent") / e.countQuestions) : void 0
                    },
                    currencySymbol: function(t) {
                        return ne[t.currency] || ne.RUB
                    },
                    discountIcon: function(t, e) {
                        return e.isIncreasingPercentDiscount ? "percent" : st()(t.currency)
                    },
                    discountCurrencySymbol: function(t) {
                        return o()(t, "info.marketing.discount.percent") ? "%" : ne[t.currency] || ne.RUB
                    },
                    discountTitle: function(t) {
                        return o()(t, "info.marketing.discount.title", !1)
                    },
                    getLastStep: function(t, e) {
                        return e.countAllQuestions - 1
                    },
                    isVariantsQuestion: function(t, e) {
                        return !o()(e.getQuestion, "type") || it()(["answers", "variants", "images", "select", "one-image", "emoji"], e.getQuestion.type) >= 0
                    },
                    isLastStep: function(t, e) {
                        return t.activeQuestion === e.getLastStep
                    },
                    getAnswerValue: function(t, e) {
                        var i = e.getQuestion;
                        if (!i) return null;
                        var n = e.isVariantsQuestion && "many" === i.select,
                            s = t.answers[t.activeQuestion];
                        return s && s.a && 0 !== s.a.length ? s.a : n ? [] : null
                    },
                    getPassedPercent: function(t, e) {
                        return (e.questionNumber - 1) / e.countQuestions * 100
                    },
                    getIsFilled: function(t, e) {
                        if (!e.getQuestion) return !1;
                        if (it()(["date", "slider"], e.getQuestion.type) >= 0) {
                            var i = e.getAnswerValue,
                                n = o()(e, "getQuestion.options.isRange"),
                                s = o()(e, "getQuestion.options.hasTime");
                            return i && n ? s ? !!i.from && !!i.to : s ? !!i.from && !!i.to && !!i.timeFrom && !!i.timeTo : !!i.from && !!i.to : !(!i || n) && (s ? !!i && !!i.time && !!i.date : !!i)
                        }
                        return "many" === e.getQuestion.select && e.isVariantsQuestion ? !!e.getAnswerValue.length : !!e.getAnswerValue
                    },
                    autoNextQuestion: function(t) {
                        var e = !0;
                        return t.questions.forEach(function(t) {
                            "many" === t.select && (e = !1), t.other && (e = !1), o()(t.options, "hasTime") && (e = !1)
                        }), e
                    },
                    countingQuestions: function(t, e) {
                        return ut()(e.activeQuestions, function(t) {
                            return !t.isNotCounting
                        })
                    },
                    activeQuestions: function(t) {
                        if (!t.answersId.length) return t.questions;
                        var e = tt()(t.questions, function(e, i) {
                            return 0 === i ? e : o()(e, "display.conditions", []).length ? !!qt(e.display, t.questions, t.answersId) && e : e
                        });
                        return J()(e)
                    },
                    activeAnswers: function(t, e) {
                        return ut()(t.answers, function(t) {
                            return !!t && Z()(e.activeQuestions, {
                                title: t.q
                            })
                        })
                    },
                    isWhiteLabelActive: function(t) {
                        return t.whiteLabelDate > new Date
                    },
                    data: function(t, e, i) {
                        var n = Ut.get();
                        t.fixedDiscount && (n.discount = t.fixedDiscount, n.discountType = e.isIncreasingPercentDiscount ? "percent" : "melting", n.discountCurrency = e.discountCurrencySymbol), t.currency && (n.currency = t.currency, n.currencySymbol = e.currencySymbol), n.notify = o()(t, "info.form.sendOnFirstStep", !0) ? "in 2 minutes" : "now", !1 === o()(t, "settings.rateLimit", !0) && (n.rateLimit = !1), "vk" === t.mode && (n.href = null);
                        var s = Y()(e.activeAnswers),
                            a = s.map(function(t, i) {
                                var n = e.activeQuestions[i].type,
                                    s = e.activeQuestions[i].options,
                                    a = e.activeQuestions[i].internalName || !1;
                                return t.t = n, "variants" === n && s.isLong && (U()(t.a) ? t.a = tt()(t.a, ie) : t.a = ie(t.a)), "date" === n && t.a && (t.a = pt.getFormattedDate(s, t.a)), "slider" === n && (s.isRange ? t.a = "".concat(t.a.from, " - ").concat(t.a.to) : t.a = String(t.a)), a && (t.q = a), t
                            }),
                            r = {};
                        if (H()(e.result) || ("content" === e.result.type ? r = {
                                suitable: tt()(e.suitableResults, function(t) {
                                    return {
                                        id: t.id,
                                        title: t.internalName || t.title,
                                        cost: o()(t, "cost", null),
                                        minCost: o()(t, "minCost", null),
                                        maxCost: o()(t, "maxCost", null)
                                    }
                                }),
                                selected: e.result.id
                            } : "redirect" === e.result.type && (r = {
                                suitable: tt()(e.suitableResults, function(t) {
                                    return {
                                        id: t.id,
                                        link: t.link
                                    }
                                }),
                                selected: e.result.id
                            })), t.results && t.results.multiple && (r.ids = tt()(e.suitableResults, "id")), !H()(o()(t, "results.points"))) {
                            var u = Object(Dt["c"])(o()(t, "results.points"), t.answersId);
                            !1 !== u && (r.points = u)
                        }
                        t.abVariant && (n.ab = t.abVariant);
                        var l = {
                            quizId: t.id,
                            raw: J()(t.answersId),
                            extra: n,
                            result: r
                        };
                        return i.customAnswerEndpoint ? l.answers = a : l.answers2 = a, t.projectId && (l.projectId = t.projectId), l
                    },
                    resultsPosition: function(t) {
                        return !(!t.results || !o()(t.results, "items", []).length) && o()(t.results, "view", "afterForm")
                    },
                    isMultipleResults: function(t) {
                        return o()(t.results, "multiple", !1)
                    },
                    result: function(t, e) {
                        if (t.selectedResult) return t.selectedResult;
                        var i = e.suitableResults;
                        return o()(i, 0, {})
                    },
                    suitableResults: function(t) {
                        var e = o()(t.results, "items", []),
                            i = [],
                            n = Object(Dt["c"])(o()(t, "results.points"), t.answersId);
                        return ht()(e, function(e) {
                            var s = o()(e, "display.conditions", []),
                                a = o()(e, "points"),
                                r = 0,
                                u = !1;
                            if (s.length ? (r += qt(e.display, t.questions, t.answersId), r > 0 && (u = !0)) : u = !0, !1 !== n && !H()(a) && u && (u = Object(Dt["a"])(a, n, t.answersId)), u) {
                                if (!1 !== n) {
                                    var l = d()(n).format("0,0");
                                    e.title = R()(e.title, "{points}", l), e.text = R()(e.text, "{points}", l)
                                }
                                i.push(Object(y["a"])({}, e, {
                                    _count: r
                                }))
                            }
                        }), i = j()(i, ["_count"], ["desc"]), i
                    },
                    isQuizEnable: function(t) {
                        return t.settings.enabled
                    },
                    buttonStyle: function(t) {
                        var e = o()(t.info, "design.buttonStyle", "round"),
                            i = L()(e, "outline"),
                            n = L()(e, "square");
                        return {
                            outline: i,
                            square: n
                        }
                    },
                    animationStyle: function(t) {
                        return o()(t, "info.design.animationStyle", "rightLeft")
                    },
                    fontFamily: function(t) {
                        var e = o()(t, "info.design.font", {
                            name: "Gilroy"
                        }) || {
                            name: "Gilroy"
                        };
                        return e
                    },
                    points: function(t) {
                        return o()(t, "results.points") || {}
                    },
                    isVerifyingEnabled: function(t, e) {
                        if (!H()(e.points)) return o()(t.info, "verifying.enabled", !1)
                    },
                    allCorrectAnswers: function(t, e) {
                        if (e.isVerifyingEnabled) return B()(t.questions, function(t, i) {
                            var n = o()(i, "answers", []);
                            if (!n.length) return t;
                            var s = Jt(i, e.points);
                            return H()(s) || t.push({
                                q: i.id,
                                a: s
                            }), t
                        }, [])
                    },
                    hasCorrectAnswer: function(t, e) {
                        if (e.isVerifyingEnabled) {
                            var i = Z()(e.allCorrectAnswers, function(t) {
                                    return t.q === e.getQuestion.id
                                }),
                                n = o()(i, "a");
                            return Boolean(U()(n) ? n.length : n)
                        }
                    },
                    isCurrentAnswerCorrect: function(t, e) {
                        var i = t.answersId[t.activeQuestion].a,
                            n = Jt(e.getQuestion, e.points);
                        return L()(n, i)
                    },
                    isWidgetMode: function(t) {
                        return "widget" === t.mode
                    }
                },
                mutations: {
                    resetState: function(t) {
                        t.leadForm = !1, t.leadFormDisabled = !1, t.selectedResult = null, t.fixedDiscount = null
                    },
                    showStartPage: function(t) {
                        o()(t, "info.startPage.enabled") && (t.quizStarted = !1)
                    },
                    startQuiz: function(t) {
                        t.isResultAnimation = !1, t.quizStarted = !0, t.activeQuestion = 0, t.isResultShow = !1, t.isResultsShow = !1, t.selectedResult = null, t.leadForm = !1, t.answers = [], t.answersId = []
                    },
                    setQuestions: function(t, e) {
                        t.questions = e
                    },
                    setActiveQuestion: function(t, e) {
                        var i = e;
                        i < 0 && (i = 0), i > t.questions.length && (i = t.questions.length), t.activeQuestion = i
                    },
                    setInfo: function(t, e) {
                        t.info = Object(y["a"])({}, t.info, e);
                        var i = o()(e, "form.fields", []);
                        i.length || n["default"].set(t.info.form, "fields", ["name", "phone", "email"])
                    },
                    setIsDemo: function(t) {
                        t.isDemo = !0
                    },
                    setId: function(t, e) {
                        t.id = e
                    },
                    setWhiteLabelDate: function(t, e) {
                        t.whiteLabelDate = e ? new Date(e) : null
                    },
                    setRedirectParamsEnabled: function(t, e) {
                        t.redirectParamsEnabled = e
                    },
                    setLeadFormDisable: function(t, e) {
                        var i = e ? new Date(e) : null;
                        t.leadFormDisabled = i > new Date, t.leadFormDisabled && t.results && (o()(t.info, "form.showMessengers") ? t.results.view = "beforeForm" : t.results.view = "afterForm")
                    },
                    setAnswerValue: function(t, e) {
                        var i, s = t.questions[t.activeQuestion],
                            a = o()(s, "options.isLong"),
                            r = {
                                q: s.title,
                                a: e
                            };
                        n["default"].set(t.answers, t.activeQuestion, r), i = U()(e) ? tt()(e, function(t) {
                            var e = Z()(s.answers, function(e) {
                                return e.title === t || a && !H()(e.longText) && e.longText === t
                            });
                            return e ? e.id : t
                        }) : o()(Z()(s.answers, function(t) {
                            return t.title === e || a && !H()(t.longText) && t.longText === e
                        }), "id");
                        var u = {
                            q: s.id,
                            a: i || e
                        };
                        n["default"].set(t.answersId, t.activeQuestion, u)
                    },
                    resetAnswerValue: function(t) {
                        n["default"].set(t.answers, t.activeQuestion, null)
                    },
                    loaded: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.loaded = e
                    },
                    setDiscount: function(t, e) {
                        t.discount = e
                    },
                    setCurrency: function(t, e) {
                        t.currency = e
                    },
                    fixDiscount: function(t) {
                        var e = o()(t, "info.marketing.discount", {});
                        "increasing" === e.type ? t.fixedDiscount = e.value : "increasingPercent" === e.type ? t.fixedDiscount = e.percent : t.fixedDiscount = t.discount
                    },
                    showLeadForm: function(t) {
                        t.quizStarted = !0, t.leadForm = !0, t.isResultShow = !1, t.isResultsShow = !1
                    },
                    showResults: function(t) {
                        t.quizStarted = !0, t.leadForm = !1, t.isResultShow = !1, t.isResultsShow = !0
                    },
                    showResult: function(t, e) {
                        t.quizStarted = !0, t.leadForm = !1, t.isResultsShow = !1, t.isResultShow = !0, e && (t.selectedResult = e)
                    },
                    setResults: function(t, e) {
                        t.results = e
                    },
                    setUniqueAnalytic: function(t, e) {
                        t.analyticUnique = e
                    },
                    showResultLoader: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.isResultLoaderShow = e
                    },
                    setSettings: function(t, e) {
                        t.settings = Object(y["a"])({}, t.settings, e)
                    },
                    showHint: function(t, e) {
                        t.hint = e
                    },
                    selectResult: function(t, e) {
                        t.selectedResult = e
                    },
                    setMode: function(t, e) {
                        t.mode = e
                    },
                    setDomain: function(t, e) {
                        t.domain = e
                    },
                    showSwipeHint: function(t) {
                        t.isQuestionSwipeHintShow = !1
                    },
                    setProject: function(t, e) {
                        t.projectId = e
                    },
                    showRedirectLoading: function(t, e) {
                        t.redirectUrl = e
                    },
                    showResultAnimation: function(t, e) {
                        t.isResultAnimation = e
                    },
                    setButtonStyle: function(t, e) {
                        M()(t, "info.design.buttonStyle", e)
                    },
                    setProgressType: function(t, e) {
                        M()(t, "info.design.progressType", e)
                    },
                    closeWidget: function(t) {
                        t.isWidgetOpen = !1
                    },
                    openWidget: function(t) {
                        t.isWidgetOpen = !0
                    },
                    setExplanationQuestion: function(t, e) {
                        var i = e.question,
                            n = e.explanation,
                            s = {
                                id: "".concat(i.id, "_explanation"),
                                text: i.text,
                                title: i.title,
                                type: "statement",
                                notRequired: !0,
                                isExplanation: !0,
                                options: {
                                    content: n
                                },
                                isNotCounting: !0
                            };
                        t.questions.splice(t.activeQuestion + 1, 0, s)
                    },
                    removeStatementQuestions: function(t) {
                        var e = ut()(t.questions, function(t) {
                            return "statement" !== t.type
                        });
                        M()(t, "questions", e)
                    },
                    setAbVariant: function(t, e) {
                        t.abVariant = e
                    }
                },
                actions: {
                    get: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t(e, i) {
                            var s, a, r, u, l, c, d, h, f, m, p, g, v, _, y, w, k, C, x, q;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (s = e.commit, a = e.state, r = e.dispatch, u = i.id, l = i.groupId, c = i.domain, d = i.quiz, h = u, !d) {
                                            t.next = 7;
                                            break
                                        }
                                        m = d, t.next = 31;
                                        break;
                                    case 7:
                                        if (!l) {
                                            t.next = 13;
                                            break
                                        }
                                        return s("setMode", "vk"), t.next = 11, n["default"].axios.get("v1/vkGroups/findOne", {
                                            params: {
                                                filter: {
                                                    where: {
                                                        groupId: l
                                                    }
                                                }
                                            }
                                        });
                                    case 11:
                                        p = t.sent, h = o()(p, "data.quizId");
                                    case 13:
                                        if (g = h && P()(h.length, 4, 21), !g) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.next = 17, n["default"].axios.get("v1/Quizzes/findByKey?key=".concat(h));
                                    case 17:
                                        f = t.sent, t.next = 30;
                                        break;
                                    case 20:
                                        if (!h) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.next = 23, n["default"].axios.get("v1/Quizzes/".concat(h));
                                    case 23:
                                        f = t.sent, t.next = 30;
                                        break;
                                    case 26:
                                        if (!c) {
                                            t.next = 30;
                                            break
                                        }
                                        return t.next = 29, n["default"].axios.get("v1/Quizzes/findByDomain?domain=".concat(c));
                                    case 29:
                                        f = t.sent;
                                    case 30:
                                        m = f.data;
                                    case 31:
                                        v = o()(m, "ab", {}), _ = o()(v, "variants", []), H()(_) || !0 === v.disabled || (_ = ut()(_, function(t) {
                                            return !0 !== t.disabled
                                        }), _.push({
                                            key: "A",
                                            diff: null
                                        }), y = "marquiz__ab-variant_".concat(h), w = a.abVariant, w || (w = At.a.get(y)), k = w && Z()(_, {
                                            key: w
                                        }), k || (k = _[T()(_.length - 1)]), w || At.a.set(y, k.key, {
                                            expires: new Date((new Date).getTime() + 12e5)
                                        }), "A" === k.key || H()(k.diff) || Kt.patch(m, k.diff), console.info("QUIZ AB variant: %s", k.key), s("setAbVariant", k.key)), M()(m, "questions", m.questions.filter(function(t) {
                                            return !t.disabled
                                        })), s("setQuestions", m.questions), o()(m, "results.items") && M()(m, "results.items", m.results.items.filter(function(t) {
                                            return !t.disabled
                                        })), s("setResults", m.results), s("setInfo", m.info), s("setId", m.id), m.domain && s("setDomain", m.domain), !0 !== o()(m, "isActive") && !0 !== o()(m, "template.active") || s("setIsDemo"), "preview" === a.mode && s("setIsDemo"), o()(m, "settings.customAnswerEndpoint") && s("setCustomAnswerEndpoint", m.settings.customAnswerEndpoint, {
                                            root: !0
                                        }), o()(m, "settings.cookieNotice") && s("showCookieNotice", null, {
                                            root: !0
                                        }), o()(m, "readOnly.whiteLabelExpireAt") && s("setWhiteLabelDate", m.readOnly.whiteLabelExpireAt), o()(m, "readOnly.leadFormDisableExpireAt") && s("setLeadFormDisable", m.readOnly.leadFormDisableExpireAt), o()(m, "info.startPage.enabled", !1) || s("startQuiz"), o()(m, "settings") && s("setSettings", m.settings), o()(m, "projectId") && s("setProject", m.projectId), o()(m, "verifying") && s("setVerifying", m.verifying), s("setRedirectParamsEnabled", o()(m, "readOnly.redirectParamsEnabled", !1)), s("loaded"), C = o()(m, "settings.lng"), C || (C = o()(m, "info.design.lng")), C && b.i18next.changeLanguage(C), x = o()(m, "settings.currency"), x || (x = o()(m, "info.marketing.discount.currency")), "RUR" === x && (x = "RUB"), x && s("setCurrency", x), r("initAnalytic", o()(m, "info.analytic", {})), q = o()(m, "readOnly.marquizAnalyticExpireAt", !1), "preview" !== a.mode && q && new Date(q) >= new Date && n["default"].analytic.initMarquizAnalytic(m.id), m.info.marketing && r("setInitialDiscount", m.info.marketing);
                                    case 64:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, i) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    initAnalytic: function(t, e) {
                        var i = t.state,
                            s = t.commit,
                            a = t.dispatch,
                            r = {
                                dummy: i.isDemo
                            };
                        i.abVariant && (r.ab = i.abVariant);
                        var u = new Promise(function(t) {
                                Ot()() && t(), window.onmousemove = function() {
                                    t(), window.isActive = !0
                                }
                            }),
                            l = [u];
                        s("setUniqueAnalytic", o()(e, "unique", !1));
                        var c = o()(e, "metrika.id");
                        c && l.push(n["default"].analytic.init({
                            yaCounterId: c
                        }, Object(y["a"])({}, r, {
                            trustedDomains: o()(e, "metrika.trustedDomains", []),
                            webvisor: o()(e, "metrika.webvisor", !0),
                            cdnSrc: "ru" !== i.lng && !H()(i.lng)
                        })));
                        var d = ["UA-113524925-1"],
                            h = o()(e, "ga.id");
                        h && (d.push(h), n["default"].ab.setGAId("UA1135249251")), d.length && l.push(n["default"].analytic.init({
                            gaIds: d
                        }, Object(y["a"])({}, r, {
                            abDimension: o()(e, "ga.abDimension")
                        })));
                        var f = o()(e, "fb.id");
                        f && l.push(n["default"].analytic.init({
                            fb: f
                        }, r));
                        var m = o()(e, "vk.id");
                        m && l.push(n["default"].analytic.init({
                            vk: m
                        }, r));
                        var p = o()(e, "mailru.id");
                        p && l.push(n["default"].analytic.init({
                            mailru: p
                        }, r));
                        var g = o()(e, "tiktok.id");
                        g && l.push(n["default"].analytic.init({
                            tiktok: g
                        }, r));
                        var b = o()(e, "roistat.id");
                        b && St(b), Promise.all(l).then(function() {
                            a("analyticEvent", "marquiz-start")
                        })
                    },
                    setInitialDiscount: function(t, e) {
                        var i = t.state,
                            n = t.getters,
                            s = t.commit;
                        if (e.discount && "melting" === e.discount.type) {
                            var a = 1e3,
                                r = Math.round(e.discount.value / 60 / n.countQuestions * 1.5);
                            0 === r && (r = 1, a = 1500);
                            var o = e.discount.value;
                            s("setDiscount", o), window.onblur = function() {
                                window.isActive = !1
                            }, te.discountInterval = setInterval(function() {
                                window.isActive && (o = i.discount - r > 0 ? i.discount - r : 0, s("setDiscount", o), (0 === o || n.isLastStep) && clearInterval(te.discountInterval))
                            }, a)
                        }
                        e.discount && "increasing" === e.discount.type && s("setDiscount", 0), e.discount && "increasingPercent" === e.discount.type && s("setDiscount", 0)
                    },
                    nextQuestion: $()(function(t) {
                        var e = t.state,
                            i = t.commit,
                            s = t.getters,
                            a = t.dispatch,
                            r = s.getQuestion;
                        if (s.getIsFilled || r.notRequired) {
                            if (s.isVerifyingEnabled && !r.isExplanation && s.hasCorrectAnswer) {
                                var u = o()(e.answers, "".concat([e.activeQuestion], ".a"));
                                if (!H()(u)) {
                                    var l = o()(e.info, "verifying.questions", []),
                                        c = Z()(l, function(t) {
                                            return t.id === r.id
                                        }),
                                        d = o()(c, "explanation", "");
                                    d && i("setExplanationQuestion", {
                                        question: r,
                                        explanation: d
                                    })
                                }
                            }
                            r.isExplanation || (!s.getIsFilled && r.notRequired ? (i("setAnswerValue", ""), a("marquizAnalyticSetAnswer", "marquiz-skip")) : a("marquizAnalyticSetAnswer"));
                            var h = ct()(s.activeQuestions, {
                                    id: r.id
                                }),
                                f = s.activeQuestions[h + 1];
                            if (f) {
                                var m = ct()(e.questions, {
                                        id: r.id
                                    }),
                                    p = ct()(e.questions, {
                                        id: f.id
                                    });
                                a("analyticEvent", "marquiz-step".concat(m + 1)), n["default"].marquizAnalytic.event("step-".concat(r.id)), i("setActiveQuestion", p), a("calculateDiscount")
                            } else a("analyticEvent", "marquiz-step".concat(e.questions.length)), n["default"].marquizAnalytic.event("step-".concat(r.id)), i("removeStatementQuestions"), a("defineResult")
                        }
                    }, 500, {
                        leading: !0,
                        trailing: !1
                    }),
                    defineResult: function(t) {
                        var e = t.getters,
                            i = t.dispatch,
                            n = t.commit;
                        switch (e.resultsPosition) {
                            case "beforeForm":
                                n("showResultLoader", !0), e.isMultipleResults ? i("showResults") : i("showResult");
                                break;
                            case "afterForm":
                                n("showResultLoader", !0), i("showLeadForm");
                                break;
                            default:
                                i("showLeadForm");
                                break
                        }
                    },
                    prevQuestion: function(t) {
                        var e = t.state,
                            i = t.commit,
                            s = t.getters,
                            a = t.dispatch,
                            r = ct()(s.activeQuestions, {
                                id: s.getQuestion.id
                            });
                        if (0 === r) return !1;
                        var o = s.activeQuestions[r - 1],
                            u = ct()(e.questions, {
                                id: o.id
                            });
                        if (s.hasCondition) {
                            var l = s.activeQuestions[r],
                                c = D()(e.answersId),
                                d = ct()(c, {
                                    q: l.id
                                }),
                                h = D()(e.answers);
                            d >= 0 && (c.splice(d, 1), h.splice(d, 1), n["default"].set(e, "answersId", c), n["default"].set(e, "answers", h))
                        }
                        i("setActiveQuestion", u), a("calculateDiscount")
                    },
                    showLeadForm: function(t) {
                        var e = t.state,
                            i = t.commit,
                            n = t.dispatch,
                            s = t.getters;
                        if (e.leadFormDisabled) n("showDisableForm");
                        else {
                            if (i("showLeadForm"), n("calculateDiscount", !0), "email" === e.results.view) {
                                s.suitableResults.length > 1 && n("analyticEvent", "marquiz-results");
                                var a = o()(s, "result", {});
                                x()(a.id) ? n("analyticEvent", "marquiz-result-mismatch") : (n("analyticEvent", "marquiz-result"), n("analyticEvent", "marquiz-result-".concat(a.id)))
                            }
                            n("analyticEvent", "marquiz-form")
                        }
                    },
                    showResults: function(t) {
                        var e = t.commit,
                            i = t.dispatch,
                            n = t.getters;
                        n.suitableResults.length < 2 ? i("showResult") : (e("showResults"), i("calculateDiscount", !0), i("analyticEvent", "marquiz-results"))
                    },
                    showResult: function(t) {
                        var e = t.state,
                            i = t.getters,
                            s = t.commit,
                            a = t.dispatch,
                            r = o()(i, "result", {});
                        a("calculateDiscount", !0), a("analyticEvent", "marquiz-answer"), x()(r.id) ? a("analyticEvent", "marquiz-result-mismatch") : (a("analyticEvent", "marquiz-result"), a("analyticEvent", "marquiz-result-".concat(r.id))), "afterForm" === i.resultsPosition && a("analyticEvent", "marquiz-finish"), "afterForm" !== i.resultsPosition && !e.leadFormDisabled || "redirect" !== r.type || !r.link ? s("showResult") : n["default"].redirect(r.link, {
                            contacts: {},
                            result: r
                        }, !1, i.isMultipleResults)
                    },
                    showDisableForm: function(t) {
                        var e = t.state,
                            i = t.getters,
                            s = t.commit,
                            a = t.dispatch;
                        if (e.leadFormDisabled) {
                            if (!i.resultsPosition || e.isResultShow || e.isResultsShow) return o()(e.info, "form.showMessengers", !1) && !H()(o()(e.info, "form.chatBots")) ? (a("calculateDiscount", !0), void s("showLeadForm")) : void(o()(e.info, "form.redirect") ? n["default"].redirect(o()(e.info, "form.redirect")) : (a("calculateDiscount", !0), s("showLeadForm"), s("form/showThankPage", null, {
                                root: !0
                            })));
                            i.isMultipleResults ? (s("showResultLoader", !0), a("showResults")) : a("showResult")
                        }
                    },
                    calculateDiscount: function(t) {
                        var e, i = t.state,
                            n = t.getters,
                            s = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = o()(i, "info.marketing.discount"),
                            u = n.activeQuestions.length,
                            l = i.leadForm || i.isResultShow || i.isResultsShow;
                        if (n.isIncreasingDiscount) e = l ? r.value : Math.round(r.value / u * (n.questionNumber - 1)), s("setDiscount", e);
                        else if (n.isIncreasingPercentDiscount) {
                            if (l) e = r.percent;
                            else {
                                var c = r.percent / u;
                                e = Math.floor(c * (n.questionNumber - 1) * 100) / 100
                            }
                            s("setDiscount", e)
                        }
                        a && (te.discountInterval && clearInterval(te.discountInterval), s("fixDiscount"))
                    },
                    setAnswer: function(t, e) {
                        var i = t.commit,
                            n = t.dispatch,
                            s = t.getters,
                            a = s.getQuestion,
                            r = o()(a, "options.isLong");
                        if (i("setAnswerValue", e), !H()(e) && (s.isVariantsQuestion && "one" === a.select && Z()(a.answers, function(t) {
                                return t.title === e || r && t.longText === e
                            }) && "one-image" !== a.type || "images" === a.type && "one" === a.select || "date" === a.type && s.getIsFilled)) {
                            var u = 400;
                            s.isVerifyingEnabled && (u = s.isCurrentAnswerCorrect ? 500 : 1200), setTimeout(function() {
                                n("nextQuestion")
                            }, u)
                        }
                    },
                    resetAnswer: function(t) {
                        var e = t.commit;
                        e("resetAnswerValue")
                    },
                    analyticEvent: function(t, e) {
                        var i = t.state;
                        "marquiz-finish" === e && i.analyticFinished || ("marquiz-finish" === e && (i.analyticFinished = !0), i.analyticUnique && n["default"].analytic.event("".concat(e, "_").concat(i.id)), n["default"].analytic.event(e))
                    },
                    marquizAnalyticSetAnswer: function(t) {
                        var e = t.state,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            s = e.questions[e.activeQuestion],
                            a = [];
                        if (null !== i) return a.push(i), void n["default"].marquizAnalytic.answer({
                            question_id: s.id,
                            answer: a
                        });
                        var r = Z()(e.answersId, {
                            q: s.id
                        });
                        if (U()(r.a)) k()(r.a, function(t) {
                            var e = ct()(s.answers, {
                                id: t
                            });
                            e >= 0 ? a.push(t) : a.push("marquiz-other")
                        });
                        else {
                            var o = ct()(s.answers, {
                                id: r.a
                            });
                            o >= 0 ? a.push(r.a) : a.push("marquiz-other")
                        }
                        n["default"].marquizAnalytic.answer({
                            question_id: s.id,
                            answer: a
                        })
                    }
                }
            },
            ae = function() {
                var t = Object(_["a"])(regeneratorRuntime.mark(function t(e) {
                    var i, s, a;
                    return regeneratorRuntime.wrap(function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return i = e.answers2, s = e.raw, a = [], k()(i, function(t, e) {
                                    U()(t.a) && k()(t.a, function(t, r) {
                                        t instanceof File && a.push(n["default"].axiosFileUpload("https://files.marquiz.ru/upload", t, "file").then(function(t) {
                                            i[e].a[r] = t.data.url, s[e].a[r] = t.data.url
                                        }))
                                    })
                                }), t.next = 6, Promise.all(a).catch(function(t) {
                                    console.error(t)
                                });
                            case 6:
                                return e.answers2 = i, e.raw = s, t.abrupt("return", e);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            re = i("1816"),
            oe = i.n(re),
            ue = bt.a.parse(window.location.search),
            le = ["name", "phone", "email"],
            ce = ["vk", "telegram", "whatsapp", "messenger", "skype", "viber", "instagram"],
            de = {};
        le.forEach(function(t) {
            ue[t] && (de[t] = ue[t])
        }), ce.forEach(function(t) {
            ue[t] && (de[t] = ue[t])
        });
        var he = [{
                key: "email",
                name: "Email",
                enabled: !0
            }, {
                key: "name",
                name: "Имя",
                enabled: !0
            }, {
                key: "phone",
                name: "Телефон",
                enabled: !0
            }],
            fe = [],
            me = {
                namespaced: !0,
                state: {
                    isStep2: !1,
                    isMessengersPage: !1,
                    isThanksPage: !1,
                    contacts: de,
                    contactTypes: le,
                    messengerTypes: ce,
                    fields1: [],
                    fields2: [],
                    answerId: null,
                    uuid: null,
                    isFilesUploading: !1
                },
                mutations: {
                    resetState: function(t) {
                        t.isStep2 = !1, t.isThanksPage = !1
                    },
                    showStep1: function(t) {
                        t.isStep2 = !1
                    },
                    showStep2: function(t) {
                        t.isStep2 = !0
                    },
                    setContacts: function(t, e) {
                        t.contacts = e
                    },
                    showMessengers: function(t) {
                        t.isMessengersPage = !0
                    },
                    hideMessengers: function(t) {
                        t.isMessengersPage = !1
                    },
                    showThankPage: function(t) {
                        t.isThanksPage = !0
                    },
                    setAnswerId: function(t, e) {
                        t.answerId = e
                    },
                    setFields: function(t, e) {
                        var i = e.fields1,
                            n = e.fields2,
                            s = i ? i.filter(function(t) {
                                return t.enabled
                            }) : [],
                            a = n ? n.filter(function(t) {
                                return t.enabled
                            }) : [];
                        s.length || (s = a, a = []), a.length || 1 !== s.length || "name" !== s[0].key || (s = []), s.length || a.length || (s = he, a = fe), t.fields1 = s, t.fields2 = a
                    },
                    setSession: function(t, e) {
                        var i = e.answerId,
                            n = e.uuid;
                        t.answerId = i, t.uuid = n
                    },
                    startUploadFiles: function(t) {
                        t.isFilesUploading = !0
                    },
                    finishUploadFiles: function(t) {
                        t.isFilesUploading = !1
                    }
                },
                getters: {},
                actions: {
                    saveLead: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t(e, i) {
                            var s, a, r, u, l, c, d, h;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (s = e.state, a = e.commit, r = e.rootState, i.contacts = s.contacts, i.clientId = s.uuid, i.extra.timezone = pt.getUserTimezone(), i.extra.lang = r.lang, u = At.a.get(), l = {}, It()(u, function(t, e) {
                                                Nt()(e, "roistat") && (l[e] = t), "_ga" === e && (l[e] = t), "_ym_uid" === e && (l[e] = t), Nt()(e, "_comagic") && (i.extra.comagic_id = t, l[e] = t), String(e).indexOf("session_id") >= 0 && (l[e] = t), Nt()(e, "roistat_") && (l[e] = t)
                                            }), i.extra.cookies = Et()(l, i.extra.cookies), c = o()(ue, "referrer", document.referrer), c && o()(oe()(c, !0), "hostname") !== o()(oe()(window.location.href, !0), "hostname") && (i.extra.referrer = c), s.fields2.length || (i.extra.notify = "now"), d = "/v1/answers", r.customAnswerEndpoint && (d = r.customAnswerEndpoint), h = new Promise(function() {}), !s.answerId) {
                                            t.next = 19;
                                            break
                                        }
                                        h = n["default"].axios.patch("".concat(d, "/").concat(s.answerId), i), t.next = 24;
                                        break;
                                    case 19:
                                        return a("startUploadFiles"), t.next = 22, ae(i);
                                    case 22:
                                        a("finishUploadFiles"), h = n["default"].axios.post(d, i);
                                    case 24:
                                        return h.then(function(t) {
                                            a("setAnswerId", t.data.id)
                                        }).catch(function() {}), t.abrupt("return", h);
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, i) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            };
        n["default"].use(v["a"]);
        var pe, ge = {
                setLang: function(t, e) {
                    t.lang = e
                },
                setCustomAnswerEndpoint: function(t, e) {
                    t.customAnswerEndpoint = e
                },
                showCookieNotice: function(t) {
                    t.cookieNotice = !0
                },
                hideCookieNotice: function(t) {
                    t.cookieNotice = !1
                }
            },
            be = new v["a"].Store({
                state: {
                    lang: "ru",
                    customAnswerEndpoint: null,
                    cookieNotice: !1
                },
                mutations: ge,
                modules: {
                    quiz: se,
                    form: me
                }
            }),
            ve = be,
            _e = i("3652"),
            ye = i.n(_e),
            we = i("2955"),
            ke = i.n(we),
            Ce = (i("f10f"), i("7618")),
            xe = i("bc3a"),
            qe = i.n(xe),
            De = {
                getItem: function() {},
                setItem: function() {}
            };
        try {
            pe = window.localStorage
        } catch (Zc) {
            pe = De
        }
        var Se = pe,
            $e = {
                install: function(t) {
                    t.axios = t.prototype.$axios = qe.a.create({
                        baseURL: Se.getItem("API_URL") || "https://api.marquiz.ru",
                        timeout: 6e4
                    }), t.prototype.$axiosFileUpload = t.axiosFileUpload = function(e, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "file",
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if ("string" !== typeof e) throw new TypeError("Expected a string, got ".concat(Object(Ce["a"])(e)));
                        var a = new FormData;
                        return a.append(n, i), s && It()(s, function(t, e) {
                            a.append(e, t)
                        }), t.axios.post(e, a, {
                            headers: {
                                "Content-Type": "multipart/form-data; boundary=".concat(a._boundary)
                            }
                        })
                    }
                }
            },
            Ae = {
                install: function(t) {
                    t.directive("horizontal-scroll", {
                        inserted: function(t) {
                            t.onwheel = function(e) {
                                t.scrollLeft += 3 * e.deltaY, e.preventDefault()
                            }
                        }
                    })
                }
            },
            Te = i("0284"),
            Oe = i.n(Te),
            Pe = i("b9ad"),
            ze = i.n(Pe),
            Me = function() {
                ! function(t, e, i, n, s, a, r) {
                    t.fbq || (s = t.fbq = function() {
                        s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                    }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], a = e.createElement(i), a.async = !0, a.src = n, r = e.getElementsByTagName(i)[0], r.parentNode.insertBefore(a, r))
                }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
            },
            Ee = function(t) {
                return new Promise(function(e) {
                    ! function() {
                        var i = document.createElement("script");
                        i.type = "text/javascript", i.async = !0, i.src = "https://vk.com/js/api/openapi.js?160", i.onload = function() {
                            VK.Retargeting.Init(t), VK.Retargeting.Hit(), e()
                        }, document.head.appendChild(i)
                    }()
                })
            },
            Be = function(t) {
                return new Promise(function(e) {
                    var i = window._tmr || (window._tmr = []);
                    i.push({
                            id: t,
                            type: "pageView",
                            start: (new Date).getTime()
                        }),
                        function(t, i, n) {
                            if (!t.getElementById(n)) {
                                var s = t.createElement("script");
                                s.type = "text/javascript", s.async = !0, s.id = n, s.src = "https://top-fwz1.mail.ru/js/code.js";
                                var a = function() {
                                    var e = t.getElementsByTagName("script")[0];
                                    e.parentNode.insertBefore(s, e)
                                };
                                "[object Opera]" == i.opera ? t.addEventListener("DOMContentLoaded", a, !1) : a(), e()
                            }
                        }(document, window, "topmailru-code")
                })
            },
            Ve = function(t) {
                return new Promise(function(e) {
                    (function(i) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.async = !0, n.src = "https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=".concat(t);
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(n, s), e()
                    })(window)
                })
            },
            Le = i("dce5"),
            Ie = i.n(Le),
            je = i("63ea"),
            Fe = i.n(je),
            Re = i("c64e"),
            Ne = i.n(Re),
            He = i("386c"),
            Qe = i.n(He),
            Ue = [],
            We = [],
            Ye = !1;

        function Ge() {
            var t = At.a.get("visitor_id");
            return t || (t = Ne()(), At.a.set("visitor_id", t, {
                expires: 1
            })), t
        }
        var Ze = 0,
            Ke = {
                requestPayload: {
                    quiz_id: null,
                    visitor_id: Ge(),
                    time_zone: null
                },
                send: qe.a.post,
                tick: function() {
                    Ze += 1
                },
                isUniqueAnswer: function(t) {
                    var e = !0;
                    return ht()(Ue, function(i) {
                        Fe()(t, i) && (e = !1)
                    }), !!e && (Ue.push(t), !0)
                },
                isUniqueEvent: function(t) {
                    var e = it()(We, t);
                    return !(e >= 0) && (We.push(t), !0)
                },
                isInited: function() {
                    return Ye
                },
                requestApi: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = String("https://analytics.marquiz.ru"),
                        n = {
                            visitor: "/api/visitor",
                            answer: "/api/answer",
                            event: "/api/event",
                            lead: "/api/visitor/lead"
                        };
                    if (!x()(n[t])) {
                        var s = "".concat(i).concat(n[t]),
                            a = Object(y["a"])({}, this.requestPayload);
                        null !== e && Ie()(a, e);
                        try {
                            this.send(s, a)
                        } catch (r) {
                            console.log(r)
                        }
                    }
                },
                init: function(t) {
                    var e = new URLSearchParams(window.location.search);
                    if (!e.get("test")) {
                        Qe.a.every(1e3, this.tick), console.info("Marquiz Analytic inited");
                        var i = new Date,
                            n = i.getTimezoneOffset() / 60;
                        n = n < 0 ? Math.abs(n) : -1 * n, Ye = !0, this.requestPayload.quiz_id = t, this.requestPayload.time_zone = n, this.requestApi("visitor")
                    }
                },
                lead: function() {
                    Ye && (console.info("Marquiz Analytic lead"), this.requestApi("lead", {
                        quiz_passing_time: Ze
                    }))
                },
                event: function(t) {
                    Ye && this.isUniqueEvent(t) && (console.info("Marquiz Analytic event: ".concat(t)), this.requestApi("event", {
                        event_tag: t
                    }), "finish" === t && this.lead())
                },
                answer: function(t) {
                    Ye && this.isUniqueAnswer(t) && (console.info("Marquiz Analytic answer: ".concat(t.question_id, " => ").concat(t.answer)), this.requestApi("answer", {
                        question_id: t.question_id,
                        answer: t.answer
                    }))
                }
            },
            Je = function() {
                function t(e) {
                    Object(Pt["a"])(this, t), this.vue = e, this.yaCounters = [], this.gaCounter = null, this.isProd = !0
                }
                return Object(zt["a"])(t, [{
                    key: "event",
                    value: function(t) {
                        var e = this;
                        if (this.yaCounters.forEach(function(i) {
                                e.isProd ? window[i] && window[i].reachGoal(t) : console.info("Metrika event: ".concat(t), i)
                            }), this.gaCounter) {
                            var i = "/".concat(t.replace("-", "/"));
                            this.isProd ? this.vue.$ga.page(i) : console.info("GA pageview: ".concat(i), this.gaCounter)
                        }
                        if (this.fb) {
                            var n = "ViewContent";
                            "marquiz-finish" !== t && "marquiz-contacts1" !== t && "marquiz-contacts2" !== t || (n = "Lead"), this.isProd ? this.fb.event(n, {
                                content_name: t
                            }) : console.log("FB pixel event", n, t)
                        }
                        if (this.vk && (this.isProd ? (this.vk.Retargeting.Event(t), "marquiz-finish" === t && this.vk.Goal("lead")) : (console.log("VK pixel event", t), "marquiz-finish" === t && console.log("VK pixel goal - lead"))), this.mailru)
                            if (this.isProd) {
                                var s = window._tmr || (window._tmr = []);
                                s.push({
                                    id: this.mailru.id,
                                    type: "reachGoal",
                                    goal: t
                                })
                            } else console.log("Mail ru event", t);
                        if ("step" !== t.replace("marquiz-", "").substring(0, 4)) {
                            var a = t.split("_");
                            x()(a[1]) && Ke.event(t.replace("marquiz-", ""))
                        }
                    }
                }, {
                    key: "hit",
                    value: function(t) {
                        var e = this;
                        this.yaCounters.forEach(function(i) {
                            e.isProd ? window[i] && window[i].hit(t) : console.info("Metrika page hit: ".concat(t), i)
                        })
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        var e = t.yaCounterId,
                            i = t.gaIds,
                            n = t.fb,
                            s = t.vk,
                            a = t.mailru,
                            r = t.tiktok,
                            u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o()(u, "dummy") && (this.isProd = !1);
                        var l = [];
                        return e && l.push(this.initMetrika(e, u)), i && l.push(this.initGA(i, u)), n && l.push(this.initFB(n)), s && l.push(this.initVK(s)), a && l.push(this.initMailru(a)), r && l.push(this.initTiktok(r)), Promise.all(l)
                    }
                }, {
                    key: "initMarquizAnalytic",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        null !== t && Ke.init(t)
                    }
                }, {
                    key: "initMetrika",
                    value: function(t, e) {
                        var i = this;
                        return new Promise(function(n) {
                            var s = i,
                                a = "yaCounter".concat(t),
                                r = {};
                            if (e.ab && (r.marquiz_ab = e.ab), !i.isProd) return s.yaCounters.push(a), console.info("Fake Metrika inited", t), void n();
                            (function(i, u, l) {
                                (u[l] = u[l] || []).push(function() {
                                    try {
                                        u[a] = new u.Ya.Metrika2({
                                            id: t,
                                            clickmap: !0,
                                            trackLinks: !0,
                                            accurateTrackBounce: !0,
                                            webvisor: o()(e, "webvisor", !0),
                                            trackHash: !0,
                                            trustedDomains: o()(e, "trustedDomains", []),
                                            params: r
                                        }), s.yaCounters.push(a), n()
                                    } catch (i) {
                                        console.log(i)
                                    }
                                });
                                var c = i.getElementsByTagName("script")[0],
                                    d = i.createElement("script"),
                                    h = function() {
                                        c.parentNode.insertBefore(d, c)
                                    };
                                d.type = "text/javascript", d.async = !0, d.src = o()(e, "cdnSrc", !1) ? "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js" : "https://mc.yandex.ru/metrika/tag.js", "[object Opera]" === u.opera ? i.addEventListener("DOMContentLoaded", h, !1) : h()
                            })(document, window, "yandex_metrika_callbacks2")
                        })
                    }
                }, {
                    key: "initGA",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.gaCounter = t, this.isProd ? new Promise(function(n) {
                            e.vue.use(Oe.a, {
                                id: t,
                                fields: {
                                    cookieFlags: "secure;samesite=none"
                                },
                                ready: function() {
                                    if (i.ab) {
                                        var t = o()(i, "abDimension", 1);
                                        e.vue.$ga.set("dimension".concat(t), i.ab)
                                    }
                                    n()
                                }
                            })
                        }) : (console.info("Fake ga inited", t), Promise.resolve())
                    }
                }, {
                    key: "initFB",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            if (!e.isProd) return console.info("Fake FB pixel inited", t), e.fb = !0, i();
                            Me(), e.vue.use(ze.a, {
                                debug: !e.isProd
                            }), e.vue.analytics.fbq.init(t), e.fb = e.vue.analytics.fbq, e.fb.event("PageView"), i()
                        })
                    }
                }, {
                    key: "initVK",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            if (!e.isProd) return console.info("Fake VK pixel inited", t), e.vk = !0, i();
                            Ee(t).then(function() {
                                e.vk = window.VK, i()
                            })
                        })
                    }
                }, {
                    key: "initMailru",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            if (!e.isProd) return console.info("Fake Mailru inited", t), e.mailru = !0, i();
                            Be(t).then(function() {
                                e.mailru = window._tmr, e.mailru.id = t, i()
                            })
                        })
                    }
                }, {
                    key: "initTiktok",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            if (!e.isProd) return console.info("Fake TikTok inited", t), e.tiktok = !0, i();
                            Ve(t).then(function() {
                                i()
                            })
                        })
                    }
                }]), t
            }(),
            Xe = {
                install: function(t) {
                    t.prototype.$analytic = new Je(t), t.analytic = t.prototype.$analytic, t.marquizAnalytic = Ke, t.prototype.$marquizAnalytic = Ke
                }
            },
            ti = {
                install: function(t) {
                    t.quizFrame = t.prototype.$quizFrame = {
                        postMessage: function(t) {
                            window.parent.postMessage(JSON.stringify(t), "*")
                        },
                        changeHeight: function(t, e) {
                            this.postMessage({
                                action: "setHeight",
                                id: t,
                                height: e
                            })
                        }
                    }
                }
            },
            ei = (i("7f7f"), i("ec69")),
            ii = i.n(ei),
            ni = i("c54a"),
            si = i.n(ni),
            ai = i("741a"),
            ri = i.n(ai),
            oi = function(t) {
                return R()(t, /(\/\/res)|(\/hgwipn3sa\/)/gi, function(t) {
                    switch (t) {
                        case "//res":
                            return "//hgwipn3sa-res";
                        case "/hgwipn3sa/":
                            return "/";
                        default:
                            break
                    }
                })
            },
            ui = function(t, e) {
                return oi(ri()(t, e))
            },
            li = function(t, e, i) {
                switch (i) {
                    case "width":
                        return t.push("w=".concat(e)), t;
                    case "height":
                        return t.push("h=".concat(e)), t;
                    case "fit":
                        return t.push("fit=".concat(e)), t;
                    case "gravity":
                        if ("face" === e) return t.push("fit=facearea"), t;
                        break;
                    case "dpr":
                        return t.push("dpr=".concat(e)), t;
                    case "auto":
                        return t.push("auto=".concat(e)), t;
                    case "q":
                        return t.push("q=".concat(e)), t;
                    default:
                        return t
                }
            },
            ci = function(t) {
                return B()(t, li, []).join("&")
            },
            di = function(t, e) {
                return "".concat(t, "&").concat(ci(e))
            },
            hi = {
                install: function(t) {
                    var e = {
                        url: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!ii()(t).length) return null;
                            var i = Ie()({}, e),
                                n = /.gif(?!.*.gif)$/gi.test(t.name);
                            n || (i.dpr = si()() ? "2" : "1");
                            var s = Object.assign({
                                    cloud_name: "hgwipn3sa",
                                    secure: "https:" === window.location.protocol,
                                    width: "auto",
                                    fetch_format: "auto",
                                    source: "upload",
                                    quality: "auto",
                                    gravity: "auto",
                                    crop: "fill"
                                }, i),
                                a = Object.assign({
                                    fit: "crop",
                                    auto: "format,compress"
                                }, i);
                            switch (t.provider) {
                                case "cloudinary":
                                    return ui(t.name, s);
                                case "unsplash":
                                    return di(t.url, a);
                                default:
                                    return ui("https://marquiz.blob.core.windows.net/".concat(t.url), Object.assign(s, {
                                        source: "fetch"
                                    }))
                            }
                        }
                    };
                    t.prototype.$image = e
                }
            },
            fi = i("339e"),
            mi = i.n(fi),
            pi = new mi.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0,
                headerLevelStart: 3
            }),
            gi = {
                number: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0,0";
                    return d()(t).format(e)
                },
                currency: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = ["$", "Ft"];
                    return L()(i, e) ? "".concat(e, " ").concat(this.number(t)) : e ? "".concat(this.number(t), " ").concat(e) : this.number(t)
                },
                markdown: function(t) {
                    return pi.makeHtml(t)
                },
                site: function(t) {
                    var e = new oe.a(t, "", !0);
                    return e.host
                }
            },
            bi = {
                install: function(t) {
                    t.prototype.$format = gi, t.format = gi
                }
            },
            vi = !1;

        function _i(t) {
            t && t.focus && (vi || t.focus())
        }
        var yi = {
                install: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            disabled: !1
                        },
                        i = e.disabled;
                    !0 === i && (vi = !0), t.directive("focus", {
                        inserted: function(t) {
                            !1 !== vi && _i(t)
                        }
                    }), t.prototype.$focusInput = _i, t.focusInput = _i
                }
            },
            wi = !1,
            ki = function() {},
            Ci = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = e.contacts,
                    n = e.result,
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = String(t);
                r.indexOf("://") < 0 && (r = "http://".concat(r));
                var o = ["phone", "email", "name", "vk", "telegram", "skype", "whatsapp", "messenger", "viber"],
                    u = !1;
                i && o.forEach(function(t) {
                    i[t] && (L()(r, "{".concat(t, "}")) && (u = !0), r = R()(r, "{".concat(t, "}"), i[t]))
                }), n && (L()(r, "{result}") && (u = !0), r = R()(r, "{result}", n.id));
                var l = {},
                    c = bt.a.parse(window.location.search);
                It()(c, function(t, e) {
                    Nt()(e, "utm_") && (l[e] = t), it()(["_ga", "yclid", "ymclid", "gclid", "fbclid", "ad"], e) >= 0 && (l[e] = t)
                });
                var d = new oe.a(r, "", !0),
                    h = Object(y["a"])({}, d.query, l);
                if (!u) {
                    for (var f in i) i[f] && (h["marquiz_".concat(f)] = i[f]);
                    n && n.id && (h.result = n.id)
                }
                if (d.set("query", h), wi) console.log("Marquiz redirect", d.href);
                else if (a) window.open(d.href, "_blank");
                else {
                    s ? s(r) : ki(r);
                    var m = 2e3;
                    setTimeout(function() {
                        window.top.location.href = d.href
                    }, m)
                }
                return r
            },
            xi = {
                install: function(t, e) {
                    e && (e.dummy && (wi = !0), e.callback && (ki = e.callback)), t.redirect = Ci, t.prototype.$redirect = Ci
                }
            },
            qi = {},
            Di = {
                gaId: null,
                getVariant: function(t) {
                    var e = qi[t] || At.a.get(this.getCookieName(t));
                    if (!e) {
                        var i = o()(this.list, t, []);
                        if (!i.length) return;
                        if (e = i[T()(0, i.length - 1)], qi[t] = e, At.a.set(this.getCookieName(t), e, {
                                expires: 1
                            }), window.ga) {
                            var n = "set";
                            this.gaId && (n = "".concat(this.gaId, ".set")), window.ga(n, "dimension1", e)
                        }
                        console.info("Marquiz Internal AB Variant: %s = %s", t, e)
                    }
                    return e
                },
                list: {},
                getCookieName: function(t) {
                    return "marquiz__ab-variant_".concat(t)
                },
                clearCache: function() {
                    qi = {}
                },
                setGAId: function(t) {
                    this.gaId = t
                }
            },
            Si = {
                install: function(t) {
                    t.prototype.$ab = Di, t.ab = Di
                }
            },
            $i = function() {
                var t = o()(Ut.get(), "cookies._ga");
                t && At.a.set("_ga", t)
            },
            Ai = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", {
                    staticClass: "svg-icon"
                }, ["upload" === t.name ? i("svg", {
                    staticClass: "svg-icon_upload",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "35.629",
                        height: "35.629",
                        viewBox: "0 0 35.629 35.629"
                    }
                }, [i("g", {
                    attrs: {
                        id: "upload",
                        transform: "translate(1.5 1.5)"
                    }
                }, [i("path", {
                    attrs: {
                        id: "Path_251",
                        d: "M35.629 15v7.251A3.625 3.625 0 0 1 32 25.876H6.625A3.625 3.625 0 0 1 3 22.251V15",
                        "data-name": "Path 251",
                        transform: "translate(-3 6.753)"
                    }
                }), i("path", {
                    attrs: {
                        id: "Path_252",
                        d: "M25.127 12.064L16.064 3 7 12.064",
                        "data-name": "Path 252",
                        transform: "translate(.251 -3)"
                    }
                }), i("path", {
                    attrs: {
                        id: "Line_86",
                        d: "M0 0v21.753",
                        "data-name": "Line 86",
                        transform: "translate(16.315)"
                    }
                })])]) : t._e(), "loading" === t.name ? i("svg", {
                    staticClass: "svg-icon_loading",
                    attrs: {
                        version: "1.1",
                        id: "L5",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 100 100",
                        "enable-background": "new 0 0 0 0",
                        "xml:space": "preserve"
                    }
                }, [i("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "6",
                        cy: "50",
                        r: "6"
                    }
                }, [i("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 15 ; 0 -15; 0 15",
                        repeatCount: "indefinite",
                        begin: "0.1"
                    }
                })], 1), i("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "30",
                        cy: "50",
                        r: "6"
                    }
                }, [i("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 10 ; 0 -10; 0 10",
                        repeatCount: "indefinite",
                        begin: "0.2"
                    }
                })], 1), i("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "54",
                        cy: "50",
                        r: "6"
                    }
                }, [i("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 5 ; 0 -5; 0 5",
                        repeatCount: "indefinite",
                        begin: "0.3"
                    }
                })], 1)]) : t._e()])
            },
            Ti = [],
            Oi = {
                props: {
                    color: String,
                    name: {
                        type: String,
                        required: !0
                    }
                }
            },
            Pi = Oi,
            zi = (i("f1ad"), i("2877")),
            Mi = Object(zi["a"])(Pi, Ai, Ti, !1, null, null, null),
            Ei = Mi.exports,
            Bi = i("cdae"),
            Vi = (i("5abe"), i("dfa4"), i("98f9"), i("7452"), i("660e")),
            Li = i("5b6c"),
            Ii = i.n(Li),
            ji = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Theme", {
                    directives: [{
                        name: "waitForT",
                        rawName: "v-waitForT",
                        value: !0,
                        expression: "true"
                    }]
                }, [t.isQuizEnable ? i("div", {
                    staticClass: "app",
                    class: {
                        "app_widget-open": t.isWidgetOpen
                    },
                    attrs: {
                        id: "app"
                    }
                }, [t.loaded ? i("Layout", [t.isWidgetMode ? i("WidgetPreview") : t._e(), t.isShowStartPage ? i("div", {
                    staticClass: "app__start-page",
                    class: {
                        "hide-scrollbar": this.isWidgetOpen, "app__start-page_widget": this.isWidgetOpen
                    }
                }, [i("StartPage")], 1) : t._e(), t.isShowQuiz ? i("Quiz") : t._e()], 1) : t._e(), t.isShowWelcomePage ? t._e() : [t.isLoading ? i("div", {
                    staticClass: "app__loading"
                }) : t._e(), t.notFound ? i("div", {
                    staticClass: "app__not-found"
                }, [i("div", {
                    staticClass: "app__emoji"
                }, [t._v("4️⃣ 0️⃣ 4️⃣")]), t._v(t._s(t.$t("такой квиз не существует")) + " 🙄")]) : t._e(), t.loadingError ? i("div", {
                    staticClass: "app__loading-error"
                }, [i("p", [t._v(t._s(t.$t("не удалось загрузить тест")) + "..")]), i("div", {
                    staticClass: "app__emoji"
                }, [t._v("🤒")]), i("button", {
                    staticClass: "app__retry-btn button",
                    on: {
                        click: t.retryLoad
                    }
                }, [t._v(t._s(t.$t("Попробовать ещё раз")))])]) : t._e(), "/agreement" === t.$route.path ? i("router-view") : t._e()], t.isShowWelcomePage ? i("Welcome") : t._e(), t.isVkGroupAdmin ? i("button", {
                    staticClass: "app__edit button is-small",
                    on: {
                        click: function(e) {
                            t.isEditMode = !0
                        }
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "pencil"
                    }
                })], 1) : t._e(), t.isEditMode ? i("b-modal", {
                    attrs: {
                        active: t.isEditMode
                    },
                    on: {
                        "update:active": function(e) {
                            t.isEditMode = e
                        }
                    }
                }, [i("div", {
                    staticClass: "card app__edit-card"
                }, [i("div", {
                    staticClass: "card-content"
                }, [i("Install", {
                    attrs: {
                        quizId: t.quizId,
                        request: t.request,
                        quizTitle: t.info.name || t.info.title
                    },
                    on: {
                        changed: t.closeAndReload
                    }
                })], 1)])]) : t._e(), t.isPreview ? i("PreviewController") : t._e()], 2) : i("Disabled")], 1)
            },
            Fi = [],
            Ri = i("3065"),
            Ni = i.n(Ri),
            Hi = i("5308"),
            Qi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "layout"
                }, [t._t("default")], 2)
            },
            Ui = [],
            Wi = (i("895a"), {}),
            Yi = Object(zi["a"])(Wi, Qi, Ui, !1, null, null, null),
            Gi = Yi.exports,
            Zi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "quiz",
                    staticClass: "quiz-container",
                    class: t.containerClasses
                }, [i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: "slide-quiz"
                    },
                    on: {
                        "after-leave": t.quizAfterLeave
                    }
                }, [t.leadForm || t.isResultsShow || t.isResultShow || t.isResultLoaderShow ? t.isResultsShow ? i("div", {
                    key: "quiz__results",
                    staticClass: "quiz__results"
                }, [i("Results")], 1) : t.isResultShow ? i("div", {
                    key: "quiz__result",
                    staticClass: "quiz__result"
                }, [t.hasResult ? i("Result", {
                    on: {
                        hasScroll: function(e) {
                            return t.hasScroll = e
                        }
                    }
                }) : i("EmptyResult")], 1) : t.leadForm ? i("div", {
                    key: "quiz__lead-form",
                    staticClass: "quiz__lead-form"
                }, [i("transition", {
                    attrs: {
                        mode: "out-in",
                        name: "slide-quiz"
                    }
                }, [t.isThanksPage ? t._e() : i("FinalPage"), t.isThanksPage ? i("ThankPage") : t._e()], 1)], 1) : t._e() : i("div", {
                    key: "quiz",
                    staticClass: "quiz",
                    class: {
                        quiz_sidebar_on: t.showRightSidebar, "quiz_has-cookie-notice": t.cookieNotice
                    }
                }, [t.getQuestion ? i("div", {
                    staticClass: "quiz__questions",
                    style: t.questionsStyle
                }, [i("div", {
                    staticClass: "quiz__questions-header"
                }, [t.hasTitle ? i("h3", {
                    staticClass: "quiz__title"
                }, [i("b-icon", {
                    staticClass: "quiz__title-icon",
                    attrs: {
                        icon: "file-document-box-check-outline"
                    }
                }), t._v(t._s(t.info.title))], 1) : t._e(), t.hasTitle ? i("hr", {
                    staticClass: "quiz__title-separator"
                }) : t._e(), t.getQuestion ? [i("div", {
                    staticClass: "title quiz__question-title",
                    class: [{
                        "quiz__question-title_without-title": !t.hasTitle
                    }]
                }, [i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: t.animationType
                    }
                }, [i("span", {
                    key: t.getQuestion.id,
                    staticClass: "is-block"
                }, [t._v(t._s(t.getQuestion.title))])]), i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: t.animationType
                    }
                }, [t.getQuestion.text && t.hasAssistantOnSlide && t.isWidgetMode ? i("div", {
                    key: t.getQuestion.id,
                    staticClass: "quiz__assistant-text"
                }, [t._v(t._s(t.getQuestion.text))]) : t._e()]), i("transition", {
                    attrs: {
                        name: t.animationType,
                        appear: "",
                        mode: "out-in"
                    }
                }, [i("div", {
                    key: t.getQuestion.id,
                    staticClass: "quiz__tags"
                }, [t.getCanMany ? i("b-tag", {
                    staticClass: "quiz__tag quiz__tag_many",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [i("div", {
                    staticClass: "quiz__tag-icon"
                }, [i("b-icon", {
                    attrs: {
                        icon: "check-circle",
                        customSize: "mdi-16px"
                    }
                })], 1), t._v(t._s(t.$t("выберите один или несколько")))]) : t._e(), t.getNotRequired && "statement" !== t.getQuestion.type ? i("b-tag", {
                    staticClass: "quiz__tag quiz__tag_skip",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [t._v(t._s(t.$t("можно пропустить")))]) : t._e()], 1)])], 1), t.showRightSidebar || t.hasAssistantOnSlide ? i("div", {
                    staticClass: "quiz__sidebar-inner"
                }, [t.discount ? i("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: "question-slide_assistant-mobile"
                    }
                }, [t.getQuestion.text && t.hasAssistantOnSlide && !t.isWidgetMode ? i("AssistantMobile", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e()], 1)], 1) : t._e()] : t._e()], 2), i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: t.animationType
                    },
                    on: {
                        "after-enter": t.questionEntered,
                        "after-leave": t.questionLeaved,
                        "before-enter": t.checkAssistantOnSlide,
                        "before-leave": t.resetAssistantOnSlide
                    }
                }, [i("keep-alive", t._l(t.questions, function(e, n) {
                    return n === t.activeQuestion ? i("Question", {
                        key: e.id,
                        ref: "question",
                        refInFor: !0,
                        staticClass: "quiz__question",
                        attrs: {
                            question: e,
                            id: e.id
                        }
                    }) : t._e()
                }), 1)], 1), t.isWhiteLabelActive ? t._e() : i("div", {
                    staticClass: "quiz__whitelabel quiz__whitelabel_mobile",
                    style: t.labelStyle
                }, ["desktop" !== t.$mq ? i("WhiteLabel", {
                    style: t.labelStyle
                }) : t._e()], 1), i("div", {
                    staticClass: "quiz__buttons",
                    class: {
                        "quiz__buttons_no-background": t.hasMobileNavbar
                    }
                }, [i("QuizButtons", {
                    attrs: {
                        "passed-percent": t.getPassedPercent,
                        "active-question": t.activeQuestion,
                        "not-required": t.getNotRequired,
                        "is-last": t.isLastStep,
                        filled: t.getIsFilled,
                        "white-label": !t.showRightSidebar,
                        buttonStyle: t.buttonStyle,
                        hasMobileNavbar: t.hasMobileNavbar
                    },
                    on: {
                        previous: t.prevQuestion,
                        next: t.nextQuestion,
                        "show-lead": t.nextQuestion
                    }
                }), i("CookieNotice", {
                    staticClass: "quiz__cookie-notice"
                })], 1), t.hasMobileNavbar ? i("div", {
                    staticClass: "quiz__mobile-navbar"
                }, [i("MobileNavbar", {
                    attrs: {
                        countQuestions: t.questions.length,
                        discount: t.discount,
                        autoshow: !t.isStartPageEnabled,
                        isBonusesEnabled: t.isBonusesEnabled
                    }
                })], 1) : t._e()], 1) : t._e(), i("transition", {
                    attrs: {
                        mode: "out-in",
                        name: "question-slide_sidebar"
                    }
                }, [t.getQuestion && t.showRightSidebar && (t.isBonusesEnabled || t.discount || t.getQuestion.text) ? i("div", {
                    staticClass: "quiz__sidebar"
                }, [t.discount ? i("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), t.getQuestion.text ? i("Assistant", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e(), t.isBonusesEnabled ? i("Bonuses", {
                    staticClass: "quiz__bonuses",
                    class: [{
                        quiz__bonuses_bottom: t.getQuestion.text
                    }],
                    attrs: {
                        height: 64
                    }
                }) : t._e(), t.isWhiteLabelActive ? t._e() : i("div", {
                    staticClass: "quiz__whitelabel",
                    style: t.labelStyle
                }), "mobile" !== t.$mq ? i("WhiteLabel", {
                    style: t.labelStyle
                }) : t._e()], 1) : t._e()]), t.showRightSidebar || t.isWhiteLabelActive ? t._e() : i("div", {
                    staticClass: "quiz__whitelabel_fixed-bottom"
                }, ["desktop" === t.$mq ? i("WhiteLabel", {
                    style: t.labelStyle
                }) : t._e()], 1)], 1)]), t.redirectUrl ? i("div", {
                    staticClass: "quiz__redirect"
                }, [i("Loading", {
                    attrs: {
                        isFullPage: "",
                        active: !0
                    }
                }, [t._v(t._s(t.$t("Идёт переадресация на {-url}", {
                    url: t.$format.site(t.redirectUrl)
                })))])], 1) : t._e(), i("transition", {
                    attrs: {
                        mode: "out-in",
                        name: "slide-loader"
                    },
                    on: {
                        "after-leave": t.loaderLeaved
                    }
                }, [t.isResultLoaderShow && t.isLoaderActive ? i("div", {
                    key: "quiz__result-loader",
                    staticClass: "quiz__result-loader"
                }, [i("ResultLoader")], 1) : t._e()])], 1)
            },
            Ki = [],
            Ji = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "assistant",
                    class: {
                        "no-assistant": !t.hasAssistant, "has-hint": !!t.hint
                    }
                }, [t.hasAssistant ? i("div", {
                    staticClass: "assistant__person"
                }, [i("div", {
                    staticClass: "assistant__avatar"
                }, [t.imageUrl ? i("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), i("div", {
                    staticClass: "assistant__avatar-badge"
                })]), i("div", {
                    staticClass: "assistant__name"
                }, [i("p", {
                    staticClass: "assistant__title"
                }, [t._v(t._s(t.assistant.name))]), t.assistant.title ? i("p", {
                    staticClass: "assistant__subtitle"
                }, [i("span", [t._v(t._s(t.assistant.title))])]) : t._e()])]) : t._e(), t.hint && t.hint.title ? i("div", {
                    staticClass: "assistant__text-title"
                }, [t._v(t._s(t.hint.title))]) : t._e(), i("transition", {
                    attrs: {
                        name: t.hint ? "animation-hint" : "animation-comment",
                        mode: "out-in",
                        appear: ""
                    }
                }, [t.text || t.hint ? i("div", {
                    key: "assistant__block",
                    staticClass: "assistant__block"
                }, [t.hasAssistant ? i("div", {
                    staticClass: "assistant__text-arrow"
                }) : t._e(), i("div", {
                    staticClass: "assistant__text-height",
                    style: "height: " + t.textHeight
                }, [i("div", {
                    ref: "text",
                    staticClass: "assistant__text",
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })])]) : t._e()])], 1)
            },
            Xi = [],
            tn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14.257 8.127"
                    }
                }, [i("defs"), i("g", {
                    staticClass: "cls-1",
                    attrs: {
                        id: "arrow-point-to-right_1_",
                        "data-name": "arrow-point",
                        transform: "rotate(-90 52.633 52.633)"
                    }
                }, [i("path", {
                    attrs: {
                        id: "Path_4",
                        d: "M104.973 7.834l-6.13 6.13a1 1 0 0 1-1.412-1.412l5.424-5.424L97.431 1.7A1 1 0 0 1 98.843.292l6.13 6.13a1 1 0 0 1 0 1.412z",
                        "data-name": "Path 4"
                    }
                })])])
            },
            en = [],
            nn = {
                name: "ArrowPoint"
            },
            sn = nn,
            an = (i("0287"), Object(zi["a"])(sn, tn, en, !1, null, "14468613", null)),
            rn = an.exports,
            on = new mi.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0
            }),
            un = {
                components: {
                    ArrowShow: rn
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                mounted: function() {
                    this.$refs.text && (this.textHeight = getComputedStyle(this.$refs.text).height)
                },
                data: function() {
                    return {
                        textHeight: null
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", {
                    activeQuestion: function(t) {
                        return t.activeQuestion
                    }
                }), Object(v["c"])("quiz", {
                    question: "getQuestion",
                    countQuestions: "countQuestions"
                }), {
                    hasAssistant: function() {
                        return !!this.assistant.name
                    },
                    imageUrl: function() {
                        var t = this.assistant.avatar;
                        return o()(t, "url", !1) || (t = {
                            name: "avatar",
                            provider: "cloudinary"
                        }), this.$image.url(t, {
                            crop: "fill",
                            gravity: "face",
                            width: 70,
                            height: 70
                        })
                    },
                    textHtml: function() {
                        return this.hint ? on.makeHtml(this.hint.text) : on.makeHtml(this.text)
                    }
                }),
                watch: {
                    textHtml: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$nextTick();
                                    case 2:
                                        this.$refs.text && (this.textHeight = getComputedStyle(this.$refs.text).height);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            ln = un,
            cn = (i("222e"), Object(zi["a"])(ln, Ji, Xi, !1, null, null, null)),
            dn = cn.exports,
            hn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "assistant-mobile",
                    class: {
                        "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint, "is-expanded": t.expanded, "has-more": t.hasMore
                    }
                }, [t.text ? i("div", {
                    staticClass: "assistant-mobile__block",
                    on: {
                        click: t.toggleText
                    }
                }, [t.hasAssistant ? i("div", {
                    staticClass: "assistant-mobile__person"
                }, [i("div", {
                    staticClass: "assistant-mobile__avatar"
                }, [t.imageUrl ? i("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), t.imageUrl ? t._e() : i("img", {
                    attrs: {
                        src: t.avatar
                    }
                })])]) : t._e(), i("div", {
                    ref: "textContainer",
                    staticClass: "assistant-mobile__text-container"
                }, [i("div", {
                    ref: "text",
                    staticClass: "assistant-mobile__text"
                }, [t.hint ? t._e() : i("div", {
                    staticClass: "assistant-mobile__name"
                }, [i("p", {
                    staticClass: "assistant-mobile__title"
                }, [t._v(t._s(t.getFirstName(t.assistant.name)))]), t.assistant.title ? i("p", {
                    staticClass: "assistant-mobile__subtitle"
                }, [i("span", {
                    staticClass: "assistant-mobile__status"
                }), i("span", [t._v(t._s(t.assistant.title))])]) : t._e(), t.hasMore ? i("ArrowDown", {
                    staticClass: "assistant-mobile__arrow"
                }) : t._e()], 1), t.hint ? i("div", {
                    staticClass: "assistant-mobile__header"
                }, [t._v(t._s(t.hint.title)), i("b-icon", {
                    staticClass: "assistant-mobile__arrow",
                    attrs: {
                        icon: "close"
                    }
                })], 1) : t._e(), i("transition", {
                    key: t.activeQuestion,
                    attrs: {
                        name: "slide-fade",
                        mode: "out-in"
                    },
                    on: {
                        "before-enter": t.reinit,
                        enter: t.setLineClamp
                    }
                }, [i("div", {
                    key: t.activeQuestion,
                    ref: "assistantText",
                    staticClass: "assistant-mobile__text-html"
                }, [i("span", {
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })])])], 1)])]) : t._e()])
            },
            fn = [],
            mn = i("2171"),
            pn = i.n(mn),
            gn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "15.862",
                        height: "9.042",
                        viewBox: "0 0 15.862 9.042"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M7.146 8.716l-6.82-6.82A1.111 1.111 0 0 1 1.897.325l6.034 6.036L13.962.325a1.112 1.112 0 0 1 1.575 1.571l-6.82 6.82a1.111 1.111 0 0 1-1.571 0z",
                        "data-name": "Path 209"
                    }
                })])
            },
            bn = [],
            vn = {},
            _n = Object(zi["a"])(vn, gn, bn, !1, null, null, null),
            yn = _n.exports,
            wn = {
                extends: dn,
                mounted: function() {
                    this.setLineClamp()
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                data: function() {
                    return {
                        hasMore: !1,
                        expanded: !1,
                        clampedText: null
                    }
                },
                components: {
                    ArrowDown: yn
                },
                computed: {
                    lines: function() {
                        return this.hasAssistant ? 1 : 2
                    }
                },
                methods: {
                    getFirstName: function(t) {
                        return t.split(" ")[0]
                    },
                    toggleText: function() {
                        this.$refs.assistantText && (x()(this.$refs.assistantText) || (this.hint ? this.closeHint() : (this.expanded = !this.expanded, this.expanded ? this.$refs.assistantText.innerHTML = this.textHtml : this.$refs.assistantText.innerHTML = this.clampedText)))
                    },
                    closeHint: function() {
                        this.expanded = !1, this.$store.commit("quiz/showHint")
                    },
                    setLineClamp: function() {
                        this.$refs.assistantText && (this.hasMore = pn()(this.$refs.assistantText, this.lines), this.clampedText = this.$refs.assistantText.innerHTML)
                    },
                    reinit: function() {
                        this.hasMore = !1, this.expanded = !1, this.clampedText = null
                    }
                },
                watch: {
                    hint: function(t) {
                        t && (this.expanded = !0)
                    }
                }
            },
            kn = wn,
            Cn = (i("0d14"), Object(zi["a"])(kn, hn, fn, !1, null, null, null)),
            xn = Cn.exports,
            qn = i("dfbf"),
            Dn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "question",
                    class: ["question_" + t.question.type]
                }, [!t.question.type || "answers" === t.question.type && !t.hasImages || "variants" === t.question.type ? i("Variants", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        hasOther: !!t.question.other,
                        variantsImage: t.variantsImage,
                        isLong: t.isLong
                    }
                }) : t._e(), "one-image" === t.question.type ? i("OneImage", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        hasOther: !!t.question.other,
                        startText: t.startText,
                        defaultImage: t.defaultImage
                    }
                }) : t._e(), "images" === t.question.type || "answers" === t.question.type && t.hasImages ? i("Images", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        type: t.imageType,
                        layout: t.imagesLayout,
                        "big-images": t.bigImages
                    }
                }) : t._e(), "emoji" === t.question.type ? i("Emoji", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        hasOther: !!t.question.other
                    }
                }) : t._e(), "input" === t.question.type ? i("InputAnswer", {
                    key: t.componentKey,
                    attrs: {
                        options: t.question.options
                    }
                }) : t._e(), "select" === t.question.type ? i("SelectAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "date" === t.question.type ? i("DateAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "slider" === t.question.type ? i("SliderAnswer", {
                    key: t.componentKey,
                    attrs: {
                        isRange: t.isRange,
                        min: t.min,
                        max: t.max,
                        step: t.step
                    }
                }) : t._e(), "file" === t.question.type ? i("FileAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), t.isVerifyingResult(t.question) ? i("VerifyingResult", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : "statement" === t.question.type ? i("Statement", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e()], 1)
            },
            Sn = [],
            $n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "answers",
                    staticClass: "answer-variants",
                    class: {
                        "answer-variants_has_image": !!t.imageUrl, "answer-variants_long": t.isLong
                    }
                }, [i("SlideAnimation", {
                    staticClass: "answer-variants__group",
                    attrs: {
                        isGroup: !0
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e, n) {
                    return i("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-variants__variant-text",
                        class: t.variantClasses(e),
                        attrs: {
                            "data-element-index": n
                        }
                    }, ["one" === t.select ? i("b-radio", {
                        attrs: {
                            "native-value": t.getAnswer(e)
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [i("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(t.getAnswer(e)),
                            isLong: t.isLong
                        }
                    })], 1) : t._e(), "many" === t.select ? i("b-checkbox", {
                        ref: "checkbox",
                        refInFor: !0,
                        attrs: {
                            "native-value": t.getAnswer(e)
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [i("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(t.getAnswer(e)),
                            isLong: t.isLong
                        }
                    })], 1) : t._e()], 1)
                }), t.hasOther ? i("div", {
                    key: "other",
                    staticClass: "answer-variants__variant-text answer-variants__other",
                    class: [{
                        "answer-variants__item_selected": !!t.other,
                        "answer_verifying-end": t.isVerifyingEnd
                    }],
                    attrs: {
                        "data-element-index": t.answers.length
                    }
                }, [i("other-input", {
                    attrs: {
                        select: t.select,
                        maxlength: "80"
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1) : t._e()], 2), i("SlideAnimation", [t.imageUrl ? i("div", {
                    key: "variants__image",
                    staticClass: "answer-variants__image"
                }, [i("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.imgLoaded,
                        expression: "imgLoaded"
                    }],
                    ref: "img",
                    staticClass: "answer-variants__image-img",
                    attrs: {
                        src: t.imageUrl
                    },
                    on: {
                        load: function(e) {
                            t.imgLoaded = !0
                        }
                    }
                }), t.imageUrl && !t.imgLoaded ? i("div", {
                    staticClass: "answer-variants__dummy-loading"
                }) : t._e()]) : t._e()])], 1)
            },
            An = [],
            Tn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "answer",
                    class: {
                        answer_checked: t.checked, answer_long: t.isLongAnswer
                    }
                }, [t.answer.title ? i("div", {
                    staticClass: "answer__title"
                }, [t._v(t._s(t.answer.title) + " "), t.answer.hint ? i("Hint", {
                    staticClass: "answer__hint",
                    attrs: {
                        answer: t.answer
                    }
                }) : t._e()], 1) : t._e(), t.isLongAnswer ? i("p", {
                    staticClass: "answer__text"
                }, [t._v(t._s(t.answer.longText) + " ")]) : t._e()])
            },
            On = [],
            Pn = function() {
                return i.e("popover").then(i.bind(null, "2cc6"))
            },
            zn = {
                components: {
                    Hint: Pn
                },
                props: {
                    answer: {
                        type: Object
                    },
                    checked: {
                        type: Boolean
                    },
                    isLong: Boolean
                },
                computed: {
                    isLongAnswer: function() {
                        return this.isLong && !!this.answer.longText
                    }
                }
            },
            Mn = zn,
            En = (i("2c09"), Object(zi["a"])(Mn, Tn, On, !1, null, null, null)),
            Bn = En.exports,
            Vn = i("e555"),
            Ln = i("5b79"),
            In = i("8e28"),
            jn = i("6a85"),
            Fn = i("7b7c"),
            Rn = {
                extends: Fn["a"],
                mixins: [Vn["a"], In["a"]],
                components: {
                    Answer: Bn,
                    OtherInput: Ln["a"],
                    SlideAnimation: jn["a"]
                },
                activated: function() {
                    this.val = this.$store.getters["quiz/getAnswerValue"]
                },
                data: function() {
                    return {
                        val: "many" === this.select ? [] : null,
                        imgLoaded: !1
                    }
                },
                props: {
                    answers: Array,
                    select: String,
                    hasOther: Boolean,
                    variantsImage: Object,
                    isLong: Boolean
                },
                computed: {
                    imageUrl: function() {
                        return H()(this.variantsImage) || this.isLong ? null : this.$image.url(this.variantsImage, {
                            width: 380,
                            height: 307,
                            crop: "fill"
                        })
                    }
                },
                methods: {
                    isChecked: function(t) {
                        var e = !1;
                        return this.val && (e = "one" === this.select ? this.val === t : it()(this.val, t) >= 0), e
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    getAnswer: function(t) {
                        var e = t.title,
                            i = t.longText;
                        return e || this.isLong && !!i && i
                    },
                    variantClasses: function(t) {
                        return [{
                            "has-hint": !!t.hint,
                            "answer-variants__variant-text_selected": this.isChecked(this.getAnswer(t))
                        }, this.getVerifyingState(t.id)]
                    }
                },
                watch: {
                    val: function(t) {
                        this.blurCheckbox("checkbox"), t && this.other && "one" === this.select && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Nn = Rn,
            Hn = (i("5ad8"), Object(zi["a"])(Nn, $n, An, !1, null, null, null)),
            Qn = Hn.exports,
            Un = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "answers",
                    staticClass: "answer-one-image"
                }, [i("SlideAnimation", {
                    staticClass: "answer-one-image__group",
                    attrs: {
                        isGroup: !0
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e, n) {
                    return i("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-one-image__variant-text",
                        class: t.oneImgClasses(e),
                        attrs: {
                            "data-element-index": n
                        }
                    }, [i("b-radio", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [i("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1)], 1)
                }), t.hasOther ? i("div", {
                    key: "other",
                    staticClass: "answer-one-image__variant-text answer-one-image__other",
                    class: {
                        "answer_verifying-end": t.isVerifyingEnd
                    },
                    attrs: {
                        "data-element-index": t.answers.length
                    }
                }, [i("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }), i("b-field", [i("b-input", {
                    attrs: {
                        placeholder: t.$t("Другое") + "..."
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1) : t._e(), i("div", {
                    key: "answer-one-image__gutter",
                    staticStyle: {
                        height: "0.5rem"
                    }
                })], 2), i("SlideAnimation", [i("div", {
                    key: t.imageUrl,
                    staticClass: "answer-one-image__image"
                }, [t.imageUrl ? i("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.imgLoaded,
                        expression: "imgLoaded"
                    }],
                    ref: "img",
                    staticClass: "answer-image__img",
                    attrs: {
                        src: t.imageUrl
                    },
                    on: {
                        load: t.showImage
                    }
                }) : t._e(), t.imageUrl && !t.imgLoaded ? i("div", {
                    staticClass: "answer-one-image__dummy-loading"
                }) : t._e(), t.imageUrl ? t._e() : i("div", {
                    staticClass: "answer-one-image__dummy"
                }, [t._v(t._s(t.dummyText))])])])], 1)
            },
            Wn = [],
            Yn = i("ceac"),
            Gn = i.n(Yn),
            Zn = {
                extends: Fn["a"],
                components: {
                    Answer: Bn,
                    SlideAnimation: jn["a"]
                },
                created: function() {
                    this.init()
                },
                activated: function() {
                    this.init()
                },
                data: function() {
                    return {
                        val: null,
                        other: null,
                        imgLoaded: !1
                    }
                },
                props: {
                    answers: Array,
                    hasOther: Boolean,
                    startText: String,
                    defaultImage: Object
                },
                computed: {
                    otherIndex: function() {
                        return this.getOtherIndex(this.val)
                    },
                    otherValue: function() {
                        return this.getOtherValue(this.val)
                    },
                    activeImage: function() {
                        if (!H()(this.defaultImage) && !this.val) return this.defaultImage;
                        if (!this.val) return null;
                        var t = Z()(this.answers, {
                            title: this.val
                        });
                        return t ? H()(t.image) && !H()(this.defaultImage) ? this.defaultImage : t.image : null
                    },
                    imageUrl: function() {
                        return this.activeImage ? this.$image.url(this.activeImage, {
                            width: 380,
                            height: 307,
                            crop: "fill"
                        }) : null
                    },
                    dummyText: function() {
                        return !this.val && this.startText ? this.startText : !this.val && document.body.clientWidth <= 767 ? this.$t("Выберите вариант ответа снизу") : this.val ? this.otherValue ? this.val : this.imageUrl ? "" : this.val : this.$t("Выберите вариант ответа слева")
                    }
                },
                methods: {
                    init: function() {
                        U()(this.$store.getters["quiz/getAnswerValue"]) ? this.val = null : this.val = this.$store.getters["quiz/getAnswerValue"], this.other = this.getOtherValue(this.val)
                    },
                    getOtherIndex: function(t) {
                        var e, i = Gn()(t, tt()(this.answers, "title"));
                        return e = i.length ? it()(t, i[0]) : null, e
                    },
                    getOtherValue: function(t) {
                        return L()(tt()(this.answers, "title"), t) ? null : t
                    },
                    setOtherVal: function(t) {
                        this.val = t
                    },
                    isChecked: function(t) {
                        return this.val === t
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    isOther: function(t) {
                        return it()(tt()(this.answers, "title"), t) >= 0
                    },
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    },
                    showImage: function() {
                        this.imgLoaded = !0
                    },
                    oneImgClasses: function(t) {
                        return [{
                            "answer-one-image__variant-text_selected": this.isChecked(t.title),
                            "has-hint": !!t.hint
                        }, this.getVerifyingState(t.id)]
                    }
                },
                watch: {
                    other: function(t) {
                        null !== t && this.setOtherVal(t)
                    },
                    val: function(t) {
                        t && this.other && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    },
                    activeImage: function(t, e) {
                        Fe()(t, e) || (this.imgLoaded = !1)
                    }
                }
            },
            Kn = Zn,
            Jn = (i("c06f"), Object(zi["a"])(Kn, Un, Wn, !1, null, null, null)),
            Xn = Jn.exports,
            ts = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "input-question"
                }, [i("b-field", ["text" === t.getInputType ? [i("b-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.getInputPlaceholder,
                        size: t.isWidgetMode ? "" : "is-large",
                        type: "text"
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                })] : t._e(), "textarea" === t.getInputType ? [i("b-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.getInputPlaceholder,
                        size: t.isWidgetMode ? "" : "is-large",
                        maxlength: "1000",
                        type: "textarea"
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                })] : t._e()], 2)], 1)
            },
            es = [],
            is = {
                activated: function() {
                    this.val = this.$store.getters["quiz/getAnswerValue"]
                },
                props: {
                    options: Object
                },
                mounted: function() {
                    "inline" === this.mode && 0 === this.activeQuestion || this.$focusInput(this.$refs.input)
                },
                data: function() {
                    return {
                        val: null
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["mode", "activeQuestion"]), Object(v["c"])("quiz", ["isWidgetMode"]), {
                    getInputType: function() {
                        return o()(this.options, "inputType", "text")
                    },
                    getInputPlaceholder: function() {
                        return o()(this.options, "placeholder", null)
                    }
                }),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            ns = is,
            ss = Object(zi["a"])(ns, ts, es, !1, null, null, null),
            as = ss.exports,
            rs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "answer-select"
                }, [i("b-field", {
                    staticClass: "answer-select__field"
                }, [i("b-select", {
                    class: "mobile" == t.$mq && t.answerSelectClasses,
                    attrs: {
                        placeholder: t.question.options.placeholder,
                        size: "is-large",
                        multiple: t.isMany
                    },
                    on: {
                        blur: function(e) {
                            return t.setFocused(!1)
                        },
                        focus: function(e) {
                            return t.setFocused(!0)
                        }
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, t._l(t.question.answers, function(e) {
                    return i("option", {
                        key: e.id,
                        class: t.getVerifyingState(e.id),
                        domProps: {
                            value: e.title
                        }
                    }, [t._v(t._s(e.title))])
                }), 0)], 1), t.hasHint ? i("div", {
                    staticClass: "answer-select__hint",
                    class: [{
                        "answer-select__hint_mac": t.isMac
                    }],
                    domProps: {
                        innerHTML: t._s(t.getHint())
                    }
                }) : t._e()], 1)
            },
            os = [],
            us = function() {
                return "undefined" !== typeof navigator && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
            },
            ls = {
                extends: Fn["a"],
                activated: function() {
                    this.val = this.$store.getters["quiz/getAnswerValue"]
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        val: "many" === this.question.select ? [] : null,
                        isFocused: !1
                    }
                },
                computed: {
                    hasHint: function() {
                        return !Ot()() && "many" === this.question.select
                    },
                    isMac: function() {
                        return us()
                    },
                    hintKey: function() {
                        var t = this.isMac ? "CMD" : "CTRL";
                        return '<span class="answer-select__hint-key">'.concat(t, "</span>")
                    },
                    isMany: function() {
                        return "many" === this.question.select
                    },
                    answerSelectClasses: function() {
                        return !this.isFocused && {
                            "answer-select__verifying-correct": this.isVerified && !this.isVerifyingEnd,
                            "answer-select__verifying-wrong": this.isVerifyingEnd
                        }
                    }
                },
                methods: Object(y["a"])({}, Object(v["b"])("quiz", ["nextQuestion"]), {
                    getHint: function() {
                        return this.$t("Зажмите {key}, чтобы выбрать несколько", {
                            key: this.hintKey,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    },
                    setFocused: function(t) {
                        "mobile" === this.$mq && (this.isFocused = t)
                    }
                }),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            cs = ls,
            ds = (i("4ad0"), Object(zi["a"])(cs, rs, os, !1, null, null, null)),
            hs = ds.exports,
            fs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "answer-slider"
                }, [i("div", {
                    staticClass: "answer-slider__container"
                }, [t.isRange ? i("b-field", {
                    attrs: {
                        grouped: "",
                        "group-multiline": ""
                    }
                }, [i("b-field", {
                    attrs: {
                        label: t.$t("От"),
                        "custom-class": "has-text-left has-text-grey-light",
                        expanded: ""
                    }
                }, [i("b-input", {
                    attrs: {
                        "custom-class": "has-text-centered",
                        placeholder: "0",
                        expanded: ""
                    },
                    on: {
                        input: t.onInputValueFrom
                    },
                    model: {
                        value: t.valueFrom,
                        callback: function(e) {
                            t.valueFrom = e
                        },
                        expression: "valueFrom"
                    }
                })], 1), i("b-field", {
                    attrs: {
                        label: t.$t("До"),
                        "custom-class": "has-text-left has-text-grey-light",
                        expanded: ""
                    }
                }, [i("b-input", {
                    attrs: {
                        "custom-class": "has-text-centered",
                        placeholder: "0",
                        expanded: ""
                    },
                    on: {
                        input: t.onInputValueTo
                    },
                    model: {
                        value: t.valueTo,
                        callback: function(e) {
                            t.valueTo = e
                        },
                        expression: "valueTo"
                    }
                })], 1)], 1) : i("b-field", [i("b-input", {
                    attrs: {
                        "custom-class": "has-text-centered",
                        placeholder: "0",
                        expanded: ""
                    },
                    on: {
                        input: t.onInputValue
                    },
                    model: {
                        value: t.valueCopy,
                        callback: function(e) {
                            t.valueCopy = e
                        },
                        expression: "valueCopy"
                    }
                })], 1), i("b-field", [i("vue-slider", {
                    attrs: {
                        height: 7,
                        min: t.min,
                        max: t.maximum,
                        tooltip: "focus",
                        "tooltip-formatter": function(e) {
                            return t.$format.number(e)
                        },
                        interval: t.interval,
                        dotSize: 23,
                        dotStyle: t.dotStyle,
                        railStyle: t.railStyle,
                        processStyle: t.processStyle,
                        tooltipStyle: t.tooltipStyle
                    },
                    on: {
                        error: t.onErrorSlide
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                })], 1), i("b-field", {
                    attrs: {
                        grouped: ""
                    }
                }, [i("b-field", {
                    attrs: {
                        expanded: ""
                    }
                }, [i("div", {
                    staticClass: "answer-slider__limit has-text-left"
                }, [t._v(t._s(t.$format.number(t.minimum)))])]), i("b-field", {
                    attrs: {
                        expanded: ""
                    }
                }, [i("div", {
                    staticClass: "answer-slider__limit has-text-right"
                }, [t._v(t._s(t.$format.number(t.maximum)))])])], 1)], 1)])
            },
            ms = [],
            ps = i("18e0"),
            gs = i.n(ps),
            bs = i("3bd9"),
            vs = i.n(bs),
            _s = i("4971"),
            ys = i.n(_s),
            ws = {
                components: {
                    VueSlider: ys.a
                },
                props: {
                    isRange: {
                        type: Boolean,
                        default: !1
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    step: {
                        type: Number,
                        default: 1
                    }
                },
                activated: function() {
                    this.initValue()
                },
                created: function() {
                    this.initValue()
                },
                data: function() {
                    return {
                        value: null,
                        valueCopy: null,
                        valueFrom: null,
                        valueTo: null,
                        stepCopy: this.step,
                        dotStyle: {
                            height: "100%",
                            boxSizing: "border-box",
                            borderRadius: "50%",
                            borderWidth: "6px",
                            borderStyle: "solid",
                            borderColor: "var(--color)",
                            backgroundColor: "var(--color-bg-2, #ffffff)",
                            boxShadow: "0 3px 5px 0 var(--color-alpha)",
                            cursor: "pointer"
                        },
                        railStyle: {
                            backgroundColor: "var(--color-bg-2, var(--color-lighten))",
                            borderRadius: "10px"
                        },
                        processStyle: {
                            backgroundColor: "var(--color)",
                            borderRadius: "10px"
                        },
                        tooltipStyle: {
                            padding: "2px 5px",
                            minWidth: "20px",
                            color: "#fff",
                            borderRadius: "5px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "var(--color)",
                            backgroundColor: "var(--color)",
                            whiteSpace: "nowrap"
                        }
                    }
                },
                computed: {
                    minimum: function() {
                        return this.min
                    },
                    maximum: function() {
                        return this.minimum >= this.max ? parseInt(this.min, 10) + 100 : this.max
                    },
                    interval: function() {
                        var t = this.maximum - this.minimum;
                        return t % this.stepCopy !== 0 ? t / 100 : this.stepCopy
                    },
                    defaultValue: function() {
                        return this.isRange ? [Math.floor(this.minimum + .25 * (this.maximum - this.minimum)), Math.floor(this.minimum + .75 * (this.maximum - this.minimum))] : Math.floor((this.minimum + this.maximum) / 2)
                    }
                },
                watch: {
                    value: function(t) {
                        this.isRange ? (this.$store.dispatch("quiz/setAnswer", {
                            from: vs()(t[0]),
                            to: vs()(t[1])
                        }), this.valueFrom = this.$format.number(vs()(t[0])), this.valueTo = this.$format.number(vs()(t[1]))) : (this.$store.dispatch("quiz/setAnswer", vs()(t)), this.valueCopy = this.$format.number(vs()(this.value)))
                    }
                },
                methods: {
                    initValue: function() {
                        var t = this.$store.getters["quiz/getAnswerValue"];
                        t && 0 !== t.length ? this.value = this.isRange ? [t.from, t.to] : t : this.value = this.defaultValue
                    },
                    parse: function(t) {
                        return Number(parseInt(t.replace(/\D+/g, ""), 10))
                    },
                    onInputValueFrom: $()(function() {
                        var t = this.parse(this.valueTo),
                            e = this.parse(this.valueFrom);
                        (gs()(e) || e < this.minimum) && (e = this.minimum), e > t && (e = t), e > this.maximum && (e = this.maximum), this.valueTo !== t && (this.valueTo = t), this.valueFrom !== e && (this.valueFrom = e), this.value = [e, t]
                    }, 1e3),
                    onInputValueTo: $()(function() {
                        var t = this.parse(this.valueTo),
                            e = this.parse(this.valueFrom);
                        (gs()(t) || t > this.maximum) && (t = this.maximum), t < e && (t = e), t < this.minimum && (t = this.minimum), this.valueTo !== t && (this.valueTo = t), this.valueFrom !== e && (this.valueFrom = e), this.value = [e, t]
                    }, 1e3),
                    onInputValue: $()(function() {
                        var t = this.parse(this.valueCopy);
                        (gs()(t) || t < this.minimum) && (t = this.minimum), t > this.maximum && (t = this.maximum), this.valueCopy !== t && (this.valueCopy = t), this.value = t
                    }, 1e3),
                    onErrorSlide: function(t) {
                        if (2 === t)
                            for (var e = this.stepCopy; e <= this.maximum; e += 1)
                                if ((this.maximum - this.minimum) % e === 0) return void(this.stepCopy = e)
                    }
                }
            },
            ks = ws,
            Cs = (i("3cf9"), Object(zi["a"])(ks, fs, ms, !1, null, null, null)),
            xs = Cs.exports,
            qs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "answer-file"
                }, [i("b-tag", {
                    staticClass: "answer-file__limit"
                }, [t._v("10MB max")]), i("b-field", [i("b-upload", {
                    ref: "upload",
                    attrs: {
                        "drag-drop": "",
                        multiple: t.isMultiple
                    },
                    on: {
                        input: t.validateFiles
                    },
                    model: {
                        value: t.files,
                        callback: function(e) {
                            t.files = e
                        },
                        expression: "files"
                    }
                }, [i("section", {
                    staticClass: "section"
                }, [i("div", {
                    staticClass: "content has-text-centered"
                }, [i("p", [i("SvgIcon", {
                    staticClass: "answer-file__icon",
                    attrs: {
                        name: "upload"
                    }
                })], 1), i("div", {
                    staticClass: "answer-file__header"
                }, [t._v(t._s(t.$t("Нажмите, чтобы загрузить файл")))]), i("div", {
                    staticClass: "answer-file__text"
                }, [t._v(t._s(t.$t("Или перетяните его из папки в это поле")))])])])])], 1), i("div", {
                    staticClass: "tags"
                }, t._l(t.files, function(e, n) {
                    return i("span", {
                        key: n,
                        staticClass: "answer-file__file-tag tag is-primary"
                    }, [t._v(t._s(e.name)), i("button", {
                        staticClass: "delete is-small",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return t.deleteDropFile(n)
                            }
                        }
                    })])
                }), 0)], 1)
            },
            Ds = [],
            Ss = 10,
            $s = {
                components: {
                    SvgIcon: Ei
                },
                activated: function() {
                    this.files = this.getFiles()
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        files: this.getFiles(),
                        errors: []
                    }
                },
                computed: {
                    fileType: function() {
                        return o()(this.question, "options.fileType", null)
                    },
                    isMultiple: function() {
                        return "many" === o()(this.question, "select")
                    }
                },
                methods: {
                    deleteDropFile: function(t) {
                        this.$delete(this.files, t)
                    },
                    validateFiles: function(t) {
                        var e = this;
                        if (t) {
                            this.errors = [];
                            var i = [],
                                n = t;
                            U()(n) || (n = [t]), k()(n, function(t) {
                                t.size > 1024 * Ss * 1024 ? e.showMessage(e.$t("Файл {name} слишком большой", {
                                    name: t.name
                                })) : i.push(t)
                            }), this.files = i, this.$refs.upload.$refs.input.blur()
                        }
                    },
                    showMessage: function(t) {
                        this.$snackbar.open({
                            message: t,
                            type: "is-danger",
                            position: "is-bottom-right",
                            indefinite: !0,
                            duration: 5e3,
                            queue: !1
                        })
                    },
                    getFiles: function() {
                        var t = this.$store.getters["quiz/getAnswerValue"];
                        return t || (this.isMultiple ? [] : null)
                    }
                },
                watch: {
                    files: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            As = $s,
            Ts = (i("64ea"), Object(zi["a"])(As, qs, Ds, !1, null, null, null)),
            Os = Ts.exports,
            Ps = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "date-question"
                }, ["mask" === t.useType ? [t.isRange ? [i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    attrs: {
                        icon: "calendar-search",
                        "icon-text": t.$t("от")
                    },
                    on: {
                        click: function(e) {
                            return t.$refs.fromMaskedInput.setFocus()
                        }
                    }
                }, [i("MaskedDateInput", {
                    ref: "fromMaskedInput",
                    staticClass: "masked-input",
                    on: {
                        ready: t.applyRange
                    },
                    model: {
                        value: t.fromBuffer,
                        callback: function(e) {
                            t.fromBuffer = e
                        },
                        expression: "fromBuffer"
                    }
                })], 1), i("span", {
                    staticClass: "date-question__hyphen"
                }), i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    attrs: {
                        icon: "calendar-check",
                        "icon-text": t.$t("до")
                    },
                    on: {
                        click: function(e) {
                            return t.$refs.toMaskedInput.setFocus()
                        }
                    }
                }, [i("MaskedDateInput", {
                    ref: "toMaskedInput",
                    staticClass: "masked-input",
                    on: {
                        ready: t.applyRange
                    },
                    model: {
                        value: t.toBuffer,
                        callback: function(e) {
                            t.toBuffer = e
                        },
                        expression: "toBuffer"
                    }
                })], 1)] : [i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    attrs: {
                        icon: "calendar-search",
                        "icon-text": t.$t("дата"),
                        iconTextOnlyMobile: !0
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$refs.dateMaskedInput.setFocus()
                        }
                    }
                }, [i("MaskedDateInput", {
                    ref: "dateMaskedInput",
                    staticClass: "masked-input",
                    attrs: {
                        icon: "calendar-search"
                    },
                    on: {
                        ready: t.applyDate
                    },
                    model: {
                        value: t.dateBuffer,
                        callback: function(e) {
                            t.dateBuffer = e
                        },
                        expression: "dateBuffer"
                    }
                })], 1), t.hasTime ? [i("span", {
                    staticClass: "date-question__hyphen"
                }), i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    attrs: {
                        icon: "clock-outline",
                        "icon-text": t.$t("время")
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$refs.timeMaskedInput.setFocus()
                        }
                    }
                }, [i("MaskedTimeInput", {
                    ref: "timeMaskedInput",
                    staticClass: "masked-input",
                    on: {
                        ready: t.applyDate
                    },
                    model: {
                        value: t.timeBuffer,
                        callback: function(e) {
                            t.timeBuffer = e
                        },
                        expression: "timeBuffer"
                    }
                })], 1)] : t._e()]] : t._e(), "calendar" === t.useType ? [t.isRange ? [i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    class: [{
                        "date-question__extend-input_hidden": "mobile" === t.$mq
                    }],
                    attrs: {
                        icon: "calendar-search",
                        "icon-text": t.$t("от")
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.togglePicker("rangeDatepicker")
                        }
                    }
                }, [i("span", {
                    class: ["date-question__fake-input", {
                        "date-question__placeholder": null === t.from
                    }],
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.togglePicker("rangeDatepicker")
                        }
                    }
                }, [t._v(t._s(t.placeholderFrom))])]), i("span", {
                    staticClass: "date-question__hyphen"
                }), i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    class: [{
                        "date-question__extend-input_hidden": "mobile" === t.$mq
                    }],
                    attrs: {
                        icon: "calendar-check",
                        "icon-text": t.$t("до")
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.togglePicker("rangeDatepicker")
                        }
                    }
                }, [i("span", {
                    class: ["date-question__fake-input", {
                        "date-question__placeholder": null === t.to
                    }],
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.togglePicker("rangeDatepicker")
                        }
                    }
                }, [t._v(t._s(t.placeholderTo))])]), i("ExtendDatepicker", {
                    ref: "rangeDatepicker",
                    staticClass: "date-picker date-picker_hidden",
                    attrs: {
                        placeholder: t.placeholder,
                        "mobile-native": !1,
                        "month-names": t.monthNames,
                        "first-day-of-week": 1,
                        range: "",
                        inline: "mobile" === t.$mq,
                        "stay-open": ""
                    },
                    on: {
                        "active-change": t.saveWithoutGoingToNextStep
                    },
                    model: {
                        value: t.rangeBuffer,
                        callback: function(e) {
                            t.rangeBuffer = e
                        },
                        expression: "rangeBuffer"
                    }
                }, [i("div", {
                    staticClass: "date-question__button-wrapper"
                }, [i("button", {
                    class: ["date-question__button", {
                        "date-question__button_width_100": "mobile" === t.$mq
                    }],
                    on: {
                        click: t.clearRange
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "close-circle-outline"
                    }
                }), i("span", [t._v(t._s(t.$t("очистить")))])], 1), "mobile" !== t.$mq ? i("button", {
                    class: ["date-question__button", "date-question__button_apply", {
                        "date-question__button_apply-filled": t.answerFilled
                    }],
                    on: {
                        click: t.applyRange
                    }
                }, [i("span", [t._v(t._s(t.$t("применить")))])]) : t._e()])])] : [i("ExtendInput", {
                    staticClass: "date-question__extend-input",
                    class: [{
                        "date-question__extend-input_hidden": "mobile" === t.$mq
                    }],
                    attrs: {
                        icon: "calendar-search",
                        iconTextOnlyMobile: !0
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.togglePicker("datepicker")
                        }
                    }
                }, [i("ExtendDatepicker", {
                    ref: "datepicker",
                    staticClass: "date-picker",
                    attrs: {
                        "month-names": t.monthNames,
                        placeholder: t.placeholder,
                        readonly: !1,
                        "first-day-of-week": 1,
                        "mobile-native": !1,
                        inline: "mobile" === t.$mq,
                        "stay-open": ""
                    },
                    on: {
                        "active-change": t.saveWithoutGoingToNextStep
                    },
                    model: {
                        value: t.dateBuffer,
                        callback: function(e) {
                            t.dateBuffer = e
                        },
                        expression: "dateBuffer"
                    }
                }, [t.hasTime ? [i("span", {
                    staticClass: "time-picker__title",
                    class: {
                        "time-picker_highlight": t.highlightTimepicker
                    }
                }, [t._v(t._s(t.$t("Выберите время")))]), i("b-timepicker", {
                    ref: "timepicker",
                    staticClass: "time-picker",
                    class: {
                        "time-picker_highlight": t.highlightTimepicker
                    },
                    attrs: {
                        icon: "clock",
                        inline: ""
                    },
                    nativeOn: {
                        change: function(e) {
                            return t.timepickerChange(e)
                        }
                    },
                    model: {
                        value: t.timeBuffer,
                        callback: function(e) {
                            t.timeBuffer = e
                        },
                        expression: "timeBuffer"
                    }
                }), i("div", {
                    staticClass: "date-question__button-wrapper mb-1"
                }, [t.hasTime && "mobile" !== t.$mq ? i("button", {
                    staticClass: "date-question__button",
                    on: {
                        click: t.clearDate
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "close-circle-outline"
                    }
                }), i("span", [t._v(t._s(t.$t("очистить")))])], 1) : t._e(), t.hasTime && "mobile" !== t.$mq ? i("button", {
                    staticClass: "date-question__button date-question__button_apply",
                    on: {
                        click: function(e) {
                            t.timeBuffer = new Date
                        }
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "clock-outline"
                    }
                }), i("span", {
                    staticClass: "ml-1"
                }, [t._v(t._s(t.$t("сейчас")))])], 1) : t._e()]), "mobile" !== t.$mq ? i("button", {
                    class: ["date-question__button", "date-question__button_apply", "date-question__button_width_100", {
                        "date-question__button_apply-filled": t.answerFilled
                    }],
                    attrs: {
                        disabled: !t.answerFilled
                    },
                    on: {
                        click: t.applyDate
                    }
                }, [i("span", [t._v(t._s(t.$t("применить")))])]) : t._e()] : [i("div", {
                    staticClass: "date-question__button-wrapper"
                }, ["mobile" !== t.$mq ? i("button", {
                    staticClass: "date-question__button",
                    on: {
                        click: t.clearDate
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "close-circle-outline"
                    }
                }), i("span", [t._v(t._s(t.$t("очистить")))])], 1) : t._e(), "mobile" !== t.$mq ? i("button", {
                    class: ["date-question__button", "date-question__button_apply", {
                        "date-question__button_apply-filled": t.answerFilled
                    }],
                    on: {
                        click: t.applyDate
                    }
                }, [i("span", [t._v(t._s(t.$t("применить")))])]) : t._e()])]], 2)], 1)]] : t._e()], 2)
            },
            zs = [],
            Ms = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("masked-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.datePlaceholder,
                        type: "text",
                        mask: t.mask,
                        inputmode: "numeric",
                        pattern: "[0-9]*"
                    },
                    on: {
                        blur: function(e) {
                            t.focused = !1
                        },
                        focus: function(e) {
                            t.focused = !0
                        }
                    },
                    model: {
                        value: t.date,
                        callback: function(e) {
                            t.date = e
                        },
                        expression: "date"
                    }
                })
            },
            Es = [],
            Bs = i("f455"),
            Vs = {
                components: {
                    MaskedInput: Bs["a"],
                    Icon: Bi["a"]
                },
                props: {
                    iconText: {
                        type: String,
                        default: function() {
                            return ""
                        }
                    },
                    icon: String,
                    value: Date,
                    placeholder: {
                        type: String,
                        default: function() {
                            return ""
                        }
                    },
                    min: {
                        type: Date,
                        default: function() {
                            return null
                        }
                    },
                    max: {
                        type: Date,
                        default: function() {
                            return null
                        }
                    }
                },
                data: function() {
                    return {
                        dateBuffer: null,
                        selectionBuffer: 0,
                        focused: !1
                    }
                },
                computed: {
                    date: {
                        get: function() {
                            return this.dateBuffer
                        },
                        set: function(t) {
                            var e = this.$refs.input;
                            this.validateDateParts(pt.getPartsDate(t, pt.localeDateString())) ? (this.dateBuffer = t, this.dateBuffer.toString().indexOf("_") + 1 === 0 && "" !== this.dateBuffer.toString() ? (this.$emit("input", pt.getDateObjectByParts(pt.getPartsDate(t, pt.localeDateString()))), this.$emit("ready")) : this.$emit("input", null), this.selectionBuffer = o()(e, "maskCore.selection.start", 0)) : (e.maskCore.setValue(this.dateBuffer), M()(e, "maskCore.selection.start", this.selectionBuffer), M()(e, "maskCore.selection.end", this.selectionBuffer), e.updateToCoreState())
                        }
                    },
                    text: function() {
                        return this.iconText.length > 0 ? this.iconText : this.$t("дата")
                    },
                    datePlaceholder: function() {
                        return this.placeholder.length > 0 ? this.placeholder : null !== this.min ? pt.getLocaleFormattedDate(this.min, pt.localeDateString()) : pt.getLocaleFormattedDate(new Date, pt.localeDateString())
                    },
                    mask: function() {
                        var t = pt.localeDateString();
                        return t.replace(/(y|d|m)/g, 1)
                    }
                },
                methods: {
                    validateDateParts: function(t) {
                        if (null === t) return !0;
                        var e = t.year,
                            i = t.month,
                            n = t.day,
                            s = void 0 !== e ? Number(e) : null,
                            a = void 0 !== i ? Number(i) : null,
                            r = void 0 !== n ? Number(n) : null,
                            o = null !== this.min ? Number(this.min.getFullYear()) : null,
                            u = null !== this.min ? Number(this.min.getMonth()) : null,
                            l = null !== this.min ? Number(this.min.getDate()) : null,
                            c = null !== this.max ? Number(this.max.getFullYear()) : null,
                            d = null !== this.max ? Number(this.max.getMonth()) : null,
                            h = null !== this.max ? Number(this.max.getDate()) : null;
                        if (null !== s && 4 === e.toString().length) {
                            if (null !== o && o > s) return !1;
                            if (null !== c && c < s) return !1
                        }
                        if (null !== a) {
                            if (1 === i.toString().length && a > 1) return !1;
                            if (2 === i.toString().length && (a > 12 || "00" === i.toString())) return !1;
                            if (null !== s && 4 === e.toString().length && 2 === i.toString().length) {
                                if (null !== o && o <= s && o + 1 > i) return !1;
                                if (null !== c && c >= s && c + 1 < i) return !1
                            }
                        }
                        if (null !== r) {
                            if (1 === n.toString().length && r > 3) return !1;
                            if (2 === n.toString().length && (r > 31 || "00" === n.toString())) return !1;
                            if (null !== a && 2 === i.toString().length) {
                                var f;
                                switch (a - 1) {
                                    case 1:
                                        f = null !== s && 4 === e.toString().length ? s % 4 === 0 && s % 100 || s % 400 === 0 ? 29 : 28 : 29;
                                        break;
                                    case 8:
                                    case 3:
                                    case 5:
                                    case 10:
                                        f = 30;
                                        break;
                                    default:
                                        f = 31;
                                        break
                                }
                                if (r > f) return !1;
                                if (null !== s && 4 === e.toString().length && 2 === n.toString().length) {
                                    if (null !== o && o <= s && u + 1 <= a && l > r) return !1;
                                    if (null !== c && c >= s && d + 1 >= a && h < r) return !1
                                }
                            }
                        }
                        return !0
                    },
                    setFocus: function() {
                        var t = this;
                        this.focused || (this.focused = !0, this.$nextTick(function() {
                            t.$refs.input.$el.focus()
                        }))
                    }
                },
                watch: {
                    value: function(t) {
                        t || (this.dateBuffer = null)
                    }
                }
            },
            Ls = Vs,
            Is = Object(zi["a"])(Ls, Ms, Es, !1, null, null, null),
            js = Is.exports,
            Fs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("masked-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.placeholderValid,
                        type: "text",
                        mask: "11:11",
                        inputmode: "numeric",
                        pattern: "[0-9]*"
                    },
                    on: {
                        blur: function(e) {
                            t.focused = !1
                        },
                        focus: function(e) {
                            t.focused = !0
                        }
                    },
                    model: {
                        value: t.time,
                        callback: function(e) {
                            t.time = e
                        },
                        expression: "time"
                    }
                })
            },
            Rs = [],
            Ns = (i("ee1d"), {
                components: {
                    MaskedInput: Bs["a"],
                    Icon: Bi["a"]
                },
                props: {
                    iconText: String,
                    icon: String,
                    value: Date,
                    placeholder: {
                        type: String,
                        default: function() {
                            return ""
                        }
                    }
                },
                data: function() {
                    return {
                        timeBuffer: null,
                        selectionBuffer: 0,
                        focused: !1
                    }
                },
                computed: {
                    time: {
                        get: function() {
                            return this.timeBuffer
                        },
                        set: function(t) {
                            var e = this.$refs.input;
                            if (this.validateTime(t))
                                if (this.timeBuffer = t, this.selectionBuffer = o()(this.$refs.input, "maskCore.selection.start", 0), this.timeBuffer.toString().indexOf("_") + 1 === 0 && "" !== this.timeBuffer.toString()) {
                                    var i = this.timeBuffer.split(":");
                                    this.$emit("input", new Date((new Date).setHours(i[0], i[1]))), this.$emit("ready")
                                } else this.$emit("input", null);
                            else e.maskCore.setValue(this.timeBuffer), M()(e, "maskCore.selection.start", this.selectionBuffer), M()(e, "maskCore.selection.end", this.selectionBuffer), e.updateToCoreState()
                        }
                    },
                    placeholderValid: function() {
                        return this.placeholder.length > 0 ? this.placeholder : "09:00"
                    }
                },
                methods: {
                    validateTime: function(t) {
                        if (null !== t && "" !== t) {
                            var e = t.split(":");
                            e[0] = e[0].replace("_", ""), e[1] = e[1].replace("_", "");
                            var i = Number(e[0]),
                                n = Number(e[1]);
                            if (!Number.isNaN(i)) {
                                if (1 === e[0].toString().length && i > 2) return !1;
                                if (2 === e[0].toString().length && i > 23) return !1
                            }
                            if (!Number.isNaN(n)) {
                                if (1 === e[1].toString().length && n > 5) return !1;
                                if (2 === e[1].toString().length && n > 59) return !1
                            }
                        }
                        return !0
                    },
                    setFocus: function() {
                        var t = this;
                        this.focused || (this.$nextTick(function() {
                            t.$refs.input.$el.focus()
                        }), this.focused = !0)
                    }
                },
                watch: {
                    value: function(t) {
                        t || (this.timeBuffer = null)
                    }
                }
            }),
            Hs = Ns,
            Qs = Object(zi["a"])(Hs, Fs, Rs, !1, null, null, null),
            Us = Qs.exports,
            Ws = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "datepicker control",
                    class: [t.size, {
                        "is-expanded": t.expanded
                    }]
                }, [!t.isMobile || t.inline ? i("b-dropdown", {
                    ref: "dropdown",
                    attrs: {
                        position: t.position,
                        disabled: t.disabled,
                        inline: t.inline
                    },
                    on: {
                        "active-change": function(e) {
                            return t.$emit("active-change", e)
                        }
                    }
                }, [t.inline ? t._e() : i("b-input", t._b({
                    ref: "input",
                    attrs: {
                        slot: "trigger",
                        autocomplete: "off",
                        value: t.formatValue(t.dateSelected),
                        placeholder: t.placeholder,
                        size: t.size,
                        icon: t.icon,
                        "icon-pack": t.iconPack,
                        rounded: t.rounded,
                        loading: t.loading,
                        disabled: t.disabled,
                        readonly: t.readonly
                    },
                    on: {
                        focus: function(e) {
                            return t.$emit("focus", e)
                        },
                        blur: function(e) {
                            return t.$emit("blur", e)
                        }
                    },
                    nativeOn: {
                        change: function(e) {
                            return t.onChange(e.target.value)
                        }
                    },
                    slot: "trigger"
                }, "b-input", t.$attrs, !1)), i("b-dropdown-item", {
                    attrs: {
                        disabled: t.disabled,
                        custom: ""
                    }
                }, [i("header", {
                    staticClass: "datepicker-header"
                }, [void 0 !== t.$slots.header && t.$slots.header.length ? [t._t("header")] : i("div", {
                    staticClass: "pagination field is-centered",
                    class: t.size
                }, [t.isFirstMonth || t.disabled ? t._e() : i("a", {
                    staticClass: "pagination-previous",
                    attrs: {
                        role: "button",
                        href: "#",
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.decrementMonth(e)
                        },
                        keydown: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.decrementMonth(e))
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : (e.preventDefault(), t.decrementMonth(e))
                        }]
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "chevron-left",
                        pack: t.iconPack,
                        both: "",
                        type: "is-primary is-clickable"
                    }
                })], 1), i("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isLastMonth && !t.disabled,
                        expression: "!isLastMonth && !disabled"
                    }],
                    staticClass: "pagination-next",
                    attrs: {
                        role: "button",
                        href: "#",
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.incrementMonth(e)
                        },
                        keydown: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.incrementMonth(e))
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : (e.preventDefault(), t.incrementMonth(e))
                        }]
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "chevron-right",
                        pack: t.iconPack,
                        both: "",
                        type: "is-primary is-clickable"
                    }
                })], 1), i("div", {
                    staticClass: "pagination-list"
                }, [i("b-field", [i("b-select", {
                    attrs: {
                        disabled: t.disabled,
                        size: t.size
                    },
                    model: {
                        value: t.focusedDateData.month,
                        callback: function(e) {
                            t.$set(t.focusedDateData, "month", e)
                        },
                        expression: "focusedDateData.month"
                    }
                }, t._l(t.monthNames, function(e, n) {
                    return i("option", {
                        key: e,
                        domProps: {
                            value: n
                        }
                    }, [t._v("\n                  " + t._s(e) + "\n                ")])
                }), 0), i("b-select", {
                    attrs: {
                        disabled: t.disabled,
                        size: t.size
                    },
                    model: {
                        value: t.focusedDateData.year,
                        callback: function(e) {
                            t.$set(t.focusedDateData, "year", e)
                        },
                        expression: "focusedDateData.year"
                    }
                }, t._l(t.listOfYears, function(e) {
                    return i("option", {
                        key: e,
                        domProps: {
                            value: e
                        }
                    }, [t._v("\n                  " + t._s(e) + "\n                ")])
                }), 0)], 1)], 1)])], 2), i("b-datepicker-table", {
                    attrs: {
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        "first-day-of-week": t.firstDayOfWeek,
                        "min-date": t.minDate,
                        "max-date": t.maxDate,
                        focused: t.focusedDateData,
                        disabled: t.disabled,
                        "unselectable-dates": t.unselectableDates,
                        "unselectable-days-of-week": t.unselectableDaysOfWeek,
                        "selectable-dates": t.selectableDates,
                        events: t.events,
                        indicators: t.indicators,
                        range: t.range
                    },
                    on: {
                        close: function(e) {
                            t.$refs.dropdown.isActive = !1
                        }
                    },
                    model: {
                        value: t.dateSelected,
                        callback: function(e) {
                            t.dateSelected = e
                        },
                        expression: "dateSelected"
                    }
                }), void 0 !== t.$slots.default && t.$slots.default.length ? i("footer", {
                    staticClass: "datepicker-footer"
                }, [t._t("default")], 2) : t._e()], 1)], 1) : i("b-input", t._b({
                    ref: "input",
                    attrs: {
                        type: "date",
                        autocomplete: "off",
                        value: t.formatYYYYMMDD(t.value),
                        placeholder: t.placeholder,
                        size: t.size,
                        icon: t.icon,
                        "icon-pack": t.iconPack,
                        loading: t.loading,
                        max: t.formatYYYYMMDD(t.maxDate),
                        min: t.formatYYYYMMDD(t.minDate),
                        disabled: t.disabled,
                        readonly: !1
                    },
                    on: {
                        focus: function(e) {
                            return t.$emit("focus", e)
                        },
                        blur: function(e) {
                            return t.$emit("blur", e)
                        }
                    },
                    nativeOn: {
                        change: function(e) {
                            return t.onChangeNativePicker(e)
                        }
                    }
                }, "b-input", t.$attrs, !1))], 1)
            },
            Ys = [],
            Gs = i("bd86"),
            Zs = {
                defaultContainerElement: null,
                defaultIconPack: "mdi",
                defaultDialogConfirmText: null,
                defaultDialogCancelText: null,
                defaultSnackbarDuration: 3500,
                defaultToastDuration: 2e3,
                defaultTooltipType: "is-primary",
                defaultTooltipAnimated: !1,
                defaultInputAutocomplete: "on",
                defaultDateFormatter: null,
                defaultDateParser: null,
                defaultDayNames: null,
                defaultMonthNames: null,
                defaultFirstDayOfWeek: null,
                defaultUnselectableDaysOfWeek: null,
                defaultTimeFormatter: null,
                defaultTimeParser: null,
                defaultModalScroll: null,
                defaultDatepickerMobileNative: !0,
                defaultTimepickerMobileNative: !0,
                defaultNoticeQueue: !0,
                defaultInputHasCounter: !0
            },
            Ks = Zs,
            Js = {
                props: {
                    iconPack: String
                },
                data: function() {
                    return {
                        newIconPack: this.iconPack || Ks.defaultIconPack
                    }
                }
            },
            Xs = {
                mixins: [Js],
                props: {
                    size: String,
                    expanded: Boolean,
                    loading: Boolean,
                    rounded: Boolean,
                    icon: String,
                    autocomplete: String,
                    maxlength: [Number, String]
                },
                data: function() {
                    return {
                        isValid: !0,
                        isFocused: !1
                    }
                },
                computed: {
                    parentField: function() {
                        for (var t = this.$parent, e = 0; e < 3; e++) t && !t.$data._isField && (t = t.$parent);
                        return t
                    },
                    statusType: function() {
                        if (this.parentField && this.parentField.newType) {
                            if ("string" === typeof this.parentField.newType) return this.parentField.newType;
                            for (var t in this.parentField.newType)
                                if (this.parentField.newType[t]) return t
                        }
                    },
                    statusMessage: function() {
                        if (this.parentField) return this.parentField.newMessage
                    },
                    iconSize: function() {
                        switch (this.size) {
                            case "is-small":
                                return this.size;
                            case "is-medium":
                                return;
                            case "is-large":
                                return "mdi" === this.newIconPack ? "is-medium" : ""
                        }
                    }
                },
                methods: {
                    focus: function() {
                        var t = this;
                        void 0 !== this.$data._elementRef && this.$nextTick(function() {
                            return t.$el.querySelector(t.$data._elementRef).focus()
                        })
                    },
                    onBlur: function(t) {
                        this.isFocused = !1, this.$emit("blur", t), this.checkHtml5Validity()
                    },
                    onFocus: function(t) {
                        this.isFocused = !0, this.$emit("focus", t)
                    },
                    checkHtml5Validity: function() {
                        if (void 0 !== this.$refs[this.$data._elementRef]) {
                            var t = this.$el.querySelector(this.$data._elementRef),
                                e = null,
                                i = null,
                                n = !0;
                            return t.checkValidity() || (e = "is-danger", i = t.validationMessage, n = !1), this.isValid = n, this.parentField && (this.parentField.type || (this.parentField.newType = e), this.parentField.message || (this.parentField.newMessage = i)), this.isValid
                        }
                    }
                }
            };
        var ta = {
            Android: function() {
                return "undefined" !== typeof window && window.navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return "undefined" !== typeof window && window.navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return "undefined" !== typeof window && window.navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return "undefined" !== typeof window && window.navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return "undefined" !== typeof window && window.navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return ta.Android() || ta.BlackBerry() || ta.iOS() || ta.Opera() || ta.Windows()
            }
        };
        var ea, ia, na = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("section", {
                    staticClass: "datepicker-table"
                }, [i("header", {
                    staticClass: "datepicker-header"
                }, t._l(t.visibleDayNames, function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "datepicker-cell"
                    }, [t._v("\n      " + t._s(e) + "\n    ")])
                }), 0), i("div", {
                    staticClass: "datepicker-body",
                    class: [{
                        "has-events": t.hasEvents
                    }, {
                        "datepicker-maximum-weeks": t.maximumWeeksFlag
                    }]
                }, t._l(t.weeksInThisMonth(t.focused.month, t.focused.year), function(e, n) {
                    return i("b-datepicker-table-row", {
                        key: n,
                        attrs: {
                            "selected-date": t.value,
                            week: e,
                            month: t.focused.month,
                            "min-date": t.minDate,
                            "max-date": t.maxDate,
                            disabled: t.disabled,
                            "unselectable-dates": t.unselectableDates,
                            "unselectable-days-of-week": t.unselectableDaysOfWeek,
                            "selectable-dates": t.selectableDates,
                            events: t.eventsInThisWeek(e, n),
                            indicators: t.indicators,
                            range: t.range,
                            first: t.firstDate,
                            dayshighlight: t.daysHighlight
                        },
                        on: {
                            "day-leave": function(e) {
                                t.dayUnderMouse = e
                            },
                            "day-over": function(e) {
                                t.dayUnderMouse = e
                            },
                            select: t.updateSelectedDate
                        }
                    })
                }), 1)])
            },
            sa = [],
            aa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "datepicker-row"
                }, [t._l(t.week, function(e, n) {
                    return [t.selectableDate(e) && !t.disabled ? i("a", {
                        key: n,
                        staticClass: "datepicker-cell",
                        class: [t.classObject(e), {
                            "is-first": t.addSelectClass(e)
                        }, {
                            "is-within": t.dayHighlightMatch(e)
                        }, {
                            "has-event": t.eventsDateMatch(e)
                        }, t.indicators],
                        attrs: {
                            role: "button",
                            href: "#",
                            disabled: t.disabled
                        },
                        on: {
                            click: function(i) {
                                return i.preventDefault(), t.emitChosenDate(e)
                            },
                            keydown: [function(i) {
                                return !i.type.indexOf("key") && t._k(i.keyCode, "enter", 13, i.key, "Enter") ? null : (i.preventDefault(), t.emitChosenDate(e))
                            }, function(i) {
                                return !i.type.indexOf("key") && t._k(i.keyCode, "space", 32, i.key, [" ", "Spacebar"]) ? null : (i.preventDefault(), t.emitChosenDate(e))
                            }],
                            mouseleave: function(i) {
                                return t.$emit("day-leave", e)
                            },
                            mouseover: function(i) {
                                return t.$emit("day-over", e)
                            }
                        }
                    }, [t._v("\n      " + t._s(e.getDate()) + "\n\n      "), t.eventsDateMatch(e) ? i("div", {
                        staticClass: "events"
                    }, t._l(t.eventsDateMatch(e), function(t, e) {
                        return i("div", {
                            key: e,
                            staticClass: "event",
                            class: t.type
                        })
                    }), 0) : t._e()]) : i("div", {
                        key: n,
                        staticClass: "datepicker-cell",
                        class: [t.classObject(e), {
                            "is-within": t.dayHighlightMatch(e)
                        }, {
                            "is-first": t.addSelectClass(e)
                        }],
                        on: {
                            mouseleave: function(i) {
                                return t.$emit("day-leave", e)
                            },
                            mouseover: function(i) {
                                return t.$emit("day-over", e)
                            }
                        }
                    }, [t._v("\n      " + t._s(e.getDate()) + "\n    ")])]
                })], 2)
            },
            ra = [],
            oa = {
                name: "BDatepickerTableRow",
                props: {
                    selectedDate: {
                        type: [Date, Array]
                    },
                    week: {
                        type: Array,
                        required: !0
                    },
                    month: {
                        type: Number,
                        required: !0
                    },
                    first: Date,
                    minDate: Date,
                    maxDate: Date,
                    disabled: Boolean,
                    unselectableDates: Array,
                    unselectableDaysOfWeek: Array,
                    selectableDates: Array,
                    events: Array,
                    indicators: String,
                    dayshighlight: Array
                },
                methods: {
                    selectableDate: function(t) {
                        var e = [];
                        if (this.minDate && e.push(t >= this.minDate), this.maxDate && e.push(t <= this.maxDate), e.push(t.getMonth() === this.month), this.selectableDates)
                            for (var i = 0; i < this.selectableDates.length; i++) {
                                var n = this.selectableDates[i];
                                if (t.getDate() === n.getDate() && t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth()) return !0;
                                e.push(!1)
                            }
                        if (this.unselectableDates)
                            for (var s = 0; s < this.unselectableDates.length; s++) {
                                var a = this.unselectableDates[s];
                                e.push(t.getDate() !== a.getDate() || t.getFullYear() !== a.getFullYear() || t.getMonth() !== a.getMonth())
                            }
                        if (this.unselectableDaysOfWeek)
                            for (var r = 0; r < this.unselectableDaysOfWeek.length; r++) {
                                var o = this.unselectableDaysOfWeek[r];
                                e.push(t.getDay() !== o)
                            }
                        return e.indexOf(!1) < 0
                    },
                    emitChosenDate: function(t) {
                        this.disabled || this.selectableDate(t) && this.$emit("select", t)
                    },
                    eventsDateMatch: function(t) {
                        if (!this.events.length) return !1;
                        for (var e = [], i = 0; i < this.events.length; i++) this.events[i].date.getDay() === t.getDay() && e.push(this.events[i]);
                        return !!e.length && e
                    },
                    classObject: function(t) {
                        function e(t, e) {
                            return !!Array.isArray(e) && (t > e[0] && t < e[1])
                        }
                        return {
                            "is-selected": this.dateMatch(t, this.selectedDate) || e(t, this.selectedDate),
                            "is-first": this.dateMatch(t, Array.isArray(this.selectedDate) && this.selectedDate[0]),
                            "is-within": e(t, this.selectedDate),
                            "is-last": this.dateMatch(t, Array.isArray(this.selectedDate) && this.selectedDate[1]),
                            "is-today": this.dateMatch(t, new Date),
                            "is-selectable": this.selectableDate(t) && !this.disabled,
                            "is-unselectable": !this.selectableDate(t) || this.disabled
                        }
                    },
                    dateMatch: function(t, e) {
                        return !(!t || !e) && (Array.isArray(e) ? e.some(function(e) {
                            return t.getDate() === e.getDate() && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()
                        }) : t.getDate() === e.getDate() && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth())
                    },
                    addSelectClass: function(t) {
                        return this.dateMatch(t, this.first)
                    },
                    dayHighlightMatch: function(t) {
                        return (void 0 === this.dayshighlight || 0 !== this.dayshighlight.length) && this.dateMatch(t, this.dayshighlight)
                    }
                }
            },
            ua = oa,
            la = Object(zi["a"])(ua, aa, ra, !1, null, null, null),
            ca = la.exports,
            da = {
                name: "BDatepickerTable",
                components: Object(Gs["a"])({}, ca.name, ca),
                props: {
                    value: {
                        type: [Date, Array]
                    },
                    dayNames: Array,
                    monthNames: Array,
                    firstDayOfWeek: Number,
                    events: Array,
                    indicators: String,
                    minDate: Date,
                    maxDate: Date,
                    focused: Object,
                    disabled: Boolean,
                    unselectableDates: Array,
                    unselectableDaysOfWeek: Array,
                    selectableDates: Array,
                    range: Boolean
                },
                data: function() {
                    return {
                        selectedBeginDate: void 0,
                        selectedEndDate: void 0,
                        dayUnderMouse: null
                    }
                },
                computed: {
                    firstDate: function() {
                        return this.selectedBeginDate
                    },
                    daysHighlight: function() {
                        if (null === this.dayUnderMouse) return [];
                        if (this.range && void 0 !== this.selectedBeginDate && void 0 === this.selectedEndDate) {
                            var t, e;
                            t = this.selectedBeginDate < this.dayUnderMouse ? this.selectedBeginDate : this.dayUnderMouse, e = this.selectedBeginDate < this.dayUnderMouse ? this.dayUnderMouse : this.selectedBeginDate;
                            var i = new Array,
                                n = new Date(t);
                            while (n <= e) i.push(new Date(n)), n.setDate(n.getDate() + 1);
                            return i
                        }
                    },
                    maximumWeeksFlag: function() {
                        var t = this.weeksInThisMonth(this.focused.month, this.focused.year);
                        return 6 === t.length
                    },
                    visibleDayNames: function() {
                        var t = [],
                            e = this.firstDayOfWeek;
                        while (t.length < this.dayNames.length) {
                            var i = this.dayNames[e % this.dayNames.length];
                            t.push(i), e++
                        }
                        return t
                    },
                    hasEvents: function() {
                        return this.events && this.events.length
                    },
                    eventsInThisMonth: function() {
                        if (!this.events) return [];
                        for (var t = [], e = 0; e < this.events.length; e++) {
                            var i = this.events[e];
                            i.hasOwnProperty("date") || (i = {
                                date: i
                            }), i.hasOwnProperty("type") || (i.type = "is-primary"), i.date.getMonth() === this.focused.month && i.date.getFullYear() === this.focused.year && t.push(i)
                        }
                        return t
                    }
                },
                watch: {
                    value: function(t) {
                        null === t && this.selectedEndDate && (this.selectedBeginDate = void 0, this.selectedEndDate = void 0)
                    }
                },
                methods: {
                    updateSelectedDate: function(t) {
                        this.range ? this.handleSelectRangeDate(t) : this.$emit("input", t)
                    },
                    handleSelectRangeDate: function(t) {
                        this.selectedBeginDate && this.selectedEndDate ? (this.$emit("input", null), this.selectedBeginDate = t, this.selectedEndDate = void 0) : this.selectedBeginDate && !this.selectedEndDate ? (this.selectedBeginDate > t ? (this.selectedEndDate = this.selectedBeginDate, this.selectedBeginDate = t, this.$parent.$parent.$parent.focusedDateData.month = this.selectedBeginDate.getMonth(), this.$parent.$parent.$parent.focusedDateData.year = this.selectedBeginDate.getFullYear()) : (this.selectedEndDate = t, this.$parent.$parent.$parent.focusedDateData.month = this.selectedEndDate.getMonth(), this.$parent.$parent.$parent.focusedDateData.year = this.selectedEndDate.getFullYear()), this.$emit("input", [this.selectedBeginDate, this.selectedEndDate])) : this.selectedBeginDate = t
                    },
                    weekBuilder: function(t, e, i) {
                        for (var n = new Date(i, e), s = [], a = new Date(i, e, t).getDay(), r = a >= this.firstDayOfWeek ? a - this.firstDayOfWeek : 7 - this.firstDayOfWeek + a, o = 1, u = 0; u < r; u++) s.unshift(new Date(n.getFullYear(), n.getMonth(), t - o)), o++;
                        s.push(new Date(i, e, t));
                        var l = 1;
                        while (s.length < 7) s.push(new Date(i, e, t + l)), l++;
                        return s
                    },
                    weeksInThisMonth: function(t, e) {
                        var i = [],
                            n = new Date(e, t + 1, 0).getDate(),
                            s = 1;
                        while (s <= n + 6) {
                            var a = this.weekBuilder(s, t, e),
                                r = !1;
                            a.forEach(function(e) {
                                e.getMonth() === t && (r = !0)
                            }), r && i.push(a), s += 7
                        }
                        return i
                    },
                    eventsInThisWeek: function(t, e) {
                        if (!this.eventsInThisMonth.length) return [];
                        var i = [],
                            n = [];
                        n = this.weeksInThisMonth(this.focused.month, this.focused.year);
                        for (var s = 0; s < n[e].length; s++)
                            for (var a = 0; a < this.eventsInThisMonth.length; a++) {
                                var r = this.eventsInThisMonth[a].date.getTime();
                                r === n[e][s].getTime() && i.push(this.eventsInThisMonth[a])
                            }
                        return i
                    }
                }
            },
            ha = da,
            fa = Object(zi["a"])(ha, na, sa, !1, null, null, null),
            ma = fa.exports,
            pa = {
                name: "BDatepicker",
                components: Object(Gs["a"])({}, ma.name, ma),
                mixins: [Xs],
                inheritAttrs: !1,
                props: {
                    value: {
                        type: [Date, Array]
                    },
                    dayNames: {
                        type: Array,
                        default: function() {
                            return Array.isArray(Ks.defaultDayNames) ? Ks.defaultDayNames : ["Su", "M", "Tu", "W", "Th", "F", "S"]
                        }
                    },
                    monthNames: {
                        type: Array,
                        default: function() {
                            return Array.isArray(Ks.defaultMonthNames) ? Ks.defaultMonthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        }
                    },
                    firstDayOfWeek: {
                        type: Number,
                        default: function() {
                            return "number" === typeof Ks.defaultFirstDayOfWeek ? Ks.defaultFirstDayOfWeek : 0
                        }
                    },
                    inline: Boolean,
                    minDate: Date,
                    maxDate: Date,
                    focusedDate: Date,
                    placeholder: String,
                    readonly: {
                        type: Boolean,
                        default: !0
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    unselectableDates: Array,
                    unselectableDaysOfWeek: {
                        type: Array,
                        default: function() {
                            return Ks.defaultUnselectableDaysOfWeek
                        }
                    },
                    selectableDates: Array,
                    dateFormatter: {
                        type: Function,
                        default: function(t) {
                            if ("function" === typeof Ks.defaultDateFormatter) return Ks.defaultDateFormatter(t);
                            var e = Array.isArray(t) ? t : [t];
                            return e.map(function(t) {
                                var e = "".concat(t.getFullYear(), "/").concat(t.getMonth() + 1, "/").concat(t.getDate()),
                                    i = new Date(e);
                                return i.toLocaleDateString()
                            }).join(" - ")
                        }
                    },
                    dateParser: {
                        type: Function,
                        default: function(t) {
                            return "function" === typeof Ks.defaultDateParser ? Ks.defaultDateParser(t) : new Date(Date.parse(t))
                        }
                    },
                    mobileNative: {
                        type: Boolean,
                        default: function() {
                            return Ks.defaultDatepickerMobileNative
                        }
                    },
                    position: String,
                    events: Array,
                    indicators: {
                        type: String,
                        default: "dots"
                    },
                    stayOpen: {
                        type: Boolean,
                        default: !1
                    },
                    range: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    var t = Array.isArray(this.value) ? this.value[0] : this.value || this.focusedDate || new Date;
                    return {
                        dateSelected: this.value,
                        focusedDateData: {
                            month: t.getMonth(),
                            year: t.getFullYear()
                        },
                        _elementRef: "input",
                        _isDatepicker: !0
                    }
                },
                computed: {
                    listOfYears: function() {
                        for (var t = this.maxDate ? this.maxDate.getFullYear() : Math.max((new Date).getFullYear(), this.focusedDateData.year) + 3, e = this.minDate ? this.minDate.getFullYear() : 1900, i = [], n = e; n <= t; n++) i.push(n);
                        return i.reverse()
                    },
                    isFirstMonth: function() {
                        if (!this.minDate) return !1;
                        var t = new Date(this.focusedDateData.year, this.focusedDateData.month),
                            e = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
                        return t <= e
                    },
                    isLastMonth: function() {
                        if (!this.maxDate) return !1;
                        var t = new Date(this.focusedDateData.year, this.focusedDateData.month),
                            e = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
                        return t >= e
                    },
                    isMobile: function() {
                        return this.mobileNative && ta.any()
                    }
                },
                watch: {
                    dateSelected: function(t) {
                        Array.isArray(t) ? t[1] : t || new Date, this.$emit("input", t), this.$refs.dropdown && !this.stayOpen && (this.$refs.dropdown.isActive = !1)
                    },
                    value: function(t) {
                        this.dateSelected = t, this.stayOpen || this.togglePicker(!1), !this.isValid && this.$refs.input.checkHtml5Validity()
                    },
                    focusedDate: function(t) {
                        t && (this.focusedDateData = {
                            month: t.getMonth(),
                            year: t.getFullYear()
                        })
                    },
                    "focusedDateData.month": function(t) {
                        this.$emit("change-month", t)
                    },
                    "focusedDateData.year": function(t) {
                        this.$emit("change-year", t)
                    }
                },
                methods: {
                    updateSelectedDate: function(t) {
                        this.dateSelected = t
                    },
                    onChange: function(t) {
                        var e = this.dateParser(t);
                        e && !isNaN(e) ? this.dateSelected = e : (this.dateSelected = null, this.$refs.input.newValue = this.dateSelected)
                    },
                    formatValue: function(t) {
                        if (t) {
                            var e = Array.isArray(t) && t.every(function(t) {
                                    return !isNaN(t)
                                }),
                                i = !isNaN(t);
                            return e || i ? this.dateFormatter(t) : null
                        }
                    },
                    decrementMonth: function() {
                        this.disabled || (this.focusedDateData.month > 0 ? this.focusedDateData.month -= 1 : (this.focusedDateData.month = 11, this.focusedDateData.year -= 1))
                    },
                    incrementMonth: function() {
                        this.disabled || (this.focusedDateData.month < 11 ? this.focusedDateData.month += 1 : (this.focusedDateData.month = 0, this.focusedDateData.year += 1))
                    },
                    formatYYYYMMDD: function(t) {
                        var e = new Date(t);
                        if (t && !isNaN(e)) {
                            var i = e.getFullYear(),
                                n = e.getMonth() + 1,
                                s = e.getDate();
                            return "".concat(i, "-").concat((n < 10 ? "0" : "") + n, "-").concat((s < 10 ? "0" : "") + s)
                        }
                        return ""
                    },
                    onChangeNativePicker: function(t) {
                        var e = t.target.value;
                        this.dateSelected = e ? new Date(e.replace(/-/g, "/")) : null
                    },
                    toggle: function() {
                        if (this.mobileNative && this.isMobile) {
                            var t = this.$refs.input.$refs.input;
                            return t.focus(), void t.click()
                        }
                        this.$refs.dropdown.toggle()
                    }
                }
            },
            ga = pa,
            ba = Object(zi["a"])(ga, Ws, Ys, !1, null, null, null),
            va = ba.exports,
            _a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "extend-input",
                    class: [{
                        "extend-input_focused": t.focused
                    }],
                    on: {
                        "!focus": function(e) {
                            t.focused = !0
                        },
                        "!blur": function(e) {
                            t.focused = !1
                        },
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.$emit("click", e)
                        }
                    }
                }, [i("span", {
                    staticClass: "extend-input__icon",
                    on: {
                        click: function(e) {
                            return t.$emit("click", e)
                        }
                    }
                }, [t.icon ? i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-" + t.icon]
                    }
                }) : t._e(), i("span", {
                    staticClass: "extend-input__icon-text",
                    class: [{
                        "extend-input__icon-text_default": t.iconTextOnlyMobile
                    }]
                }, [t._v(t._s(t.iconText))])], 1), i("span", {
                    staticClass: "extend-input__input"
                }, [t._t("default")], 2)])
            },
            ya = [],
            wa = {
                name: "extend-input",
                components: {
                    Icon: Bi["a"]
                },
                props: {
                    iconText: {
                        type: String,
                        default: function() {
                            return ""
                        }
                    },
                    iconTextOnlyMobile: {
                        type: Boolean,
                        default: function() {
                            return !1
                        }
                    },
                    icon: String
                },
                data: function() {
                    return {
                        focused: !1
                    }
                }
            },
            ka = wa,
            Ca = (i("9813"), Object(zi["a"])(ka, _a, ya, !1, null, null, null)),
            xa = Ca.exports,
            qa = {
                components: {
                    MaskedDateInput: js,
                    MaskedTimeInput: Us,
                    ExtendInput: xa,
                    ExtendDatepicker: va
                },
                mounted: function() {
                    this.rangeBuffer = this.getRangeBuffer()
                },
                activated: function() {
                    this.date = this.$store.getters["quiz/getAnswerValue"], this.time = o()(this.$store.getters["quiz/getAnswerValue"], "time", null), this.from = o()(this.$store.getters["quiz/getAnswerValue"], "from", null), this.to = o()(this.$store.getters["quiz/getAnswerValue"], "to", null)
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        answerFilled: !1,
                        highlightTimepicker: !1,
                        rangeBuffer: null,
                        date: null,
                        time: null,
                        from: null,
                        to: null,
                        dayNames: [this.$t("Вс"), this.$t("Пн"), this.$t("Вт"), this.$t("Ср"), this.$t("Чт"), this.$t("Пт"), this.$t("Сб")],
                        monthNames: [this.$t("Январь"), this.$t("Февраль"), this.$t("Март"), this.$t("Апрель"), this.$t("Май"), this.$t("Июнь"), this.$t("Июль"), this.$t("Август"), this.$t("Сентябрь"), this.$t("Октябрь"), this.$t("Ноябрь"), this.$t("Декабрь")]
                    }
                },
                computed: {
                    placeholder: function() {
                        var t = o()(this.question, "options.placeholder", null);
                        return null === t ? pt.getLocaleFormattedDate(new Date, pt.localeDateString()) : t
                    },
                    placeholderFrom: function() {
                        return null !== this.from ? pt.getLocaleFormattedDate(this.from, pt.localeDateString()) : this.placeholder
                    },
                    placeholderTo: function() {
                        return null !== this.to ? pt.getLocaleFormattedDate(this.to, pt.localeDateString()) : this.placeholder
                    },
                    dateBuffer: {
                        get: function() {
                            return this.date
                        },
                        set: function(t) {
                            this.date = t, null === t || this.hasTime && null === this.timeBuffer || (this.answerFilled = !0), null !== t && null === this.timeBuffer ? this.highlightTimepicker = !0 : this.highlightTimepicker = !1, null !== t && "mobile" === this.$mq && this.saveWithoutGoingToNextStep(t), "mask" === this.useType && (this.hasTime && null !== t && this.$refs.timeMaskedInput.setFocus(), this.applyDate()), null === t && this.$store.dispatch("quiz/resetAnswer")
                        }
                    },
                    timeBuffer: {
                        get: function() {
                            return this.time
                        },
                        set: function(t) {
                            null !== t ? (null !== this.dateBuffer && (this.answerFilled = !0), this.time = t, this.highlightTimepicker = !1, "mobile" === this.$mq && this.saveWithoutGoingToNextStep(t), "mask" === this.useType && this.applyDate()) : (this.highlightTimepicker = !0, this.$store.dispatch("quiz/resetAnswer"))
                        }
                    },
                    fromBuffer: {
                        get: function() {
                            return this.from
                        },
                        set: function(t) {
                            t !== this.from && (this.from = t), null !== t && this.$refs.toMaskedInput.setFocus(), null !== t && null !== this.toBuffer ? this.$store.dispatch("quiz/setAnswer", this.dateObject) : this.$store.dispatch("quiz/resetAnswer")
                        }
                    },
                    toBuffer: {
                        get: function() {
                            return this.to
                        },
                        set: function(t) {
                            this.to = t, null !== t && null !== this.fromBuffer ? this.$store.dispatch("quiz/setAnswer", this.dateObject) : this.$store.dispatch("quiz/resetAnswer")
                        }
                    },
                    useType: function() {
                        return o()(this.question, "options.useType", "calendar")
                    },
                    isRange: function() {
                        return o()(this.question, "options.isRange", !1)
                    },
                    hasTime: function() {
                        return o()(this.question, "options.hasTime", !1)
                    },
                    dateObject: function() {
                        return this.isRange && !this.hasTime ? {
                            from: this.from,
                            to: this.to
                        } : this.isRange && this.hasTime ? {
                            from: this.from,
                            to: this.to,
                            timeFrom: null,
                            timeTo: null
                        } : this.hasTime && !this.isRange ? {
                            date: this.date,
                            time: this.time
                        } : this.date
                    }
                },
                watch: {
                    rangeBuffer: function(t) {
                        null !== t ? (this.hasTime || (this.answerFilled = !0), "mobile" === this.$mq && this.saveWithoutGoingToNextStep(t)) : this.clearRange()
                    }
                },
                methods: Object(y["a"])({}, Object(v["b"])("quiz", ["nextQuestion"]), {
                    timepickerChange: function() {
                        var t = this.$refs.timepicker;
                        if (null !== t.hoursSelected) {
                            var e = new Date;
                            e.setHours(t.hoursSelected), null !== t.minutesSelected ? e.setMinutes(t.minutesSelected) : e.setMinutes(0), this.time = e, null !== e && null !== this.dateBuffer && (this.answerFilled = !0, this.saveWithoutGoingToNextStep(e))
                        }
                    },
                    togglePicker: function(t) {
                        "calendar" === this.useType && this.$refs[t].toggle()
                    },
                    clearRange: function() {
                        this.answerFilled = !1, this.from = null, this.to = null, this.rangeBuffer = null, this.$store.dispatch("quiz/resetAnswer")
                    },
                    clearDate: function() {
                        this.answerFilled = !1, this.date = null, this.hasTime && (this.time = null), this.$store.dispatch("quiz/resetAnswer")
                    },
                    applyDate: function() {
                        this.hasTime ? null !== this.time && null !== this.date && (this.$store.dispatch("quiz/setAnswer", this.dateObject), this.togglePicker("datepicker")) : null !== this.date && (this.$store.dispatch("quiz/setAnswer", this.dateObject), this.togglePicker("datepicker"))
                    },
                    applyRange: function() {
                        null !== this.rangeBuffer && (this.from = this.rangeBuffer[0], this.to = this.rangeBuffer[1], this.$store.dispatch("quiz/setAnswer", this.dateObject), this.togglePicker("rangeDatepicker"))
                    },
                    saveWithoutGoingToNextStep: function(t) {
                        null !== t && (this.isRange ? null !== this.rangeBuffer && (this.from = this.rangeBuffer[0], this.to = this.rangeBuffer[1], this.$store.commit("quiz/setAnswerValue", this.dateObject)) : this.hasTime ? null !== this.timeBuffer && null !== this.dateBuffer && (this.date = this.dateBuffer, this.time = this.timeBuffer, this.$store.commit("quiz/setAnswerValue", this.dateObject)) : (this.date = this.dateBuffer, this.$store.commit("quiz/setAnswerValue", this.dateObject)))
                    },
                    getRangeBuffer: function() {
                        return this.from && this.to ? [this.from, this.to] : null
                    }
                })
            },
            Da = qa,
            Sa = (i("86a7"), Object(zi["a"])(Da, Ps, zs, !1, null, null, null)),
            $a = Sa.exports,
            Aa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "answer-statement"
                }, [i("div", {
                    staticClass: "answer-statement__text mb-1",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.content))
                    }
                }), "image" === t.mediaType && t.bgUrl ? i("div", {
                    staticClass: "answer-statement__image"
                }, [t.imgLoaded ? t._e() : i("div", {
                    staticClass: "answer-statement__image-dummy-loading"
                }), i("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.imgLoaded,
                        expression: "imgLoaded"
                    }],
                    attrs: {
                        src: t.bgUrl
                    },
                    on: {
                        load: function(e) {
                            t.imgLoaded = !0
                        }
                    }
                })]) : "video" === t.mediaType && t.videoUrl ? i("VideoBg", {
                    staticClass: "answer-statement__video mb-1",
                    attrs: {
                        videoUrl: t.videoUrl,
                        muted: !0
                    }
                }) : t._e()], 1)
            },
            Ta = [],
            Oa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "video-bg",
                    on: {
                        mousemove: t.showMuteBtn,
                        click: function(e) {
                            t.isMuted = !t.isMuted
                        }
                    }
                }, [i("button", {
                    staticClass: "video-bg__mute",
                    class: [t.isMuted ? "is-off" : "is-on", t.mutedVisible && !t.replayVisible ? "is-visible" : null]
                }), i("button", {
                    staticClass: "video-bg__replay",
                    class: t.replayVisible ? "is-visible" : null,
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.setPlay(e)
                        }
                    }
                }), t.isLoading ? i("div", {
                    staticClass: "video-bg__loading"
                }) : t._e(), t.isStub ? i("div", {
                    staticClass: "video-bg__stub"
                }) : t._e(), "cloud" === t.videoUrl.provider ? i("CloudPlayer", {
                    attrs: {
                        link: t.videoUrl.link,
                        loop: t.loop,
                        muted: t.isMuted,
                        play: t.isPlay
                    },
                    on: {
                        loaded: t.loaded,
                        ended: t.ended
                    }
                }) : "youtube" === t.videoUrl.provider ? i("YouTubePlayer", {
                    attrs: {
                        videoId: t.videoUrl.id,
                        muted: t.isMuted,
                        loop: t.loop,
                        play: t.isPlay
                    },
                    on: {
                        loaded: t.loaded,
                        ended: t.ended
                    }
                }) : "vimeo" === t.videoUrl.provider ? i("VimeoPlayer", {
                    attrs: {
                        videoId: t.videoUrl.id,
                        muted: t.isMuted,
                        loop: t.loop,
                        play: t.isPlay
                    },
                    on: {
                        loaded: t.loaded,
                        ended: t.ended
                    }
                }) : "coub" === t.videoUrl.provider ? i("CoubPlayer", {
                    attrs: {
                        videoId: t.videoUrl.id,
                        muted: t.isMuted,
                        play: t.isPlay
                    },
                    on: {
                        loaded: t.loaded,
                        ended: t.ended
                    }
                }) : t._e()], 1)
            },
            Pa = [],
            za = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("video", {
                    ref: "video",
                    attrs: {
                        loop: t.loop,
                        autoplay: t.autoplay,
                        playsinline: ""
                    },
                    domProps: {
                        muted: t.muted
                    },
                    on: {
                        loadeddata: function(e) {
                            return t.$emit("loaded")
                        },
                        ended: t.ended
                    }
                }, [i("source", {
                    attrs: {
                        src: t.link
                    }
                })])
            },
            Ma = [],
            Ea = {
                props: {
                    videoId: String,
                    play: Boolean,
                    poster: String,
                    autoplay: {
                        type: Boolean,
                        default: !0
                    },
                    muted: {
                        type: Boolean,
                        default: !0
                    },
                    loop: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        player: null,
                        isEnd: !1,
                        posterUrl: this.poster,
                        isPlaying: !1
                    }
                },
                methods: {
                    ended: function() {
                        this.$emit("ended"), this.isEnd = !0
                    }
                },
                watch: {
                    play: function(t) {
                        this.forcePlay(t)
                    },
                    loop: function(t) {
                        this.setLoop(t)
                    },
                    muted: function(t) {
                        this.setMute(t)
                    }
                }
            },
            Ba = {
                extends: Ea,
                props: {
                    link: String
                },
                methods: {
                    forcePlay: function(t) {
                        t && this.$refs.video && (this.$refs.video.play(), this.isEnd = !1)
                    },
                    setMute: function(t) {
                        this.$refs.video && (this.$refs.video.muted = t)
                    }
                },
                watch: {
                    loop: function(t) {
                        t && this.forcePlay()
                    }
                }
            },
            Va = Ba,
            La = Object(zi["a"])(Va, za, Ma, !1, null, null, null),
            Ia = La.exports,
            ja = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "youtube-player"
                }, [i("div", {
                    ref: "iframe",
                    staticClass: "youtube-player__iframe"
                }), t.posterUrl && t.isEnd && !t.loop ? i("div", {
                    staticClass: "youtube-player__poster",
                    style: {
                        backgroundImage: "url(" + t.posterUrl + ")"
                    }
                }) : t._e()])
            },
            Fa = [],
            Ra = {
                extends: Ea,
                data: function() {
                    return {
                        posterUrl: "".concat(window.location.protocol, "//img.youtube.com/vi/").concat(this.videoId, "/0.jpg"),
                        options: {
                            origin: window.location.origin,
                            enablejsapi: 1,
                            autoplay: Number(this.autoplay),
                            mute: Number(this.muted),
                            loop: Number(this.loop),
                            playerapiid: "featuredytplayer",
                            controls: 0,
                            modestbranding: 1,
                            rel: 0,
                            showinfo: 0,
                            color: "white",
                            iv_load_policy: 3,
                            theme: "light",
                            wmode: "transparent",
                            playlist: !!this.loop && this.videoId,
                            playsinline: 1
                        }
                    }
                },
                activated: function() {
                    window.YT && this.init()
                },
                mounted: function() {
                    var t = "".concat(window.location.protocol, "//www.youtube.com/iframe_api"),
                        e = document.getElementsByTagName("head")[0],
                        i = e.getElementsByTagName("script");
                    if (!H()(i)) {
                        var n = Z()(i, function(e) {
                            return e.src === t
                        });
                        if (n) return
                    }
                    var s = document.createElement("script");
                    s.src = t, document.getElementsByTagName("head")[0].appendChild(s), window.onYouTubeIframeAPIReady = this.init
                },
                destroyed: function() {
                    var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.player.destroy();
                                case 2:
                                    this.player = null, window.YT = null;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                methods: {
                    init: function() {
                        var t = this;
                        this.player = new window.YT.Player(this.$refs.iframe, {
                            host: "".concat(window.location.protocol, "//www.youtube.com"),
                            width: "100%",
                            height: "100%",
                            videoId: this.videoId,
                            playerVars: this.options,
                            events: {
                                onReady: function() {
                                    t.$emit("loaded"), t.setMute(!0), t.autoplay && t.forcePlay(!0)
                                },
                                onStateChange: this.onStateChange
                            }
                        })
                    },
                    onStateChange: function(t) {
                        var e = t.data;
                        0 === e && this.ended()
                    },
                    forcePlay: function(t) {
                        t && this.player && (this.player.playVideo(), this.isEnd = !1)
                    },
                    setLoop: function(t) {
                        this.player.setLoop(t), this.isEnd = !1
                    },
                    setMute: function(t) {
                        this.player && (t ? this.player.mute() : this.player.unMute())
                    }
                }
            },
            Na = Ra,
            Ha = (i("1f69"), Object(zi["a"])(Na, ja, Fa, !1, null, null, null)),
            Qa = Ha.exports,
            Ua = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "vimeo-player"
                }, [i("div", {
                    ref: "iframe",
                    staticClass: "vimeo-player__iframe"
                }), t.posterUrl && t.isEnd && !t.loop ? i("div", {
                    staticClass: "vimeo-player__poster",
                    style: {
                        backgroundImage: "url(" + t.posterUrl + ")"
                    }
                }) : t._e()])
            },
            Wa = [],
            Ya = {
                extends: Ea,
                data: function() {
                    return {
                        options: {
                            id: this.videoId,
                            responsive: !1,
                            title: !1,
                            byline: !1,
                            controls: !1,
                            loop: this.loop,
                            muted: this.muted,
                            autoplay: this.autoplay,
                            playsinline: !0,
                            background: !0,
                            width: "100",
                            height: "100",
                            maxwidth: "100"
                        }
                    }
                },
                mounted: function() {
                    var t = document.createElement("script");
                    t.onload = this.init, t.src = "".concat(window.location.protocol, "//player.vimeo.com/api/player.js"), document.getElementsByTagName("head")[0].appendChild(t)
                },
                destroyed: function() {
                    var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.player.destroy();
                                case 2:
                                    this.player = null, window.Vimeo = null;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                methods: {
                    init: function() {
                        var t = this;
                        this.player = new window.Vimeo.Player(this.$refs.iframe, this.options), this.player.on("bufferend", function() {
                            t.$emit("loaded"), t.muted ? t.player.setVolume(0) : t.player.setVolume(1)
                        }, this), this.player.on("ended", function() {
                            t.ended()
                        }, this), this.posterUrl || this.getThumb()
                    },
                    getThumb: function() {
                        var t = this;
                        this.$axios("".concat(window.location.protocol, "//vimeo.com/api/oembed.json?url=").concat(window.location.protocol, "//vimeo.com/").concat(this.videoId)).then(function(e) {
                            var i = e.data;
                            i.thumbnail_url && (t.posterUrl = i.thumbnail_url)
                        }).catch(function(t) {
                            return console.error(t)
                        })
                    },
                    forcePlay: function(t) {
                        var e = this;
                        t && this.player.play().then(function() {
                            e.isEnd = !1
                        })
                    },
                    setLoop: function(t) {
                        this.player.setLoop(t), t && this.forcePlay()
                    },
                    setMute: function(t) {
                        this.player.setVolume(Number(!t))
                    }
                }
            },
            Ga = Ya,
            Za = (i("4d55"), Object(zi["a"])(Ga, Ua, Wa, !1, null, null, null)),
            Ka = Za.exports,
            Ja = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("iframe", {
                    ref: "iframe",
                    staticClass: "coub-player",
                    class: {
                        "coub-player_is-playing": t.isPlaying
                    },
                    attrs: {
                        src: "https://coub.com/embed/" + this.videoId + "?autostart=false&muted=true&hideTopBar=true&noControls=false&noHDControl=true&noSiteButtons=true",
                        playsinline: "",
                        allowfullscreen: "true",
                        frameborder: "0",
                        allow: "autoplay"
                    },
                    on: {
                        load: t.loaded
                    }
                })
            },
            Xa = [],
            tr = {
                extends: Ea,
                mounted: function() {
                    window.addEventListener("message", this.handleMessage), window.addEventListener("blur", this.handleBlur)
                },
                destroyed: function() {
                    window.removeEventListener("message", this.handleMessage), window.removeEventListener("blur", this.handleBlur)
                },
                methods: {
                    loaded: function() {
                        this.$emit("loaded"), this.forcePlay(!0)
                    },
                    setMute: function(t) {
                        this.$refs.iframe.contentWindow.postMessage("".concat(t ? "mute" : "unmute"), "https://coub.com")
                    },
                    forcePlay: function(t) {
                        t && this.$refs.iframe.contentWindow.postMessage("play", "https://coub.com")
                    },
                    handleMessage: function(t) {
                        var e = t.data;
                        "playPaused" === e && this.forcePlay(!0)
                    },
                    handleBlur: function() {
                        var t = this;
                        setTimeout(function() {
                            document.activeElement instanceof HTMLIFrameElement && (t.isPlaying = !0)
                        }, 0)
                    }
                }
            },
            er = tr,
            ir = (i("2958"), Object(zi["a"])(er, Ja, Xa, !1, null, null, null)),
            nr = ir.exports,
            sr = {
                props: {
                    videoUrl: Object,
                    loop: Boolean,
                    muted: Boolean
                },
                components: {
                    CloudPlayer: Ia,
                    YouTubePlayer: Qa,
                    VimeoPlayer: Ka,
                    CoubPlayer: nr
                },
                data: function() {
                    return {
                        isMuted: this.muted,
                        isPlay: !1,
                        isLoading: !0,
                        mutedVisible: !1,
                        replayVisible: !1
                    }
                },
                computed: {
                    isStub: function() {
                        return !this.videoUrl.provider || "stub" === this.videoUrl.provider
                    }
                },
                methods: {
                    showMuteBtn: function() {
                        var t = this;
                        this.mutedVisible || (this.mutedVisible = !0, setTimeout(function() {
                            t.mutedVisible = !1
                        }, 2e3))
                    },
                    ended: function() {
                        this.mutedVisible = !1, this.isPlay = !1, this.loop || (this.replayVisible = !0)
                    },
                    setPlay: function() {
                        this.isPlay = !0, this.replayVisible = !1, this.mutedVisible = !0
                    },
                    loaded: function() {
                        this.isLoading = !1
                    }
                },
                watch: {
                    muted: function(t) {
                        this.isMuted = t
                    }
                }
            },
            ar = sr,
            rr = (i("d063"), Object(zi["a"])(ar, Oa, Pa, !1, null, null, null)),
            or = rr.exports,
            ur = i("c817"),
            lr = {
                components: {
                    VideoBg: or
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        video: o()(this.question, "options.video", null),
                        defaultImage: o()(this.question, "options.defaultImage"),
                        content: o()(this.question, "options.content", ""),
                        mediaType: o()(this.question, "options.mediaType", "image"),
                        imgLoaded: !1
                    }
                },
                computed: {
                    bgUrl: function() {
                        var t = o()(this.defaultImage, "url");
                        if (t) return this.$image.url(this.defaultImage)
                    },
                    videoUrl: function() {
                        return this.video && Object(ur["a"])(this.video)
                    }
                }
            },
            cr = lr,
            dr = (i("e5f3"), Object(zi["a"])(cr, Aa, Ta, !1, null, null, null)),
            hr = dr.exports,
            fr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "verifying-result",
                    class: {
                        "verifying-result_verified": t.isVerified
                    }
                }, [i("div", {
                    staticClass: "verifying-result__state mb-1"
                }, [t._m(0), t._l(t.verifiedAnswers, function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "verifying-result__answer"
                    }, [t._v(t._s(e.title || e.longText)), i("b-icon", {
                        attrs: {
                            icon: "check"
                        }
                    })], 1)
                })], 2), i("div", {
                    staticClass: "verifying-result__explanation mb-2",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.content))
                    }
                })])
            },
            mr = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "verifying-result__phrase"
                }, [t._v(t._s(t.phrase))])
            }],
            pr = i("c707"),
            gr = i.n(pr),
            br = {
                extends: hr,
                props: {
                    question: Object
                },
                computed: Object(y["a"])({}, Object(v["c"])("quiz", ["allCorrectAnswers"]), Object(v["d"])("quiz", ["questions", "answersId"]), {
                    parentQuestion: function() {
                        var t = o()(this.question, "id").replace("_explanation", "");
                        return Z()(this.questions, function(e) {
                            return e.id === t
                        })
                    },
                    selectedAnswers: function() {
                        var t = this,
                            e = Z()(this.answersId, function(e) {
                                return e && e.q === t.parentQuestion.id
                            });
                        return o()(e, "a", "")
                    },
                    correctAnswers: function() {
                        var t = this,
                            e = Z()(this.allCorrectAnswers, function(e) {
                                return e.q === t.parentQuestion.id
                            });
                        return o()(e, "a")
                    },
                    verifiedAnswers: function() {
                        var t = this;
                        return ut()(this.parentQuestion.answers, function(e) {
                            return L()(t.correctAnswers, e.id)
                        })
                    },
                    isVerified: function() {
                        return "one" === this.parentQuestion.select ? L()(this.correctAnswers, this.selectedAnswers) : Fe()(gr()(this.correctAnswers), gr()(this.selectedAnswers))
                    },
                    phrase: function() {
                        var t = {
                                correct: [this.$t("Все так"), this.$t("Все правильно"), this.$t("Именно!"), this.$t("Да, верно"), this.$t("Точно!"), this.$t("О, да"), this.$t("Абсолютно")],
                                wrong: [this.$t("На самом деле")]
                            },
                            e = t["".concat(this.isVerified ? "correct" : "wrong")],
                            i = e[T()(0, e.length - 1)];
                        return i
                    }
                })
            },
            vr = br,
            _r = (i("a9e0"), Object(zi["a"])(vr, fr, mr, !1, null, null, null)),
            yr = _r.exports,
            wr = {
                components: {
                    Variants: Qn,
                    Images: function() {
                        return i.e("swiper").then(i.bind(null, "5ec1"))
                    },
                    Emoji: function() {
                        return i.e("emoji").then(i.bind(null, "8805"))
                    },
                    InputAnswer: as,
                    OneImage: Xn,
                    SelectAnswer: hs,
                    DateAnswer: $a,
                    SliderAnswer: xs,
                    FileAnswer: Os,
                    Statement: hr,
                    VerifyingResult: yr
                },
                props: {
                    question: Object
                },
                computed: Object(y["a"])({}, Object(v["c"])("quiz", ["isVerifyingEnabled"]), {
                    hasImages: function() {
                        var t = !1;
                        return this.question.answers.forEach(function(e) {
                            e.image && (t = !0)
                        }), t
                    },
                    componentKey: function() {
                        return JSON.stringify(this.question)
                    },
                    imagesLayout: function() {
                        return o()(this.question, "options.layoutType", "scroll")
                    },
                    bigImages: function() {
                        return o()(this.question, "options.bigImages", !1)
                    },
                    imageType: function() {
                        return o()(this.question, "options.imageType", "square")
                    },
                    defaultImage: function() {
                        return o()(this.question, "options.defaultImage", {})
                    },
                    variantsImage: function() {
                        return o()(this.question, "options.variantsImage", {})
                    },
                    startText: function() {
                        return o()(this.question, "options.startText", "")
                    },
                    min: function() {
                        return Number(o()(this.question, "options.range.min", 0))
                    },
                    max: function() {
                        return Number(o()(this.question, "options.range.max", 100))
                    },
                    step: function() {
                        return Number(o()(this.question, "options.range.step", 1))
                    },
                    isRange: function() {
                        return o()(this.question, "options.isRange", !1)
                    },
                    isLong: function() {
                        return o()(this.question, "options.isLong", !1)
                    }
                }),
                methods: {
                    isVerifyingResult: function(t) {
                        var e = o()(t, "isExplanation", !1);
                        return "statement" === t.type && this.isVerifyingEnabled && e
                    }
                }
            },
            kr = wr,
            Cr = (i("fbb3"), Object(zi["a"])(kr, Dn, Sn, !1, null, null, null)),
            xr = Cr.exports,
            qr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "discount",
                    class: {
                        "is-unexpanded": t.unexpanded
                    }
                }, [t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? i("div", {
                        staticClass: "discount__bubble discount__bubble_mobile",
                        class: {
                            "is-unexpanded": t.unexpanded
                        }
                    }, [t._v(t._s("+ " + t.$format.number(t.getIncreasingDiscountStep)))]) : t._e()
                }), i("div", {
                    staticClass: "discount__label"
                }, [i("div", {
                    staticClass: "discount__icon"
                }, [i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-" + t.discountIcon],
                        size: "12",
                        fillRule: "evenodd"
                    }
                })], 1), i("div", {
                    staticClass: "discount__label-text"
                }, [t._v(t._s(t.discountTitle || t.$t("Ваша скидка") + ":") + " ")])]), i("div", {
                    staticClass: "discount__price"
                }, [i("div", {
                    staticClass: "discount__value"
                }, [t._v(t._s(t.$format.number(t.discount, t.discountFormat))), t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? i("div", {
                        staticClass: "discount__bubble discount__bubble_desktop"
                    }, [t._v(t._s("+" + t.$format.number(t.getIncreasingDiscountStep)))]) : t._e()
                })], 2), i("div", {
                    staticClass: "discount__symbol"
                }, [i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-" + t.discountIcon],
                        fillRule: "evenodd",
                        strokeWidth: ".5"
                    }
                })], 1), i("DiscountArrow", {
                    staticClass: "discount__arrows",
                    class: {
                        "is-unexpanded": t.unexpanded
                    },
                    attrs: {
                        down: t.isMeltingDiscount
                    }
                })], 1)], 2)
            },
            Dr = [],
            Sr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "arrows"
                }, [t.down ? t._e() : i("svg", {
                    staticClass: "arrow",
                    attrs: {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "none"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M5 3.70904e-07L0.757355 4.24265L2.17157 5.65686L5 2.82843L7.82843 5.65686L9.24265 4.24265L5 3.70904e-07Z",
                        fill: "#44bc75"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5 4L0.757355 8.24265L2.17157 9.65686L5 6.82843L7.82843 9.65686L9.24265 8.24265L5 4Z",
                        fill: "#44bc75"
                    }
                })]), t.down ? i("svg", {
                    staticClass: "arrow",
                    attrs: {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "none"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M5 9.65686L0.757355 5.41421L2.17157 4L5 6.82843L7.82843 4L9.24265 5.41422L5 9.65686Z",
                        fill: "tomato"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5 5.65686L0.757355 1.41421L2.17157 -6.18173e-07L5 2.82843L7.82843 -1.23635e-07L9.24265 1.41422L5 5.65686Z",
                        fill: "tomato"
                    }
                })]) : t._e()])
            },
            $r = [],
            Ar = {
                props: {
                    down: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            Tr = Ar,
            Or = (i("d847"), Object(zi["a"])(Tr, Sr, $r, !1, null, null, null)),
            Pr = Or.exports,
            zr = {
                components: {
                    DiscountArrow: Pr,
                    icon: Bi["a"]
                },
                props: {
                    countQuestions: Number,
                    unexpanded: Boolean,
                    bubbleLeft: Boolean
                },
                data: function() {
                    return {
                        interval: null,
                        showBubble: !1
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["discount", "currency"]), Object(v["c"])("quiz", ["isMeltingDiscount", "getIncreasingDiscountStep", "questionNumber", "isIncreasingPercentDiscount", "discountIcon", "discountTitle"]), {
                    discountFormat: function() {
                        return this.isIncreasingPercentDiscount ? "0[.]0" : "0,0[.]00"
                    }
                }),
                watch: {
                    questionNumber: function(t, e) {
                        this.showBubble = t > e
                    }
                }
            },
            Mr = zr,
            Er = (i("b56b"), Object(zi["a"])(Mr, qr, Dr, !1, null, null, null)),
            Br = Er.exports,
            Vr = i("0089"),
            Lr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        name: t.animationName
                    },
                    on: {
                        "after-enter": function(e) {
                            t.slided = !0
                        }
                    }
                }, [i("div", {
                    key: "loader",
                    staticClass: "result-loader"
                }, [i("transition", {
                    attrs: {
                        name: "result-loader__slide-emoji",
                        mode: "out-in",
                        type: "transition"
                    },
                    on: {
                        "after-leave": function(e) {
                            t.isEmoji2 = !0
                        }
                    }
                }, [i("Emoji1", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.slided,
                        expression: "!slided"
                    }],
                    staticClass: "result-loader__emoji"
                })], 1), i("transition", {
                    attrs: {
                        name: "result-loader__slide-emoji",
                        mode: "out-in",
                        type: "transition"
                    },
                    on: {
                        "after-enter": function(e) {
                            t.isEmoji2 = !1
                        },
                        "after-leave": function(e) {
                            t.isEmoji3 = !0
                        }
                    }
                }, [i("Emoji2", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isEmoji2,
                        expression: "isEmoji2"
                    }],
                    staticClass: "result-loader__emoji"
                })], 1), i("transition", {
                    attrs: {
                        name: "result-loader__slide-emoji",
                        mode: "out-in",
                        type: "transition"
                    },
                    on: {
                        "after-enter": function(e) {
                            return t.$store.commit("quiz/showResultLoader", !1)
                        }
                    }
                }, [i("Emoji3", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isEmoji3,
                        expression: "isEmoji3"
                    }],
                    staticClass: "result-loader__emoji"
                })], 1), i("div", {
                    staticClass: "result-loader__text"
                }, [t._v(t._s(t.$t("Подсчёт результатов")) + "...")])], 1)])
            },
            Ir = [],
            jr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64",
                        "enable-background": "new 0 0 64 64"
                    }
                }, [i("g", {
                    attrs: {
                        fill: "#ffdd67"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m48.6 32.8l-6.6 4.7c0 0-3.3-9.2-5.8-15.1-1-2.4-4.2-3.2-5.7-6.6-2.6-5.8.5-10.8 3.5-7.2 3.5 4.2 8.7 7.3 9.8 9.7 1.7 4 4.8 14.5 4.8 14.5"
                    }
                }), i("path", {
                    attrs: {
                        d: "m53.8 36.6c.5 3.2.1 8.1-2.7 13.9 0 0-5.7-6.8-6.4-10 0 0-1.6-11.9-3.3-19.5-.7-3.1-4.3-4.9-5.2-9.3-1.6-7.6 3.2-12.9 6-7.8 3.2 5.9 8.6 10.9 9.3 14 1.2 5.3 1.7 14.1 2.3 18.7"
                    }
                })]), i("path", {
                    attrs: {
                        d: "m45.4 30.6c0 0-.5-4.5-2.2-12.1-.7-3.1-4.3-4.9-5.2-9.3-.6-2.6-.4-5 .3-6.7-1.7 1.3-3.1 4.9-2.2 9.3.9 4.4 4.6 6.2 5.2 9.3.7 3.3 1.3 6.7 1.3 6.7l-5-1.9 7.8 4.7",
                        fill: "#eba352"
                    }
                }), i("path", {
                    attrs: {
                        d: "m51.4 35.4c-6.6-6-14-9.7-18.8-12-7.1-3.5-5.2 1.3-17.3 4.5-1.6.4-3.5 1.6-2 4.6 1.4 2.9 12.8.7 14.6-1 0 0 4.8 5.9 9.6 5.7 0 0-.8 3.9.3 5.8 0 0-6.8 3.5-9.7 6.6l-8-5.4c-.6-8.3-2.1-10.8-6.2-10.4-3.8.4-3.4 4-3.3 6.9.1 5.3-1.3 6.2 0 8.3 4.9 8 11.2 13 22.8 13 4.3 0 7.1-.1 9.8-1.4 4.4-2.3 15.5-18.5 8.2-25.2",
                        fill: "#ffdd67"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#eba352"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m52.7 37c2.5 7.6-6.4 20.1-10.3 22-2.7 1.3-5.4 1.4-9.8 1.4-11.5 0-17.7-4.9-22.6-12.8.1.4.3.9.5 1.3 5 8.1 11.3 13.1 22.9 13.1 4.3 0 7.1-.1 9.8-1.4 4.1-2.1 14-16.2 9.5-23.6"
                    }
                }), i("path", {
                    attrs: {
                        d: "m18.6 44.4c0 0 7.5 4.8 9.3 5.1l-7.9-5.3c.3-8.4-2.1-11.1-6.2-10.4-.3.1-.6.1-.9.2 4.1-.5 6 2.2 5.7 10.4"
                    }
                }), i("path", {
                    attrs: {
                        d: "m27.9 31.5c0 0 4.8 5.8 9.6 5.7v-1.1c-4.8.1-9.6-5.7-9.6-5.7-1.8 1.8-13.2 4-14.6 1-.2-.5-.4-1-.5-1.4-.1.6 0 1.4.5 2.5 1.4 2.9 12.8.7 14.6-1"
                    }
                })])])
            },
            Fr = [],
            Rr = {},
            Nr = Object(zi["a"])(Rr, jr, Fr, !1, null, null, null),
            Hr = Nr.exports,
            Qr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64",
                        "enable-background": "new 0 0 64 64"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m37.3 31.9c-.5 2.2.9 4.5 3.2 5 2.3.5 4.6-.9 5.1-3.1l6.1-26.2c.5-2.2-.9-4.5-3.2-5-2.3-.5-4.6.9-5.1 3.1l-6.1 26.2",
                        fill: "#ffdd67"
                    }
                }), i("path", {
                    attrs: {
                        d: "m38.9 35.6c2.4.5 4.6-.9 5.2-3.1l6.1-26.2c.3-1.2 0-2.4-.7-3.3 2.1.9 2.8 2.7 2.4 4.7l-6.1 26.2c-.5 2.2-2.8 3.7-5.1 3.1-1.1-.2-1.9-.8-2.5-1.6.1 0 .4.1.7.2",
                        fill: "#eba352"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#ffdd67"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m45.2 34.5c0 0-8.7-8.6-24.1-4.3 0 0-9.1 1.6-8.6 6.2 0 0-.3 11.4 3.6 18.2 5.9 10.1 28.6 11.7 34.3-7 1.2-3.7.3-13.7-5.2-13.1"
                    }
                }), i("path", {
                    attrs: {
                        d: "m29.7 33.4c.4 2.3 2.7 3.7 5 3.3 2.3-.4 3.9-2.6 3.5-4.9l-5-26.4c-.4-2.3-2.7-3.7-5-3.3-2.3.4-3.9 2.6-3.4 4.9l4.9 26.4"
                    }
                })]), i("path", {
                    attrs: {
                        d: "m32.6 36.1c2.4-.4 3.9-2.6 3.5-4.9l-5-26.4c-.3-1.2-1.1-2.2-2.1-2.8 2.2 0 3.8 1.4 4.2 3.4l5 26.4c.4 2.3-1.1 4.5-3.4 4.9-1.1.2-2.1 0-3-.5.2 0 .5 0 .8-.1",
                        fill: "#eba352"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#ffdd67"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m12 32.1c-.3-2.3 1.4-4.4 3.8-4.7h.1c2.3-.2 4.5 1.4 4.7 3.8l.7 6.5c.3 2.3-1.4 4.4-3.8 4.7h-.1c-2.4.2-4.5-1.4-4.7-3.8l-.7-6.5"
                    }
                }), i("path", {
                    attrs: {
                        d: "m20.1 27.4c-.3-2.3 1.4-4.4 3.8-4.7h.1c2.4-.2 4.5 1.4 4.7 3.8l.7 6.5c.3 2.3-1.4 4.4-3.8 4.7h-.1c-2.4.2-4.5-1.4-4.7-3.8l-.7-6.5"
                    }
                })]), i("g", {
                    attrs: {
                        fill: "#eba352"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m16.1 41c2.4-.3 4-2.3 3.8-4.7l-.7-6.5c-.1-.6-.4-1.3-.7-1.9 1.5.7 2 1.9 2.2 3.3l.7 6.5c.3 2.3-1.4 4.4-3.7 4.6-1.7.2-3.3-.7-4.1-2 .6.5 1.5.8 2.5.7"
                    }
                }), i("path", {
                    attrs: {
                        d: "m24.1 36.3c2.4-.3 4.1-2.3 3.8-4.6l-.7-6.5c-.1-.6-.4-1.4-.7-1.9 1.4.8 2 2 2.2 3.4l.7 6.5c.3 2.3-1.4 4.3-3.8 4.6h-.1c-1.7.2-3.3-.7-4.1-2 .8.4 1.7.6 2.7.5"
                    }
                }), i("path", {
                    attrs: {
                        d: "m41.4 40.8c-4.8-2.3-15.7 1.7-13.5 11.7 0-10.4 9.4-12.2 13.5-11.7"
                    }
                }), i("path", {
                    attrs: {
                        d: "m39.6 30.5c-3.5-2.1-4.1 1.2-10 1.4-2.6.1-3.7 5.4.2 7.3 5.4 2.7 5.8-1.1 7.2.4 1.4 1.6 2.7 1.9 3.9 3.7.9 1.3 7.6-.7 8.3-3.4 1.3-5.3-4.2-6.1-9.6-9.4"
                    }
                })]), i("path", {
                    attrs: {
                        d: "m40 31.4c-3.6-2.1-4.3 1.2-10.4 1.4-2.7.1-3.9 5.6.2 7.6 5.6 2.8 6.1-1.2 7.4.4 1.5 1.6 2.8 2 4.1 3.9.9 1.4-1.5 6.6-1.5 6.6s6.9 4.9 8.3 2.1c2.6-5.2 1.9-9.2 1.8-12.2-.2-7.1-4.2-6.4-9.9-9.8",
                        fill: "#ffdd67"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#eba352"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m46.9 34.9c3.8 1.8 3.6 11.7.8 16.5-7.1 11.9-22.7 11.7-30 5.3 6.8 7.3 23.4 8 31.1-4.3 3.1-4.9 4.1-16.3-1.9-17.5"
                    }
                }), i("path", {
                    attrs: {
                        d: "m40.5 44.8c.3.4.2 1.2.1 2.1.4-1.4.7-2.8.3-3.4-1.2-1.9-1.9-2.3-3.4-3.9-1.4-1.5-1.8 2.4-7.4-.4-2.1-1-2.8-3-2.6-4.7-.8 1.8-.4 4.6 2.3 6 5.6 2.8 6.1-1.2 7.4.4 1.4 1.6 2.1 2 3.3 3.9"
                    }
                })])])
            },
            Ur = [],
            Wr = {},
            Yr = Object(zi["a"])(Wr, Qr, Ur, !1, null, null, null),
            Gr = Yr.exports,
            Zr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64",
                        "enable-background": "new 0 0 64 64"
                    }
                }, [i("g", {
                    attrs: {
                        fill: "#ffdd67"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m44.8 34.5c0 0-31.9-2.5-31.4 2.1 0 0-1.6 11.2 2.3 18 5.9 10.1 28.6 11.7 34.3-7 1.2-3.7.3-13.7-5.2-13.1"
                    }
                }), i("path", {
                    attrs: {
                        d: "m38.7 39.1c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-32.9c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v32.9"
                    }
                })]), i("path", {
                    attrs: {
                        d: "m41 42.3c2.4 0 4.3-1.9 4.3-4.2v-32.9c0-1.2-.6-2.4-1.4-3.1 1.9.4 3.4 2.1 3.4 4.1v32.9c0 2.3-1.9 4.2-4.2 4.2-1.1 0-2-.4-2.8-1 .1 0 .4 0 .7 0",
                        fill: "#eba352"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#ffdd67"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m13.4 30c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                    }
                }), i("path", {
                    attrs: {
                        d: "m21.9 26.2c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                    }
                }), i("path", {
                    attrs: {
                        d: "m30.4 25.7c0-2.4 1.9-4.3 4.2-4.3h.1c2.3 0 4.2 1.9 4.2 4.3v6.6c0 2.4-1.9 4.3-4.2 4.3h-.1c-2.3 0-4.2-1.9-4.2-4.3v-6.6"
                    }
                })]), i("g", {
                    attrs: {
                        fill: "#eba352"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m16.5 39.3c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.8 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.7.6 1.6.9 2.6.9"
                    }
                }), i("path", {
                    attrs: {
                        d: "m24.9 35.5c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.9 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.7.6 1.6.9 2.6.9"
                    }
                }), i("path", {
                    attrs: {
                        d: "m33.3 35c2.4 0 4.2-1.9 4.2-4.2v-6.6c0-.6-.1-1.2-.4-1.8 1 .8 1.7 2 1.7 3.4v6.6c0 2.4-1.9 4.2-4.2 4.2h-.1c-1.7 0-3.2-1-3.8-2.5.8.6 1.7.9 2.6.9"
                    }
                }), i("path", {
                    attrs: {
                        d: "m41 40.8c-4.8-2.3-15.7 1.7-13.5 11.7 0-10.4 9.4-12.2 13.5-11.7"
                    }
                }), i("path", {
                    attrs: {
                        d: "m39.2 30.5c-3.5-2.1-4.1 1.2-10 1.4-2.6.1-3.7 5.4.2 7.3 5.4 2.7 5.8-1.1 7.2.4 1.4 1.6 2.7 1.9 3.9 3.7.9 1.3 7.6-.7 8.3-3.4 1.3-5.3-4.1-6.1-9.6-9.4"
                    }
                })]), i("path", {
                    attrs: {
                        d: "m39.6 31.4c-3.6-2.1-4.3 1.2-10.4 1.4-2.7.1-3.9 5.6.2 7.6 5.6 2.8 6.1-1.2 7.4.4 1.5 1.6 2.8 2 4.1 3.9.9 1.4-1.5 6.6-1.5 6.6s6.9 4.9 8.3 2.1c2.6-5.2 1.9-9.2 1.8-12.2-.2-7.1-4.2-6.4-9.9-9.8",
                        fill: "#ffdd67"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#eba352"
                    }
                }, [i("path", {
                    attrs: {
                        d: "m46.6 34.9c3.8 1.8 3.6 11.7.8 16.5-7.1 11.9-22.7 11.7-30 5.3 6.8 7.3 23.4 8 31.1-4.3 3-4.9 4-16.3-1.9-17.5"
                    }
                }), i("path", {
                    attrs: {
                        d: "m40.1 44.8c.3.4.2 1.2.1 2.1.4-1.4.7-2.8.3-3.4-1.2-1.9-1.9-2.3-3.4-3.9-1.4-1.5-1.8 2.4-7.4-.4-2.1-1-2.8-3-2.6-4.7-.8 1.8-.4 4.6 2.3 6 5.6 2.8 6.1-1.2 7.4.4 1.4 1.6 2.1 2 3.3 3.9"
                    }
                })])])
            },
            Kr = [],
            Jr = {},
            Xr = Object(zi["a"])(Jr, Zr, Kr, !1, null, null, null),
            to = Xr.exports,
            eo = {
                components: {
                    Emoji1: Hr,
                    Emoji2: Gr,
                    Emoji3: to
                },
                data: function() {
                    return {
                        slided: !1,
                        isEmoji2: !1,
                        isEmoji3: !1
                    }
                },
                computed: Object(y["a"])({}, Object(v["c"])("quiz", ["animationStyle"]), {
                    animationName: function() {
                        return "bottomTop" === this.animationStyle ? "result-loader__slide_bottomTop" : "result-loader__slide"
                    }
                })
            },
            io = eo,
            no = (i("534a"), Object(zi["a"])(io, Lr, Ir, !1, null, null, null)),
            so = no.exports,
            ao = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "result",
                    class: {
                        result_has_image: t.hasImage
                    }
                }, [!t.result || t.result.type && "content" !== t.result.type ? t._e() : i("div", {
                    staticClass: "result__container"
                }, [t.hasImage && "image" === t.getMediaType ? i("div", {
                    staticClass: "result__image",
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }, [t.hasCost ? i("PriceLabel", {
                    staticClass: "result__cost result__cost_in-bg",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), i("div", {
                    staticClass: "result__bg"
                }), t.hasCorrectAnswers ? i("div", {
                    staticClass: "result__correct"
                }, [i("p", {
                    staticClass: "result__correct-amount",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.$t("{count1} из {count2} *ответов правильные*", {
                            count1: t.selectedCorrectAnswers.length,
                            count2: t.countQuestions
                        })))
                    }
                })]) : t._e()], 1) : t._e(), t.hasVideo && "video" === t.getMediaType ? i("div", {
                    staticClass: "result__video",
                    class: "cloud" === t.videoUrl.provider && t.result.cost ? "result__video_cloud" : null
                }, ["cloud" === t.videoUrl.provider ? [t.hasCost ? i("PriceLabel", {
                    staticClass: "result__cost result__cost_in-bg",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), i("div", {
                    staticClass: "result__video-muted",
                    class: [t.mutedVideo ? "is-off" : "is-on", t.mutedVideoVisible && !t.videoReplay ? "is-visible" : null],
                    on: {
                        click: function(e) {
                            t.mutedVideo = !t.mutedVideo
                        }
                    }
                }), i("div", {
                    staticClass: "result__video-replay",
                    class: t.videoReplay ? "is-visible" : null,
                    on: {
                        click: t.onClickReplayVideo
                    }
                }), i("video", {
                    ref: "video",
                    staticClass: "result__video-player",
                    attrs: {
                        autoplay: !0,
                        controls: !1,
                        playsinline: !0
                    },
                    domProps: {
                        muted: t.mutedVideo
                    },
                    on: {
                        ended: t.onEndPlayVideo,
                        mousemove: t.visibleMutedVideo,
                        click: function(e) {
                            t.mutedVideo = !t.mutedVideo
                        }
                    }
                }, [i("source", {
                    attrs: {
                        src: t.videoUrl.link
                    }
                })])] : t._e(), -1 !== t.accessVideoFormat.social.indexOf(t.videoUrl.provider) ? [i("iframe", {
                    staticClass: "result__iframe",
                    attrs: {
                        src: t.videoUrl.link,
                        frameborder: "0"
                    }
                })] : t._e(), "stub" === t.videoUrl.provider ? [i("div", {
                    staticClass: "result__video-stub"
                })] : t._e()], 2) : t._e(), i("div", {
                    staticClass: "result__content"
                }, [t.hasCorrectAnswers && !t.hasImage ? i("div", {
                    staticClass: "result__correct"
                }, [i("b-icon", {
                    attrs: {
                        icon: "check"
                    }
                }), i("p", {
                    staticClass: "result__correct-amount",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.$t("{count1} из {count2} *ответов правильные*", {
                            count1: t.selectedCorrectAnswers.length,
                            count2: t.countQuestions
                        })))
                    }
                })], 1) : t._e(), t.result.title ? i("h2", {
                    staticClass: "result__title"
                }, [t._v(t._s(t.result.title))]) : t._e(), t.getVisibleCostLabel ? i("PriceLabel", {
                    staticClass: "result__cost result__cost_in-text",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), t.result.text ? i("div", {
                    staticClass: "result__text",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.result.text))
                    }
                }) : t._e(), t.isBonusesEnabled ? i("div", {
                    staticClass: "result__bonuses"
                }, ["afterForm" === t.results.view ? i("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.bonusesTitle || t.$t("Ваши бонусы")))]) : t._e(), "beforeForm" === t.results.view ? i("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.bonusesTitle || t.$t("Получите ваши бонусы далее")))]) : t._e(), i("Bonuses", {
                    attrs: {
                        direction: "row"
                    }
                })], 1) : t._e(), t.results.share ? i("Share", {
                    attrs: {
                        networks: t.shareNetworks,
                        url: t.shareUrl,
                        title: t.result.title,
                        description: t.result.text,
                        media: t.getMediaShare
                    }
                }) : t._e(), !t.results.retry || t.isVerifyingEnabled || "beforeForm" !== t.results.view && !t.leadFormDisabled ? t._e() : i("button", {
                    staticClass: "button result__retry",
                    on: {
                        click: t.reload
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "reload"
                    }
                }), t._v(t._s(t.$t("Пройти тест заново")))], 1)], 1), i("div", {
                    staticClass: "result__navpad-place"
                }, [i("div", {
                    staticClass: "result__whitelabel"
                }, [i("WhiteLabel")], 1)])]), t.hasButton || t.selectedResult ? i("div", {
                    staticClass: "result__navpad",
                    class: {
                        result__navpad_align_left: t.selectedResult && !t.hasButton
                    }
                }, [t.selectedResult ? i("button", {
                    staticClass: "button is-outlined result__back-button",
                    class: {
                        "is-outline": t.buttonStyle.outline, "is-square": t.buttonStyle.square
                    },
                    on: {
                        click: t.back
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "arrow-left"
                    }
                })], 1) : t._e(), t.hasButton ? i("button", {
                    staticClass: "button is-primary has-shadow result__button",
                    class: {
                        "is-outline": t.buttonStyle.outline, "is-square": t.buttonStyle.square
                    },
                    on: {
                        click: t.action
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText))], 1) : t._e(), i("div", {
                    staticClass: "result__whitelabel"
                }, [i("WhiteLabel")], 1)]) : t._e(), t.result && "redirect" === t.result.type ? i("div", {
                    staticClass: "result__container"
                }, [t.result.link ? i("div", [t._v(t._s(t.$t("Идёт переадресация на {-url}", {
                    url: t.$format.site(t.result.link)
                }))), i("span", {
                    staticClass: "u-points"
                })]) : t._e()]) : t._e()])
            },
            ro = [],
            oo = i("fb21"),
            uo = {
                components: {
                    PriceLabel: oo["a"],
                    Bonuses: qn["a"],
                    WhiteLabel: Vr["a"],
                    Share: function() {
                        return i.e("chunk-16ac490e").then(i.bind(null, "17a4"))
                    }
                },
                mounted: function() {
                    this.$emit("hasScroll", (this.hasButton || this.selectedResult) && window.document.body.scrollHeight > window.document.body.clientHeight)
                },
                data: function() {
                    return {
                        shareNetworks: [{
                            name: "vk",
                            desc: this.$t("ВКонтакте")
                        }, {
                            name: "telegram",
                            desc: "Telegram"
                        }, {
                            name: "facebook",
                            desc: "Facebook"
                        }, {
                            name: "twitter",
                            desc: "Twitter"
                        }],
                        mutedVideo: !0,
                        mutedVideoVisible: !1,
                        videoReplay: !1,
                        accessVideoFormat: {
                            cloud: ["mp4"],
                            social: ["vimeo", "youtube", "coub"]
                        }
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["results", "selectedResult", "leadFormDisabled", "domain", "answersId"]), Object(v["d"])("form", ["contacts"]), Object(v["d"])("quiz", {
                    bonuses: function(t) {
                        return o()(t, "info.marketing.bonuses", [])
                    }
                }), Object(v["c"])("quiz", ["result", "bonusesTitle", "isBonusesEnabled", "buttonStyle", "activeQuestions", "allCorrectAnswers", "isVerifyingEnabled", "countQuestions"]), {
                    bgUrl: function() {
                        return this.result.image ? this.$image.url(this.result.image, {
                            width: 750
                        }) : null
                    },
                    getMediaShare: function() {
                        return "video" === this.getMediaType && this.hasVideo ? o()(this.result, "video") : "image" === this.getMediaType && this.hasImage ? this.$image.url(o()(this.result, "image"), {
                            width: 750
                        }) : null
                    },
                    getMediaType: function() {
                        return o()(this.result, "mediaType", "image")
                    },
                    videoUrl: function() {
                        return Object(ur["a"])(this.result.video, !1)
                    },
                    hasCost: function() {
                        return o()(this.result, "cost") || o()(this.result, "minCost") || o()(this.result, "maxCost")
                    },
                    getVisibleCostLabel: function() {
                        if (this.hasCost) {
                            if (!this.hasImage && "image" === this.getMediaType) return !0;
                            if ("video" === this.getMediaType && "cloud" !== this.videoUrl.provider || "video" === this.getMediaType && !this.hasVideo) return !0
                        }
                        return !1
                    },
                    shareUrl: function() {
                        return this.domain || this.$route.query.href
                    },
                    hasButton: function() {
                        return "beforeForm" === this.results.view || "afterForm" === this.results.view && !!this.result.link
                    },
                    hasImage: function() {
                        return !H()(this.result.image)
                    },
                    hasVideo: function() {
                        return !H()(this.result.video)
                    },
                    buttonText: function() {
                        return this.result.buttonText ? this.result.buttonText : this.$t("Узнать подробнее")
                    },
                    selectedCorrectAnswers: function() {
                        return this.isVerifyingEnabled && Xt(this.answersId, this.activeQuestions, this.allCorrectAnswers)
                    },
                    hasCorrectAnswers: function() {
                        return !H()(this.allCorrectAnswers)
                    }
                }),
                methods: {
                    reload: function() {
                        this.$store.dispatch("quiz/analyticEvent", "marquiz-quiz-restart"), this.$store.commit("quiz/startQuiz")
                    },
                    action: function() {
                        "beforeForm" === this.results.view && this.$store.dispatch("quiz/showLeadForm"), "afterForm" === this.results.view && this.redirect()
                    },
                    redirect: function() {
                        this.result.link && this.$redirect(this.result.link, {
                            contacts: this.contacts,
                            result: this.result
                        }, !1, !0)
                    },
                    back: function() {
                        this.$store.commit("quiz/selectResult", null), this.$store.commit("quiz/showResults")
                    },
                    visibleMutedVideo: function() {
                        var t = this;
                        this.mutedVideoVisible = !0, setTimeout(function() {
                            t.mutedVideoVisible = !1
                        }, 2e3)
                    },
                    onEndPlayVideo: function() {
                        this.mutedVideoVisible = !1, this.videoReplay = !0
                    },
                    onClickReplayVideo: function() {
                        this.$refs.video.play(), this.videoReplay = !1, this.mutedVideoVisible = !0
                    }
                }
            },
            lo = uo,
            co = (i("8eb6"), Object(zi["a"])(lo, ao, ro, !1, null, null, null)),
            ho = co.exports,
            fo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "sidebar-mobile",
                    class: {
                        "is-expanded": t.expandedDiscount || t.expandedBonuses
                    }
                }, [t.discount ? i("div", {
                    staticClass: "sidebar-mobile__discount",
                    class: t.isExpandedDiscount,
                    on: {
                        click: function(e) {
                            t.expandedDiscount = !0
                        }
                    }
                }, [i("div", {
                    staticClass: "sidebar-mobile__discount-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedDiscount = !1
                        }
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), i("Discount", {
                    staticClass: "sidebar-mobile__discount-component",
                    attrs: {
                        unexpanded: !t.expandedDiscount,
                        countQuestions: t.countQuestions
                    }
                })], 1) : t._e(), t.isBonusesEnabled ? i("div", {
                    staticClass: "sidebar-mobile__bonuses",
                    class: t.isExpandedBonuses
                }, [i("div", {
                    staticClass: "sidebar-mobile__bonuses-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedBonuses = !1
                        }
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), i("div", {
                    staticClass: "sidebar-mobile__bonuses-block",
                    on: {
                        click: function(e) {
                            t.expandedBonuses = !0
                        }
                    }
                }, [i("div", {
                    staticClass: "sidebar-mobile__bonuses-title",
                    class: t.isExpandedBonuses
                }, [i("b-icon", {
                    staticClass: "sidebar-mobile__bonuses-icon",
                    class: t.isExpandedBonuses,
                    attrs: {
                        icon: "gift",
                        "custom-size": "mdi-18px"
                    }
                }), i("div", {
                    staticClass: "sidebar-mobile__bonuses-text"
                }, [t._v(t._s(t.bonusesTitle || t.$t("Ваши бонусы") + ":"))])], 1), t.expandedBonuses ? i("div", {
                    staticClass: "sidebar-mobile__bonuses-list",
                    class: t.isExpandedBonuses
                }, [i("Bonuses", {
                    attrs: {
                        direction: "column",
                        height: 64
                    }
                })], 1) : t._e()])]) : t._e()])
            },
            mo = [],
            po = {
                name: "MobileSidebar",
                components: {
                    Bonuses: qn["a"],
                    Discount: Br
                },
                props: {
                    bonuses: Array,
                    countQuestions: Number,
                    discount: [Number, String],
                    autoshow: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        expandedDiscount: !1,
                        expandedBonuses: !1
                    }
                },
                computed: Object(y["a"])({
                    isExpandedDiscount: function() {
                        return {
                            "is-expanded": this.expandedDiscount
                        }
                    },
                    isExpandedBonuses: function() {
                        return {
                            "is-expanded": this.expandedBonuses
                        }
                    }
                }, Object(v["c"])("quiz", ["bonusesTitle", "isBonusesEnabled"])),
                mounted: function() {
                    var t = this;
                    this.autoshow && (this.expandedDiscount = !0, this.expandedBonuses = !0, setTimeout(function() {
                        t.expandedDiscount = !1
                    }, 2e3), setTimeout(function() {
                        t.expandedBonuses = !1
                    }, 3500))
                }
            },
            go = po,
            bo = (i("958b"), Object(zi["a"])(go, fo, mo, !1, null, "0b1be1e8", null)),
            vo = bo.exports,
            _o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "empty-result"
                }, [i("div", {
                    staticClass: "empty-result__wrapper"
                }, [i("div", {
                    staticClass: "empty-result__text"
                }, [i("ImageWithLoader", {
                    staticClass: "empty-result__emoji",
                    attrs: {
                        src: t.staticPath + "/images/emoji/1f644.png"
                    }
                }), i("p", [t._v(t._s(t.$t("Мы не смогли рассчитать для вас результат")) + " ")])], 1), i("div", {
                    staticClass: "empty-result__buttons"
                }, [t.isVerifyingEnabled ? t._e() : i("b-button", {
                    staticClass: "button empty-result__button-retry",
                    attrs: {
                        "icon-left": "reload"
                    },
                    on: {
                        click: t.reload
                    }
                }, [t._v(t._s(t.$t("Пройти тест заново")))]), t.isShowNext ? i("b-button", {
                    staticClass: "button is-primary empty-result__button-next",
                    attrs: {
                        "icon-right": "arrow-right"
                    },
                    on: {
                        click: t.goNext
                    }
                }, [t._v(t._s(t.$t("Далее")))]) : t._e()], 1)]), i("WhiteLabel", {
                    staticClass: "empty-result__white-label"
                })], 1)
            },
            yo = [],
            wo = i("d66b"),
            ko = {
                components: {
                    WhiteLabel: Vr["a"],
                    ImageWithLoader: wo["a"]
                },
                data: function() {
                    return {
                        staticPath: Object({
                            VUE_APP_PRIVATE_FILE_UPLOAD_URL: "https://files.marquiz.ru/upload",
                            VUE_APP_API_URL: "https://api.marquiz.ru",
                            VUE_APP_MARQUIZ_ANALYTICS_URL: "https://analytics.marquiz.ru",
                            NODE_ENV: "production",
                            BASE_URL: "//cdn.mrqz.me/"
                        }).VUE_APP_STATIC_URL || "https://static.marquiz.ru"
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["results"]), Object(v["c"])("quiz", ["isVerifyingEnabled"]), {
                    isShowNext: function() {
                        return "beforeForm" === this.results.view
                    }
                }),
                methods: Object(y["a"])({}, Object(v["b"])("quiz", ["showLeadForm"]), {
                    reload: function() {
                        this.$store.dispatch("quiz/analyticEvent", "marquiz-quiz-restart"), this.$store.commit("quiz/startQuiz")
                    },
                    goNext: function() {
                        "beforeForm" === this.results.view && this.showLeadForm()
                    }
                })
            },
            Co = ko,
            xo = (i("84cf"), Object(zi["a"])(Co, _o, yo, !1, null, null, null)),
            qo = xo.exports,
            Do = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quiz-buttons",
                    class: {
                        "is-outline": t.buttonStyle.outline, "mobile-navbar_on": t.hasMobileNavbar
                    }
                }, [t.hasCondition ? t._e() : [i("div", {
                    staticClass: "quiz-buttons__progress"
                }, [i("ProgressBar", {
                    attrs: {
                        percent: Math.round(t.passedPercent),
                        type: t.progressType,
                        number: t.questionNumber,
                        count: t.countQuestions,
                        "dark-color": !t.buttonStyle.outline
                    }
                })], 1)], t.whiteLabel ? i("div", {
                    staticClass: "quiz-buttons__whitelabel"
                }, [i("WhiteLabel", {
                    style: t.labelStyle
                })], 1) : t._e(), t.isVerifyingEnabled ? t._e() : i("button", {
                    ref: "previous",
                    staticClass: "button is-link quiz-buttons__button quiz-buttons__button_prev",
                    class: {
                        "is-square": t.buttonStyle.square, "is-outline": t.buttonStyle.outline
                    },
                    attrs: {
                        disabled: 0 === t.activeQuestion
                    },
                    on: {
                        click: t.goToPrevious
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "arrow-left"
                    }
                })], 1), t.isLast ? t._e() : i("button", {
                    staticClass: "button quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled, "is-square": t.buttonStyle.square, "is-outline": t.buttonStyle.outline
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("next")
                        }
                    }
                }, [i("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))]), i("b-icon", {
                    staticClass: "quiz-buttons__next-icon",
                    attrs: {
                        icon: "arrow-right"
                    }
                })], 1), i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.nextByEnterEnabled ? i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.hasHint(),
                        expression: "hasHint()"
                    }],
                    staticClass: "quiz-buttons__hint",
                    domProps: {
                        innerHTML: t._s(t.hintText)
                    }
                }) : t._e()]), t.isLast ? i("button", {
                    staticClass: "button button_color_theme quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled, "is-square": t.buttonStyle.square, "is-outline": t.buttonStyle.outline
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("show-lead")
                        }
                    }
                }, [i("span", {
                    staticClass: "is-hidden-mobile"
                }, [t._v(t._s(t.$t("Последний шаг")))]), i("span", {
                    staticClass: "is-hidden-tablet"
                }, [i("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), i("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))])], 1)]) : t._e()], 2)
            },
            So = [],
            $o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "progress-bar",
                    class: {
                        "progress-bar_dark": t.darkColor
                    }
                }, [t.isLinearType ? [i("ProgressBarLinear", {
                    attrs: {
                        type: t.type,
                        percent: t.percent,
                        "dark-color": t.darkColor
                    }
                })] : "steps" === t.type ? [i("div", {
                    staticClass: "progress-bar__steps",
                    domProps: {
                        innerHTML: t._s(t.stepsText)
                    }
                })] : "text" === t.type ? [i("div", {
                    staticClass: "progress-bar__text",
                    domProps: {
                        innerHTML: t._s(t.text)
                    }
                })] : "gradient-text" === t.type ? [i("div", {
                    staticClass: "progress-bar__gradient",
                    style: {
                        "--percent": t.percent + "%"
                    }
                }, [t._v(t._s(t.$t("Осталось вопросов: {number}", {
                    number: t.count - t.number
                })))])] : "circular" === t.type ? [i("ProgressBarCircular", {
                    attrs: {
                        percent: t.percent,
                        "dark-color": t.darkColor
                    }
                })] : "circular-steps" === t.type ? [i("ProgressBarCircularSteps", {
                    attrs: {
                        number: t.number,
                        count: t.count,
                        "dark-color": t.darkColor
                    }
                })] : t._e()], 2)
            },
            Ao = [],
            To = i("55f6"),
            Oo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "progress-bar-circular",
                    class: {
                        "progress-bar-circular_dark": t.darkColor
                    }
                }, [i("div", {
                    staticClass: "progress-bar-circular__circle"
                }, [i("svg", [i("circle", {
                    attrs: {
                        cx: "14",
                        cy: "14",
                        r: "13"
                    }
                }), i("circle", {
                    attrs: {
                        cx: "14",
                        cy: "14",
                        r: "13",
                        "stroke-dashoffset": t.dashoffset
                    }
                })])]), i("div", {
                    staticClass: "progress-bar-circular__label"
                }, [i("div", {
                    staticClass: "progress-bar-circular__frase"
                }, [t._v(t._s(t.$t("Готово")))]), i("div", {
                    staticClass: "progress-bar-circular__percent"
                }, [t._v(t._s(t.percent) + "%")])])])
            },
            Po = [],
            zo = {
                name: "ProgressBarCircular",
                props: {
                    percent: Number,
                    darkColor: Boolean
                },
                computed: {
                    dashoffset: function() {
                        var t = 26 * Math.PI;
                        return (100 - this.percent) / 100 * t
                    }
                }
            },
            Mo = zo,
            Eo = (i("bfd9"), Object(zi["a"])(Mo, Oo, Po, !1, null, null, null)),
            Bo = Eo.exports,
            Vo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "progress-bar-circular-steps",
                    class: {
                        "progress-bar-circular-steps_dark": t.darkColor
                    }
                }, [i("div", {
                    staticClass: "progress-bar-circular-steps__label"
                }, [t._v(t._s(t.$t("Шаг {number} из {count}", {
                    number: t.number,
                    count: t.count
                })))]), i("div", {
                    staticClass: "progress-bar-circular-steps__gradient-wrapp",
                    style: {
                        "--left-percent": t.percent + "%",
                        "--right-percent": 50 - t.percent + "%"
                    }
                }, [i("div", {
                    staticClass: "progress-bar-circular-steps__steps",
                    style: {
                        left: t.leftOffset
                    }
                }, t._l(t.count, function(e) {
                    return i("div", {
                        staticClass: "progress-bar-circular-steps__step",
                        class: {
                            "progress-bar-circular-steps__step_active": e <= t.number
                        }
                    })
                }), 0)])])
            },
            Lo = [],
            Io = {
                name: "ProgressBarCircularSteps",
                props: {
                    number: Number,
                    count: Number,
                    darkColor: Boolean
                },
                data: function() {
                    return {
                        maxPoints: 8
                    }
                },
                computed: {
                    percent: function() {
                        return 100 / (this.count - 1) * (this.number - 1) / 2
                    },
                    leftOffset: function() {
                        var t = Math.round(this.number - this.maxPoints / 2),
                            e = Math.round(this.count - this.maxPoints);
                        return "-".concat(this.number > this.maxPoints / 2 ? 12 * Math.min(t, e) : "0", "px")
                    }
                }
            },
            jo = Io,
            Fo = (i("f058"), Object(zi["a"])(jo, Vo, Lo, !1, null, null, null)),
            Ro = Fo.exports,
            No = {
                name: "ProgressBar",
                components: {
                    ProgressBarCircular: Bo,
                    ProgressBarLinear: To["a"],
                    ProgressBarCircularSteps: Ro
                },
                props: {
                    type: {
                        type: String,
                        default: "progress-bar"
                    },
                    percent: Number,
                    number: Number,
                    count: Number,
                    darkColor: Boolean
                },
                computed: {
                    isLinearType: function() {
                        return L()(["progress-bar", "dynamic-progress-bar", "final", "mobile"], this.type)
                    },
                    stepsText: function() {
                        return this.$t("Шаг {number} из {count}", {
                            number: "<span>".concat(this.number, "</span>"),
                            count: this.count,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    },
                    text: function() {
                        return this.$t("Вопрос {number} из {count}", {
                            number: "<span>".concat(this.number, "</span>"),
                            count: this.count,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    }
                }
            },
            Ho = No,
            Qo = (i("e720"), Object(zi["a"])(Ho, $o, Ao, !1, null, null, null)),
            Uo = Qo.exports,
            Wo = {
                name: "QuizButtons",
                props: {
                    passedPercent: Number,
                    activeQuestion: Number,
                    isLast: Boolean,
                    filled: Boolean,
                    notRequired: Boolean,
                    whiteLabel: Boolean,
                    hasMobileNavbar: Boolean,
                    buttonStyle: {
                        type: Object,
                        default: function() {
                            return {
                                square: !1,
                                outline: !1
                            }
                        }
                    }
                },
                components: {
                    ProgressBar: Uo,
                    WhiteLabel: Vr["a"]
                },
                mounted: function() {
                    window.addEventListener("keyup", this.keyUp, !0)
                },
                data: function() {
                    return {
                        pressedEnter: !1,
                        keepHideHint: !1,
                        labelStyle: "display: block !important; visibility: visible !important; opacity: 1 !important"
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info"]), Object(v["c"])("quiz", ["hasCondition", "questionNumber", "countQuestions", "getQuestion", "isVerifyingEnabled"]), {
                    hintText: function() {
                        return this.$t("или нажмите {key}", {
                            key: "<b>Enter</b>",
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    },
                    nextByEnterEnabled: function() {
                        return "input" !== o()(this.getQuestion, "type") || "textarea" !== o()(this.getQuestion, "options.inputType")
                    },
                    progressType: function() {
                        return this.hasMobileNavbar && "mobile" === this.$mq ? "mobile" : o()(this.info, "design.progressType", "progress-bar") || "progress-bar"
                    }
                }),
                methods: {
                    hasHint: function() {
                        return !this.keepHideHint && (!(this.questionNumber > 3 && !this.pressedEnter) || (this.keepHideHint = !0, !1))
                    },
                    goToPrevious: function() {
                        this.$refs.previous.blur(), this.$emit("previous")
                    },
                    keyUp: function(t) {
                        !this.nextByEnterEnabled || "Enter" !== t.key && 39 !== t.keyCode || (this.filled || this.notRequired) && (this.pressedEnter = !0, this.$emit("next")), 37 === t.keyCode && this.goToPrevious()
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("keyup", this.keyUp, !0)
                }
            },
            Yo = Wo,
            Go = (i("8e33"), Object(zi["a"])(Yo, Do, So, !1, null, null, null)),
            Zo = Go.exports,
            Ko = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("article", {
                    staticClass: "thank-page"
                }, [i("p", {
                    staticClass: "title thank-page__title"
                }, [t._v(t._s(t.$t("Спасибо")) + "! 👏")]), i("p", {
                    staticClass: "subtitle thank-page__subtitle",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.thanksText))
                    }
                }), t.fixedDiscount ? i("FinalDiscount2", {
                    staticClass: "thank-page__discount"
                }) : t._e(), t.isBonusesEnabled ? [i("div", {
                    staticClass: "thank-page__bonuses-title"
                }, [t._v(t._s(t.bonusesTitle || t.$t("Ваши бонусы") + ":"))]), i("Bonuses", {
                    staticClass: "thank-page__bonuses",
                    attrs: {
                        height: 80
                    }
                })] : t._e()], 2)
            },
            Jo = [],
            Xo = i("aa91"),
            tu = {
                components: {
                    Bonuses: qn["a"],
                    FinalDiscount2: Xo["a"]
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["fixedDiscount", "info", "bonuses"]), Object(v["d"])("form", ["contacts"]), Object(v["c"])("quiz", ["bonusesTitle", "isBonusesEnabled"]), {
                    thanksText: function() {
                        return this.replaceName(this.info.form.thanks)
                    },
                    name: function() {
                        return o()(this.contacts, "name")
                    },
                    bonuses: function() {
                        return o()(this.info, "marketing.bonuses", [])
                    }
                }),
                methods: {
                    replaceName: function(t) {
                        return t && this.name ? t.replace(/\[name\]/g, this.name) : t
                    }
                }
            },
            eu = tu,
            iu = (i("95ef"), Object(zi["a"])(eu, Ko, Jo, !1, null, null, null)),
            nu = iu.exports,
            su = i("3a5e"),
            au = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.cookieNotice ? n("div", {
                    staticClass: "cookie-notice"
                }, [n("div", {
                    staticClass: "cookie-notice__bg"
                }), n("div", {
                    staticClass: "cookie-notice__banner"
                }, [n("img", {
                    attrs: {
                        src: i("d46a")
                    }
                }), n("div", [t._v(t._s(t.$t("Мы используем куки для работы сервиса."))), n("span", {
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.text + "."))
                    }
                })]), n("button", {
                    staticClass: "button",
                    on: {
                        click: t.close
                    }
                }, [t._v("OK")])])]) : t._e()
            },
            ru = [],
            ou = {
                beforeMount: function() {
                    "shown" === At.a.get(this.cookieName) && this.$store.commit("hideCookieNotice")
                },
                computed: Object(y["a"])({}, Object(v["d"])(["lang", "cookieNotice"]), Object(v["d"])("quiz", ["id", "settings"]), {
                    text: function() {
                        return this.$t("Вы можете их [отключить]({link1}) или продолжить, согласно [политике конфиденциальности]({link2})", {
                            link1: this.instruction,
                            link2: "/agreement?lang=".concat(this.lang, "&customPolicy=").concat(this.settings.customPolicy || "")
                        })
                    },
                    instruction: function() {
                        switch (this.lang) {
                            case "ru":
                                return "https://ru.wikihow.com/отключить-файлы-cookie";
                            default:
                                return "https://www.wikihow.com/Disable-Cookies"
                        }
                    },
                    cookieName: function() {
                        return "marquiz__cookie-notice_".concat(this.id)
                    }
                }),
                methods: {
                    close: function() {
                        this.$store.commit("hideCookieNotice"), At.a.set(this.cookieName, "shown")
                    }
                }
            },
            uu = ou,
            lu = (i("bfc4"), Object(zi["a"])(uu, au, ru, !1, null, null, null)),
            cu = lu.exports,
            du = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mobile-navbar",
                    class: {
                        "is-expanded": t.discountExpanded || t.bonusesExpanded, "hide-navbar": t.isNavbarHidden, "show-navbar": !t.isNavbarHidden
                    },
                    on: {
                        click: t.turnOnVisibility
                    }
                }, [i("div", {
                    staticClass: "mobile-navbar__stick"
                }), t.isBonusesEnabled ? i("div", {
                    staticClass: "mobile-navbar__bonuses",
                    class: {
                        "is-expanded": t.bonusesExpanded
                    }
                }, [i("div", {
                    staticClass: "mobile-navbar__bonuses"
                }, [i("div", {
                    staticClass: "mobile-navbar__bonuses-wrap",
                    class: {
                        "is-expanded": t.bonusesExpanded
                    }
                }, [i("MobileBonuses", {
                    attrs: {
                        height: t.isSwiperEnabled ? 40 : 43,
                        single: !t.isSwiperEnabled,
                        unexpanded: !t.bonusesExpanded,
                        hasDiscount: !!t.discount
                    }
                })], 1), t.bonusesExpanded ? i("div", {
                    staticClass: "mobile-navbar__bonuses-list",
                    class: {
                        "is-expanded": t.bonusesExpanded
                    }
                }, [i("MobileBonuses", {
                    attrs: {
                        height: 53,
                        expanded: t.bonusesExpanded
                    }
                })], 1) : t._e()])]) : t._e(), t.discount ? i("div", {
                    staticClass: "mobile-navbar__discount-container",
                    class: {
                        "is-expanded": t.discountExpanded
                    }
                }, [i("MobileDiscount", {
                    staticClass: "mobile-navbar__discount",
                    class: {
                        "is-expanded": t.discountExpanded
                    },
                    attrs: {
                        countQuestions: t.countQuestions,
                        unexpanded: !t.discountExpanded
                    }
                })], 1) : t._e()])
            },
            hu = [],
            fu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "discount discount_mobile"
                }, [t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? i("div", {
                        staticClass: "discount__bubble discount__bubble_mobile"
                    }, [t._v(t._s("+ " + t.$format.number(t.getIncreasingDiscountStep)))]) : t._e()
                }), i("div", {
                    staticClass: "discount__wrap"
                }, [i("div", {
                    staticClass: "discount__label"
                }, [i("div", {
                    staticClass: "discount__label-text"
                }, [t._v(t._s(t.unexpanded ? t.$t("Скидка") : t.discountTitle || t.$t("Ваша скидка")) + " ")]), i("DiscountArrow", {
                    staticClass: "discount__arrows",
                    attrs: {
                        down: t.isMeltingDiscount
                    }
                })], 1), i("div", {
                    staticClass: "discount__price"
                }, [i("div", {
                    staticClass: "discount__value"
                }, [t._v(t._s(t.$format.number(t.discount)))]), i("div", {
                    staticClass: "discount__symbol discount__symbol_mobile"
                }, [t._v(t._s(t.discountCurrencySymbol))])])])], 2)
            },
            mu = [],
            pu = {
                extends: Br,
                name: "MobileDiscount",
                computed: Object(y["a"])({}, Object(v["c"])("quiz", ["discountCurrencySymbol", "discountTitle"]))
            },
            gu = pu,
            bu = (i("86de"), Object(zi["a"])(gu, fu, mu, !1, null, null, null)),
            vu = bu.exports,
            _u = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bonuses bonuses_mobile",
                    class: [{
                        bonuses_column: t.expanded || t.single,
                        bonuses_row: t.unexpanded && !t.single,
                        "bonuses_has-discount": t.hasDiscount
                    }, "bonuses_count_" + t.bonuses.length],
                    style: {
                        "--bonus-height": t.height + "px"
                    }
                }, t._l(t.bonuses, function(e, n) {
                    return i("Bonus", {
                        key: "bonus_" + n,
                        staticClass: "bonuses__bonus",
                        attrs: {
                            bonus: e,
                            isLocked: t.isLock(e),
                            expanded: t.expanded,
                            unexpanded: t.unexpanded,
                            single: t.single
                        }
                    })
                }), 1)
            },
            yu = [],
            wu = {
                extends: qn["a"],
                props: {
                    hasDiscount: Boolean,
                    expanded: {
                        type: Boolean,
                        default: !1
                    },
                    unexpanded: {
                        type: Boolean,
                        default: !1
                    },
                    single: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            ku = wu,
            Cu = (i("7183"), Object(zi["a"])(ku, _u, yu, !1, null, null, null)),
            xu = Cu.exports,
            qu = i("81be"),
            Du = i.n(qu),
            Su = i("0f32"),
            $u = i.n(Su),
            Au = function() {
                function t(e, i, n) {
                    var s = n.direction,
                        a = void 0 === s ? "bottom" : s,
                        r = n.tapAdditionalSizes,
                        o = n.distance,
                        u = void 0 === o ? "50%" : o,
                        l = n.minDistance,
                        c = void 0 === l ? 20 : l,
                        d = n.speed,
                        h = void 0 === d ? "500" : d,
                        f = n.vibration,
                        m = void 0 === f || f,
                        p = n.cbStart,
                        g = void 0 === p ? function() {} : p,
                        b = n.cbFinish,
                        v = void 0 === b ? function() {} : b,
                        _ = n.cbMoving,
                        y = void 0 === _ ? function() {} : _,
                        w = n.cbReadyToClose,
                        k = void 0 === w ? function() {} : w,
                        C = n.cbNotReadyToClose,
                        x = void 0 === C ? function() {} : C,
                        q = n.cbBack,
                        D = void 0 === q ? function() {} : q;
                    Object(Pt["a"])(this, t), e && i && (this.target = e, this.direction = a, this.tapTarget = this._createTapElement(i, r), this.maxSpeed = h, this.distance = u, this.minDistance = c, this.vibration = m, this.cbStart = g, this.cbFinish = v, this.cbMoving = y, this.cbReadyToClose = k, this.cbNotReadyToClose = x, this.cbBack = D, this._init())
                }
                return Object(zt["a"])(t, [{
                    key: "back",
                    value: function(t, e, i) {
                        var n = this;
                        this.moving || (this.target.style.transition = "300ms ease-out", this.target.style.transform = "translate3d(0, 0, 0)", setTimeout(function() {
                            n.target.style.transition = "", n.cbBack(t, e, i)
                        }, 300))
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        this.moving || (this.target.style.transition = "".concat(i, "ms ease-out"), this.target.style.transform = "translate3d(0, 110%, 0)", setTimeout(function() {
                            e.target.style.transition = "", e.target.style.transform = "translate3d(0, 0, 0)", e.cbFinish(t, i, n)
                        }, i))
                    }
                }, {
                    key: "_createTapElement",
                    value: function(t, e) {
                        var i = window.getComputedStyle(t).position;
                        "static" === i && (t.style.position = "relative");
                        var n = document.createElement("span");
                        n.classList.add("tap-target"), n.setAttribute("style", "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; overscroll-behavior: none;"), t.append(n);
                        var s = e.top,
                            a = void 0 === s ? 0 : s,
                            r = e.bottom,
                            o = void 0 === r ? 0 : r,
                            u = e.right,
                            l = void 0 === u ? 0 : u,
                            c = e.left,
                            d = void 0 === c ? 0 : c;
                        return n.style.top = "-".concat(a), n.style.height = "calc(".concat(n.style.height, " + ").concat(a, ")"), n.style.bottom = o, n.style.height = "calc(".concat(n.style.height, " + ").concat(o, ")"), n.style.right = l, n.style.width = "calc(".concat(n.style.width, " + ").concat(l, ")"), n.style.left = "-".concat(d), n.style.width = "calc(".concat(n.style.width, " + ").concat(d, ")"), n
                    }
                }, {
                    key: "_init",
                    value: function() {
                        this.moving = !1, this._isTouchDevice() || this.tapTarget.addEventListener("click", this.close.bind(this)), this.tapTarget.addEventListener("touchstart", this._start.bind(this)), this.tapTarget.addEventListener("touchmove", $u()(this._move, 25).bind(this)), this.tapTarget.addEventListener("touchend", this._finish.bind(this))
                    }
                }, {
                    key: "_start",
                    value: function(t) {
                        this.moving = !0;
                        var e = t.changedTouches[0];
                        this.startPosY = e.pageY, this.startPosX = e.pageX, this.startTime = t.timeStamp, this.cbStart(t)
                    }
                }, {
                    key: "_move",
                    value: function(t) {
                        if (this.moving) {
                            var e = t.changedTouches[0],
                                i = this._getDistanceForClosing(),
                                n = this._getDistance(e),
                                s = 100 * n / i;
                            this._translate(e), this._borderPassingHandler(t, n, s, i), this.cbMoving(t, n, s)
                        }
                    }
                }, {
                    key: "_finish",
                    value: function(t) {
                        this.moving = !1;
                        var e = t.changedTouches[0],
                            i = this._getDistance(e),
                            n = this._getDistanceForClosing(),
                            s = t.timeStamp - this.startTime;
                        s <= this.maxSpeed && i >= this.minDistance ? this.close(t, s, i) : i > n ? this.close(t, 300, i) : this.back(t, s, i)
                    }
                }, {
                    key: "_translate",
                    value: function(t) {
                        switch (this.direction) {
                            case "bottom":
                                t.pageY >= this.startPosY ? this.target.style.transform = "translate3d(0, ".concat(t.pageY - this.startPosY, "px, 0)") : this.target.style.transform = "translate3d(0, 0, 0)";
                                break;
                            case "top":
                                t.pageY <= this.startPosY ? this.target.style.transform = "translate3d(0, ".concat(t.pageY - this.startPosY, "px, 0)") : this.target.style.transform = "translate3d(0, 0, 0)";
                                break;
                            case "right":
                                t.pageX >= this.startPosX ? this.target.style.transform = "translate3d(".concat(t.pageX - this.startPosX, "px, 0, 0)") : this.target.style.transform = "translate3d(0, 0, 0)";
                                break;
                            case "left":
                                t.pageX <= this.startPosX ? this.target.style.transform = "translate3d(".concat(t.pageX - this.startPosX, "px, 0, 0)") : this.target.style.transform = "translate3d(0, 0, 0)";
                                break
                        }
                    }
                }, {
                    key: "_borderPassingHandler",
                    value: function(t, e, i, n) {
                        e > n ? this.borderHasPassed || (this.cbReadyToClose(t, e, i), this.borderHasPassed = !0, this.vibration && this._vibrate()) : this.borderHasPassed && (this.borderHasPassed = !1, this.cbNotReadyToClose(t, e, i))
                    }
                }, {
                    key: "_getDistanceForClosing",
                    value: function() {
                        var t = this.target.clientHeight;
                        return Du()(this.distance, "%") ? t * parseFloat(this.distance) / 100 : Du()(this.distance, "px") ? parseFloat(this.distance) : t / 2
                    }
                }, {
                    key: "_getDistance",
                    value: function(t) {
                        return "bottom" === this.direction || "top" === this.direction ? t.pageY - this.startPosY : t.pageX - this.startPosX
                    }
                }, {
                    key: "_vibrate",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 35;
                        if (o()(window, "navigator.vibrate")) try {
                            window.navigator.vibrate(t)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "_isTouchDevice",
                    value: function() {
                        return "ontouchstart" in window || navigator.maxTouchPoints
                    }
                }]), t
            }(),
            Tu = Au,
            Ou = {
                name: "MobileNavbar",
                components: {
                    MobileBonuses: xu,
                    MobileDiscount: vu
                },
                props: {
                    countQuestions: Number,
                    discount: [Number, String],
                    isBonusesEnabled: Boolean,
                    autoshow: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        discountExpanded: !1,
                        bonusesExpanded: !1,
                        isNavbarHidden: null,
                        alreadyClosed: !1,
                        swiper: null
                    }
                },
                mounted: function() {
                    var t = this;
                    this.isSwiperEnabled && (this.addSwipeEventToClose(), this.autoshow && (this.discountExpanded = !0, this.bonusesExpanded = !0, setTimeout(function() {
                        t.alreadyClosed || t.swiper.close()
                    }, 2e3)))
                },
                computed: {
                    isSwiperEnabled: function() {
                        var t = o()(this.$store, "state.quiz.info.marketing.bonuses", []).length;
                        return t > 1 || 1 === t && !!this.discount
                    }
                },
                methods: {
                    turnOnVisibility: function() {
                        var t = this;
                        !this.isSwiperEnabled || this.bonusesExpanded || this.discountExpanded || (this.isNavbarHidden = !0, setTimeout(function() {
                            t.discountExpanded = !0, t.bonusesExpanded = !0, t.isNavbarHidden = !1
                        }, 290))
                    },
                    addSwipeEventToClose: function() {
                        var t = this,
                            e = this.$el,
                            i = this.$el.querySelector(".mobile-navbar__stick");
                        this.swiper = new Tu(e, i, {
                            tapAdditionalSizes: {
                                top: "30px",
                                bottom: "50px",
                                left: "100px",
                                right: "100px"
                            },
                            distance: "40%",
                            speed: "200",
                            cbFinish: function() {
                                t.discountExpanded = !1, t.bonusesExpanded = !1, t.alreadyClosed = !0
                            }
                        })
                    }
                }
            },
            Pu = Ou,
            zu = (i("da1c"), Object(zi["a"])(Pu, du, hu, !1, null, null, null)),
            Mu = zu.exports,
            Eu = {
                components: {
                    ResultLoader: so,
                    FinalPage: function() {
                        return i.e("final-page").then(i.bind(null, "f125"))
                    },
                    QuizButtons: Zo,
                    Assistant: dn,
                    AssistantMobile: xn,
                    Discount: Br,
                    Question: xr,
                    Bonuses: qn["a"],
                    WhiteLabel: Vr["a"],
                    SidebarMobile: vo,
                    Results: function() {
                        return i.e("swiper").then(i.bind(null, "8169"))
                    },
                    Result: ho,
                    ThankPage: nu,
                    EmptyResult: qo,
                    Loading: su["a"],
                    CookieNotice: cu,
                    MobileNavbar: Mu
                },
                mounted: function() {
                    x()(this.$refs.quiz) || this.changeHeight()
                },
                data: function() {
                    return {
                        animationType: o()(this.slideAnimations, "forward", "question-slide_forward"),
                        frameHeight: null,
                        heightAfterShowAssistant: null,
                        heightBeforeShowAssistant: null,
                        isLoaderActive: !1,
                        hasScroll: !1,
                        hasAssistantOnSlide: !1
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])(["cookieNotice"]), Object(v["d"])("quiz", ["questions", "activeQuestion", "info", "leadForm", "id", "isResultsShow", "isResultShow", "isResultLoaderShow", "hint", "redirectUrl", "isBonusesEnabled"]), Object(v["d"])("form", ["isThanksPage"]), Object(v["c"])("quiz", ["countAllQuestions", "getPassedPercent", "getAnswerValue", "getIsFilled", "getLastStep", "getQuestion", "isLastStep", "isWhiteLabelActive", "result", "isBonusesEnabled", "buttonStyle", "isWidgetMode", "animationStyle"]), {
                    discount: function() {
                        return o()(this.info, "marketing.discount.value") || o()(this.info, "marketing.discount.percent")
                    },
                    showRightSidebar: function() {
                        return this.discount || this.getQuestion && this.getQuestion.text || this.isBonusesEnabled
                    },
                    bonuses: function() {
                        return o()(this.info, "marketing.bonuses", [])
                    },
                    getNotRequired: function() {
                        return o()(this.getQuestion, "notRequired", !1)
                    },
                    getCanMany: function() {
                        var t = ["variants", "images", "select", "file", "emoji"];
                        return "many" === o()(this.getQuestion, "select") && L()(t, o()(this.getQuestion, "type"))
                    },
                    questionType: function() {
                        return o()(this.getQuestion, "type")
                    },
                    hasTitle: function() {
                        return !!o()(this.info, "title") && !this.isWidgetMode
                    },
                    isStartPageEnabled: function() {
                        return o()(this.info, "startPage.enabled", !1)
                    },
                    hasResult: function() {
                        return !H()(this.result)
                    },
                    containerClasses: function() {
                        return {
                            "quiz-container_with-loader": this.isResultLoaderShow || this.isLoaderActive,
                            "quiz-container_has_scroll": this.hasScroll,
                            "quiz-container_has_result": this.isResultShow && this.hasResult && this.isLoaderActive,
                            "quiz-container_has_results": this.isResultsShow || this.leadForm,
                            "quiz-container_has_widget": this.isWidgetMode,
                            "hide-scrollbar": this.isWidgetMode,
                            "animation__bottom-top": "bottomTop" === this.animationStyle
                        }
                    },
                    questionsStyle: function() {
                        var t = this.isWidgetMode && o()(this.info, "assistant.name") && !this.leadForm && !this.isResultsShow && !this.isResultShow && !this.isResultLoaderShow,
                            e = t ? "calc(1rem + 50px)" : "1rem";
                        return "desktop" !== this.$mq ? "padding: ".concat(e, " 0 60px !important") : ""
                    },
                    slideAnimations: function() {
                        var t = this.animationStyle,
                            e = {
                                rightLeft: {
                                    forward: "question-slide_forward",
                                    back: "question-slide_back"
                                },
                                bottomTop: {
                                    forward: "question-slide_up"
                                }
                            };
                        return o()(e, t, e.rightLeft)
                    },
                    hasMobileNavbar: function() {
                        return Boolean(this.isBonusesEnabled || this.discount)
                    },
                    labelStyle: function() {
                        return "bottomTop" === this.animationStyle && "mobile" === this.$mq ? "display: block !important; visibility: visible !important;" : "display: block !important; visibility: visible !important; opacity: 1 !important"
                    }
                }),
                methods: Object(y["a"])({}, Object(v["b"])("quiz", ["prevQuestion", "nextQuestion", "showLeadForm"]), {
                    questionEntered: function() {
                        this.changeHeight()
                    },
                    questionLeaved: function() {
                        window.scrollTo(0, 0)
                    },
                    checkAssistantOnSlide: function() {
                        this.hasAssistantOnSlide = !!o()(this.getQuestion, "text", !1)
                    },
                    changeHeight: function() {
                        var t = this;
                        this.$nextTick(function() {
                            var e, i = t.$refs.quiz.clientHeight;
                            if ("images" === t.questionType) {
                                var n = o()(t.$refs, "question.0.$el");
                                if (!n) return;
                                e = i - n.clientHeight + n.scrollHeight + 15, e > 650 && (e = 650), e < i && (e = i), e && t.$quizFrame.changeHeight(t.id, e)
                            }
                        })
                    },
                    loaderLeaved: function() {
                        this.$store.commit("quiz/showResultAnimation", !0), this.isLoaderActive = !1
                    },
                    quizAfterLeave: function() {
                        this.isResultLoaderShow && (this.isLoaderActive = !0), this.hasScroll && (this.hasScroll = !1)
                    },
                    resetAssistantOnSlide: function() {
                        "bottomTop" === this.animationStyle && (this.hasAssistantOnSlide = !1)
                    }
                }),
                watch: {
                    activeQuestion: function(t, e) {
                        var i = o()(this.slideAnimations, "forward", "question-slide_forward"),
                            n = o()(this.slideAnimations, "back", i);
                        this.animationType = t < e ? n : i
                    },
                    isThanksPage: function() {
                        this.changeHeight()
                    }
                }
            },
            Bu = Eu,
            Vu = (i("9eb9"), Object(zi["a"])(Bu, Zi, Ki, !1, null, null, null)),
            Lu = Vu.exports,
            Iu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "install"
                }, [t.quizId && !t.edit ? i("div", {
                    staticClass: "install__edit"
                }, [i("div", [t._v(t._s(t.$t('К этой группе привязан квиз "{title}"', {
                    title: t.quizTitle
                })))]), i("div", [i("a", {
                    staticClass: "button is-text",
                    attrs: {
                        href: "https://panel.marquiz.ru/quizzes/edit/" + t.quizId,
                        target: "_blank"
                    }
                }, [i("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Редактировать квиз")))]), i("button", {
                    staticClass: "button is-text",
                    on: {
                        click: function(e) {
                            t.edit = !0
                        }
                    }
                }, [i("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Привязать другой квиз")))])])]) : t._e(), !t.quizId || t.edit ? [i("p", [t._v(t._s(t.$t('Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"')))]), i("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.setGroup(e)
                        }
                    }
                }, [i("section", {
                    staticClass: "mb-1"
                }, [i("b-field", {
                    attrs: {
                        label: t.$t("Введите id квиза")
                    }
                }), i("b-input", {
                    ref: "quizId",
                    attrs: {
                        placeholder: "5aa7c2bb23fc0f00e7b75a49"
                    },
                    model: {
                        value: t.id,
                        callback: function(e) {
                            t.id = "string" === typeof e ? e.trim() : e
                        },
                        expression: "id"
                    }
                })], 1), i("button", {
                    staticClass: "install__attach-btn button is-danger",
                    attrs: {
                        type: "submit",
                        disabled: !t.id
                    }
                }, [t._v(t._s(t.$t("Привязать")))])])] : t._e()], 2)
            },
            ju = [],
            Fu = {
                mounted: function() {
                    this.$refs.quizId && o()(this.$refs, "quizId.$refs.input") && this.$focusInput(this.$refs.quizId.$refs.input)
                },
                props: {
                    quizId: String,
                    request: Object,
                    quizTitle: String
                },
                data: function() {
                    return {
                        id: null,
                        edit: !1
                    }
                },
                methods: {
                    setGroup: function() {
                        var t = this;
                        this.$axios.post("v1/vkGroups/setGroup", {
                            request: this.request,
                            quizId: this.id
                        }).then(function() {
                            t.$emit("changed")
                        }).catch(function(e) {
                            t.$toast.open({
                                message: e.message,
                                type: "is-danger"
                            })
                        })
                    }
                },
                watch: {
                    edit: function(t) {
                        var e = this;
                        t && (this.id = this.quizId, this.$nextTick(function() {
                            e.$focusInput(e.$refs.quizId.$refs.input)
                        }))
                    }
                }
            },
            Ru = Fu,
            Nu = Object(zi["a"])(Ru, Iu, ju, !1, null, null, null),
            Hu = Nu.exports,
            Qu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "welcome"
                }, [t._e(), i("div", {
                    staticClass: "hero is-fullheight"
                }, [i("div", {
                    staticClass: "hero-body"
                }, [i("div", {
                    staticClass: "columns"
                }, [i("div", {
                    staticClass: "welcome__info column is-6"
                }, [i("div", [i("h1", {
                    staticClass: "title"
                }, [t._v(t._s(t.content[t.lang].title))]), "ru" === t.lang ? i("h2", {
                    staticClass: "subtitle"
                }, [t._v(t._s("Получайте в разы больше заявок"))]) : t._e(), i("div", {
                    staticClass: "welcome__text"
                }, ["ru" === t.lang ? i("p", [t._v(t._s("Квиз - это виджет опроса, который задаёт вопросы посетителю, а в конце предлагает оставить контакты."))]) : t._e(), i("p", [t._v(t._s(t.content[t.lang].description))])]), i("div", {
                    staticClass: "welcome__buttons"
                }, [i("a", {
                    staticClass: "button is-primary",
                    attrs: {
                        href: t.content[t.lang].href,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.content[t.lang].button))]), "ru" === t.lang ? i("a", {
                    staticClass: "button",
                    attrs: {
                        href: "https://www.marquiz.ru/#section-steps",
                        target: "_blank"
                    }
                }, [t._v("Подробнее")]) : t._e()])])]), i("div", {
                    staticClass: "welcome__image column"
                }, [i("img", {
                    attrs: {
                        src: t.content[t.lang].imgSrc
                    }
                })])])])])])
            },
            Uu = [],
            Wu = i("56e2"),
            Yu = {
                components: {
                    RadioButtonGroup: Wu["a"]
                },
                data: function() {
                    return {
                        languages: [{
                            value: "ru",
                            label: "Русский",
                            text: "RU"
                        }, {
                            value: "en",
                            label: "English",
                            text: "EN"
                        }],
                        content: {
                            ru: {
                                title: "Marquiz - конструктор маркетинговых квизов",
                                description: "Задавая нужные вопросы, он помогает определиться с выбором человеку. Поэтому квиз работает на более холодную аудиторию, за счёт чего вы получаете в разы больше заявок",
                                button: "Создать квиз",
                                imgSrc: "/static/mrqz-image.png",
                                href: "https://panel.marquiz.ru/signup"
                            },
                            en: {
                                title: "Create an online quiz in 10 minutes",
                                description: "Get registrations and learn more about your audience through your website and social media — all without the help of designers or programmers",
                                button: "Try for free",
                                imgSrc: "/static/mrqz-image-en.png",
                                href: "https://app.marquiz.io/signup"
                            }
                        }
                    }
                },
                computed: {
                    lang: {
                        get: function() {
                            return /ru|be|uk|kz/i.test(this.$store.state.lang) ? "ru" : "en"
                        },
                        set: function(t) {
                            this.$store.commit("setLang", t), this.$i18n.i18next.changeLanguage(t)
                        }
                    }
                }
            },
            Gu = Yu,
            Zu = (i("4a1b"), Object(zi["a"])(Gu, Qu, Uu, !1, null, null, null)),
            Ku = Zu.exports,
            Ju = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "start-page columns is-desktop-modal",
                    class: t.classes
                }, ["image" === t.bgType && t.bgUrl || t.isVideoMobileBg ? i("div", {
                    staticClass: "start-page__bg column",
                    class: {
                        "is-7": t.isCol7
                    },
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }) : t._e(), t.isBrand && !t.isFooterBrand ? i("div", {
                    staticClass: "start-page__brand",
                    class: {
                        "column is-5": "desktop" === t.$mq && t.isCol5
                    }
                }, [t.logo && t.logo.url ? i("img", {
                    staticClass: "start-page__logo",
                    attrs: {
                        src: t.$image.url(t.logo, {
                            height: "37"
                        })
                    }
                }) : t._e(), t.name ? i("div", {
                    staticClass: "start-page__name"
                }, [t._v(t._s(t.name))]) : t._e()]) : t._e(), t.isVideoBg && !t.isVideoMobileBg ? i("VideoBg", {
                    staticClass: "start-page__bg column",
                    class: {
                        "is-7": t.isCol7
                    },
                    attrs: {
                        loop: t.videoLoop,
                        videoUrl: t.videoUrl,
                        muted: t.isVideoMuted
                    }
                }) : t._e(), i("div", {
                    ref: "content",
                    staticClass: "start-page__content column",
                    class: {
                        "is-5": t.isCol5, "hide-scrollbar": t.isWidgetOpen
                    },
                    on: {
                        click: t.toggleMute
                    }
                }, [i("div", {
                    staticClass: "start-page__body"
                }, [t.logo && t.logo.url ? t._e() : i("div", {
                    staticClass: "start-page__line"
                }), i("h1", {
                    staticClass: "start-page__header"
                }, [t._v(t._s(t.title))]), i("h2", {
                    staticClass: "start-page__subheader"
                }, [t._v(t._s(t.subtitle))]), i("button", {
                    staticClass: "start-page__button button is-primary is-blicked has-light-shadow",
                    class: {
                        "is-outline": t.buttonStyle.outline && "expanded" !== this.spTheme, "is-square": t.buttonStyle.square
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.close(e)
                        }
                    }
                }, [i("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText || t.$t("Пройти тест")))], 1), t.isBonusesEnabled ? i("div", {
                    staticClass: "start-page__bonuses"
                }, [i("div", {
                    staticClass: "start-page__bonuses-title"
                }, [t._v(t._s(t.bonusesTitle || t.$t("Бонусы после прохождения теста")))]), i("Bonuses", {
                    class: {
                        bonuses_centered: t.areBonusesCentered
                    },
                    attrs: {
                        direction: "row",
                        height: 64
                    }
                })], 1) : t._e()]), i("div", {
                    staticClass: "start-page__footer",
                    class: {
                        "start-page__footer_has_wl": !t.isWhiteLabelActive
                    }
                }, [t.isBrand && t.isFooterBrand ? i("div", {
                    staticClass: "start-page__brand",
                    class: {
                        "column is-5": t.isCol5
                    }
                }, [t.logo && t.logo.url ? i("img", {
                    staticClass: "start-page__logo",
                    attrs: {
                        src: t.$image.url(t.logo, {
                            height: "37"
                        })
                    }
                }) : t._e(), t.name ? i("div", {
                    staticClass: "start-page__name"
                }, [t._v(t._s(t.name))]) : t._e()]) : t._e(), "landing" === t.mode && (t.phone || t.legal) ? i("div", {
                    staticClass: "start-page__contact"
                }, [t.phone && t.isPhoneClickable ? i("a", {
                    staticClass: "start-page__phone start-page__phone_clickable",
                    attrs: {
                        href: "tel:" + t.phoneForLink
                    },
                    on: {
                        click: t.clickOnPhone
                    }
                }, [t._v(t._s(t.phone))]) : t.phone ? i("div", {
                    staticClass: "start-page__phone"
                }, [t._v(t._s(t.phone))]) : t._e(), t.legal ? i("div", {
                    staticClass: "start-page__legal"
                }, [t._v(t._s(t.legal))]) : t._e()]) : t._e(), t.isWhiteLabelActive ? t._e() : i("WhiteLabel", {
                    staticClass: "start-page__white-label",
                    style: t.labelStyle
                })], 1)]), i("div", {
                    staticClass: "start-page__layer"
                }), i("CookieNotice", {
                    staticClass: "start-page__cookie-notice"
                })], 1)
            },
            Xu = [],
            tl = i("6679"),
            el = i.n(tl),
            il = i("7bae"),
            nl = i.n(il),
            sl = {
                components: {
                    WhiteLabel: Vr["a"],
                    Bonuses: qn["a"],
                    CookieNotice: cu,
                    VideoBg: or
                },
                mounted: function() {
                    window.addEventListener("message", this.checkVideoBgVisible)
                },
                destroyed: function() {
                    window.removeEventListener("message", this.checkVideoBgVisible)
                },
                data: function() {
                    return {
                        icons: {
                            check: nl.a
                        },
                        closing: !1,
                        isVideoBgVisible: !0,
                        isVideoMuted: !0,
                        labelStyle: "display: block !important; visibility: visible !important; opacity: 1 !important"
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", {
                    bonuses: function(t) {
                        return o()(t, "info.marketing.bonuses", [])
                    },
                    title: function(t) {
                        return o()(t, "info.startPage.title")
                    },
                    subtitle: function(t) {
                        return o()(t, "info.startPage.subtitle")
                    },
                    buttonText: function(t) {
                        return o()(t, "info.startPage.buttonText")
                    },
                    mode: function(t) {
                        return o()(t, "info.startPage.mode", "start")
                    },
                    name: function(t) {
                        return o()(t, "info.startPage.name")
                    },
                    phone: function(t) {
                        return o()(t, "info.startPage.phone")
                    },
                    isPhoneClickable: function(t) {
                        return o()(t, "info.startPage.isPhoneClickable")
                    },
                    legal: function(t) {
                        return o()(t, "info.startPage.legal")
                    },
                    bg: function(t) {
                        return o()(t, "info.startPage.bg", {})
                    },
                    mobileBg: function(t) {
                        return o()(t, "info.startPage.mobileBg", {})
                    },
                    videoMobileBg: function(t) {
                        return o()(t, "info.startPage.videoMobileBg", {})
                    },
                    logo: function(t) {
                        return o()(t, "info.startPage.logo", {})
                    },
                    bgType: function(t) {
                        return o()(t, "info.startPage.bgType", "image")
                    },
                    videoLink: function(t) {
                        return o()(t, "info.startPage.videoLink")
                    },
                    videoLoop: function(t) {
                        return o()(t, "info.startPage.videoLoop")
                    },
                    position: function(t) {
                        return o()(t, "info.startPage.position", "right") || "right"
                    },
                    spTheme: function(t) {
                        return o()(t, "info.startPage.spTheme", "standart") || "standart"
                    },
                    isWidgetOpen: function(t) {
                        return t.isWidgetOpen
                    }
                }), Object(v["c"])("quiz", ["isWhiteLabelActive", "bonusesTitle", "isBonusesEnabled", "buttonStyle", "isWidgetMode"]), {
                    bgUrl: function() {
                        var t = this.bg;
                        if ("image" === this.bgType && "mobile" === this.$mq && (t = o()(this, "mobileBg.url") ? this.mobileBg : this.bg), "video" === this.bgType) {
                            if ("mobile" !== this.$mq) return !1;
                            t = o()(this, "videoMobileBg.url") ? this.videoMobileBg : {
                                url: null
                            }
                        }
                        if (!t.url) return null;
                        var e = {};
                        return "unsplash" === t.provider && (e.width = "centered" === this.spTheme ? 550 : window.innerWidth), window.innerHeight <= 650 && window.innerWidth >= 768 && (e.height = 650), window.innerWidth < 768 && (e.width = 767), this.$image.url(t, e)
                    },
                    classes: function() {
                        var t, e = [(t = {
                            "start-page_closing": this.closing,
                            "start-page_has_bg": this.isBg
                        }, Object(Gs["a"])(t, "start-page_position_".concat(this.position), "centered" !== this.spTheme), Object(Gs["a"])(t, "start-page_has_brand", this.isBrand), Object(Gs["a"])(t, "start-page_video_bg", this.isVideoBg && !this.isVideoMobileBg), Object(Gs["a"])(t, "start-page_widget", this.isWidgetMode), t), "start-page_mode_".concat(this.mode), "start-page_theme_".concat(this.spTheme)];
                        return e
                    },
                    isCol5: function() {
                        return this.isBg && "center" !== this.position && "centered" !== this.spTheme
                    },
                    isCol7: function() {
                        return "standart" === this.spTheme && "center" !== this.position
                    },
                    isBg: function() {
                        return !!this.bgUrl || this.isVideoBg
                    },
                    isVideoBg: function() {
                        var t = "mobile" === this.$mq && "coub" === this.videoUrl.provider;
                        return "video" === this.bgType && !!this.videoLink && this.isVideoBgVisible && !t
                    },
                    isVideoMobileBg: function() {
                        return !H()(this.videoMobileBg) && "mobile" === this.$mq
                    },
                    videoUrl: function() {
                        return Object(ur["a"])(this.videoLink)
                    },
                    isBrand: function() {
                        return "landing" === this.mode && (this.logo && this.logo.url || this.name)
                    },
                    isFooterBrand: function() {
                        return "desktop" === this.$mq && this.isBg && "center" === this.position && "expanded" === this.spTheme
                    },
                    phoneForLink: function() {
                        if (!this.isPhoneClickable) return !1;
                        var t = R()(this.phone, /^8/, "7");
                        return t = "+".concat(R()(t, /\D+/g, "")), t
                    },
                    areBonusesCentered: function() {
                        return "centered" === this.spTheme || "expanded" === this.spTheme && "center" === this.position && "desktop" === this.$mq
                    }
                }),
                methods: {
                    close: function() {
                        var t = this;
                        this.closing = !0, setTimeout(function() {
                            t.$store.commit("quiz/startQuiz"), t.$store.dispatch("quiz/analyticEvent", "marquiz-startquiz")
                        }, 800)
                    },
                    clickOnPhone: function() {
                        this.$store.dispatch("quiz/analyticEvent", "marquiz-phone")
                    },
                    checkVideoBgVisible: function(t) {
                        var e = t.data;
                        e && el()(e.quizVisible) && (this.isVideoBgVisible = e.quizVisible)
                    },
                    toggleMute: function(t) {
                        var e = t.target === this.$refs.content;
                        e && "center" === this.position && "expanded" === this.spTheme && this.isVideoBg && (this.isVideoMuted = !this.isVideoMuted)
                    }
                }
            },
            al = sl,
            rl = (i("5f78"), Object(zi["a"])(al, Ju, Xu, !1, null, null, null)),
            ol = rl.exports,
            ul = {
                render: function() {
                    return ""
                },
                mounted: function() {
                    var t = this;
                    window.addEventListener("message", function(e) {
                        e.data && t.commit(e.data)
                    })
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["questions", "results"]), Object(v["c"])("quiz", ["resultsPosition", "isMultipleResults"])),
                methods: {
                    commit: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                            var e, i, n, s = arguments;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = s.length > 0 && void 0 !== s[0] ? s[0] : {}, this.$store.commit("quiz/resetState"), this.$store.commit("form/resetState"), t.next = 5, this.$nextTick();
                                    case 5:
                                        if (e.abVariant && this.$store.commit("quiz/setAbVariant", e.abVariant), e.quiz && this.$store.dispatch("quiz/get", {
                                                quiz: e.quiz
                                            }), i = e.page, i) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 10:
                                        t.t0 = i, t.next = "leadform" === t.t0 ? 13 : "messengers" === t.t0 ? 17 : "start_page" === t.t0 ? 20 : "questions" === t.t0 ? 22 : "results" === t.t0 ? 25 : "thanks" === t.t0 ? 32 : "explanation" === t.t0 ? 35 : 38;
                                        break;
                                    case 13:
                                        return this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/hideMessengers"), e.formStep && (1 === e.formStep && this.$store.commit("form/showStep1"), 2 === e.formStep && this.$store.commit("form/showStep2")), t.abrupt("break", 39);
                                    case 17:
                                        return this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showMessengers"), t.abrupt("break", 39);
                                    case 20:
                                        return this.$store.commit("quiz/showStartPage"), t.abrupt("break", 39);
                                    case 22:
                                        return this.$store.commit("quiz/startQuiz"), e.questionId && this.$store.commit("quiz/setActiveQuestion", ct()(this.questions, {
                                            id: e.questionId
                                        })), t.abrupt("break", 39);
                                    case 25:
                                        if (this.resultsPosition) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.abrupt("break", 39);
                                    case 27:
                                        if (!e.resultId) {
                                            t.next = 30;
                                            break
                                        }
                                        return this.$store.commit("quiz/showResult", Z()(this.results.items, {
                                            id: e.resultId
                                        })), t.abrupt("break", 39);
                                    case 30:
                                        return this.isMultipleResults ? this.$store.commit("quiz/showResults") : this.$store.commit("quiz/showResult"), t.abrupt("break", 39);
                                    case 32:
                                        return this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showThankPage"), t.abrupt("break", 39);
                                    case 35:
                                        return this.$store.commit("quiz/startQuiz"), e.questionId && (n = ct()(this.questions, {
                                            id: e.questionId
                                        }), this.$store.commit("quiz/setActiveQuestion", n), this.$store.commit("quiz/setExplanationQuestion", {
                                            question: this.questions[n],
                                            explanation: e.explanation
                                        }), this.$store.commit("quiz/setActiveQuestion", n + 1)), t.abrupt("break", 39);
                                    case 38:
                                        return t.abrupt("break", 39);
                                    case 39:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            ll = ul,
            cl = Object(zi["a"])(ll, ea, ia, !1, null, null, null),
            dl = cl.exports,
            hl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: ["app-wrapper " + t.theme, {
                        "dark-tone": t.isDarkBg
                    }],
                    style: t.styles
                }, [t._t("default")], 2)
            },
            fl = [],
            ml = i("a3e6"),
            pl = i.n(ml),
            gl = i("27d6"),
            bl = i.n(gl),
            vl = {
                data: function() {
                    return {
                        colors: {},
                        fonts: {},
                        theme: null,
                        isDarkBg: null,
                        themes: {
                            light: {
                                main: "#d34085",
                                buttonTextColor: "#ffffff",
                                bgColor: "#ffffff",
                                bgTextColor: "#363636",
                                buttonStyle: "round",
                                progressType: "progress-bar",
                                font: {
                                    name: "Gilroy"
                                }
                            },
                            dark: {
                                main: "#d13980",
                                buttonTextColor: "#ffffff",
                                bgColor: "#303537",
                                bgTextColor: "#ffffff",
                                buttonStyle: "round",
                                progressType: "progress-bar",
                                font: {
                                    name: "Gilroy"
                                }
                            },
                            "light-blue": {
                                main: "#0054dd",
                                buttonTextColor: "#ffffff",
                                bgColor: "#ffffff",
                                bgTextColor: "#000000",
                                buttonStyle: "round-outline",
                                progressType: "circular-steps",
                                font: {
                                    name: "Inter",
                                    src: "Inter:400,600,700"
                                }
                            },
                            "copper-red": {
                                main: "#ce6c47",
                                buttonTextColor: "#ffffff",
                                bgColor: "#ffffff",
                                bgTextColor: "#000000",
                                buttonStyle: "round",
                                progressType: "steps",
                                font: {
                                    name: "Inter",
                                    src: "Inter:400,600,700"
                                }
                            },
                            olive: {
                                main: "#9e8b12",
                                buttonTextColor: "#ffffff",
                                bgColor: "#eeeae7",
                                bgTextColor: "#31455d",
                                buttonStyle: "round",
                                progressType: "dynamic-progress-bar",
                                font: {
                                    name: "Inter",
                                    src: "Inter:400,600,700"
                                }
                            },
                            "red-crayola": {
                                main: "#e64555",
                                buttonTextColor: "#ffffff",
                                bgColor: "#ffffff",
                                bgTextColor: "#002642",
                                buttonStyle: "round",
                                progressType: "circular",
                                font: {
                                    name: "Inter",
                                    src: "Inter:400,600,700"
                                }
                            },
                            "green-creme": {
                                main: "#fbcbbc",
                                buttonTextColor: "#1a2e2a",
                                bgColor: "#1e4941",
                                bgTextColor: "#ffffff",
                                buttonStyle: "round",
                                progressType: "circular",
                                font: {
                                    name: "Gilroy"
                                },
                                additionalFont: {
                                    name: "Times"
                                },
                                additionalFontStyle: "italic"
                            },
                            gunmetal: {
                                main: "#f4e4ba",
                                buttonTextColor: "#000000",
                                bgColor: "#1b2432",
                                bgTextColor: "#ffffff",
                                buttonStyle: "round-outline",
                                progressType: "circular-steps",
                                font: {
                                    name: "Gilroy"
                                },
                                additionalFont: {
                                    name: "Times"
                                },
                                additionalFontStyle: "italic"
                            },
                            glaucous: {
                                main: "#717ec3",
                                buttonTextColor: "#ffffff",
                                bgColor: "#37323e",
                                bgTextColor: "#ffffff",
                                buttonStyle: "square",
                                progressType: "dynamic-progress-bar",
                                font: {
                                    name: "Inter",
                                    src: "Inter:400,600,700"
                                }
                            }
                        }
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info"]), Object(v["c"])("quiz", ["fontFamily", "isWidgetMode"]), {
                    styles: function() {
                        return Object(y["a"])({}, this.colors, this.fonts)
                    }
                }),
                methods: {
                    generateColors: function(t) {
                        var e, i, n, s, a, r, u, l;
                        if (this.theme = o()(t, "theme", "withoutTheme"), "withoutTheme" === this.theme ? (r = this.getValidColor(o()(t, "colors.main"), this.themes.light.main), s = Y()(pl()(r)).darken(7).dark(), a = this.getValidColor(o()(t, "colors.buttonTextColor"), "#ffffff"), u = a) : "custom" === this.theme ? (r = this.getValidColor(o()(t, "colors.main"), this.themes.light.main), s = Y()(pl()(r)).darken(7).dark(), a = this.getValidColor(o()(t, "colors.buttonTextColor"), s ? "#ffffff" : "#000000"), i = this.getValidColor(o()(t, "colors.bgColor"), this.themes.light.bgColor), n = this.getValidColor(o()(t, "colors.bgTextColor"), this.themes.light.bgTextColor), u = a, l = "#ffffff" === i ? i : "") : (r = this.themes[this.theme].main, s = Y()(pl()(r)).darken(7).dark(), a = this.themes[this.theme].buttonTextColor, i = this.themes[this.theme].bgColor, n = this.themes[this.theme].bgTextColor, u = a), "light" !== this.theme && "withoutTheme" !== this.theme) {
                            this.isDarkBg = pl()(i).darken(10).dark(), e = this.isDarkBg ? {
                                "--color-bg-sidebar": pl()(i).lighten(3).hex(),
                                "--color-bg-1": pl()(i).lighten(7).hex(),
                                "--color-bg-2": pl()(i).lighten(10).hex(),
                                "--color-bg-3": pl()(i).lighten(20).hex(),
                                "--color-bg-4": pl()(i).lighten(30).hex(),
                                "--color-bg-5": pl()(i).lighten(40).hex(),
                                "--color-bg-6": pl()(n).alpha(.7).rgbString(),
                                "--color-bg-7": pl()(i).lighten(7).hex(),
                                "--color-bg-8": pl()(i).lighten(15).hex(),
                                "--color-bg-9": "#ffffff",
                                "--color-bg-10": pl()(i).lighten(10).hex(),
                                "--color-bg-11": pl()(i).darken(20).hex(),
                                "--color-bg-text": n,
                                "--color-bg-quiz": i,
                                "--color-bg-alpha0": pl()(i).alpha(0).rgbString(),
                                "--color-bg-alpha2": pl()(n).alpha(.2).rgbString(),
                                "--color-bg-alpha7": pl()(n).alpha(.7).rgbString(),
                                "--color-white-label": "#ffffff",
                                "--color-bg-sub-text": pl()(i).lighten(35).hex()
                            } : {
                                "--color-bg-sidebar": pl()(i).darken(3).hex(),
                                "--color-bg-1": pl()(i).darken(7).hex(),
                                "--color-bg-2": pl()(i).darken(10).hex(),
                                "--color-bg-3": pl()(i).darken(20).hex(),
                                "--color-bg-4": pl()(i).darken(30).hex(),
                                "--color-bg-5": pl()(i).darken(40).hex(),
                                "--color-bg-6": pl()(n).alpha(.7).rgbString(),
                                "--color-bg-7": pl()(i).darken(7).hex(),
                                "--color-bg-8": pl()(i).darken(15).hex(),
                                "--color-bg-9": "#363636",
                                "--color-bg-text": n,
                                "--color-bg-quiz": i,
                                "--color-bg-alpha0": pl()(i).alpha(0).rgbString(),
                                "--color-bg-alpha2": pl()(n).alpha(.2).rgbString(),
                                "--color-bg-alpha7": pl()(n).alpha(.7).rgbString(),
                                "--color-white-label": "#ffffff",
                                "--color-exactly-white": l,
                                "--color-bg-sub-text": pl()(i).darken(35).hex()
                            };
                            try {
                                this.isWidgetMode || (document.documentElement.style.backgroundColor = i, document.body.style.backgroundColor = i)
                            } catch (c) {
                                console.log("marquiz-error: ".concat(c))
                            }
                        }
                        this.colors = Object(y["a"])({}, e, {
                            "--color": r,
                            "--color-lighten": pl()(r).lighten(20).hex(),
                            "--color-lighten10": pl()(r).lighten(10).hex(),
                            "--color-lighten2": pl()(r).lighten(35).hex(),
                            "--color-darken": pl()(r).darken(20).hex(),
                            "--color-darken10": pl()(r).darken(10).hex(),
                            "--color-alpha": pl()(r).alpha(.5).rgbString(),
                            "--color-alpha2": pl()(r).alpha(.2).rgbString(),
                            "--color-alpha3": pl()(r).alpha(.05).rgbString(),
                            "--color-text": a,
                            "--color-text2": s ? r : "#000000",
                            "--gradient-main": "331deg, ".concat(pl()(r).darken(20).rgbString(), ", ").concat(pl()(r).lighten(20).rgbString()),
                            "--color-primary-text-button": u
                        })
                    },
                    getValidColor: function(t, e) {
                        if (!t) return e;
                        var i, n = t;
                        it()(n, "#") < 0 && (n = "#".concat(n));
                        try {
                            i = pl()(n)
                        } catch (s) {
                            i = null
                        }
                        return i ? n : (console.log("Неправильный цвет: ".concat(n)), e)
                    },
                    setButtonStyle: function() {
                        var t = o()(this.themes[this.theme], "buttonStyle", "round");
                        this.$store.commit("quiz/setButtonStyle", t)
                    },
                    setProgressType: function() {
                        var t = o()(this.themes[this.theme], "progressType", "progress-bar");
                        this.$store.commit("quiz/setProgressType", t)
                    },
                    setFonts: function() {
                        var t = this;
                        this.fonts = {};
                        var e = "custom" === this.theme ? this.fontFamily : o()(this.themes[this.theme], "font", {
                            name: "Gilroy"
                        }) || {
                            name: "Gilroy"
                        };
                        if (this.loadFont(e, function(e) {
                                return t.generateFontVariable("--font", "'".concat(e, "'"))
                            }), "custom" !== this.theme) {
                            var i = o()(this.themes[this.theme], "additionalFont");
                            i && this.loadFont(i, function(e) {
                                return t.generateFontVariable("--additional-font", "'".concat(e, "'"))
                            });
                            var n = o()(this.themes[this.theme], "additionalFontStyle");
                            n && this.generateFontVariable("--additional-font-style", n)
                        }
                    },
                    generateFontVariable: function(t, e) {
                        this.$set(this.fonts, t, e)
                    },
                    loadFont: function(t, e) {
                        t.src ? bl.a.load({
                            google: {
                                families: [t.src]
                            },
                            timeout: 2e3,
                            inactive: function() {
                                return e("Gilroy")
                            },
                            active: function() {
                                return e(t.name)
                            }
                        }) : e(t.name)
                    }
                },
                watch: {
                    "info.design": {
                        handler: function(t) {
                            this.generateColors(t), this.setFonts(), "custom" !== this.theme && (this.setButtonStyle(), this.setProgressType())
                        },
                        immediate: !0
                    }
                }
            },
            _l = vl,
            yl = Object(zi["a"])(_l, hl, fl, !1, null, null, null),
            wl = yl.exports,
            kl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "disabled"
                }, [i("img", {
                    staticClass: "disabled__emoji",
                    attrs: {
                        src: t.staticPath + "/images/emoji/1f644.png"
                    }
                }), i("span", {
                    staticClass: "disabled__text"
                }, [t._v(t._s(t.$t("Страница отключена")))])])
            },
            Cl = [],
            xl = {
                data: function() {
                    return {
                        staticPath: Object({
                            VUE_APP_PRIVATE_FILE_UPLOAD_URL: "https://files.marquiz.ru/upload",
                            VUE_APP_API_URL: "https://api.marquiz.ru",
                            VUE_APP_MARQUIZ_ANALYTICS_URL: "https://analytics.marquiz.ru",
                            NODE_ENV: "production",
                            BASE_URL: "//cdn.mrqz.me/"
                        }).VUE_APP_STATIC_URL || "https://static.marquiz.ru"
                    }
                }
            },
            ql = xl,
            Dl = (i("103e"), Object(zi["a"])(ql, kl, Cl, !1, null, null, null)),
            Sl = Dl.exports,
            $l = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "resize",
                        rawName: "v-resize.throttle",
                        value: t.onResize,
                        expression: "onResize",
                        modifiers: {
                            throttle: !0
                        }
                    }],
                    staticClass: "widget-preview",
                    class: ["widget-preview_" + t.type, {
                        "widget-preview_open": t.isWidgetOpen,
                        "widget-preview_fixed": t.isFixed
                    }],
                    on: {
                        click: t.openWidget
                    }
                }, [t.isPreviewVisible ? ["start-page" === t.currentType ? i("div", {
                    staticClass: "widget-preview__start-page"
                }, [i("StartPagePreview", {
                    attrs: {
                        isMobile: t.isMobile
                    }
                })], 1) : t._e(), "question" === t.currentType ? i("div", {
                    staticClass: "widget-preview__question"
                }, [i("QuestionPreview")], 1) : t._e(), "lead-form" === t.currentType ? i("div", {
                    staticClass: "widget-preview__lead-form"
                }, [i("LeadFormPreview")], 1) : t._e(), "results" === t.currentType ? i("div", {
                    staticClass: "widget-preview__results"
                }, [i("ResultsPreview")], 1) : t._e(), "result" === t.currentType ? i("div", {
                    staticClass: "widget-preview__result"
                }, [i("ResultPreview", {
                    attrs: {
                        isMobile: t.isMobile
                    }
                })], 1) : t._e()] : t._e(), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isWidgetOpen,
                        expression: "isWidgetOpen"
                    }],
                    staticClass: "widget-preview__close",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.closeWidget(e)
                        }
                    }
                })], 2)
            },
            Al = [],
            Tl = i("428d"),
            Ol = i.n(Tl),
            Pl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "start-page-preview",
                    class: {
                        "start-page-preview_large": !t.isMobile && t.isBg
                    }
                }, [!t.isMobile && t.isBg ? ["image" === t.bgType && t.bgUrl || t.isVideoMobileBg ? i("div", {
                    staticClass: "start-page-preview__bg",
                    style: {
                        backgroundImage: "url(" + this.bgUrl + ")"
                    }
                }) : t._e(), t.isVideoBg && !t.isVideoMobileBg ? i("VideoBg", {
                    staticClass: "start-page-preview__video-bg",
                    attrs: {
                        loop: t.videoLoop,
                        videoUrl: t.videoUrl,
                        muted: t.isVideoMuted
                    }
                }) : t._e(), i("div", {
                    staticClass: "start-page-preview__content",
                    style: {
                        backgroundImage: t.bgGradient
                    }
                }, [i("div", {
                    staticClass: "start-page-preview__header"
                }, [i("div", {
                    staticClass: "start-page-preview__title"
                }, [t._v(t._s(t.title))]), t.avatarUrl ? i("div", {
                    staticClass: "start-page-preview__assistant"
                }, [i("img", {
                    attrs: {
                        src: t.avatarUrl
                    }
                })]) : t._e()]), t.isMobile ? t._e() : i("button", {
                    staticClass: "start-page-preview__button button is-primary is-blicked has-light-shadow",
                    class: {
                        "is-outline": t.buttonStyle.outline && "expanded" !== this.spTheme, "is-square": t.buttonStyle.square
                    }
                }, [t._v(t._s(t.buttonText || t.$t("Пройти тест")))])])] : i("SmallPreview", {
                    attrs: {
                        hasButton: !0,
                        imageUrl: t.bgUrl,
                        title: t.title
                    }
                })], 2)
            },
            zl = [],
            Ml = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "small-preview",
                    class: {
                        "small-preview_has-discount": t.discount, "small-preview_radius": t.bigRadius
                    }
                }, [i("div", {
                    staticClass: "small-preview__content"
                }, [t.imageUrl ? i("div", {
                    staticClass: "small-preview__bg",
                    style: {
                        backgroundImage: t.bgImage
                    }
                }) : t._e(), t.hasButton ? i("button", {
                    staticClass: "small-preview__button button is-primary is-blicked has-light-shadow"
                }, [i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-arrow-up"]
                    }
                })], 1) : t._e(), i("div", {
                    staticClass: "small-preview__title"
                }, [t._v(t._s(t.title))])]), t.discount ? i("div", {
                    staticClass: "small-preview__discount"
                }, [i("DiscountLabel", [t._v("-" + t._s(t.$format.number(t.discount)) + " " + t._s(t.discountCurrencySymbol))])], 1) : t._e()])
            },
            El = [],
            Bl = i("2b3b"),
            Vl = {
                name: "SmallPreview",
                components: {
                    Icon: Bi["a"],
                    DiscountLabel: Bl["a"]
                },
                props: {
                    imageUrl: String,
                    title: String,
                    hasButton: Boolean,
                    bigRadius: Boolean
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info", "fixedDiscount"]), Object(v["c"])("quiz", ["discountCurrencySymbol"]), {
                    bgImage: function() {
                        return "linear-gradient(to left, var(--color-bg-quiz, #fff), transparent 70%), url(".concat(this.imageUrl, ")")
                    },
                    discount: function() {
                        var t = o()(this.info, "marketing.discount", {});
                        return this.fixedDiscount || t.value || t.percent
                    }
                })
            },
            Ll = Vl,
            Il = (i("1b6a"), Object(zi["a"])(Ll, Ml, El, !1, null, null, null)),
            jl = Il.exports,
            Fl = {
                name: "StartPagePreview",
                extends: ol,
                components: {
                    SmallPreview: jl
                },
                props: {
                    isMobile: Boolean
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info"]), {
                    bgGradient: function() {
                        return "linear-gradient(0, rgba(48, 53, 55, 0) 0%, rgba(48, 53, 55, 0.792) 64.58%, rgba(48, 53, 55, 0.9) 100%)"
                    },
                    avatarUrl: function() {
                        var t = o()(this.info, "assistant", {});
                        if (!t.name) return null;
                        var e = t.avatar;
                        return o()(e, "url", !1) || (e = {
                            name: "avatar",
                            provider: "cloudinary"
                        }), this.$image.url(e, {
                            crop: "fill",
                            gravity: "face",
                            width: 70,
                            height: 70
                        })
                    }
                })
            },
            Rl = Fl,
            Nl = (i("e6e3"), Object(zi["a"])(Rl, Pl, zl, !1, null, null, null)),
            Hl = Nl.exports,
            Ql = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "base-preview"
                }, [t.info.assistant.name ? i("AssistantPreview", {
                    attrs: {
                        assistant: t.info.assistant,
                        text: t.title,
                        isOpen: t.isWidgetOpen
                    }
                }, [t._t("default")], 2) : t.isWidgetOpen ? t._e() : i("TextPreview", {
                    attrs: {
                        title: t.title
                    }
                }, [t._t("default")], 2)], 1)
            },
            Ul = [],
            Wl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "assistant-mobile assistant-mobile_preview",
                    class: {
                        "assistant-mobile_open": t.isOpen
                    }
                }, [i("div", {
                    staticClass: "assistant-mobile__block"
                }, [i("div", {
                    staticClass: "assistant-mobile__person"
                }, [i("div", {
                    staticClass: "assistant-mobile__avatar"
                }, [t.imageUrl ? i("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e()])]), i("div", {
                    staticClass: "assistant-mobile__text-container"
                }, [i("div", {
                    staticClass: "assistant-mobile__text"
                }, [i("div", {
                    staticClass: "assistant-mobile__name"
                }, [i("div", {
                    staticClass: "assistant-mobile__title"
                }, [t._v(t._s(t.getFirstName(t.assistant.name)))]), t.assistant.title ? i("div", {
                    staticClass: "assistant-mobile__subtitle"
                }, [i("div", {
                    staticClass: "assistant-mobile__status"
                }), t._v(t._s(t.assistant.title))]) : t._e()]), i("div", {
                    staticClass: "assistant-mobile__text-html"
                }, [t._v(t._s(t.text))])])]), i("div", {
                    staticClass: "assistant-mobile__slot"
                }, [t._t("default")], 2)])])
            },
            Yl = [],
            Gl = {
                name: "AssistantPreview",
                extends: xn,
                props: {
                    assistant: Object,
                    text: String,
                    isOpen: Boolean
                },
                data: function() {
                    return {}
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["activeQuestion", "questions"]), Object(v["c"])("quiz", ["hasCondition"]), {
                    numberOfQuestion: function() {
                        return this.$t("Вопрос {number} из {count}", {
                            number: "<span>".concat(this.activeQuestion + 1, "</span>"),
                            count: this.questions.length,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    }
                }),
                methods: {}
            },
            Zl = Gl,
            Kl = (i("0149"), Object(zi["a"])(Zl, Wl, Yl, !1, null, null, null)),
            Jl = Kl.exports,
            Xl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "text-preview"
                }, [i("div", {
                    staticClass: "text-preview__title"
                }, [t._v(t._s(t.title))]), i("div", {
                    staticClass: "text-preview__slot"
                }, [t._t("default")], 2)])
            },
            tc = [],
            ec = {
                name: "TextPreview",
                props: {
                    title: String
                }
            },
            ic = ec,
            nc = (i("1765"), Object(zi["a"])(ic, Xl, tc, !1, null, null, null)),
            sc = nc.exports,
            ac = {
                name: "BasePreview",
                components: {
                    AssistantPreview: Jl,
                    TextPreview: sc
                },
                props: {
                    title: String
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info", "isWidgetOpen"]))
            },
            rc = ac,
            oc = Object(zi["a"])(rc, Ql, Ul, !1, null, null, null),
            uc = oc.exports,
            lc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "lead-form-preview"
                }, [i("BasePreview", {
                    attrs: {
                        title: t.title
                    }
                })], 1)
            },
            cc = [],
            dc = {
                name: "LeadFormPreview",
                components: {
                    BasePreview: uc
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info"]), Object(v["d"])("form", ["isStep2"]), {
                    title: function() {
                        var t = this.$t("Заполните форму, чтобы получить результаты теста");
                        return this.isStep2 ? o()(this.info, "form.header2") || t : o()(this.info, "form.header") || t
                    }
                })
            },
            hc = dc,
            fc = Object(zi["a"])(hc, lc, cc, !1, null, null, null),
            mc = fc.exports,
            pc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "results-preview"
                }, [i("BasePreview", {
                    attrs: {
                        title: t.title
                    }
                }, [i("div", {
                    staticClass: "results-preview__count"
                }, [t._v(t._s(t.count))])])], 1)
            },
            gc = [],
            bc = {
                name: "ResultsPreview",
                components: {
                    BasePreview: uc
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["results"]), {
                    title: function() {
                        return this.results.multipleTitle || this.$t("Ваши результаты")
                    },
                    count: function() {
                        return o()(this.results, "items.length")
                    }
                })
            },
            vc = bc,
            _c = (i("8b50"), Object(zi["a"])(vc, pc, gc, !1, null, null, null)),
            yc = _c.exports,
            wc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "result-preview",
                    class: {
                        "result-preview_large": !t.isMobile && (t.isVideoBg || t.isImageBg)
                    }
                }, [t.isMobile || !t.isVideoBg && !t.isImageBg ? i("SmallPreview", {
                    attrs: {
                        imageUrl: t.bgUrl,
                        title: t.result.title,
                        bigRadius: !0
                    }
                }) : [t.isImageBg ? i("div", {
                    staticClass: "result-preview__bg",
                    style: {
                        backgroundImage: "url(" + this.bgUrl + ")"
                    }
                }) : t._e(), t.isVideoBg ? i("VideoBg", {
                    staticClass: "result-preview__video-bg",
                    attrs: {
                        loop: !0,
                        videoUrl: t.videoUrl,
                        muted: t.mutedVideo
                    }
                }) : t._e(), i("div", {
                    staticClass: "result-preview__content",
                    style: {
                        backgroundImage: t.bgGradient
                    }
                }, [i("div", {
                    staticClass: "result-preview__title"
                }, [t._v(t._s(t.result.title))]), i("div", {
                    staticClass: "result-preview__discount"
                }, [i("DiscountLabel", [t._v("-" + t._s(t.$format.number(t.fixedDiscount)) + " " + t._s(t.discountCurrencySymbol))])], 1)])]], 2)
            },
            kc = [],
            Cc = {
                name: "ResultPreview",
                extends: ho,
                components: {
                    SmallPreview: jl,
                    DiscountLabel: Bl["a"],
                    VideoBg: or
                },
                props: {
                    isMobile: Boolean
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["fixedDiscount"]), Object(v["c"])("quiz", ["discountCurrencySymbol"]), {
                    isVideoBg: function() {
                        return this.hasVideo && "video" === this.getMediaType
                    },
                    isImageBg: function() {
                        return this.hasImage && "image" === this.getMediaType
                    },
                    bgGradient: function() {
                        return "linear-gradient(180deg, rgba(48, 53, 55, 0) 0%, rgba(48, 53, 55, 0.792) 64.58%, rgba(48, 53, 55, 0.9) 100%)"
                    }
                })
            },
            xc = Cc,
            qc = (i("3b39"), Object(zi["a"])(xc, wc, kc, !1, null, null, null)),
            Dc = qc.exports,
            Sc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "question-preview",
                    class: {
                        "question-preview_assistant": t.hasAssistant
                    }
                }, [i("BasePreview", {
                    attrs: {
                        title: t.getQuestion.title
                    }
                }, [t.isWidgetOpen ? t._e() : i("div", {
                    staticClass: "question-preview__emoji"
                }, [t._v("👋")])])], 1)
            },
            $c = [],
            Ac = {
                name: "QuestionPreview",
                components: {
                    BasePreview: uc
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["info", "isWidgetOpen"]), Object(v["c"])("quiz", ["getQuestion"]), {
                    hasAssistant: function() {
                        return !!o()(this.info, "assistant.name")
                    }
                })
            },
            Tc = Ac,
            Oc = (i("629c"), Object(zi["a"])(Tc, Sc, $c, !1, null, null, null)),
            Pc = Oc.exports,
            zc = {
                name: "WidgetPreview",
                components: {
                    StartPagePreview: Hl,
                    BasePreview: uc,
                    LeadFormPreview: mc,
                    ResultsPreview: yc,
                    ResultPreview: Dc,
                    QuestionPreview: Pc
                },
                directives: {
                    resize: Ol.a
                },
                mounted: function() {
                    var t = this;
                    window.addEventListener("message", function(e) {
                        "closeWidget" === e.data.method && t.$store.commit("quiz/closeWidget"), "openWidget" === e.data.method && t.$store.commit("quiz/openWidget")
                    }), document.documentElement.style.backgroundColor = "transparent", document.documentElement.classList.add("hide-scrollbar")
                },
                data: function() {
                    return {
                        type: o()(this.$route, "query.widget-type")
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["id", "isWidgetOpen", "quizStarted", "info", "leadForm", "isResultsShow", "isResultShow"]), {
                    currentType: function() {
                        return this.quizStarted ? this.leadForm ? "lead-form" : this.isResultsShow ? "results" : this.isResultShow ? "result" : "question" : "start-page"
                    },
                    isMobile: function() {
                        return "desktop" !== this.type
                    },
                    isFixed: function() {
                        return !("question" !== this.currentType || !this.isWidgetOpen || !o()(this.info, "assistant.name"))
                    },
                    isPreviewVisible: function() {
                        return !this.isWidgetOpen || "question" === this.currentType
                    }
                }),
                methods: {
                    onResize: function(t) {
                        var e = t.offsetHeight > 50 ? t.offsetHeight : 50;
                        this.setPreviewHeight("".concat(e, "px"))
                    },
                    setPreviewHeight: function(t) {
                        this.$quizFrame.postMessage({
                            id: this.id,
                            action: "setPreviewHeight",
                            height: t
                        })
                    },
                    openWidget: function() {
                        this.isWidgetOpen || (this.$quizFrame.postMessage({
                            id: this.id,
                            action: "openWidget"
                        }), this.$store.commit("quiz/openWidget"))
                    },
                    closeWidget: function() {
                        var t = this;
                        "mobile" !== this.type && (this.$quizFrame.postMessage({
                            id: this.id,
                            action: "closeWidget"
                        }), setTimeout(function() {
                            t.$store.commit("quiz/closeWidget")
                        }, 400))
                    }
                },
                watch: {
                    isWidgetOpen: {
                        handler: function(t) {
                            t ? document.body.classList.add("disable-overscroll") : document.body.classList.remove("disable-overscroll")
                        },
                        immediate: !0
                    }
                }
            },
            Mc = zc,
            Ec = (i("fb0a"), Object(zi["a"])(Mc, $l, Al, !1, null, null, null)),
            Bc = Ec.exports,
            Vc = {
                components: {
                    Layout: Gi,
                    Quiz: Lu,
                    Install: Hu,
                    Welcome: Ku,
                    StartPage: ol,
                    PreviewController: dl,
                    Theme: wl,
                    Disabled: Sl,
                    WidgetPreview: Bc
                },
                created: function() {
                    var t = this;
                    this.$i18n.i18next.on("languageChanged", function(e) {
                        var i = e.split("-")[0];
                        t.$store.commit("setLang", i)
                    })
                },
                beforeMount: function() {
                    var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (window.document.title = "".concat(this.$t("Загрузка"), "..."), "/agreement" !== this.$route.path) {
                                        t.next = 4;
                                        break
                                    }
                                    return this.isLoading = !1, t.abrupt("return");
                                case 4:
                                    if (e = window.location.hostname, this.setDomain(e), this.$route.query.ab && this.$store.commit("quiz/setAbVariant", this.$route.query.ab), !this.showWelcomePage()) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    return t.next = 11, this.load();
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        isLoading: !0,
                        notFound: !1,
                        loadingError: !1,
                        isEditMode: !1,
                        groupId: this.$route.query.group_id,
                        quizId: this.$route.params.id,
                        request: this.$route.query,
                        isModal: !!o()(this.$route, "query.isModal", !0),
                        isShowWelcomePage: !1,
                        domain: null
                    }
                },
                computed: Object(y["a"])({}, Object(v["d"])("quiz", ["quizStarted", "loaded", "info", "id", "settings", "mode", "isWidgetOpen"]), Object(v["c"])("quiz", ["isQuizEnable", "isWidgetMode"]), {
                    isVkGroupAdmin: function() {
                        return this.groupId && "4" === this.$route.query.viewer_type
                    },
                    isPreview: function() {
                        return "preview" === this.mode || !!o()(this.$route, "query.preview", !1)
                    },
                    isShowStartPage: function() {
                        return this.isWidgetMode ? !this.quizStarted && this.isWidgetOpen : !this.quizStarted
                    },
                    isShowQuiz: function() {
                        return this.isWidgetMode ? this.quizStarted && this.isWidgetOpen : this.quizStarted
                    }
                }),
                methods: {
                    retryLoad: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.load();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    load: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                            var e = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.notFound = !1, this.loadingError = !1, this.$store.dispatch("quiz/get", {
                                            id: this.quizId,
                                            groupId: this.groupId,
                                            domain: this.domain
                                        }).then(function() {
                                            e.isLoading = !1;
                                            var t = o()(e.info, "startPage.pageTitle") || o()(e.info, "startPage.title") || o()(e.info, "title"),
                                                i = o()(e.info, "startPage.favicon");
                                            i && i.secureUrl ? e.setFavicon(i.secureUrl) : e.setFavicon("/static/favicon.png"), window.document.title = t || "Marquiz"
                                        }).catch(function(t) {
                                            window.document.title = "Marquiz", e.isLoading = !1, e.groupId ? e.isShowWelcomePage = !0 : t.response && 404 === t.response.status ? e.notFound = !0 : e.loadingError = !0
                                        }), this.initSession(this.quizId);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    initSession: function(t) {
                        var e = Hi["a"].get("answerId");
                        1 === this.$route.query.test && (e = null), Hi["a"].init(t), this.$store.commit("form/setSession", {
                            answerId: e,
                            uuid: Hi["a"].get("uuid")
                        })
                    },
                    closeAndReload: function() {
                        var t = Object(_["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.isEditMode = !1, this.quizId = null, t.next = 4, this.load();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    showWelcomePage: function() {
                        return !this.quizId && (!this.groupId && (!this.domain && (!("/" !== this.$route.path && (!this.$route.query.viewer_id || this.groupId)) && (this.isShowWelcomePage = !0, window.document.title = "Marquiz", !0))))
                    },
                    setFavicon: function(t) {
                        var e = document.querySelector("link[rel*='icon']") || document.createElement("link");
                        e.type = "image/x-icon", e.rel = "shortcut icon", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
                    },
                    setDomain: function(t) {
                        !this.quizId && !this.groupId && it()(["quiz.marquiz.ru", "mrqz.me", "localhost"], t) < 0 && (this.domain = Ni()(t))
                    },
                    getScripts: function(t) {
                        var e = new DOMParser,
                            i = e.parseFromString(t, "text/html");
                        return i.querySelectorAll("script")
                    },
                    createScriptElement: function(t) {
                        var e = document.createElement("script");
                        return e.innerHTML = t.innerHTML, ht()(t.attributes, function(t) {
                            e.setAttribute(t.name, t.value)
                        }), e
                    },
                    addScriptsToHead: function(t) {
                        var e = this,
                            i = document.querySelector("head");
                        ht()(t, function(t) {
                            i.appendChild(e.createScriptElement(t))
                        })
                    }
                },
                watch: {
                    loaded: function(t) {
                        t && this.$quizFrame.postMessage({
                            id: this.quizId,
                            action: "loaded"
                        })
                    },
                    "settings.code": {
                        handler: function(t) {
                            if (t) {
                                var e = this.getScripts(t);
                                this.addScriptsToHead(e)
                            }
                        }
                    }
                },
                name: "app"
            },
            Lc = Vc,
            Ic = (i("7faf"), Object(zi["a"])(Lc, ji, Fi, !1, null, null, null)),
            jc = Ic.exports,
            Fc = i("8c4f"),
            Rc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "agreement"
                }, [i("h1", [t._v(t._s(t.$t("Пользовательское соглашение")))]), i("div", {
                    staticClass: "agreement__text"
                }, [i("hr"), i("div", {
                    staticClass: "agreement__links"
                }, [t._l(t.agreements, function(e) {
                    return [i("p", [i("a", {
                        attrs: {
                            href: e.link + "?embedded=true"
                        },
                        on: {
                            click: function(i) {
                                return i.preventDefault(), t.showPage(e.link)
                            }
                        }
                    }, [t._v(t._s(e.title))])]), i("hr")]
                })], 2)]), i("b-modal", {
                    attrs: {
                        active: t.isModalOpen
                    },
                    on: {
                        "update:active": function(e) {
                            t.isModalOpen = e
                        }
                    }
                }, [t.activeAgreement ? i("iframe", {
                    staticClass: "agreement__doc-frame",
                    attrs: {
                        src: "" + t.activeAgreement,
                        scrolling: "auto"
                    }
                }) : t._e()])], 1)
            },
            Nc = [],
            Hc = {
                name: "Agreement",
                beforeMount: function() {
                    this.lang = this.$route.query.lang, this.lang && this.$i18n.i18next.changeLanguage(this.lang)
                },
                mounted: function() {
                    document.title = this.$t("Пользовательское соглашение")
                },
                data: function() {
                    return {
                        customPolicy: this.$route.query.customPolicy,
                        isModalOpen: !1,
                        activeAgreement: null
                    }
                },
                computed: {
                    agreements: function() {
                        var t = [];
                        return "ru" === this.lang && t.push({
                            title: "Пользовательское соглашение Marquiz",
                            link: "https://docs.google.com/document/d/e/2PACX-1vSKKQ9ABbG6lTmpnYPG6WDFpQI4IZp66CbInspIrtHuw9PFdXqDNMUFpHJH9NoVX7-iQffKzNT9QJNS/pub"
                        }), this.customPolicy && t.push({
                            title: this.$t("Политика конфиденциальности создателя страницы"),
                            link: this.customPolicy
                        }), t.push({
                            title: "Marquiz Privacy policy",
                            link: "https://docs.google.com/document/d/e/2PACX-1vQxItLr5xX6r76-y-ktpq9JTOUShqF42siVow6en6hGiUvexekJyVit2PH5WBEpA_LSdZxBPHL360vI/pub"
                        }), t
                    }
                },
                methods: {
                    showPage: function(t) {
                        "mobile" !== this.$mq ? (this.activeAgreement = t, this.isModalOpen = !0) : document.location.href = "".concat(t, "?embedded=true")
                    },
                    close: function() {
                        window.close()
                    }
                }
            },
            Qc = Hc,
            Uc = (i("de74"), Object(zi["a"])(Qc, Rc, Nc, !1, null, null, null)),
            Wc = Uc.exports;
        n["default"].use(Fc["a"]);
        var Yc = new Fc["a"]({
            mode: "history",
            routes: [{
                path: "/default/:id",
                name: "Default",
                component: Lu
            }, {
                path: "/agreement",
                name: "Agreement",
                component: Wc
            }, {
                path: "/:id",
                name: "ID",
                component: Lu
            }]
        });
        $i();
        var Gc = bt.a.parse(window.location.search);
        n["default"].use(a.a, {
            defaultIconComponent: Bi["a"]
        }), n["default"].use($e), n["default"].use(Ii.a), n["default"].use(Ae), n["default"].use(ti), n["default"].use(hi), n["default"].use(bi), n["default"].use(yi, {
            disabled: "preview" === Gc.mode
        }), n["default"].use(Xe, {}), n["default"].use(xi, {
            dummy: "preview" === Gc.mode,
            callback: function(t) {
                ve.commit("quiz/showRedirectLoading", t)
            }
        }), n["default"].use(Si), n["default"].use(Vi["a"], {
            breakpoints: {
                mobile: 819,
                desktop: 1 / 0
            }
        }), n["default"].component("SvgIcon", Ei), n["default"].config.productionTip = !1, Gc.debug || ye.a.config("https://05d355e71d8f43d196781729691f9e5b@sentry.io/305073").addPlugin(ke.a, n["default"]).install(), new n["default"]({
            router: Yc,
            store: ve,
            i18n: b,
            render: function(t) {
                return t(jc)
            }
        }).$mount("#app")
    },
    "56e2": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "radio-buttons"
                }, t._l(t.list, function(e) {
                    return i("div", {
                        staticClass: "radio-buttons__button",
                        class: [{
                            "radio-buttons__button_selected": e.value === t.value
                        }],
                        on: {
                            click: function(i) {
                                return t.$emit("input", e.value)
                            }
                        }
                    }, [void 0 !== e.icon ? [i("div", {
                        staticClass: "radio-buttons__icon",
                        domProps: {
                            innerHTML: t._s(e.icon)
                        }
                    })] : t._e(), void 0 !== e.text ? [i("div", {
                        staticClass: "radio-buttons__text"
                    }, [t._v(t._s(e.text))])] : t._e()], 2)
                }), 0)
            },
            s = [],
            a = {
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    value: String
                },
                computed: {
                    selected: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("input", t)
                        }
                    }
                }
            },
            r = a,
            o = (i("c7ba"), i("2877")),
            u = Object(o["a"])(r, n, s, !1, null, null, null);
        e["a"] = u.exports
    },
    "57d9": function(t, e, i) {},
    5967: function(t, e, i) {
        "use strict";
        var n = i("9a81"),
            s = i.n(n);
        s.a
    },
    "5ad8": function(t, e, i) {
        "use strict";
        var n = i("5fd8"),
            s = i.n(n);
        s.a
    },
    "5b79": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "other-input"
                }, ["one" === t.select ? i("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0,
                        checked: !!t.other
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), "many" === t.select ? i("b-checkbox", {
                    attrs: {
                        value: !!t.other,
                        checked: !!t.other
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), i("b-field", [i("b-input", {
                    attrs: {
                        maxlength: t.maxlength,
                        placeholder: t.$t("Другое") + "..."
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1)
            },
            s = [],
            a = (i("c5f6"), {
                props: {
                    value: String,
                    select: String,
                    maxlength: [Number, String]
                },
                computed: {
                    other: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                methods: {
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    }
                }
            }),
            r = a,
            o = (i("0bfd"), i("2877")),
            u = Object(o["a"])(r, n, s, !1, null, null, null);
        e["a"] = u.exports
    },
    "5f64": function(t, e, i) {},
    "5f78": function(t, e, i) {
        "use strict";
        var n = i("45d5"),
            s = i.n(n);
        s.a
    },
    "5fd8": function(t, e, i) {},
    6217: function(t, e, i) {
        "use strict";
        i.d(e, "b", function() {
            return f
        }), i.d(e, "c", function() {
            return m
        }), i.d(e, "a", function() {
            return p
        });
        i("c5f6");
        var n = i("6747"),
            s = i.n(n),
            a = i("2768"),
            r = i.n(a),
            o = i("c641"),
            u = i.n(o),
            l = i("13ea"),
            c = i.n(l),
            d = i("9b02"),
            h = i.n(d);

        function f(t, e, i) {
            var n = h()(t, "variants", {}),
                s = "".concat(e, "__").concat(i);
            return Number(h()(n, s, 0))
        }

        function m(t, e) {
            var i = h()(t, "variants", {});
            if (c()(i)) return !1;
            var n = 0,
                a = function(e, i) {
                    var s = f(t, e, i);
                    s && (n += s)
                };
            return u()(e, function(t) {
                t && (r()(t.a) || (s()(t.a) ? u()(t.a, function(e) {
                    a(t.q, e)
                }) : a(t.q, t.a)))
            }), n
        }

        function p(t, e) {
            var i = Number(h()(t, "count.0")),
                n = Number(h()(t, "count.1"));
            switch (t.operator) {
                case "less":
                    if (e < i) return !0;
                    break;
                case "more":
                    if (e >= i) return !0;
                    break;
                case "equal":
                    if (e === i) return !0;
                    break;
                case "between":
                    if (e >= i && e <= n) return !0;
                    break;
                default:
                    break
            }
            return !1
        }
    },
    "629c": function(t, e, i) {
        "use strict";
        var n = i("496c"),
            s = i.n(n);
        s.a
    },
    6345: function(t, e, i) {},
    "64ea": function(t, e, i) {
        "use strict";
        var n = i("4eee"),
            s = i.n(n);
        s.a
    },
    "65a0": function(t, e, i) {},
    "65ee": function(t, e, i) {},
    6617: function(t, e, i) {},
    6629: function(t, e, i) {
        "use strict";
        var n = i("65ee"),
            s = i.n(n);
        s.a
    },
    6711: function(t, e, i) {},
    6810: function(t, e, i) {
        var n = {
            "./diff_match_patch_uncompressed": "4dcb",
            "./diff_match_patch_uncompressed.js": "4dcb"
        };

        function s(t) {
            var e = a(t);
            return i(e)
        }

        function a(t) {
            var e = n[t];
            if (!(e + 1)) {
                var i = new Error("Cannot find module '" + t + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            return e
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.resolve = a, t.exports = s, s.id = "6810"
    },
    6843: function(t, e, i) {},
    "6a85": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.isGroup ? i("transition-group", {
                    key: t.activated,
                    attrs: {
                        appear: "",
                        css: !1,
                        tag: "div"
                    },
                    on: {
                        "before-enter": t.beforeEnter,
                        enter: t.enter,
                        "after-enter": t.afterEnter
                    }
                }, [t._t("default")], 2) : i("transition", {
                    key: t.activated,
                    attrs: {
                        mode: "out-in",
                        appear: "",
                        css: !1
                    },
                    on: {
                        "before-enter": t.beforeEnter,
                        enter: t.enter,
                        "after-enter": t.afterEnter
                    }
                }, [t._t("default")], 2)
            },
            s = [],
            a = (i("96cf"), i("3b8d")),
            r = i("cebc"),
            o = (i("c5f6"), i("2f62")),
            u = {
                activated: function() {
                    this.activated = !this.activated
                },
                props: {
                    isGroup: {
                        type: Boolean,
                        default: !1
                    },
                    offsetX: {
                        type: String,
                        default: "20px"
                    },
                    offsetY: {
                        type: String,
                        default: "16px"
                    },
                    duration: {
                        type: Number,
                        default: 170
                    },
                    acceleration: {
                        type: Number,
                        default: 30
                    }
                },
                data: function() {
                    return {
                        activated: !1
                    }
                },
                computed: Object(r["a"])({}, Object(o["c"])("quiz", ["animationStyle"]), {
                    translateCoords: function() {
                        switch (this.animationStyle) {
                            case "bottomTop":
                                return "translate3d(0, ".concat(this.offsetY, ", 0)");
                            default:
                                return "translate3d(".concat(this.offsetX, ", 0, 0)")
                        }
                    }
                }),
                methods: {
                    timeout: function(t) {
                        return new Promise(function(e) {
                            return setTimeout(e, t)
                        })
                    },
                    beforeEnter: function(t) {
                        t.style.transition = "opacity ".concat(this.duration, "ms ease-in-out, transform ").concat(this.duration, "ms ease-in-out"), t.style.transform = this.translateCoords, t.style.opacity = "0"
                    },
                    enter: function() {
                        var t = Object(a["a"])(regeneratorRuntime.mark(function t(e, i) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = Number(e.dataset.elementIndex) ? this.duration + Number(e.dataset.elementIndex) * this.acceleration : this.duration, t.next = 3, this.timeout(n);
                                    case 3:
                                        e.style.transform = "translate3d(0, 0, 0)", e.style.opacity = "1", i();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, i) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    afterEnter: function() {
                        var t = Object(a["a"])(regeneratorRuntime.mark(function t(e) {
                            var i;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = Number(e.dataset.elementIndex) ? this.duration + Number(e.dataset.elementIndex) * this.acceleration : this.duration, t.next = 3, this.timeout(i);
                                    case 3:
                                        e.style.transition = "", e.style.transform = "", e.style.opacity = "";
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            l = u,
            c = i("2877"),
            d = Object(c["a"])(l, n, s, !1, null, null, null);
        e["a"] = d.exports
    },
    7183: function(t, e, i) {
        "use strict";
        var n = i("e494"),
            s = i.n(n);
        s.a
    },
    "71ac": function(t, e, i) {},
    7275: function(t, e, i) {
        "use strict";
        var n = i("2921"),
            s = i.n(n);
        s.a
    },
    7452: function(t, e, i) {},
    "7b7c": function(t, e, i) {
        "use strict";
        var n, s, a, r, o = i("cebc"),
            u = (i("ac6a"), i("5df3"), i("f400"), i("8a30")),
            l = i.n(u),
            c = i("13ea"),
            d = i.n(c),
            h = i("9b02"),
            f = i.n(h),
            m = i("2f62"),
            p = i("6217"),
            g = {
                activated: function() {
                    this.cache.clear(), this.isActivated = !0
                },
                deactivated: function() {
                    this.isActivated = !1
                },
                data: function() {
                    return {
                        isVerifyingEnd: !1,
                        isVerified: !1,
                        isActivated: !0,
                        isDelayPassed: !1,
                        cache: new Map
                    }
                },
                computed: Object(o["a"])({}, Object(m["c"])("quiz", ["hasCorrectAnswer", "points", "getQuestion"]), Object(m["d"])("quiz", ["answersId", "activeQuestion"]), {
                    currentAnswer: function() {
                        return f()(this.answersId[this.activeQuestion], "a")
                    }
                }),
                methods: {
                    getVerifyingState: function(t) {
                        var e = this;
                        if (!this.isActivated) return this.cache.get(t);
                        if (this.hasCorrectAnswer && !d()(this.val)) {
                            var i = Object(p["b"])(this.points, this.getQuestion.id, t),
                                n = [];
                            return l()(this.currentAnswer, t) && (i > 0 ? ("one" === f()(this.getQuestion, "select") && (this.isVerifyingEnd = !0), this.isVerified = !0, n.push("answer_verifying-correct")) : (setTimeout(function() {
                                e.isDelayPassed = !0
                            }, 400), this.isVerifyingEnd = !0, this.isVerified = !1, n.push("answer_verifying-wrong"))), this.isVerifyingEnd && n.push("answer_verifying-end"), this.isDelayPassed && i > 0 && n.push("answer_verifying-correct"), n.length > 0 ? this.cache.set(t, n) : this.cache.delete(t), n
                        }
                    }
                }
            },
            b = g,
            v = (i("297b"), i("2877")),
            _ = Object(v["a"])(b, n, s, !1, null, null, null),
            y = _.exports,
            w = {
                extends: y,
                components: {
                    VariantsVerifying: y
                }
            },
            k = w,
            C = Object(v["a"])(k, a, r, !1, null, null, null);
        e["a"] = C.exports
    },
    "7bae": function(t, e, i) {
        t.exports = i.p + "img/check.7c08bf55.svg"
    },
    "7f2a": function(t, e, i) {},
    "7faf": function(t, e, i) {
        "use strict";
        var n = i("8fba"),
            s = i.n(n);
        s.a
    },
    "83b4": function(t, e, i) {
        "use strict";
        var n = i("ba5a"),
            s = i.n(n);
        s.a
    },
    "84cf": function(t, e, i) {
        "use strict";
        var n = i("0a62"),
            s = i.n(n);
        s.a
    },
    "86a7": function(t, e, i) {
        "use strict";
        var n = i("65a0"),
            s = i.n(n);
        s.a
    },
    "86de": function(t, e, i) {
        "use strict";
        var n = i("d383"),
            s = i.n(n);
        s.a
    },
    "895a": function(t, e, i) {
        "use strict";
        var n = i("6711"),
            s = i.n(n);
        s.a
    },
    "8b38": function(t, e, i) {
        "use strict";
        var n = i("9b68"),
            s = i.n(n);
        s.a
    },
    "8b50": function(t, e, i) {
        "use strict";
        var n = i("a12d"),
            s = i.n(n);
        s.a
    },
    "8be2": function(t, e, i) {},
    "8e28": function(t, e, i) {
        "use strict";
        i("a481");
        var n = i("6cd4"),
            s = i.n(n),
            a = i("6747"),
            r = i.n(a),
            o = i("4cfe"),
            u = i.n(o);
        e["a"] = {
            methods: {
                isRequiredField: function(t) {
                    return !!u()(t.required) || t.required
                },
                isPhoneValid: function(t) {
                    if (!t) return !1;
                    var e = t.replace(/^[- +()0-9]+$/, "");
                    return /^\d*$/.test(e)
                },
                blurCheckbox: function(t) {
                    if (u()(this.$refs[t])) return !1;
                    r()(this.$refs[t]) ? s()(this.$refs[t], function(t) {
                        t.$el.children[0].blur()
                    }) : this.$refs[t].$el.children[0].blur()
                }
            }
        }
    },
    "8e33": function(t, e, i) {
        "use strict";
        var n = i("c481"),
            s = i.n(n);
        s.a
    },
    "8ea7": function(t, e, i) {},
    "8eb6": function(t, e, i) {
        "use strict";
        var n = i("8ea7"),
            s = i.n(n);
        s.a
    },
    "8fba": function(t, e, i) {},
    "958b": function(t, e, i) {
        "use strict";
        var n = i("2b5e"),
            s = i.n(n);
        s.a
    },
    "95ef": function(t, e, i) {
        "use strict";
        var n = i("1b62"),
            s = i.n(n);
        s.a
    },
    9813: function(t, e, i) {
        "use strict";
        var n = i("8be2"),
            s = i.n(n);
        s.a
    },
    "98f9": function(t, e, i) {},
    "9a81": function(t, e, i) {},
    "9b68": function(t, e, i) {},
    "9eb9": function(t, e, i) {
        "use strict";
        var n = i("ccaf"),
            s = i.n(n);
        s.a
    },
    a12d: function(t, e, i) {},
    a500: function(t, e, i) {},
    a7b4: function(t, e, i) {
        "use strict";
        var n = i("b62f"),
            s = i.n(n);
        s.a
    },
    a853: function(t, e, i) {
        "use strict";
        var n = i("ed20"),
            s = i.n(n);
        s.a
    },
    a9e0: function(t, e, i) {
        "use strict";
        var n = i("ea50"),
            s = i.n(n);
        s.a
    },
    aa5f: function(t, e, i) {},
    aa91: function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.fixedDiscount ? i("div", {
                    staticClass: "final-discount_v2"
                }, [i("div", {
                    staticClass: "final-discount_v2__title"
                }, [t._v(t._s(t.discountTitle || t.$t("Ваша скидка") + ":"))]), i("div", {
                    staticClass: "final-discount_v2__value"
                }, [t._v(t._s(t.$format.number(t.fixedDiscount, t.discountFormat))), i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-" + t.discountIcon],
                        size: "12",
                        fillRule: "evenodd"
                    }
                })], 1)]) : t._e()
            },
            s = [],
            a = i("cebc"),
            r = i("2f62"),
            o = i("cdae"),
            u = {
                components: {
                    icon: o["a"]
                },
                computed: Object(a["a"])({}, Object(r["d"])("quiz", ["fixedDiscount", "currency"]), Object(r["c"])("quiz", ["isIncreasingPercentDiscount", "discountIcon", "discountTitle"]), {
                    discountFormat: function() {
                        return this.isIncreasingPercentDiscount ? "0[.]0" : "0,0[.]00"
                    }
                })
            },
            l = u,
            c = (i("2adf"), i("2877")),
            d = Object(c["a"])(l, n, s, !1, null, null, null);
        e["a"] = d.exports
    },
    afb2: function(t, e, i) {},
    b56b: function(t, e, i) {
        "use strict";
        var n = i("6345"),
            s = i.n(n);
        s.a
    },
    b583: function(t, e, i) {},
    b62f: function(t, e, i) {},
    b9a3: function(t, e, i) {},
    ba5a: function(t, e, i) {},
    bf0f: function(t, e) {
        t.exports = {
            en: {
                translation: {
                    "Ваша скидка": "Your discount",
                    "Отлично. Последний шаг!": "Excellent. Last step!",
                    "Итоговая скидка": "Final discount",
                    "Дополнительно": "Additionally",
                    "Получить результаты": "Get results",
                    "Спасибо": "Thank you",
                    "Готово": "Done",
                    "Назад": "Back",
                    "Далее": "Next",
                    "Последний шаг": "Last step",
                    "Сделано с помощью": "Powered by",
                    Email: "Email",
                    "Имя": "Name",
                    "Телефон": "Phone",
                    "За каждый ответ": "For each answer",
                    "Скидка": "Discount",
                    "Другое": "Other",
                    "Выберите вариант ответа слева": "Select answer option on the left",
                    "Выберите вариант ответа снизу": "Choose the answer from below",
                    "От": "From",
                    "До": "To",
                    "Пн": "M",
                    "Вт": "Tu",
                    "Ср": "W",
                    "Чт": "Th",
                    "Пт": "F",
                    "Сб": "S",
                    "Вс": "Su",
                    "Январь": "January",
                    "Февраль": "February",
                    "Март": "March",
                    "Апрель": "April",
                    "Май": "May",
                    "Июнь": "June",
                    "Июль": "July",
                    "Август": "August",
                    "Сентябрь": "September",
                    "Октябрь": "October",
                    "Ноябрь": "November",
                    "Декабрь": "December",
                    "У меня нет email": "I don't have email",
                    "Введите имя": "Enter your name",
                    "Введите телефон": "Enter your phone",
                    "Введите email": "Enter your email",
                    "mail@mail.ru": "mail@google.com",
                    "Игорь": "Benny",
                    "+7 (900) 000-00-00": "+1-202-555-0105",
                    "Сейчас": "Now",
                    "Сброс": "Reset",
                    "Действует еще": "Expires in",
                    "Каталог в подарок": "Gift catalog",
                    "Прайс-лист": "Price list",
                    "Отлично. Остался последний шаг!": "Excellent. The last step is left!",
                    'К этой группе привязан квиз "{title}"': 'This group was attached to quiz "{title}"',
                    "Редактировать квиз": "Edit quiz",
                    "Привязать другой квиз": "Attach another quiz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Enter quiz id and click "Attach" to attach quiz to vk group',
                    "Введите id квиза": "Enter quiz id",
                    "Использовать мессенджер": "Use instant messenger",
                    "Куда присылать результаты?": "Where to send the results?",
                    "Вернуться к вводу контактов": "Back to contacts",
                    "Выбрать другой мессенджер": "Select another messenger",
                    "Введите логин": "Enter your login",
                    "Привязать": "Attach",
                    "Ваши бонусы": "Your bonuses",
                    "Введите логин или id": "Enter your login or id",
                    "Введите номер": "Enter your number",
                    "Введите номер или логин": "Enter your number or login",
                    "Каталог": "Catalog",
                    "Сделано в": "Made in",
                    "Скачать": "Download",
                    "Пройти тест": "Take the test",
                    "Бонусы после прохождения теста": "Bonus after passing the test",
                    "такой квиз не существует": "this quiz does not exists",
                    "не удалось загрузить тест": "failed to load test",
                    "выберите один или несколько": "select one or more",
                    "можно пропустить": "can skip",
                    "Мы не смогли рассчитать для вас результат": "We could not calculate the result for you",
                    "Попробовать ещё раз": "Try again",
                    "Получите ваши бонусы далее": "Get your bonuses next step",
                    "Узнать подробнее": "More",
                    "Подсчёт результатов": "Results calculation running",
                    "до {count}": "up to {count}",
                    "от {count}": "from {count}",
                    "от {min} до {max}": "from {min} to {max}",
                    "Пройти тест заново": "Take the quiz again",
                    "Не знаю, что выбрать": "I do not know what to choose",
                    "или": "or",
                    "Ваши результаты": "Your results",
                    "Выберите интересующий вас вариант": "Choose the option you are interested in",
                    "Идёт переадресация в мессенджер": "Redirecting to messenger",
                    "Нажмите [здесь](#), если этого не случилось": "Click [here](#) if it does not happen",
                    "Загрузка": "Loading",
                    "Страна": "Country",
                    "Нужно выбрать страну": "You need to choose a country",
                    "Например": "For example",
                    "Идёт загрузка файлов": "File uploading",
                    "Не закрывайте страницу": "Do not close a page",
                    "Нажмите, чтобы загрузить файл": "Click for upload file",
                    "Или перетяните его из папки в это поле": "Or move it from a folder",
                    "Файл {name} слишком большой": "File {name} is too large",
                    "Идёт переадресация на {-url}": "Redirecting to {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share",
                    "очистить": "Clear",
                    "сейчас": "Now",
                    "применить": "Apply",
                    "Выберите время": "Choose a time",
                    "от": "from",
                    "до": "to",
                    "время": "time",
                    "дата": "date",
                    "Пролистывайте все варианты": "Scroll through all options",
                    "Логин": "Login",
                    "Почта": "Email",
                    "Введите почту": "Enter Email",
                    "Ссылка на аккаунт": "Account link",
                    "Скопируйте ссылку": "Copy the link",
                    "C [политикой конфиденциальности]({link}) ознакомлен(а)": "I agree with the [Privacy policy]({link})",
                    "Бесплатно": "Free",
                    "Введите корректный номер телефона": "Enter the correct phone number",
                    "Неправильный номер": "Wrong number",
                    "Заполните форму, чтобы получить результаты теста": "Please, fill the form to get a test results",
                    "Закрыть": "Close",
                    "Пользовательское соглашение": "Terms of use",
                    "Мы используем куки для работы сервиса.": "We use cookies for our website’s functionality.",
                    "Принять": "Accept",
                    "Вы можете их [отключить]({link1}) или продолжить, согласно [политике конфиденциальности]({link2})": "You can [disable]({link1}) them or continue according to [Privacy policy]({link2})",
                    "Политика конфиденциальности создателя страницы": "Page Creator Privacy Policy",
                    "Страница отключена": "Page off",
                    "mail@example.com": "mail@example.com",
                    "Зажмите {key}, чтобы выбрать несколько": "Hold {key} to multiple select",
                    "или нажмите {key}": "or press {key}",
                    "Все правильно": "All right",
                    "Все так": "It's like that",
                    "Именно!": "Precisely!",
                    "Да, верно": "Yeah, right",
                    "Точно!": "Exactly!",
                    "О, да": "Oh, yeah",
                    "Абсолютно": "Absolutely",
                    "На самом деле": "Actually",
                    "{count1} из {count2} *ответов правильные*": "{count1} of {count2} *answers are correct*",
                    "Шаг {number} из {count}": "Steps {number} of {count}",
                    "Вопрос {number} из {count}": "Question {number} of {count}",
                    "Осталось вопросов: {number}": "Questions left: {number}"
                }
            },
            ru: {
                translation: {
                    "Ваша скидка": "Ваша скидка",
                    "Отлично. Последний шаг!": "Отлично. Последний шаг!",
                    "Итоговая скидка": "Итоговая скидка",
                    "Дополнительно": "Дополнительно",
                    "Получить результаты": "Получить результаты",
                    "Спасибо": "Спасибо",
                    "Готово": "Готово",
                    "Назад": "Назад",
                    "Далее": "Далее",
                    "Последний шаг": "Последний шаг",
                    "Сделано с помощью": "Сделано с помощью",
                    Email: "Email",
                    "Имя": "Имя",
                    "Телефон": "Телефон",
                    "За каждый ответ": "За каждый ответ",
                    "Скидка": "Скидка",
                    "Другое": "Другое",
                    "Выберите вариант ответа слева": "Выберите вариант ответа слева",
                    "Выберите вариант ответа снизу": "Выберите вариант ответа снизу",
                    "От": "От",
                    "До": "До",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Январь",
                    "Февраль": "Февраль",
                    "Март": "Март",
                    "Апрель": "Апрель",
                    "Май": "Май",
                    "Июнь": "Июнь",
                    "Июль": "Июль",
                    "Август": "Август",
                    "Сентябрь": "Сентябрь",
                    "Октябрь": "Октябрь",
                    "Ноябрь": "Ноябрь",
                    "Декабрь": "Декабрь",
                    "У меня нет email": "У меня нет email",
                    "Введите имя": "Введите имя",
                    "Введите телефон": "Введите телефон",
                    "Введите email": "Введите email",
                    "mail@mail.ru": "mail@mail.ru",
                    "Игорь": "Игорь",
                    "+7 (900) 000-00-00": "+7 (900) 000-00-00",
                    "Сейчас": "Сейчас",
                    "Сброс": "Сброс",
                    "Действует еще": "Действует еще",
                    "Каталог в подарок": "Каталог в подарок",
                    "Прайс-лист": "Прайс-лист",
                    "Отлично. Остался последний шаг!": "Отлично. Остался последний шаг!",
                    "С": "С",
                    "ознакомлен": "ознакомлен",
                    "политикой конфиденциальности": "политикой конфиденциальности",
                    'К этой группе привязан квиз "{title}"': 'К этой группе привязан квиз "{title}"',
                    "Редактировать квиз": "Редактировать квиз",
                    "Привязать другой квиз": "Привязать другой квиз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"',
                    "Введите id квиза": "Введите id квиза",
                    "Привязать": "Привязать",
                    "Ваши бонусы": "Ваши бонусы",
                    "Использовать мессенджер": "Использовать мессенджер",
                    "Куда присылать результаты?": "Куда присылать результаты?",
                    "Вернуться к вводу контактов": "Вернуться к вводу контактов",
                    "Выбрать другой мессенджер": "Выбрать другой мессенджер",
                    "Введите логин": "Введите логин",
                    "Введите логин или id": "Введите логин или id",
                    "Введите номер": "Введите номер",
                    "Введите номер или логин": "Введите номер или логин",
                    "Каталог": "Каталог",
                    "Сделано в": "Сделано в",
                    "Скачать": "Скачать",
                    "Пройти тест": "Пройти тест",
                    "Бонусы после прохождения теста": "Бонусы после прохождения теста",
                    "такой квиз не существует": "такой квиз не существует",
                    "не удалось загрузить тест": "не удалось загрузить тест",
                    "Выберите один или несколько": "Выберите один или несколько",
                    "выберите один или несколько": "выберите один или несколько",
                    "можно пропустить": "можно пропустить",
                    "Мы не смогли рассчитать для вас результат": "Мы не смогли рассчитать для вас результат",
                    "Попробовать ещё раз": "Попробовать ещё раз",
                    "Получите ваши бонусы далее": "Получите ваши бонусы далее",
                    "Узнать подробнее": "Узнать подробнее",
                    "Подсчёт результатов": "Подсчёт результатов",
                    "до {count}": "до {count}",
                    "от {count}": "от {count}",
                    "от {min} до {max}": "от {min} до {max}",
                    "Пройти тест заново": "Пройти тест заново",
                    "Не знаю, что выбрать": "Не знаю, что выбрать",
                    "или": "или",
                    "Ваши результаты": "Ваши результаты",
                    "Выберите интересующий вас вариант": "Выберите интересующий вас вариант",
                    "Идёт переадресация в мессенджер": "Идёт переадресация в мессенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Нажмите [здесь](#), если этого не случилось",
                    "Загрузка": "Загрузка",
                    "Страна": "Страна",
                    "Нужно выбрать страну": "Нужно выбрать страну",
                    "Например": "Например",
                    "Идёт загрузка файлов": "Идёт загрузка файлов",
                    "Не закрывайте страницу": "Не закрывайте страницу",
                    "Нажмите, чтобы загрузить файл": "Нажмите, чтобы загрузить файл",
                    "Или перетяните его из папки в это поле": "Или перетяните его из папки в это поле",
                    "Файл {name} слишком большой": "Файл {name} слишком большой",
                    "Идёт переадресация на {-url}": "Идёт переадресация на {-url}",
                    "ВКонтакте": "ВКонтакте",
                    "поделиться": "поделиться",
                    "очистить": "Очистить",
                    "сейчас": "Сейчас",
                    "применить": "Применить",
                    "Выберите время": "Выберите время",
                    "от": "от",
                    "до": "до",
                    "время": "время",
                    "дата": "дата",
                    "Пролистывайте все варианты": "Пролистывайте все варианты",
                    "Логин": "Логин",
                    "Почта": "Почта",
                    "Введите почту": "Введите почту",
                    "Ссылка на аккаунт": "Ссылка на аккаунт",
                    "Скопируйте ссылку": "Скопируйте ссылку",
                    "C [политикой конфиденциальности]({link}) ознакомлен(а)": "C [политикой конфиденциальности]({link}) ознакомлен(а)",
                    "Бесплатно": "Бесплатно",
                    "Введите корректный номер телефона": "Введите корректный номер телефона",
                    "Неправильный номер": "Неправильный номер",
                    "Заполните форму, чтобы получить результаты теста": "Заполните форму, чтобы получить результаты теста",
                    "Закрыть": "Закрыть",
                    "Пользовательское соглашение": "Пользовательское соглашение",
                    "Мы используем куки для работы сервиса.": "Мы используем куки для работы сервиса.",
                    "Принять": "Принять",
                    "Вы можете их [отключить]({link1}) или продолжить, согласно [политике конфиденциальности]({link2})": "Вы можете их [отключить]({link1}) или продолжить, согласно [политике конфиденциальности]({link2})",
                    "Политика конфиденциальности создателя страницы": "Политика конфиденциальности создателя страницы",
                    "Страница отключена": "Страница отключена",
                    "mail@example.com": "mail@example.com",
                    "Зажмите {key}, чтобы выбрать несколько": "Зажмите {key}, чтобы выбрать несколько",
                    "или нажмите {key}": "или нажмите {key}",
                    "Все правильно": "Все правильно",
                    "Все так": "Все так",
                    "Именно!": "Именно!",
                    "Да, верно": "Да, верно",
                    "Точно!": "Точно!",
                    "О, да": "О, да",
                    "Абсолютно": "Абсолютно",
                    "На самом деле": "На самом деле",
                    "{count1} из {count2} *ответов правильные*": "{count1} из {count2} *ответов правильные*",
                    "Шаг {number} из {count}": "Шаг {number} из {count}",
                    "Вопрос {number} из {count}": "Вопрос {number} из {count}",
                    "Осталось вопросов: {number}": "Осталось вопросов: {number}"
                }
            }
        }
    },
    bfc4: function(t, e, i) {
        "use strict";
        var n = i("26df"),
            s = i.n(n);
        s.a
    },
    bfd9: function(t, e, i) {
        "use strict";
        var n = i("b583"),
            s = i.n(n);
        s.a
    },
    c06f: function(t, e, i) {
        "use strict";
        var n = i("c39c"),
            s = i.n(n);
        s.a
    },
    c39c: function(t, e, i) {},
    c481: function(t, e, i) {},
    c7ba: function(t, e, i) {
        "use strict";
        var n = i("db95"),
            s = i.n(n);
        s.a
    },
    c817: function(t, e, i) {
        "use strict";
        i("28a5");
        var n = i("7618"),
            s = i("9b02"),
            a = i.n(s),
            r = i("f596"),
            o = i.n(r),
            u = {
                cloud: ["mp4"],
                social: ["vimeo", "youtube", "coub"]
            };
        e["a"] = function(t, e) {
            var i = null,
                s = null;
            if (t) switch (Object(n["a"])(o.a.parse(t))) {
                case "object":
                    switch (i = o.a.parse(t), i.provider) {
                        case "vimeo":
                            i.link = "https://player.vimeo.com/video/".concat(i.id).concat(e ? "?autoplay=0&loop=1&portrait=0" : "?autoplay=1&loop=1&portrait=0");
                            break;
                        case "youtube":
                            i.link = "https://www.youtube.com/embed/".concat(i.id).concat(e ? "?autoplay=0&showinfo=0&modestbranding=1&start=".concat(a()(i, "params.start", 0)) : "?autoplay=1&showinfo=0&modestbranding=1&loop=1&playlist=".concat(i.id, "&start=").concat(a()(i, "params.start", 0)));
                            break;
                        case "coub":
                            i.link = "https://coub.com/embed/".concat(i.id).concat(e ? "?autoplay=0" : "?autoplay=1");
                            break;
                        default:
                            i.link = null, i.provider = "stub"
                    }
                    break;
                case "undefined":
                    s = t.split("."), i = -1 !== u.cloud.indexOf(s[s.length - 1]) ? {
                        link: t,
                        provider: "cloud"
                    } : {
                        link: null,
                        provider: "stub"
                    };
                    break;
                default:
                    i = {
                        link: null,
                        provider: "stub"
                    }
            } else i = {
                link: null,
                provider: null
            };
            return i
        }
    },
    cb5b: function(t, e, i) {},
    ccaf: function(t, e, i) {},
    cdae: function(t, e, i) {
        "use strict";
        var n, s, a = i("bba4"),
            r = i.n(a),
            o = i("9b02"),
            u = i.n(o),
            l = i("94ed"),
            c = {
                mdiAccount: l["a"],
                mdiCheckboxMarkedCircleOutline: l["j"],
                mdiCheckCircleOutline: l["j"],
                mdiReload: l["z"],
                mdiArrowUp: l["e"],
                mdiArrowLeft: l["c"],
                mdiArrowRight: l["d"],
                mdiChevronLeft: l["l"],
                mdiChevronRight: l["m"],
                mdiClock: l["n"],
                mdiClockOutline: l["o"],
                mdiClose: l["p"],
                mdiCloseCircle: l["q"],
                mdiCloseCircleOutline: l["r"],
                mdiGift: l["u"],
                mdiCheckboxMultipleMarkedCircle: l["k"],
                mdiPencil: l["x"],
                mdiCalendarToday: l["g"],
                mdiAlertCircle: l["b"],
                mdiEmail: l["s"],
                mdiFileDocumentBoxOutline: l["t"],
                mdiPhone: l["y"],
                mdiLoading: l["w"],
                mdiCheckCircle: l["i"],
                mdiInformation: l["v"],
                mdiCalendarCheck: l["f"],
                mdiCalendarSearch: "M15.66 12.141a4.562 4.562 0 0 1 3.859 6.988l3.119 3.14-1.408 1.407-3.16-3.109a4.558 4.558 0 1 1-2.41-8.426m0 2.026a2.532 2.532 0 1 0 2.532 2.533 2.532 2.532 0 0 0-2.532-2.532m3.54-6.079H5.026V19.23h4.557a6.621 6.621 0 0 0 1.327 2.026H5.026A2.025 2.025 0 0 1 3 19.23V5.051a2.019 2.019 0 0 1 2.026-2.025h1.012V1h2.026v2.026h8.1V1h2.026v2.026h1.01a2.026 2.026 0 0 1 2.03 2.025v8.133a6.876 6.876 0 0 0-2.03-2.056z",
                mdiFileDocumentBoxCheckOutline: "M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17",
                mdiPercent: "M8 10C9.10458 10 10 9.10457 10 8C10 6.89543 9.10458 6 8 6C6.89542 6 6 6.89543 6 8C6 9.10457 6.89542 10 8 10ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19ZM16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21ZM18.435 7.41422L17.0208 6L5 18.0208L6.41422 19.435L18.435 7.41422Z",
                mdiCheck: l["h"],
                mdiRub: "M9 4H13C15.7614 4 18 6.23858 18 9C18 11.7614 15.7614 14 13 14H11V16H15V18H11V20H9V18H7V16H9V14H7V12H9V4ZM13 6L11 6V12H13C14.6569 12 16 10.6569 16 9C16 7.34315 14.6569 6 13 6Z",
                mdiByb: "M3 4H4H5H8V4.02747C8.16415 4.00932 8.33099 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 9.91364 12.3482 11.175 11.3287 12C12.3482 12.825 13 14.0864 13 15.5C13 17.9853 10.9853 20 8.5 20C8.33099 20 8.16415 19.9907 8 19.9725V20H5H4H3V4ZM5 18H8V17.95C8.16156 17.9828 8.32877 18 8.5 18C9.88071 18 11 16.8807 11 15.5C11 14.1193 9.88071 13 8.5 13C8.32877 13 8.16156 13.0172 8 13.05V13H5V18ZM8 10.95V11H5V6H8V6.05C8.16156 6.01721 8.32877 6 8.5 6C9.88071 6 11 7.11929 11 8.5C11 9.88071 9.88071 11 8.5 11C8.32877 11 8.16156 10.9828 8 10.95ZM15 12H15.0275C15.2762 9.75003 17.1837 8 19.5 8C19.669 8 19.8358 8.00932 20 8.02747V8H21V10H20V10.05C19.8384 10.0172 19.6712 10 19.5 10C18.1193 10 17 11.1193 17 12.5C17 12.6712 17.0172 12.8384 17.05 13H17V20H15V12.5V12Z",
                mdiUsd: "M11 3H13V5H16.3333V7H13V11C15.5773 11 17.6667 12.7909 17.6667 15C17.6667 17.1131 15.7551 18.8435 13.3333 18.99V19H13L13 21H11V19H8.33334V17H11V12.9595C8.73847 12.6822 7 11.0151 7 9C7 6.98487 8.73847 5.31778 11 5.04051V3ZM11 7.0598C9.6697 7.30891 9 8.28454 9 9C9 9.71546 9.6697 10.6911 11 10.9402V7.0598ZM13 17V13C14.7731 13 15.6667 14.1736 15.6667 15C15.6667 15.8264 14.7731 17 13 17Z",
                mdiUah: "M9 6V4H13V4.0113C15.4218 4.17611 17.3333 6.12279 17.3333 8.5C17.3333 8.669 17.3237 8.83583 17.3049 9H19V11H16.5475C15.7103 12.206 14.2847 13 12.6667 13C12.5546 13 12.4434 12.9962 12.3333 12.9887V13H12.6667H19V15H9.05474C9.01876 15.163 9 15.3305 9 15.5C9 16.8113 10.1221 17.9973 11.6613 18H11.672C11.9026 17.9996 12 18 12 18H12.3333H16V20L11.6667 20L11.5 20L11 19.9544C8.73847 19.6425 7 17.767 7 15.5C7 15.331 7.00966 15.1642 7.02848 15H6V13H7.78584C8.623 11.794 10.0487 11 11.6667 11C11.7787 11 11.8899 11.0038 12 11.0113V11H11.6667H6V9H15.2786C15.3146 8.83695 15.3333 8.66952 15.3333 8.5C15.3333 7.18722 14.2086 6 12.6667 6C12.4342 6 12.2111 5.94965 12 6H9Z",
                mdiKzt: "M6 7V5H12H13H18V7H13H12H6ZM13 9H12H6V11H11V21H13V11H18V9H13Z",
                mdiCny: "M10 10L4 4H6.82843L12.4498 9.62132L18.0711 4H20.8995L14.8995 10H18.4142V12H13.4142V13H18.4142V15H13.4142V20H11.4142V15H6.41422V13H11.4142V12H6.41422V10H10Z",
                mdiEur: "M18 5V7L16 7V7.02242C14.0763 7.19577 12.4383 8.35959 11.5997 10L17 10V12L11.0224 12C11.0076 12.1647 11 12.3315 11 12.5C11 12.6685 11.0076 12.8353 11.0224 13L17 13V15H11.5997C12.4383 16.6404 14.0763 17.8042 16 17.9776V18H18V20H16V19.9836C12.9532 19.7831 10.4034 17.7631 9.42676 15H7V13H9.0164C9.00552 12.8347 9 12.668 9 12.5C9 12.332 9.00552 12.1653 9.0164 12H7V10H9.42676C10.4034 7.23689 12.9532 5.21694 16 5.0164V5H18Z",
                mdiIls: "M5 5V20H7V7H10C12 7 13 7.8 13 9V10V12V14V16H15V9C15 7 13 5 10 5H5ZM11 14V12V10H9V20H15C17 20 19 18 19 15V5H17V15C17 17 16.2 18 15 18H11V14Z",
                mdiThb: "M13 3H11V5H8V19H11V21H13V19C15.2091 19 17 17.2091 17 15C17 13.8053 16.4762 12.7329 15.6458 12C16.4762 11.2671 17 10.1947 17 9C17 6.79086 15.2091 5 13 5V3ZM13 7V11C14.1046 11 15 10.1046 15 9C15 7.89543 14.1046 7 13 7ZM13 13V17C14.1046 17 15 16.1046 15 15C15 13.8954 14.1046 13 13 13ZM11 17V13H10V17H11ZM11 11V7H10V11H11Z",
                mdiKgs: "M7 10C7 6.68629 9.68629 4 13 4H18V6H13C10.7909 6 9 7.79086 9 10C9 12.2091 10.7909 14 13 14H18V16H13C9.68629 16 7 13.3137 7 10ZM18 18V20H8V18H18Z",
                mdiCzk: "m2.80734,11.79704l0,6.73084l0.87011,-0.00784l0.86601,-0.01166l0.01994,-2.15385l0.01994,-2.15385l1.15337,-1.33053c0.63455,-0.72967 1.16549,-1.32671 1.18133,-1.32671s0.92192,1.52184 2.01547,3.3831c1.09355,1.86508 2.02348,3.43374 2.06336,3.49222l0.07585,0.10913l0.93794,0c0.6066,0 0.93404,-0.01567 0.93404,-0.03899c0,-0.02332 -1.10567,-1.89241 -2.45864,-4.1594c-1.35277,-2.26317 -2.44632,-4.13991 -2.4344,-4.17125c0.00801,-0.02733 0.96179,-1.17841 2.11536,-2.55175c1.15337,-1.37736 2.09933,-2.50894 2.09933,-2.5206c0,-0.01166 -0.43496,-0.01949 -0.9659,-0.01949l-0.96981,0.00382l-2.82576,3.33226c-1.55646,1.83393 -2.85352,3.35175 -2.88558,3.37908c-0.04789,0.03899 -0.05591,-0.4409 -0.05591,-3.33608l0,-3.37908l-0.87793,0l-0.87813,0l0,6.73065zm15.40591,-3.47254c-0.03186,0.00784 -0.19549,0.03516 -0.3593,0.05848c-1.70425,0.26928 -3.11703,1.50215 -3.68786,3.21128c-0.21152,0.63603 -0.27935,1.10808 -0.27935,1.95873c0,1.16675 0.14759,1.84559 0.59467,2.7314c0.76631,1.514 2.12729,2.36446 3.93124,2.46212c1.14946,0.05848 2.35073,-0.33942 3.34067,-1.11209l0.21152,-0.15996l-0.31121,-0.4409c-0.16773,-0.24195 -0.34718,-0.49174 -0.39117,-0.55404l-0.08777,-0.11314l-0.14368,0.12098c-1.19736,1.0301 -2.83768,1.15891 -3.99516,0.3161c-0.78234,-0.56971 -1.29314,-1.61548 -1.3729,-2.81721c-0.07585,-1.14343 0.15971,-2.19303 0.65449,-2.93054c0.21562,-0.32394 0.7104,-0.79981 1.00578,-0.96761c0.65859,-0.37458 1.43272,-0.49556 2.12729,-0.33158c0.37123,0.08581 1.09355,0.47606 1.30116,0.69852c0.03597,0.03899 0.09188,0.07415 0.11983,0.07415c0.04789,0 0.85408,-0.9871 0.85408,-1.04577c0,-0.04682 -0.45099,-0.39809 -0.73835,-0.57353c-0.30731,-0.19513 -0.75438,-0.38242 -1.15748,-0.48772c-0.24749,-0.06632 -0.459,-0.08982 -0.93794,-0.09747c-0.33917,-0.00803 -0.64647,-0.00803 -0.67853,-0.00019zm-2.09132,-4.35854c0.04398,0.05848 0.49087,0.71018 0.99385,1.44367l0.91801,1.33455l0.70649,0l0.70649,0l0.97782,-1.42418c0.53876,-0.78032 0.98173,-1.43202 0.98173,-1.44367s-0.27134,-0.01567 -0.6066,-0.01166l-0.6066,0.01166l-0.6625,0.88581c-0.36321,0.48772 -0.68655,0.91696 -0.72232,0.95213c-0.07976,0.07415 -0.02404,0.13665 -0.88614,-1.01845l-0.6107,-0.8195l-0.63064,-0.01166l-0.63064,-0.01166l0.07174,0.11295z",
                mdiPln: "m12.42972,16.4474l-5.79398,0c0.39781,-0.4694 0.75529,-0.9345 1.06271,-1.34281l4.84096,-6.42644c0.03359,-0.04468 0.05171,-0.09973 0.05171,-0.15614l0,-1.25352c0,-0.1415 -0.11214,-0.25607 -0.25069,-0.25607l-8.23202,0c-0.13852,0 -0.25047,0.11455 -0.25047,0.25607l0,1.59521c0,0.1415 0.11191,0.25607 0.25047,0.25607l5.35467,0c-0.36053,0.42678 -0.6977,0.84347 -1.11383,1.36544l-4.88518,6.49506c-0.03351,0.04479 -0.05182,0.09962 -0.05182,0.15621l0,1.16224c0,0.14155 0.11191,0.25609 0.25044,0.25609l8.76722,0c0.13878,0 0.25087,-0.11455 0.25087,-0.25609l0,-1.59529c-0.00022,-0.1415 -0.11235,-0.25602 -0.25106,-0.25602l-0.00001,0l0.00001,-0.00001zm7.6491,-9.84551c-0.22213,-0.30244 -0.64187,-0.36382 -0.93833,-0.13774l-1.67486,1.28149l0,-5.62767c0,-0.1414 -0.11214,-0.25609 -0.25069,-0.25609l-1.96346,0c-0.13834,0 -0.25047,0.11466 -0.25047,0.25609l0,7.51368l-2.72248,2.08282c-0.29606,0.22643 -0.3564,0.6557 -0.13462,0.95832c0.13199,0.1794 0.33334,0.27415 0.53715,0.27415c0.13982,0 0.28074,-0.04461 0.4014,-0.13687l1.91854,-1.4678l0,6.95616c0,0.14132 0.11214,0.25587 0.25047,0.25587l1.96346,0c0.13857,0 0.25069,-0.11455 0.25069,-0.25587l0,-8.8416l2.47857,-1.89652c0.29627,-0.22665 0.3567,-0.65588 0.13462,-0.95844l0,0.00001l0,0.00001z",
                mdiHuf: "m13.51263,4.55619l-7.90749,0c-0.1273,0 -0.2304,0.10285 -0.2304,0.23012l0,14.68285c0,0.12669 0.1031,0.22979 0.2304,0.22979l1.89501,0c0.1273,0 0.23016,-0.10261 0.23016,-0.22979l0,-6.41452l5.32506,0c0.1273,0 0.2304,-0.10285 0.2304,-0.23004l0,-1.56848c0,-0.12706 -0.1031,-0.23016 -0.2304,-0.23016l-5.32506,0l0,-4.41942l5.78232,0c0.12718,0 0.23024,-0.10285 0.23024,-0.23004l0,-1.5902c0.00004,-0.12726 -0.10306,-0.23012 -0.23024,-0.23012l0,0.00001zm7.69037,4.13902l-2.51462,0l0,-2.29751c0,-0.07152 -0.03321,-0.13884 -0.08961,-0.18232c-0.05636,-0.04336 -0.12959,-0.05791 -0.19988,-0.03998l-1.8737,0.00086c-0.10045,0.02685 -0.17074,0.11814 -0.17074,0.22221l0,2.29702l-1.40336,0c-0.12714,0 -0.23024,0.1031 -0.23024,0.23016l0,1.45964c0,0.12694 0.1031,0.23004 0.23024,0.23004l1.40332,0l0,5.52078c0,1.41025 0.25628,2.33329 0.79797,2.89617c0.50657,0.57878 1.28164,0.88469 2.2427,0.88469c0.71517,0 1.34982,-0.09902 1.78678,-0.27869c0.09079,-0.03733 0.14788,-0.12816 0.14185,-0.22645l-0.00603,-1.43796c-0.00481,-0.06911 -0.03949,-0.13268 -0.09589,-0.17294c-0.05636,-0.03994 -0.12714,-0.05298 -0.19458,-0.03513c-0.20522,0.05587 -0.63493,0.12286 -1.13135,0.12286c-0.62699,0 -1.20747,-0.22038 -1.20747,-1.81808l0,-5.45578l2.51414,0c0.12718,0 0.23024,-0.1031 0.23024,-0.23008l0,-1.45964c0.00004,-0.12677 -0.10257,-0.22987 -0.22975,-0.22987l-0.00002,0z"
            },
            d = {
                functional: !0,
                name: "icon",
                props: {
                    icon: Array,
                    size: String,
                    fillRule: {
                        type: String,
                        default: "nonzero"
                    },
                    strokeWidth: {
                        type: String,
                        default: "0"
                    },
                    title: String
                },
                render: function(t, e) {
                    var i = u()(e, "props.icon.1");
                    return t("svg", {
                        class: ["mdi-icon", e.props.size],
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [t("title", e.props.title || e.props.icon[1]), t("path", {
                        attrs: {
                            d: c[r()(i)],
                            "stroke-width": e.props.strokeWidth,
                            "fill-rule": e.props.fillRule
                        }
                    })])
                }
            },
            h = d,
            f = (i("83b4"), i("2877")),
            m = Object(f["a"])(h, n, s, !1, null, null, null);
        e["a"] = m.exports
    },
    d063: function(t, e, i) {
        "use strict";
        var n = i("6843"),
            s = i.n(n);
        s.a
    },
    d152: function(t, e, i) {},
    d383: function(t, e, i) {},
    d46a: function(t, e, i) {
        t.exports = i.p + "img/cookie.a0fb1afb.png"
    },
    d66b: function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "image-with-loader",
                    class: [{
                        "image-with-loader_loading": !t.imageLoaded
                    }]
                }, [i("img", {
                    attrs: {
                        src: t.src
                    },
                    on: {
                        load: function(e) {
                            t.imageLoaded = !0
                        }
                    }
                })])
            },
            s = [],
            a = {
                props: {
                    src: String
                },
                data: function() {
                    return {
                        imageLoaded: !1
                    }
                }
            },
            r = a,
            o = (i("a853"), i("2877")),
            u = Object(o["a"])(r, n, s, !1, null, null, null);
        e["a"] = u.exports
    },
    d6d0: function(t, e, i) {},
    d847: function(t, e, i) {
        "use strict";
        var n = i("71ac"),
            s = i.n(n);
        s.a
    },
    da1c: function(t, e, i) {
        "use strict";
        var n = i("2524"),
            s = i.n(n);
        s.a
    },
    db95: function(t, e, i) {},
    de74: function(t, e, i) {
        "use strict";
        var n = i("31f0"),
            s = i.n(n);
        s.a
    },
    dfbf: function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bonuses",
                    class: ["bonuses_direction_" + t.direction, "bonuses_count_" + t.bonuses.length],
                    style: {
                        "--bonus-height": t.height + "px"
                    }
                }, t._l(t.bonuses, function(e, n) {
                    return i("Bonus", {
                        key: "bonus_" + n,
                        staticClass: "bonuses__bonus",
                        attrs: {
                            bonus: e,
                            isLocked: t.isLock(e)
                        }
                    })
                }), 1)
            },
            s = [],
            a = i("cebc"),
            r = (i("c5f6"), i("9b02")),
            o = i.n(r),
            u = i("2f62"),
            l = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bonus",
                    class: ["bonus_type_" + t.type, {
                        bonus_expanded: t.expanded || t.single,
                        bonus_unexpanded: t.unexpanded && !t.single,
                        bonus_single: t.single,
                        bonus_locked: t.isLocked,
                        bonus_unlocked: !t.isLocked
                    }]
                }, [i("div", {
                    staticClass: "bonus__wrapper",
                    style: {
                        backgroundImage: "url(" + t.imageUrl + ")"
                    },
                    on: {
                        click: t.download
                    }
                }, [i("div", {
                    staticClass: "bonus__layer"
                }), t.text.length > 0 ? i("span", {
                    staticClass: "bonus__text"
                }, [t._v(t._s(t.text))]) : t._e(), !t.isLocked && t.bonus.link ? i("div", {
                    staticClass: "bonus__unlock",
                    attrs: {
                        title: t.$t("Скачать")
                    }
                }, [i("DownArrowIcon")], 1) : t._e(), "emoji" === t.type ? i("ImageWithLoader", {
                    staticClass: "bonus__emoji",
                    attrs: {
                        src: t.getEmojiLink()
                    }
                }) : t._e()], 1), t.isLocked ? [i("div", {
                    staticClass: "bonus__lock-icon"
                }, [i("LockIcon")], 1), i("div", {
                    staticClass: "bonus__lock"
                })] : t._e()], 2)
            },
            c = [],
            d = (i("4917"), i("b54a"), i("7f7f"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        viewBox: "0 0 6 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M2.99997 4.53334C3.14142 4.53334 3.27708 4.47715 3.37709 4.37713C3.47711 4.27711 3.5333 4.14145 3.5333 4C3.5333 3.704 3.2933 3.46667 2.99997 3.46667C2.85852 3.46667 2.72287 3.52286 2.62285 3.62288C2.52283 3.7229 2.46664 3.85855 2.46664 4C2.46664 4.14145 2.52283 4.27711 2.62285 4.37713C2.72287 4.47715 2.85852 4.53334 2.99997 4.53334ZM4.59997 2.13334C4.74142 2.13334 4.87708 2.18953 4.97709 2.28955C5.07711 2.38957 5.1333 2.52522 5.1333 2.66667V5.33334C5.1333 5.47479 5.07711 5.61044 4.97709 5.71046C4.87708 5.81048 4.74142 5.86667 4.59997 5.86667H1.39997C1.25852 5.86667 1.12287 5.81048 1.02285 5.71046C0.922828 5.61044 0.866638 5.47479 0.866638 5.33334V2.66667C0.866638 2.37067 1.10664 2.13334 1.39997 2.13334H1.66664V1.6C1.66664 1.24638 1.80711 0.907243 2.05716 0.657194C2.30721 0.407146 2.64635 0.26667 2.99997 0.26667C3.17507 0.26667 3.34845 0.301158 3.51022 0.368164C3.67198 0.43517 3.81897 0.533383 3.94278 0.657194C4.06659 0.781006 4.1648 0.927991 4.23181 1.08976C4.29882 1.25153 4.3333 1.42491 4.3333 1.6V2.13334H4.59997ZM2.99997 0.800004C2.7878 0.800004 2.58431 0.884289 2.43429 1.03432C2.28426 1.18435 2.19997 1.38783 2.19997 1.6V2.13334H3.79997V1.6C3.79997 1.38783 3.71569 1.18435 3.56566 1.03432C3.41563 0.884289 3.21214 0.800004 2.99997 0.800004Z"
                    }
                })])
            }),
            h = [],
            f = i("2877"),
            m = {},
            p = Object(f["a"])(m, d, h, !1, null, null, null),
            g = p.exports,
            b = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 512.171 512.171"
                    },
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.171 512.171",
                        "xml:space": "preserve"
                    }
                }, [i("g", [i("g", [i("path", {
                    attrs: {
                        d: "M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971\n        c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627\n        l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504\n        C479.793,292.501,480.71,287.915,479.046,283.925z"
                    }
                })])])])
            },
            v = [],
            _ = (i("3f6f"), {}),
            y = Object(f["a"])(_, b, v, !1, null, "d187c184", null),
            w = y.exports,
            k = i("d66b"),
            C = i("4dbf"),
            x = i.n(C),
            q = i("ede0"),
            D = i.n(q),
            S = {
                components: {
                    DownArrowIcon: w,
                    LockIcon: g,
                    ImageWithLoader: k["a"]
                },
                props: {
                    bonus: Object,
                    isLocked: {
                        type: Boolean,
                        default: !0
                    },
                    expanded: {
                        type: Boolean,
                        default: !1
                    },
                    unexpanded: {
                        type: Boolean,
                        default: !1
                    },
                    single: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        images: {
                            catalog: x.a,
                            price: D.a
                        },
                        staticPath: Object({
                            VUE_APP_PRIVATE_FILE_UPLOAD_URL: "https://files.marquiz.ru/upload",
                            VUE_APP_API_URL: "https://api.marquiz.ru",
                            VUE_APP_MARQUIZ_ANALYTICS_URL: "https://analytics.marquiz.ru",
                            NODE_ENV: "production",
                            BASE_URL: "//cdn.mrqz.me/"
                        }).VUE_APP_STATIC_URL || "https://static.marquiz.ru"
                    }
                },
                computed: {
                    type: function() {
                        var t = o()(this.bonus, "image.id");
                        switch (t) {
                            case "price":
                            case "catalog":
                            case "emoji":
                                return t;
                            default:
                                return "custom"
                        }
                    },
                    text: function() {
                        return this.bonus.name ? this.bonus.name : "catalog" === this.type ? this.$t("Каталог") : "price" === this.type ? this.$t("Прайс-лист") : ""
                    },
                    imageUrl: function() {
                        if ("custom" === this.type) {
                            var t = o()(this.bonus, "image", {});
                            return this.$image.url(t, {
                                width: 250
                            })
                        }
                        return this.images[this.type]
                    }
                },
                methods: {
                    download: function() {
                        this.isLocked || this.bonus.link && (this.bonus.link.match(/^(http|https):\/\//) ? window.open(this.bonus.link, "_blank") : window.open("//".concat(this.bonus.link), "_blank"))
                    },
                    getEmojiLink: function() {
                        var t = o()(this.bonus, "image.unified", "1f381");
                        return "".concat(this.staticPath, "/images/emoji/").concat(t, ".png")
                    }
                }
            },
            $ = S,
            A = (i("5967"), Object(f["a"])($, l, c, !1, null, null, null)),
            T = A.exports,
            O = {
                components: {
                    Bonus: T
                },
                props: {
                    direction: {
                        type: String,
                        default: "column"
                    },
                    height: {
                        type: Number,
                        default: 64
                    }
                },
                computed: Object(a["a"])({}, Object(u["d"])("quiz", {
                    bonuses: function(t) {
                        return o()(t, "info.marketing.bonuses", [])
                    }
                }), Object(u["d"])("quiz", ["isResultShow"]), Object(u["c"])("quiz", ["resultsPosition"]), Object(u["d"])("form", ["isStep2", "isThanksPage"])),
                methods: {
                    isLock: function(t) {
                        return (!this.isResultShow || "afterForm" !== this.resultsPosition) && (!this.isThanksPage && (!this.isThanksPage && !this.isStep2 || this.isStep2 && "finish" === t.step))
                    }
                }
            },
            P = O,
            z = (i("6629"), Object(f["a"])(P, n, s, !1, null, null, null));
        e["a"] = z.exports
    },
    e1d3: function(t, e, i) {
        "use strict";
        var n = i("b9a3"),
            s = i.n(n);
        s.a
    },
    e494: function(t, e, i) {},
    e521: function(t, e, i) {},
    e555: function(t, e, i) {
        "use strict";
        var n = i("6747"),
            s = i.n(n),
            a = i("ba84"),
            r = i.n(a),
            o = i("dd61"),
            u = i.n(o),
            l = i("ceac"),
            c = i.n(l);
        e["a"] = {
            props: {
                hasOther: Boolean
            },
            data: function() {
                return {
                    other: null
                }
            },
            computed: {
                otherIndex: function() {
                    return this.getOtherIndex(this.val)
                }
            },
            methods: {
                getAnswerValue: function(t) {
                    return this.isLong ? t.title || t.longText : t.title
                },
                getOtherIndex: function(t) {
                    var e, i = c()(t, u()(this.answers, this.getAnswerValue));
                    return e = i.length ? r()(t, i[0]) : null, e
                },
                setOtherVal: function(t) {
                    "one" === this.select ? this.val = t : null !== this.otherIndex ? t ? this.val[this.otherIndex] = t : this.val.splice(this.otherIndex, 1) : (s()(this.val) || (this.val = []), this.val.push(t))
                }
            },
            watch: {
                other: function(t) {
                    null !== t && this.setOtherVal(t)
                }
            }
        }
    },
    e5f3: function(t, e, i) {
        "use strict";
        var n = i("14b5"),
            s = i.n(n);
        s.a
    },
    e6e3: function(t, e, i) {
        "use strict";
        var n = i("27bb"),
            s = i.n(n);
        s.a
    },
    e720: function(t, e, i) {
        "use strict";
        var n = i("0378"),
            s = i.n(n);
        s.a
    },
    e7f0: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEVBhAUUjb3DwAABwdJREFUSMd9lmuMXVUVx39r7/O4r5l7p52hj2mgtYh9MDYQ7BdjUrQKptRHKtG2FhRCiCYYhUDBRPhgxKoQGgwKxkBBWlFIa4WaSBopbVFIBvqQUFJbagc7Q9uZdjpz75177zl7Lz/ce2kLna5v56x19n+v/1rrf5ZwEfvNF55gtJxijCCGvHesAb4DXNEKOQQ8bQxPO0/ZeyWfMfxo5/cmPVMmczy+5HFGag4jghGKzvOANMEygG+FGaCu8AeBB1Q57VXJZQx3TgJqL/Ry3epNVMsJYg3Wa9F5fiZwKxAAek6oAoHAVQrTxPCaiNTqibJsznJeHtj2sbPNx8BWbQRVTD7EBFJ0ngcFbm6xoRe4nwIisFqVX4iYLtEawxNn2DHvvotnuG7VxrMPubBIYH9MJfkuStACbMcnLVptM+t2ZbRP1c1w2tg9K6nVgrTO6p7P8cfh3R+v4bqVG8+taBFYi3KdDpYvpeYKCO8BOxHeFDgGeIXpKItcWlni3cRC1IWq3nf4dMOiurunbORUihJLwA0HHjwLeF5mUALWAl8CnI7UsozWXjRWnizk7XujY84b0yRSVdlU/j7ftGtneewqhTtAZpW8JrNTv0HhXoVTHiWD5YZ3f458CKaAUALuBb7Yomxcna4v7Dj6YuUTXRoGlqHR/ag2SykCMwufpFI9yeBEhemZ/LUeHi2oLpyb+Algk8BahVOghGKxS/tWtMk9F8y16vQIlXSr685zfGQPJyuD5IIoSNWXgJwV44aqH7iUhMuy3dRd+l+MHAiUz0/xWjCwUGGGwG6QCYf/sEtLwH0tsLTVDC8DL0pnxMmhflKfMVbk2rGk/vu6T//e8OnLVZc8G4j5Wig2fL9+nI5MjuVDIztyyqOtS4vAtxR+KTDFINilfSsKwN3AdS0wAcaAh4ATEwd2sfKqubJ38MQtHn4bSvDZ2MQzQwlnCLLQ4ZfVfSodUfyvsbTss3GRLmVAmpefBqhAn0K3RXYZ4Ebg+hZYe1TeAf4DQtUpz+459JlMYO6fGhamlmyn7zB5X7B5X7Kdvmg7OwIJ7hlv1JadrlXpJuAV98Ex4NVzp0BglUdvNcDyC4jBQSBxx95h6O1xDOYbJZufXgoztYyVBIFW3xCZyHfaQofFru7JZaNX4jJLzCUI7GvR2m7JCFhjgF7OamPbOQwwPjZC15VxJm+yC2ITKSixJc0F1APT/EZVCSUgb3NzqklSqKQNBAHkOJBoK8vI69iUJI2DC0gVqt5YE5IzERkTalbidm0BCARvA+qpx6YemyomInJF26kiICko3lglCVUrWefPZL0vG1QNMMD5miqJq/fOKn4a290FjbBukH49q6O2iYkNDWQDGvmQRiGU/dPjrrHuqIPeWkrOVbt7kmRwapK8n/duTFBRGDLAlo9Q6pxP5r96+He546GjGMeIyJ9R3gWMwj5tNsRO4HUgERgMhA0TruxMepAfzH/dJCR9VtWBiCICosCWNuDWtjAL4oB5maC4yKbww8wCqo3GQYS1quwX+CnoV4Gvi8jNLfD7r+ie8VocxUR1w5qB2XNRrpYWuaAWeAnkebu0b0UKvAV0A/OacyNxI6lMNdXyK/9IB5OZQYFKkhwOrNl5JqgM53zmhAhJFNiyV301DsN/nqyWKY4fRY2YyMkdPS57daw2BbHA30AeBiptaUuAfmAqMN+YIHX16lx34ng4M9E3BtOyHuo9xq9uf2IkPNRpj+ZO1PZ2vKcLKpeqVx1PsZQqRxkdHSeKwhs7fXRLj8u2FEu2NUVExgHs0itXtPvvHFCZH2IlHT153ZhPTGDM3vxoJrnmzUWMZqtFFQg1bLxbOMZjO55iZWk2iIRhFH47Unt3b1oIIrXaBNOHgPF2g9jtb29m+78389FMjZhPxePlnoarLUm9X2iQkbzPDB/sOl1vWDdl80vTzrzd2WBZcQGdEiNITlWv7HGZ4S4X71P0L8AzQLmZkbD4yPrzl6hz/ot54M7wf0fvcJXRjjE3YeuajInqnpK6/kDKlVFf3VerlbddHk33sVqMMaSp47bebbx+5CbMR/azxUfWtyXufFu3aiOIIS125fL7+3+SK5dvC1UbJqk18BNOSLziGGainoh/bKZ0PJOoq1gxRJHl8rFOjMqHQ7v4yCPnnX/BNXHdmj8x8+gAMwYGch0S3GXRr7TGhQRvnCipePtBUI0qJn0D4TmBt+JscMqlyk37nmIyu+CauH3/C9weLCS0Nsl6+lWYqrBAQQ2GAEOk1pdcnBhkTiLuyw4dLc0u7W2UE7YM7ZkU0EzmuP7wegoOvFAFHgZ5geYUWwVRFEHsJWm2OqfR+VzGB8/XD4zrNXct4WIWXNR7dg2tAutBDrdU5rLW+/cV/pr34dYOH06csQ32/HrXRU/8PzhfOSNpOeLlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTIxVDA2OjE2OjIwKzAwOjAwV/TrJgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0yMVQwNjoxNjoyMCswMDowMCapU5oAAAAASUVORK5CYII="
    },
    e9ba: function(t, e, i) {},
    ea50: function(t, e, i) {},
    ed20: function(t, e, i) {},
    ede0: function(t, e, i) {
        t.exports = i.p + "img/price.f1900f4f.png"
    },
    ef27: function(t, e, i) {},
    ef71: function(t, e, i) {
        "use strict";
        var n = i("3bc9"),
            s = i.n(n);
        s.a
    },
    f058: function(t, e, i) {
        "use strict";
        var n = i("ef27"),
            s = i.n(n);
        s.a
    },
    f1ad: function(t, e, i) {
        "use strict";
        var n = i("2c90"),
            s = i.n(n);
        s.a
    },
    f455: function(t, e, i) {
        "use strict";
        var n = i("75fc"),
            s = i("ab99"),
            a = i("5572"),
            r = i.n(a);
        e["a"] = {
            extends: s["a"],
            render: function(t) {
                return t("input", {
                    ref: "input",
                    attrs: {
                        disabled: null === this.maskCore || this.disabled,
                        inputmode: this.inputmode,
                        pattern: this.pattern
                    },
                    domProps: {
                        value: this.value
                    },
                    on: {
                        keydown: this.keyDown,
                        keypress: this.keyPress,
                        keyup: this.keyUp,
                        textInput: this.textInput,
                        mouseup: this.mouseUp,
                        focusout: this.onBlur,
                        cut: this.cut,
                        copy: this.copy,
                        paste: this.paste,
                        focus: this.onFocus
                    }
                })
            },
            props: {
                value: {
                    type: String
                },
                mask: {
                    required: !0,
                    validator: function(t) {
                        return !!(t && t.length >= 1 || t instanceof Object)
                    }
                },
                placeholderChar: {
                    type: String,
                    default: "_",
                    validator: function(t) {
                        return !(!t || 1 !== t.length)
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                inputmode: String,
                pattern: String
            },
            methods: {
                initMask: function() {
                    var t = this;
                    try {
                        this.mask instanceof Object ? this.maskCore = new r.a(this.mask) : this.maskCore = new r.a({
                            pattern: this.mask,
                            value: "",
                            placeholderChar: this.placeholderChar,
                            formatCharacters: {
                                a: {
                                    validate: function(t) {
                                        return /^[A-Za-zА-Яа-я]$/.test(t)
                                    }
                                },
                                A: {
                                    validate: function(t) {
                                        return /^[A-Za-zА-Яа-я]$/.test(t)
                                    },
                                    transform: function(t) {
                                        return t.toUpperCase()
                                    }
                                },
                                "*": {
                                    validate: function(t) {
                                        return /^[\dA-Za-zА-Яа-я]$/.test(t)
                                    }
                                },
                                "#": {
                                    validate: function(t) {
                                        return /^[\dA-Za-zА-Яа-я]$/.test(t)
                                    },
                                    transform: function(t) {
                                        return t.toUpperCase()
                                    }
                                },
                                "+": {
                                    validate: function() {
                                        return !0
                                    }
                                }
                            }
                        }), Object(n["a"])(this.$refs.input.value).reduce(function(e, i) {
                            return t.maskCore.input(i)
                        }, null), this.maskCore.setSelection({
                            start: 0,
                            end: 0
                        }), "" === this.$refs.input.value ? this.$emit("input", "", "") : this.updateToCoreState()
                    } catch (e) {
                        this.$emit("input", this.$refs.input.value, "")
                    }
                },
                onFocus: function() {
                    var t = this;
                    this.$emit("focus"), setTimeout(function() {
                        t.updateToCoreState()
                    }, 10)
                },
                onBlur: function() {
                    this.isEmpty() && (this.$refs.input.value = "", this.maskCore.setSelection({
                        start: 0,
                        end: 0
                    }), this.$emit("input", "", "")), this.$emit("blur")
                }
            }
        }
    },
    fb0a: function(t, e, i) {
        "use strict";
        var n = i("7f2a"),
            s = i.n(n);
        s.a
    },
    fb21: function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "price-label"
                }, [t.oldPrice ? i("div", {
                    staticClass: "price-label__old"
                }, [t._v(t._s(t.getPriceLabel(t.oldPrice)))]) : t._e(), i("div", {
                    staticClass: "price-label__container"
                }, [t.hasTotalPrice ? [i("div", {
                    staticClass: "price-label__number"
                }, [t._v(t._s(t.getPriceLabel(t.totalPrice)))]), t.oldPrice ? i("DiscountLabel", {
                    staticClass: "price-label__discount"
                }, [t._v("-" + t._s(t.$format.number(t.discount, t.discountFormat))), i("icon", {
                    attrs: {
                        icon: ["mdi", "mdi-" + t.discountIcon],
                        size: "12",
                        fillRule: "evenodd"
                    }
                })], 1) : t._e()] : [i("div", {
                    staticClass: "price-label__number"
                }, [t._v(t._s(t.$t("Бесплатно")))])]], 2)])
            },
            s = [],
            a = i("cebc"),
            r = i("2768"),
            o = i.n(r),
            u = i("9e86"),
            l = i.n(u),
            c = i("9b02"),
            d = i.n(c),
            h = i("2f62"),
            f = i("2b3b"),
            m = i("cdae"),
            p = {
                components: {
                    DiscountLabel: f["a"],
                    icon: m["a"]
                },
                props: {
                    result: Object
                },
                computed: Object(a["a"])({}, Object(h["d"])("quiz", {
                    discount: function(t) {
                        return t.fixedDiscount
                    },
                    currency: function(t) {
                        return t.currency
                    }
                }), Object(h["c"])("quiz", ["currencySymbol", "isIncreasingPercentDiscount", "discountIcon"]), {
                    oldPrice: function() {
                        return this.discount ? this.costs : null
                    },
                    costs: function() {
                        return {
                            cost: d()(this.result, "cost", null),
                            minCost: d()(this.result, "minCost", null),
                            maxCost: d()(this.result, "maxCost", null)
                        }
                    },
                    totalPrice: function() {
                        var t = this;
                        return l()(this.costs, function(e) {
                            return o()(e) ? null : t.discount ? t.isIncreasingPercentDiscount ? e > 0 ? e - e * t.discount / 100 : 0 : e > 0 ? e - t.discount : 0 : e
                        })
                    },
                    costType: function() {
                        return d()(this.result, "costType", "exact")
                    },
                    hasTotalPrice: function() {
                        var t = this.totalPrice,
                            e = t.cost,
                            i = t.maxCost,
                            n = t.minCost;
                        return "range" === this.costType ? n > 0 || i > 0 : e > 0
                    },
                    discountFormat: function() {
                        return this.isIncreasingPercentDiscount ? "0[.]0" : "0,0[.]00"
                    }
                }),
                methods: {
                    getPriceLabel: function(t) {
                        var e = t.cost,
                            i = t.minCost,
                            n = t.maxCost;
                        if (e && (e = this.$format.currency(e, this.currencySymbol)), i < 0 && (i = 0), n < 0 && (n = 0), e) {
                            if ("exact" === this.costType) return e;
                            if ("up" === this.costType) return this.$t("до {count}", {
                                count: e
                            });
                            if ("from" === this.costType) return this.$t("от {count}", {
                                count: e
                            })
                        }
                        if ("range" === this.costType) {
                            if (i && (i = this.$format.currency(i, this.currencySymbol)), n && (n = this.$format.currency(n, this.currencySymbol)), i && n) return this.$t("от {min} до {max}", {
                                min: i,
                                max: n
                            });
                            if (i) return this.$t("от {count}", {
                                count: i
                            });
                            if (n) return this.$t("до {count}", {
                                count: n
                            })
                        }
                    }
                }
            },
            g = p,
            b = (i("e1d3"), i("2877")),
            v = Object(b["a"])(g, n, s, !1, null, null, null);
        e["a"] = v.exports
    },
    fbb3: function(t, e, i) {
        "use strict";
        var n = i("afb2"),
            s = i.n(n);
        s.a
    }
});