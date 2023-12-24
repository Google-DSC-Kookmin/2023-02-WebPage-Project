import React from 'react';

import customStyle2 from "../components/Style/page2.module.css";

const Seminars = () => {
    return (
        <>
            <header className={customStyle2.screen_header}>
                <h1 className={customStyle2.screen_header__title}>Seminars</h1>
                <div className={customStyle2.screen_header__icon}>
                    <span><iconify-icon icon="mdi:human-male-board"></iconify-icon></span>
                </div>
            </header>
            <div className={customStyle2.screen_header__underline}></div>

            <div className={customStyle2.seminar_box1}>
                <div className={customStyle2.seminar_box__green}>
                    <h1 className={customStyle2.seminar_box__word}>Show More</h1>
                    <h1 className={customStyle2.seminar_box__word}>Seminars</h1>
                    <div className={customStyle2.seminar_box__text1}>
                        <a className={customStyle2.seminar_box__texta}>자신의 경험을 공유하거나</a>
                        <a className={customStyle2.seminar_box__texta}>기술적인 팁을 공유하는 세미나입니다</a>
                    </div>
                </div>
                <div className={customStyle2.seminar_box__green}>
                    <h1 className={customStyle2.seminar_box__word}>Open SeminarGDSC</h1>
                    <h1 className={customStyle2.seminar_box__word}>Kookmin’s EVENT</h1>
                    <div className={customStyle2.seminar_box__text1}>
                        <a className={customStyle2.seminar_box__texta}>Seminar 중 일부 회차는</a>
                        <a className={customStyle2.seminar_box__texta}>Open Seminar로 진행합니다</a>
                    </div>
                    <div className={customStyle2.seminar_box__text1}>
                        <a className={customStyle2.seminar_box__texta}>GDSC 구성원이 아니더라도</a>
                        <a className={customStyle2.seminar_box__texta}>누구나 세미나에 참여하여</a>
                        <a className={customStyle2.seminar_box__texta}>Show More Seminar 발표도 가능합니다</a>
                    </div>
                </div>
            </div>
            <div className={customStyle2.seminar_box2}>
                <div className={customStyle2.seminar_box__green}>
                    <h1 className={customStyle2.seminar_box__word}>Random Team 모임</h1>
                    <h1 className={customStyle2.seminar_box__word}>GDSC Kookmin’s EVENT</h1>
                    <div className={customStyle2.seminar_box__text1}>
                        <a className={customStyle2.seminar_box__texta}>매 세미나 전에 정해진 인원이 만나서</a>
                        <a className={customStyle2.seminar_box__texta}>네트워킹을 진행합니다</a>
                    </div>
                </div>
            </div>

            <div class={customStyle2.seminar_previous}>
                <a class={customStyle2.seminar_previous__text} href="#">📋이전 세미나 모아보기</a>
            </div>
        </>
    );
};

export default Seminars;