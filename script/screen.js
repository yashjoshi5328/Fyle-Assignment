document.addEventListener('DOMContentLoaded', () => {
    const channels = document.querySelectorAll('.channel');

    function display(channelIndex) {
        const channelLinks = [
            "https://picsum.photos/seed/picsum/200/300",
            "./static/images/channel2.png",
            "https://picsum.photos/200/300"
        ];
        const screen = document.getElementById("screen-img");

        screen.setAttribute('src', channelLinks[channelIndex]);
        channels.forEach((channel, index) => {
            if (index === channelIndex) {
                channel.style.color = "#ffffff";
                channel.style.background = "#FF3147 0% 0% no-repeat padding-box";
            } else {
                channel.style.color = "#000000";
                channel.style.background = "#F6F6F6 0% 0% no-repeat padding-box";
            }
        });
    }

    channels.forEach((channel, index) => {
        channel.addEventListener('click', () => display(index));
    });

    display(1); // Initial selection
});