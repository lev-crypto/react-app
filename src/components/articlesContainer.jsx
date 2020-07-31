import React, { Component } from "react";
import { withRouter } from "react-router";
import "../css/articlesContainer.css";
import axios from "axios";

class ContainerElement extends Component {
  state = {
    redirectionUrl: "/article/" + this.props.data._id,
    nodeImagePath: "https://img.icons8.com/color/25/000000/nodejs.png",
    jsImagePath: "https://img.icons8.com/ios/25/000000/javascript.png",
    sqlImagePath: "https://img.icons8.com/ios/25/000000/sql.png"
  };

  setThumbnailImage(type) {
    switch (type) {
      case "node":
        return (
          <img className="articleImage" src={this.state.nodeImagePath}></img>
        );
      case "js":
        return (
          <img className="articleImage" src={this.state.jsImagePath}></img>
        );
      case "sql":
        return (
          <img className="articleImage" src={this.state.sqlImagePath}></img>
        );
    }
  }

  render() {
    return (
      <div
        className="article"
        onClick={() => this.props.handleClick(this.state.redirectionUrl)}
      >
        {this.setThumbnailImage(this.props.data.type)}
        <div className="topicDetails">
          <span className="topicName">{this.props.data.heading}</span>
        </div>
      </div>
    );
  }
}

class ArticlesContainer extends Component {
  state = {
    data: [],
    renderView: 0,
    path: "/articles",
  };

  componentDidMount = () => {
    const url = "http://localhost:5000/portfolio/api/v1/articles/";
    const token = localStorage.getItem('token')
    axios.get(url, { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNTkxNDM3NDgyLCJleHAiOjE1OTE0NDEwODJ9.dUDmN3AlITjvGnWML4oRSW2SrKj73GxasX3Dcfsyh_4` } })
      .then((blogs) => {
        console.log(blogs)
        this.setState({ data: blogs.data })
      })
  }

  handleClick = (path) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="listContainer">
        {this.state.data.map((data) => {
          return (
            <ContainerElement data={data} handleClick={this.handleClick} />
          );
        })}
      </div>
    );
  }
}

export default withRouter(ArticlesContainer);
