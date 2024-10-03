import React from 'react';

export default function Card({ question, answer, imageUrl, revealAnswer, handleReveal }) {
  return (
    <div className="card" onClick={handleReveal} style={{
      backgroundColor: '#ffff',
      width: '30vw',
      height: '50vh',
      minWidth: '500px',
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.33rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(154, 171, 158, 0.8)',
      margin: '2rem',
    }}>
      {!revealAnswer ? (
        <>
          <img src={imageUrl} alt={question} style={{ maxWidth: '100%', height: '200px', marginBottom: '1rem', objectFit: 'cover' }} />
          <p>{question}</p>
        </>
      ) : (
        <p>{answer}</p>
      )}
    </div>
  );
}
