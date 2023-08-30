import React from 'react';
import "./about.css";
import Image from '../../assets/Girl.png'
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className=' section__title'>About Me</h2>
            <div className='about__container grid'>
                <img src={Image} alt="" className='about__img' />
                <div className='about__data grid'>
                    <div className='about__info'>
                        <p className='about__description'>I'm Chau Nguyen, web developer from Cologne, Germany. I have experience in web site design and customization focus on Reactjs</p>
                        <a href="" className='btn'>Download CV</a>
                    </div>
                    <div className='about__skills grid'>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Reactjs</h3>
                                <span className='skills__number '></span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage react'>80%</span>
                            </div>
                        </div>
                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Nodejs</h3>
                                <span className='skills__number '></span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage node'>70%</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>HTML-CSS-SASS</h3>
                                <span className='skills__number '></span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage html'>70%</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Python</h3>
                                <span className='skills__number '></span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage python'>80%</span>
                            </div>
                        </div>


                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>R</h3>
                                <span className='skills__number '></span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage r'>80%</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <AboutBox />
        </section >
    )
}

export default About