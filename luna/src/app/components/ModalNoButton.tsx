import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalNoButton.module.css';

interface ModalNoButtonProps {
  open: boolean;
  onClose: () => void;
}

const ModalNoButton: React.FC<ModalNoButtonProps> = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        <div className={styles.accentBar}></div>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className={styles.title}>THÔNG BÁO</div>
        <div className={styles.message}>
          Hiện tại nút này không khả dụng, xin vui lòng dùng nút &quot;Tôi đồng ý&quot;
        </div>
        <button
          className={styles.actionButton}
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ModalNoButton; 