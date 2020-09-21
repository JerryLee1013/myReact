import React, {Component} from "react"
import {INCREMENT,DECREMENT} from "../redux/action-types"

export default class App extends Component{
  state = {
    count:0
  }
  increment = () =>{
    //得到选择增加数量
    const number = this.select.value*1

    //调用store的方法更新状态
    this.props.store.dispatch({type:INCREMENT,data:number})

    //

    //以下为react原生方法
    //得到原本的count状态，并计算新的count
    // const count = this.state.count+number
    //更新状态
    // this.setState({count})
  }

  decrement = () =>{
    //得到选择增加数量
    const number = this.select.value*1

    //调用store的方法更新状态
    this.props.store.dispatch({type:DECREMENT,data:number})

    //得到原本的count状态，并计算新的count
    // const count = this.state.count-number
    //更新状态
    // this.setState({count})
  }

  incrementIfOdd = () =>{
    //得到选择增加数量
    const number = this.select.value*1
    //得到store中的count值
    const count = this.props.store.getState()
    if(count%2===1){
      //调用store的方法更新状态
      this.props.store.dispatch({type:INCREMENT,data:number})
    }

    //得到原本的count状态
    // const count = this.state.count
    //判断，满足条件才更新状态
    // if(count%2===1){
    //   this.setState({
    //     count:count+number
    //   })
    // }
  }

  incrementAsync = () =>{
    //得到选择增加数量
    const number = this.select.value*1

    setTimeout(()=>{
      this.props.store.dispatch({type:INCREMENT,data:number})
    },1000)

    //得到原本的count状态
    // const count = this.state.count
    //更新状态
    // setTimeout(()=>{
    //   this.setState({count:count+number})
    // },1000)
  }

  render() {
    const count = this.props.store.getState()

    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select=>this.select=select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}