// ==UserScript==
// @name     Bulbapedia navigation
// @description Navigate and hide non-VG parts of bulbapedia pages.
// @author   Frimerke
// @version  0.1
// @grant    none
// @include  http://bulbapedia.bulbagarden.net/wiki/*_(Pok%C3%A9mon)*
// @include  https://bulbapedia.bulbagarden.net/wiki/*_(Pok%C3%A9mon)*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// ==/UserScript==

document.body.style.background = "#000000";
//
// var dashboard_container = jQuery('<div/>', {
//     id: 'dashboard-container',
//     class: 'dashboarddiv'
// }).appendTo('body');
// dashboard_container.css("height", "100vh");
//
// var left_column = jQuery('<div/>', {
//     id: 'left-column',
//     class: 'dashboarddiv'
// }).appendTo('#dashboard-container');
// left_column.css("float", "left");
// left_column.css("height", "100%");
// left_column.css("width", "20%");
// left_column.css("overflow-y", "auto");
//
// var middle_column = jQuery('<div/>', {
//     id: 'middle-column',
//     class: 'dashboarddiv'
// }).appendTo('#dashboard-container');
// middle_column.css("height", "100%");
// middle_column.css("width", "40%");
// middle_column.css("display", "inline-block");
//
// var location_box = jQuery('<div/>', {
//     id: 'location-box',
//     class: 'dashboarddiv'
// }).appendTo('#middle-column');
// location_box.css("height", "50%");
// location_box.css("overflow-y", "auto");
//
// var right_column = jQuery('<div/>', {
//     id: 'right-column',
//     class: 'dashboarddiv'
// }).appendTo('#dashboard-container');
// right_column.css("float", "right");
// right_column.css("width", "40%");
//
//
// var generalinfo_table = $("#toc").prevAll("table").first();
// generalinfo_table.css("float", "left");
// generalinfo_table.css("width", "100%");
// generalinfo_table.appendTo(left_column);
//
// var gamelocations_table = $("#Game_locations").parent().next();
// gamelocations_table.appendTo(location_box);
// gamelocations_table.css("margin", "0");

var basestats_table = $("#Base_stats").parent().next();

var typechart_table = $("#Type_effectiveness").parent().next();
//
//
//
//
// $('body > :not(#dashboard-container)').remove(); //remove all nodes directly under the body
//
// console.log(generalinfo_table);
