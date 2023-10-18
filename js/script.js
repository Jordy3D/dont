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