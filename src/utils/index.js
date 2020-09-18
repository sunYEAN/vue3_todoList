function getLocalStorage(key) {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : v;
}


function setLocalStorage(key, value) {
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

function getRound (number, offset = 100) {
    return Math.round(offset * number) / offset;
}

function getCenterPoint(el, offset = true) {
    const {x, y, width, height} = el.getBoundingClientRect();
    if (offset) {
        let y = el.offsetTop;
        let x = el.offsetLeft;
        return {
            x: getRound(x + width / 2),
            y: getRound(y + height/ 2),
            originX: x,
            originY: y
        };
    }
    return {
        x: getRound(x + width / 2),
        y: getRound(y + height / 2),
        originX: x,
        originY: y
    }
}

export {
    getRound,
    getCenterPoint,
    getLocalStorage,
    setLocalStorage
}
