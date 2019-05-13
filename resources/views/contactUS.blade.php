<!DOCTYPE html>
<html>

<head>
    <title>Laravel 5.4 Cloudways Contact US Form Example</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <h1>Contact US Form</h1>
        @if(Session::has('success'))
        <div class="alert alert-success">
            {{ Session::get('success') }}
        </div>
        @endif
        {!! Form::open(['route'=>'contactus.store']) !!}
        <div class="col-lg-6 col-md-6 col-sm-12 form-group {{ $errors->has('first_name') ? 'has-error' : '' }}">
            {!! Form::label('First Name:') !!}
            {!! Form::text('first_name', old('first_name'), ['class'=>'form-control', 'placeholder'=>'Enter First Name']) !!}
            <span class="text-danger">{{ $errors->first('first_name') }}</span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 form-group {{ $errors->has('last_name') ? 'has-error' : '' }}">
            {!! Form::label('Last Name:') !!}
            {!! Form::text('last_name', old('last_name'), ['class'=>'form-control', 'placeholder'=>'Enter last Name']) !!}
            <span class="text-danger">{{ $errors->first('last_name') }}</span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 form-group {{ $errors->has('phone_number') ? 'has-error' : '' }}">
            {!! Form::label('Phone Number:') !!}
            {!! Form::text('phone_number', old('phone_number'), ['class'=>'form-control', 'placeholder'=>'Enter Phone Number']) !!}
            <span class="text-danger">{{ $errors->first('phone_number') }}</span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 form-group {{ $errors->has('email') ? 'has-error' : '' }}">
            {!! Form::label('Email:') !!}
            {!! Form::text('email', old('email'), ['class'=>'form-control', 'placeholder'=>'Enter Email']) !!}
            <span class="text-danger">{{ $errors->first('email') }}</span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 form-group {{ $errors->has('message') ? 'has-error' : '' }}">
            {!! Form::label('Message:') !!}
            {!! Form::textarea('message', old('message'), ['class'=>'form-control', 'placeholder'=>'Enter Message']) !!}
            <span class="text-danger">{{ $errors->first('message') }}</span>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <button class="theme-btn btn-style-one">Contact US!</button>
        </div>
        {!! Form::close() !!}
    </div>
</body>

</html>