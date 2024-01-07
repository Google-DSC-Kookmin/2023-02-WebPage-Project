import React from 'react';
import jsonData from '../Data/memberData.json';
import style from '../components/Style/page2.module.css'; // 스타일 모듈 불러오기

const TimelineItem = ({ name, githubLink }) => (
  <div className={style['timeline__Data']}>
    <div className={style['timeline__Individual']}> •
      <span className={style['nameData']}>{name}</span>님은{' '}
      <span className={style['repositoryData']}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          repository
        </a>
      </span>
      를 작업 중입니다.
    </div>
  </div>
);

const Timeline = ({ data }) => (
  <div>
    <div className={style['timeline']}>TimeLines</div>
    {data.map((userData, index) => (
      <TimelineItem key={index} name={userData.Name} githubLink={userData.GitHubLink} />
    ))}
  </div>
);

const TimelinePage = () => {
  return (
    <div>
      <Timeline data={jsonData} />
    </div>
  );
};

export default TimelinePage;