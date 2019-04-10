$(".eat-button").click(function() {
    //post route eat da burger
    $.post("/eat", { id: $(this).data("id") }, function(data) {
        location.reload();
    })
})