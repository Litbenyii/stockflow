FROM node:20-alpine
WORKDIR /app
RUN echo '{"name":"stockflow-backend","version":"1.0.0","scripts":{"start":"node index.js"}}' > package.json
RUN echo 'const express = require("express"); const app = express(); app.use(require("cors")()); app.get("/ping", (req,res) => res.json({status:"ok",service:"StockFlow API"})); app.listen(3001, () => console.log("Backend corriendo en puerto 3001"));' > index.js
RUN npm install express cors
EXPOSE 3001
CMD ["node", "index.js"]
