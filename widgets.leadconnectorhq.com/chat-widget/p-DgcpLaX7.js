import {
    f as l
} from "./p-Bz0vOzpN.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a = a => {
        const O = a;
        let r;
        return {
            hasLegacyControl: () => {
                if (void 0 === r) {
                    const a = void 0 !== O.label || o(O),
                        t = O.hasAttribute("aria-label") || O.hasAttribute("aria-labelledby") && null === O.shadowRoot,
                        N = l(O);
                    r = !0 === O.legacy || !a && !t && null !== N
                }
                return r
            }
        }
    },
    o = l => !(!O.includes(l.tagName) || null === l.querySelector('[slot="label"]')) || !(!r.includes(l.tagName) || "" === l.textContent),
    O = ["ION-INPUT", "ION-TEXTAREA", "ION-SELECT", "ION-RANGE"],
    r = ["ION-TOGGLE", "ION-CHECKBOX", "ION-RADIO"];
export {
    a as c
}