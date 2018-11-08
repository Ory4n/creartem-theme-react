import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

class Faq extends Component {
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


              <div className="section section-description fp-auto-height" data-section="about">
                <div className="section-wrapper fullwidth center-lg-v">

                  <div className="section-content faq">
                    <div className="row media-twoside">

                      <div className="col-12 col-md-7 0col-lg-7 order-1 order-md-1 order-lg-1 text-left center-v">
                        <div className="item media anim faqs">
                          <article className="article-page margin-tb width-article-faq">
                            <div className="article-header sr-up-td1">
                              <h2>Contact Creartem</h2>
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
                                      <br />
                                      <h2>FAQS & Privacy Policy</h2>

                            </div>

                            <div className="btns-action sr-up-td1">

                            </div>
                          </article>
                        </div>
                      </div>

                      <div className="col-12 col-md-5 col-lg-5 order-2 order-md-2 order-lg-2">
                        <div className="item media anim translateUp">
                          <div className="media-img contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=" width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row media-twoside article-page margin-tb width-article-faq">
                    <div className="col-12 col-md-12 col-lg-12">
                    <div className="accordion">
                    <div className="accordion__single">
                    <input className="accordion__single__hidden" type="checkbox" id="question-one" />
                    <label className="accordion__single__question" for="question-one">Privacy Policy</label>
                    <p className="accordion__single__answer">lorem ipsum dolor sit amet consectetuer adipiscing elit. lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                    </div>
                    <div className="accordion__single">
                    <input className="accordion__single__hidden" type="checkbox" id="question-two" />
                    <label className="accordion__single__question" for="question-two">Faqs One</label>
                    <p className="accordion__single__answer">lorem ipsum dolor sit amet consectetuer adipiscing elit. lorem ipsum dolor sit amet consectetuer adipiscing elit. </p>
                    </div>
                    <div className="accordion__single">
                    <input className="accordion__single__hidden" type="checkbox" id="question-three" />
                    <label className="accordion__single__question" for="question-three">Faqs 2</label>
                    <p className="accordion__single__answer">
                    lorem ipsum dolor sit amet consectetuer adipiscing elit. lorem ipsum dolor sit amet consectetuer adipiscing elit.
                    </p>
                    </div>
                    <div className="accordion__single">
                    <input className="accordion__single__hidden" type="checkbox" id="question-four" />
                    <label className="accordion__single__question" for="question-four">Faqs 3</label>
                    <p className="accordion__single__answer">
                    lorem ipsum dolor sit amet consectetuer adipiscing elit. lorem ipsum dolor sit amet consectetuer adipiscing elit.
                    </p>
                    </div>
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

export default Faq;
