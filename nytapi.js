console.log("hello");
// var $element = $('#review');

// var test = document.getElementById('movie');
//  test2 = test.innerHTML;
// var movie = $('#movie').text();
// movie = movie.innerHTML;
// movie = movie.replace(":", "%3A");

// var count = 1;

$('.movie').each(function(count){
        movie =  $(this).text();
        console.log(movie);
        movie = movie.replace(/ /g,  "%20");
        movie = movie.replace(":", "%3A");

        var path = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="+movie+"&api-key=5X0G0v1JcMaAAeA6KBXmAlR6SJPDGUiT";
        console.log(path);

        var selector_string = "#review" + count;
        console.log(selector_string)
        var $element = $(selector_string)

        $.getJSON(path, function(data){
            articles = data.results;
            for (var i = 0; i < 3; i++) {
                var article = articles[i];
                $element.append('<br><li class="article">'+
                    '<a href="'+article.link.url+'">'+article.display_title+'</a>'+
                    '<p><b> Review by:</b> ' + article.byline + '</p>'+'<p>'+article.summary_short+'</p>'+
                    '</li>');
                  }
                }
              )
      count += 1;
});

// console.log(movie);
// movie = movie.replace(" ", "%20");
// console.log(movie);
// $(document).ready(function(){
//    var path = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="+movie+"&api-key=5X0G0v1JcMaAAeA6KBXmAlR6SJPDGUiT";
//    console.log(path);
//    $.getJSON(path, function(data){
//        articles = data.results;
//        for (var i = 0; i < 3; i++) {
//            var article = articles[i];
//            $element.append('<br><li class="article">'+
//                '<a href="'+article.link.url+'">'+article.display_title+'</a>'+
//                '<p><b> Review by:</b> ' + article.byline + '</p>'+'<p>'+article.summary_short+'</p>'+
//                '</li>');
//        };
// });
// });
