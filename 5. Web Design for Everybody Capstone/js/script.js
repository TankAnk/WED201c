/*Nav bar expand*/
const nav_toggle = document.querySelector(".nav_toggle");
const nav_menu = document.querySelector(".nav_menu");

if (nav_toggle && nav_menu)
{
	nav_toggle.addEventListener("click", () =>
	{
		const is_open = nav_menu.classList.toggle("active");

		nav_toggle.setAttribute("aria-expanded", is_open);
		nav_menu.setAttribute("aria-hidden", !is_open);
	});

	document.querySelectorAll(".nav_menu a").forEach(link =>
	{
		link.addEventListener("click", () =>
		{
			nav_menu.classList.remove("active");

			nav_toggle.setAttribute("aria-expanded", "false");
			nav_menu.setAttribute("aria-hidden", "true");
		});
	});

	document.addEventListener("keydown", (event) =>
	{
		if (event.key === "Escape")
		{
			nav_menu.classList.remove("active");

			nav_toggle.setAttribute("aria-expanded", "false");
			nav_menu.setAttribute("aria-hidden", "true");
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


/*Loading progress bar animation*/
const skills = document.querySelector("#skills");

if (skills)
{
	const skill_observer = new IntersectionObserver(
		(entries, observer) =>
		{
			const entry = entries[0];

			if (entry.isIntersecting)
			{
				document.querySelectorAll(".skill_fill").forEach((bar) =>
				{
					bar.classList.add("animate");
				});

				observer.unobserve(skills);
			}
		},
		{
			threshold: 0.3
		}
	);

	skill_observer.observe(skills);
}


/*Theme toggle*/
const theme_toggle = document.querySelector(".theme_toggle");

if (theme_toggle)
{
	const saved_theme = localStorage.getItem("theme");
	const system_prefers_dark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	const use_dark_theme =
		saved_theme === "dark" ||
		(!saved_theme && system_prefers_dark);

	if (use_dark_theme)
	{
		document.body.classList.add("dark_mode");
		theme_toggle.innerHTML = "&#x2600;";
		theme_toggle.setAttribute("aria-pressed", "true");
	}
	else
	{
		theme_toggle.setAttribute("aria-pressed", "false");
	}	

	theme_toggle.addEventListener("click", () =>
	{
		document.body.classList.toggle("dark_mode");

		const is_dark = document.body.classList.contains("dark_mode");

		theme_toggle.innerHTML = is_dark
			? "&#x2600;"
			: "&#x1F319;";

		theme_toggle.setAttribute("aria-pressed", is_dark);

		localStorage.setItem(
			"theme",
			is_dark ? "dark" : "light"
		);
	});
}

/*Active navigation link on scroll*/
const sections = document.querySelectorAll("main section");
const nav_links = document.querySelectorAll(".nav_menu a");

if (sections.length && nav_links.length)
{
	const section_observer = new IntersectionObserver(
		(entries) =>
		{
			const visible_section = entries
				.filter((entry) => entry.isIntersecting)
				.sort(
					(a, b) =>
					b.intersectionRatio - a.intersectionRatio
				)[0];

			if (!visible_section) return;

			const id = visible_section.target.getAttribute("id");

			nav_links.forEach((link) =>
			{
				const is_active =
					link.getAttribute("href") === `#${id}`;

				link.classList.toggle("active", is_active);

				if (is_active)
				{
					link.setAttribute("aria-current", "true");
				}
				else
				{
					link.removeAttribute("aria-current");
				}
			});
		},
		{
			threshold: [0.2, 0.4, 0.6, 0.8],
			rootMargin: "-10% 0px -40% 0px"
		}
	);

	sections.forEach((section) =>
	{
		section_observer.observe(section);
	});
}