console.log("hi");
//need to define the variable with a name we can reference to look up or keep the data name describe what the set is... cityNames

var cities =['nyc', 'la','austin', 'sf', 'sydney'] // array of cities - array allows us to keep data in one place earier to maintain

// try in cosole: $('#city-type').append('<option>nyc</option>') a line for each option tag OR just set an variable as 'optionTags'...

// $('#city-type').append('<option>'+cites[0]+'</option>');
// $('#city-type').append('<option>'+cites[1]+'</option>');
// $('#city-type').append('<option>'+cites[2]+'</option>');
// $('#city-type').append('<option>'+cites[3]+'</option>');
// $('#city-type').append('<option>'+cites[4]+'</option>');

cities.forEach(function(city){ //for each elemetn called cities we are re
  //for each array allows me to loop through array - then each city we can run function
$('#city-type').append('<option>'+city+'</option>');
})

$('#city-type').change(function(event){
  event.preventDefault()

  var userInput = $('#city-type').val();

  if (userInput === cities[0]){
  $("body").css('background', 'url(images/nyc.jpg)')
  }

  else if(userInput === cities[1]){
    $("body").css('background', 'url(images/la.jpg)')//$('body').addClass("nyc")
  }
  else if(userInput===cities[2]){
    $("body").css('background', 'url(images/austin.jpg)')//$('body').addClass("austin")
  }
  else if(userInput===cities[3]){
    $("body").css('background', 'url(images/sf.jpg)')//$('body').addClass("sf")
  }

  else if(userInput===cities[4]){
    $("body").css('background', 'url(images/sydney.jpg)')//$('body').addClass("sydney")
  }

})

// $('#city-type').append(optionTags) //just adds to it html function repalcrs it
//

// })
// // $('#city-type').change(function(){
// $('body').addClass("nyc" "sf" "la" "austin" "sydney")
// })
// //   $('body').css('background', 'url(images/nyc)')//OR
// // use .addClass to body and it will automatically change CSS which looks like:
// //
//
//
//
//
// html get tag and content
// array method .forEach(function(item){})
// cityNames.forEach(function(name){
// console.log(name)
//  })

// .nyc {
//   background-image: url(../images/nyc.jpg)
// }
// .sf {
//   background-image: url(../images/sf.jpg)
// }
// .la {
//   background-image: url(../images/la.jpg)
// }
// .austin {
//   background-image: url(../images/austin.jpg)
// }
// .sydney
