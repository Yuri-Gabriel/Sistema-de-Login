require('dotenv/config');

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path')


const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname,"public")));
app.use(cors({
    origin:"*",
    methods:['GET']
}))

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});
