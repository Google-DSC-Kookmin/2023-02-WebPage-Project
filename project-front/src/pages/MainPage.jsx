import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import style from "../components/Style/text.module.css";

const MainPage = () => {
    return (
    <>
        <Box textAlign={"center"}>
            <img style={{ width: "30vw" }} src={"img/Logo.png"}/>
            <h1 style={{color: "#000"}}>Google Developer Student Club</h1>
            <h2>Kookmin University</h2>
        </Box>

        <Box
            sx={{
                margin: { xs: "10vh 10vw 0 10vw", md: "10vh 40vw 0 0"},
                borderRadius: { xs: "15px 15px 15px 15px", md: "0 15px 15px 0" }
            }}
            padding={"3vh 0 3vh 0"}
            bgcolor={"rgba(234, 67, 53, 0.50)"}>
            <Box sx={{ marginLeft: { xs: '0', md: '18vw' } }}>
                <Container>
                    <p>💡주도적인 학습을 통해 모두가 함께 성장해나가고 모두가 주인이 되는 대학생 개발자 모임 </p>
                    <br />
                    <p>💡공유의 가치와 다양성의 가치를 지향하고 긍정적인 영향의 선순환이 일어나는 개발자 커뮤니티 </p>
                </Container>
            </Box>
        </Box>

        <Box
            sx={{
                margin: { xs: "5vh 10vw 0 10vw", md: "5vh 0 0 40vw"},
                borderRadius: { xs: "15px 15px 15px 15px", md: "15px 0 0 15px" }
            }}
            padding={"3vh 0 3vh 0"}
            bgcolor={"rgba(17, 157, 90, 0.50)"}>
            <Container>
                <h1 className={style.sh1}>Google Developer Student Clubs (GDSC)?</h1>
                <br /><br />
                <p>개발 및 사회적 문제에 관심 있는 학생들을 위한 대학교 개발자 커뮤니티 그룹으로 Google Developers가 지원하고 있습니다.</p>
                <br />
                <p>GDSC 에서는 학생 개발자들이 성장할 수 있도록 전세계의 GDSC Chapter 교류 기회, Google의 이벤트 참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 역량을 높이도록 돕고 있습니다. </p>
                <br />
                <p>23-24에는 전 세계 110+개국에서 주최되고 있으며, 국내에서는 36개의 대학이 GDSC의 Chapter로 활동하고 있습니다. </p>
            </Container>
        </Box>

        <Box
            sx={{
                margin: { xs: "1vh 10vw 0 10vw", md: "1vh 0 0 40vw"},
                borderRadius: { xs: "15px 15px 15px 15px", md: "15px 0 0 15px" }
            }}
            padding={"3vh 0 3vh 0"}
            bgcolor={"rgba(17, 157, 90, 0.50)"}>
            <Container>
                <a href="/">
                    <Box style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <img src="/img/clip.png"/>
                        <p className={style.underLine}>
                            Google Developers Korea GDSC</p>
                    </Box>
                </a>
            </Container>
        </Box>

        <Box
            sx={{
                margin: { xs: "5vh 10vw 0 10vw", md: "5vh 40vw 0 0"},
                borderRadius: { xs: "15px 15px 15px 15px", md: "0 15px 15px 0" }
            }}
            padding={"3vh 0 3vh 0"}
            bgcolor={"rgba(66, 133, 245, 0.50)"}>
                <Box sx={{ marginLeft: { xs: '0', md: '18vw' } }}>
                    <Container>
                        <Box style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <img src="/img/kmulogo.png" />
                            <h1 className={style.sh2}> GDSC_Kookmin? </h1>
                        </Box>
                        <br />
                        <p>GDSC Kookmin University Chapter은 지난 1기 활동 기간(2023 - 2024) 13회의 Seminar, 4개의 Session, 2개의 Study를 진행하였고, GDSC의 꽃으로 불리는 Solution Challenge 공모전 행사에 3개의 팀이 참여하였습니다.</p>
                        <br />
                        <p>GDSC Kookmin University Chapter 는 현재 2기 활동을 진행하고 있으며, 3개의 Session 외에도 다양한 행사가 예정되어 있습니다.</p>
                    </Container>
                </Box>
        </Box>

        <Box
            sx={{
                margin: { xs: "5vh 10vw 0 10vw", md: "5vh 0 0 40vw"},
                borderRadius: { xs: "15px 15px 15px 15px", md: "15px 0 0 15px" }
            }}
            padding={"3vh 0 3vh 0"}
            bgcolor={"rgba(252, 188, 5, 0.60)"}>
            <Container>
                <h1 className={style.sh3}>Vision</h1>
                <p>💡 주도적인 학습을 통해 모두가 함께 성장해나가고 모두가 주인이 되는 대학생 개발자 모임 </p>
                <p>💡 공유의 가치와 다양성의 가치를 지향하고 긍정적인 영향의 선순환이 일어나는 개발자 커뮤니티</p>
                <br />

                <h1 className={style.sh3}>Culture</h1>
                <p>🤝 자유롭고 수평적인 소통 문화를 지향합니다</p>
                <p> 🔥 적극적인 커뮤니티 문화를 지향합니다</p>
                <br />

                <h1 className={style.sh3}>Code of Conduct</h1>
                <p>🔴 Be nice<br />서로를 친절하게 대하세요</p>
                <br />
                <p>🟠 Be understand<br />서로의 다름을 이해해요</p>
                <br />
                <p>🟡 Be respect in community<br />서로를 존중하는 소통 방식을 사용해요</p>
                <br />
                <p>🟢 Be Think back<br />자신을 뒤돌아보세요</p>
                <br />
                <p>🔵 Do what you want<br />하고 싶은 것을 하세요</p>
                <br />
                <p>🟣 The owner of all activities is ‘I’<br />모든 활동의 주인은 ‘나’입니다.<br />활동을 소중하게 생각하세요.</p>
                <br />
                <p>⚫ Go together, Be Collaborative<br />서로 협력하고 함께 성장하세요</p>
                <br />
                <p>⚪ Done is better than Perfect<br />일을 끝내는 것이 완벽한 것보다 낫습니다</p>
            </Container>
        </Box>
    </>
    );
};

export default MainPage;



