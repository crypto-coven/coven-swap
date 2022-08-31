import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image"

type ModalProps = {
  title?: string;
  footer?: React.ReactNode | JSX.Element;
  active: boolean;
  children: React.ReactNode | JSX.Element;
  hide: () => void;
};

export const Modal = ({
  title = "",
  footer = "",
  children,
  active,
  hide,
}: ModalProps) => {
  return (
    <Fragment>
      {active && (
        <ModalContainer>
          <ModalOverlay onClick={() => hide()}></ModalOverlay>
          <ModalMain>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hide()}>
                <Image
                  src="/coolicon.png"
                  alt="close"
                  width={12.5}
                  height={12.5}
                />
              </ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalMain>
        </ModalContainer>
      )}
    </Fragment>
  );
};

const ModalContainer = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 999;
`;

const ModalOverlay = styled.a`
  background: #121212;
  opacity: 0.95;
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalMain = styled.div`
  background: #1c1e1f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 75vh;
  max-width: 670px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  color: white;
  justify-content: space-between;
`;

const ModalHeader = styled.div`
  color: #303742;
  padding: 20px 5px 10px 5px;
  width: 100%;
  position: relative;
  text-align: center;
`;

const ModalTitle = styled.span`
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  font-family: "IM FELL Double Pica";
  color: #dfb380;
  text-align: center;
  justify-self: center;
  margin-left: auto;
  @media (min-width: 400px) {
    font-size: 40px;
  }
`;

const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  justify-self: flex-end;
  margin-left: auto;
  position: absolute;
  right: 0;
`;

const ModalBody = styled.div`
  overflow-y: auto;
  padding: 0 10px;
  position: relative;
  text-align: center;
`;

const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
  text-align: center;
`;
