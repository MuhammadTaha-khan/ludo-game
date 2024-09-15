function scrolldice() {
    var x = Math.floor(Math.random() * 6) + 1;
    let images = ['dice-1.png',
                'dice-2.png',
                'dice-3.png',
                'dice-4.png',
                'dice-5.png',
                'dice-6.png'];
    document.getElementById("start").src=images[(x-1)];
    return;
}