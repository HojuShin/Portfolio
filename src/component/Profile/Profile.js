import './profile.css';
import { useEffect, useRef } from 'react'
import profile from '../../assets/img.jpg';
import tstory from '../../assets/tstory.png'

export default function Profile() {
    //fade-up
    //useRef로 DOM에 접근
    const fadeRef = useRef([]);

    // 컴포넌트가 처음으로 렌더링될 때 실행
    useEffect(() => {
        // .section01Img 클래스를 가진 요소들을 변수에 저장
        const fadeElements = document.querySelectorAll(".scrollSection");
        // fadeRef.current에 fadeElements를 할당
        fadeRef.current = Array.from(fadeElements);

        // 스크롤 이벤트 핸들러 생성
        const handleScroll = () => {
            // fadeRef.current에 저장된 모든 요소를 반복하면서 처리
            fadeRef.current.forEach((img) => {
                // 요소가 화면 안에 들어왔는지 확인하고 화면 안에 있다면 클래스 추가
                if (isInView(img)) {
                    img.classList.add("scrollSection--visible");
                }
            });
        };

        // 스크롤 이벤트 리스너 등록
        document.addEventListener("scroll", handleScroll);

        // 컴포넌트가 unmount되기 전에 실행될 클린업 함수
        return () => {
            // 스크롤 이벤트 리스너 제거
            document.removeEventListener("scroll", handleScroll);
        };
    }, []); // 한 번만 실행되도록


    // 요소가 화면 안에 들어왔는지 확인하는 함수
    const isInView = (element) => {
        // 요소의 위치 정보를 가져옴
        const rect = element.getBoundingClientRect();

        // 요소의 하단 경계가 화면 위쪽(0)을 넘어가는지 확인하고, 
        // 요소의 상단 경계가 화면 아래쪽(창의 높이 - 150px 또는 브라우저 높이 - 150px)을 넘어가지 않는지 확인
        return (
            rect.bottom > 0 &&
            rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
        );
    };

    return (
        <>
            <section className='aboutme-section'>
                <div className='aboutme scrollSection'>
                    <div className='aboutme-img '>
                        <img src={profile} alt='profile'></img>
                    </div>
                    <div className='profile'>
                        <p className='profile-title'>Shin Hoju</p>
                        <p className='profile-intrd'>웹 페이지에서 사용자의 집중을 높이는 것을 우선시하며, 최근에는 인터렉티브 웹사이트에 대한 관심을 깊게 가지고 있습니다.
                            사용자와의 상호작용을 강화하고 흥미로운 경험을 제공하기 위해 노력하고 있으며, 이를 위해 다양한 기술과 디자인 요소를 탐구하고 적용하는 것을 즐깁니다. 제 경험과 역량을 바탕으로 사용자들이 웹 페이지에 머무르고 싶어하는 경험을 만들어내고자 노력하고 있습니다
                        </p>
                        <ul>
                            <li><p className='profile-li'>Birth</p><p>1996.03.18</p></li>
                            <li><p className='profile-li'>Phone</p><p>010-4821-2399</p></li>
                            <li><p className='profile-li'>Mail</p><p>tlsghwn03@gmail.com</p></li>
                            <li><p className='profile-li'>Education</p><p>경남대학교 (사회학과 졸업)</p></li>
                            <li><p className='profile-li'>Certificate</p><p>정보처리기사 (한국산업인력공단 / 2021.08)</p></li>
                            <li className='techblog'>
                                <p className='profile-li'>Tech Blog</p>
                                <div className='git'>

                                    <svg height="42" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="42" data-view-component="true" className="color-fg-default">
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="#ffffff"></path>
                                    </svg>
                                    <div className='tstory'>
                                        <img src={tstory} alt='t'></img>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='techstack scrollSection'>
                <div className='techstack-title'>
                    <h1>TECH STACK</h1>
                </div>
                <div className='skill-desc'>
                    <ul>
                        <li>시맨틱 요소를 이해하고 이를 활용하여 웹페이지의 구조를 명확하게 정의합니다. 또한 웹 표준과 웹 접근성을 준수하기 위해 노력합니다.</li>
                        <li><span>CSS</span>와 <span>JavaScript</span>를 사용하여 애니메이션을 구현하여 웹페이지를 풍부하게 합니다.</li>
                        <li><span>React</span>를 활용하여 화면을 컴포넌트 단위로 나누어 구조를 형성합니다.<br />UI를 작은 단위로 분할하고 재사용 가능한 컴포넌트로 설계함으로써 일관된 UI 경험을 제공합니다.</li>
                        <li><span>Visual Studio Code</span>를 사용하여 코드 편집 및 개발 환경을 구축하고, 프로젝트를 관리합니다.</li>
                        <li><span>Git</span>을 통한 형상 관리</li>
                        <li><span>npm</span>을 이용하여 필요한 패키지를 설치하고 사용할 수 있습니다.</li>
                    </ul>
                </div>
                <div className='skill'>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                            </svg>

                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}