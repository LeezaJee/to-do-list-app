$("#todoForm").on("submit", function (e) {
    e.preventDefault();

    const value = e.currentTarget.todoItem.value;

    if (value === "") {
        alert("Please type in something!") + preventDefault(); 
    } 
    

    const li = $("<li><span>" + value + "</span></li>");

    const delBtn = $("<span class='del'>x</span>");

    li.append(delBtn);

    li.dblclick(function () {
        $(this).toggleClass("strike");
    });

    delBtn.click(function() {
        li.addClass("delete");
    });

    $("#list").append(li);
    this.reset();
});

$("#list").sortable();