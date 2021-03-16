import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AdeNeevu from './Audio/Ade Neevu-SAIRAM.Audio.mp3'
import NaaCheli from './Audio/Naa Cheli Rojave.mp3'
import Chilakamma from './Audio/Chilakamma -SAIRAM.Audio.mp3'
import Telusa from './Audio/Telusa Manasa - Balu.Audio.mp3'
import Le_Le_Le_Ivalle_Le_Le from './Audio/Le Le Le Le -SAIRAM.Audio.mp3'
import spbalu from './Images/spb.jpg'
import pavan from './Images/pavan.jpg'
function Newalbum(props) {
  const src = [
    {
      id:0,
      photo:spbalu,
      songPath: AdeNeevu,
      songName: "Ade Nuvvu Ade Nenu",
      singer: " SP.BalaSubramanyam",
      MovieName: "Aaradhana"
    },
    {
      id:1,
      photo:pavan,
      songPath: Chilakamma,
      songName: "Chilakamma song",
      singer: " N.A",
      MovieName: "Gudumba Shankar"
    },
    {
      id:2,
      photo:spbalu,
      songPath: NaaCheli,
      songName: "Na cheli rojave",
      singer: " SP. Bala Subramanyam",
      MovieName: "Roja Movie"
    },
    {
      id:3,
      photo:spbalu,
      songPath:Telusa,
      songName: "Telusa Manasa",
      singer: " SP. Bala Subramanyam",
      MovieName: "Gudumaba Shankar"
    },
    {
      id:4,
      photo:pavan,
      songPath:Le_Le_Le_Ivalle_Le_Le,
      songName: "Le Le Le Ivalle Le Le",
      singer: "N.A",
      MovieName: "Gudumaba Shankar"
    }
  ];
  const [stateVal,setStateVal]=useState(0);
  const tracksLength = src.length-1;
  console.log(tracksLength);
  const nextTrack= () =>{
    if(tracksLength>stateVal){
      setStateVal(prevState=>prevState+1);
    }else{
      alert('This is the Last Song Loop is Activated');
      setStateVal(0);
    }
  }
  const prevTrack = ()=>{
    if (0 < stateVal) {
      setStateVal(prevState=>prevState-1);
    }
  }
  return (
    <div>
      <h1>Songs</h1>
      <div className='song-wrap'>
      <div className="title-section">
      <div className="MovieName">{`Movie : ${src[stateVal].MovieName}`}</div>  
      <div className='Total-songs'>{`Total songs : ${stateVal+1}/${src.length}`}</div>
      </div>
      <div className="img-container animate-img">
      <img src={src[stateVal].photo} className="img-size"/>
      </div>
      <AudioPlayer
      autoPlay={false}
      src={src[stateVal].songPath}
      header={`Song: ${src[stateVal].songName}`}
      footer={`Singer:${src[stateVal].singer}`}
           
      showSkipControls={true}
      showJumpControls={false}
      customAdditionalControls={[]}

      onClickNext={nextTrack}
      onClickPrevious={prevTrack}
      
      onPlay={e => console.log("onPlay")}
    // other props here
    />

      </div>
    </div>
  );
}

export default Newalbum;