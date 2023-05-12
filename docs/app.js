const doc = {
    msg: document.querySelector('#msg'),
    enterButton: document.querySelector('#enterButton'),
    container: document.querySelector('.container')
};

const state = {
    msg: null,
    isDragging: false,
    offsetX: null,
    offsetY: null
};

window.addEventListener('load', () => {
    init();
});

function init() {
    doc.enterButton.addEventListener('click', () => {
        startEnter();
    });
}

function startEnter() {
    state.msg = doc.msg.value;
    generateBox();
    doc.msg.value = '';
}

function generateBox() {
    let div = document.createElement('div');
    div.className = 'box';
    div.textContent = state.msg;
    div.addEventListener('mousedown', (e) => {
        state.isDragging = true;
        state.offsetX = e.offsetX;
        state.offsetY = e.offsetY;
    });
    div.addEventListener('mousemove', (e) => {
        if(state.isDragging) {
            div.style.left = (e.pageX - state.offsetX) + 'px';
            div.style.top = (e.pageY - state.offsetY) + 'px';
        }
    });
    div.addEventListener('mouseup', () => {
        state.isDragging = false;
    });
    doc.container.appendChild(div);
}

