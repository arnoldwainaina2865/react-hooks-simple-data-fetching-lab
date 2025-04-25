import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDogImageUrl(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        dogImageUrl && <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;