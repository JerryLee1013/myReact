import React, {Component} from "react"
import {render} from "react-dom"
import {BrowserRouter} from "react-router-dom";

import App from "./components/app"

render(
  (
    //用路由管理整个应用组件
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById("root"))