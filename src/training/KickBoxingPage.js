import React from 'react';
import {Table} from 'react-bootstrap';
class KickBoxingPage extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-sm-12">
          <a href="#demo2" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912366/kick_boxing_igykc7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Kick Boxing</h3>
          <p className="lead">
            Kick Boxing is a hybrid combat sport form based on punching and kicking. It
            originated from Karate, Muay Thai, and Western Boxing.
          </p>
        </div>
      </div>

    );
  }
};

export default KickBoxingPage;
