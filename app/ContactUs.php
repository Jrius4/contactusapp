<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    public $table = 'contact_us';
    public $fillable = ['first_name','last_name','phone_number','email','message'];
}
