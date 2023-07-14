import { FC, PropsWithChildren, ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  closeModal,
  children
}) => {
  return (
    <>
      {isOpen ? (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <div className="modal-box relative">
            <label
              onClick={() => closeModal()}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
