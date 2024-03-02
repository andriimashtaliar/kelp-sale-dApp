import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  showCloseButton = false,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleModalClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Handle the backdrop click to close the modal
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === dialogRef.current) {
      handleModalClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 md:hidden transition-transform duration-500 transform-gpu "
    >
      <dialog
        open
        className={`bg-primary-400 h-full absolute top-0 bottom-0 right-0 w-[90%] sm:w-[80%] mr-0`}
      >
        {showCloseButton && (
          <button
            onClick={handleModalClose}
            className="absolute top-3 right-3 text-white rounded-full p-1 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
