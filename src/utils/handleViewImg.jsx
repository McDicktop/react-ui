export function closeViewImg(isViewImg, setIsViewImg, e) {
    if (e.target.className === "view_gallery") {
        setIsViewImg(!isViewImg);
        document.body.classList.toggle("scroll_disable");
    }
}

export function openViewImg(isViewImg, setIsViewImg, setImgItem, el) {
    document.body.classList.toggle("scroll_disable");
    setIsViewImg(!isViewImg);
    setImgItem(el);
}
