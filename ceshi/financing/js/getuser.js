(function() {
    $.ajax({
        type: "get",
        url: '/api/user/info',
        dataType: "json",
        header: { "X-Requested-With": "XMLHttpRequest" },
        success: function(data) {
            console.log(data);
            if (data.code == 200) {
                var res = data.data;
                $('.people').attr("src", res.avatar);
                $('.c_name').text(res.name);
                $('.c_roles').text(res.business_id);

            }
        },
        error: function() {
            console.log('error')
        }
    });
})();