import React, {useState, useEffect} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {
    console.log(dataSlider.length);
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(()=>{
      const interval = setInterval(()=>{
          nextSlide();        
      }, 3000);
      return () => clearInterval(interval);
    });

    return (
        <div className='slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <a href="#" target="_blank" rel="noreferrer" >
                            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.svg`} />
                        </a>
                    </div>
                )
            })}
            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}