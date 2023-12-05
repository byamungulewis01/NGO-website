<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sponsor;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
 //index
 public function index()
 {
     $posts = Sponsor::all();
     return view('admin.sponsor.index', compact('posts'));
 }
 //store
 public function store(Request $request)
 {
     $fields = $request->validate([
         'image' => 'required|mimes:png,jpg,jpeg|max:100000|dimensions:max_width=200,max_height=154',
     ]);
     if ($request->hasFile('image')) {
         $file = $request->file('image');
         $extension = $file->getClientOriginalExtension();
         $filename = time() . '.' . $extension;
         $file->move(public_path('uploads'), $filename);
         $fields['image'] = $filename;
     }
     Sponsor::create($fields);
     return to_route('admin.sponsor.index')->with('success', 'Sponsor Added Successfully');
 }
 //update

 public function destroy($id)
 {
    Sponsor::find($id)->delete();
     return to_route('admin.sponsor.index')->with('success', 'Sponsor Deleted Successfully');
 }
}
