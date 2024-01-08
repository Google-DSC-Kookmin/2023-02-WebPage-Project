import React from 'react';
import s from "../components/Style/memberPage.module.css";

const Profile = ({ data }) => {
    const { Name, Position, Introduction, GitHubLink, Email, Image,Responsibility } = data;


    const renderPositions = () => {
        return (
            <div className={s.dutyContainer}>
                {Position.map((position, index) => (
                    <span key={index} className={s.duty}>{position}</span>
                ))}
            </div>
        );
    };
    
    return (
        <>
            <div className={s.profileCard}>
                <header>
                    <main>
                        <img src={Image} className={s.profile_image} alt="Profile" />
                    </main>

                    {renderPositions()}
                    <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                        <img className={s.github_icon} src='img/githubicon.png' alt="GitHub" />
                    </a>
                </header>
                <main>
                    <span className={s.name}>{Name}</span>
                    <span className={s.position}>{Responsibility}</span>
                    <span className={s.ment}>{Introduction}</span>
                </main>
                <footer>
                    <img className={s.mailicon} src='img/mailicon.png' alt="Mail" />
                    <span className={s.mail}>{Email}</span>
                </footer>
            </div>
        </>
    );
};

export default Profile;
