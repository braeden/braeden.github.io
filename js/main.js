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

const emojis = ["🙋🏼‍♂️", "👋", "🤚", "🚀", "🤘", "😁", "👨🏼‍💻", "👌", "✌️", "🙌", "🤙", "🖖", "✨"];
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

// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 100,
//             "density": {
//                 "enable": true,
//                 "value_area": 5000
//             }
//         },
//         "color": {
//             "value": "#eee"
//         },
//         "shape": {
//             "type": "polygon",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             }
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": true,
//                 "speed": 0.2,
//                 "opacity_min": 0,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 2,
//             "random": true,
//             "anim": {
//                 "enable": true,
//                 "speed": 2,
//                 "size_min": 0,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": true,
//             "distance": 100,
//             "color": "#999",
//             "opacity": 0.5,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": .5,
//             "direction": "none",
//             "random": true,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "resize": true
//         }
//     },
//     "retina_detect": true
// });

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')
const dpi = window.devicePixelRatio || 1;
const scale = .1
const interpolate = 30 // number of frames to transition over
let frame = 0
canvas.width = c.clientWidth * dpi * scale;
canvas.height = c.clientHeight * dpi * scale;
let currentFrame = new Array(canvas.width * canvas.height).fill(0).map(() => Math.random() < 0.5 ? 0 : 1)
setInterval(() => {
    const canvasData = ctx.createImageData(canvas.width, canvas.height)
    const nextFrame = currentFrame.map((e, i) => {
        for (let j = 0; j < 3; j++)
            canvasData.data[i * 4 + j] = e ? 50 * Math.abs(frame - interpolate / 2) / interpolate : 0
        canvasData.data[i * 4 + 3] = 50;

        if (frame != interpolate/2)
            return e;

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

    ctx.putImageData(canvasData, 0, 0);
    currentFrame = nextFrame
    frame = (frame + 1) % interpolate;
}, 50)