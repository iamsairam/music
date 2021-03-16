import Aamani from './Audio/SadMusic/Aamani.mp3'
import adeneevu from './Audio/SadMusic/Ade Neevu-SAIRAM.Audio.mp3'
import edutaneeve from './Audio/SadMusic/Eduta Neeve.mp3'
import hrudjayam from './Audio/SadMusic/Hrudayam-Naasongs.io.mp3'
import JabilliKosam from './Audio/SadMusic/Jabilli Kosam (Male Version).mp3'
import O_Papa_Lali from './Audio/SadMusic/O Papa Lali.mp3'
import Oo_Priya_Priya from './Audio/SadMusic/oo priya priya.mp3'

import nani from './Images/nani.jpg';
import spc from './Images/spc.jpg'
import orange from './Images/orange.jpg'
import mano from './Images/mano.jpg'
import pk from './Images/pavan.jpg' 
import spb from './Images/spb.jpg'

export const songdata = [
    {
        id:0,
        photo:spb,
        songPath: Aamani,
        songName: "Aamani Padave",
        singer: "SP BALU",
        MovieName: "Geetanjali"
      },

      {
        id:1,
        photo:spc,
        songPath: adeneevu,
        songName: "Ade Neevu Adhe Neenu",
        singer: "SP BALU",
        MovieName: "Abhinandana"
      },
      {
        id:2,
        photo:spb,
        songPath:edutaneeve,
        songName: "Eduta Neeve",
        singer: "SPB",
        MovieName: "Abhinandana"
      },
      {
        id:3,
        photo:spb,
        songPath:JabilliKosam,
        songName: "Jabilli Kosam Aakasamalle",
        singer: "SP BALU",
        MovieName: "Manchi Manasulu"
      },
      {
        id:4,
        photo:spb,
        songPath:O_Papa_Lali,
        songName: "Oo Papa Lali",
        singer: "SP BALU",
        MovieName: "Geethanjali"
      },
      {
        id:5,
        photo:spb,
        songPath:Oo_Priya_Priya,
        songName: "Oo Priya Priya",
        singer: "SP BALU",
        MovieName: "Geethanjali"
      },
      {
        id:6,
        photo:pk,
        songPath:hrudjayam,
        songName: "Hrudhayam Orchukolenidhi gayam",
        singer: "N.A",
        MovieName: "Parugu"
      }
  ]
  
  export default {
    songdata,
  }