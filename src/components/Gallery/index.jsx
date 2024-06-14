import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

// import name '../../image.png'

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

let storage = JSON.parse(localStorage.getItem("data")) ?? [];

function clearStorage(isFiltered, setIsFiltered, reset, setReset, checkBox) {

    localStorage.clear();
    storage = JSON.parse(localStorage.getItem("data")) ?? [];

    if (isFiltered) {
        checkBox.current.checked = false;
        filter(isFiltered, setIsFiltered);
    } else setReset(!reset);
}

function filter(isFiltered, setIsFiltered) {
    if (!isFiltered) setIsFiltered(true);
    else setIsFiltered(false);
}

async function getData() {
    const res = await axios(URL + "gallery");
    return res.data;
}

function closeViewImg(isViewImg, setIsViewImg, e) {
    if (e.target.className === "view_gallery") {
        setIsViewImg(!isViewImg);
        document.body.classList.toggle("scroll_disable");
    }
}

function openViewImg(isViewImg, setIsViewImg, setImgItem, el) {
    document.body.classList.toggle("scroll_disable");
    setIsViewImg(!isViewImg);
    setImgItem(el);
}

function saveToLocalStorage(item, isImgSaved, setIsImgSaved) {
    if (!storage.filter((el) => el.id === item.id).length) {
        storage.push(item);
        localStorage.setItem("data", JSON.stringify(storage));
        setIsImgSaved(!isImgSaved);
    }
}

const SavedHandler = function (props) {
    return (
        <div className="buttons_wrapper">
            <input
                ref={props.states.checkBox}
                type="checkbox"
                id="check"
                className="saved"
                onClick={() => {
                    filter(props.states.isFiltered, props.states.setIsFiltered);
                }}
            />
            <label htmlFor="check">Saved</label>

            <button
                className="saved_img"
                onClick={() =>
                    clearStorage(props.states.isFiltered, props.states.setIsFiltered, props.states.reset, props.states.setReset, props.states.checkBox)
                }
            >
                Reset
            </button>
        </div>
    )
}

const GalleryContent = function (props) {
    return (
        <div className="grid_gallery">
            {props.imgs.map((el, ind) => {
                return (
                    <div
                        key={`index_${ind}`}
                        className="image_gallery"
                    >
                        <img
                            src={el.image}
                            alt="image_view"
                            onClick={() => openViewImg(
                                props.states.isViewImg,
                                props.states.setIsViewImg,
                                props.states.setImgItem,
                                el
                            )}
                        />
                        {!props.states.isFiltered && storage.filter((item) => item.id === el.id)
                            .length === 1 ? (
                            <div className="saved_mark">✅</div>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </div>
    )
}


const ImgView = function (props) {

    let index = props.imgs.findIndex((el) => el.id === props.states.imgItem.id);

    return (
        <div
            className="view_gallery"
            onClick={(e) => closeViewImg(props.states.isViewImg, props.states.setIsViewImg, e)}
        >
            <div className="img_container">
                <img
                    className="img_style"
                    src={props.states.imgItem.image}
                    alt="image"
                />

                <button
                    className="img_btn"
                    id="closeBtn"
                    onClick={() => {
                        props.states.setIsViewImg(!(props.states.isViewImg));
                        document.body.classList.toggle(
                            "scroll_disable"
                        );
                    }}
                ></button>


                {index > 0 &&
                    <button
                        className="img_btn"
                        id="leftBtn"
                        onClick={() => props.states.setImgItem(props.imgs[index - 1])}
                    ></button>
                }

                {index < props.imgs.length - 1 &&
                    <button
                        className="img_btn"
                        id="rightBtn"
                        onClick={() => props.states.setImgItem(props.imgs[index + 1])}
                    ></button>
                }

                <div className="img_description">
                    <p>{props.states.imgItem.name}</p>
                    <p>
                        {props.states.imgItem.city} - {props.states.imgItem.country}
                    </p>
                </div>

                <div className="buttons_wrapper">
                    <button
                        disabled={
                            storage.filter((el) => el.id === props.states.imgItem.id)
                                .length === 1
                        }
                        className="save_btn btn"
                        id="saveBtn"
                        onClick={() =>
                            saveToLocalStorage(
                                props.states.imgItem,
                                props.states.isImgSaved,
                                props.states.setIsImgSaved
                            )
                        }
                    >
                        {storage.filter((el) => el.id === props.states.imgItem.id)
                            .length === 1
                            ? "Saved"
                            : "Save"}
                    </button>

                    <button
                        className="cancel_btn btn"
                        id="cancelBtn"
                        onClick={() => {
                            props.states.setIsViewImg(!(props.states.isViewImg));
                            document.body.classList.toggle(
                                "scroll_disable"
                            );
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}


const GalleryMock = function () {
    const [data, setData] = useState([]),
        [isViewImg, setIsViewImg] = useState(false),
        [imgItem, setImgItem] = useState(""),
        [isFiltered, setIsFiltered] = useState(false),
        [isImgSaved, setIsImgSaved] = useState(false),
        [reset, setReset] = useState(false),
        checkBox = useRef();

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
            <SavedHandler states={{ isFiltered, setIsFiltered, reset, setReset, checkBox }} />
            <GalleryContent imgs={isFiltered ? storage : data} states={{ isViewImg, setIsViewImg, imgItem, setImgItem, isFiltered }} />
            {isViewImg && <ImgView imgs={isFiltered ? storage : data} states={{ isViewImg, setIsViewImg, imgItem, setImgItem, isImgSaved, setIsImgSaved }} />}
        </>
    );
};

export default GalleryMock;






// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const dataArr = await getData();
//             setData(dataArr);
//         } catch (e) {
//             console.error("Error fetching data", e);
//         }
//     };

//     const handlePress = (e) => {
//         if (!isViewRef.current) return;

//         switch (true) {
//             case e.key === "Enter":
//                 setIsViewImg(false);
//                 break;
//             case e.key === "ArrowRight": {
//                 let next = data.filter(
//                     (el) => el.id === String(+imgItem.id + 1)
//                 );
//                 setImgItem(next[0]);
//                 break;
//             }
//             case e.key === "ArrowLeft": {
//                 let prev = data.filter(
//                     (el) => el.id === String(+imgItem.id - 1)
//                 );
//                 setImgItem(prev[0]);
//                 break;
//             }

//             default:
//                 console.log("inavailable");
//         }
//     };

//     fetchData();

//     window.addEventListener("keydown", (e) => handlePress(e));

//     return () => {
//         window.removeEventListener("keydown", (e) =>
//             handlePress(e, isViewImg)
//         );
//     };
// }, []);