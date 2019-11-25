$('document').ready(() => {
    const menuCollapsed = $('#navbar-collapsed');

    $('#menu-collapse').click(function() {
        menuCollapsed.slideToggle();
    });

    $('#navbar-collapsed li a').click(function() {
        menuCollapsed.slideToggle();
    });
})

