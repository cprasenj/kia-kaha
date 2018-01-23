import React from 'react';
import {Table} from 'react-bootstrap';
class BJJPage extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-sm-6">
          <a href="#demo2" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912391/jiu_jitsu_zderb1.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Brazilian Jiu Jitsu (BJJ)</h3>
          <p className="lead">
            Brazilian Jiu Jitsu is a martial art based on grappling.
            The central theme of BJJ is the efficient use of skill to control a resisting opponent and compel him to submit.
            Since it’s easier to gain control on the ground rather than in a standing position,
            BJJ involves the skill to take the opponent on the ground and wrestle for a dominant control position.
          </p>
        </div>
      </div>

    );
  }
};

export default BJJPage;
