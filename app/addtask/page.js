"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import undraw_writer_q06d from "./undraw_writer_q06d.svg";
import { addTask } from "@/helper/httpAxios";
import { toast } from "react-toastify";
export const metadata = {
  title: "TODO: AddTask",
};
export default function AddTask() {
  useEffect(() => {
    document.title = metadata.title;
  }, []);

  let [inputs, setinputs] = useState(null);
  const handleChange = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await addTask();
      if (data.status == false) {
        toast.error("Validation Failed", { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" min-h-[72vh] grid grid-cols-12">
      <div className=" p-5 col-span-6 col-start-4">
        <h1 className="px-[35%]">Add your task here !!</h1>

        {/* <Image
          src={undraw_writer_q06d}
          title="add task"
          style={{ width: "15%" }}
        ></Image> */}
        <form>
          <div className="mb-6">
            <label
              for="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="title"
              onChange={handleChange}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title for work"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="Content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <textarea
              name="content"
              rows={4}
              type="text"
              onChange={handleChange}
              id="Content"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Content about title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="Status"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              name="status"
              type="text"
              id="Status"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="none" selected>
                ----Select Status----
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
