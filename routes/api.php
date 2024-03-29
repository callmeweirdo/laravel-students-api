<?php

use App\Http\Controllers\API\StudentsController;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::delete('/delete-student/{id}', [StudentsController::class, "destroy"]);
Route::put('/update-student/{id}', [StudentsController::class, "update"]);
Route::get('/edit-student/{id}', [StudentsController::class, 'edit']);
Route::get('/students', [StudentsController::class, 'index']);
Route::post('/add-student', [StudentsController::class, 'store']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

