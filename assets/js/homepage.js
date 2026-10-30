(() => {
  document.documentElement.classList.add("has-js");
  const menu = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });

  const controls = document.querySelector("[data-publication-controls]");
  const search = document.querySelector("#publication-search");
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const articles = [...document.querySelectorAll(".publication-item")];
  const empty = document.querySelector(".search-empty");
  const status = document.querySelector(".search-status");
  if (!controls || !search || !empty || !status) return;
  const indexed = articles.map((element) => ({ element, text: element.textContent.toLowerCase() }));
  let category = "all";
  function updatePublications() {
    const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const { element, text } of indexed) {
      const matches = (category === "all" || element.dataset.category === category) && terms.every((term) => text.includes(term));
      element.hidden = !matches;
      if (matches) count += 1;
    }
    empty.hidden = count !== 0;
    status.textContent = `${count} ${count === 1 ? "publication" : "publications"} shown`;
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      updatePublications();
    });
  });
  search.addEventListener("input", updatePublications);
  controls.hidden = false;

  if ("IntersectionObserver" in window) {
    const links = [...navigation.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    links.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
