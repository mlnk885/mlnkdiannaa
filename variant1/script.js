const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const sortBtn = document.getElementById('sortBtn');
const itemList = document.getElementById('itemList');

function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert('Будь ласка, введіть текст елемента!');
        return;
    }
    
    const li = document.createElement('li');
    
    li.textContent = itemText;
    
    const deleteIcon = document.createElement('span');
    deleteIcon.textContent = '✖';
    deleteIcon.className = 'delete-icon';
    li.appendChild(deleteIcon);
    
    li.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-icon')) {
            e.stopPropagation(); 
        }
        deleteItem(li);
    });
    
    itemList.appendChild(li);
    
    itemInput.value = '';
    
    itemInput.focus();
}
function deleteItem(item) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.remove();
        checkEmptyList(); 
    }, 200);
}

function sortList() {
    const items = Array.from(itemList.children);
    
    items.sort((a, b) => {
        const textA = a.textContent.replace('✖', '').trim();
        const textB = b.textContent.replace('✖', '').trim();
        return textA.localeCompare(textB, 'uk');
    });
    
    itemList.innerHTML = '';
    items.forEach(item => itemList.appendChild(item));
}

function checkEmptyList() {
    if (itemList.children.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = '📝 Список порожній. Додайте нові елементи!';
        emptyMessage.className = 'empty-message';
        emptyMessage.style.cursor = 'default';
        emptyMessage.style.borderLeft = 'none';
        emptyMessage.style.pointerEvents = 'none';
        itemList.appendChild(emptyMessage);
    } else {
        const emptyMessage = itemList.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }
    }
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

addBtn.addEventListener('click', addItem);
sortBtn.addEventListener('click', sortList);
itemInput.addEventListener('keypress', handleKeyPress);

checkEmptyList();

const observer = new MutationObserver(() => checkEmptyList());
observer.observe(itemList, { childList: true, subtree: false });