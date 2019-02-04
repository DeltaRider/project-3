var topicArr = ["Golden State","Warriors","Steph Curry","Klay Thompson","Draymond Green","Kevin Durant","Demarcus Cousins","Steve Kerr","Andre Igoudala","Jonas Jerebko","Alfonzo McKinnie", "Damion Lee","Kevon Looney","Damian Jones","Shaun Livingston","Jordan Bell","Quinn Cook","Oracle Arena"];

var num = 10;

var searchTopic;

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
    $('#add').removeClass('hidden');
    searchTopic = $(this).text();
    var qurl = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=mNqGPuEamE9CjwgQ9M7gLsPslGRBez79&limit=" + num;
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

$('#add').on('click', function(){
    num = num + 10;
    var qurl = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=mNqGPuEamE9CjwgQ9M7gLsPslGRBez79&limit=10&offset=" + num;
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





