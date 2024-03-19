
import './App.css';
import React from 'react';
import portfolio from '../src/assets/portfolio.png'
import profile from './img.jpg'
import watflix from './assets/mockup.png'
import apple from './assets/mockup_2.png'
import gentle from './assets/screen.png'

function App() {

  return (
    <>
      <div className="App">
        {/* <div className='empty'></div> */}
        <main className='container'>

          <div className='title'>
            <img src={portfolio} alt='portfolio'></img>
            {/* <h1>PORTFOLIO</h1> */}
          </div>
          <div className='introduction'>
            <div className='about'>
              <div className='about-01'>
                <h1>WEB DESIGN</h1>
                <h1>WEB PUBLISHER</h1>
                <h1>+ MOBILE .</h1>
              </div>
              <div className='about-02'>
                <p>안녕하세요. 어쩌구 저쩌구한 웹 퍼블리셔를 꿈꾸는 신호주입니다. 저는 어쩌구 저쩌구 뭐라뭐라라ㅏㅏ라ㅏㅏㅏㅏ 합니다. 제 포트폴리오를 통해 멋진 작업물을 확인해 보시고, 함께 일하고 싶은 열정적인 퍼블리셔를 만나보세요!</p>
              </div>
            </div>
            <div className='nav'>
              <div className='nav-btn'>
                <div className='nav-desc-01'> <span>Introducing my project</span></div>
                <div className='nav-desc-02'> <span>GENTLE MONSET WEB</span></div>
                <div className='nav-desc-03'> <span>View All Project</span></div>
              </div>
            </div>
          </div>
        </main>

        <div className='line-section'>
          <div className='lineTitle'>
            <p>About Me</p>
          </div>
          <div className='line'></div>
        </div>

        <section className='aboutme-section'>
          <div className='aboutme'>
            <div className='aboutme-img'>
              <img src={profile} alt='profile'></img>
            </div>
            <div className='profile'>
              <p className='profile-title'>PROFILE</p>
              <ul>
                <li><p className='profile-li'>Name</p><p>신호주</p> </li>
                <li><p className='profile-li'>Birth</p><p>1996.03.18</p></li>
                <li><p className='profile-li'>Phone</p><p>010-4821-2399</p></li>
                <li><p className='profile-li'>Mail</p><p>tlsghwn03@gmail.com</p></li>
              </ul>
              <div className='skill'>
                <p className='profile-title'>SKILL</p>
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
                      <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className='line-section'>
          <div className='line'></div>
          <div className='lineTitle'>
            <p>All Project</p>
          </div>
        </div>

        <section className='project-section '>
          <div className='projects' >
            <div className='project-mockup'>
              <img src={watflix} alt='watflix'></img>
            </div>
            <div className='project-text'>
              <div className='project-text-title'><p>WATFLIX</p></div>
              <div className='project-text-btn'><p>자세히 보기</p></div>
            </div>
          </div>

          <div className='projects'>
            <div className='project-mockup'>
              <img src={apple} alt='apple'></img>
            </div>
            <div className='project-text'>
              <div className='project-text-title'><p>Apple Vison Pro</p></div>
              <div className='project-text-btn'><p>자세히 보기</p></div>
            </div>
          </div>

          <div className='projects'>
            <div className='project-mockup'>
              <img src={gentle} alt='gentlemonster'></img>
            </div>
            <div className='project-text'>
              <div className='project-text-title'><p>GENTLE MONSTER</p></div>
              <div className='project-text-btn'><p>자세히 보기</p></div>
            </div>
          </div>

          <div className='projects'>
            <div className='project-mockup'>
              <img src={gentle} alt='gentlemonster'></img>
            </div>
            <div className='project-text'>
              <div className='project-text-title'><p>PORTFOLIO</p></div>
              <div className='project-text-btn'><p>자세히 보기</p></div>
            </div>
          </div>

        </section>

        <div className='line-section'>
          <div className='lineTitle' style={{ border: 'none', paddingLeft: '0px', fontWeight: '200' }}>
            <p>+82 10-4821-2399</p>
          </div>
          <div className='line'></div>
        </div>

      </div>

      <footer>
        <p>도ㅓㅣ;내ㅑ </p>
      </footer>
    </>

  );
}

export default App;
