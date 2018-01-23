import React from 'react';
import {Table} from 'react-bootstrap';
class MMA extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-sm-12">
          <a href="#demo3" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912197/mma_jaljr7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Mixed Martial Arts (MMA)</h3>
          <p className="lead">
            One of the fastest growing combat sports in the world,
            MMA is the amalgamation of various combat sports and martial arts – Boxing,
            Kickboxing, Muay Thai, Wrestling, Brazilian Jiu Jitsu, and the like.
            In other words, it’s a full-contact sport, which allows both grappling and striking – both
            standing and on the ground.
          </p>
        </div>
      </div>

    );
  }
};

export default MMA;
