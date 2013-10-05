var app = angular.module('myTodo',[]);

app.controller('MyController',function($scope){

	$scope.todoList = [
	{todoItem: "For example - Pick up the trash", todoStatus: false}
	];

	$scope.addNewTask = function(){
		if($scope.newTask.length){
			$scope.todoList.push({todoItem : $scope.newTask, todoStatus:false});
			$scope.newTask = " ";
		}
	}

	

	$scope.removeTask = function(){

		var allTasks = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(allTasks,function(todo){
			if(!todo.todoStatus)
			{
				$scope.todoList.push(todo);
			}
		})
		
	}
});
