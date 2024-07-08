import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';


const useDocumentTitle = title => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
const Home = () => {
    useDocumentTitle("Book Chasers");
    const testimonials = [
        { id: 1, text: "This book club has changed my reading habits for the better!", author: "Jane Doe" },
        { id: 2, text: "I've discovered so many amazing books through this club.", author: "John Smith" },
        { id: 3, text: "The community is incredibly supportive and insightful.", author: "Alice Johnson" },
        { id: 4, text: "I love the diverse selection of books we cover.", author: "Bob Brown" },
        { id: 5, text: "Every meeting is a new adventure in literature.", author: "Carol White" },
        { id: 6, text: "Joining was the best decision I've made this year!", author: "Dave Wilson" }
    ];

    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="intro-section">
                 
                  <img src={require('../assets/pplmeeting.png')} alt="Intro" className="intro-image" />
                    <div className="intro-text">
                        <h2>Welcome to Book Chasers</h2>
                        <p>Join our community of passionate readers to explore diverse genres, share discussions, and enjoy the joy of reading together. We're excited to have you with us.
                            Happy reading!</p>
                        <p className='important-p'>Every last Wednesday of the month! <br />
                            at 5:00 PM in Ottawa public library 2nd floor.
                        </p>
                        <button className="join-button">Join Us</button>
                    </div>
                </div>
                <h2 className='up'>Book of the Month:</h2>
                <section className="book-of-the-month-section">
                    <div className="book-of-the-month-content">
                        <img src={require('../assets/atomic.jpg')} alt="Book of the Month" className="book-image" />
                        <div className="book-description">
                            <p>"Explore 'Atomic Habits' by James Clear with us this month—a guide on how tiny changes can dramatically improve your life. Join our discussion to learn how small habits can lead to big successes.
                                Don't miss this opportunity to transform your daily routines and achieve lasting growth!"</p>
                        </div>
                    </div>
                </section>
                <h2 className='up'>Upcoming Events:</h2>
                <section className='upcoming-events'>
                    <div className='upcoming-events-content'>
                        <h3>July Book Discussion</h3>
                        <p>
                            Date: July 15, 2024 <br />
                            Book: "How to Read a Book" by Mortimer J. Adler & Charles van Doran <br />
                            Description: A comprehensive guide to improving reading skills and understanding literature deeply. This classic work offers practical advice on becoming a more thoughtful and analytical reader.
                        </p>
                    </div>
                </section>
                <section className="how-to-join">
                    <h2 className='up'>How to Join Us</h2>
                    <h3>1. Sign up:</h3>
                    <p> - Click the "Join Now" button below to fill out our quick membership form.</p>
                    <h3>2. Join Discussion:</h3>
                    <p> - Receive a welcome email with details on upcoming events and book discussions.</p>
                    <h3>3. Stay updated:</h3>
                    <p>- Follow us on social media and subscribe to our newsletter for the latest update and book recommendations.</p>
                    <button>Join Us</button>
                </section>
                <h2 className='up'>Testimonials</h2>
                <div className="testimonials">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial">
                            <p className="testimonial-text">{testimonial.text}</p>
                            <p className="testimonial-author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;
