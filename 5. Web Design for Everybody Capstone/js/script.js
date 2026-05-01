const nav_toggle = document.querySelector(".nav_toggle");
const nav_menu = document.querySelector(".nav_menu");

if (nav_toggle && nav_menu)
{
	nav_toggle.addEventListener("click", () =>
	{
		const is_open = nav_menu.classList.toggle("active");
		nav_toggle.setAttribute("aria-expanded", is_open);
	});

	document.querySelectorAll(".nav_menu a").forEach(link =>
	{
		link.addEventListener("click", () =>
		{
			nav_menu.classList.remove("active");
			nav_toggle.setAttribute("aria-expanded", "false");
		});
	});

	document.addEventListener("keydown", (event) =>
	{
		if (event.key === "Escape")
		{
			nav_menu.classList.remove("active");
			nav_toggle.setAttribute("aria-expanded", "false");
		}
	});
}