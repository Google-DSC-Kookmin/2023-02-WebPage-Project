import React from 'react';
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";

import "../components/Style/box.css";
import "../components/Style/text.css";

const MainPage = () => {
    return (
    <>
        <div className={"text-center"} style={{ textAlign: "center", marginBottom: "10vh" }}>
            <img src={"img/Logo.png"} style={{ width: "30vw" }} className={"text-center"} />
            <h1 style={{color: "#000"}}>Google Developer Student Club</h1>
            <h2>Kookmin University</h2>
        </div>

        <div className="box box_left" id="box_1">
            <Container>
                <Grid container>
                    <Grid xs={2} md={4}/>
                    <Grid xs>
                        <p className={"mp start"}>
                            💡주도적인 학습을 통해 모두가 함께 성장해나가고
                            <br />
                            모두가 주인이 되는 대학생 개발자 모임
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={2} md={4}/>
                    <Grid xs>
                        <p className={"mp start"}>
                            💡공유의 가치와 다양성의 가치를 지향하고
                            <br />
                            긍정적인 영향의 선순환이 일어나는 개발자 커뮤니티
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <div className="box box_right" id="box_2">
            <Container>
                <h1 className={"mp sh1"}>Google Developer Student Clubs (GDSC)?</h1>
                <p className={"mp"}>
                    개발 및 사회적 문제에 관심 있는 학생들을 위한
                    <br />
                    대학교 개발자 커뮤니티 그룹으로
                    <br />
                    Google Developers가 지원하고 있습니다.
                </p>
                <p className={"mp"}>
                    GDSC 에서는 학생 개발자들이 성장할 수 있도록
                    <br />
                    전세계의 GDSC Chapter 교류 기회, Google의 이벤트 참여,
                    <br />
                    현업 엔지니어와의 만남 등 다양한 기회를 제공하고
                    <br />
                    역량을 높이도록 돕고 있습니다.
                </p>
                <p className={"mp start"}>
                    23-24에는 전 세계 110+개국에서 주최되고 있으며,
                    <br />
                    국내에서는 36개의 대학이 GDSC의 Chapter로 활동하고 있습니다.
                </p>
            </Container>
        </div>
        <div className="box box_right" id="box_3">
            <Container>
                <a href="/">
                    <Grid container>
                        <Grid md={1} xs={2}>
                            <img src="/img/clip.png"/>
                        </Grid>
                        <Grid style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <p className={"mp start last underLine"}>
                                Google Developers Korea GDSC
                            </p>
                        </Grid>
                    </Grid>
                </a>
            </Container>
        </div>
        <div className="box box_left" id="box_4">
            <Container>
                <Grid container>
                    <Grid xs={2} md={4}/>
                    <Grid xs>
                        <Grid container>
                            <Grid md={2.5} xs={4}>
                                <img src="/img/kmulogo.png" />
                            </Grid>
                            <Grid style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <h1 className={"mp sh2"}>
                                    GDSC_Kookmin?
                                </h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={2} md={4}/>
                    <Grid xs>
                        <p className={"mp"}>
                            GDSC Kookmin University Chapter은
                            <br />
                            지난 1기 활동 기간(2023 - 2024) 13회의 Seminar,
                            <br />
                            4개의 Session, 2개의 Study를 진행하였고,
                            <br />
                            GDSC의 꽃으로 불리는 Solution Challenge 공모전 행사에
                            <br />
                            3개의 팀이 참여하였습니다.
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={2} md={4}/>
                    <Grid xs>
                        <p className={"mp last"}>
                            GDSC Kookmin University Chapter 는<br />
                            현재 2기 활동을 진행하고 있으며,
                            <br />
                            3개의 Session 외에도 다양한 행사가 예정되어 있습니다.
                            <br />
                            모두가 주인이 되는 대학생 개발자 모임
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <div className="box box_right" id="box_5">
            <Container>
                <h1 className={"mp sh3"}>Vision</h1>
                <p className={"mp"}>
                    💡 주도적인 학습을 통해 모두가 함께 성장해나가고
                    <br />
                    모두가 주인이 되는 대학생 개발자 모임
                </p>
                <p className={"mp"}>
                    💡 공유의 가치와 다양성의 가치를 지향하고
                    <br />
                    긍정적인 영향의 선순환이 일어나는 개발자 커뮤니티
                </p>
                <h1 className={"mp sh3"}>Culture</h1>
                <p className={"mp"}>
                    🤝 자유롭고 수평적인 소통 문화를 지향합니다
                    <br />
                    🔥 적극적인 커뮤니티 문화를 지향합니다
                </p>
                <h1 className={"mp sh3"}>Code of Conduct</h1>
                <p className={"mp last"}>
                    🔴 Be nice
                    <br />
                    서로를 친절하게 대하세요
                    <br />
                    <br />
                    🟠 Be understand
                    <br />
                    서로의 다름을 이해해요
                    <br />
                    <br />
                    🟡 Be respect in community
                    <br />
                    서로를 존중하는 소통 방식을 사용해요
                    <br />
                    <br />
                    🟢 Be Think back
                    <br />
                    자신을 뒤돌아보세요
                    <br />
                    <br />
                    🔵 Do what you want
                    <br />
                    하고 싶은 것을 하세요
                    <br />
                    <br />
                    🟣 The owner of all activities is ‘I’
                    <br />
                    모든 활동의 주인은 ‘나’입니다.
                    <br />
                    활동을 소중하게 생각하세요.
                    <br />
                    <br />
                    ⚫ Go together, Be Collaborative
                    <br />
                    서로 협력하고 함께 성장하세요
                    <br />
                    <br />
                    ⚪ Done is better than Perfect
                    <br />
                    일을 끝내는 것이 완벽한 것보다 낫습니다
                </p>
            </Container>
        </div>

    </>
    );
};

export default MainPage;



