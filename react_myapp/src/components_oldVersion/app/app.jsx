import React, {Component} from "react"
import ComponentAdd from "../component-add/component-add"
import ComponentList from "../component-list/component-list"

export default class App extends Component{
  /*constructor(props){
    super(props)
    this.state = {
      comments:[
        {username:"Tom",content:"React挺好的"},
        {username:"Jack",content:"React有点难"},
        {username:"Lucy",content:"React没有vue好用"},
      ]
    }
  }*/
  //上边的简便写法，给组件对象添加state属性
  state = {
    comments:[
      {username:"Tom",content:"React挺好的"},
      {username:"Jack",content:"React有点难"},
      {username:"Lucy",content:"React没有vue好用"},
    ]
  }
  //添加评论
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }

  //删除评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index,1)
    this.setState({comments})
  }

  render() {
    const {comments} = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <ComponentAdd addComment={this.addComment}/>
          <ComponentList comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}