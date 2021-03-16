import AdeNeevu from './Audio/SadMusic/Ade Neevu-SAIRAM.Audio.mp3'
import NaaCheli from './Audio/LoveSongs/Naa Cheli Rojave.mp3'
import spbalu from './Images/spb.jpg'
import pavan from './Images/pavan.jpg'

export const songdata  = [
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
        songPath: NaaCheli,
        songName: "Chilakamma song",
        singer: " N.A",
        MovieName: "Gudumba Shankar"
      }
  ]
  
  export default {
    songdata,
  }