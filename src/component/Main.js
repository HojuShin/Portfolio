import './main.css';
import portfolio from '../assets/portfolio.png'

export default function Main() {
    return (
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
                        <p>안녕하세요. 웹 퍼블리셔를 꿈꾸는 신호주입니다. 제 포트폴리오를 통해 멋진 작업물을 확인해 보시고, 함께 일하고 싶은 열정적인 퍼블리셔를 만나보세요 !</p>
                    </div>
                </div>
                <div className='nav'>
                    <div className='nav-btn'>
                        <div className='nav-desc-01'> <span>Latest Project_</span></div>
                        <div className='nav-desc-02'> <span>GENTLE MONSET WEB</span></div>
                        <div className='nav-desc-03'> <span>tlsghwn03@gmail.com</span></div>
                    </div>
                </div>
            </div>
        </main>
    )
}