var ngtodo=angular.module('ngtodo',[]);
ngtodo.controller('mainController',function($scope)
{
	console.log("controller");
	$scope.todos=[
	{
		title:'Do my homework',
		details:'I must do my homework'
	},
	{
		title:'Do my Assignment',
		details:'I have to do my assignment next week'
	},
	{
		title:'Shopping',
		details:'I have to go for shopping today'

	},
	{
		title:'A vacation scheduled',
		details:'following week'
	},
	{
		title:'A movie',
		details:'movie tickets booked for tomorrow'
	},
	]
		

	
})