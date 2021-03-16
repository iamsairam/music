import Jalsa from './Audio/JoshSongs/01 - Jalsa -Naasongs.Audio.mp3'
import chalore_chal from './Audio/JoshSongs/03 - You & I -Naasongs.Audio.mp3'
import Kannepittaro from './Audio/JoshSongs/05 - Kannepittaro -Naasongs.Audio.mp3'
import Killi_Killi from './Audio/JoshSongs/06 - Killi Killi -Naasongs.Audio.mp3'
import Chilakamma from './Audio/JoshSongs/Chilakamma -SAIRAM.Audio.mp3'
import Le_Le_Le from './Audio/JoshSongs/Le Le Le Le -SAIRAM.Audio.mp3'
import NeneHero from './Audio/JoshSongs/Majnu - Nene Nene Hero-Naasongs.me.mp3'

import nani from './Images/nani.jpg';
import spc from './Images/spc.jpg'
import orange from './Images/orange.jpg'
import mano from './Images/mano.jpg'
import pk from './Images/pavan.jpg' 
import spb from './Images/spb.jpg'

export const songdata = [
    {
        id:0,
        photo:pk,
        songPath: Jalsa,
        songName: "Sarigama Padhanisa ",
        singer: "Baba Sigal",
        MovieName: "Jalsa"
      },

      {
        id:1,
        photo:spc,
        songPath: chalore_chal,
        songName: "Ye Jindhagi Nadavalante Hasthe Hasthe",
        singer: "DSP",
        MovieName: "Jalsa"
      },
      {
        id:2,
        photo:spb,
        songPath: Kannepittaro,
        songName: "KannePettaro",
        singer: "SP Balu",
        MovieName: "Hello Brother"
      },
      {
        id:3,
        photo:pk,
        songPath:Chilakamma,
        songName: "Chilakamma Mukkuki Dhonda...",
        singer: "N.A",
        MovieName: "Gudumaba Shankar"
      },
      {
        id:4,
        photo:pk,
        songPath:Killi_Killi,
        songName: "Killi Killi",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:5,
        photo:pk,
        songPath:Le_Le_Le,
        songName: "Le Le Le ivalle le le",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:6,
        photo:spb,
        songPath:NeneHero,
        songName: "Nenne Hero",
        singer: "SP Balu",
        MovieName: "Majnoo(Old)"
      }
  ]
  
  export default {
    songdata,
  }