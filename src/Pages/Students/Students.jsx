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
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/students";
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
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                          <div className="item media text-white">
                            <div className="media-img">
                              <div className="mask"></div>
                                <img className="img img-block" src={page.better_featured_image.source_url}
                alt={page.better_featured_image.alt_text} />
                            </div>
                            <div className="media-body center-vh text-center">
                                <div className="desc sr-up-td1">
                                  <h3 className="display-6">{page.title.rendered}</h3>
                                  <p>
                                    {page.acf.position}
                                  </p>
                                </div>
                            </div>
                            <div className="media-footer text-right">
                              <p className="small">{page.acf.year}</p>
                              <a className="btn btn-social" href={page.acf.linkedin}>
                                <i className="icon fab fa-linkedin"></i>
                              </a>
                              <a className="btn btn-social" href={page.acf.email}>
                                <i className="icon fas fa-envelope"></i>
                              </a>
                              <a className="btn btn-social" href={page.acf.website}>
                                <i className="icon fas fa-globe"></i>
                              </a>
                            </div>
                          </div>
                        </div>
          )
        })
        return (
          <section id="about-page">
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
              </div>
            </div>
            {/*End Top Content*/}

            <div className="section  fp-auto-height" data-section="team">
              <div className="section-wrapper fullwidth with-margin">
                <div className="section-content anim">
                  <div className="media-row border-top-orange">
                    <div className="row">
              {pages}
            </div>
          </div>
        </div>
      </div>
    </div>
          </section>
        );
  }
}

export default Students;
