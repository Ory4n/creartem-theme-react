import React, { Component } from 'react';

class About extends Component {
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
              <div className="media-row flex-height">
            <div className="row">
              <div className="col-12 center-v">
                <div className="media item anim fullwidth border-bottom-orange">
                  <div className="media-img">
                    <div className="mask bg-white-gray"></div>
                  </div>
                  <div className="media-body">
                    <article className="article-page margin-tb width-article text-center">
                      <div className="article-header sr-up-td1">
                        <h2 className="display-4 display-title">{page.title.rendered}</h2>
                      </div>
                      <div className="article-content sr-up-td2 text-black">
                        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                      </div>

                      <div className="btns-action sr-up-td3">
                        <a className="btn btn-normal" href="/">
                          <span className="text">Contact</span>
                          <span className="icon">
                            <span className="arrow-right"></span>
                          </span>
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

              <div className="section section-description fp-auto-height" data-section="about">
                <div className="section-wrapper fullwidth center-lg-v">

                  <div className="section-content">
                    <div className="row media-twoside">
                      <div className="col-12 col-md-4 col-lg-4 order-1 order-md-1 order-lg-1">
                        <div className="item media anim translateUp">
                          <div className="media-img">
                            <img className="img img-block" src="/theme/img/items/img-sample1.jpg" alt="About Creartem" />
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-8 0col-lg-8 order-2 order-md-2 order-lg-2 text-left center-v">
                        <div className="item media anim about">
                          <article className="article-page margin-tb width-article">
                            <div className="article-header sr-up-td1">
                              <h4>Expertise</h4>
                            </div>
                            <div className="article-content sr-up-td1">
                              <h1 className="display-3">{page.title.rendered}</h1>
                              <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                            </div>

                            <div className="btns-action sr-up-td1">
                              <a className="btn btn-normal" href="item.html">
                                <span className="text">Learn more</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
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

              <div className="section section-description fp-auto-height" data-section="about-more">
                <div className="section-wrapper fullwidth center-lg-v">
                  <div className="section-content">
                    <div className="row media-twoside">

                      <div className="col-12 col-md-12 col-lg-12 order-2 order-md-1 order-lg-1 text-left center-v">
                        <div className="item media anim border-top-orange">
                          <article className="article-page margin-tb width-article">
                            <div className="article-header sr-up-td1">
                              <h4>Expertise</h4>
                            </div>
                            <div className="article-content sr-up-td1">
                              <h2>Affaire Courante</h2>
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

                            <div className="btns-action sr-up-td1">
                              <a className="btn btn-normal" href="item.html">
                                <span className="text">Learn more</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
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

            </div>
          )
        })
        return (
          <div>
              {pages}
          </div>
        );
  }
}

export default About;
