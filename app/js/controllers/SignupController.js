'use strict';

todoApp.controller('SignupController',
	function SignupController($scope){
		$scope.user = {
			firstname: 'John',
			image: '/img/profile.jpg'
		};
	}
)