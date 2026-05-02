/*Nav bar expand*/
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


/*Nav bar change color when scroll pass overview*/
const nav_bar = document.querySelector("#nav_bar");
const overview = document.querySelector("#overview");

if (nav_bar && overview)
{
	const observer = new IntersectionObserver(
		(entries) =>
		{
			if (entries[0].isIntersecting)
			{
				nav_bar.classList.remove("nav_overview");
			}
			else
			{
				nav_bar.classList.add("nav_overview");
			}
		},
		{
			threshold: 0.3
		}
	);

	observer.observe(overview);
}