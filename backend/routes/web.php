<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Admin\AdminDashController;
use App\Http\Controllers\Admin\SponsorController;
use App\Http\Controllers\Admin\TeamController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'guest'], function () {
    Route::controller(AdminAuthController::class)->name('admin.')->group(function () {
        Route::get('/', 'index')->name('login');
        Route::post('/login', 'login')->name('loginAuth');
    });
});

// Route::group(['middleware' => 'auth'], function () {
Route::name('admin.')->middleware('auth')->group(function () {
    //    Admin Dashboard
    Route::get('/dashboard', [AdminDashController::class, 'index'])->name('dashboard');
    //    Employees
    Route::controller(EmployeeController::class)->name('employee.')->group(function () {
        Route::get('/employees', 'index')->name('index');
        Route::post('/employees', 'store')->name('store');
        Route::put('/employees/{id}', 'update')->name('update');
        Route::delete('/employees/{id}', 'destroy')->name('destroy');
        #employee profile
        Route::get('/employees/profile/{id}', 'profile')->name('profile');
        Route::get('/employees/profile', 'profileEdit')->name('profileEdit');
        Route::put('/employees/profile/update', 'profileUpdate')->name('profileUpdate');
        Route::put('/employees/profile/change-password', 'changePassword')->name('changePassword');
    });
    //  End Employees
    //    Posts
    Route::controller(PostController::class)->name('posts.')->group(function () {
        Route::get('/posts', 'index')->name('index');
        Route::post('/posts', 'store')->name('store');
        Route::put('/posts/{id}', 'update')->name('update');
        Route::delete('/posts/{id}', 'destroy')->name('destroy');
    });
    //   End Posts
    //    Team
    Route::controller(TeamController::class)->name('team.')->group(function () {
        Route::get('/team', 'index')->name('index');
        Route::post('/team', 'store')->name('store');
        Route::put('/team/{id}', 'update')->name('update');
        Route::delete('/team/{id}', 'destroy')->name('destroy');
    });
    //   End Team


    //    Team
    Route::controller(SponsorController::class)->name('sponsor.')->group(function () {
        Route::get('/sponsor', 'index')->name('index');
        Route::post('/sponsor', 'store')->name('store');
        Route::delete('/sponsor/{id}', 'destroy')->name('destroy');
    });
    //   End Team

    // change password
    Route::get('/change-password', [AdminAuthController::class, 'changePassword'])->name('changePassword');
    Route::put('/change-password/{id}', [AdminAuthController::class, 'changePasswordStore'])->name('changePasswordStore');

    //    Logout
    Route::get('/logout', [LogoutController::class, 'adminLogout'])->name('logout');
});

// });
