import React from 'react';
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </button>
      </div>
    );
  }
}

export default HomePage;