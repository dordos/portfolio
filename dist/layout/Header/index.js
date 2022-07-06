"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Header = () => {
    return (react_1.default.createElement(style_1.Head, null,
        react_1.default.createElement("div", { id: 'left' },
            react_1.default.createElement("img", { src: 'icon/headerIcon/vscode_icon.svg', alt: '' }),
            react_1.default.createElement("span", null, "File"),
            react_1.default.createElement("span", null, "Edit"),
            react_1.default.createElement("span", null, "View"),
            react_1.default.createElement("span", null, "Go"),
            react_1.default.createElement("span", null, "Run"),
            react_1.default.createElement("span", null, "Terminal"),
            react_1.default.createElement("span", null, "Help")),
        react_1.default.createElement("p", null, "Peter Portfolio"),
        react_1.default.createElement("div", { id: 'right' },
            react_1.default.createElement("span", { className: 'red' }),
            react_1.default.createElement("span", { className: 'yellow' }),
            react_1.default.createElement("span", { className: 'green' }))));
};
exports.default = Header;
