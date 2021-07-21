"use strict";

const express = require("express");
const http = require("http");
const { config } = require("process");
const cookieParser = require("cookie-parser");
const helemt = require("helmet");
const static = require("serve-static");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.curentConns = new set();
    this.busy = new WeakSet();
    this.stopping = false;
    this.app.static = static;
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(express.json());
    // express 정적파일 처리
    this.app.use(
      this.app.static(path.join(__dirname, "dist"), {
        setHeaders: (res, path) => {
          res.setHeaders("Access-Conterol-Allow-Origin", "*");
          res.setHeaders("Access-Conterol-Allow-Headers", "*");
          res.setHeaders("Access-Conterol-Allow-Methods", "GET");
        },
      })
    );
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return server.start();
};
