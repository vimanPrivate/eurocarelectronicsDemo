import {
    k as e
} from "./p-d8LhMu2H.js";
const t = "lead-connecter-text-widget-prompt-dismissed",
    o = "lead-connecter-text-widget-input-values",
    a = "lead-connecter-live-widget-message-data",
    r = "lead-connecter-live-chat-unsent-message",
    n = "lead-connecter-widget-was-offline";
var s, i, l, c;
! function(e) {
    e[e.INIT = 0] = "INIT", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETED = 2] = "COMPLETED", e[e.ERROR = 3] = "ERROR"
}(s || (s = {})),
function(e) {
    e[e.NOT_VALIDATED = 0] = "NOT_VALIDATED", e[e.REQUIRED = 1] = "REQUIRED", e[e.INVALID = 2] = "INVALID", e[e.VALID = 3] = "VALID"
}(i || (i = {})),
function(e) {
    e.EMAIL_SMS_CHAT = "emailChat", e.LIVE_CHAT = "liveChat", e.WA_CHAT = "waChat", e.ALL_IN_ONE_CHAT = "allInOneChat", e.LIVE_PLUS_EMAIL_CHAT = "both"
}(l || (l = {})),
function(e) {
    e.FEEDBACK = "feedback", e.CONTACT_DETAILS_REQUESTED = "CONTACT_DETAILS_REQUESTED", e.USER_INACTIVITY = "USER_INACTIVITY", e.VISITOR_INACTIVITY = "VISITOR_INACTIVITY", e.ACKNOWLEDGEMENT = "ACKNOWLEDGEMENT", e.MESSAGE = "MESSAGE", e.TYPING_OFF = "TYPING_OFF", e.TYPING_ON = "TYPING_ON", e.OUTSIDE_OFFICE_HOURS = "OUTSIDE_OFFICE_HOURS", e.CHAT_SELECTION = "CHAT_SELECTION"
}(c || (c = {}));
const d = {
        name: {
            id: "1",
            name: "name",
            type: "text",
            placeholder: "Name",
            label: "Name",
            fieldKey: "contact.name",
            isRequired: !0
        },
        phone: {
            id: "2",
            name: "phone",
            type: "tel",
            placeholder: "Phone",
            label: "Phone",
            fieldKey: "contact.phone",
            isRequired: !0
        },
        email: {
            id: "3",
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            fieldKey: "contact.email",
            isRequired: !0
        },
        message: {
            id: "4",
            name: "message",
            type: "textarea",
            placeholder: "Message",
            label: "Message",
            fieldKey: "contact.message",
            isRequired: !0
        }
    },
    f = "lc-captcha",
    p = {
        en: "en-us",
        de: "de",
        fr: "fr-fr",
        nl: "nl",
        nl_BE: "nl",
        hu: "hu",
        pt: "pt-pt",
        es: "es"
    };
var u, g;
! function(e) {
    e.ChatWidget = "chat_widget", e.WAChatWidget = "whatsapp_chat_widget"
}(u || (u = {})),
function(e) {
    e.CONTACT_DETAILS_REQUESTED = "CONTACT_DETAILS_REQUESTED"
}(g || (g = {}));
const m = {
        [g.CONTACT_DETAILS_REQUESTED]: "contact_details_requested"
    },
    h = "lc-chat-widget-enter-contact-details-msg";
