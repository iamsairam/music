import Telusa_manasa from './Audio/LoveSongs/Telusa Manasa - Balu.Audio.mp3'
import NeneHero from './Audio/JoshSongs/Majnu - Nene Nene Hero-Naasongs.me.mp3'
import Kannepittaro from './Audio/JoshSongs/05 - Kannepittaro -Naasongs.Audio.mp3'
import Aamani from './Audio/SadMusic/Aamani.mp3'
import O_Papa_Lali from './Audio/SadMusic/O Papa Lali.mp3'
import Oo_Priya_Priya from './Audio/SadMusic/oo priya priya.mp3'

import nag from './Images/nag.jpg'

export const songdata = [
    {
        id:0,
        photo:nag,
        songPath: Telusa_manasa,
        songName: "Telusa Manasa",
        singer: "SP Balu",
        MovieName: "Criminal"
      },

      {
        id:1,
        photo:nag,
        songPath: NeneHero,
        songName: "Nene Hero",
        singer: "SP Balu",
        MovieName: "Majnu(Old)"
      },
      {
        id:2,
        photo:nag,
        songPath: Kannepittaro,
        songName: "Kanne Petta ro kannu",
        singer: "SP Balu",
        MovieName: "Hello Brother"
      },
      {
        id:3,
        photo:nag,
        songPath:Aamani,
        songName: "Aamani Padave",
        singer: " SP Balu",
        MovieName: "Geethanjali"
      },
      {
        id:4,
        photo:nag,
        songPath:O_Papa_Lali,
        songName: "O papa lali",
        singer: "SP Balu",
        MovieName: "Geethanjali"
      },
      {
        id:5,
        photo:nag,
        songPath:Oo_Priya_Priya,
        songName: "O Priya Priya",
        singer: "SP Balu",
        MovieName: "Geethanjali"
      }      
  ]
  
  export default {
    songdata,
  }