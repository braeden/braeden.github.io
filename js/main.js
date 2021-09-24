const emojis = ["🙋🏼‍♂️", "👋", "🤚", "🚀", "🤘", "😁", "👨🏼‍💻", "✌️", "🙌", "🤙", "🖖", "✨"];
document.getElementById('emoji').textContent = emojis[Math.floor(Math.random() * emojis.length)];

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
});

const text = "Braeden Smith"
const header = document.getElementById('name')
header.textContent = text[0]
let typingIdx = 0
const interval = setInterval(() => {
    while (text[++typingIdx] == " ") {}
    header.textContent = text.slice(0, typingIdx)
    if (typingIdx >= text.length) {
        clearInterval(interval)
        document.getElementById('top').focus()
    }
}, 60)

// window.onresize = () => { location.reload() }

// const c = document.getElementById('canvas')
// const ctx = c.getContext('2d')
// const dpi = window.devicePixelRatio || 1;
// const scale = .1
// const interpolate = 2 // number of "frames" to transition over (still steppy due to rounding I think)
// let frame = 0
// canvas.width = c.clientWidth * dpi * scale;
// canvas.height = c.clientHeight * dpi * scale;
// let currentFrame = new Array(canvas.width * canvas.height).fill(0).map(() => !!(Math.random() < 0.3))
// let nextFrame = [...currentFrame]
// setInterval(() => {
//     const canvasData = ctx.createImageData(canvas.width, canvas.height)
//     currentFrame.forEach((e, i) => {
//         // mix the two frames at this point
//         const weight = frame / interpolate;
//         for (let j = 0; j < 3; j++)
//             canvasData.data[i * 4 + j] = e ? 230 : 255
//         // canvasData.data[i * 4 + j] = 255 * (e + nextFrame[i] == 1 ? e : e * (1 - weight) + nextFrame[i] * weight)
//         // if the colors are switching between frames, weight the two values and cross-fade
//         canvasData.data[i * 4 + 3] = 100;
//     })
//     frame = (frame + 1) % interpolate;
//     ctx.putImageData(canvasData, 0, 0);

//     if (frame != 0)
//         return;
//     // map the next frame if we hit our interval
//     currentFrame = nextFrame
//     nextFrame = currentFrame.map((e, i) => {
//         let sum = 0
//         for (let x = -1; x <= 1; x++) {
//             for (let y = -1; y <= 1; y++) {
//                 const idx = i + canvas.width * y + x
//                 if (idx >= 0 && idx < currentFrame.length)
//                     sum += currentFrame[idx]
//             }
//         }
//         return sum == 3 ? 1 : sum == 4 ? e : 0
//     })
// }, 100);