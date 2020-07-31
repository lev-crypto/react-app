import React, { Component } from 'react';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import '../css/articleList.css'
import ArticlesContainer from './articlesContainer'

class ArticleList extends Component {
  state = {
    options: ['NodeJs', "JavaScript", 'SQL']
  };
  render() {
    return (
      <div className="articleListBackground">
        {/* <div className="articleDropdown">
            <Dropdown
              options={this.state.options}
              onChange={this._onSelect}
              value={this.state.options[0]}
            ></Dropdown>
          </div> */}
        <ArticlesContainer />
      </div>
    );
  }
}

export default ArticleList;