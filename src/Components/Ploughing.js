import React, { useState } from 'react';
import { NavbarBrand } from 'reactstrap';
import './Project.css'; 
import bank from '../Assets/Bank.jpg'; 
import GitHub from '../Assets/Github.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './Footer';

 //Tabs
 function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Ploughing = () => {

  //Accordion
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //Tabs
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    
  return (
    <>
      <section className='Bank p-1'>
        <header className='flex border-double border-b-4 border-black p-2 items-center'>
          <NavbarBrand href="/" className='nameSet'>
            <h1>Projects</h1>
          </NavbarBrand>
        </header>

        <div className='title'>
          <h2 className='text-center'>Trouble Free Ploughing</h2>
        </div>

        <main className='m-5'>
          <div className='flex justify-center items-center gap-5'>
            <img src={bank} alt='Bank' className='w-72 ml-3' />
            <ul className='mb-0'>
              <div className='flex justify-left cursor-pointer mb-4'>
                <h1 className='bg-[#FF6464] text-[#d3e9f0] border-none rounded-md w-fit h-fit px-6 py-2 font-semibold text-2xl hover:bg-[#d3e9f0] hover:text-[#FF6464]'>
                  Mini Project
                </h1>
                <h1 className='bg-[#d3e9f0] text-[#FF6464] ml-4 border-none rounded-md w-fit h-fit px-6 py-2 font-semibold text-2xl hover:bg-[#FF6464] hover:text-[#d3e9f0]'>
                  Java
                </h1>
              </div>
              <h3 className='font-extrabold text-3xl text-black no-underline'>1. Banking app</h3>
              <h3 className='font-extrabold text-3xl no-underline'>2. Bank Application</h3>
              <div className='my-3'>
                <a href='https://github.com/Thirumeni2811/Banking-Application' className='text-xl text-inherit no-underline font-bold ml-2'>
                  <img src={GitHub} alt='GitHub' className='float-left'/>
                  GitHub
                </a>
              </div>
            </ul>
          </div>
        </main>

        <article className='bg-[#EDF7FA] p-12'>
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3 className='font-extrabold text-3xl text-center'>Banking App</h3>
              </AccordionSummary>
              <AccordionDetails>
                <h5 className='text-center text-2xl text-justify font-bold text-lg'>This code allows for the creation of multiple customers.</h5>
                <p className='text-lg text-justify font-normal mb-5'>
                  The BankingApp project is a console-based banking system application that allows multiple users to manage their bank accounts. It provides functionalities to create new accounts, display account details, deposit and withdraw money, and search for accounts by account number. This project demonstrates the fundamental concepts of object-oriented programming in Java, including encapsulation, classes, and methods.
                </p>
                <div className='px-3'>
                      <Box sx={{ bgcolor: 'background.paper', width: 1 }}>
                          <AppBar position="static">
                              <Tabs
                                value={value}
                                onChange={handleChangeTab}
                                variant="fullWidth"
                                aria-label="full width tabs example"
                                className='bg-[#d3e9f0]'
                              >
                                  <Tab label="Features" {...a11yProps(0)}/>
                                  <Tab label="Classes and Methods" {...a11yProps(1)} />
                                  <Tab label="User Interaction" {...a11yProps(2)} />
                              </Tabs>
                          </AppBar>
                          <SwipeableViews
                              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                              index={value}
                              onChangeIndex={handleChangeIndex}
                          >
                              <TabPanel value={value} index={0} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>1. Account Creation:</p>
                                  <p className='text-md text-justify font-normal indent-12'>Users can open new accounts by providing details such as account number, account type, name, and initial balance.</p>
                                  <p className='font-extrabold text-xl'>2. Display Account Details:</p>
                                  <p className='text-md text-justify font-normal indent-12'>The application can display the details of all accounts, including the account holder's name, account number, account type, and balance.</p>
                                  <p className='font-extrabold text-xl'>3. Deposit Money:</p>
                                  <p className='text-md text-justify font-normal indent-12'>Users can deposit money into their accounts by specifying the account number and the amount to be deposited.</p>
                                  <p className='font-extrabold text-xl'>4. Withdraw Money:</p>
                                  <p className='text-md text-justify font-normal indent-12'>Users can withdraw money from their accounts by specifying the account number and the amount to be withdrawn. The application checks if the balance is sufficient before allowing the withdrawal.</p>
                                  <p className='font-extrabold text-xl'>5. Search Account:</p>
                                  <p className='text-md text-justify font-normal indent-12'>Users can search for an account by its account number. If the account exists, its details are displayed.</p>
                              </TabPanel>

                              <TabPanel value={value} index={1} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>1. BankDetails Class:</p>
                                  <p className='text-lg text-justify font-semibold indent-4'>Attributes:</p>
                                  <p className='text-md text-justify font-normal indent-12'>accno (String): Stores the account number.</p>
                                  <p className='text-md text-justify font-normal indent-12'>name (String): Stores the account holder's name.</p>
                                  <p className='text-md text-justify font-normal indent-12'>acc_type (String): Stores the type of the account (e.g., Savings, Checking).</p>
                                  <p className='text-md text-justify font-normal indent-12'>balance (long): Stores the current balance of the account.</p>
                                  <p className='text-lg text-justify font-semibold indent-4'>Methods:</p>
                                  <p className='text-md text-justify font-normal indent-12'>openAccount(): Prompts the user to enter account details and initializes the account.</p>
                                  <p className='text-md text-justify font-normal indent-12'>showAccount(): Displays the account details.</p>
                                  <p className='text-md text-justify font-normal indent-12'>deposit(): Prompts the user to enter an amount to deposit and updates the balance.</p>
                                  <p className='text-md text-justify font-normal indent-12'>withdrawal(): Prompts the user to enter an amount to withdraw and updates the balance if sufficient funds are available.</p>
                                  <p className='text-md text-justify font-normal indent-12'>search(String ac_no): Searches for an account by its account number and displays the details if found.</p>
                                  <p className='font-extrabold text-xl'>2. BankingApp Class:</p>
                                  <p className='text-lg text-justify font-semibold indent-4'>Attributes:</p>
                                  <p className='text-md text-justify font-normal indent-12'>C (BankDetails[]): An array to store multiple BankDetails objects, representing multiple user accounts.</p>
                                  <p className='text-lg text-justify font-semibold indent-4'>Methods:</p>
                                  <p className='text-md text-justify font-normal indent-12'>main(String[] args): The main method that drives the application. It prompts the user to input the number of customers, initializes the accounts, and provides a menu for the user to interact with the banking system.</p>
                              </TabPanel>

                              <TabPanel value={value} index={2} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>1. Opening New Accounts:</p>
                                  <p className='text-md text-justify font-normal indent-12'>The user specifies the number of accounts to create. For each account, the user enters the account number, account type, name, and initial balance.</p>
                                  <p className='font-extrabold text-xl'>2. Banking Menu:</p>
                                  <p className='text-md text-justify font-normal indent-12'>The application displays a menu with options to display account details, search for an account, deposit money, withdraw money, or exit the application. The user selects an option by entering the corresponding number.</p>
                                  <p className='font-extrabold text-xl'>3. Depositing and Withdrawing Money:</p>
                                  <p className='text-md text-justify font-normal indent-12'>The user enters the account number and the amount to deposit or withdraw. The application validates the account number and updates the balance accordingly.</p>
                                  <p className='font-extrabold text-xl'>4. Searching for Accounts:</p>
                                  <p className='text-md text-justify font-normal indent-12'>The user enters the account number to search for. The application displays the account details if the account is found, otherwise, it notifies the user that the account does not exist.</p>
                              </TabPanel>
                          </SwipeableViews>
                        </Box>                
                </div>

              </AccordionDetails>
            </Accordion>
          </div>

          <div className='mt-3'>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h3 className='font-extrabold text-3xl text-center'>Bank Application</h3>
              </AccordionSummary>
              <AccordionDetails>
                <h5 className='text-center text-2xl text-justify font-bold text-lg'>This code allows for the creation of only one customer.</h5>
                <p className='text-lg text-justify font-normal'>
                  The Banking Application project focuses on a single customer's banking operations with basic functionalities like checking balance, depositing, withdrawing, and viewing transactions. It offers a straightforward menu-driven interface, ideal for applications needing simple customer management. This project consolidates all banking operations into a single application, providing an efficient and direct implementation for managing individual customer accounts.
                </p>
                <div className='px-3'>
                      <Box sx={{ bgcolor: 'background.paper', width: 1 }}>
                          <AppBar position="static">
                              <Tabs
                                value={value}
                                onChange={handleChangeTab}
                                variant="fullWidth"
                                aria-label="full width tabs example"
                                className='bg-[#d3e9f0]'
                              >
                                  <Tab label="Features" {...a11yProps(0)}/>
                                  <Tab label="Classes and Methods" {...a11yProps(1)} />
                                  <Tab label="User Interaction" {...a11yProps(2)} />
                              </Tabs>
                          </AppBar>
                          <SwipeableViews
                              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                              index={value}
                              onChangeIndex={handleChangeIndex}
                          >
                              <TabPanel value={value} index={0} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>Account Initialization</p>
                                  <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                      <li>When the program starts (main method in BankingApplication class), it initializes a BankAccount object with a customer name and ID.</li>
                                      <li>The user's name and ID are prompted and stored.</li>
                                  </ul>

                                  <p className='font-extrabold text-xl'>Operations Supported</p>
                                  <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                      <li>Check Balance (A): Displays the current balance of the account.</li>
                                      <li>Deposit (B): Allows the user to deposit a specified amount into their account.</li>
                                      <li>Withdraw (C): Allows the user to withdraw a specified amount from their account, ensuring sufficient balance.</li>
                                      <li>Previous Transaction (D): Shows the details of the last transaction (whether deposit or withdrawal).</li>
                                      <li>Exit (E): Ends the banking session.</li>
                                  </ul>
                              </TabPanel>

                              <TabPanel value={value} index={1} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>BankAccount Class</p>
                                  <ul className='list-disc list-inside text-md text-justify font-normal'>
                                      <li className='text-lg text-justify font-semibold'>Attributes:</li>
                                      <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                          <li>balance (int): Stores the current balance of the account.</li>
                                          <li>previousTransaction (int): Stores the amount of the last transaction (positive for deposit, negative for withdrawal).</li>
                                          <li>customerName (String): Stores the customer's name.</li>
                                          <li>customerId (String): Stores the customer's ID.</li>
                                      </ul>
                                      <li className='text-lg text-justify font-semibold'>Constructor:</li>
                                      <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                          <li>BankAccount(String cname, String cid): Initializes the customerName and customerId attributes.</li>
                                      </ul>
                                      <li className='text-lg text-justify font-semibold'>Methods:</li>
                                      <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                          <li>deposit(int amount): Adds the specified amount to the balance.</li>
                                          <li>withdraw(int amount): Subtracts the specified amount from the balance, if sufficient funds are available.</li>
                                          <li>getPreviousTransaction(): Prints the details of the last transaction (previousTransaction).</li>
                                          <li>showMenu(): Displays a menu for the user to interact with the banking system. It handles user input, processes operations based on the selected option, and continues until the user chooses to exit.</li>
                                      </ul>
                                  </ul>

                                  <p className='font-extrabold text-xl'>BankingApplication Class</p>
                                  <ul className='list-disc list-inside text-md text-justify font-normal'>
                                      <li className='text-lg text-justify font-semibold'>Main Method:</li>
                                      <ul className='list-decimal list-inside'>
                                          <li>Initializes a BankAccount object (obj1) with a predefined customer name ("ABC") and customer ID ("BA0012").</li>
                                          <li>Invokes the showMenu() method on obj1 to start the banking operations for the user.</li>
                                      </ul>
                                  </ul>
                              </TabPanel>

                              <TabPanel value={value} index={2} dir={theme.direction}>
                                  <p className='font-extrabold text-xl'>User Interaction</p>
                                  <ul className='list-decimal list-inside text-md text-justify font-normal'>
                                      <li>The program interacts with the user through a console interface.</li>
                                      <li>Upon startup, the user is prompted to enter their name and ID.</li>
                                      <li>They are presented with a menu of options (A to E), and they select an option by entering the corresponding letter.</li>
                                      <li>Each operation updates the account state and provides feedback to the user about the action taken.</li>
                                  </ul>
                              </TabPanel>

                          </SwipeableViews>
                        </Box>                
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Ploughing;
