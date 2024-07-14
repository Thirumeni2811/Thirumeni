import React from 'react';
import { NavbarBrand } from 'reactstrap';
import './Project.css'; 
import bank from '../Assets/Bank.jpg'; 
import GitHub from '../Assets/Github.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
const Bank = () => {
  return (
    <>
      <section className='Bank p-1'>
        <header className='flex border-double border-b-4 border-black p-2 items-center'>
          <NavbarBrand href="/" className='nameSet'>
            <h1>Projects</h1>
          </NavbarBrand>
        </header>

        <div className='title'>
          <h2 className='text-center'>Banking Application</h2>
        </div>

         <main className='m-5'>

            <div className='flex justify-center items-center gap-5'>
                <img src={bank} alt='Bank' className='w-72 ml-3' />
      
                  <ul className='mb-0'>
                    <div className='flex justify-left cursor-pointer mb-4'>
                      <h1 className='bg-[#FF6464] text-[#d3e9f0] border-none rounded-md w-fit h-fit px-6 py-2 font-semibold text-2xl hover:bg-[#d3e9f0] hover:text-[#FF6464]'>Mini Project</h1>
                      <h1 className='bg-[#d3e9f0] text-[#FF6464] ml-4 border-none rounded-md w-fit h-fit px-6 py-2 font-semibold text-2xl hover:bg-[#FF6464] hover:text-[#d3e9f0]'>Java</h1>
                    </div>
                    <a href='#app'>
                      <h3 className='font-extrabold text-3xl' >1. Banking app</h3>
                    </a>
                    <a href='#application'>
                      <h3 className='font-extrabold text-3xl'>2. Bank Application </h3>
                    </a>
                    <div className='my-3'>
                      <a href='https://github.com/Thirumeni2811/Banking-Application' className='text-xl text-inherit no-underline font-semibold ml-2'>
                        <img src={GitHub} alt='GitHub' className='float-left'/>
                        GitHub
                      </a>
                    </div>
                    <div className='text-blue-600'>
                      <a href='https://github.com/Thirumeni2811/Banking-Application' className='text-xl text-inherit no-underline font-semibold ml-2' target='_blank' rel='noopener noreferrer'>
                        <PlayArrowIcon className='float-left mt-1'/>
                        Live Demo
                      </a>
                    </div>
                  </ul>

            </div>
            
            </main>


            <article className='bg-[#EDF7FA] p-12 flex gap-12'>
              <div className='bg-white p-4 rounded-xl' id='app'>
                <h3 className='font-extrabold text-3xl text-center'> Banking App </h3>
                <h5 className='text-center text-2xl text-justify font-bold text-lg'>This code allows for the creation of multiple customers.</h5>
                <p className='text-lg text-justify font-normal'>The BankingApp project manages multiple customer accounts using an array of BankDetails objects. Each object represents a customer with methods for account creation, balance management, and transaction handling. It features a menu-driven interface allowing users to display all account details, search by account number, deposit funds, and withdraw funds. This project is structured for handling diverse customer interactions and scalable data management within a centralized system.</p>
              </div>
              <div className='bg-white p-4 rounded-xl' id='application'>
                <h3 className='font-extrabold text-3xl text-center'> Bank Application </h3>
                <h5 className='text-center text-2xl text-justify font-bold text-lg'>This code allows for the creation of only one customer.</h5>
                <p className='text-lg text-justify font-normal'>The Banking Application project focuses on a single customer's banking operations with basic functionalities like checking balance, depositing, withdrawing, and viewing transactions. It offers a straightforward menu-driven interface, ideal for applications needing simple customer management. This project consolidates all banking operations into a single application, providing an efficient and direct implementation for managing individual customer accounts.</p>
              </div>
            </article>
      </section>
      <Footer />
    </>
  );
}

export default Bank;
