import React, { Component } from 'react';
import Typist from 'react-typist';

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
                        <div className="media media-panel bordered">
                          <div className="media-img">
                            {/*<img className="img img-block" src="/theme/img/items/img-sample1.jpg" alt="Generic placeholder image" />*/}
                            <div className="mask"></div>
                            <div className="icon d-none d-md-block">
                              <i className="fas fa-home"></i>
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
                            <br />
                              <div className="text-center center" dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                          </div>
                          <div className="media-body">
                            {/*Panel 1 Action buttons*/}


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
                              <i className="fas fa-list-ul"></i>
                            </div>
                          </div>
                          {/*title*/}
                          <div className="media-title text-center">
                          <Typist>
                            <h2 className="display-5 text-slide-in text-center">About Creartem</h2></Typist>
                            <div><br />Hi There, Creartem is a web agency based in Rotorua. Managed by tutors at Toi-Ohomai Institute of Technology and run by web development students.</div>
                          </div>
                          <div className="media-body">
                            {/*Panel 2 Action buttons*/}


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
                              <i className="fas fa-user-circle-o"></i>
                            </div>
                          </div>
                          {/*title*/}
                          <div className="media-title">
                          <Typist>
                            <h2 className="display-5 text-slide-in text-center">Creartem Services</h2></Typist>
                            <div className="text-center"><br />We offer a range of web services such as CMS based websites and full-stack websites.</div>
                          </div>
                          <div className="media-body">
                            {/*Panel 3 Action buttons*/}

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
