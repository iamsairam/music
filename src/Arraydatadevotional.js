import Ganesh from './Audio/Devotional/Jaya Jaya Subhakara.mp3'
import Balaji from './Audio/Devotional/Brahma Kadigina Padamu.mp3'
import Govindh from './Audio/Devotional/adhivooo.mp3'
import Ayyappa from './Audio/Devotional/Ayyappa Devaya.mp3'
import Madhava from './Audio/Devotional/Kalaganti Kalaganti (1).mp3'
import Venkateswar from './Audio/Devotional/Kondalalo Nelakonna.mp3'
import Dhurgamma from './Audio/Devotional/Maha Kanaka Durga.mp3'
import ShriRam from './Audio/Devotional/ramanamam.mp3'
import Sairam from './Audio/Devotional/saibaba.mp3'

import ganeshImg from './Images/ganesh.jpg'
import venkateswara from './Images/venkateswara.jpg'
import ayyappaImg from './Images/ayappa.jpg'
import dhurga from './Images/Dhurga.jpg'
import rama from './Images/rama.jpg'
import saibaba from './Images/saibaba.jpg'





export const songdata = [
    {
        id:0,
        photo:ganeshImg,
        songPath: Ganesh,
        songName: "Jaya Kara Shubakara Vinayaka",
        singer: " SP Balu",
        MovieName: "Dhevullu"
      },

      {
        id:1,
        photo:venkateswara,
        songPath: Balaji,
        songName: "Brahma kadigina padham",
        singer: "N.A",
        MovieName: "Annamaya"
      },
      {
        id:2,
        photo:venkateswara,
        songPath: Govindh,
        songName: "Adhivooo",
        singer: "SP Balu",
        MovieName: "Annamaya"
      },
      {
        id:3,
        photo:ayyappaImg,
        songPath:Ayyappa,
        songName: "Ayyappa dhevaya",
        singer: "SP Balu",
        MovieName: "Devullu"
      },
      {
        id:4,
        photo:venkateswara,
        songPath:Madhava,
        songName: "kalaganti kalaganti",
        singer: "SP Balu",
        MovieName: "Annamaya"
      },
      {
        id:5,
        photo:venkateswara,
        songPath:Venkateswar,
        songName: "Kondallo nelakonna",
        singer: "SP Balu",
        MovieName: "Annamaya"
      },
      {
        id:6,
        photo:dhurga,
        songPath:Dhurgamma,
        songName: "Maha Kannaka Dhurga",
        singer: "N.A",
        MovieName: "Dhevullu"
      },
      {
        id:7,
        photo:rama,
        songPath:ShriRam,
        songName: "Andhari Bandhuvayya",
        singer: "SP Balasubramanayam",
        MovieName: "Dhevullu"
      },
      {
        id:8,
        photo:saibaba,
        songPath:Sairam,
        songName: "Sai Padham...",
        singer: "MM Keeravani",
        MovieName: "Shrdi Sai"
      }
  ]
  
  export default {
    songdata,
  }