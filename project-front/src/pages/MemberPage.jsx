import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from '../components/Profile';
import Container from "@mui/material/Container";

const MemberPage = () => {
  return (
    <div>
      <Container>
      <img className='member_main_image'src='img/Group54.png'/>
      </Container>
      <div className="num_member">
          <span>2기</span>
          <span> | </span>
          <span>1기</span>
        </div>
        <div className='profiles'>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
        </div>
    </div>
  );
};

export default MemberPage;
