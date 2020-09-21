import {INCREMENT,DECREMENT} from "./action-types"

/*
同步的action返回的是一个对象
异步的action返回的是一个函数
* */
export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})
//异步action
export const incrementAsync = (number) => (
  dispatch => {
    //异步的代码
    setTimeout(()=>{
      //1s后才去分发一个增加的action
      dispatch(increment(number))
    },1000)
  }
)

