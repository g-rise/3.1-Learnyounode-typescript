"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("node:http"));
const port = Number(process.argv[2]);
function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}
function unixtime(time) {
    return { unixtime: time.getTime() };
}
const server = http.createServer(function (req, res) {
    if (!req.url) {
        console.error('URL is missing in the request');
        return;
    }
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const isoParam = myUrl.searchParams.get('iso');
    if (isoParam === null) {
        console.error('ISO params are missing in the request');
        return;
    }
    const time = new Date(isoParam);
    let result;
    if (myUrl.pathname === '/api/parsetime') {
        result = parsetime(time);
    }
    else if (myUrl.pathname === '/api/unixtime') {
        result = unixtime(time);
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }
    else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(port);
