import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center relative">
        <button
          className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-pink-500"
          onClick={onClose}
        >
          &times;
        </button>
        {title && <div className="text-xl font-semibold text-pink-700 mb-2">{title}</div>}
        <div className="text-lg text-gray-700">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 