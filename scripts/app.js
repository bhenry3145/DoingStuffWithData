import { getData } from './jsonfetch.js';
const display10 = document.getElementById("display10");
const display20 = document.getElementById("display20");
const display30 = document.getElementById("display30");
const display40 = document.getElementById("display40");
const display50 = document.getElementById("display50");
const sortByID = document.getElementById("sortByID");
const sortByFirstName = document.getElementById("sortByFirstName");
const sortByLastName = document.getElementById("sortByLastName");
const sortByHeight = document.getElementById("sortByHeight");
const sortByAge = document.getElementById("sortByAge");
const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const peopleList = document.getElementById("peopleList");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");

let currentPage = 1;
let currentCount = 10;
let currentSort = 'Id';
let sortOrder = 'asc';

getData();

const displayData = async (count, page) => {
    const people = await getData();
    
    people.sort((a, b) => {
        if (sortOrder === 'asc') 
            {
            if (typeof a[currentSort] === "string") 
                {
                return a[currentSort].localeCompare(b[currentSort]);
            } 
            else 
            {
                return a[currentSort] - b[currentSort];
            }
        } 
        else 
        {
            if (typeof a[currentSort] === "string") 
                {
                return b[currentSort].localeCompare(a[currentSort]);
            } 
            else 
            {
                return b[currentSort] - a[currentSort];
            }
        }
    });

    peopleList.innerHTML = "";

    const idContainer = document.createElement("div");
    const firstNameContainer = document.createElement("div");
    const lastNameContainer = document.createElement("div");
    const heightContainer = document.createElement("div");
    const ageContainer = document.createElement("div");

    const idHeader = document.createElement("div");
    idHeader.innerText = "ID";
    idHeader.classList.add('border-2', 'border-black', 'p-2');
    idContainer.appendChild(idHeader);

    const firstNameHeader = document.createElement("div");
    firstNameHeader.innerText = "First Name";
    firstNameHeader.classList.add('border-2', 'border-black', 'p-2');
    firstNameContainer.appendChild(firstNameHeader);

    const lastNameHeader = document.createElement("div");
    lastNameHeader.innerText = "Last Name";
    lastNameHeader.classList.add('border-2', 'border-black', 'p-2');
    lastNameContainer.appendChild(lastNameHeader);

    const heightHeader = document.createElement("div");
    heightHeader.innerText = "Height";
    heightHeader.classList.add('border-2', 'border-black', 'p-2');
    heightContainer.appendChild(heightHeader);

    const ageHeader = document.createElement("div");
    ageHeader.innerText = "Age";
    ageHeader.classList.add('border-2', 'border-black', 'p-2');
    ageContainer.appendChild(ageHeader);

    const startIndex = (page - 1) * count;
    const endIndex = startIndex + count;

    people.slice(startIndex, endIndex).forEach(person => {
        const idDiv = document.createElement("div");
        idDiv.innerText = person.Id;
        idDiv.classList.add('p-2');
        idContainer.appendChild(idDiv);

        const firstNameDiv = document.createElement("div");
        firstNameDiv.innerText = person.FirstName;
        firstNameDiv.classList.add('p-2');
        firstNameContainer.appendChild(firstNameDiv);

        const lastNameDiv = document.createElement("div");
        lastNameDiv.innerText = person.LastName;
        lastNameDiv.classList.add('p-2');
        lastNameContainer.appendChild(lastNameDiv);

        const heightDiv = document.createElement("div");
        heightDiv.innerText = person.Height;
        heightDiv.classList.add('p-2');
        heightContainer.appendChild(heightDiv);

        const ageDiv = document.createElement("div");
        ageDiv.innerText = person.Age;
        ageDiv.classList.add('p-2');
        ageContainer.appendChild(ageDiv);
    });

    peopleList.appendChild(idContainer);
    peopleList.appendChild(firstNameContainer);
    peopleList.appendChild(lastNameContainer);
    peopleList.appendChild(heightContainer);
    peopleList.appendChild(ageContainer);
}

display10.addEventListener('click', () => {
    currentCount = 10;
    currentPage = 1;
    displayData(currentCount, currentPage);
});

display20.addEventListener('click', () => {
    currentCount = 20;
    currentPage = 1;
    displayData(currentCount, currentPage);
});

display30.addEventListener('click', () => {
    currentCount = 30;
    currentPage = 1;
    displayData(currentCount, currentPage);
});

display40.addEventListener('click', () => {
    currentCount = 40;
    currentPage = 1;
    displayData(currentCount, currentPage);
});

display50.addEventListener('click', () => {
    currentCount = 50;
    currentPage = 1;
    displayData(currentCount, currentPage);
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayData(currentCount, currentPage);
    }
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    if (currentPage > 10)
    {
        currentPage = 1;
    }
    displayData(currentCount, currentPage);
});

sortByID.addEventListener('click', () => {
    currentSort = 'Id';
    displayData(currentCount, currentPage);
});

sortByFirstName.addEventListener('click', () => {
    currentSort = 'FirstName';
    displayData(currentCount, currentPage);
});

sortByLastName.addEventListener('click', () => {    
    currentSort = 'LastName';
    displayData(currentCount, currentPage);
});

sortByHeight.addEventListener('click', () => {
    currentSort = 'Height';
    displayData(currentCount, currentPage);
}); 

sortByAge.addEventListener('click', () => { 
    currentSort = 'Age';
    displayData(currentCount, currentPage);
});

ascendingBtn.addEventListener('click', () => {
    sortOrder = 'asc';
    displayData(currentCount, currentPage);
});

descendingBtn.addEventListener('click', () => {
    sortOrder = 'desc';
    displayData(currentCount, currentPage);
});

displayData(currentCount, currentPage);