var w, b;
! function(e) {
    e.TOP_LEFT = "top-left", e.TOP_CENTER = "top-center", e.TOP_RIGHT = "top-right", e.BOTTOM_LEFT = "bottom-left", e.BOTTOM_CENTER = "bottom-center", e.BOTTOM_RIGHT = "bottom-right", e.MIDDLE_LEFT = "middle-left", e.MIDDLE_CENTER = "middle-center", e.MIDDLE_RIGHT = "middle-right"
}(w || (w = {})),
function(e) {
    e.AVATAR = "avatar"
}(b || (b = {}));
const v = {
        MESSAGE_CHAT_CIRCLE: "messageChatCircle",
        MESSAGE_CHAT_SQUARE: "messageChatSquare",
        MESSAGE_SQUARE: "messageSquare",
        MESSAGE_DOTS_CIRCLE: "messageDotsCircle",
        MESSAGE_WHATSAPP: "messageWhatsApp"
    },
    x = {
        CHECK: "Check",
        CIRCLE_CHECK: "CheckCircle",
        MESSAGE_DOTS_CIRCLE: "MessageDotsCircle",
        MESSAGE_SMILE_SQUARE: "MessageSmileSquare"
    },
    C = {
        "en-US": "en-us",
        "fr-CA": "fr-ca",
        "fr-FR": "fr-fr",
        "pt-PT": "pt-pt",
        "pt-BR": "pt-br",
        sv: "sv-se",
        da: "da-dk",
        fr_CA: "fr-ca",
        fr_FR: "fr-fr",
        pt_PT: "pt-pt",
        pt_BR: "pt-br"
    },
    I = "blue",
    y = "teal",
    E = "tan",
    k = "lavender",
    T = "golden",
    S = "custom",
    M = {
        [I]: {
            name: I,
            colors: {
                chatBubbleColor: "#155EEF",
                backgroundColor: "#ffffff",
                headerColor: "#0040C1",
                buttonColor: "#155EEF",
                avatarBackgroundColor: "#ffffff",
                avatarBorderColor: "#155EEF",
                senderMessageColor: "#155EEF",
                receivedMessageColor: "#F2F4F7"
            },
            typography: {
                fontFamily: "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                colors: {
                    senderMessageTextColor: "#ffffff",
                    receivedMessageTextColor: "#111828",
                    headerMessageTextColor: "#ffffff",
                    systemMessageTextColor: "#344054",
                    welcomeMessageTextColor: "#344054"
                }
            }
        }
    },
    O = Object.assign(Object.assign({}, M), {
        [y]: {
            name: y,
            colors: {
                chatBubbleColor: "#039855",
                backgroundColor: "#ffffff",
                headerColor: "#05603A",
                buttonColor: "#039855",
                avatarBackgroundColor: "#ffffff",
                avatarBorderColor: "#039855",
                senderMessageColor: "#039855",
                receivedMessageColor: "#F2F4F7"
            },
            typography: {
                fontFamily: "Roboto",
                colors: {
                    senderMessageTextColor: "#ffffff",
                    receivedMessageTextColor: "#111828",
                    headerMessageTextColor: "#ffffff",
                    systemMessageTextColor: "#344054",
                    welcomeMessageTextColor: "#344054"
                }
            }
        },
        [E]: {
            name: "tan",
            colors: {
                chatBubbleColor: "#E04F16",
                backgroundColor: "#ffffff",
                headerColor: "#932F19",
                buttonColor: "#E04F16",
                avatarBackgroundColor: "#ffffff",
                avatarBorderColor: "#E04F16",
                senderMessageColor: "#E04F16",
                receivedMessageColor: "#F2F4F7"
            },
            typography: {
                fontFamily: "Roboto",
                colors: {
                    senderMessageTextColor: "#ffffff",
                    receivedMessageTextColor: "#111828",
                    headerMessageTextColor: "#ffffff",
                    systemMessageTextColor: "#344054",
                    welcomeMessageTextColor: "#344054"
                }
            }
        },
        [T]: {
            name: T,
            colors: {
                chatBubbleColor: "#CA8504",
                backgroundColor: "#ffffff",
                headerColor: "#854A0E",
                buttonColor: "#CA8504",
                avatarBackgroundColor: "#ffffff",
                avatarBorderColor: "#CA8504",
                senderMessageColor: "#CA8504",
                receivedMessageColor: "#F2F4F7"
            },
            typography: {
                fontFamily: "Roboto",
                colors: {
                    senderMessageTextColor: "#ffffff",
                    receivedMessageTextColor: "#111828",
                    headerMessageTextColor: "#ffffff",
                    systemMessageTextColor: "#344054",
                    welcomeMessageTextColor: "#344054"
                }
            }
        },
        [k]: {
            name: k,
            colors: {
                chatBubbleColor: "#6938EF",
                backgroundColor: "#ffffff",
                headerColor: "#4A1FB8",
                buttonColor: "#6938EF",
                avatarBackgroundColor: "#ffffff",
                avatarBorderColor: "#6938EF",
                senderMessageColor: "#6938EF",
                receivedMessageColor: "#F2F4F7"
            },
            typography: {
                fontFamily: "Roboto",
                colors: {
                    senderMessageTextColor: "#ffffff",
                    receivedMessageTextColor: "#111828",
                    headerMessageTextColor: "#ffffff",
                    systemMessageTextColor: "#344054",
                    welcomeMessageTextColor: "#344054"
                }
            }
        },
        [S]: {
            name: S,
            colors: M[I].colors,
            typography: M[I].typography
        }
    }),
    _ = "#12b76a";
let N = null,
    F = null;
