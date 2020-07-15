if (window.IntersectionObserver) {
    const activeNavItemClass = 'nav__item--active';
    const content = document.querySelector('.content');
    // const description = document.querySelector('.description');
    const experience = document.querySelector('.experience');
    const personalInfoItem = document.querySelector('.nav__general-info-item');
    const experienceItem = document.querySelector('.nav__experience-item');

    personalInfoItem.classList.add(activeNavItemClass);

    function observerCallback(entries) {
        const entry = entries[0];

        if (entry.isIntersecting) {
            personalInfoItem.classList.remove(activeNavItemClass);
            experienceItem.classList.add(activeNavItemClass);
        } else {
            experienceItem.classList.remove(activeNavItemClass);
            personalInfoItem.classList.add(activeNavItemClass);
        }
    }

    const observerOptions = {
        root: content,
        threshold: 0.2
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(experience);
}
