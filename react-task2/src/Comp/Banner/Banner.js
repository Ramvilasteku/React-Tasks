import React from 'react'
import { Button } from 'react-bootstrap'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import '../Banner/banner.css'
import AOS from 'aos';

AOS.init();

const Banner1 = () => {
    return (
        <div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='banner'>
                    <div className='content'>
                        <h1> Candy is a global branding and UX design agency</h1>
                        <p> adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <Button>Get Started Know</Button>
                    </div>
                    <img src={img1} alt='' />
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='banner1'>
                    <div className='content'>
                        <p className='topHead'>IDENTITY</p>
                        <h1>Branding</h1>
                        <p> adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <Button>Learn More</Button>
                    </div>
                    <img src={img2} alt='' />
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='banner1'>
                    <img src={img3} alt='' />
                    <div className='content'>
                        <p className='topHead'>CRAFT</p>
                        <h1>Design</h1>
                        <p> adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <Button>Learn More</Button>
                    </div>

                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">

                <div className='banner1'>
                    <div className='content'>
                        <p className='topHead'>MARK</p>
                        <h1> Development</h1>
                        <p> adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <Button>Learn More</Button>
                    </div>
                    <img src={img4} alt='' />
                </div>

            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='banner1'>
                    <div className='content'>
                        <p className='topHead'>OUR TEAM</p>
                        <h1> Lorem ipsum dolor sit amet.</h1>
                        <p> adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <Button>Learn More</Button>
                    </div>
                    <img src={img5} alt='' />
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">

                <div className='review'>
                    <div className='content'>
                        <p className='topHead'>WORD OF THE PEOPLE</p>
                        <h1> Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className='imgs'>
                        <img src={img7} alt='' />
                        <img src={img8} alt='' />
                        <img src={img6} alt='' />
                    </div></div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">

                <div className='banner1'>
                    <div className='content'>
                        <p className='topHead'>READY TO TAKE PROJECT TO THE NEXT LEVEL WITH</p>
                        <h1> Lorem ipsum dolor sit amet Adminim veniam, quis nostrud exercitation ullamco laboris.</h1>
                        <input type='text' placeholder='Name'></input>
                        <input type='email' placeholder='Mail@gmail.com'></input>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Banner1
