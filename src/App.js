import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/homeScreen'
import ArticleList from './components/articleList';
import ArticleTemplate from './components/articleTemplate'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './components/menu';
import CreateArticle from './components/createArticle';
import Resume from './components/resume'

class App extends Component {
  render() {
    return (

      <Router>
        <Menu />
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/articles">
          <ArticleList />
        </Route>
        <Route path="/article/:id" component={ArticleTemplate}>
          {/* <ArticleTemplate /> */}
        </Route>
        <Route path="/create_article">
          <CreateArticle />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Router>
    );
  }
}

export default App;
