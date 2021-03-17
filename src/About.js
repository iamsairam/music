import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './MoblieStyles.css';
import './Home.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import construction from './Images/Constructing.svg';


function About(props) {

    return (
        <div>
        <div style={{boxShadow:'5px 5px 25px 25px rgb(0,0,0,0.1)',margin:'10px',borderRadius:'15px'}}>

            <div className='layout-margins'>

              <div className="header">
              
              <Link className="fs-20" to='/'><ArrowBackIcon className='fs-20'/></Link>

              <div className="fs-20">About Us</div>
                
              </div>

              <div class="body" style={{height:'85vh',display:'table'}}>
                  <div style={{display:'table-cell',verticalAlign:'middle'}}>
                  <div className='text-center' >
                      <h4>About us page is in under construction</h4>
                      <img src={construction} alt='construction' style={{width:'100%'}} />
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

export default About;