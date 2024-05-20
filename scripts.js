// @ts-check

import { books, authors, genres, BOOKS_PER_PAGE, } from './data.js';

/**
 * BookPreview Class
 * Functionality to create and render book previews.
 */
class BookPreview {

    /**
     * Creates a preview button element for a book.
     * @param {Object} books - The book data object.
     * @param {string} authors - The list of the authors.
     * @param {string} genres - The list for the genre of books.
     * @returns {HTMLElement} - Returns the preview.
     * @param {number} BOOKS_PER_PAGE - Number of books per page.
     */
    constructor(books, authors, genres, BOOKS_PER_PAGE) {
        this.books = books;
        this.authors = authors;
        this.genres = genres;
        this.booksPerPage = BOOKS_PER_PAGE;
        this.page = 1;
        this.matches = books;
        this.initializeBookPreviews = undefined;
    }
    /**
     * 
     * @param {BookPreview} createBookPreview - Shows a modal of the book preview. 
     * @returns {element} 
     */
    createBookPreview({ author, id, image, title }) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${this.authors[author]}</div>
            </div>
        `;

        return element;
    }

    /**
     * @param {any[]} books
     * @param {Element | null} container
     */
    renderBookPreviews(books, container) {
        const fragment = document.createDocumentFragment();
        books.forEach((/** @type {{ author: any; id: any; image: any; title: any; }} */ book) => {
            const bookPreview = this.createBookPreview(book);
            fragment.appendChild(bookPreview);
        });

        container.appendChild(fragment);
    }
}
class Dropdown {
    /**
     * @param {{ "a4f80b3e-3e96-4266-b729-e09b71793182"?: string; "6dd5bb6e-0172-4d6e-aa18-26f00954dd7a"?: string; "5439a895-20a8-421a-981d-43f99b521cb5"?: string; "e8ebb4be-b86b-49db-985c-2be996e4d5b8"?: string; "90dd9a0f-9cce-48b7-b431-bde529a627bf"?: string; "2afe9af7-23b7-4476-992e-609102106df5"?: string; "39ca8a42-15aa-4774-ad4a-eda304b6ad56"?: string; "8c92b5be-e0ef-4d01-ad97-b93dfd404e08"?: string; "45db37a5-83ea-4e2c-976d-dd962967bcf1"?: string; "746b98ed-b0b5-4bf3-bc1c-af8657601c7b"?: string; "3fbac1ca-3331-4bc5-94d5-a0c892c5ce8d"?: string; "8133574f-f163-4022-b128-372353550211"?: string; "92c653cb-99cb-4ef7-9032-110a1e555148"?: string; "9a45dc71-1603-4fd7-b4f0-b7ec8e31d456"?: string; "e0406bbe-9415-4612-ad8a-934a2255adc4"?: string; "a74cda25-9978-4f7f-8afc-309734499b58"?: string; "e5c0a16b-b375-4684-a7e7-0224ab6e52b7"?: string; "5544cf7a-0f35-4576-a0eb-d01bc634655b"?: string; "3ae699b8-0602-4f24-8428-bfefc17231da"?: string; "f628a79e-ff62-432b-8710-e87f8d5a84c0"?: string; "c60e7571-371f-4985-a3eb-97f7d3330e92"?: string; "765b17c6-09d5-4484-8542-14e60aa426e6"?: string; "4d2dcae4-41bb-4f74-9765-fca40e8a94d6"?: string; "e147de22-6105-4665-aa63-16f986d1a153"?: string; "eabc350f-223e-46d2-acc4-6670369562d5"?: string; "4b082b54-6dac-4079-9be2-a74b9111b9b2"?: string; "676c4a6d-2074-4d32-bd38-ad805432a285"?: string; "ea705fea-896a-4ab6-90b0-83952e7f782a"?: string; "604fa99a-9c17-41c5-a23c-92a033a93cea"?: string; "7e1145c8-d7fb-49b4-81e2-611958b388e6"?: string; "87b7feaf-6829-4d6f-8a08-4abd3f674e18"?: string; "2f2133cb-6e93-4884-ba0c-b15c1921fe7a"?: string; "8c1e1ffb-35cf-431c-859d-3702bab6cbac"?: string; "b832b1c8-1dbc-4dd1-8f43-ed9cfb52fd3e"?: string; "b8a70f22-c66a-4792-86dc-400b00bda08c"?: string; "e15aacae-3111-4cf8-91f1-e725d3e8a02a"?: string; "dbecf956-583d-4d44-8928-d3bb59effb6a"?: string; "61c911f1-cbf5-48bf-9df9-d32d4506badb"?: string; "5529038f-b01e-40f6-8bf2-b0489ce4f432"?: string; "8e7f0492-e06b-4060-8eb5-c183c439aaf8"?: string; "cf160880-b4f5-45e3-936d-269605d21778"?: string; "4d6d871a-9779-47a8-91b6-5041ca68d1ae"?: string; "1a68857f-92ae-490a-9395-30b8e15613b0"?: string; "76bfe832-8bde-4702-b921-f06d5b66332c"?: string; "2d936adf-6f57-4bc5-886e-64d4505e0faf"?: string; "c2d9e8fa-c69e-4468-ae72-0fde54520863"?: string; "2a5ac457-9325-4723-9ca1-19da384b2833"?: string; "2c63dfac-5b3e-4ea2-a29d-650bc1de5dad"?: string; "0d4c8560-b7de-47d5-a204-3651b59f7e1b"?: string; "2dc8daea-9a6b-4028-97e2-767d0248678f"?: string; "8e53cc1b-927c-4f42-aee6-69d5f8b07e0c"?: string; "c23ff9df-3401-46f6-83dd-9d8caaae3b8c"?: string; "abc8c400-2063-4790-92eb-810c9eeabdb6"?: string; "52d7e271-9497-4c07-b051-edd819f1508e"?: string; "fa4bd01a-9e37-47c1-b55c-485c8b4d5530"?: string; "42d04f55-18ff-4476-b1b0-106401738e0a"?: string; "bb50b245-4f41-4bab-aea9-56cc0b6a7f7d"?: string; "e34b00fd-8daf-44eb-a257-d3381c457044"?: string; "34db8dbe-e120-4128-91cd-d2e2294b50b9"?: string; "7b59a02a-797b-405d-aaf1-daf1436f4c8b"?: string; "e8ca7c5e-ded1-4464-b620-5347314f7db0"?: string; "91e25438-558a-410d-a4b4-17b2f26bcb11"?: string; "1e5b0c5c-1c4c-4ec5-958b-b4b6fb7c1720"?: string; "70f56d7c-6375-457f-ad1d-8d3281d0312a"?: string; "369ad49e-c309-4193-bc95-e17d3ba77cb6"?: string; "cdd102f6-b3ad-4e1a-acfb-eb247dfdb547"?: string; "c40bbf55-c8ee-4fe3-a21f-ed16210afd95"?: string; "64c4197d-5f8e-4bff-b440-6d19bc591fd9"?: string; "194e164b-9365-4358-b44a-f28a93cc528f"?: string; "76e8065c-fd7a-4a8b-a8ea-6105a47d0781"?: string; "6b092ae7-283c-45db-80f1-f0cc7e0d4921"?: string; "6dfb0a04-7ea0-4b79-887c-db759515e113"?: string; "76749e00-8dee-4f53-892e-ae5f17374aa2"?: string; "5abb0ae3-e351-4388-9d39-256a1a889bfc"?: string; "510406cd-14a8-4ddc-bd44-03e2fb50a96c"?: string; "3b61c145-e08f-4867-a264-ad1de070adb1"?: string; "a4f9948b-267b-4cf7-8c89-268278b672bb"?: string; "d0533241-7f5f-41dd-8a72-93096416bd87"?: string; "6ae84116-6bcc-4d21-b345-d2529d5675f1"?: string; "8d85a4e1-547a-4613-a192-84fb976314ac"?: string; "5a65eea5-590b-4a2b-89bf-73a5db89384e"?: string; "86b2fc20-4d40-4eec-9501-d511f9000424"?: string; "d0dbf97c-298d-4c3f-8448-52bd5fd20986"?: string; "701f8e7e-2007-4f51-bb04-260e965c51a9"?: string; "71e84f9c-57f6-4292-9bff-5ab23f4b4ba6"?: string; "3bd29cf2-63ce-42c8-b43b-ea74ea412124"?: string; "41ed9a23-20ed-45da-87cb-1b540d3c6cbf"?: string; "121b07ce-62c2-4acc-a834-89e6bea068e7"?: string; "00b0f197-df00-4906-88bb-4548a8c10952"?: string; "5ba82a5c-9b70-495b-9708-960957149d4a"?: string; "de2000ee-60a2-4c61-9580-a2147c1c3a82"?: string; "f8fba3e2-13ed-4d2d-a92a-f12ccb052a3f"?: string; "7aaea6e5-34b5-4164-b5ae-f702217a1f46"?: string; "ddafc602-b54b-47a2-9c22-a63269c3cb11"?: string; "8553d1fd-b4e0-4756-92c7-87c3022d2813"?: string; "e440e2f9-123e-4ac8-a026-2f4513d08a2a"?: string; "6d62a963-2267-456e-a6bc-3f6156f70829"?: string; "4d913b20-3456-4881-817d-5ce390e6962f"?: string; "90b7b7a3-b4b8-4b93-aa1c-be60c907c41e"?: string; "12a1a73e-aa79-4911-aa91-9014d7ba9e4b"?: string; "9e53599f-1f61-45f6-bb1a-b93d08ed99cc"?: string; "93fb2839-72da-42d7-aa47-17c6fa374e61"?: string; "41de4fd3-739c-4808-8a0b-f6faeb879fc8"?: string; "1c73687c-67f6-4578-ab39-0e92fb199e9d"?: string; "62a33a3c-8dcb-4bee-bd5d-ccb4e6cab661"?: string; "fb60e007-f7b9-4dd7-b140-e729d7dba904"?: string; "489277c9-3cfa-49bd-aad1-9038de0e55bc"?: string; "a95783d9-f036-4141-b5ad-e6011d1ddad5"?: string; "f35bbf02-5337-4f49-8abb-3317038cecef"?: string; "a0a1cc49-e719-4629-98e5-5a10d9f1e1aa"?: string; "67e7961f-c412-4df8-b0b3-35e4eb648685"?: string; "f16c4201-8b2b-4cf9-ac59-92e7b293bae0"?: string; "9e7ff055-e29d-4669-85d5-f1037fa81ea3"?: string; "f0f2615e-16b5-4b9d-b53b-4c0d933ad8ad"?: string; "a127b3f4-d799-4702-8ed6-978ad6ac4b14"?: string; "e1eab418-d87c-45c4-8d05-8e077a67f344"?: string; "5d9b4f78-2771-4f78-a4eb-5569d92eb00f"?: string; "d865b1f1-5232-4773-8e3a-61953415cb01"?: string; "8e7083f4-7613-4872-a21b-62fbe33fe180"?: string; "9b99e656-5412-456c-9b4b-da07479770f3"?: string; "f4e286ff-586f-416e-82c6-e7bdc26f3df9"?: string; "a268912c-f17a-48da-a7af-b13c16c0c164"?: string; "43d9dd09-f2e9-4a14-b21e-d3d1646f7266"?: string; "eb99741e-00c7-474a-98ba-ff43ebe31ee3"?: string; "bbebc103-3af0-44e1-88b0-e4313394bf42"?: string; "f8e992b8-0631-4ef9-8975-27a3b17fbd27"?: string; "02efe3ea-078b-4207-b764-fb2fa99dab0e"?: string; "5c234b15-f0ca-4292-80ac-b54bd67be7ac"?: string; "32eea0e8-6412-491b-aed3-9fe9414daf59"?: string; "44d41c0a-d0e7-46bd-89e2-5efcef589e03"?: string; "3366a78b-4d8c-44bb-bf09-e519fd07423f"?: string; "071a04ad-3dfc-4862-8e84-d12a7ed33a9d"?: string; "8bf7709c-a77f-405e-a02b-36492b3350f0"?: string; "63ea40f8-3619-4558-9d4f-787d217299d3"?: string; "c356dc06-60f1-43f9-85a3-36f932d98b63"?: string; "2a9f4924-9766-4a40-a3a3-88eb4026cd8d"?: string; "7b0bb7fe-fe11-480a-bf09-7ab00b60c7a2"?: string; "ed0c6626-a41e-4d87-96da-85004715ab1d"?: string; "1d50cd77-673e-4bec-b660-56f6c0c03bb4"?: string; "811921a5-0393-4c14-9691-a0c6182ba5ff"?: string; "0579b780-0c3d-4e34-81ec-d0d1609ad332"?: string; "9c68f639-7de8-4183-977f-6822ea130c3a"?: string; "b081d59f-7e93-4999-8b40-9f213cfbe162"?: string; "bebd64ed-38c8-4cf4-8ba3-225caf8d0516"?: string; "f4c46cc8-e551-4e2f-ae78-24861492b097"?: string; "c3c90294-03eb-4967-9f52-b8fb2fe9c52d"?: string; "0e1d087f-b38c-4bc7-b2c7-2255be5530a9"?: string; "c66019c2-8ceb-482a-996c-6e3fcdab957a"?: string; "5dc13619-188f-41d7-a9bc-bfe60bd26f1f"?: string; "01357d20-bc88-4ef9-aad2-64711dd3d063"?: string; "750ab756-264e-4bc9-85ef-e2e33c867238"?: string; "a8d486a2-ebb0-4abf-bdd0-49fc6c45ffb9"?: string; "39a23579-f473-44a1-b22f-58b5036d3e3b"?: string; "b9cd8a1d-0586-4cb2-9b1a-e3d9dce79faf"?: string; "37018341-31f4-4ffa-8755-a49979c218dd"?: string; }} data
     * @param {string} elementSelector
     * @param {string} defaultOptionText
     */
    constructor(data, elementSelector, defaultOptionText) {
        this.data = data;
        this.elementSelector = elementSelector;
        this.defaultOptionText = defaultOptionText;
    }

    createOptions() {
        const fragment = document.createDocumentFragment();
        const firstOptionElement = document.createElement('option');
        firstOptionElement.value = 'any';
        firstOptionElement.innerText = this.defaultOptionText;
        fragment.appendChild(firstOptionElement);

        Object.entries(this.data).forEach(([id, name]) => {
            const element = document.createElement('option');
            element.value = id;
            element.innerText = name;
            fragment.appendChild(element);
        });

        return fragment;
    }

    initializeDropdown() {
        const html = this.createOptions();
        const selectElement = document.querySelector(this.elementSelector);
        if (selectElement) {
            selectElement.appendChild(html);
        } else {
            throw new Error(`${this.defaultOptionText} select element not found.`);
        }
    }
}

// Theme settings class
class ThemeSettings {
    initializeThemeSettings() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelectorAll('[data-settings-theme]').values = 'night';
            document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
            document.documentElement.style.setProperty('--color-light', '10, 10, 20');
        } else {
            document.querySelectorAll('[data-settings-theme]').values = 'day';
            document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
            document.documentElement.style.setProperty('--color-light', '255, 255, 255');
        }
    }
}

/**
 * Make selectors  objects for better refactoring
 */
const SELECTORS = {
    searchCancel: '[data-search-cancel]',
    settingsCancel: '[data-settings-cancel]',
    headerSearch: '[data-header-search]',
    headerSettings: '[data-header-settings]',
    listClose: '[data-list-close]',
    listButton: '[data-list-button]',
    settingsForm: '[data-settings-form]',
    searchForm: '[data-search-form]',
    listItems: '[data-list-items]',
    listMessage: '[data-list-message]',
    searchOverlay: '[data-search-overlay]',
    settingsOverlay: '[data-settings-overlay]',
    listActive: '[data-list-active]',
    listBlur: '[data-list-blur]',
    listImage: '[data-list-image]',
    listTitle: '[data-list-title]',
    listSubtitle: '[data-list-subtitle]',
    listDescription: '[data-list-description]',
    searchTitle: '[data-search-title]',
};
// Event handler class
class EventHandlers {
    /**
     * @param {BookPreview} bookPreview - Preview of selected book
     */
    constructor(bookPreview) {
        this.bookPreview = bookPreview;
        this.initializeForms = undefined;
    }
    // refaktored the event listeners 
    initializeEventHandlers() {
        this.addEventListeners([
            { selector: SELECTORS.searchCancel, event: 'click', handler: () => this.closeOverlay(SELECTORS.searchOverlay) },
            { selector: SELECTORS.settingsCancel, event: 'click', handler: () => this.closeOverlay(SELECTORS.settingsOverlay) },
            { selector: SELECTORS.headerSearch, event: 'click', handler: () => this.openOverlay(SELECTORS.searchOverlay) },
            { selector: SELECTORS.headerSettings, event: 'click', handler: () => this.openOverlay(SELECTORS.settingsOverlay) },
            { selector: SELECTORS.listClose, event: 'click', handler: () => this.closeOverlay(SELECTORS.listActive) },
            { selector: SELECTORS.listButton, event: 'click', handler: () => this.bookPreview.renderBookPreviews(this.bookPreview.books, document.querySelector(SELECTORS.listItems)) },
        ]);
        /**
         * 
         */
        this.updateListButton();
        this.initializeSettingsForm();
        this.initializeSearchForm();
        this.initializeListButton();
        this.initializeListItems();
    }

    /**
 * @param {{ selector: any; event: any; handler: any; }[]} events
 */
    addEventListeners(events) {
        events.forEach(({ selector, event, handler }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.addEventListener(event, handler);
            } else {
                throw new Error(`Element not found for selector: ${selector}`);
            }
        });
    }

    /**
 * @param {string} selector
 */
    closeOverlay(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.open = false;
        } else {
            throw new Error(`Element not found for selector: ${selector}`);
        }
    }

    /**
 * @param {string} selector
 */
    openOverlay(selector, focusSelector = null) {
        const element = document.querySelector(selector);
        if (element) {
            element.open = true;
            if (focusSelector) {
                const focusElement = document.querySelector(focusSelector);
                if (focusElement) {
                    focusElement.focus();
                } else {
                    throw new Error(`Element not found for focusSelector: ${focusSelector}`);
                }
            }
        } else {
            throw new Error(`Element not found for selector: ${selector}`);
        }
    }


    updateListButton() {
        const listButton = document.querySelector(SELECTORS.listButton);
        if (listButton) {
            listButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
            listButton.disabled = (this.bookPreview.matches.length - (this.bookPreview.page * BOOKS_PER_PAGE)) <= 0;
            listButton.innerHTML = `
                    <span>Show more</span>
                    <span class="list__remaining"> (${Math.max(this.bookPreview.matches.length - (this.bookPreview.page * BOOKS_PER_PAGE), 0)})</span>
                `;
        }
    }
    /**
     * Switch between dark and day mode
     */

    initializeSettingsForm() {
        const settingsForm = document.querySelector(SELECTORS.settingsForm);
        if (settingsForm) {
            settingsForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(event.target);
                const { theme } = Object.fromEntries(formData);

                if (theme === 'night') {
                    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
                    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
                } else {
                    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
                    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
                }

                document.querySelector(SELECTORS.settingsOverlay).open = false;
            });
        } else {
            throw new Error(`Element not found for selector: ${SELECTORS.settingsForm}`);
        }
    }
    /**
     * Search for books
     */
    initializeSearchForm() {
        const searchForm = document.querySelector(SELECTORS.searchForm);
        if (searchForm) {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(event.target);
                const filters = Object.fromEntries(formData);
                const result = this.filterBooks(filters);

                this.bookPreview.page = 1;
                this.bookPreview.matches = result;

                const listMessage = document.querySelector(SELECTORS.listMessage);
                if (listMessage) {
                    if (result.length < 1) {
                        listMessage.classList.add('list__message_show');
                    } else {
                        listMessage.classList.remove('list__message_show');
                    }
                }

                const listItems = document.querySelector(SELECTORS.listItems);
                if (listItems) {
                    listItems.innerHTML = '';
                    const newItems = document.createDocumentFragment();

                    for (const book of result.slice(0, BOOKS_PER_PAGE)) {
                        const element = this.bookPreview.createBookPreview(book);
                        newItems.appendChild(element);
                    }

                    listItems.appendChild(newItems);
                }

                this.updateListButton();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.querySelector(SELECTORS.searchOverlay).open = false;
            });
        } else {
            throw new Error(`Element not found for selector: ${SELECTORS.searchForm}`);
        }
    }

    /**
     * @param {{ [x: string]: FormDataEntryValue; title?: any; author?: any; genre?: any; }} filters
     */
    filterBooks(filters) {
        return books.filter((book) => {
            const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
            const authorMatch = filters.author === 'any' || book.author === filters.author;
            const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);

            return titleMatch && authorMatch && genreMatch;
        });
    }

    initializeListButton() {
        const listButton = document.querySelector(SELECTORS.listButton);
        if (listButton) {
            listButton.addEventListener('click', () => {
                const fragment = document.createDocumentFragment();

                for (const book of this.bookPreview.matches.slice(this.bookPreview.page * BOOKS_PER_PAGE,
                    (this.bookPreview.page + 1) * BOOKS_PER_PAGE)) {
                    const element = this.bookPreview.createBookPreview(book);
                    fragment.appendChild(element);
                }

                const listItems = document.querySelector(SELECTORS.listItems);
                if (listItems) {
                    listItems.appendChild(fragment);
                }

                this.bookPreview.page += 1;
                this.updateListButton();
            });
        } else {
            throw new Error(`Element not found for selector: ${SELECTORS.listButton}`);
        }
    }

    initializeListItems() {
        const listItems = document.querySelector(SELECTORS.listItems);
        if (listItems) {
            listItems.addEventListener('click', (event) => {
                const pathArray = Array.from(event.composedPath());
                let active = null;

                for (const node of pathArray) {
                    if (active) break;

                    if (node.dataset.preview) {
                        active = this.bookPreview.matches.find((/** @type {{ id: any; }} */ book) => book.id === node.dataset.preview);
                    }
                }

                if (active) {
                    this.showBookDetails(active);
                }
            });
        } else {
            throw new Error(`Element not found for selector: ${SELECTORS.listItems}`);
        }
    }

    /**
     * @param {{ image: any; title: any; author: string | number; published: string | number | Date; description: any; }} book
     */
    showBookDetails(book) {
        const listActive = document.querySelector(SELECTORS.listActive);
        if (listActive) listActive.open = true;

        const listBlur = document.querySelector(SELECTORS.listBlur);
        if (listBlur) listBlur.src = book.image;

        const listImage = document.querySelector(SELECTORS.listImage);
        if (listImage) listImage.src = book.image;

        const listTitle = document.querySelector(SELECTORS.listTitle);
        if (listTitle) listTitle.innerText = book.title;

        const listSubtitle = document.querySelector(SELECTORS.listSubtitle);
        if (listSubtitle) listSubtitle.innerText = `${this.bookPreview.authors[book.author]} (${new Date(book.published).getFullYear()})`;

        const listDescription = document.querySelector(SELECTORS.listDescription);
        if (listDescription) listDescription.innerText = book.description;
    }
}


/**
* @type {any}
*/
document.addEventListener('DOMContentLoaded', () => {

    const bookPreview = new BookPreview(books, authors, genres, BOOKS_PER_PAGE);


    const genreDropdown = new Dropdown(genres, '[data-search-genres]', 'All Genres');
    genreDropdown.initializeDropdown();

    const authorDropdown = new Dropdown(authors, '[data-search-authors]', 'All Authors');
    authorDropdown.initializeDropdown();

    const themeSettings = new ThemeSettings();
    themeSettings.initializeThemeSettings();

    const eventHandlers = new EventHandlers(bookPreview);
    eventHandlers.initializeEventHandlers();

    bookPreview.renderBookPreviews(bookPreview.books.slice(0, bookPreview.booksPerPage), document.querySelector(SELECTORS.listItems));
});










