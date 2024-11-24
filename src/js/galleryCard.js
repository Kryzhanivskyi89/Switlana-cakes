import { cupCakes } from '../data/cupCakes'
import { easterCakes } from '../data/easterCakes'
import { gallery } from '../data/gallery'
import { makarons } from '../data/makarons'
import { other } from '../data/other'
import { traiffle } from '../data/traiffle'

const refs = {
    gallery: document.querySelector("#cakes"),
    cupCakes: document.querySelector("#cupCakes"),
    traiffle: document.querySelector("#traifle"),
    makarons: document.querySelector("#makarons"),
    easterCakes: document.querySelector("#easterCakes"),
    other: document.querySelector("#other"),
};

function createCard(galleryCard, container) {
    const card = galleryCard.map(({ id, deskPhoto, deskPhoto2x, tabPhoto, tabPhoto2x, mobPhoto, mobPhoto2x, alt, title, description }) => {
        return `        
            <li class="card" key=${id}>                
                <div class="face face1">
                    <div class="content">
                        <picture>
                            <source srcset="
                                ${deskPhoto} 1x, 
                                ${deskPhoto2x} 2x"
                                media="(min-width:1200px)"/>
                            <source srcset="
                                ${tabPhoto} 1x, 
                                ${tabPhoto2x} 2x" 
                                media="(min-width:768px)"/>
                            <source srcset="
                                ${mobPhoto} 1x, 
                                ${mobPhoto2x} 2x" 
                                media="(max-width:767px)"/>
                            <img
                                src=${deskPhoto} 
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
    }).join("");

    container.insertAdjacentHTML("beforeend", card);
}

// Викликаємо функцію для кожної групи даних і відповідного контейнера
createCard(cupCakes, refs.cupCakes);
createCard(traiffle, refs.traiffle);
createCard(makarons, refs.makarons);
createCard(easterCakes, refs.easterCakes);
createCard(other, refs.other);
createCard(gallery, refs.gallery);