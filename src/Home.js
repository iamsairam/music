import React from 'react';
import { Link } from 'react-router-dom';
import './MoblieStyles.css';
import musicNotes from './Images/Icons/music-note.svg';
import './Home.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Josh from './Images/Josh.svg';
import Love from './Images/Love.svg';
import devotional from './Images/namaskar.svg';
import sad from './Images/sad.svg';
import BGM from './Images/BGM.svg'
import Classic from './Images/Classic.svg'
import spb from './Images/spb.jpg';
import KV from './Images/KVishwanath.jpg'
import pavankalyan from './Images/PavanKalyan.jpg'
import venky from './Images/venky.jpg'
import nag from './Images/nag.jpg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

function Home(props) {
let separator= '-'
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

    return (
        <div>
        <div style={{boxShadow:'5px 5px 25px 25px rgb(0,0,0,0.1)',margin:'10px',borderRadius:'15px'}}>

            <div className='layout-margins'>

              <div className="header">
                <div className="fs-20">Telugu Music App</div>
                <div className="fs-20"><MusicNoteIcon className='fs-20'/></div>
              </div>
           
            <div className="body">
                <div className="title">New Releases</div>
                <div className="new-card">

                    <Link className="card" to='/LoveSong'>
                        <img src={Love} alt="Love" />
                        <div className='album-title'>
                           <div className="title-track-name">Love Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                    <Link className="card" to="/JoshfullSongs">
                        <img src={Josh} alt='Josh' />
                        <div className='album-title'>
                           <div className="title-track-name">Joshfull Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                    <Link className="card" to='/SadSongs'>
                        <img src={sad} alt='Sad' />
                        <div className='album-title'>
                           <div className="title-track-name">heart break Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                </div>

                <div className="new-card" style={{marginTop:'25px'}}>
                    <Link className="card" to='/Devotional'>
                       <img src={devotional} alt="Devotional" />
                       <div className='album-title'>
                           <div className="title-track-name">Devotional Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>
                    <Link className="card" to='/Classic'>
                        <img src={Classic} alt="Classic"  />
                        <div className='album-title'>
                           <div className="title-track-name">Classic Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>
                    <Link className="card" to='/BGM'>
                        <img src={BGM} alt="BGM" />
                        <div className='album-title'>
                           <div className="title-track-name">BGM(Backgroung Music)</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                </div>

            <div className="Recommended-section" style={{paddingBottom:'100px'}}>
            <div className="title">
                Recommended Songs
            </div>
            
            <Link className="full-card" to='/SPB'>
                <img src={spb} alt="BGM" />
                <div className='Recommended-album-title'>
                    <div className="Recommended-title">SP Bala Subramanyam</div>
                    <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                </div>
             </Link>

             <Link className="full-card " to='/KV'>
                <img src={KV} alt="BGM" className='mt-30' />
                <div className='Recommended-album-title'>
                    <div className="Recommended-title">KalaThapaswi Shri K.Vishwanath</div>
                    <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                </div>
             </Link>     

             <Link className="full-card " to='/Nag'>
                <img src={nag} alt="BGM" className='mt-30' />
                <div className='Recommended-album-title'>
                    <div className="Recommended-title">Nagarjuna Songs</div>
                    <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                </div>
             </Link> 

             <Link className="full-card " to='/PK'>
                <img src={pavankalyan} alt="BGM" className='mt-30' />
                <div className='Recommended-album-title'>
                    <div className="Recommended-title">Pavan Kalyan Songs</div>
                    <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                </div>
             </Link> 

             <Link className="full-card " to='/Venky'>
                <img src={venky} alt="BGM" className='mt-30' />
                <div className='Recommended-album-title'>
                    <div className="Recommended-title">Venkatesh Songs</div>
                    <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                </div>
             </Link> 
             

            <br />

            <div style={{backgroundColor:"#623bc2",color:'#fff',padding:'10px',borderRadius:'10px',fontSize:'18px',fontWeight:600}}>
            The remaining Heroes, Director's, Singer's songs will be Updated Soon... 
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

export default Home;