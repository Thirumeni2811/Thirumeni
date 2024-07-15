import './Contact.css'
import './Content.css'
import React, { useRef } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'reactstrap';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('sendEmail function called'); // Debug log

        emailjs.sendForm('service_i3cr4h4', 'Thirumeni', form.current, 'GKdZp4bEf5pU6VOOp')
        .then(() => {
            console.log('Email sent successfully'); // Debug log
            toast.success('Message sent successfully', {
            position: 'top-center'
            });
        }, (error) => {
            console.error('Email send failed', error.text); // Debug log
            toast.error(`FAILED: ${error.text}`, {
            position: 'bottom-center'
            });
        });
    };

  return (
    <section className='Contact' id='Contact'>
      <div className='internContainer'>
        <div className='internTopic'>
          <h2>Contact</h2>
        </div>
        <div className='flex py-8 px-20 mx-3 justify-center xSmall Small Medium Large xLarge'>
          {/* Contact Details */}
          <div className='Details bg-[#EDF7FA] rounded-l-2xl p-12 xSmall smDetails mdDetails lgDetails xlDetails'>
            <div className='call flex gap-3 items-center my-2'>
              <div className='icon bg-[#ff6464] text-[#EDF7FA] items-center justify-center w-10 h-10 rounded-3xl text-2xl'>
                <PhoneIcon />
              </div>
              <div className='Name'>
                <p className='text-left text-xl font-semibold mb-0'>Call me</p>
                <a href='tel:+919566748124' className='no-underline text-[#3c3b3bcc] hover:text-blue-700 font-semibold'>
                  (+91) 9566748124
                </a>
              </div>
            </div>
            <div className='Email flex gap-3 items-center my-2'>
              <div className='icon bg-[#ff6464] text-[#EDF7FA] items-center justify-center w-10 h-10 rounded-3xl text-2xl'>
                <MailOutlineIcon />
              </div>
              <div className='Name text-left'>
                <p className='text-left text-xl font-semibold mb-0'>E-mail</p>
                <a href='mailto:thirumeni948@gmail.com' target='_blank' rel='noopener noreferrer' className='no-underline text-[#3c3b3bcc] hover:text-blue-700 font-semibold'>
                  thirumeni948@gmail.com
                </a><br />
                <a href='mailto:thirumeni948@gmail.com' target='_blank' rel='noopener noreferrer' className='no-underline text-[#3c3b3bcc] hover:text-blue-700 font-semibold'>
                  thirumenimallieswaran@gmail.com
                </a>
              </div>
            </div>
            <div className='Loaction flex gap-3 items-center my-2'>
              <div className='icon bg-[#ff6464] text-[#EDF7FA] items-center justify-center w-10 h-10 rounded-3xl text-2xl'>
                <LocationOnIcon />
              </div>
              <div className='Name'>
                <p className='text-left text-xl font-semibold mb-0'>Location</p>
                <a href='https://maps.app.goo.gl/6KbnUMviN1UfFD6M7' target='_blank' rel='noopener noreferrer' className='no-underline text-[#3c3b3bcc] hover:text-blue-700 font-semibold mr-3'>
                  Tiruppur
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-[#d3e9f0] rounded-r-2xl p-12 px-24 xSm smForm mdForm lgForm xlForm'>
            <Form ref={form}
              onSubmit={sendEmail}>
                <Box
                    component="div"
                    noValidate
                    autoComplete="off"
                    className='flex flex-col m-1 w-65ch xSm'
                >                    
                  <TextField
                        id="name"
                        label="Name"
                        variant="filled"
                        type="text"
                        name="name"
                        required
                        className="my-2"
                    />
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="filled"
                        type="email"
                        name="email"
                        required
                        className="my-2"
                    />
                    <TextField
                        id="subject"
                        label="Subject"
                        variant="filled"
                        type="text"
                        name="subject"
                        required
                        className="my-2"
                    />
                    <TextField
                        id="message filled-description"
                        label="Description"
                        variant="filled"
                        multiline
                        rows={6}
                        name="message"
                        required
                        className="my-2"
                    />
                </Box>
                <div className='intro text-left button smForm mdForm lgForm xlForm'>
                  <Button type="submit">
                    Send message
                    <SendIcon className='ml-2' />
                  </Button>
                </div>
            </Form>       
                        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
