import React from 'react'
import Thiru from '../Assets/Thiru.jpg'
import { Button } from 'reactstrap'
import Bank from '../Assets/Bank.jpg'
import Ploughing from '../Assets/Ploughing.jpg'
import ECommerce from '../Assets/E-Commerce.jpg'
import Blog from '../Assets/Blog.png'
import Signal from '../Assets/Signal.png'
import git from '../Assets/Github.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
    {"image":Bank, "title":"Banking Application", "subtitle":"Mini Project", "route":"https://github.com/Thirumeni2811/Banking-Application"},
    {"image":Ploughing, "title":"Trouble Free Ploughing", "subtitle":"Idea" , "route":"https://github.com/Thirumeni2811/Trouble-Free-Ploughing-" },
    {"image":ECommerce, "title":"E-Commerce", "subtitle":"Hackathon", "route":"https://github.com/Thirumeni2811/E-Commerce"},
    {"image":Blog, "title":"BlogHub", "subtitle":"Mini Project", "route":"https://github.com/Thirumeni2811/BlogHub" , "routes":"https://bloghub-ashy.vercel.app/"},
    {"image":Signal, "title":"Trouble Free Ploughing", "subtitle":"Clone", "route":"https://github.com/Thirumeni2811/Signal"}
  ];

  const Article = ({ data }) => {
    return (
      <figure className="Article">
        <img src={data.image} alt={data.title} />
        <figcaption>
          <h3>{data.title}</h3>
          <h5>
            {data.subtitle}
          </h5>
            <h3 className='mt-2'>
              <a href={data.route} target="_blank" rel="noopener noreferrer">
                <img src={git} alt='GitHub' width='30px' />
              </a>
            </h3>
            {data.routes && (
              <h3 className='mt-2'>
                <a href={data.routes} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <PlayArrowIcon style={{ marginRight: '0.5rem' }} />
                  <span style={{ fontSize: '1rem', color: 'inherit' }}>Live Preview</span>
                </a>
              </h3>
            )}
        </figcaption>
      </figure>
    );
  };

  const generateBreakpoints = () => {
    const breakpoints = [];

    // Breakpoints for 400px to 600px
    for (let i = 400; i < 600; i += 20) {
        breakpoints.push({
            breakpoint: i,
            settings: {
                slidesToShow: 1 + 0.1 * ((i - 400) / 20),
            },
        });
    }

    // Breakpoints for 600px to 1500px
    for (let i = 600; i <= 1500; i += 45) {
        breakpoints.push({
            breakpoint: i,
            settings: {
                slidesToShow: 2 + 0.1 * ((i - 600) / 45),
            },
        });
    }

    return breakpoints;
};

const News = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: generateBreakpoints(),
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                      <Article data={item} />
                </div>
            ))}
        </Slider>
    );
};

  return (
    <>
      <div className='wholeContainer'>
        <section className='Info' id='Info'>
          <div className='Infocontainer d-flex align-items-center justify-content-center'>
            <div className='intro'>
              <h1>Hi, I am Thirumeni Mallieswaran</h1>
              <h1>Front End Development Enthusiast</h1>
              <p>
                Focused and front end enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to few projects in front end, my love for these domains came into being.
              </p>
              <div className='buttonLeft'>
                <a href='https://drive.google.com/file/d/1PfjspAlU_J6BmIb-3wh69GJa4PWQ9qSx/view?usp=sharing' target='_blank' rel='noopener noreferrer'>               
                   <Button className='color-primary'>Download Resume</Button>
                </a>
              </div>
            </div>
            <div className='profile w-30'>
              <img src={Thiru} alt='Thirumeni' />
            </div>
          </div>
        </section>

        <section className='Internship' id='Internship'>
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

        <section className='Projects' id='Projects'>
          <div className='projectContainer'>
            <div className='internTopic'>
              <h2>Projects</h2>
            </div>
            <div className='mt-4'>
                <News data={cards} />
            </div>
          </div>
        </section>

        <section className='Contact' id='Contact'>
          
        </section>
      </div>
    </>
  )
}

export default Content
