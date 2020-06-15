"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YaccParser_1 = require("./seuyacc/core/YaccParser");
const LR1_1 = require("./seuyacc/core/LR1");
const Visualizer_1 = require("./seuyacc/core/Visualizer");
let tik = new Date().getTime();
let yp = new YaccParser_1.YaccParser('./example/SimplifiedTest/Yacc.y');
let lr1 = new LR1_1.LR1Analyzer(yp);
let dfa = lr1.dfa;
Visualizer_1.visualizeGOTOGraph(dfa, lr1);
Visualizer_1.visualizeACTIONGOTOTable(lr1);
let tok = new Date().getTime();
console.log(`Time: ${tok - tik} ms.`);
