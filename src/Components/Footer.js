import React from 'react';
import Instagram from '../Assets/insta.png';
import Gmail from '../Assets/Gmail.png'
import LinkedIn from '../Assets/Linkedin.png';
import Github from '../Assets/Github.png'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className='text-center fw-bolder my-3' id='Contact'>
                <div className='d-flex justify-content-center gap-5'>
                    <a href='https://github.com/Thirumeni2811' target='_blank' rel='noopener noreferrer'>                    
                        <img src={Github} alt='Facebook'/>
                    </a>
                    <a href='https://www.instagram.com/_everchamp_' target='_blank' rel='noopener noreferrer'>
                        <img src={Instagram} alt='Instagram'/>
                    </a>
                    <a href='mailto:thirumeni948@gmail.com'  target='_blank' rel='noopener noreferrer'>
                        <img src={Gmail} alt='Gmail' />
                    </a>
                    <a href='https://www.linkedin.com/in/thirumeni-ms/' target='_blank' rel='noopener noreferrer'>
                        <img src={LinkedIn} alt='LinkedIn'/>
                    </a>
                </div>
                <br/>
                <p className='footerText'>Copyright&copy; {year} Thirumeni. All rights reserved </p>
            </footer>
        </>
    );
}

export default Footer;
