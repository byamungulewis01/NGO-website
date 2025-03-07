<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\EmployeeController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// employee routes in employee controller
Route::controller(EmployeeController::class)->prefix('employee')->group(function () {
    Route::get('/', 'api')->name('employee.api');
});

Route::controller(HomeController::class)->group(function () {
    Route::get('/posts', 'index');
    Route::get('/posts/{id}', 'show');
    Route::get('/leadership', 'leadership');
    // sponsors
    Route::get('/sponsors', 'sponsors');
});







// Eric

