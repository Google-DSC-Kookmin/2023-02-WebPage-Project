import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from '../components/Profile';
import s from "../components/Style/memberPage.module.css";

const MemberPage = () => {
  return (
    <div>
      <img className={s.member_main_image} src='img/Group54.png'/>
      <div className={s.num_member}>
          <span>2기</span>
          <span> | </span>
          <span>1기</span>
        </div>
        <div className={s.profiles}>
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
