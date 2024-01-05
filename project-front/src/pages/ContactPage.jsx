import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import style from "../components/Style/page2.module.css";

const ContactPage = () => {
  return (
    <div className={style.bx}>
      <div className={style['bx-graybx']}>
        <a className={style['bx-graybx-apply']}>지원하기</a>
      </div>
      <a className={style['bx-word1']}>GDSC Kookmin 에 궁금한 점이 있으시면 아래 메일로 문의 주시기 바랍니다.</a>
      <a className={style['bx-word2']}>
        <iconify-icon icon="ic:outline-email"></iconify-icon>
        gdsc.kookmin@gmail.com
      </a>

      <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </div>
  );
};

export default ContactPage;


