/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class t {
    constructor() {
        this.m = new Map
    }
    reset(t) {
        this.m = new Map(Object.entries(t))
    }
    get(t, o) {
        const n = this.m.get(t);
        return void 0 !== n ? n : o
    }
    getBoolean(t, o = !1) {
        const n = this.m.get(t);
        return void 0 === n ? o : "string" == typeof n ? "true" === n : !!n
    }
    getNumber(t, o) {
        const n = parseFloat(this.m.get(t));
        return isNaN(n) ? void 0 !== o ? o : NaN : n
    }
    set(t, o) {
        this.m.set(t, o)
    }
}
const o = new t,
    n = "ionic:",
    i = "ionic-persist-config",
    r = (t, o) => ("string" == typeof t && (o = t, t = void 0), (t => e(t))(t).includes(o)),
    e = (t = window) => {
        if (void 0 === t) return [];
        t.Ionic = t.Ionic || {};
        let o = t.Ionic.platforms;
        return null == o && (o = t.Ionic.platforms = a(t), o.forEach((o => t.document.documentElement.classList.add("plt-" + o)))), o
    },
    a = t => {
        const n = o.get("platform");
        return Object.keys(u).filter((o => {
            const i = null == n ? void 0 : n[o];
            return "function" == typeof i ? i(t) : u[o](t)
        }))
    },
    l = t => !!f(t, /iPad/i) || !(!f(t, /Macintosh/i) || !p(t)),
    s = t => f(t, /android|sink/i),
    p = t => g(t, "(any-pointer:coarse)"),
    c = t => d(t) || m(t),
    d = t => !!(t.cordova || t.phonegap || t.PhoneGap),
    m = t => {
        const o = t.Capacitor;
        return !!(null == o ? void 0 : o.isNative)
    },
    f = (t, o) => o.test(t.navigator.userAgent),
    g = (t, o) => {
        var n;
        return null === (n = t.matchMedia) || void 0 === n ? void 0 : n.call(t, o).matches
    },
    u = {
        ipad: l,
        iphone: t => f(t, /iPhone/i),
        ios: t => f(t, /iPhone|iPod/i) || l(t),
        android: s,
        phablet: t => {
            const o = t.innerWidth,
                n = t.innerHeight,
                i = Math.min(o, n),
                r = Math.max(o, n);
            return i > 390 && i < 520 && r > 620 && r < 800
        },
        tablet: t => {
            const o = t.innerWidth,
                n = t.innerHeight,
                i = Math.min(o, n),
                r = Math.max(o, n);
            return l(t) || (t => s(t) && !f(t, /mobile/i))(t) || i > 460 && i < 820 && r > 780 && r < 1400
        },
        cordova: d,
        capacitor: m,
        electron: t => f(t, /electron/i),
        pwa: t => {
            var o;
            return !(!(null === (o = t.matchMedia) || void 0 === o ? void 0 : o.call(t, "(display-mode: standalone)").matches) && !t.navigator.standalone)
        },
        mobile: p,
        mobileweb: t => p(t) && !c(t),
        desktop: t => !p(t),
        hybrid: c
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let h;
const x = t => t && yt(t) || h,
    b = (t = {}) => {
        if ("undefined" == typeof window) return;
        const a = window.document,
            l = window,
            s = l.Ionic = l.Ionic || {},
            p = {};
        t._ael && (p.ael = t._ael), t._rel && (p.rel = t._rel), t._ce && (p.ce = t._ce), P(p);
        const c = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (t => {
            try {
                const o = t.sessionStorage.getItem(i);
                return null !== o ? JSON.parse(o) : {}
            } catch (t) {
                return {}
            }
        })(l)), {
            persistConfig: !1
        }), s.config), (t => {
            const o = {};
            return t.location.search.slice(1).split("&").map((t => t.split("="))).map((([t, o]) => [decodeURIComponent(t), decodeURIComponent(o)])).filter((([t]) => ((t, o) => t.substr(0, o.length) === o)(t, n))).map((([t, o]) => [t.slice(6), o])).forEach((([t, n]) => {
                o[t] = n
            })), o
        })(l)), t);
        o.reset(c), o.getBoolean("persistConfig") && ((t, o) => {
            try {
                t.sessionStorage.setItem(i, JSON.stringify(o))
            } catch (t) {
                return
            }
        })(l, c), e(l), s.config = o, s.mode = h = o.get("mode", a.documentElement.getAttribute("mode") || (r(l, "ios") ? "ios" : "md")), o.set("mode", h), a.documentElement.setAttribute("mode", h), a.documentElement.classList.add(h), o.getBoolean("_testing") && o.set("animated", !1);
        const d = t => {
                var o;
                return null === (o = t.tagName) || void 0 === o ? void 0 : o.startsWith("ION-")
            },
            m = t => ["ios", "md"].includes(t);
        wt((t => {
            for (; t;) {
                const o = t.mode || t.getAttribute("mode");
                if (o) {
                    if (m(o)) return o;
                    d(t) && console.warn('Invalid ionic mode: "' + o + '", expected: "ios" or "md"')
                }
                t = t.parentElement
            }
            return h
        }))
    },
    v = () => Promise.all([void 0, b()]);
var w = Object.defineProperty,
    y = {
        isBrowser: !0
    },
    k = t => {
        if (t.__stencil__getHostRef) return t.__stencil__getHostRef()
    },
    j = (t, o) => {
        t.__stencil__getHostRef = () => o, o.t = t
    },
    $ = (t, o) => o in t,
    z = (t, o) => (0, console.error)(t, o),
    S = new Map,
    O = new Map,
    N = [],
    M = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
    C = "http://www.w3.org/1999/xlink",
    E = "undefined" != typeof window ? window : {},
    R = {
        o: 0,
        i: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, o, n, i) => t.addEventListener(o, n, i),
        rel: (t, o, n, i) => t.removeEventListener(o, n, i),
        ce: (t, o) => new CustomEvent(t, o)
    },
    P = t => {
        Object.assign(R, t)
    },
    F = t => Promise.resolve(t),
    L = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (t) {}
        return !1
    })(),
    T = !!L && (() => !!E.document && Object.getOwnPropertyDescriptor(E.document.adoptedStyleSheets, "length").writable)(),
    U = !1,
    B = [],
    A = [],
    D = (t, o) => n => {
        t.push(n), U || (U = !0, o && 4 & R.o ? W(I) : R.raf(I))
    },
    H = t => {
        for (let o = 0; o < t.length; o++) try {
            t[o](performance.now())
        } catch (t) {
            z(t)
        }
        t.length = 0
    },
    I = () => {
        H(B), H(A), (U = B.length > 0) && R.raf(I)
    },
    W = t => F().then(t),
    _ = D(B, !1),
    q = D(A, !0),
    J = t => {
        const o = new URL(t, R.i);
        return o.origin !== E.location.origin ? o.href : o.pathname
    },
    V = t => "object" == (t = typeof t) || "function" === t;

