$(".eat-button").click(function() {
    //put route eat da burger
    $.ajax(
        "/eat", {
            type: "put",
            data: { id: $(this).data("id") }
        }).then(function(data) {
        location.reload();
    });
})