import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }
  componentDidMount() {
    let pagesURL = "http://creartem.nz/wp/wp-json/wp/v2/projects?_embed";
    fetch(pagesURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pages: response
      })
    })
  }
  render() {


    return (
      <div className="section section-grid section-centered fp-auto-height demo-section" id="style">
        <div className="section-wrapper mediumwidth margin-tb">


          <div className="section-aside">
            <div className="title-desc">
              <h2 className="display-4 display-title anim-1">Creartem Portfolio</h2>
              <p>Some of our recent work</p>
              <br />
            </div>

          </div>

          <div className="section-content row justify-content-between">
                <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-style1.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/whakatane.jpg" alt="Whakatane Budget Advisory" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Whakatane Budget Advisory Services</h5>
                <p className="small">Whakatane Budget Advisory Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateDown">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-style2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/greyHamilton.fw_.png" alt="Grey Power Hamilton" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Grey Power Hamilton</h5>
                <p className="small">Is a voluntary Organization to support & protect the welfare & wellbeing of older people.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateUp">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/Screen-Shot-2018-10-03-at-1.02.15-PM.png" alt="Creartem" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Creartem</h5>
                <p className="small">We created a custom design front end application in REACT using the WP REST API we developed to manage the content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateUp">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/beach.png" alt="Beach Rentals" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Beach Rentals</h5>
                <p className="small">Beach Rentals required a full website design using the Wordpress CMS for easy content management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateUp">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/gaming.jpg" alt="Student Games Portal" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Student Games Portal</h5>
                <p className="small">Student Games Portal was designed using full-stack development (MERN) the aim was to provide students of Toi-Ohomai with a common interest in gaming to interact and chat about all things games.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateUp">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/huttvalleygp.fw_.png" alt="Hut Valley Greypower" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Hutt Valley Greypower</h5>
                <p className="small">Hutt Valley Grey Power is an advisory group that talks to the people in government that have the power to make changes we are advocating for.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="section-content anim translateUp">
          <div className="images text-center">
            <div className="img-frame-normal">
              <div className="img-1 shadow">
                <a href="index-2.html">
                  <img className="img" src="http://creartem.nz/wp/wp-content/uploads/seniorNetW.png" alt="Senior Net Whakatane" />
                </a>
              </div>
              <div className="legend text-left">
                <h5>Senior Net Whakatane</h5>
                <p className="small">This is a voluntary, non-profit organisation for persons fifty plus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    );
}
}

export default Portfolio;
