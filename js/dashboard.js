let username =
localStorage.getItem("username");

if(!username)
{
    window.location.href =
    "login.html";
}

document.getElementById("welcomeUser")
.innerHTML =
"Welcome, " + username;

function logout()
{
    localStorage.removeItem("username");

    window.location.href =
    "login.html";
}

function openPage(page)
{
    window.location.href = page;
}

function toggleTheme()
{
    document.body.classList.toggle("dark");

    localStorage.setItem(
    "theme",
    document.body.classList.contains("dark")
    );
}