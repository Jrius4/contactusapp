<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactUs;
use App\Mail\contactUsMail;
use Mail;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function contactUS()
    {
        return view('contactUS');
    }

    public function contactUSPost(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone_number' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);
        ContactUs::create($request->all());
        $valuearray = [

            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'phone_number' => $request->get('phone_number'),
            'email' => $request->get('email'),
            'user_message' => $request->get('message')

        ];

        // $obj = new contactUsMail($valuearray);

        Mail::send(
            'email',
            array(
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'phone_number' => $request->get('phone_number'),
                'email' => $request->get('email'),
                'user_message' => $request->get('message')
            ),
            // $obj,
            function ($message) {
                $message->from('kjj1@muni.ac.ug');
                $message->to('kazibwejuliusjunior@gmail.com', 'Admin')->subject('Red Token Solutions Feedback');
            }
        );


        // Mail::send(
        //     $obj,

        //     function ($message) {
        //         $message->from('kjj1@muni.ac.ug');
        //         $message->to('kazibwejuliusjunior@gmail.com', 'Admin')->subject('Red Token Solutions Feedback');
        //     }


        // );

        return back()->with('success', 'Thanks for contacting us!');
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
