<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Ajax Test</title>
	<link rel="stylesheet" href="/components/bootstrap/dist/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/assets/css/app.css" />
</head>
<body>


<div id="container">
	<div class="starter-template">
		@if (Session::has('flash_message'))
			<div id="flash-message" class="alert alert-success">
				{{ Session::get('flash_message') }}
			</div>
		@endif

		@yield('container')
	</div>
</div>
</body>
	<script type="text/javascript" src="/components/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="/components/bootstrap/dist/js/bootstrap.min.js"></script>

	<script type="text/javascript" src="/assets/js/app.js"></script>
</html>