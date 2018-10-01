import React, { Component } from 'react';

class Services extends Component {
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
      <div className="section section-home-alt fullscreen-md fp-auto-height-responsive main-home section-home section-centered"
      data-section="home">

        <div className="section-wrapper fullwidth">

          <div className="section-content">
            <div className="media-full">
              <div className="row fullheight">
                <div className="col-12 col-md-8 col-lg-8 center-vh">
                  <article className="article-page margin-tb width-article text-left">
                    {/*title and description*/}
                    <div className="article-content anim-2">
                      <h1 className="display-3">{page.title.rendered}</h1>
                      <p className="desc-decor"><div dangerouslySetInnerHTML={ {__html: page.content.rendered} } /></p>
                      {/*Action button*/}
                      <div className="btns-action anim-5">
                        <a className="btn btn-normal" href="/">
                          <span className="text">Learn more</span>
                          <span className="icon">
                            <span className="arrow-right"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-none d-md-block">
                  <div className="border-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/*Arrows scroll down/up*/}
          <footer className="section-footer scrolldown">
            <a className="down">
              <span className="btn btn-arrow">
                <span className="icon">
                  <span className="arrow-down"></span>
                </span>
              </span>
            </a>
          </footer>
        </div>
        {/*End of section wrapper*/}
      </div>


            </div>
          )
        })
        return (
          <section id="about-page">
              {pages}
          </section>
        );
  }
}

export default Services;