function Y(t) {
    var o, n, i;
    return null != (i = null == (n = null == (o = t.head) ? void 0 : o.querySelector('meta[name="csp-nonce"]')) ? void 0 : n.getAttribute("content")) ? i : void 0
}((t, o) => {
    for (var n in o) w(t, n, {
        get: o[n],
        enumerable: !0
    })
})({}, {
    err: () => G,
    map: () => K,
    ok: () => Z,
    unwrap: () => X,
    unwrapErr: () => tt
});
var Z = t => ({
        isOk: !0,
        isErr: !1,
        value: t
    }),
    G = t => ({
        isOk: !1,
        isErr: !0,
        value: t
    });

function K(t, o) {
    if (t.isOk) {
        const n = o(t.value);
        return n instanceof Promise ? n.then((t => Z(t))) : Z(n)
    }
    if (t.isErr) return G(t.value);
    throw "should never get here"
}
var Q, X = t => {
        if (t.isOk) return t.value;
        throw t.value
    },
    tt = t => {
        if (t.isErr) return t.value;
        throw t.value
    };

function ot(t) {
    var o;
    const n = this.attachShadow({
        mode: "open",
        delegatesFocus: !!(16 & t.o)
    });
    void 0 === Q && (Q = null != (o = function() {
        if (!L) return;
        const t = new CSSStyleSheet;
        return t.replaceSync('html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{-webkit-box-shadow:4px 0px 16px rgba(0,0,0,.18);box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{-webkit-box-shadow:4px 0px 16px rgba(0,0,0,.18);box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{-webkit-transition:300ms -webkit-transform cubic-bezier(0.25, 0.8, 0.5, 1);transition:300ms -webkit-transform cubic-bezier(0.25, 0.8, 0.5, 1);transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1), 300ms -webkit-transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{-webkit-transition:none !important;transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:bold}img{max-width:100%}hr{height:1px;border-width:0;-webkit-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}label,input,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::-webkit-input-placeholder{padding-left:2px}textarea::-moz-placeholder{padding-left:2px}textarea:-ms-input-placeholder{padding-left:2px}textarea::-ms-input-placeholder{padding-left:2px}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}a,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{-ms-touch-action:manipulation;touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{padding:0;border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html:not(.hydrated) body{display:none}html.ion-ce body{display:block}html.plt-pwa{height:100vh}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);text-rendering:optimizeLegibility;overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}html{font-family:var(--ion-font-family)}@supports (-webkit-touch-callout: none){html{font:var(--ion-dynamic-font, 16px var(--ion-font-family))}}a{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:1.625rem}h2{margin-top:18px;font-size:1.5rem}h3{font-size:1.375rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}.ion-no-padding{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.ion-padding{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-top{--padding-top:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start{--padding-start:var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}.ion-padding-end{--padding-end:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-padding-bottom{--padding-bottom:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical{--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-no-margin{--margin-start:0;--margin-end:0;--margin-top:0;--margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.ion-margin{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-top{--margin-top:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start{--margin-start:var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}.ion-margin-end{--margin-end:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-margin-bottom{--margin-bottom:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical{--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-float-left{float:left !important}.ion-float-right{float:right !important}.ion-float-start{float:left !important}:host-context([dir=rtl]) .ion-float-start{float:right !important}[dir=rtl] .ion-float-start{float:right !important}@supports selector(:dir(rtl)){.ion-float-start:dir(rtl){float:right !important}}.ion-float-end{float:right !important}:host-context([dir=rtl]) .ion-float-end{float:left !important}[dir=rtl] .ion-float-end{float:left !important}@supports selector(:dir(rtl)){.ion-float-end:dir(rtl){float:left !important}}@media (min-width: 576px){.ion-float-sm-left{float:left !important}.ion-float-sm-right{float:right !important}.ion-float-sm-start{float:left !important}:host-context([dir=rtl]) .ion-float-sm-start{float:right !important}[dir=rtl] .ion-float-sm-start{float:right !important}@supports selector(:dir(rtl)){.ion-float-sm-start:dir(rtl){float:right !important}}.ion-float-sm-end{float:right !important}:host-context([dir=rtl]) .ion-float-sm-end{float:left !important}[dir=rtl] .ion-float-sm-end{float:left !important}@supports selector(:dir(rtl)){.ion-float-sm-end:dir(rtl){float:left !important}}}@media (min-width: 768px){.ion-float-md-left{float:left !important}.ion-float-md-right{float:right !important}.ion-float-md-start{float:left !important}:host-context([dir=rtl]) .ion-float-md-start{float:right !important}[dir=rtl] .ion-float-md-start{float:right !important}@supports selector(:dir(rtl)){.ion-float-md-start:dir(rtl){float:right !important}}.ion-float-md-end{float:right !important}:host-context([dir=rtl]) .ion-float-md-end{float:left !important}[dir=rtl] .ion-float-md-end{float:left !important}@supports selector(:dir(rtl)){.ion-float-md-end:dir(rtl){float:left !important}}}@media (min-width: 992px){.ion-float-lg-left{float:left !important}.ion-float-lg-right{float:right !important}.ion-float-lg-start{float:left !important}:host-context([dir=rtl]) .ion-float-lg-start{float:right !important}[dir=rtl] .ion-float-lg-start{float:right !important}@supports selector(:dir(rtl)){.ion-float-lg-start:dir(rtl){float:right !important}}.ion-float-lg-end{float:right !important}:host-context([dir=rtl]) .ion-float-lg-end{float:left !important}[dir=rtl] .ion-float-lg-end{float:left !important}@supports selector(:dir(rtl)){.ion-float-lg-end:dir(rtl){float:left !important}}}@media (min-width: 1200px){.ion-float-xl-left{float:left !important}.ion-float-xl-right{float:right !important}.ion-float-xl-start{float:left !important}:host-context([dir=rtl]) .ion-float-xl-start{float:right !important}[dir=rtl] .ion-float-xl-start{float:right !important}@supports selector(:dir(rtl)){.ion-float-xl-start:dir(rtl){float:right !important}}.ion-float-xl-end{float:right !important}:host-context([dir=rtl]) .ion-float-xl-end{float:left !important}[dir=rtl] .ion-float-xl-end{float:left !important}@supports selector(:dir(rtl)){.ion-float-xl-end:dir(rtl){float:left !important}}}.ion-text-center{text-align:center !important}.ion-text-justify{text-align:justify !important}.ion-text-start{text-align:start !important}.ion-text-end{text-align:end !important}.ion-text-left{text-align:left !important}.ion-text-right{text-align:right !important}.ion-text-nowrap{white-space:nowrap !important}.ion-text-wrap{white-space:normal !important}@media (min-width: 576px){.ion-text-sm-center{text-align:center !important}.ion-text-sm-justify{text-align:justify !important}.ion-text-sm-start{text-align:start !important}.ion-text-sm-end{text-align:end !important}.ion-text-sm-left{text-align:left !important}.ion-text-sm-right{text-align:right !important}.ion-text-sm-nowrap{white-space:nowrap !important}.ion-text-sm-wrap{white-space:normal !important}}@media (min-width: 768px){.ion-text-md-center{text-align:center !important}.ion-text-md-justify{text-align:justify !important}.ion-text-md-start{text-align:start !important}.ion-text-md-end{text-align:end !important}.ion-text-md-left{text-align:left !important}.ion-text-md-right{text-align:right !important}.ion-text-md-nowrap{white-space:nowrap !important}.ion-text-md-wrap{white-space:normal !important}}@media (min-width: 992px){.ion-text-lg-center{text-align:center !important}.ion-text-lg-justify{text-align:justify !important}.ion-text-lg-start{text-align:start !important}.ion-text-lg-end{text-align:end !important}.ion-text-lg-left{text-align:left !important}.ion-text-lg-right{text-align:right !important}.ion-text-lg-nowrap{white-space:nowrap !important}.ion-text-lg-wrap{white-space:normal !important}}@media (min-width: 1200px){.ion-text-xl-center{text-align:center !important}.ion-text-xl-justify{text-align:justify !important}.ion-text-xl-start{text-align:start !important}.ion-text-xl-end{text-align:end !important}.ion-text-xl-left{text-align:left !important}.ion-text-xl-right{text-align:right !important}.ion-text-xl-nowrap{white-space:nowrap !important}.ion-text-xl-wrap{white-space:normal !important}}.ion-text-uppercase{text-transform:uppercase !important}.ion-text-lowercase{text-transform:lowercase !important}.ion-text-capitalize{text-transform:capitalize !important}@media (min-width: 576px){.ion-text-sm-uppercase{text-transform:uppercase !important}.ion-text-sm-lowercase{text-transform:lowercase !important}.ion-text-sm-capitalize{text-transform:capitalize !important}}@media (min-width: 768px){.ion-text-md-uppercase{text-transform:uppercase !important}.ion-text-md-lowercase{text-transform:lowercase !important}.ion-text-md-capitalize{text-transform:capitalize !important}}@media (min-width: 992px){.ion-text-lg-uppercase{text-transform:uppercase !important}.ion-text-lg-lowercase{text-transform:lowercase !important}.ion-text-lg-capitalize{text-transform:capitalize !important}}@media (min-width: 1200px){.ion-text-xl-uppercase{text-transform:uppercase !important}.ion-text-xl-lowercase{text-transform:lowercase !important}.ion-text-xl-capitalize{text-transform:capitalize !important}}.ion-align-self-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.ion-align-self-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.ion-align-self-center{-ms-flex-item-align:center !important;align-self:center !important}.ion-align-self-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}.ion-align-self-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.ion-align-self-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.ion-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.ion-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.ion-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.ion-justify-content-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.ion-justify-content-center{-ms-flex-pack:center !important;justify-content:center !important}.ion-justify-content-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.ion-justify-content-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.ion-justify-content-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.ion-justify-content-evenly{-ms-flex-pack:space-evenly !important;justify-content:space-evenly !important}.ion-align-items-start{-ms-flex-align:start !important;align-items:flex-start !important}.ion-align-items-center{-ms-flex-align:center !important;align-items:center !important}.ion-align-items-end{-ms-flex-align:end !important;align-items:flex-end !important}.ion-align-items-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.ion-align-items-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}'), t
    }()) ? o : null), Q && (T ? n.adoptedStyleSheets.push(Q) : n.adoptedStyleSheets = [...n.adoptedStyleSheets, Q])
}
var nt = t => {
    const o = lt(t, "childNodes");
    t.tagName && t.tagName.includes("-") && t["s-cr"] && "SLOT-FB" !== t.tagName && it(o, t.tagName).forEach((t => {
        1 === t.nodeType && "SLOT-FB" === t.tagName && (t.hidden = !!rt(t, at(t), !1).length)
    }));
    let n = 0;
    for (n = 0; n < o.length; n++) {
        const t = o[n];
        1 === t.nodeType && lt(t, "childNodes").length && nt(t)
    }
};

