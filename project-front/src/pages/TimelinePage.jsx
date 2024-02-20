import React, { useState, useEffect } from 'react';
import style from "../components/Style/timeline.module.css";

function TimelinePage() {
    const [recentCommits, setRecentCommits] = useState([]);
    const [previousUser, setPreviousUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const recentCommitsData = [];

                // 최대 12개의 데이터를 표시하도록 제한
                let count = 0;
                let uniqueUsers = {};

                // 최신 커밋 데이터를 추출하고 중복된 사용자는 제외
                data.forEach(userCommits => {
                    userCommits.forEach(commit => {
                        if (count >= 12) {
                            return; // 최대 표시 개수를 초과하면 종료
                        }

                        if (!commit || !commit.commitLink) {
                            return; // commit 또는 commit.commitLink가 없는 경우 건너뜀
                        }

                        // 현재 사용자가 중복되는지 확인
                        if (!uniqueUsers[commit.userName]) {
                            // 중복되지 않는 경우
                            const formattedDate = new Date(commit.commitTime).toISOString().split('T')[0];
                            const repositoryName = commit.commitLink.split("/repos/")[1].split("/commits")[0];
                            const repositoryUrl = `https://github.com/${repositoryName}`;
                            recentCommitsData.push({ ...commit, commitTime: formattedDate, repositoryUrl });
                            count++;
                            // 중복된 사용자로 표시
                            uniqueUsers[commit.userName] = true;
                        }
                    });
                });

                // 최신 데이터로 상태 업데이트
                setRecentCommits(recentCommitsData);
                // 이전 사용자 정보 업데이트
                if (recentCommitsData.length > 0) {
                    setPreviousUser(recentCommitsData[0].userName);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <div className={style.timeline}>Timelines</div>
            <ul>
                {recentCommits.map((commit, index) => (
                    <li className={style.commit_list} key={index}>
                        <p className={style.commit_time}>{commit.commitTime}</p>
                        <p className={style.commit}>🔥{commit.userName}님은 <a className={style.commit_link} href={commit.repositoryUrl} target="_blank" rel="noopener noreferrer">Repository</a>를 작업중입니다. </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TimelinePage;
/* import React, { useState, useEffect } from 'react';
import style from "../components/Style/timeline.module.css";

function TimelinePage() {
    const [recentCommits, setRecentCommits] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (data === null) {
                    console.log('Data is null, fetching next data');
                    // 데이터가 null인 경우 다음 데이터를 불러오는 로직을 추가
                    // 다음 데이터를 불러오는 함수를 호출합니다.
                    // 예를 들어 fetchNextData() 함수를 호출하도록 할 수 있습니다.
                } else {
                    console.log(data);
                    const uniqueUsers = {};
                    const recentCommitsData = [];

                    // 각 사용자의 최신 커밋 데이터를 추출하고 날짜를 형식화하여 저장
                    data.forEach(userCommits => {
                        userCommits.forEach(commit => {
                            if (!uniqueUsers[commit.userName] && recentCommitsData.length < 10) {
                                uniqueUsers[commit.userName] = true;
                                const formattedDate = new Date(commit.commitTime).toISOString().split('T')[0];
                                const repositoryName = commit.commitLink ? commit.commitLink.split("/repos/")[1].split("/commits")[0] : '';
                                const repositoryUrl = repositoryName ? `https://github.com/${repositoryName}` : '';
                                recentCommitsData.push({ ...commit, commitTime: formattedDate, repositoryUrl });
                            }
                        });
                    });

                    setRecentCommits(recentCommitsData);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <div className={style.timeline}>Timelines</div>
            <ul>
                {recentCommits.map((commit, index) => (
                    <li className={style.commit_list} key={index}>
                        <p className={style.commit_time}>{commit.commitTime}</p>
                        <p className={style.commit}>🔥{commit.userName}님은 <a className={style.commit_link} href={commit.repositoryUrl} target="_blank" rel="noopener noreferrer">Repository</a>를 작업중입니다. </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TimelinePage; null값인 데이터가 들어와도 오류가 발생하지 않는 코드*/

/* import React, { useState, useEffect } from 'react';
import style from "../components/Style/timeline.module.css";

function TimelinePage() {
    const [recentCommits, setRecentCommits] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/Google-DSC-Kookmin/Google-DSC-Kookmin.github.io/master/data/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (data === null) {
                    console.log('Data is null, fetching next data');
                    // 데이터가 null인 경우 다음 데이터를 불러오는 로직을 추가
                    // 다음 데이터를 불러오는 함수를 호출합니다.
                    // 예를 들어 fetchNextData() 함수를 호출하도록 할 수 있습니다.
                } else {
                    console.log(data);
                    const uniqueUsers = {};
                    const recentCommitsData = [];

                    // 각 사용자의 최신 커밋 데이터를 추출하고 날짜를 형식화하여 저장
                    data.forEach(userCommits => {
                        userCommits.forEach(commit => {
                            if (!commit || !commit.commitLink) {
                                // commit이나 commit.commitLink가 없는 경우 건너뜁니다.
                                return;
                            }

                            const formattedDate = new Date(commit.commitTime).toISOString().split('T')[0];
                            const repositoryName = commit.commitLink.split("/repos/")[1].split("/commits")[0];
                            const repositoryUrl = `https://github.com/${repositoryName}`;
                            recentCommitsData.push({ ...commit, commitTime: formattedDate, repositoryUrl });
                        });
                    });

                    setRecentCommits(recentCommitsData);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <div className={style.timeline}>Timelines</div>
            <ul>
                {recentCommits.map((commit, index) => (
                    <li className={style.commit_list} key={index}>
                        <p className={style.commit_time}>{commit.commitTime}</p>
                        <p className={style.commit}>🔥{commit.userName}님은 <a className={style.commit_link} href={commit.repositoryUrl} target="_blank" rel="noopener noreferrer">Repository</a>를 작업중입니다. </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TimelinePage; null값인 데이터는 무시하고 모든 데이터가 표시되도록하는 코드*/