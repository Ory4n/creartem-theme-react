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
              <div className="section section-contact fp-auto-height-responsive no-slide-arrows fp-auto-height fp-section section-anim active" data-section="contact" data-anchor="contact">
      <div className="section-cover-full fit bg-color" data-bgcolor="rgba(40,40,40,0.5)"></div>

      <div className="section-wrapper fullwidth center-lg-v">
        {/*content*/}
        <div className="section-content">
          <div className="row media-twoside">
            <div className="col-12 col-lg-4 order-1 order-lg-1">
              <div className="item media">
                <div className="media-img relative-md absolute-lg elevated">
                  <div className="featured-map">
                    {/*add your iframe code from google maps here*/}
                    <iframe title="creartem google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.841845834818!2d176.2421493156943!3d-38.16711497968997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c274c4b9d5793%3A0xf0cb5a318c6e8aa6!2sToi+Ohomai+Institute+of+Technology+-+Mokoia+Campus!5e0!3m2!1sen!2snz!4v1541667516672" width="600" height="450" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8 order-2 order-lg-2 text-left center-v">
              <div className="item media anim">
                <article className="article-page margin-tb width-article">
                  <div className="article-header sr-up-td1">
                    <h4>Get in touch with us</h4>
                  </div>
                  {/*title and description*/}
                  <div className="article-content">
                    <div className="sr-up-td1">
                      <h2>Contact</h2>
                      <p className="desc-decor">For any questions about our agency and services, send us a message.</p>
                    </div>
                    <div className="address-container sr-up-td1">

                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                          <h4>Contact</h4>
                          <p>Call: 01 234 567 89</p>
                          <h4>Email</h4>
                          <p>
                            <a href="mailto:info@creartem.nz" className="text-primary">info@creartem.nz</a>
                          </p>
                          <div className="btns-action sr-up-td3">
                    <a href="https://facebook.com/creartem" alt="Creartem Facebook Profile" className="btn btn-social">
                      <i className="icon fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com/creartem" alt="Creartem Instagram Profile" className="btn btn-social">
                      <i className="icon fab fa-instagram"></i>
                    </a>

                  </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                          <h4>Address</h4>
                          <p>
                            Toi Ohomai Institute of Technology
                            <br />8 Mokoia Drive
                            <br />Rotorua, NZ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <div className="section fp-auto-height fp-section section-anim active" data-section="register" style={{height: 920+"px"}} data-anchor="register">
      <div className="section-wrapper fullwidth with-margin">

        <div className="section-content anim-off">

          <div className="media-row  flex-height">
            <div className="row">
              <div className="col-12 col-lg-4 order-1 order-lg-1">
                <div className="item media text-white anim translateUp">
                  <div className="media-img">
                    <div className="mask bg-primary"></div>
                  </div>
                  <div className="media-body center-vh text-center">
                    <div className="desc wrapper margin-tb">
                      <h3 className="display-6 mt-0">Subscribe</h3>
                      <p>
                        Follow us to get our latest news
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-2 order-lg-2">
                <div className="item media anim translateUp">
                  <div className="media-img">
                    <div className="mask bg-white"></div>
                  </div>
                  <div className="media-body center-vh text-center text-primary padding-0">

                    <form className="send_email_form form-container wrapper margin-tb" method="post" action="ajaxserver/serverfile.php" novalidate="novalidate">
                      <div className="form-desc sr-up-td1">
                        <p className="invite">Don't miss any new opportunity, Hurry up! register now :</p>
                      </div>
                      <div className="form-input sr-up-td1">
                        <div className="form-group form-success-gone">
                          <label for="reg-email">Email</label>
                          <input id="reg-email" name="email" className="form-control-line form-control-primary" type="email" required="" placeholder="your@email.address" data-validation-type="email" aria-required="true" />
                        </div>
                        <div className="form-group mb-0">
                          <div>
                            <p className="email-ok invisible form-text-feedback form-success-visible">Your email has been registred, thank you.
                            </p>
                          </div>

                          <div className="btns-action">
                            <button id="submit-email" name="submit_email" className="btn btn-normal btn-primary form-success-gone">
                              <span className="text">Subscribe</span>
                              <span className="icon">
                                <i className="ion ion-checkmark"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
          <div>
              {pages}
          </div>
        );
  }
}

export default Faq;
