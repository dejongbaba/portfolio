import React from 'react';
import { useState } from 'react';
import './Contact.scss';
import Form from '../../components/Form/Form';
import { useForm } from 'react-hook-form';
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';

function Contact() {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const defaultValues = {
    from_email: '',
    from_name: '',
    message: '',
  };
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    sendEmail(data);
  };

  function sendEmail(data) {
    setLoading(true);
    console.log(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_USER_ID,
    );
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USER_ID,
      )
      .then(
        (result) => {
          console.log('success', result);
          setLoading(false);
          addToast(
            'Email Sent! I will reach out to you personally!',
            { appearance: 'success', autoDismiss: true },
          );
          reset({ from_email: '', from_name: '', message: '' });
        },
        (error) => {
          setLoading(false);
          addToast('An Error occurred trying to send the email!', {
            appearance: 'error',
            autoDismiss: true,
          });
          console.log('error', error);
        },
      );
  }
  return (
    <div className="contact" id="contact">
      <div className="contact__box">
        <div className="contact__top">
          <div className="left">
            <div className="contact__greeting">Say hello</div>
            <h3
              className="contact__title"
              data-aos="animation-translate-y"
              data-aos-delay="200"
            >
              Let's Work Together
            </h3>
            <div
              className="contact__description"
              data-aos="animation-translate-y"
              data-aos-delay="500"
            >
              I’d love to meet up with you to discuss your venture,
              and potential collaborations.
            </div>
            <div
              className="contact__center"
              data-aos="animation-translate-y"
              data-aos-delay="1000"
            >
              <div className="contact__info">
                <div className="contact__info_item">
                  <i className="fa fa-2x fa-at" />
                  <span>agunbiade.adedeji94@gmail.com</span>
                </div>
                <div className="contact__info_item">
                  <i className="fa fa-2x fa-home" />
                  <span>80, bola street, ebute metta, lagos</span>
                </div>
                <div className="contact__info_item">
                  <i className="fa fa-2x fa-address-book" />
                  <span>+234 816 830 0320</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contact__preview">
              <Form onSubmit={handleSubmit(onSubmit)}>
                {errors.name && (
                  <ErrorLabel error={'name is required'} />
                )}
                <Form.Input
                  name={'from_name'}
                  type={'text'}
                  ref={register({
                    required: {
                      message: 'Name is required',
                      value: true,
                    },
                  })}
                  placeHolder={'name'}
                />
                {errors.email && (
                  <ErrorLabel error={'Email is required!'} />
                )}
                <Form.Input
                  ref={register({
                    required: true,
                    pattern: {
                      message: 'input correct email',
                      // eslint-disable-next-line no-useless-escape
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    },
                  })}
                  name={'from_email'}
                  type={'email'}
                  placeHolder={'email'}
                />

                <Form.TextArea
                  name={'message'}
                  ref={register}
                  placeHolder={'message'}
                />
                <Form.Button
                  loading={loading}
                  text={'Send'}
                  type={'submit'}
                  className="contact__button"
                />
              </Form>
            </div>
          </div>
        </div>

        <div className="contact__bottom w-100">
          <a
            href="http://www.instagram.com/lucciddev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-instagram" />
          </a>
          <a
            href="https://web.facebook.com/lucciddev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-facebook" />
          </a>
          <a
            href="https://twitter.com/lucciddev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/adedeji-agunbiade-b27606165/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-linkedin" />
          </a>
          <a
            href="https://github.com/dejongbaba"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
