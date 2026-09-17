const elements = document.querySelectorAll(".element-cache");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Il rentre dans l'écran : on ajoute la classe
                entry.target.classList.add("est-visible");
            } else {
                // Il sort de l'écran : on retire la classe pour "réarmer" l'animation
                entry.target.classList.remove("est-visible");
            }
        });
    },
    {
        threshold: 0.1,
    },
);

elements.forEach((element) => {
    observer.observe(element);
});
