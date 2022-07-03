<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    public function store(Request $request){
        $data = [
            'name' => $request->name,
            'course' => $request->course,
            'email' => $request->email,
            'phone' => $request->phone
        ];

        $students = Student::create($data);

        if($students){
            response()->json([
                'staus' => 200,
                'message' => 'Students Added Succesfully'
            ]);
        }else{
            response()->json([
                'status' => 404,
                'message' => 'something is wronge'
            ]);
        }

    }
}
