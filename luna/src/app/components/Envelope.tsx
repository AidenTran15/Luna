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
            <h2>Uyên ơi, làm người yêu anh nhé?</h2>
            <p>
              Anh thương em. Anh không giỏi văn vở, không giỏi viết những lời đường mật nhưng anh khẳng định sẽ chăm lo cho em hết sức anh có thể.<br/>
              Anh cảm nhận được những tổn thương của em trong quá khứ. Điều đó làm anh thương em nhiều hơn, anh muốn đồng hành che chở, bảo vệ em hết quảng đời còn lại.  Anh luôn cố gắng phần đấu cho tương lai 2 đứa.<br/>
              Thật sự, trước khi có em, anh cảm thấy rất cô đơn trên con đường anh đi. Anh muốn phần đường còn đi cùng em. Anh cũng muốn là 1 người đồng hành tin cậy của em, là nơi em có thể chia những niềm vui, nỗi buồn và vượt qua những khó khăn cùng nhau.<br/>
              Anh thương em nhiều lắm. Anh thật sự rất nghiêm túc với em. Cho anh cơ hội nhé.
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