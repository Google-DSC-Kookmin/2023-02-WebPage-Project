import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import s from '../components/Style/memberPage.module.css';
import jsonData from '../Data/memberData.json'; // 파일 확장자(.json) 확인

const MemberPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      // jsonData가 배열이거나 배열로 파싱할 수 있는 경우
      if (Array.isArray(jsonData)) {
        setData(jsonData);
      } else {
        throw new Error('JSON 데이터가 배열 형태가 아닙니다.');
      }
    } catch (error) {
      console.error('데이터 설정 중 오류 발생:', error.message);
      // 오류를 적절히 처리하여 데이터의 기본값을 설정하거나 오류 메시지를 표시하는 등의 작업을 할 수 있습니다.
    }
  }, []);

  return (
    <div>
      <img className={s.member_main_image} src="img/Group54.png" alt="Main" />
      <div className={s.profiles}>
        {data.map((item, index) => (
          <Profile key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
