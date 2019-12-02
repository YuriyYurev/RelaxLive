'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import showListTel from './modules/showListTel.js';
import toggleMenu from './modules/toggleMenu.js';

showListTel();
toggleMenu();
