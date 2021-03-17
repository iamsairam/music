import React from 'react';
import construction from './Images/Constructing.svg';
function DesktopMusicapp(props) {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
            Desktop site is in underconstruction 
            </h1>
            <h3 style={{textAlign:'center'}}>
            Please open this link in mobile devices only
            </h3>
            <div style={{textAlign:'center',marginTop:'50px'}}>
            <img src={construction} width="50%" />
            </div>
        </div>
    );
}

export default DesktopMusicapp;