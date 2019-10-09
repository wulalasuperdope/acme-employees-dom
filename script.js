const employeesList = document.querySelector('.employee-list');

const employees = [
    { id: 1, name: 'moe', selected:false},
    { id: 2, name: 'larry',selected:false},
    { id: 4, name: 'shep',selected:false},
    { id: 3, name: 'curly',selected:false},
    { id: 5, name: 'groucho',selected:false},
    { id: 6, name: 'harpo',selected:false},
    { id: 8, name: 'shep Jr.',selected:false},
    { id: 99, name: 'lucy',selected:false}
];
//render function is defined to render the original webpage
const render = () => {
    employeesList.innerHTML = '';
    employees.forEach(employee => {
        const eachBox = document.createElement('div');
        eachBox.classList.add('toggle-off');
        const employeeName = document.createElement('p');
        employeeName.innerText = employee.name;
        eachBox.appendChild(employeeName);
            
        employeesList.appendChild(eachBox);
    })
}

employeesList.addEventListener('click', ev => {
    if(ev.target.tagName === 'P'){
        //html element shares the same index as the list index.
        //manipulate the element by changing list properties and the connecting point is the index.
        const idx = [...ev.target.parentNode.parentNode.children].indexOf(ev.target.parentNode);
        const employee = employees[idx];
        if(!employee.selected && employees.filter(employee => employee.selected).length === 3){
            alert('there is a max of 3 favorites, sorry');
        }else{
            employee.selected = !employee.selected;
            ev.target.parentNode.classList.toggle('toggle-on');
        }

    }
})

//when the script executed for the first time, this render function is called 
render();