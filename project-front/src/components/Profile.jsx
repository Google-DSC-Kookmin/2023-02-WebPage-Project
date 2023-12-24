import React from 'react';


const Profile = () => {
    return (
        <>
        <div className='profileCard'>
            <header>
                <main>
                <img 
                src='img/profile.png'
                className = 'profile_image'
                />
                </main>
                
                <span className='duty'>회장</span>
                <img 
                className="github_icon" 
                src='img/githubicon.png' />
            </header>
            <main>
                <span className='name'>이정안</span>
                <span className='position'>프론트엔드</span>
                <span className="ment">아자아자 화이팅!</span>
            </main>
            <footer>
                <img 
                className='mailicon'
                src='img/mailicon.png'/>
                <span className='mail'>abcde@gmail.com</span>
            </footer>
       </div>
        </>
    );
};

export default Profile;