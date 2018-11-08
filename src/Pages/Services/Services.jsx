import React, { Component } from 'react';

class Services extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/pages?slug=services embed";
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
                          <h2 className="display-4 display-title anim-1">{page.title.rendered}</h2>
                          <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
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
                            <h4>Web Design</h4>
                            <p>Web design is an important aspect of any website, it helps you to gain more traffic on your website.</p>
                        </div>
                      </div>
                      {/*Item 2*/}
                      <div className="item media">
                        <div className="img">
                          <h3 className="title-icon">02</h3>
                        </div>
                        <div className="media-body">
                            <h4>Web Development</h4>
                            <p>The back-end is what you don’t see but what makes the site run. This is the server, the database and server-side applications. </p>
                          </div>
                      </div>
                      {/*Item 3*/}
                      <div className="item media">
                        <div className="img">
                          <h3 className="title-icon">03</h3>
                        </div>
                        <div className="media-body">
                            <h4>Mobile Applications</h4>
                            <p>We provide mobile application development for both Android and IOS devices.</p></div>
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
