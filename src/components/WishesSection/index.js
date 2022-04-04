import React from 'react';
import WishesContainer from './WishesContainer';

function WishesSection() {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Accommodations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesContainer />
            </div>
            <h4 className='customMessage'> Note: Accommodations have been booked as per communicated, please inform us atleast 2 weeks in advance in-case you need help or bookings</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishesSection;
