import React, { useState, useEffect, useRef } from 'react';

    function VideoModal({ videoId, onClose }) {
      const [player, setPlayer] = useState(null);
      const playerRef = useRef(null);

      useEffect(() => {
        let ytPlayer;

        const loadYouTubeAPI = () => {
          return new Promise((resolve) => {
            if (window.YT && window.YT.Player) {
              resolve();
              return;
            }
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = () => {
              resolve();
            };
          });
        };

        const createPlayer = async () => {
          await loadYouTubeAPI();
          ytPlayer = new window.YT.Player(playerRef.current, {
            height: '390',
            width: '640',
            videoId: videoId,
            events: {
              onReady: (event) => {
                event.target.playVideo();
              },
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  console.log('Video ended');
                }
              },
            },
          });
          setPlayer(ytPlayer);
        };

        createPlayer();

        return () => {
          if (player) {
            player.destroy();
          }
        };
      }, [videoId]);

      return (
        <div className="modal">
          <div className="modal-content">
            <div ref={playerRef} />
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
    }

    export default VideoModal;
