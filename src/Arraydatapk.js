import Jalsa from './Audio/JoshSongs/01 - Jalsa -Naasongs.Audio.mp3'
import chalore_chal from './Audio/JoshSongs/03 - You & I -Naasongs.Audio.mp3'
import Killi_Killi from './Audio/JoshSongs/06 - Killi Killi -Naasongs.Audio.mp3'
import Chilakamma from './Audio/JoshSongs/Chilakamma -SAIRAM.Audio.mp3'
import Le_Le_Le from './Audio/JoshSongs/Le Le Le Le -SAIRAM.Audio.mp3'
import chiguraku from './Audio/LoveSongs/Chiguraku Chaatu -Naasongs.Audio.mp3'
import Emantaro from './Audio/LoveSongs/Emantaro -Naasongs.Audio.mp3'
import My_Heart from './Audio/LoveSongs/My Heart Is Beating -Naasongs.Audio.mp3'


import pk from './Images/PavanKalyan.jpg'

export const songdata = [
    {
        id:0,
        photo:pk,
        songPath: Jalsa,
        songName: "Sari gama padha neesa",
        singer: "Baba Saigal",
        MovieName: "Jalsa"
      },

      {
        id:1,
        photo:pk,
        songPath: chalore_chal,
        songName: "Ye jindhagi nadavalante hasthe hasthe ",
        singer: "DSP",
        MovieName: "Jalsa"
      },
      {
        id:2,
        photo:pk,
        songPath: Chilakamma,
        songName: "chilakamma mukkuki",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:3,
        photo:pk,
        songPath:Le_Le_Le,
        songName: "Le Le Le ivalle le",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:4,
        photo:pk,
        songPath:Killi_Killi,
        songName: "Killi Kiilli ",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:5,
        photo:pk,
        songPath:chiguraku,
        songName: "chiguraku chatu chiluka",
        singer: "SP Charan",
        MovieName: "Gudumba Shankar"
      } ,
      {
        id:6,
        photo:pk,
        songPath:Emantaro,
        songName: "Emantaro Neeku nakunna idhini",
        singer: "SP Charan",
        MovieName: "Gudumba Shankar"
      } ,
      {
        id:7,
        photo:pk,
        songPath:My_Heart,
        songName: "My Heart is breaking...",
        singer: "N.A",
        MovieName: "Jalsa"
      }      
  ]
  
  export default {
    songdata,
  }