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

 import express from 'express';
 import cors from 'cors';
 import routes from './routes';
 
 const app = express();
 
 app.use(cors());
 app.use(routes);
 
 app.listen(3333);