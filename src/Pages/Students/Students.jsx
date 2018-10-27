import React, { Component } from 'react';

class Students extends Component {
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


              <div className="section section-description fp-auto-height" data-section="team-member">

                <div className="section-wrapper fullwidth center-lg-v">
                  {/*Start Top Content*/}
                  <div className="section-content">
                    <div className="row  media-twoside">

                      <div className="col-12 col-md-12 col-lg-12 order-2 order-md-2 order-lg-2 text-left center-v">
                        <div className="item media anim">
                          <article className="article-page margin-tb width-article">
                            <div className="article-aside">
                            </div>
                            <div className="article-header sr-up-td1">
                              <h4>CEO</h4>
                            </div>
                            <div className="article-content sr-up-td2">
                              <h2>Joe Dupont</h2>
                              <p>
                                <strong>Résoudre avec facilité</strong>. Lorem ipsum magicum dolor
                                sit amet, consectetur adipiscing elit. Maecenas a sem ultrices
                                neque v ehicula fermentum a sit amet nulla.
                              </p>
                              <p>This describes what we do and what is our mission. Lorem ipsum
                                magicum dolor sit amet, consectetur adipiscing elit. Maecenas
                                a sem ultrices neque vehicula fermentum a sit amet nulla.
                              </p>
                            </div>

                            <div className="btns-action sr-up-td3">
                              <a href="http://instagram.com/" className="btn btn-social">
                                <i className="icon fa fa-envelope"></i>
                              </a>


                            </div>
                          </article>
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
              {/*End Top Content*/}

              {/*Start Team profiles*/}
              <div className="section  fp-auto-height" data-section="team">

                <div className="section-wrapper fullwidth with-margin">

                  <div className="section-content anim">
                    <div className="media-row">
                      <div className="row">
                        <div className="col-12 col-lg-4 order-lg-1">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask bg-white"></div>
                            </div>
                            <div className="media-body center-vh text-center text-primary">
                              <div className="desc sr-up-td1">
                                <h3 className="display-6">Team</h3>
                                <p>
                                  Great services means great team. Here are the great people behind.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*<div className="col-12 col-md-6 col-lg-4 order-lg-3">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask bg-primary"></div>
                            </div>
                            <div className="media-body center-vh">
                              <div className="media-icon sr-up-td2">
                                <i className="icon fa fa-users"></i>
                              </div>
                            </div>
                          </div>
                        </div>*/}
                        <div className="col-12 col-md-6 col-lg-4 order-lg-3">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask bg-primary"></div>
                            </div>
                            <div className="media-body center-vh text-center text-white">
                              <div className="desc sr-up-td1">
                                <h3 className="display-6">Designers</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <img className="img img-block" src="/theme/img/items/img-sample6.jpg" alt="Creartem Students" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="media-row border-top-orange">
                      <div className="row">
                        <div className="col-12 col-lg-4 order-1 order-lg-3">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/namita.png" alt="Namita" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Namita Garg</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                              </a>
                            </div>

                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-2 order-lg-1">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/vanessa.jpg" alt="Vanessa" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Vanessa Lemmé</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-external-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-3 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/estrella.jpg" alt="Zyra" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Zyra Gail Estrella</h3>
                                  <p>
                                    Graphic & Web Designer, Animation & 3D Graphic
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="media-row">
                      <div className="row">

                        <div className="col-12 col-lg-4 order-1 order-lg-1">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/saloni.jpg" alt="Saloni" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Saloni Gupta</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 order-2 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/Mon1.jpg" alt="Monpariva" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Monpariva Mingmongkol</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-3 order-lg-3">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/Donji.jpg" alt="Donji" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Donji Philip Ouano</h3>
                                  <p>
                                   Web Designer & hybrid Mobile Application
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="media-row border-top-green">
                      <div className="row">
                        <div className="col-12 col-lg-4 order-1 order-lg-1">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask bg-secondary"></div>
                            </div>
                            <div className="media-body center-vh text-center text-white">
                              <div className="desc sr-up-td1">
                                <h3 className="display-6">Developers</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-2 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/oryan.jpg" alt="Oryan Maclean Mclean" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Oryan McLean</h3>
                                  <p>
                                    Full-Stack Developer / Web Consultant / UI-UX Designer
                                  </p>
                                </div>
                              </a>
                            </div>

                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-linkedin"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-external-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-3 order-lg-3">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/sergey.png" alt="Sergey" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Sergey Lyaskovskiy</h3>
                                  <p>
                                    Web Developer & Designer
                                  </p>
                                </div>
                              </a>
                            </div>

                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="/">
                                <i className="icon fa fa-address-book"></i>
                              </a>
                            </div>




                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="media-row">
                      <div className="row">
                        <div className="col-12 col-lg-4 order-1 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask bg-white"></div>
                            </div>
                            <div className="media-body center-vh text-center text-primary">
                              <div class="desc sr-up-td1">
                                <h3 class="display-6">Lecturer</h3>
                                <p>Senior Lecturer at Toi Ohomai Institute of Technology.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 order-2 order-lg-1">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/doug1.jpg" alt="Doug MacKenzie" />
                            </div>
                            <div className="media-body center-vh text-center">
                              <a href="team.html">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Doug MacKenzie</h3>
                                  <p>
                                   Tutor
                                  </p>
                                </div>
                              </a>
                            </div>


                          </div>
                        </div>
                        {/*<div className="col-12 col-md-6 col-lg-4 order-3 order-lg-3">
                          <div className="item media text-white">
                            <div className="item media">


                          <img className="img img-block" src="/theme/img/items/globe.png" alt="Doug MacKenzie" />
                              <div className="media-img">
                                <div className="mask bg-black"></div>
                              </div>
                              <div className="media-body center-vh text-center">
                                <div className="desc sr-up-td1">

                                  <div className="btns mt-4">

                                  </div>
                                </div>
                              </div>
                              <div className="media-footer text-right">
                                <a className="btn btn-social" href="/contact">
                                  <i className="icon fa fa-phone"></i>
                                </a>
                                <a className="btn btn-social" href="/">
                                  <i className="icon fa fa-envelope-open"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>*/}
                      </div>
                    </div>

                  </div>
                  <footer className="section-footer scrolldown">
                    <a className="down">
                      <span className="icon down"></span>
                    </a>
                    <span className="separator"></span>
                    <a className="up">
                      <span className="icon up"></span>
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

export default Students;
