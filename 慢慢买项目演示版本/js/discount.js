$.ajax({
    type: "get",
    url: baseUrl + "/api/getinlanddiscount",
    data: {},
    success: function (t) {
        var o = template("productList", t);
        $("ul").html(o)
    }
});
var count = 0;

function rotate() {
    $(".loading").css({
        WebkitTransform: "scale(0.5) rotate(" + count + "deg)",
        MozTransform: "scale(0.5) rotate(" + count + "deg)"
    }), 360 == count && (count = 0), count += 45, window.setTimeout(rotate, 100)
}
window.setTimeout(rotate, 10);