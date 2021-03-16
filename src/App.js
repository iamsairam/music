import React from 'react';
import './App.css'
import DesktopMusicapp from './DesktopMusicapp';
import MobileMusicapp from './MobileMusicapp';
import Newalbum from './Newalbum';
import useWindowSize from './useWindowSize'
function App(props) {
  const size= useWindowSize();
    if(size.width>768){
      return ( <div>
        <DesktopMusicapp />
        
        </div> );
        }
        else{
           return( <Newalbum  /> );
        }
}

export default App;