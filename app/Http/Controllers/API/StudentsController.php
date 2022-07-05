<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentsController extends Controller
{

    public function index(){
        $students = Student::all();
        // $students = [];
        return response()->json([
            'status' => 200,
            'students' => $students,
            'message' => 'Successe'
        ]);
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            "name" => ['required', 'max:191'],
            "course" => ['required', 'max:191'],
            "email" => ['required', 'max:191', 'email'],
            "phone" => ['required', 'max:10', 'min:10']
        ]);

        // $data = [
        //     'name' => $request->name,
        //     'course' => $request->course,
        //     'email' => $request->email,
        //     'phone' => $request->phone
        // ];

        if($validator->fails()){
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }else{
            $students = Student::create($validator->validated());
            if($students){
                return response()->json([
                    'status' => 200,
                    'message' => 'Students Added Succesfully'

                ]);
            }
        }
    }

    public function edit( $id){
        $student = Student::find($id);

        if($student){
            return response()->json([
                "status" => 200,
                "student" => $student,
            ]);
        }else{
            return response()->json([
                "status" => 404,
                "message" => "Page Not Found"
            ]);
        }
        // dd($request);
    }

    public function update($id, Request $request){
        $validator = Validator::make($request->all(), [
            "name" => ['required', 'max:191'],
            "course" => ['required', 'max:191'],
            "email" => ['required', 'max:191', 'email'],
            "phone" => ['required', 'max:10', 'min:10']
        ]);


        if($validator->fails()){
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }else{
            $student = Student::find($id);
            if($student){
                $student->create($validator->validated());
                return response()->json([
                    'status' => 200,
                    'message' => 'Students Added Succesfully'

                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Students Added Succesfully'
                ]);
            }
        }
    }

    public function destroy($id){
        $student = Student::find($id);
        $student->delete();

        return response()->json([
            "status" => 200,
            "message" => "deleted Successfully"
        ]);
    }
}
