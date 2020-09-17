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

export {
    getLocalStorage,
    setLocalStorage
}
