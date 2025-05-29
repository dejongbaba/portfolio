import { motion } from 'framer-motion';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Section } from '../UI/Section';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend or email service
    alert('Form submitted successfully! (This is just a demo)');
  };

  return (
    <Section id="contact" className="relative">
      <div className="mb-12">
        <motion.p
          className="text-xl mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Looking to start a new project or just want to say hi?
          Starting an email and trying to keep it very clear, clean
          and to the point.
        </motion.p>

        <motion.p
          className="text-xl mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           Send me an email at{' '}
          <a
            href="mailto:agunbiade.adedeji94@gmail.com"
            className="text-foreground underline font-medium transition-colors hover:text-primary"
          >
              agunbiade.adedeji94@gmail.com
          </a>
          {' '}or book a conversation with me{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/agunbiade-adedeji94/15min"
            className="text-foreground underline font-medium transition-colors hover:text-primary"
          >
            here
          </a>
        </motion.p>
      </div>

      {/* <div className="w-full max-w-3xl">
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="mb-6 md:mb-0">
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  className="w-full px-3 py-3 border border-border bg-transparent text-foreground transition-colors focus:outline-none focus:border-foreground"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-2 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-3 py-3 border border-border bg-transparent text-foreground transition-colors focus:outline-none focus:border-foreground"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-2 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm">
                Subject *
              </label>
              <select
                id="subject"
                {...register('subject', {
                  required: 'Please select a subject',
                })}
                className="w-full px-3 py-3 border border-border bg-transparent text-foreground appearance-none transition-colors focus:outline-none focus:border-foreground cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right-[0.75rem] bg-center"
              >
                <option value="">Select...</option>
                <option value="Project Inquiry">
                  Project Inquiry
                </option>
                <option value="Collaboration">Collaboration</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && (
                <span className="text-red-500 text-sm mt-2 block">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm">
                Message *
              </label>
              <textarea
                id="message"
                {...register('message', {
                  required: 'Message is required',
                })}
                className="w-full px-3 py-3 border border-border bg-transparent text-foreground min-h-[150px] resize-y transition-colors focus:outline-none focus:border-foreground"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-2 block">
                  {errors.message.message}
                </span>
              )}
            </div>

            <Button type="submit" size="lg">
              Send
            </Button>
          </form>
        </motion.div>
      </div> */}
    </Section>
  );
};

export default Contact;
