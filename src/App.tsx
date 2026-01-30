import { useEffect , useRef } from 'react';
import './App.css';
import Lobby from './route/lobby/Lobby';
import CharacterList from './route/character/characterList';
import { loadLocalResource } from './component/loader/resourcesLoader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import CharacterDetail from './route/character/characterDetail';
import Modal from './component/modal/Modal';
import UpgradeLobby from './route/upgrade/UpgradeLobby';
import { loadUnitDefaultData } from './component/loader/unitInfoLoader';
import { loadUnitCombineData } from './component/loader/unitCombLoader';
import UpgradeUnit from './route/upgrade/UpgradeUnit';
import { loadSynergyData } from './component/loader/synergyLoader';


function App() {

  // resource 불러오기
  useEffect(() => {
    loadLocalResource();
    loadUnitDefaultData();
    loadUnitCombineData();
    loadSynergyData();
  }, []);
   
  // 스크린 1920*1080 비율 고정
  const scaleRef = useRef<HTMLDivElement | null>(null);
  // 스크린 리사이징
  useEffect(() => {  
    const resizeWindow = () => {
      if(!scaleRef.current) return;
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

  

  return (
    <div className="App">
      <div ref={scaleRef} className="container">
        <BrowserRouter>
          <Header />
          <Modal />
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/character" element={<CharacterList />} />
            <Route path="/character/detail" element={<CharacterDetail />} />
            <Route path="/upgrade" element={<UpgradeLobby />} />
            <Route path="/upgrade/unit" element={<UpgradeUnit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
