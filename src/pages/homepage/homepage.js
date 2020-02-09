import React from 'react';
import Directory from '../../components/directory/directory';


import './homepage.scss';

const HomePage = () => (
    <div className="homepage">
      <h1>Welcome to the Store!</h1>
      <Directory /> {/*This calls the directory component to render the menu that you can choose from */}
    </div>
  );
  
  export default HomePage;