function it(t, o, n) {
    let i, r = 0,
        e = [];
    for (; r < t.length; r++) i = t[r], !i["s-sr"] || o && i["s-hn"] !== o || void 0 !== n || e.push(i), e = [...e, ...it(i.childNodes, o, n)];
    return e
}
var rt = (t, o, n = !0) => {
        const i = [];
        (n && t["s-sr"] || !t["s-sr"]) && i.push(t);
        let r = t;
        for (; r = r.nextSibling;) at(r) !== o || !n && r["s-sr"] || i.push(r);
        return i
    },
    et = (t, o) => 1 === t.nodeType ? null === t.getAttribute("slot") && "" === o || t.getAttribute("slot") === o : t["s-sn"] === o || "" === o,
    at = t => "string" == typeof t["s-sn"] ? t["s-sn"] : 1 === t.nodeType && t.getAttribute("slot") || void 0;

function lt(t, o) {
    if ("__" + o in t) {
        const n = t["__" + o];
        return "function" != typeof n ? n : n.bind(t)
    }
    return "function" != typeof t[o] ? t[o] : t[o].bind(t)
}
var st = new WeakMap,
    pt = (t, o) => "sc-" + (o && 32 & t.o ? t.l + "-" + o : t.l),
    ct = (t, o, ...n) => {
        let i = null,
            r = null,
            e = null,
            a = !1,
            l = !1;
        const s = [],
            p = o => {
                for (let n = 0; n < o.length; n++) i = o[n], Array.isArray(i) ? p(i) : null != i && "boolean" != typeof i && ((a = "function" != typeof t && !V(i)) && (i += ""), a && l ? s[s.length - 1].p += i : s.push(a ? dt(null, i) : i), l = a)
            };
        if (p(n), o) {
            o.key && (r = o.key), o.name && (e = o.name); {
                const t = o.className || o.class;
                t && (o.class = "object" != typeof t ? t : Object.keys(t).filter((o => t[o])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === o ? {} : o, s, ft);
        const c = dt(t, null);
        return c.u = o, s.length > 0 && (c.h = s), c.v = r, c.k = e, c
    },
    dt = (t, o) => ({
        o: 0,
        j: t,
        p: o,
        $: null,
        h: null,
        u: null,
        v: null,
        k: null
    }),
    mt = {},
    ft = {
        forEach: (t, o) => t.map(gt).forEach(o),
        map: (t, o) => t.map(gt).map(o).map(ut)
    },
    gt = t => ({
        vattrs: t.u,
        vchildren: t.h,
        vkey: t.v,
        vname: t.k,
        vtag: t.j,
        vtext: t.p
    }),
    ut = t => {
        if ("function" == typeof t.vtag) {
            const o = { ...t.vattrs
            };
            return t.vkey && (o.key = t.vkey), t.vname && (o.name = t.vname), ct(t.vtag, o, ...t.vchildren || [])
        }
        const o = dt(t.vtag, t.vtext);
        return o.u = t.vattrs, o.h = t.vchildren, o.v = t.vkey, o.k = t.vname, o
    },
    ht = t => {
        const o = (t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))(t);
        return RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${o}))(${o}\\b)`, "g")
    };
ht("::slotted"), ht(":host"), ht(":host-context");
var xt, bt, vt, wt = t => N.push(t),
    yt = t => {
        var o;
        return null == (o = k(t)) ? void 0 : o.S
    },
    kt = (t, o) => null == t || V(t) ? t : 4 & o ? "false" !== t && ("" === t || !!t) : 2 & o ? "string" == typeof t ? parseFloat(t) : "number" == typeof t ? t : NaN : 1 & o ? t + "" : t,
    jt = t => {
        var o;
        return null == (o = k(t)) ? void 0 : o.$hostElement$
    },
    $t = (t, o, n) => {
        const i = jt(t);
        return {
            emit: t => zt(i, o, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: t
            })
        }
    },
    zt = (t, o, n) => {
        const i = R.ce(o, n);
        return t.dispatchEvent(i), i
    },
    St = (t, o, n, i, r, e) => {
        if (n === i) return;
        let a = $(t, o),
            l = o.toLowerCase();
        if ("class" === o) {
            const o = t.classList,
                r = Nt(n);
            let e = Nt(i);
            o.remove(...r.filter((t => t && !e.includes(t)))), o.add(...e.filter((t => t && !r.includes(t))))
        } else if ("style" === o) {
            for (const o in n) i && null != i[o] || (o.includes("-") ? t.style.removeProperty(o) : t.style[o] = "");
            for (const o in i) n && i[o] === n[o] || (o.includes("-") ? t.style.setProperty(o, i[o]) : t.style[o] = i[o])
        } else if ("key" === o);
        else if ("ref" === o) i && i(t);
        else if (a || "o" !== o[0] || "n" !== o[1]) {
            const s = V(i);
            if ((a || s && null !== i) && !r) try {
                if (t.tagName.includes("-")) t[o] !== i && (t[o] = i);
                else {
                    const r = null == i ? "" : i;
                    "list" === o ? a = !1 : null != n && t[o] == r || ("function" == typeof t.__lookupSetter__(o) ? t[o] = r : t.setAttribute(o, r))
                }
            } catch (t) {}
            let p = !1;
            l !== (l = l.replace(/^xlink\:?/, "")) && (o = l, p = !0), null == i || !1 === i ? !1 === i && "" !== t.getAttribute(o) || (p ? t.removeAttributeNS(C, o) : t.removeAttribute(o)) : (!a || 4 & e || r) && !s && 1 === t.nodeType && (i = !0 === i ? "" : i, p ? t.setAttributeNS(C, o, i) : t.setAttribute(o, i))
        } else if (o = "-" === o[2] ? o.slice(3) : $(E, l) ? l.slice(2) : l[2] + o.slice(3), n || i) {
            const r = o.endsWith(Mt);
            o = o.replace(Ct, ""), n && R.rel(t, o, n, r), i && R.ael(t, o, i, r)
        }
    },
    Ot = /\s/,
    Nt = t => ("object" == typeof t && t && "baseVal" in t && (t = t.baseVal), t && "string" == typeof t ? t.split(Ot) : []),
    Mt = "Capture",
    Ct = RegExp(Mt + "$"),
    Et = (t, o, n) => {
        const i = 11 === o.$.nodeType && o.$.host ? o.$.host : o.$,
            r = t && t.u || {},
            e = o.u || {};
        for (const t of Rt(Object.keys(r))) t in e || St(i, t, r[t], void 0, n, o.o);
        for (const t of Rt(Object.keys(e))) St(i, t, r[t], e[t], n, o.o)
    };

function Rt(t) {
    return t.includes("ref") ? [...t.filter((t => "ref" !== t)), "ref"] : t
}
var Pt = !1,
    Ft = !1,
    Lt = !1,
    Tt = !1,
    Ut = (t, o, n) => {
        var i;
        const r = o.h[n];
        let e, a, l, s = 0;
        if (Pt || (Lt = !0, "slot" === r.j && (r.o |= r.h ? 2 : 1)), null !== r.p) e = r.$ = E.document.createTextNode(r.p);
        else if (1 & r.o) e = r.$ = E.document.createTextNode(""), Et(null, r, Tt);
        else {
            if (Tt || (Tt = "svg" === r.j), !E.document) throw Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
            if (e = r.$ = E.document.createElementNS(Tt ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !Pt && 2 & r.o ? "slot-fb" : r.j), Tt && "foreignObject" === r.j && (Tt = !1), Et(null, r, Tt), null != xt && void 0 !== xt && e["s-si"] !== xt && e.classList.add(e["s-si"] = xt), r.h)
                for (s = 0; s < r.h.length; ++s) a = Ut(t, r, s), a && e.appendChild(a);
            "svg" === r.j ? Tt = !1 : "foreignObject" === e.tagName && (Tt = !0)
        }
        return e["s-hn"] = vt, 3 & r.o && (e["s-sr"] = !0, e["s-cr"] = bt, e["s-sn"] = r.k || "", e["s-rf"] = null == (i = r.u) ? void 0 : i.ref, function(t) {
            if (t.assignedElements || t.assignedNodes || !t["s-sr"]) return;
            const o = o => function(t) {
                const n = [],
                    i = this["s-sn"];
                (null == t ? void 0 : t.flatten) && console.error("\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ");
                const r = this["s-cr"].parentElement;
                return (r.__childNodes ? r.childNodes : (t => {
                    const o = [];
                    for (let n = 0; n < t.length; n++) {
                        const i = t[n]["s-nr"] || void 0;
                        i && i.isConnected && o.push(i)
                    }
                    return o
                })(r.childNodes)).forEach((t => {
                    i === at(t) && n.push(t)
                })), o ? n.filter((t => 1 === t.nodeType)) : n
            }.bind(t);
            t.assignedElements = o(!0), t.assignedNodes = o(!1)
        }(e), l = t && t.h && t.h[n], l && l.j === r.j && t.$ && Bt(t.$, !1), Yt(bt, e, o.$, null == t ? void 0 : t.$)), e
    },
    Bt = (t, o) => {
        R.o |= 1;
        const n = Array.from(t.__childNodes || t.childNodes);
        for (let t = n.length - 1; t >= 0; t--) {
            const i = n[t];
            i["s-hn"] !== vt && i["s-ol"] && (Vt(It(i).parentNode, i, It(i)), i["s-ol"].remove(), i["s-ol"] = void 0, i["s-sh"] = void 0, Lt = !0), o && Bt(i, o)
        }
        R.o &= -2
    },
    At = (t, o, n, i, r, e) => {
        let a, l = t["s-cr"] && t["s-cr"].parentNode || t;
        for (l.shadowRoot && l.tagName === vt && (l = l.shadowRoot); r <= e; ++r) i[r] && (a = Ut(null, n, r), a && (i[r].$ = a, Vt(l, a, It(o))))
    },
    Dt = (t, o, n) => {
        for (let i = o; i <= n; ++i) {
            const o = t[i];
            if (o) {
                const t = o.$;
                Jt(o), t && (Ft = !0, t["s-ol"] ? t["s-ol"].remove() : Bt(t, !0), t.remove())
            }
        }
    },
    Ht = (t, o, n = !1) => t.j === o.j && ("slot" === t.j ? t.k === o.k : n ? (n && !t.v && o.v && (t.v = o.v), !0) : t.v === o.v),
    It = t => t && t["s-ol"] || t,
    Wt = (t, o, n = !1) => {
        const i = o.$ = t.$,
            r = t.h,
            e = o.h,
            a = o.j,
            l = o.p;
        let s;
        null === l ? (Et(t, o, Tt = "svg" === a || "foreignObject" !== a && Tt), null !== r && null !== e ? ((t, o, n, i, r = !1) => {
            let e, a, l = 0,
                s = 0,
                p = 0,
                c = 0,
                d = o.length - 1,
                m = o[0],
                f = o[d],
                g = i.length - 1,
                u = i[0],
                h = i[g];
            for (; l <= d && s <= g;)
                if (null == m) m = o[++l];
                else if (null == f) f = o[--d];
            else if (null == u) u = i[++s];
            else if (null == h) h = i[--g];
            else if (Ht(m, u, r)) Wt(m, u, r), m = o[++l], u = i[++s];
            else if (Ht(f, h, r)) Wt(f, h, r), f = o[--d], h = i[--g];
            else if (Ht(m, h, r)) "slot" !== m.j && "slot" !== h.j || Bt(m.$.parentNode, !1), Wt(m, h, r), Vt(t, m.$, f.$.nextSibling), m = o[++l], h = i[--g];
            else if (Ht(f, u, r)) "slot" !== m.j && "slot" !== h.j || Bt(f.$.parentNode, !1), Wt(f, u, r), Vt(t, f.$, m.$), f = o[--d], u = i[++s];
            else {
                for (p = -1, c = l; c <= d; ++c)
                    if (o[c] && null !== o[c].v && o[c].v === u.v) {
                        p = c;
                        break
                    }
                p >= 0 ? (a = o[p], a.j !== u.j ? e = Ut(o && o[s], n, p) : (Wt(a, u, r), o[p] = void 0, e = a.$), u = i[++s]) : (e = Ut(o && o[s], n, s), u = i[++s]), e && Vt(It(m.$).parentNode, e, It(m.$))
            }
            l > d ? At(t, null == i[g + 1] ? null : i[g + 1].$, n, i, s, g) : s > g && Dt(o, l, d)
        })(i, r, o, e, n) : null !== e ? (null !== t.p && (i.textContent = ""), At(i, null, o, e, 0, e.length - 1)) : !n && null !== r && Dt(r, 0, r.length - 1), Tt && "svg" === a && (Tt = !1)) : (s = i["s-cr"]) ? s.parentNode.textContent = l : t.p !== l && (i.data = l)
    },
    _t = [],
    qt = t => {
        let o, n, i;
        const r = t.__childNodes || t.childNodes;
        for (const t of r) {
            if (t["s-sr"] && (o = t["s-cr"]) && o.parentNode) {
                n = o.parentNode.__childNodes || o.parentNode.childNodes;
                const r = t["s-sn"];
                for (i = n.length - 1; i >= 0; i--)
                    if (o = n[i], !o["s-cn"] && !o["s-nr"] && o["s-hn"] !== t["s-hn"])
                        if (et(o, r)) {
                            let n = _t.find((t => t.O === o));
                            Ft = !0, o["s-sn"] = o["s-sn"] || r, n ? (n.O["s-sh"] = t["s-hn"], n.N = t) : (o["s-sh"] = t["s-hn"], _t.push({
                                N: t,
                                O: o
                            })), o["s-sr"] && _t.map((t => {
                                et(t.O, o["s-sn"]) && (n = _t.find((t => t.O === o)), n && !t.N && (t.N = n.N))
                            }))
                        } else _t.some((t => t.O === o)) || _t.push({
                            O: o
                        })
            }
            1 === t.nodeType && qt(t)
        }
    },
    Jt = t => {
        t.u && t.u.ref && t.u.ref(null), t.h && t.h.map(Jt)
    },
    Vt = (t, o, n) => ("string" == typeof o["s-sn"] && o["s-sr"] && o["s-cr"] && Yt(o["s-cr"], o, t, o.parentElement), null == t ? void 0 : t.insertBefore(o, n));

function Yt(t, o, n, i) {
    var r, e;
    let a;
    if (t && "string" == typeof o["s-sn"] && o["s-sr"] && t.parentNode && t.parentNode["s-sc"] && (a = o["s-si"] || t.parentNode["s-sc"])) {
        const t = o["s-sn"],
            l = o["s-hn"];
        if (null == (r = n.classList) || r.add(a + "-s"), i && (null == (e = i.classList) ? void 0 : e.contains(a + "-s"))) {
            let o = (i.__childNodes || i.childNodes)[0],
                n = !1;
            for (; o;) {
                if (o["s-sn"] !== t && o["s-hn"] === l && o["s-sr"]) {
                    n = !0;
                    break
                }
                o = o.nextSibling
            }
            n || i.classList.remove(a + "-s")
        }
    }
}
var Zt = (t, o) => {
        if (o && !t.M && o["s-p"]) {
            const n = o["s-p"].push(new Promise((i => t.M = () => {
                o["s-p"].splice(n - 1, 1), i()
            })))
        }
    },
    Gt = (t, o) => {
        if (t.o |= 16, 4 & t.o) return void(t.o |= 512);
        Zt(t, t.C);
        const n = () => Kt(t, o);
        if (!o) return q(n);
        queueMicrotask((() => {
            n()
        }))
    },
    Kt = (t, o) => {
        const n = t.$hostElement$,
            i = t.t;
        if (!i) throw Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
        let r;
        return o ? (t.o |= 256, t.R && (t.R.map((([t, o]) => eo(i, t, o, n))), t.R = void 0), r = eo(i, "componentWillLoad", void 0, n)) : r = eo(i, "componentWillUpdate", void 0, n), r = Qt(r, (() => eo(i, "componentWillRender", void 0, n))), Qt(r, (() => to(t, i, o)))
    },
    Qt = (t, o) => Xt(t) ? t.then(o).catch((t => {
        console.error(t), o()
    })) : o(),
    Xt = t => t instanceof Promise || t && t.then && "function" == typeof t.then,
    to = async (t, o, n) => {
        var i;
        const r = t.$hostElement$,
            e = r["s-rc"];
        n && (t => {
            const o = t.P,
                n = t.$hostElement$,
                i = o.o,
                r = ((t, o, n) => {
                    var i;
                    const r = pt(o, n),
                        e = O.get(r);
                    if (!E.document) return r;
                    if (t = 11 === t.nodeType ? t : E.document, e)
                        if ("string" == typeof e) {
                            let n, a = st.get(t = t.head || t);
                            if (a || st.set(t, a = new Set), !a.has(r)) {
                                {
                                    n = E.document.createElement("style"), n.innerHTML = e;
                                    const r = null != (i = R.F) ? i : Y(E.document);
                                    if (null != r && n.setAttribute("nonce", r), !(1 & o.o))
                                        if ("HEAD" === t.nodeName) {
                                            const o = t.querySelectorAll("link[rel=preconnect]"),
                                                i = o.length > 0 ? o[o.length - 1].nextSibling : t.querySelector("style");
                                            t.insertBefore(n, (null == i ? void 0 : i.parentNode) === t ? i : null)
                                        } else if ("host" in t)
                                        if (L) {
                                            const o = new CSSStyleSheet;
                                            o.replaceSync(e), T ? t.adoptedStyleSheets.unshift(o) : t.adoptedStyleSheets = [o, ...t.adoptedStyleSheets]
                                        } else {
                                            const o = t.querySelector("style");
                                            o ? o.innerHTML = e + o.innerHTML : t.prepend(n)
                                        }
                                    else t.append(n);
                                    1 & o.o && t.insertBefore(n, null)
                                }
                                4 & o.o && (n.innerHTML += M), a && a.add(r)
                            }
                        } else t.adoptedStyleSheets.includes(e) || (T ? t.adoptedStyleSheets.push(e) : t.adoptedStyleSheets = [...t.adoptedStyleSheets, e]);
                    return r
                })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), o, t.S);
            10 & i && (n["s-sc"] = r, n.classList.add(r + "-h"))
        })(t);
        oo(t, o, r, n), e && (e.map((t => t())), r["s-rc"] = void 0); {
            const o = null != (i = r["s-p"]) ? i : [],
                n = () => no(t);
            0 === o.length ? n() : (Promise.all(o).then(n), t.o |= 4, o.length = 0)
        }
    },
    oo = (t, o, n, i) => {
        try {
            o = o.render && o.render(), t.o &= -17, t.o |= 2, ((t, o, n = !1) => {
                var i, r, e, a;
                const l = t.$hostElement$,
                    s = t.P,
                    p = t.L || dt(null, null),
                    c = (t => t && t.j === mt)(o) ? o : ct(null, null, o);
                if (vt = l.tagName, s.T && (c.u = c.u || {}, s.T.map((([t, o]) => c.u[o] = l[t]))), n && c.u)
                    for (const t of Object.keys(c.u)) l.hasAttribute(t) && !["key", "ref", "style", "class"].includes(t) && (c.u[t] = l[t]);
                if (c.j = null, c.o |= 4, t.L = c, c.$ = p.$ = l.shadowRoot || l, xt = l["s-sc"], Pt = !(!(1 & s.o) || 128 & s.o), bt = l["s-cr"], Ft = !1, Wt(p, c, n), R.o |= 1, Lt) {
                    qt(c.$);
                    for (const t of _t) {
                        const o = t.O;
                        if (!o["s-ol"] && E.document) {
                            const t = E.document.createTextNode("");
                            t["s-nr"] = o, Vt(o.parentNode, o["s-ol"] = t, o)
                        }
                    }
                    for (const t of _t) {
                        const o = t.O,
                            l = t.N;
                        if (l) {
                            const t = l.parentNode;
                            let n = l.nextSibling; {
                                let e = null == (i = o["s-ol"]) ? void 0 : i.previousSibling;
                                for (; e;) {
                                    let i = null != (r = e["s-nr"]) ? r : null;
                                    if (i && i["s-sn"] === o["s-sn"] && t === (i.__parentNode || i.parentNode)) {
                                        for (i = i.nextSibling; i === o || (null == i ? void 0 : i["s-sr"]);) i = null == i ? void 0 : i.nextSibling;
                                        if (!i || !i["s-nr"]) {
                                            n = i;
                                            break
                                        }
                                    }
                                    e = e.previousSibling
                                }
                            }(!n && t !== (o.__parentNode || o.parentNode) || (o.__nextSibling || o.nextSibling) !== n) && o !== n && (!o["s-hn"] && o["s-ol"] && (o["s-hn"] = o["s-ol"].parentNode.nodeName), Vt(t, o, n), 1 === o.nodeType && "SLOT-FB" !== o.tagName && (o.hidden = null != (e = o["s-ih"]) && e)), o && "function" == typeof l["s-rf"] && l["s-rf"](l)
                        } else 1 === o.nodeType && (n && (o["s-ih"] = null != (a = o.hidden) && a), o.hidden = !0)
                    }
                }
                Ft && nt(c.$), R.o &= -2, _t.length = 0, bt = void 0
            })(t, o, i)
        } catch (o) {
            z(o, t.$hostElement$)
        }
        return null
    },
    no = t => {
        const o = t.$hostElement$,
            n = t.t,
            i = t.C;
        eo(n, "componentDidRender", void 0, o), 64 & t.o ? eo(n, "componentDidUpdate", void 0, o) : (t.o |= 64, ao(o), eo(n, "componentDidLoad", void 0, o), t.U(o), i || ro()), t.B(o), t.M && (t.M(), t.M = void 0), 512 & t.o && W((() => Gt(t, !1))), t.o &= -517
    },
    io = t => {
        var o; {
            const n = k(t),
                i = null == (o = null == n ? void 0 : n.$hostElement$) ? void 0 : o.isConnected;
            return i && 2 == (18 & n.o) && Gt(n, !1), i
        }
    },
    ro = () => {
        W((() => zt(E, "appload", {
            detail: {
                namespace: "chat-widget"
            }
        })))
    },
    eo = (t, o, n, i) => {
        if (t && t[o]) try {
            return t[o](n)
        } catch (t) {
            z(t, i)
        }
    },
    ao = t => t.classList.add("hydrated"),
    lo = (t, o, n, i) => {
        const r = k(t);
        if (!r) return;
        if (!r) throw Error(`Couldn't find host element for "${i.l}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
        const e = r.$hostElement$,
            a = r.A.get(o),
            l = r.o,
            s = r.t;
        if (n = kt(n, i.D[o][0]), (!(8 & l) || void 0 === a) && n !== a && (!Number.isNaN(a) || !Number.isNaN(n)) && (r.A.set(o, n), s)) {
            if (i.H && 128 & l) {
                const t = i.H[o];
                t && t.map((t => {
                    try {
                        s[t](n, a, o)
                    } catch (t) {
                        z(t, e)
                    }
                }))
            }
            if (2 == (18 & l)) {
                if (s.componentShouldUpdate && !1 === s.componentShouldUpdate(n, a, o)) return;
                Gt(r, !1)
            }
        }
    },
    so = (t, o, n) => {
        var i, r;
        const e = t.prototype;
        if (o.D || o.H || t.watchers) {
            t.watchers && !o.H && (o.H = t.watchers);
            const a = Object.entries(null != (i = o.D) ? i : {});
            if (a.map((([t, [i]]) => {
                    if (31 & i || 2 & n && 32 & i) {
                        const {
                            get: r,
                            set: a
                        } = Object.getOwnPropertyDescriptor(e, t) || {};
                        r && (o.D[t][0] |= 2048), a && (o.D[t][0] |= 4096), (1 & n || !r) && Object.defineProperty(e, t, {
                            get() {
                                {
                                    if (!(2048 & o.D[t][0])) return ((t, o) => k(this).A.get(o))(0, t);
                                    const n = k(this),
                                        i = n ? n.t : e;
                                    if (!i) return;
                                    return i[t]
                                }
                            },
                            configurable: !0,
                            enumerable: !0
                        }), Object.defineProperty(e, t, {
                            set(r) {
                                const e = k(this);
                                if (e) {
                                    if (a) {
                                        const n = 32 & i ? this[t] : e.$hostElement$[t];
                                        return void 0 === n && e.A.get(t) ? r = e.A.get(t) : !e.A.get(t) && n && e.A.set(t, n), a.call(this, kt(r, i)), void lo(this, t, r = 32 & i ? this[t] : e.$hostElement$[t], o)
                                    } {
                                        if (!(1 & n && 4096 & o.D[t][0])) return lo(this, t, r, o), void(1 & n && !e.t && e.I.then((() => {
                                            4096 & o.D[t][0] && e.t[t] !== e.A.get(t) && (e.t[t] = r)
                                        })));
                                        const a = () => {
                                            const n = e.t[t];
                                            !e.A.get(t) && n && e.A.set(t, n), e.t[t] = kt(r, i), lo(this, t, e.t[t], o)
                                        };
                                        e.t ? a() : e.I.then((() => a()))
                                    }
                                }
                            }
                        })
                    } else 1 & n && 64 & i && Object.defineProperty(e, t, {
                        value(...o) {
                            var n;
                            const i = k(this);
                            return null == (n = null == i ? void 0 : i.W) ? void 0 : n.then((() => {
                                var n;
                                return null == (n = i.t) ? void 0 : n[t](...o)
                            }))
                        }
                    })
                })), 1 & n) {
                const n = new Map;
                e.attributeChangedCallback = function(t, i, r) {
                    R.jmp((() => {
                        var a;
                        const l = n.get(t);
                        if (this.hasOwnProperty(l)) r = this[l], delete this[l];
                        else {
                            if (e.hasOwnProperty(l) && "number" == typeof this[l] && this[l] == r) return;
                            if (null == l) {
                                const n = k(this),
                                    e = null == n ? void 0 : n.o;
                                if (n && e && !(8 & e) && 128 & e && r !== i) {
                                    const e = n.t,
                                        l = null == (a = o.H) ? void 0 : a[t];
                                    null == l || l.forEach((o => {
                                        null != e[o] && e[o].call(e, r, i, t)
                                    }))
                                }
                                return
                            }
                        }
                        const s = Object.getOwnPropertyDescriptor(e, l);
                        (r = (null !== r || "boolean" != typeof this[l]) && r) === this[l] || s.get && !s.set || (this[l] = r)
                    }))
                }, t.observedAttributes = Array.from(new Set([...Object.keys(null != (r = o.H) ? r : {}), ...a.filter((([t, o]) => 15 & o[0])).map((([t, i]) => {
                    var r;
                    const e = i[1] || t;
                    return n.set(e, t), 512 & i[0] && (null == (r = o.T) || r.push([t, e])), e
                }))]))
            }
        }
        return t
    },
    po = (t, o) => {
        eo(t, "connectedCallback", void 0, o)
    },
    co = (t, o) => {
        eo(t, "disconnectedCallback", void 0, o || t)
    },
    mo = (t, o = {}) => {
        var n;
        if (!E.document) return void console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
        const i = [],
            r = o.exclude || [],
            e = E.customElements,
            a = E.document.head,
            l = a.querySelector("meta[charset]"),
            s = E.document.createElement("style"),
            p = [];
        let c, d = !0;
        Object.assign(R, o), R.i = new URL(o.resourcesUrl || "./", E.document.baseURI).href;
        let m = !1;
        if (t.map((t => {
                t[1].map((o => {
                    var n;
                    const a = {
                        o: o[0],
                        l: o[1],
                        D: o[2],
                        _: o[3]
                    };
                    4 & a.o && (m = !0), a.D = o[2], a._ = o[3], a.T = [], a.H = null != (n = o[4]) ? n : {};
                    const l = a.l,
                        s = class extends HTMLElement {
                            constructor(t) {
                                if (super(t), this.hasRegisteredEventListeners = !1, ((t, o) => {
                                        const n = {
                                            o: 0,
                                            $hostElement$: t,
                                            P: o,
                                            A: new Map
                                        };
                                        n.W = new Promise((t => n.B = t)), n.I = new Promise((t => n.U = t)), t["s-p"] = [], t["s-rc"] = [];
                                        const i = n;
                                        t.__stencil__getHostRef = () => i
                                    })(t = this, a), 1 & a.o)
                                    if (t.shadowRoot) {
                                        if ("open" !== t.shadowRoot.mode) throw Error(`Unable to re-use existing shadow root for ${a.l}! Mode is set to ${t.shadowRoot.mode} but Stencil only supports open shadow roots.`)
                                    } else ot.call(t, a)
                            }
                            connectedCallback() {
                                const t = k(this);
                                t && (this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0, fo(this, t, a._)), c && (clearTimeout(c), c = null), d ? p.push(this) : R.jmp((() => (t => {
                                    if (!(1 & R.o)) {
                                        const o = k(t);
                                        if (!o) return;
                                        const n = o.P,
                                            i = () => {};
                                        if (1 & o.o) fo(t, o, n._), (null == o ? void 0 : o.t) ? po(o.t, t) : (null == o ? void 0 : o.I) && o.I.then((() => po(o.t, t)));
                                        else {
                                            o.o |= 1, 12 & n.o && (t => {
                                                if (!E.document) return;
                                                const o = t["s-cr"] = E.document.createComment("");
                                                o["s-cn"] = !0, Vt(t, o, t.firstChild)
                                            })(t); {
                                                let n = t;
                                                for (; n = n.parentNode || n.host;)
                                                    if (n["s-p"]) {
                                                        Zt(o, o.C = n);
                                                        break
                                                    }
                                            }
                                            n.D && Object.entries(n.D).map((([o, [n]]) => {
                                                if (31 & n && t.hasOwnProperty(o)) {
                                                    const n = t[o];
                                                    delete t[o], t[o] = n
                                                }
                                            })), (async (t, o, n) => {
                                                let i;
                                                if (!(32 & o.o)) {
                                                    if (o.o |= 32, n.q) {
                                                        const r = ((t, o) => {
                                                            const n = t.l.replace(/-/g, "_"),
                                                                i = t.q;
                                                            if (!i) return;
                                                            const r = S.get(i);
                                                            return r ? r[n] : import (`./${i}.entry.js`).then((t => (S.set(i, t), t[n])), (t => {
                                                                z(t, o.$hostElement$)
                                                            }))
                                                            /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
                                                        })(n, o);
                                                        if (r && "then" in r) {
                                                            const t = () => {};
                                                            i = await r, t()
                                                        } else i = r;
                                                        if (!i) throw Error(`Constructor for "${n.l}#${o.S}" was not found`);
                                                        i.isProxied || (n.H = i.watchers, so(i, n, 2), i.isProxied = !0);
                                                        const e = () => {};
                                                        o.o |= 8;
                                                        try {
                                                            new i(o)
                                                        } catch (o) {
                                                            z(o, t)
                                                        }
                                                        o.o &= -9, o.o |= 128, e(), po(o.t, t)
                                                    } else i = t.constructor, customElements.whenDefined(t.localName).then((() => o.o |= 128));
                                                    if (i && i.style) {
                                                        let r;
                                                        "string" == typeof i.style ? r = i.style : "string" != typeof i.style && (o.S = (t => N.map((o => o(t))).find((t => !!t)))(t), o.S && (r = i.style[o.S]));
                                                        const e = pt(n, o.S);
                                                        if (!O.has(e)) {
                                                            const t = () => {};
                                                            ((t, o, n) => {
                                                                let i = O.get(t);
                                                                L && n ? (i = i || new CSSStyleSheet, "string" == typeof i ? i = o : i.replaceSync(o)) : i = o, O.set(t, i)
                                                            })(e, r, !!(1 & n.o)), t()
                                                        }
                                                    }
                                                }
                                                const r = o.C,
                                                    e = () => Gt(o, !0);
                                                r && r["s-rc"] ? r["s-rc"].push(e) : e()
                                            })(t, o, n)
                                        }
                                        i()
                                    }
                                })(this))))
                            }
                            disconnectedCallback() {
                                R.jmp((() => (async t => {
                                    if (!(1 & R.o)) {
                                        const o = k(t);
                                        (null == o ? void 0 : o.J) && (o.J.map((t => t())), o.J = void 0), (null == o ? void 0 : o.t) ? co(o.t, t): (null == o ? void 0 : o.I) && o.I.then((() => co(o.t, t)))
                                    }
                                    st.has(t) && st.delete(t), t.shadowRoot && st.has(t.shadowRoot) && st.delete(t.shadowRoot)
                                })(this))), R.raf((() => {
                                    var t;
                                    const o = k(this);
                                    if (!o) return;
                                    const n = p.findIndex((t => t === this));
                                    n > -1 && p.splice(n, 1), (null == (t = null == o ? void 0 : o.L) ? void 0 : t.$) instanceof Node && !o.L.$.isConnected && delete o.L.$
                                }))
                            }
                            componentOnReady() {
                                var t;
                                return null == (t = k(this)) ? void 0 : t.I
                            }
                        };
                    a.q = t[0], r.includes(l) || e.get(l) || (i.push(l), e.define(l, so(s, a, 1)))
                }))
            })), i.length > 0 && (m && (s.textContent += M), s.textContent += i.sort() + "{visibility:hidden}.hydrated{visibility:inherit}", s.innerHTML.length)) {
            s.setAttribute("data-styles", "");
            const t = null != (n = R.F) ? n : Y(E.document);
            null != t && s.setAttribute("nonce", t), a.insertBefore(s, l ? l.nextSibling : a.firstChild)
        }
        d = !1, p.length ? p.map((t => t.connectedCallback())) : R.jmp((() => c = setTimeout(ro, 30)))
    },
    fo = (t, o, n) => {
        n && E.document && n.map((([n, i, r]) => {
            const e = uo(E.document, t, n),
                a = go(o, r),
                l = ho(n);
            R.ael(e, i, a, l), (o.J = o.J || []).push((() => R.rel(e, i, a, l)))
        }))
    },
    go = (t, o) => n => {
        var i;
        try {
            256 & t.o ? null == (i = t.t) || i[o](n) : (t.R = t.R || []).push([o, n])
        } catch (o) {
            z(o, t.$hostElement$)
        }
    },
    uo = (t, o, n) => 4 & n ? t : 8 & n ? E : 16 & n ? t.body : o,
    ho = t => ({
        passive: !!(1 & t),
        capture: !!(2 & t)
    }),
    xo = t => R.F = t;
export {
    y as B, mt as H, x as a, mo as b, o as c, jt as d, $t as e, _ as f, v as g, ct as h, r as i, io as j, J as k, F as p, j as r, xo as s, q as w
}