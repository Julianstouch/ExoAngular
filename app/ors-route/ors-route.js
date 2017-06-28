import 'angular-ui-router';

var app = angular.module('ors-route', ['ui.router']);

const accueilUrl = require('./tmpl/accueil.html');
const produitUrl = require('./tmpl/produit.html');
const servicesUrl = require('./tmpl/services.html');
const contactUrl = require('./tmpl/contact.html');

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

       $locationProvider
			.html5Mode(true);

    var accueilState = {
        name: 'accueil',
        url: '/',
        template: accueilUrl
    }

    var produitState = {
        name: 'produit',
        url: '/produit',
        template: produitUrl
    }

        var servicesState = {
        name: 'services',
        url: '/services',
        template: servicesUrl
    }

        var contactState = {
        name: 'contact',
        url: '/contact',
        template: contactUrl
    }

    $stateProvider.state(accueilState);
    $stateProvider.state(produitState);
    $stateProvider.state(servicesState);
    $stateProvider.state(contactState);

    $urlRouterProvider.otherwise('/');

});