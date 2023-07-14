"use client";

import Modal from "../../Modal";
import { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import useModal from "@/app/Hooks/useModal";
import DeleteTaskForm from "../../Forms/DeleteTaskForm";
import { ITask } from "@/types/task";

export interface DeleteTaskProps {
  handleDeleteTask: (task: ITask) => void;
  task: ITask;
}

const DeleteTask: FC<DeleteTaskProps> = ({ handleDeleteTask, task }) => {
  const { isOpen, showModal, closeModal } = useModal();
  
  const onDeleteTask = (task: ITask | undefined) => {
    if (task) handleDeleteTask(task);
    closeModal();
  };
  
  return (
    <>
      <FiTrash2
        onClick={() => showModal()}
        cursor="pointer"
        className="text-red-500"
        title="Delete task"
        size={25}
      />
      <Modal isOpen={isOpen} closeModal={() => closeModal()}>
        <DeleteTaskForm handleDeleteTask={onDeleteTask} task={task} />
      </Modal>
    </>
  );
};

export default DeleteTask;
