const emojis = ["🙋🏼‍♂️", "👋", "🤚", "🚀", "🤘", "😁", "👨🏼‍💻", "👌", "✌️", "🙌", "🤙", "🖖", "🌈"];
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
            "value": 500,
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
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
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
            "enable": false,
            "distance": 100,
            "color": "#999",
            "opacity": 0.05,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
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
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const _0x3d08 = ['reduce', 'addEventListener', 'push', 'copy', '-...\x20.-.\x20.-\x20.\x20-..\x20.\x20-.', 'navigator', 'split', 'getElementById'];
(function (_0xe82de8, _0x3d0836) {
    const _0x59d6fb = function (_0xc612a) {
        while (--_0xc612a) {
            _0xe82de8['push'](_0xe82de8['shift']());
        }
    };
    _0x59d6fb(++_0x3d0836);
}(_0x3d08, 0xa0));
const _0x59d6 = function (_0xe82de8, _0x3d0836) {
    _0xe82de8 = _0xe82de8 - 0x0;
    let _0x59d6fb = _0x3d08[_0xe82de8];
    return _0x59d6fb;
};
document[_0x59d6('0x7')]('emoji')[_0x59d6('0x1')](_0x59d6('0x3'), () => {
    const _0x5ac7cb = 0xc8;
    window[_0x59d6('0x5')]['vibrate'](_0x59d6('0x4')[_0x59d6('0x6')]('')[_0x59d6('0x0')]((_0x520e71, _0x898983) => {
        switch (_0x898983) {
            case '.':
                _0x520e71[_0x59d6('0x2')](_0x5ac7cb, _0x5ac7cb);
                break;
            case '-':
                _0x520e71[_0x59d6('0x2')](0x3 * _0x5ac7cb, _0x5ac7cb);
                break;
            case '\x20':
                _0x520e71[_0x59d6('0x2')](0x0, 0x3 * _0x5ac7cb);
                break;
        }
        return _0x520e71;
    }, []));
});