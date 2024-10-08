import React from 'react';
// import Homecss from '../modules/Home.module.css';
import Footer from './Footer';
import LatestEvent from './LatestEvent';
import StudentSaying from './StudentSaying';
const Home = () => {
  return (
    <div>
        <StudentSaying/>
        <LatestEvent/>
        <Footer/>
    </div>
  )
};

export default Home
