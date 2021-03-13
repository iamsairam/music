import React from 'react';
import DesktopMusicapp from './DesktopMusicapp';
import MobileMusicapp from './MobileMusicapp';
import useWindowSize from './useWindowSize'
function App(props) {
  const size= useWindowSize();
    if(size.width>768){
      return ( <div><DesktopMusicapp /></div> );
        }
        else{
           return( <div><MobileMusicapp /></div> );
        }
}

export default App;