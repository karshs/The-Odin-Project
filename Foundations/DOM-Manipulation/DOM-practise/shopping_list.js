// 1. Select the elements we need from the HTML
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// 2. Add a click event listener to the "Add item" button
button.addEventListener('click', () => {
    // Store the current value of the input
    const myItem = input.value;

    // Logic Check: Don't add empty items to the list
    if (myItem.trim() === "") return;

    // Clear the input so it's ready for the next item
    input.value = '';

    // 3. Create the three elements needed for each list item
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    // 4. Attach the elements to each other (Nesting)
    // Put the text inside the span, and the "Delete" label on the button
    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    // 5. Append the entire <li> to the <ul> in the DOM
    list.appendChild(listItem);

    // 6. THE DELETE LOGIC
    // We add the listener to the button we JUST created
    listBtn.addEventListener('click', () => {
        // Remove the entire <li> (the parent of this button)
        list.removeChild(listItem);
    });

    // 7. UX Pro-tip: Move the cursor back to the input automatically
    input.focus();
});