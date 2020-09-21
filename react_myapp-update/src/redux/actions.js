//包含了所有action的工厂函数
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from "./action-types"
export const addComment = (comment) => ({type:ADD_COMMENT,data:comment})
export const deleteComment = (index) => ({type:DELETE_COMMENT,data:index})

//同步接收comments
const receiveComments = (comments) => ({type:RECEIVE_COMMENTS,data:comments})

//异步，从后台获取数据的action
export const getComments = () => {
  return dispatch => {
    //模拟ajax请求异步获取数据
    setTimeout(()=>{
      const comments = [
        {username:"Tom1",content:"Reactdhajshdjah"},
        {username:"Tom2",content:"dsjakdjkjAK;LKl;kl"}
      ]

      //分发一个同步的action
      dispatch(receiveComments(comments))
    },1000)
  }
}