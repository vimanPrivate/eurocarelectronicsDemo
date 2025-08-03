(() => {
    "use strict";

    function p() {
        0
    }

    function i() {
        try {
            return window.self !== window.top
        } catch (e) {
            return 1
        }
    }

    function h(e, n) {
        let r = e;
        if (e || (r = document.location.href), r && n) {
            let t = new URL(r);
            p(r), Object.keys(n).forEach(e => {
                t.searchParams.has(e) || t.searchParams.append(e, n[e])
            }), p(t.href), r = t.href
        }
        return !e && i() && (r = document.referrer || r), r
    }

    function s(t) {
        const n = {};
        if (!t) return n;
        try {
            const e = new URL(t);
            return e.searchParams.forEach((e, t) => {
                n[t] = e
            }), n
        } catch (e) {
            return console.log("full url missing: ", t), n
        }
    }

    function l(e, t) {
        t = s(t || h());
        return e in t ? t[e] : ""
    }

    function _(e) {
        return l("utm_campaign", e) || l("campaign", e)
    }

    function v(e, t) {
        var n = l("rf");
        if (n && "string" == typeof n && "false" == n) return "";
        let r;
        try {
            t && "string" == typeof t && (r = new URL(t).host)
        } catch (e) {}
        if (e && !e.includes(r)) return e;
        e = l("hl_referrer");
        return e || (i() || !document.referrer || document.referrer.includes(document.location.origin) ? "" : document.referrer)
    }

    function o(e) {
        try {
            const t = window[e],
                n = "__storage_test__";
            return t.setItem(n, n), t.removeItem(n), 1
        } catch (e) {
            return
        }
    }

    function y(e) {
        if (o("localStorage")) return localStorage.getItem(e)
    }

    function w(e, t) {
        o("localStorage") && localStorage.setItem(e, t)
    }

    function I(e) {
        o("localStorage") && localStorage.removeItem(e)
    }

    function b(e) {
        var t = function(e) {
            if (o("localStorage")) {
                var t = localStorage.getItem(e);
                if (!t) return null;
                t = JSON.parse(t);
                const n = new Date;
                return n.getTime() > t.expiry ? (localStorage.removeItem(e), null) : t.value
            }
        }(e);
        if (t) return t;
        e = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
        return e && e[2] ? e[2] : ""
    }

    function a(e, t, n) {
        if (o("localStorage")) {
            const r = new Date;
            n = {
                value: t,
                expiry: r.getTime() + n
            };
            localStorage.setItem(e, JSON.stringify(n))
        }
    }

    function d(e, n, r) {
        if (o("localStorage")) a(e, n, r ? 24 * r * 60 * 60 * 1e3 : 31536e6);
        else {
            let t = "";
            if (r) {
                let e = new Date;
                e.setTime(e.getTime() + 24 * r * 60 * 60 * 1e3), t = "; expires=" + e.toUTCString()
            }
            document.cookie = e + "=" + (n || "") + t + "; path=/"
        }
    }

    function S(t, n, r) {
        if (o("localStorage")) a(t, n, 60 * (r = r || 1) * 1e3);
        else {
            let e = "";
            if (r) {
                const i = new Date;
                i.setTime(i.getTime() + 60 * r * 1e3), e = "; expires=" + i.toUTCString()
            }
            document.cookie = t + "=" + (n || "") + e + "; path=/"
        }
    }
    const t = "v2_history",
        n = "v2_contact_session_";

    function k(e) {
        return (e = e || b("location_id")) ? `${t}_${e}` : t
    }

    function T(e) {
        return (e = e || b("location_id")) ? `${n}${e}_session_id` : `${n}id`
    }

    function N(e) {
        return `v2_session_history_${e=e||b("location_id")}`
    }

    function r(e) {
        return `v2_user_session_event_${e=e||b("location_id")}_fingerprint`
    }

    function O(e) {
        return `v3_first_session_event_${e}`
    }
    async function $(e, t) {
        try {
            return await (await fetch(e, {
                method: "POST",
                body: JSON.stringify(t),
                headers: {
                    "Content-Type": "application/json"
                }
            })).json()
        } catch (e) {
            return {}
        }
    }

    function D(e) {
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch (e) {
            return console.log(e), null
        }
    }
    class e {
        constructor(e, t) {
            this.baseUrl = function() {
                const e = document.getElementsByTagName("script");
                for (var t = 0; t < e.length; t++)
                    if (e[t].src && (e[t].src.includes("user-session") || e[t].src.includes("user_session"))) return e[t].src.includes("staging=true") ? "https://staging.services.msgsndr.com/attribution_service" : "https://services.msgsndr.com/attribution_service";
                return "https://services.msgsndr.com/attribution_service"
            }(), this.locationId = e, this.fingerprint = t
        }
        eventData(e, t) {
            let n, r;
            this.locationId && ((i = y(N(this.locationId))) && (n = i), r = b(O(this.locationId))), p(this.locationId, r);
            var i = h(e, null === r || void 0 === r ? void 0 : r.url_params);
            return {
                source: function(e, t) {
                    if ("" === e) return "direct";
                    if (e.includes("google")) return t.includes("gclid") ? "google paid" : "google organic";
                    if (e.includes("twitter")) return "twitter";
                    if (e.includes("bing")) return t.includes("msclkid") ? "bing paid" : "bing organic";
                    if (e.includes("facebook")) return "facebook";
                    if (e.includes("yahoo")) return t.includes("dclid") || t.includes("yahoo") ? "yahoo paid" : "yahoo organic";
                    if (e.includes("duckduckgo")) return "duckduckgo"; {
                        const n = document.createElement("a");
                        return n.setAttribute("href", e), n.hostname
                    }
                }(v(t, e), document.location.href),
                referrer: v(t, e) || (null === r || void 0 === r ? void 0 : r.referrer) || "",
                keyword: l("keyword", e = i) || l("utm_term", e) || l("utm_content", e),
                adSource: function(e) {
                    if (l("gclid", e)) return "adword";
                    if (l("msclkid", e)) return "bing";
                    if (l("dclid", e)) return "yahoo";
                    const t = l("utm_source", e);
                    return e = _(e), t && "facebook" == t.toLowerCase() && e ? "facebook" : t && "fb_ad" == t.toLowerCase() && e ? "fb_ad" : t && "linkedin_ad" == t.toLowerCase() && e ? "linkedin_ad" : t && "twitter_ad" == t.toLowerCase() && e ? "twitter_ad" : ""
                }(i),
                url_params: s(i),
                page: {
                    url: i,
                    title: document.title
                },
                timestamp: Date.now(),
                campaign: _(i),
                contactSessionIds: D(n),
                fbp: b("_fbp"),
                fbc: b("_fbc")
            }
        }
        pageVisitData(e, t, n) {
            return Object.assign(Object.assign(Object.assign({}, this.eventData(e, t)), {
                type: "page-visit",
                parentId: l("trigger_link") ? l("trigger_link") : this.parentId || "",
                pageVisitType: l("trigger_link") ? "trigger-link" : this.type || "",
                domain: document.domain,
                version: "v3",
                parentName: this.parentName || "",
                fingerprint: null
            }), n)
        }
        async store(t, n, r, i, s, o, a) {
            this.locationId = t;
            var c = this.fingerprint || b("fingerprint"),
                u = b(T(t));
            if (this.type = n, this.parentId = r, this.parentName = i, !/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)) {
                var l, d = v(o, s);
                if (u || S(T(t), "temp", 1), "temp" != u && (! function() {
                        const e = document.getElementsByTagName("script");
                        let t = !1;
                        for (var n = 0; n < e.length; n++) e[n].src && e[n].src.includes("cdn.msgsndr.com/_preview") && (t = !0);
                        return t
                    }() || "text-widget" != n)) {
                    u || (p(T(t)), I(k(t))), u && S(T(t), u, 30);
                    let e = D(y(k(t)));
                    if (p(e), e && e.sessions && (g = e.sessions[e.sessions.length - 1], f = h(s, null == (l = b(O(t))) ? void 0 : l.url_params), g.referrer == (v(o, s) || (null == l ? void 0 : l.referrer) || "") && g.campaign == _(f) || (p((v(o, s), g.referrer)), u = e = null, I(k(t)))), e)
                        if (u && e && "call-swap" != n) {
                            p(e);
                            var f = e.sessions,
                                g = this.pageVisitData(s, o, a);
                            try {
                                m = await $(`${this.baseUrl}/user_session_v3/update_session/${u}`, {
                                    locationId: t,
                                    sessions: g
                                });
                                g.fingerprint = m.fingerprint, w(k(t), JSON.stringify({
                                    sessions: [...f, g]
                                }))
                            } catch (e) {
                                console.log(e)
                            }
                        } else I(k(t)), await this.store(t, n, r, i, s, o);
                    else {
                        a = this.pageVisitData(s, o, a);
                        try {
                            var m = await $(`${this.baseUrl}/user_session_v3/create_session`, {
                                sessions: a,
                                initialReferrer: d,
                                locationId: t,
                                fingerprint: c,
                                sessionId: u
                            });
                            u && u == m.sessionId || S(T(t), m.sessionId, 30), a.fingerprint = m.fingerprint, w(k(t), JSON.stringify({
                                sessions: [a]
                            }));
                            let e = D(y(N(t)));
                            e ? e.ids.push(m.sessionId) : (e = {
                                ids: [m.sessionId]
                            }, S(O(t), a, 30)), p(e), w(N(t), JSON.stringify(e))
                        } catch (e) {
                            console.log(e), I(k(t))
                        }
                    }
                }
            }
        }
        async create(e, t, n, r, i, s, o) {
            var a = b(T(this.locationId = e)),
                c = l("sessionId");
            let u = a && "temp" != a ? 10 : 100;
            setTimeout(async () => {
                c && d(T(e), c, 365), await this.store(e, t, n, r, i, s, o)
            }, u)
        }
        update(e) {
            var t = e.sessionId || "",
                e = e.locationId || "";
            this.locationId = e, t && (S(T(e), t, 30), I(N(e)))
        }
        getCookie(e) {
            return b(e)
        }
        setCookies(e, t) {
            e && t && d(e, t)
        }
        getSessionId(e) {
            return b(T(e || this.locationId))
        }
        getUserFingerprint(e) {
            return b(r(e || this.locationId))
        }
        setUserFingerprint(e, t) {
            return d(r(e || this.locationId), t)
        }
    }
    var c = "undefined" == typeof window ? {} : window;
    c.userSessionAttribution || (c.userSessionAttribution = new e)
})();