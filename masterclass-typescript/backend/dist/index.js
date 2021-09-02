"use strict";
/***
 * yarn tsc src/index.ts
 * transpila de typescript para javascript
 *
 * cria um arq de conf tsconfig.json com algumas
 * configuracoes pre setadas
 * yarn tsc --init
 *
 * Com isso, podemos rodar yarn tsc para ler o arquivo tsconfig.json
 *
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.listen(3333);
