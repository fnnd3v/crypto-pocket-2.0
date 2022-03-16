import React, { useState, useRef } from "react";
import NotesWidgetIcon from "assets/icons/sticky-note.png";
import styled from "styled-components";
import { Title } from "components/ui/title/title";
import Draggable from "react-draggable";

const Wrapper = styled.div`
  width: 160px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.warning};
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: visible;
  cursor: pointer;
  border-radius: 16px;
  bottom: 10px;
  left: 10px;
  position: fixed;
  z-index: 999;
  img {
    height: 100%;
  }
`;

const NotesWrapper = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
`;

const NotesWidget = () => {
  //FIXME: click and overflow
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleNotesState = (e: any) => {
    if (e.target.dataset.notesWrapper) return;
    if (isOpen === false) return setIsOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <Wrapper onClick={(e) => handleNotesState(e)} ref={nodeRef}>
          <img src={NotesWidgetIcon} />
          <Title>Notes</Title>
          {isOpen ? (
            <NotesWrapper data-notes-wrapper>sdasdas</NotesWrapper>
          ) : null}
        </Wrapper>
      </Draggable>
    </>
  );
};

export default NotesWidget;
