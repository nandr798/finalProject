import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClickCapture={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClickCapture={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClickCapture={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls
