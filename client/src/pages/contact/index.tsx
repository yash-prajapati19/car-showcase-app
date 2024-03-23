import React from 'react';
import qrImage from '../../images/logos/qr.png';

function index() {
  return (
    <section className='contact'>
      <h1>Contact Us</h1>
      <div className='contact-items'>
        <div>
          <i className='far fa-comments' />
          <h3>General Enquiries / Feedback</h3>
          <span />
          <h1>1-800-65-5366</h1>
          <div>8.00am - 5.00pm (Mon - Sat)</div>
          <a href='support@carsmail.com'>support@carsmail.com</a>
        </div>
        <div>
          <i className='fab fa-whatsapp' />
          <h3>Chat with us directly</h3>
          <span />
          <div className='scan-me'>
            <img src={qrImage} alt='Scan Me' />
            <div>
              <h4>Whatsapp ID</h4>
              <a href='tel:+496170961709'>+496170961709</a>
            </div>
          </div>
        </div>
        <div>
          <i className='far fa-handshake' />
          <h3>Opportunity</h3>
          <span />
          <h4>DealerShip</h4>
          <a href='mailto:carsmail@gmail.com'>carsmail@gmail.com</a>
          <h4>Collaborations / Partnerships</h4>
          <a href='mailto:lautaroef@gmail.com'>mailto:lautaroef@gmail.com</a>
        </div>
        <div>
          <i className='fas fa-map-marker-alt' />
          <h3>Corporate Office Address</h3>
          <span />
          <h4>Cars - Office</h4>
          <p>
            The lorem ipsus is a nice way to fill space so i don't think too much here.
          </p>
          <a href='tel:+54-525-436-5200'>+54-525-436-5200</a>
        </div>
      </div>
    </section>
  );
}

export default index;
