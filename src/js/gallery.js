


// const loadedCategories = new Set();

// async function loadCategoryContent(listItem, category) {
//     const galleryContainer = listItem.querySelector(`#${category}`);
//     if (!galleryContainer) return;

//     try {
//         if (!loadedCategories.has(category)) {
//             galleryContainer.innerHTML = '<li>Loading...</li>';
//             const galleryData = await fetchGalleryData(category);
//             const cardsHTML = galleryData.map(cardData => createCard(cardData)).join('');
//             galleryContainer.innerHTML = cardsHTML || '<li>No items found</li>';
//             loadedCategories.add(category);
//         }
//     } catch (error) {
//         console.error(`Error loading ${category} gallery:`, error);
//         galleryContainer.innerHTML = '<li>Error loading gallery items</li>';
//     }
// }

// function initializeGallery() {
//     const listItems = document.querySelectorAll('.listItem');
//     const galleryList = document.querySelector('.galleryList');

//     // Create spacer element
//     const spacer = document.createElement('div');
//     spacer.className = 'spacer';
//     galleryList.appendChild(spacer);

//     function getItemRow(item) {
//         const itemRect = item.getBoundingClientRect();
//         const listRect = galleryList.getBoundingClientRect();
//         return Math.floor((itemRect.top - listRect.top) / itemRect.height);
//     }

//     function updateSpacerPosition(item) {
//         const itemRect = item.getBoundingClientRect();
//         const content = item.querySelector('.additional-content');
//         const listRect = galleryList.getBoundingClientRect();
        
//         // Find all items in current row
//         const currentRow = getItemRow(item);
//         const rowItems = Array.from(listItems).filter(li => getItemRow(li) === currentRow);
//         const lastInRow = rowItems[rowItems.length - 1];
//         const lastRect = lastInRow.getBoundingClientRect();
        
//         // Position content after last item in row
//         content.style.top = `${lastRect.bottom - listRect.top}px`;
        
//         setTimeout(() => {
//             const contentStyles = window.getComputedStyle(content);
//             const contentHeight = content.offsetHeight + 
//                 parseInt(contentStyles.marginTop) + 
//                 parseInt(contentStyles.marginBottom);
            
//             spacer.style.height = `${contentHeight + 20}px`;
//             spacer.style.gridRow = currentRow + 2;
//             spacer.classList.add('active');
//         }, 0);
//     }

//     function closeAllItems() {
//         const expandedItem = document.querySelector('.listItem.expanded');
//         if (expandedItem) {
//             const itemRect = expandedItem.getBoundingClientRect();
            
//             listItems.forEach(item => item.classList.remove('expanded'));
//             spacer.classList.remove('active');
//             spacer.style.height = '0';
            
//             window.scrollTo({
//                 top: window.pageYOffset + itemRect.top - 100,
//                 behavior: 'smooth'
//             });
//         }
//     }

//     // Add click handlers to list items
//     listItems.forEach(item => {
//         item.addEventListener('click', async (e) => {
//             e.stopPropagation();
            
//             const isExpanded = item.classList.contains('expanded');
            
//             if (isExpanded) {
//                 closeAllItems();
//             } else {
//                 closeAllItems();
                
//                 // Get category and load content before expanding
//                 const galleryContainer = item.querySelector('.container__gallery');
//                 if (galleryContainer) {
//                     const category = galleryContainer.id;
//                     await loadCategoryContent(item, category);
//                 }
                
//                 item.classList.add('expanded');
//                 updateSpacerPosition(item);
//             }
//         });
//     });

//     // Close on click outside
//     document.addEventListener('click', (e) => {
//         if (!e.target.closest('.listItem')) {
//             closeAllItems();
//         }
//     });

//     // Update on window resize
//     window.addEventListener('resize', () => {
//         const expandedItem = document.querySelector('.listItem.expanded');
//         if (expandedItem) {
//             updateSpacerPosition(expandedItem);
//         }
//     });
// }

// export default initializeGallery

// // const listItems = document.querySelectorAll('.listItem');
// // const galleryList = document.querySelector('.galleryList');

// // // Створюємо елемент для простору
// // const spacer = document.createElement('div');
// // spacer.className = 'spacer';
// // galleryList.appendChild(spacer);

// // function getItemRow(item) {
// //   const itemRect = item.getBoundingClientRect();
// //   const listRect = galleryList.getBoundingClientRect();
// //   return Math.floor((itemRect.top - listRect.top) / itemRect.height);
// // }

// // function updateSpacerPosition(item) {
// //   const itemRect = item.getBoundingClientRect();
// //   const content = item.querySelector('.additional-content');
// //   const listRect = galleryList.getBoundingClientRect();
  
// //   // Знаходимо всі елементи в поточному рядку
// //   const currentRow = getItemRow(item);
// //   const rowItems = Array.from(listItems).filter(li => getItemRow(li) === currentRow);
// //   const lastInRow = rowItems[rowItems.length - 1];
// //   const lastRect = lastInRow.getBoundingClientRect();
  
// //   // Позиціонуємо контент після останнього елемента в рядку
// //   content.style.top = `${lastRect.bottom - listRect.top}px`;
  
// //   setTimeout(() => {
// //     // Додаємо відступи контенту до загальної висоти
// //     const contentStyles = window.getComputedStyle(content);
// //     const contentHeight = content.offsetHeight + 
// //           parseInt(contentStyles.marginTop) + 
// //           parseInt(contentStyles.marginBottom);
    
// //     spacer.style.height = `${contentHeight + 20}px`;
// //     spacer.style.gridRow = currentRow + 2;
// //     spacer.classList.add('active');
// //   }, 0);
// // }

// // function closeAllItems() {
// //   const expandedItem = document.querySelector('.listItem.expanded');
// //   if (expandedItem) {
// //     // Зберігаємо позицію розгорнутого елемента перед закриттям
// //     const itemRect = expandedItem.getBoundingClientRect();
    
// //     // Закриваємо всі елементи
// //     listItems.forEach(item => item.classList.remove('expanded'));
// //     spacer.classList.remove('active');
// //     spacer.style.height = '0';
    
// //     // Прокручуємо до позиції елемента, який був розгорнутий
// //     window.scrollTo({
// //       top: window.pageYOffset + itemRect.top - 100, // 100px відступ зверху для кращого вигляду
// //       behavior: 'smooth'
// //     });
// //   }
// // }

// // listItems.forEach(item => {
// //   item.addEventListener('click', (e) => {
// //     e.stopPropagation();
    
// //     const isExpanded = item.classList.contains('expanded');
    
// //     if (isExpanded) {
// //       closeAllItems();
// //     } else {
// //       closeAllItems();
// //       item.classList.add('expanded');
// //       updateSpacerPosition(item);
// //     }
// //   });
// // });

// // // Закриваємо при кліку поза елементами
// // document.addEventListener('click', (e) => {
// //   if (!e.target.closest('.listItem')) {
// //     closeAllItems();
// //   }
// // });

// // // Оновлюємо при зміні розміру вікна
// // window.addEventListener('resize', () => {
// //   const expandedItem = document.querySelector('.listItem.expanded');
// //   if (expandedItem) {
// //     updateSpacerPosition(expandedItem);
// //   }
// // });
