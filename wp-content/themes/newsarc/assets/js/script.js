"use strict";
/*Namespace
------------------------------------------------------- */
var newsarc = newsarc || {};
/* Preloader
 **-----------------------------------------------------*/
newsarc.PreLoader = {
    init: function () {
        let preloader = document.querySelector("#wpi-preloader");
        if (preloader) {
            preloader.classList.add("wpi-preloader-exit");
            setTimeout(function () {
                preloader.style.display = "none";
            }, 1000);
        }
    },
};


/* Display Clock
 **-----------------------------------------------------*/
newsarc.currentClock = {
    init: function () {
        if (document.getElementsByClassName("wpi-display-clock").length > 0) {
            setInterval(function () {
                let currentTime = new Date();
                let hours = currentTime.getHours();
                let minutes = currentTime.getMinutes();
                let seconds = currentTime.getSeconds();
                let ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                let timeString =
                    '<span class="theme-clock-unit clock-unit-hours">' +
                    hours +
                    "</span>" +
                    ":" +
                    '<span class="theme-clock-unit clock-unit-minute">' +
                    minutes +
                    "</span>" +
                    ":" +
                    '<span class="theme-clock-unit clock-unit-seconds">' +
                    seconds +
                    "</span>" +
                    " " +
                    '<span class="theme-clock-unit clock-unit-format">' +
                    ampm +
                    "</span>";
                document.getElementsByClassName(
                    "wpi-display-clock"
                )[0].innerHTML = timeString;
            }, 1000);
        }
    },
};

/* Slider
 **-----------------------------------------------------*/
newsarc.slider = {
    init: function () {
        this.tickerSlider();
        this.bannerSlider();
        this.popularSlider();
        this.widgetSlider();
    },

    bannerSlider: function () {
        const progressCircle = document.querySelector(".banner-pagination-progress .pagination-progress-bar");
        let MainBanner = new Swiper(".banner-pagination-slider", {
            spaceBetween: 20,
            slidesPerView: 3,
            loop: document.querySelectorAll('.swiper-slide').length >= 3,
            slideToClickedSlide: true,
            autoplay: {
                delay: 5000, // Add a delay for autoplay (optional, you can adjust the timing)
            },
            navigation: {
                nextEl: ".banner-slider-next",
                prevEl: ".banner-slider-prev",
            },
            thumbs: {
                swiper: {
                    el: '.site-banner-hero',
                    slidesPerView: 1,
                    loop: document.querySelectorAll('.swiper-slide').length >= 3,
                    mousewheel: false,
                    effect: "fade",
                }
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    progressCircle.style.setProperty("--cs-carousel-progressbar", 1 - progress);
                }
            }
        });
    },

    tickerSlider: function () {
        let sliderWrapper = document.querySelector(
            ".wpi-ticker-init"
        );
        if (sliderWrapper) {
            let sliderOptions;
            let sliderData = sliderWrapper.getAttribute("data-slider") || {};
            if (sliderData) {
                sliderOptions = JSON.parse(sliderData);
            }
            let swiper = new Swiper(sliderWrapper, sliderOptions);
        }
    },
    popularSlider: function () {
        let sliderWrapper = document.querySelector(
            ".wpi-popular-init"
        );
        if (sliderWrapper) {
            let sliderOptions;
            let sliderData = sliderWrapper.getAttribute("data-slider") || {};
            if (sliderData) {
                sliderOptions = JSON.parse(sliderData);
            }
            let swiper = new Swiper(sliderWrapper, sliderOptions);
        }
    },
    widgetSlider: function () {
        let sliderWrapper = document.querySelectorAll(
            ".wpi-swiper-init"
        );
        if (sliderWrapper) {
            sliderWrapper.forEach(function (item) {
                let parentWrapper = item.parentNode;
                let navNext = parentWrapper.querySelector(
                    ".widget-slider-next"
                );
                let navPrev = parentWrapper.querySelector(
                    ".widget-slider-prev"
                );
                let paginate =
                    parentWrapper.querySelector(".wpi-widget-pagination");
                let defaultOptions = {
                    slidesPerView: 1,
                    loop: document.querySelectorAll('.swiper-slide').length >= 3,
                    lazyloading: true,
                    navigation: {
                        nextEl: navNext,
                        prevEl: navPrev,
                    },
                    pagination: {
                        el: paginate,
                        clickable: true,
                    },
                };
                let data = item.getAttribute("data-slider") || {};
                if (data) {
                    var dataOptions = JSON.parse(data);
                }
                let sliderOptions = {
                    ...defaultOptions,
                    ...dataOptions,
                };
                let swiper = new Swiper(item, sliderOptions);

                let containerWidth = item.clientWidth;
                if (containerWidth < 500) {
                    swiper.params.slidesPerView = 1;
                    swiper.update();
                }
            });
        }
    },
};
/* Background Image
 **-----------------------------------------------------*/
newsarc.setBackgroundImage = {
    init: function () {
        let bgImageContainer = document.querySelectorAll(".entry-background-image");
        if (bgImageContainer) {
            bgImageContainer.forEach(function (item) {
                let image = item.querySelector("img");
                if (image) {
                    let imageSrc = image.getAttribute("src");
                    if (imageSrc) {
                        item.style.backgroundImage = "url(" + imageSrc + ")";
                        image.style.display = "none";
                    }
                }
            });
        }
        let pageSections = document.querySelectorAll(".data-bg");
        pageSections.forEach(function (section) {
            let background = section.getAttribute("data-background");
            if (background) {
                section.style.backgroundImage = "url(" + background + ")";
            }
        });
    },
};
/* Display Clock
 **-----------------------------------------------------*/
