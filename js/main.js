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

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 5000
            }
        },
        "color": {
            "value": "#eee"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#999",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": .5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "resize": true
        }
    },
    "retina_detect": true
});