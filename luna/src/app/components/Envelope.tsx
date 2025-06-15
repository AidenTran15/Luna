'use client';

import { useState } from 'react';
import styles from './Envelope.module.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.envelopeContainer}>
      <div 
        className={`${styles.envelope} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.front}>
          <div className={styles.flap}>
            <div className={styles.stamp}>
              <div className={styles.ribbon}>open it</div>
            </div>
          </div>
          <div className={styles.pocket}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.content}>
            <h2>Uyên ơi, anh thương em</h2>
            <p>
              Em đồng ý làm bạn gái anh nha. Anh không giỏi văn vở, không giỏi viết những lời đường mật nhưng anh khẳng định sẽ chăm lo cho em hết sức anh có thể.
              Anh cảm nhận được những tổn thương của em trong quá khứ. Điều đó làm anh thương em nhiều hơn, anh muốn đồng hành che chở, bảo vệ em hết quảng đời còn lại.  Anh luôn cố gắng phần đấu cho tương lai 2 đứa.
              Thật sự, trước khi có em, anh cảm thấy rất cô đơn trên con đường anh đi. Anh muốn phần đường còn đi cùng em. Anh cũng muốn là 1 người đồng hành tin cậy của em, là nơi em có thể chia những niềm vui, nỗi buồn và vượt qua những khó khăn cùng nhau.
              Anh thương em nhiều lắm. Anh thật sự rất nghiêm túc với em. Cho anh cơ hội nhé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope; 