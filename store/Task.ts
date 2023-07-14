import {Instance, types} from 'mobx-state-tree';

const TaskModel = types.model('TaskModel').props({
  id: types.identifier,
  title: types.string,
  description: types.string,
  isCompleted: types.boolean,
});

export const Task = TaskModel.actions(self => ({
  markAsCompleted() {
    self.isCompleted = !self.isCompleted;
  },
}));

export interface TaskType extends Instance<typeof TaskModel> {}