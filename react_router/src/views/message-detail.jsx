import React from "react"
const allMessages = [
  {id:1,title:"message001",content:"宝宝么么哒1"},
  {id:3,title:"message003",content:"宝宝么么哒3"},
  {id:5,title:"message005",content:"宝宝么么哒5"}
]

export default function MassageDetail(props){
  //得到请求参数中的id
  const {id} = props.match.params

  //查询得到对应的message
  const message = allMessages.find((m)=>m.id===id*1)
  return (
    <ul>
      <li>ID:{message.id}</li>
      <li>TITLE:{message.title}</li>
      <li>CONNECT:{message.content}</li>
    </ul>
  )
}