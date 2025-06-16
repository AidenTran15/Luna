'use client';

import { useState } from 'react';
import Envelope from './components/Envelope';
import ModalNoButton from './components/ModalNoButton';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
    if (noCount < noButtonText.length - 1) {
      setNoCount(noCount + 1);
    }
    // Show popup when clicking the last text
    if (noCount === noButtonText.length - 2) {
      setShowPopup(true);
    }
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Debug log for render
  console.log('Render - showPopup:', showPopup);
  console.log('Render - noCount:', noCount);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      {!yesPressed ? (
        <>
          <div className="heart mb-16">❤️</div>
          <div style={{ marginTop: '-2rem' }}>
            <Envelope />
          </div>
          <ModalNoButton open={showPopup} onClose={handleClosePopup} />
          <div className="flex mt-8" style={{ gap: '3rem' }}>
            <button
              className="button-yes"
              onClick={handleYesClick}
            >
              Em đồng ý 💝
            </button>
            <button
              className="button-no"
              onClick={handleNoClick}
              disabled={noCount >= noButtonText.length - 1}
            >
              {noButtonText[noCount]} 💔
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="heart-success">❤️</div>
          <div className="romantic-text mt-4 text-2xl text-gray-700">
            Cảm ơn em đã làm anh trở thành người đàn ông hạnh phúc nhất trên đời!
          </div>
        </div>
      )}
    </main>
  );
}
