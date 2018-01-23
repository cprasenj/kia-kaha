import React from 'react';
import {
  Button, Image, Grid,
  Row, Col, Navbar,
  Nav, NavItem, FormGroup,
  FormControll, Carousel,
  Table
} from 'react-bootstrap';

import Footer from "../footer/FooterComponent";
import Branches from "../branch/BranchComponent";
import ContactComponent from "../contact/ContactComponent";
import ScheduleComponent from "../schedule/ScheduleComponent";
import AboutUsComponent from "../aboutUs/AboutUsComponent";
import CarouselComponent from "../carousel/Carousel";
import TrainingComponent from "../training/TrainingComponent";
import Testimonials from "../testimonials/Testimonials";

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="background">
        {/* Theme Made By www.w3schools.com - No Copyright */}
        <title>Kia kaha</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossOrigin="anonymous"></link>
        <style dangerouslySetInnerHTML={{__html: "\n  body {\n      font: 400 15px/1.8 Lato, sans-serif;\n      color: #777;\n  }\n  h3, h4 {\n      margin: 10px 0 30px 0;\n      letter-spacing: 10px;      \n      font-size: 20px;\n      color: #111;\n  }\n  .container {\n      padding: 80px 120px;\n  }\n  .person {\n      border: 10px solid transparent;\n      margin-bottom: 25px;\n      width: 80%;\n      height: 80%;\n      opacity: 0.7;\n  }\n  .person:hover {\n      border-color: #f1f1f1;\n  }\n  .carousel-inner img {\n      -webkit-filter: grayscale(90%);\n      filter: grayscale(90%); /* make all photos black and white */ \n      width: 100%; /* Set width to 100% */\n      margin: auto;\n  }\n  .carousel-caption h3 {\n      color: #fff !important;\n  }\n  @media (max-width: 600px) {\n    .carousel-caption {\n      display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */\n    }\n  }\n  .bg-1 {\n      background: #2d2d30;\n      co  lor: #bdbdbd;\n  }\n  .bg-1 h3 {color: #fff;}\n  .bg-1 p {font-style: italic;}\n  .list-group-item:first-child {\n      border-top-right-radius: 0;\n      border-top-left-radius: 0;\n  }\n  .list-group-item:last-child {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n  }\n  .thumbnail {\n      padding: 0 0 15px 0;\n      border: none;\n      border-radius: 0;\n  }\n  .thumbnail p {\n      margin-top: 15px;\n      color: #555;\n  }\n  .btn {\n      padding: 10px 20px;\n      background-color: #333;\n      color: #f1f1f1;\n      border-radius: 0;\n      transition: .2s;\n  }\n  .btn:hover, .btn:focus {\n      border: 1px solid #333;\n      background-color: #fff;\n      color: #000;\n  }\n  .modal-header, h4, .close {\n      background-color: #333;\n      color: #fff !important;\n      text-align: center;\n      font-size: 30px;\n  }\n  .modal-header, .modal-body {\n      padding: 40px 50px;\n  }\n  .nav-tabs li a {\n      color: #777;\n  }\n  #googleMap {\n      width: 100%;\n      height: 400px;\n      -webkit-filter: grayscale(100%);\n      filter: grayscale(100%);\n  }  \n  .navbar {\n      font-family: Montserrat, sans-serif;\n      margin-bottom: 0;\n      background-color: #2d2d30;\n      border: 0;\n      font-size: 11px !important;\n      letter-spacing: 4px;\n      opacity: 0.9;\n  }\n  .navbar li a, .navbar .navbar-brand { \n      color: #d5d5d5 !important;\n  }\n  .navbar-nav li a:hover {\n      color: #fff !important;\n  }\n  .navbar-nav li.active a {\n      color: #fff !important;\n      background-color: #29292c !important;\n  }\n  .navbar-default .navbar-toggle {\n      border-color: transparent;\n  }\n  .open .dropdown-toggle {\n      color: #fff;\n      background-color: #555 !important;\n  }\n  .dropdown-menu li a {\n      color: #000 !important;\n  }\n  .dropdown-menu li a:hover {\n      background-color: red !important;\n  }\n  footer {\n      background-color: #2d2d30;\n      color: #f5f5f5;\n      padding: 32px;\n  }\n  footer a {\n      color: #f5f5f5;\n  }\n  footer a:hover {\n      color: #777;\n      text-decoration: none;\n  }  \n  .form-control {\n      border-radius: 0;\n  }\n  textarea {\n      resize: none;\n  }\n  " }} />

        <nav className="navbar navbar-default navbar-fixed-top nav-Item">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#home">Kia Kaha</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav_element"><a href="#home">Home</a></li>
                <li className="nav_element"><a href="#band">About Us</a></li>
                <li className="nav_element"><a href="#training">Training</a></li>
                <li className="nav_element"><a href="#schedule">Schedule</a></li>
                <li className="nav_element"><a href="#branches">Branches</a></li>
                <li className="nav_element"><a href="#testimonials">Testimonials</a></li>
                <li className="nav_element"><a href="#contact">Contact Us</a></li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">More
                  <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Galary</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </li>
                <li className="facebook"><a href="#" data-toggle="tooltip" title="Facebook"><i className="fa fa-facebook fa-lg"></i></a></li>
                <li className="twitter"><a href="#" data-toggle="tooltip" title="Twitter"><i className="fa fa-twitter fa-lg"></i></a></li>
                <li className="instagram"><a href="#" data-toggle="tooltip" title="Instagram"><i className="fa fa-instagram fa-lg"></i></a></li>
                <li className="google"><a href="#" data-toggle="tooltip" title="Google+"><i className="fa fa-google-plus"></i></a></li>
                <li className="tumbler"><a href="#" data-toggle="tooltip" title="tumbler"><i className="fa fa-tumblr"></i></a></li>
                <li className="youtube"><a href="#" data-toggle="tooltip" title="youtube"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>




        <div id="home"></div>

        <CarouselComponent></CarouselComponent>

        <aside className="sticky">
          <h2><a href="/why-mma">Why MMA?</a></h2>
        </aside>

        <AboutUsComponent></AboutUsComponent>
        <TrainingComponent></TrainingComponent>

        <ScheduleComponent></ScheduleComponent>
        <Branches></Branches>
        <Testimonials></Testimonials>
        <ContactComponent></ContactComponent>
        <Footer></Footer>
      </div>
    );
  }
};

export default HeaderComponent;
