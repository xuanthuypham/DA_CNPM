var vehicle_manager = {
    path: window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2)),
    users: [
        {
            uname: "admin",
            name: "Dang Tien Chieu",
            phone: "2324344345",
            address: "Ha noi",
            title: "CHuc vu cao cap",
            status: "active",
            unit: "Phong ban 1",
            image: "http://image1"
        },
        {
            uname: "admin",
            name: "Dang Tien Chieu",
            phone: "2324344345",
            address: "Ha noi",
            title: "CHuc vu cao cap",
            status: "active",
            unit: "Phong ban 1",
            image: "http://image1"
        },
        {
            uname: "admin",
            name: "Dang Tien Chieu",
            phone: "2324344345",
            address: "Ha noi",
            title: "CHuc vu cao cap",
            status: "active",
            unit: "Phong ban 1",
            image: "http://image1"
        },
        {
            uname: "admin",
            name: "Dang Tien Chieu",
            phone: "2324344345",
            address: "Ha noi",
            title: "CHuc vu cao cap",
            status: "active",
            unit: "Phong ban 1",
            image: "http://image1"
        }
    ],
    navside: function () {
        $("#nav-side").load(this.path + "/template/nav-side.html");
    }
    ,
    navtop: function () {
        $("#nav-top").load(this.path + "/template/nav-top.html");
    }
    ,
    content: function () {
        $('#page-wrapper').load(this.path + "/template/page-wrapper.html");
    }
    ,
    confirm_in: function () {
        var inputs = [];
        $("#home input").each(function () {
            inputs[$(this).attr("name")] = $(this).val();
        });
        if (inputs.cardid === "") {
            alert("Không thành công. Thông tin thiếu hoặc không đúng");
        } else {
            alert("Thêm thành công");
        }
    },
    confirm_out: function () {
        var inputs = {};
        $("#menu1 input").each(function () {
            inputs[$(this).attr("name")] = $(this).val();
        });
        if (inputs.cardid === "") {
            alert("Không thành công. Thông tin thiếu hoặc không đúng");
        } else {
            alert("Thêm thành công");
        }

    },
    out_load: function () {
        $("#menu1 #dateout").val(new Date());
        $("#menu1 #datein").val(new Date());
    },
    login: function () {
        var inputs = {};
        $("#login input").each(function () {
            inputs[$(this).attr("name")] = $(this).val();
        });
        if (inputs.username === "" || inputs.password === "") {
            alert("Không thành công. Thông tin thiếu hoặc không đúng");
        } else {
            if (inputs.username === "admin" && inputs.password === "123456") {
                $.cookie("login", "admin");
                window.location.replace(this.path + "/index1.html");
            } else {
                alert("Không thành công. Thông tin thiếu hoặc không đúng");
            }
        }
    },
    permission: function (permiss) {
        if (!permiss.includes($.cookie("login"))) {
            $.removeCookie("login");
            window.location.replace(this.path + "/login.html");
        } else {

        }
    },
    logout: function () {
        $.removeCookie("login");
        window.location.replace(this.path + "/login.html");
    },
    deleteUser: function () {
        $(".delete-item").click(function () {
            var cfr = confirm("Xác nhận xóa người dùng");
            if (cfr) {
                $(this).parent("td").parent("tr").remove();
            }
        });
    }
};