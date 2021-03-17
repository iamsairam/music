import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './MoblieStyles.css';
import './Home.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import sairam from './Images/sairam.svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Git from './Images/Icons/github.svg'
import LinkedIn from './Images/Icons/linkedin.svg'

function Contact(props) {

    return (
        <div>
        <div style={{boxShadow:'5px 5px 25px 25px rgb(0,0,0,0.1)',margin:'10px',borderRadius:'15px'}}>

            <div className='layout-margins'>

              <div className="header">
              
              <Link className="fs-20" to='/'><ArrowBackIcon className='fs-20'/></Link>

              <div className="fs-20">Contact Us</div>
                
              </div>

              <div class="body" style={{minHeight:'85vh',width:'100%',paddingBottom:'100px'}}>
                <div class='contact-page' >
                <h2>SAIRAM Nagulavancha</h2> 
                <h3>Web Developer</h3>
                <div class='portfoilio-link'><a href='https://iamsairam.github.io/sairam/'>Here is my <span>Portfolio Link</span></a></div>   
                <img src={sairam} width='100%'/>
                <br />  

                <table className='info-table' border='1'>
                    <tr>
                        <td>
                        <div><MailOutlineIcon style={{justifySelf:'center'}} /><span> Mail Id</span> </div>
                        </td>
                        <td>mohan.sairam572@gmail.com</td>
                    </tr>
                    <tr>
                        <td>
                            <div><PhoneAndroidOutlinedIcon style={{justifySelf:'center'}}/><span> Phone No.</span></div>
                        </td>
                        <td>8919111249</td>
                    </tr>
                    <tr>
                        <td >
                        <div> <LocationOnOutlinedIcon style={{justifySelf:'center'}} /><span>Address</span></div>
                         </td>
                        <td>Paritala, Vijayawada, Krishna(Dt), Andhrapradesh, 521180</td>
                    </tr>
                </table>

                <div className='social-media-icon'>
                <div><a href='https://www.linkedin.com/in/sairamnagulavancha/' ><img src={LinkedIn} alt='LinkedIn' /></a></div>
                <div><a href='https://github.com/iamsairam' ><img src={Git} alt='GitHub' /></a></div>
                </div>

                </div>
              </div>
           
           
            <div className="footer">
            <div className="footer-bar">

            <div className="footer-bar-icons">

                <div style={{marginLeft:'25px'}}>
                    <Link className='footer-icons' to="/">
                    <HomeOutlinedIcon style={{fontSize:'30px'}} />
                    <span>Home</span>
                    </Link>
                </div>
                
                <div >
                    <Link className='footer-icons' to='/About'>
                    <InfoOutlinedIcon style={{fontSize:'30px'}}/>
                    <span>About</span>
                    </Link>
                </div>
                
                <div style={{marginRight:'25px'}}>
                    <Link className='footer-icons' to='/Contact'>
                    <PersonOutlineOutlinedIcon style={{fontSize:'30px'}} />
                    <span>Contact</span>
                    </Link>
                </div>

            </div>

            </div>
            </div>

            </div>

        </div>
        </div>
    );
}

export default Contact;