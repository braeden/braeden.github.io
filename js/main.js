document.addEventListener('mousemove', (e) => {
    const g = document.getElementById('glow');
    g.style.left = `${e.clientX}px`;

    g.style.top = `${e.clientY}px`;
});
document.addEventListener('touchmove', (e) => {
    const g = document.getElementById('glow');
    g.style.left = `${e.touches[0].pageX}px`;

    g.style.top = `${e.touches[0].pageY}px`;
});



// document.addEventListener('mouseleave', () => {
//     document.getElementById('glow').style.opacity = 0;
// });
// document.addEventListener('mouseenter', () => {
//     document.getElementById('glow').style.opacity = 1;
// })

const emojis = ["🙋🏼‍♂️", "👋", "🤚", "🚀", "🤘", "😁", "👨🏼‍💻", "✌️", "🙌", "🤙", "🖖", "✨"];
document.getElementById('emoji').innerText = emojis[Math.floor(Math.random() * emojis.length)];

// Easter Egg :)
document.getElementById('emoji').addEventListener('copy', () => {
    const unit = 200;
    const pattern = '-... .-. .- . -.. . -.'.split('').reduce((a, e) => {
        switch (e) {
            case '.':
                a.push(unit, unit);
                break;
            case '-':
                a.push(3 * unit, unit);
                break;
            case ' ':
                a[a.length - 1] += 3 * unit
                break;
            case '|':
                a[a.length - 1] += 7 * unit
                break;
        }
        return a
    }, []);
    console.log(window.navigator.vibrate(pattern));
    console.log(pattern)
})

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const dpi = window.devicePixelRatio || 1;
const scale = .1
const interpolate = 20 // number of "frames" to transition over (still steppy due to rounding I think)
let frame = 0
canvas.width = c.clientWidth * dpi * scale;
canvas.height = c.clientHeight * dpi * scale;
let currentFrame = new Array(canvas.width * canvas.height).fill(0).map(() => !!(Math.random() < 0.3))
let nextFrame = [...currentFrame]
console.log(canvas.width, canvas.height)
setInterval(() => {
    const canvasData = ctx.createImageData(canvas.width, canvas.height)
    currentFrame.forEach((e, i) => {
        // mix the two frames at this point
        const weight = frame/interpolate;
        for (let j = 0; j < 3; j++)
            canvasData.data[i * 4 + j] = 255*(e+nextFrame[i] == 1 ? e*(1-weight) + nextFrame[i]*weight : e)
            // if the colors are switching between frames, weight the two values and cross-fade
        canvasData.data[i * 4 + 3] = 20;
    })
    frame = (frame + 1) % interpolate;
    ctx.putImageData(canvasData, 0, 0);

    if (frame != 0)
        return;
    // map the next frame if we hit our interval
    currentFrame = nextFrame
    nextFrame = currentFrame.map((e, i) => {
        let sum = 0
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                const idx = i + canvas.width * y + x
                if (idx >= 0 && idx < currentFrame.length)
                    sum += currentFrame[idx]
            }
        }
        return sum == 3 ? 1 : sum == 4 ? e : 0
    })
}, 100)