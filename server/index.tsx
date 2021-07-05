import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from "../src/App";

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    const root = ReactDOMServer.renderToString(<App />);

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${root}</div>`)
        );
    });
});

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
