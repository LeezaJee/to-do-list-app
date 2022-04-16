function newItem() {

    //adding a new item to the list 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //crossing out an item from the list 
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
		li.toggleClass('strike');
	});

    //adding the delete button "X"
    let crossOutButton = $('<crossOutButton></crossOutButton>');

    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);

    //adding class 'delete' (display: none) from the CSS
    function deleteListItem() {
        li.addClass('delete')
    }
    //reordering the items
    $('#list').sortable();

}