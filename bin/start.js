'use strict';
require('@babel/register');
require('@babel/polyfill');

const app = require('../app').default;
const http = require("http");

const config = require('../config');
const configValue = config.get(process.env.node_env);
const port= configValue.PORTNO;

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
    console.log(`Listening on ${port}`);
});