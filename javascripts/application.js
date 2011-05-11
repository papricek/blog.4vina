var Application = function() {

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
        }
    }
}();






















