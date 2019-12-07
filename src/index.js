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
import formulaSuccess from './modules/formulaSuccess.js';
import slider from './modules/slider.js';
import repairTypes from './modules/repairTypes.js';
import sliderPortfolio from './modules/sliderPortfolio.js';
import showTransparency from './modules/showTransparency.js';
import showDesign from './modules/showDesign.js';
import popupDialogDesign from './modules/showPopupDialogDesign.js';
import sliderReviews from './modules/sliderReviews.js';
import showTabScheme from './modules/showTabScheme.js';
import accordion from './modules/accordion.js';
import sliderCarouselPartners from './modules/sliderCarouselPartners.js';


showListTel();
toScrollingAnchor();
maskPhone();
toggleMenu();
showRepairAndPrivacy();
formulaSuccess();
repairTypes(slider);
sliderPortfolio();
showTransparency();
showDesign();
popupDialogDesign();
sliderReviews();
showTabScheme();
accordion();
sliderCarouselPartners();
