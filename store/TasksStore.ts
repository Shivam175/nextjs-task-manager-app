"use client";

import { destroy, Instance, types } from "mobx-state-tree";
import { Task, TaskType } from "./Task";
import { useEffect } from "react";
import { persist } from "mst-persist";
import { DUMMY_TASKS } from "./constants";

let PAGE_RELOADED = true;

const TasksStore = types
  .model("TasksStore")
  .props({
    tasks: types.array(Task)
  })
  .views(self => ({
    get pendingTasksCount() {
      return self.tasks.filter(task => !task.isCompleted).length;
    },
    get completedTasksCount() {
      return self.tasks.length - this.pendingTasksCount;
    }
  }))
  .actions(self => ({
    addTask(task: TaskType) {
      self.tasks.unshift(task);
    },
    removeTask(task: TaskType) {
      destroy(task);
      PAGE_RELOADED = false;
    },
    updateTask(task: TaskType) {
      const taskIndex = self.tasks.findIndex(element => element.id === task.id);
      self.tasks[taskIndex] = (task as unknown) as any;
    },
    removeAllTasks() {
      self.tasks.clear();
      PAGE_RELOADED = false;
    },
    addDummyTasks() {
      self.tasks.unshift(...DUMMY_TASKS);
    }
  }));

export interface ITasksStore extends Instance<typeof TasksStore> {}

let _tasksStore: ITasksStore;

export const useTasksStore = () => {
  if (!_tasksStore) {
    _tasksStore = TasksStore.create({
      tasks: [...DUMMY_TASKS]
    });
  }
  if (_tasksStore?.tasks.length === 0 && PAGE_RELOADED) {
    _tasksStore.addDummyTasks();
  }

  useEffect(() => {
    persist("state", _tasksStore, {})
      // .then(() => console.log("TasksStore has been hydrated"))
      .catch(err => console.log(err, "error"));
  }, []);

  return _tasksStore;
};
