import React, { Component } from "react";
import "../css/createArticle.css";
import ReactTooltip from "react-tooltip";
import Preview from "./preview";
import ArticleTemplate from "./articleTemplate";
import axios from 'axios'

class CreateArticle extends Component {
  state = {
    childrenCount: 0,
    codeSectionCount: 0,
    isOpen: false,
    heading: "",
    description: "",
    content: [],
    contentKey: [],
  };


  toggleModal = () => {
    let contents = []
    let content = {}
    let heading = document.getElementById(`heading`)
    let scontent = document.getElementById(`content`)
    content[heading.value] = scontent.value
    contents.push(content)

    if (!this.state.isOpen) {
      for (let i = 0; i < this.state.childrenCount; i++) {
        content = {}
        heading = document.getElementById(`heading${i}`)
        scontent = document.getElementById(`content${i}`)

        content[heading.value] = scontent.value
        contents.push(content)
      }
    }

    let code = document.getElementsByClassName("codeContent")
    console.log(code)

    this.setState({
      isOpen: !this.state.isOpen,
      content: contents
    });
  };

  onAddChild = () => {
    this.setState({
      childrenCount: this.state.childrenCount + 1,
    });
  };

  onRemoveChild = () => {
    this.setState({
      childrenCount: this.state.childrenCount - 1,
    });
  }

  onkeydown = (e, className) => {
    let keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
      e.preventDefault();
      let textarea = document.querySelector(`[class=${className}]`);
      if (textarea == undefined || textarea == null)
        textarea = document.querySelector(`[id=${className}]`);
      let { value, selectionStart, selectionEnd } = textarea;
      textarea.value =
        value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);

      textarea.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  postArticle = () => {
    let type = "node";
    let url = "http://localhost:5000/portfolio/api/v1/articles/"

    let contents = []
    let content = {}
    let heading = document.getElementById(`heading`)
    let scontent = document.getElementById(`content`)
    content[heading.value] = scontent.value
    contents.push(content)

    for (let i = 0; i < this.state.childrenCount; i++) {
      content = {}
      heading = document.getElementById(`heading${i}`)
      scontent = document.getElementById(`content${i}`)

      content[heading.value] = scontent.value
      contents.push(content)
    }

    console.log(this.state.content)
    let body = {
      "heading": this.state.heading,
      "description": this.state.description,
      "type": type,
      "content": contents
    }
    axios.post(url, body)
      .then((response) => {
        alert("Submitted")
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    const children = [];

    for (let i = 0; i < this.state.childrenCount; i += 1) {
      children.push(
        <React.Fragment>
          <textarea
            className="sectionHeading"
            id={`heading${i}`}
            name={`sheading${i}`}
            onKeyDown={(e) => this.onkeydown(e, `heading${i}`)}
            placeholder="Section Heading......."
          ></textarea>
          <textarea
            className="sectionContent"
            id={`content${i}`}
            name={`scontent${i}`}
            data-parentName={`sheading${i}`}
            onKeyDown={(e) => this.onkeydown(e, `content${i}`)}
            placeholder="Section Content......."
          ></textarea>
        </React.Fragment>
      );
    }

    return (
      <div className="mainDiv">
        <ReactTooltip />
        <div className="contentPlaceholder">
          <div className="contentHeading">
            <h5>article's heading:</h5>
            <textarea
              className="articleHeading"
              name="heading"
              onChange={this.handleChange}
              onKeyDown={(e) => this.onkeydown(e, "articleHeading")}
              placeholder="Give your article a heading"
            ></textarea>
          </div>
          <div className="contentDescription">
            <h5>article's description:</h5>
            <textarea
              className="articleDescription"
              name="description"
              onChange={this.handleChange}
              onKeyDown={(e) => this.onkeydown(e, "articleDescription")}
              placeholder="a brief introduction to your article"
            ></textarea>
          </div>
          <div className="mainContent">
            <h5>content:</h5>
            <textarea
              className="sectionHeading"
              name="sheading"
              id="heading"
              onKeyDown={(e) => this.onkeydown(e, "sectionHeading")}
              placeholder="Section Heading......."
            ></textarea>
            <textarea
              className="sectionContent"
              name="scontent"
              id="content"
              data-parentName="sheading"
              onKeyDown={(e) => this.onkeydown(e, "sectionContent")}
              placeholder="Section Content......."
            ></textarea>
            {children}
            <div className="createButtons">
              <button
                className="addSection"
                data-tip="add new content section"
                onClick={this.onAddChild}
              >
                + Add
              </button>
              <button
                className="addSection"
                data-tip="Remove last section"
                onClick={this.onRemoveChild}
              >
                - Remove
              </button>
            </div>
          </div>
          <button className="publish" onClick={this.toggleModal}>
            Preview
          </button>
          <button className="submitArticle" onClick={this.postArticle}>
            Submit Your Article
          </button>
          <Preview show={this.state.isOpen} onClose={this.toggleModal}>
            <ArticleTemplate
              heading={this.state.heading}
              description={this.state.description}
              content={this.state.content}
            />
          </Preview>
        </div>
      </div>
    );
  }
}

export default CreateArticle;
