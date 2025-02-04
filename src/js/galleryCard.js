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
            galleryContainer.innerHTML = cardsHTML || '<li>server wants a money, fuck his</li>';
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
