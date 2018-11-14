import React, { Component } from 'react';
import WebDesignTitle from '../Sections/WebDesign/Title';
import WebDesignContent from '../Sections/WebDesign/Content';
import WebDevTitle from '../Sections/WebDev/Title';
import WebDevContent from '../Sections/WebDev/Content';
import { Link } from 'react-router-dom';

class About extends Component {
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
            <div key={page}>
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
                        {/*About Page Title from Wordpress*/}
                        <h2 className="display-4 display-title">{page.title.rendered}</h2>
                      </div>
                      <div className="article-content sr-up-td2 text-black">
                        {/*About Page Top Content from Wordpress*/}
                        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
                      </div>

                      <div className="btns-action sr-up-td3">
                        <Link className="btn btn-normal" to="/faq" alt="creartem agency contact details">
                          <span className="text">Contact</span>
                          <span className="icon">
                            <span className="arrow-right"></span>
                          </span>
                        </Link>
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

                            </div>
                            <div className="article-content sr-up-td1">
                              {/*Web Design Section Title from Wordpress*/}
                              <h2><WebDesignTitle /></h2>
                              {/*Web Design Section Content from Wordpress*/}
                              <WebDesignContent />
                            </div>

                            <div className="btns-action sr-up-td1">
                              <Link className="btn btn-normal" to="/services">
                                <span className="text">Learn more</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
                              </Link>
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

                            </div>
                            <div className="article-content sr-up-td1">
                              {/*Web Development Section Title from Wordpress*/}
                              <h2 ><WebDevTitle /></h2>
                              {/*Web Development Section Content section from Wordpress*/}
                              <WebDevContent />
                            </div>

                            <div className="btns-action sr-up-td1">
                              <Link className="btn btn-normal" to="/services">
                                <span className="text">Learn more</span>
                                <span className="icon">
                                  <span className="arrow-right"></span>
                                </span>
                              </Link>
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
