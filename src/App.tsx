import { useEffect , useRef } from 'react';
import './App.css';
/*
import Lobby from './route/lobby/Lobby.js';
import CharacterList from './route/character/characterList.js';
import { loadLocalResource } from './loader/resourceLoader.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
*/

function App() {
/*
  // resource 불러오기
  useEffect(() => {
    loadLocalResource();
  }, []);
   
  // 스크린 1920*1080 비율 고정
  const scaleRef = useRef(null);
  // 스크린 리사이징
  useEffect(() => {  
    const resizeWindow = () => {
      const W = 1920;
      const H = 1080;
      const viewHeight = document.documentElement.clientHeight;
      const scale = Math.min(window.innerWidth / W, viewHeight / H);
      const scaledHeight = H * scale;
      const offsetY = (viewHeight - scaledHeight) / 2;
      scaleRef.current.style.transform = `translate(-50%, ${offsetY}px) scale(${scale})`;
    };
    resizeWindow();

    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  <div ref={scaleRef} className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/character" element={<CharacterList />} />
        </Routes>
      </BrowserRouter>
      </div>
*/
  return (
    <div className="App">
      <h1> 옮기는 중</h1>
    </div>
  );
}

export default App;
