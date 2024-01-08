import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import s from '../components/Style/memberPage.module.css';
import jsonData23_24 from '../Data/memberData23_24.json'; 
import jsonData22_23 from '../Data/memberData22_23.json'; 

const MemberPage = () => {
  const [data, setData] = useState([]);
  const [data22, setData22] = useState([])

  useEffect(() => {
    try {
      // jsonData가 배열이거나 배열로 파싱할 수 있는 경우
      if (Array.isArray(jsonData23_24)) {
        setData(jsonData23_24);
      } else {
        throw new Error('JSON 데이터가 배열 형태가 아닙니다.');
      }
    } catch (error) {
      console.error('데이터 설정 중 오류 발생:', error.message);
      // 오류를 적절히 처리하여 데이터의 기본값을 설정하거나 오류 메시지를 표시하는 등의 작업을 할 수 있습니다.
    }
    try {
      // jsonData가 배열이거나 배열로 파싱할 수 있는 경우
      if (Array.isArray(jsonData22_23)) {
        setData22(jsonData22_23);
      } else {
        throw new Error('JSON 데이터가 배열 형태가 아닙니다.');
      }
    } catch (error) {
      console.error('데이터 설정 중 오류 발생:', error.message);
      // 오류를 적절히 처리하여 데이터의 기본값을 설정하거나 오류 메시지를 표시하는 등의 작업을 할 수 있습니다.
    }
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
