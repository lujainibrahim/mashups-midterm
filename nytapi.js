console.log("hello");

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
                $element.append('<li class="article">'+'<a href="'+article.link.url+'" target="_blank">'+article.display_title+'</a>'+'<p><b>Opening Date: </b>'+article.opening_date+'</p>'+'<p><b> Review by:</b> ' + article.byline + '</p>'+'<p>'+article.summary_short+'</p>'+'</li>');
                  }
                }
              )
      count += 1;
});
