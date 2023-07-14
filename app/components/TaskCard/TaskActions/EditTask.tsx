"use client";

import Modal from "../../Modal";
import { FC } from "react";
import TaskForm from "../../Forms/TaskForm";
import { FiEdit } from "react-icons/fi";
import useModal from "@/app/Hooks/useModal";
import { ITask } from "@/types/task";

export interface EditTaskProps {
  handleEditTask: (task: ITask) => void;
  task: ITask;
}

const EditTask: FC<EditTaskProps> = ({
  handleEditTask,
  task
}) => {
  const { isOpen, showModal, closeModal } = useModal();

  const onEditTask = (task: ITask) => {
    handleEditTask(task);
    closeModal();
  };
  
  return (
    <>
        <FiEdit
          onClick={() => showModal()}
          cursor="pointer"
          className="text-blue-500"
          title="Edit task"
          size={25}
        />
      <Modal isOpen={isOpen} closeModal={() => closeModal()}>
        <TaskForm
          handleSubmit={onEditTask}
          taskValue={task}
          formHeading="Edit task"
        />
      </Modal>
    </>
  );
};

export default EditTask;
