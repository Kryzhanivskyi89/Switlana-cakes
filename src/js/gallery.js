
// const listItems = document.querySelectorAll('.listItem');

// listItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     const isExpanded = item.classList.contains('expanded');

//     // Закриваємо всі відкриті елементи
//     document.querySelectorAll('.listItem.expanded').forEach((openItem) => {
//       openItem.classList.remove('expanded');
//     });

//     // Відкриваємо поточний елемент, якщо він не був відкритий
//     if (!isExpanded) {
//       item.classList.add('expanded');
//     }
//   });
// });

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.listItem')) {
//     document.querySelectorAll('.listItem.expanded').forEach((item) => {
//       item.classList.remove('expanded');
//     });
//   }
// });

const listItems = document.querySelectorAll('.listItem');
const galleryList = document.querySelector('.galleryList');

// Створюємо елемент для простору
const spacer = document.createElement('div');
spacer.className = 'spacer';
galleryList.appendChild(spacer);

function getItemRow(item) {
  const itemRect = item.getBoundingClientRect();
  const listRect = galleryList.getBoundingClientRect();
  return Math.floor((itemRect.top - listRect.top) / itemRect.height);
}

function updateSpacerPosition(item) {
  const itemRect = item.getBoundingClientRect();
  const content = item.querySelector('.additional-content');
  const listRect = galleryList.getBoundingClientRect();
  
  // Знаходимо всі елементи в поточному рядку
  const currentRow = getItemRow(item);
  const rowItems = Array.from(listItems).filter(li => getItemRow(li) === currentRow);
  const lastInRow = rowItems[rowItems.length - 1];
  const lastRect = lastInRow.getBoundingClientRect();
  
  // Позиціонуємо контент після останнього елемента в рядку
  content.style.top = `${lastRect.bottom - listRect.top}px`;
  
  setTimeout(() => {
    // Додаємо відступи контенту до загальної висоти
    const contentStyles = window.getComputedStyle(content);
    const contentHeight = content.offsetHeight + 
                         parseInt(contentStyles.marginTop) + 
                         parseInt(contentStyles.marginBottom);
    
    spacer.style.height = `${contentHeight + 20}px`;
    spacer.style.gridRow = currentRow + 2;
    spacer.classList.add('active');
  }, 0);
}

function closeAllItems() {
  const expandedItem = document.querySelector('.listItem.expanded');
  if (expandedItem) {
    // Зберігаємо позицію розгорнутого елемента перед закриттям
    const itemRect = expandedItem.getBoundingClientRect();
    
    // Закриваємо всі елементи
    listItems.forEach(item => item.classList.remove('expanded'));
    spacer.classList.remove('active');
    spacer.style.height = '0';
    
    // Прокручуємо до позиції елемента, який був розгорнутий
    window.scrollTo({
      top: window.pageYOffset + itemRect.top - 100, // 100px відступ зверху для кращого вигляду
      behavior: 'smooth'
    });
  }
}

listItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const isExpanded = item.classList.contains('expanded');
    
    if (isExpanded) {
      closeAllItems();
    } else {
      closeAllItems();
      item.classList.add('expanded');
      updateSpacerPosition(item);
    }
  });
});

// Закриваємо при кліку поза елементами
document.addEventListener('click', (e) => {
  if (!e.target.closest('.listItem')) {
    closeAllItems();
  }
});

// Оновлюємо при зміні розміру вікна
window.addEventListener('resize', () => {
  const expandedItem = document.querySelector('.listItem.expanded');
  if (expandedItem) {
    updateSpacerPosition(expandedItem);
  }
});

// const dur = 500; // Тривалість анімації в мілісекундах
// let lastIndex = -1;

// const listItems = document.querySelectorAll('.listItem');

// // Додаємо обробники подій
// listItems.forEach((item, i) => {
//   item.addEventListener('click', () => {
//     const isSameAsLast = i === lastIndex;

//     // Закриваємо попередній елемент, якщо він інший
//     if (lastIndex !== -1 && !isSameAsLast) {
//       listItems[lastIndex].classList.remove('expanded');
//       animateOut(listItems[lastIndex]);
//     }

//     // Закриваємо поточний елемент, якщо він той самий
//     if (isSameAsLast) {
//       item.classList.remove('expanded');
//       animateOut(item);
//       lastIndex = -1; // Скидаємо останній індекс
//     } else {
//       // Відкриваємо новий елемент
//       item.classList.add('expanded');
//       animateIn(item);
//       lastIndex = i; // Оновлюємо останній індекс
//     }
//   });
// });

// // Анімація для відкриття
// function animateIn(item) {
//   const additionalContent = item.querySelector('.additional-content');
//   if (additionalContent) {
//     additionalContent.style.transition = `opacity ${dur}ms ease, height ${dur}ms ease`;
//     additionalContent.style.height = `${additionalContent.scrollHeight}px`;
//     additionalContent.style.opacity = '1';
//   }
// }

// // Анімація для закриття
// function animateOut(item) {
//   const additionalContent = item.querySelector('.additional-content');
//   if (additionalContent) {
//     additionalContent.style.transition = `opacity ${dur}ms ease, height ${dur}ms ease`;
//     additionalContent.style.height = '0px';
//     additionalContent.style.opacity = '0';
//   }
// }
