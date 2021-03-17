import ShivaPojaku from './Audio/ClasicalSongs/Shiva Poojaku - SenSongsMp3.Co.mp3'
import AndhelaRavalidhi from './Audio/ClasicalSongs/Andhela Ravali - SenSongsMp3.Co.mp3'
import GalluGallu from './Audio/ClasicalSongs/Gallu Gallu - SenSongsMp3.Co.mp3'
import KoluvyeUnnade from './Audio/ClasicalSongs/Koluvye Unnade - SenSongsMp3.Co.mp3'


import venky from './Images/venky.jpg'

export const songdata = [
    {
        id:0,
        photo:venky,
        songPath: ShivaPojaku,
        songName: "Shiva Poojaku",
        singer: "SP Balu",
        MovieName: "Swarnakamalam"
      },

      {
        id:1,
        photo:venky,
        songPath: AndhelaRavalidhi,
        songName: "Andhela Ravamidhi",
        singer: "SP Balu",
        MovieName: "Swarnakamalam"
      },
      {
        id:2,
        photo:venky,
        songPath: GalluGallu,
        songName: "Gallu Gallu",
        singer: "SP Balu",
        MovieName: "Swarnakamalam"
      },
      {
        id:3,
        photo:venky,
        songPath:KoluvyeUnnade,
        songName: "Koluvye Unnade Dheva Dhevudu",
        singer: "SP Balu",
        MovieName: "Swarnakamalam"
      }
  ]
  
  export default {
    songdata,
  }