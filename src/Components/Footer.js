import React from 'react';
import Facebook from '../Assets/fb.png';
import Instagram from '../Assets/insta.png';
import Twitter from '../Assets/Group.png';
import LinkedIn from '../Assets/Linkedin.png';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className='text-center fw-bolder mt-3'>
                <div className='d-flex justify-content-center gap-5'>
                    <img src={Facebook} alt='Facebook'/>
                    <img src={Instagram} alt='Instagram'/>
                    <img src={Twitter} alt='Twitter' />
                    <img src={LinkedIn} alt='LinkedIn'/>
                </div>
                <br/>
                <p className='footerText'>Copyright &copy; {year} All rights are reserved </p>
            </footer>
        </>
    );
}

export default Footer;
