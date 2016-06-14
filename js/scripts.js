/*This file is for your custom js.  All yours*/

//Business Logic
function Movie(name, time, threeD) {
  this.name = name;
  this.time= time;
  this.threeD = threeD;
}

function Ticket(age, time, threeD, discounts) {
  this.age = age;
  this.time = time;
  this.threeD = threeD;
  this.discounts= discounts;
}

Ticket.prototype.price = function () {
  var cost = 12;
  if (this.time<1700){
    cost-=3;
  }
  if (this.age>=62){
    cost-=2;
  } else if(this.discounts[0]==="military") {
    cost-=2;
  } else if(this.discounts[1]==="student") {
    cost -=1;
  }
  if(this.threeD===true) {
    cost+=3;
  }
  if(this.age<2) {
    cost=0;
  }
  return cost;
}

Movie.prototype.className = function () {
  var movieClassName = this.name.replace(/\W/g, "");
  return movieClassName;
}

var StarWars = new Movie("Star Wars", [1300,1600,2000],true)
var Casablanca = new Movie("Casablanca", [1400,1730,2100],false)
var movieArray = [StarWars, Casablanca];

//Front-End Logic
// Calls input from form-input.html

var threeD=false;
var time=1700;

$(document).ready(function(){
  movieArray.forEach(function (element) {
    $(".movie-schedule").append('<div class="row"><h2>' + element.name + '</h2>' + '<ul class = "movie-times ' + element.className() + '">' + '</ul></div>')
    if (element.threeD) {
      $(".movie-schedule h2").append("<span class = 'threed'> 3D</span>");
    }
    element.time.forEach(function (show) {
      $(".movie-schedule ul." + element.className() ).append('<li><span class="showtime">' + show + '</span></li>');
      if (element.threeD) {
        $(".showtime").addClass("3D");
      }
    });
  });

  $("#new-ticket").submit(function(event){
    event.preventDefault();

    var age = parseInt($("#age").val());
    var discounts=[$("#military:checked").val(),$("#student:checked").val()]
    var newTicket=new Ticket(age, time, threeD, discounts);
    $('#output').html("<p class='receipt'>Thank you for your purchase.  Your total cost is $" + newTicket.price() + "</p>");

  });

  $(".showtime").click(function(){
    $(".showtime").removeClass("activeshow")
    $(this).addClass("activeshow")
    time = this.innerHTML;
    if ($(this).hasClass("3D")){
      threeD=true;
    } else {
      threeD=false;
    }
  });
});
