import 'angular';
import './ors-star/ors-star.js';

	var app = angular.module('main', ['ors-star']);

	app.directive('orsHeader', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-header.html'
		};
	});

	app.directive('orsBody', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});

	app.directive('orsFooter', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html'
		};
	});
