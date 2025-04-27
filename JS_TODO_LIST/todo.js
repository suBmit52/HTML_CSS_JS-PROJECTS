let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(event){
    if (inp.value.trim() === ""){
        alert("Input cannot be empty!"); // Optional alert for user feedback
        return;
    };

    let item = document.createElement("li");
    item.innerText = inp.value;
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("Delete");
    // li.appendChild(dltBtn);
    item.appendChild(dltBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

// Handle Enter key for input
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter key behavior
        if (inp.value.trim() === "") {
            alert("Input cannot be empty!");
            return;
        }

        let item = document.createElement("li");
        item.innerText = inp.value;

        let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete";
        dltBtn.classList.add("Delete");
        item.appendChild(dltBtn);

        ul.appendChild(item);
        console.log(inp.value);

        inp.value = ""; // Clear the input field
    }
});

//Event delegation is used here
ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName);
    if(event.target.nodeName = "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
