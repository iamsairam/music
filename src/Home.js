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
import spb from './Images/spb.jpg';

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
                        <img src={Love} />
                        <div className='album-title'>
                           <div className="title-track-name">Love Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                    <Link className="card" to="/JoshfullSongs">
                        <img src={Josh} />
                        <div className='album-title'>
                           <div className="title-track-name">Joshfull Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                    <Link className="card" to='/SadSongs'>
                        <img src={sad} />
                        <div className='album-title'>
                           <div className="title-track-name">Sad Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </Link>

                </div>

                <div className="new-card" style={{marginTop:'25px'}}>
                    <div className="card">
                       <img src={devotional} />
                       <div className='album-title'>
                           <div className="title-track-name">Devotional Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={BGM} />
                        <div className='album-title'>
                           <div className="title-track-name">BGM(Backgroung Music)</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div>
                    </div>
                    <div className="card">
                        {/* <img src={spb} style={{opacity:0.75}} />
                        <div className='album-title'>
                           <div className="title-track-name">SP Balu Songs</div>
                            <span>Mix:{`${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`}</span>
                        </div> */}
                    </div>
                </div>

            <div className="Recommended-section">
            <div className="title">Recommended Songs</div>
            Comming Soon.....
            </div>


            </div>

            <div className="footer">
            <h1>Footer</h1>
            </div>

            </div>

        </div>
        </div>
    );
}

export default Home;