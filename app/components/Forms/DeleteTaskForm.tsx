"use client";

import { ITask } from "@/types/task";
import { FC } from "react";

export interface DeleteTaskFormProps {
  handleDeleteTask: (task: ITask | undefined) => void;
  task?: ITask;
  confirmationMsg?: string;
}

const DeleteTaskForm: FC<DeleteTaskFormProps> = ({
  handleDeleteTask,
  task,
  confirmationMsg
}) => {
  return (
    <>
      <h3 className="text-lg">
        {confirmationMsg ?? "Are you sure, you want to delete this task?"}
      </h3>
      <div className="modal-action">
        <button onClick={() => handleDeleteTask(task)} className="btn">
          Yes
        </button>
      </div>
    </>
  );
};

export default DeleteTaskForm;
