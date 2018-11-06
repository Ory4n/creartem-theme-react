import React, { Component } from 'react';

class WebDevContent extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/sections?slug=web-dev embed";
    fetch(pagesURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pages: response
      })
    })
  }
  render() {
    let pages = this.state.pages.map((page, index) => {
          return (
            <div key={index}>
                <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
            </div>
          )
        })
        return (
          <div>
              {pages}
          </div>
        );
  }
}

export default WebDevContent;
