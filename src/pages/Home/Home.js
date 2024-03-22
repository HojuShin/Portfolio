import '../../App.css'
import React from 'react';
import Slide from '../../component/Slide'
import Main from '../../component/Main'
import Profile from '../../component/Profile/Profile';

export default function Home() {
  return (
    <>
      <div className="App">
        <Main />
        <div className='line-section line-fade'>
          <div className='lineTitle'>
            <p>About Me</p>
          </div>
          <div className='line'></div>
        </div>
        <Profile />
        <div className='line-section'>
          <div className='line'></div>
          <div className='lineTitle'>
            <p>All Projects</p>
          </div>
        </div>
        <Slide />
        <div className='line-section'>
          <div className='lineTitle' style={{ border: 'none', paddingLeft: '0px', paddingRight: '0px', fontWeight: '200' }}>
            <p>+82 10-4821-2399</p>
          </div>
          <div className='line'></div>
        </div>
      </div>
      <footer>
        <div className='footer-section'>
          <div className='footer01'>
            <div className='footer-desc'>
              <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
              <p>©Copyright 2024. Shin Hoju . All Rights Reserved.</p>
            </div>
          </div>
          <div className='footer02'>
            <div className='footer-title'>
              <h1>PORTFOLIO</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}