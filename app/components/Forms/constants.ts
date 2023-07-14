import { ITask } from "@/types/task";
import { FormikState } from "formik";
import * as Yup from "yup";

export const TASK_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .required("Title is required*")
    .min(2, "Title should be atleast 2 characters long!")
    .max(30, "Title cannot be longer than 30 characters!"),
  description: Yup.string()
    .required("Description is required*")
    .min(4, "Description should be atleast 4 characters long!")
    .max(600, "Description cannot be longer than 600 characters!")
});

export const TOGGLE_BUTTON_CLASS = `w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border
 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`;

export const TEXT_INPUT_CLASS = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

export const DEFAULT_TASK = {
  id: "",
  title: "",
  description: "",
  isCompleted: false
} as Partial<FormikState<ITask>>;
