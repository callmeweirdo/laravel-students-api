// import { data } from "autoprefixer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const EditStudent = () => {
  const [student, setstudent] = useState({});
  const [status, setStatus] = useState({ code: null, message: "", loading: false, erros: [] });

  const { id } = useParams();
  const navigate = useNavigate();
    //   console.log(id);

  useEffect(() => {
    const getStudent = async () => {
      console.log(id);
      const response = await axios.get(
        `http://localhost:8000/api/edit-student/${id}`
      );
      
      if(response.data.status === 200 ){
        const { name, course, email, phone } = response?.data?.student;
  
         setstudent({
          name: name,
          course: course,
          email: email,
          phone: phone,
        });

      }else if(response.data.status === 404){
        swal({
          title: "Page Not Found!",
          text: status.message,
          icon: "warning",
          button: "Aww yiss!",
        });
        navigate('/');
      }else{
        navigate('/');
      }

    };
    getStudent();
  }, []);

  const handleInput = (e) => {
    setstudent((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // document.getElementById("updatebtn").disabled = false;
    // document.getElementById("updatebtn").innerText = "updating..."

    const response = await axios.put(
      `http://localhost:8000/api/update-student/${id}`,
      student
    );
    console.log(response);

    if (response.data.status === 200) {
      setStatus((values) => ({...values,  code: response.data.status, message: response.data.message }));
      alert('fghjk');

        // document.getElementById("updatebtn").disabled = false;
        // document.getElementById("updatebtn").innerText = "Updated"

        // console.log(response);

        swal({
          title: "Success!",
          text: status.message,
          icon: "success",
          button: "Aww yiss!",
        });
    }else if(response.data.status === 404){
      setStatus((values) => ({
        ...values,
        code: response.data.status,
        message: response.data.message,
      }));
      swal({
        title: "Success!",
        text: status.message,
        icon: "success",
        button: "Aww yiss!",
      });
      navigate('/')
    }else{
      setStatus({ errors: response.data.errors });
    }

  };

  return (
    <div className="container  ">
      <div className=" w-auto m-5 ">
        <div className=" w-90/100 mx-auto  ">
          <div className="card">
            <div className="flex justify-between items-center w-full bg-gray-100 p-3  ">
              <h3 className="text-bold text-left  w-[70%] ">student Table</h3>
              <Link to={"/"} className="bg-blue-200 py-2 px-3 rounded w-[30%] ">
                Add student
              </Link>
            </div>

            <div className="my-5 py-5 bg-gray-400 ">
              <div className="mx-5">
                <h3 className="">
                  {status.message ? status.message : "Edit Student Form "}
                </h3>
                <form action="POST" onSubmit={handleSubmit} method="post">
                  <div className="p-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-1"
                      onChange={handleInput}
                      value={student.name}
                      placeholder="Name"
                    />
                    <span className="text-red-500 text-xs ">
                      {status?.errors?.name}
                    </span>
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      id="course"
                      name="course"
                      className="w-full p-1"
                      placeholder="course"
                      onChange={handleInput}
                      value={student.course}
                    />
                    <span className="text-red-500 text-xs ">
                      {status?.errors?.course}
                    </span>
                  </div>
                  <div className="p-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-1"
                      placeholder="email"
                      onChange={handleInput}
                      value={student.email}
                    />
                    <span className="text-red-500 text-xs ">
                      {status?.errors?.email}
                    </span>
                  </div>
                  <div className="p-2">
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      className="w-full p-1"
                      placeholder="phone"
                      onChange={handleInput}
                      value={student.phone}
                    />
                    <span className="text-red-500 text-xs ">
                      {status?.errors?.phone}
                    </span>
                  </div>
                  <div className="p-2">
                    <button
                      type="submit"
                      id="updatebtn"
                      className="p-3 rounded bg-blue-300"
                    >
                      update
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

export default EditStudent;
