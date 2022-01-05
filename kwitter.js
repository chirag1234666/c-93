function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("username" ,username);

    window.location="kwitter_room.html";
}