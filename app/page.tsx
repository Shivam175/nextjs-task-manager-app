"use client";

import AddTask from "./components/AddTask";
import { observer } from "mobx-react-lite";
import { useTasksStore } from "../store/TasksStore";
import dynamic from "next/dynamic";
import TaskListStatus from "./components/TaskListStatus";
const TaskList = dynamic(() => import("./components/TaskList"), { ssr: false });

const Home = () => {
  const tasksStore = useTasksStore();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="px-[20px]">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Task Manager App</h1>
          <AddTask />
        </div>
        <TaskList tasks={tasksStore.tasks} />
        <TaskListStatus />
      </div>
    </main>
  );
};

export default observer(Home);
