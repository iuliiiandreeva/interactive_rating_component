import React from 'react';
import { useState } from 'react';
import star from './images/icon-star.svg';
import './CardStart.css';


function CardStart({onSubmit}) {
    const [number, setNumber] = useState('');
    const [submit, setSubmit] = useState('');
    const handleClick = (event) => {
        setNumber(event.target.textContent);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!number) {
            alert('Please enter a number'); // TODO: create error message
        }
        onSubmit(number);
        
    };
    return (
        <div className="card-start">
            <img src={star} alt="star icon" className="star"/>
            <h1 className="header">
            How did we do?
            </h1>
            <p className="abstract">
            Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
            <div className="number-btns">
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CardStart;