@extends('layouts.master')

@section('container')
	<h1>New User</h1>
	<hr>
	<p>
		{{ Form::open(array('url' => 'users', 'method' => 'post')) }}
			<div class="form-group">
				{{ Form::label('memberNo','Member No') }}
				{{ Form::text('memberNo', null) }}
			</div>

			<div class="form-group">
				<span id="memberError" class="memberError">Member Not Found</span>
			</div>

			<div class="form-group">
				{{ Form::label('memberFName','First Name') }}
				{{ Form::text('memberFName', null) }}
			</div>

			<div class="form-group">
				{{ Form::label('memberLName','Last Name') }}
				{{ Form::text('memberLName', null ) }}
			</div>

			<div class="form-group">
				{{ Form::submit('Submit', array('class' => 'btn btn-primary')) }}
			</div>
		{{ Form::close() }}
	</p>
@stop