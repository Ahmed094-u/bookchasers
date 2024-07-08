import React from 'react';
import './Explore.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import bookOfTheMonthImage from '../assets/atomic.jpg'; // Adjust path as necessary
import { useEffect } from 'react';

// Custom hook to set the title
const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
const Explore = () => {
    useDocumentTitle("Explore");
    const bookDetails = {
        title: "Atomic habits",
        author: "James Clear",
        summary: "Explore 'Atomic Habits' by James Clear with us this month—a guide on how tiny changes can dramatically improve your life. Join our discussion to learn how small habits can lead to big successes. Don't miss this opportunity to transform your daily routines and achieve lasting growth!",
        awards: ["The #1 New York Times bestseller."],
        imageUrl: bookOfTheMonthImage, // This should be an actual import if you use Webpack or similar
        readingGuideUrl: "/reading-guide/the-great-gatsby", // Placeholder URL
        discussionUrl: "/forum/the-great-gatsby" // Placeholder URL
    };

    return (
        <>
            <Navbar />
            <div className="explore-page">
                <section className="book-of-the-month">
                    <h2>Book of the Month</h2>
                    <img src={bookDetails.imageUrl} alt={`Cover of ${bookDetails.title}`} />
                    <div className="botm-text">
                    <h3>{bookDetails.title} by {bookDetails.author}</h3>
                    <p>{bookDetails.summary}</p>
                    <ul>
                        {bookDetails.awards.map(award => <li key={award}>{award}</li>)}
                    </ul>
                    <a href={bookDetails.readingGuideUrl} className="btn">Download Reading Guide</a>
                    <a href={bookDetails.discussionUrl} className="btn">Join the Discussion</a>
                    </div>
                </section>
                <section className="book-recommendations">
    <h2>Book Recommendations</h2>
    <div className="recommendation-categories">
        <div className="category">
            <h3>Staff Picks</h3>
            <ul>
                <li>"1984" by George Orwell</li>
                <li>"To Kill a Mockingbird" by Harper Lee</li>
            </ul>
        </div>
        <div className="category">
            <h3>Member Favorites</h3>
            <ul>
                <li>"Pride and Prejudice" by Jane Austen</li>
                <li>"The Catcher in the Rye" by J.D. Salinger</li>
            </ul>
        </div>
        <div className="category">
            <h3>New Releases</h3>
            <ul>
                <li>"The Midnight Library" by Matt Haig</li>
                <li>"Where the Crawdads Sing" by Delia Owens</li>
            </ul>
        </div>
    </div>
</section>

<section className="book-reviews">
    <h2>Book Reviews</h2>
    <div className="review-list">
        <div className="review">
            <h4>"The Great Gatsby" - Reviewed by Emily</h4>
            <p>A poignant exploration of love, wealth and social change in Jazz Age America. Truly a masterpiece!</p>
        </div>
        <div className="review">
            <h4>"1984" - Reviewed by John</h4>
            <p>Orwell's dystopian vision is chillingly relevant today, highlighting the dangers of totalitarianism and surveillance.</p>
        </div>
    </div>
</section>

<section className="interactive-elements">
    <h2>Interactive Elements</h2>
    <div className="interactions">
        <div className="quiz">
            <h3>Monthly Book Quiz</h3>
            <p>Test your knowledge on this month's book and previous reads!</p>
            <button>Start Quiz</button>
        </div>
        <div className="poll">
            <h3>Vote for Next Month's Book</h3>
            <p>Have your say in our next reading selection!</p>
            <button>Vote Now</button>
        </div>
    </div>
</section>

<section className="upcoming-events">
    <h2>Upcoming Events & Meetups</h2>
    <div className="event">
        <h3>Live Author Q&A with George R.R. Martin</h3>
        <p>Date: September 15th | Time: 7 PM EST | Location: Zoom</p>
        <button>RSVP Now</button>
    </div>
</section>

<section className="reading-challenges">
    <h2>Reading Challenges</h2>
    <p>Join our 2024 Reading Challenge - Read 50 books this year and get featured on our leader board!</p>
    <button>Join the Challenge</button>
</section>

<section className="resources-for-readers">
    <h2>Resources for Readers</h2>
    <ul>
        <li><a href="#">How to Analyze a Novel</a></li>
        <li><a href="#">Understanding Poetry</a></li>
    </ul>
</section>

            </div>
            <Footer />
        </>
    );
};

export default Explore;
