"use client";

import { ITask } from "@/types/task";
import { FC } from "react";
import { useTasksStore } from "@/store/TasksStore";
import EditTask from "./TaskActions/EditTask";
import { observer } from "mobx-react-lite";
import DeleteTask from "./TaskActions/DeleteTask";
import TaskCard from "./TaskCard";

interface TaskCardContainerProps {
  task: ITask;
}

const TaskCardContainer: FC<TaskCardContainerProps> = ({ task }) => {
  const tasksStore = useTasksStore();

  const handleEditTask = (task: ITask) => {
    let isCompleted = task.isCompleted;

    if (Array.isArray(task.isCompleted))
      isCompleted = task.isCompleted.length > 0 ? true : false;

    tasksStore.updateTask({ ...task, isCompleted });
  };

  const handleDeleteTask = (task: ITask) => tasksStore.removeTask(task);

  const taskActions = (
    <div className="flex flex-row gap-[12px]">
      <EditTask handleEditTask={handleEditTask} task={task} />
      <DeleteTask handleDeleteTask={handleDeleteTask} task={task} />
    </div>
  );

  return (
    <div key={task.id}>
      <TaskCard task={task} actionIcons={taskActions} />
    </div>
  );
};

export default observer(TaskCardContainer);
