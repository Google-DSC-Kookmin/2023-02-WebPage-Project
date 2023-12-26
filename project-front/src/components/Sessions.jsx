import React from 'react';

import customStyle2 from "../components/Style/page2.module.css";

const Sessions = () => {
    return (
        <>
            <header className={customStyle2.screen_header}>
                <h1 className={customStyle2.screen_header__title}>Sessions</h1>
                <div className={customStyle2.screen_header__icon}>
                    <span><iconify-icon icon="mdi:book-multiple" /></span>
                </div>
            </header>
            
            <div className={customStyle2.screen_header__underline} />
            
            <div className={customStyle2.screen_header}>
                <div className={customStyle2.screen_header__text}>
                    <a className={customStyle2.screen_header__text_bold}>GDSC Kookmin Sessions List</a>
                    <a className={customStyle2.screen_header__text_thin}>
                        기술 파트별 소속 구성원이 매주 정해진 시간에 모여 세션을 진행합니다.
                        <br /> 각 세션은 Seminar에 참여 시 진행 상황이나 새로 배운 내용을 간단히
                        공유합니다.
                    </a>
                </div>
            </div>
            <div className={customStyle2.session_circle}>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}>FRONT-END</a>
                </div>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}>AI</a>
                </div>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}>PROJECT</a>
                </div>
            </div>
            <div className={customStyle2.session_repo}>
                <a className={customStyle2.session_repo__text}>Repository</a>
                <span className={customStyle2.session_repo__icon}>
                    <iconify-icon icon="ph:mouse-simple-bold" />
                </span>
            </div>
            <div className={customStyle2.session_year}>
                <a className={customStyle2.session_year__text} href="#">2022 - 2023</a>
                <a className={customStyle2.session_year__text} href="#">2023 - 2024</a>
            </div>
        </>
    )
};

export default Sessions;