const A = async function({
        serverConfig: e,
        conversationId: t,
        lastMessageId: o = "",
        pageLimit: a = 10,
        isDummy: r = !1
    }) {
        if (r) return new Promise((e => {
            setTimeout((() => {
                e({
                    messages: [{
                        _id: "abc",
                        body: "How are you",
                        direction: "incoming",
                        dateAdded: "2023-09-26T14:36:49.566Z",
                        messageType: 29
                    }, {
                        _id: "abc",
                        body: "I am good",
                        direction: "outgoing",
                        dateAdded: "2023-09-26T14:36:49.566Z",
                        messageType: 29
                    }],
                    lastMessageId: "24"
                })
            }), 2e3)
        }));
        let n = await fetch(e.marketplaceURL + `/conversations/providers/live-chat/messages/search?conversationId=${t}&locationId=${e.locationId}&lastMessageId=${o}&pageLimit=${a}`, {
            method: "GET",
            headers: te({
                locationId: e.locationId,
                widgetId: e.widgetId,
                defaultWidget: e.defaultWidget,
                developerVersion: e.developerVersion
            })
        });
        return n.ok ? await n.json() : void 0
    },
    $ = async function({
        serverConfig: e,
        messageText: t,
        isDummy: o = !1
    }) {
        if (o) return new Promise((e => {
            setTimeout((() => {
                e({
                    locationId: "hgHI41V5EbRCGvQ6p4TD",
                    visitorId: "6c824709-c715-4236-9c39-630d37c899aa",
                    conversationId: "wY7PF1PGLszMIw7LifDq",
                    token: "123",
                    messageDetails: {
                        id: "PQp1TkzluJ8dmb82gLEk",
                        dateAdded: "2023-09-26T17:23:39.981Z"
                    },
                    traceId: "da4c5312-3139-970b-8201-8e5dc0b4918e"
                })
            }), 2e3)
        }));
        const a = async () => {
            const o = ee({
                locationId: e.locationId,
                message: t,
                widgetId: e.widgetId,
                defaultWidget: e.defaultWidget
            });
            return fetch(e.marketplaceURL + "/conversations/providers/live-chat/messages", {
                method: "POST",
                body: JSON.stringify(o),
                headers: te({
                    locationId: e.locationId,
                    widgetId: e.widgetId,
                    defaultWidget: e.defaultWidget,
                    developerVersion: e.developerVersion
                })
            }).then((e => e.text().then((t => ({
                response: e,
                responseBody: t
            }))))).then((({
                response: e,
                responseBody: t
            }) => {
                if (e.ok) return JSON.parse(t);
                if (400 === e.status) {
                    const e = JSON.parse(t);
                    if (e.message.includes("clear conversation id and token")) throw new Error("ConversationIsDeleted");
                    throw new Error("Bad Request: " + e.message)
                }
                throw new Error("Request failed")
            }))
        };
        return a().catch((t => {
            if ("ConversationIsDeleted" === t.message) {
                if (Y(e.locationId, e.widgetId), e.enableContactForm) throw t;
                return a().then((e => (e.errorMessage = !0, e)))
            }
            throw t
        }))
    },
    R = async function({
        serverConfig: e,
        feedback: t,
        isDummy: o = !1
    }) {
        if (o) return new Promise((e => {
            setTimeout((() => {
                e({
                    success: "true",
                    traceId: "da4c5312-3139-970b-8201-8e5dc0b4918e"
                })
            }), 2e3)
        }));
        const a = K({
                locationId: e.locationId,
                widgetId: e.widgetId,
                defaultWidget: e.defaultWidget
            }),
            r = {
                locationId: e.locationId,
                conversationId: a.conversationId,
                feedback: t,
                type: "Live_Chat"
            };
        let n = await fetch(e.marketplaceURL + "/conversations/providers/live-chat/feedback", {
            method: "POST",
            body: JSON.stringify(r),
            headers: te({
                locationId: e.locationId,
                widgetId: e.widgetId,
                defaultWidget: e.defaultWidget,
                developerVersion: e.developerVersion
            })
        });
        if (n.ok) return await n.json();
        throw new Error("responseData.")
    },
    D = function({
        socketLib: e,
        serverConfig: t,
        isDummy: o = !1,
        onMessage: a
    }) {
        if (F = null, N) {
            if (N.connected) return F = a, N;
            N.disconnect(), N = null
        }
        F = a;
        const r = K({
                locationId: t.locationId,
                widgetId: t.widgetId,
                defaultWidget: t.defaultWidget
            }),
            n = e.connect(t.marketplaceURL, {
                path: "/sockets-live-chat/socket.io",
                transports: ["websocket"],
                reconnection: !0,
                connectionStateRecovery: !0,
                query: {
                    authorization: `Bearer ${o?"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsIjoiQ0hBVF9XSURHRVQiLCJzb3VyY2UiOiJDSEFUX1dJREdFVF9WSVNJVE9SIiwic291cmNlSWQiOiIiLCJhdXRoQ2xhc3MiOiJWaXNpdG9yIiwiYXV0aENsYXNzSWQiOiJhZGVtb3Zpc3RvcklkIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoiIiwiaWF0IjoxNjk2ODQ4NzM5LjI2MywiZXhwIjoxNzEyNDAwNzM5LjI2M30.Ws7H63LXWZ7sjwxgTIzb6HfaHqo5_zW9uTN6zD4mQGk":r.token}`,
                    channel: "CHAT_WIDGET",
                    source: "CHAT_WIDGET_VISITOR",
                    authClassId: o ? "ademovistorId" : r.visitorId,
                    path: "/sockets-live-chat/socket.io",
                    version: "2021-07-28",
                    locationId: o ? "ademolocationId1" : t.locationId,
                    visitorId: o ? "ademovistorId" : r.visitorId
                }
            });
        return n.on("connect", (() => {})), n.on("sendMessage", (e => {
            F && (F && N && N.connected && F(e))
        })), n.on("connectionState", (() => {})), n.on("disconnect", (e => {
            console.log("disconnect", e), F = null, "io server disconnect" === e && n.connect(), "io client disconnect" === e && (n.disconnect(), F = null, Z({
                data: {
                    locationId: t.locationId,
                    widgetId: t.widgetId,
                    socketConnected: !1
                }
            }))
        })), N = n, n
    },
    j = function(e, t = localStorage) {
        let o = t.getItem(e);
        if (null === o) o = {};
        else try {
            o = JSON.parse(o)
        } catch (t) {
            console.error("error reading local storage key:" + e), o = {}
        }
        return o
    },
    L = function(e = 86400, o = "") {
        let a = !0,
            r = !1,
            n = "",
            s = "";
        const i = j(o + t);
        if (i.hasOwnProperty("value") && i.value) {
            const t = i.expires_at,
                o = (new Date).getTime();
            t - o < 1e3 * e && t - o > 0 && (a = !1)
        }
        if (a) {
            const e = z();
            if (e.name) {
                r = !0, n = e.name;
                try {
                    s = n.split(" ")[0]
                } catch (e) {
                    console.warn(e)
                }
            }
        }
        return {
            showPrompt: a,
            isRevisit: r,
            userName: n,
            firstName: s
        }
    },
    V = function(e = 86400, o = "") {
        const a = (new Date).getTime() + 1e3 * e;
        localStorage.setItem(o + t, JSON.stringify({
            value: !0,
            expires_at: a
        }))
    },
    B = function(e, t) {
        let o = e,
            a = !1;
        if (!e || !window.libphonenumber) return {
            formattedNumber: o,
            phoneValid: a
        };
        try {
            const r = window.libphonenumber.parsePhoneNumberFromString(e, t);
            o = r.country && r.isValid() && r.country !== t ? r.formatInternational() : r.country && r.isValid() ? r.formatNational() : e, a = r.isValid()
        } catch (e) {
            console.error(e)
        }
        return {
            formattedNumber: o,
            phoneValid: a
        }
    },
    P = function(e, t, o, a) {
        var r;
        const n = {};
        let s = !0;
        const l = o => {
                const a = e ? e[o.value] : "";
                if ("1" === o.id && "name" === o.value) a && "" !== a.trim() || (n[o.value] = i.REQUIRED, s = !1);
                else if ("PHONE" === o.dataType || "tel" === o.type) {
                    const e = B(a, t);
                    n[o.value] = e.phoneValid ? i.VALID : i.INVALID, s = e.phoneValid && s
                } else if ("EMAIL" === o.dataType || "email" === o.type) {
                    const e = Boolean(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a));
                    n[o.value] = e ? i.VALID : i.INVALID, s = e && s
                } else "4" === o.id && "message" === o.value && (a && "" !== a.trim() || (n[o.value] = i.REQUIRED, s = !1))
            },
            c = ["name", "phone", "email", "message"];
        if ((null === (r = null == o ? void 0 : o.contactFormOptionsDetails) || void 0 === r ? void 0 : r.length) > 0) o.contactFormOptionsDetails.forEach((t => {
            (e => {
                var t;
                return null === (t = null == o ? void 0 : o.contactFormOptionsDetails) || void 0 === t ? void 0 : t.some((t => t.value === e && !t.disabled))
            })(t.value) && (c.includes(t.value) || (null == e ? void 0 : e.hasOwnProperty(t.value)) && null !== e[t.value] && "" !== e[t.value] && void 0 !== e[t.value] ? l(t) : n[t.value] = i.VALID)
        })), c.forEach((e => {
            const t = o.contactFormOptionsDetails.find((t => t.value === e));
            t && l(t)
        }));
        else {
            const e = [{
                id: "1",
                value: "name",
                type: "text"
            }];
            "liveChat" !== a && e.push({
                id: "4",
                value: "message",
                type: "text"
            }), (null == o ? void 0 : o.isPhoneFieldEnabled) && e.push({
                id: "2",
                value: "phone",
                type: "tel"
            }), (null == o ? void 0 : o.isEmailFieldEnabled) && e.push({
                id: "3",
                value: "email",
                type: "email"
            }), e.forEach((e => {
                l(e)
            }))
        }
        return l({
            id: "1",
            value: "name",
            dataType: "TEXT",
            type: "text"
        }), {
            isValid: s,
            status: n
        }
    };

