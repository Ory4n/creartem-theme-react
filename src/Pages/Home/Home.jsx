import React, { Component } from 'react';
import AboutTitle from '../About/AboutTitle'
import AboutContent from '../About/AboutContent'
import Typist from 'react-typist';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp-json/wp/v2/pages?slug=home embed";
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
                        <div className="media media-panel bordered">
                          <div className="media-img">
                            {/*<img className="img img-block" src="/theme/img/items/img-sample1.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                            <div className="icon d-none d-md-block">
                              <i className="fa fa-home"></i>
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
                            <Typist>
                            <h2 className="display-5 text-slide-in text-center center">{page.title.rendered}</h2>
                            </Typist>
                              <div className="text-center center" dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                          </div>
                          <div className="media-body">
                            {/*Panel 1 Action buttons*/}
                            <div className="btns-action anim-4">
                              <a className="btn btn-underline btn-primary" href="index-2.html#about">
                                <span className="text">Who we are</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="index-2.html#services">
                                <span className="text">Services</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="index-2.html#gallery">
                                <span className="text">Use case</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Panel 2*/}
                      <div className="col col-12 col-md-4 col-lg-4 text-left">
                        <div className="media media-panel bordered">
                          <div className="media-img">
                            {/*}<img className="img d-flex" src="/theme/img/items/img-sample2.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                            <div className="icon">
                              <i className="fa fa-list-ul"></i>
                            </div>
                          </div>
                          {/*title*/}
                          <div className="media-title text-center">
                            <h2 className="display-5 text-slide-in text-center"><AboutTitle /></h2>
                            <div>Hi There, Creartem is a web agency based in Rotorua. Managed by tutors at Toi-Ohomai Institute of Technology and run by web development students.</div>
                          </div>
                          <div className="media-body">
                            {/*Panel 2 Action buttons*/}
                            <div className="btns-action anim-4">
                              <a className="btn btn-underline btn-primary" href="projects.html">
                                <span className="text">Works</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="products.html">
                                <span className="text">Products</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="index-2.html#contact">
                                <span className="text">Contact</span>
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
                            <div className="icon">
                              <i className="fa fa-user-circle-o"></i>
                            </div>
                          </div>
                          {/*title*/}
                          <div className="media-title">
                            <h2 className="display-5 text-slide-in">Experts</h2>
                            <p>We have the best team member in town. Everybody like us.</p>
                          </div>
                          <div className="media-body">
                            {/*Panel 3 Action buttons*/}
                            <div className="btns-action anim-4">
                              <a className="btn btn-underline btn-primary" href="team.html">
                                <span className="text">Our agents</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="item.html">
                                <span className="text">Job Offers</span>
                              </a>
                              <a className="btn btn-underline btn-primary" href="blog.html">
                                <span className="text">Blog and Advices</span>
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
