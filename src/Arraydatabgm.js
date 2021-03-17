import iliyarajaFlute from './Audio/BGM/Ilayaraja Flute Composing.mp3'
import iliyarajaViolen from './Audio/BGM/Ilayaraja Violen Composing.mp3'
import iliyarajaSAD from './Audio/BGM/Ilayaraja sad BGM Composing.mp3'

import sad from './Images/sad.svg'
import iliyaraja from './Images/ilayaraja.jpg'

export const songdata = [
    {
        id:0,
        photo:iliyaraja,
        songPath: iliyarajaFlute,
        songName: "flute instrumental BGM",
        singer: "Flute",
        MovieName: "Vichithra sodharulu"
      },

      {
        id:1,
        photo:iliyaraja,
        songPath: iliyarajaViolen,
        songName: "violin instrumental BGM",
        singer: "violin",
        MovieName: "Vichithra sodharulu"
      },
      {
        id:2,
        photo:sad,
        songPath: iliyarajaSAD,
        songName: "Flute & violin",
        singer: "N.A",
        MovieName: "Vichithra sodharulu"
      }
  ]
  
  export default {
    songdata,
  }