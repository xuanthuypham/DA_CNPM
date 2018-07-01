var vehicle_manager = {
    path: window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2)),

    navside: function () {
        $("#nav-side").load(this.path + "/template/nav-side.html");
    },
    navtop: function () {
        $("#nav-top").load(this.path + "/template/nav-top.html");
    },
    content: function () {
        $('#page-wrapper').load(this.path + "/template/page-wrapper.html");
    }
};