import React, { Component } from 'react';
import '../css/menu.css'
    
class Menu extends Component {
  state = {
    instaUrl: "https://www.instagram.com/_sandelicious__/",
    linkedInUrl: "https://www.linkedin.com/in/sandeep-kumar-b3b3b0131/",
    githubUrl: "https://github.com/sandelicious",
    twitterUrl: "https://twitter.com/tucsb12",
  };
  redirect = (url) => {
    window.open(url);
  };
  render() {
    return (
      <div className="vertical-menu">
        <a href="/">Home</a>
        <a href="/articles">Blogs</a>
        <a href="/resume">Resume</a>
        <a href="#about">Skethces</a>
        <a href="/create_article">Create Article</a>
        <a>|</a>
        <a>
          <button
            className="btn linkedIn"
            onClick={() => this.redirect(this.state.linkedInUrl)}
          ></button>
        </a>
        <a>
          <button
            className="btn instagram"
            onClick={() => this.redirect(this.state.instaUrl)}
          ></button>
        </a>
        <a>
          <button
            className="btn github"
            onClick={() => this.redirect(this.state.githubUrl)}
          ></button>
        </a>
        <a>
          <button
            className="btn twitter"
            onClick={() => this.redirect(this.state.twitterUrl)}
          ></button>
        </a>
      </div>
    );
  }
}
 
export default Menu;