import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const [state, setState] = useState({ loading: false, students: [] });

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get("http://localhost:8000/api/students");

      if (response.data.status === 200) {
        setState({ loading: false, students: response.data.students });
      }
      console.log(state);
    };
    getStudents();
  }, []);

  var TABLE_BODY = "";

  if (state.loading) {
      TABLE_BODY = <tr>
        <td colSpan={7}>
          <h2>LOADING...</h2>
        </td>
      </tr>
  } else {
    TABLE_BODY = state.students.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.course}</td>
        <td>{student.email}</td>
        <td>{student.phone}</td>
        <td>
          <Link
            to={`edit-sudent/${student.id}`}
            className="p-2 px-4 bg-blue-300 text-white rounded"
          >
            Edit
          </Link>
        </td>
        <td>
          <Link
            to={`delet-sudent/${student.id}`}
            className="p-2 bg-red-300 text-white rounded"
          >
            Delete
          </Link>
        </td>
      </tr>
    ));
  }

  return (
    <div className="container  ">
      <div className=" w-auto m-5 ">
        <div className=" w-90/100 mx-auto  ">
          <div className="card  ">
            <div className="flex justify-between items-center w-full bg-gray-100 p-3  ">
              <h3 className="text-bold text-left  w-[70%] ">Students Table</h3>
              <Link
                to={"add-student"}
                className="bg-blue-200 py-2 px-3 rounded w-[30%] "
              >
                Add Students
              </Link>
            </div>
            <div className="my-5 bg-gray-500 ">
              <div className="m-3 p-5">
                <table class="table-auto border-separate border-spacing-3 border border-slate-400 w-full">
                  <thead>
                    <tr>
                      <th className="border border-slate-300">ID</th>
                      <th className="border border-slate-300">Name</th>
                      <th className="border border-slate-300">Course</th>
                      <th className="border border-slate-300">email</th>
                      <th className="border border-slate-300">Phone</th>
                      <th className="border border-slate-300">edit</th>
                      <th className="border border-slate-300">delete</th>
                    </tr>
                  </thead>
                  <tbody>{TABLE_BODY}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
