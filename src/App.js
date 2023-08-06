import './App.css';
import CardStart from './CardStart.js';
import CardFinished from './CardFinished.js';
import React, {useState} from 'react';

function App() {
  const [submittedRating, setSubmittedRating] = useState('');

  const handleSubmit = (rating) => {
    setSubmittedRating(rating);
  }; 

  return (
    <div>
      {!submittedRating ? <CardStart onSubmit={handleSubmit} /> : <CardFinished rating={submittedRating} />}
    </div>
  );
}

export default App;
