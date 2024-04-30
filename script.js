function searchFlights() {
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    
    const dummyData = [
      { id: 1, airline: 'Example Airways', price: 200 },
      { id: 2, airline: 'Sample Airlines', price: 250 }
    ];
  
    displayResults(dummyData);
  }
  
  function displayResults(data) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';
  
    if (data.length === 0) {
      resultsSection.innerHTML = '<p>No flights found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    data.forEach(flight => {
      const li = document.createElement('li');
      li.textContent = `${flight.airline} - $${flight.price}`;
      ul.appendChild(li);
    });
    resultsSection.appendChild(ul);
  }
  
