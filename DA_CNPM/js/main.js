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
    },
    confirm_in: function () {
        var inputs=[];
        $("#home input").each(function(){
            inputs.push({"name":$(this).attr("name"),"value":$(this).val()});
        });
        if(inputs[0].value === "" || inputs[1].value=== ""){
            alert("Không thành công. Thông tin thiếu");
        }else{
            alert("Thêm thành công");
        }
    },
    confirm_out: function () {
        var inputs=[];
        $("#menu1 input").each(function(){
            inputs.push({"name":$(this).attr("name"),"value":$(this).val()});
        });
        if(inputs[0].value === "" || inputs[1].value=== ""){
            alert("Không thành công. Thông tin thiếu");
        }else{
            alert("Thêm thành công");
        }
        
    },
    out_load:function(){
        $("#menu1 #dateout").val(new Date());
        $("#menu1 #datein").val(new Date());
    }
};