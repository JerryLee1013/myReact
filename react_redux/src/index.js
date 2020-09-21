import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"

import App from "./components/app"
import {counter} from "./redux/reducers"

//生成一个store对象
const store = createStore(counter)
console.log(store,store.getState());

function render(){
  ReactDOM.render(<App store={store} />,document.getElementById("root"))
}

//初始化渲染
render()

//订阅监听，重绘页面
store.subscribe(render)