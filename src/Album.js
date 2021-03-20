import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './PlayList.css';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


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
      handleModalOpen();
      // setStateVal(0);
    }
  }
  const prevTrack = ()=>{
    if (0 < stateVal) {
      setStateVal(prevState=>prevState-1);
    }
  }

// ***************** MakeStyles for ModalPopUp ***************** 

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgb(0,0,0,0.5)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontSize:'17px',
    fontWeight:600,
    borderRadius:'10px'
  },
}));


const [openModal, setOpenModal] = React.useState(false);

const handleModalOpen = () => {
  setOpenModal(true);
};

const handleModalClose = () => {
  setOpenModal(false);
  setStateVal(0);
};



// ***************** MakeStyles for ModalPopUp ***************** 


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
      onEnded={e=>{nextTrack()}}
      onPlay={events=>{console.log("Playing");}}
      onWaiting={ev=>{handleClick()}}
    // other props here
    />
            </div>

        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} className='Alert-Style'>
        Please Wait. {product.songdata[stateVal].songName} song may take 1 to 5 seconds of time to load
        </Alert>
        </Snackbar>

        </div>
        </div>

      <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            {
              `This album have only ${product.songdata.length} songs`
            }
          <div>
          <div>
            <div variant='outlined'>
              <Link className='modal-btn' to='/' style={{textDecoration:'none',color:'#000'}}>
              <HomeOutlinedIcon />
                Back To Home
              </Link>
            </div>
          </div>

          <div>
            <div onClick={handleModalClose} className='modal-btn' >
            <div><LoopOutlinedIcon /> </div>
            <div>Reload Songs</div>
            </div>
          </div>

          </div>

          </div>
        </Fade>
      </Modal>
    </div>



        </div>
    );
}

export default Album;