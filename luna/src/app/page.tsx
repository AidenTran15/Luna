'use client';

import { useState } from 'react';
import Envelope from './components/Envelope';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const noButtonText = [
    "Không",
    "Em chắc chứ?",
    "Thật sự chắc chứ?",
    "Nghĩ lại đi mà!",
    "Cơ hội cuối cùng đó!",
    "Chắc chắn không?",
    "Em sẽ hối hận đó!",
    "Suy nghĩ lại lần nữa đi!",
    "Em thật sự rất chắc chứ?",
    "Quyết định này có thể sai lầm đó!",
    "Hãy mở lòng đi mà!",
    "Đừng lạnh lùng vậy chứ!",
    "Đổi ý không em?",
    "Em không muốn suy nghĩ lại sao?",
    "Đây là câu trả lời cuối cùng chứ?",
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      {!yesPressed ? (
        <>
          <div className="heart mb-8">❤️</div>
          <Envelope />
          <div className="flex gap-6 mt-8">
            <button
              className="button-yes"
              onClick={handleYesClick}
            >
              Em đồng ý 💝
            </button>
            <button
              className="button-no"
              onClick={handleNoClick}
            >
              {noButtonText[Math.min(noCount, noButtonText.length - 1)]} 💔
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="heart-success">❤️</div>
          <h2 className="cute-font text-5xl font-bold text-pink-600">
            Yay! Anh yêu em! 💖
          </h2>
          <div className="romantic-text mt-4 text-2xl text-gray-700">
            Em đã làm anh hạnh phúc nhất trên đời!
          </div>
        </div>
      )}
    </main>
  );
}
