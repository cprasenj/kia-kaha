import React from 'react';
import {Table} from 'react-bootstrap';
class BoxingPage extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-sm-2">
          <a href="#demo" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515911277/about_us3_revncw.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Boxing</h3>
          <p className="lead">
            One of the most popular combat sports in the world, Boxing is the art of attack and
            defence using your fists. It’s a contest of speed, reflexes, strength, and endurance
            between two fighters.
          </p>
        </div>
      </div>

    );
  }
};

export default BoxingPage;
