import React from 'react';
import mapLinks from '../mapLinks.js';

class Branches extends React.Component {
  listOfGoogleLink(){
    return mapLinks.map(link =>
     <div className="col-lg-4">
       <div className="row">
         <div className="col-md-8">
          <iframe width="450" height="200" frameborder="0" src={link}></iframe>
         </div>
         <div className="col-md-8">
          <h3>CONTACT US</h3>
           <address className="address">
             <strong>CYBERBORG BODYART</strong><br/>
             Jl.Kemang 1 No.2B<br/>
             Bangka, Mampang Prapatan<br/>
             East Jakarta, DKI<br/>
             Indonesia<br/>
             12730<br/>
             <abbr title="Phone">P:</abbr> (+62) 856-1891-791
           </address>
         </div>
       </div>
     </div>
   );
  }


  render() {
    return (
      <div id="branches" className="branches">
      <h1>Branches</h1>
        <div className="row">
          <div>{this.listOfGoogleLink()}</div>
        </div>
      </div>
    );
  }
};

export default Branches;
