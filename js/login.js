function login()
{
    let username =
    document.getElementById("username").value;

    let error =
    document.getElementById("error");

    if(username.trim()==="")
    {
        error.innerHTML =
        "Please enter username";

        return;
    }

    localStorage.setItem(
    "username",
    username
    );

    window.location.href =
    "dashboard.html";
}