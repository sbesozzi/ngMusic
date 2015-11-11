import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';


angular
  .module('app', ['ui.router'])
  .constant('SC', '6d11b6fc06db60a9e11d5b874d8d3038')
  .config(config)
  .controller('HomeController', HomeController)
;

