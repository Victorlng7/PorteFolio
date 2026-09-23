const elements = document.querySelectorAll(".element-cache");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("est-visible");
            } else {
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
