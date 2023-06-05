import React from 'react';

{/* initalize car array to hold car details */}
const cars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2021,
    price: '$25,000',
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    price: '$22,000',
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Mustang',
    year: 2020,
    price: '$40,000',
  },
];

function App() {
  return (
    <div>
      {/* header to show title */}
      <h1>Car Showroom</h1>
      {/* list to display car details from above array */}
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>{car.brand} {car.model}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
          </li>
        ))}
      </ul>
      {/* Button to add a new car and show alert */}
      <button onClick={() => alert('Add new car')}>Add new car</button>
    </div>
  );
}

export default App;
