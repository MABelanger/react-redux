import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>HomePage</div>
        <Link to="about" ClassName="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
