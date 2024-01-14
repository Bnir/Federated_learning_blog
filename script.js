let soon = document.getElementById('navbarid');

soon.addEventListener("click", function (event) {
    let clicked = event.target;
    if (clicked.tagName === "A") {
        let itemid = clicked.parentElement.id;
        switch (itemid) {
            case 'about':
            case 'contact':
                alert("Coming Soon");
                break;
        };
    };
});