"use client";

import { ITask } from "@/types/task";
import { FC, ReactNode } from "react";
import { observer } from "mobx-react-lite";

interface TaskCardProps {
  task: ITask;
  actionIcons: ReactNode;
}

const PENDING_TAG_CLASS = `bg-yellow-100 text-yellow-800 text-xs font-medium mr-2
 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300`;

const COMPLETED_TAG_CLASS = `bg-green-200 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5
 rounded-full dark:bg-green-900 dark:text-green-300`;

const TaskCard: FC<TaskCardProps> = ({ task, actionIcons }) => {
  return (
    <>
      <div className="border border-gray-200 rounded-[12px] shadow hover:bg-gray-100 overflow-hidden mb-[12px]">
        <div className="px-6 py-4 flex flex-row gap-[12px] justify-between">
          <div>
            <span className="mb-[6px] inline-block">
              {task.isCompleted ? (
                <span className={COMPLETED_TAG_CLASS}>Completed</span>
              ) : (
                <span className={PENDING_TAG_CLASS}>Pending</span>
              )}
            </span>
            <div className="font-bold text-xl mb-2">{task.title}</div>
            <p className="text-gray-700 text-base">{task.description}</p>
          </div>
          <div>{actionIcons}</div>
        </div>
      </div>
    </>
  );
};

export default observer(TaskCard);
