var topicArr = ["Golden State","Warriors","Steph Curry","Klay Thompson","Draymond Green","Kevin Durant","Demarcus Cousins","Steve Kerr","Andre Igoudala","Jonas Jerebko","Alfonzo McKinnie", "Damion Lee","Kevon Looney","Damian Jones","Shaun Livingston","Jordan Bell","Quinn Cook","Oracle Area"];

for(var i=0; i<topicArr.length; i++){
    var button = $('<button>');
    button.text(topicArr[i]);
    button.addClass('styled');
    $('.buttons').append(button);
}

$('form button').on('click', function(){
    event.preventDefault();
    var button = $('<button>'); 
    var fieldText = $('input').val();
    button.text(fieldText);
    button.addClass('styled');
    topicArr.push(fieldText);
    $('.buttons').append(button);
});

$(document).on('click', '.styled',function(){
    $('.container').empty();
    var searchTopic = $(this).text();
    var qurl = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=mNqGPuEamE9CjwgQ9M7gLsPslGRBez79";
    $.ajax({
        url: qurl,
        method: 'GET'
    }).then(function(response){
        for(var i=0; i<response.data.length; i++){
        var img = $('<img>');
        img.attr('src', response.data[i].images.fixed_height.url);
        $('.container').append(img);
        }
    });
});













// $(document).on('click', '.clickable button', function(){

//     event.preventDefault();

//     var searchTopic = $(this).text();
//     var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=mNqGPuEamE9CjwgQ9M7gLsPslGRBez79";
    
//     $.ajax({
//         url: queryUrl,
//         method: "GET",
//     }).then(function(response){
//         for(var i=0; i<response.data.length; i++){
//         var img = $('<img>');
//         img.attr('src', response.data[i].images.fixed_height.url);
//         $('.buttons').append(img);
//         }
//     })
// })








