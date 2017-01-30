<?php 
  define('ROOT', dirname(__FILE__));
  include(ROOT.'/functions.php');
?>
<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="UTF-8">
	<title>digitalizador</title>
</head>
      <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
      <script src="scripts.js"></script>
      <link rel="stylesheet" href="main.css">
      <script>
           angular
            .module('firstApplication', ['ngMaterial'])
      </script>
  </head>

<body  ng-app="firstApplication" >
<body >

	<md-content class="btnHolder" layout="column" layout-align="start center">
      
      <div onclick="setBookName();"class="setNameBtn btn ">
        <p  ><strong>Carpeta</strong></p>
      </div>

      
      <a  class="createBtn btn" href="">
        <p><strong>PDF</strong></p>
      </a>

    </md-content>

</body>
</html>