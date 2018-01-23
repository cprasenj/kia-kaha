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
import ReasonTable from "../reason/ReasonTable";
import AboutUsComponent from "../aboutUs/AboutUsComponent"

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
                <li className="nav_element"><a href="#program">Training</a></li>
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

        <Carousel>
          <Carousel.Item>
            <img width={500} height={300} alt="500x300" src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515908216/cover_image1_diw7l2.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={300} alt="500x300" src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515908205/cover_image2_dmkq9w.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={300} alt="500x300" src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515908199/cover_image3_i2tk5m.jpg" />
          </Carousel.Item>
        </Carousel>

        <AboutUsComponent></AboutUsComponent>

        <div id="program" className="container text-center">
          <div className="row">

            <div className="col-sm-4">
              <a href="#demo" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515911277/about_us3_revncw.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Boxing</h3>
              <p>
                One of the most popular combat sports in the world, Boxing is the art of attack and
                defence using your fists. It’s a contest of speed, reflexes, strength, and endurance
                between two fighters.
              </p>
            </div>

            <div className="col-sm-4">
              <a href="#demo2" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912366/kick_boxing_igykc7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Kick Boxing</h3>
              <p>
                Kick Boxing is a hybrid combat sport form based on punching and kicking. It
                originated from Karate, Muay Thai, and Western Boxing.
              </p>
            </div>

            <div className="col-sm-4">
              <a href="#demo3" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912372/muay_thai_s7soep.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Muay Thai</h3>
              <p>
                Originated in Thailand, Muay Thai uses the techniques of clinching and striking.
                Punches, elbow strikes, kicks, and knee strikes form the basis of Muay Thai. It’s one of the deadliest martial arts.
              </p>
            </div>
          </div>

          <div className="row">

            <div className="col-sm-4">
              <a href="#demo" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912382/wrestling_ftpmrn.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Wrestling</h3>
              <p>
                Wrestling involves grappling techniques, joint locks, clinches, grappling pins and holds, and takedowns.
                One of the oldest combat sports in India, Wrestling is a contest between two individuals trying to
                gain a superior position over the other, mostly by pinning the other down.
              </p>
            </div>

            <div className="col-sm-4">
              <a href="#demo2" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912391/jiu_jitsu_zderb1.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Brazilian Jiu Jitsu (BJJ)</h3>
              <p>
                Brazilian Jiu Jitsu is a martial art based on grappling.
                The central theme of BJJ is the efficient use of skill to control a resisting opponent and compel him to submit.
                Since it’s easier to gain control on the ground rather than in a standing position,
                BJJ involves the skill to take the opponent on the ground and wrestle for a dominant control position.
              </p>
            </div>

            <div className="col-sm-4">
              <a href="#demo3" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912197/mma_jaljr7.jpg" className="img-circle" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Mixed Martial Arts (MMA)</h3>
              <p>
                One of the fastest growing combat sports in the world,
                MMA is the amalgamation of various combat sports and martial arts – Boxing,
                Kickboxing, Muay Thai, Wrestling, Brazilian Jiu Jitsu, and the like.
                In other words, it’s a full-contact sport, which allows both grappling and striking – both
                standing and on the ground.
              </p>
            </div>
          </div>
          <br />
          <h3>Why Choose MMA?</h3>
          <p>Well, why not?
              But if you want us to expound, here it is. MMA is more practical in real life
              scenarios. An MMA athlete is the most complete athlete: stamina, strength, endurance
              – he/she has it all. It boosts your self-confidence, motivates you, teaches you humility.
              In Jiu Jitsu, for instance, a 50-kg guy can easily defeat an 80-kg guy, if he knows the
              proper techniques. Regardless of your weight, your age, your endurance, you will
              submit to a guy who is weaker and younger than you are. If this doesn’t teach you
              humility, what will? You will learn to respect everyone and you will learn never to
              underestimate anyone.<br/>
              Unlike other fitness workouts, you will learn something that lasts a lifetime.
              Your fitness will wither away, but the techniques you have learnt will never die. With
              MMA, you will be fitter than any other athlete. You will be compelled to test yourself
              everyday – your fitness, your skills, your ego, your potential, everything that has
              something to do with your personality.<br/>

              No matter how tall or short or weak or fat or thin you think you are, MMA
              will make you stronger – both physically and mentally. You will know how to use
              your strength and your techniques. It’s not the size of you in a fight, it’s the size of the
              fight in you that matters.<br/>
              Sometimes life hits you in a place it shouldn’t. You need to know then as to
              how to handle yourself. That’s what MMA teaches you. To stand your ground, to take
              the punches without running away, then hit back.<br/>
            </p>
            <br/>
            <ReasonTable></ReasonTable>
        </div>



        <ScheduleComponent></ScheduleComponent>
        <ContactComponent></ContactComponent>
        <Branches></Branches>
        <Footer></Footer>
      </div>
    );
  }
};

export default HeaderComponent;
