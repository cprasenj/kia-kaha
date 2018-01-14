import React from 'react';
import {
  Button, Image, Grid,
  Row, Col, Navbar,
  Nav, NavItem, FormGroup,
  FormControll, Carousel,
  Table
} from 'react-bootstrap';

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


        {/* Container (The Band Section) */}
        <div id="band" className="container text-center">
          <h3>About Us</h3>
          <p>In the late 2000s, if you wanted to learn Karate or Boxing, you could easily find trainers
              to train under. But what if you wanted to learn Muay Thai or Brazilian Jiu Jitsu? What about
              MMA?........ It’s highly unlikely you would have found anyone to learn them from, as they were
              all, especially MMA, relatively new in India. Kia Kaha was born out of this shortcoming, in
              2010.<br/>
              It was a humble beginning, sure. But we were a group of dedicated fighters with an
              insatiable appetite for knowledge. We learnt from various fighters and started training
              vigorously. We applied the techniques we learnt, mixed them with our own, and developed
              strategies that would work effectively in our fights. Before we thought of teaching others, we
              honed ourselves with an aggressive approach. We practiced hard, we fought hard, we
              survived.<br/>
              In 2015, Nischal Kellemane (enter your credentials here; your honours and achievements)
              brought Kia Kaha MMA Academy to Bangalore. We now have more than thousand students
              training under us, many of whom have won Gold and Silver medals in National Level
              Kickboxing Competitions.<br/>
              More recently, we have opened new branches in Indiranagar and Sarjapur.
              We are the only gym in Bangalore that focuses purely on combat training, on techniques
              that work well in the ring. We believe in training the hard way, because that’s the only way to
              learn martial arts. No fancy gear and no unnecessary, distracting music in the gym. Your
              body is your combat gear and the only music you hear in the gym are of the snip of the rope
              and of the punches landing on the bag or on the trainees.
              And as for the name, it’s a Maori phrase, meaning ‘Stay Strong’!
              <br />Welcome to Kia Kaha!
            </p>

        </div>


        {/* Program section*/}

        <div id="program" className="container text-center">
          <div className="row">

            <div className="col-sm-4">
              <a href="#demo" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515911277/about_us3_revncw.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
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
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912366/kick_boxing_igykc7.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
              </a>
              <h3>Kick Boxing</h3>
              <p>
                Kick Boxing is a hybrid combat sport form based on punching and kicking. It
                originated from Karate, Muay Thai, and Western Boxing.
              </p>
            </div>

            <div className="col-sm-4">
              <a href="#demo3" data-toggle="collapse">
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912372/muay_thai_s7soep.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
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
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912382/wrestling_ftpmrn.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
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
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912391/jiu_jitsu_zderb1.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
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
                <img src="http://res.cloudinary.com/dzpzeprjj/image/upload/v1515912197/mma_jaljr7.jpg" className="img-circle person" alt="Random Name" width={255} height={255} />
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

          <Table striped bordered condensed hover responsive>
        		<thead>
        			<tr>
        				<th align="center">Regular Folks</th>
        				<th>MMA Folks</th>
        			</tr>
        		</thead>
        		<tbody>
        			<tr>
        				<td>They train to get a good body</td>
        				<td>We train to kick their asses</td>
        			</tr>
        			<tr>
        				<td>They use machines to train</td>
        				<td>We are the machines</td>
        			</tr>
        			<tr>
        				<td>After quitting, they will be left with nothing</td>
        				<td>Even if we quit (not that we will) we will still have learnt something,
                which carries for the rest of our lives.</td>
        			</tr>
              <tr>
        				<td>They train with non-living things</td>
        				<td>We train with ourselves and real opponents</td>
        			</tr>
              <tr>
        				<td>Fitness they gain will be lost quickly</td>
        				<td>With MMA, our bodies will be designed to stay fit
                for long and will be strong in our daily lives. </td>
        			</tr>
              <tr>
        				<td>Arrogance</td>
        				<td>Humility</td>
        			</tr>
        		</tbody>
        	</Table>

        </div>



        {/* Container (TOUR Section) */}
        <div id="schedule" className="bg-1">
          <div className="container">
            <h3 className="text-center">Schedule</h3>
            <Table striped bordered condensed hover responsive>
          		<thead>
          			<tr>
                  <th>Day</th>
          				<th>Morning</th>
          				<th>Evening</th>
          			</tr>
          		</thead>
          		<tbody>
          			<tr>
          				<td>Monday</td>
          				<td>We train to kick their asses</td>
          			</tr>
          			<tr>
          				<td>They use machines to train</td>
          				<td>We are the machines</td>
          			</tr>
          			<tr>
          				<td>After quitting, they will be left with nothing</td>
          				<td>Even if we quit (not that we will) we will still have learnt something,
                  which carries for the rest of our lives.</td>
          			</tr>
                <tr>
          				<td>They train with non-living things</td>
          				<td>We train with ourselves and real opponents</td>
          			</tr>
                <tr>
          				<td>Fitness they gain will be lost quickly</td>
          				<td>With MMA, our bodies will be designed to stay fit
                  for long and will be strong in our daily lives. </td>
          			</tr>
                <tr>
          				<td>Arrogance</td>
          				<td>Humility</td>
          			</tr>
          		</tbody>
          	</Table>

          </div>
          {/* Modal */}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              {/* Modal content*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">×</button>
                  <h4><span className="glyphicon glyphicon-lock" /> Tickets</h4>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="form-group">
                      <label htmlFor="psw"><span className="glyphicon glyphicon-shopping-cart" /> Tickets, $23 per person</label>
                      <input type="number" className="form-control" id="psw" placeholder="How many?" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="usrname"><span className="glyphicon glyphicon-user" /> Send To</label>
                      <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-block">Pay
                      <span className="glyphicon glyphicon-ok" />
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                    <span className="glyphicon glyphicon-remove" /> Cancel
                  </button>
                  <p>Need <a href="#">help?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Container (Contact Section) */}
        <div id="contact" className="container">
          <h3 className="text-center">Contact</h3>
          <p className="text-center"><em>We love our fans!</em></p>
          <div className="row">
            <div className="col-md-4">
              <p>Fan? Drop a note.</p>
              <p><span className="glyphicon glyphicon-map-marker" />Bangalore, INDIA</p>
              <p><span className="glyphicon glyphicon-phone" />Phone: +91 74068 99355</p>
              <p><span className="glyphicon glyphicon-envelope" />Email: nischal.kelamane5@gmail.com</p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
              </div>
              <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} />
              <br />
              <div className="row">
                <div className="col-md-12 form-group">
                  <button className="btn pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div id="branches" className="branches">
          <h3>Branches</h3>
          <div className="row">
            <div className="col-lg-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5825843382654!2d77.61544731489597!3d12.934528219190103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144545fac74b%3A0x11876d95df575c1a!2sKia+Kaha!5e0!3m2!1sen!2sin!4v1515852470114" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="col-lg-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.002880827266!2d77.63924531489623!3d12.971667218386353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141c69e24847%3A0x88aa1172394d3b8f!2sKia+Kaha+MMA+Academy!5e0!3m2!1sen!2sin!4v1515916131760" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="col-lg-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8742749010416!2d77.67049531489585!3d12.915801219594643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137269c32c73%3A0xd54466d094077e78!2sKia+Kaha+MMA+Sarjapur+Road!5e0!3m2!1sen!2sin!4v1515916206868" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <footer className="text-center">
          <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
            <span className="glyphicon glyphicon-chevron-up" />
          </a><br /><br />
          <p>Kia Kaha</p>
        </footer>
      </div>
    );
  }
};

export default HeaderComponent;