function G(e) {
    let t = null,
        o = null,
        a = null;
    if (e) {
        try {
            const t = document.createElement("div");
            t.id = f, e.appendChild(t)
        } catch (e) {
            console.log("fail to integrate captcha")
        }
        const n = e.children;
        for (var r = 0; r < n.length; r++) {
            if (n[r].hasAttribute("slot"))
                if ("open-icon" === n[r].getAttribute("slot")) t = n[r].outerHTML;
                else if ("close-icon" === n[r].getAttribute("slot")) o = n[r].outerHTML;
            else if ("input-field" === n[r].getAttribute("slot") && (a = {
                    [d.name.name]: "",
                    [d.phone.name]: "",
                    [d.email.name]: "",
                    [d.message.name]: ""
                }, n[r].children && n[r].children.length > 0))
                for (let e = 0; e < n[r].children.length; e++) {
                    const t = n[r].children[e],
                        o = parseInt(t.getAttribute("data-order"));
                    !isNaN(o) && o > 0 && (o > 0 && o < 10 && (a[d.name.name] = a[d.name.name] + t.outerHTML), o > 10 && o < 20 && (a[d.phone.name] = a[d.phone.name] + t.outerHTML), o > 20 && o < 30 && (a[d.email.name] = a[d.email.name] + t.outerHTML), o > 30 && o < 40 && (a[d.message.name] = a[d.message.name] + t.outerHTML))
                }
            n[r].hasOwnProperty("remove") && n[r].remove()
        }
    }
    return {
        openIcon: t,
        closeIcon: o,
        inputFields: a
    }
}
const W = function(e = {}, t) {
        delete(e = Object.assign({}, e)).status;
        try {
            if (t.isValid) localStorage.setItem(o, JSON.stringify(e));
            else {
                const a = t.status;
                if (a) {
                    const t = Object.keys(a);
                    for (let o = 0; o < t.length; o++) {
                        const r = t[o];
                        a[r] !== i.VALID && delete e[r]
                    }
                    localStorage.setItem(o, JSON.stringify(e))
                }
            }
        } catch (e) {
            console.log(e)
        }
    },
    z = function() {
        return j(o)
    };

function H(e, t, o = "", a) {
    a && a("event", e, {
        send_to: "G-1X0XQRMB4F",
        event_category: "web-chat",
        event_label: t
    })
}