newsarc.displayClock = {
    init: function () {
        if (document.getElementsByClassName("wpi-current-time").length > 0) {
            setInterval(function () {
                let currentTime = new Date();
                let hours = currentTime.getHours();
                let minutes = currentTime.getMinutes();
                let seconds = currentTime.getSeconds();
                let ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                let timeString =
                    '<span class="wpi-clock-unit clock-unit-hours">' +
                    hours +
                    "</span>" +
                    ":" +
                    '<span class="wpi-clock-unit clock-unit-minute">' +
                    minutes +
                    "</span>" +
                    ":" +
                    '<span class="wpi-clock-unit clock-unit-seconds">' +
                    seconds +
                    "</span>" +
                    " " +
                    '<span class="wpi-clock-unit clock-unit-format">' +
                    ampm +
                    "</span>";
                document.getElementsByClassName(
                    "wpi-current-time"
                )[0].innerHTML = timeString;
            }, 1000);
        }
    },
};
/* Preloader
 **-----------------------------------------------------*/
newsarc.ProgressBar = {
    init: function () {
        const progressBar = document.getElementById('progressBar');

        // Check if progressBar exists before proceeding
        if (progressBar) {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / totalHeight) * 100;

            progressBar.style.width = scrollPercentage + '%';

            // Update progress on scroll
            window.addEventListener('scroll', function () {
                const scrollPosition = window.scrollY;
                const scrollPercentage = (scrollPosition / totalHeight) * 100;
                progressBar.style.width = scrollPercentage + '%';
            });
        }
    },
};

/* Sticky Header
 **-----------------------------------------------------*/
newsarc.stickyHeader = {
    init: function () {
        let navBar = document.querySelector(".site-header-responsive");
        let parentHeader = document.querySelector(".site-header");

        // Handle sticky menu on scroll
        if (navBar && navBar.classList.contains("has-sticky-navigation") && parentHeader) {
            this.stickMenuOnScroll(navBar, parentHeader);
        }
    },

    stickMenuOnScroll: function (navBar, parentHeader) {
        window.addEventListener("scroll", function (event) {
            let parentHeaderHeight = parentHeader.offsetHeight;
            let currentScrollPos = window.pageYOffset;

            if (currentScrollPos < parentHeaderHeight || currentScrollPos === 0) {
                navBar.classList.remove("sticky-header-active");
            } else {
                navBar.classList.add("sticky-header-active");
            }
        });
    },
};

/* Scroll-to-Top Button with Progress Indicator
 **-----------------------------------------------------*/
newsarc.scrollToTop = {
    init: function () {
        this.scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (!this.scrollToTopBtn) return; // Exit if the button does not exist

        this.progressCircle = document.getElementById("progressCircle");
        if (!this.progressCircle) return; // Exit if the progress circle does not exist

        this.progressCircle = this.progressCircle.querySelector("circle");
        if (!this.progressCircle) return; // Exit if the circle element does not exist

        this.radius = this.progressCircle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;

        this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.progressCircle.style.strokeDashoffset = this.circumference;

        // Bind the scroll and click events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.scrollToTopBtn.addEventListener('click', this.scrollToTop.bind(this));
    },

    handleScroll: function () {
        if (!this.scrollToTopBtn || !this.progressCircle) return; // Exit if elements are missing

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            this.scrollToTopBtn.style.display = "flex";
        } else {
            this.scrollToTopBtn.style.display = "none";
        }
        requestAnimationFrame(this.updateProgressIndicator.bind(this));
    },

    scrollToTop: function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },

    updateProgressIndicator: function () {
        if (!this.progressCircle) return; // Exit if the circle element does not exist

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollTop / scrollHeight;
        const dashOffset = this.circumference * (1 - progress);
        this.progressCircle.style.strokeDashoffset = dashOffset;
    }
};

newsarc.tabbedWidget = {
    init: function () {

        const widgetContainers = document.querySelectorAll(".wpi-tabbed-widget");
        widgetContainers.forEach((container) => {
            const tabs = container.querySelectorAll(
                ".tabbed-widget-header .tabbed-header-item"
            );
            const tabPanes = container.querySelectorAll(
                ".tabbed-widget-content .tabbed-content-item"
            );

            tabs.forEach((tab) => {
                tab.addEventListener("click", function (event) {
                    const tabid = this.getAttribute("tab-data");
                    tabs.forEach((tab) => tab.classList.remove("active"));
                    tabPanes.forEach((tabPane) =>
                        tabPane.classList.remove("active")
                    );
                    this.classList.add("active");
                    container
                        .querySelector(`.content-${tabid}`)
                        .classList.add("active");
                });
            });
        });
    },
};

/* Load functions at proper events
 *--------------------------------------------------*/
/**
 * Is the DOM ready?
 *
 * This implementation is coming from https://gomakethings.com/a-native-javascript-equivalent-of-jquerys-ready-method/
 *
 * @param {Function} fn Callback function to run.
 */
function newsarcDomReady(fn) {
    if (typeof fn !== "function") {
        return;
    }
    if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
    ) {
        return fn();
    }
    document.addEventListener("DOMContentLoaded", fn, false);
}

newsarcDomReady(function () {
    newsarc.currentClock.init();
    newsarc.slider.init();
    newsarc.setBackgroundImage.init();
    newsarc.displayClock.init();
    newsarc.stickyHeader.init();
    newsarc.scrollToTop.init();
    newsarc.tabbedWidget.init();
});
window.addEventListener("load", function (event) {
    newsarc.PreLoader.init();
});
window.addEventListener("scroll", function (event) {
    newsarc.ProgressBar.init();
});