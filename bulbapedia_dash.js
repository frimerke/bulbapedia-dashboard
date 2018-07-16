// ==UserScript==
// @name     Bulbapedia Dashboard
// @description Hide non-VG parts of bulbapedia pages, and reformat the remainder to fit on a single page.
// @author   Frimerke
// @version  0.1
// @grant    none
// @include  http://bulbapedia.bulbagarden.net/wiki/*_(Pok%C3%A9mon)#
// @include  https://bulbapedia.bulbagarden.net/wiki/*_(Pok%C3%A9mon)#
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// ==/UserScript==

document.body.style.background = "#FFFFFF";

var setup_dashboard = function() {
	var dashboard_container = jQuery('<div/>', {
    id: 'dashboard-container',
    class: 'dashboarddiv'
  }).appendTo('body');
  dashboard_container.css("height", "100vh");

  var left_column = jQuery('<div/>', {
    id: 'left-column',
    class: 'dashboarddiv'
  }).appendTo('#dashboard-container');
  left_column.css("float", "left");
  left_column.css("height", "100%");
  left_column.css("width", "20%");
  left_column.css("overflow-y", "auto");

  var middle_column = jQuery('<div/>', {
    id: 'middle-column',
    class: 'dashboarddiv'
  }).appendTo('#dashboard-container');
  middle_column.css("height", "100%");
  middle_column.css("width", "40%");
  middle_column.css("display", "inline-block");

  var location_box = jQuery('<div/>', {
    id: 'location-box',
    class: 'dashboarddiv'
  }).appendTo('#middle-column');
  location_box.css("height", "50%");
  location_box.css("overflow-y", "auto");

  var stat_chart_box = jQuery('<div/>', {
    id: 'stat-chart-box',
    class: 'dashboarddiv'
  }).appendTo('#middle-column');
  stat_chart_box.css("height", "50%");
  stat_chart_box.css("width", "100%");
  stat_chart_box.css("overflow-y", "auto");
  stat_chart_box.html("<ul><li><a href='#base-stats'>Base Stats</a></li><li><a href='#type-chart'>Type Chart</li></ul>")

  var stat_box = jQuery('<div/>', {
    id: 'base-stats',
    class: 'dashboarddiv'
  }).appendTo('#stat-chart-box');

  var chart_box = jQuery('<div/>', {
    id: 'type-chart',
    class: 'dashboarddiv'
  }).appendTo('#stat-chart-box');


  var right_column = jQuery('<div/>', {
    id: 'right-column',
    class: 'dashboarddiv'
  }).appendTo('#dashboard-container');
  right_column.css("float", "right");
  right_column.css("width", "40%");
  right_column.css("height", "100%");
  right_column.css("overflow-y", "auto");

  var moves_box = jQuery('<div/>', {
    id: 'moves-box',
    class: 'dashboarddiv'
  }).appendTo('#right-column');
  moves_box.html("<ul><li><a href='#level'>Level</a></li><li><a href='#tm-hm'>TM/HM</li></li><li><a href='#breeding'>Breeding</li></ul>")

  var level_box = jQuery('<div/>', {
    id: 'level',
    class: 'dashboarddiv'
  }).appendTo('#moves-box');

  var tm_box = jQuery('<div/>', {
    id: 'tm-hm',
    class: 'dashboarddiv'
  }).appendTo('#moves-box');

  var breeding_box = jQuery('<div/>', {
    id: 'breeding',
    class: 'dashboarddiv panel'
  }).appendTo('#moves-box');

  $(".ui-tabs").css("height", "100%");
  $(".ui-tabs-panel").css("height", "90%");
  $(".ui-tabs-panel").css("overflow-y", "auto");
}

var extract_tables = function() {
  var generalinfo_table = $("#toc").prevAll("table").first();
  generalinfo_table.css("float", "left");
  generalinfo_table.css("width", "100%");
  generalinfo_table.appendTo("#left-column");

  var gamelocations_table = $("#Game_locations").parent().next();
  gamelocations_table.appendTo("#location-box");
  gamelocations_table.css("margin", "0");


  var basestats_table = $("#Base_stats").parent().nextUntil("h4");
  //basestats_table.css("zoom", "1.75");
  //basestats_table.css("-moz-transform", "scale(1.75)");
  //basestats_table.css("-moz-transform-origin", "0 0");
  //basestats_table.css("width", "50%");
  //basestats_table.css("margin", "auto");
  basestats_table.appendTo("#base-stats");

  var typechart_table = $("#Type_effectiveness").parent().nextUntil("h3");
  typechart_table.appendTo("#type-chart");

  var move_level_table = $("#By_leveling_up").parent().nextUntil("h4");
  move_level_table.appendTo("#level");

  var move_tm_table = $("#By_breeding").parent().prevUntil("h4");
  move_tm_table.appendTo("#tm-hm");

  var move_breeding_table = $("#By_breeding").parent().nextUntil("h4");
  move_breeding_table.appendTo("#breeding");
}

var delete_the_old = function() {
  $('body > :not(#dashboard-container)').remove(); //remove all nodes directly under the body
}

setup_dashboard();
extract_tables();
delete_the_old();

$(function(){
  $("#stat-chart-box").tabs();
});

$(function(){
  $("#moves-box").tabs();
});
