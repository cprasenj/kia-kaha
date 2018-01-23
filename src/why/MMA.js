import React from 'react';
import {Table} from 'react-bootstrap';
import ReasonTable from "../reason/ReasonTable";
import '../App.css';
class BJJPage extends React.Component {
  render() {
    return (
      <div id="program" className="text-center background">
        <h3>Why Choose MMA?</h3>
        <p className="lead">Well, why not?
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
          <div className="container">
            <ReasonTable></ReasonTable>
          </div>
      </div>
    );
  }
};

export default BJJPage;
