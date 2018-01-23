import React from 'react';
import {Table} from 'react-bootstrap';
class AboutUsComponent extends React.Component {
  render() {
    return (
      <div id="band" className="text-center">
        <h1>About Us</h1>
        <p className="lead">In the late 2000s, if you wanted to learn Karate or Boxing, you could easily find trainers
            to train under. But what if you wanted to learn Muay Thai <br/>or Brazilian Jiu Jitsu? What about
            MMA?<a href="/aboutUs">........more</a>
          </p>

      </div>

    );
  }
};

export default AboutUsComponent;
