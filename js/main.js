const buttons = [...document.getElementsByClassName('button')]
buttons.forEach(elem => {
    ['mousedown', 'touchstart'].forEach(e => elem.addEventListener(e, () => elem.classList.add('inset')));
    ['mouseup', 'touchend', 'dragend'].forEach(e => elem.addEventListener(e, () => elem.classList.remove('inset')));
});

const underlines = [...document.getElementsByTagName('u')]
underlines.forEach(elem => {
    document.addEventListener('keydown', e => {
        console.log(elem.parentElement)
        if (e.key.toUpperCase() === elem.innerText) {
            elem.parentElement.click()
        }
    })
    // console.log(e.innerText, e.parentElement)
});

let [dx, dy] = [0, 0];
let moveEnabled = false;
const dpi = 1 || window.devicePixelRatio;
['mousedown', 'touchstart'].forEach(event => {
    document.getElementById('menubar').addEventListener(event, (e) => {
        e.preventDefault();

        let tempX, tempY
        if (e instanceof TouchEvent) {
            tempX = e.touches[0].pageX
            tempY = e.touches[0].pageY
        } else {
            tempX = e.clientX;
            tempY = e.clientY;
        }
        const mainWindow = document.getElementById('main-window')
        dx = tempX * dpi - mainWindow.getBoundingClientRect().left || 0
        dy = tempY * dpi - mainWindow.getBoundingClientRect().top || 0
        moveEnabled = true;
        mainWindow.style.cursor = 'grabbing'
    })
});

['mousemove', 'touchmove'].forEach(event => {
    window.addEventListener(event, (e) => {
        if (!moveEnabled)
            return;
        e.preventDefault();

        let tempX, tempY
        if (e instanceof TouchEvent) {
            tempX = e.touches[0].pageX
            tempY = e.touches[0].pageY
        } else {
            tempX = e.clientX;
            tempY = e.clientY;
        }
        const mainWindow = document.getElementById('main-window')
        mainWindow.style.margin = "0";
        mainWindow.style.left = `${tempX * dpi - dx}px`
        mainWindow.style.top = `${tempY * dpi - dy}px`
    }, { passive: false });
});

['mouseup', 'touchend', 'touchcancel'].forEach(event => {
    window.addEventListener(event, (e) => {
        moveEnabled = false;
        const mainWindow = document.getElementById('main-window')
        mainWindow.style.cursor = ''
    }, { passive: false });
});

window.addEventListener('resize', () => location.reload());

