import React from 'react';
import spb from './Images/spb.jpg'
import './MoblieStyles.css'
import AdheNuvvu from './Audio/Ade Neevu-SAIRAM.Audio.mp3'
function MobileMusicapp(props) {
    return (
        <div>
            <div  className="spb-music-section">
            <h2 style={{marginTop:'0',paddingTop:'50px',paddingBottom:'25px'}}>SP.BalaSubramanyam Songs</h2>
            <div>
            <img src={spb} className='chemilea-img' alt="image" className="spb-image" />
            </div>
            <div className='color-white'>
                <h3>Ade Neevu Ade Nenu </h3>
                <div>
                <span className='mr-1 mb-1'>Singer:SPB</span>
                <span className="ml-1 mb-1">Movie:Abhinandana</span>
                </div>
                
                <div className='mt-2'><audio controls>
                <source src={AdheNuvvu} type="audio/mpeg" />
            Your browser does not support the audio tag.
            </audio></div>
            </div>
            </div>
            
        </div>
    );
}

export default MobileMusicapp;