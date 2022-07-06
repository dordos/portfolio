"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Head = styled_components_1.default.div `
  background-color: #24292e;
  /* border-bottom: 1px solid #191d20; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Source Sans Pro, sans-serif;
  height: 30px;
  font-size: 0.85rem;

  & #left {
    display: flex;
    flex: 1;
    /* background-color: blue; */
    margin-left: 0.5rem;
    align-items: center;
    img {
      width: 20px;
      margin-right: 0.5rem;
    }
    span {
      padding: 0px 0.5rem;
    }
  }

  & > p {
    flex: 1;
    text-align: center;
  }

  & #right {
    display: flex;
    flex: 1;
    /* background-color: black; */
    justify-content: flex-end;
    padding-right: 5px;
    span {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 0px 0.5rem;
    }
    span.red {
      background-color: #c53c3c;
    }
    span.yellow {
      background-color: #f5c237;
    }
    span.green {
      background-color: #369636;
    }
  }
`;
