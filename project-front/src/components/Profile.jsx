import React from 'react';
import s from "../components/Style/memberPage.module.css";

const Profile = () => {
    return (
        <>
        <div className={s.profileCard}>
            <header>
                <main>
                <img 
                src='img/profile.png'
                className = {s.profile_image}
                />
                </main>
                
                <span className={s.duty}>회장</span>
                <img 
                className={s.github_icon} 
                src='img/githubicon.png' />
            </header>
            <main>
                <span className={s.name}>이정안</span>
                <span className={s.position}>프론트엔드</span>
                <span className={s.ment}>아자아자 화이팅!</span>
            </main>
            <footer>
                <img 
                className={s.mailicon}
                src='img/mailicon.png'/>
                <span className={s.mail}>abcde@gmail.com</span>
            </footer>
       </div>
        </>
    );
};

export default Profile;