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

        Mail::send(
            'email',
            array(
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'phone_number' => $request->get('phone_number'),
                'email' => $request->get('email'),
                'user_message' => $request->get('message')
            ),
            function ($message) {
                // email from which the mail are from (option)
                $message->from('kjj1@muni.ac.ug');
                // the receipent mail
                $message->to('kazibwejuliusjunior@gmail.com', 'Admin')->subject('Red Token Solutions Feedback');
            }
        );

        return back()->with('success', 'Thanks for contacting us!');
    }

 
}
