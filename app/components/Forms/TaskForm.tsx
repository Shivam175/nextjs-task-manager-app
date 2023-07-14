"use client";

import { FC } from "react";
import { useFormik } from "formik";
import { ITask } from "@/types/task";
import {
  TOGGLE_BUTTON_CLASS,
  TASK_VALIDATION_SCHEMA,
  TEXT_INPUT_CLASS,
  DEFAULT_TASK
} from "./constants";

export interface TaskFormProps {
  handleSubmit: (task: ITask) => void;
  taskValue?: ITask;
  formHeading: string;
}

const TaskForm: FC<TaskFormProps> = ({
  handleSubmit,
  taskValue,
  formHeading
}) => {
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      id: taskValue?.id ?? "",
      title: taskValue?.title ?? "",
      description: taskValue?.description ?? "",
      isCompleted: taskValue?.isCompleted ?? false
    } as ITask,

    validationSchema: TASK_VALIDATION_SCHEMA,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      // handle form submission
      handleSubmit(values);
      resetForm(DEFAULT_TASK);
    }
  });
  return (
    <>
      <form className="register-form text-left" onSubmit={formik.handleSubmit}>
        <h3 className="font-bold text-lg !text-center">{formHeading}</h3>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Task title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={TEXT_INPUT_CLASS}
            required
          />
          {formik.touched.title && formik.errors.title ? (
            <div>
              <p className="mt-2 text-sm text-red-500">{formik.errors.title}</p>
            </div>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Task description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={TEXT_INPUT_CLASS}
            required
          />
          {formik.touched.description && formik.errors.description ? (
            <div>
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.description}
              </p>
            </div>
          ) : null}
        </div>
        <div className="mb-[16px]">
          <label className="inline-flex items-center mb-4 cursor-pointer">
            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Is Task Complete
            </span>
            <span className="relative">
              <input
                id="isCompleted"
                name="isCompleted"
                type="checkbox"
                value={"true"}
                defaultChecked={taskValue?.isCompleted ?? false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="sr-only peer"
              />
              <div className={TOGGLE_BUTTON_CLASS}></div>
            </span>
          </label>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
