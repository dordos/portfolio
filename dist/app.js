"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
// import Header from './layout/Header';
const Header = require('./layout/Header');
// import styled from 'styled-components';
// import HeaderBar from './components/HeaderBar/HeaderBar';
// import FooterBar from './components/Footer/FooterBar';
// import MainContainer from './components/Main/MainContainer';
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: '/home' },
                Header,
                "dd"))));
};
exports.default = App;
