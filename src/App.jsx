import React, { useState, useEffect } from 'react';
    import Navbar from './components/Navbar';
    import MusicList from './components/MusicList';
    import VideoModal from './components/VideoModal';
    import Sidebar from './components/Sidebar';

    const API_KEY = 'AIzaSyAZ50D22qnTSglxVgmqZ2B2jJNGIXe210Q';
    const API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

    function App() {
      const [searchResults, setSearchResults] = useState([]);
      const [selectedVideoId, setSelectedVideoId] = useState(null);
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const [randomVideos, setRandomVideos] = useState([]);

      useEffect(() => {
        fetchRandomMusicVideos();
      }, []);

      const fetchRandomMusicVideos = async () => {
        try {
          const response = await fetch(
            `${API_ENDPOINT}?part=snippet&chart=mostPopular&regionCode=US&key=${API_KEY}&type=video&videoCategoryId=10&maxResults=20`
          );
          const data = await response.json();
          setRandomVideos(data.items);
        } catch (error) {
          console.error('Error fetching random music videos:', error);
          setRandomVideos([]);
        }
      };

      const handleSearch = async (query) => {
        if (!query) {
          setSearchResults([]);
          return;
        }

        try {
          const response = await fetch(
            `${API_ENDPOINT}?part=snippet&q=${query}&key=${API_KEY}&type=video`
          );
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            setSearchResults(data.items);
          } else {
            setSearchResults([]);
            fetchRandomMusicVideos();
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setSearchResults([]);
        }
      };

      const handleVideoSelect = (videoId) => {
        setSelectedVideoId(videoId);
      };

      const handleCloseModal = () => {
        setSelectedVideoId(null);
      };

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

      return (
        <div style={{display: 'flex'}}>
          <Navbar onSearch={handleSearch} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} />
          <MusicList
            results={searchResults.length > 0 ? searchResults : randomVideos}
            onVideoSelect={handleVideoSelect}
            isSidebarOpen={isSidebarOpen}
          />
          {selectedVideoId && (
            <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />
          )}
        </div>
      );
    }

    export default App;
