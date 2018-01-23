import React from 'react';
import testimonials from '../constants/testimonials';

class Testimonials extends React.Component {
  listOfGoogleTestimonials(){
    let testimonialList = testimonials.map(testimonial =>
      <div className="col-md-4">
        <div className="testimonial">
          <h6 className="description">
            {testimonial.content}
          </h6>
          <div className="testimonial-content">
            <h5 className="title">{testimonial.author}</h5>
          </div>
        </div>
      </div>
   );
   let splittedList = new Array(Math.ceil(testimonialList.length / 3)).fill().map(_ => testimonialList.splice(0,3));
   return splittedList.map(chunk =>
     <div className="row">
      {chunk}
     </div>
   )
  }


  render () {
    return (
      <div >
      <h1 id="testimonials">Testimonials</h1>
        <div>{this.listOfGoogleTestimonials()}</div>
      </div>
    );
  }
};

export default Testimonials;
