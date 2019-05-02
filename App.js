function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.chart-scroll',
        triggerHook: 0,
    })
    .setPin('.chart-scroll')
    .addIndicators()
    .addTo(controller);
}

splitScroll();
