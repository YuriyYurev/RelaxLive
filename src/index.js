'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import showListTel from './modules/showListTel.js';
import toScrollingAnchor from './modules/toScrollingAnchor.js';
import maskPhone from './modules/maskPhone.js';
import toggleMenu from './modules/toggleMenu.js';
import showRepairAndPrivacy from './modules/showRepairAndPrivacy.js';
import tabs from './modules/tabs.js';


showListTel();
toScrollingAnchor();
maskPhone();
toggleMenu();
showRepairAndPrivacy();
tabs();