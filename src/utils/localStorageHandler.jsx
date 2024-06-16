// import { func } from "prop-types";

export function saveToLocalStorage(item, isImgSaved, setIsImgSaved, storage) {
    if (!storage.filter((el) => el.id === item.id).length) {
        storage.push(item);
        localStorage.setItem("data", JSON.stringify(storage));
        setIsImgSaved(!isImgSaved);
    }
}

// export function clearStorage(
//     storage,
//     isFiltered,
//     setIsFiltered,
//     checkBox,
//     reset,
//     setReset
// ) {
//     localStorage.clear();
//     storage = JSON.parse(localStorage.getItem("data")) ?? [];

//     if (isFiltered) {
//         checkBox.current.checked = false;
//         setIsFiltered(!isFiltered);
//     } else setReset(!reset);
// }
