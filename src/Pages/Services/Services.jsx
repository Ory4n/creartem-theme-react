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
              <div className="section section-list-feature fp-auto-height" data-section="services">

                <div className="section-wrapper fullwidth margin-tb margin-lr">
                  <div className="section-content anim-off">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-6 text-center">
                        {/*Title and Description*/}
                        <div className="title-desc">
                          <h2 className="display-4 display-title anim-1">Services</h2>
                          <p className="anim-2">List of our services. Lorem ipsum magicum dolor sit amet, consectetur
                            adipiscing elit. Maecenas a sem ultrices neque vehicula fermentum
                            a sit amet nulla.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*Service List*/}
                    <div className="service-list grid-1 grid-md-2 grid-lg-3 anim-list decor-off">
                      {/*Item 1*/}
                      <div className="item media">
                        <div className="img">
                          <h3 className="title-icon">01</h3>
                        </div>
                        <div className="media-body">
                          <a href="/">
                            <h4>Coding</h4>
                            <p>An awesome service that we offer to you. This is just a placeholder
                              text.</p>
                          </a>
                          <a className="btn btn-underline btn-primary" href="/">
                            <span className="text">Details ...</span>
                          </a>
                        </div>
                      </div>
                      {/*Item 2*/}
                      <div className="item media">
                        <div className="img">
                          <h3 className="title-icon">02</h3>
                        </div>
                        <div className="media-body">
                          <a href="/">
                            <h4>Mechanics</h4>
                            <p>An awesome service that we offer to you. This is just a placeholder
                              text.</p>
                          </a>
                          <a className="btn btn-underline btn-primary" href="/">
                            <span className="text">Details ...</span>
                          </a>
                        </div>
                      </div>
                      {/*Item 3*/}
                      <div className="item media">
                        <div className="img">
                          <h3 className="title-icon">03</h3>
                        </div>
                        <div className="media-body">
                          <a href="/">
                            <h4>Analytics</h4>
                            <p>An awesome service that we offer to you. This is just a placeholder
                              text.</p>
                          </a>
                          <a className="btn btn-underline btn-primary" href="/">
                            <span className="text">Details ...</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <footer className="section-footer scrolldown">
                    <a className="up">
                      <span className="btn btn-arrow">
                        <span className="icon">
                          <span className="arrow-up"></span>
                        </span>
                      </span>
                    </a>
                    <a className="down">
                      <span className="btn btn-arrow">
                        <span className="icon">
                          <span className="arrow-down"></span>
                        </span>
                      </span>
                    </a>
                  </footer>
                </div>
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
