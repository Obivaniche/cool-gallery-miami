const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 40
		},
		720: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
});

const sliderBg = new Swiper('.slider_bg', {
	centeredSlides: true,
	spaceBetween: 60,
	parallax: true,
	slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		if (item.classList.toggle('opened')) {
			document.addEventListener('click', (e) => {
				const withinBoundaries = e.composedPath().includes(item);
				if (!withinBoundaries) {
					item.classList.remove('opened');
				}
			})
		}
	})
});

let desc = document.querySelector('.description');

sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0
		? desc.classList.add('hidden')
		: desc.classList.remove('hidden')
});
