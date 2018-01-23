import React from 'react';
import {Table} from 'react-bootstrap';
class WrestingPage extends React.Component {
  render() {
    return (
      <div id="band" className="container text-center aboutUs">
        <div className="col-sm-6">
          <a href="#demo" data-toggle="collapse">
            <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912382/wrestling_ftpmrn.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
          </a>
          <h3>Wrestling</h3>
          <p className="lead">
            Wrestling involves grappling techniques, joint locks, clinches, grappling pins and holds, and takedowns.
            One of the oldest combat sports in India, Wrestling is a contest between two individuals trying to
            gain a superior position over the other, mostly by pinning the other down.
          </p>
        </div>
      </div>

    );
  }
};

export default WrestingPage;
