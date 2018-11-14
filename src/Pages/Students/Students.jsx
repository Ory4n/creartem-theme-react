import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Students extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/pages?slug=about embed";
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
                            <div className="article-header sr-up-td1">

                            </div>
                            <div className="article-content sr-up-td2">
                              <h2 className="text-center">Creartem Team Members</h2>
                              <p className="text-center">
                                <strong>Meet Our Team</strong> at the Creartem web agency. A list of past and present students at Toi Ohomai Institute of Technology, including the Web Development Lecturer Doug MacKenzie.
                              </p>

                              <div className="btns-action sr-up-td3 text-center">
                                <Link className="btn btn-normal" to="/faq" alt="creartem agency contact details">
                                  <span className="text">Contact Us</span>
                                  <span className="icon">
                                    <span className="arrow-right"></span>
                                  </span>
                                </Link>
                              </div>

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
                                  Great services means great team. Here are the past and present students behind Creartem.
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
                              <img className="img img-block" src="/theme/img/items/img-sample1.jpg" alt="Creartem Students" />
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Namita Garg</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                            </div>

                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:gargnamita2@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Vanessa Lemmé</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="https://www.facebook.com/codedesignz">
                                <i className="icon fab fa-facebook"></i>
                              </a>
                              <a className="btn btn-social" href="mailto:vanessalemme@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
                              </a>
                              <a className="btn btn-social" href="http://www.codedesigns.nz">
                                <i className="icon fas fa-globe"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Zyra Gail Estrella</h3>
                                  <p>
                                    Graphic & Web Designer, Animation & 3D Graphic
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:zestrella@gbox.adnu.edu.ph?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Saloni Gupta</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:saloni92gupta@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 order-2 order-lg-2">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                              <img className="img img-block" src="/theme/img/items/mon1.jpg" alt="Monpariva" />
                            </div>
                            <div className="media-body center-vh text-center">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Monpariva Mingmongkol</h3>
                                  <p>
                                    Web Designer
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:skylark1218@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Donji Philip Ouano</h3>
                                  <p>
                                   Web Designer & hybrid Mobile Application
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:donjiouano@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Oryan McLean</h3>
                                  <p>
                                    FullStack Developer, Web Consultant, UI/UX Designer
                                  </p>
                                </div>
                            </div>

                            <div className="media-footer text-right">
                              <a className="btn btn-social" href="mailto:info.oryan@gmail.com">
                                <i className="icon fas fa-envelope"></i>
                              </a>
                              <a className="btn btn-social" href="https://nz.linkedin.com/in/oryanmclean">
                                <i className="icon fab fa-linkedin"></i>
                              </a>
                              <a className="btn btn-social" href="http://www.myprofile.nz">
                                <i className="icon fas fa-globe"></i>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Sergey Lyaskovskiy</h3>
                                  <p>
                                    Web Developer & Designer
                                  </p>
                                </div>
                            </div>

                            <div className="media-footer text-right">

                              <a className="btn btn-social" href="mailto:lightgrey1238@gmail.com?Subject=Hello%20again">
                                <i className="icon fas fa-envelope"></i>
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
                              <div className="desc sr-up-td1">
                                <h3 className="display-6">Lecturer</h3>
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
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">Doug MacKenzie</h3>
                                  <p>
                                   Tutor
                                  </p>
                                </div>
                            </div>


                          </div>
                        </div>
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
