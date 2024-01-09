import React from 'react';
import { Icon } from '@iconify/react';
import customStyle2 from "../components/Style/page2.module.css";

const Expect = () => {
    return (
        <>
            <header className={customStyle2.screen_header}>
                <h1 className={customStyle2.screen_header__title} style={{ marginLeft: 110 }}>
                    Expected Events
                </h1>
            </header>
            <div className={customStyle2.screen_header__underline} />
            <div className={customStyle2.expect_text}>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>GDSC Korea Job Fair X Wanted</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        Google 과 Wanted 가 함께 주관하는 Job Fair 행사입니다.
                    </h1>
                </div>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>GDSC Devfest</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        다양한 기술 이벤트를 즐기며, GDG 현업 개발자와 네트워킹할 수 있는
                        행사입니다.
                    </h1>
                </div>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>타대학과의 연합 해커톤, 컨퍼런스</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        타 대학과 연합하여 무박 해커톤, 혹은 컨퍼런스 등을 진행하는 Chapter 간의
                        연합 행사입니다.
                    </h1>
                </div>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>Google Korea Community Summit</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        Google 내 모든 커뮤니티가 한 자리에 모일 수 있는 행사입니다.
                    </h1>
                </div>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>GDSC Korea Networking Day</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        수많은 GDSC 졸업생과 현 멤버가 함께 어우러지는 행사입니다.
                    </h1>
                </div>
                <div>
                    <h1 className={customStyle2.expect_text__bold}>Solution Challenge</h1>
                    <h1 className={customStyle2.expect_text__thin}>
                        Google DSC에서 매년 주최하는 국제 대회로,
                        <br /> UN에서 제안한 ‘17가지 지속 가능한 개발 목표’를 해결하기 위한
                        학생들의 개발 Challenge 입니다.
                    </h1>
                </div>
            </div>
        </>

    );
}

export default Expect;