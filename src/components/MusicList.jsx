import React from 'react';

    function MusicList({ results, onVideoSelect, isSidebarOpen }) {
      if (!results || results.length === 0) {
        return <div className="music-list">No results found.</div>;
      }

      return (
        <div className={`music-list ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {results.map((item) => (
            <div
              key={item.id.videoId}
              className="music-item"
              onClick={() => onVideoSelect(item.id.videoId)}
            >
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <div className="music-item-details">
                <h3>{item.snippet.title}</h3>
                <p>{item.snippet.channelTitle}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    export default MusicList;
