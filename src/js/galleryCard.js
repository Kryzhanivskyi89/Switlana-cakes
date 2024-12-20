import fetchGalleryData from './galleryApi'

// Keep track of loaded categories
const loadedCategories = new Set();


// Function to create card HTML
function createCard({ _id, photos, alt, title, description }) {
    return `
        <li class="card" key=${_id}>
            <div class="face face1">
                <div class="content">
                    <picture>
                        <source srcset="
                            ${photos.deskPhoto} 1x, 
                            ${photos.deskPhoto2x} 2x"
                            media="(min-width:1200px)"/>
                        <source srcset="
                            ${photos.tabPhoto} 1x, 
                            ${photos.tabPhoto2x} 2x" 
                            media="(min-width:768px)"/>
                        <source srcset="
                            ${photos.mobPhoto} 1x, 
                            ${photos.mobPhoto2x} 2x" 
                            media="(max-width:767px)"/>
                        <img
                            src=${photos.deskPhoto} 
                            alt=${alt} 
                            width="250" 
                            height="200" 
                            loading="lazy"
                            sizes="226.8046875px"
                        />
                    </picture>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        </li>
    `;
}

// Function to load category content
async function loadCategoryContent(listItem, category) {
    const galleryContainer = listItem.querySelector(`#${category}`);
    if (!galleryContainer) return;

    try {
        if (!loadedCategories.has(category)) {
            galleryContainer.innerHTML = '<li>Loading...</li>';
            const galleryData = await fetchGalleryData(category);
            const cardsHTML = galleryData.map(cardData => createCard(cardData)).join('');
            galleryContainer.innerHTML = cardsHTML || '<li>No items found</li>';
            loadedCategories.add(category);
        }
    } catch (error) {
        console.error(`Error loading ${category} gallery:`, error);
        galleryContainer.innerHTML = '<li>Error loading gallery items</li>';
    }
}

