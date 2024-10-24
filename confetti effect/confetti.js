document.getElementById("Click").addEventListener('click', () =>{
 confetti_effect();
})


function confetti_effect() {
    var end = Date.now() + (15 * 1000); // Run for 15 seconds
    var colors = ['#bb0000','#bbbb00', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
