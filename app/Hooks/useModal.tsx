import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, showModal, closeModal };
};

export default useModal;
