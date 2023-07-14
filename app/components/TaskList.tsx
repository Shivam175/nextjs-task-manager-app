import { ITask } from "@/types/task";
import React from "react";
import TaskCardContainer from "./TaskCard/TaskCardContainer";
import { observer } from "mobx-react-lite";

interface TaskListProps {
  tasks: ITask[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      {tasks.map(task => (
        <TaskCardContainer key={task.id} task={task} />
      ))}
    </div>
  );
};

export default observer(TaskList);
