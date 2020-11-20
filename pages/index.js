import React from 'react';
import Activities from '../components/Activities';

const index=()=>{
    return(
        <>
            <div style={{
                margin:'0',
                padding:'0',
                position: 'fixed',
                zIndex: '1',
                top: '0',
                display: 'block',
                width: '100%',
                height: '10px',
                background: '-webkit-gradient(linear,left top,right top,from(#008000),to(#99ff66))',
            }}>
            </div>
            <div className='About'>
                <h1 style={{textAlign:'center'}}>이현수</h1>
            </div>
            <div className='Career'>
                <h1>- Career</h1>
                <h2>포스텍 영재 기업인 교육원 7기</h2>
                <h5>2016~2017 교육과정 학습</h5>
                <h2>숭실대학교 소프트웨어학부</h2>
                <h5>2020~ 전과후 과정중에 있음</h5>
                <h2>2019년 글로벌미디어학부 입학</h2>
                <h5>2019년 숭실대학교 글로벌미디어학부 입학</h5>
                <h2>2020년 소프트웨어학부 전과</h2>
                <h5>2020년 정상전과. 학점 3.69/4.5 백마성적우수장학금 1회</h5>
            </div>
            <h1>- Activities</h1>
            <div className='Activities' style={{display:'flex', flexWrap:'wrap'}}>
                <Activities
                    imgsrc="images/yourssu.jpg"
                    description='유어슈 서비스 기획 팀장 '
                    year='2019.09~'
                />
                <Activities
                    imgsrc="images/ground.jpg"
                    description='그라운드 앱 기획 및 개발'
                    year='2020.01'
                />
                <Activities
                    imgsrc="images/159681.svg"
                    description='바른자세 헬린이 '
                    year='2020.11~'
                />
                <Activities
                    imgsrc="images/dodo.ico"
                    description='스포츠 도도 퍼블리싱'
                    year='2020.09~10'
                />
                <Activities
                    imgsrc="images/neo.jpg"
                    description='Neo 서포터즈'
                    year='2019.08~2019.12'
                />
                <Activities
                    imgsrc="images/univchain.jpg"
                    description='UnivChain'
                    year='2019.06~2019.12'
                 />
                <Activities
                    imgsrc="images/ethereum.png"
                    description='Mixst'
                    year='2018.08~2019.12'
                />
            </div>
            <div className='Contact'>
                <h1 style={{textAlign:'Center'}}>quintuplets2000@gmail.com</h1>
            </div>
        </>

    );
};


export default index;