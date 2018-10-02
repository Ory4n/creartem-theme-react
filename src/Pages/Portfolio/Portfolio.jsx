import React, { Component } from 'react';

class Portfolio extends Component {
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
              <div className="section section-grid section-centered fp-auto-height demo-section" id="style">
                <div className="section-wrapper mediumwidth margin-tb">


                  <div className="section-aside">
                    <div className="title-desc">
                      <h2 className="display-4 display-title anim-1">Style &amp; Colors</h2>
                    </div>

                  </div>

                  <div className="section-content row justify-content-between">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-style1.html">
                                <img className="img" src="/theme/demopage/style1.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Style : White Background</h5>
                              <p className="small">Sample CSS customizing page color : black text and white background</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateDown">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-style2.html">
                                <img className="img" src="/theme/demopage/style2.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Style : Customized colors</h5>
                              <p className="small">Sample CSS customizing page color.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateUp">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-2.html">
                                <img className="img" src="/theme/demopage/default.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Default Layout</h5>
                              <p className="small">Default CSS, just primary color is customized</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section section-twoside section-centered fp-auto-height demo-section"
              id="home">
                <div className="section-wrapper mediumwidth margin-tb">

                  <div className="section-aside aside-top anim translateUp">
                    <div className="title-desc">
                      <h2 className="display-4 display-title anim-1">Home</h2>
                    </div>

                  </div>

                  <div className="section-content row justify-content-between">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateDown">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-2.html">
                                <img className="img" src="/theme/demopage/default.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Multipanel</h5>
                              <p className="small">Use it to highlight services</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-home-alt.html">
                                <img className="img" src="/theme/demopage/fullscreen.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Fullscreen image</h5>
                              <p className="small">Use it to present your brand</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateUp">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="projects.html">
                                <img className="img" src="/theme/demopage/projects.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Slider</h5>
                              <p className="small">Use it as a gallery or projects slideshow</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="section-footer scrolldown">
                    <a className="down">
                      <span className="icon"></span>
                      <span className="txt">Scroll Down</span>
                    </a>
                  </footer>
                </div>
              </div>
              <div className="section section-grid section-centered fp-auto-height demo-section" id="background">
                <div className="section-wrapper mediumwidth margin-tb">

                  <div className="section-aside aside-top anim translateUp">
                    <div className="title-desc">
                      <h2 className="display-4 display-title anim-1">Background</h2>
                    </div>

                  </div>

                  <div className="section-content row justify-content-between">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateUp">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-particle.html">
                                <img className="img" src="/theme/demopage/particle.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Particle</h5>
                              <p className="small">Particle animation layer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-slideshow.html">
                                <img className="img" src="/theme/demopage/slideshow.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Slideshow</h5>
                              <p className="small">Fullscreen background image slideshow</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="section-content anim translateDown">
                        <div className="images text-center">
                          <div className="img-frame-normal">
                            <div className="img-1 shadow">
                              <a href="index-video.html">
                                <img className="img" src="/theme/demopage/video.jpg" alt="demo" />
                              </a>
                            </div>
                            <div className="legend text-left">
                              <h5>Video</h5>
                              <p className="small">Fullscreen video background</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })
        return (
          <section>
              {pages}
          </section>
        );
  }
}

export default Portfolio;
