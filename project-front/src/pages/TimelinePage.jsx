import React, { useState, useEffect } from 'react';
import style from "../components/Style/timeline.module.css";

function TimelinePage() {
    const [recentCommits, setRecentCommits] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/data.json')
            .then(response => response.json())
            .then(data => {
                const uniqueUsers = {};
                const recentCommitsData = [];

                // 각 사용자의 최신 커밋 데이터를 추출하고 날짜를 형식화하여 저장
                data.forEach(userCommits => {
                    userCommits.forEach(commit => {
                        if (!uniqueUsers[commit.userName] && recentCommitsData.length < 10) {
                            uniqueUsers[commit.userName] = true;
                            const formattedDate = new Date(commit.commitTime).toISOString().split('T')[0];
                            recentCommitsData.push({ ...commit, commitTime: formattedDate });
                        }
                    });
                });

                setRecentCommits(recentCommitsData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
          <div className={style.timeline}>Timelines</div>
          <ul>
              {recentCommits.map((commit, index) => (
                  <li className={style.commit_list} key={index}>
                      <p className={style.commit}>🔥{commit.userName}님은 {commit.commitTime}에 {commit.commitMessage}를 작업했습니다</p>
                      <a className={style.commit_link} href={commit.commitLink} target="_blank" rel="noopener noreferrer">📁 Commit 보러가기</a>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default TimelinePage;