import React, { useState } from 'react';
import '../assets/form.css'; // Import your CSS file
import Contact from '../assets/contact (1).png'
import axios from 'axios'
const MyForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    phone_number: '',
    message: '',
    subject: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', formData.name);
    formdata.append('email', formData.email);
    formdata.append('phone_number', formData.phone_number);
    formdata.append('subject', formData.subject);
    formdata.append('message', formData.message);
    formdata.append('company_name', formData.company_name);

    await axios.post(`https://assispanel.com/api/contact_us`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      setFormData({
        company_name: '',
        email: '',
        phone_number: '',
        message: '',
        subject: '',
        name: '',
      })
    }).catch((err) => console.log(err))


  }
  return (
    <div className='form-container'>
      <div className='imag-container'>
        <img src={Contact} alt='contact' />

      </div>
      <form className="my-form" onSubmit={handleSubmit}>
        <label htmlFor="company_name">
          Company Name:
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Enter your company name"
          />
        </label>
        <br />

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <br />

        <label htmlFor="phone_number">
          Phone Number:
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </label>
        <br />

        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
          />
        </label>
        <br />

        <label htmlFor="subject">
          Subject:
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
          />
        </label>
        <br />

        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
