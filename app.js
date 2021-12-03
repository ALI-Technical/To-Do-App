var item = document.getElementById("item");
var ulElement = document.getElementById("ul-element");

function addItem() {
    // console.log(item.value.length);
    if(item.value.length > 3){
        var li = document.createElement("li");
        var liTxt = document.createTextNode(item.value);
        li.appendChild(liTxt);
        // li.innerHTML = item.value;
        // li.appendChild(liTxt);
        ulElement.appendChild(li);
        var editBtn = document.createElement("button");
        editBtn.classList = "btn btn-outline-primary";
        editBtn.setAttribute("onclick","editBtn(this)");
        editBtn.appendChild(document.createTextNode("Edit"));
        li.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.classList = "btn btn-outline-danger";
        deleteBtn.setAttribute("onclick","deleteBtn(this)")
        deleteBtn.appendChild(document.createTextNode("delete"));
        li.appendChild(deleteBtn);
        var div = document.createElement("div")
        div.className="myDiv"
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        // item.value="";
    }
    else {
        alert("Value Should Be at Least 5 Character Long")
    }
}

function editBtn(element) {
    var editValue = prompt("ENTER EDIT VALUE", element.parentNode.parentNode.firstChild.nodeValue);
    // console.log(editValue);
    element.parentNode.parentNode.firstChild.nodeValue = editValue;
}

function deleteBtn(element) {
    var div = element.parentNode.parentNode.remove();    
}

function deleteAll() {
    item.value="";
    ulElement.innerHTML="";
}