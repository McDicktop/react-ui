export async function saveToLocalStorage(
    item,
    isImgSaved,
    setIsImgSaved,
    storage,
    setStorage
) {
    console.log(!storage.filter((el) => el.id === item.id).length);

    if (!storage.filter((el) => el.id === item.id).length) {
        localStorage.setItem("data", JSON.stringify([...storage, item]));

        await setStorage((prev) => {
            return [...prev, item];
        });
        await setIsImgSaved(!isImgSaved);
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
