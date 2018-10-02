import React, { Component } from 'react';

class AboutContent extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp-json/wp/v2/pages?slug=about embed";
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

export default AboutContent;
