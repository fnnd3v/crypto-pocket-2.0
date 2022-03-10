import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Button } from "components/ui/button/button";

import { ModalContent, ModalWrapper } from "./modal.styles";

export interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
}

const modalContainer: any = document.querySelector("#modals");

const Modal: React.FC<ModalProps> = ({ handleClose, children }) => {
  const div = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(div);
    return () => {
      modalContainer.removeChild(div);
    };
  }, [div]);

  return ReactDOM.createPortal(
    <ModalContent>
      <ModalWrapper>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </ModalWrapper>
    </ModalContent>,
    div
  );
};

export default Modal;
