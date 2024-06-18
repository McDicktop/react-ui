export function saveToLocalStorage(
    item,
    isImgSaved,
    setIsImgSaved,
    storage,
    setStorage
) {
    if (!storage.filter((el) => el.id === item.id).length) {
        setStorage((prev) => [...prev, item]);
        localStorage.setItem("data", JSON.stringify(storage));
        setIsImgSaved(!isImgSaved);
    }
}

export function clearStorage(
    isFiltered,
    setIsFiltered,
    reset,
    setReset,
    checkBox,
    storage,
    setStorage
) {
    localStorage.removeItem("data");
    setStorage(JSON.parse(localStorage.getItem("data")) ?? []);

    if (isFiltered) {
        checkBox.current.checked = false;
        setIsFiltered(!isFiltered);
    } else {
        setReset(!reset);
    }
}
