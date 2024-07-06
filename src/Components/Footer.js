import React from 'react';
import Instagram from '../Assets/insta.png';
import Gmail from '../Assets/Gmail.png'
import LinkedIn from '../Assets/Linkedin.png';
import Github from '../Assets/Github.png'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className='text-center fw-bolder mt-3' id='Contact'>
                <div className='d-flex justify-content-center gap-5'>
                    <a href='https://github.com/Thirumeni2811'>                    
                        <img src={Github} alt='Facebook'/>
                    </a>
                    <a href='https://www.instagram.com/_everchamp_'>
                        <img src={Instagram} alt='Instagram'/>
                    </a>
                    <a href='mailto:thirumeni948@gmail.com'>
                        <img src={Gmail} alt='Gmail' />
                    </a>
                    <a href='https://www.linkedin.com/in/thirumeni-m/'>
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
