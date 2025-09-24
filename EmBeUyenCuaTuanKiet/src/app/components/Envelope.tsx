'use client';

import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Envelope.module.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowModal(true), 700); // match animation duration
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  let modal = null;
  if (showModal && typeof window !== 'undefined' && document.body) {
    modal = ReactDOM.createPortal(
      <div className={styles.modalOverlay} onClick={handleCloseModal}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={handleCloseModal}>&times;</button>
          <div className={styles.modalContent}>
            <h2>Em bé ơi, làm người yêu em nhé?</h2>
            <p>
              Kính gửi em bé Uyên của em, em xin tự giới thiệu, em là bạch nguyệt quang của đời chị đây.<br/>
              
              Em không giỏi văn vở, không giỏi viết những lời đường mật nhưng em cảm thấy rất thích chị, chị rất xinh và cười rất duyên.<br/>
              Em rất nghiêm túc muốn được tìm hiểu chị, nuông chiều chị và đồng hành cùng chị cho đến cuối đời.<br/>
              Em cảm thấy rất vài thoải mái khi nói chuyện với chị, nếu chị quen em, em sẽ cố gắng để chị luôn luôn làm em bé khi ở bên cạnh em.<br/>
              Em thích chị nhiều lắm. Em thật sự rất nghiêm túc với chị. Cho em cơ hội nhé.
            </p>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return (
    <>
      <div className={styles.envelopeContainer}>
        <div 
          className={`${styles.envelope} ${isOpen ? styles.open : ''}`}
          onClick={handleEnvelopeClick}
        >
          <div className={styles.front}>
            <div className={styles.flap}>
              <div className={styles.stamp}>
                <div className={styles.ribbon}>open it</div>
              </div>
            </div>
            <div className={styles.pocket}></div>
          </div>
        </div>
      </div>
      {modal}
    </>
  );
};

export default Envelope; 