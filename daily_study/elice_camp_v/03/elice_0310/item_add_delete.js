var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//지시사항 1번 새 아이템 리스트에 추가하기
function addItem(e) {
  e.preventDefault();
  //1.
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  //2.
  li.appendChild(document.createTextNode(newItem));

  //3.
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("삭제"));
  li.appendChild(deleteButton);
  itemList.appendChild(li);
}

//지시사항 2번 리스트에서 아이템 삭제하기
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Event
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}