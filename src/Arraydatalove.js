import Adhento from './Audio/LoveSongs/Adhento Gaani Vunnapaatuga-Naasongsmp3.info.mp3'
import chiguraku from './Audio/LoveSongs/Chiguraku Chaatu -Naasongs.Audio.mp3'
import chilipiga_chus from './Audio/LoveSongs/Chilipiga-Naasongs.Audio.mp3'
import Chukkalu from './Audio/LoveSongs/Chukklau Themmana-Naasongs.me.mp3'
import Emantaro from './Audio/LoveSongs/Emantaro -Naasongs.Audio.mp3'
import Gallo from './Audio/LoveSongs/Gaallo Thelinattunde -Naasongs.Audio.mp3'
import My_Heart from './Audio/LoveSongs/My Heart Is Beating -Naasongs.Audio.mp3'
import Na_Cheli from './Audio/LoveSongs/Naa Cheli Rojave.mp3'
import Oolaolala from './Audio/LoveSongs/Ola Olaala Ala-Naasongs.Audio.mp3'
import Telusa_manasa from './Audio/LoveSongs/Telusa Manasa - Balu.Audio.mp3'
import nani from './Images/nani.jpg';
import spc from './Images/spc.jpg'
import orange from './Images/orange.jpg'
import mano from './Images/mano.jpg'
import pk from './Images/pavan.jpg' 
import spb from './Images/spb.jpg'

export const songdata = [
    {
        id:0,
        photo:nani,
        songPath: Adhento,
        songName: "Adhento gani unna",
        singer: " N.A",
        MovieName: "jersy"
      },

      {
        id:1,
        photo:spc,
        songPath: chiguraku,
        songName: "chigaraku chatu chiluka",
        singer: "N.A",
        MovieName: "Gudumba Shankar"
      },
      {
        id:2,
        photo:orange,
        songPath: chilipiga_chus,
        songName: "chilipiga chusthav ala",
        singer: "N.A",
        MovieName: "Orange"
      },
      {
        id:3,
        photo:spc,
        songPath:Emantaro,
        songName: "Emantaro neeku nakunna",
        singer: " SP. charan",
        MovieName: "Gudumaba Shankar"
      },
      {
        id:4,
        photo:mano,
        songPath:Chukkalu,
        songName: "chukkalu themanna",
        singer: "N.A",
        MovieName: "April 1 vidudhala"
      },
      {
        id:5,
        photo:pk,
        songPath:Gallo,
        songName: "gallo thelinattu undhe",
        singer: "N.A",
        MovieName: "Jalsa"
      },
      {
        id:6,
        photo:pk,
        songPath:My_Heart,
        songName: "my heart is beating adhola",
        singer: "N.A",
        MovieName: "jalsa"
      },
      {
        id:7,
        photo:spb,
        songPath:Na_Cheli,
        songName: "na cheli rojave",
        singer: "SP Balasubramanayam",
        MovieName: "Roja"
      },
      {
        id:8,
        photo:orange,
        songPath:Oolaolala,
        songName: "oola olalala",
        singer: "N.A",
        MovieName: "Orange"
      },
      {
        id:9,
        photo:spb,
        songPath:Telusa_manasa,
        songName: "Telusa manasa",
        singer: "SP Bala subramanayam",
        MovieName: "Criminal"
      }
  ]
  
  export default {
    songdata,
  }