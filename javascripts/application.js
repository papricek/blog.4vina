var Application = function() {

    var DISQUS_API_KEY = "zrPjvWYQajxfGedOasCvs052F6LKUxszCUSgcl5e5G3mpnl0fNlqUEhouTNDUv1l";

    return {
        initStickyNav: function() {
            var sidebar = $("aside nav");
            var top = sidebar.offset().top - parseFloat(sidebar.css("marginTop"));

            $(window).scroll(function (e) {
                var ypos = $(this).scrollTop();
                if (ypos >= top) {
                    sidebar.addClass("fixed");
                }
                else {
                    sidebar.removeClass("fixed");
                }
            });
        },

        initDisqusSlider: function(){
            var disqus = $("#disqus_thread");
            var button = $("#disqus-button");
            var arrow = $("#disqus-button-arrow");
            button.click(function(e){
                e.preventDefault();
                disqus.slideToggle("slow", function(){
                    if(disqus.is(":visible")){
                        arrow.html("&uarr;")
                    }
                    else {
                        arrow.html("&darr;")
                    }
                });
            })

        }
    }
}();
