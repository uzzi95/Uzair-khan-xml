let btn = document.getElementById('add_btn');
btn.addEventListener('click', addFood);

function addFood(e) {
    let currentBtn = e.currentTarget;
    console.log(currentBtn);
    let currentInput = currentBtn.previousElementSibling;
    console.log(currentInput.value);
    let currentFoodName = currentInput.value;
    let newLi = document.createElement('li');
    newLi.className = `list-group-item d-flex justify-content-between my-1`;
    newLi.innerHTML = `
                <h3 class="flex-grow-1">${currentFoodName}🍗</h3>
                <button class="btn btn-dark mx-2">Read</button>
                <button class="btn btn-danger" onclick="removeFood(this)">Delete</button>
    `

    let parentList = document.getElementById('parentList');
    parentList.appendChild(newLi);
    currentInput.value = "";
    // //OR
    // if (btn.click) {
    //     currentInput.value = "";
    // }

}

function removeFood(currElement) {
    currElement.parentElement.remove()
}