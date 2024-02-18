import React from 'react';
import { Icon } from '@iconify/react';
import customStyle2 from "../components/Style/page2.module.css";

const Sessions = () => {
    return (
        <>
            <header className={customStyle2.screen_header}>
                <h1 className={customStyle2.screen_header__title}>
                    Sessions
                </h1>
            </header>
            
            <div className={customStyle2.screen_header__underline} />
            <div className={customStyle2.session_header}>
                <div className={customStyle2.session_header__text}>
                    <a className={customStyle2.session_header__text_bold}>GDSC Kookmin Sessions List</a>
                    <a className={customStyle2.session_header__text_thin}>
                        기술 파트별 소속 구성원이 매주 정해진 시간에 모여 세션을 진행합니다.
                        <br /> 각 세션은 Seminar에 참여 시 진행 상황이나 새로 배운 내용을 간단히
                        공유합니다.
                    </a>
                </div>
            </div>
            <div className={customStyle2.session_circle}>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}href="https://www.notion.so/jinjae/Frontend-fce3da30f7ae4b44a730bd97d74d065f">FRONT-END</a>
                </div>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}href="https://www.notion.so/jinjae/AI-fd44856b6cbf43d1a9c588466fa01595">AI</a>
                </div>
                <div className={customStyle2.session_text}>
                    <a className={customStyle2.session_text__a}href="https://www.notion.so/jinjae/Project-c70c4ff20fb44b9c8a1d55a527a929ab">PROJECT</a>
                </div>
            </div>
            <div className={customStyle2.session_repo}>
                <a className={customStyle2.session_repo__text}>Repository</a>
            </div>
            <div className={customStyle2.session_year}>
                <a className={customStyle2.session_year__text} href="https://www.notion.so/jinjae/Archive-43b794d544204eeb95361d68908be05b">2022 - 2023</a>
                <a className={customStyle2.session_year__text} href="https://www.notion.so/jinjae/GDSC-Kookmin-09465fd719fe4eb1b8a5ebdbae2b4e63">2023 - 2024</a>
            </div>
        </>
    )
};

export default Sessions;