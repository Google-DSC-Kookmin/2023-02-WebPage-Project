import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import s from '../components/Style/memberPage.module.css';

const MemberPage = () => {
  const [data, setData] = useState([]);
  const [data22, setData22] = useState([])

  useEffect(() => {
    // 첫 번째 데이터 가져오기
    fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/23-24_Member.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          setData(jsonData);
        } else {
          throw new Error('JSON 데이터가 배열 형태가 아닙니다.');
        }
      })
      .catch(error => {
        console.error('데이터 가져오기 오류:', error);
        // 오류를 처리하거나 적절한 작업을 수행할 수 있습니다.
      });

    // 두 번째 데이터 가져오기
    fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/22-23_Member.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          setData22(jsonData);
        } else {
          throw new Error('JSON 데이터가 배열 형태가 아닙니다.');
        }
      })
      .catch(error => {
        console.error('데이터 가져오기 오류:', error);
        // 오류를 처리하거나 적절한 작업을 수행할 수 있습니다.
      });
  }, []);


  const renderProfiles = (dataArray) => {
    return dataArray.map((data, index) => (
      <div key={index} className={s.profiles}>
        {data.map((item, i) => (
          <Profile key={i} data={item} />
        ))}
      </div>
    ));
  };

    return (
      <>
        <div>
          <span className={s.main_image}>
            <img className={s.member_main_image} src="img/Group54.png" alt="Main" />
          </span>
          <span className={s.num_member}>23-24</span>
          {renderProfiles([data])}
          <span className={s.num_member}>22-23</span>
          {renderProfiles([data22])}
        </div>
      </>
    );
};

export default MemberPage;
