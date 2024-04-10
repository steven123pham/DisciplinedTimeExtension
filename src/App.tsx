import React from 'react';
import './App.css';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import IconButton from '@mui/material/IconButton';
import PauseCircleFilledRounded from '@mui/icons-material/PauseCircleFilledRounded';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  var togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="App">
      <div className="PlayButton">
        <IconButton onClick={togglePlay}>
          {
            isPlaying ? (
              <PauseCircleFilledRounded style={{height: 100, width: 100}}/>
            ) : (
              <PlayCircleRoundedIcon style={{height: 100, width: 100}}/>
            )
          }
        </IconButton>
      </div>
    </div>
  );
}

export default App;