function J(e, t) {
    let o = e;
    try {
        if (window.libphonenumber) {
            const a = window.libphonenumber.parsePhoneNumberFromString(e, t);
            (null == a ? void 0 : a.country) && (null == a ? void 0 : a.isValid()) && (o = null == a ? void 0 : a.formatInternational())
        } else if (this.iti && this.iti.getPhoneNumberWithInternationalCode) {
            const e = this.iti.getPhoneNumberWithInternationalCode();
            e.dialCode && (o = `+${e.dialCode} ${o}`)
        }
    } catch (e) {
        console.warn(e)
    }
    return o
}
async function U(t) {
    t ? "auto" === t ? t = function(e = document.body) {
        const t = e.closest("[lang]");
        let o = t ? t.lang : "en-us";
        if (2 === o.length) o = p[o];
        else if (!p[o]) {
            const e = o.split("-")[0];
            p[e] && (o = p[e])
        }
        return o
    }() : C[t] && (t = C[t]) : t = "en-us";
    const o = JSON.parse(sessionStorage.getItem(`lead-connecter-text-widget-i18n-keys.${t}`));
    if (o && Object.keys(o).length > 0) return o;
    try {
        const o = e(`./assets/i18n/${t}.json`),
            a = await fetch(o);
        if (a.ok) {
            const e = await a.json();
            return sessionStorage.setItem(`i18n.${t}`, JSON.stringify(e)), e
        }
    } catch (e) {
        console.error(`Error loading locale: ${t}`, e)
    }
    return {}
}
const q = {
    langId: "en",
    localizedString: {}
};

function X(e, t) {
    q.localizedString = e, q.langId = t
}

function Q(e, t = e) {
    return q.localizedString[e] || t
}
const Y = function(e, t) {
        t && localStorage.removeItem(`${e}_${t}_${a}`), localStorage.removeItem(`${e}_${a}`)
    },
    Z = function({
        data: e
    }) {
        var t, o;
        if (!e.locationId) return;
        let r = e.locationId;
        e.widgetId && (r = `${e.locationId}_${e.widgetId}`);
        let n = JSON.parse(localStorage.getItem(`${r}_${a}`) || "{}");
        n = Object.assign(Object.assign(Object.assign({}, n), e), {
            socketConnected: null !== (o = null !== (t = e.socketConnected) && void 0 !== t ? t : n.socketConnected) && void 0 !== o && o
        }), localStorage.setItem(`${r}_${a}`, JSON.stringify(n))
    },
    K = function({
        locationId: e,
        widgetId: t,
        defaultWidget: o
    }) {
        let r = {};
        return t && (r = j(`${e}_${t}_${a}`)), 0 !== Object.keys(r).length || null != o && !o || (r = j(`${e}_${a}`)), r
    },
    ee = function({
        locationId: e,
        message: t,
        widgetId: o,
        defaultWidget: a
    }) {
        const r = K({
                locationId: e,
                widgetId: o,
                defaultWidget: a
            }),
            n = {
                locationId: e,
                message: t,
                type: "Live_Chat",
                chatWidgetId: o
            };
        return o && (n.chatWidgetId = o), r.hasOwnProperty("conversationId") && (n.conversationId = r.conversationId), n
    },
    te = function({
        locationId: e,
        widgetId: t,
        defaultWidget: o,
        developerVersion: a
    }) {
        const r = K({
                locationId: e,
                widgetId: t,
                defaultWidget: o
            }),
            n = {
                "Content-Type": "application/json"
            };
        return r.token && (n.Authorization = "Bearer " + r.token), a && (n.developer_version = a), n
    },
    oe = function(e, t = !0) {
        const o = new Date(e);
        let a = null,
            r = o.getDate();
        try {
            a = new Intl.DateTimeFormat("en", {
                month: "short"
            }).format(new Date)
        } catch (e) {
            console.log(e)
        }
        let n = o.getHours(),
            s = o.getMinutes();
        return String(s).length < 2 && (s = 0 + String(s)), t && a ? `${r} ${a}, ${n}:${s}` : `${n}:${s}`
    },
    ae = e => {
        var t;
        try {
            return null === (t = document.cookie.split("; ").find((t => t.startsWith(`${e}=`)))) || void 0 === t ? void 0 : t.split("=")[1]
        } catch (e) {
            console.warn(e)
        }
    },
    re = "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    ne = ({
        primaryColor: e,
        theme: t,
        height: o,
        width: a,
        builderPreviewVersion: r
    }) => {
        var n, s;
        let i = "px",
            l = "100%",
            c = "100%";
        try {
            "auto" !== o && o && !isNaN(parseInt(o)) || (o = 83, i = "vh", l = "625px", c = "660px"), "auto" !== a && a && !isNaN(parseInt(a)) || (a = 340)
        } catch (e) {
            console.warn(e)
        }
        let d = {
            "--chat-widget-height": `${o}${i}`,
            "--chat-widget-width": `${a}px`,
            "--chat-widget-max-height": l,
            "--chat-widget-branding-max-height": c,
            "--chat-widget-inline-position": "v2" === r ? "absolute" : "relative"
        };
        e && null === t && (d = Object.assign(Object.assign({}, d), {
            "--chat-widget-primary-color": e,
            "--chat-widget-active-color": e,
            "--chat-widget-bubble-color": e,
            "--chat-widget-background-color": O[I].colors.backgroundColor,
            "--chat-widget-header-color": e,
            "--chat-widget-header-darken-color": se(e, 20),
            "--chat-widget-avatar-border-color": "#ffffff",
            "--chat-widget-sender-message-text-color": O[I].typography.colors.senderMessageTextColor,
            "--chat-widget-received-message-text-color": O[I].typography.colors.receivedMessageTextColor,
            "--chat-widget-received-message-color": O[I].colors.receivedMessageColor,
            "--chat-widget-header-message-text-color": O[I].typography.colors.headerMessageTextColor,
            "--chat-widget-welcome-message-text-color": O[I].typography.colors.welcomeMessageTextColor,
            "--chat-widget-sender-message-color": e,
            "--chat-widget-button-color": e,
            "--chat-widget-system-message-text-color": O[I].typography.colors.systemMessageTextColor,
            "--chat-widget-font-family": re,
            "--ion-font-family": re,
            "--ion-color-primary": e,
            "--ion-color-primary-contrast": "#fff",
            "--color": e
        }));
        let f = O[S].colors,
            p = O[S].typography.fontFamily,
            u = O[S].typography.colors;
        return t && null !== t && (t.name !== S && O[t.name] ? f = O[t.name].colors : (t.colors && (f = Object.assign(Object.assign({}, f), t.colors)), (null === (n = null == t ? void 0 : t.typography) || void 0 === n ? void 0 : n.fontFamily) && (p = t.typography.fontFamily), (null === (s = null == t ? void 0 : t.typography) || void 0 === s ? void 0 : s.colors) && (u = t.typography.colors)), p && le(p), d = Object.assign(Object.assign({}, d), {
            "--chat-widget-active-color": f.buttonColor,
            "--chat-widget-bubble-color": f.chatBubbleColor,
            "--chat-widget-primary-color": f.buttonColor,
            "--ion-color-primary": f.buttonColor,
            "--ion-color-primary-contrast": f.backgroundColor,
            "--chat-widget-background-color": f.backgroundColor,
            "--chat-widget-header-color": f.headerColor,
            "--chat-widget-header-darken-color": se(f.headerColor, 20),
            "--chat-widget-button-color": f.buttonColor,
            "--chat-widget-avatar-background-color": f.avatarBackgroundColor,
            "--chat-widget-avatar-border-color": f.avatarBorderColor,
            "--chat-widget-received-message-color": f.receivedMessageColor,
            "--chat-widget-sender-message-color": f.senderMessageColor,
            "--chat-widget-sender-message-text-color": u.senderMessageTextColor,
            "--chat-widget-received-message-text-color": u.receivedMessageTextColor,
            "--chat-widget-header-message-text-color": u.headerMessageTextColor || u.senderMessageTextColor,
            "--chat-widget-welcome-message-text-color": u.welcomeMessageTextColor || u.systemMessageTextColor,
            "--chat-widget-system-message-text-color": u.systemMessageTextColor,
            "--chat-widget-font-family": p ? `${p}, ${re}` : re,
            "--ion-font-family": p ? `${p}, ${re}` : re,
            "--color": f.buttonColor
        })), Object.entries(d).map((([e, t]) => `${e}:${t}`)).join("; ")
    };

