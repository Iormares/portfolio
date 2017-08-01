// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
.bgimg-1,
        .bgimg-2,
        .bgimg-3 {
            position: relative;
            opacity: 0.80;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        body {
            text-align: center;
            font color: black;
        }
        
        .bgimg-1 {
            background-image: url("https://media.giphy.com/media/qajXB8w1cnVOo/giphy.gif");
            min-height: 100%;
        }
        
        .bgimg-2 {
            background-image: url("https://c2.staticflickr.com/4/3283/3067770000_8f429dc604_b.jpg");
            min-height: 100%;
        }
        
        .bgimg-3 {
        	background-image: url("https://images.fineartamerica.com/images-medium-large/new-york-city-skyline-sunrise-stephanie-mcdowell.jpg");
			min-height: 100%;
        }
        
        .caption {
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            text-align: center;
            color: #000;
        }
        
        .caption span.border {
            background-color: #111;
            color: #fff;
            padding: 10px;
            font-size: 20 px;
            letter-spacing: 10px;
        }
$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });
.bgimg-1,
        .bgimg-2,
        .bgimg-3 {
            position: relative;
            opacity: 0.80;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        body {
            text-align: center;
            font color: black;
        }
        
        .bgimg-1 {
            background-image: url("https://media.giphy.com/media/qajXB8w1cnVOo/giphy.gif");
            min-height: 100%;
        }
        
        .bgimg-2 {
            background-image: url("https://c2.staticflickr.com/4/3283/3067770000_8f429dc604_b.jpg");
            min-height: 100%;
        }
        
        .bgimg-3 {
        	background-image: url("https://images.fineartamerica.com/images-medium-large/new-york-city-skyline-sunrise-stephanie-mcdowell.jpg");
			min-height: 100%;
        }
        
        .caption {
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            text-align: center;
            color: #000;
        }
        
        .caption span.border {
            background-color: #111;
            color: #fff;
            padding: 10px;
            font-size: 20 px;
            letter-spacing: 10px;
        }
});
