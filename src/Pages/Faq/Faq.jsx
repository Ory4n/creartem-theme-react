import React, { Component } from 'react';
import WebDesignTitle from '../Sections/WebDesign/Title';
import WebDesignContent from '../Sections/WebDesign/Content';
import WebDevTitle from '../Sections/WebDev/Title';
import WebDevContent from '../Sections/WebDev/Content';

class Faq extends Component {
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
            <div key={page}>


              <div className="section section-description fp-auto-height" data-section="about">
                <div className="section-wrapper fullwidth center-lg-v">

                  <div className="section-content-faq">
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
                          <article className="article-page margin-tb width-article-faq">
                            <div className="article-header sr-up-td1">
                              <h4>Contact</h4>
                            </div>
                            <div className="article-content-faq sr-up-td1">
                            <form action="/action_page.php">
                                        <div className="form-group">
                                          <label for="email">Name:</label>
                                          <input type="name" className="form-control" id="pwd" />
                                        </div>
                                        <div className="form-group">
                                          <label for="email">Email:</label>
                                          <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                          <label for="pwd">Message:</label>
                                          <textarea type="message" className="form-control" id="pwd" />
                                        </div>

                                        <button type="submit" className="btn btn-default">Submit</button>
                                      </form>



                            </div>

                            <div className="btns-action sr-up-td1">

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
                  <div className="section-content-faq">
                    <div className="row media-twoside">

                      <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 order-lg-1 text-left center-v">
                        <div className="item media anim border-top-orange">
                          <article className="article-page margin-tb width-article">
                            <div className="article-header sr-up-td1">
                              <h4>FAQ'S</h4>
                            </div>
                            <div className="article-content sr-up-td1">
                              {/*Web Development Section Title from Wordpress*/}
                              <h2><WebDevTitle /></h2>
                              {/*Web Development Section Content section from Wordpress*/}
                              <WebDevContent />
                            </div>

                            <div className="btns-action sr-up-td1">

                            </div>
                          </article>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 order-lg-1 text-left center-v">
                        <div className="item media anim border-top-orange">
                          <article className="article-page margin-tb width-article">
                            <div className="article-header sr-up-td1">
                              <h4>PRIVACY POLICY</h4>
                            </div>
                            <div className="article-content sr-up-td1">
                              {/*Web Development Section Title from Wordpress*/}
                              <h2><WebDevTitle /></h2>
                              {/*Web Development Section Content section from Wordpress*/}
                              <WebDevContent />
                            </div>

                            <div className="btns-action sr-up-td1">

                            </div>
                          </article>
                        </div>
                      </div>











                    </div>
                  </div>

                  <footer className="section-footer scrolldown">

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

export default Faq;