function se(e, t) {
    if (t = Math.max(0, Math.min(100, t)), e.startsWith("rgba")) {
        const o = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (!o) return e;
        let a = parseInt(o[1], 10),
            r = parseInt(o[2], 10),
            n = parseInt(o[3], 10);
        const s = parseFloat(o[4]),
            i = Math.round(t / 100 * 255);
        return a = Math.max(0, a - i), r = Math.max(0, r - i), n = Math.max(0, n - i), `rgba(${a}, ${r}, ${n}, ${s})`
    } {
        let o = parseInt(e.slice(1, 3), 16),
            a = parseInt(e.slice(3, 5), 16),
            r = parseInt(e.slice(5, 7), 16);
        const n = Math.round(t / 100 * 255);
        o = Math.max(0, o - n), a = Math.max(0, a - n), r = Math.max(0, r - n);
        const s = e => e.toString(16).padStart(2, "0");
        return `#${s(o)}${s(a)}${s(r)}`
    }
}

function ie(e, t = !1) {
    const o = {
        bubble: {
            right: t ? "0" : "20px",
            bottom: t ? "0" : "20px"
        },
        widget: {
            right: "20px",
            bottom: "20px"
        },
        prompt: {
            bottom: "0px",
            right: t ? "00px" : "0px"
        },
        arrowVariables: {
            "--chat-widget-prompt-arrow-bottom": "-6px",
            "--chat-widget-prompt-arrow-right": "18px",
            "--chat-widget-prompt-arrow-left": "unset"
        }
    };
    switch (e) {
        case w.BOTTOM_RIGHT:
            return o;
        case w.BOTTOM_CENTER:
            return {
                bubble: {
                    right: "50%",
                    bottom: "20px",
                    transform: "translateX(50%)"
                },
                widget: {
                    right: "50%",
                    bottom: "20px",
                    transform: "translateX(50%)"
                },
                prompt: {
                    bottom: "15px",
                    right: "110px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-bottom": "-6px",
                    "--chat-widget-prompt-arrow-right": "18px",
                    "--chat-widget-prompt-arrow-left": "unset"
                }
            };
        case w.BOTTOM_LEFT:
            return {
                bubble: {
                    left: t ? "0" : "20px",
                    bottom: t ? "0px" : "20px"
                },
                widget: {
                    left: "20px",
                    bottom: "20px"
                },
                prompt: {
                    bottom: "0px",
                    left: t ? "-12px" : "0px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-bottom": "-6px",
                    "--chat-widget-prompt-arrow-left": "18px",
                    "--chat-widget-prompt-arrow-right": "unset"
                }
            };
        case w.MIDDLE_LEFT:
            return {
                bubble: {
                    bottom: "50%",
                    left: "-60px",
                    transform: "translateY(50%)"
                },
                widget: {
                    bottom: "50%",
                    left: "80px",
                    transform: "translateY(50%)"
                },
                prompt: {
                    bottom: "50px",
                    left: t ? "-75px" : "-60px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-bottom": "-6px",
                    "--chat-widget-prompt-arrow-left": "18px",
                    "--chat-widget-prompt-arrow-right": "unset"
                }
            };
        case w.TOP_LEFT:
            return {
                bubble: {
                    top: t ? "-70px" : "20px",
                    left: t ? "0px" : "20px"
                },
                widget: {
                    top: t ? "80px" : "90px",
                    left: "20px"
                },
                prompt: {
                    top: "10px",
                    left: t ? "-12px" : "0px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-top": "-6px",
                    "--chat-widget-prompt-arrow-left": "18px",
                    "--chat-widget-prompt-arrow-right": "unset"
                }
            };
        case w.TOP_CENTER:
            return {
                bubble: {
                    right: "50%",
                    top: "-60px",
                    transform: "translateX(50%)"
                },
                widget: {
                    right: "50%",
                    top: "80px",
                    transform: "translateX(50%)"
                },
                prompt: {
                    top: "10px",
                    left: "0px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-top": "-6px",
                    "--chat-widget-prompt-arrow-left": "47%",
                    "--chat-widget-prompt-arrow-right": "unset"
                }
            };
        case w.TOP_RIGHT:
            return {
                bubble: {
                    right: t ? "0px" : "20px",
                    top: t ? "-70px" : "20px"
                },
                widget: {
                    right: "20px",
                    top: t ? "80px" : "90px"
                },
                prompt: {
                    top: "10px",
                    right: "0px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-top": "-6px",
                    "--chat-widget-prompt-arrow-right": "18px",
                    "--chat-widget-prompt-arrow-left": "unset"
                }
            };
        case w.MIDDLE_RIGHT:
            return {
                bubble: {
                    bottom: "50%",
                    right: "-60px",
                    transform: "translateY(50%)"
                },
                widget: {
                    bottom: "50%",
                    right: "80px",
                    transform: "translateY(50%)"
                },
                prompt: {
                    bottom: "50px",
                    right: t ? "-55px" : "-60px"
                },
                arrowVariables: {
                    "--chat-widget-prompt-arrow-bottom": "-6px",
                    "--chat-widget-prompt-arrow-right": "18px",
                    "--chat-widget-prompt-arrow-left": "unset"
                }
            };
        default:
            return o
    }
}

