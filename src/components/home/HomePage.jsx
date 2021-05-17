import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Recaura</h1>
        <div>
          <h2>Who Drinks</h2>
        </div>
        <button>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </button>
      </div>
    );
  }
}

export default HomePage;
