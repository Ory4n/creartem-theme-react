import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/projects?_embed";
    fetch(pagesURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pages: response
      })
    })
  }
  render() {

    const renderPages = () => {
        return this.state.pages.map((page, index) => {
            return (
                  <div key={page} className="col-12 col-sm-6 col-md-4">
                    <div className="section-content anim">
                      <div className="images text-center">
                        <div className="img-frame-normal">
                          <div className="img-1 shadow">
                            <a href="index-style1.html">
                              <img className="img" src={page.fi_thumbnailpic} alt="demo" />
                            </a>
                          </div>
                          <div className="legend text-left">
                            <h5>{page.title.rendered}</h5>
                            <p className="small" dangerouslySetInnerHTML={ {__html: page.excerpt.rendered} } />
                            <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                            <h5 className="legend text-left">Team</h5>
                            <p className="small">{page.acf.team}</p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                            <h5 className="legend text-left">Technologies</h5>
                            <p className="small">{page.acf.technologies}</p>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            );
        })
    }

    return (
      <div className="section section-grid section-centered fp-auto-height demo-section" id="style">
        <div className="section-wrapper mediumwidth margin-tb">


          <div className="section-aside">
            <div className="title-desc">
              <h2 className="display-4 display-title anim-1">Past Work</h2>
            </div>

          </div>
      <div className="section-content row justify-content-between">
        {renderPages()}
      </div>
    </div>
  </div>
    );
}
}

export default Portfolio;
