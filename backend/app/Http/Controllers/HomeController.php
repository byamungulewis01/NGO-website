<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Sponsor;
use App\Models\Team;
// use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }
    // show
    public function show($id)
    {
        $post = Post::findorfail($id);
        return response()->json($post);
    }
    // show

    public function leadership()
    {
        $leaders = Team::all();
        return response()->json($leaders);
    }
    public function sponsors()
    {
        $sponsors = Sponsor::all();
        return response()->json($sponsors);
    }
}
