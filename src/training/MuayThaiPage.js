import React from 'react';
import {Table} from 'react-bootstrap';
class KickBoxingPage extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-lg-4">
          <a href="#demo3" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912372/muay_thai_s7soep.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Muay Thai</h3>
          <p className="lead">
            Originated in Thailand, Muay Thai uses the techniques of clinching and striking.
            Punches, elbow strikes, kicks, and knee strikes form the basis of Muay Thai. It’s one of the deadliest martial arts.
          </p>
        </div>
      </div>

    );
  }
};

export default KickBoxingPage;
