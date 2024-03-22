import './slide.css'
import watflix from '../assets/mockup.png'
import apple from '../assets/mockup_2.png'
import gentle from '../assets/screen.png'
import video from '../vidoes/test.mp4'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Slide() {

    const homeRefs = useRef([null, null, null, null]);

    const onHomeHover = (index) => {
        if (homeRefs.current[index]) {
            homeRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className='project-section'>
                <div className='projects-video '>
                    <video src={video} loop autoPlay muted className='video'></video>
                </div>

                <div className='slide'>
                    <div className='slide-down'>
                        <div className='slide-down-project0' ref={(el) => homeRefs.current[0] = el}>
                            <h1 onMouseEnter={() => onHomeHover(0)}>WATFLIX</h1>
                            <div className='slide-hidden'>
                                <div className='project'>
                                    <div className='project-desc'>
                                        <div className='detail'>
                                            <p>기술 스택</p>
                                            <p className='detail-skill'>HTML, CSS, JavaScript, React, Redux</p>
                                        </div>
                                        <div className='detail'>
                                            <p>기여도</p>
                                            <p className='detail-skill' >퍼블리싱 100% + 개발 100% </p>
                                        </div>
                                        <div className='detail'>
                                            <p className='detail-desc'>간결하고 직관적인 디자인을 통해 사용자가 콘텐츠를 쉽게 찾고 이용할 수 있는 OTT 서비스 웹페이지를 개발하였습니다.
                                                주요 기능으로는 <span>검색, 보관함, 최근 본 콘텐츠</span>가 있으며 이를 통해 프론트엔드 개발에 대한 능력을 향상시켰습니다. </p>
                                        </div>
                                        <div className='detail-btn'>
                                            <button>
                                                <Link to={'https://hojushin.github.io/react-watflix/'} target="_blank" >
                                                    <p>VIEW</p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={watflix} alt='watflix' className='mockup' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-down' onMouseEnter={() => onHomeHover(1)}>
                        <div className='slide-down-project1' ref={(el) => homeRefs.current[1] = el}>
                            <h1>APPLE<br /> VISION PRO</h1>
                            <div className='slide-hidden'>
                                <div className='project'>
                                    <div className='project-desc'>
                                        <div className='detail'>
                                            <p>기술 스택</p>
                                            <p className='detail-skill'>HTML, CSS, JavaScript, React, three.js</p>
                                        </div>
                                        <div className='detail'>
                                            <p>기여도</p>
                                            <p className='detail-skill' >퍼블리싱 100%</p>
                                        </div>
                                        <div className='detail'>
                                            <p className='detail-desc'>three.js를 활용하여  <span>3D 모델링</span>을 구현하고 인터렉티브한 웹 사이트를 완성하였습니다. </p>
                                        </div>
                                        <div className='detail-btn'>
                                            <button>
                                                <Link to={'https://hojushin.github.io/apple/'} target="_blank" >
                                                    <p>VIEW</p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={apple} alt='apple' className='mockup' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-down' onMouseEnter={() => onHomeHover(2)}>
                        <div className='slide-down-project2' ref={(el) => homeRefs.current[2] = el}>
                            <h1>GENTLE MONSTER</h1>
                            <div className='slide-hidden'>
                                <div className='project'>
                                    <div className='project-desc'>
                                        <div className='detail'>
                                            <p>기술 스택</p>
                                            <p className='detail-skill'>HTML, CSS, JavaScript, React</p>
                                        </div>
                                        <div className='detail'>
                                            <p>기여도</p>
                                            <p className='detail-skill' >퍼블리싱 100% </p>
                                        </div>
                                        <div className='detail'>
                                            <p className='detail-desc'>요소들을 다양한 위치에 배치시켜 웹 사이트의 <span>디자인과 레이아웃을 자유롭게 </span>제어했으며, <span>스크롤 이벤트</span>를 통해 부드러운 애니메이션 효과를 적용하는 등 사용자들에게 흥미로운 경험을 제공합니다.</p>
                                        </div>
                                        <div className='detail-btn'>
                                            <button>
                                                <Link to={'https://hojushin.github.io/gentlemonster/'} target="_blank" >
                                                    <p>VIEW</p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={gentle} alt='gentle' className='mockup' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}