import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import ParticlesBackground from "./components/ParticlesBackground"
function App() {
  const [songs] = useState([
     {
      title: "Somebody New",
      artist: "Witt Lowry",
      img_src: "./images/song-3.jpg",
      src: "./music/somebody-new.mp3"
    },
    
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
   
    {
      title: "Cartoon",
      artist: "On N On",
      img_src: "./images/song-2.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Mulholland",
      artist: "King Canyon",
      img_src: "./images/generic.jpeg",
      src: "./music/Mulholland.mp3"
    },
     {
      title: "Auld Land Syne",
      artist: "DJ Williams",
      img_src: "./images/christmas.jpeg",
      src: "./music/Auld Lang Syne.mp3"
    },
    {
      title: "Deck The Halls",
      artist: "DJ Williams",
      img_src: "./images/christmas.jpeg",
      src: "./music/Deck The Halls.mp3"
    },
    {
      title: "God Rest Ye Merry Gentlemen",
      artist: "DJ Williams",
      img_src: "./images/christmas.jpeg",
      src: "./music/God Rest Ye Merry Gentlemen.mp3"
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
   
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