function le(e) {
    try {
        const t = `https://fonts.bunny.net/css?family=${e}`,
            o = `https://fonts.bunny.net/css?family=${e}:bold`;
        let a = document.querySelector(`link[href="${t}"]`);
        if (!a) {
            a = document.createElement("link"), a.setAttribute("rel", "stylesheet"), a.setAttribute("href", t), document.head.appendChild(a);
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), document.head.appendChild(e)
        }
    } catch (e) {
        console.warn("fail to inject font", e)
    }
}
const ce = e => Q(e.toLowerCase().replace(/\s/g, "_"), e),
    de = e => {
        const t = e.timezone,
            o = new Date;
        let a = !1;
        try {
            const r = e.openHours;
            a = !1;
            const n = o.toLocaleString("en-US", {
                    timeZone: t
                }),
                s = new Date(n),
                i = new Date(s.getTime() + 6e4 * (s.getTimezoneOffset() - o.getTimezoneOffset()));
            for (const e of r) {
                if (e.daysOfTheWeek.includes(i.getDay()))
                    for (const t of e.hours) {
                        const e = new Date(i);
                        e.setHours(parseInt(t.openHour), parseInt(t.openMinute), 0);
                        const o = new Date(i);
                        if (o.setHours(parseInt(t.closeHour), parseInt(t.closeMinute), 0), i >= e && i <= o) {
                            a = !0;
                            break
                        }
                    }
                if (a) break
            }
        } catch (e) {
            console.error("Error in Handle Business Hour:", e)
        }
        return a
    },
    fe = (e, t, o) => {
        try {
            const a = e ? JSON.parse(e) : [],
                r = null == a ? void 0 : a.some((e => "phone" === (null == e ? void 0 : e.value))),
                n = null == a ? void 0 : a.some((e => "email" === (null == e ? void 0 : e.value)));
            return {
                isPhoneFieldEnabled: (null == a ? void 0 : a.length) > 0 ? r : t,
                isEmailFieldEnabled: n || o,
                contactFormOptionsDetails: a
            }
        } catch (e) {
            return console.error("Error parsing contact form options:", e), {
                isPhoneFieldEnabled: t,
                isEmailFieldEnabled: o,
                contactFormOptionsDetails: []
            }
        }
    };

function pe(e, t) {
    return Object.entries(e).sort((([e], [o]) => {
        const a = t.indexOf(e),
            r = t.indexOf(o);
        return -1 === a && -1 === r ? 0 : -1 === a ? 1 : -1 === r ? -1 : a - r
    }))
}

