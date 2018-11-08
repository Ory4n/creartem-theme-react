import React, { Component } from 'react';
import Typist from 'react-typist';
import HomeContent from './HomeContent';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/pages?slug=home embed";
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
              <div className="section section-home-panel fullscreen-md fp-auto-height-responsive main-home section-home section-centered"
              data-section="home">
                <div className="section-wrapper v-center">
                  <div className="section-content anim">
                    <div className="row row-full">
                      {/*Panel 1*/}
                      <div className="col col-12 col-md-4 col-lg-4 text-left">
                        <div className="media media-panel">
                          <div className="media-img">
                            {/*<img className="img img-block" src="/theme/img/items/img-sample1.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                              <div class="icon d-none d-md-block">
                      <i class="fas fa-home"></i>
                    </div>
                          </div>
                          {/*title*/}
                          <div className="media-title">

                            <div className="logo-wrapper d-md-none">
                              <div className="logo">
                                <img className="light-logo" src="/theme/img/logo.png" alt="Logo" />
                              </div>
                              <h3 className="logo-text">
                                <span className="line">Creartem</span>
                                <span className="line sub">Web Agency</span>
                              </h3>
                            </div>
                            <h2 className="display-5 text-slide-in text-center center">{page.title.rendered}</h2>
                              <div className="text-center center"><br /><HomeContent /></div>
                          </div>
                          <div className="media-body">
                            {/*Panel 1 Action buttons*/}
                            <div className="btns-action sr-up-td3">
                              <a className="btn btn-normal" href="/faq" alt="creartem agency contact details">
                                <span className="text">Contact Us</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*Panel 2*/}
                      <div className="col col-12 col-md-4 col-lg-4 text-left">
                        <div className="media media-panel">
                          <div className="media-img">
                            {/*}<img className="img d-flex" src="/theme/img/items/img-sample2.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                              <div class="icon d-none d-md-block">
                      <i class="fas fa-question-circle"></i>
                    </div>
                          </div>
                          {/*title*/}
                          <div className="media-title text-center">
                            <h2 className="display-5 text-slide-in text-center">Who Are <br />We</h2>
                            <div><br />Hi There, Creartem is a web agency based in Rotorua. Managed by tutors at Toi-Ohomai Institute of Technology and run by web development students.</div>
                          </div>
                          <div className="media-body">
                            {/*Panel 2 Action buttons*/}
                            <div className="btns-action sr-up-td3">
                              <a className="btn btn-normal" href="/about" alt="about creartem agency">
                                <span className="text">About Us</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*Panel 3*/}
                      <div className="col col-12 col-md-4 col-lg-4 text-left">
                        <div className="media media-panel ">
                          <div className="media-img">
                            {/*}<img className="img img-block" src="/theme/img/items/img-sample4.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                              <div class="icon d-none d-md-block">
                      <i class="fas fa-code"></i>
                    </div>
                          </div>
                          {/*title*/}
                          <div className="media-title">
                            <h2 className="display-5 text-slide-in text-center">What We <br />Do</h2>
                            <div className="text-center"><br />We offer a range of website design and development services, from simple brochureware websites to more advanced applications such as full-stack and ecommerce development. .</div>
                          </div>
                          <div className="media-body">
                            {/*Panel 3 Action buttons*/}
                            <div className="btns-action sr-up-td3">
                              <a className="btn btn-normal" href="/services" alt="creartem web design services">
                                <span className="text">Our Services</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
                              </a>
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
          <section id="about-page">
              {pages}
          </section>
        );
  }
}

export default Home;
