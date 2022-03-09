import React, { useState } from "react";

interface ModalProps {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const useModal = () => {
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
