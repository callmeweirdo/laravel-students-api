import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const [students, setStudents] = useState({
    name: "",
    course: "",
    email: "",
    phone: null,
  });

  const handleInput = (e) => {
    setStudents({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/add-students", students);
    const data = response.data;
  };

  return (
    <div className="container  ">
      <div className=" w-auto m-5 ">
        <div className=" w-90/100 mx-auto  ">
          <div className="card  ">
            <div className="flex justify-between items-center w-full bg-gray-100 p-3  ">
              <h3 className="text-bold text-left  w-[70%] ">Students Table</h3>
              <Link
                to={"add-studen"}
                className="bg-blue-200 py-2 px-3 rounded w-[30%] "
              >
                Add Students
              </Link>
            </div>

            <div className="my-5 py-5 bg-gray-400 ">
              <div className="mx-5">
                <h3 className="">Students Form</h3>
                <form action="" onSubmit={handleSubmit} method="post">
                  <div className="p-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-1"
                      onChange={handleInput}
                      value={students.name}
                      placeholder="Name"
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      id="course"
                      name="course"
                      className="w-full p-1"
                      placeholder="course"
                      onChange={handleInput}
                      value={students.course}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-1"
                      placeholder="email"
                      onChange={handleInput}
                      value={students.email}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      className="w-full p-1"
                      placeholder="phone"
                      onChange={handleInput}
                      value={students.phone}
                    />
                  </div>
                  <div className="p-2">
                    <button type="submit" className="p-3 rounded bg-blue-300">
                      Add Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
