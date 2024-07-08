import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file
import Navbar from './Navbar'; // Adjust path as necessary
import Footer from './Footer'; // Adjust path as necessary
//import headerImage from '../assets/contact-header.jpg'; // Adjust path and image as necessary
import { useEffect } from 'react';

const useDocumentTitle = title => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
const Contact = () => {
    useDocumentTitle('Contact Us');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement what happens when the form is submitted
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="contact-header">
                
                <h1>Contact Us</h1>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Please select a subject</option>
                    <option value="query">Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="book-sug">Book suggestion</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                </select>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
            <Footer />
        </>
    );
};

export default Contact;