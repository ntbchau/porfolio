import React from 'react';
import "./services.css";
import Image1 from "../../assets/web.png"
import Image2 from "../../assets/datascientist.png"



const data = [

    {
        id: 1,
        image: Image1,
        title: "Web Development",
        description:
            "I am a font-end developer focus on ReactJS. I love to create beautiful and functional website.",
    },
    {
        id: 2,
        image: Image2,
        title: "Data Analyst",
        description:
            "I can work as data analyst with some main skilled related to data management.",
    },

];

const Services = () => {
    return (
        <section className='services container section' id='services'>
            <h2 className='section__title'>Services</h2>
            <div className='services__container grid'>
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className='services__card' key={id}>
                            <img src={image} alt="" className='services__img' />
                            <h3 className='services__title'>{title}</h3>
                            <p className='services__description'>{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services