//包含n个reducer函数，根据老的state和action返回一个新的state和action
import {ADD_COMMENT, DELETE_COMMENT,RECEIVE_COMMENTS} from "./action-types";

const initComments = []
export function comments(state=initComments,action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.data
    case ADD_COMMENT:
      return [action.data,...state]
    case DELETE_COMMENT:
      return state.filter((comment,index)=>index!==action.data)
    default:
      return state
  }
}