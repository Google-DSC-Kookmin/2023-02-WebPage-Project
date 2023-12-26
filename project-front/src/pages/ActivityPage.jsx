import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import textStyle from "../components/Style/text.module.css";
import customStyle1 from "../components/Style/styles.module.css";

import Seminars from "../components/Seminars";
import Sessions from "../components/Sessions";
import Expect from "../components/Expect";

const ActivityPage = () => {
  return (
      <>
          <div className={customStyle1.greenBox}>
              <div className={customStyle1.act}>Activities</div>
              <nav className={customStyle1.nav1}>
                  <ul className={customStyle1.nav__linkE}>
                      <a className={customStyle1.nav__linkS} href="seminars.html">
                          Seminars
                      </a>
                      <a className={customStyle1.nav__linkS} href="sessions.html">
                          Sessions
                      </a>
                  </ul>
              </nav>
              <nav className={customStyle1.nav2}>
                  <ul className={customStyle1.nav__linkS}>
                      <a className={customStyle1.nav__linkE} href="expect.html">
                          Expected Event
                      </a>
                  </ul>
              </nav>
          </div>

          <Seminars />
          <Sessions />
          <Expect />
      </>
  );
};

export default ActivityPage;



