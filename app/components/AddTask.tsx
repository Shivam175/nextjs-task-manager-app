"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import useModal from "../Hooks/useModal";
import TaskForm from "./Forms/TaskForm";
import { useTasksStore } from "@/store/TasksStore";
import { ITask } from "@/types/task";

const AddTask = () => {
  const { isOpen, showModal, closeModal } = useModal();
  const tasksStore = useTasksStore();

  const handleCreateTask = (task: ITask) => {
    let isCompleted = task.isCompleted;

    if (Array.isArray(task.isCompleted))
      isCompleted = task.isCompleted.length > 0 ? true : false;

    tasksStore.addTask({
      ...task,
      id: uuidv4(),
      isCompleted
    });
    closeModal();
  };

  return (
    <div>
      <button onClick={() => showModal()} className="btn btn-primary w-full">
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TaskForm handleSubmit={handleCreateTask} formHeading="Add new task" />
      </Modal>
    </div>
  );
};

export default AddTask;
