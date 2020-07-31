import React, { Component } from 'react';
import '../css/articleTemplate.css';
import Prism from 'prismjs';
import axios from "axios";

class ArticleTemplate extends Component {
  state = {
    heading: '',
    description: '',
    content: [],
    articleId: ''
  }

  constructor(props) {
    super(props)
    if (props.match !== undefined && props.match.params.id) {
      this.state = {
        content: [],
        articleId: props.match.params.id
      }
    }
    else {
      this.state = {
        heading: props.heading,
        description: props.description,
        content: props.content
      }
    }
  }

  fetchBlogById = async (id) => {
    const url = `http://localhost:5000/portfolio/api/v1/articles/${id}`;
    const token = localStorage.getItem('token')
    let blog = await axios.get(url, { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNTkxNDU3NTczLCJleHAiOjE1OTE0NjExNzN9.AJb4_KgnMWRMJbwZyaIPFg6vq_Lg1xph8eHapqoZj_w` } })
    this.setState({
      heading: blog.data[0].heading,
      description: blog.data[0].description,
      content: blog.data[0].content
    })
  }

  componentDidMount = async () => {
    await this.fetchBlogById(this.state.articleId)
    setImmediate(Prism.highlightAll(), 0)
  }

  render() {
    return (
      <div className="main">
        <div className="heading">{this.state.heading}</div>
        <div className="description">{this.state.description}</div>
        <br />
        {this.state.content.map((ele) => {
          return (
            <React.Fragment>
              {
                Object.keys(ele).includes("[code]") ?
                  <pre className="line-numbers">
                    <code className="language-javascript">
                      {ele[Object.keys(ele)]}
                    </code>
                  </pre> :
                  <div>
                    <div>{Object.keys(ele)[0]}</div>
                    <div>{ele[Object.keys(ele)]}</div> <br />
                  </div>
              }
            </React.Fragment>
          )
        })}
      </div>
    );
  }
}

export default ArticleTemplate;