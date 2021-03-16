import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './PlayList.css';

function Album({songs}) {
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
        <div style={{boxShadow:'10px 5px 70px 70px rgb(0,0,0,0.1)',margin:'10px',marginTop:'75px',borderRadius:'15px'}}>
        <div className="layout-margins">

            <div className='title-section'>
            <div className="space"><LibraryMusicIcon /></div>
            <div className="movie-title text-center">{`${product.songdata[stateVal].MovieName}`}</div>
            <div className="play-list-count tect-right">{`${stateVal+1}/${product.songdata.length}`}</div>
            </div>

            <div className="Img-section">
                <div className="text-center">
                    <img src={product.songdata[stateVal].photo} alt="Img" />
                </div>
            </div>

            <div className="Player-Controls" style={{paddingBottom:'25px'}}>
            <div className="song-name">Song : {product.songdata[stateVal].songName}</div>  
            <div className="song-singer">Singer : {product.songdata[stateVal].singer}</div>      
      <AudioPlayer
      autoPlay={false}
      src={product.songdata[stateVal].songPath}
                
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
        </div>
        </div>
    );
}

export default Album;