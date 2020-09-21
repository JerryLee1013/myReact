import React, {Component} from "react"
import {Button,Toast} from "antd-mobile";

// import 'antd-mobile/dist/antd-mobile.css'

export default class App extends Component{
  handleClick = () =>{
    Toast.info("提交成功",1,()=>{alert(123)})
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Start</Button>
      </div>
    )
  }
}