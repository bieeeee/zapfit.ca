import './benefit.scss';
import { useState } from 'react';


function Benefit() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img: './assets/time.png',
      title: "Get Fit in Less Time",
      desc: "You can achieve your fitness goal in just 20-30 minutes per session, making it perfect for busy individuals who have limited time to dedicate to exercise."
    },
    {
      id: "2",
      img: "./assets/muscle.png",
      title: "Maximize Your Results",
      desc: "EMS technology stimulates more muscle fibers than traditional exercise alone, leading to increased muscle activation and potentially greater gains in strength and endurance."
    },
    {
      id: "3",
      img: "./assets/pain.png",
      title: "Safe and Effective Exercise",
      desc: "EMS bodysuit training is low-impact, which means it puts less stress on the joints than traditional exercise methods. This makes it a great option for people with injuries or other conditions that limit their ability to do high-impact exercise."
    },
    {
      id: "4",
      img: "./assets/body.png",
      title: "Customized Workouts",
      desc: "Our training is customized for each client, providing a tailored workout optimized for their needs and goals, leading to desired fitness results."
    }
  ]

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="benefit">
      <h1>What are the benefits?</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <img src={d.img} alt="" />
              </div>
              <div className="right">
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='./assets/arrow.png'
        alt="arrow"
        className={`arrow left ${currentSlide === 0 ? 'disabled' : ''}`}
        onClick={() => handleClick("left")}
      />
      <img
        src='./assets/arrow.png'
        alt="arrow"
        className={`arrow right ${currentSlide === data.length - 1 ? 'disabled' : ''}`}
        onClick={() => handleClick()}
        />
    </div>
  )
}

export default Benefit
