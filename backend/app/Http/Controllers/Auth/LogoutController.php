<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function adminLogout()
    {
        auth()->logout();
        return to_route('admin.login');
    }
    #customer logout
}
