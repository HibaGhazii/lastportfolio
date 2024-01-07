import axios from 'axios';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import getInTouch from "../assets/img/contact-img.svg";

const GetInTouch = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zy9svyf', 'template_mrtwqvv', form.current, 'vFvunCKk5AWwNNxaj')
      .then((result) => {
          console.log("message sent");
          window.alert("Message sent successfully!");
          window.location.href = '/';
      }, (error) => {
          console.log(error.text);
          window.alert("Error sending message. Please try again later.");
      });
  };

  // const [FirstName, setFirstName] = useState('');
  // const [LastName, setLastName] = useState('');
  // const [Email, setEmail] = useState('');
  // const [PhoneNumber, setPhoneNumber] = useState('');
  // const [Message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const messages = {FirstName,LastName,Email,PhoneNumber,Message};

  //   axios.post('http://localhost:3000/messages', messages, {
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(() => {
  //     window.open('/','_self');
  //   }).catch((error) => {
  //     console.error('Error sending message: ',error);
  //   })
  // }

  return (
    <div id='Message' className="flex flex-col md:items-center md:flex-row bg-[url('../src/assets/img/footer-bg.png')] bg-cover mt-28 pb-28">
      <div className='md:w-1/2 md:pl-32'>
        <img src={getInTouch} className='w-[400px] h-[400px] md:w-[500px] md:h-[500px]' />
      </div>

      <form ref={form} onSubmit={sendEmail} className='md:w-1/2 md:py-12 py-4 md:pl-16 flex flex-col gap-y-2 text-black'>
        <p className='text-white font-bold text-3xl pb-2 md:pb-6'>Get In Touch</p>
        <div className='flex flex-row'>
          <input type="text" required name="FirstName" placeholder='First Name' className='p-5 h-12 w-[200px] md:w-[270px] mr-1 rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none focus:border-none focus:ring-fuchsia-400'/>
          <input type="text" required name="LastName" placeholder='Last Name' className='p-5 h-12 w-[200px] md:w-[270px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none focus:border-none focus:ring-fuchsia-400'/>
        </div>
        <div className='flex flex-row'>
          <input type="text" name="Email" required placeholder='Email' className='p-5 h-12 w-[200px] md:w-[270px] mr-1 rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none focus:border-none focus:ring-fuchsia-400'/>
          <input type="text" name="PhoneNumber" required placeholder='Phone Number' className='p-5 h-12 w-[200px] md:w-[270px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none focus:border-none focus:ring-fuchsia-400'/>
        </div>
        <div className=''>
          <textarea required name="Message" placeholder='Message' className="px-5 py-3 w-full md:w-[545px] h-[160px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none focus:border-none focus:ring-fuchsia-400" ></textarea>
        </div>
        <button className="w-[110px] p-2 rounded-[8px] font-bold bg-gradient-to-r from-fuchsia-500 to-55106D text-white shadow-md shadow-fuchsia-400">Send</button>
      </form>
    </div>
  )
}

export default GetInTouch;