import React from 'react';
import illustration from './images/illustration-thank-you.svg';
import './CardFinished.css';

function CardFinished({ rating }) {
    return (
        <div className="card-finished">
            <img src={illustration} alt="illustration thank you" className="illustration"/>
            <div className="selected-rating">
                You selected {rating} out of 5
            </div>
            <h1>Thank you!</h1>
            <p> We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
        </div>
    )
}

export default CardFinished;