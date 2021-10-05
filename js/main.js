window.addEventListener('DOMContentLoaded', () => {
    (function () {
        const deadline = '2022-1-1';

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock('.timer', deadline);
    })();
    (function () {
        const items = [{
                id: 1,
                img: 'icons/typesofhoney/cloverhoney.png',
                title: 'Clover honey',
                text: `Thick honey is produced by honeybees <br> that collect the nectar of clover plants. <br> Mild
                in taste and light in color.`
            },
            {
                id: 2,
                img: 'icons/typesofhoney/buckwheat.png',
                title: 'Buckwheat Honey',
                text: `It is highly nutritious amber-colored <br> honey with a slight reddish tint. It has a <br>
                has a pleasant sweet taste.`
            },
            {
                id: 3,
                img: 'icons/typesofhoney/wildflower.png',
                title: 'Wildflower Honey',
                text: `It is also known as polyfloral honey. It is <br> made from the nectar of different <br> species of flowers or blossoms.`
            },
            {
                id: 4,
                img: 'icons/typesofhoney/citrusblossom.png',
                title: 'Citrus Blossom Honey',
                text: `This honey is sweet and relatively thick, a <br> perfect match for your tea or toast. It is <br> the best association with California!`
            }

        ];

        function addingItems(items) {
            const itemsWrapper = document.querySelector('.types-of-honey-items');
            items.forEach(e => {
                itemsWrapper.innerHTML += `<div class="types-of-honey-item">
                <img src="${e.img}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.text}</p>
                <a class="types_link_button" href="#store">Shop Now</a>
            </div>`
            });
        }
        // addingItems(items);

        let currentItem = 0;

        function showCurrentItem() {
            const itemsWrapper = document.querySelector('.types-of-honey-items');
            let html = '';
            html = `<div class="types-of-honey-item">
            <img src="${items[currentItem].img}" alt="${items[currentItem].title}">
            <h3>${items[currentItem].title}</h3>
            <p>${items[currentItem].text}</p>
        <a class="types_link_button" href="#store">Shop Now</a>
        </div>`;
            const nextItem = currentItem + 1 < items.length ? currentItem + 1 : 0;
            html += `<div class="types-of-honey-item">
            <img src="${items[nextItem].img}" alt="${items[nextItem].title}">
            <h3>${items[nextItem].title}</h3>
            <p>${items[nextItem].text}</p>
        <a class="types_link_button" href="#store">Shop Now</a>
        </div>`;
            itemsWrapper.innerHTML = html;
        }

        function nextItem() {
            currentItem++;
            if (currentItem >= items.length) currentItem = 0;
            showCurrentItem();
        }

        function prevItem() {
            currentItem--;
            if (currentItem < 0) currentItem = items.length - 1;
            showCurrentItem();
        }

        // setInterval(nextItem,1000);
        showCurrentItem();
        const btn_next = document.querySelector('.slider_btn_next'),
            btn_prev = document.querySelector('.slider_btn_prev');

        btn_next.addEventListener('click', (e) => {
            nextItem();
            e.preventDefault();
        });

        btn_prev.addEventListener('click', (e) => {
            prevItem();
            e.preventDefault();
        });

    })();
    (function () {
        const items = [
            {
                id: 1,
                img: 'icons/whatwedo/honeyprod-icon.png',
                title: 'Honey Production',
                text: `We produce, bottle, and sell honey <br> harvested by our beekeepers. <br> `,
                href: `about-us`
            },
            {
                id: 2,
                img: 'icons/whatwedo/honey-shop.png',
                title: 'Honey Shop',
                text: `We offer over 10 types of organic raw <br> honey in our online store. `,
                href: `store`

            },
            {
                id: 3,
                img: 'icons/whatwedo/supplements-icon.png',
                title: 'Supplements',
                text: `You can buy bee pollen, propolis, and <br> hive mixtures.`,
                href: `contacts`
            },
            {
                id: 4,
                img: 'icons/whatwedo/beekeeping.png',
                title: 'Beekeeping',
                text: `Feel free to book excursions and <br> workshops at our swaths. <br> <a href="#contacts"`,
                href: `contacts`
            }

        ];
        let currentItem = 0;

        function showCurrentItem() {
            const itemsWrapper = document.querySelector('.slider_tabs');
            let html = '';
            html = `<div class="sliders_tab">
            <img src="${items[currentItem].img}" alt="${items[currentItem].title}">
            <h3>${items[currentItem].title}</h3>
            <p>${items[currentItem].text}</p>
            <a href="#${items[currentItem].href}" class="services_link">Learn More</a>
        </div>`;
            const nextItem = currentItem + 1 < items.length ? currentItem + 1 : 0;
            html += `<div class="sliders_tab">
            <img src="${items[nextItem].img}" alt="${items[nextItem].title}">
            <h3>${items[nextItem].title}</h3>
            <p>${items[nextItem].text}</p>
            <a href="#${items[nextItem].href}" class="services_link">Learn More</a>
        </div>`;
            const next2Item = nextSlide + 1 < items.length ? nextItem + 1 : 0;
            html += `<div class="sliders_tab">
            <img src="${items[next2Item].img}" alt="${items[next2Item].title}">
            <h3>${items[next2Item].title}</h3>
            <p>${items[next2Item].text}</p>
            <a href="#${items[next2Item].href}" class="services_link">Learn More</a>
        </div>`;

            itemsWrapper.innerHTML = html;
        }

        function nextItem() {
            currentItem++;
            if (currentItem >= items.length) currentItem = 0;
            showCurrentItem();
        }

        function prevItem() {
            currentItem--;
            if (currentItem < 0) currentItem = items.length - 1;
            showCurrentItem();
        }

        // setInterval(nextItem,1000);
        showCurrentItem();
        const next = document.querySelector('.services_btn_next'),
              prev = document.querySelector('.services_btn_prev');

        next.addEventListener('click', (e) => {
            nextItem();
            e.preventDefault();
        });

        prev.addEventListener('click', (e) => {
            prevItem();
            e.preventDefault();
        });

    })();

});