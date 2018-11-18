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
        let pages = this.state.pages.map((page, index) => {
            return (
                    <div key={index} className="item media media-square text-white">
                      <div className="media-img">
                        <div className="mask"></div>
                          <img className="img" src={page.better_featured_image.media_details.sizes.medium.source_url}
          alt={page.better_featured_image.alt_text} />
                      </div>
                      <div className="media-body">
                        <a target="_blank" href={page.acf.Url}>
                          <h5 className="sr-up-td1">{page.acf.technologies}</h5>
                          <h3 className="sr-up-td2">{page.title.rendered}</h3>
                          <p className="small"><div dangerouslySetInnerHTML={ {__html: page.content.rendered} } /></p>
                        </a>
                      </div>
                      <div className="media-footer sr-up-td4">
                        <a className="btn btn-underline btn-primary" target="_blank" href={page.acf.Url}>
                          <span className="text">Website ...</span>
                        </a>
                      </div>
                    </div>
            );
        })

    return (
      <div className="section fp-auto-height" data-section="projects-grid">
        <div className="section-wrapper fullwidth with-margin">


          <div className="section-wrapper mediumwidth margin-tb">
            <div className="title-desc">
              <h2 className="display-4 display-title anim-1">Creartem Portfolio</h2>
              <p>Some of our recent work</p>
              <br />
            </div>

          </div>
      <div className="section-content">
        <div className="project-list grid-1 grid-md-2 grid-lg-3 anim">
        {pages}
      </div>
      </div>
    </div>
  </div>
    );
}
}

export default Portfolio;
