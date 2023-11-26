function createMessage(name, text, time, imageUrl) {
    var messageHTML = `
    <div class="message">
        <div class="image">
            <img src="${imageUrl}" alt="${name}" width="64" height="64">
        </div>
        <div class="message-details">
            <div class="top">
                <span class="name">${name}</span>
                <span class="time">${time}</span>
            </div>
            <span class="text">
                ${text}
            </span>
        </div>
    </div>
    `;

    return messageHTML;
}

function createMessages(doMessages, dontMessages) {
    // add the doMessages to the do .discord, and the dontMessages to the dont .discord
    var dontDiscord = document.querySelector(".dont .discord");
    var doDiscord = document.querySelector(".do .discord");

    // print the messages in order, with a delay between each one
    var delay = 0;
    dontMessages.forEach(function (message) {
        delay += message.delay;
        setTimeout(function () {
            dontDiscord.innerHTML += createMessage(message.name, message.text, message.time, message.imageUrl);
        }, delay * 1000);
    });

    delay = 0;
    doMessages.forEach(function (message) {
        delay += message.delay;
        setTimeout(function () {
            doDiscord.innerHTML += createMessage(message.name, message.text, message.time, message.imageUrl);
        }, delay * 1000);
    });
}

function toggleNav(e) {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    e.classList.toggle("open");
}

function checkNavFlex() {
    var nav = document.querySelector(".nav");

    var firstElement = nav.children[0];
    var lastElement = nav.children[nav.children.length - 1];
    if (firstElement.offsetTop != lastElement.offsetTop)
        nav.classList.add("burger");
    else
        nav.classList.remove("burger");
}


// when page has loaded

// load in nav from an array, marking the current page as active
var pages = [
    ["Say Hello", "sayhello.html"],
    ["Ask to Ask", "asktoask.html"],
    ["Split Messages", "splitmessages.html"],
    ["Hinder Help", "hinderhelp.html"],
    ["Leave Out Information", "leaveoutinformation.html"]
];

var indexPadding = 6;

function loadNav() {
    var navHtml = "";
    for (var i = 0; i < pages.length; i++) {
        let currentPage = window.location.pathname.split("/").pop();
        navHtml += `<a href="${pages[i][1]}"${pages[i][1] == currentPage ? ` class="active"` : ""}>${pages[i][0]}</a>`;
    }
    document.getElementsByClassName("nav")[0].innerHTML = navHtml;
}

function loadIndexPageOptions() {
    var optionsHtml = "";
    let pageCount = Math.max(indexPadding, pages.length);
    
    for (var i = 0; i < pageCount; i++) {
        let hasPage = pages[i] != undefined;
        // href=`${pages[i][1]}" class="dont"' : 'class="dont disabled"
        optionsHtml += `
        <a ${hasPage ? `href="${pages[i][1]}" class="dont"` : ' class="dont disabled"'}>
            <p>${hasPage ? pages[i][0] : ""}</p>
        </a>`
    }

    document.getElementsByClassName("dont-grid")[0].innerHTML = optionsHtml;
}