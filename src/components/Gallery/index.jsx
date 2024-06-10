import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

// import name '../../image.png'

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

let storage = JSON.parse(localStorage.getItem("data")) ?? [];

async function getData() {
    const res = await axios(URL + "gallery");
    return res.data;
}

function imgView(isViewImg, setIsViewImg, imgItem, setImgItem, el) {
    document.body.classList.toggle("scroll_disable");
    setIsViewImg(!isViewImg);
    setImgItem(el);
}

function saveToLocalStorage(item) {
    if (!storage.filter((el) => el.id === item.id).length) {
        storage.push(item);
        localStorage.setItem("data", JSON.stringify(storage));
        alert("Image saved succesfully");
    } else {
        alert("Image already saved");
    }
}

const GalleryMock = function () {
    const [data, setData] = useState([]),
        [isViewImg, setIsViewImg] = useState(false),
        [imgItem, setImgItem] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArr = await getData();
                setData(dataArr);
            } catch (e) {
                console.error("Error fetching data", e);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="grid_gallery">
                {data.map((el, ind) => {
                    return (
                        <div key={`index_${ind}`} className="image_gallery">
                            <img
                                src={el.image}
                                alt="image_view"
                                onClick={() =>
                                    imgView(
                                        isViewImg,
                                        setIsViewImg,
                                        imgItem,
                                        setImgItem,
                                        el
                                    )
                                }
                            />
                        </div>
                    );
                })}
            </div>

            {isViewImg && (
                <div className="view_gallery">
                    <div className="img_container">
                        <img
                            className="img_style"
                            src={imgItem.image}
                            alt="image"
                        />

                        <button
                            className="img_btn"
                            id="saveBtn"
                            onClick={() => {
                                saveToLocalStorage(imgItem);
                            }}
                        >
                            💾
                        </button>

                        <button
                            className="img_btn"
                            id="closeBtn"
                            onClick={() => {
                                setIsViewImg(!isViewImg);
                                document.body.classList.toggle(
                                    "scroll_disable"
                                );
                            }}
                        >
                            ❌
                        </button>

                        {+imgItem.id > 1 && (
                            <button
                                className="img_btn"
                                id="leftBtn"
                                onClick={() => {
                                    let prev = data.filter(
                                        (el) =>
                                            el.id === String(+imgItem.id - 1)
                                    );
                                    setImgItem(prev[0]);
                                }}
                            >
                                ⬅️
                            </button>
                        )}

                        {+imgItem.id < data.length && (
                            <button
                                className="img_btn"
                                id="rightBtn"
                                onClick={() => {
                                    let next = data.filter(
                                        (el) =>
                                            el.id === String(+imgItem.id + 1)
                                    );
                                    setImgItem(next[0]);
                                }}
                            >
                                ➡️
                            </button>
                        )}

                        <div className="img_description">
                            <p>{imgItem.name}</p>
                            <p>
                                {imgItem.city} - {imgItem.country}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryMock;
