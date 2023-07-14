import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useTasksStore } from "@/store/TasksStore";
import Modal from "./Modal";
import DeleteTaskForm from "./Forms/DeleteTaskForm";
import useModal from "../Hooks/useModal";

const TaskListStatus: FC = () => {
  const tasksStore = useTasksStore();
  const { removeAllTasks, pendingTasksCount } = tasksStore;

  const { isOpen, showModal, closeModal } = useModal();

  const onDeleteAllTasks = () => {
    removeAllTasks();
    closeModal();
  };

  return (
    <div>
      <div className="flex flex-row justify-center mb-[20px] mt-[8px] items-center gap-[12px]">
        <div>
          <p className="font-semibold">
            You have {pendingTasksCount} pending{" "}
            {pendingTasksCount === 1 ? "task" : "tasks"}
          </p>
        </div>
        <div>
          <button
            onClick={showModal}
            className="text-white bg-[#570df8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Clear All
          </button>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <DeleteTaskForm
            handleDeleteTask={onDeleteAllTasks}
            confirmationMsg={"Are you sure, you want to delete all tasks?"}
          />
        </Modal>
      </div>
    </div>
  );
};

export default observer(TaskListStatus);
