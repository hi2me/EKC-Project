/*!
 * ApexCharts v3.6.12
 * (c) 2018-2019 Juned Chhipa
 * Released under the MIT License.
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).ApexCharts = e());
})(this, function () {
    "use strict";
    function t(e) {
        return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(e);
    }
    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function s(t, e, s) {
        return e && i(t.prototype, e), s && i(t, s), t;
    }
    function a(t, e, i) {
        return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
    }
    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                s = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols &&
                (s = s.concat(
                    Object.getOwnPropertySymbols(i).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable;
                    })
                )),
                s.forEach(function (e) {
                    a(t, e, i[e]);
                });
        }
        return t;
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
    }
    function o(t) {
        return (o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
    }
    function l(t, e) {
        return (l =
            Object.setPrototypeOf ||
            function (t, e) {
                return (t.__proto__ = e), t;
            })(t, e);
    }
    function h(t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
            ? (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
              })(t)
            : e;
    }
    function c(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i;
                }
            })(t) ||
            (function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            })(t) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            })()
        );
    }
    var d = (function () {
            function i() {
                e(this, i);
            }
            return (
                s(
                    i,
                    [
                        {
                            key: "shadeRGBColor",
                            value: function (t, e) {
                                var i = e.split(","),
                                    s = t < 0 ? 0 : 255,
                                    a = t < 0 ? -1 * t : t,
                                    n = parseInt(i[0].slice(4)),
                                    r = parseInt(i[1]),
                                    o = parseInt(i[2]);
                                return "rgb(" + (Math.round((s - n) * a) + n) + "," + (Math.round((s - r) * a) + r) + "," + (Math.round((s - o) * a) + o) + ")";
                            },
                        },
                        {
                            key: "shadeHexColor",
                            value: function (t, e) {
                                var i = parseInt(e.slice(1), 16),
                                    s = t < 0 ? 0 : 255,
                                    a = t < 0 ? -1 * t : t,
                                    n = i >> 16,
                                    r = (i >> 8) & 255,
                                    o = 255 & i;
                                return "#" + (16777216 + 65536 * (Math.round((s - n) * a) + n) + 256 * (Math.round((s - r) * a) + r) + (Math.round((s - o) * a) + o)).toString(16).slice(1);
                            },
                        },
                        {
                            key: "shadeColor",
                            value: function (t, e) {
                                return e.length > 7 ? this.shadeRGBColor(t, e) : this.shadeHexColor(t, e);
                            },
                        },
                    ],
                    [
                        {
                            key: "bind",
                            value: function (t, e) {
                                return function () {
                                    return t.apply(e, arguments);
                                };
                            },
                        },
                        {
                            key: "isObject",
                            value: function (e) {
                                return e && "object" === t(e) && !Array.isArray(e) && null != e;
                            },
                        },
                        {
                            key: "listToArray",
                            value: function (t) {
                                var e,
                                    i = [];
                                for (e = 0; e < t.length; e++) i[e] = t[e];
                                return i;
                            },
                        },
                        {
                            key: "extend",
                            value: function (t, e) {
                                var i = this;
                                "function" != typeof Object.assign &&
                                    (Object.assign = function (t) {
                                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                                            var s = arguments[i];
                                            if (null != s) for (var a in s) s.hasOwnProperty(a) && (e[a] = s[a]);
                                        }
                                        return e;
                                    });
                                var s = Object.assign({}, t);
                                return (
                                    this.isObject(t) &&
                                        this.isObject(e) &&
                                        Object.keys(e).forEach(function (n) {
                                            i.isObject(e[n]) && n in t ? (s[n] = i.extend(t[n], e[n])) : Object.assign(s, a({}, n, e[n]));
                                        }),
                                    s
                                );
                            },
                        },
                        {
                            key: "extendArray",
                            value: function (t, e) {
                                var s = [];
                                return (
                                    t.map(function (t) {
                                        s.push(i.extend(e, t));
                                    }),
                                    (t = s)
                                );
                            },
                        },
                        {
                            key: "monthMod",
                            value: function (t) {
                                return t % 12;
                            },
                        },
                        {
                            key: "addProps",
                            value: function (t, e, i) {
                                "string" == typeof e && (e = e.split(".")), (t[e[0]] = t[e[0]] || {});
                                var s = t[e[0]];
                                return e.length > 1 ? (e.shift(), this.addProps(s, e, i)) : (t[e[0]] = i), t;
                            },
                        },
                        {
                            key: "clone",
                            value: function (e) {
                                if ("[object Array]" === Object.prototype.toString.call(e)) {
                                    for (var i = [], s = 0; s < e.length; s++) i[s] = this.clone(e[s]);
                                    return i;
                                }
                                if ("object" === t(e)) {
                                    var a = {};
                                    for (var n in e) e.hasOwnProperty(n) && (a[n] = this.clone(e[n]));
                                    return a;
                                }
                                return e;
                            },
                        },
                        {
                            key: "log10",
                            value: function (t) {
                                return Math.log(t) / Math.LN10;
                            },
                        },
                        {
                            key: "roundToBase10",
                            value: function (t) {
                                return Math.pow(10, Math.floor(Math.log10(t)));
                            },
                        },
                        {
                            key: "roundToBase",
                            value: function (t, e) {
                                return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)));
                            },
                        },
                        {
                            key: "parseNumber",
                            value: function (t) {
                                return null === t ? t : parseFloat(t);
                            },
                        },
                        {
                            key: "noExponents",
                            value: function (t) {
                                var e = String(t).split(/[eE]/);
                                if (1 == e.length) return e[0];
                                var i = "",
                                    s = t < 0 ? "-" : "",
                                    a = e[0].replace(".", ""),
                                    n = Number(e[1]) + 1;
                                if (n < 0) {
                                    for (i = s + "0."; n++; ) i += "0";
                                    return i + a.replace(/^\-/, "");
                                }
                                for (n -= a.length; n--; ) i += "0";
                                return a + i;
                            },
                        },
                        {
                            key: "getDimensions",
                            value: function (t) {
                                var e = getComputedStyle(t),
                                    i = [],
                                    s = t.clientHeight,
                                    a = t.clientWidth;
                                return (s -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)), (a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)), i.push(a), i.push(s), i;
                            },
                        },
                        {
                            key: "getBoundingClientRect",
                            value: function (t) {
                                var e = t.getBoundingClientRect();
                                return { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.width, height: e.height, x: e.x, y: e.y };
                            },
                        },
                        {
                            key: "hexToRgba",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
                                "#" !== t.substring(0, 1) && (t = "#999999");
                                var i = t.replace("#", "");
                                i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                                for (var s = 0; s < i.length; s++) i[s] = parseInt(1 === i[s].length ? i[s] + i[s] : i[s], 16);
                                return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")";
                            },
                        },
                        {
                            key: "getOpacityFromRGBA",
                            value: function (t) {
                                return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3];
                            },
                        },
                        {
                            key: "rgb2hex",
                            value: function (t) {
                                return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length
                                    ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2)
                                    : "";
                            },
                        },
                        {
                            key: "isColorHex",
                            value: function (t) {
                                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
                            },
                        },
                        {
                            key: "polarToCartesian",
                            value: function (t, e, i, s) {
                                var a = ((s - 90) * Math.PI) / 180;
                                return { x: t + i * Math.cos(a), y: e + i * Math.sin(a) };
                            },
                        },
                        {
                            key: "escapeString",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                                    i = t.toString().slice();
                                return (i = i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, e));
                            },
                        },
                        {
                            key: "negToZero",
                            value: function (t) {
                                return t < 0 ? 0 : t;
                            },
                        },
                        {
                            key: "moveIndexInArray",
                            value: function (t, e, i) {
                                if (i >= t.length) for (var s = i - t.length + 1; s--; ) t.push(void 0);
                                return t.splice(i, 0, t.splice(e, 1)[0]), t;
                            },
                        },
                        {
                            key: "extractNumber",
                            value: function (t) {
                                return parseFloat(t.replace(/[^\d\.]*/g, ""));
                            },
                        },
                        {
                            key: "randomString",
                            value: function (t) {
                                for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", s = 0; s < t; s++) e += i.charAt(Math.floor(Math.random() * i.length));
                                return e;
                            },
                        },
                        {
                            key: "findAncestor",
                            value: function (t, e) {
                                for (; (t = t.parentElement) && !t.classList.contains(e); );
                                return t;
                            },
                        },
                        {
                            key: "setELstyles",
                            value: function (t, e) {
                                for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i]);
                            },
                        },
                        {
                            key: "isNumber",
                            value: function (t) {
                                return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10));
                            },
                        },
                        {
                            key: "isFloat",
                            value: function (t) {
                                return Number(t) === t && t % 1 != 0;
                            },
                        },
                        {
                            key: "isSafari",
                            value: function () {
                                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                            },
                        },
                        {
                            key: "isFirefox",
                            value: function () {
                                return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                            },
                        },
                        {
                            key: "isIE11",
                            value: function () {
                                if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0;
                            },
                        },
                        {
                            key: "isIE",
                            value: function () {
                                var t = window.navigator.userAgent,
                                    e = t.indexOf("MSIE ");
                                if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                                if (t.indexOf("Trident/") > 0) {
                                    var i = t.indexOf("rv:");
                                    return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10);
                                }
                                var s = t.indexOf("Edge/");
                                return s > 0 && parseInt(t.substring(s + 5, t.indexOf(".", s)), 10);
                            },
                        },
                    ]
                ),
                i
            );
        })(),
        u = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "getDefaultFilter",
                        value: function (t, e) {
                            var i = this.w;
                            t.unfilter(!0),
                                new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"),
                                "none" !== i.config.states.normal.filter
                                    ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value)
                                    : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e);
                        },
                    },
                    {
                        key: "addNormalFilter",
                        value: function (t, e) {
                            var i = this.w;
                            i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e);
                        },
                    },
                    {
                        key: "addLightenFilter",
                        value: function (t, e, i) {
                            var s = this,
                                a = this.w,
                                n = i.intensity;
                            if (!d.isFirefox()) {
                                t.unfilter(!0);
                                var r = new window.SVG.Filter();
                                r.size("120%", "180%", "-5%", "-40%"),
                                    t.filter(function (t) {
                                        var i = a.config.chart.dropShadow;
                                        (r = i.enabled ? s.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: n } });
                                    }),
                                    t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse");
                            }
                        },
                    },
                    {
                        key: "addDarkenFilter",
                        value: function (t, e, i) {
                            var s = this,
                                a = this.w,
                                n = i.intensity;
                            if (!d.isFirefox()) {
                                t.unfilter(!0);
                                var r = new window.SVG.Filter();
                                r.size("120%", "180%", "-5%", "-40%"),
                                    t.filter(function (t) {
                                        var i = a.config.chart.dropShadow;
                                        (r = i.enabled ? s.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: n } });
                                    }),
                                    t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse");
                            }
                        },
                    },
                    {
                        key: "applyFilter",
                        value: function (t, e, i) {
                            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
                            switch (i) {
                                case "none":
                                    this.addNormalFilter(t, e);
                                    break;
                                case "lighten":
                                    this.addLightenFilter(t, e, { intensity: s });
                                    break;
                                case "darken":
                                    this.addDarkenFilter(t, e, { intensity: s });
                            }
                        },
                    },
                    {
                        key: "addShadow",
                        value: function (t, e, i) {
                            var s = i.blur,
                                a = i.top,
                                n = i.left,
                                r = i.color,
                                o = i.opacity,
                                l = t
                                    .flood(Array.isArray(r) ? r[e] : r, o)
                                    .composite(t.sourceAlpha, "in")
                                    .offset(n, a)
                                    .gaussianBlur(s)
                                    .merge(t.source);
                            return t.blend(t.source, l);
                        },
                    },
                    {
                        key: "dropShadow",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                s = e.top,
                                a = e.left,
                                n = e.blur,
                                r = e.color,
                                o = e.opacity,
                                l = e.noUserSpaceOnUse;
                            return (
                                t.unfilter(!0),
                                (r = Array.isArray(r) ? r[i] : r),
                                new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"),
                                t.filter(function (t) {
                                    var e = null;
                                    (e =
                                        d.isSafari() || d.isFirefox() || d.isIE()
                                            ? t.flood(r, o).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n)
                                            : t.flood(r, o).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n).merge(t.source)),
                                        t.blend(t.source, e);
                                }),
                                l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"),
                                t
                            );
                        },
                    },
                    {
                        key: "setSelectionFilter",
                        value: function (t, e, i) {
                            var s = this.w;
                            if (void 0 !== s.globals.selectedDataPoints[e] && s.globals.selectedDataPoints[e].indexOf(i) > -1) {
                                t.node.setAttribute("selected", !0);
                                var a = s.config.states.active.filter;
                                "none" !== a && this.applyFilter(t, e, a.type, a.value);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        g = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), this.setEasingFunctions();
            }
            return (
                s(t, [
                    {
                        key: "setEasingFunctions",
                        value: function () {
                            var t;
                            switch (this.w.config.chart.animations.easing) {
                                case "linear":
                                    t = "-";
                                    break;
                                case "easein":
                                    t = "<";
                                    break;
                                case "easeout":
                                    t = ">";
                                    break;
                                case "easeinout":
                                    t = "<>";
                                    break;
                                case "swing":
                                    t = function (t) {
                                        var e = 1.70158;
                                        return (t -= 1) * t * ((e + 1) * t + e) + 1;
                                    };
                                    break;
                                case "bounce":
                                    t = function (t) {
                                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                                    };
                                    break;
                                case "elastic":
                                    t = function (t) {
                                        return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) + 1;
                                    };
                                    break;
                                default:
                                    t = "<>";
                            }
                            this.w.globals.easing = t;
                        },
                    },
                    {
                        key: "animateLine",
                        value: function (t, e, i, s) {
                            t.attr(e).animate(s).attr(i);
                        },
                    },
                    {
                        key: "animateCircleRadius",
                        value: function (t, e, i, s, a) {
                            e || (e = 0), t.attr({ r: e }).animate(s, a).attr({ r: i });
                        },
                    },
                    {
                        key: "animateCircle",
                        value: function (t, e, i, s, a) {
                            t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(s, a).attr({ r: i.r, cx: i.cx, cy: i.cy });
                        },
                    },
                    {
                        key: "animateRect",
                        value: function (t, e, i, s, a) {
                            t.attr(e)
                                .animate(s)
                                .attr(i)
                                .afterAll(function () {
                                    a();
                                });
                        },
                    },
                    {
                        key: "animatePathsGradually",
                        value: function (t) {
                            var e = t.el,
                                i = t.j,
                                s = t.pathFrom,
                                a = t.pathTo,
                                n = t.speed,
                                r = t.delay,
                                o = t.strokeWidth,
                                l = this.w,
                                h = 0;
                            l.config.chart.animations.animateGradually.enabled && (h = l.config.chart.animations.animateGradually.delay),
                                l.config.chart.animations.dynamicAnimation.enabled && l.globals.dataChanged && (h = 0),
                                this.morphSVG(e, i, s, a, n, o, r * h);
                        },
                    },
                    {
                        key: "showDelayedElements",
                        value: function () {
                            this.w.globals.delayedElements.forEach(function (t) {
                                t.el.classList.remove("hidden");
                            });
                        },
                    },
                    {
                        key: "morphSVG",
                        value: function (t, e, i, s, a, n, r) {
                            var o = this,
                                l = this.w;
                            i || (i = t.attr("pathFrom")),
                                s || (s = t.attr("pathTo")),
                                (!i || i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && ((i = "M 0 ".concat(l.globals.gridHeight)), (a = 1)),
                                (s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && ((s = "M 0 ".concat(l.globals.gridHeight)), (a = 1)),
                                l.globals.shouldAnimate || (a = 1),
                                t
                                    .plot(i)
                                    .animate(1, l.globals.easing, r)
                                    .plot(i)
                                    .animate(a, l.globals.easing, r)
                                    .plot(s)
                                    .afterAll(function () {
                                        d.isNumber(e)
                                            ? e === l.globals.series[l.globals.maxValsInArrayIndex].length - 2 && l.globals.shouldAnimate && (l.globals.animationEnded = !0)
                                            : l.globals.shouldAnimate && ((l.globals.animationEnded = !0), "function" == typeof l.config.chart.events.animationEnd && l.config.chart.events.animationEnd(o.ctx, l)),
                                            o.showDelayedElements();
                                    });
                        },
                    },
                ]),
                t
            );
        })(),
        f = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(
                    t,
                    [
                        {
                            key: "drawLine",
                            value: function (t, e, i, s) {
                                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                                    n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                                    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                                return this.w.globals.dom.Paper.line().attr({ x1: t, y1: e, x2: i, y2: s, stroke: a, "stroke-dasharray": n, "stroke-width": r });
                            },
                        },
                        {
                            key: "drawRect",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                    n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                                    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                                    o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                                    l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                                    h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                                    c = this.w.globals.dom.Paper.rect();
                                return c.attr({ x: t, y: e, width: i > 0 ? i : 0, height: s > 0 ? s : 0, rx: a, ry: a, fill: n, opacity: r, "stroke-width": null !== o ? o : 0, stroke: null !== l ? l : "none", "stroke-dasharray": h }), c;
                            },
                        },
                        {
                            key: "drawPolygon",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
                                return this.w.globals.dom.Paper.polygon(t).attr({ fill: i, stroke: e });
                            },
                        },
                        {
                            key: "drawCircle",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    i = this.w.globals.dom.Paper.circle(2 * t);
                                return null !== e && i.attr(e), i;
                            },
                        },
                        {
                            key: "drawPath",
                            value: function (t) {
                                var e = t.d,
                                    i = void 0 === e ? "" : e,
                                    s = t.stroke,
                                    a = void 0 === s ? "#a8a8a8" : s,
                                    n = t.strokeWidth,
                                    r = void 0 === n ? 1 : n,
                                    o = t.fill,
                                    l = t.fillOpacity,
                                    h = void 0 === l ? 1 : l,
                                    c = t.strokeOpacity,
                                    d = void 0 === c ? 1 : c,
                                    u = t.classes,
                                    g = t.strokeLinecap,
                                    f = void 0 === g ? null : g,
                                    p = t.strokeDashArray,
                                    x = void 0 === p ? 0 : p,
                                    b = this.w;
                                return (
                                    null === f && (f = b.config.stroke.lineCap),
                                    (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(b.globals.gridHeight)),
                                    b.globals.dom.Paper.path(i).attr({ fill: o, "fill-opacity": h, stroke: a, "stroke-opacity": d, "stroke-linecap": f, "stroke-width": r, "stroke-dasharray": x, class: u })
                                );
                            },
                        },
                        {
                            key: "group",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    e = this.w.globals.dom.Paper.group();
                                return null !== t && e.attr(t), e;
                            },
                        },
                        {
                            key: "move",
                            value: function (t, e) {
                                var i = ["M", t, e].join(" ");
                                return i;
                            },
                        },
                        {
                            key: "line",
                            value: function (t, e) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    s = null;
                                return null === i ? (s = ["L", t, e].join(" ")) : "H" === i ? (s = ["H", t].join(" ")) : "V" === i && (s = ["V", e].join(" ")), s;
                            },
                        },
                        {
                            key: "curve",
                            value: function (t, e, i, s, a, n) {
                                var r = ["C", t, e, i, s, a, n].join(" ");
                                return r;
                            },
                        },
                        {
                            key: "quadraticCurve",
                            value: function (t, e, i, s) {
                                return ["Q", t, e, i, s].join(" ");
                            },
                        },
                        {
                            key: "arc",
                            value: function (t, e, i, s, a, n, r) {
                                var o = "A";
                                arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (o = "a");
                                var l = [o, t, e, i, s, a, n, r].join(" ");
                                return l;
                            },
                        },
                        {
                            key: "renderPaths",
                            value: function (t) {
                                var e,
                                    i = t.i,
                                    s = t.j,
                                    a = t.realIndex,
                                    r = t.pathFrom,
                                    o = t.pathTo,
                                    l = t.stroke,
                                    h = t.strokeWidth,
                                    c = t.strokeLinecap,
                                    d = t.fill,
                                    f = t.animationDelay,
                                    p = t.initialSpeed,
                                    x = t.dataChangeSpeed,
                                    b = t.className,
                                    m = t.id,
                                    v = t.shouldClipToGrid,
                                    y = void 0 === v || v,
                                    w = t.bindEventsOnPaths,
                                    k = void 0 === w || w,
                                    A = t.drawShadow,
                                    S = void 0 === A || A,
                                    C = this.w,
                                    L = new u(this.ctx),
                                    z = new g(this.ctx),
                                    P = this.w.config.chart.animations.enabled,
                                    M = P && this.w.config.chart.animations.dynamicAnimation.enabled,
                                    E = !!((P && !C.globals.resized) || (M && C.globals.dataChanged && C.globals.shouldAnimate));
                                E ? (e = r) : ((e = o), (this.w.globals.animationEnded = !0));
                                var T = C.config.stroke.dashArray,
                                    X = 0;
                                X = Array.isArray(T) ? T[a] : C.config.stroke.dashArray;
                                var I = this.drawPath({ d: e, stroke: l, strokeWidth: h, fill: d, fillOpacity: 1, classes: b, strokeLinecap: c, strokeDashArray: X });
                                if ((I.attr("id", "".concat(m, "-").concat(i)), I.attr("index", a), y && I.attr({ "clip-path": "url(#gridRectMask".concat(C.globals.cuid, ")") }), "none" !== C.config.states.normal.filter.type))
                                    L.getDefaultFilter(I, a);
                                else if (C.config.chart.dropShadow.enabled && S && (!C.config.chart.dropShadow.enabledSeries || (C.config.chart.dropShadow.enabledSeries && -1 !== C.config.chart.dropShadow.enabledSeries.indexOf(a)))) {
                                    var Y = C.config.chart.dropShadow;
                                    L.dropShadow(I, Y, a);
                                }
                                k &&
                                    (I.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, I)),
                                    I.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, I)),
                                    I.node.addEventListener("mousedown", this.pathMouseDown.bind(this, I))),
                                    I.attr({ pathTo: o, pathFrom: r });
                                var F = { el: I, j: s, pathFrom: r, pathTo: o, strokeWidth: h };
                                return (
                                    !P || C.globals.resized || C.globals.dataChanged ? (!C.globals.resized && C.globals.dataChanged) || z.showDelayedElements() : z.animatePathsGradually(n({}, F, { speed: p, delay: f })),
                                    C.globals.dataChanged && M && E && z.animatePathsGradually(n({}, F, { speed: x })),
                                    I
                                );
                            },
                        },
                        {
                            key: "drawPattern",
                            value: function (t, e, i) {
                                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                                return this.w.globals.dom.Paper.pattern(e, i, function (n) {
                                    "horizontalLines" === t
                                        ? n.line(0, 0, i, 0).stroke({ color: s, width: a + 1 })
                                        : "verticalLines" === t
                                        ? n.line(0, 0, 0, e).stroke({ color: s, width: a + 1 })
                                        : "slantedLines" === t
                                        ? n.line(0, 0, e, i).stroke({ color: s, width: a })
                                        : "squares" === t
                                        ? n.rect(e, i).fill("none").stroke({ color: s, width: a })
                                        : "circles" === t && n.circle(e).fill("none").stroke({ color: s, width: a });
                                });
                            },
                        },
                        {
                            key: "drawGradient",
                            value: function (t, e, i, s, a) {
                                var n,
                                    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                                    l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                                    h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
                                    c = this.w;
                                (e = d.hexToRgba(e, s)), (i = d.hexToRgba(i, a));
                                var u = 0,
                                    g = 1,
                                    f = 1,
                                    p = null;
                                null !== o && ((u = void 0 !== o[0] ? o[0] / 100 : 0), (g = void 0 !== o[1] ? o[1] / 100 : 1), (f = void 0 !== o[2] ? o[2] / 100 : 1), (p = void 0 !== o[3] ? o[3] / 100 : null));
                                var x = !("donut" !== c.config.chart.type && "pie" !== c.config.chart.type && "bubble" !== c.config.chart.type);
                                if (
                                    ((n =
                                        null === l || 0 === l.length
                                            ? c.globals.dom.Paper.gradient(x ? "radial" : "linear", function (t) {
                                                  t.at(u, e, s), t.at(g, i, a), t.at(f, i, a), null !== p && t.at(p, e, s);
                                              })
                                            : c.globals.dom.Paper.gradient(x ? "radial" : "linear", function (t) {
                                                  (Array.isArray(l[h]) ? l[h] : l).forEach(function (e) {
                                                      t.at(e.offset / 100, e.color, e.opacity);
                                                  });
                                              })),
                                    x)
                                ) {
                                    var b = c.globals.gridWidth / 2,
                                        m = c.globals.gridHeight / 2;
                                    "bubble" !== c.config.chart.type ? n.attr({ gradientUnits: "userSpaceOnUse", cx: b, cy: m, r: r }) : n.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
                                } else "vertical" === t ? n.from(0, 0).to(0, 1) : "diagonal" === t ? n.from(0, 0).to(1, 1) : "horizontal" === t ? n.from(0, 1).to(1, 1) : "diagonal2" === t && n.from(0, 1).to(2, 2);
                                return n;
                            },
                        },
                        {
                            key: "drawText",
                            value: function (t) {
                                var e,
                                    i = this.w,
                                    s = t.x,
                                    a = t.y,
                                    n = t.text,
                                    r = t.textAnchor,
                                    o = t.fontSize,
                                    l = t.fontFamily,
                                    h = t.foreColor,
                                    c = t.opacity;
                                return (
                                    void 0 === n && (n = ""),
                                    r || (r = "start"),
                                    h || (h = i.config.chart.foreColor),
                                    (l = l || i.config.chart.fontFamily),
                                    (e = Array.isArray(n)
                                        ? i.globals.dom.Paper.text(function (t) {
                                              for (var e = 0; e < n.length; e++) t.tspan(n[e]);
                                          })
                                        : i.globals.dom.Paper.plain(n)).attr({ x: s, y: a, "text-anchor": r, "dominant-baseline": "auto", "font-size": o, "font-family": l, fill: h, class: (t.cssClass, t.cssClass) }),
                                    (e.node.style.fontFamily = l),
                                    (e.node.style.opacity = c),
                                    e
                                );
                            },
                        },
                        {
                            key: "addTspan",
                            value: function (t, e, i) {
                                var s = t.tspan(e);
                                i || (i = this.w.config.chart.fontFamily), (s.node.style.fontFamily = i);
                            },
                        },
                        {
                            key: "drawMarker",
                            value: function (t, e, i) {
                                t = t || 0;
                                var s = i.pSize || 0,
                                    a = null;
                                if ("square" === i.shape) {
                                    var n = void 0 === i.pRadius ? s / 2 : i.pRadius;
                                    null === e && ((s = 0), (n = 0));
                                    var r = 1.2 * s + n,
                                        o = this.drawRect(r, r, r, r, n);
                                    o.attr({
                                        x: t - r / 2,
                                        y: e - r / 2,
                                        cx: t,
                                        cy: e,
                                        class: i.class ? i.class : "",
                                        fill: i.pointFillColor,
                                        "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                                        stroke: i.pointStrokeColor,
                                        "stroke-width": i.pWidth ? i.pWidth : 0,
                                        "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1,
                                    }),
                                        (a = o);
                                } else
                                    "circle" === i.shape &&
                                        (d.isNumber(e) || ((s = 0), (e = 0)),
                                        (a = this.drawCircle(s, {
                                            cx: t,
                                            cy: e,
                                            class: i.class ? i.class : "",
                                            stroke: i.pointStrokeColor,
                                            fill: i.pointFillColor,
                                            "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                                            "stroke-width": i.pWidth ? i.pWidth : 0,
                                            "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1,
                                        })));
                                return a;
                            },
                        },
                        {
                            key: "pathMouseEnter",
                            value: function (t, e) {
                                var i = this.w,
                                    s = new u(this.ctx),
                                    a = parseInt(t.node.getAttribute("index")),
                                    n = parseInt(t.node.getAttribute("j"));
                                if (
                                    ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: a, dataPointIndex: n, w: i }),
                                    this.ctx.fireEvent("dataPointMouseEnter", [e, this.ctx, { seriesIndex: a, dataPointIndex: n, w: i }]),
                                    ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) &&
                                        "none" !== i.config.states.hover.filter.type &&
                                        "none" !== i.config.states.active.filter.type &&
                                        !i.globals.isTouchDevice)
                                ) {
                                    var r = i.config.states.hover.filter;
                                    s.applyFilter(t, a, r.type, r.value);
                                }
                            },
                        },
                        {
                            key: "pathMouseLeave",
                            value: function (t, e) {
                                var i = this.w,
                                    s = new u(this.ctx),
                                    a = parseInt(t.node.getAttribute("index")),
                                    n = parseInt(t.node.getAttribute("j"));
                                "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: a, dataPointIndex: n, w: i }),
                                    this.ctx.fireEvent("dataPointMouseLeave", [e, this.ctx, { seriesIndex: a, dataPointIndex: n, w: i }]),
                                    ("none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected")) || ("none" !== i.config.states.hover.filter.type && s.getDefaultFilter(t, a));
                            },
                        },
                        {
                            key: "pathMouseDown",
                            value: function (t, e) {
                                var i = this.w,
                                    s = new u(this.ctx),
                                    a = parseInt(t.node.getAttribute("index")),
                                    n = parseInt(t.node.getAttribute("j")),
                                    r = "false";
                                if ("true" === t.node.getAttribute("selected")) {
                                    if ((t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[a].indexOf(n) > -1)) {
                                        var o = i.globals.selectedDataPoints[a].indexOf(n);
                                        i.globals.selectedDataPoints[a].splice(o, 1);
                                    }
                                } else {
                                    if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
                                        i.globals.selectedDataPoints = [];
                                        var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                            h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members;
                                        l.forEach(function (t) {
                                            t.node.setAttribute("selected", "false"), s.getDefaultFilter(t, a);
                                        }),
                                            h.forEach(function (t) {
                                                t.node.setAttribute("selected", "false"), s.getDefaultFilter(t, a);
                                            });
                                    }
                                    t.node.setAttribute("selected", "true"), (r = "true"), void 0 === i.globals.selectedDataPoints[a] && (i.globals.selectedDataPoints[a] = []), i.globals.selectedDataPoints[a].push(n);
                                }
                                if ("true" === r) {
                                    var c = i.config.states.active.filter;
                                    "none" !== c && s.applyFilter(t, a, c.type, c.value);
                                } else "none" !== i.config.states.active.filter.type && s.getDefaultFilter(t, a);
                                "function" == typeof i.config.chart.events.dataPointSelection &&
                                    i.config.chart.events.dataPointSelection(e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: n, w: i }),
                                    this.ctx.fireEvent("dataPointSelection", [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: n, w: i }]);
                            },
                        },
                        {
                            key: "rotateAroundCenter",
                            value: function (t) {
                                var e = t.getBBox();
                                return { x: e.x + e.width / 2, y: e.y + e.height / 2 };
                            },
                        },
                        {
                            key: "getTextRects",
                            value: function (t, e, i, s) {
                                var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                    n = this.w,
                                    r = this.drawText({ x: -200, y: -200, text: t, textAnchor: "start", fontSize: e, fontFamily: i, foreColor: "#fff", opacity: 0 });
                                s && r.attr("transform", s), n.globals.dom.Paper.add(r);
                                var o = r.bbox();
                                return a || (o = r.node.getBoundingClientRect()), r.remove(), { width: o.width, height: o.height };
                            },
                        },
                        {
                            key: "placeTextWithEllipsis",
                            value: function (t, e, i) {
                                if (((t.textContent = e), e.length > 0 && t.getSubStringLength(0, e.length) >= i)) {
                                    for (var s = e.length - 3; s > 0; s -= 3) if (t.getSubStringLength(0, s) <= i) return void (t.textContent = e.substring(0, s) + "...");
                                    t.textContent = "...";
                                }
                            },
                        },
                    ],
                    [
                        {
                            key: "setAttrs",
                            value: function (t, e) {
                                for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
                            },
                        },
                    ]
                ),
                t
            );
        })();
    var p = {
            name: "en",
            options: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" },
            },
        },
        x = (function () {
            function t() {
                e(this, t),
                    (this.yAxis = {
                        show: !0,
                        showAlways: !1,
                        seriesName: void 0,
                        opposite: !1,
                        reversed: !1,
                        logarithmic: !1,
                        tickAmount: void 0,
                        forceNiceScale: !1,
                        max: void 0,
                        min: void 0,
                        floating: !1,
                        decimalsInFloat: void 0,
                        labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontFamily: void 0, cssClass: "" }, formatter: void 0 },
                        axisBorder: { show: !1, color: "#78909C", offsetX: 0, offsetY: 0 },
                        axisTicks: { show: !1, color: "#78909C", width: 6, offsetX: 0, offsetY: 0 },
                        title: { text: void 0, rotate: 90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontFamily: void 0, cssClass: "" } },
                        tooltip: { enabled: !1, offsetX: 0 },
                        crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } },
                    }),
                    (this.xAxisAnnotation = {
                        x: 0,
                        x2: null,
                        strokeDashArray: 1,
                        fillColor: "#c2c2c2",
                        borderColor: "#c2c2c2",
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                            borderColor: "#c2c2c2",
                            borderWidth: 1,
                            text: void 0,
                            textAnchor: "middle",
                            orientation: "vertical",
                            position: "top",
                            offsetX: 0,
                            offsetY: 0,
                            style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } },
                        },
                    }),
                    (this.yAxisAnnotation = {
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        fillColor: "#c2c2c2",
                        borderColor: "#c2c2c2",
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        yAxisIndex: 0,
                        label: {
                            borderColor: "#c2c2c2",
                            borderWidth: 1,
                            text: void 0,
                            textAnchor: "end",
                            position: "right",
                            offsetX: 0,
                            offsetY: -3,
                            style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, cssClass: "", padding: { left: 5, right: 5, top: 0, bottom: 2 } },
                        },
                    }),
                    (this.pointAnnotation = {
                        x: 0,
                        y: null,
                        yAxisIndex: 0,
                        seriesIndex: 0,
                        marker: { size: 0, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" },
                        label: {
                            borderColor: "#c2c2c2",
                            borderWidth: 1,
                            text: void 0,
                            textAnchor: "middle",
                            offsetX: 0,
                            offsetY: -15,
                            style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, cssClass: "", padding: { left: 5, right: 5, top: 0, bottom: 2 } },
                        },
                        customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 },
                    });
            }
            return (
                s(t, [
                    {
                        key: "init",
                        value: function () {
                            return {
                                annotations: { position: "front", yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation] },
                                chart: {
                                    animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } },
                                    background: "transparent",
                                    locales: [p],
                                    defaultLocale: "en",
                                    dropShadow: { enabled: !1, enabledSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 },
                                    events: {
                                        animationEnd: void 0,
                                        beforeMount: void 0,
                                        mounted: void 0,
                                        updated: void 0,
                                        click: void 0,
                                        legendClick: void 0,
                                        markerClick: void 0,
                                        selection: void 0,
                                        dataPointSelection: void 0,
                                        dataPointMouseEnter: void 0,
                                        dataPointMouseLeave: void 0,
                                        beforeZoom: void 0,
                                        zoomed: void 0,
                                        scrolled: void 0,
                                    },
                                    foreColor: "#373d3f",
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    height: "auto",
                                    parentHeightOffset: 15,
                                    id: void 0,
                                    group: void 0,
                                    offsetX: 0,
                                    offsetY: 0,
                                    selection: {
                                        enabled: !1,
                                        type: "x",
                                        fill: { color: "#24292e", opacity: 0.1 },
                                        stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 },
                                        xaxis: { min: void 0, max: void 0 },
                                        yaxis: { min: void 0, max: void 0 },
                                    },
                                    sparkline: { enabled: !1 },
                                    brush: { enabled: !1, autoScaleYaxis: !1, target: void 0 },
                                    stacked: !1,
                                    stackType: "normal",
                                    toolbar: { show: !0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, autoSelected: "zoom" },
                                    type: "line",
                                    width: "100%",
                                    zoom: { enabled: !0, type: "x", zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } },
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: !1,
                                        columnWidth: "70%",
                                        barHeight: "70%",
                                        distributed: !1,
                                        endingShape: "flat",
                                        colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1 },
                                        dataLabels: { maxItems: 100, hideOverflowingLabels: !0, position: "top" },
                                    },
                                    candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } },
                                    heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !0, distributed: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } },
                                    radialBar: {
                                        size: void 0,
                                        inverseOrder: !1,
                                        startAngle: 0,
                                        endAngle: 360,
                                        offsetX: 0,
                                        offsetY: 0,
                                        hollow: {
                                            margin: 5,
                                            size: "50%",
                                            background: "transparent",
                                            image: void 0,
                                            imageWidth: 150,
                                            imageHeight: 150,
                                            imageOffsetX: 0,
                                            imageOffsetY: 0,
                                            imageClipped: !0,
                                            position: "front",
                                            dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 },
                                        },
                                        track: {
                                            show: !0,
                                            startAngle: void 0,
                                            endAngle: void 0,
                                            background: "#f2f2f2",
                                            strokeWidth: "97%",
                                            opacity: 1,
                                            margin: 5,
                                            dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 },
                                        },
                                        dataLabels: {
                                            show: !0,
                                            name: { show: !0, fontSize: "16px", fontFamily: void 0, color: void 0, offsetY: 0 },
                                            value: {
                                                show: !0,
                                                fontSize: "14px",
                                                fontFamily: void 0,
                                                color: void 0,
                                                offsetY: 16,
                                                formatter: function (t) {
                                                    return t + "%";
                                                },
                                            },
                                            total: {
                                                show: !1,
                                                label: "Total",
                                                color: void 0,
                                                formatter: function (t) {
                                                    return (
                                                        t.globals.seriesTotals.reduce(function (t, e) {
                                                            return t + e;
                                                        }, 0) /
                                                            t.globals.series.length +
                                                        "%"
                                                    );
                                                },
                                            },
                                        },
                                    },
                                    rangeBar: {},
                                    pie: {
                                        size: void 0,
                                        customScale: 1,
                                        offsetX: 0,
                                        offsetY: 0,
                                        expandOnClick: !0,
                                        dataLabels: { offset: 0, minAngleToShowLabel: 10 },
                                        donut: {
                                            size: "65%",
                                            background: "transparent",
                                            labels: {
                                                show: !1,
                                                name: { show: !0, fontSize: "16px", fontFamily: void 0, color: void 0, offsetY: -10 },
                                                value: {
                                                    show: !0,
                                                    fontSize: "20px",
                                                    fontFamily: void 0,
                                                    color: void 0,
                                                    offsetY: 10,
                                                    formatter: function (t) {
                                                        return t;
                                                    },
                                                },
                                                total: {
                                                    show: !1,
                                                    label: "Total",
                                                    color: void 0,
                                                    formatter: function (t) {
                                                        return t.globals.seriesTotals.reduce(function (t, e) {
                                                            return t + e;
                                                        }, 0);
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } },
                                },
                                colors: void 0,
                                dataLabels: {
                                    enabled: !0,
                                    enabledOnSeries: void 0,
                                    formatter: function (t) {
                                        return t;
                                    },
                                    textAnchor: "middle",
                                    offsetX: 0,
                                    offsetY: 0,
                                    style: { fontSize: "12px", fontFamily: void 0, colors: void 0 },
                                    dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 },
                                },
                                fill: {
                                    type: "solid",
                                    colors: void 0,
                                    opacity: 0.85,
                                    gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] },
                                    image: { src: [], width: void 0, height: void 0 },
                                    pattern: { style: "sqaures", width: 6, height: 6, strokeWidth: 2 },
                                },
                                grid: {
                                    show: !0,
                                    borderColor: "#e0e0e0",
                                    strokeDashArray: 0,
                                    position: "back",
                                    xaxis: { lines: { show: !1, animate: !1 } },
                                    yaxis: { lines: { show: !0, animate: !1 } },
                                    row: { colors: void 0, opacity: 0.5 },
                                    column: { colors: void 0, opacity: 0.5 },
                                    padding: { top: 0, right: 10, bottom: 0, left: 12 },
                                },
                                labels: [],
                                legend: {
                                    show: !0,
                                    showForSingleSeries: !1,
                                    showForNullSeries: !0,
                                    showForZeroSeries: !0,
                                    floating: !1,
                                    position: "bottom",
                                    horizontalAlign: "center",
                                    fontSize: "12px",
                                    fontFamily: void 0,
                                    width: void 0,
                                    height: void 0,
                                    formatter: void 0,
                                    offsetX: -20,
                                    offsetY: 0,
                                    labels: { colors: void 0, useSeriesColors: !1 },
                                    markers: { width: 12, height: 12, strokeWidth: 0, strokeColor: "#fff", radius: 12, customHTML: void 0, offsetX: 0, offsetY: 0, onClick: void 0 },
                                    itemMargin: { horizontal: 0, vertical: 5 },
                                    onItemClick: { toggleDataSeries: !0 },
                                    onItemHover: { highlightDataSeries: !0 },
                                },
                                markers: {
                                    discrete: [],
                                    size: 0,
                                    colors: void 0,
                                    strokeColors: "#fff",
                                    strokeWidth: 2,
                                    strokeOpacity: 0.9,
                                    fillOpacity: 1,
                                    shape: "circle",
                                    radius: 2,
                                    offsetX: 0,
                                    offsetY: 0,
                                    hover: { size: void 0, sizeOffset: 3 },
                                },
                                noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } },
                                responsive: [],
                                series: void 0,
                                states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.15 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: 0.65 } } },
                                title: { text: void 0, align: "left", margin: 10, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontFamily: void 0, color: void 0 } },
                                subtitle: { text: void 0, align: "left", margin: 10, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontFamily: void 0, color: void 0 } },
                                stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0 },
                                tooltip: {
                                    enabled: !0,
                                    enabledOnSeries: void 0,
                                    shared: !0,
                                    followCursor: !1,
                                    intersect: !1,
                                    inverseOrder: !1,
                                    custom: void 0,
                                    fillSeriesColor: !1,
                                    theme: "light",
                                    style: { fontSize: "12px", fontFamily: void 0 },
                                    onDatasetHover: { highlightDataSeries: !1 },
                                    x: { show: !0, format: "dd MMM", formatter: void 0 },
                                    y: {
                                        formatter: void 0,
                                        title: {
                                            formatter: function (t) {
                                                return t;
                                            },
                                        },
                                    },
                                    z: { formatter: void 0, title: "Size: " },
                                    marker: { show: !0 },
                                    items: { display: "flex" },
                                    fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 },
                                },
                                xaxis: {
                                    type: "category",
                                    categories: [],
                                    offsetX: 0,
                                    offsetY: 0,
                                    labels: {
                                        show: !0,
                                        rotate: -45,
                                        rotateAlways: !1,
                                        hideOverlappingLabels: !0,
                                        trim: !0,
                                        minHeight: void 0,
                                        maxHeight: 120,
                                        showDuplicates: !0,
                                        style: { colors: [], fontSize: "12px", fontFamily: void 0, cssClass: "" },
                                        offsetX: 0,
                                        offsetY: 0,
                                        format: void 0,
                                        formatter: void 0,
                                        datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss" },
                                    },
                                    axisBorder: { show: !0, color: "#78909C", width: "100%", height: 1, offsetX: 0, offsetY: 0 },
                                    axisTicks: { show: !0, color: "#78909C", height: 6, offsetX: 0, offsetY: 0 },
                                    tickAmount: void 0,
                                    tickPlacement: "on",
                                    min: void 0,
                                    max: void 0,
                                    range: void 0,
                                    floating: !1,
                                    position: "bottom",
                                    title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontFamily: void 0, cssClass: "" } },
                                    crosshairs: {
                                        show: !0,
                                        width: 1,
                                        position: "back",
                                        opacity: 0.9,
                                        stroke: { color: "#b6b6b6", width: 1, dashArray: 3 },
                                        fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } },
                                        dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 },
                                    },
                                    tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } },
                                },
                                yaxis: this.yAxis,
                                theme: { mode: "light", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } },
                            };
                        },
                    },
                ]),
                t
            );
        })(),
        b = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.graphics = new f(this.ctx)), this.w.globals.isBarHorizontal && (this.invertAxis = !0), (this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints);
            }
            return (
                s(t, [
                    {
                        key: "drawAnnotations",
                        value: function () {
                            var t = this.w;
                            if (t.globals.axisCharts) {
                                for (
                                    var e = this.drawYAxisAnnotations(), i = this.drawXAxisAnnotations(), s = this.drawPointAnnotations(), a = t.config.chart.animations.enabled, n = [e, i, s], r = [i.node, e.node, s.node], o = 0;
                                    o < 3;
                                    o++
                                )
                                    t.globals.dom.elGraphical.add(n[o]), !a || t.globals.resized || t.globals.dataChanged || r[o].classList.add("hidden"), t.globals.delayedElements.push({ el: r[o], index: 0 });
                                this.annotationsBackground();
                            }
                        },
                    },
                    {
                        key: "addXaxisAnnotation",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = this.invertAxis ? s.globals.minY : s.globals.minX,
                                n = this.invertAxis ? s.globals.yRange[0] : s.globals.xRange,
                                r = (t.x - a) / (n / s.globals.gridWidth),
                                o = t.label.text;
                            if ("category" === s.config.xaxis.type || s.config.xaxis.convertedCatToNumeric) {
                                var l = s.globals.labels.indexOf(t.x),
                                    h = s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (l + 1) + ")");
                                h && (r = parseFloat(h.getAttribute("x")));
                            }
                            var c = t.strokeDashArray;
                            if (!(r < 0 || r > s.globals.gridWidth)) {
                                if (null === t.x2) {
                                    var d = this.graphics.drawLine(r + t.offsetX, 0 + t.offsetY, r + t.offsetX, s.globals.gridHeight + t.offsetY, t.borderColor, c);
                                    e.appendChild(d.node);
                                } else {
                                    var u = (t.x2 - a) / (n / s.globals.gridWidth);
                                    if (u < r) {
                                        var g = r;
                                        (r = u), (u = g);
                                    }
                                    if (o) {
                                        var f = this.graphics.drawRect(r + t.offsetX, 0 + t.offsetY, u - r, s.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, c);
                                        e.appendChild(f.node);
                                    }
                                }
                                var p = "top" === t.label.position ? -3 : s.globals.gridHeight,
                                    x = this.graphics.drawText({
                                        x: r + t.label.offsetX,
                                        y: p + t.label.offsetY,
                                        text: o,
                                        textAnchor: t.label.textAnchor,
                                        fontSize: t.label.style.fontSize,
                                        fontFamily: t.label.style.fontFamily,
                                        foreColor: t.label.style.color,
                                        cssClass: "apexcharts-xaxis-annotation-label " + t.label.style.cssClass,
                                    });
                                x.attr({ rel: i }), e.appendChild(x.node), this.setOrientations(t, i);
                            }
                        },
                    },
                    {
                        key: "drawXAxisAnnotations",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = this.graphics.group({ class: "apexcharts-xaxis-annotations" });
                            return (
                                e.config.annotations.xaxis.map(function (e, s) {
                                    t.addXaxisAnnotation(e, i.node, s);
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "addYaxisAnnotation",
                        value: function (t, e, i) {
                            var s,
                                a,
                                n = this.w,
                                r = t.strokeDashArray;
                            if (this.invertAxis) {
                                var o = n.globals.labels.indexOf(t.y),
                                    l = n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (o + 1) + ")");
                                l && (s = parseFloat(l.getAttribute("y")));
                            } else
                                (s = n.globals.gridHeight - (t.y - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight)),
                                    n.config.yaxis[t.yAxisIndex] && n.config.yaxis[t.yAxisIndex].reversed && (s = (t.y - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight));
                            var h = t.label.text;
                            if (null === t.y2) {
                                var c = this.graphics.drawLine(0 + t.offsetX, s + t.offsetY, n.globals.gridWidth + t.offsetX, s + t.offsetY, t.borderColor, r);
                                e.appendChild(c.node);
                            } else {
                                if (this.invertAxis) {
                                    var d = n.globals.labels.indexOf(t.y2),
                                        u = n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (d + 1) + ")");
                                    u && (a = parseFloat(u.getAttribute("y")));
                                } else
                                    (a = n.globals.gridHeight - (t.y2 - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight)),
                                        n.config.yaxis[t.yAxisIndex] && n.config.yaxis[t.yAxisIndex].reversed && (a = (t.y2 - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight));
                                if (a > s) {
                                    var g = s;
                                    (s = a), (a = g);
                                }
                                if (h) {
                                    var f = this.graphics.drawRect(0 + t.offsetX, a + t.offsetY, n.globals.gridWidth + t.offsetX, s - a, 0, t.fillColor, t.opacity, 1, t.borderColor, r);
                                    e.appendChild(f.node);
                                }
                            }
                            var p = "right" === t.label.position ? n.globals.gridWidth : 0,
                                x = this.graphics.drawText({
                                    x: p + t.label.offsetX,
                                    y: (a || s) + t.label.offsetY - 3,
                                    text: h,
                                    textAnchor: t.label.textAnchor,
                                    fontSize: t.label.style.fontSize,
                                    fontFamily: t.label.style.fontFamily,
                                    foreColor: t.label.style.color,
                                    cssClass: "apexcharts-yaxis-annotation-label " + t.label.style.cssClass,
                                });
                            x.attr({ rel: i }), e.appendChild(x.node);
                        },
                    },
                    {
                        key: "drawYAxisAnnotations",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = this.graphics.group({ class: "apexcharts-yaxis-annotations" });
                            return (
                                e.config.annotations.yaxis.map(function (e, s) {
                                    t.addYaxisAnnotation(e, i.node, s);
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "clearAnnotations",
                        value: function (t) {
                            var e = t.w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                            (e = d.listToArray(e)).forEach(function (t) {
                                for (; t.firstChild; ) t.removeChild(t.firstChild);
                            });
                        },
                    },
                    {
                        key: "addPointAnnotation",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = 0,
                                n = 0,
                                r = 0;
                            if ((this.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts."), "string" == typeof t.x)) {
                                var o = s.globals.labels.indexOf(t.x),
                                    l = s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (o + 1) + ")");
                                a = parseFloat(l.getAttribute("x"));
                                var h = t.y;
                                null === t.y && (h = s.globals.series[t.seriesIndex][o]),
                                    (n = s.globals.gridHeight - (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size),
                                    (r = s.globals.gridHeight - (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight)),
                                    s.config.yaxis[t.yAxisIndex] &&
                                        s.config.yaxis[t.yAxisIndex].reversed &&
                                        ((n = (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) + parseInt(t.label.style.fontSize) + t.marker.size),
                                        (r = (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight)));
                            } else
                                (a = (t.x - s.globals.minX) / (s.globals.xRange / s.globals.gridWidth)),
                                    (n = s.globals.gridHeight - (parseFloat(t.y) - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size),
                                    (r = s.globals.gridHeight - (t.y - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight)),
                                    s.config.yaxis[t.yAxisIndex] &&
                                        s.config.yaxis[t.yAxisIndex].reversed &&
                                        ((n = (parseFloat(t.y) - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size),
                                        (r = (t.y - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight)));
                            if (!(a < 0 || a > s.globals.gridWidth)) {
                                var c = {
                                        pSize: t.marker.size,
                                        pWidth: t.marker.strokeWidth,
                                        pointFillColor: t.marker.fillColor,
                                        pointStrokeColor: t.marker.strokeColor,
                                        shape: t.marker.shape,
                                        radius: t.marker.radius,
                                        class: "apexcharts-point-annotation-marker " + t.marker.cssClass,
                                    },
                                    d = this.graphics.drawMarker(a + t.marker.offsetX, r + t.marker.offsetY, c);
                                e.appendChild(d.node);
                                var u = t.label.text ? t.label.text : "",
                                    g = this.graphics.drawText({
                                        x: a + t.label.offsetX,
                                        y: n + t.label.offsetY,
                                        text: u,
                                        textAnchor: t.label.textAnchor,
                                        fontSize: t.label.style.fontSize,
                                        fontFamily: t.label.style.fontFamily,
                                        foreColor: t.label.style.color,
                                        cssClass: "apexcharts-point-annotation-label " + t.label.style.cssClass,
                                    });
                                if ((g.attr({ rel: i }), e.appendChild(g.node), t.customSVG.SVG)) {
                                    var f = this.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass });
                                    f.attr({ transform: "translate(".concat(a + t.customSVG.offsetX, ", ").concat(n + t.customSVG.offsetY, ")") }), (f.node.innerHTML = t.customSVG.SVG), e.appendChild(f.node);
                                }
                            }
                        },
                    },
                    {
                        key: "drawPointAnnotations",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = this.graphics.group({ class: "apexcharts-point-annotations" });
                            return (
                                e.config.annotations.points.map(function (e, s) {
                                    t.addPointAnnotation(e, i.node, s);
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "setOrientations",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = this.w;
                            if ("vertical" === t.label.orientation) {
                                var s = null !== e ? e : 0,
                                    a = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(s, "']"));
                                if (null !== a) {
                                    var n = a.getBoundingClientRect();
                                    a.setAttribute("x", parseFloat(a.getAttribute("x")) - n.height + 4),
                                        "top" === t.label.position ? a.setAttribute("y", parseFloat(a.getAttribute("y")) + n.width) : a.setAttribute("y", parseFloat(a.getAttribute("y")) - n.width);
                                    var r = this.graphics.rotateAroundCenter(a),
                                        o = r.x,
                                        l = r.y;
                                    a.setAttribute("transform", "rotate(-90 ".concat(o, " ").concat(l, ")"));
                                }
                            }
                        },
                    },
                    {
                        key: "addBackgroundToAnno",
                        value: function (t, e) {
                            var i = this.w;
                            if (!e.label.text) return null;
                            var s = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                                a = t.getBoundingClientRect(),
                                n = e.label.style.padding.left,
                                r = e.label.style.padding.right,
                                o = e.label.style.padding.top,
                                l = e.label.style.padding.bottom;
                            "vertical" === e.label.orientation && ((o = e.label.style.padding.left), (l = e.label.style.padding.right), (n = e.label.style.padding.top), (r = e.label.style.padding.bottom));
                            var h = a.left - s.left - n,
                                c = a.top - s.top - o;
                            return this.graphics.drawRect(h, c, a.width + n + r, a.height + o + l, 0, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
                        },
                    },
                    {
                        key: "annotationsBackground",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = function (i, s, a) {
                                    var n = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(s, "']"));
                                    if (n) {
                                        var r = n.parentNode,
                                            o = t.addBackgroundToAnno(n, i);
                                        o && r.insertBefore(o.node, n);
                                    }
                                };
                            e.config.annotations.xaxis.map(function (t, e) {
                                i(t, e, "xaxis");
                            }),
                                e.config.annotations.yaxis.map(function (t, e) {
                                    i(t, e, "yaxis");
                                }),
                                e.config.annotations.points.map(function (t, e) {
                                    i(t, e, "point");
                                });
                        },
                    },
                    {
                        key: "addText",
                        value: function (t, e, i) {
                            var s = t.x,
                                a = t.y,
                                n = t.text,
                                r = t.textAnchor,
                                o = t.appendTo,
                                l = void 0 === o ? ".apexcharts-inner" : o,
                                h = t.foreColor,
                                c = t.fontSize,
                                d = t.fontFamily,
                                u = t.cssClass,
                                g = t.backgroundColor,
                                f = t.borderWidth,
                                p = t.strokeDashArray,
                                x = t.radius,
                                b = t.borderColor,
                                m = t.paddingLeft,
                                v = void 0 === m ? 4 : m,
                                y = t.paddingRight,
                                w = void 0 === y ? 4 : y,
                                k = t.paddingBottom,
                                A = void 0 === k ? 2 : k,
                                S = t.paddingTop,
                                C = void 0 === S ? 2 : S,
                                L = i,
                                z = L.w,
                                P = z.globals.dom.baseEl.querySelector(l),
                                M = this.graphics.drawText({ x: s, y: a, text: n, textAnchor: r || "start", fontSize: c || "12px", fontFamily: d || z.config.chart.fontFamily, foreColor: h || z.config.chart.foreColor, cssClass: u });
                            P.appendChild(M.node);
                            var E = M.bbox();
                            if (n) {
                                var T = this.graphics.drawRect(E.x - v, E.y - C, E.width + v + w, E.height + A + C, x, g, 1, f, b, p);
                                M.before(T);
                            }
                            return (
                                e &&
                                    z.globals.memory.methodsToExec.push({
                                        context: L,
                                        method: L.addText,
                                        params: {
                                            x: s,
                                            y: a,
                                            text: n,
                                            textAnchor: r,
                                            appendTo: l,
                                            foreColor: h,
                                            fontSize: c,
                                            cssClass: u,
                                            backgroundColor: g,
                                            borderWidth: f,
                                            strokeDashArray: p,
                                            radius: x,
                                            borderColor: b,
                                            paddingLeft: v,
                                            paddingRight: w,
                                            paddingBottom: A,
                                            paddingTop: C,
                                        },
                                    }),
                                i
                            );
                        },
                    },
                    {
                        key: "addPointAnnotationExternal",
                        value: function (t, e, i) {
                            return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
                        },
                    },
                    {
                        key: "addYaxisAnnotationExternal",
                        value: function (t, e, i) {
                            return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
                        },
                    },
                    {
                        key: "addXaxisAnnotationExternal",
                        value: function (t, e, i) {
                            return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
                        },
                    },
                    {
                        key: "addAnnotationExternal",
                        value: function (t) {
                            var e = t.params,
                                i = t.pushToMemory,
                                s = t.context,
                                a = t.type,
                                n = t.contextMethod,
                                r = s,
                                o = r.w,
                                l = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations")),
                                h = l.childNodes.length + 1,
                                c = new x(),
                                u = Object.assign({}, "xaxis" === a ? c.xAxisAnnotation : "yaxis" === a ? c.yAxisAnnotation : c.pointAnnotation),
                                g = d.extend(u, e);
                            switch (a) {
                                case "xaxis":
                                    this.addXaxisAnnotation(g, l, h);
                                    break;
                                case "yaxis":
                                    this.addYaxisAnnotation(g, l, h);
                                    break;
                                case "point":
                                    this.addPointAnnotation(g, l, h);
                            }
                            var f = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(h, "']")),
                                p = this.addBackgroundToAnno(f, g);
                            return p && l.insertBefore(p.node, f), i && o.globals.memory.methodsToExec.push({ context: r, method: n, params: e }), s;
                        },
                    },
                ]),
                t
            );
        })(),
        m = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.months31 = [1, 3, 5, 7, 8, 10, 12]), (this.months30 = [2, 4, 6, 9, 11]), (this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]);
            }
            return (
                s(t, [
                    {
                        key: "isValidDate",
                        value: function (t) {
                            return !isNaN(this.parseDate(t));
                        },
                    },
                    {
                        key: "getUTCTimeStamp",
                        value: function (t) {
                            return Date.parse(t) ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : t;
                        },
                    },
                    {
                        key: "parseDate",
                        value: function (t) {
                            var e = Date.parse(t);
                            if (!isNaN(e)) return this.getUTCTimeStamp(t);
                            var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                            return (i = this.getUTCTimeStamp(i));
                        },
                    },
                    {
                        key: "treatAsUtc",
                        value: function (t) {
                            var e = new Date(t);
                            return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
                        },
                    },
                    {
                        key: "formatDate",
                        value: function (t, e) {
                            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                a = this.w.globals.locale,
                                n = ["\0"].concat(c(a.months)),
                                r = ["\x01"].concat(c(a.shortMonths)),
                                o = ["\x02"].concat(c(a.days)),
                                l = ["\x03"].concat(c(a.shortDays));
                            function h(t, e) {
                                var i = t + "";
                                for (e = e || 2; i.length < e; ) i = "0" + i;
                                return i;
                            }
                            s && (t = this.treatAsUtc(t));
                            var d = i ? t.getUTCFullYear() : t.getFullYear();
                            e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + d)).replace(/(^|[^\\])yy/g, "$1" + d.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + d);
                            var u = (i ? t.getUTCMonth() : t.getMonth()) + 1;
                            e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + n[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(u))).replace(/(^|[^\\])M/g, "$1" + u);
                            var g = i ? t.getUTCDate() : t.getDate();
                            e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + h(g))).replace(/(^|[^\\])d/g, "$1" + g);
                            var f = i ? t.getUTCHours() : t.getHours(),
                                p = f > 12 ? f - 12 : 0 === f ? 12 : f;
                            e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + h(f))).replace(/(^|[^\\])H/g, "$1" + f)).replace(/(^|[^\\])hh+/g, "$1" + h(p))).replace(/(^|[^\\])h/g, "$1" + p);
                            var x = i ? t.getUTCMinutes() : t.getMinutes();
                            e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + h(x))).replace(/(^|[^\\])m/g, "$1" + x);
                            var b = i ? t.getUTCSeconds() : t.getSeconds();
                            e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + h(b))).replace(/(^|[^\\])s/g, "$1" + b);
                            var m = i ? t.getUTCMilliseconds() : t.getMilliseconds();
                            (e = e.replace(/(^|[^\\])fff+/g, "$1" + h(m, 3))), (m = Math.round(m / 10)), (e = e.replace(/(^|[^\\])ff/g, "$1" + h(m))), (m = Math.round(m / 10));
                            var v = f < 12 ? "AM" : "PM";
                            e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + m)).replace(/(^|[^\\])TT+/g, "$1" + v)).replace(/(^|[^\\])T/g, "$1" + v.charAt(0));
                            var y = v.toLowerCase();
                            e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + y)).replace(/(^|[^\\])t/g, "$1" + y.charAt(0));
                            var w = -t.getTimezoneOffset(),
                                k = i || !w ? "Z" : w > 0 ? "+" : "-";
                            if (!i) {
                                var A = (w = Math.abs(w)) % 60;
                                k += h(Math.floor(w / 60)) + ":" + h(A);
                            }
                            e = e.replace(/(^|[^\\])K/g, "$1" + k);
                            var S = (i ? t.getUTCDay() : t.getDay()) + 1;
                            return (e = (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[S])).replace(new RegExp(l[0], "g"), l[S])).replace(new RegExp(n[0], "g"), n[u])).replace(new RegExp(r[0], "g"), r[u])).replace(/\\(.)/g, "$1"));
                        },
                    },
                    {
                        key: "getTimeUnitsfromTimestamp",
                        value: function (t, e) {
                            var i = this.w;
                            void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                            var s = new Date(t).getFullYear(),
                                a = new Date(e).getFullYear(),
                                n = new Date(t).getMonth(),
                                r = new Date(e).getMonth(),
                                o = new Date(t).getDate(),
                                l = new Date(e).getDate(),
                                h = new Date(t).getHours(),
                                c = new Date(e).getHours();
                            return { minMinute: new Date(t).getMinutes(), maxMinute: new Date(e).getMinutes(), minHour: h, maxHour: c, minDate: o, maxDate: l, minMonth: n, maxMonth: r, minYear: s, maxYear: a };
                        },
                    },
                    {
                        key: "isLeapYear",
                        value: function (t) {
                            return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
                        },
                    },
                    {
                        key: "calculcateLastDaysOfMonth",
                        value: function (t, e, i) {
                            return this.determineDaysOfMonths(t, e) - i;
                        },
                    },
                    {
                        key: "determineDaysOfYear",
                        value: function (t) {
                            var e = 365;
                            return this.isLeapYear(t) && (e = 366), e;
                        },
                    },
                    {
                        key: "determineRemainingDaysOfYear",
                        value: function (t, e, i) {
                            var s = this.daysCntOfYear[e] + i;
                            return e > 1 && this.isLeapYear() && s++, s;
                        },
                    },
                    {
                        key: "determineDaysOfMonths",
                        value: function (t, e) {
                            var i = 30;
                            switch (((t = d.monthMod(t)), !0)) {
                                case this.months30.indexOf(t) > -1:
                                    2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                                    break;
                                case this.months31.indexOf(t) > -1:
                                default:
                                    i = 31;
                            }
                            return i;
                        },
                    },
                ]),
                t
            );
        })(),
        v = (function () {
            function t(i) {
                e(this, t), (this.opts = i);
            }
            return (
                s(
                    t,
                    [
                        {
                            key: "line",
                            value: function () {
                                return {
                                    chart: { animations: { easing: "swing" } },
                                    dataLabels: { enabled: !1 },
                                    stroke: { width: 5, curve: "straight" },
                                    markers: { size: 0, hover: { sizeOffset: 6 } },
                                    xaxis: { crosshairs: { width: 1 } },
                                };
                            },
                        },
                        {
                            key: "sparkline",
                            value: function (t) {
                                (this.opts.yaxis[0].labels.show = !1), (this.opts.yaxis[0].floating = !0);
                                return d.extend(t, {
                                    grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                                    legend: { show: !1 },
                                    xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 } },
                                    chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } },
                                    dataLabels: { enabled: !1 },
                                });
                            },
                        },
                        {
                            key: "bar",
                            value: function () {
                                return {
                                    chart: { stacked: !1, animations: { easing: "swing" } },
                                    plotOptions: { bar: { dataLabels: { position: "center" } } },
                                    dataLabels: { style: { colors: ["#fff"] } },
                                    stroke: { width: 0 },
                                    fill: { opacity: 0.85 },
                                    legend: { markers: { shape: "square", radius: 2, size: 8 } },
                                    tooltip: { shared: !1 },
                                    xaxis: { tooltip: { enabled: !1 }, crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } },
                                };
                            },
                        },
                        {
                            key: "candlestick",
                            value: function () {
                                return {
                                    stroke: { width: 1, colors: ["#333"] },
                                    dataLabels: { enabled: !1 },
                                    tooltip: {
                                        shared: !0,
                                        custom: function (t) {
                                            var e = t.seriesIndex,
                                                i = t.dataPointIndex,
                                                s = t.w;
                                            return (
                                                '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' +
                                                s.globals.seriesCandleO[e][i] +
                                                '</span></div><div>High: <span class="value">' +
                                                s.globals.seriesCandleH[e][i] +
                                                '</span></div><div>Low: <span class="value">' +
                                                s.globals.seriesCandleL[e][i] +
                                                '</span></div><div>Close: <span class="value">' +
                                                s.globals.seriesCandleC[e][i] +
                                                "</span></div></div>"
                                            );
                                        },
                                    },
                                    states: { active: { filter: { type: "none" } } },
                                    xaxis: { crosshairs: { width: 1 } },
                                };
                            },
                        },
                        {
                            key: "rangeBar",
                            value: function () {
                                return {
                                    stroke: { width: 0 },
                                    plotOptions: { bar: { dataLabels: { position: "center" } } },
                                    dataLabels: {
                                        enabled: !1,
                                        formatter: function (t, e) {
                                            e.ctx;
                                            var i = e.seriesIndex,
                                                s = e.dataPointIndex,
                                                a = e.w,
                                                n = a.globals.seriesRangeStart[i][s];
                                            return a.globals.seriesRangeEnd[i][s] - n;
                                        },
                                        style: { colors: ["#fff"] },
                                    },
                                    tooltip: {
                                        shared: !1,
                                        followCursor: !0,
                                        custom: function (t) {
                                            var e = t.ctx,
                                                i = t.seriesIndex,
                                                s = t.dataPointIndex,
                                                a = t.w,
                                                n = a.globals.seriesRangeStart[i][s],
                                                r = a.globals.seriesRangeEnd[i][s],
                                                o = "",
                                                l = "",
                                                h = a.globals.colors[i];
                                            if (void 0 === a.config.tooltip.x.formatter)
                                                if ("datetime" === a.config.xaxis.type) {
                                                    var c = new m(e);
                                                    (o = c.formatDate(new Date(n), a.config.tooltip.x.format, !0, !0)), (l = c.formatDate(new Date(r), a.config.tooltip.x.format, !0, !0));
                                                } else (o = n), (l = r);
                                            else (o = a.config.tooltip.x.formatter(n)), (l = a.config.tooltip.x.formatter(r));
                                            var d = a.globals.labels[s];
                                            return (
                                                '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' +
                                                h +
                                                '">' +
                                                (a.config.series[i].name ? a.config.series[i].name : "") +
                                                '</span></div><div> <span class="category">' +
                                                d +
                                                ': </span> <span class="value start-value">' +
                                                o +
                                                '</span> <span class="separator">-</span> <span class="value end-value">' +
                                                l +
                                                "</span></div></div>"
                                            );
                                        },
                                    },
                                    xaxis: { tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } },
                                };
                            },
                        },
                        {
                            key: "area",
                            value: function () {
                                return {
                                    stroke: { width: 4 },
                                    fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } },
                                    markers: { size: 0, hover: { sizeOffset: 6 } },
                                    tooltip: { followCursor: !1 },
                                };
                            },
                        },
                        {
                            key: "brush",
                            value: function (t) {
                                return d.extend(t, {
                                    chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } },
                                    dataLabels: { enabled: !1 },
                                    stroke: { width: 1 },
                                    tooltip: { enabled: !1 },
                                    xaxis: { tooltip: { enabled: !1 } },
                                });
                            },
                        },
                        {
                            key: "stacked100",
                            value: function () {
                                var t = this;
                                (this.opts.dataLabels = this.opts.dataLabels || {}), (this.opts.dataLabels.formatter = this.opts.dataLabels.formatter || void 0);
                                var e = this.opts.dataLabels.formatter;
                                this.opts.yaxis.forEach(function (e, i) {
                                    (t.opts.yaxis[i].min = 0), (t.opts.yaxis[i].max = 100);
                                }),
                                    "bar" === this.opts.chart.type &&
                                        (this.opts.dataLabels.formatter =
                                            e ||
                                            function (t) {
                                                return "number" == typeof t && t ? t.toFixed(0) + "%" : t;
                                            });
                            },
                        },
                        {
                            key: "bubble",
                            value: function () {
                                return {
                                    dataLabels: { style: { colors: ["#fff"] } },
                                    tooltip: { shared: !1, intersect: !0 },
                                    xaxis: { crosshairs: { width: 0 } },
                                    fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } },
                                };
                            },
                        },
                        {
                            key: "scatter",
                            value: function () {
                                return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 2, hover: { sizeOffset: 2 } } };
                            },
                        },
                        {
                            key: "heatmap",
                            value: function () {
                                return {
                                    chart: { stacked: !1, zoom: { enabled: !1 } },
                                    fill: { opacity: 1 },
                                    dataLabels: { style: { colors: ["#fff"] } },
                                    stroke: { colors: ["#fff"] },
                                    tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } },
                                    legend: { position: "top", markers: { shape: "square", size: 10, offsetY: 2 } },
                                    grid: { padding: { right: 20 } },
                                };
                            },
                        },
                        {
                            key: "pie",
                            value: function () {
                                return {
                                    chart: { toolbar: { show: !1 } },
                                    plotOptions: { pie: { donut: { labels: { show: !1 } } } },
                                    dataLabels: {
                                        formatter: function (t) {
                                            return t.toFixed(1) + "%";
                                        },
                                        style: { colors: ["#fff"] },
                                        dropShadow: { enabled: !0 },
                                    },
                                    stroke: { colors: ["#fff"] },
                                    fill: { opacity: 1, gradient: { shade: "dark", shadeIntensity: 0.35, inverseColors: !1, stops: [0, 100, 100] } },
                                    padding: { right: 0, left: 0 },
                                    tooltip: { theme: "dark", fillSeriesColor: !0 },
                                    legend: { position: "right" },
                                };
                            },
                        },
                        {
                            key: "donut",
                            value: function () {
                                return {
                                    chart: { toolbar: { show: !1 } },
                                    dataLabels: {
                                        formatter: function (t) {
                                            return t.toFixed(1) + "%";
                                        },
                                        style: { colors: ["#fff"] },
                                        dropShadow: { enabled: !0 },
                                    },
                                    stroke: { colors: ["#fff"] },
                                    fill: { opacity: 1, gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "vertical", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } },
                                    padding: { right: 0, left: 0 },
                                    tooltip: { theme: "dark", fillSeriesColor: !0 },
                                    legend: { position: "right" },
                                };
                            },
                        },
                        {
                            key: "radar",
                            value: function () {
                                return (
                                    (this.opts.yaxis[0].labels.style.fontSize = "13px"),
                                    (this.opts.yaxis[0].labels.offsetY = 6),
                                    {
                                        dataLabels: { enabled: !0, style: { colors: ["#a8a8a8"], fontSize: "11px" } },
                                        stroke: { width: 2 },
                                        markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 },
                                        fill: { opacity: 0.2 },
                                        tooltip: { shared: !1, intersect: !0, followCursor: !0 },
                                        grid: { show: !1 },
                                        xaxis: { tooltip: { enabled: !1 }, crosshairs: { show: !1 } },
                                    }
                                );
                            },
                        },
                        {
                            key: "radialBar",
                            value: function () {
                                return {
                                    chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } },
                                    fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } },
                                    padding: { right: 0, left: 0 },
                                    legend: { show: !1, position: "right" },
                                    tooltip: { enabled: !1, fillSeriesColor: !0 },
                                };
                            },
                        },
                    ],
                    [
                        {
                            key: "convertCatToNumeric",
                            value: function (t) {
                                (t.xaxis.type = "numeric"),
                                    (t.xaxis.convertedCatToNumeric = !0),
                                    (t.xaxis.labels = t.xaxis.labels || {}),
                                    (t.xaxis.labels.formatter =
                                        t.xaxis.labels.formatter ||
                                        function (t) {
                                            return t;
                                        }),
                                    (t.chart = t.chart || {}),
                                    (t.chart.zoom = t.chart.zoom || (window.Apex.chart && window.Apex.chart.zoom) || {});
                                var e = t.xaxis.labels.formatter,
                                    i = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
                                return (
                                    i &&
                                        i.length &&
                                        (t.xaxis.labels.formatter = function (t) {
                                            return e(i[t - 1]);
                                        }),
                                    (t.xaxis.categories = []),
                                    (t.labels = []),
                                    (t.chart.zoom.enabled = t.chart.zoom.enabled || !1),
                                    t
                                );
                            },
                        },
                    ]
                ),
                t
            );
        })(),
        y = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(
                    t,
                    [
                        {
                            key: "getStackedSeriesTotals",
                            value: function () {
                                for (var t = this.w, e = [], i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                                    for (var s = 0, a = 0; a < t.globals.series.length; a++) s += t.globals.series[a][i];
                                    e.push(s);
                                }
                                return (t.globals.stackedSeriesTotals = e), e;
                            },
                        },
                        {
                            key: "getSeriesTotalByIndex",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return null === t
                                    ? this.w.config.series.reduce(function (t, e) {
                                          return t + e;
                                      }, 0)
                                    : this.w.globals.series[t].reduce(function (t, e) {
                                          return t + e;
                                      }, 0);
                            },
                        },
                        {
                            key: "isSeriesNull",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return (
                                    0 ===
                                    (null === t
                                        ? this.w.config.series.filter(function (t) {
                                              return null !== t;
                                          })
                                        : this.w.globals.series[t].filter(function (t) {
                                              return null !== t;
                                          })
                                    ).length
                                );
                            },
                        },
                        {
                            key: "seriesHaveSameValues",
                            value: function (t) {
                                return this.w.globals.series[t].every(function (t, e, i) {
                                    return t === i[0];
                                });
                            },
                        },
                        {
                            key: "getLargestSeries",
                            value: function () {
                                var t = this.w;
                                t.globals.maxValsInArrayIndex = t.globals.series
                                    .map(function (t) {
                                        return t.length;
                                    })
                                    .indexOf(
                                        Math.max.apply(
                                            Math,
                                            t.globals.series.map(function (t) {
                                                return t.length;
                                            })
                                        )
                                    );
                            },
                        },
                        {
                            key: "getLargestMarkerSize",
                            value: function () {
                                var t = this.w,
                                    e = 0;
                                return (
                                    t.globals.markers.size.forEach(function (t) {
                                        e = Math.max(e, t);
                                    }),
                                    (t.globals.markers.largestSize = e),
                                    e
                                );
                            },
                        },
                        {
                            key: "getSeriesTotals",
                            value: function () {
                                var t = this.w;
                                t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                                    var i = 0;
                                    if (Array.isArray(t)) for (var s = 0; s < t.length; s++) i += t[s];
                                    else i += t;
                                    return i;
                                });
                            },
                        },
                        {
                            key: "getSeriesTotalsXRange",
                            value: function (t, e) {
                                var i = this.w;
                                return i.globals.series.map(function (s, a) {
                                    for (var n = 0, r = 0; r < s.length; r++) i.globals.seriesX[a][r] > t && i.globals.seriesX[a][r] < e && (n += s[r]);
                                    return n;
                                });
                            },
                        },
                        {
                            key: "getPercentSeries",
                            value: function () {
                                var t = this.w;
                                t.globals.seriesPercent = t.globals.series.map(function (e, i) {
                                    var s = [];
                                    if (Array.isArray(e))
                                        for (var a = 0; a < e.length; a++) {
                                            var n = t.globals.stackedSeriesTotals[a],
                                                r = (100 * e[a]) / n;
                                            s.push(r);
                                        }
                                    else {
                                        var o =
                                            (100 * e) /
                                            t.globals.seriesTotals.reduce(function (t, e) {
                                                return t + e;
                                            }, 0);
                                        s.push(o);
                                    }
                                    return s;
                                });
                            },
                        },
                        {
                            key: "getCalculatedRatios",
                            value: function () {
                                var t,
                                    e,
                                    i,
                                    s,
                                    a,
                                    n = this.w.globals,
                                    r = [],
                                    o = [],
                                    l = 0.1,
                                    h = 0;
                                if (((n.yRange = []), n.isMultipleYAxis)) for (var c = 0; c < n.minYArr.length; c++) n.yRange.push(Math.abs(n.minYArr[c] - n.maxYArr[c])), o.push(0);
                                else n.yRange.push(Math.abs(n.minY - n.maxY));
                                (n.xRange = Math.abs(n.maxX - n.minX)), (n.zRange = Math.abs(n.maxZ - n.minZ));
                                for (var d = 0; d < n.yRange.length; d++) r.push(n.yRange[d] / n.gridHeight);
                                if (
                                    ((e = n.xRange / n.gridWidth),
                                    (i = Math.abs(n.initialmaxX - n.initialminX) / n.gridWidth),
                                    (t = n.yRange / n.gridWidth),
                                    (s = n.xRange / n.gridHeight),
                                    (a = (n.zRange / n.gridHeight) * 16),
                                    n.minY !== Number.MIN_VALUE && 0 !== Math.abs(n.minY) && (n.hasNegs = !0),
                                    n.isMultipleYAxis)
                                ) {
                                    o = [];
                                    for (var u = 0; u < r.length; u++) o.push(-n.minYArr[u] / r[u]);
                                } else o.push(-n.minY / r[0]), n.minY !== Number.MIN_VALUE && 0 !== Math.abs(n.minY) && ((l = -n.minY / t), (h = n.minX / e));
                                return { yRatio: r, invertedYRatio: t, zRatio: a, xRatio: e, initialXRatio: i, invertedXRatio: s, baseLineInvertedY: l, baseLineY: o, baseLineX: h };
                            },
                        },
                        {
                            key: "getLogSeries",
                            value: function (t) {
                                var e = this.w;
                                return (
                                    (e.globals.seriesLog = t.map(function (t, i) {
                                        return e.config.yaxis[i] && e.config.yaxis[i].logarithmic
                                            ? t.map(function (t) {
                                                  return null === t ? null : (Math.log(t) - Math.log(e.globals.minYArr[i])) / (Math.log(e.globals.maxYArr[i]) - Math.log(e.globals.minYArr[i]));
                                              })
                                            : t;
                                    })),
                                    e.globals.seriesLog
                                );
                            },
                        },
                        {
                            key: "getLogYRatios",
                            value: function (t) {
                                var e = this,
                                    i = this.w,
                                    s = this.w.globals;
                                return (
                                    (s.yLogRatio = t.slice()),
                                    (s.logYRange = s.yRange.map(function (t, a) {
                                        if (i.config.yaxis[a] && e.w.config.yaxis[a].logarithmic) {
                                            var n,
                                                r = -Number.MAX_VALUE,
                                                o = Number.MIN_VALUE;
                                            return (
                                                s.seriesLog.forEach(function (t, e) {
                                                    t.forEach(function (t) {
                                                        i.config.yaxis[e] && i.config.yaxis[e].logarithmic && ((r = Math.max(t, r)), (o = Math.min(t, o)));
                                                    });
                                                }),
                                                (n = Math.pow(s.yRange[a], Math.abs(o - r) / s.yRange[a])),
                                                (s.yLogRatio[a] = n / s.gridHeight),
                                                n
                                            );
                                        }
                                    })),
                                    s.yLogRatio
                                );
                            },
                        },
                    ],
                    [
                        {
                            key: "checkComboSeries",
                            value: function (t) {
                                var e = !1,
                                    i = !1;
                                return (
                                    t.length &&
                                        void 0 !== t[0].type &&
                                        ((e = !0),
                                        t.forEach(function (t) {
                                            ("bar" !== t.type && "column" !== t.type) || (i = !0);
                                        })),
                                    { comboCharts: e, comboChartsHasBars: i }
                                );
                            },
                        },
                        {
                            key: "extendArrayProps",
                            value: function (t, e) {
                                return (
                                    e.yaxis && (e = t.extendYAxis(e)),
                                    e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))),
                                    e
                                );
                            },
                        },
                    ]
                ),
                t
            );
        })(),
        w = (function () {
            function i(t) {
                e(this, i), (this.opts = t);
            }
            return (
                s(i, [
                    {
                        key: "init",
                        value: function () {
                            var e = this.opts,
                                i = new x(),
                                s = new v(e);
                            (this.chartType = e.chart.type),
                                "histogram" === this.chartType && ((e.chart.type = "bar"), (e = d.extend({ plotOptions: { bar: { columnWidth: "99.99%" } } }, e))),
                                (e.series = this.checkEmptySeries(e.series)),
                                (e = this.extendYAxis(e)),
                                (e = this.extendAnnotations(e));
                            var a = i.init(),
                                n = {};
                            if (e && "object" === t(e)) {
                                var r = {};
                                switch (this.chartType) {
                                    case "line":
                                        r = s.line();
                                        break;
                                    case "area":
                                        r = s.area();
                                        break;
                                    case "bar":
                                        r = s.bar();
                                        break;
                                    case "candlestick":
                                        r = s.candlestick();
                                        break;
                                    case "rangeBar":
                                        r = s.rangeBar();
                                        break;
                                    case "histogram":
                                        r = s.bar();
                                        break;
                                    case "bubble":
                                        r = s.bubble();
                                        break;
                                    case "scatter":
                                        r = s.scatter();
                                        break;
                                    case "heatmap":
                                        r = s.heatmap();
                                        break;
                                    case "pie":
                                        r = s.pie();
                                        break;
                                    case "donut":
                                        r = s.donut();
                                        break;
                                    case "radar":
                                        r = s.radar();
                                        break;
                                    case "radialBar":
                                        r = s.radialBar();
                                        break;
                                    default:
                                        r = s.line();
                                }
                                e.chart.brush && e.chart.brush.enabled && (r = s.brush(r)),
                                    e.chart.stacked && "100%" === e.chart.stackType && s.stacked100(),
                                    this.checkForDarkTheme(window.Apex),
                                    this.checkForDarkTheme(e),
                                    (e.xaxis = e.xaxis || window.Apex.xaxis || {});
                                var o = y.checkComboSeries(e.series);
                                ("line" !== e.chart.type && "area" !== e.chart.type && "scatter" !== e.chart.type) ||
                                    o.comboChartsHasBars ||
                                    "datetime" === e.xaxis.type ||
                                    "numeric" === e.xaxis.type ||
                                    "between" === e.xaxis.tickPlacement ||
                                    (e = v.convertCatToNumeric(e)),
                                    ((e.chart.sparkline && e.chart.sparkline.enabled) || (window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled)) && (r = s.sparkline(r)),
                                    (n = d.extend(a, r));
                            }
                            var l = d.extend(n, window.Apex);
                            return (a = d.extend(l, e)), (a = this.handleUserInputErrors(a));
                        },
                    },
                    {
                        key: "extendYAxis",
                        value: function (t) {
                            var e = new x();
                            return (
                                void 0 === t.yaxis && (t.yaxis = {}),
                                t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = d.extend(t.yaxis, window.Apex.yaxis)),
                                t.yaxis.constructor !== Array ? (t.yaxis = [d.extend(e.yAxis, t.yaxis)]) : (t.yaxis = d.extendArray(t.yaxis, e.yAxis)),
                                t
                            );
                        },
                    },
                    {
                        key: "extendAnnotations",
                        value: function (t) {
                            return (
                                void 0 === t.annotations && ((t.annotations = {}), (t.annotations.yaxis = []), (t.annotations.xaxis = []), (t.annotations.points = [])),
                                (t = this.extendYAxisAnnotations(t)),
                                (t = this.extendXAxisAnnotations(t)),
                                (t = this.extendPointAnnotations(t))
                            );
                        },
                    },
                    {
                        key: "extendYAxisAnnotations",
                        value: function (t) {
                            var e = new x();
                            return (t.annotations.yaxis = d.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation)), t;
                        },
                    },
                    {
                        key: "extendXAxisAnnotations",
                        value: function (t) {
                            var e = new x();
                            return (t.annotations.xaxis = d.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation)), t;
                        },
                    },
                    {
                        key: "extendPointAnnotations",
                        value: function (t) {
                            var e = new x();
                            return (t.annotations.points = d.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation)), t;
                        },
                    },
                    {
                        key: "checkForDarkTheme",
                        value: function (t) {
                            t.theme &&
                                "dark" === t.theme.mode &&
                                (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.theme.palette || (t.theme.palette = "palette4"));
                        },
                    },
                    {
                        key: "checkEmptySeries",
                        value: function (t) {
                            return 0 === t.length ? [{ data: [] }] : t;
                        },
                    },
                    {
                        key: "handleUserInputErrors",
                        value: function (t) {
                            var e = t;
                            if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                            if (
                                (e.chart.scroller && console.warn("Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"),
                                ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal)
                            ) {
                                if (e.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                                e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), (e.xaxis.tooltip.enabled = !1), (e.yaxis[0].tooltip.enabled = !1), (e.chart.zoom.enabled = !1);
                            }
                            return (
                                ("bar" !== e.chart.type && "rangeBar" !== e.chart.type) ||
                                    (e.tooltip.shared &&
                                        ("barWidth" === e.xaxis.crosshairs.width &&
                                            e.series.length > 1 &&
                                            (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'), (e.xaxis.crosshairs.width = "tickWidth")),
                                        e.plotOptions.bar.horizontal && ((e.states.hover.type = "none"), (e.tooltip.shared = !1)),
                                        e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true", "color: blue;"), (e.tooltip.followCursor = !0)))),
                                "candlestick" === e.chart.type && e.yaxis[0].reversed && (console.warn("Reversed y-axis in candlestick chart is not supported."), (e.yaxis[0].reversed = !1)),
                                e.chart.group &&
                                    0 === e.yaxis[0].labels.minWidth &&
                                    console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."),
                                Array.isArray(e.stroke.width) &&
                                    "line" !== e.chart.type &&
                                    "area" !== e.chart.type &&
                                    (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), (e.stroke.width = e.stroke.width[0])),
                                e
                            );
                        },
                    },
                ]),
                i
            );
        })(),
        k = (function () {
            function t() {
                e(this, t);
            }
            return (
                s(t, [
                    {
                        key: "globalVars",
                        value: function (t) {
                            return {
                                chartID: null,
                                cuid: null,
                                events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] },
                                colors: [],
                                clientX: null,
                                clientY: null,
                                fill: { colors: [] },
                                stroke: { colors: [] },
                                dataLabels: { style: { colors: [] } },
                                radarPolygons: { fill: { colors: [] } },
                                markers: { colors: [], size: t.markers.size, largestSize: 0 },
                                animationEnded: !1,
                                isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                                isDirty: !1,
                                initialConfig: null,
                                lastXAxis: [],
                                lastYAxis: [],
                                series: [],
                                seriesRangeStart: [],
                                seriesRangeEnd: [],
                                seriesPercent: [],
                                seriesTotals: [],
                                stackedSeriesTotals: [],
                                seriesX: [],
                                seriesZ: [],
                                labels: [],
                                timelineLabels: [],
                                invertedTimelineLabels: [],
                                seriesNames: [],
                                noLabelsProvided: !1,
                                allSeriesCollapsed: !1,
                                collapsedSeries: [],
                                collapsedSeriesIndices: [],
                                ancillaryCollapsedSeries: [],
                                ancillaryCollapsedSeriesIndices: [],
                                risingSeries: [],
                                dataFormatXNumeric: !1,
                                selectedDataPoints: [],
                                ignoreYAxisIndexes: [],
                                padHorizontal: 0,
                                maxValsInArrayIndex: 0,
                                zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                                panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                                selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                                yaxis: null,
                                minY: Number.MIN_VALUE,
                                maxY: -Number.MAX_VALUE,
                                minYArr: [],
                                maxYArr: [],
                                maxX: -Number.MAX_VALUE,
                                initialmaxX: -Number.MAX_VALUE,
                                minX: Number.MIN_VALUE,
                                initialminX: Number.MIN_VALUE,
                                minZ: Number.MIN_VALUE,
                                maxZ: -Number.MAX_VALUE,
                                minXDiff: Number.MAX_VALUE,
                                mousedown: !1,
                                lastClientPosition: {},
                                visibleXRange: void 0,
                                yRange: [],
                                zRange: 0,
                                xRange: 0,
                                yValueDecimal: 0,
                                total: 0,
                                SVGNS: "http://www.w3.org/2000/svg",
                                svgWidth: 0,
                                svgHeight: 0,
                                noData: !1,
                                locale: {},
                                dom: {},
                                memory: { methodsToExec: [] },
                                shouldAnimate: !0,
                                skipLastTimelinelabel: !1,
                                delayedElements: [],
                                axisCharts: !0,
                                isXNumeric: !1,
                                isDataXYZ: !1,
                                resized: !1,
                                resizeTimer: null,
                                comboCharts: !1,
                                comboChartsHasBars: !1,
                                dataChanged: !1,
                                previousPaths: [],
                                seriesXvalues: [],
                                seriesYvalues: [],
                                seriesCandleO: [],
                                seriesCandleH: [],
                                seriesCandleL: [],
                                seriesCandleC: [],
                                allSeriesHasEqualX: !0,
                                dataPoints: 0,
                                pointsArray: [],
                                dataLabelsRects: [],
                                lastDrawnDataLabelsIndexes: [],
                                hasNullValues: !1,
                                easing: null,
                                zoomed: !1,
                                gridWidth: 0,
                                gridHeight: 0,
                                yAxisScale: [],
                                xAxisScale: null,
                                xAxisTicksPositions: [],
                                timescaleTicks: [],
                                rotateXLabels: !1,
                                defaultLabels: !1,
                                xLabelFormatter: void 0,
                                yLabelFormatters: [],
                                xaxisTooltipFormatter: void 0,
                                ttKeyFormatter: void 0,
                                ttVal: void 0,
                                ttZFormatter: void 0,
                                LINE_HEIGHT_RATIO: 1.618,
                                xAxisLabelsHeight: 0,
                                yAxisLabelsWidth: 0,
                                scaleX: 1,
                                scaleY: 1,
                                translateX: 0,
                                translateY: 0,
                                translateYAxisX: [],
                                yLabelsCoords: [],
                                yTitleCoords: [],
                                yAxisWidths: [],
                                translateXAxisY: 0,
                                translateXAxisX: 0,
                                tooltip: null,
                                tooltipOpts: null,
                            };
                        },
                    },
                    {
                        key: "init",
                        value: function (t) {
                            var e = this.globalVars(t);
                            return (
                                (e.initialConfig = d.extend({}, t)),
                                (e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig.series))),
                                (e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis))),
                                (e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis))),
                                e
                            );
                        },
                    },
                ]),
                t
            );
        })(),
        A = (function () {
            function t(i) {
                e(this, t), (this.opts = i);
            }
            return (
                s(t, [
                    {
                        key: "init",
                        value: function () {
                            var t = new w(this.opts).init();
                            return { config: t, globals: new k().init(t) };
                        },
                    },
                ]),
                t
            );
        })(),
        S = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.opts = null), (this.seriesIndex = 0);
            }
            return (
                s(t, [
                    {
                        key: "clippedImgArea",
                        value: function (t) {
                            var e = this.w,
                                i = e.config,
                                s = parseInt(e.globals.gridWidth),
                                a = parseInt(e.globals.gridHeight),
                                n = s > a ? s : a,
                                r = t.image,
                                o = 0,
                                l = 0;
                            void 0 === t.width && void 0 === t.height
                                ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height
                                    ? ((o = i.fill.image.width + 1), (l = i.fill.image.height))
                                    : ((o = n + 1), (l = n))
                                : ((o = t.width), (l = t.height));
                            var h = document.createElementNS(e.globals.SVGNS, "pattern");
                            f.setAttrs(h, { id: t.patternID, patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse", width: o + "px", height: l + "px" });
                            var c = document.createElementNS(e.globals.SVGNS, "image");
                            h.appendChild(c),
                                c.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                                f.setAttrs(c, { x: 0, y: 0, preserveAspectRatio: "none", width: o + "px", height: l + "px" }),
                                (c.style.opacity = t.opacity),
                                e.globals.dom.elDefs.node.appendChild(h);
                        },
                    },
                    {
                        key: "getSeriesIndex",
                        value: function (t) {
                            var e = this.w;
                            return (
                                ("bar" === e.config.chart.type && e.config.plotOptions.bar.distributed) || "heatmap" === e.config.chart.type
                                    ? (this.seriesIndex = t.seriesNumber)
                                    : (this.seriesIndex = t.seriesNumber % e.globals.series.length),
                                this.seriesIndex
                            );
                        },
                    },
                    {
                        key: "fillPath",
                        value: function (t) {
                            var e = this.w;
                            this.opts = t;
                            var i,
                                s,
                                a,
                                n = this.w.config;
                            this.seriesIndex = this.getSeriesIndex(t);
                            var r = this.getFillColors(),
                                o = r[this.seriesIndex];
                            "function" == typeof o && (o = o({ seriesIndex: this.seriesIndex, value: t.value, w: e }));
                            var l = this.getFillType(this.seriesIndex),
                                h = Array.isArray(n.fill.opacity) ? n.fill.opacity[this.seriesIndex] : n.fill.opacity,
                                c = o;
                            return (
                                t.color && (o = t.color),
                                -1 === o.indexOf("rgb") ? (c = d.hexToRgba(o, h)) : o.indexOf("rgba") > -1 && (h = "0." + d.getOpacityFromRGBA(r[this.seriesIndex])),
                                "pattern" === l && (s = this.handlePatternFill(s, o, h, c)),
                                "gradient" === l && (a = this.handleGradientFill(a, o, h, this.seriesIndex)),
                                n.fill.image.src.length > 0 && "image" === l
                                    ? t.seriesNumber < n.fill.image.src.length
                                        ? (this.clippedImgArea({ opacity: h, image: n.fill.image.src[t.seriesNumber], patternUnits: t.patternUnits, patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1) }),
                                          (i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1, ")")))
                                        : (i = c)
                                    : (i = "gradient" === l ? a : "pattern" === l ? s : c),
                                t.solid && (i = c),
                                i
                            );
                        },
                    },
                    {
                        key: "getFillType",
                        value: function (t) {
                            var e = this.w;
                            return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type;
                        },
                    },
                    {
                        key: "getFillColors",
                        value: function () {
                            var t = this.w,
                                e = t.config,
                                i = this.opts,
                                s = [];
                            return (
                                t.globals.comboCharts
                                    ? "line" === t.config.series[this.seriesIndex].type
                                        ? t.globals.stroke.colors instanceof Array
                                            ? (s = t.globals.stroke.colors)
                                            : s.push(t.globals.stroke.colors)
                                        : t.globals.fill.colors instanceof Array
                                        ? (s = t.globals.fill.colors)
                                        : s.push(t.globals.fill.colors)
                                    : "line" === e.chart.type
                                    ? t.globals.stroke.colors instanceof Array
                                        ? (s = t.globals.stroke.colors)
                                        : s.push(t.globals.stroke.colors)
                                    : t.globals.fill.colors instanceof Array
                                    ? (s = t.globals.fill.colors)
                                    : s.push(t.globals.fill.colors),
                                void 0 !== i.fillColors && ((s = []), i.fillColors instanceof Array ? (s = i.fillColors.slice()) : s.push(i.fillColors)),
                                s
                            );
                        },
                    },
                    {
                        key: "handlePatternFill",
                        value: function (t, e, i, s) {
                            var a = this.w.config,
                                n = this.opts,
                                r = new f(this.ctx),
                                o =
                                    void 0 === a.fill.pattern.strokeWidth
                                        ? Array.isArray(a.stroke.width)
                                            ? a.stroke.width[this.seriesIndex]
                                            : a.stroke.width
                                        : Array.isArray(a.fill.pattern.strokeWidth)
                                        ? a.fill.pattern.strokeWidth[this.seriesIndex]
                                        : a.fill.pattern.strokeWidth,
                                l = e;
                            a.fill.pattern.style instanceof Array
                                ? (t = void 0 !== a.fill.pattern.style[n.seriesNumber] ? r.drawPattern(a.fill.pattern.style[n.seriesNumber], a.fill.pattern.width, a.fill.pattern.height, l, o, i) : s)
                                : (t = r.drawPattern(a.fill.pattern.style, a.fill.pattern.width, a.fill.pattern.height, l, o, i));
                            return t;
                        },
                    },
                    {
                        key: "handleGradientFill",
                        value: function (t, e, i, s) {
                            var a,
                                n,
                                r = this.w.config,
                                o = this.opts,
                                l = new f(this.ctx),
                                h = new d(),
                                c = r.fill.gradient.type,
                                u = void 0 === r.fill.gradient.opacityFrom ? i : Array.isArray(r.fill.gradient.opacityFrom) ? r.fill.gradient.opacityFrom[s] : r.fill.gradient.opacityFrom,
                                g = void 0 === r.fill.gradient.opacityTo ? i : Array.isArray(r.fill.gradient.opacityTo) ? r.fill.gradient.opacityTo[s] : r.fill.gradient.opacityTo;
                            if (
                                ((a = e),
                                (n =
                                    void 0 === r.fill.gradient.gradientToColors || 0 === r.fill.gradient.gradientToColors.length
                                        ? "dark" === r.fill.gradient.shade
                                            ? h.shadeColor(-1 * parseFloat(r.fill.gradient.shadeIntensity), e)
                                            : h.shadeColor(parseFloat(r.fill.gradient.shadeIntensity), e)
                                        : r.fill.gradient.gradientToColors[o.seriesNumber]),
                                r.fill.gradient.inverseColors)
                            ) {
                                var p = a;
                                (a = n), (n = p);
                            }
                            return l.drawGradient(c, a, n, u, g, o.size, r.fill.gradient.stops, r.fill.gradient.colorStops, s);
                        },
                    },
                ]),
                t
            );
        })(),
        C = (function () {
            function t(i, s) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "setGlobalMarkerSize",
                        value: function () {
                            var t = this.w;
                            if (((t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size]), t.globals.markers.size.length > 0)) {
                                if (t.globals.markers.size.length < t.globals.series.length + 1)
                                    for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0]);
                            } else
                                t.globals.markers.size = t.config.series.map(function (e) {
                                    return t.config.markers.size;
                                });
                        },
                    },
                    {
                        key: "plotChartMarkers",
                        value: function (t, e, i) {
                            var s,
                                a = this,
                                n = this.w,
                                r = e,
                                o = t,
                                l = null,
                                h = new f(this.ctx);
                            if ((n.globals.markers.size[e] > 0 && (l = h.group({ class: "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), o.x instanceof Array))
                                for (
                                    var c = function (t) {
                                            var c = i;
                                            1 === i && 0 === t && (c = 0), 1 === i && 1 === t && (c = 1);
                                            var g = "apexcharts-marker";
                                            if (
                                                (("line" !== n.config.chart.type && "area" !== n.config.chart.type) || n.globals.comboCharts || n.config.tooltip.intersect || (g += " no-pointer-events"),
                                                Array.isArray(n.config.markers.size) ? n.globals.markers.size[e] > 0 : n.config.markers.size > 0)
                                            ) {
                                                d.isNumber(o.y[t]) ? (g += " w".concat((Math.random() + 1).toString(36).substring(4))) : (g = "apexcharts-nullpoint");
                                                var f = a.getMarkerConfig(g, e);
                                                n.config.markers.discrete.map(function (t) {
                                                    t.seriesIndex === e && t.dataPointIndex === c && ((f.pointStrokeColor = t.strokeColor), (f.pointFillColor = t.fillColor), (f.pSize = t.size));
                                                }),
                                                    n.config.series[r].data[i] &&
                                                        (n.config.series[r].data[i].fillColor && (f.pointFillColor = n.config.series[r].data[i].fillColor),
                                                        n.config.series[r].data[i].strokeColor && (f.pointStrokeColor = n.config.series[r].data[i].strokeColor)),
                                                    (s = h.drawMarker(o.x[t], o.y[t], f)).attr("rel", c),
                                                    s.attr("j", c),
                                                    s.attr("index", e),
                                                    s.node.setAttribute("default-marker-size", f.pSize),
                                                    new u(a.ctx).setSelectionFilter(s, e, c),
                                                    a.addEvents(s),
                                                    l && l.add(s);
                                            } else void 0 === n.globals.pointsArray[e] && (n.globals.pointsArray[e] = []), n.globals.pointsArray[e].push([o.x[t], o.y[t]]);
                                        },
                                        g = 0;
                                    g < o.x.length;
                                    g++
                                )
                                    c(g);
                            return l;
                        },
                    },
                    {
                        key: "getMarkerConfig",
                        value: function (t, e) {
                            var i = this.w,
                                s = this.getMarkerStyle(e);
                            return {
                                pSize: i.globals.markers.size[e],
                                pRadius: i.config.markers.radius,
                                pWidth: i.config.markers.strokeWidth,
                                pointStrokeColor: s.pointStrokeColor,
                                pointFillColor: s.pointFillColor,
                                shape: i.config.markers.shape instanceof Array ? i.config.markers.shape[e] : i.config.markers.shape,
                                class: t,
                                pointStrokeOpacity: i.config.markers.strokeOpacity,
                                pointFillOpacity: i.config.markers.fillOpacity,
                                seriesIndex: e,
                            };
                        },
                    },
                    {
                        key: "addEvents",
                        value: function (t) {
                            var e = new f(this.ctx);
                            t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this.ctx, t)),
                                t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this.ctx, t)),
                                t.node.addEventListener("mousedown", e.pathMouseDown.bind(this.ctx, t)),
                                t.node.addEventListener("touchstart", e.pathMouseDown.bind(this.ctx, t), { passive: !0 });
                        },
                    },
                    {
                        key: "getMarkerStyle",
                        value: function (t) {
                            var e = this.w,
                                i = e.globals.markers.colors,
                                s = e.config.markers.strokeColor || e.config.markers.strokeColors;
                            return { pointStrokeColor: s instanceof Array ? s[t] : s, pointFillColor: i instanceof Array ? i[t] : i };
                        },
                    },
                ]),
                t
            );
        })(),
        L = (function () {
            function t(i) {
                e(this, t),
                    (this.ctx = i),
                    (this.w = i.w),
                    (this.initialAnim = this.w.config.chart.animations.enabled),
                    (this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled),
                    (this.radiusSizes = []);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = new f(this.ctx),
                                n = i.realIndex,
                                r = i.pointsPos,
                                o = i.zRatio,
                                l = i.elParent,
                                h = a.group({ class: "apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type) });
                            if ((h.attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), r.x instanceof Array))
                                for (var c = 0; c < r.x.length; c++) {
                                    var d = e + 1,
                                        u = !0;
                                    0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1);
                                    var g = 0,
                                        p = s.globals.markers.size[n];
                                    o !== 1 / 0 && ((p = s.globals.seriesZ[n][d] / o), void 0 === this.radiusSizes[n] && this.radiusSizes.push([]), this.radiusSizes[n].push(p)), s.config.chart.animations.enabled || (g = p);
                                    var x = r.x[c],
                                        b = r.y[c];
                                    if (((g = g || 0), ((0 === x && 0 === b) || null === b || void 0 === s.globals.series[n][d]) && (u = !1), u)) {
                                        var m = this.drawPoint(x, b, g, p, n, d, e);
                                        h.add(m);
                                    }
                                    l.add(h);
                                }
                        },
                    },
                    {
                        key: "drawPoint",
                        value: function (t, e, i, s, a, n, r) {
                            var o = this.w,
                                l = a,
                                h = new g(this.ctx),
                                c = new u(this.ctx),
                                d = new S(this.ctx),
                                p = new C(this.ctx),
                                x = new f(this.ctx),
                                b = p.getMarkerConfig("apexcharts-marker", l),
                                m = d.fillPath({ seriesNumber: a, patternUnits: "objectBoundingBox", value: o.globals.series[a][r] }),
                                v = x.drawCircle(i);
                            if (
                                (o.config.series[l].data[n] && o.config.series[l].data[n].fillColor && (m = o.config.series[l].data[n].fillColor),
                                v.attr({ cx: t, cy: e, fill: m, stroke: b.pointStrokeColor, strokeWidth: b.pWidth }),
                                o.config.chart.dropShadow.enabled)
                            ) {
                                var y = o.config.chart.dropShadow;
                                c.dropShadow(v, y, a);
                            }
                            if (this.initialAnim && !o.globals.dataChanged) {
                                var w = 1;
                                o.globals.resized || (w = o.config.chart.animations.speed), h.animateCircleRadius(v, 0, s, w, o.globals.easing);
                            }
                            if (o.globals.dataChanged)
                                if (this.dynamicAnim) {
                                    var k,
                                        A,
                                        L,
                                        z,
                                        P = o.config.chart.animations.dynamicAnimation.speed;
                                    null != (z = o.globals.previousPaths[a] && o.globals.previousPaths[a][r]) && ((k = z.x), (A = z.y), (L = void 0 !== z.r ? z.r : s));
                                    for (var M = 0; M < o.globals.collapsedSeries.length; M++) o.globals.collapsedSeries[M].index === a && ((P = 1), (s = 0));
                                    0 === t && 0 === e && (s = 0), h.animateCircle(v, { cx: k, cy: A, r: L }, { cx: t, cy: e, r: s }, P, o.globals.easing);
                                } else v.attr({ r: s });
                            return v.attr({ rel: n, j: n, index: a, "default-marker-size": s }), c.setSelectionFilter(v, a, n), p.addEvents(v), v.node.classList.add("apexcharts-marker"), v;
                        },
                    },
                    {
                        key: "centerTextInBubble",
                        value: function (t) {
                            var e = this.w;
                            return { y: (t += parseInt(e.config.dataLabels.style.fontSize) / 4) };
                        },
                    },
                ]),
                t
            );
        })(),
        z = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "dataLabelsCorrection",
                        value: function (t, e, i, s, a, n, r) {
                            var o = this.w,
                                l = !1,
                                h = new f(this.ctx).getTextRects(i, r),
                                c = h.width,
                                d = h.height;
                            void 0 === o.globals.dataLabelsRects[s] && (o.globals.dataLabelsRects[s] = []), o.globals.dataLabelsRects[s].push({ x: t, y: e, width: c, height: d });
                            var u = o.globals.dataLabelsRects[s].length - 2,
                                g = void 0 !== o.globals.lastDrawnDataLabelsIndexes[s] ? o.globals.lastDrawnDataLabelsIndexes[s][o.globals.lastDrawnDataLabelsIndexes[s].length - 1] : 0;
                            if (void 0 !== o.globals.dataLabelsRects[s][u]) {
                                var p = o.globals.dataLabelsRects[s][g];
                                (t > p.x + p.width + 2 || e > p.y + p.height + 2 || t + c < p.x) && (l = !0);
                            }
                            return (0 === a || n) && (l = !0), { x: t, y: e, drawnextLabel: l };
                        },
                    },
                    {
                        key: "drawDataLabel",
                        value: function (t, e, i) {
                            var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "top",
                                a = this.w,
                                n = new f(this.ctx),
                                r = a.config.dataLabels,
                                o = 0,
                                l = 0,
                                h = i,
                                c = null;
                            if (!r.enabled || t.x instanceof Array != !0) return c;
                            (c = n.group({ class: "apexcharts-data-labels" })).attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")"));
                            for (var d = 0; d < t.x.length; d++)
                                if (((o = t.x[d] + r.offsetX), (l = t.y[d] + r.offsetY - a.globals.markers.size[e] - 5), "bottom" === s && (l = l + 2 * a.globals.markers.size[e] + 1.4 * parseInt(r.style.fontSize)), !isNaN(o))) {
                                    1 === i && 0 === d && (h = 0), 1 === i && 1 === d && (h = 1);
                                    var u = a.globals.series[e][h],
                                        g = "";
                                    if ("bubble" === a.config.chart.type) (g = a.globals.seriesZ[e][h]), (l = t.y[d] + a.config.dataLabels.offsetY), (l = new L(this.ctx).centerTextInBubble(l, e, h).y);
                                    else null != u && (g = a.config.dataLabels.formatter(u, { ctx: this.ctx, seriesIndex: e, dataPointIndex: h, w: a }));
                                    this.plotDataLabelsText({ x: o, y: l, text: g, i: e, j: h, parent: c, offsetCorrection: !0, dataLabelsConfig: a.config.dataLabels });
                                }
                            return c;
                        },
                    },
                    {
                        key: "plotDataLabelsText",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = t.x,
                                a = t.y,
                                n = t.i,
                                r = t.j,
                                o = t.text,
                                l = t.textAnchor,
                                h = t.parent,
                                c = t.dataLabelsConfig,
                                d = t.alwaysDrawDataLabel,
                                g = t.offsetCorrection;
                            if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(n) > -1)) {
                                var p = { x: s, y: a, drawnextLabel: !0 };
                                if ((g && (p = this.dataLabelsCorrection(s, a, o, n, r, d, parseInt(c.style.fontSize))), e.globals.zoomed || ((s = p.x), (a = p.y)), p.drawnextLabel)) {
                                    var x = i.drawText({
                                        width: 100,
                                        height: parseInt(c.style.fontSize),
                                        x: s,
                                        y: a,
                                        foreColor: e.globals.dataLabels.style.colors[n],
                                        textAnchor: l || c.textAnchor,
                                        text: o,
                                        fontSize: c.style.fontSize,
                                        fontFamily: c.style.fontFamily,
                                    });
                                    if ((x.attr({ class: "apexcharts-datalabel", cx: s, cy: a }), c.dropShadow.enabled)) {
                                        var b = c.dropShadow;
                                        new u(this.ctx).dropShadow(x, b);
                                    }
                                    h.add(x), void 0 === e.globals.lastDrawnDataLabelsIndexes[n] && (e.globals.lastDrawnDataLabelsIndexes[n] = []), e.globals.lastDrawnDataLabelsIndexes[n].push(r);
                                }
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        P = (function () {
            function t(i, s) {
                e(this, t), (this.ctx = i), (this.w = i.w);
                var a = this.w;
                (this.barOptions = a.config.plotOptions.bar),
                    (this.isHorizontal = this.barOptions.horizontal),
                    (this.strokeWidth = a.config.stroke.width),
                    (this.isNullValue = !1),
                    (this.xyRatios = s),
                    null !== this.xyRatios &&
                        ((this.xRatio = s.xRatio),
                        (this.yRatio = s.yRatio),
                        (this.invertedXRatio = s.invertedXRatio),
                        (this.invertedYRatio = s.invertedYRatio),
                        (this.baseLineY = s.baseLineY),
                        (this.baseLineInvertedY = s.baseLineInvertedY)),
                    (this.yaxisIndex = 0),
                    (this.seriesLen = 0);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t, e) {
                            var i = this.w,
                                s = new f(this.ctx),
                                a = new y(this.ctx, i);
                            (t = a.getLogSeries(t)), (this.series = t), (this.yRatio = a.getLogYRatios(this.yRatio)), this.initVariables(t);
                            var n = s.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
                            i.config.dataLabels.enabled &&
                                this.totalItems > i.config.plotOptions.bar.dataLabels.maxItems &&
                                console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
                            for (var r = 0, o = 0; r < t.length; r++, o++) {
                                var l,
                                    h,
                                    c,
                                    u,
                                    g = void 0,
                                    p = void 0,
                                    x = void 0,
                                    b = void 0,
                                    m = [],
                                    v = [],
                                    w = i.globals.comboCharts ? e[r] : r,
                                    k = s.group({ class: "apexcharts-series", rel: r + 1, seriesName: d.escapeString(i.globals.seriesNames[w]), "data:realIndex": w });
                                this.ctx.series.addCollapsedClassToSeries(k, w), t[r].length > 0 && (this.visibleI = this.visibleI + 1);
                                var A = 0,
                                    S = 0,
                                    C = 0;
                                this.yRatio.length > 1 && (this.yaxisIndex = w), (this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed);
                                var L = this.initialPositions();
                                (b = L.y), (S = L.barHeight), (h = L.yDivision), (u = L.zeroW), (x = L.x), (C = L.barWidth), (l = L.xDivision), (c = L.zeroH), this.horizontal || v.push(x + C / 2);
                                for (var z = s.group({ class: "apexcharts-datalabels" }), P = 0, M = i.globals.dataPoints; P < i.globals.dataPoints; P++, M--) {
                                    void 0 === this.series[r][P] || null === t[r][P] ? (this.isNullValue = !0) : (this.isNullValue = !1),
                                        i.config.stroke.show && (A = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[w] : this.strokeWidth);
                                    var E = null;
                                    this.isHorizontal
                                        ? ((E = this.drawBarPaths({ indexes: { i: r, j: P, realIndex: w, bc: o }, barHeight: S, strokeWidth: A, pathTo: g, pathFrom: p, zeroW: u, x: x, y: b, yDivision: h, elSeries: k })),
                                          (C = this.series[r][P] / this.invertedYRatio))
                                        : ((E = this.drawColumnPaths({ indexes: { i: r, j: P, realIndex: w, bc: o }, x: x, y: b, xDivision: l, pathTo: g, pathFrom: p, barWidth: C, zeroH: c, strokeWidth: A, elSeries: k })),
                                          (S = this.series[r][P] / this.yRatio[this.yaxisIndex])),
                                        (g = E.pathTo),
                                        (p = E.pathFrom),
                                        (b = E.y),
                                        (x = E.x),
                                        P > 0 && v.push(x + C / 2),
                                        m.push(b);
                                    var T = this.getPathFillColor(t, r, P, w);
                                    k = this.renderSeries({
                                        realIndex: w,
                                        pathFill: T,
                                        j: P,
                                        i: r,
                                        pathFrom: p,
                                        pathTo: g,
                                        strokeWidth: A,
                                        elSeries: k,
                                        x: x,
                                        y: b,
                                        series: t,
                                        barHeight: S,
                                        barWidth: C,
                                        elDataLabelsWrap: z,
                                        visibleSeries: this.visibleI,
                                        type: "bar",
                                    });
                                }
                                (i.globals.seriesXvalues[w] = v), (i.globals.seriesYvalues[w] = m), n.add(k);
                            }
                            return n;
                        },
                    },
                    {
                        key: "getPathFillColor",
                        value: function (t, e, i, s) {
                            var a = this.w,
                                n = new S(this.ctx),
                                r = null,
                                o = this.barOptions.distributed ? i : e;
                            this.barOptions.colors.ranges.length > 0 &&
                                this.barOptions.colors.ranges.map(function (s) {
                                    t[e][i] >= s.from && t[e][i] <= s.to && (r = s.color);
                                });
                            return (
                                a.config.series[e].data[i] && a.config.series[e].data[i].fillColor && (r = a.config.series[e].data[i].fillColor), n.fillPath({ seriesNumber: this.barOptions.distributed ? o : s, color: r, value: t[e][i] })
                            );
                        },
                    },
                    {
                        key: "renderSeries",
                        value: function (t) {
                            var e = t.realIndex,
                                i = t.pathFill,
                                s = t.lineFill,
                                a = t.j,
                                n = t.i,
                                r = t.pathFrom,
                                o = t.pathTo,
                                l = t.strokeWidth,
                                h = t.elSeries,
                                c = t.x,
                                d = t.y,
                                g = t.series,
                                p = t.barHeight,
                                x = t.barWidth,
                                b = t.elDataLabelsWrap,
                                m = t.visibleSeries,
                                v = t.type,
                                y = this.w,
                                w = new f(this.ctx);
                            s || (s = this.barOptions.distributed ? y.globals.stroke.colors[a] : y.globals.stroke.colors[e]),
                                y.config.series[n].data[a] && y.config.series[n].data[a].strokeColor && (s = y.config.series[n].data[a].strokeColor),
                                this.isNullValue && (i = "none");
                            var k = ((a / y.config.chart.animations.animateGradually.delay) * (y.config.chart.animations.speed / y.globals.dataPoints)) / 2.4,
                                A = w.renderPaths({
                                    i: n,
                                    j: a,
                                    realIndex: e,
                                    pathFrom: r,
                                    pathTo: o,
                                    stroke: s,
                                    strokeWidth: l,
                                    strokeLineCap: y.config.stroke.lineCap,
                                    fill: i,
                                    animationDelay: k,
                                    initialSpeed: y.config.chart.animations.speed,
                                    dataChangeSpeed: y.config.chart.animations.dynamicAnimation.speed,
                                    className: "apexcharts-".concat(v, "-area"),
                                    id: "apexcharts-".concat(v, "-area"),
                                });
                            A.attr("clip-path", "url(#gridRectMask".concat(y.globals.cuid, ")")), new u(this.ctx).setSelectionFilter(A, e, a), h.add(A);
                            var S = this.calculateDataLabelsPos({ x: c, y: d, i: n, j: a, series: g, realIndex: e, barHeight: p, barWidth: x, renderedPath: A, visibleSeries: m });
                            return null !== S && b.add(S), h.add(b), h;
                        },
                    },
                    {
                        key: "initVariables",
                        value: function (t) {
                            var e = this.w;
                            (this.series = t), (this.totalItems = 0), (this.seriesLen = 0), (this.visibleI = -1), (this.visibleItems = 1);
                            for (var i = 0; i < t.length; i++)
                                if ((t[i].length > 0 && ((this.seriesLen = this.seriesLen + 1), (this.totalItems += t[i].length)), e.globals.isXNumeric))
                                    for (var s = 0; s < t[i].length; s++) e.globals.seriesX[i][s] > e.globals.minX && e.globals.seriesX[i][s] < e.globals.maxX && this.visibleItems++;
                                else this.visibleItems = e.globals.dataPoints;
                            0 === this.seriesLen && (this.seriesLen = 1);
                        },
                    },
                    {
                        key: "initialPositions",
                        value: function () {
                            var t,
                                e,
                                i,
                                s,
                                a,
                                n,
                                r,
                                o,
                                l = this.w;
                            return (
                                this.isHorizontal
                                    ? ((a = (i = l.globals.gridHeight / l.globals.dataPoints) / this.seriesLen),
                                      l.globals.isXNumeric && (a = (i = l.globals.gridHeight / this.totalItems) / this.seriesLen),
                                      (a = (a * parseInt(this.barOptions.barHeight)) / 100),
                                      (o = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0)),
                                      (e = (i - a * this.seriesLen) / 2))
                                    : ((n = (((s = l.globals.gridWidth / this.visibleItems) / this.seriesLen) * parseInt(this.barOptions.columnWidth)) / 100),
                                      l.globals.isXNumeric && (n = (((s = l.globals.minXDiff / this.xRatio) / this.seriesLen) * parseInt(this.barOptions.columnWidth)) / 100),
                                      (r = l.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? l.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0)),
                                      (t = l.globals.padHorizontal + (s - n * this.seriesLen) / 2)),
                                { x: t, y: e, yDivision: i, xDivision: s, barHeight: a, barWidth: n, zeroH: r, zeroW: o }
                            );
                        },
                    },
                    {
                        key: "drawBarPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = t.barHeight,
                                s = t.strokeWidth,
                                a = t.pathTo,
                                n = t.pathFrom,
                                r = t.zeroW,
                                o = t.x,
                                l = t.y,
                                h = t.yDivision,
                                c = t.elSeries,
                                d = this.w,
                                u = new f(this.ctx),
                                g = e.i,
                                p = e.j,
                                x = e.realIndex,
                                b = e.bc;
                            d.globals.isXNumeric && (l = (d.globals.seriesX[g][p] - d.globals.minX) / this.invertedXRatio - i);
                            var m = l + i * this.visibleI;
                            (a = u.move(r, m)), (n = u.move(r, m)), d.globals.previousPaths.length > 0 && (n = this.getPathFrom(x, p));
                            var v = {
                                    barHeight: i,
                                    strokeWidth: s,
                                    barYPosition: m,
                                    x: (o = void 0 === this.series[g][p] || null === this.series[g][p] ? r : r + this.series[g][p] / this.invertedYRatio - 2 * (this.isReversed ? this.series[g][p] / this.invertedYRatio : 0)),
                                    zeroW: r,
                                },
                                y = this.barEndingShape(d, v, this.series, g, p);
                            if (
                                ((a = a + u.line(y.newX, m) + y.path + u.line(r, m + i - s) + u.line(r, m)),
                                (n = n + u.line(r, m) + y.ending_p_from + u.line(r, m + i - s) + u.line(r, m + i - s) + u.line(r, m)),
                                d.globals.isXNumeric || (l += h),
                                this.barOptions.colors.backgroundBarColors.length > 0 && 0 === g)
                            ) {
                                b >= this.barOptions.colors.backgroundBarColors.length && (b = 0);
                                var w = this.barOptions.colors.backgroundBarColors[b],
                                    k = u.drawRect(0, m - i * this.visibleI, d.globals.gridWidth, i * this.seriesLen, 0, w, this.barOptions.colors.backgroundBarOpacity);
                                c.add(k), k.node.classList.add("apexcharts-backgroundBar");
                            }
                            return { pathTo: a, pathFrom: n, x: o, y: l, barYPosition: m };
                        },
                    },
                    {
                        key: "drawColumnPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = t.x,
                                s = t.y,
                                a = t.xDivision,
                                n = t.pathTo,
                                r = t.pathFrom,
                                o = t.barWidth,
                                l = t.zeroH,
                                h = t.strokeWidth,
                                c = t.elSeries,
                                d = this.w,
                                u = new f(this.ctx),
                                g = e.i,
                                p = e.j,
                                x = e.realIndex,
                                b = e.bc;
                            d.globals.isXNumeric && (i = (d.globals.seriesX[g][p] - d.globals.minX) / this.xRatio - o / 2);
                            var m = i + o * this.visibleI;
                            (n = u.move(m, l)), (r = u.move(m, l)), d.globals.previousPaths.length > 0 && (r = this.getPathFrom(x, p));
                            var v = {
                                    barWidth: o,
                                    strokeWidth: h,
                                    barXPosition: m,
                                    y: (s =
                                        void 0 === this.series[g][p] || null === this.series[g][p] ? l : l - this.series[g][p] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[g][p] / this.yRatio[this.yaxisIndex] : 0)),
                                    zeroH: l,
                                },
                                y = this.barEndingShape(d, v, this.series, g, p);
                            if (
                                ((n = n + u.line(m, y.newY) + y.path + u.line(m + o - h, l) + u.line(m - h / 2, l)),
                                (r = r + u.line(m, l) + y.ending_p_from + u.line(m + o - h, l) + u.line(m + o - h, l) + u.line(m - h / 2, l)),
                                d.globals.isXNumeric || (i += a),
                                this.barOptions.colors.backgroundBarColors.length > 0 && 0 === g)
                            ) {
                                b >= this.barOptions.colors.backgroundBarColors.length && (b = 0);
                                var w = this.barOptions.colors.backgroundBarColors[b],
                                    k = u.drawRect(m - o * this.visibleI, 0, o * this.seriesLen, d.globals.gridHeight, 0, w, this.barOptions.colors.backgroundBarOpacity);
                                c.add(k), k.node.classList.add("apexcharts-backgroundBar");
                            }
                            return { pathTo: n, pathFrom: r, x: i, y: s, barXPosition: m };
                        },
                    },
                    {
                        key: "getPathFrom",
                        value: function (t, e) {
                            for (var i, s = this.w, a = 0; a < s.globals.previousPaths.length; a++) {
                                var n = s.globals.previousPaths[a];
                                n.paths.length > 0 && parseInt(n.realIndex) === parseInt(t) && void 0 !== s.globals.previousPaths[a].paths[e] && (i = s.globals.previousPaths[a].paths[e].d);
                            }
                            return i;
                        },
                    },
                    {
                        key: "calculateDataLabelsPos",
                        value: function (t) {
                            var e = t.x,
                                i = t.y,
                                s = t.i,
                                a = t.j,
                                n = t.realIndex,
                                r = t.series,
                                o = t.barHeight,
                                l = t.barWidth,
                                h = t.visibleSeries,
                                c = t.renderedPath,
                                d = this.w,
                                u = new f(this.ctx),
                                g = Array.isArray(this.strokeWidth) ? this.strokeWidth[n] : this.strokeWidth,
                                p = e + parseFloat(l * h),
                                x = i + parseFloat(o * h);
                            d.globals.isXNumeric && !d.globals.isBarHorizontal && ((p = e + parseFloat(l * (h + 1)) - g), (x = i + parseFloat(o * (h + 1)) - g));
                            var b = e,
                                m = i,
                                v = {},
                                y = d.config.dataLabels,
                                w = this.barOptions.dataLabels,
                                k = y.offsetX,
                                A = y.offsetY,
                                S = { width: 0, height: 0 };
                            return (
                                d.config.dataLabels.enabled && (S = u.getTextRects(d.globals.yLabelFormatters[0](d.globals.maxY), parseInt(y.style.fontSize))),
                                (v = this.isHorizontal
                                    ? this.calculateBarsDataLabelsPosition({
                                          x: e,
                                          y: i,
                                          i: s,
                                          j: a,
                                          renderedPath: c,
                                          bcy: x,
                                          barHeight: o,
                                          barWidth: l,
                                          textRects: S,
                                          strokeWidth: g,
                                          dataLabelsX: b,
                                          dataLabelsY: m,
                                          barDataLabelsConfig: w,
                                          offX: k,
                                          offY: A,
                                      })
                                    : this.calculateColumnsDataLabelsPosition({
                                          x: e,
                                          y: i,
                                          i: s,
                                          j: a,
                                          renderedPath: c,
                                          realIndex: n,
                                          bcx: p,
                                          bcy: x,
                                          barHeight: o,
                                          barWidth: l,
                                          textRects: S,
                                          strokeWidth: g,
                                          dataLabelsY: m,
                                          barDataLabelsConfig: w,
                                          offX: k,
                                          offY: A,
                                      })),
                                c.attr({ cy: v.bcy, cx: v.bcx, j: a, val: r[s][a], barHeight: o, barWidth: l }),
                                this.drawCalculatedDataLabels({ x: v.dataLabelsX, y: v.dataLabelsY, val: r[s][a], i: n, j: a, barWidth: l, barHeight: o, textRects: S, dataLabelsConfig: y })
                            );
                        },
                    },
                    {
                        key: "calculateColumnsDataLabelsPosition",
                        value: function (t) {
                            var e,
                                i = this.w,
                                s = t.i,
                                a = t.j,
                                n = t.y,
                                r = t.bcx,
                                o = t.barWidth,
                                l = t.barHeight,
                                h = t.textRects,
                                c = t.dataLabelsY,
                                d = t.barDataLabelsConfig,
                                u = t.strokeWidth,
                                g = t.offX,
                                f = t.offY,
                                p = i.globals.gridWidth / i.globals.dataPoints;
                            (r -= u / 2), (e = i.globals.isXNumeric ? r - o / 2 + g : r - p + o / 2 + g);
                            var x = this.series[s][a] <= 0;
                            switch ((this.isReversed && (n -= l), d.position)) {
                                case "center":
                                    c = x ? n + l / 2 + h.height / 2 + f : n + l / 2 + h.height / 2 - f;
                                    break;
                                case "bottom":
                                    c = x ? n + l + h.height + u + f : n + l - h.height / 2 + u - f;
                                    break;
                                case "top":
                                    c = x ? n - h.height / 2 - f : n + h.height + f;
                            }
                            return i.config.chart.stacked || (c < 0 ? (c = 0 + u) : c + h.height / 3 > i.globals.gridHeight && (c = i.globals.gridHeight - u)), { bcx: r, bcy: n, dataLabelsX: e, dataLabelsY: c };
                        },
                    },
                    {
                        key: "calculateBarsDataLabelsPosition",
                        value: function (t) {
                            var e = this.w,
                                i = t.x,
                                s = t.i,
                                a = t.j,
                                n = t.bcy,
                                r = t.barHeight,
                                o = t.barWidth,
                                l = t.textRects,
                                h = t.dataLabelsX,
                                c = t.strokeWidth,
                                d = t.barDataLabelsConfig,
                                u = t.offX,
                                g = t.offY,
                                f = n - e.globals.gridHeight / e.globals.dataPoints + r / 2 + l.height / 2 + g - 3,
                                p = this.series[s][a] <= 0;
                            switch ((this.isReversed && (i += o), d.position)) {
                                case "center":
                                    h = p ? i - o / 2 - u : i - o / 2 + u;
                                    break;
                                case "bottom":
                                    h = p ? i - o - c - Math.round(l.width / 2) - u : i - o + c + Math.round(l.width / 2) + u;
                                    break;
                                case "top":
                                    h = p ? i - c + Math.round(l.width / 2) - u : i - c - Math.round(l.width / 2) + u;
                            }
                            return e.config.chart.stacked || (h < 0 ? (h = h + l.width + c) : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), { bcx: i, bcy: n, dataLabelsX: h, dataLabelsY: f };
                        },
                    },
                    {
                        key: "drawCalculatedDataLabels",
                        value: function (t) {
                            var e = t.x,
                                i = t.y,
                                s = t.val,
                                a = t.i,
                                n = t.j,
                                r = t.textRects,
                                o = t.barHeight,
                                l = t.barWidth,
                                h = t.dataLabelsConfig,
                                c = this.w,
                                d = new z(this.ctx),
                                u = new f(this.ctx),
                                g = h.formatter,
                                p = null,
                                x = c.globals.collapsedSeriesIndices.indexOf(a) > -1;
                            if (h.enabled && !x) {
                                p = u.group({ class: "apexcharts-data-labels" });
                                var b = "";
                                null != s && (b = g(s, { seriesIndex: a, dataPointIndex: n, w: c })),
                                    0 === s && c.config.chart.stacked && (b = ""),
                                    c.config.chart.stacked &&
                                        this.barOptions.dataLabels.hideOverflowingLabels &&
                                        (this.isHorizontal
                                            ? ((l = this.series[a][n] / this.yRatio[this.yaxisIndex]), r.width / 1.6 > l && (b = ""))
                                            : ((o = this.series[a][n] / this.yRatio[this.yaxisIndex]), r.height / 1.6 > o && (b = ""))),
                                    d.plotDataLabelsText({ x: e, y: i, text: b, i: a, j: n, parent: p, dataLabelsConfig: h, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
                            }
                            return p;
                        },
                    },
                    {
                        key: "barEndingShape",
                        value: function (t, e, i, s, a) {
                            var n = new f(this.ctx);
                            if (this.isHorizontal) {
                                var r = null,
                                    o = e.x;
                                if (void 0 !== i[s][a] || null !== i[s][a]) {
                                    var l = i[s][a] < 0,
                                        h = e.barHeight / 2 - e.strokeWidth;
                                    switch ((l && (h = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || ("rounded" === this.barOptions.endingShape && (o = e.x - h / 2)), this.barOptions.endingShape)) {
                                        case "flat":
                                            r = n.line(o, e.barYPosition + e.barHeight - e.strokeWidth);
                                            break;
                                        case "rounded":
                                            r = n.quadraticCurve(o + h, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, o, e.barYPosition + e.barHeight - e.strokeWidth);
                                    }
                                }
                                return { path: r, ending_p_from: "", newX: o };
                            }
                            var c = null,
                                d = e.y;
                            if (void 0 !== i[s][a] || null !== i[s][a]) {
                                var u = i[s][a] < 0,
                                    g = e.barWidth / 2 - e.strokeWidth;
                                switch ((u && (g = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || ("rounded" === this.barOptions.endingShape && (d += g / 2)), this.barOptions.endingShape)) {
                                    case "flat":
                                        c = n.line(e.barXPosition + e.barWidth - e.strokeWidth, d);
                                        break;
                                    case "rounded":
                                        c = n.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, d - g, e.barXPosition + e.barWidth - e.strokeWidth, d);
                                }
                            }
                            return { path: c, ending_p_from: "", newY: d };
                        },
                    },
                ]),
                t
            );
        })(),
        M = (function (t) {
            function i() {
                return e(this, i), h(this, o(i).apply(this, arguments));
            }
            return (
                r(i, P),
                s(i, [
                    {
                        key: "draw",
                        value: function (t, e) {
                            var i = this.w;
                            (this.graphics = new f(this.ctx)), (this.fill = new S(this.ctx)), (this.bar = new P(this.ctx, this.xyRatios));
                            var s = new y(this.ctx, i);
                            (t = s.getLogSeries(t)),
                                (this.yRatio = s.getLogYRatios(this.yRatio)),
                                this.initVariables(t),
                                "100%" === i.config.chart.stackType && (t = i.globals.seriesPercent.slice()),
                                (this.series = t),
                                (this.totalItems = 0),
                                (this.prevY = []),
                                (this.prevX = []),
                                (this.prevYF = []),
                                (this.prevXF = []),
                                (this.prevYVal = []),
                                (this.prevXVal = []),
                                (this.xArrj = []),
                                (this.xArrjF = []),
                                (this.xArrjVal = []),
                                (this.yArrj = []),
                                (this.yArrjF = []),
                                (this.yArrjVal = []);
                            for (var a = 0; a < t.length; a++) t[a].length > 0 && (this.totalItems += t[a].length);
                            for (var n = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), r = 0, o = 0, l = 0, h = 0; l < t.length; l++, h++) {
                                var c = void 0,
                                    u = void 0,
                                    g = void 0,
                                    p = void 0,
                                    x = void 0,
                                    b = void 0,
                                    m = [],
                                    v = [],
                                    w = i.globals.comboCharts ? e[l] : l;
                                this.yRatio.length > 1 && (this.yaxisIndex = w), (this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed);
                                var k = this.graphics.group({ class: "apexcharts-series", seriesName: d.escapeString(i.globals.seriesNames[w]), rel: l + 1, "data:realIndex": w }),
                                    A = this.graphics.group({ class: "apexcharts-datalabels" }),
                                    C = 0,
                                    L = 0,
                                    z = 0,
                                    M = this.initialPositions(r, o, g, p, x, b);
                                (o = M.y),
                                    (L = M.barHeight),
                                    (p = M.yDivision),
                                    (b = M.zeroW),
                                    (r = M.x),
                                    (z = M.barWidth),
                                    (g = M.xDivision),
                                    (x = M.zeroH),
                                    (this.yArrj = []),
                                    (this.yArrjF = []),
                                    (this.yArrjVal = []),
                                    (this.xArrj = []),
                                    (this.xArrjF = []),
                                    (this.xArrjVal = []);
                                for (var E = 0; E < i.globals.dataPoints; E++) {
                                    i.config.stroke.show && (C = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[w] : this.strokeWidth);
                                    var T = null;
                                    this.isHorizontal
                                        ? ((T = this.drawBarPaths({ indexes: { i: l, j: E, realIndex: w, bc: h }, barHeight: L, strokeWidth: C, pathTo: c, pathFrom: u, zeroW: b, x: r, y: o, yDivision: p, elSeries: k })),
                                          (z = this.series[l][E] / this.invertedYRatio))
                                        : ((T = this.drawColumnPaths({ indexes: { i: l, j: E, realIndex: w, bc: h }, x: r, y: o, xDivision: g, pathTo: c, pathFrom: u, barWidth: z, zeroH: x, strokeWidth: C, elSeries: k })),
                                          (L = this.series[l][E] / this.yRatio[this.yaxisIndex])),
                                        (c = T.pathTo),
                                        (u = T.pathFrom),
                                        (o = T.y),
                                        (r = T.x),
                                        m.push(r),
                                        v.push(o);
                                    var X = this.bar.getPathFillColor(t, l, E, w);
                                    k = this.renderSeries({
                                        realIndex: w,
                                        pathFill: X,
                                        j: E,
                                        i: l,
                                        pathFrom: u,
                                        pathTo: c,
                                        strokeWidth: C,
                                        elSeries: k,
                                        x: r,
                                        y: o,
                                        series: t,
                                        barHeight: L,
                                        barWidth: z,
                                        elDataLabelsWrap: A,
                                        type: "bar",
                                        visibleSeries: 0,
                                    });
                                }
                                (i.globals.seriesXvalues[w] = m),
                                    (i.globals.seriesYvalues[w] = v),
                                    this.prevY.push(this.yArrj),
                                    this.prevYF.push(this.yArrjF),
                                    this.prevYVal.push(this.yArrjVal),
                                    this.prevX.push(this.xArrj),
                                    this.prevXF.push(this.xArrjF),
                                    this.prevXVal.push(this.xArrjVal),
                                    n.add(k);
                            }
                            return n;
                        },
                    },
                    {
                        key: "initialPositions",
                        value: function (t, e, i, s, a, n) {
                            var r,
                                o,
                                l = this.w;
                            return (
                                this.isHorizontal
                                    ? ((r = ((r = s = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight)) / 100),
                                      (n = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0)),
                                      (e = (s - r) / 2))
                                    : ((o = i = l.globals.gridWidth / l.globals.dataPoints),
                                      (o = l.globals.isXNumeric ? ((i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth)) / 100 : (o * parseInt(l.config.plotOptions.bar.columnWidth)) / 100),
                                      (a = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0)),
                                      (t = l.globals.padHorizontal + (i - o) / 2)),
                                { x: t, y: e, yDivision: s, xDivision: i, barHeight: r, barWidth: o, zeroH: a, zeroW: n }
                            );
                        },
                    },
                    {
                        key: "drawBarPaths",
                        value: function (t) {
                            for (
                                var e,
                                    i = t.indexes,
                                    s = t.barHeight,
                                    a = t.strokeWidth,
                                    n = t.pathTo,
                                    r = t.pathFrom,
                                    o = t.zeroW,
                                    l = t.x,
                                    h = t.y,
                                    c = t.yDivision,
                                    d = t.elSeries,
                                    u = this.w,
                                    g = h,
                                    f = i.i,
                                    p = i.j,
                                    x = i.realIndex,
                                    b = i.bc,
                                    m = 0,
                                    v = 0;
                                v < this.prevXF.length;
                                v++
                            )
                                m += this.prevXF[v][p];
                            if (f > 0) {
                                var y = o;
                                this.prevXVal[f - 1][p] < 0
                                    ? (y = this.series[f][p] >= 0 ? this.prevX[f - 1][p] + m - 2 * (this.isReversed ? m : 0) : this.prevX[f - 1][p])
                                    : this.prevXVal[f - 1][p] >= 0 && (y = this.series[f][p] >= 0 ? this.prevX[f - 1][p] : this.prevX[f - 1][p] - m + 2 * (this.isReversed ? m : 0)),
                                    (e = y);
                            } else e = o;
                            l = null === this.series[f][p] ? e : e + this.series[f][p] / this.invertedYRatio - 2 * (this.isReversed ? this.series[f][p] / this.invertedYRatio : 0);
                            var w = { barHeight: s, strokeWidth: a, invertedYRatio: this.invertedYRatio, barYPosition: g, x: l },
                                k = this.bar.barEndingShape(u, w, this.series, f, p);
                            if (
                                (this.series.length > 1 && f !== this.endingShapeOnSeriesNumber && (k.path = this.graphics.line(k.newX, g + s - a)),
                                this.xArrj.push(k.newX),
                                this.xArrjF.push(Math.abs(e - k.newX)),
                                this.xArrjVal.push(this.series[f][p]),
                                (n = this.graphics.move(e, g)),
                                (r = this.graphics.move(e, g)),
                                u.globals.previousPaths.length > 0 && (r = this.bar.getPathFrom(x, p, !1)),
                                (n = n + this.graphics.line(k.newX, g) + k.path + this.graphics.line(e, g + s - a) + this.graphics.line(e, g)),
                                (r = r + this.graphics.line(e, g) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g)),
                                u.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === f)
                            ) {
                                b >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (b = 0);
                                var A = u.config.plotOptions.bar.colors.backgroundBarColors[b],
                                    S = this.graphics.drawRect(0, g, u.globals.gridWidth, s, 0, A, u.config.plotOptions.bar.colors.backgroundBarOpacity);
                                d.add(S), S.node.classList.add("apexcharts-backgroundBar");
                            }
                            return { pathTo: n, pathFrom: r, x: l, y: (h += c) };
                        },
                    },
                    {
                        key: "drawColumnPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = t.x,
                                s = t.y,
                                a = t.xDivision,
                                n = t.pathTo,
                                r = t.pathFrom,
                                o = t.barWidth,
                                l = t.zeroH,
                                h = t.strokeWidth,
                                c = t.elSeries,
                                d = this.w,
                                u = e.i,
                                g = e.j,
                                f = e.realIndex,
                                p = e.bc;
                            if (d.globals.isXNumeric) {
                                var x = d.globals.seriesX[u][g];
                                x || (x = 0), (i = (x - d.globals.minX) / this.xRatio - o / 2);
                            }
                            for (var b, m = i, v = 0, y = 0; y < this.prevYF.length; y++) v += this.prevYF[y][g];
                            if ((u > 0 && !d.globals.isXNumeric) || (u > 0 && d.globals.isXNumeric && d.globals.seriesX[u - 1][g] === d.globals.seriesX[u][g])) {
                                var w = this.prevY[u - 1][g];
                                b = this.prevYVal[u - 1][g] < 0 ? (this.series[u][g] >= 0 ? w - v + 2 * (this.isReversed ? v : 0) : w) : this.series[u][g] >= 0 ? w : w + v - 2 * (this.isReversed ? v : 0);
                            } else b = d.globals.gridHeight - l;
                            s = b - this.series[u][g] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[u][g] / this.yRatio[this.yaxisIndex] : 0);
                            var k = { barWidth: o, strokeWidth: h, yRatio: this.yRatio[this.yaxisIndex], barXPosition: m, y: s },
                                A = this.bar.barEndingShape(d, k, this.series, u, g);
                            if (
                                (this.yArrj.push(A.newY),
                                this.yArrjF.push(Math.abs(b - A.newY)),
                                this.yArrjVal.push(this.series[u][g]),
                                (n = this.graphics.move(m, b)),
                                (r = this.graphics.move(m, b)),
                                d.globals.previousPaths.length > 0 && (r = this.bar.getPathFrom(f, g, !1)),
                                (n = n + this.graphics.line(m, A.newY) + A.path + this.graphics.line(m + o - h, b) + this.graphics.line(m - h / 2, b)),
                                (r = r + this.graphics.line(m, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m - h / 2, b)),
                                d.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === u)
                            ) {
                                p >= d.config.plotOptions.bar.colors.backgroundBarColors.length && (p = 0);
                                var S = d.config.plotOptions.bar.colors.backgroundBarColors[p],
                                    C = this.graphics.drawRect(m, 0, o, d.globals.gridHeight, 0, S, d.config.plotOptions.bar.colors.backgroundBarOpacity);
                                c.add(C), C.node.classList.add("apexcharts-backgroundBar");
                            }
                            return (i += a), { pathTo: n, pathFrom: r, x: d.globals.isXNumeric ? i - a : i, y: s };
                        },
                    },
                    {
                        key: "checkZeroSeries",
                        value: function (t) {
                            for (var e = t.series, i = this.w, s = 0; s < e.length; s++) {
                                for (var a = 0, n = 0; n < e[i.globals.maxValsInArrayIndex].length; n++) a += e[s][n];
                                0 === a && this.zeroSerieses.push(s);
                            }
                            for (var r = e.length - 1; r >= 0; r--) this.zeroSerieses.indexOf(r) > -1 && r === this.endingShapeOnSeriesNumber && (this.endingShapeOnSeriesNumber -= 1);
                        },
                    },
                ]),
                i
            );
        })(),
        E = (function (t) {
            function i() {
                return e(this, i), h(this, o(i).apply(this, arguments));
            }
            return (
                r(i, P),
                s(i, [
                    {
                        key: "draw",
                        value: function (t, e) {
                            var i = this.w,
                                s = new f(this.ctx),
                                a = new S(this.ctx);
                            this.candlestickOptions = this.w.config.plotOptions.candlestick;
                            var n = new y(this.ctx, i);
                            (t = n.getLogSeries(t)), (this.series = t), (this.yRatio = n.getLogYRatios(this.yRatio)), this.initVariables(t);
                            for (var r = s.group({ class: "apexcharts-candlestick-series apexcharts-plot-series" }), o = 0, l = 0; o < t.length; o++, l++) {
                                var h,
                                    c,
                                    u = void 0,
                                    g = void 0,
                                    p = void 0,
                                    x = void 0,
                                    b = [],
                                    m = [],
                                    v = i.globals.comboCharts ? e[o] : o,
                                    w = s.group({ class: "apexcharts-series", seriesName: d.escapeString(i.globals.seriesNames[v]), rel: o + 1, "data:realIndex": v });
                                t[o].length > 0 && (this.visibleI = this.visibleI + 1);
                                var k,
                                    A,
                                    C = 0;
                                this.yRatio.length > 1 && (this.yaxisIndex = v);
                                var L = this.initialPositions();
                                (x = L.y), (k = L.barHeight), (p = L.x), (A = L.barWidth), (h = L.xDivision), (c = L.zeroH), m.push(p + A / 2);
                                for (var z = s.group({ class: "apexcharts-datalabels" }), P = 0, M = i.globals.dataPoints; P < i.globals.dataPoints; P++, M--) {
                                    void 0 === this.series[o][P] || null === t[o][P] ? (this.isNullValue = !0) : (this.isNullValue = !1),
                                        i.config.stroke.show && (C = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[v] : this.strokeWidth);
                                    var E,
                                        T = this.drawCandleStickPaths({ indexes: { i: o, j: P, realIndex: v, bc: l }, x: p, y: x, xDivision: h, pathTo: u, pathFrom: g, barWidth: A, zeroH: c, strokeWidth: C, elSeries: w });
                                    (u = T.pathTo), (g = T.pathFrom), (x = T.y), (p = T.x), (E = T.color), P > 0 && m.push(p + A / 2), b.push(x);
                                    var X = a.fillPath({ seriesNumber: v, color: E, value: t[o][P] }),
                                        I = this.candlestickOptions.wick.useFillColor ? E : void 0;
                                    w = this.renderSeries({
                                        realIndex: v,
                                        pathFill: X,
                                        lineFill: I,
                                        j: P,
                                        i: o,
                                        pathFrom: g,
                                        pathTo: u,
                                        strokeWidth: C,
                                        elSeries: w,
                                        x: p,
                                        y: x,
                                        series: t,
                                        barHeight: k,
                                        barWidth: A,
                                        elDataLabelsWrap: z,
                                        visibleSeries: this.visibleI,
                                        type: "candlestick",
                                    });
                                }
                                (i.globals.seriesXvalues[v] = m), (i.globals.seriesYvalues[v] = b), r.add(w);
                            }
                            return r;
                        },
                    },
                    {
                        key: "drawCandleStickPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = t.x,
                                s = (t.y, t.xDivision),
                                a = t.pathTo,
                                n = t.pathFrom,
                                r = t.barWidth,
                                o = t.zeroH,
                                l = t.strokeWidth,
                                h = this.w,
                                c = new f(this.ctx),
                                d = e.i,
                                u = e.j,
                                g = !0,
                                p = h.config.plotOptions.candlestick.colors.upward,
                                x = h.config.plotOptions.candlestick.colors.downward,
                                b = this.yRatio[this.yaxisIndex],
                                m = e.realIndex,
                                v = this.getOHLCValue(m, u),
                                y = o,
                                w = o;
                            v.o > v.c && (g = !1);
                            var k = Math.min(v.o, v.c),
                                A = Math.max(v.o, v.c);
                            h.globals.isXNumeric && (i = (h.globals.seriesX[d][u] - h.globals.minX) / this.xRatio - r / 2);
                            var S = i + r * this.visibleI;
                            return (
                                void 0 === this.series[d][u] || null === this.series[d][u] ? (k = o) : ((k = o - k / b), (A = o - A / b), (y = o - v.h / b), (w = o - v.l / b)),
                                c.move(S, o),
                                (n = c.move(S, k)),
                                h.globals.previousPaths.length > 0 && (n = this.getPathFrom(m, u, !0)),
                                (a =
                                    c.move(S, A) +
                                    c.line(S + r / 2, A) +
                                    c.line(S + r / 2, y) +
                                    c.line(S + r / 2, A) +
                                    c.line(S + r, A) +
                                    c.line(S + r, k) +
                                    c.line(S + r / 2, k) +
                                    c.line(S + r / 2, w) +
                                    c.line(S + r / 2, k) +
                                    c.line(S, k) +
                                    c.line(S, A - l / 2)),
                                (n += c.move(S, k)),
                                h.globals.isXNumeric || (i += s),
                                { pathTo: a, pathFrom: n, x: i, y: A, barXPosition: S, color: g ? p : x }
                            );
                        },
                    },
                    {
                        key: "getOHLCValue",
                        value: function (t, e) {
                            var i = this.w;
                            return { o: i.globals.seriesCandleO[t][e], h: i.globals.seriesCandleH[t][e], l: i.globals.seriesCandleL[t][e], c: i.globals.seriesCandleC[t][e] };
                        },
                    },
                ]),
                i
            );
        })(),
        T = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "drawXCrosshairs",
                        value: function () {
                            var t = this.w,
                                e = new f(this.ctx),
                                i = new u(this.ctx),
                                s = t.config.xaxis.crosshairs.fill.gradient,
                                a = t.config.xaxis.crosshairs.dropShadow,
                                n = t.config.xaxis.crosshairs.fill.type,
                                r = s.colorFrom,
                                o = s.colorTo,
                                l = s.opacityFrom,
                                h = s.opacityTo,
                                c = s.stops,
                                g = a.enabled,
                                p = a.left,
                                x = a.top,
                                b = a.blur,
                                m = a.color,
                                v = a.opacity,
                                y = t.config.xaxis.crosshairs.fill.color;
                            if (t.config.xaxis.crosshairs.show) {
                                "gradient" === n && (y = e.drawGradient("vertical", r, o, l, h, null, c, null));
                                var w = e.drawRect();
                                1 === t.config.xaxis.crosshairs.width && (w = e.drawLine()),
                                    w.attr({
                                        class: "apexcharts-xcrosshairs",
                                        x: 0,
                                        y: 0,
                                        y2: t.globals.gridHeight,
                                        width: d.isNumber(t.config.xaxis.crosshairs.width) ? t.config.xaxis.crosshairs.width : 0,
                                        height: t.globals.gridHeight,
                                        fill: y,
                                        filter: "none",
                                        "fill-opacity": t.config.xaxis.crosshairs.opacity,
                                        stroke: t.config.xaxis.crosshairs.stroke.color,
                                        "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                                        "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray,
                                    }),
                                    g && (w = i.dropShadow(w, { left: p, top: x, blur: b, color: m, opacity: v })),
                                    t.globals.dom.elGraphical.add(w);
                            }
                        },
                    },
                    {
                        key: "drawYCrosshairs",
                        value: function () {
                            var t = this.w,
                                e = new f(this.ctx),
                                i = t.config.yaxis[0].crosshairs;
                            if (t.config.yaxis[0].crosshairs.show) {
                                var s = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                                s.attr({ class: "apexcharts-ycrosshairs" }), t.globals.dom.elGraphical.add(s);
                            }
                            var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
                            a.attr({ class: "apexcharts-ycrosshairs-hidden" }), t.globals.dom.elGraphical.add(a);
                        },
                    },
                ]),
                t
            );
        })(),
        X = (function () {
            function t(i, s) {
                e(this, t),
                    (this.ctx = i),
                    (this.w = i.w),
                    (this.xRatio = s.xRatio),
                    (this.yRatio = s.yRatio),
                    (this.negRange = !1),
                    (this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation),
                    (this.rectRadius = this.w.config.plotOptions.heatmap.radius),
                    (this.strokeWidth = this.w.config.stroke.width);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = i.group({ class: "apexcharts-heatmap" });
                            s.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
                            var a = e.globals.gridWidth / e.globals.dataPoints,
                                n = e.globals.gridHeight / e.globals.series.length,
                                r = 0,
                                o = !1;
                            this.checkColorRange();
                            var l = t.slice();
                            e.config.yaxis[0].reversed && ((o = !0), l.reverse());
                            for (var h = o ? 0 : l.length - 1; o ? h < l.length : h >= 0; o ? h++ : h--) {
                                var c = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: d.escapeString(e.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
                                if (e.config.chart.dropShadow.enabled) {
                                    var g = e.config.chart.dropShadow;
                                    new u(this.ctx).dropShadow(c, g, h);
                                }
                                for (var p = 0, x = 0; x < l[h].length; x++) {
                                    var b = 1,
                                        m = this.determineHeatColor(h, x);
                                    if (e.globals.hasNegs || this.negRange) {
                                        var v = e.config.plotOptions.heatmap.shadeIntensity;
                                        b = e.config.plotOptions.heatmap.reverseNegativeShade
                                            ? m.percent < 0
                                                ? (m.percent / 100) * (1.25 * v)
                                                : (1 - m.percent / 100) * (1.25 * v)
                                            : m.percent < 0
                                            ? 1 - (1 + m.percent / 100) * v
                                            : (1 - m.percent / 100) * v;
                                    } else b = 1 - m.percent / 100;
                                    var y = m.color;
                                    if (e.config.plotOptions.heatmap.enableShades) {
                                        var w = new d();
                                        y = d.hexToRgba(w.shadeColor(b, m.color), e.config.fill.opacity);
                                    }
                                    var k = this.rectRadius,
                                        A = i.drawRect(p, r, a, n, k);
                                    if (
                                        (A.attr({ cx: p, cy: r }),
                                        A.node.classList.add("apexcharts-heatmap-rect"),
                                        c.add(A),
                                        A.attr({ fill: y, i: h, index: h, j: x, val: l[h][x], "stroke-width": this.strokeWidth, stroke: e.globals.stroke.colors[0], color: y }),
                                        A.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, A)),
                                        A.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, A)),
                                        A.node.addEventListener("mousedown", i.pathMouseDown.bind(this, A)),
                                        e.config.chart.animations.enabled && !e.globals.dataChanged)
                                    ) {
                                        var S = 1;
                                        e.globals.resized || (S = e.config.chart.animations.speed), this.animateHeatMap(A, p, r, a, n, S);
                                    }
                                    if (e.globals.dataChanged) {
                                        var C = 1;
                                        if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                            C = this.dynamicAnim.speed;
                                            var L = e.globals.previousPaths[h] && e.globals.previousPaths[h][x] && e.globals.previousPaths[h][x].color;
                                            L || (L = "rgba(255, 255, 255, 0)"), this.animateHeatColor(A, d.isColorHex(L) ? L : d.rgb2hex(L), d.isColorHex(y) ? y : d.rgb2hex(y), C);
                                        }
                                    }
                                    var z = this.calculateHeatmapDataLabels({ x: p, y: r, i: h, j: x, series: l, rectHeight: n, rectWidth: a });
                                    null !== z && c.add(z), (p += a);
                                }
                                (r += n), s.add(c);
                            }
                            var P = e.globals.yAxisScale[0].result.slice();
                            e.config.yaxis[0].reversed ? P.unshift("") : P.push(""), (e.globals.yAxisScale[0].result = P);
                            var M = e.globals.gridHeight / e.globals.series.length;
                            return (e.config.yaxis[0].labels.offsetY = -M / 2), s;
                        },
                    },
                    {
                        key: "checkColorRange",
                        value: function () {
                            var t = this,
                                e = this.w.config.plotOptions.heatmap;
                            e.colorScale.ranges.length > 0 &&
                                e.colorScale.ranges.map(function (e, i) {
                                    e.from < 0 && (t.negRange = !0);
                                });
                        },
                    },
                    {
                        key: "determineHeatColor",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.globals.series[t][e],
                                a = i.config.plotOptions.heatmap,
                                n = a.colorScale.inverse ? e : t,
                                r = i.globals.colors[n],
                                o = Math.min.apply(Math, c(i.globals.series[t])),
                                l = Math.max.apply(Math, c(i.globals.series[t]));
                            a.distributed || ((o = i.globals.minY), (l = i.globals.maxY)),
                                void 0 !== a.colorScale.min && ((o = a.colorScale.min < i.globals.minY ? a.colorScale.min : i.globals.minY), (l = a.colorScale.max > i.globals.maxY ? a.colorScale.max : i.globals.maxY));
                            var h = Math.abs(l) + Math.abs(o),
                                d = (100 * s) / (0 === h ? h - 1e-6 : h);
                            a.colorScale.ranges.length > 0 &&
                                a.colorScale.ranges.map(function (t, e) {
                                    if (s >= t.from && s <= t.to) {
                                        (r = t.color), (o = t.from), (l = t.to);
                                        var i = Math.abs(l) + Math.abs(o);
                                        d = (100 * s) / (0 === i ? i - 1e-6 : i);
                                    }
                                });
                            return { color: r, percent: d };
                        },
                    },
                    {
                        key: "calculateHeatmapDataLabels",
                        value: function (t) {
                            var e = t.x,
                                i = t.y,
                                s = t.i,
                                a = t.j,
                                n = (t.series, t.rectHeight),
                                r = t.rectWidth,
                                o = this.w,
                                l = o.config.dataLabels,
                                h = new f(this.ctx),
                                c = new z(this.ctx),
                                d = l.formatter,
                                u = null;
                            if (l.enabled) {
                                u = h.group({ class: "apexcharts-data-labels" });
                                var g = l.offsetX,
                                    p = l.offsetY,
                                    x = e + r / 2 + g,
                                    b = i + n / 2 + parseInt(l.style.fontSize) / 3 + p,
                                    m = d(o.globals.series[s][a], { seriesIndex: s, dataPointIndex: a, w: o });
                                c.plotDataLabelsText({ x: x, y: b, text: m, i: s, j: a, parent: u, dataLabelsConfig: l });
                            }
                            return u;
                        },
                    },
                    {
                        key: "animateHeatMap",
                        value: function (t, e, i, s, a, n) {
                            var r = this;
                            new g(this.ctx).animateRect(t, { x: e + s / 2, y: i + a / 2, width: 0, height: 0 }, { x: e, y: i, width: s, height: a }, n, function () {
                                r.w.globals.animationEnded = !0;
                            });
                        },
                    },
                    {
                        key: "animateHeatColor",
                        value: function (t, e, i, s) {
                            t.attr({ fill: e }).animate(s).attr({ fill: i });
                        },
                    },
                ]),
                t
            );
        })(),
        I = (function () {
            function t(i) {
                e(this, t),
                    (this.ctx = i),
                    (this.w = i.w),
                    (this.chartType = this.w.config.chart.type),
                    (this.initialAnim = this.w.config.chart.animations.enabled),
                    (this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled),
                    (this.animBeginArr = [0]),
                    (this.animDur = 0),
                    (this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels);
                var s = this.w;
                (this.lineColorArr = void 0 !== s.globals.stroke.colors ? s.globals.stroke.colors : s.globals.colors),
                    (this.defaultSize = s.globals.svgHeight < s.globals.svgWidth ? s.globals.svgHeight - 35 : s.globals.gridWidth),
                    (this.centerY = this.defaultSize / 2),
                    (this.centerX = s.globals.gridWidth / 2),
                    (this.fullAngle = 360),
                    (this.size = 0),
                    (this.donutSize = 0),
                    (this.sliceLabels = []),
                    (this.prevSectorAngleArr = []);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t) {
                            for (var e = this.w, i = new f(this.ctx), s = i.group({ class: "apexcharts-pie" }), a = 0, n = 0; n < t.length; n++) a += d.negToZero(t[n]);
                            var r = [],
                                o = i.group();
                            0 === a && (a = 1e-5);
                            for (var l = 0; l < t.length; l++) {
                                var h = (this.fullAngle * d.negToZero(t[l])) / a;
                                r.push(h);
                            }
                            if (e.globals.dataChanged) {
                                for (var c, u = 0, g = 0; g < e.globals.previousPaths.length; g++) u += d.negToZero(e.globals.previousPaths[g]);
                                for (var p = 0; p < e.globals.previousPaths.length; p++) (c = (this.fullAngle * d.negToZero(e.globals.previousPaths[p])) / u), this.prevSectorAngleArr.push(c);
                            }
                            (this.size = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur),
                                void 0 !== e.config.plotOptions.pie.size && (this.size = e.config.plotOptions.pie.size),
                                (this.donutSize = (this.size * parseInt(e.config.plotOptions.pie.donut.size)) / 100);
                            var x = e.config.plotOptions.pie.customScale,
                                b = e.globals.gridWidth / 2,
                                m = e.globals.gridHeight / 2,
                                v = b - (e.globals.gridWidth / 2) * x,
                                y = m - (e.globals.gridHeight / 2) * x;
                            if (this.donutDataLabels.show) {
                                var w = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: v, translateY: y });
                                s.add(w);
                            }
                            if ("donut" === e.config.chart.type) {
                                var k = i.drawCircle(this.donutSize);
                                k.attr({ cx: this.centerX, cy: this.centerY, fill: e.config.plotOptions.pie.donut.background }), o.add(k);
                            }
                            var A = this.drawArcs(r, t);
                            return (
                                this.sliceLabels.forEach(function (t) {
                                    A.add(t);
                                }),
                                o.attr({
                                    transform: "translate("
                                        .concat(v, ", ")
                                        .concat(y - 5, ") scale(")
                                        .concat(x, ")"),
                                }),
                                s.attr({ "data:innerTranslateX": v, "data:innerTranslateY": y - 25 }),
                                o.add(A),
                                s.add(o),
                                s
                            );
                        },
                    },
                    {
                        key: "drawArcs",
                        value: function (t, e) {
                            var i = this.w,
                                s = new u(this.ctx),
                                a = new f(this.ctx),
                                n = new S(this.ctx),
                                r = a.group(),
                                o = 0,
                                l = 0,
                                h = 0,
                                c = 0;
                            this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                            for (var g = 0; g < t.length; g++) {
                                var p = a.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: d.escapeString(i.globals.seriesNames[g]), id: "apexcharts-series-" + g, rel: g + 1 });
                                r.add(p), (l = c), (h = (o = h) + t[g]), (c = l + this.prevSectorAngleArr[g]);
                                var x = h - o,
                                    b = n.fillPath({ seriesNumber: g, size: this.size, value: e[g] }),
                                    m = this.getChangedPath(l, c),
                                    v = a.drawPath({
                                        d: m,
                                        stroke: this.lineColorArr instanceof Array ? this.lineColorArr[g] : this.lineColorArr,
                                        strokeWidth: this.strokeWidth,
                                        fill: b,
                                        fillOpacity: i.config.fill.opacity,
                                        classes: "apexcharts-pie-area",
                                    });
                                if ((v.attr({ id: "apexcharts-".concat(i.config.chart.type, "-slice-").concat(g), index: 0, j: g }), i.config.chart.dropShadow.enabled)) {
                                    var y = i.config.chart.dropShadow;
                                    s.dropShadow(v, y, g);
                                }
                                this.addListeners(v, this.donutDataLabels), f.setAttrs(v.node, { "data:angle": x, "data:startAngle": o, "data:strokeWidth": this.strokeWidth, "data:value": e[g] });
                                var w = { x: 0, y: 0 };
                                "pie" === i.config.chart.type
                                    ? (w = d.polarToCartesian(this.centerX, this.centerY, this.size / 1.25 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2))
                                    : "donut" === i.config.chart.type && (w = d.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2)),
                                    p.add(v);
                                var k = 0;
                                if (
                                    (!this.initialAnim || i.globals.resized || i.globals.dataChanged
                                        ? this.animBeginArr.push(0)
                                        : ((k = ((h - o) / this.fullAngle) * i.config.chart.animations.speed), (this.animDur = k + this.animDur), this.animBeginArr.push(this.animDur)),
                                    this.dynamicAnim && i.globals.dataChanged
                                        ? this.animatePaths(v, {
                                              endAngle: h,
                                              startAngle: o,
                                              prevStartAngle: l,
                                              prevEndAngle: c,
                                              animateStartingPos: !0,
                                              i: g,
                                              animBeginArr: this.animBeginArr,
                                              dur: i.config.chart.animations.dynamicAnimation.speed,
                                          })
                                        : this.animatePaths(v, { endAngle: h, startAngle: o, i: g, totalItems: t.length - 1, animBeginArr: this.animBeginArr, dur: k }),
                                    i.config.plotOptions.pie.expandOnClick && v.click(this.pieClicked.bind(this, g)),
                                    i.config.dataLabels.enabled)
                                ) {
                                    var A = w.x,
                                        C = w.y,
                                        L = (100 * (h - o)) / 360 + "%";
                                    if (0 !== x && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[g]) {
                                        var z = i.config.dataLabels.formatter;
                                        void 0 !== z && (L = z(i.globals.seriesPercent[g][0], { seriesIndex: g, w: i }));
                                        var P = i.globals.dataLabels.style.colors[g],
                                            M = a.drawText({ x: A, y: C, text: L, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, foreColor: P });
                                        if (i.config.dataLabels.dropShadow.enabled) {
                                            var E = i.config.dataLabels.dropShadow;
                                            new u(this.ctx).dropShadow(M, E);
                                        }
                                        M.node.classList.add("apexcharts-pie-label"),
                                            i.config.chart.animations.animate && !1 === i.globals.resized && (M.node.classList.add("apexcharts-pie-label-delay"), (M.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s")),
                                            this.sliceLabels.push(M);
                                    }
                                }
                            }
                            return r;
                        },
                    },
                    {
                        key: "addListeners",
                        value: function (t, e) {
                            var i = new f(this.ctx);
                            t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)),
                                t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)),
                                t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)),
                                t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)),
                                t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)),
                                t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e));
                        },
                    },
                    {
                        key: "animatePaths",
                        value: function (t, e) {
                            var i = this.w,
                                s = e.endAngle - e.startAngle,
                                a = s,
                                n = e.startAngle,
                                r = e.startAngle;
                            void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && ((n = e.prevEndAngle), (a = e.prevEndAngle - e.prevStartAngle)),
                                e.i === i.config.series.length - 1 && (s + r > this.fullAngle ? (e.endAngle = e.endAngle - (s + r)) : s + r < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (s + r)))),
                                s === this.fullAngle && (s = this.fullAngle - 0.01),
                                this.animateArc(t, n, r, s, a, e);
                        },
                    },
                    {
                        key: "animateArc",
                        value: function (t, e, i, s, a, n) {
                            var r,
                                o = this,
                                l = this.w,
                                h = o.size;
                            h || (h = n.size), (isNaN(e) || isNaN(a)) && ((e = i), (a = s), (n.dur = 0));
                            var c = s,
                                d = i,
                                u = e - i;
                            l.globals.dataChanged && n.shouldSetPrevPaths && ((r = o.getPiePath({ me: o, startAngle: d, angle: a, size: h })), t.attr({ d: r })),
                                0 !== n.dur
                                    ? t
                                          .animate(n.dur, l.globals.easing, n.animBeginArr[n.i])
                                          .afterAll(function () {
                                              ("pie" !== l.config.chart.type && "donut" !== l.config.chart.type) || this.animate(300).attr({ "stroke-width": l.config.stroke.width }), (l.globals.animationEnded = !0);
                                          })
                                          .during(function (l) {
                                              (c = u + (s - u) * l),
                                                  n.animateStartingPos && ((c = a + (s - a) * l), (d = e - a + (i - (e - a)) * l)),
                                                  (r = o.getPiePath({ me: o, startAngle: d, angle: c, size: h })),
                                                  t.node.setAttribute("data:pathOrig", r),
                                                  t.attr({ d: r });
                                          })
                                    : ((r = o.getPiePath({ me: o, startAngle: d, angle: s, size: h })), n.isTrack || (l.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", r), t.attr({ d: r }));
                        },
                    },
                    {
                        key: "pieClicked",
                        value: function (t) {
                            var e,
                                i = this.w,
                                s = this.size + 4,
                                a = i.globals.dom.Paper.select("#apexcharts-".concat(i.config.chart.type.toLowerCase(), "-slice-").concat(t)).members[0],
                                n = a.attr("d");
                            if ("true" !== a.attr("data:pieClicked")) {
                                var r = i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");
                                Array.prototype.forEach.call(r, function (t) {
                                    t.setAttribute("data:pieClicked", "false");
                                    var e = t.getAttribute("data:pathOrig");
                                    t.setAttribute("d", e);
                                }),
                                    a.attr("data:pieClicked", "true");
                                var o = parseInt(a.attr("data:startAngle")),
                                    l = parseInt(a.attr("data:angle"));
                                (e = this.getPiePath({ me: this, startAngle: o, angle: l, size: s })), 360 !== l && a.plot(e).animate(1).plot(n).animate(100).plot(e);
                            } else {
                                a.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(a.node, this.donutDataLabels);
                                var h = a.attr("data:pathOrig");
                                a.attr({ d: h });
                            }
                        },
                    },
                    {
                        key: "getChangedPath",
                        value: function (t, e) {
                            var i = "";
                            return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i;
                        },
                    },
                    {
                        key: "getPiePath",
                        value: function (t) {
                            var e = t.me,
                                i = t.startAngle,
                                s = t.angle,
                                a = t.size,
                                n = this.w,
                                r = i,
                                o = (Math.PI * (r - 90)) / 180,
                                l = s + i;
                            Math.ceil(l) >= 360 && (l = 359.99);
                            var h = (Math.PI * (l - 90)) / 180,
                                c = e.centerX + a * Math.cos(o),
                                u = e.centerY + a * Math.sin(o),
                                g = e.centerX + a * Math.cos(h),
                                f = e.centerY + a * Math.sin(h),
                                p = d.polarToCartesian(e.centerX, e.centerY, e.donutSize, l),
                                x = d.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                                b = s > 180 ? 1 : 0;
                            return "donut" === n.config.chart.type
                                ? ["M", c, u, "A", a, a, 0, b, 1, g, f, "L", p.x, p.y, "A", e.donutSize, e.donutSize, 0, b, 0, x.x, x.y, "L", c, u, "z"].join(" ")
                                : "pie" === n.config.chart.type
                                ? ["M", c, u, "A", a, a, 0, b, 1, g, f, "L", e.centerX, e.centerY, "L", c, u].join(" ")
                                : ["M", c, u, "A", a, a, 0, b, 1, g, f].join(" ");
                        },
                    },
                    {
                        key: "renderInnerDataLabels",
                        value: function (t, e) {
                            var i = this.w,
                                s = new f(this.ctx),
                                a = s.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ")") }),
                                n = t.total.show;
                            a.node.style.opacity = e.opacity;
                            var r,
                                o,
                                l = e.centerX,
                                h = e.centerY;
                            (r = void 0 === t.name.color ? i.globals.colors[0] : t.name.color), (o = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color);
                            var c = t.value.formatter,
                                d = "",
                                u = "";
                            if ((n ? ((r = t.total.color), (u = t.total.label), (d = t.total.formatter(i))) : 1 === i.globals.series.length && ((d = c(i.globals.series[0], i)), (u = i.globals.seriesNames[0])), t.name.show)) {
                                var g = s.drawText({ x: l, y: h + parseInt(t.name.offsetY), text: u, textAnchor: "middle", foreColor: r, fontSize: t.name.fontSize, fontFamily: t.name.fontFamily });
                                g.node.classList.add("apexcharts-datalabel-label"), a.add(g);
                            }
                            if (t.value.show) {
                                var p = t.name.show ? parseInt(t.value.offsetY) + 16 : t.value.offsetY,
                                    x = s.drawText({ x: l, y: h + p, text: d, textAnchor: "middle", foreColor: o, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
                                x.node.classList.add("apexcharts-datalabel-value"), a.add(x);
                            }
                            return a;
                        },
                    },
                    {
                        key: "printInnerLabels",
                        value: function (t, e, i, s) {
                            var a,
                                n = this.w;
                            s ? (a = void 0 === t.name.color ? n.globals.colors[parseInt(s.parentNode.getAttribute("rel")) - 1] : t.name.color) : n.globals.series.length > 1 && t.total.show && (a = t.total.color);
                            var r = n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                                o = n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                            (i = (0, t.value.formatter)(i, n)),
                                s || "function" != typeof t.total.formatter || (i = t.total.formatter(n)),
                                null !== r && (r.textContent = e),
                                null !== o && (o.textContent = i),
                                null !== r && (r.style.fill = a);
                        },
                    },
                    {
                        key: "printDataLabelsInner",
                        value: function (t, e) {
                            var i = this.w,
                                s = t.getAttribute("data:value"),
                                a = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel")) - 1];
                            i.globals.series.length > 1 && this.printInnerLabels(e, a, s, t);
                            var n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                            null !== n && (n.style.opacity = 1);
                        },
                    },
                    {
                        key: "revertDataLabelsInner",
                        value: function (e, i, s) {
                            var a = this,
                                n = this.w,
                                r = n.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                            if (i.total.show && n.globals.series.length > 1) {
                                new t(this.ctx).printInnerLabels(i, i.total.label, i.total.formatter(n));
                            } else {
                                var o = document.querySelectorAll(".apexcharts-pie-area"),
                                    l = !1;
                                if (
                                    (o.forEach(function (t) {
                                        "true" === t.getAttribute("data:pieClicked") && ((l = !0), a.printDataLabelsInner(t, i));
                                    }),
                                    !l)
                                )
                                    if (n.globals.selectedDataPoints.length && n.globals.series.length > 1)
                                        if (n.globals.selectedDataPoints[0].length > 0) {
                                            var h = n.globals.selectedDataPoints[0],
                                                c = n.globals.dom.baseEl.querySelector("#apexcharts-".concat(n.config.chart.type.toLowerCase(), "-slice-").concat(h));
                                            this.printDataLabelsInner(c, i);
                                        } else r && n.globals.selectedDataPoints.length && 0 === n.globals.selectedDataPoints[0].length && (r.style.opacity = 0);
                                    else r && n.globals.series.length > 1 && (r.style.opacity = 0);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        Y = (function () {
            function t(i) {
                e(this, t),
                    (this.ctx = i),
                    (this.w = i.w),
                    (this.chartType = this.w.config.chart.type),
                    (this.initialAnim = this.w.config.chart.animations.enabled),
                    (this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled),
                    (this.animDur = 0);
                var s = this.w;
                (this.graphics = new f(this.ctx)),
                    (this.lineColorArr = void 0 !== s.globals.stroke.colors ? s.globals.stroke.colors : s.globals.colors),
                    (this.defaultSize = s.globals.svgHeight < s.globals.svgWidth ? s.globals.svgHeight - 35 : s.globals.gridWidth),
                    (this.maxValue = this.w.globals.maxY),
                    (this.polygons = s.config.plotOptions.radar.polygons),
                    (this.maxLabelWidth = 20);
                var a = s.globals.labels.slice().sort(function (t, e) {
                        return e.length - t.length;
                    })[0],
                    n = this.graphics.getTextRects(a, s.config.dataLabels.style.fontSize);
                (this.size = this.defaultSize / 2.1 - s.config.stroke.width - s.config.chart.dropShadow.blur - n.width / 1.75),
                    void 0 !== s.config.plotOptions.radar.size && (this.size = s.config.plotOptions.radar.size),
                    (this.dataRadiusOfPercent = []),
                    (this.dataRadius = []),
                    (this.angleArr = []),
                    (this.yaxisLabelsTextsPos = []);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t) {
                            var e = this,
                                i = this.w,
                                s = new S(this.ctx),
                                a = [];
                            (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), (this.disAngle = (2 * Math.PI) / this.dataPointsLen);
                            var r = i.globals.gridWidth / 2,
                                o = i.globals.gridHeight / 2,
                                l = this.graphics.group({ class: "apexcharts-radar-series", "data:innerTranslateX": r, "data:innerTranslateY": o - 25, transform: "translate(".concat(r || 0, ", ").concat(o || 0, ")") }),
                                h = [],
                                c = null;
                            if (
                                ((this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" })),
                                t.forEach(function (t, r) {
                                    var o = e.graphics.group().attr({ class: "apexcharts-series", seriesName: d.escapeString(i.globals.seriesNames[r]), rel: r + 1, "data:realIndex": r });
                                    (e.dataRadiusOfPercent[r] = []),
                                        (e.dataRadius[r] = []),
                                        (e.angleArr[r] = []),
                                        t.forEach(function (t, i) {
                                            (e.dataRadiusOfPercent[r][i] = t / e.maxValue), (e.dataRadius[r][i] = e.dataRadiusOfPercent[r][i] * e.size), (e.angleArr[r][i] = i * e.disAngle);
                                        }),
                                        (h = e.getDataPointsPos(e.dataRadius[r], e.angleArr[r]));
                                    var l = e.createPaths(h, { x: 0, y: 0 });
                                    (c = e.graphics.group({ class: "apexcharts-series-markers-wrap hidden" })), i.globals.delayedElements.push({ el: c.node, index: r });
                                    var g = {
                                            i: r,
                                            realIndex: r,
                                            animationDelay: r,
                                            initialSpeed: i.config.chart.animations.speed,
                                            dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed,
                                            className: "apexcharts-radar",
                                            id: "apexcharts-radar",
                                            shouldClipToGrid: !1,
                                            bindEventsOnPaths: !1,
                                            stroke: i.globals.stroke.colors[r],
                                            strokeLineCap: i.config.stroke.lineCap,
                                        },
                                        f = null;
                                    i.globals.previousPaths.length > 0 && (f = e.getPathFrom(r));
                                    for (var p = 0; p < l.linePathsTo.length; p++) {
                                        var x = e.graphics.renderPaths(
                                            n({}, g, {
                                                pathFrom: null === f ? l.linePathsFrom[p] : f,
                                                pathTo: l.linePathsTo[p],
                                                strokeWidth: Array.isArray(i.config.stroke.width) ? i.config.stroke.width[r] : i.config.stroke.width,
                                                fill: "none",
                                                drawShadow: !1,
                                            })
                                        );
                                        o.add(x);
                                        var b = s.fillPath({ seriesNumber: r }),
                                            m = e.graphics.renderPaths(n({}, g, { pathFrom: null === f ? l.areaPathsFrom[p] : f, pathTo: l.areaPathsTo[p], strokeWidth: 0, fill: b, drawShadow: !1 }));
                                        if (i.config.chart.dropShadow.enabled) {
                                            var v = new u(e.ctx),
                                                y = i.config.chart.dropShadow;
                                            v.dropShadow(m, Object.assign({}, y, { noUserSpaceOnUse: !0 }), r);
                                        }
                                        o.add(m);
                                    }
                                    t.forEach(function (t, i) {
                                        var s = new C(e.ctx).getMarkerConfig("apexcharts-marker", r),
                                            a = e.graphics.drawMarker(h[i].x, h[i].y, s);
                                        a.attr("rel", i), a.attr("j", i), a.attr("index", r), a.node.setAttribute("default-marker-size", s.pSize);
                                        var n = e.graphics.group({ class: "apexcharts-series-markers" });
                                        n && n.add(a), c.add(n), o.add(c);
                                    }),
                                        a.push(o);
                                }),
                                this.drawPolygons({ parent: l }),
                                i.config.dataLabels.enabled)
                            ) {
                                var g = this.drawLabels();
                                l.add(g);
                            }
                            return (
                                l.add(this.yaxisLabels),
                                a.forEach(function (t) {
                                    l.add(t);
                                }),
                                l
                            );
                        },
                    },
                    {
                        key: "drawPolygons",
                        value: function (t) {
                            for (var e = this, i = this.w, s = t.parent, a = i.globals.yAxisScale[0].result.reverse(), n = a.length, r = [], o = this.size / (n - 1), l = 0; l < n; l++) r[l] = o * l;
                            r.reverse();
                            var h = [],
                                c = [];
                            r.forEach(function (t, i) {
                                var s = e.getPolygonPos(t),
                                    a = "";
                                s.forEach(function (t, s) {
                                    if (0 === i) {
                                        var n = e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[s] : e.polygons.connectorColors);
                                        c.push(n);
                                    }
                                    0 === s && e.yaxisLabelsTextsPos.push({ x: t.x, y: t.y }), (a += t.x + "," + t.y + " ");
                                }),
                                    h.push(a);
                            }),
                                h.forEach(function (t, a) {
                                    var n = e.polygons.strokeColors,
                                        r = e.graphics.drawPolygon(t, Array.isArray(n) ? n[a] : n, i.globals.radarPolygons.fill.colors[a]);
                                    s.add(r);
                                }),
                                c.forEach(function (t) {
                                    s.add(t);
                                }),
                                i.config.yaxis[0].show &&
                                    this.yaxisLabelsTextsPos.forEach(function (t, i) {
                                        var s = e.drawYAxisText(t.x, t.y, i, a[i]);
                                        e.yaxisLabels.add(s);
                                    });
                        },
                    },
                    {
                        key: "drawYAxisText",
                        value: function (t, e, i, s) {
                            var a = this.w,
                                n = a.config.yaxis[0],
                                r = a.globals.yLabelFormatters[0];
                            return this.graphics.drawText({
                                x: t + n.labels.offsetX,
                                y: e + n.labels.offsetY,
                                text: r(s, i),
                                textAnchor: "middle",
                                fontSize: n.labels.style.fontSize,
                                fontFamily: n.labels.style.fontFamily,
                                foreColor: n.labels.style.color,
                            });
                        },
                    },
                    {
                        key: "drawLabels",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = "middle",
                                s = e.config.dataLabels,
                                a = this.graphics.group({ class: "apexcharts-datalabels" }),
                                n = this.getPolygonPos(this.size),
                                r = 0,
                                o = 0;
                            return (
                                e.globals.labels.forEach(function (l, h) {
                                    var c = s.formatter,
                                        d = new z(t.ctx);
                                    if (n[h]) {
                                        (r = n[h].x),
                                            (o = n[h].y),
                                            Math.abs(n[h].x) >= 10 ? (n[h].x > 0 ? ((i = "start"), (r += 10)) : n[h].x < 0 && ((i = "end"), (r -= 10))) : (i = "middle"),
                                            Math.abs(n[h].y) >= t.size - 10 && (n[h].y < 0 ? (o -= 10) : n[h].y > 0 && (o += 10));
                                        var u = c(l, { seriesIndex: -1, dataPointIndex: h, w: e });
                                        d.plotDataLabelsText({ x: r, y: o, text: u, textAnchor: i, i: h, j: h, parent: a, dataLabelsConfig: s, offsetCorrection: !1 });
                                    }
                                }),
                                a
                            );
                        },
                    },
                    {
                        key: "createPaths",
                        value: function (t, e) {
                            var i = this,
                                s = [],
                                a = [],
                                n = [],
                                r = [];
                            if (t.length) {
                                (a = [this.graphics.move(e.x, e.y)]), (r = [this.graphics.move(e.x, e.y)]);
                                var o = this.graphics.move(t[0].x, t[0].y),
                                    l = this.graphics.move(t[0].x, t[0].y);
                                t.forEach(function (e, s) {
                                    (o += i.graphics.line(e.x, e.y)), (l += i.graphics.line(e.x, e.y)), s === t.length - 1 && ((o += "Z"), (l += "Z"));
                                }),
                                    s.push(o),
                                    n.push(l);
                            }
                            return { linePathsFrom: a, linePathsTo: s, areaPathsFrom: r, areaPathsTo: n };
                        },
                    },
                    {
                        key: "getPathFrom",
                        value: function (t) {
                            for (var e = this.w, i = null, s = 0; s < e.globals.previousPaths.length; s++) {
                                var a = e.globals.previousPaths[s];
                                a.paths.length > 0 && parseInt(a.realIndex) === parseInt(t) && void 0 !== e.globals.previousPaths[s].paths[0] && (i = e.globals.previousPaths[s].paths[0].d);
                            }
                            return i;
                        },
                    },
                    {
                        key: "getDataPointsPos",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                            (t = t || []), (e = e || []);
                            for (var s = [], a = 0; a < i; a++) {
                                var n = {};
                                (n.x = t[a] * Math.sin(e[a])), (n.y = -t[a] * Math.cos(e[a])), s.push(n);
                            }
                            return s;
                        },
                    },
                    {
                        key: "getPolygonPos",
                        value: function (t) {
                            for (var e = [], i = (2 * Math.PI) / this.dataPointsLen, s = 0; s < this.dataPointsLen; s++) {
                                var a = {};
                                (a.x = t * Math.sin(s * i)), (a.y = -t * Math.cos(s * i)), e.push(a);
                            }
                            return e;
                        },
                    },
                ]),
                t
            );
        })(),
        F = (function (t) {
            function i(t) {
                var s;
                e(this, i), ((s = h(this, o(i).call(this, t))).ctx = t), (s.w = t.w), (s.animBeginArr = [0]), (s.animDur = 0);
                var a = s.w;
                return (
                    (s.startAngle = a.config.plotOptions.radialBar.startAngle),
                    (s.endAngle = a.config.plotOptions.radialBar.endAngle),
                    (s.trackStartAngle = a.config.plotOptions.radialBar.track.startAngle),
                    (s.trackEndAngle = a.config.plotOptions.radialBar.track.endAngle),
                    (s.radialDataLabels = a.config.plotOptions.radialBar.dataLabels),
                    s.trackStartAngle || (s.trackStartAngle = s.startAngle),
                    s.trackEndAngle || (s.trackEndAngle = s.endAngle),
                    360 === s.endAngle && (s.endAngle = 359.99),
                    (s.fullAngle = 360 - a.config.plotOptions.radialBar.endAngle - a.config.plotOptions.radialBar.startAngle),
                    (s.margin = parseInt(a.config.plotOptions.radialBar.track.margin)),
                    s
                );
            }
            return (
                r(i, I),
                s(i, [
                    {
                        key: "draw",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = i.group({ class: "apexcharts-radialbar" }),
                                a = i.group(),
                                n = this.defaultSize / 2,
                                r = e.globals.gridWidth / 2,
                                o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
                            void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
                            var l = e.globals.fill.colors;
                            if (e.config.plotOptions.radialBar.track.show) {
                                var h = this.drawTracks({ size: o, centerX: r, centerY: n, colorArr: l, series: t });
                                a.add(h);
                            }
                            var c = this.drawArcs({ size: o, centerX: r, centerY: n, colorArr: l, series: t });
                            return a.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), s.add(a), s;
                        },
                    },
                    {
                        key: "drawTracks",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = i.group(),
                                a = new u(this.ctx),
                                n = new S(this.ctx),
                                r = this.getStrokeWidth(t);
                            t.size = t.size - r / 2;
                            for (var o = 0; o < t.series.length; o++) {
                                var l = i.group({ class: "apexcharts-radialbar-track apexcharts-track" });
                                s.add(l), l.attr({ id: "apexcharts-track-" + o, rel: o + 1 }), (t.size = t.size - r - this.margin);
                                var h = e.config.plotOptions.radialBar.track,
                                    c = n.fillPath({ seriesNumber: 0, size: t.size, fillColors: Array.isArray(h.background) ? h.background[o] : h.background, solid: !0 }),
                                    d = this.trackStartAngle,
                                    g = this.trackEndAngle;
                                Math.abs(g) + Math.abs(d) >= 360 && (g = 360 - Math.abs(this.startAngle) - 0.1);
                                var p = i.drawPath({ d: "", stroke: c, strokeWidth: (r * parseInt(h.strokeWidth)) / 100, fill: "none", strokeOpacity: h.opacity, classes: "apexcharts-radialbar-area" });
                                if (h.dropShadow.enabled) {
                                    var x = h.dropShadow;
                                    a.dropShadow(p, x);
                                }
                                l.add(p),
                                    p.attr("id", "apexcharts-radialbarTrack-" + o),
                                    new I(this.ctx).animatePaths(p, { centerX: t.centerX, centerY: t.centerY, endAngle: g, startAngle: d, size: t.size, i: o, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: e.globals.easing });
                            }
                            return s;
                        },
                    },
                    {
                        key: "drawArcs",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = new S(this.ctx),
                                a = new u(this.ctx),
                                n = i.group(),
                                r = this.getStrokeWidth(t);
                            t.size = t.size - r / 2;
                            var o = e.config.plotOptions.radialBar.hollow.background,
                                l = t.size - r * t.series.length - this.margin * t.series.length - (r * parseInt(e.config.plotOptions.radialBar.track.strokeWidth)) / 100 / 2,
                                h = l - e.config.plotOptions.radialBar.hollow.margin;
                            void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, n, l, o));
                            var c = this.drawHollow({ size: h, centerX: t.centerX, centerY: t.centerY, fill: o });
                            if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                                var g = e.config.plotOptions.radialBar.hollow.dropShadow;
                                a.dropShadow(c, g);
                            }
                            var p = 1;
                            !this.radialDataLabels.total.show && e.globals.series.length > 1 && (p = 0);
                            var x = new I(this.ctx),
                                b = null;
                            this.radialDataLabels.show && (b = x.renderInnerDataLabels(this.radialDataLabels, { hollowSize: l, centerX: t.centerX, centerY: t.centerY, opacity: p })),
                                "back" === e.config.plotOptions.radialBar.hollow.position && (n.add(c), b && n.add(b));
                            var m = !1;
                            e.config.plotOptions.radialBar.inverseOrder && (m = !0);
                            for (var v = m ? t.series.length - 1 : 0; m ? v >= 0 : v < t.series.length; m ? v-- : v++) {
                                var y = i.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: d.escapeString(e.globals.seriesNames[v]) });
                                n.add(y), y.attr({ id: "apexcharts-series-" + v, rel: v + 1 }), this.ctx.series.addCollapsedClassToSeries(y, v), (t.size = t.size - r - this.margin);
                                var w = s.fillPath({ seriesNumber: v, size: t.size, value: t.series[v] }),
                                    k = this.startAngle,
                                    A = void 0,
                                    C = Math.abs(e.config.plotOptions.radialBar.endAngle - e.config.plotOptions.radialBar.startAngle),
                                    L = d.negToZero(t.series[v] > 100 ? 100 : t.series[v]) / 100,
                                    z = Math.round(C * L) + this.startAngle,
                                    P = void 0;
                                e.globals.dataChanged && ((A = this.startAngle), (P = Math.round((C * d.negToZero(e.globals.previousPaths[v])) / 100) + A)),
                                    Math.abs(z) + Math.abs(k) >= 360 && (z -= 0.01),
                                    Math.abs(P) + Math.abs(A) >= 360 && (P -= 0.01);
                                var M = z - k,
                                    E = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[v] : e.config.stroke.dashArray,
                                    T = i.drawPath({ d: "", stroke: w, strokeWidth: r, fill: "none", fillOpacity: e.config.fill.opacity, classes: "apexcharts-radialbar-area", strokeDashArray: E });
                                if ((f.setAttrs(T.node, { "data:angle": M, "data:value": t.series[v] }), e.config.chart.dropShadow.enabled)) {
                                    var X = e.config.chart.dropShadow;
                                    a.dropShadow(T, X, v);
                                }
                                this.addListeners(T, this.radialDataLabels);
                                var Y = new I(this.ctx);
                                y.add(T), T.attr({ id: "apexcharts-radialbar-slice-" + v, index: 0, j: v });
                                var F = 0;
                                !Y.initialAnim ||
                                    e.globals.resized ||
                                    e.globals.dataChanged ||
                                    ((F = ((z - k) / 360) * e.config.chart.animations.speed), (this.animDur = F / (1.2 * t.series.length) + this.animDur), this.animBeginArr.push(this.animDur)),
                                    e.globals.dataChanged && ((F = ((z - k) / 360) * e.config.chart.animations.dynamicAnimation.speed), (this.animDur = F / (1.2 * t.series.length) + this.animDur), this.animBeginArr.push(this.animDur)),
                                    Y.animatePaths(T, {
                                        centerX: t.centerX,
                                        centerY: t.centerY,
                                        endAngle: z,
                                        startAngle: k,
                                        prevEndAngle: P,
                                        prevStartAngle: A,
                                        size: t.size,
                                        i: v,
                                        totalItems: 2,
                                        animBeginArr: this.animBeginArr,
                                        dur: F,
                                        shouldSetPrevPaths: !0,
                                        easing: e.globals.easing,
                                    });
                            }
                            return { g: n, elHollow: c, dataLabels: b };
                        },
                    },
                    {
                        key: "drawHollow",
                        value: function (t) {
                            var e = new f(this.ctx).drawCircle(2 * t.size);
                            return e.attr({ class: "apexcharts-radialbar-hollow", cx: t.centerX, cy: t.centerY, r: t.size, fill: t.fill }), e;
                        },
                    },
                    {
                        key: "drawHollowImage",
                        value: function (t, e, i, s) {
                            var a = this.w,
                                n = new S(this.ctx),
                                r = (Math.random() + 1).toString(36).substring(4),
                                o = a.config.plotOptions.radialBar.hollow.image;
                            if (a.config.plotOptions.radialBar.hollow.imageClipped)
                                n.clippedImgArea({ width: i, height: i, image: o, patternID: "pattern".concat(a.globals.cuid).concat(r) }), (s = "url(#pattern".concat(a.globals.cuid).concat(r, ")"));
                            else {
                                var l = a.config.plotOptions.radialBar.hollow.imageWidth,
                                    h = a.config.plotOptions.radialBar.hollow.imageHeight;
                                if (void 0 === l && void 0 === h) {
                                    var c = a.globals.dom.Paper.image(o).loaded(function (e) {
                                        this.move(t.centerX - e.width / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY);
                                    });
                                    e.add(c);
                                } else {
                                    var d = a.globals.dom.Paper.image(o).loaded(function (e) {
                                        this.move(t.centerX - l / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - h / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h);
                                    });
                                    e.add(d);
                                }
                            }
                            return s;
                        },
                    },
                    {
                        key: "getStrokeWidth",
                        value: function (t) {
                            var e = this.w;
                            return (t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size))) / 100 / (t.series.length + 1) - this.margin;
                        },
                    },
                ]),
                i
            );
        })(),
        R = (function (t) {
            function i() {
                return e(this, i), h(this, o(i).apply(this, arguments));
            }
            return (
                r(i, P),
                s(i, [
                    {
                        key: "draw",
                        value: function (t, e) {
                            var i = this.w,
                                s = new f(this.ctx),
                                a = new S(this.ctx);
                            (this.rangeBarOptions = this.w.config.plotOptions.rangeBar), (this.series = t), (this.seriesRangeStart = i.globals.seriesRangeStart), (this.seriesRangeEnd = i.globals.seriesRangeEnd), this.initVariables(t);
                            for (var n = s.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), r = 0, o = 0; r < t.length; r++, o++) {
                                var l,
                                    h,
                                    c,
                                    u,
                                    g = void 0,
                                    p = void 0,
                                    x = void 0,
                                    b = void 0,
                                    m = [],
                                    v = [],
                                    y = i.globals.comboCharts ? e[r] : r,
                                    w = s.group({ class: "apexcharts-series", seriesName: d.escapeString(i.globals.seriesNames[y]), rel: r + 1, "data:realIndex": y });
                                t[r].length > 0 && (this.visibleI = this.visibleI + 1);
                                var k = 0,
                                    A = 0,
                                    C = 0;
                                this.yRatio.length > 1 && (this.yaxisIndex = y);
                                var L = this.initialPositions();
                                (b = L.y), (h = L.yDivision), (A = L.barHeight), (u = L.zeroW), (x = L.x), (C = L.barWidth), (l = L.xDivision), (c = L.zeroH), v.push(x + C / 2);
                                for (var z = s.group({ class: "apexcharts-datalabels" }), P = 0, M = i.globals.dataPoints; P < i.globals.dataPoints; P++, M--) {
                                    void 0 === this.series[r][P] || null === t[r][P] ? (this.isNullValue = !0) : (this.isNullValue = !1),
                                        i.config.stroke.show && (k = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[y] : this.strokeWidth);
                                    var E = null;
                                    this.isHorizontal
                                        ? (C = (E = this.drawRangeBarPaths({ indexes: { i: r, j: P, realIndex: y, bc: o }, barHeight: A, strokeWidth: k, pathTo: g, pathFrom: p, zeroW: u, x: x, y: b, yDivision: h, elSeries: w })).barWidth)
                                        : (A = (E = this.drawRangeColumnPaths({ indexes: { i: r, j: P, realIndex: y, bc: o }, x: x, y: b, xDivision: l, pathTo: g, pathFrom: p, barWidth: C, zeroH: c, strokeWidth: k, elSeries: w }))
                                              .barHeight),
                                        (g = E.pathTo),
                                        (p = E.pathFrom),
                                        (b = E.y),
                                        (x = E.x),
                                        P > 0 && v.push(x + C / 2),
                                        m.push(b);
                                    var T = a.fillPath({ seriesNumber: y }),
                                        X = i.globals.stroke.colors[y];
                                    w = this.renderSeries({
                                        realIndex: y,
                                        pathFill: T,
                                        lineFill: X,
                                        j: P,
                                        i: r,
                                        pathFrom: p,
                                        pathTo: g,
                                        strokeWidth: k,
                                        elSeries: w,
                                        x: x,
                                        y: b,
                                        series: t,
                                        barHeight: A,
                                        barWidth: C,
                                        elDataLabelsWrap: z,
                                        visibleSeries: this.visibleI,
                                        type: "rangebar",
                                    });
                                }
                                (i.globals.seriesXvalues[y] = v), (i.globals.seriesYvalues[y] = m), n.add(w);
                            }
                            return n;
                        },
                    },
                    {
                        key: "drawRangeColumnPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = t.x,
                                s = (t.y, t.strokeWidth),
                                a = t.xDivision,
                                n = t.pathTo,
                                r = t.pathFrom,
                                o = t.barWidth,
                                l = t.zeroH,
                                h = this.w,
                                c = new f(this.ctx),
                                d = e.i,
                                u = e.j,
                                g = this.yRatio[this.yaxisIndex],
                                p = e.realIndex,
                                x = this.getRangeValue(p, u),
                                b = Math.min(x.start, x.end),
                                m = Math.max(x.start, x.end);
                            h.globals.isXNumeric && (i = (h.globals.seriesX[d][u] - h.globals.minX) / this.xRatio - o / 2);
                            var v = i + o * this.visibleI;
                            void 0 === this.series[d][u] || null === this.series[d][u] ? (b = l) : ((b = l - b / g), (m = l - m / g));
                            var y = Math.abs(m - b);
                            return (
                                c.move(v, l),
                                (r = c.move(v, b)),
                                h.globals.previousPaths.length > 0 && (r = this.getPathFrom(p, u, !0)),
                                (n = c.move(v, m) + c.line(v + o, m) + c.line(v + o, b) + c.line(v, b) + c.line(v, m - s / 2)),
                                (r = r + c.move(v, b) + c.line(v + o, b) + c.line(v + o, b) + c.line(v, b)),
                                h.globals.isXNumeric || (i += a),
                                { pathTo: n, pathFrom: r, barHeight: y, x: i, y: m, barXPosition: v }
                            );
                        },
                    },
                    {
                        key: "drawRangeBarPaths",
                        value: function (t) {
                            var e = t.indexes,
                                i = (t.x, t.y),
                                s = t.yDivision,
                                a = t.pathTo,
                                n = t.pathFrom,
                                r = t.barHeight,
                                o = t.zeroW,
                                l = this.w,
                                h = new f(this.ctx),
                                c = e.i,
                                d = e.j,
                                u = e.realIndex,
                                g = o,
                                p = o;
                            l.globals.isXNumeric && (i = (l.globals.seriesX[c][d] - l.globals.minX) / this.invertedXRatio - r);
                            var x = i + r * this.visibleI;
                            void 0 !== this.series[c][d] && null !== this.series[c][d] && ((g = o + this.seriesRangeStart[c][d] / this.invertedYRatio), (p = o + this.seriesRangeEnd[c][d] / this.invertedYRatio)),
                                h.move(o, x),
                                (n = h.move(o, x)),
                                l.globals.previousPaths.length > 0 && (n = this.getPathFrom(u, d));
                            var b = Math.abs(p - g);
                            return (
                                (a = h.move(g, x) + h.line(p, x) + h.line(p, x + r) + h.line(g, x + r) + h.line(g, x)),
                                (n = n + h.line(g, x) + h.line(g, x + r) + h.line(g, x + r) + h.line(g, x)),
                                l.globals.isXNumeric || (i += s),
                                { pathTo: a, pathFrom: n, barWidth: b, x: p, y: i, barYPosition: x }
                            );
                        },
                    },
                    {
                        key: "getRangeValue",
                        value: function (t, e) {
                            var i = this.w;
                            return { start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e] };
                        },
                    },
                ]),
                i
            );
        })(),
        D = (function () {
            function t(i, s, a) {
                e(this, t),
                    (this.ctx = i),
                    (this.w = i.w),
                    (this.xyRatios = s),
                    (this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || a),
                    (this.scatter = new L(this.ctx)),
                    (this.noNegatives = this.w.globals.minX === Number.MAX_VALUE),
                    (this.yaxisIndex = 0);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = new f(this.ctx),
                                r = new S(this.ctx),
                                o = s.globals.comboCharts ? e : s.config.chart.type,
                                l = a.group({ class: "apexcharts-".concat(o, "-series apexcharts-plot-series") }),
                                h = new y(this.ctx, s);
                            t = h.getLogSeries(t);
                            var c = this.xyRatios.yRatio;
                            c = h.getLogYRatios(c);
                            for (var u = this.xyRatios.zRatio, g = this.xyRatios.xRatio, p = this.xyRatios.baseLineY, x = [], b = [], m = 0, v = 0; v < t.length; v++) {
                                if ("line" === o && ("gradient" === s.config.fill.type || "gradient" === s.config.fill.type[v]) && h.seriesHaveSameValues(v)) {
                                    var w = t[v].slice();
                                    (w[w.length - 1] = w[w.length - 1] + 1e-6), (t[v] = w);
                                }
                                var k = s.globals.gridWidth / s.globals.dataPoints,
                                    A = s.globals.comboCharts ? i[v] : v;
                                c.length > 1 && (this.yaxisIndex = A), (this.isReversed = s.config.yaxis[this.yaxisIndex] && s.config.yaxis[this.yaxisIndex].reversed);
                                var L = [],
                                    P = [],
                                    M = s.globals.gridHeight - p[this.yaxisIndex] - (this.isReversed ? s.globals.gridHeight : 0) + (this.isReversed ? 2 * p[this.yaxisIndex] : 0),
                                    E = M;
                                M > s.globals.gridHeight && (E = s.globals.gridHeight), (m = k / 2);
                                var T = s.globals.padHorizontal + m,
                                    X = 1;
                                s.globals.isXNumeric && s.globals.seriesX.length > 0 && (T = (s.globals.seriesX[A][0] - s.globals.minX) / g), P.push(T);
                                var I = void 0,
                                    Y = void 0,
                                    F = void 0,
                                    R = void 0,
                                    D = [],
                                    N = [],
                                    O = a.group({ class: "apexcharts-series", seriesName: d.escapeString(s.globals.seriesNames[A]) }),
                                    H = a.group({ class: "apexcharts-series-markers-wrap" }),
                                    W = a.group({ class: "apexcharts-datalabels" });
                                this.ctx.series.addCollapsedClassToSeries(O, A);
                                var B = t[v].length === s.globals.dataPoints;
                                O.attr({ "data:longestSeries": B, rel: v + 1, "data:realIndex": A }), (this.appendPathFrom = !0);
                                var V = T,
                                    G = void 0,
                                    _ = V,
                                    j = M,
                                    U = 0;
                                if (((j = this.determineFirstPrevY({ i: v, series: t, yRatio: c[this.yaxisIndex], zeroY: M, prevY: j, prevSeriesY: b, lineYPosition: U }).prevY), L.push(j), (G = j), null === t[v][0])) {
                                    for (var q = 0; q < t[v].length; q++)
                                        if (null !== t[v][q]) {
                                            (_ = k * q), (j = M - t[v][q] / c[this.yaxisIndex]), (I = a.move(_, j)), (Y = a.move(_, E));
                                            break;
                                        }
                                } else (I = a.move(_, j)), (Y = a.move(_, E) + a.line(_, j));
                                if (((F = a.move(-1, M) + a.line(-1, M)), (R = a.move(-1, M) + a.line(-1, M)), s.globals.previousPaths.length > 0)) {
                                    var Z = this.checkPreviousPaths({ pathFromLine: F, pathFromArea: R, realIndex: A });
                                    (F = Z.pathFromLine), (R = Z.pathFromArea);
                                }
                                for (var $ = s.globals.dataPoints > 1 ? s.globals.dataPoints - 1 : s.globals.dataPoints, J = 0; J < $; J++) {
                                    if (s.globals.isXNumeric) {
                                        var Q = s.globals.seriesX[A][J + 1];
                                        void 0 === s.globals.seriesX[A][J + 1] && (Q = s.globals.seriesX[A][$ - 1]), (T = (Q - s.globals.minX) / g);
                                    } else T += k;
                                    var K = d.isNumber(s.globals.minYArr[A]) ? s.globals.minYArr[A] : s.globals.minY;
                                    s.config.chart.stacked
                                        ? ((U = v > 0 && s.globals.collapsedSeries.length < s.config.series.length - 1 ? b[v - 1][J + 1] : M),
                                          (X =
                                              void 0 === t[v][J + 1] || null === t[v][J + 1]
                                                  ? U - K / c[this.yaxisIndex] + 2 * (this.isReversed ? K / c[this.yaxisIndex] : 0)
                                                  : U - t[v][J + 1] / c[this.yaxisIndex] + 2 * (this.isReversed ? t[v][J + 1] / c[this.yaxisIndex] : 0)))
                                        : (X =
                                              void 0 === t[v][J + 1] || null === t[v][J + 1]
                                                  ? M - K / c[this.yaxisIndex] + 2 * (this.isReversed ? K / c[this.yaxisIndex] : 0)
                                                  : M - t[v][J + 1] / c[this.yaxisIndex] + 2 * (this.isReversed ? t[v][J + 1] / c[this.yaxisIndex] : 0)),
                                        P.push(T),
                                        L.push(X);
                                    var tt = this.createPaths({ series: t, i: v, j: J, x: T, y: X, xDivision: k, pX: V, pY: G, areaBottomY: E, linePath: I, areaPath: Y, linePaths: D, areaPaths: N, seriesIndex: i });
                                    (N = tt.areaPaths), (D = tt.linePaths), (V = tt.pX), (G = tt.pY), (Y = tt.areaPath), (I = tt.linePath), this.appendPathFrom && ((F += a.line(T, M)), (R += a.line(T, M)));
                                    var et = this.calculatePoints({ series: t, x: T, y: X, realIndex: A, i: v, j: J, prevY: j, categoryAxisCorrection: m, xRatio: g });
                                    if (this.pointsChart) this.scatter.draw(O, J, { realIndex: A, pointsPos: et, zRatio: u, elParent: H });
                                    else {
                                        var it = new C(this.ctx);
                                        s.globals.dataPoints > 1 && H.node.classList.add("hidden");
                                        var st = it.plotChartMarkers(et, A, J + 1);
                                        null !== st && H.add(st);
                                    }
                                    var at = !t[v][J + 1] || t[v][J + 1] > t[v][J] ? "top" : "bottom",
                                        nt = new z(this.ctx).drawDataLabel(et, A, J + 1, null, at);
                                    null !== nt && W.add(nt);
                                }
                                b.push(L), (s.globals.seriesXvalues[A] = P), (s.globals.seriesYvalues[A] = L), this.pointsChart || s.globals.delayedElements.push({ el: H.node, index: A });
                                var rt = {
                                    i: v,
                                    realIndex: A,
                                    animationDelay: v,
                                    initialSpeed: s.config.chart.animations.speed,
                                    dataChangeSpeed: s.config.chart.animations.dynamicAnimation.speed,
                                    className: "apexcharts-".concat(o),
                                    id: "apexcharts-".concat(o),
                                };
                                if ("area" === o)
                                    for (var ot = r.fillPath({ seriesNumber: A }), lt = 0; lt < N.length; lt++) {
                                        var ht = a.renderPaths(n({}, rt, { pathFrom: R, pathTo: N[lt], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: ot }));
                                        O.add(ht);
                                    }
                                if (s.config.stroke.show && !this.pointsChart) {
                                    var ct = null;
                                    ct = "line" === o ? r.fillPath({ seriesNumber: A, i: v }) : s.globals.stroke.colors[A];
                                    for (var dt = 0; dt < D.length; dt++) {
                                        var ut = a.renderPaths(
                                            n({}, rt, {
                                                pathFrom: F,
                                                pathTo: D[dt],
                                                stroke: ct,
                                                strokeWidth: Array.isArray(s.config.stroke.width) ? s.config.stroke.width[A] : s.config.stroke.width,
                                                strokeLineCap: s.config.stroke.lineCap,
                                                fill: "none",
                                            })
                                        );
                                        O.add(ut);
                                    }
                                }
                                O.add(H), O.add(W), x.push(O);
                            }
                            for (var gt = x.length; gt > 0; gt--) l.add(x[gt - 1]);
                            return l;
                        },
                    },
                    {
                        key: "createPaths",
                        value: function (t) {
                            var e = t.series,
                                i = t.i,
                                s = t.j,
                                a = t.x,
                                n = t.y,
                                r = t.pX,
                                o = t.pY,
                                l = t.xDivision,
                                h = t.areaBottomY,
                                c = t.linePath,
                                d = t.areaPath,
                                u = t.linePaths,
                                g = t.areaPaths,
                                p = t.seriesIndex,
                                x = this.w,
                                b = new f(this.ctx),
                                m = x.config.stroke.curve;
                            if ((Array.isArray(x.config.stroke.curve) && (m = Array.isArray(p) ? x.config.stroke.curve[p[i]] : x.config.stroke.curve[i]), "smooth" === m)) {
                                var v = 0.35 * (a - r);
                                x.globals.hasNullValues
                                    ? (null !== e[i][s] &&
                                          (null !== e[i][s + 1]
                                              ? ((c = b.move(r, o) + b.curve(r + v, o, a - v, n, a + 1, n)), (d = b.move(r + 1, o) + b.curve(r + v, o, a - v, n, a + 1, n) + b.line(a, h) + b.line(r, h) + "z"))
                                              : ((c = b.move(r, o)), (d = b.move(r, o) + "z"))),
                                      u.push(c),
                                      g.push(d))
                                    : ((c += b.curve(r + v, o, a - v, n, a, n)), (d += b.curve(r + v, o, a - v, n, a, n))),
                                    (r = a),
                                    (o = n),
                                    s === e[i].length - 2 && ((d = d + b.curve(r, o, a, n, a, h) + b.move(a, n) + "z"), x.globals.hasNullValues || (u.push(c), g.push(d)));
                            } else
                                null === e[i][s + 1] && ((c += b.move(a, n)), (d = d + b.line(a - l, h) + b.move(a, n))),
                                    null === e[i][s] && ((c += b.move(a, n)), (d += b.move(a, h))),
                                    "stepline" === m ? ((c = c + b.line(a, null, "H") + b.line(null, n, "V")), (d = d + b.line(a, null, "H") + b.line(null, n, "V"))) : "straight" === m && ((c += b.line(a, n)), (d += b.line(a, n))),
                                    s === e[i].length - 2 && ((d = d + b.line(a, h) + b.move(a, n) + "z"), u.push(c), g.push(d));
                            return { linePaths: u, areaPaths: g, pX: r, pY: o, linePath: c, areaPath: d };
                        },
                    },
                    {
                        key: "calculatePoints",
                        value: function (t) {
                            var e = t.series,
                                i = t.realIndex,
                                s = t.x,
                                a = t.y,
                                n = t.i,
                                r = t.j,
                                o = t.prevY,
                                l = t.categoryAxisCorrection,
                                h = t.xRatio,
                                c = this.w,
                                u = [],
                                g = [];
                            if (0 === r) {
                                var f = l + c.config.markers.offsetX;
                                c.globals.isXNumeric && (f = (c.globals.seriesX[i][0] - c.globals.minX) / h + c.config.markers.offsetX),
                                    u.push(f),
                                    g.push(d.isNumber(e[n][0]) ? o + c.config.markers.offsetY : null),
                                    u.push(s + c.config.markers.offsetX),
                                    g.push(d.isNumber(e[n][r + 1]) ? a + c.config.markers.offsetY : null);
                            } else u.push(s + c.config.markers.offsetX), g.push(d.isNumber(e[n][r + 1]) ? a + c.config.markers.offsetY : null);
                            return { x: u, y: g };
                        },
                    },
                    {
                        key: "checkPreviousPaths",
                        value: function (t) {
                            for (var e = t.pathFromLine, i = t.pathFromArea, s = t.realIndex, a = this.w, n = 0; n < a.globals.previousPaths.length; n++) {
                                var r = a.globals.previousPaths[n];
                                ("line" === r.type || "area" === r.type) &&
                                    r.paths.length > 0 &&
                                    parseInt(r.realIndex) === parseInt(s) &&
                                    ("line" === r.type
                                        ? ((this.appendPathFrom = !1), (e = a.globals.previousPaths[n].paths[0].d))
                                        : "area" === r.type && ((this.appendPathFrom = !1), (i = a.globals.previousPaths[n].paths[0].d), a.config.stroke.show && (e = a.globals.previousPaths[n].paths[1].d)));
                            }
                            return { pathFromLine: e, pathFromArea: i };
                        },
                    },
                    {
                        key: "determineFirstPrevY",
                        value: function (t) {
                            var e = t.i,
                                i = t.series,
                                s = t.yRatio,
                                a = t.zeroY,
                                n = t.prevY,
                                r = t.prevSeriesY,
                                o = t.lineYPosition,
                                l = this.w;
                            if (void 0 !== i[e][0]) n = l.config.chart.stacked ? (o = e > 0 ? r[e - 1][0] : a) - i[e][0] / s + 2 * (this.isReversed ? i[e][0] / s : 0) : a - i[e][0] / s + 2 * (this.isReversed ? i[e][0] / s : 0);
                            else if (l.config.chart.stacked && e > 0 && void 0 === i[e][0])
                                for (var h = e - 1; h >= 0; h--)
                                    if (null !== i[h][0] && void 0 !== i[h][0]) {
                                        n = o = r[h][0];
                                        break;
                                    }
                            return { prevY: n, lineYPosition: o };
                        },
                    },
                ]),
                t
            );
        })(),
        N = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.tooltipKeyFormat = "dd MMM");
            }
            return (
                s(t, [
                    {
                        key: "xLabelFormat",
                        value: function (t, e) {
                            var i = this.w;
                            if ("datetime" === i.config.xaxis.type && void 0 === i.config.tooltip.x.formatter) return new m(this.ctx).formatDate(new Date(e), i.config.tooltip.x.format, !0, !0);
                            return t(e);
                        },
                    },
                    {
                        key: "setLabelFormatters",
                        value: function () {
                            var t = this.w;
                            return (
                                (t.globals.xLabelFormatter = function (t) {
                                    return t;
                                }),
                                (t.globals.xaxisTooltipFormatter = function (t) {
                                    return t;
                                }),
                                (t.globals.ttKeyFormatter = function (t) {
                                    return t;
                                }),
                                (t.globals.ttZFormatter = function (t) {
                                    return t;
                                }),
                                (t.globals.legendFormatter = function (t) {
                                    return t;
                                }),
                                "function" == typeof t.config.tooltip.x.formatter && (t.globals.ttKeyFormatter = t.config.tooltip.x.formatter),
                                "function" == typeof t.config.xaxis.tooltip.formatter && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter),
                                Array.isArray(t.config.tooltip.y) ? (t.globals.ttVal = t.config.tooltip.y) : void 0 !== t.config.tooltip.y.formatter && (t.globals.ttVal = t.config.tooltip.y),
                                void 0 !== t.config.tooltip.z.formatter && (t.globals.ttZFormatter = t.config.tooltip.z.formatter),
                                void 0 !== t.config.legend.formatter && (t.globals.legendFormatter = t.config.legend.formatter),
                                void 0 !== t.config.xaxis.labels.formatter
                                    ? (t.globals.xLabelFormatter = t.config.xaxis.labels.formatter)
                                    : (t.globals.xLabelFormatter = function (e) {
                                          return d.isNumber(e) ? ("numeric" === t.config.xaxis.type && t.globals.dataPoints < 50 ? e.toFixed(1) : e.toFixed(0)) : e;
                                      }),
                                t.config.yaxis.forEach(function (e, i) {
                                    void 0 !== e.labels.formatter
                                        ? (t.globals.yLabelFormatters[i] = e.labels.formatter)
                                        : (t.globals.yLabelFormatters[i] = function (i) {
                                              return d.isNumber(i)
                                                  ? 0 !== t.globals.yValueDecimal
                                                      ? i.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : t.globals.yValueDecimal)
                                                      : t.globals.maxY - t.globals.minY < 5
                                                      ? i.toFixed(1)
                                                      : i.toFixed(0)
                                                  : i;
                                          });
                                }),
                                t.globals
                            );
                        },
                    },
                    {
                        key: "heatmapLabelFormatters",
                        value: function () {
                            var t = this.w;
                            if ("heatmap" === t.config.chart.type) {
                                t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                                var e = t.globals.seriesNames.reduce(function (t, e) {
                                    return t.length > e.length ? t : e;
                                }, 0);
                                (t.globals.yAxisScale[0].niceMax = e), (t.globals.yAxisScale[0].niceMin = e);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        O = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "getLabel",
                        value: function (t, e, i, s) {
                            var a,
                                n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                                r = this.w,
                                o = void 0 === t[s] ? "" : t[s],
                                l = r.globals.xLabelFormatter,
                                h = r.config.xaxis.labels.formatter;
                            return (
                                (a = new N(this.ctx).xLabelFormat(l, o)),
                                void 0 !== h && (a = h(o, t[s], s)),
                                e.length > 0 ? ((i = e[s].position), (a = e[s].value)) : "datetime" === r.config.xaxis.type && void 0 === h && (a = ""),
                                void 0 === a && (a = ""),
                                (0 === (a = a.toString()).indexOf("NaN") || 0 === a.toLowerCase().indexOf("invalid") || a.toLowerCase().indexOf("infinity") >= 0 || (n.indexOf(a) >= 0 && !r.config.xaxis.labels.showDuplicates)) && (a = ""),
                                { x: i, text: a }
                            );
                        },
                    },
                    {
                        key: "drawYAxisTicks",
                        value: function (t, e, i, s, a, n, r) {
                            var o = this.w,
                                l = new f(this.ctx),
                                h = o.globals.translateY;
                            if (s.show) {
                                !0 === o.config.yaxis[a].opposite && (t += s.width);
                                for (var c = e; c >= 0; c--) {
                                    var d = h + e / 10 + o.config.yaxis[a].labels.offsetY - 1;
                                    o.globals.isBarHorizontal && (d = n * c);
                                    var u = l.drawLine(t + i.offsetX - s.width + s.offsetX, d + s.offsetY, t + i.offsetX + s.offsetX, d + s.offsetY, i.color);
                                    r.add(u), (h += n);
                                }
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        H = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
                var s = this.w;
                (this.xaxisLabels = s.globals.labels.slice()),
                    s.globals.timelineLabels.length > 0 && (this.xaxisLabels = s.globals.timelineLabels.slice()),
                    (this.drawnLabels = []),
                    "top" === s.config.xaxis.position ? (this.offY = 0) : (this.offY = s.globals.gridHeight + 1),
                    (this.offY = this.offY + s.config.xaxis.axisBorder.offsetY),
                    (this.xaxisFontSize = s.config.xaxis.labels.style.fontSize),
                    (this.xaxisFontFamily = s.config.xaxis.labels.style.fontFamily),
                    (this.xaxisForeColors = s.config.xaxis.labels.style.colors),
                    (this.xaxisBorderWidth = s.config.xaxis.axisBorder.width),
                    this.xaxisBorderWidth.indexOf("%") > -1 ? (this.xaxisBorderWidth = (s.globals.gridWidth * parseInt(this.xaxisBorderWidth)) / 100) : (this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth)),
                    (this.xaxisBorderHeight = s.config.xaxis.axisBorder.height),
                    (this.yaxis = s.config.yaxis[0]),
                    (this.axesUtils = new O(i));
            }
            return (
                s(t, [
                    {
                        key: "drawXaxis",
                        value: function () {
                            var t,
                                e = this.w,
                                i = new f(this.ctx),
                                s = i.group({ class: "apexcharts-xaxis", transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")") }),
                                a = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
                            s.add(a);
                            for (var n = e.globals.padHorizontal, r = [], o = 0; o < this.xaxisLabels.length; o++) r.push(this.xaxisLabels[o]);
                            n = e.globals.isXNumeric ? n + (t = e.globals.gridWidth / (r.length - 1)) / 2 + e.config.xaxis.labels.offsetX : n + (t = e.globals.gridWidth / r.length) + e.config.xaxis.labels.offsetX;
                            var l = r.length;
                            if (e.config.xaxis.labels.show)
                                for (var h = 0; h <= l - 1; h++) {
                                    var c = n - t / 2 + e.config.xaxis.labels.offsetX,
                                        d = this.axesUtils.getLabel(r, e.globals.timelineLabels, c, h, this.drawnLabels);
                                    this.drawnLabels.push(d.text);
                                    var u = 28;
                                    e.globals.rotateXLabels && (u = 22);
                                    var g = i.drawText({
                                        x: d.x,
                                        y: this.offY + e.config.xaxis.labels.offsetY + u,
                                        text: "",
                                        textAnchor: "middle",
                                        fontSize: this.xaxisFontSize,
                                        fontFamily: this.xaxisFontFamily,
                                        foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[h] : this.xaxisForeColors,
                                        cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass,
                                    });
                                    h === l - 1 && e.globals.skipLastTimelinelabel && (d.text = ""), a.add(g), i.addTspan(g, d.text, this.xaxisFontFamily);
                                    var p = document.createElementNS(e.globals.SVGNS, "title");
                                    (p.textContent = d.text), g.node.appendChild(p), (n += t);
                                }
                            if (void 0 !== e.config.xaxis.title.text) {
                                var x = i.group({ class: "apexcharts-xaxis-title" }),
                                    b = i.drawText({
                                        x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX,
                                        y: this.offY - parseInt(this.xaxisFontSize) + e.globals.xAxisLabelsHeight + e.config.xaxis.title.offsetY,
                                        text: e.config.xaxis.title.text,
                                        textAnchor: "middle",
                                        fontSize: e.config.xaxis.title.style.fontSize,
                                        fontFamily: e.config.xaxis.title.style.fontFamily,
                                        foreColor: e.config.xaxis.title.style.color,
                                        cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass,
                                    });
                                x.add(b), s.add(x);
                            }
                            if (e.config.xaxis.axisBorder.show) {
                                var m = 0;
                                "bar" === e.config.chart.type && e.globals.isXNumeric && (m -= 15);
                                var v = i.drawLine(e.globals.padHorizontal + m + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                                s.add(v);
                            }
                            return s;
                        },
                    },
                    {
                        key: "drawXaxisInversed",
                        value: function (t) {
                            var e,
                                i,
                                s = this.w,
                                a = new f(this.ctx),
                                n = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[t] : 0,
                                r = a.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t }),
                                o = a.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + n + ", 0)" });
                            r.add(o);
                            for (var l = [], h = 0; h < this.xaxisLabels.length; h++) l.push(this.xaxisLabels[h]);
                            i = -(e = s.globals.gridHeight / l.length) / 2.2;
                            var c = s.globals.yLabelFormatters[0],
                                d = s.config.yaxis[0].labels;
                            if (d.show)
                                for (var u = 0; u <= l.length - 1; u++) {
                                    var g = void 0 === l[u] ? "" : l[u];
                                    g = c(g);
                                    var p = a.drawText({
                                        x: d.offsetX - 15,
                                        y: i + e + d.offsetY,
                                        text: g,
                                        textAnchor: this.yaxis.opposite ? "start" : "end",
                                        foreColor: d.style.color ? d.style.color : d.style.colors[u],
                                        fontSize: d.style.fontSize,
                                        fontFamily: d.style.fontFamily,
                                        cssClass: "apexcharts-yaxis-label " + d.style.cssClass,
                                    });
                                    if ((o.add(p), 0 !== s.config.yaxis[t].labels.rotate)) {
                                        var x = a.rotateAroundCenter(p.node);
                                        p.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[t].labels.rotate, " ").concat(x.x, " ").concat(x.y, ")"));
                                    }
                                    i += e;
                                }
                            if (void 0 !== s.config.yaxis[0].title.text) {
                                var b = a.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + n + ", 0)" }),
                                    m = a.drawText({
                                        x: 0,
                                        y: s.globals.gridHeight / 2,
                                        text: s.config.yaxis[0].title.text,
                                        textAnchor: "middle",
                                        foreColor: s.config.yaxis[0].title.style.color,
                                        fontSize: s.config.yaxis[0].title.style.fontSize,
                                        fontFamily: s.config.yaxis[0].title.style.fontFamily,
                                        cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass,
                                    });
                                b.add(m), r.add(b);
                            }
                            if (s.config.xaxis.axisBorder.show) {
                                var v = a.drawLine(s.globals.padHorizontal + s.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, this.yaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                                r.add(v), this.axesUtils.drawYAxisTicks(0, l.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, e, r);
                            }
                            return r;
                        },
                    },
                    {
                        key: "drawXaxisTicks",
                        value: function (t, e) {
                            var i = this.w,
                                s = t;
                            if (!(t < 0 || t > i.globals.gridWidth)) {
                                var a = this.offY + i.config.xaxis.axisTicks.offsetY,
                                    n = a + i.config.xaxis.axisTicks.height;
                                if (i.config.xaxis.axisTicks.show) {
                                    var r = new f(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, a + i.config.xaxis.offsetY, s + i.config.xaxis.axisTicks.offsetX, n + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                                    e.add(r), r.node.classList.add("apexcharts-xaxis-tick");
                                }
                            }
                        },
                    },
                    {
                        key: "getXAxisTicksPositions",
                        value: function () {
                            var t = this.w,
                                e = [],
                                i = this.xaxisLabels.length,
                                s = t.globals.padHorizontal;
                            if (t.globals.timelineLabels.length > 0) for (var a = 0; a < i; a++) (s = this.xaxisLabels[a].position), e.push(s);
                            else
                                for (var n = i, r = 0; r < n; r++) {
                                    var o = n;
                                    t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), (s += t.globals.gridWidth / o), e.push(s);
                                }
                            return e;
                        },
                    },
                    {
                        key: "xAxisLabelCorrections",
                        value: function () {
                            var t = this.w,
                                e = new f(this.ctx),
                                i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                                s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                                a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                                n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");
                            if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
                                for (var r = 0; r < s.length; r++) {
                                    var o = e.rotateAroundCenter(s[r]);
                                    (o.y = o.y - 1), (o.x = o.x + 1), s[r].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), s[r].setAttribute("text-anchor", "end");
                                    i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                                    var l = s[r].childNodes;
                                    t.config.xaxis.labels.trim && e.placeTextWithEllipsis(l[0], l[0].textContent, t.config.xaxis.labels.maxHeight - 40);
                                }
                            else
                                for (var h = t.globals.gridWidth / t.globals.labels.length, c = 0; c < s.length; c++) {
                                    var d = s[c].childNodes;
                                    t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && e.placeTextWithEllipsis(d[0], d[0].textContent, h);
                                }
                            if (a.length > 0) {
                                var u = a[a.length - 1].getBBox(),
                                    g = a[0].getBBox();
                                u.x < -20 && a[a.length - 1].parentNode.removeChild(a[a.length - 1]), g.x + g.width > t.globals.gridWidth && a[0].parentNode.removeChild(a[0]);
                                for (var p = 0; p < n.length; p++) e.placeTextWithEllipsis(n[p], n[p].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseInt(t.config.yaxis[0].title.style.fontSize) - 20);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        W = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
                var s = this.w;
                (this.xaxisFontSize = s.config.xaxis.labels.style.fontSize),
                    (this.axisFontFamily = s.config.xaxis.labels.style.fontFamily),
                    (this.xaxisForeColors = s.config.xaxis.labels.style.colors),
                    (this.xAxisoffX = 0),
                    "bottom" === s.config.xaxis.position && (this.xAxisoffX = s.globals.gridHeight),
                    (this.drawnLabels = []),
                    (this.axesUtils = new O(i));
            }
            return (
                s(t, [
                    {
                        key: "drawYaxis",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = e.config.yaxis[t].labels.style.fontSize,
                                a = e.config.yaxis[t].labels.style.fontFamily,
                                n = i.group({ class: "apexcharts-yaxis", rel: t, transform: "translate(" + e.globals.translateYAxisX[t] + ", 0)" });
                            if (!e.config.yaxis[t].show) return n;
                            var r = i.group({ class: "apexcharts-yaxis-texts-g" });
                            n.add(r);
                            var o = e.globals.yAxisScale[t].result.length - 1,
                                l = e.globals.gridHeight / o + 0.1,
                                h = e.globals.translateY,
                                c = e.globals.yLabelFormatters[t],
                                d = e.globals.yAxisScale[t].result.slice();
                            if ((e.config.yaxis[t] && e.config.yaxis[t].reversed && d.reverse(), e.config.yaxis[t].labels.show))
                                for (var u = o; u >= 0; u--) {
                                    var g = d[u];
                                    g = c(g, u);
                                    var p = e.config.yaxis[t].labels.padding;
                                    e.config.yaxis[t].opposite && 0 !== e.config.yaxis.length && (p *= -1);
                                    var x = i.drawText({
                                        x: p,
                                        y: h + o / 10 + e.config.yaxis[t].labels.offsetY + 1,
                                        text: g,
                                        textAnchor: e.config.yaxis[t].opposite ? "start" : "end",
                                        fontSize: s,
                                        fontFamily: a,
                                        foreColor: e.config.yaxis[t].labels.style.color,
                                        cssClass: "apexcharts-yaxis-label " + e.config.yaxis[t].labels.style.cssClass,
                                    });
                                    r.add(x);
                                    var b = i.rotateAroundCenter(x.node);
                                    0 !== e.config.yaxis[t].labels.rotate && x.node.setAttribute("transform", "rotate(".concat(e.config.yaxis[t].labels.rotate, " ").concat(b.x, " ").concat(b.y, ")")), (h += l);
                                }
                            if (void 0 !== e.config.yaxis[t].title.text) {
                                var m = i.group({ class: "apexcharts-yaxis-title" }),
                                    v = 0;
                                e.config.yaxis[t].opposite && (v = e.globals.translateYAxisX[t]);
                                var y = i.drawText({
                                    x: v,
                                    y: e.globals.gridHeight / 2 + e.globals.translateY,
                                    text: e.config.yaxis[t].title.text,
                                    textAnchor: "end",
                                    foreColor: e.config.yaxis[t].title.style.color,
                                    fontSize: e.config.yaxis[t].title.style.fontSize,
                                    fontFamily: e.config.yaxis[t].title.style.fontFamily,
                                    cssClass: "apexcharts-yaxis-title-text " + e.config.yaxis[t].title.style.cssClass,
                                });
                                m.add(y), n.add(m);
                            }
                            var w = e.config.yaxis[t].axisBorder;
                            if (w.show) {
                                var k = 31 + w.offsetX;
                                e.config.yaxis[t].opposite && (k = -31 - w.offsetX);
                                var A = i.drawLine(k, e.globals.translateY + w.offsetY - 2, k, e.globals.gridHeight + e.globals.translateY + w.offsetY + 2, w.color);
                                n.add(A), this.axesUtils.drawYAxisTicks(k, o, w, e.config.yaxis[t].axisTicks, t, l, n);
                            }
                            return n;
                        },
                    },
                    {
                        key: "drawYaxisInversed",
                        value: function (t) {
                            var e = this.w,
                                i = new f(this.ctx),
                                s = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }),
                                a = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
                            s.add(a);
                            var n = e.globals.yAxisScale[t].result.length - 1,
                                r = e.globals.gridWidth / n + 0.1,
                                o = r + e.config.xaxis.labels.offsetX,
                                l = e.globals.xLabelFormatter,
                                h = e.globals.yAxisScale[t].result.slice(),
                                c = e.globals.invertedTimelineLabels;
                            c.length > 0 && ((this.xaxisLabels = c.slice()), (n = (h = c.slice()).length)), e.config.yaxis[t] && e.config.yaxis[t].reversed && h.reverse();
                            var d = c.length;
                            if (e.config.xaxis.labels.show)
                                for (var u = d ? 0 : n; d ? u < d - 1 : u >= 0; d ? u++ : u--) {
                                    var g = h[u];
                                    g = l(g, u);
                                    var p = e.globals.gridWidth + e.globals.padHorizontal - (o - r + e.config.xaxis.labels.offsetX);
                                    if (c.length) {
                                        var x = this.axesUtils.getLabel(h, c, p, u, this.drawnLabels);
                                        (p = x.x), (g = x.text), this.drawnLabels.push(x.text);
                                    }
                                    var b = i.drawText({
                                        x: p,
                                        y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
                                        text: "",
                                        textAnchor: "middle",
                                        foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                                        fontSize: this.xaxisFontSize,
                                        fontFamily: this.xaxisFontFamily,
                                        cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass,
                                    });
                                    a.add(b), b.tspan(g);
                                    var m = document.createElementNS(e.globals.SVGNS, "title");
                                    (m.textContent = g), b.node.appendChild(m), (o += r);
                                }
                            if (void 0 !== e.config.xaxis.title.text) {
                                var v = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }),
                                    y = i.drawText({
                                        x: e.globals.gridWidth / 2,
                                        y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(e.config.xaxis.title.style.fontSize) + 20,
                                        text: e.config.xaxis.title.text,
                                        textAnchor: "middle",
                                        fontSize: e.config.xaxis.title.style.fontSize,
                                        fontFamily: e.config.xaxis.title.style.fontFamily,
                                        cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass,
                                    });
                                v.add(y), s.add(v);
                            }
                            var w = e.config.yaxis[t].axisBorder;
                            if (w.show) {
                                var k = i.drawLine(e.globals.padHorizontal + w.offsetX, 1 + w.offsetY, e.globals.padHorizontal + w.offsetX, e.globals.gridHeight + w.offsetY, w.color);
                                s.add(k);
                            }
                            return s;
                        },
                    },
                    {
                        key: "yAxisTitleRotate",
                        value: function (t, e) {
                            var i = this.w,
                                s = new f(this.ctx),
                                a = { width: 0, height: 0 },
                                n = { width: 0, height: 0 },
                                r = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                            null !== r && (a = r.getBoundingClientRect());
                            var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
                            if ((null !== o && (n = o.getBoundingClientRect()), null !== o)) {
                                var l = this.xPaddingForYAxisTitle(t, a, n, e);
                                o.setAttribute("x", l.xPos - (e ? 10 : 0));
                            }
                            if (null !== o) {
                                var h = s.rotateAroundCenter(o);
                                e
                                    ? o.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"))
                                    : o.setAttribute("transform", "rotate(-".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"));
                            }
                        },
                    },
                    {
                        key: "xPaddingForYAxisTitle",
                        value: function (t, e, i, s) {
                            var a = this.w,
                                n = 0,
                                r = 0,
                                o = 10;
                            return void 0 === a.config.yaxis[t].title.text || t < 0
                                ? { xPos: r, padd: 0 }
                                : (s
                                      ? ((r = e.width + a.config.yaxis[t].title.offsetX + i.width / 2 + o / 2), 0 === (n += 1) && (r -= o / 2))
                                      : ((r = -1 * e.width + a.config.yaxis[t].title.offsetX + o / 2 + i.width / 2), a.globals.isBarHorizontal && ((o = 25), (r = -1 * e.width - a.config.yaxis[t].title.offsetX - o))),
                                  { xPos: r, padd: o });
                        },
                    },
                    {
                        key: "setYAxisXPosition",
                        value: function (t, e) {
                            var i = this.w,
                                s = 0,
                                a = 0,
                                n = 21,
                                r = 1;
                            i.config.yaxis.length > 1 && (this.multipleYs = !0),
                                i.config.yaxis.map(function (o, l) {
                                    var h = i.globals.ignoreYAxisIndexes.indexOf(l) > -1 || !o.show || o.floating || 0 === t[l].width,
                                        c = t[l].width + e[l].width;
                                    o.opposite
                                        ? i.globals.isBarHorizontal
                                            ? ((a = i.globals.gridWidth + i.globals.translateX - 1), (i.globals.translateYAxisX[l] = a - o.labels.offsetX))
                                            : ((a = i.globals.gridWidth + i.globals.translateX + r), h || (r = r + c + 20), (i.globals.translateYAxisX[l] = a - o.labels.offsetX + 20))
                                        : ((s = i.globals.translateX - n), h || (n = n + c + 20), (i.globals.translateYAxisX[l] = s + o.labels.offsetX));
                                });
                        },
                    },
                    {
                        key: "setYAxisTextAlignments",
                        value: function () {
                            var t = this.w,
                                e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis");
                            (e = d.listToArray(e)).forEach(function (e, i) {
                                var s = t.config.yaxis[i];
                                if (void 0 !== s.labels.align) {
                                    var a = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")),
                                        n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"));
                                    n = d.listToArray(n);
                                    var r = a.getBoundingClientRect();
                                    "left" === s.labels.align
                                        ? (n.forEach(function (t, e) {
                                              t.setAttribute("text-anchor", "start");
                                          }),
                                          s.opposite || a.setAttribute("transform", "translate(-".concat(r.width, ", 0)")))
                                        : "center" === s.labels.align
                                        ? (n.forEach(function (t, e) {
                                              t.setAttribute("text-anchor", "middle");
                                          }),
                                          a.setAttribute("transform", "translate(".concat((r.width / 2) * (s.opposite ? 1 : -1), ", 0)")))
                                        : "right" === s.labels.align &&
                                          (n.forEach(function (t, e) {
                                              t.setAttribute("text-anchor", "end");
                                          }),
                                          s.opposite && a.setAttribute("transform", "translate(".concat(r.width, ", 0)")));
                                }
                            });
                        },
                    },
                ]),
                t
            );
        })(),
        B = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "niceScale",
                        value: function (t, e, i) {
                            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10,
                                n = this.w,
                                r = (void 0 === this.w.config.yaxis[s].max && void 0 === this.w.config.yaxis[s].min) || this.w.config.yaxis[s].forceNiceScale;
                            if ((t === Number.MIN_VALUE && 0 === e) || (!d.isNumber(t) && !d.isNumber(e)) || (t === Number.MIN_VALUE && e === -Number.MAX_VALUE)) return (t = 0), (e = a), this.linearScale(t, e, a);
                            t > e ? (console.warn("yaxis.min cannot be greater than yaxis.max"), (e = t + 0.1)) : t === e && ((t = 0 === t ? 0 : t - 0.5), (e = 0 === e ? 2 : e + 0.5));
                            var o = [],
                                l = Math.abs(e - t);
                            l < 1 && r && ("candlestick" === n.config.chart.type || "candlestick" === n.config.series[s].type || n.globals.isRangeData) && (e *= 1.01),
                                l < 1e-5 && r && e < 10 ? (e *= 1.05) : i > 0.1 && i < 3 && r && (e += i / 3);
                            var h = a + 1;
                            h < 2 ? (h = 2) : h > 2 && (h -= 2);
                            for (var c = l / h, u = Math.floor(d.log10(c)), g = Math.pow(10, u), f = parseInt(c / g) * g, p = f * Math.floor(t / f), x = f * Math.ceil(e / f), b = p; o.push(b), !((b += f) > x); );
                            if (r) return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
                            var m = t;
                            (o = []).push(m);
                            for (var v = Math.abs(e - t) / a, y = 0; y <= a - 1; y++) (m += v), o.push(m);
                            return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
                        },
                    },
                    {
                        key: "linearScale",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                                s = Math.abs(e - t) / i;
                            i === Number.MAX_VALUE && ((i = 10), (s = 1));
                            for (var a = [], n = t; i >= 0; ) a.push(n), (n += s), (i -= 1);
                            return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
                        },
                    },
                    {
                        key: "logarithmicScale",
                        value: function (t, e, i, s) {
                            (e < 0 || e === Number.MIN_VALUE) && (e = 0.01);
                            for (var a = Math.log(e) / Math.log(10), n = Math.log(i) / Math.log(10), r = Math.abs(i - e) / s, o = [], l = e; s >= 0; ) o.push(l), (l += r), (s -= 1);
                            var h = o.map(function (t, s) {
                                t <= 0 && (t = 0.01);
                                var r = (n - a) / (i - e),
                                    o = Math.pow(10, a + r * (t - a));
                                return Math.round(o / d.roundToBase(o, 10)) * d.roundToBase(o, 10);
                            });
                            return 0 === h[0] && (h[0] = 1), { result: h, niceMin: h[0], niceMax: h[h.length - 1] };
                        },
                    },
                    {
                        key: "setYScaleForIndex",
                        value: function (t, e, i) {
                            var s = this.w.globals,
                                a = this.w.config,
                                n = s.isBarHorizontal ? a.xaxis : a.yaxis[t];
                            if ((void 0 === s.yAxisScale[t] && (s.yAxisScale[t] = []), n.logarithmic)) (s.allSeriesCollapsed = !1), (s.yAxisScale[t] = this.logarithmicScale(t, e, i, n.tickAmount ? n.tickAmount : Math.floor(Math.log10(i))));
                            else if (i !== -Number.MAX_VALUE && d.isNumber(i))
                                if (((s.allSeriesCollapsed = !1), (void 0 === n.min && void 0 === n.max) || n.forceNiceScale)) {
                                    var r = Math.abs(i - e);
                                    s.yAxisScale[t] = this.niceScale(e, i, r, t, n.tickAmount ? n.tickAmount : r < 5 && r > 1 ? r + 1 : 5);
                                } else s.yAxisScale[t] = this.linearScale(e, i, n.tickAmount);
                            else s.yAxisScale[t] = this.linearScale(0, 5, 5);
                        },
                    },
                    {
                        key: "setMultipleYScales",
                        value: function () {
                            var t = this,
                                e = this.w.globals,
                                i = this.w.config,
                                s = e.minYArr.concat([]),
                                a = e.maxYArr.concat([]),
                                n = [];
                            i.yaxis.forEach(function (r, o) {
                                var l = o;
                                i.series.forEach(function (t, i) {
                                    t.name === r.seriesName && -1 === e.collapsedSeriesIndices.indexOf(i) && ((l = i), o !== i ? n.push({ index: i, similarIndex: o, alreadyExists: !0 }) : n.push({ index: i }));
                                });
                                var h = s[l],
                                    c = a[l];
                                t.setYScaleForIndex(o, h, c);
                            }),
                                this.sameScaleInMultipleAxes(s, a, n);
                        },
                    },
                    {
                        key: "sameScaleInMultipleAxes",
                        value: function (t, e, i) {
                            var s = this,
                                a = this.w.config,
                                n = this.w.globals,
                                r = [];
                            i.forEach(function (t) {
                                t.alreadyExists && (void 0 === r[t.index] && (r[t.index] = []), r[t.index].push(t.index), r[t.index].push(t.similarIndex));
                            }),
                                r.forEach(function (t, e) {
                                    r.forEach(function (i, s) {
                                        var a, n;
                                        e !== s &&
                                            ((a = t),
                                            (n = i),
                                            a.filter(function (t) {
                                                return -1 !== n.indexOf(t);
                                            })).length > 0 &&
                                            (r[e] = r[e].concat(r[s]));
                                    });
                                });
                            var o = r
                                .map(function (t) {
                                    return t.filter(function (e, i) {
                                        return t.indexOf(e) === i;
                                    });
                                })
                                .map(function (t) {
                                    return t.sort();
                                });
                            r = r.filter(function (t) {
                                return !!t;
                            });
                            var l = o.slice(),
                                h = l.map(function (t) {
                                    return JSON.stringify(t);
                                });
                            l = l.filter(function (t, e) {
                                return h.indexOf(JSON.stringify(t)) === e;
                            });
                            var c = [],
                                d = [];
                            t.forEach(function (t, i) {
                                l.forEach(function (s, a) {
                                    s.indexOf(i) > -1 && (void 0 === c[a] && ((c[a] = []), (d[a] = [])), c[a].push({ key: i, value: t }), d[a].push({ key: i, value: e[i] }));
                                });
                            });
                            var u = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                                g = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                            c.forEach(function (t, e) {
                                t.forEach(function (t, i) {
                                    u[e] = Math.min(t.value, u[e]);
                                });
                            }),
                                d.forEach(function (t, e) {
                                    t.forEach(function (t, i) {
                                        g[e] = Math.max(t.value, g[e]);
                                    });
                                }),
                                t.forEach(function (t, e) {
                                    d.forEach(function (t, i) {
                                        var r = u[i],
                                            o = g[i];
                                        t.forEach(function (i, l) {
                                            t[l].key === e &&
                                                (void 0 !== a.yaxis[e].min && (r = "function" == typeof a.yaxis[e].min ? a.yaxis[e].min(n.minY) : a.yaxis[e].min),
                                                void 0 !== a.yaxis[e].max && (o = "function" == typeof a.yaxis[e].max ? a.yaxis[e].max(n.maxY) : a.yaxis[e].max),
                                                s.setYScaleForIndex(e, r, o));
                                        });
                                    });
                                });
                        },
                    },
                    {
                        key: "autoScaleY",
                        value: function (t, e) {
                            t || (t = this);
                            var i = [];
                            return (
                                t.w.config.series.forEach(function (t) {
                                    var s,
                                        a,
                                        n = t.data.find(function (t) {
                                            return t[0] >= e.xaxis.min;
                                        })[1];
                                    (a = s = n),
                                        t.data.forEach(function (t) {
                                            t[0] <= e.xaxis.max && t[0] >= e.xaxis.min && (t[1] > a && null !== t[1] && (a = t[1]), t[1] < s && null !== t[1] && (s = t[1]));
                                        }),
                                        (s *= 0.95),
                                        (a *= 1.05),
                                        i.push({ min: s, max: a });
                                }),
                                i
                            );
                        },
                    },
                ]),
                t
            );
        })(),
        V = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.scales = new B(i));
            }
            return (
                s(t, [
                    {
                        key: "init",
                        value: function () {
                            this.setYRange(), this.setXRange(), this.setZRange();
                        },
                    },
                    {
                        key: "getMinYMaxY",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                a = this.w.globals,
                                n = -Number.MAX_VALUE,
                                r = Number.MIN_VALUE;
                            null === s && (s = t + 1);
                            var o = a.series,
                                l = o,
                                h = o;
                            "candlestick" === this.w.config.chart.type ? ((l = a.seriesCandleL), (h = a.seriesCandleH)) : a.isRangeData && ((l = a.seriesRangeStart), (h = a.seriesRangeEnd));
                            for (var c = t; c < s; c++) {
                                a.dataPoints = Math.max(a.dataPoints, o[c].length);
                                for (var u = 0; u < a.series[c].length; u++) {
                                    var g = o[c][u];
                                    null !== g && d.isNumber(g)
                                        ? ((n = Math.max(n, h[c][u])),
                                          (e = Math.min(e, l[c][u])),
                                          (i = Math.max(i, l[c][u])),
                                          "candlestick" === this.w.config.chart.type &&
                                              ((n = Math.max(n, a.seriesCandleO[c][u])), (n = Math.max(n, a.seriesCandleH[c][u])), (n = Math.max(n, a.seriesCandleL[c][u])), (i = n = Math.max(n, a.seriesCandleC[c][u]))),
                                          d.isFloat(g) && ((g = d.noExponents(g)), (a.yValueDecimal = Math.max(a.yValueDecimal, g.toString().split(".")[1].length))),
                                          r > l[c][u] && l[c][u] < 0 && (r = l[c][u]))
                                        : (a.hasNullValues = !0);
                                }
                            }
                            return { minY: r, maxY: n, lowestY: e, highestY: i };
                        },
                    },
                    {
                        key: "setYRange",
                        value: function () {
                            var t = this.w.globals,
                                e = this.w.config;
                            (t.maxY = -Number.MAX_VALUE), (t.minY = Number.MIN_VALUE);
                            var i = Number.MAX_VALUE;
                            if (t.isMultipleYAxis)
                                for (var s = 0; s < t.series.length; s++) {
                                    var a = this.getMinYMaxY(s, i, null, s + 1);
                                    t.minYArr.push(a.minY), t.maxYArr.push(a.maxY), (i = a.lowestY);
                                }
                            var n = this.getMinYMaxY(0, i, null, t.series.length);
                            if (((t.minY = n.minY), (t.maxY = n.maxY), (i = n.lowestY), e.chart.stacked)) {
                                for (var r = [], o = [], l = 0; l < t.series[t.maxValsInArrayIndex].length; l++)
                                    for (var h = 0, c = 0, u = 0; u < t.series.length; u++)
                                        null !== t.series[u][l] && d.isNumber(t.series[u][l]) && (t.series[u][l] > 0 ? (h = h + parseFloat(t.series[u][l]) + 1e-4) : (c += parseFloat(t.series[u][l]))),
                                            u === t.series.length - 1 && (r.push(h), o.push(c));
                                for (var g = 0; g < r.length; g++) (t.maxY = Math.max(t.maxY, r[g])), (t.minY = Math.min(t.minY, o[g]));
                            }
                            if (("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) {
                                var f = t.maxY - i;
                                i >= 0 && i <= 10 && (f = 0), (t.minY = i - (5 * f) / 100), (t.maxY = t.maxY + (5 * f) / 100);
                            }
                            return (
                                e.yaxis.map(function (e, i) {
                                    void 0 !== e.max && ("number" == typeof e.max ? (t.maxYArr[i] = e.max) : "function" == typeof e.max && (t.maxYArr[i] = e.max(t.maxY)), (t.maxY = t.maxYArr[i])),
                                        void 0 !== e.min && ("number" == typeof e.min ? (t.minYArr[i] = e.min) : "function" == typeof e.min && (t.minYArr[i] = e.min(t.minY)), (t.minY = t.minYArr[i]));
                                }),
                                t.isBarHorizontal && (void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minY = e.xaxis.min), void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxY = e.xaxis.max)),
                                t.isMultipleYAxis
                                    ? (this.scales.setMultipleYScales(),
                                      (t.minY = i),
                                      t.yAxisScale.forEach(function (e, i) {
                                          (t.minYArr[i] = e.niceMin), (t.maxYArr[i] = e.niceMax);
                                      }))
                                    : (this.scales.setYScaleForIndex(0, t.minY, t.maxY),
                                      (t.minY = t.yAxisScale[0].niceMin),
                                      (t.maxY = t.yAxisScale[0].niceMax),
                                      (t.minYArr[0] = t.yAxisScale[0].niceMin),
                                      (t.maxYArr[0] = t.yAxisScale[0].niceMax)),
                                { minY: t.minY, maxY: t.maxY, minYArr: t.minYArr, maxYArr: t.maxYArr }
                            );
                        },
                    },
                    {
                        key: "setXRange",
                        value: function () {
                            var t,
                                e = this.w.globals,
                                i = this.w.config,
                                s = "numeric" === i.xaxis.type || "datetime" === i.xaxis.type || ("category" === i.xaxis.type && !e.noLabelsProvided) || e.noLabelsProvided || e.isXNumeric;
                            if (e.isXNumeric)
                                for (var a = 0; a < e.series.length; a++)
                                    if (e.labels[a])
                                        for (var n = 0; n < e.labels[a].length; n++)
                                            null !== e.labels[a][n] &&
                                                d.isNumber(e.labels[a][n]) &&
                                                ((e.maxX = Math.max(e.maxX, e.labels[a][n])),
                                                (e.initialmaxX = Math.max(e.maxX, e.labels[a][n])),
                                                (e.minX = Math.min(e.minX, e.labels[a][n])),
                                                (e.initialminX = Math.min(e.minX, e.labels[a][n])));
                            if (
                                (e.noLabelsProvided && 0 === i.xaxis.categories.length && ((e.maxX = e.labels[e.labels.length - 1]), (e.initialmaxX = e.labels[e.labels.length - 1]), (e.minX = 1), (e.initialminX = 1)),
                                (e.comboChartsHasBars || "candlestick" === i.chart.type || ("bar" === i.chart.type && e.isXNumeric)) && ("category" !== i.xaxis.type || e.isXNumeric))
                            ) {
                                var r = e.minX - ((e.svgWidth / e.dataPoints) * (Math.abs(e.maxX - e.minX) / e.svgWidth)) / 2;
                                (e.minX = r), (e.initialminX = r);
                                var o = e.maxX + ((e.svgWidth / e.dataPoints) * (Math.abs(e.maxX - e.minX) / e.svgWidth)) / 2;
                                (e.maxX = o), (e.initialmaxX = o);
                            }
                            (!e.isXNumeric && !e.noLabelsProvided) ||
                                (i.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) ||
                                (void 0 === i.xaxis.tickAmount
                                    ? ((t = Math.round(e.svgWidth / 150)), "numeric" === i.xaxis.type && e.dataPoints < 20 && (t = e.dataPoints - 1), t > e.dataPoints && 0 !== e.dataPoints && (t = e.dataPoints - 1))
                                    : (t = "dataPoints" === i.xaxis.tickAmount ? e.series[e.maxValsInArrayIndex].length - 1 : i.xaxis.tickAmount),
                                void 0 !== i.xaxis.max && "number" == typeof i.xaxis.max && (e.maxX = i.xaxis.max),
                                void 0 !== i.xaxis.min && "number" == typeof i.xaxis.min && (e.minX = i.xaxis.min),
                                void 0 !== i.xaxis.range && (e.minX = e.maxX - i.xaxis.range),
                                e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE
                                    ? (e.xAxisScale = this.scales.linearScale(e.minX, e.maxX, t))
                                    : ((e.xAxisScale = this.scales.linearScale(1, t, t)), e.noLabelsProvided && e.labels.length > 0 && ((e.xAxisScale = this.scales.linearScale(1, e.labels.length, t - 1)), (e.seriesX = e.labels.slice()))),
                                s && (e.labels = e.xAxisScale.result.slice()));
                            if (e.minX === e.maxX)
                                if ("datetime" === i.xaxis.type) {
                                    var l = new Date(e.minX);
                                    l.setDate(l.getDate() - 2), (e.minX = new Date(l).getTime());
                                    var h = new Date(e.maxX);
                                    h.setDate(h.getDate() + 2), (e.maxX = new Date(h).getTime());
                                } else ("numeric" === i.xaxis.type || ("category" === i.xaxis.type && !e.noLabelsProvided)) && ((e.minX = e.minX - 2), (e.maxX = e.maxX + 2));
                            return (
                                e.isXNumeric &&
                                    (e.seriesX.forEach(function (t, i) {
                                        t.forEach(function (t, s) {
                                            if (s > 0) {
                                                var a = t - e.seriesX[i][s - 1];
                                                e.minXDiff = Math.min(a, e.minXDiff);
                                            }
                                        });
                                    }),
                                    this.calcMinXDiffForTinySeries()),
                                { minX: e.minX, maxX: e.maxX }
                            );
                        },
                    },
                    {
                        key: "calcMinXDiffForTinySeries",
                        value: function () {
                            var t = this.w,
                                e = t.globals.labels.length;
                            return (
                                1 === t.globals.labels.length
                                    ? (t.globals.minXDiff = (t.globals.maxX - t.globals.minX) / e / 3)
                                    : t.globals.minXDiff === Number.MAX_VALUE && (t.globals.timelineLabels.length > 0 && (e = t.globals.timelineLabels.length), e < 3 && (e = 3), (t.globals.minXDiff = (t.globals.maxX - t.globals.minX) / e)),
                                t.globals.minXDiff
                            );
                        },
                    },
                    {
                        key: "setZRange",
                        value: function () {
                            var t = this.w.globals;
                            if (t.isDataXYZ)
                                for (var e = 0; e < t.series.length; e++)
                                    if (void 0 !== t.seriesZ[e])
                                        for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && d.isNumber(t.seriesZ[e][i]) && ((t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i])), (t.minZ = Math.min(t.minZ, t.seriesZ[e][i])));
                        },
                    },
                ]),
                t
            );
        })(),
        G = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "getAllSeriesEls",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                        },
                    },
                    {
                        key: "getSeriesByName",
                        value: function (t) {
                            return this.w.globals.dom.baseEl.querySelector("[seriesName='".concat(d.escapeString(t), "']"));
                        },
                    },
                    {
                        key: "addCollapsedClassToSeries",
                        value: function (t, e) {
                            var i = this.w;
                            function s(i) {
                                for (var s = 0; s < i.length; s++) i[s].index === e && t.node.classList.add("apexcharts-series-collapsed");
                            }
                            s(i.globals.collapsedSeries), s(i.globals.ancillaryCollapsedSeries);
                        },
                    },
                    {
                        key: "toggleSeriesOnHover",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                            if ("mousemove" === t.type) {
                                var a = parseInt(e.getAttribute("rel")) - 1,
                                    n = null;
                                n =
                                    i.globals.axisCharts || "radialBar" === i.config.chart.type
                                        ? i.globals.axisCharts
                                            ? i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a, "']"))
                                            : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "']"))
                                        : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "'] path"));
                                for (var r = 0; r < s.length; r++) s[r].classList.add("legend-mouseover-inactive");
                                null !== n && (i.globals.axisCharts || n.parentNode.classList.remove("legend-mouseover-inactive"), n.classList.remove("legend-mouseover-inactive"));
                            } else if ("mouseout" === t.type) for (var o = 0; o < s.length; o++) s[o].classList.remove("legend-mouseover-inactive");
                        },
                    },
                    {
                        key: "highlightRangeInSeries",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),
                                a = function () {
                                    for (var t = 0; t < s.length; t++) s[t].classList.remove("legend-mouseover-inactive");
                                };
                            if ("mousemove" === t.type) {
                                var n = parseInt(e.getAttribute("rel")) - 1;
                                a(),
                                    (function () {
                                        for (var t = 0; t < s.length; t++) s[t].classList.add("legend-mouseover-inactive");
                                    })(),
                                    (function (t) {
                                        for (var e = 0; e < s.length; e++) {
                                            var i = parseInt(s[e].getAttribute("val"));
                                            i >= t.from && i <= t.to && s[e].classList.remove("legend-mouseover-inactive");
                                        }
                                    })(i.config.plotOptions.heatmap.colorScale.ranges[n]);
                            } else "mouseout" === t.type && a();
                        },
                    },
                    {
                        key: "getActiveSeriesIndex",
                        value: function () {
                            var t = this.w,
                                e = 0;
                            if (t.globals.series.length > 1)
                                for (
                                    var i = t.globals.series.map(function (e, i) {
                                            return e.length > 0 && "bar" !== t.config.series[i].type && "column" !== t.config.series[i].type ? i : -1;
                                        }),
                                        s = 0;
                                    s < i.length;
                                    s++
                                )
                                    if (-1 !== i[s]) {
                                        e = i[s];
                                        break;
                                    }
                            return e;
                        },
                    },
                    {
                        key: "getActiveConfigSeriesIndex",
                        value: function () {
                            var t = this.w,
                                e = 0;
                            if (t.config.series.length > 1)
                                for (
                                    var i = t.config.series.map(function (t, e) {
                                            return t.data && t.data.length > 0 ? e : -1;
                                        }),
                                        s = 0;
                                    s < i.length;
                                    s++
                                )
                                    if (-1 !== i[s]) {
                                        e = i[s];
                                        break;
                                    }
                            return e;
                        },
                    },
                    {
                        key: "getPreviousPaths",
                        value: function () {
                            var t = this.w;
                            function e(e, i, s) {
                                for (var a = e[i].childNodes, n = { type: s, paths: [], realIndex: e[i].getAttribute("data:realIndex") }, r = 0; r < a.length; r++)
                                    if (a[r].hasAttribute("pathTo")) {
                                        var o = a[r].getAttribute("pathTo");
                                        n.paths.push({ d: o });
                                    }
                                t.globals.previousPaths.push(n);
                            }
                            t.globals.previousPaths = [];
                            var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");
                            if (i.length > 0) for (var s = i.length - 1; s >= 0; s--) e(i, s, "line");
                            var a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");
                            if (a.length > 0) for (var n = a.length - 1; n >= 0; n--) e(a, n, "area");
                            var r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");
                            if (r.length > 0) for (var o = 0; o < r.length; o++) e(r, o, "bar");
                            var l = t.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");
                            if (l.length > 0) for (var h = 0; h < l.length; h++) e(l, h, "candlestick");
                            var c = t.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");
                            if (c.length > 0) for (var d = 0; d < c.length; d++) e(c, d, "radar");
                            var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");
                            if (u.length > 0)
                                for (var g = 0; g < u.length; g++) {
                                    for (var f = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='".concat(g, "'] circle")), p = [], x = 0; x < f.length; x++)
                                        p.push({ x: f[x].getAttribute("cx"), y: f[x].getAttribute("cy"), r: f[x].getAttribute("r") });
                                    t.globals.previousPaths.push(p);
                                }
                            var b = t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");
                            if (b.length > 0)
                                for (var m = 0; m < b.length; m++) {
                                    for (var v = t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='".concat(m, "'] circle")), y = [], w = 0; w < v.length; w++)
                                        y.push({ x: v[w].getAttribute("cx"), y: v[w].getAttribute("cy"), r: v[w].getAttribute("r") });
                                    t.globals.previousPaths.push(y);
                                }
                            var k = t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");
                            if (k.length > 0)
                                for (var A = 0; A < k.length; A++) {
                                    for (var S = t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(A, "'] rect")), C = [], L = 0; L < S.length; L++)
                                        C.push({ color: S[L].getAttribute("color") });
                                    t.globals.previousPaths.push(C);
                                }
                            t.globals.axisCharts || (t.globals.previousPaths = t.globals.series);
                        },
                    },
                    {
                        key: "handleNoData",
                        value: function () {
                            var t = this.w,
                                e = t.config.noData,
                                i = new f(this.ctx),
                                s = t.globals.svgWidth / 2,
                                a = t.globals.svgHeight / 2,
                                n = "middle";
                            if (
                                ((t.globals.noData = !0),
                                (t.globals.animationEnded = !0),
                                "left" === e.align ? ((s = 10), (n = "start")) : "right" === e.align && ((s = t.globals.svgWidth - 10), (n = "end")),
                                "top" === e.verticalAlign ? (a = 50) : "bottom" === e.verticalAlign && (a = t.globals.svgHeight - 50),
                                (s += e.offsetX),
                                (a = a + parseInt(e.style.fontSize) + 2),
                                void 0 !== e.text && "" !== e.text)
                            ) {
                                var r = i.drawText({ x: s, y: a, text: e.text, textAnchor: n, fontSize: e.style.fontSize, fontFamily: e.style.fontFamily, foreColor: e.style.color, opacity: 1, class: "apexcharts-text-nodata" });
                                r.node.setAttribute("class", "apexcharts-title-text"), t.globals.dom.Paper.add(r);
                            }
                        },
                    },
                    {
                        key: "setNullSeriesToZeroValues",
                        value: function (t) {
                            for (var e = this.w, i = 0; i < t.length; i++) if (0 === t[i].length) for (var s = 0; s < t[e.globals.maxValsInArrayIndex].length; s++) t[i].push(0);
                            return t;
                        },
                    },
                    {
                        key: "hasAllSeriesEqualX",
                        value: function () {
                            for (var t = !0, e = this.w, i = this.filteredSeriesX(), s = 0; s < i.length - 1; s++)
                                if (i[s][0] !== i[s + 1][0]) {
                                    t = !1;
                                    break;
                                }
                            return (e.globals.allSeriesHasEqualX = t), t;
                        },
                    },
                    {
                        key: "filteredSeriesX",
                        value: function () {
                            var t = this.w.globals.seriesX.map(function (t, e) {
                                return t.length > 0 ? t : [];
                            });
                            return t;
                        },
                    },
                ]),
                t
            );
        })(),
        _ = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.lgRect = {}), (this.yAxisWidth = 0), (this.xAxisHeight = 0), (this.isSparkline = this.w.config.chart.sparkline.enabled), (this.xPadRight = 0), (this.xPadLeft = 0);
            }
            return (
                s(t, [
                    {
                        key: "plotCoords",
                        value: function () {
                            var t = this.w,
                                e = t.globals,
                                i = this.getLegendsRect();
                            e.axisCharts ? this.setGridCoordsForAxisCharts(i) : this.setGridCoordsForNonAxisCharts(i),
                                this.titleSubtitleOffset(),
                                (e.gridHeight = e.gridHeight - t.config.grid.padding.top - t.config.grid.padding.bottom),
                                (e.gridWidth = e.gridWidth - t.config.grid.padding.left - t.config.grid.padding.right - this.xPadRight - this.xPadLeft),
                                (e.translateX = e.translateX + t.config.grid.padding.left + this.xPadLeft),
                                (e.translateY = e.translateY + t.config.grid.padding.top);
                        },
                    },
                    {
                        key: "conditionalChecksForAxisCoords",
                        value: function (t, e) {
                            var i = this.w;
                            (this.xAxisHeight = (t.height + e.height) * i.globals.LINE_HEIGHT_RATIO + 15),
                                (this.xAxisWidth = t.width),
                                this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight),
                                i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight),
                                i.config.xaxis.floating && (this.xAxisHeight = 0),
                                i.globals.isBarHorizontal ? (this.yAxisWidth = i.globals.yLabelsCoords[0].width + i.globals.yTitleCoords[0].width + 15) : (this.yAxisWidth = this.getTotalYAxisWidth());
                            var s = 0,
                                a = 0;
                            i.config.yaxis.forEach(function (t) {
                                (s += t.labels.minWidth), (a += t.labels.maxWidth);
                            }),
                                this.yAxisWidth < s && (this.yAxisWidth = s),
                                this.yAxisWidth > a && (this.yAxisWidth = a);
                        },
                    },
                    {
                        key: "setGridCoordsForAxisCharts",
                        value: function (t) {
                            var e = this.w,
                                i = e.globals,
                                s = this.getyAxisLabelsCoords(),
                                a = this.getxAxisLabelsCoords(),
                                n = this.getyAxisTitleCoords(),
                                r = this.getxAxisTitleCoords();
                            (e.globals.yLabelsCoords = []),
                                (e.globals.yTitleCoords = []),
                                e.config.yaxis.map(function (t, i) {
                                    e.globals.yLabelsCoords.push({ width: s[i].width, index: i }), e.globals.yTitleCoords.push({ width: n[i].width, index: i });
                                }),
                                this.conditionalChecksForAxisCoords(a, r),
                                (i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4),
                                (i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0),
                                e.globals.isBarHorizontal && ((i.rotateXLabels = !1), (i.translateXAxisY = (parseInt(e.config.xaxis.labels.style.fontSize) / 1.5) * -1)),
                                (i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY),
                                (i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX);
                            var o = this.yAxisWidth,
                                l = this.xAxisHeight;
                            (i.xAxisLabelsHeight = this.xAxisHeight), (i.xAxisHeight = this.xAxisHeight);
                            var h = 10;
                            switch (
                                ((e.config.grid.show && "radar" !== e.config.chart.type) || ((o = 0), (l = 35)),
                                this.isSparkline && ((t = { height: 0, width: 0 }), (l = 0), (o = 0), (h = 0)),
                                this.additionalPaddingXLabels(a),
                                e.config.legend.position)
                            ) {
                                case "bottom":
                                    (i.translateY = h), (i.translateX = o), (i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15)), (i.gridWidth = i.svgWidth - o);
                                    break;
                                case "top":
                                    (i.translateY = t.height + h), (i.translateX = o), (i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15)), (i.gridWidth = i.svgWidth - o);
                                    break;
                                case "left":
                                    (i.translateY = h), (i.translateX = t.width + o), (i.gridHeight = i.svgHeight - l - 12), (i.gridWidth = i.svgWidth - t.width - o);
                                    break;
                                case "right":
                                    (i.translateY = h), (i.translateX = o), (i.gridHeight = i.svgHeight - l - 12), (i.gridWidth = i.svgWidth - t.width - o - 5);
                                    break;
                                default:
                                    throw new Error("Legend position not supported");
                            }
                            this.setGridXPosForDualYAxis(n, s), new W(this.ctx).setYAxisXPosition(s, n);
                        },
                    },
                    {
                        key: "setGridCoordsForNonAxisCharts",
                        value: function (t) {
                            var e = this.w,
                                i = e.globals,
                                s = 0;
                            e.config.legend.show && !e.config.legend.floating && (s = 20);
                            var a = 10,
                                n = 0;
                            if (
                                ("pie" === e.config.chart.type || "donut" === e.config.chart.type
                                    ? ((a += e.config.plotOptions.pie.offsetY), (n += e.config.plotOptions.pie.offsetX))
                                    : "radialBar" === e.config.chart.type && ((a += e.config.plotOptions.radialBar.offsetY), (n += e.config.plotOptions.radialBar.offsetX)),
                                !e.config.legend.show)
                            )
                                return (i.gridHeight = i.svgHeight - 35), (i.gridWidth = i.gridHeight), (i.translateY = a - 10), void (i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                            switch (e.config.legend.position) {
                                case "bottom":
                                    (i.gridHeight = i.svgHeight - t.height - 35), (i.gridWidth = i.gridHeight), (i.translateY = a - 20), (i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                                    break;
                                case "top":
                                    (i.gridHeight = i.svgHeight - t.height - 35), (i.gridWidth = i.gridHeight), (i.translateY = t.height + a), (i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                                    break;
                                case "left":
                                    (i.gridWidth = i.svgWidth - t.width - s), (i.gridHeight = i.gridWidth), (i.translateY = a), (i.translateX = n + t.width + s);
                                    break;
                                case "right":
                                    (i.gridWidth = i.svgWidth - t.width - s - 5), (i.gridHeight = i.gridWidth), (i.translateY = a), (i.translateX = n + 10);
                                    break;
                                default:
                                    throw new Error("Legend position not supported");
                            }
                        },
                    },
                    {
                        key: "setGridXPosForDualYAxis",
                        value: function (t, e) {
                            var i = this.w;
                            i.config.yaxis.map(function (s, a) {
                                -1 === i.globals.ignoreYAxisIndexes.indexOf(a) &&
                                    !i.config.yaxis[a].floating &&
                                    i.config.yaxis[a].show &&
                                    s.opposite &&
                                    (i.globals.translateX = i.globals.translateX - (e[a].width + t[a].width) - parseInt(i.config.yaxis[a].labels.style.fontSize) / 1.2 - 12);
                            });
                        },
                    },
                    {
                        key: "additionalPaddingXLabels",
                        value: function (t) {
                            var e = this,
                                i = this.w;
                            if (("category" === i.config.xaxis.type && i.globals.isBarHorizontal) || "numeric" === i.config.xaxis.type || "datetime" === i.config.xaxis.type) {
                                var s = i.globals.isXNumeric;
                                i.config.yaxis.forEach(function (a, n) {
                                    var r;
                                    (!a.show || a.floating || -1 !== i.globals.collapsedSeriesIndices.indexOf(n) || s || (a.opposite && i.globals.isBarHorizontal)) &&
                                        (((s && i.globals.isMultipleYAxis && -1 !== i.globals.collapsedSeriesIndices.indexOf(n)) || (i.globals.isBarHorizontal && a.opposite)) &&
                                            ((r = t), i.config.grid.padding.left < r.width && (e.xPadLeft = r.width / 2 + 1)),
                                        ((!i.globals.isBarHorizontal && a.opposite && -1 !== i.globals.collapsedSeriesIndices.indexOf(n)) || (s && !i.globals.isMultipleYAxis)) &&
                                            (function (t) {
                                                e.timescaleLabels
                                                    ? e.timescaleLabels[e.timescaleLabels.length - 1].position + t.width > i.globals.gridWidth
                                                        ? (i.globals.skipLastTimelinelabel = !0)
                                                        : (i.globals.skipLastTimelinelabel = !1)
                                                    : "datetime" !== i.config.xaxis.type && i.config.grid.padding.right < t.width && (e.xPadRight = t.width / 2 + 1);
                                            })(t));
                                });
                            }
                        },
                    },
                    {
                        key: "titleSubtitleOffset",
                        value: function () {
                            var t = this.w,
                                e = t.globals,
                                i = this.isSparkline || !t.globals.axisCharts ? 0 : 10;
                            void 0 !== t.config.title.text ? (i += t.config.title.margin) : (i += this.isSparkline || !t.globals.axisCharts ? 0 : 5),
                                void 0 !== t.config.subtitle.text ? (i += t.config.subtitle.margin) : (i += this.isSparkline || !t.globals.axisCharts ? 0 : 5),
                                t.config.legend.show && "bottom" === t.config.legend.position && !t.config.legend.floating && t.config.series.length > 1 && (i += 10);
                            var s = this.getTitleSubtitleCoords("title"),
                                a = this.getTitleSubtitleCoords("subtitle");
                            (e.gridHeight = e.gridHeight - s.height - a.height - i), (e.translateY = e.translateY + s.height + a.height + i);
                        },
                    },
                    {
                        key: "getTotalYAxisWidth",
                        value: function () {
                            var t = this.w,
                                e = 0,
                                i = 10,
                                s = function (e) {
                                    return t.globals.ignoreYAxisIndexes.indexOf(e) > -1;
                                };
                            return (
                                t.globals.yLabelsCoords.map(function (a, n) {
                                    var r = t.config.yaxis[n].floating;
                                    a.width > 0 && !r ? ((e = e + a.width + i), s(n) && (e = e - a.width - i)) : (e += r || !t.config.yaxis[n].show ? 0 : 5);
                                }),
                                t.globals.yTitleCoords.map(function (a, n) {
                                    var r = t.config.yaxis[n].floating;
                                    (i = parseInt(t.config.yaxis[n].title.style.fontSize)), a.width > 0 && !r ? ((e = e + a.width + i), s(n) && (e = e - a.width - i)) : (e += r || !t.config.yaxis[n].show ? 0 : 5);
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "getxAxisTimeScaleLabelsCoords",
                        value: function () {
                            var t,
                                e = this.w;
                            (this.timescaleLabels = e.globals.timelineLabels.slice()), e.globals.isBarHorizontal && "datetime" === e.config.xaxis.type && (this.timescaleLabels = e.globals.invertedTimelineLabels.slice());
                            var i = this.timescaleLabels.map(function (t) {
                                    return t.value;
                                }),
                                s = i.reduce(function (t, e) {
                                    return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e;
                                }, 0);
                            return 1.05 * (t = new f(this.ctx).getTextRects(s, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t;
                        },
                    },
                    {
                        key: "getxAxisLabelsCoords",
                        value: function () {
                            var t,
                                e = this.w,
                                i = e.globals.labels.slice();
                            if (e.globals.timelineLabels.length > 0) {
                                var s = this.getxAxisTimeScaleLabelsCoords();
                                t = { width: s.width, height: s.height };
                            } else {
                                var a = "left" !== e.config.legend.position || "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.lgRect.width,
                                    n = e.globals.xLabelFormatter,
                                    r = i.reduce(function (t, e) {
                                        return t.length > e.length ? t : e;
                                    }, 0);
                                e.globals.isBarHorizontal &&
                                    (r = e.globals.yAxisScale[0].result.reduce(function (t, e) {
                                        return t.length > e.length ? t : e;
                                    }, 0)),
                                    (r = new N(this.ctx).xLabelFormat(n, r));
                                var o = new f(this.ctx),
                                    l = o.getTextRects(r, e.config.xaxis.labels.style.fontSize);
                                (t = { width: l.width, height: l.height }).width * i.length > e.globals.svgWidth - a - this.yAxisWidth && 0 !== e.config.xaxis.labels.rotate
                                    ? e.globals.isBarHorizontal ||
                                      ((e.globals.rotateXLabels = !0),
                                      (l = o.getTextRects(r, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1)),
                                      (t.height = l.height / 1.66))
                                    : (e.globals.rotateXLabels = !1);
                            }
                            return e.config.xaxis.labels.show || (t = { width: 0, height: 0 }), { width: t.width, height: t.height };
                        },
                    },
                    {
                        key: "getyAxisLabelsCoords",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = [],
                                s = 10;
                            return (
                                e.config.yaxis.map(function (a, n) {
                                    if (a.show && a.labels.show && e.globals.yAxisScale[n].result.length) {
                                        var r = e.globals.yLabelFormatters[n],
                                            o = r(e.globals.yAxisScale[n].niceMax, -1);
                                        if (((void 0 !== o && 0 !== o.length) || (o = e.globals.yAxisScale[n].niceMax), e.globals.isBarHorizontal))
                                            (s = 0),
                                                (o = r(
                                                    (o = e.globals.labels.slice().reduce(function (t, e) {
                                                        return t.length > e.length ? t : e;
                                                    }, 0)),
                                                    -1
                                                ));
                                        var l = new f(t.ctx).getTextRects(o, a.labels.style.fontSize);
                                        i.push({ width: l.width + s, height: l.height });
                                    } else i.push({ width: 0, height: 0 });
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "getxAxisTitleCoords",
                        value: function () {
                            var t = this.w,
                                e = 0,
                                i = 0;
                            if (void 0 !== t.config.xaxis.title.text) {
                                var s = new f(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                                (e = s.width), (i = s.height);
                            }
                            return { width: e, height: i };
                        },
                    },
                    {
                        key: "getyAxisTitleCoords",
                        value: function () {
                            var t = this,
                                e = this.w,
                                i = [];
                            return (
                                e.config.yaxis.map(function (e, s) {
                                    if (e.show && void 0 !== e.title.text) {
                                        var a = new f(t.ctx).getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, "rotate(-90 0 0)", !1);
                                        i.push({ width: a.width, height: a.height });
                                    } else i.push({ width: 0, height: 0 });
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "getTitleSubtitleCoords",
                        value: function (t) {
                            var e = this.w,
                                i = 0,
                                s = 0,
                                a = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                                n = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
                            if (null !== n && !a) {
                                var r = n.getBoundingClientRect();
                                (i = r.width), (s = e.globals.axisCharts ? r.height + 5 : r.height);
                            }
                            return { width: i, height: s };
                        },
                    },
                    {
                        key: "getLegendsRect",
                        value: function () {
                            var t = this.w,
                                e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                                i = Object.assign({}, d.getBoundingClientRect(e));
                            return (
                                null !== e && !t.config.legend.floating && t.config.legend.show
                                    ? (this.lgRect = { x: i.x, y: i.y, height: i.height, width: 0 === i.height ? 0 : i.width })
                                    : (this.lgRect = { x: 0, y: 0, height: 0, width: 0 }),
                                this.lgRect
                            );
                        },
                    },
                ]),
                t
            );
        })(),
        j = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.timeScaleArray = []);
            }
            return (
                s(t, [
                    {
                        key: "calculateTimeScaleTicks",
                        value: function (t, e) {
                            var i = this,
                                s = this.w;
                            if (s.globals.allSeriesCollapsed) return (s.globals.labels = []), (s.globals.timelineLabels = []), [];
                            var a = new m(this.ctx),
                                r = (e - t) / 864e5;
                            this.determineInterval(r), (s.globals.disableZoomIn = !1), (s.globals.disableZoomOut = !1), r < 0.005 ? (s.globals.disableZoomIn = !0) : r > 5e4 && (s.globals.disableZoomOut = !0);
                            var o = a.getTimeUnitsfromTimestamp(t, e),
                                l = s.globals.gridWidth / r,
                                h = l / 24,
                                c = h / 60,
                                d = Math.floor(24 * r),
                                u = Math.floor(24 * r * 60),
                                g = Math.floor(r),
                                f = Math.floor(r / 30),
                                p = Math.floor(r / 365),
                                x = { minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear },
                                b = {
                                    firstVal: x,
                                    currentMinute: x.minMinute,
                                    currentHour: x.minHour,
                                    currentMonthDate: x.minDate,
                                    currentDate: x.minDate,
                                    currentMonth: x.minMonth,
                                    currentYear: x.minYear,
                                    daysWidthOnXAxis: l,
                                    hoursWidthOnXAxis: h,
                                    minutesWidthOnXAxis: c,
                                    numberOfMinutes: u,
                                    numberOfHours: d,
                                    numberOfDays: g,
                                    numberOfMonths: f,
                                    numberOfYears: p,
                                };
                            switch (this.tickInterval) {
                                case "years":
                                    this.generateYearScale(b);
                                    break;
                                case "months":
                                case "half_year":
                                    this.generateMonthScale(b);
                                    break;
                                case "months_days":
                                case "months_fortnight":
                                case "days":
                                case "week_days":
                                    this.generateDayScale(b);
                                    break;
                                case "hours":
                                    this.generateHourScale(b);
                                    break;
                                case "minutes":
                                    this.generateMinuteScale(b);
                            }
                            var v = this.timeScaleArray.map(function (t) {
                                var e = { position: t.position, unit: t.unit, year: t.year, day: t.day ? t.day : 1, hour: t.hour ? t.hour : 0, month: t.month + 1 };
                                return "month" === t.unit ? n({}, e, { value: t.value + 1 }) : "day" === t.unit || "hour" === t.unit ? n({}, e, { value: t.value }) : "minute" === t.unit ? n({}, e, { value: t.value, minute: t.value }) : t;
                            });
                            return v.filter(function (t) {
                                var e = 1,
                                    a = Math.ceil(s.globals.gridWidth / 120),
                                    n = t.value;
                                void 0 !== s.config.xaxis.tickAmount && (a = s.config.xaxis.tickAmount), v.length > a && (e = Math.floor(v.length / a));
                                var r = !1,
                                    o = !1;
                                switch (i.tickInterval) {
                                    case "half_year":
                                        (e = 7), "year" === t.unit && (r = !0);
                                        break;
                                    case "months":
                                        (e = 1), "year" === t.unit && (r = !0);
                                        break;
                                    case "months_fortnight":
                                        (e = 15), ("year" !== t.unit && "month" !== t.unit) || (r = !0), 30 === n && (o = !0);
                                        break;
                                    case "months_days":
                                        (e = 10), "month" === t.unit && (r = !0), 30 === n && (o = !0);
                                        break;
                                    case "week_days":
                                        (e = 8), "month" === t.unit && (r = !0);
                                        break;
                                    case "days":
                                        (e = 1), "month" === t.unit && (r = !0);
                                        break;
                                    case "hours":
                                        "day" === t.unit && (r = !0);
                                        break;
                                    case "minutes":
                                        n % 5 != 0 && (o = !0);
                                }
                                if ("minutes" === i.tickInterval || "hours" === i.tickInterval) {
                                    if (!o) return !0;
                                } else if ((n % e == 0 || r) && !o) return !0;
                            });
                        },
                    },
                    {
                        key: "recalcDimensionsBasedOnFormat",
                        value: function (t, e) {
                            var i = this.w,
                                s = this.formatDates(t),
                                a = this.removeOverlappingTS(s);
                            e ? (i.globals.invertedTimelineLabels = a.slice()) : (i.globals.timelineLabels = a.slice()), new _(this.ctx).plotCoords();
                        },
                    },
                    {
                        key: "determineInterval",
                        value: function (t) {
                            switch (!0) {
                                case t > 1825:
                                    this.tickInterval = "years";
                                    break;
                                case t > 800 && t <= 1825:
                                    this.tickInterval = "half_year";
                                    break;
                                case t > 180 && t <= 800:
                                    this.tickInterval = "months";
                                    break;
                                case t > 90 && t <= 180:
                                    this.tickInterval = "months_fortnight";
                                    break;
                                case t > 60 && t <= 90:
                                    this.tickInterval = "months_days";
                                    break;
                                case t > 30 && t <= 60:
                                    this.tickInterval = "week_days";
                                    break;
                                case t > 2 && t <= 30:
                                    this.tickInterval = "days";
                                    break;
                                case t > 0.1 && t <= 2:
                                    this.tickInterval = "hours";
                                    break;
                                case t < 0.1:
                                    this.tickInterval = "minutes";
                                    break;
                                default:
                                    this.tickInterval = "days";
                            }
                        },
                    },
                    {
                        key: "generateYearScale",
                        value: function (t) {
                            var e = t.firstVal,
                                i = t.currentMonth,
                                s = t.currentYear,
                                a = t.daysWidthOnXAxis,
                                n = t.numberOfYears,
                                r = e.minYear,
                                o = 0,
                                l = new m(this.ctx);
                            if (e.minDate > 1 && e.minMonth > 0) {
                                var h = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                                (o = (l.determineDaysOfYear(e.minYear) - h + 1) * a), (r = e.minYear + 1), this.timeScaleArray.push({ position: o, value: r, unit: "year", year: r, month: d.monthMod(i + 1) });
                            } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({ position: o, value: r, unit: "year", year: s, month: d.monthMod(i + 1) });
                            for (var c = r, u = o, g = 0; g < n; g++) c++, (u = l.determineDaysOfYear(c - 1) * a + u), this.timeScaleArray.push({ position: u, value: c, unit: "year", year: c, month: 1 });
                        },
                    },
                    {
                        key: "generateMonthScale",
                        value: function (t) {
                            var e = t.firstVal,
                                i = t.currentMonthDate,
                                s = t.currentMonth,
                                a = t.currentYear,
                                n = t.daysWidthOnXAxis,
                                r = t.numberOfMonths,
                                o = s,
                                l = 0,
                                h = new m(this.ctx),
                                c = "month",
                                u = 0;
                            if (e.minDate > 1) {
                                (l = (h.determineDaysOfMonths(s + 1, e.minYear) - i + 1) * n), (o = d.monthMod(s + 1));
                                var g = a + u,
                                    f = d.monthMod(o),
                                    p = o;
                                0 === o && ((c = "year"), (p = g), (f = 1), (g += u += 1)), this.timeScaleArray.push({ position: l, value: p, unit: c, year: g, month: f });
                            } else this.timeScaleArray.push({ position: l, value: o, unit: c, year: a, month: d.monthMod(s) });
                            for (var x = o + 1, b = l, v = 0, y = 1; v < r; v++, y++) {
                                0 === (x = d.monthMod(x)) ? ((c = "year"), (u += 1)) : (c = "month");
                                var w = a + Math.floor(x / 12) + u;
                                b = h.determineDaysOfMonths(x, w) * n + b;
                                var k = 0 === x ? w : x;
                                this.timeScaleArray.push({ position: b, value: k, unit: c, year: w, month: 0 === x ? 1 : x }), x++;
                            }
                        },
                    },
                    {
                        key: "generateDayScale",
                        value: function (t) {
                            var e = t.firstVal,
                                i = t.currentMonth,
                                s = t.currentYear,
                                a = t.hoursWidthOnXAxis,
                                n = t.numberOfDays,
                                r = new m(this.ctx),
                                o = "day",
                                l = (24 - e.minHour) * a,
                                h = e.minDate + 1,
                                c = h,
                                u = function (t, e, i) {
                                    return t > r.determineDaysOfMonths(e + 1, i) ? ((g = 1), (o = "month"), (c = e += 1), e) : e;
                                },
                                g = h,
                                f = u(g, i, s);
                            this.timeScaleArray.push({ position: l, value: c, unit: o, year: s, month: d.monthMod(f), day: g });
                            for (var p = l, x = 0; x < n; x++) {
                                (o = "day"), (f = u((g += 1), f, s + Math.floor(f / 12) + 0));
                                var b = s + Math.floor(f / 12) + 0;
                                p = 24 * a + p;
                                var v = 1 === g ? d.monthMod(f) : g;
                                this.timeScaleArray.push({ position: p, value: v, unit: o, year: b, month: d.monthMod(f), day: v });
                            }
                        },
                    },
                    {
                        key: "generateHourScale",
                        value: function (t) {
                            var e = t.firstVal,
                                i = t.currentDate,
                                s = t.currentMonth,
                                a = t.currentYear,
                                n = t.minutesWidthOnXAxis,
                                r = t.numberOfHours,
                                o = new m(this.ctx),
                                l = "hour",
                                h = function (t, e) {
                                    return t > o.determineDaysOfMonths(e + 1, a) && ((x = 1), (e += 1)), { month: e, date: x };
                                },
                                c = function (t, e) {
                                    return t > o.determineDaysOfMonths(e + 1, a) ? (e += 1) : e;
                                },
                                u = 60 - e.minMinute,
                                g = u * n,
                                f = e.minHour + 1,
                                p = f + 1;
                            60 === u && ((g = 0), (p = (f = e.minHour) + 1));
                            var x = i,
                                b = c(x, s);
                            this.timeScaleArray.push({ position: g, value: f, unit: l, day: x, hour: p, year: a, month: d.monthMod(b) });
                            for (var v = g, y = 0; y < r; y++) {
                                if (((l = "hour"), p >= 24)) (p = 0), (l = "day"), (b = h((x += 1), b).month), (b = c(x, b));
                                var w = a + Math.floor(b / 12) + 0;
                                v = 0 === p && 0 === y ? u * n : 60 * n + v;
                                var k = 0 === p ? x : p;
                                this.timeScaleArray.push({ position: v, value: k, unit: l, hour: p, day: x, year: w, month: d.monthMod(b) }), p++;
                            }
                        },
                    },
                    {
                        key: "generateMinuteScale",
                        value: function (t) {
                            var e = t.firstVal,
                                i = t.currentMinute,
                                s = t.currentHour,
                                a = t.currentDate,
                                n = t.currentMonth,
                                r = t.currentYear,
                                o = t.minutesWidthOnXAxis,
                                l = t.numberOfMinutes,
                                h = o - (i - e.minMinute),
                                c = e.minMinute + 1,
                                u = c + 1,
                                g = a,
                                f = n,
                                p = r,
                                x = s;
                            this.timeScaleArray.push({ position: h, value: c, unit: "minute", day: g, hour: x, minute: u, year: p, month: d.monthMod(f) });
                            for (var b = h, m = 0; m < l; m++) {
                                u >= 60 && ((u = 0), 24 === (x += 1) && (x = 0));
                                var v = r + Math.floor(f / 12) + 0;
                                b = o + b;
                                var y = u;
                                this.timeScaleArray.push({ position: b, value: y, unit: "minute", hour: x, minute: u, day: g, year: v, month: d.monthMod(f) }), u++;
                            }
                        },
                    },
                    {
                        key: "createRawDateString",
                        value: function (t, e) {
                            var i = t.year;
                            return (
                                (i += "-" + ("0" + t.month.toString()).slice(-2)),
                                "day" === t.unit ? (i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01") : (i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2)),
                                "hour" === t.unit ? (i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00") : (i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2)),
                                (i += "minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00.000Z" : ":00:00.000Z")
                            );
                        },
                    },
                    {
                        key: "formatDates",
                        value: function (t) {
                            var e = this,
                                i = this.w;
                            return t.map(function (t) {
                                var s = t.value.toString(),
                                    a = new m(e.ctx),
                                    n = e.createRawDateString(t, s),
                                    r = new Date(Date.parse(n));
                                if (void 0 === i.config.xaxis.labels.format) {
                                    var o = "dd MMM",
                                        l = i.config.xaxis.labels.datetimeFormatter;
                                    "year" === t.unit && (o = l.year),
                                        "month" === t.unit && (o = l.month),
                                        "day" === t.unit && (o = l.day),
                                        "hour" === t.unit && (o = l.hour),
                                        "minute" === t.unit && (o = l.minute),
                                        (s = a.formatDate(r, o, !0, !1));
                                } else s = a.formatDate(r, i.config.xaxis.labels.format);
                                return { dateString: n, position: t.position, value: s, unit: t.unit, year: t.year, month: t.month };
                            });
                        },
                    },
                    {
                        key: "removeOverlappingTS",
                        value: function (t) {
                            var e = this,
                                i = new f(this.ctx),
                                s = 0,
                                a = t.map(function (a, n) {
                                    if (n > 0 && e.w.config.xaxis.labels.hideOverlappingLabels) {
                                        var r = i.getTextRects(t[s].value).width,
                                            o = t[s].position;
                                        return a.position > o + r + 10 ? ((s = n), a) : null;
                                    }
                                    return a;
                                });
                            return (a = a.filter(function (t) {
                                return null !== t;
                            }));
                        },
                    },
                ]),
                t
            );
        })(),
        U = (function () {
            function t(i, s) {
                e(this, t), (this.ctx = s), (this.w = s.w), (this.el = i), (this.coreUtils = new y(this.ctx)), (this.twoDSeries = []), (this.threeDSeries = []), (this.twoDSeriesX = []);
            }
            return (
                s(t, [
                    {
                        key: "setupElements",
                        value: function () {
                            var t = this.w.globals,
                                e = this.w.config,
                                i = e.chart.type;
                            (t.axisCharts = ["line", "area", "bar", "rangeBar", "candlestick", "radar", "scatter", "bubble", "heatmap"].indexOf(i) > -1),
                                (t.xyCharts = ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble"].indexOf(i) > -1),
                                (t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal),
                                (t.chartClass = ".apexcharts" + t.cuid),
                                (t.dom.baseEl = this.el),
                                (t.dom.elWrap = document.createElement("div")),
                                f.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas " + t.chartClass.substring(1) }),
                                this.el.appendChild(t.dom.elWrap),
                                (t.dom.Paper = new window.SVG.Doc(t.dom.elWrap)),
                                t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")") }),
                                (t.dom.Paper.node.style.background = e.chart.background),
                                this.setSVGDimensions(),
                                (t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" })),
                                (t.dom.elDefs = t.dom.Paper.defs()),
                                (t.dom.elLegendWrap = document.createElement("div")),
                                t.dom.elLegendWrap.classList.add("apexcharts-legend"),
                                t.dom.elWrap.appendChild(t.dom.elLegendWrap),
                                t.dom.Paper.add(t.dom.elGraphical),
                                t.dom.elGraphical.add(t.dom.elDefs);
                        },
                    },
                    {
                        key: "plotChartType",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.config,
                                a = i.globals,
                                n = { series: [], i: [] },
                                r = { series: [], i: [] },
                                o = { series: [], i: [] },
                                l = { series: [], i: [] },
                                h = { series: [], i: [] };
                            a.series.map(function (e, s) {
                                void 0 !== t[s].type
                                    ? ("column" === t[s].type || "bar" === t[s].type
                                          ? ((i.config.plotOptions.bar.horizontal = !1), l.series.push(e), l.i.push(s))
                                          : "area" === t[s].type
                                          ? (r.series.push(e), r.i.push(s))
                                          : "line" === t[s].type
                                          ? (n.series.push(e), n.i.push(s))
                                          : "scatter" === t[s].type
                                          ? (o.series.push(e), o.i.push(s))
                                          : "bubble" === t[s].type ||
                                            ("candlestick" === t[s].type
                                                ? (h.series.push(e), h.i.push(s))
                                                : console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble")),
                                      (a.comboCharts = !0))
                                    : (n.series.push(e), n.i.push(s));
                            });
                            var c = new D(this.ctx, e),
                                d = new E(this.ctx, e),
                                u = new I(this.ctx),
                                g = new F(this.ctx),
                                f = new R(this.ctx, e),
                                p = new Y(this.ctx),
                                x = [];
                            if (a.comboCharts) {
                                if ((r.series.length > 0 && x.push(c.draw(r.series, "area", r.i)), l.series.length > 0))
                                    if (i.config.chart.stacked) {
                                        var b = new M(this.ctx, e);
                                        x.push(b.draw(l.series, l.i));
                                    } else {
                                        var m = new P(this.ctx, e);
                                        x.push(m.draw(l.series, l.i));
                                    }
                                if ((n.series.length > 0 && x.push(c.draw(n.series, "line", n.i)), h.series.length > 0 && x.push(d.draw(h.series, h.i)), o.series.length > 0)) {
                                    var v = new D(this.ctx, e, !0);
                                    x.push(v.draw(o.series, "scatter", o.i));
                                }
                            } else
                                switch (s.chart.type) {
                                    case "line":
                                        x = c.draw(a.series, "line");
                                        break;
                                    case "area":
                                        x = c.draw(a.series, "area");
                                        break;
                                    case "bar":
                                        if (s.chart.stacked) x = new M(this.ctx, e).draw(a.series);
                                        else x = new P(this.ctx, e).draw(a.series);
                                        break;
                                    case "candlestick":
                                        x = new E(this.ctx, e).draw(a.series);
                                        break;
                                    case "rangeBar":
                                        x = f.draw(a.series);
                                        break;
                                    case "heatmap":
                                        x = new X(this.ctx, e).draw(a.series);
                                        break;
                                    case "pie":
                                    case "donut":
                                        x = u.draw(a.series);
                                        break;
                                    case "radialBar":
                                        x = g.draw(a.series);
                                        break;
                                    case "radar":
                                        x = p.draw(a.series);
                                        break;
                                    default:
                                        x = c.draw(a.series);
                                }
                            return x;
                        },
                    },
                    {
                        key: "setSVGDimensions",
                        value: function () {
                            var t = this.w.globals,
                                e = this.w.config;
                            (t.svgWidth = e.chart.width), (t.svgHeight = e.chart.height);
                            var i = d.getDimensions(this.el),
                                s = e.chart.width
                                    .toString()
                                    .split(/[0-9]+/g)
                                    .pop();
                            if (
                                ("%" === s
                                    ? d.isNumber(i[0]) && (0 === i[0].width && (i = d.getDimensions(this.el.parentNode)), (t.svgWidth = (i[0] * parseInt(e.chart.width)) / 100))
                                    : ("px" !== s && "" !== s) || (t.svgWidth = parseInt(e.chart.width)),
                                "auto" !== t.svgHeight && "" !== t.svgHeight)
                            )
                                if (
                                    "%" ===
                                    e.chart.height
                                        .toString()
                                        .split(/[0-9]+/g)
                                        .pop()
                                ) {
                                    var a = d.getDimensions(this.el.parentNode);
                                    t.svgHeight = (a[1] * parseInt(e.chart.height)) / 100;
                                } else t.svgHeight = parseInt(e.chart.height);
                            else t.axisCharts ? (t.svgHeight = t.svgWidth / 1.61) : (t.svgHeight = t.svgWidth);
                            f.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight });
                            var n = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                            (t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + "px"), (t.dom.elWrap.style.width = t.svgWidth + "px"), (t.dom.elWrap.style.height = t.svgHeight + "px");
                        },
                    },
                    {
                        key: "shiftGraphPosition",
                        value: function () {
                            var t = this.w.globals,
                                e = t.translateY,
                                i = { transform: "translate(" + t.translateX + ", " + e + ")" };
                            f.setAttrs(t.dom.elGraphical.node, i);
                        },
                    },
                    {
                        key: "coreCalculations",
                        value: function () {
                            new V(this.ctx).init();
                        },
                    },
                    {
                        key: "resetGlobals",
                        value: function () {
                            var t = this,
                                e = this.w.globals;
                            (e.series = []),
                                (e.seriesCandleO = []),
                                (e.seriesCandleH = []),
                                (e.seriesCandleL = []),
                                (e.seriesCandleC = []),
                                (e.seriesRangeStart = []),
                                (e.seriesRangeEnd = []),
                                (e.seriesPercent = []),
                                (e.seriesX = []),
                                (e.seriesZ = []),
                                (e.seriesNames = []),
                                (e.seriesTotals = []),
                                (e.stackedSeriesTotals = []),
                                (e.labels = []),
                                (e.timelineLabels = []),
                                (e.noLabelsProvided = !1),
                                (e.timescaleTicks = []),
                                (e.resizeTimer = null),
                                (e.selectionResizeTimer = null),
                                (e.seriesXvalues = t.w.config.series.map(function (t) {
                                    return [];
                                })),
                                (e.seriesYvalues = t.w.config.series.map(function (t) {
                                    return [];
                                })),
                                (e.delayedElements = []),
                                (e.pointsArray = []),
                                (e.dataLabelsRects = []),
                                (e.isXNumeric = !1),
                                (e.isDataXYZ = !1),
                                (e.maxY = -Number.MAX_VALUE),
                                (e.minY = Number.MIN_VALUE),
                                (e.minYArr = []),
                                (e.maxYArr = []),
                                (e.maxX = -Number.MAX_VALUE),
                                (e.minX = Number.MAX_VALUE),
                                (e.initialmaxX = -Number.MAX_VALUE),
                                (e.initialminX = Number.MAX_VALUE),
                                (e.maxDate = 0),
                                (e.minDate = Number.MAX_VALUE),
                                (e.minZ = Number.MAX_VALUE),
                                (e.maxZ = -Number.MAX_VALUE),
                                (e.minXDiff = Number.MAX_VALUE),
                                (e.yAxisScale = []),
                                (e.xAxisScale = null),
                                (e.xAxisTicksPositions = []),
                                (e.yLabelsCoords = []),
                                (e.yTitleCoords = []),
                                (e.xRange = 0),
                                (e.yRange = []),
                                (e.zRange = 0),
                                (e.dataPoints = 0);
                        },
                    },
                    {
                        key: "isMultipleY",
                        value: function () {
                            if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return (this.w.config.chart.stacked = !1), (this.w.globals.isMultipleYAxis = !0), !0;
                        },
                    },
                    {
                        key: "excludeCollapsedSeriesInYAxis",
                        value: function () {
                            var t = this,
                                e = this.w;
                            e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map(function (e, i) {
                                if (t.w.globals.isMultipleYAxis) return e.index;
                            });
                        },
                    },
                    {
                        key: "isMultiFormat",
                        value: function () {
                            return this.isFormatXY() || this.isFormat2DArray();
                        },
                    },
                    {
                        key: "isFormatXY",
                        value: function () {
                            var t = this.w.config.series.slice(),
                                e = new G(this.ctx);
                            if (
                                ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
                                void 0 !== t[this.activeSeriesIndex].data &&
                                    t[this.activeSeriesIndex].data.length > 0 &&
                                    null !== t[this.activeSeriesIndex].data[0] &&
                                    void 0 !== t[this.activeSeriesIndex].data[0].x &&
                                    null !== t[this.activeSeriesIndex].data[0])
                            )
                                return !0;
                        },
                    },
                    {
                        key: "isFormat2DArray",
                        value: function () {
                            var t = this.w.config.series.slice(),
                                e = new G(this.ctx);
                            if (
                                ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
                                void 0 !== t[this.activeSeriesIndex].data &&
                                    t[this.activeSeriesIndex].data.length > 0 &&
                                    void 0 !== t[this.activeSeriesIndex].data[0] &&
                                    null !== t[this.activeSeriesIndex].data[0] &&
                                    t[this.activeSeriesIndex].data[0].constructor === Array)
                            )
                                return !0;
                        },
                    },
                    {
                        key: "handleFormat2DArray",
                        value: function (t, e) {
                            for (var i = this.w.config, s = this.w.globals, a = 0; a < t[e].data.length; a++)
                                if (
                                    (void 0 !== t[e].data[a][1] &&
                                        (Array.isArray(t[e].data[a][1]) && 4 === t[e].data[a][1].length ? this.twoDSeries.push(d.parseNumber(t[e].data[a][1][3])) : this.twoDSeries.push(d.parseNumber(t[e].data[a][1])),
                                        (s.dataFormatXNumeric = !0)),
                                    "datetime" === i.xaxis.type)
                                ) {
                                    var n = new Date(t[e].data[a][0]);
                                    (n = new Date(n).getTime()), this.twoDSeriesX.push(n);
                                } else this.twoDSeriesX.push(t[e].data[a][0]);
                            for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), (s.isDataXYZ = !0));
                        },
                    },
                    {
                        key: "handleFormatXY",
                        value: function (t, e) {
                            var i = this.w.config,
                                s = this.w.globals,
                                a = new m(this.ctx),
                                n = e;
                            s.collapsedSeriesIndices.indexOf(e) > -1 && (n = this.activeSeriesIndex);
                            for (var r = 0; r < t[e].data.length; r++)
                                void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) ? this.twoDSeries.push(d.parseNumber(t[e].data[r].y[t[e].data[r].y.length - 1])) : this.twoDSeries.push(d.parseNumber(t[e].data[r].y)));
                            for (var o = 0; o < t[n].data.length; o++) {
                                var l = "string" == typeof t[n].data[o].x,
                                    h = !!a.isValidDate(t[n].data[o].x.toString());
                                l || h
                                    ? l
                                        ? "datetime" !== i.xaxis.type || s.isRangeData
                                            ? ((this.fallbackToCategory = !0), this.twoDSeriesX.push(t[n].data[o].x))
                                            : this.twoDSeriesX.push(a.parseDate(t[n].data[o].x))
                                        : "datetime" === i.xaxis.type
                                        ? this.twoDSeriesX.push(a.parseDate(t[n].data[o].x.toString()))
                                        : ((s.dataFormatXNumeric = !0), (s.isXNumeric = !0), this.twoDSeriesX.push(parseFloat(t[n].data[o].x)))
                                    : ((s.isXNumeric = !0), (s.dataFormatXNumeric = !0), this.twoDSeriesX.push(t[n].data[o].x));
                            }
                            if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                                for (var c = 0; c < t[e].data.length; c++) this.threeDSeries.push(t[e].data[c].z);
                                s.isDataXYZ = !0;
                            }
                        },
                    },
                    {
                        key: "handleRangeData",
                        value: function (t, e) {
                            var i = this.w.globals,
                                s = {};
                            return (
                                this.isFormat2DArray() ? (s = this.handleRangeDataFormat("array", t, e)) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(s.start), i.seriesRangeEnd.push(s.end), s
                            );
                        },
                    },
                    {
                        key: "handleCandleStickData",
                        value: function (t, e) {
                            var i = this.w.globals,
                                s = {};
                            return (
                                this.isFormat2DArray() ? (s = this.handleCandleStickDataFormat("array", t, e)) : this.isFormatXY() && (s = this.handleCandleStickDataFormat("xy", t, e)),
                                i.seriesCandleO.push(s.o),
                                i.seriesCandleH.push(s.h),
                                i.seriesCandleL.push(s.l),
                                i.seriesCandleC.push(s.c),
                                s
                            );
                        },
                    },
                    {
                        key: "handleRangeDataFormat",
                        value: function (t, e, i) {
                            var s = [],
                                a = [],
                                n = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",
                                r = new G(this.ctx).getActiveConfigSeriesIndex();
                            if ("array" === t) {
                                if (2 !== e[r].data[0][1].length) throw new Error(n);
                                for (var o = 0; o < e[i].data.length; o++) s.push(e[i].data[o][1][0]), a.push(e[i].data[o][1][1]);
                            } else if ("xy" === t) {
                                if (2 !== e[r].data[0].y.length) throw new Error(n);
                                for (var l = 0; l < e[i].data.length; l++) s.push(e[i].data[l].y[0]), a.push(e[i].data[l].y[1]);
                            }
                            return { start: s, end: a };
                        },
                    },
                    {
                        key: "handleCandleStickDataFormat",
                        value: function (t, e, i) {
                            var s = [],
                                a = [],
                                n = [],
                                r = [],
                                o = "Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";
                            if ("array" === t) {
                                if (4 !== e[i].data[0][1].length) throw new Error(o);
                                for (var l = 0; l < e[i].data.length; l++) s.push(e[i].data[l][1][0]), a.push(e[i].data[l][1][1]), n.push(e[i].data[l][1][2]), r.push(e[i].data[l][1][3]);
                            } else if ("xy" === t) {
                                if (4 !== e[i].data[0].y.length) throw new Error(o);
                                for (var h = 0; h < e[i].data.length; h++) s.push(e[i].data[h].y[0]), a.push(e[i].data[h].y[1]), n.push(e[i].data[h].y[2]), r.push(e[i].data[h].y[3]);
                            }
                            return { o: s, h: a, l: n, c: r };
                        },
                    },
                    {
                        key: "parseDataAxisCharts",
                        value: function (t) {
                            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, i = this.w.config, s = this.w.globals, a = new m(e), n = 0; n < t.length; n++) {
                                if (((this.twoDSeries = []), (this.twoDSeriesX = []), (this.threeDSeries = []), void 0 === t[n].data))
                                    return void console.error("It is a possibility that you may have not included 'data' property in series.");
                                if ((("rangeBar" !== i.chart.type && "rangeArea" !== i.chart.type && "rangeBar" !== t[n].type && "rangeArea" !== t[n].type) || ((s.isRangeData = !0), this.handleRangeData(t, n)), this.isMultiFormat()))
                                    this.isFormat2DArray() ? this.handleFormat2DArray(t, n) : this.isFormatXY() && this.handleFormatXY(t, n),
                                        ("candlestick" !== i.chart.type && "candlestick" !== t[n].type) || this.handleCandleStickData(t, n),
                                        s.series.push(this.twoDSeries),
                                        s.labels.push(this.twoDSeriesX),
                                        s.seriesX.push(this.twoDSeriesX),
                                        this.fallbackToCategory || (s.isXNumeric = !0);
                                else {
                                    if ("datetime" === i.xaxis.type) {
                                        s.isXNumeric = !0;
                                        for (var r = i.labels.length > 0 ? i.labels.slice() : i.xaxis.categories.slice(), o = 0; o < r.length; o++)
                                            if ("string" == typeof r[o]) {
                                                if (!a.isValidDate(r[o])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                                                this.twoDSeriesX.push(a.parseDate(r[o]));
                                            }
                                        s.seriesX.push(this.twoDSeriesX);
                                    } else if ("numeric" === i.xaxis.type) {
                                        s.isXNumeric = !0;
                                        var l = i.labels.length > 0 ? i.labels.slice() : i.xaxis.categories.slice();
                                        l.length > 0 && ((this.twoDSeriesX = l), s.seriesX.push(this.twoDSeriesX));
                                    }
                                    s.labels.push(this.twoDSeriesX);
                                    var h = t[n].data.map(function (t) {
                                        return d.parseNumber(t);
                                    });
                                    s.series.push(h);
                                }
                                s.seriesZ.push(this.threeDSeries), void 0 !== t[n].name ? s.seriesNames.push(t[n].name) : s.seriesNames.push("series-" + parseInt(n + 1));
                            }
                            return this.w;
                        },
                    },
                    {
                        key: "parseDataNonAxisCharts",
                        value: function (t) {
                            var e = this.w.globals,
                                i = this.w.config;
                            (e.series = t.slice()), (e.seriesNames = i.labels.slice());
                            for (var s = 0; s < e.series.length; s++) void 0 === e.seriesNames[s] && e.seriesNames.push("series-" + (s + 1));
                            return this.w;
                        },
                    },
                    {
                        key: "handleExternalLabelsData",
                        value: function (t) {
                            var e = this.w.config,
                                i = this.w.globals;
                            if (e.xaxis.categories.length > 0) i.labels = e.xaxis.categories;
                            else if (e.labels.length > 0) i.labels = e.labels.slice();
                            else if (this.fallbackToCategory) i.labels = i.labels[0];
                            else {
                                var s = [];
                                if (i.axisCharts) {
                                    for (var a = 0; a < i.series[i.maxValsInArrayIndex].length; a++) s.push(a + 1);
                                    for (var n = 0; n < t.length; n++) i.seriesX.push(s);
                                    i.isXNumeric = !0;
                                }
                                if (0 === s.length) {
                                    s = [0, 10];
                                    for (var r = 0; r < t.length; r++) i.seriesX.push(s);
                                }
                                (i.labels = s), (i.noLabelsProvided = !0);
                            }
                        },
                    },
                    {
                        key: "parseData",
                        value: function (t) {
                            var e = this.w,
                                i = e.config,
                                s = e.globals;
                            if (
                                (this.excludeCollapsedSeriesInYAxis(),
                                (this.fallbackToCategory = !1),
                                this.resetGlobals(),
                                this.isMultipleY(),
                                s.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t),
                                this.coreUtils.getLargestSeries(),
                                "bar" === i.chart.type && i.chart.stacked)
                            ) {
                                var a = new G(this.ctx);
                                s.series = a.setNullSeriesToZeroValues(s.series);
                            }
                            this.coreUtils.getSeriesTotals(),
                                s.axisCharts && this.coreUtils.getStackedSeriesTotals(),
                                this.coreUtils.getPercentSeries(),
                                s.dataFormatXNumeric || (s.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length)) || this.handleExternalLabelsData(t);
                        },
                    },
                    {
                        key: "xySettings",
                        value: function () {
                            var t = null,
                                e = this.w;
                            if (e.globals.axisCharts) {
                                if ("back" === e.config.xaxis.crosshairs.position) new T(this.ctx).drawXCrosshairs();
                                if ("back" === e.config.yaxis[0].crosshairs.position) new T(this.ctx).drawYCrosshairs();
                                if (((t = this.coreUtils.getCalculatedRatios()), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter)) {
                                    var i,
                                        s = new j(this.ctx);
                                    isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal
                                        ? ((i = s.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX)), s.recalcDimensionsBasedOnFormat(i, !1))
                                        : e.globals.isBarHorizontal && ((i = s.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), s.recalcDimensionsBasedOnFormat(i, !0));
                                }
                            }
                            return t;
                        },
                    },
                    {
                        key: "drawAxis",
                        value: function (t, e) {
                            var i,
                                s,
                                a = this.w.globals,
                                n = this.w.config,
                                r = new H(this.ctx),
                                o = new W(this.ctx);
                            a.axisCharts &&
                                "radar" !== t &&
                                (a.isBarHorizontal
                                    ? ((s = o.drawYaxisInversed(0)), (i = r.drawXaxisInversed(0)), a.dom.elGraphical.add(i), a.dom.elGraphical.add(s))
                                    : ((i = r.drawXaxis()),
                                      a.dom.elGraphical.add(i),
                                      n.yaxis.map(function (t, e) {
                                          -1 === a.ignoreYAxisIndexes.indexOf(e) && ((s = o.drawYaxis(e)), a.dom.Paper.add(s));
                                      })));
                            n.yaxis.map(function (t, e) {
                                -1 === a.ignoreYAxisIndexes.indexOf(e) && o.yAxisTitleRotate(e, t.opposite);
                            });
                        },
                    },
                    {
                        key: "setupBrushHandler",
                        value: function () {
                            var t = this,
                                e = this.w;
                            e.config.chart.brush.enabled &&
                                "function" != typeof e.config.chart.events.selection &&
                                (e.config.chart.brush.targets || [e.config.chart.brush.target]).forEach(function (i) {
                                    var s = ApexCharts.getChartByID(i);
                                    s.w.globals.brushSource = t.ctx;
                                    var a = function () {
                                        t.ctx._updateOptions({ chart: { selection: { xaxis: { min: s.w.globals.minX, max: s.w.globals.maxX } } } }, !1, !1);
                                    };
                                    "function" != typeof s.w.config.chart.events.zoomed &&
                                        (s.w.config.chart.events.zoomed = function () {
                                            a();
                                        }),
                                        "function" != typeof s.w.config.chart.events.scrolled &&
                                            (s.w.config.chart.events.scrolled = function () {
                                                a();
                                            }),
                                        (e.config.chart.events.selection = function (t, i) {
                                            var a = d.clone(e.config.yaxis);
                                            e.config.chart.brush.autoScaleYaxis && (a = new B(s).autoScaleY(s, i));
                                            s._updateOptions({ xaxis: { min: i.xaxis.min, max: i.xaxis.max }, yaxis: a }, !1, !1, !1);
                                        });
                                });
                        },
                    },
                ]),
                t
            );
        })();
    var q = setTimeout;
    function Z() {}
    function $(t) {
        if (!(this instanceof $)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), it(t, this);
    }
    function J(t, e) {
        for (; 3 === t._state; ) t = t._value;
        0 !== t._state
            ? ((t._handled = !0),
              $._immediateFn(function () {
                  var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                  if (null !== i) {
                      var s;
                      try {
                          s = i(t._value);
                      } catch (t) {
                          return void K(e.promise, t);
                      }
                      Q(e.promise, s);
                  } else (1 === t._state ? Q : K)(e.promise, t._value);
              }))
            : t._deferreds.push(e);
    }
    function Q(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var i = e.then;
                if (e instanceof $) return (t._state = 3), (t._value = e), void tt(t);
                if ("function" == typeof i)
                    return void it(
                        ((s = i),
                        (a = e),
                        function () {
                            s.apply(a, arguments);
                        }),
                        t
                    );
            }
            (t._state = 1), (t._value = e), tt(t);
        } catch (e) {
            K(t, e);
        }
        var s, a;
    }
    function K(t, e) {
        (t._state = 2), (t._value = e), tt(t);
    }
    function tt(t) {
        2 === t._state &&
            0 === t._deferreds.length &&
            $._immediateFn(function () {
                t._handled || $._unhandledRejectionFn(t._value);
            });
        for (var e = 0, i = t._deferreds.length; e < i; e++) J(t, t._deferreds[e]);
        t._deferreds = null;
    }
    function et(t, e, i) {
        (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = i);
    }
    function it(t, e) {
        var i = !1;
        try {
            t(
                function (t) {
                    i || ((i = !0), Q(e, t));
                },
                function (t) {
                    i || ((i = !0), K(e, t));
                }
            );
        } catch (t) {
            if (i) return;
            (i = !0), K(e, t);
        }
    }
    ($.prototype.catch = function (t) {
        return this.then(null, t);
    }),
        ($.prototype.then = function (t, e) {
            var i = new this.constructor(Z);
            return J(this, new et(t, e, i)), i;
        }),
        ($.prototype.finally = function (t) {
            var e = this.constructor;
            return this.then(
                function (i) {
                    return e.resolve(t()).then(function () {
                        return i;
                    });
                },
                function (i) {
                    return e.resolve(t()).then(function () {
                        return e.reject(i);
                    });
                }
            );
        }),
        ($.all = function (t) {
            return new $(function (e, i) {
                if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                var s = Array.prototype.slice.call(t);
                if (0 === s.length) return e([]);
                var a = s.length;
                function n(t, r) {
                    try {
                        if (r && ("object" == typeof r || "function" == typeof r)) {
                            var o = r.then;
                            if ("function" == typeof o)
                                return void o.call(
                                    r,
                                    function (e) {
                                        n(t, e);
                                    },
                                    i
                                );
                        }
                        (s[t] = r), 0 == --a && e(s);
                    } catch (t) {
                        i(t);
                    }
                }
                for (var r = 0; r < s.length; r++) n(r, s[r]);
            });
        }),
        ($.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === $
                ? t
                : new $(function (e) {
                      e(t);
                  });
        }),
        ($.reject = function (t) {
            return new $(function (e, i) {
                i(t);
            });
        }),
        ($.race = function (t) {
            return new $(function (e, i) {
                for (var s = 0, a = t.length; s < a; s++) t[s].then(e, i);
            });
        }),
        ($._immediateFn =
            ("function" == typeof setImmediate &&
                function (t) {
                    setImmediate(t);
                }) ||
            function (t) {
                q(t, 0);
            }),
        ($._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        });
    var st,
        at,
        nt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "getSvgString",
                        value: function () {
                            return this.w.globals.dom.Paper.svg();
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            var t = this.w,
                                e = t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),
                                i = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");
                            e && e.setAttribute("x", -500), i && (i.setAttribute("y1", -100), i.setAttribute("y2", -100));
                        },
                    },
                    {
                        key: "svgUrl",
                        value: function () {
                            this.cleanup();
                            var t = this.getSvgString(),
                                e = new Blob([t], { type: "image/svg+xml;charset=utf-8" });
                            return URL.createObjectURL(e);
                        },
                    },
                    {
                        key: "dataURI",
                        value: function () {
                            var t = this;
                            return new $(function (e) {
                                var i = t.w;
                                t.cleanup();
                                var s = document.createElement("canvas");
                                (s.width = i.globals.svgWidth), (s.height = i.globals.svgHeight);
                                var a = "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background,
                                    n = s.getContext("2d");
                                (n.fillStyle = a), n.fillRect(0, 0, s.width, s.height);
                                var r = window.URL || window.webkitURL || window,
                                    o = new Image();
                                o.crossOrigin = "anonymous";
                                var l = t.getSvgString(),
                                    h = "data:image/svg+xml," + encodeURIComponent(l);
                                (o.onload = function () {
                                    n.drawImage(o, 0, 0), r.revokeObjectURL(h);
                                    var t = s.toDataURL("image/png");
                                    e(t);
                                }),
                                    (o.src = h);
                            });
                        },
                    },
                    {
                        key: "exportToSVG",
                        value: function () {
                            this.triggerDownload(this.svgUrl(), ".svg");
                        },
                    },
                    {
                        key: "exportToPng",
                        value: function () {
                            var t = this;
                            this.dataURI().then(function (e) {
                                t.triggerDownload(e, ".png");
                            });
                        },
                    },
                    {
                        key: "triggerDownload",
                        value: function (t, e) {
                            var i = document.createElement("a");
                            (i.href = t), (i.download = this.w.globals.chartID + e), document.body.appendChild(i), i.click(), document.body.removeChild(i);
                        },
                    },
                ]),
                t
            );
        })(),
        rt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
                var s = this.w;
                (this.anim = new g(this.ctx)),
                    (this.xaxisLabels = s.globals.labels.slice()),
                    (this.animX = s.config.grid.xaxis.lines.animate && s.config.chart.animations.enabled),
                    (this.animY = s.config.grid.yaxis.lines.animate && s.config.chart.animations.enabled),
                    s.globals.timelineLabels.length > 0 && (this.xaxisLabels = s.globals.timelineLabels.slice());
            }
            return (
                s(t, [
                    {
                        key: "drawGridArea",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                e = this.w,
                                i = new f(this.ctx);
                            null === t && (t = i.group({ class: "apexcharts-grid" }));
                            var s = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                                a = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
                            return t.add(a), t.add(s), t;
                        },
                    },
                    {
                        key: "drawGrid",
                        value: function () {
                            var t = this.w,
                                e = new H(this.ctx),
                                i = new W(this.ctx),
                                s = this.w.globals,
                                a = null;
                            if (s.axisCharts) {
                                if (t.config.grid.show) (a = this.renderGrid()), s.dom.elGraphical.add(a.el), this.drawGridArea(a.el);
                                else {
                                    var n = this.drawGridArea();
                                    s.dom.elGraphical.add(n);
                                }
                                null !== a && e.xAxisLabelCorrections(a.xAxisTickWidth), i.setYAxisTextAlignments();
                            }
                        },
                    },
                    {
                        key: "createGridMask",
                        value: function () {
                            var t = this.w,
                                e = t.globals,
                                i = new f(this.ctx),
                                s = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                            if (Array.isArray(t.config.stroke.width)) {
                                var a = 0;
                                t.config.stroke.width.forEach(function (t) {
                                    a = Math.max(a, t);
                                }),
                                    (s = a);
                            }
                            (e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath")),
                                e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)),
                                (e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath")),
                                e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)),
                                (e.dom.elGridRect = i.drawRect(-s / 2, -s / 2, e.gridWidth + s, e.gridHeight + s, 0, "#fff")),
                                new y(this).getLargestMarkerSize();
                            var n = t.globals.markers.largestSize + 1;
                            (e.dom.elGridRectMarker = i.drawRect(-n, -n, e.gridWidth + 2 * n, e.gridHeight + 2 * n, 0, "#fff")),
                                e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),
                                e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                            var r = e.dom.baseEl.querySelector("defs");
                            r.appendChild(e.dom.elGridRectMask), r.appendChild(e.dom.elGridRectMarkerMask);
                        },
                    },
                    {
                        key: "renderGrid",
                        value: function () {
                            var t = this.w,
                                e = new f(this.ctx),
                                i = t.config.grid.strokeDashArray,
                                s = e.group({ class: "apexcharts-grid" }),
                                a = e.group({ class: "apexcharts-gridlines-horizontal" }),
                                n = e.group({ class: "apexcharts-gridlines-vertical" });
                            s.add(a), s.add(n);
                            for (var r, o = 8, l = 0; l < t.globals.series.length && (void 0 !== t.globals.yAxisScale[l] && (o = t.globals.yAxisScale[l].result.length - 1), !(o > 2)); l++);
                            if (t.globals.isBarHorizontal) {
                                if (((r = o), t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show))
                                    for (var h, c = t.globals.padHorizontal, d = t.globals.gridHeight, u = 0; u < r + 1 && ((h = c = c + t.globals.gridWidth / r + 0.3), u !== r - 1); u++) {
                                        if (t.config.grid.xaxis.lines.show) {
                                            var g = e.drawLine(c, 0, h, d, t.config.grid.borderColor, i);
                                            g.node.classList.add("apexcharts-gridline"), n.add(g), this.animX && this.animateLine(g, { x1: 0, x2: 0 }, { x1: c, x2: h });
                                        }
                                        new H(this.ctx).drawXaxisTicks(c, s);
                                    }
                                if (t.config.grid.yaxis.lines.show)
                                    for (var p = 0, x = 0, b = t.globals.gridWidth, m = 0; m < t.globals.dataPoints + 1; m++) {
                                        var v = e.drawLine(0, p, b, x, t.config.grid.borderColor, i);
                                        a.add(v), v.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(v, { y1: p + 20, y2: x + 20 }, { y1: p, y2: x }), (x = p += t.globals.gridHeight / t.globals.dataPoints);
                                    }
                            } else {
                                if (((r = this.xaxisLabels.length), t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show)) {
                                    var y,
                                        w = t.globals.padHorizontal,
                                        k = t.globals.gridHeight;
                                    if (t.globals.timelineLabels.length > 0)
                                        for (var A = 0; A < r; A++) {
                                            if (((w = this.xaxisLabels[A].position), (y = this.xaxisLabels[A].position), t.config.grid.xaxis.lines.show && w > 0 && w < t.globals.gridWidth)) {
                                                var S = e.drawLine(w, 0, y, k, t.config.grid.borderColor, i);
                                                S.node.classList.add("apexcharts-gridline"), n.add(S), this.animX && this.animateLine(S, { x1: 0, x2: 0 }, { x1: w, x2: y });
                                            }
                                            var C = new H(this.ctx);
                                            (A === r - 1 && t.globals.skipLastTimelinelabel) || C.drawXaxisTicks(w, s);
                                        }
                                    else
                                        for (var L = r, z = 0; z < L; z++) {
                                            var P = L;
                                            if ((t.globals.isXNumeric && "bar" !== t.config.chart.type && (P -= 1), (y = w += t.globals.gridWidth / P), z === P - 1)) break;
                                            if (t.config.grid.xaxis.lines.show) {
                                                var M = e.drawLine(w, 0, y, k, t.config.grid.borderColor, i);
                                                M.node.classList.add("apexcharts-gridline"), n.add(M), this.animX && this.animateLine(M, { x1: 0, x2: 0 }, { x1: w, x2: y });
                                            }
                                            new H(this.ctx).drawXaxisTicks(w, s);
                                        }
                                }
                                if (t.config.grid.yaxis.lines.show)
                                    for (var E = 0, T = 0, X = t.globals.gridWidth, I = 0; I < o + 1; I++) {
                                        var Y = e.drawLine(0, E, X, T, t.config.grid.borderColor, i);
                                        a.add(Y), Y.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(Y, { y1: E + 20, y2: T + 20 }, { y1: E, y2: T }), (T = E += t.globals.gridHeight / o);
                                    }
                            }
                            return this.drawGridBands(s, r, o), { el: s, xAxisTickWidth: t.globals.gridWidth / r };
                        },
                    },
                    {
                        key: "drawGridBands",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = new f(this.ctx);
                            if (void 0 !== s.config.grid.row.colors && s.config.grid.row.colors.length > 0)
                                for (var n = 0, r = s.globals.gridHeight / i, o = s.globals.gridWidth, l = 0, h = 0; l < i; l++, h++) {
                                    h >= s.config.grid.row.colors.length && (h = 0);
                                    var c = s.config.grid.row.colors[h],
                                        d = a.drawRect(0, n, o, r, 0, c, s.config.grid.row.opacity);
                                    t.add(d), d.node.classList.add("apexcharts-gridRow"), (n += s.globals.gridHeight / i);
                                }
                            if (void 0 !== s.config.grid.column.colors && s.config.grid.column.colors.length > 0)
                                for (var u = s.globals.padHorizontal, g = s.globals.padHorizontal + s.globals.gridWidth / e, p = s.globals.gridHeight, x = 0, b = 0; x < e; x++, b++) {
                                    b >= s.config.grid.column.colors.length && (b = 0);
                                    var m = s.config.grid.column.colors[b],
                                        v = a.drawRect(u, 0, g, p, 0, m, s.config.grid.column.opacity);
                                    v.node.classList.add("apexcharts-gridColumn"), t.add(v), (u += s.globals.gridWidth / e);
                                }
                        },
                    },
                    {
                        key: "animateLine",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = s.config.chart.animations;
                            if (a && !s.globals.resized && !s.globals.dataChanged) {
                                var n = a.speed;
                                this.anim.animateLine(t, e, i, n);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        ot = (function () {
            function t(i, s) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.onLegendClick = this.onLegendClick.bind(this)), (this.onLegendHovered = this.onLegendHovered.bind(this));
            }
            return (
                s(t, [
                    {
                        key: "init",
                        value: function () {
                            var t = this.w,
                                e = t.globals,
                                i = t.config;
                            if (((i.legend.showForSingleSeries && 1 === e.series.length) || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
                                for (; e.dom.elLegendWrap.firstChild; ) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                                this.drawLegends(),
                                    d.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()) : this.appendToForeignObject(),
                                    "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : ("right" !== i.legend.position && "left" !== i.legend.position) || this.legendAlignVertical();
                            }
                        },
                    },
                    {
                        key: "appendToForeignObject",
                        value: function () {
                            var t = this.w.globals,
                                e = document.createElementNS(t.SVGNS, "foreignObject");
                            e.setAttribute("x", 0),
                                e.setAttribute("y", 0),
                                e.setAttribute("width", t.svgWidth),
                                e.setAttribute("height", t.svgHeight),
                                t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
                                e.appendChild(t.dom.elLegendWrap),
                                e.appendChild(this.getLegendStyles()),
                                t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node);
                        },
                    },
                    {
                        key: "drawLegends",
                        value: function () {
                            var t = this.w,
                                e = t.config.legend.fontFamily,
                                i = t.globals.seriesNames,
                                s = t.globals.colors.slice();
                            if ("heatmap" === t.config.chart.type) {
                                var a = t.config.plotOptions.heatmap.colorScale.ranges;
                                (i = a.map(function (t) {
                                    return t.name ? t.name : t.from + " - " + t.to;
                                })),
                                    (s = a.map(function (t) {
                                        return t.color;
                                    }));
                            }
                            for (var n = t.globals.legendFormatter, r = 0; r <= i.length - 1; r++) {
                                var o = n(i[r], { seriesIndex: r, w: t }),
                                    l = !1,
                                    h = !1;
                                if (t.globals.collapsedSeries.length > 0) for (var c = 0; c < t.globals.collapsedSeries.length; c++) t.globals.collapsedSeries[c].index === r && (l = !0);
                                if (t.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var d = 0; d < t.globals.ancillaryCollapsedSeriesIndices.length; d++) t.globals.ancillaryCollapsedSeriesIndices[d] === r && (h = !0);
                                var u = document.createElement("span");
                                u.classList.add("apexcharts-legend-marker");
                                var g = t.config.legend.markers.offsetX,
                                    p = t.config.legend.markers.offsetY,
                                    x = t.config.legend.markers.height,
                                    b = t.config.legend.markers.width,
                                    m = t.config.legend.markers.strokeWidth,
                                    v = t.config.legend.markers.strokeColor,
                                    w = t.config.legend.markers.radius,
                                    k = u.style;
                                (k.background = s[r]),
                                    (k.color = s[r]),
                                    (k.height = Array.isArray(x) ? parseFloat(x[r]) + "px" : parseFloat(x) + "px"),
                                    (k.width = Array.isArray(b) ? parseFloat(b[r]) + "px" : parseFloat(b) + "px"),
                                    (k.left = Array.isArray(g) ? g[r] : g),
                                    (k.top = Array.isArray(p) ? p[r] : p),
                                    (k.borderWidth = Array.isArray(m) ? m[r] : m),
                                    (k.borderColor = Array.isArray(v) ? v[r] : v),
                                    (k.borderRadius = Array.isArray(w) ? parseFloat(w[r]) + "px" : parseFloat(w) + "px"),
                                    t.config.legend.markers.customHTML && (Array.isArray(t.config.legend.markers.customHTML) ? (u.innerHTML = t.config.legend.markers.customHTML[r]()) : (u.innerHTML = t.config.legend.markers.customHTML())),
                                    f.setAttrs(u, { rel: r + 1, "data:collapsed": l || h }),
                                    (l || h) && u.classList.add("inactive-legend");
                                var A = document.createElement("div"),
                                    S = document.createElement("span");
                                S.classList.add("apexcharts-legend-text"), (S.innerHTML = o);
                                var C = t.config.legend.labels.useSeriesColors ? t.globals.colors[r] : t.config.legend.labels.colors;
                                C || (C = t.config.chart.foreColor),
                                    (S.style.color = C),
                                    (S.style.fontSize = parseFloat(t.config.legend.fontSize) + "px"),
                                    (S.style.fontFamily = e || t.config.chart.fontFamily),
                                    f.setAttrs(S, { rel: r + 1, "data:collapsed": l || h }),
                                    A.appendChild(u),
                                    A.appendChild(S);
                                var L = new y(this.ctx);
                                if (!t.config.legend.showForZeroSeries)
                                    0 === L.getSeriesTotalByIndex(r) &&
                                        L.seriesHaveSameValues(r) &&
                                        !L.isSeriesNull(r) &&
                                        -1 === t.globals.collapsedSeriesIndices.indexOf(r) &&
                                        -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) &&
                                        A.classList.add("apexcharts-hidden-zero-series");
                                t.config.legend.showForNullSeries ||
                                    (L.isSeriesNull(r) && -1 === t.globals.collapsedSeriesIndices.indexOf(r) && -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) && A.classList.add("apexcharts-hidden-null-series")),
                                    t.globals.dom.elLegendWrap.appendChild(A),
                                    t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign),
                                    t.globals.dom.elLegendWrap.classList.add("position-" + t.config.legend.position),
                                    A.classList.add("apexcharts-legend-series"),
                                    (A.style.margin = "".concat(t.config.legend.itemMargin.horizontal, "px ").concat(t.config.legend.itemMargin.vertical, "px")),
                                    (t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : ""),
                                    (t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : ""),
                                    f.setAttrs(A, { rel: r + 1, "data:collapsed": l || h }),
                                    (l || h) && A.classList.add("inactive-legend"),
                                    t.config.legend.onItemClick.toggleDataSeries || A.classList.add("no-click");
                            }
                            "heatmap" !== t.config.chart.type && t.config.legend.onItemClick.toggleDataSeries && t.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0),
                                t.config.legend.onItemHover.highlightDataSeries && (t.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0));
                        },
                    },
                    {
                        key: "getLegendBBox",
                        value: function () {
                            var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                                e = t.width;
                            return { clwh: t.height, clww: e };
                        },
                    },
                    {
                        key: "setLegendWrapXY",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                                a = s.getBoundingClientRect(),
                                n = 0,
                                r = 0;
                            if ("bottom" === i.config.legend.position) r += i.globals.svgHeight - a.height / 2;
                            else if ("top" === i.config.legend.position) {
                                var o = new _(this.ctx),
                                    l = o.getTitleSubtitleCoords("title").height,
                                    h = o.getTitleSubtitleCoords("subtitle").height;
                                r = r + (l > 0 ? l - 10 : 0) + (h > 0 ? h - 10 : 0);
                            }
                            (s.style.position = "absolute"),
                                (n = n + t + i.config.legend.offsetX),
                                (r = r + e + i.config.legend.offsetY),
                                (s.style.left = n + "px"),
                                (s.style.top = r + "px"),
                                "bottom" === i.config.legend.position
                                    ? ((s.style.top = "auto"), (s.style.bottom = 10 + i.config.legend.offsetY + "px"))
                                    : "right" === i.config.legend.position && ((s.style.left = "auto"), (s.style.right = 25 + i.config.legend.offsetX + "px")),
                                s.style.width && (s.style.width = parseInt(i.config.legend.width) + "px"),
                                s.style.height && (s.style.height = parseInt(i.config.legend.height) + "px");
                        },
                    },
                    {
                        key: "legendAlignHorizontal",
                        value: function () {
                            var t = this.w;
                            t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                            var e = this.getLegendBBox(),
                                i = new _(this.ctx),
                                s = i.getTitleSubtitleCoords("title"),
                                a = i.getTitleSubtitleCoords("subtitle"),
                                n = 0;
                            "bottom" === t.config.legend.position ? (n = -e.clwh / 1.8) : "top" === t.config.legend.position && (n = s.height + a.height + t.config.title.margin + t.config.subtitle.margin - 15), this.setLegendWrapXY(20, n);
                        },
                    },
                    {
                        key: "legendAlignVertical",
                        value: function () {
                            var t = this.w,
                                e = this.getLegendBBox(),
                                i = 0;
                            "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20);
                        },
                    },
                    {
                        key: "onLegendHovered",
                        value: function (t) {
                            var e = this.w,
                                i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                            if ("heatmap" !== e.config.chart.type) !t.target.classList.contains("inactive-legend") && i && new G(this.ctx).toggleSeriesOnHover(t, t.target);
                            else if (i) {
                                var s = parseInt(t.target.getAttribute("rel")) - 1;
                                this.ctx.fireEvent("legendHover", [this.ctx, s, this.w]), new G(this.ctx).highlightRangeInSeries(t, t.target);
                            }
                        },
                    },
                    {
                        key: "onLegendClick",
                        value: function (t) {
                            if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker")) {
                                var e = parseInt(t.target.getAttribute("rel")) - 1,
                                    i = "true" === t.target.getAttribute("data:collapsed"),
                                    s = this.w.config.chart.events.legendClick;
                                "function" == typeof s && s(this.ctx, e, this.w), this.ctx.fireEvent("legendClick", [this.ctx, e, this.w]);
                                var a = this.w.config.legend.markers.onClick;
                                "function" == typeof a && t.target.classList.contains("apexcharts-legend-marker") && (a(this.ctx, e, this.w), this.ctx.fireEvent("legendMarkerClick", [this.ctx, e, this.w])), this.toggleDataSeries(e, i);
                            }
                        },
                    },
                    {
                        key: "getLegendStyles",
                        value: function () {
                            var t = document.createElement("style");
                            t.setAttribute("type", "text/css");
                            var e = document.createTextNode(
                                "\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }"
                            );
                            return t.appendChild(e), t;
                        },
                    },
                    {
                        key: "resetToggleDataSeries",
                        value: function () {
                            var t = this.w,
                                e = null,
                                i = [];
                            if (
                                (t.globals.axisCharts
                                    ? ((e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex]")),
                                      (e = d.listToArray(e)).forEach(function (t) {
                                          i.push(parseInt(t.getAttribute("data:realIndex")));
                                      }))
                                    : ((e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[rel]")),
                                      (e = d.listToArray(e)).forEach(function (t) {
                                          i.push(parseInt(t.getAttribute("rel")) - 1);
                                      })),
                                i.sort(),
                                t.globals.collapsedSeries.length > 0)
                            ) {
                                for (var s = t.globals.risingSeries.slice(), a = t.config.series.slice(), n = 0; n < t.globals.collapsedSeries.length; n++) {
                                    var r = i.indexOf(t.globals.collapsedSeries[n].index);
                                    -1 !== r && (t.globals.axisCharts ? (a[r].data = t.globals.collapsedSeries.slice()[n].data.slice()) : (a[r] = t.globals.collapsedSeries.slice()[n].data), s.push(r));
                                }
                                (t.globals.collapsedSeries = []),
                                    (t.globals.ancillaryCollapsedSeries = []),
                                    (t.globals.collapsedSeriesIndices = []),
                                    (t.globals.ancillaryCollapsedSeriesIndices = []),
                                    (t.globals.risingSeries = s),
                                    (t.config.series = a),
                                    this.ctx._updateSeries(t.config.series, t.config.chart.animations.dynamicAnimation.enabled);
                            }
                        },
                    },
                    {
                        key: "toggleDataSeries",
                        value: function (t, e) {
                            var i = this.w;
                            if (i.globals.axisCharts || "radialBar" === i.config.chart.type) {
                                i.globals.resized = !0;
                                var s = null,
                                    a = null;
                                if (
                                    ((i.globals.risingSeries = []),
                                    i.globals.axisCharts
                                        ? ((s = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']"))), (a = parseInt(s.getAttribute("data:realIndex"))))
                                        : ((s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']"))), (a = parseInt(s.getAttribute("rel")) - 1)),
                                    e)
                                )
                                    this.riseCollapsedSeries(i.globals.collapsedSeries, i.globals.collapsedSeriesIndices, a), this.riseCollapsedSeries(i.globals.ancillaryCollapsedSeries, i.globals.ancillaryCollapsedSeriesIndices, a);
                                else {
                                    if (i.globals.axisCharts) {
                                        var n = !1;
                                        if (
                                            (i.config.yaxis[a] &&
                                                i.config.yaxis[a].show &&
                                                i.config.yaxis[a].showAlways &&
                                                ((n = !0),
                                                i.globals.ancillaryCollapsedSeriesIndices.indexOf(a) < 0 &&
                                                    (i.globals.ancillaryCollapsedSeries.push({ index: a, data: i.config.series[a].data.slice(), type: s.parentNode.className.baseVal.split("-")[1] }),
                                                    i.globals.ancillaryCollapsedSeriesIndices.push(a))),
                                            !n)
                                        ) {
                                            i.globals.collapsedSeries.push({ index: a, data: i.config.series[a].data.slice(), type: s.parentNode.className.baseVal.split("-")[1] }), i.globals.collapsedSeriesIndices.push(a);
                                            var r = i.globals.risingSeries.indexOf(a);
                                            i.globals.risingSeries.splice(r, 1);
                                        }
                                        i.config.series[a].data = [];
                                    } else i.globals.collapsedSeries.push({ index: a, data: i.config.series[a] }), i.globals.collapsedSeriesIndices.push(a), (i.config.series[a] = 0);
                                    for (var o = s.childNodes, l = 0; l < o.length; l++)
                                        o[l].classList.contains("apexcharts-series-markers-wrap") && (o[l].classList.contains("apexcharts-hide") ? o[l].classList.remove("apexcharts-hide") : o[l].classList.add("apexcharts-hide"));
                                    (i.globals.allSeriesCollapsed = i.globals.collapsedSeries.length === i.globals.series.length), this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled);
                                }
                            } else {
                                var h = i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                                    c = i.config.chart.type;
                                if ("pie" === c || "donut" === c) {
                                    var d = i.config.plotOptions.pie.donut.labels,
                                        u = new f(this.ctx),
                                        g = new I(this.ctx);
                                    u.pathMouseDown(h.members[0], null), g.printDataLabelsInner(h.members[0].node, d);
                                }
                                h.fire("click");
                            }
                        },
                    },
                    {
                        key: "riseCollapsedSeries",
                        value: function (t, e, i) {
                            var s = this.w;
                            if (t.length > 0)
                                for (var a = 0; a < t.length; a++)
                                    t[a].index === i &&
                                        (s.globals.axisCharts
                                            ? ((s.config.series[i].data = t[a].data.slice()), t.splice(a, 1), e.splice(a, 1), s.globals.risingSeries.push(i))
                                            : ((s.config.series[i] = t[a].data), t.splice(a, 1), e.splice(a, 1), s.globals.risingSeries.push(i)),
                                        this.ctx._updateSeries(s.config.series, s.config.chart.animations.dynamicAnimation.enabled));
                        },
                    },
                ]),
                t
            );
        })(),
        lt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "checkResponsiveConfig",
                        value: function (t) {
                            var e = this,
                                i = this.w,
                                s = i.config;
                            if (0 !== s.responsive.length) {
                                var a = s.responsive.slice();
                                a.sort(function (t, e) {
                                    return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0;
                                }).reverse();
                                var n = new w({}),
                                    r = function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            s = a[0].breakpoint,
                                            r = window.innerWidth > 0 ? window.innerWidth : screen.width;
                                        if (r > s) {
                                            var o = y.extendArrayProps(n, i.globals.initialConfig);
                                            (t = d.extend(o, t)), (t = d.extend(i.config, t)), e.overrideResponsiveOptions(t);
                                        } else for (var l = 0; l < a.length; l++) r < a[l].breakpoint && ((t = y.extendArrayProps(n, a[l].options)), (t = d.extend(i.config, t)), e.overrideResponsiveOptions(t));
                                    };
                                if (t) {
                                    var o = y.extendArrayProps(n, t);
                                    (o = d.extend(i.config, o)), r((o = d.extend(o, t)));
                                } else r({});
                            }
                        },
                    },
                    {
                        key: "overrideResponsiveOptions",
                        value: function (t) {
                            var e = new w(t).init();
                            this.w.config = e;
                        },
                    },
                ]),
                t
            );
        })(),
        ht = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.colors = []);
            }
            return (
                s(t, [
                    {
                        key: "init",
                        value: function () {
                            this.setDefaultColors();
                        },
                    },
                    {
                        key: "setDefaultColors",
                        value: function () {
                            var t = this.w,
                                e = new d();
                            if ((t.globals.dom.elWrap.classList.add(t.config.theme.mode), void 0 === t.config.colors ? (t.globals.colors = this.predefined()) : (t.globals.colors = t.config.colors), t.config.theme.monochrome.enabled)) {
                                var i = [],
                                    s = t.globals.series.length;
                                t.config.plotOptions.bar.distributed && "bar" === t.config.chart.type && (s = t.globals.series[0].length * t.globals.series.length);
                                for (var a = t.config.theme.monochrome.color, n = 1 / (s / t.config.theme.monochrome.shadeIntensity), r = t.config.theme.monochrome.shadeTo, o = 0, l = 0; l < s; l++) {
                                    var h = void 0;
                                    "dark" === r ? ((h = e.shadeColor(-1 * o, a)), (o += n)) : ((h = e.shadeColor(o, a)), (o += n)), i.push(h);
                                }
                                t.globals.colors = i.slice();
                            }
                            var c = t.globals.colors.slice();
                            this.pushExtraColors(t.globals.colors),
                                void 0 === t.config.stroke.colors ? (t.globals.stroke.colors = c) : (t.globals.stroke.colors = t.config.stroke.colors),
                                this.pushExtraColors(t.globals.stroke.colors),
                                void 0 === t.config.fill.colors ? (t.globals.fill.colors = c) : (t.globals.fill.colors = t.config.fill.colors),
                                this.pushExtraColors(t.globals.fill.colors),
                                void 0 === t.config.dataLabels.style.colors ? (t.globals.dataLabels.style.colors = c) : (t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors),
                                this.pushExtraColors(t.globals.dataLabels.style.colors, 50),
                                void 0 === t.config.plotOptions.radar.polygons.fill.colors
                                    ? (t.globals.radarPolygons.fill.colors = ["dark" === t.config.theme.mode ? "#202D48" : "#fff"])
                                    : (t.globals.radarPolygons.fill.colors = t.config.plotOptions.radar.polygons.fill.colors),
                                this.pushExtraColors(t.globals.radarPolygons.fill.colors, 20),
                                void 0 === t.config.markers.colors ? (t.globals.markers.colors = c) : (t.globals.markers.colors = t.config.markers.colors),
                                this.pushExtraColors(t.globals.markers.colors);
                        },
                    },
                    {
                        key: "pushExtraColors",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                s = this.w,
                                a = e || s.globals.series.length;
                            if (
                                (null === i && (i = ("bar" === s.config.chart.type && s.config.plotOptions.bar.distributed) || ("heatmap" === s.config.chart.type && s.config.plotOptions.heatmap.colorScale.inverse)),
                                i && (a = s.globals.series[0].length * s.globals.series.length),
                                t.length < a)
                            )
                                for (var n = a - t.length, r = 0; r < n; r++) t.push(t[r]);
                        },
                    },
                    {
                        key: "updateThemeOptions",
                        value: function (t) {
                            (t.chart = t.chart || {}), (t.tooltip = t.tooltip || {});
                            var e = t.theme.mode || "light",
                                i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                                s = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f";
                            return (t.tooltip.theme = e), (t.chart.foreColor = s), (t.theme.palette = i), t;
                        },
                    },
                    {
                        key: "predefined",
                        value: function () {
                            switch (this.w.config.theme.palette) {
                                case "palette1":
                                    this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                                    break;
                                case "palette2":
                                    this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                                    break;
                                case "palette3":
                                    this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                                    break;
                                case "palette4":
                                    this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                                    break;
                                case "palette5":
                                    this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                                    break;
                                case "palette6":
                                    this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                                    break;
                                case "palette7":
                                    this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                                    break;
                                case "palette8":
                                    this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                                    break;
                                case "palette9":
                                    this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                                    break;
                                case "palette10":
                                    this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                                    break;
                                default:
                                    this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                            }
                            return this.colors;
                        },
                    },
                ]),
                t
            );
        })(),
        ct = (function () {
            function t(i) {
                e(this, t), (this.w = i.w), (this.ttCtx = i), (this.ctx = i.ctx);
            }
            return (
                s(t, [
                    {
                        key: "getNearestValues",
                        value: function (t) {
                            var e = t.hoverArea,
                                i = t.elGrid,
                                s = t.clientX,
                                a = t.clientY,
                                n = t.hasBars,
                                r = this.w,
                                o = r.globals.gridWidth,
                                l = o / (r.globals.dataPoints - 1),
                                h = i.getBoundingClientRect();
                            ((n && r.globals.comboCharts) || n) && (l = o / r.globals.dataPoints);
                            var c = s - h.left,
                                d = a - h.top;
                            c < 0 || d < 0 || c > r.globals.gridWidth || d > r.globals.gridHeight
                                ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan"))
                                : r.globals.zoomEnabled
                                ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom"))
                                : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                            var u = Math.round(c / l);
                            n && ((u = Math.ceil(c / l)), (u -= 1));
                            for (var g, f = null, p = null, x = [], b = 0; b < r.globals.seriesXvalues.length; b++) x.push([r.globals.seriesXvalues[b][0] - 1e-6].concat(r.globals.seriesXvalues[b]));
                            return (
                                (x = x.map(function (t) {
                                    return t.filter(function (t) {
                                        return t;
                                    });
                                })),
                                (g = r.globals.seriesYvalues.map(function (t) {
                                    return t.filter(function (t) {
                                        return t;
                                    });
                                })),
                                r.globals.isXNumeric && ((f = (p = this.closestInMultiArray(c, d, x, g)).index), (u = p.j), null !== f && ((x = r.globals.seriesXvalues[f]), (u = (p = this.closestInArray(c, x)).index))),
                                (!u || u < 1) && (u = 0),
                                { capturedSeries: f, j: u, hoverX: c, hoverY: d }
                            );
                        },
                    },
                    {
                        key: "closestInMultiArray",
                        value: function (t, e, i, s) {
                            var a = this.w,
                                n = 0,
                                r = null,
                                o = -1;
                            a.globals.series.length > 1 ? (n = this.getFirstActiveXArray(i)) : (r = 0);
                            var l = s[n][0],
                                h = i[n][0],
                                c = Math.abs(t - h),
                                d = Math.abs(e - l),
                                u = d + c;
                            return (
                                s.map(function (a, n) {
                                    a.map(function (a, l) {
                                        var h = Math.abs(e - s[n][l]),
                                            g = Math.abs(t - i[n][l]),
                                            f = g + h;
                                        f < u && ((u = f), (c = g), (d = h), (r = n), (o = l));
                                    });
                                }),
                                { index: r, j: o }
                            );
                        },
                    },
                    {
                        key: "getFirstActiveXArray",
                        value: function (t) {
                            for (
                                var e = 0,
                                    i = new y(this.ctx),
                                    s = t.map(function (t, e) {
                                        return t.length > 0 ? e : -1;
                                    }),
                                    a = 0;
                                a < s.length;
                                a++
                            ) {
                                var n = i.getSeriesTotalByIndex(a);
                                if (-1 !== s[a] && 0 !== n && !i.seriesHaveSameValues(a)) {
                                    e = s[a];
                                    break;
                                }
                            }
                            return e;
                        },
                    },
                    {
                        key: "closestInArray",
                        value: function (t, e) {
                            for (var i = e[0], s = null, a = Math.abs(t - i), n = 0; n < e.length; n++) {
                                var r = Math.abs(t - e[n]);
                                r < a && ((a = r), (i = e[n]), (s = n));
                            }
                            return { index: s };
                        },
                    },
                    {
                        key: "isXoverlap",
                        value: function (t) {
                            var e = [],
                                i = this.w.globals.seriesX.filter(function (t) {
                                    return void 0 !== t[0];
                                });
                            if (i.length > 0) for (var s = 0; s < i.length - 1; s++) void 0 !== i[s][t] && void 0 !== i[s + 1][t] && i[s][t] !== i[s + 1][t] && e.push("unEqual");
                            return 0 === e.length;
                        },
                    },
                    {
                        key: "isinitialSeriesSameLen",
                        value: function () {
                            for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                                if (e[i].data.length !== e[i + 1].data.length) {
                                    t = !1;
                                    break;
                                }
                            return t;
                        },
                    },
                    {
                        key: "getBarsHeight",
                        value: function (t) {
                            return c(t).reduce(function (t, e) {
                                return t + e.getBBox().height;
                            }, 0);
                        },
                    },
                    {
                        key: "toggleAllTooltipSeriesGroups",
                        value: function (t) {
                            var e = this.w,
                                i = this.ttCtx;
                            0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                            for (var s = i.allTooltipSeriesGroups, a = 0; a < s.length; a++)
                                "enable" === t ? (s[a].classList.add("active"), (s[a].style.display = e.config.tooltip.items.display)) : (s[a].classList.remove("active"), (s[a].style.display = "none"));
                        },
                    },
                ]),
                t
            );
        })(),
        dt = (function () {
            function t(i) {
                e(this, t), (this.w = i.w), (this.ctx = i.ctx), (this.ttCtx = i), (this.tooltipUtil = new ct(i));
            }
            return (
                s(t, [
                    {
                        key: "drawSeriesTexts",
                        value: function (t) {
                            var e = t.shared,
                                i = void 0 === e || e,
                                s = t.ttItems,
                                a = t.i,
                                n = void 0 === a ? 0 : a,
                                r = t.j,
                                o = void 0 === r ? null : r;
                            void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({ i: n, j: o }) : this.toggleActiveInactiveSeries(i);
                            var l = this.getValuesToPrint({ i: n, j: o });
                            this.printLabels({ i: n, j: o, values: l, ttItems: s, shared: i });
                            var h = this.ttCtx.getElTooltip();
                            (this.ttCtx.tooltipRect.ttWidth = h.getBoundingClientRect().width), (this.ttCtx.tooltipRect.ttHeight = h.getBoundingClientRect().height);
                        },
                    },
                    {
                        key: "printLabels",
                        value: function (t) {
                            var e,
                                i = t.i,
                                s = t.j,
                                a = t.values,
                                n = t.ttItems,
                                r = t.shared,
                                o = this.w,
                                l = a.xVal,
                                h = a.zVal,
                                c = a.xAxisTTVal,
                                d = "",
                                u = o.globals.colors[i];
                            null !== s && o.config.plotOptions.bar.distributed && (u = o.globals.colors[s]);
                            for (var g = 0, f = o.globals.series.length - 1; g < o.globals.series.length; g++, f--) {
                                var p = this.getFormatters(i);
                                if (((d = this.getSeriesName({ fn: p.yLbTitleFormatter, index: i, seriesIndex: i, j: s })), r)) {
                                    var x = o.config.tooltip.inverseOrder ? f : g;
                                    (p = this.getFormatters(x)),
                                        (d = this.getSeriesName({ fn: p.yLbTitleFormatter, index: x, seriesIndex: i, j: s })),
                                        (u = o.globals.colors[x]),
                                        (e = p.yLbFormatter(o.globals.series[x][s], { series: o.globals.series, seriesIndex: x, dataPointIndex: s, w: o })),
                                        ((this.ttCtx.hasBars() && o.config.chart.stacked && 0 === o.globals.series[x][s]) || void 0 === o.globals.series[x][s]) && (e = void 0);
                                } else e = p.yLbFormatter(o.globals.series[i][s], { series: o.globals.series, seriesIndex: i, dataPointIndex: s, w: o });
                                null === s && (e = p.yLbFormatter(o.globals.series[i], o)), this.DOMHandling({ t: g, ttItems: n, values: { val: e, xVal: l, xAxisTTVal: c, zVal: h }, seriesName: d, shared: r, pColor: u });
                            }
                        },
                    },
                    {
                        key: "getFormatters",
                        value: function (t) {
                            var e,
                                i = this.w,
                                s = i.globals.yLabelFormatters[t];
                            return (
                                void 0 !== i.globals.ttVal
                                    ? Array.isArray(i.globals.ttVal)
                                        ? ((s = i.globals.ttVal[t] && i.globals.ttVal[t].formatter), (e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter))
                                        : ((s = i.globals.ttVal.formatter), "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter))
                                    : (e = i.config.tooltip.y.title.formatter),
                                "function" != typeof s &&
                                    (s = i.globals.yLabelFormatters[0]
                                        ? i.globals.yLabelFormatters[0]
                                        : function (t) {
                                              return t;
                                          }),
                                "function" != typeof e &&
                                    (e = function (t) {
                                        return t;
                                    }),
                                { yLbFormatter: s, yLbTitleFormatter: e }
                            );
                        },
                    },
                    {
                        key: "getSeriesName",
                        value: function (t) {
                            var e = t.fn,
                                i = t.index,
                                s = t.seriesIndex,
                                a = t.j,
                                n = this.w;
                            return e(String(n.globals.seriesNames[i]), { series: n.globals.series, seriesIndex: s, dataPointIndex: a, w: n });
                        },
                    },
                    {
                        key: "DOMHandling",
                        value: function (t) {
                            var e = t.t,
                                i = t.ttItems,
                                s = t.values,
                                a = t.seriesName,
                                n = t.shared,
                                r = t.pColor,
                                o = this.w,
                                l = this.ttCtx,
                                h = s.val,
                                c = s.xVal,
                                d = s.xAxisTTVal,
                                u = s.zVal,
                                g = null;
                            (g = i[e].children),
                                o.config.tooltip.fillSeriesColor && ((i[e].style.backgroundColor = r), (g[0].style.display = "none")),
                                l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), (l.tooltipTitle.innerHTML = c)),
                                l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML = "" !== d ? d : c);
                            var f = i[e].querySelector(".apexcharts-tooltip-text-label");
                            f && (f.innerHTML = a ? a + ": " : "");
                            var p = i[e].querySelector(".apexcharts-tooltip-text-value");
                            (p && (p.innerHTML = h), g[0] && g[0].classList.contains("apexcharts-tooltip-marker") && (g[0].style.backgroundColor = r), o.config.tooltip.marker.show || (g[0].style.display = "none"), null !== u) &&
                                ((i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = o.config.tooltip.z.title), (i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = u));
                            n && g[0] && (null == h || o.globals.collapsedSeriesIndices.indexOf(e) > -1 ? (g[0].parentNode.style.display = "none") : (g[0].parentNode.style.display = o.config.tooltip.items.display));
                        },
                    },
                    {
                        key: "toggleActiveInactiveSeries",
                        value: function (t) {
                            var e = this.w;
                            if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                            else {
                                this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                                var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                                i && (i.classList.add("active"), (i.style.display = e.config.tooltip.items.display));
                            }
                        },
                    },
                    {
                        key: "getValuesToPrint",
                        value: function (t) {
                            var e = t.i,
                                i = t.j,
                                s = this.w,
                                a = this.ctx.series.filteredSeriesX(),
                                n = "",
                                r = null,
                                o = null,
                                l = { series: s.globals.series, seriesIndex: e, dataPointIndex: i, w: s },
                                h = s.globals.ttZFormatter;
                            null === i
                                ? (o = s.globals.series[e])
                                : s.globals.isXNumeric
                                ? ((n = a[e][i]), 0 === a[e].length && (n = a[this.tooltipUtil.getFirstActiveXArray(a)][i]))
                                : (n = void 0 !== s.globals.labels[i] ? s.globals.labels[i] : "");
                            var c = n;
                            s.globals.isXNumeric && "datetime" === s.config.xaxis.type ? (n = new N(this.ctx).xLabelFormat(s.globals.ttKeyFormatter, c)) : (n = s.globals.xLabelFormatter(c, l));
                            return (
                                void 0 !== s.config.tooltip.x.formatter && (n = s.globals.ttKeyFormatter(c, l)),
                                s.globals.seriesZ.length > 0 && s.globals.seriesZ[0].length > 0 && (r = h(s.globals.seriesZ[e][i], s)),
                                { val: o, xVal: n, xAxisTTVal: "function" == typeof s.config.xaxis.tooltip.formatter ? s.globals.xaxisTooltipFormatter(c, l) : n, zVal: r }
                            );
                        },
                    },
                    {
                        key: "handleCustomTooltip",
                        value: function (t) {
                            var e = t.i,
                                i = t.j,
                                s = this.w;
                            this.ttCtx.getElTooltip().innerHTML = s.config.tooltip.custom({ ctx: this.ctx, series: s.globals.series, seriesIndex: e, dataPointIndex: i, w: s });
                        },
                    },
                ]),
                t
            );
        })(),
        ut = (function () {
            function t(i) {
                e(this, t), (this.ttCtx = i), (this.ctx = i.ctx), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "moveXCrosshairs",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = this.ttCtx,
                                s = this.w,
                                a = i.getElXCrosshairs(),
                                n = t - i.xcrosshairsWidth / 2,
                                r = s.globals.labels.slice().length;
                            if (
                                (null !== e && (n = (s.globals.gridWidth / r) * e),
                                "tickWidth" === s.config.xaxis.crosshairs.width || "barWidth" === s.config.xaxis.crosshairs.width
                                    ? n + i.xcrosshairsWidth > s.globals.gridWidth && (n = s.globals.gridWidth - i.xcrosshairsWidth)
                                    : null !== e && (n += s.globals.gridWidth / r / 2),
                                n < 0 && (n = 0),
                                n > s.globals.gridWidth && (n = s.globals.gridWidth),
                                null !== a && (a.setAttribute("x", n), a.setAttribute("x1", n), a.setAttribute("x2", n), a.setAttribute("y2", s.globals.gridHeight), a.classList.add("active")),
                                i.blxaxisTooltip)
                            ) {
                                var o = n;
                                ("tickWidth" !== s.config.xaxis.crosshairs.width && "barWidth" !== s.config.xaxis.crosshairs.width) || (o = n + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o);
                            }
                        },
                    },
                    {
                        key: "moveYCrosshairs",
                        value: function (t) {
                            var e = this.ttCtx;
                            null !== e.ycrosshairs && (f.setAttrs(e.ycrosshairs, { y1: t, y2: t }), f.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t }));
                        },
                    },
                    {
                        key: "moveXAxisTooltip",
                        value: function (t) {
                            var e = this.w,
                                i = this.ttCtx;
                            if (null !== i.xaxisTooltip) {
                                i.xaxisTooltip.classList.add("active");
                                var s = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                                if (((t -= i.xaxisTooltip.getBoundingClientRect().width / 2), !isNaN(t))) {
                                    t += e.globals.translateX;
                                    var a;
                                    (a = new f(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML)), (i.xaxisTooltipText.style.minWidth = a.width + "px"), (i.xaxisTooltip.style.left = t + "px"), (i.xaxisTooltip.style.top = s + "px");
                                }
                            }
                        },
                    },
                    {
                        key: "moveYAxisTooltip",
                        value: function (t) {
                            var e = this.w,
                                i = this.ttCtx;
                            null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                            var s = parseInt(i.ycrosshairsHidden.getAttribute("y1")),
                                a = e.globals.translateY + s,
                                n = i.yaxisTTEls[t].getBoundingClientRect().height,
                                r = e.globals.translateYAxisX[t] - 2;
                            e.config.yaxis[t].opposite && (r -= 26),
                                (a -= n / 2),
                                -1 === e.globals.ignoreYAxisIndexes.indexOf(t)
                                    ? (i.yaxisTTEls[t].classList.add("active"), (i.yaxisTTEls[t].style.top = a + "px"), (i.yaxisTTEls[t].style.left = r + e.config.yaxis[t].tooltip.offsetX + "px"))
                                    : i.yaxisTTEls[t].classList.remove("active");
                        },
                    },
                    {
                        key: "moveTooltip",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                s = this.w,
                                a = this.ttCtx,
                                n = a.getElTooltip(),
                                r = a.tooltipRect,
                                o = null !== i ? parseInt(i) : 1,
                                l = parseInt(t) + o + 5,
                                h = parseInt(e) + o / 2;
                            if ((l > s.globals.gridWidth / 2 && (l = l - r.ttWidth - o - 15), l > s.globals.gridWidth - r.ttWidth - 10 && (l = s.globals.gridWidth - r.ttWidth), l < -20 && (l = -20), s.config.tooltip.followCursor)) {
                                var c = a.getElGrid().getBoundingClientRect();
                                h = a.e.clientY + s.globals.translateY - c.top - r.ttHeight / 2;
                            }
                            var d = this.positionChecks(r, l, h);
                            (l = d.x), (h = d.y), isNaN(l) || ((l += s.globals.translateX), (n.style.left = l + "px"), (n.style.top = h + "px"));
                        },
                    },
                    {
                        key: "positionChecks",
                        value: function (t, e, i) {
                            var s = this.w;
                            return t.ttHeight + i > s.globals.gridHeight && (i = s.globals.gridHeight - t.ttHeight + s.globals.translateY), i < 0 && (i = 0), { x: e, y: i };
                        },
                    },
                    {
                        key: "moveMarkers",
                        value: function (t, e) {
                            var i = this.w,
                                s = this.ttCtx;
                            if (i.globals.markers.size[t] > 0)
                                for (var a = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), n = 0; n < a.length; n++)
                                    parseInt(a[n].getAttribute("rel")) === e && (s.marker.resetPointsSize(), s.marker.enlargeCurrentPoint(e, a[n]));
                            else s.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t);
                        },
                    },
                    {
                        key: "moveDynamicPointOnHover",
                        value: function (t, e) {
                            var i,
                                s,
                                a = this.w,
                                n = this.ttCtx,
                                r = a.globals.pointsArray,
                                o = a.config.markers.hover.size;
                            void 0 === o && (o = a.globals.markers.size[e] + a.config.markers.hover.sizeOffset), (i = r[e][t][0]), (s = r[e][t][1] ? r[e][t][1] : 0);
                            var l = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                            l && (l.setAttribute("r", o), l.setAttribute("cx", i), l.setAttribute("cy", s)), this.moveXCrosshairs(i), n.fixedTooltip || this.moveTooltip(i, s, o);
                        },
                    },
                    {
                        key: "moveDynamicPointsOnHover",
                        value: function (t) {
                            var e,
                                i = this.ttCtx,
                                s = i.w,
                                a = 0,
                                n = 0,
                                r = s.globals.pointsArray;
                            e = new G(this.ctx).getActiveSeriesIndex();
                            var o = s.config.markers.hover.size;
                            void 0 === o && (o = s.globals.markers.size[e] + s.config.markers.hover.sizeOffset), r[e] && ((a = r[e][t][0]), (n = r[e][t][1]));
                            var l = null,
                                h = i.getAllMarkers();
                            if (null !== (l = null !== h ? h : s.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle")))
                                for (var c = 0; c < l.length; c++) {
                                    var d = r[c];
                                    if (d && d.length) {
                                        var u = r[c][t][1];
                                        l[c].setAttribute("cx", a);
                                        var g = parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));
                                        null !== u ? (l[g] && l[g].setAttribute("r", o), l[g] && l[g].setAttribute("cy", u)) : l[g] && l[g].setAttribute("r", 0);
                                    }
                                }
                            if ((this.moveXCrosshairs(a), !i.fixedTooltip)) {
                                var f = n || s.globals.gridHeight;
                                this.moveTooltip(a, f, o);
                            }
                        },
                    },
                    {
                        key: "moveStickyTooltipOverBars",
                        value: function (t) {
                            var e,
                                i = this.w,
                                s = this.ttCtx,
                                a = i.globals.dom.baseEl.querySelector(
                                    ".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='"
                                        .concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='")
                                        .concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='1'] path[j='")
                                        .concat(t, "']")
                                ),
                                n = a ? parseFloat(a.getAttribute("cx")) : 0,
                                r = a ? parseFloat(a.getAttribute("barWidth")) : 0;
                            i.globals.isXNumeric ? (n -= r / 2) : ((n = s.xAxisTicksPositions[t - 1] + s.dataPointsDividedWidth / 2), isNaN(n) && (n = s.xAxisTicksPositions[t] - s.dataPointsDividedWidth / 2));
                            var o = s.getElGrid().getBoundingClientRect();
                            if (((e = s.e.clientY - o.top - s.tooltipRect.ttHeight / 2), this.moveXCrosshairs(n), !s.fixedTooltip)) {
                                var l = e || i.globals.gridHeight;
                                this.moveTooltip(n, l);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        gt = (function () {
            function t(i) {
                e(this, t), (this.w = i.w), (this.ttCtx = i), (this.ctx = i.ctx), (this.tooltipPosition = new ut(i));
            }
            return (
                s(t, [
                    {
                        key: "drawDynamicPoints",
                        value: function () {
                            for (var t = this.w, e = new f(this.ctx), i = new C(this.ctx), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), a = 0; a < s.length; a++) {
                                var n = parseInt(s[a].getAttribute("data:realIndex")),
                                    r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(n, "'] .apexcharts-series-markers-wrap"));
                                if (null !== r) {
                                    var o = void 0,
                                        l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                                    ("line" !== t.config.chart.type && "area" !== t.config.chart.type) || t.globals.comboCharts || t.config.tooltip.intersect || (l += " no-pointer-events");
                                    var h = i.getMarkerConfig(l, n);
                                    (o = e.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
                                    var c = document.createElementNS(t.globals.SVGNS, "g");
                                    c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c);
                                }
                            }
                        },
                    },
                    {
                        key: "enlargeCurrentPoint",
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                a = this.w;
                            "bubble" !== a.config.chart.type && this.newPointSize(t, e);
                            var n = e.getAttribute("cx"),
                                r = e.getAttribute("cy");
                            if ((null !== i && null !== s && ((n = i), (r = s)), this.tooltipPosition.moveXCrosshairs(n), !this.fixedTooltip)) {
                                if ("radar" === a.config.chart.type) {
                                    var o = this.ttCtx.getElGrid().getBoundingClientRect();
                                    n = this.ttCtx.e.clientX - o.left;
                                }
                                this.tooltipPosition.moveTooltip(n, r, a.config.markers.hover.size);
                            }
                        },
                    },
                    {
                        key: "enlargePoints",
                        value: function (t) {
                            for (
                                var e = this.w, i = this.ttCtx, s = t, a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, r = 0;
                                r < a.length;
                                r++
                            ) {
                                var o = a[r].getAttribute("rel"),
                                    l = a[r].getAttribute("index");
                                if ((void 0 === n && (n = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), s === parseInt(o))) {
                                    this.newPointSize(s, a[r]);
                                    var h = a[r].getAttribute("cx"),
                                        c = a[r].getAttribute("cy");
                                    this.tooltipPosition.moveXCrosshairs(h), i.fixedTooltip || this.tooltipPosition.moveTooltip(h, c, n);
                                } else this.oldPointSize(a[r]);
                            }
                        },
                    },
                    {
                        key: "newPointSize",
                        value: function (t, e) {
                            var i = this.w,
                                s = i.config.markers.hover.size,
                                a = null;
                            a = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                            var n = parseInt(a.getAttribute("index"));
                            void 0 === s && (s = i.globals.markers.size[n] + i.config.markers.hover.sizeOffset), a.setAttribute("r", s);
                        },
                    },
                    {
                        key: "oldPointSize",
                        value: function (t) {
                            var e = parseInt(t.getAttribute("default-marker-size"));
                            t.setAttribute("r", e);
                        },
                    },
                    {
                        key: "resetPointsSize",
                        value: function () {
                            for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                                var i = parseInt(t[e].getAttribute("default-marker-size"));
                                d.isNumber(i) ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        ft = (function () {
            function t(i) {
                e(this, t), (this.w = i.w), (this.ttCtx = i);
            }
            return (
                s(t, [
                    {
                        key: "getAttr",
                        value: function (t, e) {
                            return parseFloat(t.target.getAttribute(e));
                        },
                    },
                    {
                        key: "handleHeatTooltip",
                        value: function (t) {
                            var e = t.e,
                                i = t.opt,
                                s = t.x,
                                a = t.y,
                                n = this.ttCtx,
                                r = this.w;
                            if (e.target.classList.contains("apexcharts-heatmap-rect")) {
                                var o = this.getAttr(e, "i"),
                                    l = this.getAttr(e, "j"),
                                    h = this.getAttr(e, "cx"),
                                    c = this.getAttr(e, "cy"),
                                    d = this.getAttr(e, "width"),
                                    u = this.getAttr(e, "height");
                                if (
                                    (n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: o, j: l, shared: !1 }),
                                    (s = h + n.tooltipRect.ttWidth / 2 + d),
                                    (a = c + n.tooltipRect.ttHeight / 2 - u / 2),
                                    n.tooltipPosition.moveXCrosshairs(h + d / 2),
                                    s > r.globals.gridWidth / 2 && (s = h - n.tooltipRect.ttWidth / 2 + d),
                                    n.w.config.tooltip.followCursor)
                                ) {
                                    var g = n.getElGrid().getBoundingClientRect();
                                    a = n.e.clientY - g.top + r.globals.translateY / 2 - 10;
                                }
                            }
                            return { x: s, y: a };
                        },
                    },
                    {
                        key: "handleMarkerTooltip",
                        value: function (t) {
                            var e,
                                i,
                                s = t.e,
                                a = t.opt,
                                n = t.x,
                                r = t.y,
                                o = this.w,
                                l = this.ttCtx;
                            if (s.target.classList.contains("apexcharts-marker")) {
                                var h = parseInt(a.paths.getAttribute("cx")),
                                    c = parseInt(a.paths.getAttribute("cy")),
                                    u = parseFloat(a.paths.getAttribute("val"));
                                if (((i = parseInt(a.paths.getAttribute("rel"))), (e = parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel")) - 1), l.intersect)) {
                                    var g = d.findAncestor(a.paths, "apexcharts-series");
                                    g && (e = parseInt(g.getAttribute("data:realIndex")));
                                }
                                if (
                                    (l.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: e, j: i, shared: !l.showOnIntersect && o.config.tooltip.shared }),
                                    "mouseup" === s.type && l.markerClick(s, e, i),
                                    (n = h),
                                    (r = c + o.globals.translateY - 1.4 * l.tooltipRect.ttHeight),
                                    l.w.config.tooltip.followCursor)
                                ) {
                                    var f = l.getElGrid().getBoundingClientRect();
                                    r = l.e.clientY + o.globals.translateY - f.top;
                                }
                                u < 0 && (r = c), l.marker.enlargeCurrentPoint(i, a.paths, n, r);
                            }
                            return { x: n, y: r };
                        },
                    },
                    {
                        key: "handleBarTooltip",
                        value: function (t) {
                            var e,
                                i,
                                s = t.e,
                                a = t.opt,
                                n = this.w,
                                r = this.ttCtx,
                                o = r.getElTooltip(),
                                l = 0,
                                h = 0,
                                c = 0,
                                d = this.getBarTooltipXY({ e: s, opt: a });
                            e = d.i;
                            var u = d.barHeight,
                                g = d.j;
                            if (
                                ((n.globals.isBarHorizontal && r.hasBars()) || !n.config.tooltip.shared
                                    ? ((h = d.x), (c = d.y), (i = Array.isArray(n.config.stroke.width) ? n.config.stroke.width[e] : n.config.stroke.width), (l = h))
                                    : n.globals.comboCharts || n.config.tooltip.shared || (l /= 2),
                                isNaN(c) && (c = n.globals.svgHeight - r.tooltipRect.ttHeight),
                                h + r.tooltipRect.ttWidth > n.globals.gridWidth ? (h -= r.tooltipRect.ttWidth) : h < 0 && (h += r.tooltipRect.ttWidth),
                                r.w.config.tooltip.followCursor)
                            ) {
                                var f = r.getElGrid().getBoundingClientRect();
                                c = r.e.clientY - f.top;
                            }
                            if (
                                (null === r.tooltip && (r.tooltip = n.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),
                                n.config.tooltip.shared || (n.globals.comboChartsHasBars ? r.tooltipPosition.moveXCrosshairs(l + i / 2) : r.tooltipPosition.moveXCrosshairs(l)),
                                !r.fixedTooltip && (!n.config.tooltip.shared || (n.globals.isBarHorizontal && r.hasBars())))
                            ) {
                                x && (h = n.globals.gridWidth - h), (o.style.left = h + n.globals.translateX + "px");
                                var p = parseInt(a.paths.parentNode.getAttribute("data:realIndex")),
                                    x = n.globals.isMultipleYAxis ? n.config.yaxis[p] && n.config.yaxis[p].reversed : n.config.yaxis[0].reversed;
                                !x || (n.globals.isBarHorizontal && r.hasBars()) || (c = c + u - 2 * (n.globals.series[e][g] < 0 ? u : 0)),
                                    r.tooltipRect.ttHeight + c > n.globals.gridHeight
                                        ? ((c = n.globals.gridHeight - r.tooltipRect.ttHeight + n.globals.translateY), (o.style.top = c + "px"))
                                        : (o.style.top = c + n.globals.translateY - r.tooltipRect.ttHeight / 2 + "px");
                            }
                        },
                    },
                    {
                        key: "getBarTooltipXY",
                        value: function (t) {
                            var e = t.e,
                                i = t.opt,
                                s = this.w,
                                a = null,
                                n = this.ttCtx,
                                r = 0,
                                o = 0,
                                l = 0,
                                h = 0,
                                c = 0,
                                d = e.target.classList;
                            if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-rangebar-area")) {
                                var u = e.target,
                                    g = u.getBoundingClientRect(),
                                    f = i.elGrid.getBoundingClientRect(),
                                    p = g.height;
                                c = g.height;
                                var x = g.width,
                                    b = parseInt(u.getAttribute("cx")),
                                    m = parseInt(u.getAttribute("cy"));
                                h = parseFloat(u.getAttribute("barWidth"));
                                var v = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                                (a = parseInt(u.getAttribute("j"))),
                                    (r = parseInt(u.parentNode.getAttribute("rel")) - 1),
                                    s.globals.comboCharts && (r = parseInt(u.parentNode.getAttribute("data:realIndex"))),
                                    n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: r, j: a, shared: !n.showOnIntersect && s.config.tooltip.shared }),
                                    s.config.tooltip.followCursor
                                        ? s.globals.isBarHorizontal
                                            ? ((o = v - f.left + 15), (l = m - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2))
                                            : ((o = s.globals.isXNumeric ? b - x / 2 : b - n.dataPointsDividedWidth + x / 2), (l = e.clientY - f.top - n.tooltipRect.ttHeight / 2 - 15))
                                        : s.globals.isBarHorizontal
                                        ? ((o = b) < n.xyRatios.baseLineInvertedY && (o = b - n.tooltipRect.ttWidth), (l = m - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2))
                                        : ((o = s.globals.isXNumeric ? b - x / 2 : b - n.dataPointsDividedWidth + x / 2), (l = m));
                            }
                            return { x: o, y: l, barHeight: c, barWidth: h, i: r, j: a };
                        },
                    },
                ]),
                t
            );
        })(),
        pt = (function () {
            function t(i) {
                e(this, t), (this.w = i.w), (this.ttCtx = i);
            }
            return (
                s(t, [
                    {
                        key: "drawXaxisTooltip",
                        value: function () {
                            var t = this.w,
                                e = this.ttCtx,
                                i = "bottom" === t.config.xaxis.position;
                            e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
                            var s = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                                a = t.globals.dom.elWrap;
                            e.blxaxisTooltip &&
                                null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") &&
                                ((e.xaxisTooltip = document.createElement("div")),
                                e.xaxisTooltip.setAttribute("class", s + " " + t.config.tooltip.theme),
                                a.appendChild(e.xaxisTooltip),
                                (e.xaxisTooltipText = document.createElement("div")),
                                e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),
                                (e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily),
                                (e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize),
                                e.xaxisTooltip.appendChild(e.xaxisTooltipText));
                        },
                    },
                    {
                        key: "drawYaxisTooltip",
                        value: function () {
                            for (var t = this.w, e = this.ttCtx, i = 0; i < t.config.yaxis.length; i++) {
                                var s = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                                e.yaxisOffX = s ? t.globals.gridWidth + 1 : 1;
                                var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, s ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"),
                                    n = t.globals.dom.elWrap;
                                if (e.blyaxisTooltip)
                                    null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) &&
                                        ((e.yaxisTooltip = document.createElement("div")),
                                        e.yaxisTooltip.setAttribute("class", a + " " + t.config.tooltip.theme),
                                        n.appendChild(e.yaxisTooltip),
                                        0 === i && (e.yaxisTooltipText = []),
                                        e.yaxisTooltipText.push(document.createElement("div")),
                                        e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),
                                        e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]));
                            }
                        },
                    },
                    {
                        key: "setXCrosshairWidth",
                        value: function () {
                            var t = this.w,
                                e = this.ttCtx,
                                i = e.getElXCrosshairs();
                            if (((e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width)), t.globals.comboCharts)) {
                                var s = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                                if (null !== s && "barWidth" === t.config.xaxis.crosshairs.width) {
                                    var a = parseFloat(s.getAttribute("barWidth"));
                                    e.xcrosshairsWidth = a;
                                } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                                    var n = t.globals.labels.length;
                                    e.xcrosshairsWidth = t.globals.gridWidth / n;
                                }
                            } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                                var r = t.globals.labels.length;
                                e.xcrosshairsWidth = t.globals.gridWidth / r;
                            } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                                var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                                if (null !== o) {
                                    var l = parseFloat(o.getAttribute("barWidth"));
                                    e.xcrosshairsWidth = l;
                                } else e.xcrosshairsWidth = 1;
                            }
                            t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth);
                        },
                    },
                    {
                        key: "handleYCrosshair",
                        value: function () {
                            var t = this.w,
                                e = this.ttCtx;
                            (e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs")), (e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden"));
                        },
                    },
                    {
                        key: "drawYaxisTooltipText",
                        value: function (t, e, i) {
                            var s = this.ttCtx,
                                a = this.w,
                                n = a.globals.yLabelFormatters[t];
                            if (s.blyaxisTooltip) {
                                var r = s.getElGrid().getBoundingClientRect(),
                                    o = (e - r.top) * i.yRatio[t],
                                    l = a.globals.maxYArr[t] - a.globals.minYArr[t],
                                    h = a.globals.minYArr[t] + (l - o);
                                s.tooltipPosition.moveYCrosshairs(e - r.top), (s.yaxisTooltipText[t].innerHTML = n(h)), s.tooltipPosition.moveYAxisTooltip(t);
                            }
                        },
                    },
                ]),
                t
            );
        })(),
        xt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
                var s = this.w;
                (this.tConfig = s.config.tooltip),
                    (this.tooltipUtil = new ct(this)),
                    (this.tooltipLabels = new dt(this)),
                    (this.tooltipPosition = new ut(this)),
                    (this.marker = new gt(this)),
                    (this.intersect = new ft(this)),
                    (this.axesTooltip = new pt(this)),
                    (this.showOnIntersect = this.tConfig.intersect),
                    (this.showTooltipTitle = this.tConfig.x.show),
                    (this.fixedTooltip = this.tConfig.fixed.enabled),
                    (this.xaxisTooltip = null),
                    (this.yaxisTTEls = null),
                    (this.isBarShared = !s.globals.isBarHorizontal && this.tConfig.shared);
            }
            return (
                s(t, [
                    {
                        key: "getElTooltip",
                        value: function (t) {
                            return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip");
                        },
                    },
                    {
                        key: "getElXCrosshairs",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
                        },
                    },
                    {
                        key: "getElGrid",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
                        },
                    },
                    {
                        key: "drawTooltip",
                        value: function (t) {
                            var e = this.w;
                            (this.xyRatios = t),
                                (this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts),
                                (this.blyaxisTooltip = e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts),
                                (this.allTooltipSeriesGroups = []),
                                e.globals.axisCharts || (this.showTooltipTitle = !1);
                            var i = document.createElement("div");
                            if ((i.classList.add("apexcharts-tooltip"), i.classList.add(this.tConfig.theme), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts)) {
                                this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                                var s = new H(this.ctx);
                                this.xAxisTicksPositions = s.getXAxisTicksPositions();
                            }
                            if (
                                (((e.globals.comboCharts && !this.tConfig.shared) || (this.tConfig.intersect && !this.tConfig.shared) || (("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && !this.tConfig.shared)) &&
                                    (this.showOnIntersect = !0),
                                (0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize) || this.marker.drawDynamicPoints(this),
                                e.globals.collapsedSeries.length !== e.globals.series.length)
                            ) {
                                (this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints),
                                    (this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints),
                                    this.showTooltipTitle &&
                                        ((this.tooltipTitle = document.createElement("div")),
                                        this.tooltipTitle.classList.add("apexcharts-tooltip-title"),
                                        (this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily),
                                        (this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize),
                                        i.appendChild(this.tooltipTitle));
                                var a = e.globals.series.length;
                                (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (a = this.showOnIntersect ? 1 : e.globals.series.length), (this.ttItems = this.createTTElements(a)), this.addSVGEvents();
                            }
                        },
                    },
                    {
                        key: "createTTElements",
                        value: function (t) {
                            for (var e = this.w, i = [], s = this.getElTooltip(), a = 0; a < t; a++) {
                                var n = document.createElement("div");
                                n.classList.add("apexcharts-tooltip-series-group"),
                                    this.tConfig.shared &&
                                        this.tConfig.enabledOnSeries &&
                                        Array.isArray(this.tConfig.enabledOnSeries) &&
                                        this.tConfig.enabledOnSeries.indexOf(a) < 0 &&
                                        n.classList.add("apexcharts-tooltip-series-group-hidden");
                                var r = document.createElement("span");
                                r.classList.add("apexcharts-tooltip-marker"), (r.style.backgroundColor = e.globals.colors[a]), n.appendChild(r);
                                var o = document.createElement("div");
                                o.classList.add("apexcharts-tooltip-text"), (o.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily), (o.style.fontSize = this.tConfig.style.fontSize);
                                var l = document.createElement("div");
                                l.classList.add("apexcharts-tooltip-y-group");
                                var h = document.createElement("span");
                                h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h);
                                var c = document.createElement("span");
                                c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c);
                                var d = document.createElement("div");
                                d.classList.add("apexcharts-tooltip-z-group");
                                var u = document.createElement("span");
                                u.classList.add("apexcharts-tooltip-text-z-label"), d.appendChild(u);
                                var g = document.createElement("span");
                                g.classList.add("apexcharts-tooltip-text-z-value"), d.appendChild(g), o.appendChild(l), o.appendChild(d), n.appendChild(o), s.appendChild(n), i.push(n);
                            }
                            return i;
                        },
                    },
                    {
                        key: "addSVGEvents",
                        value: function () {
                            var t = this.w,
                                e = t.config.chart.type,
                                i = this.getElTooltip(),
                                s = !("bar" !== e && "candlestick" !== e && "rangeBar" !== e),
                                a = t.globals.dom.Paper.node,
                                n = this.getElGrid();
                            n && (this.seriesBound = n.getBoundingClientRect());
                            var r,
                                o = [],
                                l = [],
                                h = { hoverArea: a, elGrid: n, tooltipEl: i, tooltipY: o, tooltipX: l, ttItems: this.ttItems };
                            if (
                                t.globals.axisCharts &&
                                ("area" === e || "line" === e || "scatter" === e || "bubble" === e
                                    ? (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"))
                                    : s
                                    ? (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area"))
                                    : "heatmap" === e
                                    ? (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap"))
                                    : "radar" === e && (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")),
                                r && r.length)
                            )
                                for (var c = 0; c < r.length; c++) o.push(r[c].getAttribute("cy")), l.push(r[c].getAttribute("cx"));
                            if ((t.globals.xyCharts && !this.showOnIntersect) || (t.globals.comboCharts && !this.showOnIntersect) || (s && this.hasBars() && this.tConfig.shared)) this.addPathsEventListeners([a], h);
                            else if (s && !t.globals.comboCharts) this.addBarsEventListeners(h);
                            else if ("bubble" === e || "scatter" === e || "radar" === e || (this.showOnIntersect && ("area" === e || "line" === e))) this.addPointsEventsListeners(h);
                            else if (!t.globals.axisCharts || "heatmap" === e) {
                                var d = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                                this.addPathsEventListeners(d, h);
                            }
                            if (this.showOnIntersect) {
                                var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");
                                u.length > 0 && this.addPathsEventListeners(u, h);
                                var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");
                                g.length > 0 && this.addPathsEventListeners(g, h), this.hasBars() && !this.tConfig.shared && this.addBarsEventListeners(h);
                            }
                        },
                    },
                    {
                        key: "drawFixedTooltipRect",
                        value: function () {
                            var t = this.w,
                                e = this.getElTooltip(),
                                i = e.getBoundingClientRect(),
                                s = i.width + 10,
                                a = i.height + 10,
                                n = this.tConfig.fixed.offsetX,
                                r = this.tConfig.fixed.offsetY;
                            return (
                                this.tConfig.fixed.position.toLowerCase().indexOf("right") > -1 && (n = n + t.globals.svgWidth - s + 10),
                                this.tConfig.fixed.position.toLowerCase().indexOf("bottom") > -1 && (r = r + t.globals.svgHeight - a - 10),
                                (e.style.left = n + "px"),
                                (e.style.top = r + "px"),
                                { x: n, y: r, ttWidth: s, ttHeight: a }
                            );
                        },
                    },
                    {
                        key: "addPointsEventsListeners",
                        value: function (t) {
                            var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
                            this.addPathsEventListeners(e, t);
                        },
                    },
                    {
                        key: "addBarsEventListeners",
                        value: function (t) {
                            var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area");
                            this.addPathsEventListeners(e, t);
                        },
                    },
                    {
                        key: "addPathsEventListeners",
                        value: function (t, e) {
                            for (
                                var i = this,
                                    s = this,
                                    a = function (a) {
                                        var n = { paths: t[a], tooltipEl: e.tooltipEl, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: e.ttItems };
                                        i.w.globals.tooltipOpts = n;
                                        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function (e) {
                                            return t[a].addEventListener(e, s.seriesHover.bind(s, n), { capture: !1, passive: !0 });
                                        });
                                    },
                                    n = 0;
                                n < t.length;
                                n++
                            )
                                a(n);
                        },
                    },
                    {
                        key: "seriesHover",
                        value: function (t, e) {
                            var i = this,
                                s = [],
                                a = this.w;
                            a.config.chart.group && (s = this.ctx.getGroupedCharts()),
                                (a.globals.axisCharts && ((a.globals.minX === -1 / 0 && a.globals.maxX === 1 / 0) || 0 === a.globals.dataPoints)) ||
                                    (s.length
                                        ? s.forEach(function (s) {
                                              var a = i.getElTooltip(s),
                                                  n = { paths: t.paths, tooltipEl: a, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: s.w.globals.tooltip.ttItems };
                                              s.w.globals.minX === i.w.globals.minX && s.w.globals.maxX === i.w.globals.maxX && s.w.globals.tooltip.seriesHoverByContext({ chartCtx: s, ttCtx: s.w.globals.tooltip, opt: n, e: e });
                                          })
                                        : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e: e }));
                        },
                    },
                    {
                        key: "seriesHoverByContext",
                        value: function (t) {
                            var e = t.chartCtx,
                                i = t.ttCtx,
                                s = t.opt,
                                a = t.e,
                                n = e.w,
                                r = this.getElTooltip();
                            ((i.tooltipRect = { x: 0, y: 0, ttWidth: r.getBoundingClientRect().width, ttHeight: r.getBoundingClientRect().height }), (i.e = a), !i.hasBars() || n.globals.comboCharts || i.isBarShared) ||
                                (this.tConfig.onDatasetHover.highlightDataSeries && new G(e).toggleSeriesOnHover(a, a.target.parentNode));
                            i.fixedTooltip && i.drawFixedTooltipRect(), n.globals.axisCharts ? i.axisChartsTooltips({ e: a, opt: s, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: a, opt: s, tooltipRect: i.tooltipRect });
                        },
                    },
                    {
                        key: "axisChartsTooltips",
                        value: function (t) {
                            var e,
                                i,
                                s,
                                a = t.e,
                                n = t.opt,
                                r = this.w,
                                o = null,
                                l = n.elGrid.getBoundingClientRect(),
                                h = "touchmove" === a.type ? a.touches[0].clientX : a.clientX,
                                c = "touchmove" === a.type ? a.touches[0].clientY : a.clientY;
                            if (((this.clientY = c), (this.clientX = h), c < l.top || c > l.top + l.height)) this.handleMouseOut(n);
                            else {
                                if (Array.isArray(this.tConfig.enabledOnSeries)) {
                                    var d = parseInt(n.paths.getAttribute("index"));
                                    if (this.tConfig.enabledOnSeries.indexOf(d) < 0) return void this.handleMouseOut(n);
                                }
                                var u = this.getElTooltip(),
                                    g = this.getElXCrosshairs(),
                                    f = r.globals.xyCharts || ("bar" === r.config.chart.type && !r.globals.isBarHorizontal && this.hasBars() && this.tConfig.shared) || (r.globals.comboCharts && this.hasBars);
                                if ((r.globals.isBarHorizontal && this.hasBars() && (f = !1), "mousemove" === a.type || "touchmove" === a.type || "mouseup" === a.type)) {
                                    if ((null !== g && g.classList.add("active"), null !== this.ycrosshairs && this.blyaxisTooltip && this.ycrosshairs.classList.add("active"), f && !this.showOnIntersect)) {
                                        e = (o = this.tooltipUtil.getNearestValues({ context: this, hoverArea: n.hoverArea, elGrid: n.elGrid, clientX: h, clientY: c, hasBars: this.hasBars })).j;
                                        var p = o.capturedSeries;
                                        if (o.hoverX < 0 || o.hoverX > r.globals.gridWidth) return void this.handleMouseOut(n);
                                        if (null !== p) {
                                            if (null === r.globals.series[p][e]) return void n.tooltipEl.classList.remove("active");
                                            void 0 !== r.globals.series[p][e]
                                                ? this.tConfig.shared && this.tooltipUtil.isXoverlap(e) && this.tooltipUtil.isinitialSeriesSameLen()
                                                    ? this.create(a, this, p, e, n.ttItems)
                                                    : this.create(a, this, p, e, n.ttItems, !1)
                                                : this.tooltipUtil.isXoverlap(e) && this.create(a, this, 0, e, n.ttItems);
                                        } else this.tooltipUtil.isXoverlap(e) && this.create(a, this, 0, e, n.ttItems);
                                    } else if ("heatmap" === r.config.chart.type) {
                                        var x = this.intersect.handleHeatTooltip({ e: a, opt: n, x: i, y: s });
                                        (i = x.x), (s = x.y), (u.style.left = i + "px"), (u.style.top = s + "px");
                                    } else this.hasBars && this.intersect.handleBarTooltip({ e: a, opt: n }), this.hasMarkers && this.intersect.handleMarkerTooltip({ e: a, opt: n, x: i, y: s });
                                    if (this.blyaxisTooltip) for (var b = 0; b < r.config.yaxis.length; b++) this.axesTooltip.drawYaxisTooltipText(b, c, this.xyRatios);
                                    n.tooltipEl.classList.add("active");
                                } else ("mouseout" !== a.type && "touchend" !== a.type) || this.handleMouseOut(n);
                            }
                        },
                    },
                    {
                        key: "nonAxisChartsTooltips",
                        value: function (t) {
                            var e = t.e,
                                i = t.opt,
                                s = t.tooltipRect,
                                a = this.w,
                                n = i.paths.getAttribute("rel"),
                                r = this.getElTooltip(),
                                o = a.globals.dom.elWrap.getBoundingClientRect();
                            if ("mousemove" === e.type || "touchmove" === e.type) {
                                r.classList.add("active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(n) - 1, shared: !1 });
                                var l = a.globals.clientX - o.left - s.ttWidth / 2,
                                    h = a.globals.clientY - o.top - s.ttHeight - 10;
                                (r.style.left = l + "px"), (r.style.top = h + "px");
                            } else ("mouseout" !== e.type && "touchend" !== e.type) || r.classList.remove("active");
                        },
                    },
                    {
                        key: "deactivateHoverFilter",
                        value: function () {
                            for (var t = this.w, e = new f(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), s = 0; s < i.length; s++) e.pathMouseLeave(i[s]);
                        },
                    },
                    {
                        key: "handleMouseOut",
                        value: function (t) {
                            var e = this.w,
                                i = this.getElXCrosshairs();
                            if (
                                (t.tooltipEl.classList.remove("active"),
                                this.deactivateHoverFilter(),
                                "bubble" !== e.config.chart.type && this.marker.resetPointsSize(),
                                null !== i && i.classList.remove("active"),
                                null !== this.ycrosshairs && this.ycrosshairs.classList.remove("active"),
                                this.blxaxisTooltip && this.xaxisTooltip.classList.remove("active"),
                                this.blyaxisTooltip)
                            ) {
                                null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                                for (var s = 0; s < this.yaxisTTEls.length; s++) this.yaxisTTEls[s].classList.remove("active");
                            }
                        },
                    },
                    {
                        key: "getElMarkers",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers");
                        },
                    },
                    {
                        key: "getAllMarkers",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
                        },
                    },
                    {
                        key: "hasMarkers",
                        value: function () {
                            return this.getElMarkers().length > 0;
                        },
                    },
                    {
                        key: "getElBars",
                        value: function () {
                            return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series");
                        },
                    },
                    {
                        key: "hasBars",
                        value: function () {
                            return this.getElBars().length > 0;
                        },
                    },
                    {
                        key: "markerClick",
                        value: function (t, e, i) {
                            var s = this.w;
                            "function" == typeof s.config.chart.events.markerClick && s.config.chart.events.markerClick(t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: s }),
                                this.ctx.fireEvent("markerClick", [t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: s }]);
                        },
                    },
                    {
                        key: "create",
                        value: function (t, e, i, s, a) {
                            var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                                r = this.w,
                                o = e;
                            "mouseup" === t.type && this.markerClick(t, i, s), null === n && (n = this.tConfig.shared);
                            var l = this.hasMarkers(),
                                h = this.getElBars();
                            if (n) {
                                if (
                                    (o.tooltipLabels.drawSeriesTexts({ ttItems: a, i: i, j: s, shared: !this.showOnIntersect && this.tConfig.shared }),
                                    l && (r.globals.markers.largestSize > 0 ? o.marker.enlargePoints(s) : o.tooltipPosition.moveDynamicPointsOnHover(s)),
                                    this.hasBars() && ((this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h)), this.barSeriesHeight > 0))
                                ) {
                                    var c = new f(this.ctx),
                                        d = r.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s, "']"));
                                    this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(s);
                                    for (var u = 0; u < d.length; u++) c.pathMouseEnter(d[u]);
                                }
                            } else o.tooltipLabels.drawSeriesTexts({ shared: !1, ttItems: a, i: i, j: s }), this.hasBars() && o.tooltipPosition.moveStickyTooltipOverBars(s), l && o.tooltipPosition.moveMarkers(i, s);
                        },
                    },
                ]),
                t
            );
        })(),
        bt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w), (this.ev = this.w.config.chart.events), (this.localeValues = this.w.globals.locale.toolbar);
            }
            return (
                s(t, [
                    {
                        key: "createToolbar",
                        value: function () {
                            var t = this.w,
                                e = document.createElement("div");
                            if (
                                (e.setAttribute("class", "apexcharts-toolbar"),
                                t.globals.dom.elWrap.appendChild(e),
                                (this.elZoom = document.createElement("div")),
                                (this.elZoomIn = document.createElement("div")),
                                (this.elZoomOut = document.createElement("div")),
                                (this.elPan = document.createElement("div")),
                                (this.elSelection = document.createElement("div")),
                                (this.elZoomReset = document.createElement("div")),
                                (this.elMenuIcon = document.createElement("div")),
                                (this.elMenu = document.createElement("div")),
                                (this.elCustomIcons = []),
                                (this.t = t.config.chart.toolbar.tools),
                                Array.isArray(this.t.customIcons))
                            )
                                for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(document.createElement("div"));
                            this.elMenuItems = [];
                            var s = [];
                            this.t.zoomin &&
                                t.config.chart.zoom.enabled &&
                                s.push({
                                    el: this.elZoomIn,
                                    icon:
                                        "string" == typeof this.t.zoomin
                                            ? this.t.zoomin
                                            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',
                                    title: this.localeValues.zoomIn,
                                    class: "apexcharts-zoom-in-icon",
                                }),
                                this.t.zoomout &&
                                    t.config.chart.zoom.enabled &&
                                    s.push({
                                        el: this.elZoomOut,
                                        icon:
                                            "string" == typeof this.t.zoomout
                                                ? this.t.zoomout
                                                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',
                                        title: this.localeValues.zoomOut,
                                        class: "apexcharts-zoom-out-icon",
                                    }),
                                this.t.zoom &&
                                    t.config.chart.zoom.enabled &&
                                    s.push({
                                        el: this.elZoom,
                                        icon:
                                            "string" == typeof this.t.zoom
                                                ? this.t.zoom
                                                : '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>',
                                        title: this.localeValues.selectionZoom,
                                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-zoom-icon",
                                    }),
                                this.t.selection &&
                                    t.config.chart.selection.enabled &&
                                    s.push({
                                        el: this.elSelection,
                                        icon:
                                            "string" == typeof this.t.selection
                                                ? this.t.selection
                                                : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                                        title: this.localeValues.selection,
                                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-selection-icon",
                                    }),
                                this.t.pan &&
                                    t.config.chart.zoom.enabled &&
                                    s.push({
                                        el: this.elPan,
                                        icon:
                                            "string" == typeof this.t.pan
                                                ? this.t.pan
                                                : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                                        title: this.localeValues.pan,
                                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-pan-icon",
                                    }),
                                this.t.reset &&
                                    t.config.chart.zoom.enabled &&
                                    s.push({
                                        el: this.elZoomReset,
                                        icon:
                                            "string" == typeof this.t.reset
                                                ? this.t.reset
                                                : '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>',
                                        title: this.localeValues.reset,
                                        class: "apexcharts-reset-zoom-icon",
                                    }),
                                this.t.download &&
                                    s.push({
                                        el: this.elMenuIcon,
                                        icon:
                                            "string" == typeof this.t.download
                                                ? this.t.download
                                                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                                        title: this.localeValues.menu,
                                        class: "apexcharts-menu-icon",
                                    });
                            for (var a = 0; a < this.elCustomIcons.length; a++)
                                s.push({
                                    el: this.elCustomIcons[a],
                                    icon: this.t.customIcons[a].icon,
                                    title: this.t.customIcons[a].title,
                                    index: this.t.customIcons[a].index,
                                    class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[a].class,
                                });
                            s.forEach(function (t, e) {
                                t.index && d.moveIndexInArray(s, e, t.index);
                            });
                            for (var n = 0; n < s.length; n++) f.setAttrs(s[n].el, { class: s[n].class, title: s[n].title }), (s[n].el.innerHTML = s[n].icon), e.appendChild(s[n].el);
                            e.appendChild(this.elMenu), f.setAttrs(this.elMenu, { class: "apexcharts-menu" });
                            for (
                                var r = [
                                        { name: "exportSVG", title: this.localeValues.exportToSVG },
                                        { name: "exportPNG", title: this.localeValues.exportToPNG },
                                    ],
                                    o = 0;
                                o < r.length;
                                o++
                            )
                                this.elMenuItems.push(document.createElement("div")),
                                    (this.elMenuItems[o].innerHTML = r[o].title),
                                    f.setAttrs(this.elMenuItems[o], { class: "apexcharts-menu-item ".concat(r[o].name), title: r[o].title }),
                                    this.elMenu.appendChild(this.elMenuItems[o]);
                            t.globals.zoomEnabled ? this.elZoom.classList.add("selected") : t.globals.panEnabled ? this.elPan.classList.add("selected") : t.globals.selectionEnabled && this.elSelection.classList.add("selected"),
                                this.addToolbarEventListeners();
                        },
                    },
                    {
                        key: "addToolbarEventListeners",
                        value: function () {
                            var t = this;
                            this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)),
                                this.elSelection.addEventListener("click", this.toggleSelection.bind(this)),
                                this.elZoom.addEventListener("click", this.toggleZooming.bind(this)),
                                this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)),
                                this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)),
                                this.elPan.addEventListener("click", this.togglePanning.bind(this)),
                                this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)),
                                this.elMenuItems.forEach(function (e) {
                                    e.classList.contains("exportSVG") ? e.addEventListener("click", t.downloadSVG.bind(t)) : e.classList.contains("exportPNG") && e.addEventListener("click", t.downloadPNG.bind(t));
                                });
                            for (var e = 0; e < this.t.customIcons.length; e++) this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click);
                        },
                    },
                    {
                        key: "toggleSelection",
                        value: function () {
                            this.toggleOtherControls(),
                                (this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled),
                                this.elSelection.classList.contains("selected") ? this.elSelection.classList.remove("selected") : this.elSelection.classList.add("selected");
                        },
                    },
                    {
                        key: "toggleZooming",
                        value: function () {
                            this.toggleOtherControls(),
                                (this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled),
                                this.elZoom.classList.contains("selected") ? this.elZoom.classList.remove("selected") : this.elZoom.classList.add("selected");
                        },
                    },
                    {
                        key: "getToolbarIconsReference",
                        value: function () {
                            var t = this.w;
                            this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),
                                this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),
                                this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
                        },
                    },
                    {
                        key: "enableZooming",
                        value: function () {
                            this.toggleOtherControls(), (this.w.globals.zoomEnabled = !0), this.elZoom && this.elZoom.classList.add("selected"), this.elPan && this.elPan.classList.remove("selected");
                        },
                    },
                    {
                        key: "enablePanning",
                        value: function () {
                            this.toggleOtherControls(), (this.w.globals.panEnabled = !0), this.elPan && this.elPan.classList.add("selected"), this.elZoom && this.elZoom.classList.remove("selected");
                        },
                    },
                    {
                        key: "togglePanning",
                        value: function () {
                            this.toggleOtherControls(), (this.w.globals.panEnabled = !this.w.globals.panEnabled), this.elPan.classList.contains("selected") ? this.elPan.classList.remove("selected") : this.elPan.classList.add("selected");
                        },
                    },
                    {
                        key: "toggleOtherControls",
                        value: function () {
                            var t = this.w;
                            (t.globals.panEnabled = !1),
                                (t.globals.zoomEnabled = !1),
                                (t.globals.selectionEnabled = !1),
                                this.getToolbarIconsReference(),
                                this.elPan && this.elPan.classList.remove("selected"),
                                this.elSelection && this.elSelection.classList.remove("selected"),
                                this.elZoom && this.elZoom.classList.remove("selected");
                        },
                    },
                    {
                        key: "handleZoomIn",
                        value: function () {
                            var t = this.w,
                                e = (t.globals.minX + t.globals.maxX) / 2,
                                i = (t.globals.minX + e) / 2,
                                s = (t.globals.maxX + e) / 2;
                            t.globals.disableZoomIn || this.zoomUpdateOptions(i, s);
                        },
                    },
                    {
                        key: "handleZoomOut",
                        value: function () {
                            var t = this.w;
                            if (!("datetime" === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
                                var e = (t.globals.minX + t.globals.maxX) / 2,
                                    i = t.globals.minX - (e - t.globals.minX),
                                    s = t.globals.maxX - (e - t.globals.maxX);
                                t.globals.disableZoomOut || this.zoomUpdateOptions(i, s);
                            }
                        },
                    },
                    {
                        key: "zoomUpdateOptions",
                        value: function (t, e) {
                            var i = { min: t, max: e },
                                s = this.getBeforeZoomRange(i);
                            s && (i = s.xaxis), (this.w.globals.zoomed = !0), this.ctx._updateOptions({ xaxis: i }, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i);
                        },
                    },
                    {
                        key: "zoomCallback",
                        value: function (t, e) {
                            "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e });
                        },
                    },
                    {
                        key: "getBeforeZoomRange",
                        value: function (t, e) {
                            var i = null;
                            return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })), i;
                        },
                    },
                    {
                        key: "toggleMenu",
                        value: function () {
                            this.elMenu.classList.contains("open") ? this.elMenu.classList.remove("open") : this.elMenu.classList.add("open");
                        },
                    },
                    {
                        key: "downloadPNG",
                        value: function () {
                            var t = new nt(this.ctx);
                            t.exportToPng(this.ctx), this.toggleMenu();
                        },
                    },
                    {
                        key: "downloadSVG",
                        value: function () {
                            var t = new nt(this.ctx);
                            t.exportToSVG(), this.toggleMenu();
                        },
                    },
                    {
                        key: "handleZoomReset",
                        value: function (t) {
                            var e = this;
                            this.ctx.getSyncedCharts().forEach(function (t) {
                                var i = t.w;
                                i.globals.minX !== i.globals.initialminX &&
                                    i.globals.maxX !== i.globals.initialmaxX &&
                                    (t.revertDefaultAxisMinMax(),
                                    "function" == typeof i.config.chart.events.zoomed && e.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }),
                                    (i.globals.zoomed = !1),
                                    t._updateSeries(i.globals.initialSeries, i.config.chart.animations.dynamicAnimation.enabled));
                            });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.elZoomReset &&
                                (this.elZoomReset.removeEventListener("click", this.handleZoomReset.bind(this)),
                                this.elSelection.removeEventListener("click", this.toggleSelection.bind(this)),
                                this.elZoom.removeEventListener("click", this.toggleZooming.bind(this)),
                                this.elZoomIn.removeEventListener("click", this.handleZoomIn.bind(this)),
                                this.elZoomOut.removeEventListener("click", this.handleZoomOut.bind(this)),
                                this.elPan.removeEventListener("click", this.togglePanning.bind(this)),
                                this.elMenuIcon.removeEventListener("click", this.toggleMenu.bind(this))),
                                (this.elZoom = null),
                                (this.elZoomIn = null),
                                (this.elZoomOut = null),
                                (this.elPan = null),
                                (this.elSelection = null),
                                (this.elZoomReset = null),
                                (this.elMenuIcon = null);
                        },
                    },
                ]),
                t
            );
        })(),
        mt = (function (t) {
            function i(t) {
                var s;
                return (
                    e(this, i),
                    ((s = h(this, o(i).call(this, t))).ctx = t),
                    (s.w = t.w),
                    (s.dragged = !1),
                    (s.graphics = new f(s.ctx)),
                    (s.eventList = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"]),
                    (s.clientX = 0),
                    (s.clientY = 0),
                    (s.startX = 0),
                    (s.endX = 0),
                    (s.dragX = 0),
                    (s.startY = 0),
                    (s.endY = 0),
                    (s.dragY = 0),
                    s
                );
            }
            return (
                r(i, bt),
                s(i, [
                    {
                        key: "init",
                        value: function (t) {
                            var e = this,
                                i = t.xyRatios,
                                s = this.w,
                                a = this;
                            (this.xyRatios = i),
                                (this.zoomRect = this.graphics.drawRect(0, 0, 0, 0)),
                                (this.selectionRect = this.graphics.drawRect(0, 0, 0, 0)),
                                (this.gridRect = s.globals.dom.baseEl.querySelector(".apexcharts-grid")),
                                this.zoomRect.node.classList.add("apexcharts-zoom-rect"),
                                this.selectionRect.node.classList.add("apexcharts-selection-rect"),
                                s.globals.dom.elGraphical.add(this.zoomRect),
                                s.globals.dom.elGraphical.add(this.selectionRect),
                                "x" === s.config.chart.selection.type
                                    ? (this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: s.globals.gridWidth, maxY: s.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")))
                                    : "y" === s.config.chart.selection.type
                                    ? (this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: s.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")))
                                    : (this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging"))),
                                this.preselectedSelection(),
                                (this.hoverArea = s.globals.dom.baseEl.querySelector(s.globals.chartClass)),
                                this.hoverArea.classList.add("zoomable"),
                                this.eventList.forEach(function (t) {
                                    e.hoverArea.addEventListener(t, a.svgMouseEvents.bind(a, i), { capture: !1, passive: !0 });
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this,
                                e = this;
                            this.eventList.forEach(function (i) {
                                t.hoverArea && t.hoverArea.removeEventListener(i, e.svgMouseEvents.bind(e, e.xyRatios), { capture: !1, passive: !0 });
                            }),
                                this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()),
                                (this.selectionRect = null),
                                (this.zoomRect = null),
                                (this.gridRect = null);
                        },
                    },
                    {
                        key: "svgMouseEvents",
                        value: function (t, e) {
                            var i = this.w,
                                s = this,
                                a = this.ctx.toolbar,
                                n = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
                            if (
                                (e.shiftKey ? ((this.shiftWasPressed = !0), a.enablePanning()) : this.shiftWasPressed && (a.enableZooming(), (this.shiftWasPressed = !1)),
                                !(e.target.classList.contains("apexcharts-selection-rect") || e.target.parentNode.classList.contains("apexcharts-toolbar")))
                            ) {
                                if (
                                    ((s.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX),
                                    (s.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY),
                                    "mousedown" === e.type && 1 === e.which)
                                ) {
                                    var r = s.gridRect.getBoundingClientRect();
                                    (s.startX = s.clientX - r.left), (s.startY = s.clientY - r.top), (s.dragged = !1), (s.w.globals.mousedown = !0);
                                }
                                if (
                                    ((("mousemove" === e.type && 1 === e.which) || "touchmove" === e.type) &&
                                        ((s.dragged = !0),
                                        i.globals.panEnabled
                                            ? ((i.globals.selection = null), s.w.globals.mousedown && s.panDragging({ context: s, zoomtype: n, xyRatios: t }))
                                            : ((s.w.globals.mousedown && i.globals.zoomEnabled) || (s.w.globals.mousedown && i.globals.selectionEnabled)) && (s.selection = s.selectionDrawing({ context: s, zoomtype: n }))),
                                    "mouseup" === e.type || "touchend" === e.type)
                                ) {
                                    var o = s.gridRect.getBoundingClientRect();
                                    s.w.globals.mousedown &&
                                        ((s.endX = s.clientX - o.left),
                                        (s.endY = s.clientY - o.top),
                                        (s.dragX = Math.abs(s.endX - s.startX)),
                                        (s.dragY = Math.abs(s.endY - s.startY)),
                                        (i.globals.zoomEnabled || i.globals.selectionEnabled) && s.selectionDrawn({ context: s, zoomtype: n })),
                                        i.globals.zoomEnabled && s.hideSelectionRect(this.selectionRect),
                                        (s.dragged = !1),
                                        (s.w.globals.mousedown = !1);
                                }
                                this.makeSelectionRectDraggable();
                            }
                        },
                    },
                    {
                        key: "makeSelectionRectDraggable",
                        value: function () {
                            var t = this.w;
                            if (this.selectionRect) {
                                var e = this.selectionRect.node.getBoundingClientRect();
                                e.width > 0 &&
                                    e.height > 0 &&
                                    this.slDraggableRect
                                        .selectize()
                                        .resize({ constraint: { minX: 0, minY: 0, maxX: t.globals.gridWidth, maxY: t.globals.gridHeight } })
                                        .on("resizing", this.selectionDragging.bind(this, "resizing"));
                            }
                        },
                    },
                    {
                        key: "preselectedSelection",
                        value: function () {
                            var t = this.w,
                                e = this.xyRatios;
                            if (!t.globals.zoomEnabled)
                                if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                                else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                                    var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                                        s = { x: i, y: 0, width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i, height: t.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
                                    this.drawSelectionRect(s),
                                        this.makeSelectionRectDraggable(),
                                        "function" == typeof t.config.chart.events.selection &&
                                            t.config.chart.events.selection(this.ctx, { xaxis: { min: t.config.chart.selection.xaxis.min, max: t.config.chart.selection.xaxis.max }, yaxis: {} });
                                }
                        },
                    },
                    {
                        key: "drawSelectionRect",
                        value: function (t) {
                            var e = t.x,
                                i = t.y,
                                s = t.width,
                                a = t.height,
                                n = t.translateX,
                                r = t.translateY,
                                o = this.w,
                                l = this.zoomRect,
                                h = this.selectionRect;
                            if (this.dragged || null !== o.globals.selection) {
                                var c = { transform: "translate(" + n + ", " + r + ")" };
                                o.globals.zoomEnabled &&
                                    this.dragged &&
                                    (l.attr({
                                        x: e,
                                        y: i,
                                        width: s,
                                        height: a,
                                        fill: o.config.chart.zoom.zoomedArea.fill.color,
                                        "fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
                                        stroke: o.config.chart.zoom.zoomedArea.stroke.color,
                                        "stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
                                        "stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity,
                                    }),
                                    f.setAttrs(l.node, c)),
                                    o.globals.selectionEnabled &&
                                        (h.attr({
                                            x: e,
                                            y: i,
                                            width: s > 0 ? s : 0,
                                            height: a > 0 ? a : 0,
                                            fill: o.config.chart.selection.fill.color,
                                            "fill-opacity": o.config.chart.selection.fill.opacity,
                                            stroke: o.config.chart.selection.stroke.color,
                                            "stroke-width": o.config.chart.selection.stroke.width,
                                            "stroke-dasharray": o.config.chart.selection.stroke.dashArray,
                                            "stroke-opacity": o.config.chart.selection.stroke.opacity,
                                        }),
                                        f.setAttrs(h.node, c));
                            }
                        },
                    },
                    {
                        key: "hideSelectionRect",
                        value: function (t) {
                            t && t.attr({ x: 0, y: 0, width: 0, height: 0 });
                        },
                    },
                    {
                        key: "selectionDrawing",
                        value: function (t) {
                            var e = t.context,
                                i = t.zoomtype,
                                s = this.w,
                                a = e,
                                n = this.gridRect.getBoundingClientRect(),
                                r = a.startX - 1,
                                o = a.startY,
                                l = a.clientX - n.left - r,
                                h = a.clientY - n.top - o,
                                c = 0,
                                d = 0,
                                u = {};
                            return (
                                (Math.abs(l + r) > s.globals.gridWidth || a.clientX - n.left < 0) && (a.hideSelectionRect(this.zoomRect), (a.dragged = !1), (a.w.globals.mousedown = !1)),
                                r > a.clientX - n.left && (c = -(l = Math.abs(l))),
                                o > a.clientY - n.top && (d = -(h = Math.abs(h))),
                                (u =
                                    "x" === i
                                        ? { x: r, y: 0, width: l, height: s.globals.gridHeight, translateX: c, translateY: 0 }
                                        : "y" === i
                                        ? { x: 0, y: o, width: s.globals.gridWidth, height: h, translateX: 0, translateY: d }
                                        : { x: r, y: o, width: l, height: h, translateX: c, translateY: d }),
                                a.drawSelectionRect(u),
                                a.selectionDragging("resizing"),
                                u
                            );
                        },
                    },
                    {
                        key: "selectionDragging",
                        value: function (t, e) {
                            var i = this,
                                s = this.w,
                                a = this.xyRatios,
                                n = this.selectionRect,
                                r = 0;
                            "resizing" === t && (r = 30),
                                "function" == typeof s.config.chart.events.selection &&
                                    s.globals.selectionEnabled &&
                                    (clearTimeout(this.w.globals.selectionResizeTimer),
                                    (this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                                        var t = i.gridRect.getBoundingClientRect(),
                                            e = n.node.getBoundingClientRect(),
                                            r = s.globals.xAxisScale.niceMin + (e.left - t.left) * a.xRatio,
                                            o = s.globals.xAxisScale.niceMin + (e.right - t.left) * a.xRatio,
                                            l = s.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * a.yRatio[0],
                                            h = s.globals.yAxisScale[0].niceMax - (e.top - t.top) * a.yRatio[0];
                                        s.config.chart.events.selection(i.ctx, { xaxis: { min: r, max: o }, yaxis: { min: l, max: h } });
                                    }, r)));
                        },
                    },
                    {
                        key: "selectionDrawn",
                        value: function (t) {
                            var e = t.context,
                                i = t.zoomtype,
                                s = this.w,
                                a = e,
                                n = this.xyRatios,
                                r = this.ctx.toolbar;
                            if (a.startX > a.endX) {
                                var o = a.startX;
                                (a.startX = a.endX), (a.endX = o);
                            }
                            if (a.startY > a.endY) {
                                var l = a.startY;
                                (a.startY = a.endY), (a.endY = l);
                            }
                            var h = s.globals.xAxisScale.niceMin + a.startX * n.xRatio,
                                c = s.globals.xAxisScale.niceMin + a.endX * n.xRatio,
                                u = [],
                                g = [];
                            if (
                                (s.config.yaxis.forEach(function (t, e) {
                                    u.push(Math.floor(s.globals.yAxisScale[e].niceMax - n.yRatio[e] * a.startY)), g.push(Math.floor(s.globals.yAxisScale[e].niceMax - n.yRatio[e] * a.endY));
                                }),
                                a.dragged && (a.dragX > 10 || a.dragY > 10) && h !== c)
                            )
                                if (s.globals.zoomEnabled) {
                                    var f = d.clone(s.config.yaxis);
                                    s.globals.zoomed || ((s.globals.lastXAxis = d.clone(s.config.xaxis)), (s.globals.lastYAxis = d.clone(s.config.yaxis)));
                                    var p = { min: h, max: c };
                                    if (
                                        (("xy" !== i && "y" !== i) ||
                                            f.forEach(function (t, e) {
                                                (f[e].min = g[e]), (f[e].max = u[e]);
                                            }),
                                        s.config.chart.zoom.autoScaleYaxis)
                                    ) {
                                        var x = new B(a.ctx);
                                        f = x.autoScaleY(a.ctx, { xaxis: p });
                                    }
                                    if (r) {
                                        var b = r.getBeforeZoomRange(p, f);
                                        b && ((p = b.xaxis ? b.xaxis : p), (f = b.yaxis ? b.yaxe : f));
                                    }
                                    a.ctx._updateOptions({ xaxis: p, yaxis: f }, !1, a.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof s.config.chart.events.zoomed && r.zoomCallback(p, f), (s.globals.zoomed = !0);
                                } else if (s.globals.selectionEnabled) {
                                    var m,
                                        v = null;
                                    (m = { min: h, max: c }),
                                        ("xy" !== i && "y" !== i) ||
                                            (v = d.clone(s.config.yaxis)).forEach(function (t, e) {
                                                (v[e].min = g[e]), (v[e].max = u[e]);
                                            }),
                                        (s.globals.selection = a.selection),
                                        "function" == typeof s.config.chart.events.selection && s.config.chart.events.selection(a.ctx, { xaxis: m, yaxis: v });
                                }
                        },
                    },
                    {
                        key: "panDragging",
                        value: function (t) {
                            var e,
                                i = t.context,
                                s = (t.zoomtype, this.w),
                                a = i;
                            if (void 0 !== s.globals.lastClientPosition.x) {
                                var n = s.globals.lastClientPosition.x - a.clientX,
                                    r = s.globals.lastClientPosition.y - a.clientY;
                                Math.abs(n) > Math.abs(r) && n > 0 ? (e = "left") : Math.abs(n) > Math.abs(r) && n < 0 ? (e = "right") : Math.abs(r) > Math.abs(n) && r > 0 ? (e = "up") : Math.abs(r) > Math.abs(n) && r < 0 && (e = "down");
                            }
                            s.globals.lastClientPosition = { x: a.clientX, y: a.clientY };
                            var o = s.globals.minX,
                                l = s.globals.maxX;
                            this.panScrolled(e, o, l);
                        },
                    },
                    {
                        key: "panScrolled",
                        value: function (t, e, i) {
                            var s = this.w,
                                a = this.xyRatios,
                                n = d.clone(s.config.yaxis);
                            "left" === t
                                ? ((e = s.globals.minX + (s.globals.gridWidth / 15) * a.xRatio), (i = s.globals.maxX + (s.globals.gridWidth / 15) * a.xRatio))
                                : "right" === t && ((e = s.globals.minX - (s.globals.gridWidth / 15) * a.xRatio), (i = s.globals.maxX - (s.globals.gridWidth / 15) * a.xRatio)),
                                (e < s.globals.initialminX || i > s.globals.initialmaxX) && ((e = s.globals.minX), (i = s.globals.maxX));
                            var r = { min: e, max: i };
                            s.config.chart.zoom.autoScaleYaxis && (n = new B(me.ctx).autoScaleY(me.ctx, { xaxis: r }));
                            this.ctx._updateOptions({ xaxis: { min: e, max: i }, yaxis: n }, !1, !1), "function" == typeof s.config.chart.events.scrolled && s.config.chart.events.scrolled(this.ctx, { xaxis: { min: e, max: i } });
                        },
                    },
                ]),
                i
            );
        })(),
        vt = (function () {
            function t(i) {
                e(this, t), (this.ctx = i), (this.w = i.w);
            }
            return (
                s(t, [
                    {
                        key: "draw",
                        value: function () {
                            this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
                        },
                    },
                    {
                        key: "drawTitleSubtitle",
                        value: function (t) {
                            var e = this.w,
                                i = "title" === t ? e.config.title : e.config.subtitle,
                                s = e.globals.svgWidth / 2,
                                a = i.offsetY,
                                n = "middle";
                            if (("left" === i.align ? ((s = 10), (n = "start")) : "right" === i.align && ((s = e.globals.svgWidth - 10), (n = "end")), (s += i.offsetX), (a = a + parseInt(i.style.fontSize) + 2), void 0 !== i.text)) {
                                var r = new f(this.ctx).drawText({ x: s, y: a, text: i.text, textAnchor: n, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, foreColor: i.style.color, opacity: 1 });
                                r.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(r);
                            }
                        },
                    },
                ]),
                t
            );
        })();
    (st = "undefined" != typeof window ? window : void 0),
        (at = function (e, i) {
            var s = ((void 0 !== this ? this : e).SVG = function (t) {
                if (s.supported) return (t = new s.Doc(t)), s.parser.draw || s.prepare(), t;
            });
            if (((s.ns = "http://www.w3.org/2000/svg"), (s.xmlns = "http://www.w3.org/2000/xmlns/"), (s.xlink = "http://www.w3.org/1999/xlink"), (s.svgjs = "http://svgjs.com/svgjs"), (s.supported = !0), !s.supported)) return !1;
            (s.did = 1e3),
                (s.eid = function (t) {
                    return "Svgjs" + d(t) + s.did++;
                }),
                (s.create = function (t) {
                    var e = i.createElementNS(this.ns, t);
                    return e.setAttribute("id", this.eid(t)), e;
                }),
                (s.extend = function () {
                    var t, e, i, a;
                    for (e = (t = [].slice.call(arguments)).pop(), a = t.length - 1; a >= 0; a--) if (t[a]) for (i in e) t[a].prototype[i] = e[i];
                    s.Set && s.Set.inherit && s.Set.inherit();
                }),
                (s.invent = function (t) {
                    var e =
                        "function" == typeof t.create
                            ? t.create
                            : function () {
                                  this.constructor.call(this, s.create(t.create));
                              };
                    return t.inherit && (e.prototype = new t.inherit()), t.extend && s.extend(e, t.extend), t.construct && s.extend(t.parent || s.Container, t.construct), e;
                }),
                (s.adopt = function (t) {
                    return t
                        ? t.instance
                            ? t.instance
                            : (((i =
                                  "svg" == t.nodeName
                                      ? t.parentNode instanceof e.SVGElement
                                          ? new s.Nested()
                                          : new s.Doc()
                                      : "linearGradient" == t.nodeName
                                      ? new s.Gradient("linear")
                                      : "radialGradient" == t.nodeName
                                      ? new s.Gradient("radial")
                                      : s[d(t.nodeName)]
                                      ? new s[d(t.nodeName)]()
                                      : new s.Element(t)).type = t.nodeName),
                              (i.node = t),
                              (t.instance = i),
                              i instanceof s.Doc && i.namespace().defs(),
                              i.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}),
                              i)
                        : null;
                    var i;
                }),
                (s.prepare = function () {
                    var t = i.getElementsByTagName("body")[0],
                        e = (t ? new s.Doc(t) : s.adopt(i.documentElement).nested()).size(2, 0);
                    s.parser = { body: t || i.documentElement, draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: e.polyline().node, path: e.path().node, native: s.create("svg") };
                }),
                (s.parser = { native: s.create("svg") }),
                i.addEventListener(
                    "DOMContentLoaded",
                    function () {
                        s.parser.draw || s.prepare();
                    },
                    !1
                ),
                (s.regex = {
                    numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                    hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                    rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                    reference: /#([a-z0-9\-_]+)/i,
                    transforms: /\)\s*,?\s*/,
                    whitespace: /\s/g,
                    isHex: /^#[a-f0-9]{3,6}$/i,
                    isRgb: /^rgb\(/,
                    isCss: /[^:]+:[^;]+;?/,
                    isBlank: /^(\s+)?$/,
                    isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    isPercent: /^-?[\d\.]+%$/,
                    isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                    delimiter: /[\s,]+/,
                    hyphen: /([^e])\-/gi,
                    pathLetters: /[MLHVCSQTAZ]/gi,
                    isPathLetter: /[MLHVCSQTAZ]/i,
                    numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                    dots: /\./g,
                }),
                (s.utils = {
                    map: function (t, e) {
                        var i,
                            s = t.length,
                            a = [];
                        for (i = 0; i < s; i++) a.push(e(t[i]));
                        return a;
                    },
                    filter: function (t, e) {
                        var i,
                            s = t.length,
                            a = [];
                        for (i = 0; i < s; i++) e(t[i]) && a.push(t[i]);
                        return a;
                    },
                    radians: function (t) {
                        return ((t % 360) * Math.PI) / 180;
                    },
                    degrees: function (t) {
                        return ((180 * t) / Math.PI) % 360;
                    },
                    filterSVGElements: function (t) {
                        return this.filter(t, function (t) {
                            return t instanceof e.SVGElement;
                        });
                    },
                }),
                (s.defaults = {
                    attrs: {
                        "fill-opacity": 1,
                        "stroke-opacity": 1,
                        "stroke-width": 0,
                        "stroke-linejoin": "miter",
                        "stroke-linecap": "butt",
                        fill: "#000000",
                        stroke: "#000000",
                        opacity: 1,
                        x: 0,
                        y: 0,
                        cx: 0,
                        cy: 0,
                        width: 0,
                        height: 0,
                        r: 0,
                        rx: 0,
                        ry: 0,
                        offset: 0,
                        "stop-opacity": 1,
                        "stop-color": "#000000",
                        "font-size": 16,
                        "font-family": "Helvetica, Arial, sans-serif",
                        "text-anchor": "start",
                    },
                }),
                (s.Color = function (e) {
                    var i, a;
                    ((this.r = 0), (this.g = 0), (this.b = 0), e) &&
                        ("string" == typeof e
                            ? s.regex.isRgb.test(e)
                                ? ((i = s.regex.rgb.exec(e.replace(s.regex.whitespace, ""))), (this.r = parseInt(i[1])), (this.g = parseInt(i[2])), (this.b = parseInt(i[3])))
                                : s.regex.isHex.test(e) &&
                                  ((i = s.regex.hex.exec(4 == (a = e).length ? ["#", a.substring(1, 2), a.substring(1, 2), a.substring(2, 3), a.substring(2, 3), a.substring(3, 4), a.substring(3, 4)].join("") : a)),
                                  (this.r = parseInt(i[1], 16)),
                                  (this.g = parseInt(i[2], 16)),
                                  (this.b = parseInt(i[3], 16)))
                            : "object" === t(e) && ((this.r = e.r), (this.g = e.g), (this.b = e.b)));
                }),
                s.extend(s.Color, {
                    toString: function () {
                        return this.toHex();
                    },
                    toHex: function () {
                        return "#" + u(this.r) + u(this.g) + u(this.b);
                    },
                    toRgb: function () {
                        return "rgb(" + [this.r, this.g, this.b].join() + ")";
                    },
                    brightness: function () {
                        return (this.r / 255) * 0.3 + (this.g / 255) * 0.59 + (this.b / 255) * 0.11;
                    },
                    morph: function (t) {
                        return (this.destination = new s.Color(t)), this;
                    },
                    at: function (t) {
                        return this.destination
                            ? ((t = t < 0 ? 0 : t > 1 ? 1 : t), new s.Color({ r: ~~(this.r + (this.destination.r - this.r) * t), g: ~~(this.g + (this.destination.g - this.g) * t), b: ~~(this.b + (this.destination.b - this.b) * t) }))
                            : this;
                    },
                }),
                (s.Color.test = function (t) {
                    return (t += ""), s.regex.isHex.test(t) || s.regex.isRgb.test(t);
                }),
                (s.Color.isRgb = function (t) {
                    return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b;
                }),
                (s.Color.isColor = function (t) {
                    return s.Color.isRgb(t) || s.Color.test(t);
                }),
                (s.Array = function (t, e) {
                    0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), (this.value = this.parse(t));
                }),
                s.extend(s.Array, {
                    morph: function (t) {
                        if (((this.destination = this.parse(t)), this.value.length != this.destination.length)) {
                            for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value.length > this.destination.length; ) this.destination.push(i);
                            for (; this.value.length < this.destination.length; ) this.value.push(e);
                        }
                        return this;
                    },
                    settle: function () {
                        for (var t = 0, e = this.value.length, i = []; t < e; t++) -1 == i.indexOf(this.value[t]) && i.push(this.value[t]);
                        return (this.value = i);
                    },
                    at: function (t) {
                        if (!this.destination) return this;
                        for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                        return new s.Array(a);
                    },
                    toString: function () {
                        return this.value.join(" ");
                    },
                    valueOf: function () {
                        return this.value;
                    },
                    parse: function (t) {
                        return (t = t.valueOf()), Array.isArray(t) ? t : this.split(t);
                    },
                    split: function (t) {
                        return t.trim().split(s.regex.delimiter).map(parseFloat);
                    },
                    reverse: function () {
                        return this.value.reverse(), this;
                    },
                    clone: function () {
                        var t = new this.constructor();
                        return (
                            (t.value = (function t(e) {
                                var i = e.slice(0);
                                for (var s = i.length; s--; ) Array.isArray(i[s]) && (i[s] = t(i[s]));
                                return i;
                            })(this.value)),
                            t
                        );
                    },
                }),
                (s.PointArray = function (t, e) {
                    s.Array.call(this, t, e || [[0, 0]]);
                }),
                (s.PointArray.prototype = new s.Array()),
                (s.PointArray.prototype.constructor = s.PointArray),
                s.extend(s.PointArray, {
                    toString: function () {
                        for (var t = 0, e = this.value.length, i = []; t < e; t++) i.push(this.value[t].join(","));
                        return i.join(" ");
                    },
                    toLine: function () {
                        return { x1: this.value[0][0], y1: this.value[0][1], x2: this.value[1][0], y2: this.value[1][1] };
                    },
                    at: function (t) {
                        if (!this.destination) return this;
                        for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
                        return new s.PointArray(a);
                    },
                    parse: function (t) {
                        var e = [];
                        if (((t = t.valueOf()), Array.isArray(t))) {
                            if (Array.isArray(t[0]))
                                return t.map(function (t) {
                                    return t.slice();
                                });
                            if (null != t[0].x)
                                return t.map(function (t) {
                                    return [t.x, t.y];
                                });
                        } else t = t.trim().split(s.regex.delimiter).map(parseFloat);
                        t.length % 2 != 0 && t.pop();
                        for (var i = 0, a = t.length; i < a; i += 2) e.push([t[i], t[i + 1]]);
                        return e;
                    },
                    move: function (t, e) {
                        var i = this.bbox();
                        if (((t -= i.x), (e -= i.y), !isNaN(t) && !isNaN(e))) for (var s = this.value.length - 1; s >= 0; s--) this.value[s] = [this.value[s][0] + t, this.value[s][1] + e];
                        return this;
                    },
                    size: function (t, e) {
                        var i,
                            s = this.bbox();
                        for (i = this.value.length - 1; i >= 0; i--) s.width && (this.value[i][0] = ((this.value[i][0] - s.x) * t) / s.width + s.x), s.height && (this.value[i][1] = ((this.value[i][1] - s.y) * e) / s.height + s.y);
                        return this;
                    },
                    bbox: function () {
                        return s.parser.draw || s.prepare(), s.parser.poly.setAttribute("points", this.toString()), s.parser.poly.getBBox();
                    },
                });
            for (
                var a = {
                        M: function (t, e, i) {
                            return (e.x = i.x = t[0]), (e.y = i.y = t[1]), ["M", e.x, e.y];
                        },
                        L: function (t, e) {
                            return (e.x = t[0]), (e.y = t[1]), ["L", t[0], t[1]];
                        },
                        H: function (t, e) {
                            return (e.x = t[0]), ["H", t[0]];
                        },
                        V: function (t, e) {
                            return (e.y = t[0]), ["V", t[0]];
                        },
                        C: function (t, e) {
                            return (e.x = t[4]), (e.y = t[5]), ["C", t[0], t[1], t[2], t[3], t[4], t[5]];
                        },
                        S: function (t, e) {
                            return (e.x = t[2]), (e.y = t[3]), ["S", t[0], t[1], t[2], t[3]];
                        },
                        Q: function (t, e) {
                            return (e.x = t[2]), (e.y = t[3]), ["Q", t[0], t[1], t[2], t[3]];
                        },
                        T: function (t, e) {
                            return (e.x = t[0]), (e.y = t[1]), ["T", t[0], t[1]];
                        },
                        Z: function (t, e, i) {
                            return (e.x = i.x), (e.y = i.y), ["Z"];
                        },
                        A: function (t, e) {
                            return (e.x = t[5]), (e.y = t[6]), ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]];
                        },
                    },
                    n = "mlhvqtcsaz".split(""),
                    r = 0,
                    o = n.length;
                r < o;
                ++r
            )
                a[n[r]] = (function (t) {
                    return function (e, i, s) {
                        if ("H" == t) e[0] = e[0] + i.x;
                        else if ("V" == t) e[0] = e[0] + i.y;
                        else if ("A" == t) (e[5] = e[5] + i.x), (e[6] = e[6] + i.y);
                        else for (var n = 0, r = e.length; n < r; ++n) e[n] = e[n] + (n % 2 ? i.y : i.x);
                        return a[t](e, i, s);
                    };
                })(n[r].toUpperCase());
            (s.PathArray = function (t, e) {
                s.Array.call(this, t, e || [["M", 0, 0]]);
            }),
                (s.PathArray.prototype = new s.Array()),
                (s.PathArray.prototype.constructor = s.PathArray),
                s.extend(s.PathArray, {
                    toString: function () {
                        return (function (t) {
                            for (var e = 0, i = t.length, s = ""; e < i; e++)
                                (s += t[e][0]),
                                    null != t[e][1] &&
                                        ((s += t[e][1]),
                                        null != t[e][2] &&
                                            ((s += " "),
                                            (s += t[e][2]),
                                            null != t[e][3] &&
                                                ((s += " "), (s += t[e][3]), (s += " "), (s += t[e][4]), null != t[e][5] && ((s += " "), (s += t[e][5]), (s += " "), (s += t[e][6]), null != t[e][7] && ((s += " "), (s += t[e][7]))))));
                            return s + " ";
                        })(this.value);
                    },
                    move: function (t, e) {
                        var i = this.bbox();
                        if (((t -= i.x), (e -= i.y), !isNaN(t) && !isNaN(e)))
                            for (var s, a = this.value.length - 1; a >= 0; a--)
                                "M" == (s = this.value[a][0]) || "L" == s || "T" == s
                                    ? ((this.value[a][1] += t), (this.value[a][2] += e))
                                    : "H" == s
                                    ? (this.value[a][1] += t)
                                    : "V" == s
                                    ? (this.value[a][1] += e)
                                    : "C" == s || "S" == s || "Q" == s
                                    ? ((this.value[a][1] += t), (this.value[a][2] += e), (this.value[a][3] += t), (this.value[a][4] += e), "C" == s && ((this.value[a][5] += t), (this.value[a][6] += e)))
                                    : "A" == s && ((this.value[a][6] += t), (this.value[a][7] += e));
                        return this;
                    },
                    size: function (t, e) {
                        var i,
                            s,
                            a = this.bbox();
                        for (i = this.value.length - 1; i >= 0; i--)
                            "M" == (s = this.value[i][0]) || "L" == s || "T" == s
                                ? ((this.value[i][1] = ((this.value[i][1] - a.x) * t) / a.width + a.x), (this.value[i][2] = ((this.value[i][2] - a.y) * e) / a.height + a.y))
                                : "H" == s
                                ? (this.value[i][1] = ((this.value[i][1] - a.x) * t) / a.width + a.x)
                                : "V" == s
                                ? (this.value[i][1] = ((this.value[i][1] - a.y) * e) / a.height + a.y)
                                : "C" == s || "S" == s || "Q" == s
                                ? ((this.value[i][1] = ((this.value[i][1] - a.x) * t) / a.width + a.x),
                                  (this.value[i][2] = ((this.value[i][2] - a.y) * e) / a.height + a.y),
                                  (this.value[i][3] = ((this.value[i][3] - a.x) * t) / a.width + a.x),
                                  (this.value[i][4] = ((this.value[i][4] - a.y) * e) / a.height + a.y),
                                  "C" == s && ((this.value[i][5] = ((this.value[i][5] - a.x) * t) / a.width + a.x), (this.value[i][6] = ((this.value[i][6] - a.y) * e) / a.height + a.y)))
                                : "A" == s &&
                                  ((this.value[i][1] = (this.value[i][1] * t) / a.width),
                                  (this.value[i][2] = (this.value[i][2] * e) / a.height),
                                  (this.value[i][6] = ((this.value[i][6] - a.x) * t) / a.width + a.x),
                                  (this.value[i][7] = ((this.value[i][7] - a.y) * e) / a.height + a.y));
                        return this;
                    },
                    equalCommands: function (t) {
                        var e, i, a;
                        for (t = new s.PathArray(t), a = this.value.length === t.value.length, e = 0, i = this.value.length; a && e < i; e++) a = this.value[e][0] === t.value[e][0];
                        return a;
                    },
                    morph: function (t) {
                        return (t = new s.PathArray(t)), this.equalCommands(t) ? (this.destination = t) : (this.destination = null), this;
                    },
                    at: function (t) {
                        if (!this.destination) return this;
                        var e,
                            i,
                            a,
                            n,
                            r = this.value,
                            o = this.destination.value,
                            l = [],
                            h = new s.PathArray();
                        for (e = 0, i = r.length; e < i; e++) {
                            for (l[e] = [r[e][0]], a = 1, n = r[e].length; a < n; a++) l[e][a] = r[e][a] + (o[e][a] - r[e][a]) * t;
                            "A" === l[e][0] && ((l[e][4] = +(0 != l[e][4])), (l[e][5] = +(0 != l[e][5])));
                        }
                        return (h.value = l), h;
                    },
                    parse: function (t) {
                        if (t instanceof s.PathArray) return t.valueOf();
                        var e,
                            i = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
                        t =
                            "string" == typeof t
                                ? t.replace(s.regex.numbersWithDots, h).replace(s.regex.pathLetters, " $& ").replace(s.regex.hyphen, "$1 -").trim().split(s.regex.delimiter)
                                : t.reduce(function (t, e) {
                                      return [].concat.call(t, e);
                                  }, []);
                        var n = [],
                            r = new s.Point(),
                            o = new s.Point(),
                            l = 0,
                            c = t.length;
                        do {
                            s.regex.isPathLetter.test(t[l]) ? ((e = t[l]), ++l) : "M" == e ? (e = "L") : "m" == e && (e = "l"), n.push(a[e].call(null, t.slice(l, (l += i[e.toUpperCase()])).map(parseFloat), r, o));
                        } while (c > l);
                        return n;
                    },
                    bbox: function () {
                        return s.parser.draw || s.prepare(), s.parser.path.setAttribute("d", this.toString()), s.parser.path.getBBox();
                    },
                }),
                (s.Number = s.invent({
                    create: function (t, e) {
                        (this.value = 0),
                            (this.unit = e || ""),
                            "number" == typeof t
                                ? (this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -3.4e38 : 3.4e38)
                                : "string" == typeof t
                                ? (e = t.match(s.regex.numberAndUnit)) && ((this.value = parseFloat(e[1])), "%" == e[5] ? (this.value /= 100) : "s" == e[5] && (this.value *= 1e3), (this.unit = e[5]))
                                : t instanceof s.Number && ((this.value = t.valueOf()), (this.unit = t.unit));
                    },
                    extend: {
                        toString: function () {
                            return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit;
                        },
                        toJSON: function () {
                            return this.toString();
                        },
                        valueOf: function () {
                            return this.value;
                        },
                        plus: function (t) {
                            return (t = new s.Number(t)), new s.Number(this + t, this.unit || t.unit);
                        },
                        minus: function (t) {
                            return (t = new s.Number(t)), new s.Number(this - t, this.unit || t.unit);
                        },
                        times: function (t) {
                            return (t = new s.Number(t)), new s.Number(this * t, this.unit || t.unit);
                        },
                        divide: function (t) {
                            return (t = new s.Number(t)), new s.Number(this / t, this.unit || t.unit);
                        },
                        to: function (t) {
                            var e = new s.Number(this);
                            return "string" == typeof t && (e.unit = t), e;
                        },
                        morph: function (t) {
                            return (this.destination = new s.Number(t)), t.relative && (this.destination.value += this.value), this;
                        },
                        at: function (t) {
                            return this.destination ? new s.Number(this.destination).minus(this).times(t).plus(this) : this;
                        },
                    },
                })),
                (s.Element = s.invent({
                    create: function (t) {
                        (this._stroke = s.defaults.attrs.stroke), (this._event = null), (this.dom = {}), (this.node = t) && ((this.type = t.nodeName), (this.node.instance = this), (this._stroke = t.getAttribute("stroke") || this._stroke));
                    },
                    extend: {
                        x: function (t) {
                            return this.attr("x", t);
                        },
                        y: function (t) {
                            return this.attr("y", t);
                        },
                        cx: function (t) {
                            return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
                        },
                        cy: function (t) {
                            return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
                        },
                        move: function (t, e) {
                            return this.x(t).y(e);
                        },
                        center: function (t, e) {
                            return this.cx(t).cy(e);
                        },
                        width: function (t) {
                            return this.attr("width", t);
                        },
                        height: function (t) {
                            return this.attr("height", t);
                        },
                        size: function (t, e) {
                            var i = g(this, t, e);
                            return this.width(new s.Number(i.width)).height(new s.Number(i.height));
                        },
                        clone: function (t) {
                            this.writeDataToDom();
                            var e = b(this.node.cloneNode(!0));
                            return t ? t.add(e) : this.after(e), e;
                        },
                        remove: function () {
                            return this.parent() && this.parent().removeElement(this), this;
                        },
                        replace: function (t) {
                            return this.after(t).remove(), t;
                        },
                        addTo: function (t) {
                            return t.put(this);
                        },
                        putIn: function (t) {
                            return t.add(this);
                        },
                        id: function (t) {
                            return this.attr("id", t);
                        },
                        inside: function (t, e) {
                            var i = this.bbox();
                            return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height;
                        },
                        show: function () {
                            return this.style("display", "");
                        },
                        hide: function () {
                            return this.style("display", "none");
                        },
                        visible: function () {
                            return "none" != this.style("display");
                        },
                        toString: function () {
                            return this.attr("id");
                        },
                        classes: function () {
                            var t = this.attr("class");
                            return null == t ? [] : t.trim().split(s.regex.delimiter);
                        },
                        hasClass: function (t) {
                            return -1 != this.classes().indexOf(t);
                        },
                        addClass: function (t) {
                            if (!this.hasClass(t)) {
                                var e = this.classes();
                                e.push(t), this.attr("class", e.join(" "));
                            }
                            return this;
                        },
                        removeClass: function (t) {
                            return (
                                this.hasClass(t) &&
                                    this.attr(
                                        "class",
                                        this.classes()
                                            .filter(function (e) {
                                                return e != t;
                                            })
                                            .join(" ")
                                    ),
                                this
                            );
                        },
                        toggleClass: function (t) {
                            return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
                        },
                        reference: function (t) {
                            return s.get(this.attr(t));
                        },
                        parent: function (t) {
                            var i = this;
                            if (!i.node.parentNode) return null;
                            if (((i = s.adopt(i.node.parentNode)), !t)) return i;
                            for (; i && i.node instanceof e.SVGElement; ) {
                                if ("string" == typeof t ? i.matches(t) : i instanceof t) return i;
                                if (!i.node.parentNode || "#document" == i.node.parentNode.nodeName) return null;
                                i = s.adopt(i.node.parentNode);
                            }
                        },
                        doc: function () {
                            return this instanceof s.Doc ? this : this.parent(s.Doc);
                        },
                        parents: function (t) {
                            var e = [],
                                i = this;
                            do {
                                if (!(i = i.parent(t)) || !i.node) break;
                                e.push(i);
                            } while (i.parent);
                            return e;
                        },
                        matches: function (t) {
                            return (function (t, e) {
                                return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
                            })(this.node, t);
                        },
                        native: function () {
                            return this.node;
                        },
                        svg: function (t) {
                            var e = i.createElement("svg");
                            if (!(t && this instanceof s.Parent)) return e.appendChild((t = i.createElement("svg"))), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                            e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                            for (var a = 0, n = e.firstChild.childNodes.length; a < n; a++) this.node.appendChild(e.firstChild.firstChild);
                            return this;
                        },
                        writeDataToDom: function () {
                            (this.each || this.lines) &&
                                (this.each ? this : this.lines()).each(function () {
                                    this.writeDataToDom();
                                });
                            return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
                        },
                        setData: function (t) {
                            return (this.dom = t), this;
                        },
                        is: function (t) {
                            return (function (t, e) {
                                return t instanceof e;
                            })(this, t);
                        },
                    },
                })),
                (s.easing = {
                    "-": function (t) {
                        return t;
                    },
                    "<>": function (t) {
                        return -Math.cos(t * Math.PI) / 2 + 0.5;
                    },
                    ">": function (t) {
                        return Math.sin((t * Math.PI) / 2);
                    },
                    "<": function (t) {
                        return 1 - Math.cos((t * Math.PI) / 2);
                    },
                }),
                (s.morph = function (t) {
                    return function (e, i) {
                        return new s.MorphObj(e, i).at(t);
                    };
                }),
                (s.Situation = s.invent({
                    create: function (t) {
                        (this.init = !1),
                            (this.reversed = !1),
                            (this.reversing = !1),
                            (this.duration = new s.Number(t.duration).valueOf()),
                            (this.delay = new s.Number(t.delay).valueOf()),
                            (this.start = +new Date() + this.delay),
                            (this.finish = this.start + this.duration),
                            (this.ease = t.ease),
                            (this.loop = 0),
                            (this.loops = !1),
                            (this.animations = {}),
                            (this.attrs = {}),
                            (this.styles = {}),
                            (this.transforms = []),
                            (this.once = {});
                    },
                })),
                (s.FX = s.invent({
                    create: function (t) {
                        (this._target = t), (this.situations = []), (this.active = !1), (this.situation = null), (this.paused = !1), (this.lastPos = 0), (this.pos = 0), (this.absPos = 0), (this._speed = 1);
                    },
                    extend: {
                        animate: function (e, i, a) {
                            "object" === t(e) && ((i = e.ease), (a = e.delay), (e = e.duration));
                            var n = new s.Situation({ duration: e || 1e3, delay: a || 0, ease: s.easing[i || "-"] || i });
                            return this.queue(n), this;
                        },
                        delay: function (t) {
                            var e = new s.Situation({ duration: t, delay: 0, ease: s.easing["-"] });
                            return this.queue(e);
                        },
                        target: function (t) {
                            return t && t instanceof s.Element ? ((this._target = t), this) : this._target;
                        },
                        timeToAbsPos: function (t) {
                            return (t - this.situation.start) / (this.situation.duration / this._speed);
                        },
                        absPosToTime: function (t) {
                            return (this.situation.duration / this._speed) * t + this.situation.start;
                        },
                        startAnimFrame: function () {
                            this.stopAnimFrame(),
                                (this.animationFrame = e.requestAnimationFrame(
                                    function () {
                                        this.step();
                                    }.bind(this)
                                ));
                        },
                        stopAnimFrame: function () {
                            e.cancelAnimationFrame(this.animationFrame);
                        },
                        start: function () {
                            return !this.active && this.situation && ((this.active = !0), this.startCurrent()), this;
                        },
                        startCurrent: function () {
                            return (this.situation.start = +new Date() + this.situation.delay / this._speed), (this.situation.finish = this.situation.start + this.situation.duration / this._speed), this.initAnimations().step();
                        },
                        queue: function (t) {
                            return ("function" == typeof t || t instanceof s.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this;
                        },
                        dequeue: function () {
                            return this.stop(), (this.situation = this.situations.shift()), this.situation && (this.situation instanceof s.Situation ? this.start() : this.situation.call(this)), this;
                        },
                        initAnimations: function () {
                            var t,
                                e,
                                i,
                                a = this.situation;
                            if (a.init) return this;
                            for (t in a.animations)
                                for (i = this.target()[t](), Array.isArray(i) || (i = [i]), Array.isArray(a.animations[t]) || (a.animations[t] = [a.animations[t]]), e = i.length; e--; )
                                    a.animations[t][e] instanceof s.Number && (i[e] = new s.Number(i[e])), (a.animations[t][e] = i[e].morph(a.animations[t][e]));
                            for (t in a.attrs) a.attrs[t] = new s.MorphObj(this.target().attr(t), a.attrs[t]);
                            for (t in a.styles) a.styles[t] = new s.MorphObj(this.target().style(t), a.styles[t]);
                            return (a.initialTransformation = this.target().matrixify()), (a.init = !0), this;
                        },
                        clearQueue: function () {
                            return (this.situations = []), this;
                        },
                        clearCurrent: function () {
                            return (this.situation = null), this;
                        },
                        stop: function (t, e) {
                            var i = this.active;
                            return (this.active = !1), e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
                        },
                        reset: function () {
                            if (this.situation) {
                                var t = this.situation;
                                this.stop(), (this.situation = t), this.atStart();
                            }
                            return this;
                        },
                        finish: function () {
                            for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1); );
                            return this.clearQueue().clearCurrent(), this;
                        },
                        atStart: function () {
                            return this.at(0, !0);
                        },
                        atEnd: function () {
                            return !0 === this.situation.loops && (this.situation.loops = this.situation.loop + 1), "number" == typeof this.situation.loops ? this.at(this.situation.loops, !0) : this.at(1, !0);
                        },
                        at: function (t, e) {
                            var i = this.situation.duration / this._speed;
                            return (
                                (this.absPos = t),
                                e || (this.situation.reversed && (this.absPos = 1 - this.absPos), (this.absPos += this.situation.loop)),
                                (this.situation.start = +new Date() - this.absPos * i),
                                (this.situation.finish = this.situation.start + i),
                                this.step(!0)
                            );
                        },
                        speed: function (t) {
                            return 0 === t ? this.pause() : t ? ((this._speed = t), this.at(this.absPos, !0)) : this._speed;
                        },
                        loop: function (t, e) {
                            var i = this.last();
                            return (i.loops = null == t || t), (i.loop = 0), e && (i.reversing = !0), this;
                        },
                        pause: function () {
                            return (this.paused = !0), this.stopAnimFrame(), this;
                        },
                        play: function () {
                            return this.paused ? ((this.paused = !1), this.at(this.absPos, !0)) : this;
                        },
                        reverse: function (t) {
                            var e = this.last();
                            return (e.reversed = void 0 === t ? !e.reversed : t), this;
                        },
                        progress: function (t) {
                            return t ? this.situation.ease(this.pos) : this.pos;
                        },
                        after: function (t) {
                            var e = this.last();
                            return (
                                this.target().on("finished.fx", function i(s) {
                                    s.detail.situation == e && (t.call(this, e), this.off("finished.fx", i));
                                }),
                                this._callStart()
                            );
                        },
                        during: function (t) {
                            var e = this.last(),
                                i = function (i) {
                                    i.detail.situation == e && t.call(this, i.detail.pos, s.morph(i.detail.pos), i.detail.eased, e);
                                };
                            return (
                                this.target().off("during.fx", i).on("during.fx", i),
                                this.after(function () {
                                    this.off("during.fx", i);
                                }),
                                this._callStart()
                            );
                        },
                        afterAll: function (t) {
                            var e = function e(i) {
                                t.call(this), this.off("allfinished.fx", e);
                            };
                            return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart();
                        },
                        duringAll: function (t) {
                            var e = function (e) {
                                t.call(this, e.detail.pos, s.morph(e.detail.pos), e.detail.eased, e.detail.situation);
                            };
                            return (
                                this.target().off("during.fx", e).on("during.fx", e),
                                this.afterAll(function () {
                                    this.off("during.fx", e);
                                }),
                                this._callStart()
                            );
                        },
                        last: function () {
                            return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
                        },
                        add: function (t, e, i) {
                            return (this.last()[i || "animations"][t] = e), this._callStart();
                        },
                        step: function (t) {
                            var e, i, s;
                            (t || (this.absPos = this.timeToAbsPos(+new Date())), !1 !== this.situation.loops)
                                ? ((e = Math.max(this.absPos, 0)),
                                  (i = Math.floor(e)),
                                  !0 === this.situation.loops || i < this.situation.loops
                                      ? ((this.pos = e - i), (s = this.situation.loop), (this.situation.loop = i))
                                      : ((this.absPos = this.situation.loops), (this.pos = 1), (s = this.situation.loop - 1), (this.situation.loop = this.situation.loops)),
                                  this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - s) % 2)))
                                : ((this.absPos = Math.min(this.absPos, 1)), (this.pos = this.absPos));
                            this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                            var a = this.situation.ease(this.pos);
                            for (var n in this.situation.once) n > this.lastPos && n <= a && (this.situation.once[n].call(this.target(), this.pos, a), delete this.situation.once[n]);
                            return (
                                this.active && this.target().fire("during", { pos: this.pos, eased: a, fx: this, situation: this.situation }),
                                this.situation
                                    ? (this.eachAt(),
                                      (1 == this.pos && !this.situation.reversed) || (this.situation.reversed && 0 == this.pos)
                                          ? (this.stopAnimFrame(),
                                            this.target().fire("finished", { fx: this, situation: this.situation }),
                                            this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), (this.active = !1))),
                                            this.active ? this.dequeue() : this.clearCurrent())
                                          : !this.paused && this.active && this.startAnimFrame(),
                                      (this.lastPos = a),
                                      this)
                                    : this
                            );
                        },
                        eachAt: function () {
                            var t,
                                e,
                                i,
                                a = this,
                                n = this.target(),
                                r = this.situation;
                            for (t in r.animations)
                                (i = [].concat(r.animations[t]).map(function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(a.pos), a.pos) : t;
                                })),
                                    n[t].apply(n, i);
                            for (t in r.attrs)
                                (i = [t].concat(r.attrs[t]).map(function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(a.pos), a.pos) : t;
                                })),
                                    n.attr.apply(n, i);
                            for (t in r.styles)
                                (i = [t].concat(r.styles[t]).map(function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(a.pos), a.pos) : t;
                                })),
                                    n.style.apply(n, i);
                            if (r.transforms.length) {
                                for (i = r.initialTransformation, t = 0, e = r.transforms.length; t < e; t++) {
                                    var o = r.transforms[t];
                                    o instanceof s.Matrix
                                        ? (i = o.relative ? i.multiply(new s.Matrix().morph(o).at(r.ease(this.pos))) : i.morph(o).at(r.ease(this.pos)))
                                        : (o.relative || o.undo(i.extract()), (i = i.multiply(o.at(r.ease(this.pos)))));
                                }
                                n.matrix(i);
                            }
                            return this;
                        },
                        once: function (t, e, i) {
                            var s = this.last();
                            return i || (t = s.ease(t)), (s.once[t] = e), this;
                        },
                        _callStart: function () {
                            return (
                                setTimeout(
                                    function () {
                                        this.start();
                                    }.bind(this),
                                    0
                                ),
                                this
                            );
                        },
                    },
                    parent: s.Element,
                    construct: {
                        animate: function (t, e, i) {
                            return (this.fx || (this.fx = new s.FX(this))).animate(t, e, i);
                        },
                        delay: function (t) {
                            return (this.fx || (this.fx = new s.FX(this))).delay(t);
                        },
                        stop: function (t, e) {
                            return this.fx && this.fx.stop(t, e), this;
                        },
                        finish: function () {
                            return this.fx && this.fx.finish(), this;
                        },
                        pause: function () {
                            return this.fx && this.fx.pause(), this;
                        },
                        play: function () {
                            return this.fx && this.fx.play(), this;
                        },
                        speed: function (t) {
                            if (this.fx) {
                                if (null == t) return this.fx.speed();
                                this.fx.speed(t);
                            }
                            return this;
                        },
                    },
                })),
                (s.MorphObj = s.invent({
                    create: function (t, e) {
                        return s.Color.isColor(e)
                            ? new s.Color(t).morph(e)
                            : s.regex.delimiter.test(t)
                            ? s.regex.pathLetters.test(t)
                                ? new s.PathArray(t).morph(e)
                                : new s.Array(t).morph(e)
                            : s.regex.numberAndUnit.test(e)
                            ? new s.Number(t).morph(e)
                            : ((this.value = t), void (this.destination = e));
                    },
                    extend: {
                        at: function (t, e) {
                            return e < 1 ? this.value : this.destination;
                        },
                        valueOf: function () {
                            return this.value;
                        },
                    },
                })),
                s.extend(s.FX, {
                    attr: function (e, i, s) {
                        if ("object" === t(e)) for (var a in e) this.attr(a, e[a]);
                        else this.add(e, i, "attrs");
                        return this;
                    },
                    style: function (e, i) {
                        if ("object" === t(e)) for (var s in e) this.style(s, e[s]);
                        else this.add(e, i, "styles");
                        return this;
                    },
                    x: function (t, e) {
                        if (this.target() instanceof s.G) return this.transform({ x: t }, e), this;
                        var i = new s.Number(t);
                        return (i.relative = e), this.add("x", i);
                    },
                    y: function (t, e) {
                        if (this.target() instanceof s.G) return this.transform({ y: t }, e), this;
                        var i = new s.Number(t);
                        return (i.relative = e), this.add("y", i);
                    },
                    cx: function (t) {
                        return this.add("cx", new s.Number(t));
                    },
                    cy: function (t) {
                        return this.add("cy", new s.Number(t));
                    },
                    move: function (t, e) {
                        return this.x(t).y(e);
                    },
                    center: function (t, e) {
                        return this.cx(t).cy(e);
                    },
                    size: function (t, e) {
                        var i;
                        this.target() instanceof s.Text
                            ? this.attr("font-size", t)
                            : ((t && e) || (i = this.target().bbox()), t || (t = (i.width / i.height) * e), e || (e = (i.height / i.width) * t), this.add("width", new s.Number(t)).add("height", new s.Number(e)));
                        return this;
                    },
                    width: function (t) {
                        return this.add("width", new s.Number(t));
                    },
                    height: function (t) {
                        return this.add("height", new s.Number(t));
                    },
                    plot: function (t, e, i, s) {
                        return 4 == arguments.length ? this.plot([t, e, i, s]) : this.add("plot", new (this.target().morphArray)(t));
                    },
                    leading: function (t) {
                        return this.target().leading ? this.add("leading", new s.Number(t)) : this;
                    },
                    viewbox: function (t, e, i, a) {
                        return this.target() instanceof s.Container && this.add("viewbox", new s.ViewBox(t, e, i, a)), this;
                    },
                    update: function (t) {
                        if (this.target() instanceof s.Stop) {
                            if ("number" == typeof t || t instanceof s.Number) return this.update({ offset: arguments[0], color: arguments[1], opacity: arguments[2] });
                            null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset);
                        }
                        return this;
                    },
                }),
                (s.Box = s.invent({
                    create: function (e, i, a, n) {
                        if (!("object" !== t(e) || e instanceof s.Element)) return s.Box.call(this, null != e.left ? e.left : e.x, null != e.top ? e.top : e.y, e.width, e.height);
                        4 == arguments.length && ((this.x = e), (this.y = i), (this.width = a), (this.height = n)), m(this);
                    },
                    extend: {
                        merge: function (t) {
                            var e = new this.constructor();
                            return (e.x = Math.min(this.x, t.x)), (e.y = Math.min(this.y, t.y)), (e.width = Math.max(this.x + this.width, t.x + t.width) - e.x), (e.height = Math.max(this.y + this.height, t.y + t.height) - e.y), m(e);
                        },
                        transform: function (t) {
                            var e,
                                i = 1 / 0,
                                a = -1 / 0,
                                n = 1 / 0,
                                r = -1 / 0;
                            return (
                                [new s.Point(this.x, this.y), new s.Point(this.x2, this.y), new s.Point(this.x, this.y2), new s.Point(this.x2, this.y2)].forEach(function (e) {
                                    (e = e.transform(t)), (i = Math.min(i, e.x)), (a = Math.max(a, e.x)), (n = Math.min(n, e.y)), (r = Math.max(r, e.y));
                                }),
                                ((e = new this.constructor()).x = i),
                                (e.width = a - i),
                                (e.y = n),
                                (e.height = r - n),
                                m(e),
                                e
                            );
                        },
                    },
                })),
                (s.BBox = s.invent({
                    create: function (t) {
                        if ((s.Box.apply(this, [].slice.call(arguments)), t instanceof s.Element)) {
                            var e;
                            try {
                                if (!i.documentElement.contains) {
                                    for (var a = t.node; a.parentNode; ) a = a.parentNode;
                                    if (a != i) throw new Error("Element not in the dom");
                                }
                                e = t.node.getBBox();
                            } catch (i) {
                                if (t instanceof s.Shape) {
                                    s.parser.draw || s.prepare();
                                    var n = t.clone(s.parser.draw.instance).show();
                                    (e = n.node.getBBox()), n.remove();
                                } else e = { x: t.node.clientLeft, y: t.node.clientTop, width: t.node.clientWidth, height: t.node.clientHeight };
                            }
                            s.Box.call(this, e);
                        }
                    },
                    inherit: s.Box,
                    parent: s.Element,
                    construct: {
                        bbox: function () {
                            return new s.BBox(this);
                        },
                    },
                })),
                (s.BBox.prototype.constructor = s.BBox),
                s.extend(s.Element, {
                    tbox: function () {
                        return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."), this.rbox(this.doc());
                    },
                }),
                (s.RBox = s.invent({
                    create: function (t) {
                        s.Box.apply(this, [].slice.call(arguments)), t instanceof s.Element && s.Box.call(this, t.node.getBoundingClientRect());
                    },
                    inherit: s.Box,
                    parent: s.Element,
                    extend: {
                        addOffset: function () {
                            return (this.x += e.pageXOffset), (this.y += e.pageYOffset), this;
                        },
                    },
                    construct: {
                        rbox: function (t) {
                            return t ? new s.RBox(this).transform(t.screenCTM().inverse()) : new s.RBox(this).addOffset();
                        },
                    },
                })),
                (s.RBox.prototype.constructor = s.RBox),
                (s.Matrix = s.invent({
                    create: function (e) {
                        var i,
                            a = p([1, 0, 0, 1, 0, 0]);
                        for (
                            e =
                                e instanceof s.Element
                                    ? e.matrixify()
                                    : "string" == typeof e
                                    ? p(e.split(s.regex.delimiter).map(parseFloat))
                                    : 6 == arguments.length
                                    ? p([].slice.call(arguments))
                                    : Array.isArray(e)
                                    ? p(e)
                                    : "object" === t(e)
                                    ? e
                                    : a,
                                i = y.length - 1;
                            i >= 0;
                            --i
                        )
                            this[y[i]] = null != e[y[i]] ? e[y[i]] : a[y[i]];
                    },
                    extend: {
                        extract: function () {
                            var t = f(this, 0, 1),
                                e = f(this, 1, 0),
                                i = (180 / Math.PI) * Math.atan2(t.y, t.x) - 90;
                            return {
                                x: this.e,
                                y: this.f,
                                transformedX: (this.e * Math.cos((i * Math.PI) / 180) + this.f * Math.sin((i * Math.PI) / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                                transformedY: (this.f * Math.cos((i * Math.PI) / 180) + this.e * Math.sin((-i * Math.PI) / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                                skewX: -i,
                                skewY: (180 / Math.PI) * Math.atan2(e.y, e.x),
                                scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                                scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                                rotation: i,
                                a: this.a,
                                b: this.b,
                                c: this.c,
                                d: this.d,
                                e: this.e,
                                f: this.f,
                                matrix: new s.Matrix(this),
                            };
                        },
                        clone: function () {
                            return new s.Matrix(this);
                        },
                        morph: function (t) {
                            return (this.destination = new s.Matrix(t)), this;
                        },
                        at: function (t) {
                            return this.destination
                                ? new s.Matrix({
                                      a: this.a + (this.destination.a - this.a) * t,
                                      b: this.b + (this.destination.b - this.b) * t,
                                      c: this.c + (this.destination.c - this.c) * t,
                                      d: this.d + (this.destination.d - this.d) * t,
                                      e: this.e + (this.destination.e - this.e) * t,
                                      f: this.f + (this.destination.f - this.f) * t,
                                  })
                                : this;
                        },
                        multiply: function (t) {
                            return new s.Matrix(
                                this.native().multiply(
                                    (function (t) {
                                        t instanceof s.Matrix || (t = new s.Matrix(t));
                                        return t;
                                    })(t).native()
                                )
                            );
                        },
                        inverse: function () {
                            return new s.Matrix(this.native().inverse());
                        },
                        translate: function (t, e) {
                            return new s.Matrix(this.native().translate(t || 0, e || 0));
                        },
                        scale: function (t, e, i, a) {
                            return 1 == arguments.length ? (e = t) : 3 == arguments.length && ((a = i), (i = e), (e = t)), this.around(i, a, new s.Matrix(t, 0, 0, e, 0, 0));
                        },
                        rotate: function (t, e, i) {
                            return (t = s.utils.radians(t)), this.around(e, i, new s.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0));
                        },
                        flip: function (t, e) {
                            return "x" == t ? this.scale(-1, 1, e, 0) : "y" == t ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, null != e ? e : t);
                        },
                        skew: function (t, e, i, a) {
                            return (
                                1 == arguments.length ? (e = t) : 3 == arguments.length && ((a = i), (i = e), (e = t)),
                                (t = s.utils.radians(t)),
                                (e = s.utils.radians(e)),
                                this.around(i, a, new s.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0))
                            );
                        },
                        skewX: function (t, e, i) {
                            return this.skew(t, 0, e, i);
                        },
                        skewY: function (t, e, i) {
                            return this.skew(0, t, e, i);
                        },
                        around: function (t, e, i) {
                            return this.multiply(new s.Matrix(1, 0, 0, 1, t || 0, e || 0))
                                .multiply(i)
                                .multiply(new s.Matrix(1, 0, 0, 1, -t || 0, -e || 0));
                        },
                        native: function () {
                            for (var t = s.parser.native.createSVGMatrix(), e = y.length - 1; e >= 0; e--) t[y[e]] = this[y[e]];
                            return t;
                        },
                        toString: function () {
                            return "matrix(" + v(this.a) + "," + v(this.b) + "," + v(this.c) + "," + v(this.d) + "," + v(this.e) + "," + v(this.f) + ")";
                        },
                    },
                    parent: s.Element,
                    construct: {
                        ctm: function () {
                            return new s.Matrix(this.node.getCTM());
                        },
                        screenCTM: function () {
                            if (this instanceof s.Nested) {
                                var t = this.rect(1, 1),
                                    e = t.node.getScreenCTM();
                                return t.remove(), new s.Matrix(e);
                            }
                            return new s.Matrix(this.node.getScreenCTM());
                        },
                    },
                })),
                (s.Point = s.invent({
                    create: function (e, i) {
                        var s;
                        (s = Array.isArray(e) ? { x: e[0], y: e[1] } : "object" === t(e) ? { x: e.x, y: e.y } : null != e ? { x: e, y: null != i ? i : e } : { x: 0, y: 0 }), (this.x = s.x), (this.y = s.y);
                    },
                    extend: {
                        clone: function () {
                            return new s.Point(this);
                        },
                        morph: function (t, e) {
                            return (this.destination = new s.Point(t, e)), this;
                        },
                        at: function (t) {
                            return this.destination ? new s.Point({ x: this.x + (this.destination.x - this.x) * t, y: this.y + (this.destination.y - this.y) * t }) : this;
                        },
                        native: function () {
                            var t = s.parser.native.createSVGPoint();
                            return (t.x = this.x), (t.y = this.y), t;
                        },
                        transform: function (t) {
                            return new s.Point(this.native().matrixTransform(t.native()));
                        },
                    },
                })),
                s.extend(s.Element, {
                    point: function (t, e) {
                        return new s.Point(t, e).transform(this.screenCTM().inverse());
                    },
                }),
                s.extend(s.Element, {
                    attr: function (e, i, a) {
                        if (null == e) {
                            for (e = {}, a = (i = this.node.attributes).length - 1; a >= 0; a--) e[i[a].nodeName] = s.regex.isNumber.test(i[a].nodeValue) ? parseFloat(i[a].nodeValue) : i[a].nodeValue;
                            return e;
                        }
                        if ("object" === t(e)) for (i in e) this.attr(i, e[i]);
                        else if (null === i) this.node.removeAttribute(e);
                        else {
                            if (null == i) return null == (i = this.node.getAttribute(e)) ? s.defaults.attrs[e] : s.regex.isNumber.test(i) ? parseFloat(i) : i;
                            "stroke-width" == e ? this.attr("stroke", parseFloat(i) > 0 ? this._stroke : null) : "stroke" == e && (this._stroke = i),
                                ("fill" != e && "stroke" != e) ||
                                    (s.regex.isImage.test(i) && (i = this.doc().defs().image(i, 0, 0)),
                                    i instanceof s.Image &&
                                        (i = this.doc()
                                            .defs()
                                            .pattern(0, 0, function () {
                                                this.add(i);
                                            }))),
                                "number" == typeof i ? (i = new s.Number(i)) : s.Color.isColor(i) ? (i = new s.Color(i)) : Array.isArray(i) && (i = new s.Array(i)),
                                "leading" == e ? this.leading && this.leading(i) : "string" == typeof a ? this.node.setAttributeNS(a, e, i.toString()) : this.node.setAttribute(e, i.toString()),
                                !this.rebuild || ("font-size" != e && "x" != e) || this.rebuild(e, i);
                        }
                        return this;
                    },
                }),
                s.extend(s.Element, {
                    transform: function (e, i) {
                        var a, n;
                        if ("object" !== t(e)) return (a = new s.Matrix(this).extract()), "string" == typeof e ? a[e] : a;
                        if (((a = new s.Matrix(this)), (i = !!i || !!e.relative), null != e.a)) a = i ? a.multiply(new s.Matrix(e)) : new s.Matrix(e);
                        else if (null != e.rotation) x(e, this), (a = i ? a.rotate(e.rotation, e.cx, e.cy) : a.rotate(e.rotation - a.extract().rotation, e.cx, e.cy));
                        else if (null != e.scale || null != e.scaleX || null != e.scaleY) {
                            if ((x(e, this), (e.scaleX = null != e.scale ? e.scale : null != e.scaleX ? e.scaleX : 1), (e.scaleY = null != e.scale ? e.scale : null != e.scaleY ? e.scaleY : 1), !i)) {
                                var r = a.extract();
                                (e.scaleX = (1 * e.scaleX) / r.scaleX), (e.scaleY = (1 * e.scaleY) / r.scaleY);
                            }
                            a = a.scale(e.scaleX, e.scaleY, e.cx, e.cy);
                        } else if (null != e.skew || null != e.skewX || null != e.skewY) {
                            if ((x(e, this), (e.skewX = null != e.skew ? e.skew : null != e.skewX ? e.skewX : 0), (e.skewY = null != e.skew ? e.skew : null != e.skewY ? e.skewY : 0), !i)) {
                                r = a.extract();
                                a = a.multiply(new s.Matrix().skew(r.skewX, r.skewY, e.cx, e.cy).inverse());
                            }
                            a = a.skew(e.skewX, e.skewY, e.cx, e.cy);
                        } else
                            e.flip
                                ? ("x" == e.flip || "y" == e.flip ? (e.offset = null == e.offset ? this.bbox()["c" + e.flip] : e.offset) : null == e.offset ? ((n = this.bbox()), (e.flip = n.cx), (e.offset = n.cy)) : (e.flip = e.offset),
                                  (a = new s.Matrix().flip(e.flip, e.offset)))
                                : (null == e.x && null == e.y) || (i ? (a = a.translate(e.x, e.y)) : (null != e.x && (a.e = e.x), null != e.y && (a.f = e.y)));
                        return this.attr("transform", a);
                    },
                }),
                s.extend(s.FX, {
                    transform: function (e, i) {
                        var a,
                            n,
                            r = this.target();
                        return "object" !== t(e)
                            ? ((a = new s.Matrix(r).extract()), "string" == typeof e ? a[e] : a)
                            : ((i = !!i || !!e.relative),
                              null != e.a
                                  ? (a = new s.Matrix(e))
                                  : null != e.rotation
                                  ? (x(e, r), (a = new s.Rotate(e.rotation, e.cx, e.cy)))
                                  : null != e.scale || null != e.scaleX || null != e.scaleY
                                  ? (x(e, r),
                                    (e.scaleX = null != e.scale ? e.scale : null != e.scaleX ? e.scaleX : 1),
                                    (e.scaleY = null != e.scale ? e.scale : null != e.scaleY ? e.scaleY : 1),
                                    (a = new s.Scale(e.scaleX, e.scaleY, e.cx, e.cy)))
                                  : null != e.skewX || null != e.skewY
                                  ? (x(e, r), (e.skewX = null != e.skewX ? e.skewX : 0), (e.skewY = null != e.skewY ? e.skewY : 0), (a = new s.Skew(e.skewX, e.skewY, e.cx, e.cy)))
                                  : e.flip
                                  ? ("x" == e.flip || "y" == e.flip ? (e.offset = null == e.offset ? r.bbox()["c" + e.flip] : e.offset) : null == e.offset ? ((n = r.bbox()), (e.flip = n.cx), (e.offset = n.cy)) : (e.flip = e.offset),
                                    (a = new s.Matrix().flip(e.flip, e.offset)))
                                  : (null == e.x && null == e.y) || (a = new s.Translate(e.x, e.y)),
                              a ? ((a.relative = i), this.last().transforms.push(a), this._callStart()) : this);
                    },
                }),
                s.extend(s.Element, {
                    untransform: function () {
                        return this.attr("transform", null);
                    },
                    matrixify: function () {
                        return (this.attr("transform") || "")
                            .split(s.regex.transforms)
                            .slice(0, -1)
                            .map(function (t) {
                                var e = t.trim().split("(");
                                return [
                                    e[0],
                                    e[1].split(s.regex.delimiter).map(function (t) {
                                        return parseFloat(t);
                                    }),
                                ];
                            })
                            .reduce(function (t, e) {
                                return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1]);
                            }, new s.Matrix());
                    },
                    toParent: function (t) {
                        if (this == t) return this;
                        var e = this.screenCTM(),
                            i = t.screenCTM().inverse();
                        return this.addTo(t).untransform().transform(i.multiply(e)), this;
                    },
                    toDoc: function () {
                        return this.toParent(this.doc());
                    },
                }),
                (s.Transformation = s.invent({
                    create: function (e, i) {
                        if (arguments.length > 1 && "boolean" != typeof i) return this.constructor.call(this, [].slice.call(arguments));
                        if (Array.isArray(e)) for (var s = 0, a = this.arguments.length; s < a; ++s) this[this.arguments[s]] = e[s];
                        else if ("object" === t(e)) for (s = 0, a = this.arguments.length; s < a; ++s) this[this.arguments[s]] = e[this.arguments[s]];
                        (this.inversed = !1), !0 === i && (this.inversed = !0);
                    },
                    extend: {
                        arguments: [],
                        method: "",
                        at: function (t) {
                            for (var e = [], i = 0, a = this.arguments.length; i < a; ++i) e.push(this[this.arguments[i]]);
                            var n = this._undo || new s.Matrix();
                            return (n = new s.Matrix().morph(s.Matrix.prototype[this.method].apply(n, e)).at(t)), this.inversed ? n.inverse() : n;
                        },
                        undo: function (t) {
                            for (var e = 0, i = this.arguments.length; e < i; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[e]] ? 0 : t[this.arguments[e]];
                            return (t.cx = this.cx), (t.cy = this.cy), (this._undo = new s[d(this.method)](t, !0).at(1)), this;
                        },
                    },
                })),
                (s.Translate = s.invent({
                    parent: s.Matrix,
                    inherit: s.Transformation,
                    create: function (t, e) {
                        this.constructor.apply(this, [].slice.call(arguments));
                    },
                    extend: { arguments: ["transformedX", "transformedY"], method: "translate" },
                })),
                (s.Rotate = s.invent({
                    parent: s.Matrix,
                    inherit: s.Transformation,
                    create: function (t, e) {
                        this.constructor.apply(this, [].slice.call(arguments));
                    },
                    extend: {
                        arguments: ["rotation", "cx", "cy"],
                        method: "rotate",
                        at: function (t) {
                            var e = new s.Matrix().rotate(new s.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                            return this.inversed ? e.inverse() : e;
                        },
                        undo: function (t) {
                            return (this._undo = t), this;
                        },
                    },
                })),
                (s.Scale = s.invent({
                    parent: s.Matrix,
                    inherit: s.Transformation,
                    create: function (t, e) {
                        this.constructor.apply(this, [].slice.call(arguments));
                    },
                    extend: { arguments: ["scaleX", "scaleY", "cx", "cy"], method: "scale" },
                })),
                (s.Skew = s.invent({
                    parent: s.Matrix,
                    inherit: s.Transformation,
                    create: function (t, e) {
                        this.constructor.apply(this, [].slice.call(arguments));
                    },
                    extend: { arguments: ["skewX", "skewY", "cx", "cy"], method: "skew" },
                })),
                s.extend(s.Element, {
                    style: function (e, i) {
                        if (0 == arguments.length) return this.node.style.cssText || "";
                        if (arguments.length < 2)
                            if ("object" === t(e)) for (i in e) this.style(i, e[i]);
                            else {
                                if (!s.regex.isCss.test(e)) return this.node.style[c(e)];
                                for (
                                    e = e
                                        .split(/\s*;\s*/)
                                        .filter(function (t) {
                                            return !!t;
                                        })
                                        .map(function (t) {
                                            return t.split(/\s*:\s*/);
                                        });
                                    (i = e.pop());

                                )
                                    this.style(i[0], i[1]);
                            }
                        else this.node.style[c(e)] = null === i || s.regex.isBlank.test(i) ? "" : i;
                        return this;
                    },
                }),
                (s.Parent = s.invent({
                    create: function (t) {
                        this.constructor.call(this, t);
                    },
                    inherit: s.Element,
                    extend: {
                        children: function () {
                            return s.utils.map(s.utils.filterSVGElements(this.node.childNodes), function (t) {
                                return s.adopt(t);
                            });
                        },
                        add: function (t, e) {
                            return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this;
                        },
                        put: function (t, e) {
                            return this.add(t, e), t;
                        },
                        has: function (t) {
                            return this.index(t) >= 0;
                        },
                        index: function (t) {
                            return [].slice.call(this.node.childNodes).indexOf(t.node);
                        },
                        get: function (t) {
                            return s.adopt(this.node.childNodes[t]);
                        },
                        first: function () {
                            return this.get(0);
                        },
                        last: function () {
                            return this.get(this.node.childNodes.length - 1);
                        },
                        each: function (t, e) {
                            var i,
                                a,
                                n = this.children();
                            for (i = 0, a = n.length; i < a; i++) n[i] instanceof s.Element && t.apply(n[i], [i, n]), e && n[i] instanceof s.Container && n[i].each(t, e);
                            return this;
                        },
                        removeElement: function (t) {
                            return this.node.removeChild(t.node), this;
                        },
                        clear: function () {
                            for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                            return delete this._defs, this;
                        },
                        defs: function () {
                            return this.doc().defs();
                        },
                    },
                })),
                s.extend(s.Parent, {
                    ungroup: function (t, e) {
                        return 0 === e || this instanceof s.Defs || this.node == s.parser.draw
                            ? this
                            : ((t = t || (this instanceof s.Doc ? this : this.parent(s.Parent))),
                              (e = e || 1 / 0),
                              this.each(function () {
                                  return this instanceof s.Defs ? this : this instanceof s.Parent ? this.ungroup(t, e - 1) : this.toParent(t);
                              }),
                              this.node.firstChild || this.remove(),
                              this);
                    },
                    flatten: function (t, e) {
                        return this.ungroup(t, e);
                    },
                }),
                (s.Container = s.invent({
                    create: function (t) {
                        this.constructor.call(this, t);
                    },
                    inherit: s.Parent,
                })),
                (s.ViewBox = s.invent({
                    create: function (e) {
                        var i,
                            a,
                            n,
                            r,
                            o,
                            l,
                            h,
                            c = 1,
                            d = 1,
                            u = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                        if (e instanceof s.Element) {
                            for (l = e, h = e, o = (e.attr("viewBox") || "").match(u), e.bbox, n = new s.Number(e.width()), r = new s.Number(e.height()); "%" == n.unit; )
                                (c *= n.value), (n = new s.Number(l instanceof s.Doc ? l.parent().offsetWidth : l.parent().width())), (l = l.parent());
                            for (; "%" == r.unit; ) (d *= r.value), (r = new s.Number(h instanceof s.Doc ? h.parent().offsetHeight : h.parent().height())), (h = h.parent());
                            (this.x = 0),
                                (this.y = 0),
                                (this.width = n * c),
                                (this.height = r * d),
                                (this.zoom = 1),
                                o &&
                                    ((i = parseFloat(o[0])),
                                    (a = parseFloat(o[1])),
                                    (n = parseFloat(o[2])),
                                    (r = parseFloat(o[3])),
                                    (this.zoom = this.width / this.height > n / r ? this.height / r : this.width / n),
                                    (this.x = i),
                                    (this.y = a),
                                    (this.width = n),
                                    (this.height = r));
                        } else
                            (e =
                                "string" == typeof e
                                    ? e.match(u).map(function (t) {
                                          return parseFloat(t);
                                      })
                                    : Array.isArray(e)
                                    ? e
                                    : "object" === t(e)
                                    ? [e.x, e.y, e.width, e.height]
                                    : 4 == arguments.length
                                    ? [].slice.call(arguments)
                                    : [0, 0, 0, 0]),
                                (this.x = e[0]),
                                (this.y = e[1]),
                                (this.width = e[2]),
                                (this.height = e[3]);
                    },
                    extend: {
                        toString: function () {
                            return this.x + " " + this.y + " " + this.width + " " + this.height;
                        },
                        morph: function (t, e, i, a) {
                            return (this.destination = new s.ViewBox(t, e, i, a)), this;
                        },
                        at: function (t) {
                            return this.destination
                                ? new s.ViewBox([
                                      this.x + (this.destination.x - this.x) * t,
                                      this.y + (this.destination.y - this.y) * t,
                                      this.width + (this.destination.width - this.width) * t,
                                      this.height + (this.destination.height - this.height) * t,
                                  ])
                                : this;
                        },
                    },
                    parent: s.Container,
                    construct: {
                        viewbox: function (t, e, i, a) {
                            return 0 == arguments.length ? new s.ViewBox(this) : this.attr("viewBox", new s.ViewBox(t, e, i, a));
                        },
                    },
                })),
                ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function (t) {
                    s.Element.prototype[t] = function (e) {
                        return s.on(this.node, t, e), this;
                    };
                }),
                (s.listeners = []),
                (s.handlerMap = []),
                (s.listenerId = 0),
                (s.on = function (t, e, i, a, n) {
                    var r = i.bind(a || t.instance || t),
                        o = (s.handlerMap.indexOf(t) + 1 || s.handlerMap.push(t)) - 1,
                        l = e.split(".")[0],
                        h = e.split(".")[1] || "*";
                    (s.listeners[o] = s.listeners[o] || {}),
                        (s.listeners[o][l] = s.listeners[o][l] || {}),
                        (s.listeners[o][l][h] = s.listeners[o][l][h] || {}),
                        i._svgjsListenerId || (i._svgjsListenerId = ++s.listenerId),
                        (s.listeners[o][l][h][i._svgjsListenerId] = r),
                        t.addEventListener(l, r, n || !1);
                }),
                (s.off = function (t, e, i) {
                    var a = s.handlerMap.indexOf(t),
                        n = e && e.split(".")[0],
                        r = e && e.split(".")[1],
                        o = "";
                    if (-1 != a)
                        if (i) {
                            if (("function" == typeof i && (i = i._svgjsListenerId), !i)) return;
                            s.listeners[a][n] && s.listeners[a][n][r || "*"] && (t.removeEventListener(n, s.listeners[a][n][r || "*"][i], !1), delete s.listeners[a][n][r || "*"][i]);
                        } else if (r && n) {
                            if (s.listeners[a][n] && s.listeners[a][n][r]) {
                                for (i in s.listeners[a][n][r]) s.off(t, [n, r].join("."), i);
                                delete s.listeners[a][n][r];
                            }
                        } else if (r) for (e in s.listeners[a]) for (o in s.listeners[a][e]) r === o && s.off(t, [e, r].join("."));
                        else if (n) {
                            if (s.listeners[a][n]) {
                                for (o in s.listeners[a][n]) s.off(t, [n, o].join("."));
                                delete s.listeners[a][n];
                            }
                        } else {
                            for (e in s.listeners[a]) s.off(t, e);
                            delete s.listeners[a], delete s.handlerMap[a];
                        }
                }),
                s.extend(s.Element, {
                    on: function (t, e, i, a) {
                        return s.on(this.node, t, e, i, a), this;
                    },
                    off: function (t, e) {
                        return s.off(this.node, t, e), this;
                    },
                    fire: function (t, i) {
                        return t instanceof e.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent((t = new s.CustomEvent(t, { detail: i, cancelable: !0 }))), (this._event = t), this;
                    },
                    event: function () {
                        return this._event;
                    },
                }),
                (s.Defs = s.invent({ create: "defs", inherit: s.Container })),
                (s.G = s.invent({
                    create: "g",
                    inherit: s.Container,
                    extend: {
                        x: function (t) {
                            return null == t ? this.transform("x") : this.transform({ x: t - this.x() }, !0);
                        },
                        y: function (t) {
                            return null == t ? this.transform("y") : this.transform({ y: t - this.y() }, !0);
                        },
                        cx: function (t) {
                            return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2);
                        },
                        cy: function (t) {
                            return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2);
                        },
                        gbox: function () {
                            var t = this.bbox(),
                                e = this.transform();
                            return (t.x += e.x), (t.x2 += e.x), (t.cx += e.x), (t.y += e.y), (t.y2 += e.y), (t.cy += e.y), t;
                        },
                    },
                    construct: {
                        group: function () {
                            return this.put(new s.G());
                        },
                    },
                })),
                (s.Doc = s.invent({
                    create: function (t) {
                        t &&
                            ("svg" == (t = "string" == typeof t ? i.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, s.create("svg")), t.appendChild(this.node), this.size("100%", "100%")),
                            this.namespace().defs());
                    },
                    inherit: s.Container,
                    extend: {
                        namespace: function () {
                            return this.attr({ xmlns: s.ns, version: "1.1" }).attr("xmlns:xlink", s.xlink, s.xmlns).attr("xmlns:svgjs", s.svgjs, s.xmlns);
                        },
                        defs: function () {
                            var t;
                            this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? (this._defs = s.adopt(t)) : (this._defs = new s.Defs()), this.node.appendChild(this._defs.node));
                            return this._defs;
                        },
                        parent: function () {
                            return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null;
                        },
                        spof: function () {
                            var t = this.node.getScreenCTM();
                            return t && this.style("left", (-t.e % 1) + "px").style("top", (-t.f % 1) + "px"), this;
                        },
                        remove: function () {
                            return this.parent() && this.parent().removeChild(this.node), this;
                        },
                        clear: function () {
                            for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                            return delete this._defs, s.parser.draw && !s.parser.draw.parentNode && this.node.appendChild(s.parser.draw), this;
                        },
                        clone: function (t) {
                            this.writeDataToDom();
                            var e = this.node,
                                i = b(e.cloneNode(!0));
                            return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i;
                        },
                    },
                })),
                s.extend(s.Element, {
                    siblings: function () {
                        return this.parent().children();
                    },
                    position: function () {
                        return this.parent().index(this);
                    },
                    next: function () {
                        return this.siblings()[this.position() + 1];
                    },
                    previous: function () {
                        return this.siblings()[this.position() - 1];
                    },
                    forward: function () {
                        var t = this.position() + 1,
                            e = this.parent();
                        return e.removeElement(this).add(this, t), e instanceof s.Doc && e.node.appendChild(e.defs().node), this;
                    },
                    backward: function () {
                        var t = this.position();
                        return (
                            t > 0 &&
                                this.parent()
                                    .removeElement(this)
                                    .add(this, t - 1),
                            this
                        );
                    },
                    front: function () {
                        var t = this.parent();
                        return t.node.appendChild(this.node), t instanceof s.Doc && t.node.appendChild(t.defs().node), this;
                    },
                    back: function () {
                        return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this;
                    },
                    before: function (t) {
                        t.remove();
                        var e = this.position();
                        return this.parent().add(t, e), this;
                    },
                    after: function (t) {
                        t.remove();
                        var e = this.position();
                        return this.parent().add(t, e + 1), this;
                    },
                }),
                (s.Mask = s.invent({
                    create: function () {
                        this.constructor.call(this, s.create("mask")), (this.targets = []);
                    },
                    inherit: s.Container,
                    extend: {
                        remove: function () {
                            for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unmask();
                            return (this.targets = []), s.Element.prototype.remove.call(this), this;
                        },
                    },
                    construct: {
                        mask: function () {
                            return this.defs().put(new s.Mask());
                        },
                    },
                })),
                s.extend(s.Element, {
                    maskWith: function (t) {
                        return (this.masker = t instanceof s.Mask ? t : this.parent().mask().add(t)), this.masker.targets.push(this), this.attr("mask", 'url("#' + this.masker.attr("id") + '")');
                    },
                    unmask: function () {
                        return delete this.masker, this.attr("mask", null);
                    },
                }),
                (s.ClipPath = s.invent({
                    create: function () {
                        this.constructor.call(this, s.create("clipPath")), (this.targets = []);
                    },
                    inherit: s.Container,
                    extend: {
                        remove: function () {
                            for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unclip();
                            return (this.targets = []), this.parent().removeElement(this), this;
                        },
                    },
                    construct: {
                        clip: function () {
                            return this.defs().put(new s.ClipPath());
                        },
                    },
                })),
                s.extend(s.Element, {
                    clipWith: function (t) {
                        return (this.clipper = t instanceof s.ClipPath ? t : this.parent().clip().add(t)), this.clipper.targets.push(this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")');
                    },
                    unclip: function () {
                        return delete this.clipper, this.attr("clip-path", null);
                    },
                }),
                (s.Gradient = s.invent({
                    create: function (t) {
                        this.constructor.call(this, s.create(t + "Gradient")), (this.type = t);
                    },
                    inherit: s.Container,
                    extend: {
                        at: function (t, e, i) {
                            return this.put(new s.Stop()).update(t, e, i);
                        },
                        update: function (t) {
                            return this.clear(), "function" == typeof t && t.call(this, this), this;
                        },
                        fill: function () {
                            return "url(#" + this.id() + ")";
                        },
                        toString: function () {
                            return this.fill();
                        },
                        attr: function (t, e, i) {
                            return "transform" == t && (t = "gradientTransform"), s.Container.prototype.attr.call(this, t, e, i);
                        },
                    },
                    construct: {
                        gradient: function (t, e) {
                            return this.defs().gradient(t, e);
                        },
                    },
                })),
                s.extend(s.Gradient, s.FX, {
                    from: function (t, e) {
                        return "radial" == (this._target || this).type ? this.attr({ fx: new s.Number(t), fy: new s.Number(e) }) : this.attr({ x1: new s.Number(t), y1: new s.Number(e) });
                    },
                    to: function (t, e) {
                        return "radial" == (this._target || this).type ? this.attr({ cx: new s.Number(t), cy: new s.Number(e) }) : this.attr({ x2: new s.Number(t), y2: new s.Number(e) });
                    },
                }),
                s.extend(s.Defs, {
                    gradient: function (t, e) {
                        return this.put(new s.Gradient(t)).update(e);
                    },
                }),
                (s.Stop = s.invent({
                    create: "stop",
                    inherit: s.Element,
                    extend: {
                        update: function (t) {
                            return (
                                ("number" == typeof t || t instanceof s.Number) && (t = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }),
                                null != t.opacity && this.attr("stop-opacity", t.opacity),
                                null != t.color && this.attr("stop-color", t.color),
                                null != t.offset && this.attr("offset", new s.Number(t.offset)),
                                this
                            );
                        },
                    },
                })),
                (s.Pattern = s.invent({
                    create: "pattern",
                    inherit: s.Container,
                    extend: {
                        fill: function () {
                            return "url(#" + this.id() + ")";
                        },
                        update: function (t) {
                            return this.clear(), "function" == typeof t && t.call(this, this), this;
                        },
                        toString: function () {
                            return this.fill();
                        },
                        attr: function (t, e, i) {
                            return "transform" == t && (t = "patternTransform"), s.Container.prototype.attr.call(this, t, e, i);
                        },
                    },
                    construct: {
                        pattern: function (t, e, i) {
                            return this.defs().pattern(t, e, i);
                        },
                    },
                })),
                s.extend(s.Defs, {
                    pattern: function (t, e, i) {
                        return this.put(new s.Pattern()).update(i).attr({ x: 0, y: 0, width: t, height: e, patternUnits: "userSpaceOnUse" });
                    },
                }),
                (s.Shape = s.invent({
                    create: function (t) {
                        this.constructor.call(this, t);
                    },
                    inherit: s.Element,
                })),
                (s.Bare = s.invent({
                    create: function (t, e) {
                        if ((this.constructor.call(this, s.create(t)), e)) for (var i in e.prototype) "function" == typeof e.prototype[i] && (this[i] = e.prototype[i]);
                    },
                    inherit: s.Element,
                    extend: {
                        words: function (t) {
                            for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
                            return this.node.appendChild(i.createTextNode(t)), this;
                        },
                    },
                })),
                s.extend(s.Parent, {
                    element: function (t, e) {
                        return this.put(new s.Bare(t, e));
                    },
                }),
                (s.Symbol = s.invent({
                    create: "symbol",
                    inherit: s.Container,
                    construct: {
                        symbol: function () {
                            return this.put(new s.Symbol());
                        },
                    },
                })),
                (s.Use = s.invent({
                    create: "use",
                    inherit: s.Shape,
                    extend: {
                        element: function (t, e) {
                            return this.attr("href", (e || "") + "#" + t, s.xlink);
                        },
                    },
                    construct: {
                        use: function (t, e) {
                            return this.put(new s.Use()).element(t, e);
                        },
                    },
                })),
                (s.Rect = s.invent({
                    create: "rect",
                    inherit: s.Shape,
                    construct: {
                        rect: function (t, e) {
                            return this.put(new s.Rect()).size(t, e);
                        },
                    },
                })),
                (s.Circle = s.invent({
                    create: "circle",
                    inherit: s.Shape,
                    construct: {
                        circle: function (t) {
                            return this.put(new s.Circle()).rx(new s.Number(t).divide(2)).move(0, 0);
                        },
                    },
                })),
                s.extend(s.Circle, s.FX, {
                    rx: function (t) {
                        return this.attr("r", t);
                    },
                    ry: function (t) {
                        return this.rx(t);
                    },
                }),
                (s.Ellipse = s.invent({
                    create: "ellipse",
                    inherit: s.Shape,
                    construct: {
                        ellipse: function (t, e) {
                            return this.put(new s.Ellipse()).size(t, e).move(0, 0);
                        },
                    },
                })),
                s.extend(s.Ellipse, s.Rect, s.FX, {
                    rx: function (t) {
                        return this.attr("rx", t);
                    },
                    ry: function (t) {
                        return this.attr("ry", t);
                    },
                }),
                s.extend(s.Circle, s.Ellipse, {
                    x: function (t) {
                        return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
                    },
                    y: function (t) {
                        return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
                    },
                    cx: function (t) {
                        return null == t ? this.attr("cx") : this.attr("cx", t);
                    },
                    cy: function (t) {
                        return null == t ? this.attr("cy") : this.attr("cy", t);
                    },
                    width: function (t) {
                        return null == t ? 2 * this.rx() : this.rx(new s.Number(t).divide(2));
                    },
                    height: function (t) {
                        return null == t ? 2 * this.ry() : this.ry(new s.Number(t).divide(2));
                    },
                    size: function (t, e) {
                        var i = g(this, t, e);
                        return this.rx(new s.Number(i.width).divide(2)).ry(new s.Number(i.height).divide(2));
                    },
                }),
                (s.Line = s.invent({
                    create: "line",
                    inherit: s.Shape,
                    extend: {
                        array: function () {
                            return new s.PointArray([
                                [this.attr("x1"), this.attr("y1")],
                                [this.attr("x2"), this.attr("y2")],
                            ]);
                        },
                        plot: function (t, e, i, a) {
                            return null == t ? this.array() : ((t = void 0 !== e ? { x1: t, y1: e, x2: i, y2: a } : new s.PointArray(t).toLine()), this.attr(t));
                        },
                        move: function (t, e) {
                            return this.attr(this.array().move(t, e).toLine());
                        },
                        size: function (t, e) {
                            var i = g(this, t, e);
                            return this.attr(this.array().size(i.width, i.height).toLine());
                        },
                    },
                    construct: {
                        line: function (t, e, i, a) {
                            return s.Line.prototype.plot.apply(this.put(new s.Line()), null != t ? [t, e, i, a] : [0, 0, 0, 0]);
                        },
                    },
                })),
                (s.Polyline = s.invent({
                    create: "polyline",
                    inherit: s.Shape,
                    construct: {
                        polyline: function (t) {
                            return this.put(new s.Polyline()).plot(t || new s.PointArray());
                        },
                    },
                })),
                (s.Polygon = s.invent({
                    create: "polygon",
                    inherit: s.Shape,
                    construct: {
                        polygon: function (t) {
                            return this.put(new s.Polygon()).plot(t || new s.PointArray());
                        },
                    },
                })),
                s.extend(s.Polyline, s.Polygon, {
                    array: function () {
                        return this._array || (this._array = new s.PointArray(this.attr("points")));
                    },
                    plot: function (t) {
                        return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : (this._array = new s.PointArray(t)));
                    },
                    clear: function () {
                        return delete this._array, this;
                    },
                    move: function (t, e) {
                        return this.attr("points", this.array().move(t, e));
                    },
                    size: function (t, e) {
                        var i = g(this, t, e);
                        return this.attr("points", this.array().size(i.width, i.height));
                    },
                }),
                s.extend(s.Line, s.Polyline, s.Polygon, {
                    morphArray: s.PointArray,
                    x: function (t) {
                        return null == t ? this.bbox().x : this.move(t, this.bbox().y);
                    },
                    y: function (t) {
                        return null == t ? this.bbox().y : this.move(this.bbox().x, t);
                    },
                    width: function (t) {
                        var e = this.bbox();
                        return null == t ? e.width : this.size(t, e.height);
                    },
                    height: function (t) {
                        var e = this.bbox();
                        return null == t ? e.height : this.size(e.width, t);
                    },
                }),
                (s.Path = s.invent({
                    create: "path",
                    inherit: s.Shape,
                    extend: {
                        morphArray: s.PathArray,
                        array: function () {
                            return this._array || (this._array = new s.PathArray(this.attr("d")));
                        },
                        plot: function (t) {
                            return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : (this._array = new s.PathArray(t)));
                        },
                        clear: function () {
                            return delete this._array, this;
                        },
                        move: function (t, e) {
                            return this.attr("d", this.array().move(t, e));
                        },
                        x: function (t) {
                            return null == t ? this.bbox().x : this.move(t, this.bbox().y);
                        },
                        y: function (t) {
                            return null == t ? this.bbox().y : this.move(this.bbox().x, t);
                        },
                        size: function (t, e) {
                            var i = g(this, t, e);
                            return this.attr("d", this.array().size(i.width, i.height));
                        },
                        width: function (t) {
                            return null == t ? this.bbox().width : this.size(t, this.bbox().height);
                        },
                        height: function (t) {
                            return null == t ? this.bbox().height : this.size(this.bbox().width, t);
                        },
                    },
                    construct: {
                        path: function (t) {
                            return this.put(new s.Path()).plot(t || new s.PathArray());
                        },
                    },
                })),
                (s.Image = s.invent({
                    create: "image",
                    inherit: s.Shape,
                    extend: {
                        load: function (t) {
                            if (!t) return this;
                            var i = this,
                                a = new e.Image();
                            return (
                                s.on(a, "load", function () {
                                    s.off(a);
                                    var e = i.parent(s.Pattern);
                                    null !== e &&
                                        (0 == i.width() && 0 == i.height() && i.size(a.width, a.height),
                                        e && 0 == e.width() && 0 == e.height() && e.size(i.width(), i.height()),
                                        "function" == typeof i._loaded && i._loaded.call(i, { width: a.width, height: a.height, ratio: a.width / a.height, url: t }));
                                }),
                                s.on(a, "error", function (t) {
                                    s.off(a), "function" == typeof i._error && i._error.call(i, t);
                                }),
                                this.attr("href", (a.src = this.src = t), s.xlink)
                            );
                        },
                        loaded: function (t) {
                            return (this._loaded = t), this;
                        },
                        error: function (t) {
                            return (this._error = t), this;
                        },
                    },
                    construct: {
                        image: function (t, e, i) {
                            return this.put(new s.Image())
                                .load(t)
                                .size(e || 0, i || e || 0);
                        },
                    },
                })),
                (s.Text = s.invent({
                    create: function () {
                        this.constructor.call(this, s.create("text")), (this.dom.leading = new s.Number(1.3)), (this._rebuild = !0), (this._build = !1), this.attr("font-family", s.defaults.attrs["font-family"]);
                    },
                    inherit: s.Shape,
                    extend: {
                        x: function (t) {
                            return null == t ? this.attr("x") : this.attr("x", t);
                        },
                        y: function (t) {
                            var e = this.attr("y"),
                                i = "number" == typeof e ? e - this.bbox().y : 0;
                            return null == t ? ("number" == typeof e ? e - i : e) : this.attr("y", "number" == typeof t.valueOf() ? t + i : t);
                        },
                        cx: function (t) {
                            return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2);
                        },
                        cy: function (t) {
                            return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2);
                        },
                        text: function (t) {
                            if (void 0 === t) {
                                t = "";
                                for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == s.adopt(e[i]).dom.newLined && (t += "\n"), (t += e[i].textContent);
                                return t;
                            }
                            if ((this.clear().build(!0), "function" == typeof t)) t.call(this, this);
                            else {
                                i = 0;
                                for (var n = (t = t.split("\n")).length; i < n; i++) this.tspan(t[i]).newLine();
                            }
                            return this.build(!1).rebuild();
                        },
                        size: function (t) {
                            return this.attr("font-size", t).rebuild();
                        },
                        leading: function (t) {
                            return null == t ? this.dom.leading : ((this.dom.leading = new s.Number(t)), this.rebuild());
                        },
                        lines: function () {
                            var t = ((this.textPath && this.textPath()) || this).node,
                                e = s.utils.map(s.utils.filterSVGElements(t.childNodes), function (t) {
                                    return s.adopt(t);
                                });
                            return new s.Set(e);
                        },
                        rebuild: function (t) {
                            if (("boolean" == typeof t && (this._rebuild = t), this._rebuild)) {
                                var e = this,
                                    i = 0,
                                    a = this.dom.leading * new s.Number(this.attr("font-size"));
                                this.lines().each(function () {
                                    this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? (i += a) : (this.attr("dy", a + i), (i = 0)));
                                }),
                                    this.fire("rebuild");
                            }
                            return this;
                        },
                        build: function (t) {
                            return (this._build = !!t), this;
                        },
                        setData: function (t) {
                            return (this.dom = t), (this.dom.leading = new s.Number(t.leading || 1.3)), this;
                        },
                    },
                    construct: {
                        text: function (t) {
                            return this.put(new s.Text()).text(t);
                        },
                        plain: function (t) {
                            return this.put(new s.Text()).plain(t);
                        },
                    },
                })),
                (s.Tspan = s.invent({
                    create: "tspan",
                    inherit: s.Shape,
                    extend: {
                        text: function (t) {
                            return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this);
                        },
                        dx: function (t) {
                            return this.attr("dx", t);
                        },
                        dy: function (t) {
                            return this.attr("dy", t);
                        },
                        newLine: function () {
                            var t = this.parent(s.Text);
                            return (this.dom.newLined = !0), this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x());
                        },
                    },
                })),
                s.extend(s.Text, s.Tspan, {
                    plain: function (t) {
                        return !1 === this._build && this.clear(), this.node.appendChild(i.createTextNode(t)), this;
                    },
                    tspan: function (t) {
                        var e = ((this.textPath && this.textPath()) || this).node,
                            i = new s.Tspan();
                        return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t);
                    },
                    clear: function () {
                        for (var t = ((this.textPath && this.textPath()) || this).node; t.hasChildNodes(); ) t.removeChild(t.lastChild);
                        return this;
                    },
                    length: function () {
                        return this.node.getComputedTextLength();
                    },
                }),
                (s.TextPath = s.invent({
                    create: "textPath",
                    inherit: s.Parent,
                    parent: s.Text,
                    construct: {
                        morphArray: s.PathArray,
                        path: function (t) {
                            for (var e = new s.TextPath(), i = this.doc().defs().path(t); this.node.hasChildNodes(); ) e.node.appendChild(this.node.firstChild);
                            return this.node.appendChild(e.node), e.attr("href", "#" + i, s.xlink), this;
                        },
                        array: function () {
                            var t = this.track();
                            return t ? t.array() : null;
                        },
                        plot: function (t) {
                            var e = this.track(),
                                i = null;
                            return e && (i = e.plot(t)), null == t ? i : this;
                        },
                        track: function () {
                            var t = this.textPath();
                            if (t) return t.reference("href");
                        },
                        textPath: function () {
                            if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return s.adopt(this.node.firstChild);
                        },
                    },
                })),
                (s.Nested = s.invent({
                    create: function () {
                        this.constructor.call(this, s.create("svg")), this.style("overflow", "visible");
                    },
                    inherit: s.Container,
                    construct: {
                        nested: function () {
                            return this.put(new s.Nested());
                        },
                    },
                })),
                (s.A = s.invent({
                    create: "a",
                    inherit: s.Container,
                    extend: {
                        to: function (t) {
                            return this.attr("href", t, s.xlink);
                        },
                        show: function (t) {
                            return this.attr("show", t, s.xlink);
                        },
                        target: function (t) {
                            return this.attr("target", t);
                        },
                    },
                    construct: {
                        link: function (t) {
                            return this.put(new s.A()).to(t);
                        },
                    },
                })),
                s.extend(s.Element, {
                    linkTo: function (t) {
                        var e = new s.A();
                        return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this);
                    },
                }),
                (s.Marker = s.invent({
                    create: "marker",
                    inherit: s.Container,
                    extend: {
                        width: function (t) {
                            return this.attr("markerWidth", t);
                        },
                        height: function (t) {
                            return this.attr("markerHeight", t);
                        },
                        ref: function (t, e) {
                            return this.attr("refX", t).attr("refY", e);
                        },
                        update: function (t) {
                            return this.clear(), "function" == typeof t && t.call(this, this), this;
                        },
                        toString: function () {
                            return "url(#" + this.id() + ")";
                        },
                    },
                    construct: {
                        marker: function (t, e, i) {
                            return this.defs().marker(t, e, i);
                        },
                    },
                })),
                s.extend(s.Defs, {
                    marker: function (t, e, i) {
                        return this.put(new s.Marker())
                            .size(t, e)
                            .ref(t / 2, e / 2)
                            .viewbox(0, 0, t, e)
                            .attr("orient", "auto")
                            .update(i);
                    },
                }),
                s.extend(s.Line, s.Polyline, s.Polygon, s.Path, {
                    marker: function (t, e, i, a) {
                        var n = ["marker"];
                        return "all" != t && n.push(t), (n = n.join("-")), (t = arguments[1] instanceof s.Marker ? arguments[1] : this.doc().marker(e, i, a)), this.attr(n, t);
                    },
                });
            var l = {
                stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                fill: ["color", "opacity", "rule"],
                prefix: function (t, e) {
                    return "color" == e ? t : t + "-" + e;
                },
            };
            function h(t, e, i, a) {
                return i + a.replace(s.regex.dots, " .");
            }
            function c(t) {
                return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase();
                });
            }
            function d(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }
            function u(t) {
                var e = t.toString(16);
                return 1 == e.length ? "0" + e : e;
            }
            function g(t, e, i) {
                if (null == e || null == i) {
                    var s = t.bbox();
                    null == e ? (e = (s.width / s.height) * i) : null == i && (i = (s.height / s.width) * e);
                }
                return { width: e, height: i };
            }
            function f(t, e, i) {
                return { x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0 };
            }
            function p(t) {
                return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
            }
            function x(t, e) {
                (t.cx = null == t.cx ? e.bbox().cx : t.cx), (t.cy = null == t.cy ? e.bbox().cy : t.cy);
            }
            function b(t) {
                for (var i = t.childNodes.length - 1; i >= 0; i--) t.childNodes[i] instanceof e.SVGElement && b(t.childNodes[i]);
                return s.adopt(t).id(s.eid(t.nodeName));
            }
            function m(t) {
                return null == t.x && ((t.x = 0), (t.y = 0), (t.width = 0), (t.height = 0)), (t.w = t.width), (t.h = t.height), (t.x2 = t.x + t.width), (t.y2 = t.y + t.height), (t.cx = t.x + t.width / 2), (t.cy = t.y + t.height / 2), t;
            }
            function v(t) {
                return Math.abs(t) > 1e-37 ? t : 0;
            }
            ["fill", "stroke"].forEach(function (t) {
                var e,
                    i = {};
                (i[t] = function (i) {
                    if (void 0 === i) return this;
                    if ("string" == typeof i || s.Color.isRgb(i) || (i && "function" == typeof i.fill)) this.attr(t, i);
                    else for (e = l[t].length - 1; e >= 0; e--) null != i[l[t][e]] && this.attr(l.prefix(t, l[t][e]), i[l[t][e]]);
                    return this;
                }),
                    s.extend(s.Element, s.FX, i);
            }),
                s.extend(s.Element, s.FX, {
                    rotate: function (t, e, i) {
                        return this.transform({ rotation: t, cx: e, cy: i });
                    },
                    skew: function (t, e, i, s) {
                        return 1 == arguments.length || 3 == arguments.length ? this.transform({ skew: t, cx: e, cy: i }) : this.transform({ skewX: t, skewY: e, cx: i, cy: s });
                    },
                    scale: function (t, e, i, s) {
                        return 1 == arguments.length || 3 == arguments.length ? this.transform({ scale: t, cx: e, cy: i }) : this.transform({ scaleX: t, scaleY: e, cx: i, cy: s });
                    },
                    translate: function (t, e) {
                        return this.transform({ x: t, y: e });
                    },
                    flip: function (t, e) {
                        return (e = "number" == typeof t ? t : e), this.transform({ flip: t || "both", offset: e });
                    },
                    matrix: function (t) {
                        return this.attr("transform", new s.Matrix(6 == arguments.length ? [].slice.call(arguments) : t));
                    },
                    opacity: function (t) {
                        return this.attr("opacity", t);
                    },
                    dx: function (t) {
                        return this.x(new s.Number(t).plus(this instanceof s.FX ? 0 : this.x()), !0);
                    },
                    dy: function (t) {
                        return this.y(new s.Number(t).plus(this instanceof s.FX ? 0 : this.y()), !0);
                    },
                    dmove: function (t, e) {
                        return this.dx(t).dy(e);
                    },
                }),
                s.extend(s.Rect, s.Ellipse, s.Circle, s.Gradient, s.FX, {
                    radius: function (t, e) {
                        var i = (this._target || this).type;
                        return "radial" == i || "circle" == i ? this.attr("r", new s.Number(t)) : this.rx(t).ry(null == e ? t : e);
                    },
                }),
                s.extend(s.Path, {
                    length: function () {
                        return this.node.getTotalLength();
                    },
                    pointAt: function (t) {
                        return this.node.getPointAtLength(t);
                    },
                }),
                s.extend(s.Parent, s.Text, s.Tspan, s.FX, {
                    font: function (e, i) {
                        if ("object" === t(e)) for (i in e) this.font(i, e[i]);
                        return "leading" == e
                            ? this.leading(i)
                            : "anchor" == e
                            ? this.attr("text-anchor", i)
                            : "size" == e || "family" == e || "weight" == e || "stretch" == e || "variant" == e || "style" == e
                            ? this.attr("font-" + e, i)
                            : this.attr(e, i);
                    },
                }),
                (s.Set = s.invent({
                    create: function (t) {
                        Array.isArray(t) ? (this.members = t) : this.clear();
                    },
                    extend: {
                        add: function () {
                            var t,
                                e,
                                i = [].slice.call(arguments);
                            for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
                            return this;
                        },
                        remove: function (t) {
                            var e = this.index(t);
                            return e > -1 && this.members.splice(e, 1), this;
                        },
                        each: function (t) {
                            for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                            return this;
                        },
                        clear: function () {
                            return (this.members = []), this;
                        },
                        length: function () {
                            return this.members.length;
                        },
                        has: function (t) {
                            return this.index(t) >= 0;
                        },
                        index: function (t) {
                            return this.members.indexOf(t);
                        },
                        get: function (t) {
                            return this.members[t];
                        },
                        first: function () {
                            return this.get(0);
                        },
                        last: function () {
                            return this.get(this.members.length - 1);
                        },
                        valueOf: function () {
                            return this.members;
                        },
                        bbox: function () {
                            if (0 == this.members.length) return new s.RBox();
                            var t = this.members[0].rbox(this.members[0].doc());
                            return (
                                this.each(function () {
                                    t = t.merge(this.rbox(this.doc()));
                                }),
                                t
                            );
                        },
                    },
                    construct: {
                        set: function (t) {
                            return new s.Set(t);
                        },
                    },
                })),
                (s.FX.Set = s.invent({
                    create: function (t) {
                        this.set = t;
                    },
                })),
                (s.Set.inherit = function () {
                    var t = [];
                    for (var e in s.Shape.prototype) "function" == typeof s.Shape.prototype[e] && "function" != typeof s.Set.prototype[e] && t.push(e);
                    for (var e in (t.forEach(function (t) {
                        s.Set.prototype[t] = function () {
                            for (var e = 0, i = this.members.length; e < i; e++) this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
                            return "animate" == t ? this.fx || (this.fx = new s.FX.Set(this)) : this;
                        };
                    }),
                    (t = []),
                    s.FX.prototype))
                        "function" == typeof s.FX.prototype[e] && "function" != typeof s.FX.Set.prototype[e] && t.push(e);
                    t.forEach(function (t) {
                        s.FX.Set.prototype[t] = function () {
                            for (var e = 0, i = this.set.members.length; e < i; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                            return this;
                        };
                    });
                }),
                s.extend(s.Element, {
                    data: function (e, i, s) {
                        if ("object" === t(e)) for (i in e) this.data(i, e[i]);
                        else if (arguments.length < 2)
                            try {
                                return JSON.parse(this.attr("data-" + e));
                            } catch (t) {
                                return this.attr("data-" + e);
                            }
                        else this.attr("data-" + e, null === i ? null : !0 === s || "string" == typeof i || "number" == typeof i ? i : JSON.stringify(i));
                        return this;
                    },
                }),
                s.extend(s.Element, {
                    remember: function (e, i) {
                        if ("object" === t(arguments[0])) for (var i in e) this.remember(i, e[i]);
                        else {
                            if (1 == arguments.length) return this.memory()[e];
                            this.memory()[e] = i;
                        }
                        return this;
                    },
                    forget: function () {
                        if (0 == arguments.length) this._memory = {};
                        else for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                        return this;
                    },
                    memory: function () {
                        return this._memory || (this._memory = {});
                    },
                }),
                (s.get = function (t) {
                    var e = i.getElementById(
                        (function (t) {
                            var e = (t || "").toString().match(s.regex.reference);
                            if (e) return e[1];
                        })(t) || t
                    );
                    return s.adopt(e);
                }),
                (s.select = function (t, e) {
                    return new s.Set(
                        s.utils.map((e || i).querySelectorAll(t), function (t) {
                            return s.adopt(t);
                        })
                    );
                }),
                s.extend(s.Parent, {
                    select: function (t) {
                        return s.select(t, this.node);
                    },
                });
            var y = "abcdef".split("");
            if ("function" != typeof e.CustomEvent) {
                var w = function (t, e) {
                    e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
                    var s = i.createEvent("CustomEvent");
                    return s.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), s;
                };
                (w.prototype = e.Event.prototype), (s.CustomEvent = w);
            } else s.CustomEvent = e.CustomEvent;
            return (
                (function (t) {
                    for (var i = 0, s = ["moz", "webkit"], a = 0; a < s.length && !e.requestAnimationFrame; ++a)
                        (t.requestAnimationFrame = t[s[a] + "RequestAnimationFrame"]), (t.cancelAnimationFrame = t[s[a] + "CancelAnimationFrame"] || t[s[a] + "CancelRequestAnimationFrame"]);
                    (t.requestAnimationFrame =
                        t.requestAnimationFrame ||
                        function (e) {
                            var s = new Date().getTime(),
                                a = Math.max(0, 16 - (s - i)),
                                n = t.setTimeout(function () {
                                    e(s + a);
                                }, a);
                            return (i = s + a), n;
                        }),
                        (t.cancelAnimationFrame = t.cancelAnimationFrame || t.clearTimeout);
                })(e),
                s
            );
        }),
        "function" == typeof define && define.amd
            ? define(function () {
                  return at(st, st.document);
              })
            : "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module
            ? (module.exports = st.document
                  ? at(st, st.document)
                  : function (t) {
                        return at(t, t.document);
                    })
            : (st.SVG = at(st, st.document)),
        function () {
            (SVG.Filter = SVG.invent({
                create: "filter",
                inherit: SVG.Parent,
                extend: {
                    source: "SourceGraphic",
                    sourceAlpha: "SourceAlpha",
                    background: "BackgroundImage",
                    backgroundAlpha: "BackgroundAlpha",
                    fill: "FillPaint",
                    stroke: "StrokePaint",
                    autoSetIn: !0,
                    put: function (t, e) {
                        return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t;
                    },
                    blend: function (t, e, i) {
                        return this.put(new SVG.BlendEffect(t, e, i));
                    },
                    colorMatrix: function (t, e) {
                        return this.put(new SVG.ColorMatrixEffect(t, e));
                    },
                    convolveMatrix: function (t) {
                        return this.put(new SVG.ConvolveMatrixEffect(t));
                    },
                    componentTransfer: function (t) {
                        return this.put(new SVG.ComponentTransferEffect(t));
                    },
                    composite: function (t, e, i) {
                        return this.put(new SVG.CompositeEffect(t, e, i));
                    },
                    flood: function (t, e) {
                        return this.put(new SVG.FloodEffect(t, e));
                    },
                    offset: function (t, e) {
                        return this.put(new SVG.OffsetEffect(t, e));
                    },
                    image: function (t) {
                        return this.put(new SVG.ImageEffect(t));
                    },
                    merge: function () {
                        var t = [void 0];
                        for (var e in arguments) t.push(arguments[e]);
                        return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))());
                    },
                    gaussianBlur: function (t, e) {
                        return this.put(new SVG.GaussianBlurEffect(t, e));
                    },
                    morphology: function (t, e) {
                        return this.put(new SVG.MorphologyEffect(t, e));
                    },
                    diffuseLighting: function (t, e, i) {
                        return this.put(new SVG.DiffuseLightingEffect(t, e, i));
                    },
                    displacementMap: function (t, e, i, s, a) {
                        return this.put(new SVG.DisplacementMapEffect(t, e, i, s, a));
                    },
                    specularLighting: function (t, e, i, s) {
                        return this.put(new SVG.SpecularLightingEffect(t, e, i, s));
                    },
                    tile: function () {
                        return this.put(new SVG.TileEffect());
                    },
                    turbulence: function (t, e, i, s, a) {
                        return this.put(new SVG.TurbulenceEffect(t, e, i, s, a));
                    },
                    toString: function () {
                        return "url(#" + this.attr("id") + ")";
                    },
                },
            })),
                SVG.extend(SVG.Defs, {
                    filter: function (t) {
                        var e = this.put(new SVG.Filter());
                        return "function" == typeof t && t.call(e, e), e;
                    },
                }),
                SVG.extend(SVG.Container, {
                    filter: function (t) {
                        return this.defs().filter(t);
                    },
                }),
                SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                    filter: function (t) {
                        return (
                            (this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t)), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                        );
                    },
                    unfilter: function (t) {
                        return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
                    },
                }),
                (SVG.Effect = SVG.invent({
                    create: function () {
                        this.constructor.call(this);
                    },
                    inherit: SVG.Element,
                    extend: {
                        in: function (t) {
                            return null == t
                                ? (this.parent() &&
                                      this.parent()
                                          .select('[result="' + this.attr("in") + '"]')
                                          .get(0)) ||
                                      this.attr("in")
                                : this.attr("in", t);
                        },
                        result: function (t) {
                            return null == t ? this.attr("result") : this.attr("result", t);
                        },
                        toString: function () {
                            return this.result();
                        },
                    },
                })),
                (SVG.ParentEffect = SVG.invent({
                    create: function () {
                        this.constructor.call(this);
                    },
                    inherit: SVG.Parent,
                    extend: {
                        in: function (t) {
                            return null == t
                                ? (this.parent() &&
                                      this.parent()
                                          .select('[result="' + this.attr("in") + '"]')
                                          .get(0)) ||
                                      this.attr("in")
                                : this.attr("in", t);
                        },
                        result: function (t) {
                            return null == t ? this.attr("result") : this.attr("result", t);
                        },
                        toString: function () {
                            return this.result();
                        },
                    },
                }));
            var t = {
                blend: function (t, e) {
                    return this.parent() && this.parent().blend(this, t, e);
                },
                colorMatrix: function (t, e) {
                    return this.parent() && this.parent().colorMatrix(t, e).in(this);
                },
                convolveMatrix: function (t) {
                    return this.parent() && this.parent().convolveMatrix(t).in(this);
                },
                componentTransfer: function (t) {
                    return this.parent() && this.parent().componentTransfer(t).in(this);
                },
                composite: function (t, e) {
                    return this.parent() && this.parent().composite(this, t, e);
                },
                flood: function (t, e) {
                    return this.parent() && this.parent().flood(t, e);
                },
                offset: function (t, e) {
                    return this.parent() && this.parent().offset(t, e).in(this);
                },
                image: function (t) {
                    return this.parent() && this.parent().image(t);
                },
                merge: function () {
                    return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
                },
                gaussianBlur: function (t, e) {
                    return this.parent() && this.parent().gaussianBlur(t, e).in(this);
                },
                morphology: function (t, e) {
                    return this.parent() && this.parent().morphology(t, e).in(this);
                },
                diffuseLighting: function (t, e, i) {
                    return this.parent() && this.parent().diffuseLighting(t, e, i).in(this);
                },
                displacementMap: function (t, e, i, s) {
                    return this.parent() && this.parent().displacementMap(this, t, e, i, s);
                },
                specularLighting: function (t, e, i, s) {
                    return this.parent() && this.parent().specularLighting(t, e, i, s).in(this);
                },
                tile: function () {
                    return this.parent() && this.parent().tile().in(this);
                },
                turbulence: function (t, e, i, s, a) {
                    return this.parent() && this.parent().turbulence(t, e, i, s, a).in(this);
                },
            };
            SVG.extend(SVG.Effect, t),
                SVG.extend(SVG.ParentEffect, t),
                (SVG.ChildEffect = SVG.invent({
                    create: function () {
                        this.constructor.call(this);
                    },
                    inherit: SVG.Element,
                    extend: {
                        in: function (t) {
                            this.attr("in", t);
                        },
                    },
                }));
            var e = {
                    blend: function (t, e, i) {
                        this.attr({ in: t, in2: e, mode: i || "normal" });
                    },
                    colorMatrix: function (t, e) {
                        "matrix" == t && (e = a(e)), this.attr({ type: t, values: void 0 === e ? null : e });
                    },
                    convolveMatrix: function (t) {
                        (t = a(t)), this.attr({ order: Math.sqrt(t.split(" ").length), kernelMatrix: t });
                    },
                    composite: function (t, e, i) {
                        this.attr({ in: t, in2: e, operator: i });
                    },
                    flood: function (t, e) {
                        this.attr("flood-color", t), null != e && this.attr("flood-opacity", e);
                    },
                    offset: function (t, e) {
                        this.attr({ dx: t, dy: e });
                    },
                    image: function (t) {
                        this.attr("href", t, SVG.xlink);
                    },
                    displacementMap: function (t, e, i, s, a) {
                        this.attr({ in: t, in2: e, scale: i, xChannelSelector: s, yChannelSelector: a });
                    },
                    gaussianBlur: function (t, e) {
                        null != t || null != e
                            ? this.attr(
                                  "stdDeviation",
                                  (function (t) {
                                      if (!Array.isArray(t)) return t;
                                      for (var e = 0, i = t.length, s = []; e < i; e++) s.push(t[e]);
                                      return s.join(" ");
                                  })(Array.prototype.slice.call(arguments))
                              )
                            : this.attr("stdDeviation", "0 0");
                    },
                    morphology: function (t, e) {
                        this.attr({ operator: t, radius: e });
                    },
                    tile: function () {},
                    turbulence: function (t, e, i, s, a) {
                        this.attr({ numOctaves: e, seed: i, stitchTiles: s, baseFrequency: t, type: a });
                    },
                },
                i = {
                    merge: function () {
                        var t;
                        if (arguments[0] instanceof SVG.Set) {
                            var e = this;
                            arguments[0].each(function (t) {
                                this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this));
                            });
                        } else {
                            t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                            for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]));
                        }
                    },
                    componentTransfer: function (t) {
                        if (
                            ((this.rgb = new SVG.Set()),
                            ["r", "g", "b", "a"].forEach(
                                function (t) {
                                    (this[t] = new SVG["Func" + t.toUpperCase()]("identity")), this.rgb.add(this[t]), this.node.appendChild(this[t].node);
                                }.bind(this)
                            ),
                            t)
                        )
                            for (var e in (t.rgb &&
                                (["r", "g", "b"].forEach(
                                    function (e) {
                                        this[e].attr(t.rgb);
                                    }.bind(this)
                                ),
                                delete t.rgb),
                            t))
                                this[e].attr(t[e]);
                    },
                    diffuseLighting: function (t, e, i) {
                        this.attr({ surfaceScale: t, diffuseConstant: e, kernelUnitLength: i });
                    },
                    specularLighting: function (t, e, i, s) {
                        this.attr({ surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: s });
                    },
                },
                s = {
                    distantLight: function (t, e) {
                        this.attr({ azimuth: t, elevation: e });
                    },
                    pointLight: function (t, e, i) {
                        this.attr({ x: t, y: e, z: i });
                    },
                    spotLight: function (t, e, i, s, a, n) {
                        this.attr({ x: t, y: e, z: i, pointsAtX: s, pointsAtY: a, pointsAtZ: n });
                    },
                    mergeNode: function (t) {
                        this.attr("in", t);
                    },
                };
            function a(t) {
                return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
            }
            function n() {
                var t = function () {};
                for (var e in ("function" == typeof arguments[arguments.length - 1] && ((t = arguments[arguments.length - 1]), Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments))
                    for (var i in arguments[e]) t(arguments[e][i], i, arguments[e]);
            }
            ["r", "g", "b", "a"].forEach(function (t) {
                s["Func" + t.toUpperCase()] = function (t) {
                    switch ((this.attr("type", t), t)) {
                        case "table":
                            this.attr("tableValues", arguments[1]);
                            break;
                        case "linear":
                            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                            break;
                        case "gamma":
                            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
                    }
                };
            }),
                n(e, function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i + "Effect"] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out");
                        },
                        inherit: SVG.Effect,
                        extend: {},
                    });
                }),
                n(i, function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i + "Effect"] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out");
                        },
                        inherit: SVG.ParentEffect,
                        extend: {},
                    });
                }),
                n(s, function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments);
                        },
                        inherit: SVG.ChildEffect,
                        extend: {},
                    });
                }),
                SVG.extend(SVG.MergeEffect, {
                    in: function (t) {
                        return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this;
                    },
                }),
                SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                    in2: function (t) {
                        return null == t
                            ? (this.parent() &&
                                  this.parent()
                                      .select('[result="' + this.attr("in2") + '"]')
                                      .get(0)) ||
                                  this.attr("in2")
                            : this.attr("in2", t);
                    },
                }),
                (SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] });
        }.call(void 0),
        (function () {
            function t(t, a, n, r, o, l, h) {
                for (var c = t.slice(a, n || h), d = r.slice(o, l || h), u = 0, g = { pos: [0, 0], start: [0, 0] }, f = { pos: [0, 0], start: [0, 0] }; ; ) {
                    if (
                        ((c[u] = e.call(g, c[u])),
                        (d[u] = e.call(f, d[u])),
                        c[u][0] != d[u][0] || "M" == c[u][0] || ("A" == c[u][0] && (c[u][4] != d[u][4] || c[u][5] != d[u][5]))
                            ? (Array.prototype.splice.apply(c, [u, 1].concat(s.call(g, c[u]))), Array.prototype.splice.apply(d, [u, 1].concat(s.call(f, d[u]))))
                            : ((c[u] = i.call(g, c[u])), (d[u] = i.call(f, d[u]))),
                        ++u == c.length && u == d.length)
                    )
                        break;
                    u == c.length && c.push(["C", g.pos[0], g.pos[1], g.pos[0], g.pos[1], g.pos[0], g.pos[1]]), u == d.length && d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]);
                }
                return { start: c, dest: d };
            }
            function e(t) {
                switch (t[0]) {
                    case "z":
                    case "Z":
                        (t[0] = "L"), (t[1] = this.start[0]), (t[2] = this.start[1]);
                        break;
                    case "H":
                        (t[0] = "L"), (t[2] = this.pos[1]);
                        break;
                    case "V":
                        (t[0] = "L"), (t[2] = t[1]), (t[1] = this.pos[0]);
                        break;
                    case "T":
                        (t[0] = "Q"), (t[3] = t[1]), (t[4] = t[2]), (t[1] = this.reflection[1]), (t[2] = this.reflection[0]);
                        break;
                    case "S":
                        (t[0] = "C"), (t[6] = t[4]), (t[5] = t[3]), (t[4] = t[2]), (t[3] = t[1]), (t[2] = this.reflection[1]), (t[1] = this.reflection[0]);
                }
                return t;
            }
            function i(t) {
                var e = t.length;
                return (this.pos = [t[e - 2], t[e - 1]]), -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t;
            }
            function s(t) {
                var e = [t];
                switch (t[0]) {
                    case "M":
                        return (this.pos = this.start = [t[1], t[2]]), e;
                    case "L":
                        (t[5] = t[3] = t[1]), (t[6] = t[4] = t[2]), (t[1] = this.pos[0]), (t[2] = this.pos[1]);
                        break;
                    case "Q":
                        (t[6] = t[4]), (t[5] = t[3]), (t[4] = (1 * t[4]) / 3 + (2 * t[2]) / 3), (t[3] = (1 * t[3]) / 3 + (2 * t[1]) / 3), (t[2] = (1 * this.pos[1]) / 3 + (2 * t[2]) / 3), (t[1] = (1 * this.pos[0]) / 3 + (2 * t[1]) / 3);
                        break;
                    case "A":
                        t = (e = (function (t, e) {
                            var i,
                                s,
                                a,
                                n,
                                r,
                                o,
                                l,
                                h,
                                c,
                                d,
                                u,
                                g,
                                f,
                                p,
                                x,
                                b,
                                m,
                                v,
                                y,
                                w,
                                k,
                                A,
                                S,
                                C,
                                L,
                                z,
                                P = Math.abs(e[1]),
                                M = Math.abs(e[2]),
                                E = e[3] % 360,
                                T = e[4],
                                X = e[5],
                                I = e[6],
                                Y = e[7],
                                F = new SVG.Point(t),
                                R = new SVG.Point(I, Y),
                                D = [];
                            if (0 === P || 0 === M || (F.x === R.x && F.y === R.y)) return [["C", F.x, F.y, R.x, R.y, R.x, R.y]];
                            (i = new SVG.Point((F.x - R.x) / 2, (F.y - R.y) / 2).transform(new SVG.Matrix().rotate(E))), (s = (i.x * i.x) / (P * P) + (i.y * i.y) / (M * M)) > 1 && ((s = Math.sqrt(s)), (P *= s), (M *= s));
                            (a = new SVG.Matrix()
                                .rotate(E)
                                .scale(1 / P, 1 / M)
                                .rotate(-E)),
                                (F = F.transform(a)),
                                (R = R.transform(a)),
                                (n = [R.x - F.x, R.y - F.y]),
                                (o = n[0] * n[0] + n[1] * n[1]),
                                (r = Math.sqrt(o)),
                                (n[0] /= r),
                                (n[1] /= r),
                                (l = o < 4 ? Math.sqrt(1 - o / 4) : 0),
                                T === X && (l *= -1);
                            (h = new SVG.Point((R.x + F.x) / 2 + l * -n[1], (R.y + F.y) / 2 + l * n[0])),
                                (c = new SVG.Point(F.x - h.x, F.y - h.y)),
                                (d = new SVG.Point(R.x - h.x, R.y - h.y)),
                                (u = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y))),
                                c.y < 0 && (u *= -1);
                            (g = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y))), d.y < 0 && (g *= -1);
                            X && u > g && (g += 2 * Math.PI);
                            !X && u < g && (g -= 2 * Math.PI);
                            for (p = Math.ceil((2 * Math.abs(u - g)) / Math.PI), b = [], m = u, f = (g - u) / p, x = (4 * Math.tan(f / 4)) / 3, k = 0; k <= p; k++)
                                (y = Math.cos(m)), (v = Math.sin(m)), (w = new SVG.Point(h.x + y, h.y + v)), (b[k] = [new SVG.Point(w.x + x * v, w.y - x * y), w, new SVG.Point(w.x - x * v, w.y + x * y)]), (m += f);
                            for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), a = new SVG.Matrix().rotate(E).scale(P, M).rotate(-E), k = 0, A = b.length; k < A; k++)
                                (b[k][0] = b[k][0].transform(a)), (b[k][1] = b[k][1].transform(a)), (b[k][2] = b[k][2].transform(a));
                            for (k = 1, A = b.length; k < A; k++) (w = b[k - 1][2]), (S = w.x), (C = w.y), (w = b[k][0]), (L = w.x), (z = w.y), (w = b[k][1]), (I = w.x), (Y = w.y), D.push(["C", S, C, L, z, I, Y]);
                            return D;
                        })(this.pos, t))[0];
                }
                return (t[0] = "C"), (this.pos = [t[5], t[6]]), (this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]]), e;
            }
            function a(t, e) {
                if (!1 === e) return !1;
                for (var i = e, s = t.length; i < s; ++i) if ("M" == t[i][0]) return i;
                return !1;
            }
            SVG.extend(SVG.PathArray, {
                morph: function (e) {
                    for (var i = this.value, s = this.parse(e), n = 0, r = 0, o = !1, l = !1; !1 !== n || !1 !== r; ) {
                        var h;
                        (o = a(i, !1 !== n && n + 1)),
                            (l = a(s, !1 !== r && r + 1)),
                            !1 === n && (n = 0 == (h = new SVG.PathArray(c.start).bbox()).height || 0 == h.width ? i.push(i[0]) - 1 : i.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1),
                            !1 === r && (r = 0 == (h = new SVG.PathArray(c.dest).bbox()).height || 0 == h.width ? s.push(s[0]) - 1 : s.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1);
                        var c = t(i, n, o, s, r, l);
                        (i = i.slice(0, n).concat(c.start, !1 === o ? [] : i.slice(o))), (s = s.slice(0, r).concat(c.dest, !1 === l ? [] : s.slice(l))), (n = !1 !== o && n + c.start.length), (r = !1 !== l && r + c.dest.length);
                    }
                    return (this.value = i), (this.destination = new SVG.PathArray()), (this.destination.value = s), this;
                },
            });
        })(),
        function () {
            function t(t) {
                t.remember("_draggable", this), (this.el = t);
            }
            (t.prototype.init = function (t, e) {
                var i = this;
                (this.constraint = t),
                    (this.value = e),
                    this.el.on("mousedown.drag", function (t) {
                        i.start(t);
                    }),
                    this.el.on("touchstart.drag", function (t) {
                        i.start(t);
                    });
            }),
                (t.prototype.transformPoint = function (t, e) {
                    var i = ((t = t || window.event).changedTouches && t.changedTouches[0]) || t;
                    return (this.p.x = i.pageX - (e || 0)), (this.p.y = i.pageY), this.p.matrixTransform(this.m);
                }),
                (t.prototype.getBBox = function () {
                    var t = this.el.bbox();
                    return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && ((t.x = this.el.x()), (t.y = this.el.y())), t;
                }),
                (t.prototype.start = function (t) {
                    if (("click" != t.type && "mousedown" != t.type && "mousemove" != t.type) || 1 == (t.which || t.buttons)) {
                        var e = this;
                        this.el.fire("beforedrag", { event: t, handler: this }),
                            (this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc)),
                            (this.p = this.parent.node.createSVGPoint()),
                            (this.m = this.el.node.getScreenCTM().inverse());
                        var i,
                            s = this.getBBox();
                        if (this.el instanceof SVG.Text)
                            switch (((i = this.el.node.getComputedTextLength()), this.el.attr("text-anchor"))) {
                                case "middle":
                                    i /= 2;
                                    break;
                                case "start":
                                    i = 0;
                            }
                        (this.startPoints = { point: this.transformPoint(t, i), box: s, transform: this.el.transform() }),
                            SVG.on(window, "mousemove.drag", function (t) {
                                e.drag(t);
                            }),
                            SVG.on(window, "touchmove.drag", function (t) {
                                e.drag(t);
                            }),
                            SVG.on(window, "mouseup.drag", function (t) {
                                e.end(t);
                            }),
                            SVG.on(window, "touchend.drag", function (t) {
                                e.end(t);
                            }),
                            this.el.fire("dragstart", { event: t, p: this.startPoints.point, m: this.m, handler: this }),
                            t.preventDefault(),
                            t.stopPropagation();
                    }
                }),
                (t.prototype.drag = function (t) {
                    var e = this.getBBox(),
                        i = this.transformPoint(t),
                        s = this.startPoints.box.x + i.x - this.startPoints.point.x,
                        a = this.startPoints.box.y + i.y - this.startPoints.point.y,
                        n = this.constraint,
                        r = i.x - this.startPoints.point.x,
                        o = i.y - this.startPoints.point.y,
                        l = new CustomEvent("dragmove", { detail: { event: t, p: i, m: this.m, handler: this }, cancelable: !0 });
                    if ((this.el.fire(l), l.defaultPrevented)) return i;
                    if ("function" == typeof n) {
                        var h = n.call(this.el, s, a, this.m);
                        "boolean" == typeof h && (h = { x: h, y: h }), !0 === h.x ? this.el.x(s) : !1 !== h.x && this.el.x(h.x), !0 === h.y ? this.el.y(a) : !1 !== h.y && this.el.y(h.y);
                    } else
                        "object" == typeof n &&
                            (null != n.minX && s < n.minX ? (s = n.minX) : null != n.maxX && s > n.maxX - e.width && (s = n.maxX - e.width),
                            null != n.minY && a < n.minY ? (a = n.minY) : null != n.maxY && a > n.maxY - e.height && (a = n.maxY - e.height),
                            this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: r, y: o }, !0) : this.el.move(s, a));
                    return i;
                }),
                (t.prototype.end = function (t) {
                    var e = this.drag(t);
                    this.el.fire("dragend", { event: t, p: e, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
                }),
                SVG.extend(SVG.Element, {
                    draggable: function (e, i) {
                        ("function" != typeof e && "object" != typeof e) || ((i = e), (e = !0));
                        var s = this.remember("_draggable") || new t(this);
                        return (e = void 0 === e || e) ? s.init(i || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
                    },
                });
        }.call(void 0),
        (function () {
            function t(t) {
                (this.el = t), t.remember("_selectHandler", this), (this.pointSelection = { isSelected: !1 }), (this.rectSelection = { isSelected: !1 });
            }
            (t.prototype.init = function (t, e) {
                var i = this.el.bbox();
                for (var s in ((this.options = {}), this.el.selectize.defaults)) (this.options[s] = this.el.selectize.defaults[s]), void 0 !== e[s] && (this.options[s] = e[s]);
                (this.parent = this.el.parent()),
                    (this.nested = this.nested || this.parent.group()),
                    this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)),
                    this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t),
                    this.observe(),
                    this.cleanup();
            }),
                (t.prototype.selectPoints = function (t) {
                    return (this.pointSelection.isSelected = t), this.pointSelection.set ? this : ((this.pointSelection.set = this.parent.set()), this.drawCircles(), this);
                }),
                (t.prototype.getPointArray = function () {
                    var t = this.el.bbox();
                    return this.el
                        .array()
                        .valueOf()
                        .map(function (e) {
                            return [e[0] - t.x, e[1] - t.y];
                        });
                }),
                (t.prototype.drawCircles = function () {
                    for (var t = this, e = this.getPointArray(), i = 0, s = e.length; i < s; ++i) {
                        var a = (function (e) {
                            return function (i) {
                                (i = i || window.event).preventDefault ? i.preventDefault() : (i.returnValue = !1), i.stopPropagation();
                                var s = i.pageX || i.touches[0].pageX,
                                    a = i.pageY || i.touches[0].pageY;
                                t.el.fire("point", { x: s, y: a, i: e, event: i });
                            };
                        })(i);
                        this.pointSelection.set.add(
                            this.nested
                                .circle(this.options.radius)
                                .center(e[i][0], e[i][1])
                                .addClass(this.options.classPoints)
                                .addClass(this.options.classPoints + "_point")
                                .on("touchstart", a)
                                .on("mousedown", a)
                        );
                    }
                }),
                (t.prototype.updatePointSelection = function () {
                    var t = this.getPointArray();
                    this.pointSelection.set.each(function (e) {
                        (this.cx() === t[e][0] && this.cy() === t[e][1]) || this.center(t[e][0], t[e][1]);
                    });
                }),
                (t.prototype.updateRectSelection = function () {
                    var t = this.el.bbox();
                    this.rectSelection.set.get(0).attr({ width: t.width, height: t.height }),
                        this.options.points &&
                            (this.rectSelection.set.get(2).center(t.width, 0),
                            this.rectSelection.set.get(3).center(t.width, t.height),
                            this.rectSelection.set.get(4).center(0, t.height),
                            this.rectSelection.set.get(5).center(t.width / 2, 0),
                            this.rectSelection.set.get(6).center(t.width, t.height / 2),
                            this.rectSelection.set.get(7).center(t.width / 2, t.height),
                            this.rectSelection.set.get(8).center(0, t.height / 2)),
                        this.options.rotationPoint && (this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(t.width / 2, 20));
                }),
                (t.prototype.selectRect = function (t) {
                    var e = this,
                        i = this.el.bbox();
                    function s(t) {
                        return function (i) {
                            (i = i || window.event).preventDefault ? i.preventDefault() : (i.returnValue = !1), i.stopPropagation();
                            var s = i.pageX || i.touches[0].pageX,
                                a = i.pageY || i.touches[0].pageY;
                            e.el.fire(t, { x: s, y: a, event: i });
                        };
                    }
                    if (
                        ((this.rectSelection.isSelected = t),
                        (this.rectSelection.set = this.rectSelection.set || this.parent.set()),
                        this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)),
                        this.options.points && !this.rectSelection.set.get(1))
                    ) {
                        var a = "touchstart",
                            n = "mousedown";
                        this.rectSelection.set.add(
                            this.nested
                                .circle(this.options.radius)
                                .center(0, 0)
                                .attr("class", this.options.classPoints + "_lt")
                                .on(n, s("lt"))
                                .on(a, s("lt"))
                        ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(i.width, 0)
                                    .attr("class", this.options.classPoints + "_rt")
                                    .on(n, s("rt"))
                                    .on(a, s("rt"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(i.width, i.height)
                                    .attr("class", this.options.classPoints + "_rb")
                                    .on(n, s("rb"))
                                    .on(a, s("rb"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(0, i.height)
                                    .attr("class", this.options.classPoints + "_lb")
                                    .on(n, s("lb"))
                                    .on(a, s("lb"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(i.width / 2, 0)
                                    .attr("class", this.options.classPoints + "_t")
                                    .on(n, s("t"))
                                    .on(a, s("t"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(i.width, i.height / 2)
                                    .attr("class", this.options.classPoints + "_r")
                                    .on(n, s("r"))
                                    .on(a, s("r"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(i.width / 2, i.height)
                                    .attr("class", this.options.classPoints + "_b")
                                    .on(n, s("b"))
                                    .on(a, s("b"))
                            ),
                            this.rectSelection.set.add(
                                this.nested
                                    .circle(this.options.radius)
                                    .center(0, i.height / 2)
                                    .attr("class", this.options.classPoints + "_l")
                                    .on(n, s("l"))
                                    .on(a, s("l"))
                            ),
                            this.rectSelection.set.each(function () {
                                this.addClass(e.options.classPoints);
                            });
                    }
                    if (this.options.rotationPoint && ((this.options.points && !this.rectSelection.set.get(9)) || (!this.options.points && !this.rectSelection.set.get(1)))) {
                        var r = function (t) {
                            (t = t || window.event).preventDefault ? t.preventDefault() : (t.returnValue = !1), t.stopPropagation();
                            var i = t.pageX || t.touches[0].pageX,
                                s = t.pageY || t.touches[0].pageY;
                            e.el.fire("rot", { x: i, y: s, event: t });
                        };
                        this.rectSelection.set.add(
                            this.nested
                                .circle(this.options.radius)
                                .center(i.width / 2, 20)
                                .attr("class", this.options.classPoints + "_rot")
                                .on("touchstart", r)
                                .on("mousedown", r)
                        );
                    }
                }),
                (t.prototype.handler = function () {
                    var t = this.el.bbox();
                    this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
                }),
                (t.prototype.observe = function () {
                    var t = this;
                    if (MutationObserver)
                        if (this.rectSelection.isSelected || this.pointSelection.isSelected)
                            (this.observerInst =
                                this.observerInst ||
                                new MutationObserver(function () {
                                    t.handler();
                                })),
                                this.observerInst.observe(this.el.node, { attributes: !0 });
                        else
                            try {
                                this.observerInst.disconnect(), delete this.observerInst;
                            } catch (t) {}
                    else
                        this.el.off("DOMAttrModified.select"),
                            (this.rectSelection.isSelected || this.pointSelection.isSelected) &&
                                this.el.on("DOMAttrModified.select", function () {
                                    t.handler();
                                });
                }),
                (t.prototype.cleanup = function () {
                    !this.rectSelection.isSelected &&
                        this.rectSelection.set &&
                        (this.rectSelection.set.each(function () {
                            this.remove();
                        }),
                        this.rectSelection.set.clear(),
                        delete this.rectSelection.set),
                        !this.pointSelection.isSelected &&
                            this.pointSelection.set &&
                            (this.pointSelection.set.each(function () {
                                this.remove();
                            }),
                            this.pointSelection.set.clear(),
                            delete this.pointSelection.set),
                        this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
                }),
                SVG.extend(SVG.Element, {
                    selectize: function (e, i) {
                        return "object" == typeof e && ((i = e), (e = !0)), (this.remember("_selectHandler") || new t(this)).init(void 0 === e || e, i || {}), this;
                    },
                }),
                (SVG.Element.prototype.selectize.defaults = { points: !0, classRect: "svg_select_boundingRect", classPoints: "svg_select_points", radius: 7, rotationPoint: !0, deepSelect: !1 });
        })(),
        (function () {
            (function () {
                function t(t) {
                    t.remember("_resizeHandler", this), (this.el = t), (this.parameters = {}), (this.lastUpdateCall = null), (this.p = t.doc().node.createSVGPoint());
                }
                (t.prototype.transformPoint = function (t, e, i) {
                    return (this.p.x = t - (this.offset.x - window.pageXOffset)), (this.p.y = e - (this.offset.y - window.pageYOffset)), this.p.matrixTransform(i || this.m);
                }),
                    (t.prototype._extractPosition = function (t) {
                        return { x: null != t.clientX ? t.clientX : t.touches[0].clientX, y: null != t.clientY ? t.clientY : t.touches[0].clientY };
                    }),
                    (t.prototype.init = function (t) {
                        var e = this;
                        if ((this.stop(), "stop" !== t)) {
                            for (var i in ((this.options = {}), this.el.resize.defaults)) (this.options[i] = this.el.resize.defaults[i]), void 0 !== t[i] && (this.options[i] = t[i]);
                            this.el.on("lt.resize", function (t) {
                                e.resize(t || window.event);
                            }),
                                this.el.on("rt.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("rb.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("lb.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("t.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("r.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("b.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("l.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("rot.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.el.on("point.resize", function (t) {
                                    e.resize(t || window.event);
                                }),
                                this.update();
                        }
                    }),
                    (t.prototype.stop = function () {
                        return (
                            this.el.off("lt.resize"),
                            this.el.off("rt.resize"),
                            this.el.off("rb.resize"),
                            this.el.off("lb.resize"),
                            this.el.off("t.resize"),
                            this.el.off("r.resize"),
                            this.el.off("b.resize"),
                            this.el.off("l.resize"),
                            this.el.off("rot.resize"),
                            this.el.off("point.resize"),
                            this
                        );
                    }),
                    (t.prototype.resize = function (t) {
                        var e = this;
                        (this.m = this.el.node.getScreenCTM().inverse()), (this.offset = { x: window.pageXOffset, y: window.pageYOffset });
                        var i = this._extractPosition(t.detail.event);
                        if (
                            ((this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: t.detail.x, y: t.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }),
                            "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]),
                            void 0 !== t.detail.i)
                        ) {
                            var s = this.el.array().valueOf();
                            (this.parameters.i = t.detail.i), (this.parameters.pointCoords = [s[t.detail.i][0], s[t.detail.i][1]]);
                        }
                        switch (t.type) {
                            case "lt":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e);
                                    if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                        (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1]);
                                    }
                                };
                                break;
                            case "rt":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 2);
                                    if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                        (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1]);
                                    }
                                };
                                break;
                            case "rb":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                        (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1]);
                                    }
                                };
                                break;
                            case "lb":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 1);
                                    if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                        (i = this.checkAspectRatio(i)), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1]);
                                    }
                                };
                                break;
                            case "t":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 2);
                                    if (this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1]);
                                    }
                                };
                                break;
                            case "r":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.width + i[0] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0]);
                                    }
                                };
                                break;
                            case "b":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1]);
                                    }
                                };
                                break;
                            case "l":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 1);
                                    if (this.parameters.box.width - i[0] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0]);
                                    }
                                };
                                break;
                            case "rot":
                                this.calc = function (t, e) {
                                    var i = t + this.parameters.p.x,
                                        s = e + this.parameters.p.y,
                                        a = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                        n = (180 * (Math.atan2(s - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2) - a)) / Math.PI;
                                    this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(this.parameters.rotation + n - (n % this.options.snapToAngle), this.parameters.box.cx, this.parameters.box.cy);
                                };
                                break;
                            case "point":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                        s = this.el.array().valueOf();
                                    (s[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0]), (s[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1]), this.el.plot(s);
                                };
                        }
                        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t }),
                            SVG.on(window, "touchmove.resize", function (t) {
                                e.update(t || window.event);
                            }),
                            SVG.on(window, "touchend.resize", function () {
                                e.done();
                            }),
                            SVG.on(window, "mousemove.resize", function (t) {
                                e.update(t || window.event);
                            }),
                            SVG.on(window, "mouseup.resize", function () {
                                e.done();
                            });
                    }),
                    (t.prototype.update = function (t) {
                        if (t) {
                            var e = this._extractPosition(t),
                                i = this.transformPoint(e.x, e.y),
                                s = i.x - this.parameters.p.x,
                                a = i.y - this.parameters.p.y;
                            (this.lastUpdateCall = [s, a]), this.calc(s, a), this.el.fire("resizing", { dx: s, dy: a, event: t });
                        } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
                    }),
                    (t.prototype.done = function () {
                        (this.lastUpdateCall = null), SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
                    }),
                    (t.prototype.snapToGrid = function (t, e, i, s) {
                        var a;
                        return (
                            void 0 !== s
                                ? (a = [(i + t) % this.options.snapToGrid, (s + e) % this.options.snapToGrid])
                                : ((i = null == i ? 3 : i),
                                  (a = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid])),
                            (t -= Math.abs(a[0]) < this.options.snapToGrid / 2 ? a[0] : a[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid)),
                            (e -= Math.abs(a[1]) < this.options.snapToGrid / 2 ? a[1] : a[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid)),
                            this.constraintToBox(t, e, i, s)
                        );
                    }),
                    (t.prototype.constraintToBox = function (t, e, i, s) {
                        var a,
                            n,
                            r = this.options.constraint || {};
                        return (
                            void 0 !== s ? ((a = i), (n = s)) : ((a = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width)), (n = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height))),
                            void 0 !== r.minX && a + t < r.minX && (t = r.minX - a),
                            void 0 !== r.maxX && a + t > r.maxX && (t = r.maxX - a),
                            void 0 !== r.minY && n + e < r.minY && (e = r.minY - n),
                            void 0 !== r.maxY && n + e > r.maxY && (e = r.maxY - n),
                            [t, e]
                        );
                    }),
                    (t.prototype.checkAspectRatio = function (t) {
                        if (!this.options.saveAspectRatio) return t;
                        var e = t.slice(),
                            i = this.parameters.box.width / this.parameters.box.height,
                            s = this.parameters.box.width + t[0],
                            a = this.parameters.box.height - t[1],
                            n = s / a;
                        return n < i ? (e[1] = s / i - this.parameters.box.height) : n > i && (e[0] = this.parameters.box.width - a * i), e;
                    }),
                    SVG.extend(SVG.Element, {
                        resize: function (e) {
                            return (this.remember("_resizeHandler") || new t(this)).init(e || {}), this;
                        },
                    }),
                    (SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 });
            }.call(this));
        })();
    return (
        (function (t, e) {
            void 0 === e && (e = {});
            var i = e.insertAt;
            if (t && "undefined" != typeof document) {
                var s = document.head || document.getElementsByTagName("head")[0],
                    a = document.createElement("style");
                (a.type = "text/css"), "top" === i && s.firstChild ? s.insertBefore(a, s.firstChild) : s.appendChild(a), a.styleSheet ? (a.styleSheet.cssText = t) : a.appendChild(document.createTextNode(t));
            }
        })(
            '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n.apexcharts-canvas.dark {\n  background: #343F57;\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-bottom.dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color:#ECEFF1\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n.apexcharts-xaxistooltip-top.dark:after {\n  border-top-color:rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-top.dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-left.dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-left.dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-right.dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-right.dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon, \n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.dark .apexcharts-zoom-icon svg, \n.dark .apexcharts-zoom-in-icon svg,\n.dark .apexcharts-zoom-out-icon svg,\n.dark .apexcharts-reset-zoom-icon svg, \n.dark .apexcharts-pan-icon svg, \n.dark .apexcharts-selection-icon svg,\n.dark .apexcharts-menu-icon svg, \n.dark .apexcharts-toolbar-custom-icon svg{\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.selected svg, \n.apexcharts-canvas .apexcharts-selection-icon.selected svg, \n.apexcharts-canvas .apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.light .apexcharts-selection-icon:not(.selected):hover svg,\n.light .apexcharts-zoom-icon:not(.selected):hover svg, \n.light .apexcharts-zoom-in-icon:hover svg, \n.light .apexcharts-zoom-out-icon:hover svg, \n.light .apexcharts-reset-zoom-icon:hover svg, \n.light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  position: relative;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 5px;\n}\n.apexcharts-zoom-icon, .apexcharts-reset-zoom-icon, .apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n.dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}'
        ),
        "document" in self &&
            (("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
                (function (t) {
                    if ("Element" in t) {
                        var e = t.Element.prototype,
                            i = Object,
                            s =
                                String.prototype.trim ||
                                function () {
                                    return this.replace(/^\s+|\s+$/g, "");
                                },
                            a =
                                Array.prototype.indexOf ||
                                function (t) {
                                    for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
                                    return -1;
                                },
                            n = function (t, e) {
                                (this.name = t), (this.code = DOMException[t]), (this.message = e);
                            },
                            r = function (t, e) {
                                if ("" === e) throw new n("SYNTAX_ERR", "The token must not be empty.");
                                if (/\s/.test(e)) throw new n("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                                return a.call(t, e);
                            },
                            o = function (t) {
                                for (var e = s.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], a = 0, n = i.length; a < n; a++) this.push(i[a]);
                                this._updateClassName = function () {
                                    t.setAttribute("class", this.toString());
                                };
                            },
                            l = (o.prototype = []),
                            h = function () {
                                return new o(this);
                            };
                        if (
                            ((n.prototype = Error.prototype),
                            (l.item = function (t) {
                                return this[t] || null;
                            }),
                            (l.contains = function (t) {
                                return ~r(this, t + "");
                            }),
                            (l.add = function () {
                                var t,
                                    e = arguments,
                                    i = 0,
                                    s = e.length,
                                    a = !1;
                                do {
                                    (t = e[i] + ""), ~r(this, t) || (this.push(t), (a = !0));
                                } while (++i < s);
                                a && this._updateClassName();
                            }),
                            (l.remove = function () {
                                var t,
                                    e,
                                    i = arguments,
                                    s = 0,
                                    a = i.length,
                                    n = !1;
                                do {
                                    for (t = i[s] + "", e = r(this, t); ~e; ) this.splice(e, 1), (n = !0), (e = r(this, t));
                                } while (++s < a);
                                n && this._updateClassName();
                            }),
                            (l.toggle = function (t, e) {
                                var i = this.contains(t),
                                    s = i ? !0 !== e && "remove" : !1 !== e && "add";
                                return s && this[s](t), !0 === e || !1 === e ? e : !i;
                            }),
                            (l.replace = function (t, e) {
                                var i = r(t + "");
                                ~i && (this.splice(i, 1, e), this._updateClassName());
                            }),
                            (l.toString = function () {
                                return this.join(" ");
                            }),
                            i.defineProperty)
                        ) {
                            var c = { get: h, enumerable: !0, configurable: !0 };
                            try {
                                i.defineProperty(e, "classList", c);
                            } catch (t) {
                                (void 0 !== t.number && -2146823252 !== t.number) || ((c.enumerable = !1), i.defineProperty(e, "classList", c));
                            }
                        } else i.prototype.__defineGetter__ && e.__defineGetter__("classList", h);
                    }
                })(self),
            (function () {
                var t = document.createElement("_");
                if ((t.classList.add("c1", "c2"), !t.classList.contains("c2"))) {
                    var e = function (t) {
                        var e = DOMTokenList.prototype[t];
                        DOMTokenList.prototype[t] = function (t) {
                            var i,
                                s = arguments.length;
                            for (i = 0; i < s; i++) (t = arguments[i]), e.call(this, t);
                        };
                    };
                    e("add"), e("remove");
                }
                if ((t.classList.toggle("c3", !1), t.classList.contains("c3"))) {
                    var i = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function (t, e) {
                        return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t);
                    };
                }
                "replace" in document.createElement("_").classList ||
                    (DOMTokenList.prototype.replace = function (t, e) {
                        var i = this.toString().split(" "),
                            s = i.indexOf(t + "");
                        ~s && ((i = i.slice(s)), this.remove.apply(this, i), this.add(e), this.add.apply(this, i.slice(1)));
                    }),
                    (t = null);
            })()),
        (function () {
            var t = !1;
            function e(t) {
                var e = t.__resizeTriggers__,
                    i = e.firstElementChild,
                    s = e.lastElementChild,
                    a = i.firstElementChild;
                (s.scrollLeft = s.scrollWidth), (s.scrollTop = s.scrollHeight), (a.style.width = i.offsetWidth + 1 + "px"), (a.style.height = i.offsetHeight + 1 + "px"), (i.scrollLeft = i.scrollWidth), (i.scrollTop = i.scrollHeight);
            }
            function i(t) {
                var i = this;
                e(this),
                    this.__resizeRAF__ && r(this.__resizeRAF__),
                    (this.__resizeRAF__ = n(function () {
                        (function (t) {
                            return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height;
                        })(i) &&
                            ((i.__resizeLast__.width = i.offsetWidth),
                            (i.__resizeLast__.height = i.offsetHeight),
                            i.__resizeListeners__.forEach(function (e) {
                                e.call(t);
                            }));
                    }));
            }
            var s,
                a,
                n =
                    ((s =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (t) {
                            return window.setTimeout(t, 20);
                        }),
                    function (t) {
                        return s(t);
                    }),
                r =
                    ((a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout),
                    function (t) {
                        return a(t);
                    }),
                o = !1,
                l = "",
                h = "animationstart",
                c = "Webkit Moz O ms".split(" "),
                d = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                u = document.createElement("fakeelement");
            if ((void 0 !== u.style.animationName && (o = !0), !1 === o))
                for (var g = 0; g < c.length; g++)
                    if (void 0 !== u.style[c[g] + "AnimationName"]) {
                        (l = "-" + c[g].toLowerCase() + "-"), (h = d[g]);
                        break;
                    }
            var f = "@" + l + "keyframes resizeanim { from { opacity: 0; } to { opacity: 0; } } ",
                p = l + "animation: 1ms resizeanim; ";
            (window.addResizeListener = function (s, a) {
                s.__resizeTriggers__ ||
                    ("static" == getComputedStyle(s).position && (s.style.position = "relative"),
                    (function () {
                        if (!t) {
                            var e =
                                    (f || "") +
                                    ".resize-triggers { " +
                                    (p || "") +
                                    'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                i = document.head || document.getElementsByTagName("head")[0],
                                s = document.createElement("style");
                            (s.type = "text/css"), s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(document.createTextNode(e)), i.appendChild(s), (t = !0);
                        }
                    })(),
                    (s.__resizeLast__ = {}),
                    (s.__resizeListeners__ = []),
                    ((s.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers"),
                    (s.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>'),
                    s.appendChild(s.__resizeTriggers__),
                    e(s),
                    s.addEventListener("scroll", i, !0),
                    h &&
                        s.__resizeTriggers__.addEventListener(h, function (t) {
                            "resizeanim" == t.animationName && e(s);
                        })),
                    s.__resizeListeners__.push(a);
            }),
                (window.removeResizeListener = function (t, e) {
                    t && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", i), (t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__))));
                });
        })(),
        (window.Apex = {}),
        (function () {
            function i(t, s) {
                e(this, i),
                    (this.opts = s),
                    (this.ctx = this),
                    (this.w = new A(s).init()),
                    (this.el = t),
                    (this.w.globals.cuid = (Math.random() + 1).toString(36).substring(4)),
                    (this.w.globals.chartID = this.w.config.chart.id ? this.w.config.chart.id : this.w.globals.cuid),
                    this.initModules(),
                    (this.create = d.bind(this.create, this)),
                    (this.windowResizeHandler = this.windowResize.bind(this));
            }
            return (
                s(
                    i,
                    [
                        {
                            key: "render",
                            value: function () {
                                var t = this;
                                return new $(function (e, i) {
                                    if (null !== t.el) {
                                        void 0 === Apex._chartInstances && (Apex._chartInstances = []),
                                            t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }),
                                            t.setLocale(t.w.config.chart.defaultLocale);
                                        var s = t.w.config.chart.events.beforeMount;
                                        "function" == typeof s && s(t, t.w),
                                            t.fireEvent("beforeMount", [t, t.w]),
                                            window.addEventListener("resize", t.windowResizeHandler),
                                            window.addResizeListener(t.el.parentNode, t.parentResizeCallback.bind(t));
                                        var a = t.create(t.w.config.series, {});
                                        if (!a) return e(t);
                                        t.mount(a)
                                            .then(function () {
                                                e(a), "function" == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.fireEvent("mounted", [t, t.w]);
                                            })
                                            .catch(function (t) {
                                                i(t);
                                            });
                                    } else i(new Error("Element not found"));
                                });
                            },
                        },
                        {
                            key: "initModules",
                            value: function () {
                                (this.animations = new g(this)),
                                    (this.core = new U(this.el, this)),
                                    (this.grid = new rt(this)),
                                    (this.coreUtils = new y(this)),
                                    (this.config = new w({})),
                                    (this.crosshairs = new T(this)),
                                    (this.options = new x()),
                                    (this.responsive = new lt(this)),
                                    (this.series = new G(this)),
                                    (this.theme = new ht(this)),
                                    (this.formatters = new N(this)),
                                    (this.titleSubtitle = new vt(this)),
                                    (this.legend = new ot(this)),
                                    (this.toolbar = new bt(this)),
                                    (this.dimensions = new _(this)),
                                    (this.zoomPanSelection = new mt(this)),
                                    (this.w.globals.tooltip = new xt(this));
                            },
                        },
                        {
                            key: "addEventListener",
                            value: function (t, e) {
                                var i = this.w;
                                i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : (i.globals.events[t] = [e]);
                            },
                        },
                        {
                            key: "removeEventListener",
                            value: function (t, e) {
                                var i = this.w;
                                if (i.globals.events.hasOwnProperty(t)) {
                                    var s = i.globals.events[t].indexOf(e);
                                    -1 !== s && i.globals.events[t].splice(s, 1);
                                }
                            },
                        },
                        {
                            key: "fireEvent",
                            value: function (t, e) {
                                var i = this.w;
                                if (i.globals.events.hasOwnProperty(t)) {
                                    (e && e.length) || (e = []);
                                    for (var s = i.globals.events[t], a = s.length, n = 0; n < a; n++) s[n].apply(null, e);
                                }
                            },
                        },
                        {
                            key: "create",
                            value: function (t, e) {
                                var i = this.w;
                                this.initModules();
                                var s = this.w.globals;
                                if (((s.noData = !1), (s.animationEnded = !1), this.responsive.checkResponsiveConfig(e), null === this.el)) return (s.animationEnded = !0), null;
                                if ((this.core.setupElements(), 0 === s.svgWidth)) return (s.animationEnded = !0), null;
                                var a = y.checkComboSeries(t);
                                (s.comboCharts = a.comboCharts),
                                    (s.comboChartsHasBars = a.comboChartsHasBars),
                                    (0 === t.length || (1 === t.length && t[0].data && 0 === t[0].data.length)) && this.series.handleNoData(),
                                    this.setupEventHandlers(),
                                    this.core.parseData(t),
                                    this.theme.init(),
                                    new C(this).setGlobalMarkerSize(),
                                    this.formatters.setLabelFormatters(),
                                    this.titleSubtitle.draw(),
                                    this.legend.init(),
                                    this.series.hasAllSeriesEqualX(),
                                    s.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters()),
                                    this.formatters.heatmapLabelFormatters(),
                                    this.dimensions.plotCoords();
                                var n = this.core.xySettings();
                                this.grid.createGridMask();
                                var r = this.core.plotChartType(t, n);
                                this.core.shiftGraphPosition();
                                var o = { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } };
                                return { elGraph: r, xyRatios: n, elInner: i.globals.dom.elGraphical, dimensions: o };
                            },
                        },
                        {
                            key: "mount",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    e = this,
                                    i = e.w;
                                return new $(function (s, a) {
                                    if (null === e.el) return a(new Error("Not enough data to display or target element not found"));
                                    if (
                                        ((null === t || i.globals.allSeriesCollapsed) && e.series.handleNoData(),
                                        (e.annotations = new b(e)),
                                        e.core.drawAxis(i.config.chart.type, t.xyRatios),
                                        (e.grid = new rt(e)),
                                        "back" === i.config.grid.position && e.grid.drawGrid(),
                                        "back" === i.config.annotations.position && e.annotations.drawAnnotations(),
                                        t.elGraph instanceof Array)
                                    )
                                        for (var n = 0; n < t.elGraph.length; n++) i.globals.dom.elGraphical.add(t.elGraph[n]);
                                    else i.globals.dom.elGraphical.add(t.elGraph);
                                    if (
                                        ("front" === i.config.grid.position && e.grid.drawGrid(),
                                        "front" === i.config.xaxis.crosshairs.position && e.crosshairs.drawXCrosshairs(),
                                        "front" === i.config.yaxis[0].crosshairs.position && e.crosshairs.drawYCrosshairs(),
                                        "front" === i.config.annotations.position && e.annotations.drawAnnotations(),
                                        !i.globals.noData)
                                    ) {
                                        if ((i.config.tooltip.enabled && !i.globals.noData && e.w.globals.tooltip.drawTooltip(t.xyRatios), i.globals.axisCharts && i.globals.isXNumeric))
                                            (i.config.chart.zoom.enabled || (i.config.chart.selection && i.config.chart.selection.enabled) || (i.config.chart.pan && i.config.chart.pan.enabled)) &&
                                                e.zoomPanSelection.init({ xyRatios: t.xyRatios });
                                        else {
                                            var r = i.config.chart.toolbar.tools;
                                            (r.zoom = !1), (r.zoomin = !1), (r.zoomout = !1), (r.selection = !1), (r.pan = !1), (r.reset = !1);
                                        }
                                        i.config.chart.toolbar.show && !i.globals.allSeriesCollapsed && e.toolbar.createToolbar();
                                    }
                                    i.globals.memory.methodsToExec.length > 0 &&
                                        i.globals.memory.methodsToExec.forEach(function (t) {
                                            t.method(t.params, !1, t.context);
                                        }),
                                        s(e);
                                });
                            },
                        },
                        {
                            key: "clearPreviousPaths",
                            value: function () {
                                var t = this.w;
                                (t.globals.previousPaths = []), (t.globals.allSeriesCollapsed = !1), (t.globals.collapsedSeries = []), (t.globals.collapsedSeriesIndices = []);
                            },
                        },
                        {
                            key: "updateOptions",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                    s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                    a = this.w;
                                return (
                                    t.series &&
                                        (t.series[0].data &&
                                            (t.series = t.series.map(function (t, e) {
                                                return n({}, a.config.series[e], {
                                                    name: t.name ? t.name : a.config.series[e] && a.config.series[e].name,
                                                    type: t.type ? t.type : a.config.series[e] && a.config.series[e].type,
                                                    data: t.data ? t.data : a.config.series[e] && a.config.series[e].data,
                                                });
                                            })),
                                        this.revertDefaultAxisMinMax()),
                                    t.xaxis && ((t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(t), t.xaxis.categories && t.xaxis.categories.length && a.config.xaxis.convertedCatToNumeric && (t = v.convertCatToNumeric(t))),
                                    a.globals.collapsedSeriesIndices.length > 0 && this.clearPreviousPaths(),
                                    t.theme && (t = this.theme.updateThemeOptions(t)),
                                    this._updateOptions(t, e, i, s)
                                );
                            },
                        },
                        {
                            key: "_updateOptions",
                            value: function (e) {
                                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                this.getSyncedCharts().forEach(function (n) {
                                    var r = n.w;
                                    return (
                                        (r.globals.shouldAnimate = s),
                                        i || ((r.globals.resized = !0), (r.globals.dataChanged = !0), s && n.series.getPreviousPaths()),
                                        e &&
                                            "object" === t(e) &&
                                            ((n.config = new w(e)),
                                            (e = y.extendArrayProps(n.config, e)),
                                            (r.config = d.extend(r.config, e)),
                                            a && ((r.globals.lastXAxis = []), (r.globals.lastYAxis = []), (r.globals.initialConfig = d.extend({}, r.config)), (r.globals.initialSeries = JSON.parse(JSON.stringify(r.config.series))))),
                                        n.update(e)
                                    );
                                });
                            },
                        },
                        {
                            key: "updateSeries",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                return this.revertDefaultAxisMinMax(), this._updateSeries(t, e, i);
                            },
                        },
                        {
                            key: "appendSeries",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                    s = this.w.config.series.slice();
                                return s.push(t), this.revertDefaultAxisMinMax(), this._updateSeries(s, e, i);
                            },
                        },
                        {
                            key: "_updateSeries",
                            value: function (t, e) {
                                var i,
                                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    a = this.w;
                                return (
                                    (this.w.globals.shouldAnimate = e),
                                    (a.globals.dataChanged = !0),
                                    a.globals.allSeriesCollapsed && (a.globals.allSeriesCollapsed = !1),
                                    e && this.series.getPreviousPaths(),
                                    a.globals.axisCharts
                                        ? (0 ===
                                              (i = t.map(function (t, e) {
                                                  return n({}, a.config.series[e], {
                                                      name: t.name ? t.name : a.config.series[e] && a.config.series[e].name,
                                                      type: t.type ? t.type : a.config.series[e] && a.config.series[e].type,
                                                      data: t.data ? t.data : a.config.series[e] && a.config.series[e].data,
                                                  });
                                              })).length && (i = [{ data: [] }]),
                                          (a.config.series = i))
                                        : (a.config.series = t.slice()),
                                    s && ((a.globals.initialConfig.series = JSON.parse(JSON.stringify(a.config.series))), (a.globals.initialSeries = JSON.parse(JSON.stringify(a.config.series)))),
                                    this.update()
                                );
                            },
                        },
                        {
                            key: "getSyncedCharts",
                            value: function () {
                                var t = this.getGroupedCharts(),
                                    e = [this];
                                return (
                                    t.length &&
                                        ((e = []),
                                        t.forEach(function (t) {
                                            e.push(t);
                                        })),
                                    e
                                );
                            },
                        },
                        {
                            key: "getGroupedCharts",
                            value: function () {
                                var t = this;
                                return Apex._chartInstances
                                    .filter(function (t) {
                                        if (t.group) return !0;
                                    })
                                    .map(function (e) {
                                        return t.w.config.chart.group === e.group ? e.chart : t;
                                    });
                            },
                        },
                        {
                            key: "appendData",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = this;
                                (i.w.globals.dataChanged = !0), i.series.getPreviousPaths();
                                for (var s = i.w.config.series.slice(), a = 0; a < s.length; a++) if (void 0 !== t[a]) for (var n = 0; n < t[a].data.length; n++) s[a].data.push(t[a].data[n]);
                                return (i.w.config.series = s), e && (i.w.globals.initialSeries = JSON.parse(JSON.stringify(i.w.config.series))), this.update();
                            },
                        },
                        {
                            key: "update",
                            value: function (t) {
                                var e = this;
                                return new $(function (i, s) {
                                    e.clear();
                                    var a = e.create(e.w.config.series, t);
                                    if (!a) return i(e);
                                    e.mount(a)
                                        .then(function () {
                                            "function" == typeof e.w.config.chart.events.updated && e.w.config.chart.events.updated(e, e.w), e.fireEvent("updated", [e, e.w]), (e.w.globals.isDirty = !0), i(e);
                                        })
                                        .catch(function (t) {
                                            s(t);
                                        });
                                });
                            },
                        },
                        {
                            key: "forceXAxisUpdate",
                            value: function (t) {
                                var e = this.w;
                                void 0 !== t.xaxis.min && ((e.config.xaxis.min = t.xaxis.min), (e.globals.lastXAxis.min = t.xaxis.min)),
                                    void 0 !== t.xaxis.max && ((e.config.xaxis.max = t.xaxis.max), (e.globals.lastXAxis.max = t.xaxis.max));
                            },
                        },
                        {
                            key: "revertDefaultAxisMinMax",
                            value: function () {
                                var t = this.w;
                                (t.config.xaxis.min = t.globals.lastXAxis.min),
                                    (t.config.xaxis.max = t.globals.lastXAxis.max),
                                    t.config.yaxis.map(function (e, i) {
                                        t.globals.zoomed && void 0 !== t.globals.lastYAxis[i] && ((e.min = t.globals.lastYAxis[i].min), (e.max = t.globals.lastYAxis[i].max));
                                    });
                            },
                        },
                        {
                            key: "clear",
                            value: function () {
                                this.zoomPanSelection && this.zoomPanSelection.destroy(),
                                    this.toolbar && this.toolbar.destroy(),
                                    (this.animations = null),
                                    (this.annotations = null),
                                    (this.core = null),
                                    (this.grid = null),
                                    (this.series = null),
                                    (this.responsive = null),
                                    (this.theme = null),
                                    (this.formatters = null),
                                    (this.titleSubtitle = null),
                                    (this.legend = null),
                                    (this.dimensions = null),
                                    (this.options = null),
                                    (this.crosshairs = null),
                                    (this.zoomPanSelection = null),
                                    (this.toolbar = null),
                                    (this.w.globals.tooltip = null),
                                    this.clearDomElements();
                            },
                        },
                        {
                            key: "killSVG",
                            value: function (t) {
                                return new $(function (e, i) {
                                    t.each(function (t, e) {
                                        this.removeClass("*"), this.off(), this.stop();
                                    }, !0),
                                        t.ungroup(),
                                        t.clear(),
                                        e("done");
                                });
                            },
                        },
                        {
                            key: "clearDomElements",
                            value: function () {
                                var t = this.w.globals.dom;
                                if (null !== this.el) for (; this.el.firstChild; ) this.el.removeChild(this.el.firstChild);
                                this.killSVG(t.Paper),
                                    t.Paper.remove(),
                                    (t.elWrap = null),
                                    (t.elGraphical = null),
                                    (t.elLegendWrap = null),
                                    (t.baseEl = null),
                                    (t.elGridRect = null),
                                    (t.elGridRectMask = null),
                                    (t.elGridRectMarkerMask = null),
                                    (t.elDefs = null);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.clear();
                                var t = this.w.config.chart.id;
                                t &&
                                    Apex._chartInstances.forEach(function (e, i) {
                                        e.id === t && Apex._chartInstances.splice(i, 1);
                                    }),
                                    window.removeEventListener("resize", this.windowResizeHandler),
                                    window.removeResizeListener(this.el.parentNode, this.parentResizeCallback.bind(this));
                            },
                        },
                        {
                            key: "toggleSeries",
                            value: function (t) {
                                var e = this.series.getSeriesByName(t),
                                    i = parseInt(e.getAttribute("data:realIndex")),
                                    s = e.classList.contains("apexcharts-series-collapsed");
                                this.legend.toggleDataSeries(i, s);
                            },
                        },
                        {
                            key: "resetToggleSeries",
                            value: function () {
                                this.legend.resetToggleDataSeries();
                            },
                        },
                        {
                            key: "setupEventHandlers",
                            value: function () {
                                var t = this.w,
                                    e = this,
                                    i = t.globals.dom.baseEl.querySelector(t.globals.chartClass),
                                    s = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"];
                                s.forEach(function (s) {
                                    i.addEventListener(
                                        s,
                                        function (i) {
                                            ("mousedown" === i.type && 1 === i.which) ||
                                                ((("mouseup" === i.type && 1 === i.which) || "touchend" === i.type) &&
                                                    ("function" == typeof t.config.chart.events.click && t.config.chart.events.click(i, e, t), e.fireEvent("click", [i, e, t])));
                                        },
                                        { capture: !1, passive: !0 }
                                    );
                                }),
                                    s.forEach(function (e) {
                                        document.addEventListener(e, function (e) {
                                            (t.globals.clientX = "touchmove" === e.type ? e.touches[0].clientX : e.clientX), (t.globals.clientY = "touchmove" === e.type ? e.touches[0].clientY : e.clientY);
                                        });
                                    }),
                                    this.core.setupBrushHandler();
                            },
                        },
                        {
                            key: "addXaxisAnnotation",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = this;
                                i && (s = i), s.annotations.addXaxisAnnotationExternal(t, e, s);
                            },
                        },
                        {
                            key: "addYaxisAnnotation",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = this;
                                i && (s = i), s.annotations.addYaxisAnnotationExternal(t, e, s);
                            },
                        },
                        {
                            key: "addPointAnnotation",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = this;
                                i && (s = i), s.annotations.addPointAnnotationExternal(t, e, s);
                            },
                        },
                        {
                            key: "clearAnnotations",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                    e = this;
                                t && (e = t), e.annotations.clearAnnotations(e);
                            },
                        },
                        {
                            key: "addText",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = this;
                                i && (s = i), s.annotations.addText(t, e, s);
                            },
                        },
                        {
                            key: "getChartArea",
                            value: function () {
                                return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
                            },
                        },
                        {
                            key: "getSeriesTotalXRange",
                            value: function (t, e) {
                                return this.coreUtils.getSeriesTotalsXRange(t, e);
                            },
                        },
                        {
                            key: "getHighestValueInSeries",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return new V(this.ctx).getMinYMaxY(t).highestY;
                            },
                        },
                        {
                            key: "getLowestValueInSeries",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return new V(this.ctx).getMinYMaxY(t).lowestY;
                            },
                        },
                        {
                            key: "getSeriesTotal",
                            value: function () {
                                return this.w.globals.seriesTotals;
                            },
                        },
                        {
                            key: "setLocale",
                            value: function (t) {
                                this.setCurrentLocaleValues(t);
                            },
                        },
                        {
                            key: "setCurrentLocaleValues",
                            value: function (t) {
                                var e = this.w.config.chart.locales;
                                window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                                var i = e.filter(function (e) {
                                    return e.name === t;
                                })[0];
                                if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                                var s = d.extend(p, i);
                                this.w.globals.locale = s.options;
                            },
                        },
                        {
                            key: "dataURI",
                            value: function () {
                                return new nt(this.ctx).dataURI();
                            },
                        },
                        {
                            key: "paper",
                            value: function () {
                                return this.w.globals.dom.Paper;
                            },
                        },
                        {
                            key: "parentResizeCallback",
                            value: function () {
                                this.w.globals.animationEnded && this.windowResize();
                            },
                        },
                        {
                            key: "windowResize",
                            value: function () {
                                var t = this;
                                clearTimeout(this.w.globals.resizeTimer),
                                    (this.w.globals.resizeTimer = window.setTimeout(function () {
                                        (t.w.globals.resized = !0), (t.w.globals.dataChanged = !1), t.update();
                                    }, 150));
                            },
                        },
                    ],
                    [
                        {
                            key: "initOnLoad",
                            value: function () {
                                for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) {
                                    new i(t[e], JSON.parse(t[e].getAttribute("data-options"))).render();
                                }
                            },
                        },
                        {
                            key: "exec",
                            value: function (t, e) {
                                var i = this.getChartByID(t);
                                if (i) {
                                    for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) a[n - 2] = arguments[n];
                                    switch (e) {
                                        case "updateOptions":
                                            return i.updateOptions.apply(i, a);
                                        case "updateSeries":
                                            return i.updateSeries.apply(i, a);
                                        case "appendData":
                                            return i.appendData.apply(i, a);
                                        case "appendSeries":
                                            return i.appendSeries.apply(i, a);
                                        case "toggleSeries":
                                            return i.toggleSeries.apply(i, a);
                                        case "dataURI":
                                            return i.dataURI.apply(i, a);
                                        case "addXaxisAnnotation":
                                            return i.addXaxisAnnotation.apply(i, a);
                                        case "addYaxisAnnotation":
                                            return i.addYaxisAnnotation.apply(i, a);
                                        case "addPointAnnotation":
                                            return i.addPointAnnotation.apply(i, a);
                                        case "addText":
                                            return i.addText.apply(i, a);
                                        case "clearAnnotations":
                                            return i.clearAnnotations.apply(i, a);
                                        case "paper":
                                            return i.paper.apply(i, a);
                                        case "destroy":
                                            return i.destroy();
                                    }
                                }
                            },
                        },
                        {
                            key: "merge",
                            value: function (t, e) {
                                return d.extend(t, e);
                            },
                        },
                        {
                            key: "getChartByID",
                            value: function (t) {
                                return Apex._chartInstances.filter(function (e) {
                                    return e.id === t;
                                })[0].chart;
                            },
                        },
                    ]
                ),
                i
            );
        })()
    );
});
