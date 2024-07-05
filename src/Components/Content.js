import React from 'react'
import Thiru from '../Assets/Thiru.jpg'
import { Button } from 'reactstrap'
import Bank from '../Assets/Bank.jpg'
import Ploughing from '../Assets/Ploughing.jpg'
import ECommerce from '../Assets/E-Commerce.jpg'
import Blog from '../Assets/Blog.png'
import Signal from '../Assets/Signal.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Content.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Content = () => {
  const cards = [
    {"image":Bank, "title":"Banking Application", "subtitle":"Mini Project"},
    {"image":Ploughing, "title":"Trouble Free Ploughing", "subtitle":"Idea"},
    {"image":ECommerce, "title":"E-Commerce", "subtitle":"Hackathon"},
    {"image":Blog, "title":"BlogHub", "subtitle":"Mini Project"},
    {"image":Signal, "title":"Trouble Free Ploughing", "subtitle":"Clone"}
  ];

  const Article = ({ data }) => {
    return (
      <figure className="Article">
        <img src={data.image} alt={data.title} />
        <figcaption>
          <h3>{data.title}</h3>
          <h5>{data.subtitle}</h5>
        </figcaption>
      </figure>
    );
  };

  const News = ({ data }) => {
    const settings = {
  dots: true,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [
    {breakpoint: 400, settings: {slidesToShow: 1, },},
    {breakpoint: 420, settings: {slidesToShow: 1.1, },},
    {breakpoint: 440, settings: {slidesToShow: 1.2, },},
    {breakpoint: 460, settings: {slidesToShow: 1.3, },},
    {breakpoint: 480, settings: {slidesToShow: 1.4, },},
    { breakpoint: 500, settings: { slidesToShow: 1.5 } },
    { breakpoint: 520, settings: { slidesToShow: 1.6 } },
    { breakpoint: 540, settings: { slidesToShow: 1.7 } },
    { breakpoint: 560, settings: { slidesToShow: 1.8 } },
    { breakpoint: 580, settings: { slidesToShow: 1.9 } },
    { breakpoint: 600, settings: { slidesToShow: 2 } }
  ],
};

    return (
      <div className='news'>
        <Slider {...settings}>
          {data.length > 0 ? data.map((item, index) => (
            <div key={index}>
              <Article data={item} />
            </div>
          )) : <p>Please add some cards</p>}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div className='wholeContainer'>
        <section className='Info'>
          <div className='container d-flex align-items-center justify-content-center'>
            <div className='intro'>
              <h1>Hi, I am Thirumeni</h1>
              <h1>Front End Development Enthusiast</h1>
              <p>
                Focused and front end enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to few projects in front end, my love for these domains came into being.
              </p>
              <Button className='color-primary'>Download Resume</Button>
            </div>
            <div className='profile w-30'>
              <img src={Thiru} alt='Thirumeni' />
            </div>
          </div>
        </section>

        <section className='Internship'>
          <div className='internContainer'>
            <div className='internTopic'>
              <h2>Internships</h2>
            </div>
            <div className='internGrid'>
              <div className='intern'>
                <h3>Emglitz Technolgies - Coimbatore</h3>
                <h5>16 Jan 2023 - 28 Jan 2023 | Based on IOT</h5>
                <h6>Project - Smart Helmet System</h6>
                <p>The "Smart Helmet System" is designed to enhance user safety by detecting vehicles approaching from the front and triggering timely alerts. It employs sensors to monitor proximity, and a microcontroller processes this data in real-time to ensure immediate feedback. The system provides alerts through various user-friendly interfaces, including auditory signals, visual indicators, and haptic feedback, ensuring the user is promptly and effectively notified of potential hazards.</p>
              </div>
              <div className='intern'>
                <h3>Pinnacle Systems - Tiruppur</h3>
                <h5>13 Mar 2023 - 2 June 2023 | Database-SQL</h5>
                <h6>Tool - Jasper IReport</h6>
                <p>I focus on SQL database management and use Jasper iReport to generate documents connected to the SQL database. This tool is particularly useful in the garment industry, allowing for the creation of detailed, data-driven reports essential for inventory management and sales tracking. The experience bridges backend data handling with effective report generation, enhancing operational efficiency.</p>
              </div>
              <div className='intern'>
                <h3>FACEprep - Coimbatore</h3>
                <h5>16 Oct 2023 - 15 Nov 2023 | Training Assistant</h5>
                <h6>Role - Aptitude</h6>
                <p>In my internship as a training assistant for an aptitude trainer, I focus on learning and mastering aptitude solving techniques. Additionally, I have visited various colleges to help students activate their LinkedIn Premium accounts, enhancing their professional networking opportunities. This experience combines technical skill development with practical outreach efforts.</p>
              </div>
              <div className='intern'>
                <h3>IT Boomi Innovations - Tiruppur</h3>
                <h5>3 June 2024 - Present | Full Stack Developer</h5>
                <h6>Project - Signal Clone</h6>
                <p>In my full stack development internship focusing on the MERN stack, I am currently concentrating on front-end development as I am new to this field. Over the one-year period of the internship, I plan to expand my skills to include backend development and various frameworks. This approach allows me to build a solid foundation before delving into more advanced aspects of full stack development.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='Projects'>
          <div className='projectContainer'>
            <div className='internTopic'>
              <h2>Projects</h2>
            </div>
            <div className='mt-4'>
                <News data={cards} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Content
