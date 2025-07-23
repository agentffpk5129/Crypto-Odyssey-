(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
var Hu = {
    exports: {}
}
  , nl = {}
  , Qu = {
    exports: {}
}
  , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn = Symbol.for("react.element")
  , uc = Symbol.for("react.portal")
  , sc = Symbol.for("react.fragment")
  , ac = Symbol.for("react.strict_mode")
  , cc = Symbol.for("react.profiler")
  , dc = Symbol.for("react.provider")
  , fc = Symbol.for("react.context")
  , pc = Symbol.for("react.forward_ref")
  , mc = Symbol.for("react.suspense")
  , hc = Symbol.for("react.memo")
  , yc = Symbol.for("react.lazy")
  , Ro = Symbol.iterator;
function vc(e) {
    return e === null || typeof e != "object" ? null : (e = Ro && e[Ro] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ku = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Yu = Object.assign
  , Gu = {};
function on(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Gu,
    this.updater = n || Ku
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Xu() {}
Xu.prototype = on.prototype;
function Ai(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Gu,
    this.updater = n || Ku
}
var $i = Ai.prototype = new Xu;
$i.constructor = Ai;
Yu($i, on.prototype);
$i.isPureReactComponent = !0;
var Io = Array.isArray
  , Zu = Object.prototype.hasOwnProperty
  , Vi = {
    current: null
}
  , Ju = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qu(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Zu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), d = 0; d < u; d++)
            s[d] = arguments[d + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Xn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Vi.current
    }
}
function gc(e, t) {
    return {
        $$typeof: Xn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Bi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn
}
function xc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Fo = /\/+/g;
function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? xc("" + e.key) : t.toString(36)
}
function xr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xn:
            case uc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + kl(o, 0) : r,
        Io(l) ? (n = "",
        e != null && (n = e.replace(Fo, "$&/") + "/"),
        xr(l, t, n, "", function(d) {
            return d
        })) : l != null && (Bi(l) && (l = gc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Fo, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Io(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + kl(i, u);
            o += xr(i, t, n, s, l)
        }
    else if (s = vc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + kl(i, u++),
            o += xr(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function nr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return xr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function wc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var se = {
    current: null
}
  , wr = {
    transition: null
}
  , kc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Vi
};
function bu() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Bi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = on;
T.Fragment = sc;
T.Profiler = cc;
T.PureComponent = Ai;
T.StrictMode = ac;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.act = bu;
T.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Yu({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Vi.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            Zu.call(t, s) && !Ju.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var d = 0; d < s; d++)
            u[d] = arguments[d + 2];
        r.children = u
    }
    return {
        $$typeof: Xn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
T.createContext = function(e) {
    return e = {
        $$typeof: fc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: dc,
        _context: e
    },
    e.Consumer = e
}
;
T.createElement = qu;
T.createFactory = function(e) {
    var t = qu.bind(null, e);
    return t.type = e,
    t
}
;
T.createRef = function() {
    return {
        current: null
    }
}
;
T.forwardRef = function(e) {
    return {
        $$typeof: pc,
        render: e
    }
}
;
T.isValidElement = Bi;
T.lazy = function(e) {
    return {
        $$typeof: yc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: wc
    }
}
;
T.memo = function(e, t) {
    return {
        $$typeof: hc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
T.startTransition = function(e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e()
    } finally {
        wr.transition = t
    }
}
;
T.unstable_act = bu;
T.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
}
;
T.useContext = function(e) {
    return se.current.useContext(e)
}
;
T.useDebugValue = function() {}
;
T.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
}
;
T.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
}
;
T.useId = function() {
    return se.current.useId()
}
;
T.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
;
T.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
}
;
T.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
}
;
T.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
}
;
T.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
}
;
T.useRef = function(e) {
    return se.current.useRef(e)
}
;
T.useState = function(e) {
    return se.current.useState(e)
}
;
T.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
;
T.useTransition = function() {
    return se.current.useTransition()
}
;
T.version = "18.3.1";
Qu.exports = T;
var He = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc = He
  , Nc = Symbol.for("react.element")
  , Ec = Symbol.for("react.fragment")
  , jc = Object.prototype.hasOwnProperty
  , Cc = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , _c = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function es(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        jc.call(t, r) && !_c.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Nc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Cc.current
    }
}
nl.Fragment = Ec;
nl.jsx = es;
nl.jsxs = es;
Hu.exports = nl;
var a = Hu.exports
  , ts = {
    exports: {}
}
  , xe = {}
  , ns = {
    exports: {}
}
  , rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, z) {
        var P = E.length;
        E.push(z);
        e: for (; 0 < P; ) {
            var H = P - 1 >>> 1
              , Z = E[H];
            if (0 < l(Z, z))
                E[H] = z,
                E[P] = Z,
                P = H;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var z = E[0]
          , P = E.pop();
        if (P !== z) {
            E[0] = P;
            e: for (var H = 0, Z = E.length, er = Z >>> 1; H < er; ) {
                var vt = 2 * (H + 1) - 1
                  , wl = E[vt]
                  , gt = vt + 1
                  , tr = E[gt];
                if (0 > l(wl, P))
                    gt < Z && 0 > l(tr, wl) ? (E[H] = tr,
                    E[gt] = P,
                    H = gt) : (E[H] = wl,
                    E[vt] = P,
                    H = vt);
                else if (gt < Z && 0 > l(tr, P))
                    E[H] = tr,
                    E[gt] = P,
                    H = gt;
                else
                    break e
            }
        }
        return z
    }
    function l(E, z) {
        var P = E.sortIndex - z.sortIndex;
        return P !== 0 ? P : E.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = []
      , d = []
      , y = 1
      , h = null
      , m = 3
      , x = !1
      , w = !1
      , k = !1
      , F = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(E) {
        for (var z = n(d); z !== null; ) {
            if (z.callback === null)
                r(d);
            else if (z.startTime <= E)
                r(d),
                z.sortIndex = z.expirationTime,
                t(s, z);
            else
                break;
            z = n(d)
        }
    }
    function v(E) {
        if (k = !1,
        p(E),
        !w)
            if (n(s) !== null)
                w = !0,
                gl(N);
            else {
                var z = n(d);
                z !== null && xl(v, z.startTime - E)
            }
    }
    function N(E, z) {
        w = !1,
        k && (k = !1,
        f(_),
        _ = -1),
        x = !0;
        var P = m;
        try {
            for (p(z),
            h = n(s); h !== null && (!(h.expirationTime > z) || E && !_e()); ) {
                var H = h.callback;
                if (typeof H == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var Z = H(h.expirationTime <= z);
                    z = e.unstable_now(),
                    typeof Z == "function" ? h.callback = Z : h === n(s) && r(s),
                    p(z)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var er = !0;
            else {
                var vt = n(d);
                vt !== null && xl(v, vt.startTime - z),
                er = !1
            }
            return er
        } finally {
            h = null,
            m = P,
            x = !1
        }
    }
    var j = !1
      , C = null
      , _ = -1
      , W = 5
      , L = -1;
    function _e() {
        return !(e.unstable_now() - L < W)
    }
    function an() {
        if (C !== null) {
            var E = e.unstable_now();
            L = E;
            var z = !0;
            try {
                z = C(!0, E)
            } finally {
                z ? cn() : (j = !1,
                C = null)
            }
        } else
            j = !1
    }
    var cn;
    if (typeof c == "function")
        cn = function() {
            c(an)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Oo = new MessageChannel
          , oc = Oo.port2;
        Oo.port1.onmessage = an,
        cn = function() {
            oc.postMessage(null)
        }
    } else
        cn = function() {
            F(an, 0)
        }
        ;
    function gl(E) {
        C = E,
        j || (j = !0,
        cn())
    }
    function xl(E, z) {
        _ = F(function() {
            E(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        gl(N))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(E) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = m
        }
        var P = m;
        m = z;
        try {
            return E()
        } finally {
            m = P
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, z) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var P = m;
        m = E;
        try {
            return z()
        } finally {
            m = P
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, z, P) {
        var H = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay,
        P = typeof P == "number" && 0 < P ? H + P : H) : P = H,
        E) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = P + Z,
        E = {
            id: y++,
            callback: z,
            priorityLevel: E,
            startTime: P,
            expirationTime: Z,
            sortIndex: -1
        },
        P > H ? (E.sortIndex = P,
        t(d, E),
        n(s) === null && E === n(d) && (k ? (f(_),
        _ = -1) : k = !0,
        xl(v, P - H))) : (E.sortIndex = Z,
        t(s, E),
        w || x || (w = !0,
        gl(N))),
        E
    }
    ,
    e.unstable_shouldYield = _e,
    e.unstable_wrapCallback = function(E) {
        var z = m;
        return function() {
            var P = m;
            m = z;
            try {
                return E.apply(this, arguments)
            } finally {
                m = P
            }
        }
    }
}
)(rs);
ns.exports = rs;
var zc = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = He
  , ge = zc;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ls = new Set
  , Mn = {};
function Lt(e, t) {
    qt(e, t),
    qt(e + "Capture", t)
}
function qt(e, t) {
    for (Mn[e] = t,
    e = 0; e < t.length; e++)
        ls.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Yl = Object.prototype.hasOwnProperty
  , Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Uo = {}
  , Ao = {};
function Lc(e) {
    return Yl.call(Ao, e) ? !0 : Yl.call(Uo, e) ? !1 : Tc.test(e) ? Ao[e] = !0 : (Uo[e] = !0,
    !1)
}
function Mc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Dc(e, t, n, r) {
    if (t === null || typeof t > "u" || Mc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Wi = /[\-:]([a-z])/g;
function Hi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
te.xlinkHref = new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Qi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dc(t, n, l, r) && (n = null),
    r || l === null ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ze = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , rr = Symbol.for("react.element")
  , Ot = Symbol.for("react.portal")
  , Rt = Symbol.for("react.fragment")
  , Ki = Symbol.for("react.strict_mode")
  , Gl = Symbol.for("react.profiler")
  , is = Symbol.for("react.provider")
  , os = Symbol.for("react.context")
  , Yi = Symbol.for("react.forward_ref")
  , Xl = Symbol.for("react.suspense")
  , Zl = Symbol.for("react.suspense_list")
  , Gi = Symbol.for("react.memo")
  , qe = Symbol.for("react.lazy")
  , us = Symbol.for("react.offscreen")
  , $o = Symbol.iterator;
function dn(e) {
    return e === null || typeof e != "object" ? null : (e = $o && e[$o] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var V = Object.assign, Sl;
function xn(e) {
    if (Sl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Sl = t && t[1] || ""
        }
    return `
` + Sl + e
}
var Nl = !1;
function El(e, t) {
    if (!e || Nl)
        return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Nl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}
function Oc(e) {
    switch (e.tag) {
    case 5:
        return xn(e.type);
    case 16:
        return xn("Lazy");
    case 13:
        return xn("Suspense");
    case 19:
        return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = El(e.type, !1),
        e;
    case 11:
        return e = El(e.type.render, !1),
        e;
    case 1:
        return e = El(e.type, !0),
        e;
    default:
        return ""
    }
}
function Jl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Rt:
        return "Fragment";
    case Ot:
        return "Portal";
    case Gl:
        return "Profiler";
    case Ki:
        return "StrictMode";
    case Xl:
        return "Suspense";
    case Zl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case os:
            return (e.displayName || "Context") + ".Consumer";
        case is:
            return (e._context.displayName || "Context") + ".Provider";
        case Yi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Gi:
            return t = e.displayName || null,
            t !== null ? t : Jl(e.type) || "Memo";
        case qe:
            t = e._payload,
            e = e._init;
            try {
                return Jl(e(t))
            } catch {}
        }
    return null
}
function Rc(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Jl(t);
    case 8:
        return t === Ki ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ss(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ic(e) {
    var t = ss(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function lr(e) {
    e._valueTracker || (e._valueTracker = Ic(e))
}
function as(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ss(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Lr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ql(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Vo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function cs(e, t) {
    t = t.checked,
    t != null && Qi(e, "checked", t, !1)
}
function bl(e, t) {
    cs(e, t);
    var n = ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ei(e, t.type, n) : t.hasOwnProperty("defaultValue") && ei(e, t.type, ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Bo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ei(e, t, n) {
    (t !== "number" || Lr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;
function Kt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ti(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(g(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Wo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(g(92));
            if (wn(n)) {
                if (1 < n.length)
                    throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}
function ds(e, t) {
    var n = ft(t.value)
      , r = ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ho(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function fs(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ni(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? fs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ir, ps = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ir = ir || document.createElement("div"),
        ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ir.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Dn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Fc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Nn[t] = Nn[e]
    })
});
function ms(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}
function hs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = ms(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Uc = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ri(e, t) {
    if (t) {
        if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(g(62))
    }
}
function li(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ii = null;
function Xi(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var oi = null
  , Yt = null
  , Gt = null;
function Qo(e) {
    if (e = qn(e)) {
        if (typeof oi != "function")
            throw Error(g(280));
        var t = e.stateNode;
        t && (t = ul(t),
        oi(e.stateNode, e.type, t))
    }
}
function ys(e) {
    Yt ? Gt ? Gt.push(e) : Gt = [e] : Yt = e
}
function vs() {
    if (Yt) {
        var e = Yt
          , t = Gt;
        if (Gt = Yt = null,
        Qo(e),
        t)
            for (e = 0; e < t.length; e++)
                Qo(t[e])
    }
}
function gs(e, t) {
    return e(t)
}
function xs() {}
var jl = !1;
function ws(e, t, n) {
    if (jl)
        return e(t, n);
    jl = !0;
    try {
        return gs(e, t, n)
    } finally {
        jl = !1,
        (Yt !== null || Gt !== null) && (xs(),
        vs())
    }
}
function On(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ul(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(g(231, t, typeof n));
    return n
}
var ui = !1;
if (Ke)
    try {
        var fn = {};
        Object.defineProperty(fn, "passive", {
            get: function() {
                ui = !0
            }
        }),
        window.addEventListener("test", fn, fn),
        window.removeEventListener("test", fn, fn)
    } catch {
        ui = !1
    }
function Ac(e, t, n, r, l, i, o, u, s) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (y) {
        this.onError(y)
    }
}
var En = !1
  , Mr = null
  , Dr = !1
  , si = null
  , $c = {
    onError: function(e) {
        En = !0,
        Mr = e
    }
};
function Vc(e, t, n, r, l, i, o, u, s) {
    En = !1,
    Mr = null,
    Ac.apply($c, arguments)
}
function Bc(e, t, n, r, l, i, o, u, s) {
    if (Vc.apply(this, arguments),
    En) {
        if (En) {
            var d = Mr;
            En = !1,
            Mr = null
        } else
            throw Error(g(198));
        Dr || (Dr = !0,
        si = d)
    }
}
function Mt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ks(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ko(e) {
    if (Mt(e) !== e)
        throw Error(g(188))
}
function Wc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e),
        t === null)
            throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return Ko(l),
                    e;
                if (i === r)
                    return Ko(l),
                    t;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(g(189))
            }
        }
        if (n.alternate !== r)
            throw Error(g(190))
    }
    if (n.tag !== 3)
        throw Error(g(188));
    return n.stateNode.current === n ? e : t
}
function Ss(e) {
    return e = Wc(e),
    e !== null ? Ns(e) : null
}
function Ns(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ns(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Es = ge.unstable_scheduleCallback
  , Yo = ge.unstable_cancelCallback
  , Hc = ge.unstable_shouldYield
  , Qc = ge.unstable_requestPaint
  , Q = ge.unstable_now
  , Kc = ge.unstable_getCurrentPriorityLevel
  , Zi = ge.unstable_ImmediatePriority
  , js = ge.unstable_UserBlockingPriority
  , Or = ge.unstable_NormalPriority
  , Yc = ge.unstable_LowPriority
  , Cs = ge.unstable_IdlePriority
  , rl = null
  , Ue = null;
function Gc(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Jc
  , Xc = Math.log
  , Zc = Math.LN2;
function Jc(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Xc(e) / Zc | 0) | 0
}
var or = 64
  , ur = 4194304;
function kn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = kn(u) : (i &= o,
        i !== 0 && (r = kn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = kn(o) : i !== 0 && (r = kn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Me(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function qc(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function bc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Me(i)
          , u = 1 << o
          , s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = qc(u, t)) : s <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function ai(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function _s() {
    var e = or;
    return or <<= 1,
    !(or & 4194240) && (or = 64),
    e
}
function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Me(t),
    e[t] = n
}
function ed(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Me(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function Ji(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Me(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var D = 0;
function zs(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ps, qi, Ts, Ls, Ms, ci = !1, sr = [], lt = null, it = null, ot = null, Rn = new Map, In = new Map, et = [], td = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Go(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lt = null;
        break;
    case "dragenter":
    case "dragleave":
        it = null;
        break;
    case "mouseover":
    case "mouseout":
        ot = null;
        break;
    case "pointerover":
    case "pointerout":
        Rn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        In.delete(t.pointerId)
    }
}
function pn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = qn(t),
    t !== null && qi(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function nd(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return lt = pn(lt, e, t, n, r, l),
        !0;
    case "dragenter":
        return it = pn(it, e, t, n, r, l),
        !0;
    case "mouseover":
        return ot = pn(ot, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Rn.set(i, pn(Rn.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        In.set(i, pn(In.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function Ds(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ks(n),
                t !== null) {
                    e.blockedOn = t,
                    Ms(e.priority, function() {
                        Ts(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function kr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ii = r,
            n.target.dispatchEvent(r),
            ii = null
        } else
            return t = qn(n),
            t !== null && qi(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Xo(e, t, n) {
    kr(e) && n.delete(t)
}
function rd() {
    ci = !1,
    lt !== null && kr(lt) && (lt = null),
    it !== null && kr(it) && (it = null),
    ot !== null && kr(ot) && (ot = null),
    Rn.forEach(Xo),
    In.forEach(Xo)
}
function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ci || (ci = !0,
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, rd)))
}
function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < sr.length) {
        mn(sr[0], e);
        for (var n = 1; n < sr.length; n++) {
            var r = sr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && mn(lt, e),
    it !== null && mn(it, e),
    ot !== null && mn(ot, e),
    Rn.forEach(t),
    In.forEach(t),
    n = 0; n < et.length; n++)
        r = et[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0],
    n.blockedOn === null); )
        Ds(n),
        n.blockedOn === null && et.shift()
}
var Xt = Ze.ReactCurrentBatchConfig
  , Ir = !0;
function ld(e, t, n, r) {
    var l = D
      , i = Xt.transition;
    Xt.transition = null;
    try {
        D = 1,
        bi(e, t, n, r)
    } finally {
        D = l,
        Xt.transition = i
    }
}
function id(e, t, n, r) {
    var l = D
      , i = Xt.transition;
    Xt.transition = null;
    try {
        D = 4,
        bi(e, t, n, r)
    } finally {
        D = l,
        Xt.transition = i
    }
}
function bi(e, t, n, r) {
    if (Ir) {
        var l = di(e, t, n, r);
        if (l === null)
            Il(e, t, r, Fr, n),
            Go(e, r);
        else if (nd(l, e, t, n, r))
            r.stopPropagation();
        else if (Go(e, r),
        t & 4 && -1 < td.indexOf(e)) {
            for (; l !== null; ) {
                var i = qn(l);
                if (i !== null && Ps(i),
                i = di(e, t, n, r),
                i === null && Il(e, t, r, Fr, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Il(e, t, r, null, n)
    }
}
var Fr = null;
function di(e, t, n, r) {
    if (Fr = null,
    e = Xi(r),
    e = kt(e),
    e !== null)
        if (t = Mt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ks(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fr = e,
    null
}
function Os(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Kc()) {
        case Zi:
            return 1;
        case js:
            return 4;
        case Or:
        case Yc:
            return 16;
        case Cs:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var nt = null
  , eo = null
  , Sr = null;
function Rs() {
    if (Sr)
        return Sr;
    var e, t = eo, n = t.length, r, l = "value"in nt ? nt.value : nt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Nr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ar() {
    return !0
}
function Zo() {
    return !1
}
function we(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ar : Zo,
        this.isPropagationStopped = Zo,
        this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }),
    t
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, to = we(un), Jn = V({}, un, {
    view: 0,
    detail: 0
}), od = we(Jn), _l, zl, hn, ll = V({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: no,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (_l = e.screenX - hn.screenX,
        zl = e.screenY - hn.screenY) : zl = _l = 0,
        hn = e),
        _l)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : zl
    }
}), Jo = we(ll), ud = V({}, ll, {
    dataTransfer: 0
}), sd = we(ud), ad = V({}, Jn, {
    relatedTarget: 0
}), Pl = we(ad), cd = V({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), dd = we(cd), fd = V({}, un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), pd = we(fd), md = V({}, un, {
    data: 0
}), qo = we(md), hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, yd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, vd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function gd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vd[e]) ? !!t[e] : !1
}
function no() {
    return gd
}
var xd = V({}, Jn, {
    key: function(e) {
        if (e.key) {
            var t = hd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Nr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: no,
    charCode: function(e) {
        return e.type === "keypress" ? Nr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , wd = we(xd)
  , kd = V({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , bo = we(kd)
  , Sd = V({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: no
})
  , Nd = we(Sd)
  , Ed = V({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , jd = we(Ed)
  , Cd = V({}, ll, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , _d = we(Cd)
  , zd = [9, 13, 27, 32]
  , ro = Ke && "CompositionEvent"in window
  , jn = null;
Ke && "documentMode"in document && (jn = document.documentMode);
var Pd = Ke && "TextEvent"in window && !jn
  , Is = Ke && (!ro || jn && 8 < jn && 11 >= jn)
  , eu = " "
  , tu = !1;
function Fs(e, t) {
    switch (e) {
    case "keyup":
        return zd.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Us(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var It = !1;
function Td(e, t) {
    switch (e) {
    case "compositionend":
        return Us(t);
    case "keypress":
        return t.which !== 32 ? null : (tu = !0,
        eu);
    case "textInput":
        return e = t.data,
        e === eu && tu ? null : e;
    default:
        return null
    }
}
function Ld(e, t) {
    if (It)
        return e === "compositionend" || !ro && Fs(e, t) ? (e = Rs(),
        Sr = eo = nt = null,
        It = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Is && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Md = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Md[e.type] : t === "textarea"
}
function As(e, t, n, r) {
    ys(r),
    t = Ur(t, "onChange"),
    0 < t.length && (n = new to("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Cn = null
  , Un = null;
function Dd(e) {
    Zs(e, 0)
}
function il(e) {
    var t = At(e);
    if (as(t))
        return e
}
function Od(e, t) {
    if (e === "change")
        return t
}
var $s = !1;
if (Ke) {
    var Tl;
    if (Ke) {
        var Ll = "oninput"in document;
        if (!Ll) {
            var ru = document.createElement("div");
            ru.setAttribute("oninput", "return;"),
            Ll = typeof ru.oninput == "function"
        }
        Tl = Ll
    } else
        Tl = !1;
    $s = Tl && (!document.documentMode || 9 < document.documentMode)
}
function lu() {
    Cn && (Cn.detachEvent("onpropertychange", Vs),
    Un = Cn = null)
}
function Vs(e) {
    if (e.propertyName === "value" && il(Un)) {
        var t = [];
        As(t, Un, e, Xi(e)),
        ws(Dd, t)
    }
}
function Rd(e, t, n) {
    e === "focusin" ? (lu(),
    Cn = t,
    Un = n,
    Cn.attachEvent("onpropertychange", Vs)) : e === "focusout" && lu()
}
function Id(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return il(Un)
}
function Fd(e, t) {
    if (e === "click")
        return il(t)
}
function Ud(e, t) {
    if (e === "input" || e === "change")
        return il(t)
}
function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Ad;
function An(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Yl.call(t, l) || !Oe(e[l], t[l]))
            return !1
    }
    return !0
}
function iu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ou(e, t) {
    var n = iu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = iu(n)
    }
}
function Bs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bs(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ws() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Lr(e.document)
    }
    return t
}
function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function $d(e) {
    var t = Ws()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bs(n.ownerDocument.documentElement, n)) {
        if (r !== null && lo(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = ou(n, i);
                var o = ou(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Vd = Ke && "documentMode"in document && 11 >= document.documentMode
  , Ft = null
  , fi = null
  , _n = null
  , pi = !1;
function uu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pi || Ft == null || Ft !== Lr(r) || (r = Ft,
    "selectionStart"in r && lo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    _n && An(_n, r) || (_n = r,
    r = Ur(fi, "onSelect"),
    0 < r.length && (t = new to("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ft)))
}
function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ut = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd")
}
  , Ml = {}
  , Hs = {};
Ke && (Hs = document.createElement("div").style,
"AnimationEvent"in window || (delete Ut.animationend.animation,
delete Ut.animationiteration.animation,
delete Ut.animationstart.animation),
"TransitionEvent"in window || delete Ut.transitionend.transition);
function ol(e) {
    if (Ml[e])
        return Ml[e];
    if (!Ut[e])
        return e;
    var t = Ut[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Hs)
            return Ml[e] = t[n];
    return e
}
var Qs = ol("animationend")
  , Ks = ol("animationiteration")
  , Ys = ol("animationstart")
  , Gs = ol("transitionend")
  , Xs = new Map
  , su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
    Xs.set(e, t),
    Lt(t, [e])
}
for (var Dl = 0; Dl < su.length; Dl++) {
    var Ol = su[Dl]
      , Bd = Ol.toLowerCase()
      , Wd = Ol[0].toUpperCase() + Ol.slice(1);
    mt(Bd, "on" + Wd)
}
mt(Qs, "onAnimationEnd");
mt(Ks, "onAnimationIteration");
mt(Ys, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Gs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Hd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Bc(r, t, void 0, e),
    e.currentTarget = null
}
function Zs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , s = u.instance
                      , d = u.currentTarget;
                    if (u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    au(l, u, d),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    s = u.instance,
                    d = u.currentTarget,
                    u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    au(l, u, d),
                    i = s
                }
        }
    }
    if (Dr)
        throw e = si,
        Dr = !1,
        si = null,
        e
}
function R(e, t) {
    var n = t[gi];
    n === void 0 && (n = t[gi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Js(t, e, 2, !1),
    n.add(r))
}
function Rl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Js(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
    if (!e[dr]) {
        e[dr] = !0,
        ls.forEach(function(n) {
            n !== "selectionchange" && (Hd.has(n) || Rl(n, !1, e),
            Rl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0,
        Rl("selectionchange", !1, t))
    }
}
function Js(e, t, n, r) {
    switch (Os(t)) {
    case 1:
        var l = ld;
        break;
    case 4:
        l = id;
        break;
    default:
        l = bi
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Il(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = kt(u),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    ws(function() {
        var d = i
          , y = Xi(n)
          , h = [];
        e: {
            var m = Xs.get(e);
            if (m !== void 0) {
                var x = to
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Nr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = wd;
                    break;
                case "focusin":
                    w = "focus",
                    x = Pl;
                    break;
                case "focusout":
                    w = "blur",
                    x = Pl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Pl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = Jo;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = sd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Nd;
                    break;
                case Qs:
                case Ks:
                case Ys:
                    x = dd;
                    break;
                case Gs:
                    x = jd;
                    break;
                case "scroll":
                    x = od;
                    break;
                case "wheel":
                    x = _d;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = pd;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = bo
                }
                var k = (t & 4) !== 0
                  , F = !k && e === "scroll"
                  , f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = d, p; c !== null; ) {
                    p = c;
                    var v = p.stateNode;
                    if (p.tag === 5 && v !== null && (p = v,
                    f !== null && (v = On(c, f),
                    v != null && k.push(Vn(c, v, p)))),
                    F)
                        break;
                    c = c.return
                }
                0 < k.length && (m = new x(m,w,null,n,y),
                h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== ii && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ye]))
                    break e;
                if ((x || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = d,
                w = w ? kt(w) : null,
                w !== null && (F = Mt(w),
                w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = d),
                x !== w)) {
                    if (k = Jo,
                    v = "onMouseLeave",
                    f = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = bo,
                    v = "onPointerLeave",
                    f = "onPointerEnter",
                    c = "pointer"),
                    F = x == null ? m : At(x),
                    p = w == null ? m : At(w),
                    m = new k(v,c + "leave",x,n,y),
                    m.target = F,
                    m.relatedTarget = p,
                    v = null,
                    kt(y) === d && (k = new k(f,c + "enter",w,n,y),
                    k.target = p,
                    k.relatedTarget = F,
                    v = k),
                    F = v,
                    x && w)
                        t: {
                            for (k = x,
                            f = w,
                            c = 0,
                            p = k; p; p = Dt(p))
                                c++;
                            for (p = 0,
                            v = f; v; v = Dt(v))
                                p++;
                            for (; 0 < c - p; )
                                k = Dt(k),
                                c--;
                            for (; 0 < p - c; )
                                f = Dt(f),
                                p--;
                            for (; c--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = Dt(k),
                                f = Dt(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && cu(h, m, x, k, !1),
                    w !== null && F !== null && cu(h, F, w, k, !0)
                }
            }
            e: {
                if (m = d ? At(d) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var N = Od;
                else if (nu(m))
                    if ($s)
                        N = Ud;
                    else {
                        N = Id;
                        var j = Rd
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Fd);
                if (N && (N = N(e, d))) {
                    As(h, N, n, y);
                    break e
                }
                j && j(e, m, d),
                e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && ei(m, "number", m.value)
            }
            switch (j = d ? At(d) : window,
            e) {
            case "focusin":
                (nu(j) || j.contentEditable === "true") && (Ft = j,
                fi = d,
                _n = null);
                break;
            case "focusout":
                _n = fi = Ft = null;
                break;
            case "mousedown":
                pi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                pi = !1,
                uu(h, n, y);
                break;
            case "selectionchange":
                if (Vd)
                    break;
            case "keydown":
            case "keyup":
                uu(h, n, y)
            }
            var C;
            if (ro)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                It ? Fs(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Is && n.locale !== "ko" && (It || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && It && (C = Rs()) : (nt = y,
            eo = "value"in nt ? nt.value : nt.textContent,
            It = !0)),
            j = Ur(d, _),
            0 < j.length && (_ = new qo(_,e,null,n,y),
            h.push({
                event: _,
                listeners: j
            }),
            C ? _.data = C : (C = Us(n),
            C !== null && (_.data = C)))),
            (C = Pd ? Td(e, n) : Ld(e, n)) && (d = Ur(d, "onBeforeInput"),
            0 < d.length && (y = new qo("onBeforeInput","beforeinput",null,n,y),
            h.push({
                event: y,
                listeners: d
            }),
            y.data = C))
        }
        Zs(h, t)
    })
}
function Vn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ur(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = On(e, n),
        i != null && r.unshift(Vn(e, i, l)),
        i = On(e, t),
        i != null && r.push(Vn(e, i, l))),
        e = e.return
    }
    return r
}
function Dt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function cu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , d = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && d !== null && (u = d,
        l ? (s = On(n, i),
        s != null && o.unshift(Vn(n, s, u))) : l || (s = On(n, i),
        s != null && o.push(Vn(n, s, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Qd = /\r\n?/g
  , Kd = /\u0000|\uFFFD/g;
function du(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qd, `
`).replace(Kd, "")
}
function fr(e, t, n) {
    if (t = du(t),
    du(e) !== t && n)
        throw Error(g(425))
}
function Ar() {}
var mi = null
  , hi = null;
function yi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0
  , Yd = typeof clearTimeout == "function" ? clearTimeout : void 0
  , fu = typeof Promise == "function" ? Promise : void 0
  , Gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fu < "u" ? function(e) {
    return fu.resolve(null).then(e).catch(Xd)
}
: vi;
function Xd(e) {
    setTimeout(function() {
        throw e
    })
}
function Fl(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Fn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}
function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function pu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var sn = Math.random().toString(36).slice(2)
  , Fe = "__reactFiber$" + sn
  , Bn = "__reactProps$" + sn
  , Ye = "__reactContainer$" + sn
  , gi = "__reactEvents$" + sn
  , Zd = "__reactListeners$" + sn
  , Jd = "__reactHandles$" + sn;
function kt(e) {
    var t = e[Fe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ye] || n[Fe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = pu(e); e !== null; ) {
                    if (n = e[Fe])
                        return n;
                    e = pu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qn(e) {
    return e = e[Fe] || e[Ye],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function At(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(g(33))
}
function ul(e) {
    return e[Bn] || null
}
var xi = []
  , $t = -1;
function ht(e) {
    return {
        current: e
    }
}
function I(e) {
    0 > $t || (e.current = xi[$t],
    xi[$t] = null,
    $t--)
}
function O(e, t) {
    $t++,
    xi[$t] = e.current,
    e.current = t
}
var pt = {}
  , ie = ht(pt)
  , fe = ht(!1)
  , Ct = pt;
function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function pe(e) {
    return e = e.childContextTypes,
    e != null
}
function $r() {
    I(fe),
    I(ie)
}
function mu(e, t, n) {
    if (ie.current !== pt)
        throw Error(g(168));
    O(ie, t),
    O(fe, n)
}
function qs(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(g(108, Rc(e) || "Unknown", l));
    return V({}, n, r)
}
function Vr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt,
    Ct = ie.current,
    O(ie, e),
    O(fe, fe.current),
    !0
}
function hu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(g(169));
    n ? (e = qs(e, t, Ct),
    r.__reactInternalMemoizedMergedChildContext = e,
    I(fe),
    I(ie),
    O(ie, e)) : I(fe),
    O(fe, n)
}
var Ve = null
  , sl = !1
  , Ul = !1;
function bs(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function qd(e) {
    sl = !0,
    bs(e)
}
function yt() {
    if (!Ul && Ve !== null) {
        Ul = !0;
        var e = 0
          , t = D;
        try {
            var n = Ve;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ve = null,
            sl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            Es(Zi, yt),
            l
        } finally {
            D = t,
            Ul = !1
        }
    }
    return null
}
var Vt = []
  , Bt = 0
  , Br = null
  , Wr = 0
  , ke = []
  , Se = 0
  , _t = null
  , Be = 1
  , We = "";
function xt(e, t) {
    Vt[Bt++] = Wr,
    Vt[Bt++] = Br,
    Br = e,
    Wr = t
}
function ea(e, t, n) {
    ke[Se++] = Be,
    ke[Se++] = We,
    ke[Se++] = _t,
    _t = e;
    var r = Be;
    e = We;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Me(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Be = 1 << 32 - Me(t) + l | n << l | r,
        We = i + e
    } else
        Be = 1 << i | n << l | r,
        We = e
}
function io(e) {
    e.return !== null && (xt(e, 1),
    ea(e, 1, 0))
}
function oo(e) {
    for (; e === Br; )
        Br = Vt[--Bt],
        Vt[Bt] = null,
        Wr = Vt[--Bt],
        Vt[Bt] = null;
    for (; e === _t; )
        _t = ke[--Se],
        ke[Se] = null,
        We = ke[--Se],
        ke[Se] = null,
        Be = ke[--Se],
        ke[Se] = null
}
var ve = null
  , ye = null
  , U = !1
  , Le = null;
function ta(e, t) {
    var n = Ne(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function yu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ve = e,
        ye = ut(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ve = e,
        ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = _t !== null ? {
            id: Be,
            overflow: We
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ne(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ve = e,
        ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function wi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ki(e) {
    if (U) {
        var t = ye;
        if (t) {
            var n = t;
            if (!yu(e, t)) {
                if (wi(e))
                    throw Error(g(418));
                t = ut(n.nextSibling);
                var r = ve;
                t && yu(e, t) ? ta(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                ve = e)
            }
        } else {
            if (wi(e))
                throw Error(g(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            ve = e
        }
    }
}
function vu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ve = e
}
function pr(e) {
    if (e !== ve)
        return !1;
    if (!U)
        return vu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps)),
    t && (t = ye)) {
        if (wi(e))
            throw na(),
            Error(g(418));
        for (; t; )
            ta(e, t),
            t = ut(t.nextSibling)
    }
    if (vu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(g(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ye = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ye = null
        }
    } else
        ye = ve ? ut(e.stateNode.nextSibling) : null;
    return !0
}
function na() {
    for (var e = ye; e; )
        e = ut(e.nextSibling)
}
function en() {
    ye = ve = null,
    U = !1
}
function uo(e) {
    Le === null ? Le = [e] : Le.push(e)
}
var bd = Ze.ReactCurrentBatchConfig;
function yn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(g(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(g(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(g(284));
        if (!n._owner)
            throw Error(g(290, e))
    }
    return e
}
function mr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function gu(e) {
    var t = e._init;
    return t(e._payload)
}
function ra(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c],
            f.flags |= 16) : p.push(c)
        }
    }
    function n(f, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(f, c),
            c = c.sibling;
        return null
    }
    function r(f, c) {
        for (f = new Map; c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
            c = c.sibling;
        return f
    }
    function l(f, c) {
        return f = dt(f, c),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, c, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < c ? (f.flags |= 2,
        c) : p) : (f.flags |= 2,
        c)) : (f.flags |= 1048576,
        c)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, c, p, v) {
        return c === null || c.tag !== 6 ? (c = Ql(p, f.mode, v),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function s(f, c, p, v) {
        var N = p.type;
        return N === Rt ? y(f, c, p.props.children, v, p.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && gu(N) === c.type) ? (v = l(c, p.props),
        v.ref = yn(f, c, p),
        v.return = f,
        v) : (v = Tr(p.type, p.key, p.props, null, f.mode, v),
        v.ref = yn(f, c, p),
        v.return = f,
        v)
    }
    function d(f, c, p, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Kl(p, f.mode, v),
        c.return = f,
        c) : (c = l(c, p.children || []),
        c.return = f,
        c)
    }
    function y(f, c, p, v, N) {
        return c === null || c.tag !== 7 ? (c = jt(p, f.mode, v, N),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Ql("" + c, f.mode, p),
            c.return = f,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case rr:
                return p = Tr(c.type, c.key, c.props, null, f.mode, p),
                p.ref = yn(f, null, c),
                p.return = f,
                p;
            case Ot:
                return c = Kl(c, f.mode, p),
                c.return = f,
                c;
            case qe:
                var v = c._init;
                return h(f, v(c._payload), p)
            }
            if (wn(c) || dn(c))
                return c = jt(c, f.mode, p, null),
                c.return = f,
                c;
            mr(f, c)
        }
        return null
    }
    function m(f, c, p, v) {
        var N = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return N !== null ? null : u(f, c, "" + p, v);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                return p.key === N ? s(f, c, p, v) : null;
            case Ot:
                return p.key === N ? d(f, c, p, v) : null;
            case qe:
                return N = p._init,
                m(f, c, N(p._payload), v)
            }
            if (wn(p) || dn(p))
                return N !== null ? null : y(f, c, p, v, null);
            mr(f, p)
        }
        return null
    }
    function x(f, c, p, v, N) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return f = f.get(p) || null,
            u(c, f, "" + v, N);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case rr:
                return f = f.get(v.key === null ? p : v.key) || null,
                s(c, f, v, N);
            case Ot:
                return f = f.get(v.key === null ? p : v.key) || null,
                d(c, f, v, N);
            case qe:
                var j = v._init;
                return x(f, c, p, j(v._payload), N)
            }
            if (wn(v) || dn(v))
                return f = f.get(p) || null,
                y(c, f, v, N, null);
            mr(c, v)
        }
        return null
    }
    function w(f, c, p, v) {
        for (var N = null, j = null, C = c, _ = c = 0, W = null; C !== null && _ < p.length; _++) {
            C.index > _ ? (W = C,
            C = null) : W = C.sibling;
            var L = m(f, C, p[_], v);
            if (L === null) {
                C === null && (C = W);
                break
            }
            e && C && L.alternate === null && t(f, C),
            c = i(L, c, _),
            j === null ? N = L : j.sibling = L,
            j = L,
            C = W
        }
        if (_ === p.length)
            return n(f, C),
            U && xt(f, _),
            N;
        if (C === null) {
            for (; _ < p.length; _++)
                C = h(f, p[_], v),
                C !== null && (c = i(C, c, _),
                j === null ? N = C : j.sibling = C,
                j = C);
            return U && xt(f, _),
            N
        }
        for (C = r(f, C); _ < p.length; _++)
            W = x(C, f, _, p[_], v),
            W !== null && (e && W.alternate !== null && C.delete(W.key === null ? _ : W.key),
            c = i(W, c, _),
            j === null ? N = W : j.sibling = W,
            j = W);
        return e && C.forEach(function(_e) {
            return t(f, _e)
        }),
        U && xt(f, _),
        N
    }
    function k(f, c, p, v) {
        var N = dn(p);
        if (typeof N != "function")
            throw Error(g(150));
        if (p = N.call(p),
        p == null)
            throw Error(g(151));
        for (var j = N = null, C = c, _ = c = 0, W = null, L = p.next(); C !== null && !L.done; _++,
        L = p.next()) {
            C.index > _ ? (W = C,
            C = null) : W = C.sibling;
            var _e = m(f, C, L.value, v);
            if (_e === null) {
                C === null && (C = W);
                break
            }
            e && C && _e.alternate === null && t(f, C),
            c = i(_e, c, _),
            j === null ? N = _e : j.sibling = _e,
            j = _e,
            C = W
        }
        if (L.done)
            return n(f, C),
            U && xt(f, _),
            N;
        if (C === null) {
            for (; !L.done; _++,
            L = p.next())
                L = h(f, L.value, v),
                L !== null && (c = i(L, c, _),
                j === null ? N = L : j.sibling = L,
                j = L);
            return U && xt(f, _),
            N
        }
        for (C = r(f, C); !L.done; _++,
        L = p.next())
            L = x(C, f, _, L.value, v),
            L !== null && (e && L.alternate !== null && C.delete(L.key === null ? _ : L.key),
            c = i(L, c, _),
            j === null ? N = L : j.sibling = L,
            j = L);
        return e && C.forEach(function(an) {
            return t(f, an)
        }),
        U && xt(f, _),
        N
    }
    function F(f, c, p, v) {
        if (typeof p == "object" && p !== null && p.type === Rt && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                e: {
                    for (var N = p.key, j = c; j !== null; ) {
                        if (j.key === N) {
                            if (N = p.type,
                            N === Rt) {
                                if (j.tag === 7) {
                                    n(f, j.sibling),
                                    c = l(j, p.props.children),
                                    c.return = f,
                                    f = c;
                                    break e
                                }
                            } else if (j.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && gu(N) === j.type) {
                                n(f, j.sibling),
                                c = l(j, p.props),
                                c.ref = yn(f, j, p),
                                c.return = f,
                                f = c;
                                break e
                            }
                            n(f, j);
                            break
                        } else
                            t(f, j);
                        j = j.sibling
                    }
                    p.type === Rt ? (c = jt(p.props.children, f.mode, v, p.key),
                    c.return = f,
                    f = c) : (v = Tr(p.type, p.key, p.props, null, f.mode, v),
                    v.ref = yn(f, c, p),
                    v.return = f,
                    f = v)
                }
                return o(f);
            case Ot:
                e: {
                    for (j = p.key; c !== null; ) {
                        if (c.key === j)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(f, c.sibling),
                                c = l(c, p.children || []),
                                c.return = f,
                                f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            }
                        else
                            t(f, c);
                        c = c.sibling
                    }
                    c = Kl(p, f.mode, v),
                    c.return = f,
                    f = c
                }
                return o(f);
            case qe:
                return j = p._init,
                F(f, c, j(p._payload), v)
            }
            if (wn(p))
                return w(f, c, p, v);
            if (dn(p))
                return k(f, c, p, v);
            mr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(f, c.sibling),
        c = l(c, p),
        c.return = f,
        f = c) : (n(f, c),
        c = Ql(p, f.mode, v),
        c.return = f,
        f = c),
        o(f)) : n(f, c)
    }
    return F
}
var tn = ra(!0)
  , la = ra(!1)
  , Hr = ht(null)
  , Qr = null
  , Wt = null
  , so = null;
function ao() {
    so = Wt = Qr = null
}
function co(e) {
    var t = Hr.current;
    I(Hr),
    e._currentValue = t
}
function Si(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Zt(e, t) {
    Qr = e,
    so = Wt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (de = !0),
    e.firstContext = null)
}
function je(e) {
    var t = e._currentValue;
    if (so !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Wt === null) {
            if (Qr === null)
                throw Error(g(308));
            Wt = e,
            Qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Wt = Wt.next = e;
    return t
}
var St = null;
function fo(e) {
    St === null ? St = [e] : St.push(e)
}
function ia(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    fo(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ge(e, r)
}
function Ge(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;
function po(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function oa(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ge(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    fo(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ge(e, n)
}
function Er(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ji(e, n)
    }
}
function xu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , d = s.next;
        s.next = null,
        o === null ? i = d : o.next = d,
        o = s;
        var y = e.alternate;
        y !== null && (y = y.updateQueue,
        u = y.lastBaseUpdate,
        u !== o && (u === null ? y.firstBaseUpdate = d : u.next = d,
        y.lastBaseUpdate = s))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0,
        y = d = s = null,
        u = i;
        do {
            var m = u.lane
              , x = u.eventTime;
            if ((r & m) === m) {
                y !== null && (y = y.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = u;
                    switch (m = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            h = w.call(x, h, m);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        m = typeof w == "function" ? w.call(x, h, m) : w,
                        m == null)
                            break e;
                        h = V({}, h, m);
                        break e;
                    case 2:
                        be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                y === null ? (d = y = x,
                s = h) : y = y.next = x,
                o |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (y === null && (s = h),
        l.baseState = s,
        l.firstBaseUpdate = d,
        l.lastBaseUpdate = y,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Pt |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function wu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(g(191, l));
                l.call(r)
            }
        }
}
var bn = {}
  , Ae = ht(bn)
  , Wn = ht(bn)
  , Hn = ht(bn);
function Nt(e) {
    if (e === bn)
        throw Error(g(174));
    return e
}
function mo(e, t) {
    switch (O(Hn, t),
    O(Wn, e),
    O(Ae, bn),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ni(t, e)
    }
    I(Ae),
    O(Ae, t)
}
function nn() {
    I(Ae),
    I(Wn),
    I(Hn)
}
function ua(e) {
    Nt(Hn.current);
    var t = Nt(Ae.current)
      , n = ni(t, e.type);
    t !== n && (O(Wn, e),
    O(Ae, n))
}
function ho(e) {
    Wn.current === e && (I(Ae),
    I(Wn))
}
var A = ht(0);
function Yr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Al = [];
function yo() {
    for (var e = 0; e < Al.length; e++)
        Al[e]._workInProgressVersionPrimary = null;
    Al.length = 0
}
var jr = Ze.ReactCurrentDispatcher
  , $l = Ze.ReactCurrentBatchConfig
  , zt = 0
  , $ = null
  , G = null
  , J = null
  , Gr = !1
  , zn = !1
  , Qn = 0
  , ef = 0;
function ne() {
    throw Error(g(321))
}
function vo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function go(e, t, n, r, l, i) {
    if (zt = i,
    $ = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    jr.current = e === null || e.memoizedState === null ? lf : of,
    e = n(r, l),
    zn) {
        i = 0;
        do {
            if (zn = !1,
            Qn = 0,
            25 <= i)
                throw Error(g(301));
            i += 1,
            J = G = null,
            t.updateQueue = null,
            jr.current = uf,
            e = n(r, l)
        } while (zn)
    }
    if (jr.current = Xr,
    t = G !== null && G.next !== null,
    zt = 0,
    J = G = $ = null,
    Gr = !1,
    t)
        throw Error(g(300));
    return e
}
function xo() {
    var e = Qn !== 0;
    return Qn = 0,
    e
}
function Ie() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? $.memoizedState = J = e : J = J.next = e,
    J
}
function Ce() {
    if (G === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = G.next;
    var t = J === null ? $.memoizedState : J.next;
    if (t !== null)
        J = t,
        G = e;
    else {
        if (e === null)
            throw Error(g(310));
        G = e,
        e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        },
        J === null ? $.memoizedState = J = e : J = J.next = e
    }
    return J
}
function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Vl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = G
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , s = null
          , d = i;
        do {
            var y = d.lane;
            if ((zt & y) === y)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }),
                r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: y,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                s === null ? (u = s = h,
                o = r) : s = s.next = h,
                $.lanes |= y,
                Pt |= y
            }
            d = d.next
        } while (d !== null && d !== i);
        s === null ? o = r : s.next = u,
        Oe(r, t.memoizedState) || (de = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            $.lanes |= i,
            Pt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Bl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Oe(i, t.memoizedState) || (de = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function sa() {}
function aa(e, t) {
    var n = $
      , r = Ce()
      , l = t()
      , i = !Oe(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    de = !0),
    r = r.queue,
    wo(fa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yn(9, da.bind(null, n, r, l, t), void 0, null),
        q === null)
            throw Error(g(349));
        zt & 30 || ca(n, t, l)
    }
    return l
}
function ca(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function da(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    pa(t) && ma(e)
}
function fa(e, t, n) {
    return n(function() {
        pa(t) && ma(e)
    })
}
function pa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function ma(e) {
    var t = Ge(e, 1);
    t !== null && De(t, e, 1, -1)
}
function ku(e) {
    var t = Ie();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = rf.bind(null, $, e),
    [t.memoizedState, e]
}
function Yn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ha() {
    return Ce().memoizedState
}
function Cr(e, t, n, r) {
    var l = Ie();
    $.flags |= e,
    l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r)
}
function al(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (G !== null) {
        var o = G.memoizedState;
        if (i = o.destroy,
        r !== null && vo(r, o.deps)) {
            l.memoizedState = Yn(t, n, i, r);
            return
        }
    }
    $.flags |= e,
    l.memoizedState = Yn(1 | t, n, i, r)
}
function Su(e, t) {
    return Cr(8390656, 8, e, t)
}
function wo(e, t) {
    return al(2048, 8, e, t)
}
function ya(e, t) {
    return al(4, 2, e, t)
}
function va(e, t) {
    return al(4, 4, e, t)
}
function ga(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function xa(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    al(4, 4, ga.bind(null, t, e), n)
}
function ko() {}
function wa(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ka(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Sa(e, t, n) {
    return zt & 21 ? (Oe(n, t) || (n = _s(),
    $.lanes |= n,
    Pt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    de = !0),
    e.memoizedState = n)
}
function tf(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1),
        t()
    } finally {
        D = n,
        $l.transition = r
    }
}
function Na() {
    return Ce().memoizedState
}
function nf(e, t, n) {
    var r = ct(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ea(e))
        ja(t, n);
    else if (n = ia(e, t, n, r),
    n !== null) {
        var l = ue();
        De(n, e, r, l),
        Ca(n, t, r)
    }
}
function rf(e, t, n) {
    var r = ct(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ea(e))
        ja(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Oe(u, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    fo(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = ia(e, t, l, r),
        n !== null && (l = ue(),
        De(n, e, r, l),
        Ca(n, t, r))
    }
}
function Ea(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}
function ja(e, t) {
    zn = Gr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ca(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ji(e, n)
    }
}
var Xr = {
    readContext: je,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , lf = {
    readContext: je,
    useCallback: function(e, t) {
        return Ie().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: je,
    useEffect: Su,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Cr(4194308, 4, ga.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Cr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Cr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ie();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ie();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = nf.bind(null, $, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ie();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ku,
    useDebugValue: ko,
    useDeferredValue: function(e) {
        return Ie().memoizedState = e
    },
    useTransition: function() {
        var e = ku(!1)
          , t = e[0];
        return e = tf.bind(null, e[1]),
        Ie().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = $
          , l = Ie();
        if (U) {
            if (n === void 0)
                throw Error(g(407));
            n = n()
        } else {
            if (n = t(),
            q === null)
                throw Error(g(349));
            zt & 30 || ca(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Su(fa.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Yn(9, da.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ie()
          , t = q.identifierPrefix;
        if (U) {
            var n = We
              , r = Be;
            n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = ef++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , of = {
    readContext: je,
    useCallback: wa,
    useContext: je,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ya,
    useLayoutEffect: va,
    useMemo: ka,
    useReducer: Vl,
    useRef: ha,
    useState: function() {
        return Vl(Kn)
    },
    useDebugValue: ko,
    useDeferredValue: function(e) {
        var t = Ce();
        return Sa(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Vl(Kn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1
}
  , uf = {
    readContext: je,
    useCallback: wa,
    useContext: je,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ya,
    useLayoutEffect: va,
    useMemo: ka,
    useReducer: Bl,
    useRef: ha,
    useState: function() {
        return Bl(Kn)
    },
    useDebugValue: ko,
    useDeferredValue: function(e) {
        var t = Ce();
        return G === null ? t.memoizedState = e : Sa(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Bl(Kn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1
};
function Pe(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ni(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : V({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = Qe(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (De(t, e, l, r),
        Er(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = Qe(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (De(t, e, l, r),
        Er(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = ct(e)
          , l = Qe(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = st(e, l, r),
        t !== null && (De(t, e, r, n),
        Er(t, e, r))
    }
};
function Nu(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !An(n, r) || !An(l, i) : !0
}
function _a(e, t, n) {
    var r = !1
      , l = pt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = je(i) : (l = pe(t) ? Ct : ie.current,
    r = t.contextTypes,
    i = (r = r != null) ? bt(e, l) : pt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = cl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Eu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null)
}
function Ei(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    po(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = je(i) : (i = pe(t) ? Ct : ie.current,
    l.context = bt(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ni(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && cl.enqueueReplaceState(l, l.state, null),
    Kr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function rn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Oc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Wl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ji(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var sf = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, t, n) {
    n = Qe(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0,
        Ri = r),
        ji(e, t)
    }
    ,
    n
}
function Pa(e, t, n) {
    n = Qe(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            ji(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ji(e, t),
        typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function ju(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new sf;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Sf.bind(null, e, t, n),
    t.then(e, e))
}
function Cu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function _u(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1),
    t.tag = 2,
    st(n, t, 1))),
    n.lanes |= 1),
    e)
}
var af = Ze.ReactCurrentOwner
  , de = !1;
function oe(e, t, n, r) {
    t.child = e === null ? la(t, null, n, r) : tn(t, e.child, n, r)
}
function zu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Zt(t, l),
    r = go(e, t, n, r, i, l),
    n = xo(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && n && io(t),
    t.flags |= 1,
    oe(e, t, r, l),
    t.child)
}
function Pu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Po(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Ta(e, t, i, r, l)) : (e = Tr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : An,
        n(o, r) && e.ref === t.ref)
            return Xe(e, t, l)
    }
    return t.flags |= 1,
    e = dt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ta(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (An(i, r) && e.ref === t.ref)
            if (de = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (de = !0);
            else
                return t.lanes = e.lanes,
                Xe(e, t, l)
    }
    return Ci(e, t, n, r, l)
}
function La(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            O(Qt, he),
            he |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                O(Qt, he),
                he |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            O(Qt, he),
            he |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        O(Qt, he),
        he |= r;
    return oe(e, t, l, n),
    t.child
}
function Ma(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ci(e, t, n, r, l) {
    var i = pe(n) ? Ct : ie.current;
    return i = bt(t, i),
    Zt(t, l),
    n = go(e, t, n, r, i, l),
    r = xo(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && r && io(t),
    t.flags |= 1,
    oe(e, t, n, l),
    t.child)
}
function Tu(e, t, n, r, l) {
    if (pe(n)) {
        var i = !0;
        Vr(t)
    } else
        i = !1;
    if (Zt(t, l),
    t.stateNode === null)
        _r(e, t),
        _a(t, n, r),
        Ei(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var s = o.context
          , d = n.contextType;
        typeof d == "object" && d !== null ? d = je(d) : (d = pe(n) ? Ct : ie.current,
        d = bt(t, d));
        var y = n.getDerivedStateFromProps
          , h = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && Eu(t, o, r, d),
        be = !1;
        var m = t.memoizedState;
        o.state = m,
        Kr(t, r, o, l),
        s = t.memoizedState,
        u !== r || m !== s || fe.current || be ? (typeof y == "function" && (Ni(t, n, y, r),
        s = t.memoizedState),
        (u = be || Nu(t, n, u, r, m, s, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = d,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        oa(e, t),
        u = t.memoizedProps,
        d = t.type === t.elementType ? u : Pe(t.type, u),
        o.props = d,
        h = t.pendingProps,
        m = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = je(s) : (s = pe(n) ? Ct : ie.current,
        s = bt(t, s));
        var x = n.getDerivedStateFromProps;
        (y = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || m !== s) && Eu(t, o, r, s),
        be = !1,
        m = t.memoizedState,
        o.state = m,
        Kr(t, r, o, l);
        var w = t.memoizedState;
        u !== h || m !== w || fe.current || be ? (typeof x == "function" && (Ni(t, n, x, r),
        w = t.memoizedState),
        (d = be || Nu(t, n, d, r, m, w, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = s,
        r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return _i(e, t, n, r, i, l)
}
function _i(e, t, n, r, l, i) {
    Ma(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && hu(t, n, !1),
        Xe(e, t, i);
    r = t.stateNode,
    af.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = tn(t, e.child, null, i),
    t.child = tn(t, null, u, i)) : oe(e, t, u, i),
    t.memoizedState = r.state,
    l && hu(t, n, !0),
    t.child
}
function Da(e) {
    var t = e.stateNode;
    t.pendingContext ? mu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mu(e, t.context, !1),
    mo(e, t.containerInfo)
}
function Lu(e, t, n, r, l) {
    return en(),
    uo(l),
    t.flags |= 256,
    oe(e, t, n, r),
    t.child
}
var zi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Pi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Oa(e, t, n) {
    var r = t.pendingProps, l = A.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    O(A, l & 1),
    e === null)
        return ki(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = pl(o, r, 0, null),
        e = jt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Pi(n),
        t.memoizedState = zi,
        e) : So(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return cf(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = dt(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = dt(u, i) : (i = jt(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Pi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = zi,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = dt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function So(e, t) {
    return t = pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function hr(e, t, n, r) {
    return r !== null && uo(r),
    tn(t, e.child, null, n),
    e = So(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function cf(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Wl(Error(g(422))),
        hr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = pl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = jt(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && tn(t, e.child, null, o),
        t.child.memoizedState = Pi(o),
        t.memoizedState = zi,
        i);
    if (!(t.mode & 1))
        return hr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(g(419)),
        r = Wl(i, r, void 0),
        hr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    de || u) {
        if (r = q,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Ge(e, l),
            De(r, e, l, -1))
        }
        return zo(),
        r = Wl(Error(g(421))),
        hr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Nf.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    ye = ut(l.nextSibling),
    ve = t,
    U = !0,
    Le = null,
    e !== null && (ke[Se++] = Be,
    ke[Se++] = We,
    ke[Se++] = _t,
    Be = e.id,
    We = e.overflow,
    _t = t),
    t = So(t, r.children),
    t.flags |= 4096,
    t)
}
function Mu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Si(e.return, t, n)
}
function Hl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function Ra(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (oe(e, t, r.children, n),
    r = A.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Mu(e, n, t);
                else if (e.tag === 19)
                    Mu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (O(A, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Yr(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Hl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Yr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Hl(t, !0, n, null, i);
            break;
        case "together":
            Hl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function _r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Pt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child,
        n = dt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = dt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function df(e, t, n) {
    switch (t.tag) {
    case 3:
        Da(t),
        en();
        break;
    case 5:
        ua(t);
        break;
    case 1:
        pe(t.type) && Vr(t);
        break;
    case 4:
        mo(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        O(Hr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (O(A, A.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Oa(e, t, n) : (O(A, A.current & 1),
            e = Xe(e, t, n),
            e !== null ? e.sibling : null);
        O(A, A.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ra(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        O(A, A.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        La(e, t, n)
    }
    return Xe(e, t, n)
}
var Ia, Ti, Fa, Ua;
Ia = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ti = function() {}
;
Fa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Nt(Ae.current);
        var i = null;
        switch (n) {
        case "input":
            l = ql(e, l),
            r = ql(e, r),
            i = [];
            break;
        case "select":
            l = V({}, l, {
                value: void 0
            }),
            r = V({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = ti(e, l),
            r = ti(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar)
        }
        ri(n, r);
        var o;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var u = l[d];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Mn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
            var s = r[d];
            if (u = l != null ? l[d] : void 0,
            r.hasOwnProperty(d) && s !== u && (s != null || u != null))
                if (d === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(d, n)),
                        n = s;
                else
                    d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Mn.hasOwnProperty(d) ? (s != null && d === "onScroll" && R("scroll", e),
                    i || u === s || (i = [])) : (i = i || []).push(d, s))
        }
        n && (i = i || []).push("style", n);
        var d = i;
        (t.updateQueue = d) && (t.flags |= 4)
    }
}
;
Ua = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function vn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ff(e, t, n) {
    var r = t.pendingProps;
    switch (oo(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return pe(t.type) && $r(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        nn(),
        I(fe),
        I(ie),
        yo(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Le !== null && (Ui(Le),
        Le = null))),
        Ti(e, t),
        re(t),
        null;
    case 5:
        ho(t);
        var l = Nt(Hn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Fa(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(g(166));
                return re(t),
                null
            }
            if (e = Nt(Ae.current),
            pr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Fe] = t,
                r[Bn] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    R("cancel", r),
                    R("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    R("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Sn.length; l++)
                        R(Sn[l], r);
                    break;
                case "source":
                    R("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    R("error", r),
                    R("load", r);
                    break;
                case "details":
                    R("toggle", r);
                    break;
                case "input":
                    Vo(r, i),
                    R("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    R("invalid", r);
                    break;
                case "textarea":
                    Wo(r, i),
                    R("invalid", r)
                }
                ri(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", "" + u]) : Mn.hasOwnProperty(o) && u != null && o === "onScroll" && R("scroll", r)
                    }
                switch (n) {
                case "input":
                    lr(r),
                    Bo(r, i, !0);
                    break;
                case "textarea":
                    lr(r),
                    Ho(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ar)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = fs(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Fe] = t,
                e[Bn] = r,
                Ia(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = li(n, r),
                    n) {
                    case "dialog":
                        R("cancel", e),
                        R("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        R("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Sn.length; l++)
                            R(Sn[l], e);
                        l = r;
                        break;
                    case "source":
                        R("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        R("error", e),
                        R("load", e),
                        l = r;
                        break;
                    case "details":
                        R("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Vo(e, r),
                        l = ql(e, r),
                        R("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = V({}, r, {
                            value: void 0
                        }),
                        R("invalid", e);
                        break;
                    case "textarea":
                        Wo(e, r),
                        l = ti(e, r),
                        R("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    ri(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? hs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && ps(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mn.hasOwnProperty(i) ? s != null && i === "onScroll" && R("scroll", e) : s != null && Qi(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        lr(e),
                        Bo(e, r, !1);
                        break;
                    case "textarea":
                        lr(e),
                        Ho(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Kt(e, !!r.multiple, i, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Ar)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ua(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(g(166));
            if (n = Nt(Hn.current),
            Nt(Ae.current),
            pr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Fe] = t,
                (i = r.nodeValue !== n) && (e = ve,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Fe] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (I(A),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && ye !== null && t.mode & 1 && !(t.flags & 128))
                na(),
                en(),
                t.flags |= 98560,
                i = !1;
            else if (i = pr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(g(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(g(317));
                    i[Fe] = t
                } else
                    en(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                i = !1
            } else
                Le !== null && (Ui(Le),
                Le = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : zo())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return nn(),
        Ti(e, t),
        e === null && $n(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return co(t.type._context),
        re(t),
        null;
    case 17:
        return pe(t.type) && $r(),
        re(t),
        null;
    case 19:
        if (I(A),
        i = t.memoizedState,
        i === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                vn(i, !1);
            else {
                if (X !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Yr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            vn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return O(A, A.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Q() > ln && (t.flags |= 128,
                r = !0,
                vn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Yr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    vn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
                        return re(t),
                        null
                } else
                    2 * Q() - i.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    vn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Q(),
        t.sibling = null,
        n = A.current,
        O(A, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return _o(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? he & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(g(156, t.tag))
}
function pf(e, t) {
    switch (oo(t),
    t.tag) {
    case 1:
        return pe(t.type) && $r(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return nn(),
        I(fe),
        I(ie),
        yo(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ho(t),
        null;
    case 13:
        if (I(A),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(g(340));
            en()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return I(A),
        null;
    case 4:
        return nn(),
        null;
    case 10:
        return co(t.type._context),
        null;
    case 22:
    case 23:
        return _o(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var yr = !1
  , le = !1
  , mf = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Ht(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                B(e, t, r)
            }
        else
            n.current = null
}
function Li(e, t, n) {
    try {
        n()
    } catch (r) {
        B(e, t, r)
    }
}
var Du = !1;
function hf(e, t) {
    if (mi = Ir,
    e = Ws(),
    lo(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , s = -1
                      , d = 0
                      , y = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l),
                        h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (x = h.firstChild) !== null; )
                            m = h,
                            h = x;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++d === l && (u = o),
                            m === i && ++y === r && (s = o),
                            (x = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = x
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (hi = {
        focusedElem: e,
        selectionRange: n
    },
    Ir = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , F = w.memoizedState
                                  , f = t.stateNode
                                  , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Pe(t.type, k), F);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                        }
                } catch (v) {
                    B(t, t.return, v)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = Du,
    Du = !1,
    w
}
function Pn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Li(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function dl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Mi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Aa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Aa(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Fe],
    delete t[Bn],
    delete t[gi],
    delete t[Zd],
    delete t[Jd])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function $a(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ou(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || $a(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ar));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Di(e, t, n),
        e = e.sibling; e !== null; )
            Di(e, t, n),
            e = e.sibling
}
function Oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Oi(e, t, n),
        e = e.sibling; e !== null; )
            Oi(e, t, n),
            e = e.sibling
}
var b = null
  , Te = !1;
function Je(e, t, n) {
    for (n = n.child; n !== null; )
        Va(e, t, n),
        n = n.sibling
}
function Va(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(rl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Ht(n, t);
    case 6:
        var r = b
          , l = Te;
        b = null,
        Je(e, t, n),
        b = r,
        Te = l,
        b !== null && (Te ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
    case 18:
        b !== null && (Te ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n),
        Fn(e)) : Fl(b, n.stateNode));
        break;
    case 4:
        r = b,
        l = Te,
        b = n.stateNode.containerInfo,
        Te = !0,
        Je(e, t, n),
        b = r,
        Te = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Li(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Je(e, t, n);
        break;
    case 1:
        if (!le && (Ht(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                B(n, t, u)
            }
        Je(e, t, n);
        break;
    case 21:
        Je(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        Je(e, t, n),
        le = r) : Je(e, t, n);
        break;
    default:
        Je(e, t, n)
    }
}
function Ru(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new mf),
        t.forEach(function(r) {
            var l = Ef.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        b = u.stateNode,
                        Te = !1;
                        break e;
                    case 3:
                        b = u.stateNode.containerInfo,
                        Te = !0;
                        break e;
                    case 4:
                        b = u.stateNode.containerInfo,
                        Te = !0;
                        break e
                    }
                    u = u.return
                }
                if (b === null)
                    throw Error(g(160));
                Va(i, o, l),
                b = null,
                Te = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (d) {
                B(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ba(t, e),
            t = t.sibling
}
function Ba(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ze(t, e),
        Re(e),
        r & 4) {
            try {
                Pn(3, e, e.return),
                dl(3, e)
            } catch (k) {
                B(e, e.return, k)
            }
            try {
                Pn(5, e, e.return)
            } catch (k) {
                B(e, e.return, k)
            }
        }
        break;
    case 1:
        ze(t, e),
        Re(e),
        r & 512 && n !== null && Ht(n, n.return);
        break;
    case 5:
        if (ze(t, e),
        Re(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Dn(l, "")
            } catch (k) {
                B(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && cs(l, i),
                    li(u, o);
                    var d = li(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var y = s[o]
                          , h = s[o + 1];
                        y === "style" ? hs(l, h) : y === "dangerouslySetInnerHTML" ? ps(l, h) : y === "children" ? Dn(l, h) : Qi(l, y, h, d)
                    }
                    switch (u) {
                    case "input":
                        bl(l, i);
                        break;
                    case "textarea":
                        ds(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Kt(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Kt(l, !!i.multiple, i.defaultValue, !0) : Kt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Bn] = i
                } catch (k) {
                    B(e, e.return, k)
                }
        }
        break;
    case 6:
        if (ze(t, e),
        Re(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(g(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (k) {
                B(e, e.return, k)
            }
        }
        break;
    case 3:
        if (ze(t, e),
        Re(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fn(t.containerInfo)
            } catch (k) {
                B(e, e.return, k)
            }
        break;
    case 4:
        ze(t, e),
        Re(e);
        break;
    case 13:
        ze(t, e),
        Re(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (jo = Q())),
        r & 4 && Ru(e);
        break;
    case 22:
        if (y = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (d = le) || y,
        ze(t, e),
        le = d) : ze(t, e),
        Re(e),
        r & 8192) {
            if (d = e.memoizedState !== null,
            (e.stateNode.isHidden = d) && !y && e.mode & 1)
                for (S = e,
                y = e.child; y !== null; ) {
                    for (h = S = y; S !== null; ) {
                        switch (m = S,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Pn(4, m, m.return);
                            break;
                        case 1:
                            Ht(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    B(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Ht(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Fu(h);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        S = x) : Fu(h)
                    }
                    y = y.sibling
                }
            e: for (y = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (y === null) {
                        y = h;
                        try {
                            l = h.stateNode,
                            d ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode,
                            s = h.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = ms("display", o))
                        } catch (k) {
                            B(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (y === null)
                        try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (k) {
                            B(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    y === h && (y = null),
                    h = h.return
                }
                y === h && (y = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        ze(t, e),
        Re(e),
        r & 4 && Ru(e);
        break;
    case 21:
        break;
    default:
        ze(t, e),
        Re(e)
    }
}
function Re(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if ($a(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Dn(l, ""),
                r.flags &= -33);
                var i = Ou(e);
                Oi(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = Ou(e);
                Di(e, u, o);
                break;
            default:
                throw Error(g(161))
            }
        } catch (s) {
            B(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function yf(e, t, n) {
    S = e,
    Wa(e)
}
function Wa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || yr;
            if (!o) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = yr;
                var d = le;
                if (yr = o,
                (le = s) && !d)
                    for (S = l; S !== null; )
                        o = S,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Uu(l) : s !== null ? (s.return = o,
                        S = s) : Uu(l);
                for (; i !== null; )
                    S = i,
                    Wa(i),
                    i = i.sibling;
                S = l,
                yr = u,
                le = d
            }
            Iu(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            S = i) : Iu(e)
    }
}
function Iu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || dl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Pe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && wu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            wu(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var y = d.memoizedState;
                                if (y !== null) {
                                    var h = y.dehydrated;
                                    h !== null && Fn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(g(163))
                    }
                le || t.flags & 512 && Mi(t)
            } catch (m) {
                B(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Fu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Uu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    dl(4, t)
                } catch (s) {
                    B(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        B(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Mi(t)
                } catch (s) {
                    B(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Mi(t)
                } catch (s) {
                    B(t, o, s)
                }
            }
        } catch (s) {
            B(t, t.return, s)
        }
        if (t === e) {
            S = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            S = u;
            break
        }
        S = t.return
    }
}
var vf = Math.ceil
  , Zr = Ze.ReactCurrentDispatcher
  , No = Ze.ReactCurrentOwner
  , Ee = Ze.ReactCurrentBatchConfig
  , M = 0
  , q = null
  , K = null
  , ee = 0
  , he = 0
  , Qt = ht(0)
  , X = 0
  , Gn = null
  , Pt = 0
  , fl = 0
  , Eo = 0
  , Tn = null
  , ce = null
  , jo = 0
  , ln = 1 / 0
  , $e = null
  , Jr = !1
  , Ri = null
  , at = null
  , vr = !1
  , rt = null
  , qr = 0
  , Ln = 0
  , Ii = null
  , zr = -1
  , Pr = 0;
function ue() {
    return M & 6 ? Q() : zr !== -1 ? zr : zr = Q()
}
function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : bd.transition !== null ? (Pr === 0 && (Pr = _s()),
    Pr) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Os(e.type)),
    e) : 1
}
function De(e, t, n, r) {
    if (50 < Ln)
        throw Ln = 0,
        Ii = null,
        Error(g(185));
    Zn(e, n, r),
    (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (fl |= n),
    X === 4 && tt(e, ee)),
    me(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (ln = Q() + 500,
    sl && yt()))
}
function me(e, t) {
    var n = e.callbackNode;
    bc(e, t);
    var r = Rr(e, e === q ? ee : 0);
    if (r === 0)
        n !== null && Yo(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Yo(n),
        t === 1)
            e.tag === 0 ? qd(Au.bind(null, e)) : bs(Au.bind(null, e)),
            Gd(function() {
                !(M & 6) && yt()
            }),
            n = null;
        else {
            switch (zs(r)) {
            case 1:
                n = Zi;
                break;
            case 4:
                n = js;
                break;
            case 16:
                n = Or;
                break;
            case 536870912:
                n = Cs;
                break;
            default:
                n = Or
            }
            n = Ja(n, Ha.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ha(e, t) {
    if (zr = -1,
    Pr = 0,
    M & 6)
        throw Error(g(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n)
        return null;
    var r = Rr(e, e === q ? ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = br(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = Ka();
        (q !== e || ee !== t) && ($e = null,
        ln = Q() + 500,
        Et(e, t));
        do
            try {
                wf();
                break
            } catch (u) {
                Qa(e, u)
            }
        while (!0);
        ao(),
        Zr.current = i,
        M = l,
        K !== null ? t = 0 : (q = null,
        ee = 0,
        t = X)
    }
    if (t !== 0) {
        if (t === 2 && (l = ai(e),
        l !== 0 && (r = l,
        t = Fi(e, l))),
        t === 1)
            throw n = Gn,
            Et(e, 0),
            tt(e, r),
            me(e, Q()),
            n;
        if (t === 6)
            tt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !gf(l) && (t = br(e, r),
            t === 2 && (i = ai(e),
            i !== 0 && (r = i,
            t = Fi(e, i))),
            t === 1))
                throw n = Gn,
                Et(e, 0),
                tt(e, r),
                me(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(g(345));
            case 2:
                wt(e, ce, $e);
                break;
            case 3:
                if (tt(e, r),
                (r & 130023424) === r && (t = jo + 500 - Q(),
                10 < t)) {
                    if (Rr(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = vi(wt.bind(null, e, ce, $e), t);
                    break
                }
                wt(e, ce, $e);
                break;
            case 4:
                if (tt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Me(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = vi(wt.bind(null, e, ce, $e), r);
                    break
                }
                wt(e, ce, $e);
                break;
            case 5:
                wt(e, ce, $e);
                break;
            default:
                throw Error(g(329))
            }
        }
    }
    return me(e, Q()),
    e.callbackNode === n ? Ha.bind(null, e) : null
}
function Fi(e, t) {
    var n = Tn;
    return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    e = br(e, t),
    e !== 2 && (t = ce,
    ce = n,
    t !== null && Ui(t)),
    e
}
function Ui(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}
function gf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function tt(e, t) {
    for (t &= ~Eo,
    t &= ~fl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Me(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Au(e) {
    if (M & 6)
        throw Error(g(327));
    Jt();
    var t = Rr(e, 0);
    if (!(t & 1))
        return me(e, Q()),
        null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ai(e);
        r !== 0 && (t = r,
        n = Fi(e, r))
    }
    if (n === 1)
        throw n = Gn,
        Et(e, 0),
        tt(e, t),
        me(e, Q()),
        n;
    if (n === 6)
        throw Error(g(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    wt(e, ce, $e),
    me(e, Q()),
    null
}
function Co(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (ln = Q() + 500,
        sl && yt())
    }
}
function Tt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && Jt();
    var t = M;
    M |= 1;
    var n = Ee.transition
      , r = D;
    try {
        if (Ee.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        Ee.transition = n,
        M = t,
        !(M & 6) && yt()
    }
}
function _o() {
    he = Qt.current,
    I(Qt)
}
function Et(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Yd(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (oo(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && $r();
                break;
            case 3:
                nn(),
                I(fe),
                I(ie),
                yo();
                break;
            case 5:
                ho(r);
                break;
            case 4:
                nn();
                break;
            case 13:
                I(A);
                break;
            case 19:
                I(A);
                break;
            case 10:
                co(r.type._context);
                break;
            case 22:
            case 23:
                _o()
            }
            n = n.return
        }
    if (q = e,
    K = e = dt(e.current, null),
    ee = he = t,
    X = 0,
    Gn = null,
    Eo = fl = Pt = 0,
    ce = Tn = null,
    St !== null) {
        for (t = 0; t < St.length; t++)
            if (n = St[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        St = null
    }
    return e
}
function Qa(e, t) {
    do {
        var n = K;
        try {
            if (ao(),
            jr.current = Xr,
            Gr) {
                for (var r = $.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Gr = !1
            }
            if (zt = 0,
            J = G = $ = null,
            zn = !1,
            Qn = 0,
            No.current = null,
            n === null || n.return === null) {
                X = 1,
                Gn = t,
                K = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , s = t;
                if (t = ee,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var d = s
                      , y = u
                      , h = y.tag;
                    if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = y.alternate;
                        m ? (y.updateQueue = m.updateQueue,
                        y.memoizedState = m.memoizedState,
                        y.lanes = m.lanes) : (y.updateQueue = null,
                        y.memoizedState = null)
                    }
                    var x = Cu(o);
                    if (x !== null) {
                        x.flags &= -257,
                        _u(x, o, u, i, t),
                        x.mode & 1 && ju(i, d, t),
                        t = x,
                        s = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ju(i, d, t),
                            zo();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (U && u.mode & 1) {
                    var F = Cu(o);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                        _u(F, o, u, i, t),
                        uo(rn(s, u));
                        break e
                    }
                }
                i = s = rn(s, u),
                X !== 4 && (X = 2),
                Tn === null ? Tn = [i] : Tn.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = za(i, s, t);
                        xu(i, f);
                        break e;
                    case 1:
                        u = s;
                        var c = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (at === null || !at.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var v = Pa(i, u, t);
                            xu(i, v);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ga(n)
        } catch (N) {
            t = N,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Ka() {
    var e = Zr.current;
    return Zr.current = Xr,
    e === null ? Xr : e
}
function zo() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || !(Pt & 268435455) && !(fl & 268435455) || tt(q, ee)
}
function br(e, t) {
    var n = M;
    M |= 2;
    var r = Ka();
    (q !== e || ee !== t) && ($e = null,
    Et(e, t));
    do
        try {
            xf();
            break
        } catch (l) {
            Qa(e, l)
        }
    while (!0);
    if (ao(),
    M = n,
    Zr.current = r,
    K !== null)
        throw Error(g(261));
    return q = null,
    ee = 0,
    X
}
function xf() {
    for (; K !== null; )
        Ya(K)
}
function wf() {
    for (; K !== null && !Hc(); )
        Ya(K)
}
function Ya(e) {
    var t = Za(e.alternate, e, he);
    e.memoizedProps = e.pendingProps,
    t === null ? Ga(e) : K = t,
    No.current = null
}
function Ga(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = pf(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                X = 6,
                K = null;
                return
            }
        } else if (n = ff(n, t, he),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    X === 0 && (X = 5)
}
function wt(e, t, n) {
    var r = D
      , l = Ee.transition;
    try {
        Ee.transition = null,
        D = 1,
        kf(e, t, n, r)
    } finally {
        Ee.transition = l,
        D = r
    }
    return null
}
function kf(e, t, n, r) {
    do
        Jt();
    while (rt !== null);
    if (M & 6)
        throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(g(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ed(e, i),
    e === q && (K = q = null,
    ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vr || (vr = !0,
    Ja(Or, function() {
        return Jt(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ee.transition,
        Ee.transition = null;
        var o = D;
        D = 1;
        var u = M;
        M |= 4,
        No.current = null,
        hf(e, n),
        Ba(n, e),
        $d(hi),
        Ir = !!mi,
        hi = mi = null,
        e.current = n,
        yf(n),
        Qc(),
        M = u,
        D = o,
        Ee.transition = i
    } else
        e.current = n;
    if (vr && (vr = !1,
    rt = e,
    qr = l),
    i = e.pendingLanes,
    i === 0 && (at = null),
    Gc(n.stateNode),
    me(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Jr)
        throw Jr = !1,
        e = Ri,
        Ri = null,
        e;
    return qr & 1 && e.tag !== 0 && Jt(),
    i = e.pendingLanes,
    i & 1 ? e === Ii ? Ln++ : (Ln = 0,
    Ii = e) : Ln = 0,
    yt(),
    null
}
function Jt() {
    if (rt !== null) {
        var e = zs(qr)
          , t = Ee.transition
          , n = D;
        try {
            if (Ee.transition = null,
            D = 16 > e ? 16 : e,
            rt === null)
                var r = !1;
            else {
                if (e = rt,
                rt = null,
                qr = 0,
                M & 6)
                    throw Error(g(331));
                var l = M;
                for (M |= 4,
                S = e.current; S !== null; ) {
                    var i = S
                      , o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var d = u[s];
                                for (S = d; S !== null; ) {
                                    var y = S;
                                    switch (y.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pn(8, y, i)
                                    }
                                    var h = y.child;
                                    if (h !== null)
                                        h.return = y,
                                        S = h;
                                    else
                                        for (; S !== null; ) {
                                            y = S;
                                            var m = y.sibling
                                              , x = y.return;
                                            if (Aa(y),
                                            y === d) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        k.sibling = null,
                                        k = F
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        S = o;
                    else
                        e: for (; S !== null; ) {
                            if (i = S,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Pn(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                S = f;
                                break e
                            }
                            S = i.return
                        }
                }
                var c = e.current;
                for (S = c; S !== null; ) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        S = p;
                    else
                        e: for (o = c; S !== null; ) {
                            if (u = S,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        dl(9, u)
                                    }
                                } catch (N) {
                                    B(u, u.return, N)
                                }
                            if (u === o) {
                                S = null;
                                break e
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                v.return = u.return,
                                S = v;
                                break e
                            }
                            S = u.return
                        }
                }
                if (M = l,
                yt(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(rl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = n,
            Ee.transition = t
        }
    }
    return !1
}
function $u(e, t, n) {
    t = rn(n, t),
    t = za(e, t, 1),
    e = st(e, t, 1),
    t = ue(),
    e !== null && (Zn(e, 1, t),
    me(e, t))
}
function B(e, t, n) {
    if (e.tag === 3)
        $u(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                $u(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = rn(n, e),
                    e = Pa(t, e, 1),
                    t = st(t, e, 1),
                    e = ue(),
                    t !== null && (Zn(t, 1, e),
                    me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Sf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    q === e && (ee & n) === n && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > Q() - jo ? Et(e, 0) : Eo |= n),
    me(e, t)
}
function Xa(e, t) {
    t === 0 && (e.mode & 1 ? (t = ur,
    ur <<= 1,
    !(ur & 130023424) && (ur = 4194304)) : t = 1);
    var n = ue();
    e = Ge(e, t),
    e !== null && (Zn(e, t, n),
    me(e, n))
}
function Nf(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Xa(e, n)
}
function Ef(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(g(314))
    }
    r !== null && r.delete(t),
    Xa(e, n)
}
var Za;
Za = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current)
            de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return de = !1,
                df(e, t, n);
            de = !!(e.flags & 131072)
        }
    else
        de = !1,
        U && t.flags & 1048576 && ea(t, Wr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        _r(e, t),
        e = t.pendingProps;
        var l = bt(t, ie.current);
        Zt(t, n),
        l = go(null, t, r, e, l, n);
        var i = xo();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        pe(r) ? (i = !0,
        Vr(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        po(t),
        l.updater = cl,
        t.stateNode = l,
        l._reactInternals = t,
        Ei(t, r, e, n),
        t = _i(null, t, r, !0, i, n)) : (t.tag = 0,
        U && i && io(t),
        oe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (_r(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Cf(r),
            e = Pe(r, e),
            l) {
            case 0:
                t = Ci(null, t, r, e, n);
                break e;
            case 1:
                t = Tu(null, t, r, e, n);
                break e;
            case 11:
                t = zu(null, t, r, e, n);
                break e;
            case 14:
                t = Pu(null, t, r, Pe(r.type, e), n);
                break e
            }
            throw Error(g(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        Ci(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        Tu(e, t, r, l, n);
    case 3:
        e: {
            if (Da(t),
            e === null)
                throw Error(g(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            oa(e, t),
            Kr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = rn(Error(g(423)), t),
                    t = Lu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = rn(Error(g(424)), t),
                    t = Lu(e, t, r, n, l);
                    break e
                } else
                    for (ye = ut(t.stateNode.containerInfo.firstChild),
                    ve = t,
                    U = !0,
                    Le = null,
                    n = la(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (en(),
                r === l) {
                    t = Xe(e, t, n);
                    break e
                }
                oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ua(t),
        e === null && ki(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        yi(r, l) ? o = null : i !== null && yi(r, i) && (t.flags |= 32),
        Ma(e, t),
        oe(e, t, o, n),
        t.child;
    case 6:
        return e === null && ki(t),
        null;
    case 13:
        return Oa(e, t, n);
    case 4:
        return mo(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = tn(t, null, r, n) : oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        zu(e, t, r, l, n);
    case 7:
        return oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            O(Hr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Oe(i.value, o)) {
                    if (i.children === l.children && !fe.current) {
                        t = Xe(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Qe(-1, n & -n),
                                        s.tag = 2;
                                        var d = i.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var y = d.pending;
                                            y === null ? s.next = s : (s.next = y.next,
                                            y.next = s),
                                            d.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    Si(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(g(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            Si(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            oe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        Zt(t, n),
        l = je(l),
        r = r(l),
        t.flags |= 1,
        oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Pe(r, t.pendingProps),
        l = Pe(r.type, l),
        Pu(e, t, r, l, n);
    case 15:
        return Ta(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        _r(e, t),
        t.tag = 1,
        pe(r) ? (e = !0,
        Vr(t)) : e = !1,
        Zt(t, n),
        _a(t, r, l),
        Ei(t, r, l, n),
        _i(null, t, r, !0, e, n);
    case 19:
        return Ra(e, t, n);
    case 22:
        return La(e, t, n)
    }
    throw Error(g(156, t.tag))
}
;
function Ja(e, t) {
    return Es(e, t)
}
function jf(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ne(e, t, n, r) {
    return new jf(e,t,n,r)
}
function Po(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Cf(e) {
    if (typeof e == "function")
        return Po(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yi)
            return 11;
        if (e === Gi)
            return 14
    }
    return 2
}
function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ne(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Tr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Po(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Rt:
            return jt(n.children, l, i, t);
        case Ki:
            o = 8,
            l |= 8;
            break;
        case Gl:
            return e = Ne(12, n, t, l | 2),
            e.elementType = Gl,
            e.lanes = i,
            e;
        case Xl:
            return e = Ne(13, n, t, l),
            e.elementType = Xl,
            e.lanes = i,
            e;
        case Zl:
            return e = Ne(19, n, t, l),
            e.elementType = Zl,
            e.lanes = i,
            e;
        case us:
            return pl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case is:
                    o = 10;
                    break e;
                case os:
                    o = 9;
                    break e;
                case Yi:
                    o = 11;
                    break e;
                case Gi:
                    o = 14;
                    break e;
                case qe:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return t = Ne(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function jt(e, t, n, r) {
    return e = Ne(7, e, r, t),
    e.lanes = n,
    e
}
function pl(e, t, n, r) {
    return e = Ne(22, e, r, t),
    e.elementType = us,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ql(e, t, n) {
    return e = Ne(6, e, null, t),
    e.lanes = n,
    e
}
function Kl(e, t, n) {
    return t = Ne(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function _f(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cl(0),
    this.expirationTimes = Cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function To(e, t, n, r, l, i, o, u, s) {
    return e = new _f(e,t,n,u,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ne(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    po(i),
    e
}
function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ot,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function qa(e) {
    if (!e)
        return pt;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1)
            throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return qs(e, n, t)
    }
    return t
}
function ba(e, t, n, r, l, i, o, u, s) {
    return e = To(n, r, !0, e, l, i, o, u, s),
    e.context = qa(null),
    n = e.current,
    r = ue(),
    l = ct(n),
    i = Qe(r, l),
    i.callback = t ?? null,
    st(n, i, l),
    e.current.lanes = l,
    Zn(e, l, r),
    me(e, r),
    e
}
function ml(e, t, n, r) {
    var l = t.current
      , i = ue()
      , o = ct(l);
    return n = qa(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Qe(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = st(l, t, o),
    e !== null && (De(e, l, o, i),
    Er(e, l, o)),
    o
}
function el(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Vu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Lo(e, t) {
    Vu(e, t),
    (e = e.alternate) && Vu(e, t)
}
function Pf() {
    return null
}
var ec = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Mo(e) {
    this._internalRoot = e
}
hl.prototype.render = Mo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(g(409));
    ml(e, t, null, null)
}
;
hl.prototype.unmount = Mo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function() {
            ml(null, e, null, null)
        }),
        t[Ye] = null
    }
}
;
function hl(e) {
    this._internalRoot = e
}
hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ls();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++)
            ;
        et.splice(n, 0, e),
        n === 0 && Ds(e)
    }
}
;
function Do(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Bu() {}
function Tf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var d = el(o);
                i.call(d)
            }
        }
        var o = ba(t, r, e, 0, null, !1, !1, "", Bu);
        return e._reactRootContainer = o,
        e[Ye] = o.current,
        $n(e.nodeType === 8 ? e.parentNode : e),
        Tt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var d = el(s);
            u.call(d)
        }
    }
    var s = To(e, 0, !1, null, null, !1, !1, "", Bu);
    return e._reactRootContainer = s,
    e[Ye] = s.current,
    $n(e.nodeType === 8 ? e.parentNode : e),
    Tt(function() {
        ml(t, s, n, r)
    }),
    s
}
function vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = el(o);
                u.call(s)
            }
        }
        ml(t, o, e, l)
    } else
        o = Tf(n, t, e, l, r);
    return el(o)
}
Ps = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = kn(t.pendingLanes);
            n !== 0 && (Ji(t, n | 1),
            me(t, Q()),
            !(M & 6) && (ln = Q() + 500,
            yt()))
        }
        break;
    case 13:
        Tt(function() {
            var r = Ge(e, 1);
            if (r !== null) {
                var l = ue();
                De(r, e, 1, l)
            }
        }),
        Lo(e, 1)
    }
}
;
qi = function(e) {
    if (e.tag === 13) {
        var t = Ge(e, 134217728);
        if (t !== null) {
            var n = ue();
            De(t, e, 134217728, n)
        }
        Lo(e, 134217728)
    }
}
;
Ts = function(e) {
    if (e.tag === 13) {
        var t = ct(e)
          , n = Ge(e, t);
        if (n !== null) {
            var r = ue();
            De(n, e, t, r)
        }
        Lo(e, t)
    }
}
;
Ls = function() {
    return D
}
;
Ms = function(e, t) {
    var n = D;
    try {
        return D = e,
        t()
    } finally {
        D = n
    }
}
;
oi = function(e, t, n) {
    switch (t) {
    case "input":
        if (bl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = ul(r);
                    if (!l)
                        throw Error(g(90));
                    as(r),
                    bl(r, l)
                }
            }
        }
        break;
    case "textarea":
        ds(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Kt(e, !!n.multiple, t, !1)
    }
}
;
gs = Co;
xs = Tt;
var Lf = {
    usingClientEntryPoint: !1,
    Events: [qn, At, ul, ys, vs, Co]
}
  , gn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Mf = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Ss(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Pf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            rl = gr.inject(Mf),
            Ue = gr
        } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf;
xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Do(t))
        throw Error(g(200));
    return zf(e, t, null, n)
}
;
xe.createRoot = function(e, t) {
    if (!Do(e))
        throw Error(g(299));
    var n = !1
      , r = ""
      , l = ec;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = To(e, 1, !1, null, null, n, !1, r, l),
    e[Ye] = t.current,
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Mo(t)
}
;
xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","),
        Error(g(268, e)));
    return e = Ss(t),
    e = e === null ? null : e.stateNode,
    e
}
;
xe.flushSync = function(e) {
    return Tt(e)
}
;
xe.hydrate = function(e, t, n) {
    if (!yl(t))
        throw Error(g(200));
    return vl(null, e, t, !0, n)
}
;
xe.hydrateRoot = function(e, t, n) {
    if (!Do(e))
        throw Error(g(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = ec;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = ba(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Ye] = t.current,
    $n(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new hl(t)
}
;
xe.render = function(e, t, n) {
    if (!yl(t))
        throw Error(g(200));
    return vl(null, e, t, !1, n)
}
;
xe.unmountComponentAtNode = function(e) {
    if (!yl(e))
        throw Error(g(40));
    return e._reactRootContainer ? (Tt(function() {
        vl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ye] = null
        })
    }),
    !0) : !1
}
;
xe.unstable_batchedUpdates = Co;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yl(n))
        throw Error(g(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(g(38));
    return vl(e, t, n, !1, r)
}
;
xe.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)
        } catch (e) {
            console.error(e)
        }
}
tc(),
ts.exports = xe;
var Df = ts.exports, nc, Wu = Df;
nc = Wu.createRoot,
Wu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Of = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Y = (e, t) => {
    const n = He.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: u="", children: s, ...d}, y) => He.createElement("svg", {
        ref: y,
        ...Of,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Rf(e)}`, u].join(" "),
        ...d
    }, [...t.map( ([h,m]) => He.createElement(h, m)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = Y("Anchor", [["path", {
    d: "M12 22V8",
    key: "qkxhtm"
}], ["path", {
    d: "M5 12H2a10 10 0 0 0 20 0h-3",
    key: "1hv3nh"
}], ["circle", {
    cx: "12",
    cy: "5",
    r: "3",
    key: "rqqgnr"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = Y("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = Y("Briefcase", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2",
    key: "eto64e"
}], ["path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "zwj3tp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = Y("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = Y("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = Y("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = Y("Handshake", [["path", {
    d: "m11 17 2 2a1 1 0 1 0 3-3",
    key: "efffak"
}], ["path", {
    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
    key: "9pr0kb"
}], ["path", {
    d: "m21 3 1 11h-2",
    key: "1tisrp"
}], ["path", {
    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
    key: "1uvwmv"
}], ["path", {
    d: "M3 4h8",
    key: "1ep09j"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = Y("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = Y("Magnet", [["path", {
    d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
    key: "1i3lhw"
}], ["path", {
    d: "m5 8 4 4",
    key: "j6kj7e"
}], ["path", {
    d: "m12 15 4 4",
    key: "lnac28"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = Y("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = Y("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = Y("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = Y("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = Y("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = Y("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = Y("Ticket", [["path", {
    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
    key: "qn84l0"
}], ["path", {
    d: "M13 5v2",
    key: "dyzc3o"
}], ["path", {
    d: "M13 17v2",
    key: "1ont0d"
}], ["path", {
    d: "M13 11v2",
    key: "1wjjxi"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = Y("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = Y("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = Y("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = Y("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , qf = () => {
    const [e,t] = He.useState(!1)
      , [n,r] = He.useState(!1);
    He.useEffect( () => {
        const i = () => {
            t(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []);
    const l = [{
        name: "Vision",
        href: "#vision"
    }, {
        name: "Why Attend",
        href: "#why-attend"
    }, {
        name: "Guest List",
        href: "#guest-list"
    }, {
        name: "Why Dubai",
        href: "#why-dubai"
    }, {
        name: "How to Get In",
        href: "#how-to-get-in"
    }, {
        name: "Gallery",
        href: "#gallery"
    }, {
        name: "Contact",
        href: "#contact"
    }];
    return a.jsx("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"}`,
        children: a.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx("img", {
                        src: "https://i.ibb.co/gZPMc6Pj/Anchor-pictogram-yellow-svg.png",
                        alt: "DubaiCryptoOdyssey Logo",
                        className: "w-8 h-8 object-contain"
                    }), a.jsx("span", {
                        className: "text-xl font-bold text-white",
                        children: "DubaiCryptoOdyssey"
                    })]
                }), a.jsxs("div", {
                    className: "hidden md:flex items-center space-x-8",
                    children: [l.map(i => a.jsx("a", {
                        href: i.href,
                        className: "text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium",
                        children: i.name
                    }, i.name)), a.jsx("a", {
                        href: "https://t.me/DubaiCryptoOdyssey",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300",
                        children: "Join Telegram"
                    })]
                }), a.jsx("button", {
                    className: "md:hidden text-white",
                    onClick: () => r(!n),
                    children: n ? a.jsx(Zf, {
                        className: "w-6 h-6"
                    }) : a.jsx(Qf, {
                        className: "w-6 h-6"
                    })
                })]
            }), n && a.jsx("div", {
                className: "md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800",
                children: a.jsxs("div", {
                    className: "px-2 pt-2 pb-3 space-y-1",
                    children: [l.map(i => a.jsx("a", {
                        href: i.href,
                        className: "block px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300",
                        onClick: () => r(!1),
                        children: i.name
                    }, i.name)), a.jsx("a", {
                        href: "https://t.me/DubaiCryptoOdyssey",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block mx-3 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg text-center",
                        children: "Join Telegram"
                    })]
                })
            })]
        })
    })
}
  , bf = () => a.jsxs("section", {
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [a.jsxs("div", {
        className: "absolute inset-0 z-0",
        children: [a.jsx("img", {
            src: "/brandsparc yacht (1).png",
            alt: "Luxury yacht in Dubai Marina",
            className: "w-full h-full object-cover"
        }),
        
        a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        })]
    }), a.jsxs("div", {
        className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
        children: [a.jsx("div", {
            className: "mb-8 animate-fade-in",
            children: a.jsx("img", {
                src: "https://i.ibb.co/gZPMc6Pj/Anchor-pictogram-yellow-svg.png",
                alt: "DubaiCryptoOdyssey Logo",
                className: "w-16 h-16 mx-auto mb-6 object-contain"
            })
        }), a.jsxs("h1", {
            className: "text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-delay-1",
            children: ["IRL Crypto Whales", a.jsx("span", {
                className: "block text-yellow-400 text-4xl md:text-6xl mt-2",
                children: "Odyssey"
            })]
        }), a.jsx("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-2",
            children: "The Ultimate Crypto Millionaires' Meetup in Dubai"
        }), a.jsxs("div", {
            className: "flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-delay-3",
            children: [a.jsxs("div", {
                className: "flex items-center gap-2 text-white",
                children: [a.jsx(Af, {
                    className: "w-5 h-5 text-yellow-400"
                }), a.jsx("span", {
                    className: "text-lg",
                    children: "August 30, 2025"
                })]
            }), a.jsxs("div", {
                className: "flex items-center gap-2 text-white",
                children: [a.jsx(Hf, {
                    className: "w-5 h-5 text-yellow-400"
                }), a.jsx("span", {
                    className: "text-lg",
                    children: "Dubai Marina"
                })]
            }), a.jsxs("div", {
                className: "flex items-center gap-2 text-white",
                children: [a.jsx(If, {
                    className: "w-5 h-5 text-yellow-400"
                }), a.jsx("span", {
                    className: "text-lg",
                    children: "Invite-Only"
                })]
            })]
        }), a.jsx("a", {
            href: "https://t.me/DubaiCryptoOdyssey",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-4",
            children: "Join via Telegram"
        })]
    }), a.jsx("div", {
        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
        children: a.jsx("div", {
            className: "w-6 h-10 border-2 border-white rounded-full flex justify-center",
            children: a.jsx("div", {
                className: "w-1 h-3 bg-white rounded-full mt-2 animate-pulse"
            })
        })
    })]
})
  , ep = () => a.jsx("section", {
    id: "vision",
    className: "py-20 bg-gray-900",
    children: a.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [a.jsxs("div", {
            className: "text-center mb-16",
            children: [a.jsxs("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6",
                children: ["Where Crypto Twitter", a.jsx("span", {
                    className: "block text-yellow-400",
                    children: "Meets Real Life"
                })]
            }), a.jsx("p", {
                className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                children: "This isn't just another event. It's a collision of online influence and real-world power. Imagine CT meme lords shaking hands with billion-dollar fund managers — all aboard the world's most opulent yacht."
            })]
        }), a.jsxs("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: [a.jsxs("div", {
                className: "relative overflow-hidden rounded-xl group",
                children: [a.jsx("img", {
                    src: "/brandsparc yacht (2).png",
                    alt: "Luxury super yacht in Dubai waters",
                    className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                }), a.jsx("div", {
                    className: "absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: a.jsx("p", {
                        className: "text-sm font-medium",
                        children: "Elite Networking Aboard Luxury Yachts"
                    })
                })]
            }), a.jsxs("div", {
                className: "relative overflow-hidden rounded-xl group",
                children: [a.jsx("img", {
                    src: "/brandsparc yacht (3).png",
                    alt: "Dubai Marina skyline at night",
                    className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                }), a.jsx("div", {
                    className: "absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: a.jsx("p", {
                        className: "text-sm font-medium",
                        children: "Dubai Marina - Crypto Capital of the World"
                    })
                })]
            }), a.jsxs("div", {
                className: "relative overflow-hidden rounded-xl group md:col-span-2 lg:col-span-1",
                children: [a.jsx("img", {
                    src: "/brandsparc yacht (12).png",
                    alt: "Yacht deck with Dubai skyline",
                    className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                }), a.jsx("div", {
                    className: "absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: a.jsx("p", {
                        className: "text-sm font-medium",
                        children: "Where Digital Wealth Meets Real Luxury"
                    })
                })]
            })]
        })]
    })
})
  , tp = () => {
    const e = [{
        icon: Vf,
        title: "Network with Whales",
        description: "Connect with CT influencers, crypto VCs, and industry leaders"
    }, {
        icon: Uf,
        title: "Million-Dollar Deals",
        description: "Land exclusive partnerships and seed deals"
    }, {
        icon: Wf,
        title: "Luxury Experience",
        description: "Celebrate with champagne and rooftop DJ sets"
    }, {
        icon: Kf,
        title: "Insider Alpha",
        description: "Get exclusive information before the public"
    }, {
        icon: rc,
        title: "Global Alliances",
        description: "Build connections across crypto hubs worldwide"
    }, {
        icon: $f,
        title: "Real-World Recognition",
        description: "Turn CT clout into tangible relationships"
    }];
    return a.jsxs("section", {
        id: "why-attend",
        className: "py-20 bg-black relative overflow-hidden",
        children: [a.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [a.jsx("img", {
                src: "/brandsparc yacht (7).png",
                alt: "Luxury yacht deck at night",
                className: "w-full h-full object-cover opacity-20"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
            })]
        }), a.jsxs("div", {
            className: "relative z-10 max-w-6xl mx-auto px-4",
            children: [a.jsx("div", {
                className: "text-center mb-16",
                children: a.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6",
                    children: ["Why You Should", a.jsx("span", {
                        className: "block text-yellow-400",
                        children: "Attend"
                    })]
                })
            }), a.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: e.map( (t, n) => a.jsxs("div", {
                    className: "bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 group",
                    children: [a.jsx(t.icon, {
                        className: "w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    }), a.jsx("h3", {
                        className: "text-xl font-bold text-white mb-3",
                        children: t.title
                    }), a.jsx("p", {
                        className: "text-gray-300",
                        children: t.description
                    })]
                }, n))
            })]
        })]
    })
}
  , np = () => {
    const e = [{
        icon: lc,
        title: "Crypto Whales",
        description: "Bitcoin & Ethereum holders with 8+ figure portfolios"
    }, {
        icon: Yf,
        title: "CT Influencers",
        description: "Top voices shaping crypto discourse online"
    }, {
        icon: ic,
        title: "DeFi Pioneers",
        description: "Founders and builders of leading protocols"
    }];
    return a.jsx("section", {
        id: "guest-list",
        className: "py-20 bg-gray-900",
        children: a.jsxs("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6",
                    children: ["Only the Top", a.jsx("span", {
                        className: "block text-yellow-400",
                        children: "100 Are In"
                    })]
                }), a.jsx("p", {
                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                    children: "This event is curated for market-shapers — those who move charts, raise funds, and build protocols. From BTC whales to DeFi pioneers to elite founders."
                })]
            }), a.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: e.map( (t, n) => a.jsxs("div", {
                    className: "text-center p-8 bg-black/40 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300",
                    children: [a.jsx(t.icon, {
                        className: "w-16 h-16 text-yellow-400 mx-auto mb-4"
                    }), a.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-3",
                        children: t.title
                    }), a.jsx("p", {
                        className: "text-gray-300",
                        children: t.description
                    })]
                }, n))
            })]
        })
    })
}
  , rp = () => {
    const e = [{
        icon: ic,
        title: "No Capital Gains Tax",
        description: "Keep more of your crypto gains"
    }, {
        icon: lc,
        title: "Blockchain-First Policies",
        description: "Government support for crypto innovation"
    }, {
        icon: Jf,
        title: "Energy of Innovation",
        description: "The pulse of global crypto development"
    }];
    return a.jsxs("section", {
        id: "why-dubai",
        className: "py-20 bg-black relative overflow-hidden",
        children: [a.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [a.jsx("img", {
                src: "/brandsparc yacht (1).png",
                alt: "Dubai Marina with luxury yachts at dusk",
                className: "w-full h-full object-cover"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"
            })]
        }), a.jsx("div", {
            className: "relative z-10 max-w-6xl mx-auto px-4",
            children: a.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [a.jsxs("div", {
                    children: [a.jsxs("h2", {
                        className: "text-4xl md:text-5xl font-bold text-white mb-6",
                        children: ["Why", a.jsx("span", {
                            className: "block text-yellow-400",
                            children: "Dubai?"
                        })]
                    }), a.jsx("p", {
                        className: "text-xl text-gray-300 mb-8 leading-relaxed",
                        children: "Dubai is the new crypto capital — no capital gains tax, blockchain-first policies, and the energy of global innovation. This is the only place this event could happen."
                    }), a.jsx("div", {
                        className: "space-y-6",
                        children: e.map( (t, n) => a.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [a.jsx(t.icon, {
                                className: "w-8 h-8 text-yellow-400 mt-1"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: t.title
                                }), a.jsx("p", {
                                    className: "text-gray-300",
                                    children: t.description
                                })]
                            })]
                        }, n))
                    })]
                }), a.jsx("div", {
                    className: "relative",
                    children: a.jsx("div", {
                        className: "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/30",
                        children: a.jsxs("div", {
                            className: "text-center",
                            children: [a.jsx("div", {
                                className: "text-6xl font-bold text-yellow-400 mb-2",
                                children: "0%"
                            }), a.jsx("div", {
                                className: "text-xl text-white mb-4",
                                children: "Capital Gains Tax"
                            }), a.jsx("div", {
                                className: "text-gray-300",
                                children: "The UAE offers one of the world's most crypto-friendly regulatory environments"
                            })]
                        })
                    })
                })]
            })
        })]
    })
}
  , lp = () => {
    const e = [{
        icon: Bf,
        title: "Referral Required",
        description: "Get referred by a CT influencer or insider"
    }, {
        icon: Ff,
        title: "Committee Review",
        description: "Committee review to ensure elite alignment"
    }, {
        icon: tl,
        title: "Connect with Us",
        description: "DM on CT or join our Telegram channel"
    }, {
        icon: Gf,
        title: "Exclusive Access",
        description: "Only 100 total spots — no public sales"
    }];
    return a.jsxs("section", {
        id: "how-to-get-in",
        className: "py-20 bg-gray-900 relative overflow-hidden",
        children: [a.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [a.jsx("img", {
                src: "/brandsparc yacht (2).png",
                alt: "Exclusive yacht boarding area",
                className: "w-full h-full object-cover opacity-30"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/90"
            })]
        }), a.jsxs("div", {
            className: "relative z-10 max-w-6xl mx-auto px-4",
            children: [a.jsx("div", {
                className: "text-center mb-16",
                children: a.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6",
                    children: ["Access by", a.jsx("span", {
                        className: "block text-yellow-400",
                        children: "Invitation Only"
                    })]
                })
            }), a.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",
                children: e.map( (t, n) => a.jsxs("div", {
                    className: "text-center p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105",
                    children: [a.jsxs("div", {
                        className: "relative mb-6",
                        children: [a.jsx("div", {
                            className: "w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: a.jsx(t.icon, {
                                className: "w-8 h-8 text-black"
                            })
                        }), a.jsx("div", {
                            className: "absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold",
                            children: n + 1
                        })]
                    }), a.jsx("h3", {
                        className: "text-xl font-bold text-white mb-3",
                        children: t.title
                    }), a.jsx("p", {
                        className: "text-gray-300",
                        children: t.description
                    })]
                }, n))
            }), a.jsx("div", {
                className: "text-center",
                children: a.jsxs("div", {
                    className: "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/30 max-w-2xl mx-auto",
                    children: [a.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-4",
                        children: "Ready to Join?"
                    }), a.jsx("p", {
                        className: "text-gray-300 mb-6",
                        children: "Connect with us through our exclusive Telegram channel to start your invitation process."
                    }), a.jsxs("a", {
                        href: "https://t.me/DubaiCryptoOdyssey",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300",
                        children: [a.jsx(tl, {
                            className: "w-5 h-5"
                        }), "Join Telegram"]
                    })]
                })
            })]
        })]
    })
}
  , ip = () => {
    const e = [{
        src: "/brandsparc yacht (1).png",
        alt: "Luxury super yacht in Dubai Marina"
    }, 
    
    ];
    return a.jsx("section", {
        id: "gallery",
        className: "py-20 bg-black",
        children: a.jsxs("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6",
                    children: "Experience Gallery"
                }), a.jsx("p", {
                    className: "text-xl text-gray-300",
                    children: "Dubai's finest yachts and the luxury experience that awaits"
                })]
            }), a.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: e.map( (t, n) => a.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl group cursor-pointer hover:transform hover:scale-105 transition-all duration-300",
                    children: [
                    
                    a.jsx("img", {
                        src: t.src,
                        alt: t.alt,
                        className: "w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }), a.jsx("div", {
                        className: "absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: a.jsx("p", {
                            className: "text-xs font-medium",
                            children: t.alt
                        })
                    })]
                }, n))
            })]
        })
    })
}
  , op = () => a.jsxs("section", {
    id: "contact",
    className: "py-20 bg-gray-900 relative overflow-hidden",
    children: [a.jsxs("div", {
        className: "absolute inset-0 z-0",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-600/5"
        }), a.jsxs("div", {
            className: "absolute inset-0 opacity-10",
            children: [a.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"
            }), a.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            })]
        })]
    }), a.jsxs("div", {
        className: "relative z-10 max-w-4xl mx-auto px-4 text-center",
        children: [a.jsx("div", {
            className: "mb-8",
            children: a.jsx("img", {
                src: "https://i.ibb.co/gZPMc6Pj/Anchor-pictogram-yellow-svg.png",
                alt: "DubaiCryptoOdyssey Logo",
                className: "w-16 h-16 mx-auto mb-6 object-contain"
            })
        }), a.jsx("h2", {
            className: "text-4xl md:text-6xl font-bold text-white mb-6",
            children: "Want In?"
        }), a.jsx("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8",
            children: "Join the movement:"
        }), a.jsx("div", {
            className: "mb-8",
            children: a.jsxs("a", {
                href: "https://t.me/DubaiCryptoOdyssey",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300",
                children: [a.jsx(tl, {
                    className: "w-6 h-6"
                }), "https://t.me/DubaiCryptoOdyssey"]
            })
        }), a.jsx("p", {
            className: "text-2xl md:text-3xl text-yellow-400 font-bold italic",
            children: "Only the bold get invited."
        })]
    })]
})
  , up = () => a.jsx("footer", {
    className: "bg-black border-t border-gray-800 py-12",
    children: a.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [a.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8",
            children: [a.jsxs("div", {
                className: "md:col-span-2",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [a.jsx("img", {
                        src: "https://i.ibb.co/gZPMc6Pj/Anchor-pictogram-yellow-svg.png",
                        alt: "DubaiCryptoOdyssey Logo",
                        className: "w-8 h-8 object-contain"
                    }), a.jsx("span", {
                        className: "text-2xl font-bold text-white",
                        children: "DubaiCryptoOdyssey"
                    })]
                }), a.jsx("p", {
                    className: "text-gray-400 mb-4 max-w-md",
                    children: "The Ultimate Crypto Millionaires' Meetup aboard a luxury yacht in Dubai Marina. Where Crypto Twitter meets real life."
                }), a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsx("a", {
                        href: "https://t.me/DubaiCryptoOdyssey",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                        children: a.jsx(tl, {
                            className: "w-6 h-6"
                        })
                    }), a.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                        children: a.jsx(Xf, {
                            className: "w-6 h-6"
                        })
                    }), a.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                        children: a.jsx(rc, {
                            className: "w-6 h-6"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h3", {
                    className: "text-white font-bold mb-4",
                    children: "Event Details"
                }), a.jsxs("ul", {
                    className: "space-y-2 text-gray-400",
                    children: [a.jsx("li", {
                        children: "Date: August 30, 2025"
                    }), a.jsx("li", {
                        children: "Location: Dubai Marina"
                    }), a.jsx("li", {
                        children: "Venue: Luxury Super Yacht"
                    }), a.jsx("li", {
                        children: "Capacity: 100 Guests Only"
                    }), a.jsx("li", {
                        children: "Type: Invitation Only"
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h3", {
                    className: "text-white font-bold mb-4",
                    children: "Quick Links"
                }), a.jsxs("ul", {
                    className: "space-y-2",
                    children: [a.jsx("li", {
                        children: a.jsx("a", {
                            href: "#vision",
                            className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                            children: "The Vision"
                        })
                    }), a.jsx("li", {
                        children: a.jsx("a", {
                            href: "#guest-list",
                            className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                            children: "Guest List"
                        })
                    }), a.jsx("li", {
                        children: a.jsx("a", {
                            href: "#how-to-get-in",
                            className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                            children: "How to Get In"
                        })
                    }), a.jsx("li", {
                        children: a.jsx("a", {
                            href: "#contact",
                            className: "text-gray-400 hover:text-yellow-400 transition-colors duration-300",
                            children: "Contact"
                        })
                    })]
                })]
            })]
        }), a.jsxs("div", {
            className: "border-t border-gray-800 mt-8 pt-8 text-center",
            children: [a.jsxs("p", {
                className: "text-gray-500 text-sm",
                children: ["© 2025 DubaiCryptoOdyssey. All rights reserved. Built & Designed By", " ", a.jsx("a", {
                    href: "https://www.brandsparc.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-yellow-400 font-semibold hover:text-yellow-300 hover:underline transition-all duration-300 transform hover:scale-105 inline-block",
                    children: "BrandSparc"
                })]
            }), a.jsx("p", {
                className: "text-gray-600 text-xs mt-2",
                children: "This is an exclusive crypto networking event. Not affiliated with any specific cryptocurrency or financial institution."
            })]
        })]
    })
});
function sp() {
    return a.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [a.jsx(qf, {}), a.jsx(bf, {}), a.jsx(ep, {}), a.jsx(tp, {}), a.jsx(np, {}), a.jsx(rp, {}), a.jsx(lp, {}), a.jsx(op, {}), a.jsx(up, {})]
    })
}
nc(document.getElementById("root")).render(a.jsx(He.StrictMode, {
    children: a.jsx(sp, {})
}));