function ue(e, t) {
    e.addMessage({
        direction: "informational",
        text: t,
        promptAvatar: null,
        promptAvatarAltText: null,
        allowAvatarImage: !1
    }), setTimeout((() => {
        if (e.contactDetailsFormSubmitted) {
            const t = e.showStartNewChatMessage();
            t && e.pane.append(t)
        }
    }), 100)
}

function ge({
    data: e,
    serverConfig: t,
    socketIOLib: o,
    handleSocketMessages: a
}) {
    return Z({
        data: {
            visitorId: e.visitorId,
            token: e.token,
            conversationId: e.conversationId,
            locationId: t.locationId,
            widgetId: t.widgetId,
            socketConnected: !0
        }
    }), D({
        serverConfig: t,
        socketLib: o,
        onMessage: a
    })
}

function me(e) {
    const t = {};
    return e.forEach((({
        id: e,
        value: o,
        dataType: a,
        placeholder: r,
        label: n,
        picklistOptions: s
    }) => {
        let i = a.toLowerCase();
        switch (a) {
            case "FILE_UPLOAD":
                i = "file";
                break;
            case "MONETORY":
                i = "monetory";
                break;
            case "LARGE_TEXT":
                i = "textarea";
                break;
            case "PHONE":
                i = "tel";
                break;
            case "NUMERICAL":
                i = "number";
                break;
            case "SINGLE_OPTIONS":
                i = "select"
        }
        t[o] = {
            id: e,
            name: o,
            type: i,
            placeholder: (null == r ? void 0 : r.trim()) ? r : n,
            label: n,
            isRequired: !0,
            picklistOptions: s
        }
    })), t
}

function he(e, t) {
    const o = {};
    for (const t in e) {
        const a = e[t];
        null != a && "" !== a && (o[t] = a)
    }
    let a = function(e) {
        const t = {
                additionalContactDetails: {}
            },
            o = ["name", "phone", "email", "message"];
        for (const a in e) o.includes(a) ? t[a] = e[a] : t.additionalContactDetails[a] = e[a];
        return t
    }(o);
    const r = Object.entries(a.additionalContactDetails).map((([e, o]) => {
        const a = t.contactFormOptionsDetails.find((t => t.value === e));
        return a && "NUMERICAL" === (null == a ? void 0 : a.dataType) && (o = Number(o)), {
            id: a ? a.id : null,
            field_value: o,
            label: null == a ? void 0 : a.label
        }
    }));
    return r && r.length > 0 ? a.additionalContactDetails = r : delete a.additionalContactDetails, a
}
const we = (e, t, o, a, r) => {
        var n, s;
        const l = B(t, (null === (s = null === (n = null == o ? void 0 : o.getSelectedCountryData()) || void 0 === n ? void 0 : n.iso2) || void 0 === s ? void 0 : s.toUpperCase()) || a);
        let c;
        c = ["phone"].includes(e) ? l.phoneValid ? i.VALID : i.INVALID : null === t || "" === t || void 0 === t || l.phoneValid ? i.VALID : i.INVALID, r = Object.assign(Object.assign({}, r), {
            status: Object.assign(Object.assign({}, r.status), {
                [e]: c
            })
        })
    },
    be = (e, t) => {
        const o = window.intlTelInputGlobals.getInstance(e).getSelectedCountryData().iso2;
        t.shadowRoot.querySelectorAll('input[type="tel"]').forEach((t => {
            t !== e && window.intlTelInputGlobals.getInstance(t).setCountry(o)
        }))
    };

function ve(e) {
    return e.map((e => ({
        id: d[e].id,
        value: e,
        label: d[e].label,
        dataType: "tel" === d[e].type ? "PHONE" : "TEXT",
        fieldKey: d[e].fieldKey,
        placeholder: d[e].placeholder
    })))
}

function xe(e, t) {
    return e !== l.WA_CHAT && Boolean(null == t ? void 0 : t.redirectAction) && Boolean(null == t ? void 0 : t.redirectWebsite)
}

function Ce() {
    let e = !1;
    try {
        const t = window.navigator.userAgent;
        /iPad|Android.*Tablet|Kindle|Silk/i.test(t) || !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || (e = !0)
    } catch (e) {
        console.warn(e)
    }
    return e
}

function Ie() {
    let e = !1;
    try {
        const t = window.matchMedia("(display-mode: standalone)").matches,
            o = !0 === window.navigator.standalone,
            a = document.referrer.includes("android-app://") || "" === document.referrer && t;
        e = t || o || a
    } catch (e) {
        console.warn("PWA detection error:", e)
    }
    return e
}

function ye(e) {
    let t = !1;
    return (0 === e || e) && (t = !0), t
}

function Ee({
    serverURL: e,
    developerVersion: t
}) {
    let o = {};
    return t && e.includes("staging.versionedservices") && (o.developer_version = t), o
}

function ke(e) {
    return e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`
}
const Te = "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
var Se = (e, t) => [...t];
export {
    ne as $, x as A, X as B, l as C, fe as D, H as E, Se as F, f as G, P as H, d as I, W as J, ae as K, m as L, he as M, u as N, Ee as O, b as P, Ie as Q, s as R, h as S, Ce as T, z as U, i as V, n as W, we as X, be as Y, V as Z, le as _, c as a, ie as a0, R as a1, ve as a2, r as a3, K as b, D as c, A as d, de as e, oe as f, Q as g, ue as h, xe as i, Te as j, ge as k, ye as l, Z as m, ce as n, v as o, $ as p, ke as q, Y as r, pe as s, J as t, me as u, w as v, _ as w, L as x, G as y, U as z
}