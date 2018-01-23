import React from 'react';

class ContactComponent extends React.Component {
  render() {
    return (
      <div id="contact" className="container contact">
        <h1 className="text-center">Contact</h1>
        <p className="text-center"><em>We love our fans!</em></p>
        <div className="row">
          <div className="col-md-4">
            <p>Fan? Drop a note.</p>
            <p><span className="glyphicon glyphicon-map-marker" />Bangalore, INDIA</p>
            <p><span className="glyphicon glyphicon-phone" />Phone: +91 74068 99355</p>
            <p><span className="glyphicon glyphicon-envelope" />Email: nischal.kelamane5@gmail.com</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
              </div>
              <div className="col-sm-6 form-group">
                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
              </div>
            </div>
            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} />
            <br />
            <div className="row">
              <div className="col-md-12 form-group">
                <button className="btn pull-right" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
};

export default ContactComponent;