// Initialize gallery functionality
function initializeGallery() {
    const listItems = document.querySelectorAll('.listItem');
    const galleryList = document.querySelector('.galleryList');

    // Create spacer element
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
        
        // Find all items in current row
        const currentRow = getItemRow(item);
        const rowItems = Array.from(listItems).filter(li => getItemRow(li) === currentRow);
        const lastInRow = rowItems[rowItems.length - 1];
        const lastRect = lastInRow.getBoundingClientRect();
        
        // Position content after last item in row
        content.style.top = `${lastRect.bottom - listRect.top}px`;
        
        setTimeout(() => {
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
            const itemRect = expandedItem.getBoundingClientRect();
            
            listItems.forEach(item => item.classList.remove('expanded'));
            spacer.classList.remove('active');
            spacer.style.height = '0';
            
            window.scrollTo({
                top: window.pageYOffset + itemRect.top - 100,
                behavior: 'smooth'
            });
        }
    }

    // Add click handlers to list items
    listItems.forEach(item => {
        item.addEventListener('click', async (e) => {
            e.stopPropagation();
            
            const isExpanded = item.classList.contains('expanded');
            
            if (isExpanded) {
                closeAllItems();
            } else {
                closeAllItems();
                
                // Get category and load content before expanding
                const galleryContainer = item.querySelector('.container__gallery');
                if (galleryContainer) {
                    const category = galleryContainer.id;
                    await loadCategoryContent(item, category);
                }
                
                item.classList.add('expanded');
                updateSpacerPosition(item);
            }
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.listItem')) {
            closeAllItems();
        }
    });

    // Update on window resize
    window.addEventListener('resize', () => {
        const expandedItem = document.querySelector('.listItem.expanded');
        if (expandedItem) {
            updateSpacerPosition(expandedItem);
        }
    });
}

// Add necessary styles
const style = document.createElement('style');
style.textContent = `
    .spacer {
        grid-column: 1 / -1;
        height: 0;
        transition: height 0.3s ease;
    }
    
    .spacer.active {
        transition: height 0.3s ease;
    }
    
    .additional-content {
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    .listItem.expanded .additional-content {
        opacity: 1;
        visibility: visible;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGallery);

// // Keep track of loaded categories
// const loadedCategories = new Set();

// // Function to fetch data for a specific category
// async function fetchGalleryData(category) {
//     console.log(`Спроба завантаження даних для категорії: ${category}`);
//     try {
//         const url = `https://cakes-backend.onrender.com/gallery/${category}`;
//         console.log(`Виконується запит до: ${url}`);
        
//         const response = await fetch(url);
//         console.log(`Відповідь від сервера для ${category}:`, response);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(`Отримані дані для ${category}:`, data);
//         return data;
//     } catch (error) {
//         console.error(`Помилка завантаження даних для ${category}:`, error);
//         return [];
//     }
// }

// // Function to create card HTML
// function createCard({ _id, photos, alt, title, description }) {
//     return `
//         <li class="card" key=${_id}>
//             <div class="face face1">
//                 <div class="content">
//                     <picture>
//                         <source srcset="
//                             ${photos.deskPhoto} 1x, 
//                             ${photos.deskPhoto2x} 2x"
//                             media="(min-width:1200px)"/>
//                         <source srcset="
//                             ${photos.tabPhoto} 1x, 
//                             ${photos.tabPhoto2x} 2x" 
//                             media="(min-width:768px)"/>
//                         <source srcset="
//                             ${photos.mobPhoto} 1x, 
//                             ${photos.mobPhoto2x} 2x" 
//                             media="(max-width:767px)"/>
//                         <img
//                             src=${photos.deskPhoto} 
//                             alt=${alt} 
//                             width="250" 
//                             height="200" 
//                             loading="lazy"
//                             sizes="226.8046875px"
//                         />
//                     </picture>
//                 </div>
//             </div>
//             <div class="face face2">
//                 <div class="content">
//                     <h3>${title}</h3>
//                     <p>${description}</p>
//                 </div>
//             </div>
//         </li>
//     `;
// }

// // Function to load and render category content
// async function loadCategoryContent(listItem, category) {
//     console.log(`Спроба завантаження контенту для категорії: ${category}`);
    
//     // Find the gallery container for this category
//     const galleryContainer = listItem.querySelector(`#${category}`);
//     console.log(`Знайдений контейнер для ${category}:`, galleryContainer);
    
//     if (!galleryContainer) {
//         console.error(`Контейнер для категорії ${category} не знайдено`);
//         return;
//     }

//     try {
//         // Show loading state if not already loaded
//         if (!loadedCategories.has(category)) {
//             console.log(`Категорія ${category} ще не завантажена, починаємо завантаження`);
//             galleryContainer.innerHTML = '<li>Loading...</li>';
            
//             // Fetch data for this category
//             const galleryData = await fetchGalleryData(category);
            
//             // Create cards HTML
//             const cardsHTML = galleryData
//                 .map(cardData => createCard(cardData))
//                 .join('');
            
//             // Insert cards into container
//             galleryContainer.innerHTML = cardsHTML || '<li>No items found</li>';
//             console.log(`Контент для ${category} успішно вставлено`);
            
//             // Mark this category as loaded
//             loadedCategories.add(category);
//             console.log(`Категорію ${category} позначено як завантажену`);
//         } else {
//             console.log(`Категорія ${category} вже завантажена`);
//         }
        
//         // Toggle visibility of the additional content
//         const additionalContent = listItem.querySelector('.additional-content');
//         if (additionalContent) {
//             const isVisible = additionalContent.style.display === 'block';
//             additionalContent.style.display = isVisible ? 'none' : 'block';
//             console.log(`Видимість контенту для ${category} змінено на: ${!isVisible}`);
            
//             // Optional: scroll into view when opening
//             if (!isVisible) {
//                 additionalContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//             }
//         }
//     } catch (error) {
//         console.error(`Помилка при завантаженні галереї ${category}:`, error);
//         galleryContainer.innerHTML = '<li>Error loading gallery items</li>';
//     }
// }

// // Initialize click handlers
// function initializeGallery() {
//     console.log('Початок ініціалізації галереї');
//     // Add click handlers to all list items
//     const listItems = document.querySelectorAll('.listItem');
//     console.log(`Знайдено ${listItems.length} елементів listItem`);
    
//     listItems.forEach((listItem, index) => {
//         // Find the gallery container within this list item
//         const galleryContainer = listItem.querySelector('.container__gallery');
//         console.log(`Елемент #${index + 1}:`, {
//             element: listItem,
//             galleryContainer: galleryContainer,
//             id: galleryContainer?.id
//         });
        
//         if (!galleryContainer) {
//             console.error(`Контейнер галереї не знайдено для елемента #${index + 1}`);
//             return;
//         }
        
//         // Get the category from the gallery container's ID
//         const category = galleryContainer.id;
//         console.log(`Категорія для елемента #${index + 1}: ${category}`);
        
//         // Hide the additional content initially
//         const additionalContent = listItem.querySelector('.additional-content');
//         if (additionalContent) {
//             additionalContent.style.display = 'none';
//             console.log(`Прихований додатковий контент для категорії ${category}`);
//         }
        
//         // Add click handler
//         listItem.addEventListener('click', (event) => {
//             console.log(`Клік по елементу категорії: ${category}`);
//             loadCategoryContent(listItem, category);
//         });
//     });
    
//     console.log('Ініціалізація галереї завершена');
// }

// // Add some basic CSS for transitions
// const style = document.createElement('style');
// style.textContent = `
//     .additional-content {
//         transition: all 0.3s ease;
//     }
// `;
// document.head.appendChild(style);

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', initializeGallery);


// 

// import { cupCakes } from '../data/cupCakes'
// import { easterCakes } from '../data/easterCakes'
// import { gallery } from '../data/gallery'
// import { makarons } from '../data/makarons'
// import { other } from '../data/other'
// import { traiffle } from '../data/traiffle'

// const refs = {
//     gallery: document.querySelector("#cakes"),
//     cupCakes: document.querySelector("#cupCakes"),
//     traiffle: document.querySelector("#traifle"),
//     makarons: document.querySelector("#makarons"),
//     easterCakes: document.querySelector("#easterCakes"),
//     other: document.querySelector("#other"),
// };

// function createCard(galleryCard, container) {
//     const card = galleryCard.map(({ id, photos deskPhoto, deskPhoto2x, tabPhoto, tabPhoto2x, mobPhoto, mobPhoto2x, alt, title, description }) => {
//         return `        
//             <li class="card" key=${id}>                
//                 <div class="face face1">
//                     <div class="content">
//                         <picture>
//                             <source srcset="
//                                 ${photos.deskPhoto} 1x, 
//                                 ${photos.deskPhoto2x} 2x"
//                                 media="(min-width:1200px)"/>
//                             <source srcset="
//                                 ${photos.tabPhoto} 1x, 
//                                 ${photos.tabPhoto2x} 2x" 
//                                 media="(min-width:768px)"/>
//                             <source srcset="
//                                 ${photos.mobPhoto} 1x, 
//                                 ${photos.mobPhoto2x} 2x" 
//                                 media="(max-width:767px)"/>
//                             <img
//                                 src=${photos.deskPhoto} 
//                                 alt=${alt} 
//                                 width="250" 
//                                 height="200" 
//                                 loading="lazy"
//                                 sizes="226.8046875px"
//                             />
//                         </picture>
//                     </div>
//                 </div>
//                 <div class="face face2">
//                     <div class="content">
//                         <h3>${title}</h3>
//                         <p>${description}</p>
//                     </div>
//                 </div>
//             </li>        
//         `;
//     }).join("");

//     container.insertAdjacentHTML("beforeend", card);
// }

// // Викликаємо функцію для кожної групи даних і відповідного контейнера
// createCard(cupCakes, refs.cupCakes);
// createCard(traiffle, refs.traiffle);
// createCard(makarons, refs.makarons);
// createCard(easterCakes, refs.easterCakes);
// createCard(other, refs.other);
// createCard(gallery, refs.gallery);