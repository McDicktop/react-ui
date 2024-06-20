export function closeViewImg(isViewImg, setIsViewImg, e) {
    if (e.target.className === "view_gallery") {
        setIsViewImg(!isViewImg);
        document.body.classList.remove("scroll_disable");
        document.body.classList.remove("scroll_safari");
    }
}

export function openViewImg(isViewImg, setIsViewImg, setImgItem, el) {
    document.body.classList.add("scroll_disable");

    if (isSafari()) {
        document.body.classList.add("scroll_safari");
    }

    setIsViewImg(!isViewImg);
    setImgItem(el);
}

function isSafari() {
    var isSafari =
        navigator.userAgent && navigator.userAgent.indexOf("Macintosh") != -1;

    return isSafari;
}
