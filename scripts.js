const people = [
  { name: 'adri'},
  { name: 'becky'},
  { name: 'chris'},
  { name: 'evan'},
  { name: 'frank'},
  { name: 'georgette'},
  { name: 'hugh'},
  { name: 'igor'},
  { name: 'jacoby'},
  { name: 'kristina'},
  { name: 'lemony'},
  { name: 'matilda'},
  { name: 'nile'},
  { name: 'ophelia'},
  { name: 'patrick'},
  { name: 'quincy'},
  { name: 'roslyn'},
  { name: 'solene'},
  { name: 'timothy'},
  { name: 'uff'},
  { name: 'violet'},
  { name: 'wyatt'},
  { name: 'x'},
  { name: 'yadri'},
  { name: 'zack'},
];

let searchInputEl = document.getElementById("search");
let listItems = document.getElementById("list-items");
let clearBtn = document.getElementById("clear");


clearBtn.addEventListener("click", () => {
  clearListFromView();
})


searchInputEl.addEventListener('input', text => {
  let valueInput = text.target.value;
  //find element in array using filter()
  valueInput = valueInput.toLowerCase();

  try {
    if(valueInput && valueInput.length > 0) {
      setItemsToView(people.filter(persona => persona.name.includes(valueInput)));
    } else {
      clearListFromView();
    }
  } catch (error) {
    console.error(error);
  }

})

function setItemsToView(itemsFinded) {
  clearListFromView();

  for (const item of itemsFinded ) {
    let itemEl = document.createElement("li");
    let text = document.createTextNode(item.name);
    itemEl.appendChild(text);
    listItems.appendChild(itemEl);
  }
}


function clearListFromView() {
  while(listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
}



let valueD = null;


if(valueD) {
  console.log('get data');
} else {
  console.log('something wrong');
}