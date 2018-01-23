import React from 'react';
import {Carousel} from 'react-bootstrap';
class TrainingComponent extends React.Component {

  render() {
    return (
    <div>
      <div id="program" className="container text-center">
        <h1 id="training">Training</h1>
        <div className="row">

          <div className="col-sm-4">
            <a href="#demo" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515911277/about_us3_revncw.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Boxing</h3>
            <p className="lead">
              One of the most popular combat sports in the world, Boxing is the art of<a href="/boxing">...more</a>
            </p>
          </div>

          <div className="col-sm-4">
            <a href="#demo2" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912366/kick_boxing_igykc7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Kick Boxing</h3>
            <p className="lead">
              Kick Boxing is a hybrid combat sport form based on punching and kicking.<a href="/kick-boxing">...more</a>
            </p>
          </div>

          <div className="col-sm-4">
            <a href="#demo3" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912372/muay_thai_s7soep.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Muay Thai</h3>
            <p className="lead">
              Originated in Thailand, Muay Thai uses the techniques of clinching and striking.<a href="/muay-thai">...more</a>
            </p>
          </div>
        </div>

        <div className="row">

          <div className="col-sm-6">
            <a href="#demo" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912382/wrestling_ftpmrn.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Wrestling</h3>
            <p className="lead">
              Wrestling involves grappling techniques, joint locks, clinches, grappling pins and holds, and takedowns.<a href="/wrestling">...more</a>
            </p>
          </div>

          <div className="col-sm-6">
            <a href="#demo2" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912391/jiu_jitsu_zderb1.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Brazilian Jiu Jitsu (BJJ)</h3>
            <p className="lead">
              Brazilian Jiu Jitsu is a martial art based on grappling.
              The central theme of BJJ is the efficient<a href="/bjj">...more</a>
            </p>
          </div>


        </div>

        <div className="row">
          <div className="col-sm-12">
            <a href="#demo3" data-toggle="collapse">
              <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912197/mma_jaljr7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
            </a>
            <h3>Mixed Martial Arts (MMA)</h3>
            <p className="lead">
              One of the fastest growing combat sports in the world,
              MMA is the amalgamation of various <a href="/mma">...more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
};

export default TrainingComponent;
