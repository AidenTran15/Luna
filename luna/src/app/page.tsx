'use client';

import { useState } from 'react';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const noButtonText = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don&apos;t be so cold!",
    "Change of heart?",
    "Wouldn&apos;t you reconsider?",
    "Is that your final answer?",
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
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="cute-font text-4xl font-bold text-pink-600 mb-6">
              Uyên ơi, anh thương em
            </h1>
            <div className="romantic-text text-lg text-gray-700 space-y-6">
              <p>
                Em đồng ý làm bạn gái anh nha. Anh không giỏi văn vở, không giỏi viết những lời đường mật nhưng anh khẳng định sẽ chăm lo cho em hết sức anh có thể.
              </p>
              <p>
                Anh cảm nhận được những tổn thương của em trong quá khứ. Điều đó làm anh thương em nhiều hơn, anh muốn đồng hành che chở, bảo vệ em hết quảng đời còn lại. Anh luôn cố gắng phần đấu cho tương lai 2 đứa.
              </p>
              <p>
                Thật sự, trước khi có em, anh cảm thấy rất cô đơn trên con đường anh đi. Anh muốn phần đường còn đi cùng em. Anh cũng muốn là 1 người đồng hành tin cậy của em, là nơi em có thể chia những niềm vui, nỗi buồn và vượt qua những khó khăn cùng nhau.
              </p>
              <p>
                Anh thương em nhiều lắm. Anh thật sự rất nghiêm túc với em. Cho anh cơ hội nhé.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
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
