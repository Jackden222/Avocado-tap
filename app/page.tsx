'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import BottomNav from "./ui/page";
import './main.css';





const Home = () => {

  

  const levelNames = [
    "Bronze",    // From 0 to 4999 coins
    "Silver",    // From 5000 coins to 24,999 coins
    "Gold",      // From 25,000 coins to 99,999 coins
    "Platinum",  // From 100,000 coins to 999,999 coins
    "Diamond",   // From 1,000,000 coins to 2,000,000 coins
    "Epic",      // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master",    // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord"       // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0,        // Bronze
    5000,     // Silver
    25000,    // Gold
    100000,   // Platinum
    1000000,  // Diamond
    2000000,  // Epic
    10000000, // Legendary
    50000000, // Master
    100000000,// GrandMaster
    1000000000// Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(4990);
  const [energy, setEnergy] = useState(500); // Начальная энергия
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 1;

const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (energy > 0) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
      setTimeout(() => {
          card.style.transform = '';
      }, 100);

      setPoints(points + pointsToAdd); // Увеличиваем очки с учетом уровня multitap
      setEnergy(energy - 1);
      setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  }
};


  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);


  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prevEnergy => Math.min(prevEnergy + 1, 500)); // Восстанавливаем 1 единицу энергии, максимум 500
    }, 1000);

    return () => clearInterval(interval);
  }, []);





  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-[#1a1c32] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#1d2025]">
              <img className='justify-between items-center m-auto' src="/binance-logo.png" alt="/" width={24} height={24}/>
            </div>
              <div>
                <p className="text-sm">Danil (CEO)</p>
              </div>
          </div>

          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">{levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span></p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center w-1/3 h-[32px] border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-24">
              <img src="/binance-logo.png" alt="/" className="w-6 h-6 mr-2" />
                
              <img className="justify-between items-center w-6 h-6 ml-2" src="/setting.png" alt="" width={24} height={24}/>
              
            </div>
          </div>

          <div className="px-4 mt-4 flex justify-center">
              <div className="px-4 py-2 flex items-center space-x-2">
                <img src="/clever.png" alt="/" className="w-10 h-10" />
                <p className="text-4xl text-white">{points.toLocaleString()}</p>
              </div>
            </div>

            <div className="px-1 mt-4 flex justify-center">
              <div className="w-80 h-80 p-4 rounded-full circle-outer"onClick={handleCardClick}>
                <div className="w-full h-full rounded-full circle-inner">
                  <img src="/clever.png" alt="/" className="w-full h-full" />
                </div> 
              </div>

              <div className="flex flex-col space-y-6 fixed bottom-[120px] left-0 right-0 justify-center items-center px-5">
                <div className="flex flex-col w-full items-center justify-center">
                  <div className="flex pb-[6px] space-x-1 items-center justify-center text-[#fff]">
                  <img src="/clever.png" alt="/" className="w-[20px]" />
                    <div>
                      <span className="text-[18px] font-bold">{energy}</span>
                      <span className="text-[14px] font-medium">/ 500</span>
                    </div>
                  </div>
                  <div className="flex  w-full p-[4px] h-[20px] items-center bg-energybar rounded-[12px] border-[1px] border-borders2">
                    <div className="bg-orange-300/80 h-full rounded-full transition-width duration-100" style={{ width: `${(energy / 500) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        <BottomNav />
      </div>
    </div>
  );
}

export default Home;
