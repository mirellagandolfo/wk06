console.log("helloooo");
//need to define the variable with a name we can reference to look up or keep the data name describe what the set is... cityNames


var cityNames = ['nyc', 'la','autin', 'sf', 'sydney']
// var optionTags = '<option>' + cityNames[0]+ '</option>' +
//    '<option>' + cityNames[1]+ '</option>' +
//    '<opion>' + cityNames[2]+ '</option>' +
//  '<option>' + cityNames[3]+ '</option>'+
//  '<option>'+ cityNames [4] + "</option>"
var optionTags =""

cityNames.forEach(function(name){
  // optionTags= optionTags + '<option>'+ name + '</option>' //or
// optionTags += '<option'+ name + '</option'
//
// $('#city-type').html(optionTags)//not html as it will overright "Select a city" so we need to append as that will add to this
$('#city-type').append(optionTags)
})
// $('#city-type').change(function(){
$('body').addClass("nyc" "sf" "la" "austin" "sydney")
})
//   $('body').css('background', 'url(images/nyc)')//OR
// use .addClass to body and it will automatically change CSS which looks like:
//
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
