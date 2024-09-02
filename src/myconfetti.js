"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confetti = void 0;
exports.ConfettiButton = ConfettiButton;
var react_1 = require("react");
var canvas_confetti_1 = require("canvas-confetti");
var button_1 = require("@/components/ui/button");
var ConfettiContext = (0, react_1.createContext)({});
var Confetti = (0, react_1.forwardRef)(function (props, ref) {
    var options = props.options, _a = props.globalOptions, globalOptions = _a === void 0 ? { resize: true, useWorker: true } : _a, _b = props.manualstart, manualstart = _b === void 0 ? false : _b, children = props.children, rest = __rest(props, ["options", "globalOptions", "manualstart", "children"]);
    var instanceRef = (0, react_1.useRef)(null); // confetti instance
    var canvasRef = (0, react_1.useCallback)(
    // https://react.dev/reference/react-dom/components/common#ref-callback
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    function (node) {
        if (node !== null) {
            // <canvas> is mounted => create the confetti instance
            if (instanceRef.current)
                return; // if not already created
            instanceRef.current = canvas_confetti_1.default.create(node, __assign(__assign({}, globalOptions), { resize: true }));
        }
        else {
            // <canvas> is unmounted => reset and destroy instanceRef
            if (instanceRef.current) {
                instanceRef.current.reset();
                instanceRef.current = null;
            }
        }
    }, [globalOptions]);
    // `fire` is a function that calls the instance() with `opts` merged with `options`
    var fire = (0, react_1.useCallback)(function (opts) {
        var _a;
        if (opts === void 0) { opts = {}; }
        return (_a = instanceRef.current) === null || _a === void 0 ? void 0 : _a.call(instanceRef, __assign(__assign({}, options), opts));
    }, [options]);
    var api = (0, react_1.useMemo)(function () { return ({
        fire: fire,
    }); }, [fire]);
    (0, react_1.useImperativeHandle)(ref, function () { return api; }, [api]);
    (0, react_1.useEffect)(function () {
        if (!manualstart) {
            fire();
        }
    }, [manualstart, fire]);
    return (<ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest}/>
      {children}
    </ConfettiContext.Provider>);
});
exports.Confetti = Confetti;
function ConfettiButton(_a) {
    var options = _a.options, children = _a.children, props = __rest(_a, ["options", "children"]);
    var handleClick = function (event) {
        var rect = event.currentTarget.getBoundingClientRect();
        var x = rect.left + rect.width / 2;
        var y = rect.top + rect.height / 2;
        (0, canvas_confetti_1.default)(__assign(__assign({}, options), { origin: {
                x: x / window.innerWidth,
                y: y / window.innerHeight,
            } }));
    };
    return (<button_1.Button onClick={handleClick} {...props}>
      {children}
    </button_1.Button>);
}
exports.default = Confetti;
