import React from 'react';
import { Icon } from '@iconify/react';
import customStyle2 from "../components/Style/page2.module.css";

const Seminars = () => {
    return (
        <>
            <header className={customStyle2.screen_header}>
                <h1 className={customStyle2.screen_header__title}>
                    Seminars
                </h1>
            </header>
            
            <div className={customStyle2.screen_header__underline}></div>

            <p className={customStyle2.seminar_p}>
                GDSC Kookmin 소속 멤버는<br />
                격주 화요일 19:00 에 세미나를 진행합니다.<br />
                각 세션에서 배운 내용 및 세션 진행상황을 간단히 공유합니다.
            </p>
            <div className={customStyle2.container}>
                <div className={customStyle2.container__box}>
                    <h1 className={customStyle2.box__title}>Show More Seminars</h1>
                    <p className={customStyle2.box__explain}>자신의 경험을 공유하거나<br />기술적인 팁을 공유하는 세미나입니다</p>
                </div>
                <div className={customStyle2.container__box}>
                    <h1 className={customStyle2.box__title}>Open SemonarGDSC Kookmin's EVENT</h1>
                            <p className={customStyle2.box__explain}>
                                Seminar 중 일부 회차는 Open Seminar로 진행하며<br />
                                GDSC 구성원이 아니더라도 누구나<br />Show More Seminar 발표 및 참여가 가능합니다
                                </p>
                </div>
                <div className={customStyle2.container__box}>
                    <h1 className={customStyle2.box__title}>Random Team 모임 GDSC Kookmin’s EVENT</h1>
                    <p className={customStyle2.box__explain}>매 세미나 전에 정해진 인원이 만나서<br />네트워킹을 진행합니다</p>
                </div>
            </div>

            <div class={customStyle2.seminar_previous}>
                <a class={customStyle2.seminar_previous__text} href="https://www.notion.so/jinjae/Archive-43b794d544204eeb95361d68908be05b">📋이전 세미나</a>
            </div>
        </>
    );
};

export default Seminars;