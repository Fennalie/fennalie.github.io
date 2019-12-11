<!DOCTYPE html>
<html>
<head>
	
	<!-- Metadata goes in head -->
	
	<title>Phuong's world</title>
	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Solway&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto|Solway&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="firstPage.css">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	
</head>
<body>
	<!-- content goes in the body -->
	
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="firstPage.html"><i class="fas fa-dungeon"></i> Phuong's World</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- FRONTEND -->
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Front-end
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="page2.html">Anchor Tags</a>
						<a class="dropdown-item" href="thingIveLearned.html">Internet Basics</a>
						<a class="dropdown-item" href="aboutMe.html">CSS Styles</a>
						<a class="dropdown-item" href="Selectas.html">Selectors Special</a>
						<a class="dropdown-item" href="navbar.html">Navbar BS3</a>
						<a class="dropdown-item" href="bsgridsys.html">Grid BS3</a>
						<a class="dropdown-item" href="Displaybs4.html">Display BS4</a>
						<a class="dropdown-item" href="flexboxbs4.html">Flexbox BS4</a>
						<a class="dropdown-item" href="bs4Goodies.html">Goodies BS4</a>
						<a class="dropdown-item" href="navbarbs4.html">Navbar BS4</a>
						<a class="dropdown-item" href="navsflexbs4.html">NavFlex BS4</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Nothing else here.Yet.</a>
					</div>
				</li>
				<!-- BACKEND -->
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Back-end
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Nothing else here.Yet.</a>
					</div>
				</li>
				<!-- ASSIGNMENTS -->
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Assignments
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="selectorsExercise.html">Selectors Exercise</a>
						<a class="dropdown-item" href="tictactoe.html">TicTacToe</a>
						<a class="dropdown-item" href="photoBlog.html">Photo Blog</a>
						<a class="dropdown-item" href="blog.html">Blog</a>
						<a class="dropdown-item" href="imageGallery.html">Image Gallery</a>
						<a class="dropdown-item" href="purrMatch.html">Purrmatch</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Nothing else here.Yet.</a>
					</div>
				</li>
				
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
	
	<h1>This is a header</h1>
	<h3>with block level element</h3>
	<h6>Likes our own lines</h6>
	
	<img src="https://previews.123rf.com/images/masarik512/masarik5121810/masarik512181000117/110134298-cute-dog-redhead-pembroke-welsh-corgi-standing-a-skateboard-on-the-street-for-a-summer-walk-in-the-p.jpg" width="500px">
	
	<a href="http://www.google.com">Click this in-line element to go to Google.. ish</a>
	
	this is some regular text that will show up on one line 
	
	<p><a href="page2.html">Anchor tags galore - relative pathing</a></p>
	
	<p><a href="form.html">Form tags</a></p>
	<p><a href="thingIveLearned.html">Things I've Learned - Internet Basics</a></p>
	<p><a href="aboutMe.html">CSS Styling</a></p>
	<p><a href="Selectas.html">Selector Special</a></p>
	<div style="background: #a8327f; width: 400px; height: 20px">
		<p>
			<a href="selectorsExercise.html">Selectors + Grouping, Combinators, Pseudos = Specificity </a>
		</p>
	</div>
	<div style="background: #b9381d">
		<p>
			<a href="tictactoe.html">Tic Tac Toe</a>
		</p>
	</div>
	<div style="background: #ff95fa">
		<p>
			<a href="photoBlog.html">Photo Blog</a>
		</p>
	</div>
	<div style="background: #f46996">
		<p>
			<a href="blog.html">Blog</a>
		</p>
	</div>
	<div class="container">
		<button class="btn btn-dark pb-2 mb-2 mr-2">
			<a href="bootstrap.html" role="button">Bootstrap</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="navbar.html">Navbar 3</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="bsgridsys.html">Grid bs3</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="Displaybs4.html">Display 4</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="flexboxbs4.html">Flexbox 4</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="imageGallery.html">Image Gallery</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="bs4Goodies.html">Bs4 Goodies</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="navbarbs4.html">Navbar 4</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="navsflexbs4.html">Nav & Flexbox</a></button>
			<button class="btn btn-dark pb-2 mb-2 mr-2"><a href="purrMatch.html">Purrmatch</a></button>
		</div>
		
		
		
		
		
		
		
		
		
		<p>Fancy paragraphs - block level elements. It has spacing after it. <b>This is written in bold using 'b' tag. b tag is an in line element.</b><strong> Strong does the same thing apparently.</strong><em>em tag is better than 'i' tag.</em> This is because of something...</p>
		
		<ol>
			<li>lists and nested lists. </li>
			<li>ordered and unordered list.</li>
			<ul>
				<li>Sunflower</li>
				<li>Banana
					<ol>
						<li>Nomnana</li>
						<li>Bahnana</li>
					</ol>
				</li>
			</ul>
		</ol>
		
		
		<ul>
			<li><strong>unordered list</strong></li>
			<li><em>way weaker emphasis</em></li>
		</ul>
		
		<div>
			<h1>Lorem press tab</h1>
			
			<p><div>[div] block level container</div> <span>[span] in line container</span>
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			
			<strong>Table, table rows, table cells, table headers,table head, table body</strong>
			<table border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Breed</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Rusty</td>
						<td>2</td>
						<td>Mutt</td>
					</tr>
					<tr>
						<td>Wyatt</td>
						<td>13</td>
						<td>Golden</td>
					</tr>
				</tbody>
			</table>
			
			
			<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
		</body>
		</html>
		
		