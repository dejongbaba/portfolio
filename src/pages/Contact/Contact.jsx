import * as React from 'react';
import './Contact.scss';

function Contact(props) {
  return (
    <div className="contact">
      <div className="contact__box">
        <div className="contact__top">
          <div className="left">
            <div className="contact__greeting">Say hello</div>
            <h3 className="contact__title">Let's Work Together</h3>
            <div className="contact__description">
              I’d love to meet up with you to discuss your venture,
              and potential collaborations.
            </div>
          </div>
          <div className="right">
            <div className="contact__preview">img</div>
          </div>
        </div>
        <div className="contact__center">
          <div className="contact__info">
            <div className="contact__info_item">hello@ui8.net</div>
            <div className="contact__info_item">
              4074 Ebert Summit Suite 375 Lake Leonardchester
            </div>
            <div className="contact__info_item">+44 123 654 7890</div>
          </div>
          <div className="contact__form">

          </div>
        </div>
        <div className="contact__bottom">
          <div className="social__card">instagram</div>
          <div className="social__card">Facebook</div>
          <div className="social__card">Twitter</div>
          <div className="social__card">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
