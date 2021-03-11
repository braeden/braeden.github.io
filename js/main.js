const strings = ['Windows Tour']
const ratio = 9 / 1.5
const height = 30
const l = [...document.getElementsByTagName('canvas')]
l.forEach((elem, i) => {
    const ctx = elem.getContext('2d');
    ctx.imageSmoothingEnabled = false
    elem.width = height * ratio
    elem.height = height;
    ctx.font = '20px Source Sans Pro';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle'
    ctx.fillText(strings[i] || 'Default', elem.width / 2 + .1, elem.height / 2)
})



const buttons = [...document.getElementsByClassName('button')]
buttons.forEach(elem => {
    elem.addEventListener('mousedown', () => elem.classList.add('inset'))
    elem.addEventListener('mouseup', () => elem.classList.remove('inset'))
});


let [dx, dy] = [0, 0];
let moveEnabled = false;
const dpi = window.devicePixelRatio || 1;
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
        dx = tempX * dpi - parseInt(getComputedStyle(mainWindow).left || 0)
        dy = tempY * dpi - parseInt(getComputedStyle(mainWindow).top || 0)
        moveEnabled = true;
        mainWindow.style.margin = "0";
        mainWindow.style.cursor = "grabbing"
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
        mainWindow.style.left = `${tempX * dpi - dx}px`
        mainWindow.style.top = `${tempY * dpi - dy}px`
    });
});

['mouseup', 'touchstop'].forEach(event => {
    window.addEventListener(event, (e) => {
        moveEnabled = false;
        const mainWindow = document.getElementById('main-window')
        mainWindow.style.cursor = ""

    });
});