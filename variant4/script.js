const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const itemList = document.getElementById('itemList');
const noResultsDiv = document.getElementById('noResults');

let originalItems = [];

function init() {
    const items = Array.from(itemList.children);
    originalItems = items.map(item => ({
        element: item,
        text: item.textContent.trim(),
        date: item.getAttribute('data-date')
    }));

    originalItems.forEach(item => {
        const dateBadge = document.createElement('span');
        dateBadge.className = 'date-badge';
        dateBadge.textContent = formatDate(item.date);
        item.element.appendChild(dateBadge);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA');
}

function filterList() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredItems = originalItems.filter(item => 
        item.text.toLowerCase().includes(searchTerm)
    );
    
    updateDisplay(filteredItems);
    
    if (filteredItems.length === 0 && searchTerm !== '') {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
    }
}
function sortItems(items) {
    const sortType = sortSelect.value;
    const sortedItems = [...items];
    
    switch(sortType) {
        case 'alphabet':
            sortedItems.sort((a, b) => a.text.localeCompare(b.text, 'uk'));
            break;
        case 'alphabetDesc':
            sortedItems.sort((a, b) => b.text.localeCompare(a.text, 'uk'));
            break;
        case 'date':
            sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'dateDesc':
            sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        default:
            break;
    }
    
    return sortedItems;
}

function updateDisplay(itemsToShow) {
    const sortedItems = sortItems(itemsToShow);
    
    itemList.innerHTML = '';
  
    sortedItems.forEach(item => {
        
        const clonedElement = item.element.cloneNode(true);

        clonedElement.style.animation = 'slideIn 0.3s ease';
        
        itemList.appendChild(clonedElement);
    });
}

function updateList() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filteredItems = originalItems;
    if (searchTerm !== '') {
        filteredItems = originalItems.filter(item => 
            item.text.toLowerCase().includes(searchTerm)
        );
    }
    
    updateDisplay(filteredItems);
    if (filteredItems.length === 0 && searchTerm !== '') {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

searchInput.addEventListener('input', debounce(() => {
    updateList();
}, 300)); 

sortSelect.addEventListener('change', () => {
    updateList();
});

init();
updateList();

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        searchInput.value = '';
        updateList();
    }
});
console.log('Застосунок готовий! Використовуйте пошук та сортування для фільтрації списку.');