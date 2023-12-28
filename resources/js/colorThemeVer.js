// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export function checkTheme() {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

export function changeTheme() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === null || currentTheme === undefined) {
        localStorage.setItem("theme", "light");
        checkTheme();
        return;
    }

    if (currentTheme.theme === "light") {
        localStorage.theme = "dark";
        checkTheme;
        return;
    }

    localStorage.theme = "light";
    checkTheme();
}

// Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
