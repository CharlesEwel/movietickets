/*This file is for your custom js.  All yours*/

//Business Logic
function Movie(name, time, 3D) {
  this.name = name;
  this.time= time;
  this.threeD = threeD;
}

function Ticket(age, movie, discounts) {
  this.age = age;
  this.movie = movie;
  this.discounts= time;
}

Ticket.prototype.price = function () {
  var cost = 12;
  if (ticket.movie.time<1700){
    cost-=3;
  }
  if (ticket.age>=62){
    cost-=2;
  } else if(ticket.discounts[0]===true) {
    cost-=2;
  } else if(ticket.discounts[1]===true) {
    cost -=1;
  }
  if(ticket.movie.threeD===true) {
    cost+=3;
  }
  if(ticket.age<2) {
    cost=0;
  }
}

var StarWars = new Movie("Star Wars", [1300,1600,2000],true)
var Casablanca = new Movie("Casablanca", [1400,1730,2100],false)
//Front-End Logic
// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
