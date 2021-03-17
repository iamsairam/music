import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './PlayList.css';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


  // *********** sneakPeakAlertCode **********
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// ********* sneakPeakAlertCode Close *********


function Album({songs}) {
    const product = songs;
  const [stateVal,setStateVal]=useState(0);
  const tracksLength = product.songdata.length-1;
  // console.log(tracksLength);

  const nextTrack= () =>{
    if(tracksLength>stateVal){
      setStateVal(prevState=>prevState+1);
    }else{
      alert(`Only ${tracksLength+1} Songs We Have`);
      setStateVal(0);
    }
  }
  const prevTrack = ()=>{
    if (0 < stateVal) {
      setStateVal(prevState=>prevState-1);
    }
  }

  // ***************** sneakPeakAlertCode ***************
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = (events) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    //*********** */ sneakPeakAlertCode Close *************

    return (
        <div>
        <div style={{boxShadow:'10px 5px 30px 30px rgb(0,0,0,0.1)',margin:'10px',marginTop:'50px',borderRadius:'15px'}}>
        <div className="layout-margins">

            <div className='title-section'>
            <div className="space">
            <Link to="/"> <ArrowBackIcon /> </Link>
            </div>
            <div className="movie-title text-center">{`${product.songdata[stateVal].MovieName}`}</div>
            <div className="play-list-count tect-right">{`${stateVal+1}/${product.songdata.length}`}</div>
            </div>

            <div className="Img-section">
                <div className="text-center">
                    <img src={product.songdata[stateVal].photo} alt={product.songdata[stateVal].MovieName} />
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
      
      onPlay={events=>{handleClick()}}
    // other props here
    />
            </div>

        <Snackbar open={open} autoHideDuration={5500} onClose={handleClose}>
        <Alert onClose={handleClose} className='Alert-Style'>
        Please Wait. {product.songdata[stateVal].songName} song may take 5 to 6 seconds of time to load
        </Alert>
        </Snackbar>

        </div>
        </div>
        </div>
    );
}

export default Album;