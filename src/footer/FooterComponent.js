import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
        <div className="footer">
          <footer className="text-center">
            <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
              <span className="glyphicon glyphicon-chevron-up" />
            </a><br /><br />
            <p className="footer-text" >Kia Kaha</p>
          </footer>
        </div>
    );
  }
};

export default FooterComponent;
