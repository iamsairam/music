import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Newalbum({songs}) {
    const product = songs;
  const [stateVal,setStateVal]=useState(0);
  const tracksLength = product.songdata.length-1;
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
       <div className='title-section'>   
      <div className="MovieName">
          {`Movie:${product.songdata[stateVal].MovieName}`}
     </div>  
      <div className='Total-songs'>{`Total songs : ${stateVal+1}/${product.songdata.length}`}</div>
      </div>
      <div className="img-container animate-img">
      <img src={product.songdata[stateVal].photo} className="img-size"/>
      </div>
      
      <AudioPlayer
      autoPlay={false}
      src={product.songdata[stateVal].songPath}
      header={`Song: ${product.songdata[stateVal].songName}`}
      footer={`Singer:${product.songdata[stateVal].singer}`}
           
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