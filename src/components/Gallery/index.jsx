import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import SavedHandler from "./SavedHandler";
import GalleryContent from "./GalleryContent";
import ImgView from "./ImgView";
import { saveToLocalStorage, clearStorage } from "../../utils";
import { openViewImg, closeViewImg } from "../../utils";

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

const GalleryMock = function () {
    const [data, setData] = useState([]),
        [isViewImg, setIsViewImg] = useState(false),
        [imgItem, setImgItem] = useState(""),
        [isFiltered, setIsFiltered] = useState(false),
        [isImgSaved, setIsImgSaved] = useState(false),
        [reset, setReset] = useState(false),
        [storage, setStorage] = useState(
            JSON.parse(localStorage.getItem("data")) ?? []
        ),
        checkBox = useRef();

    async function getData() {
        const res = await axios(URL + "gallery");
        return res.data;
    }

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
            <SavedHandler
                handleClearStorage={() =>
                    clearStorage(
                        isFiltered,
                        setIsFiltered,
                        reset,
                        setReset,
                        checkBox,
                        storage,
                        setStorage
                    )
                }
                filter={() => setIsFiltered(!isFiltered)}
                inputRef={checkBox}
                checkboxText={"SAVED"}
                buttonText={"CLEAR GALLERY"}
            />

            <GalleryContent
                openViewImg={(e) =>
                    openViewImg(isViewImg, setIsViewImg, setImgItem, e)
                }
                filter={isFiltered}
                imgs={isFiltered ? storage : data}
                storage={storage}
            />
            {isViewImg && (
                <ImgView
                    closeViewImg={(e) =>
                        closeViewImg(isViewImg, setIsViewImg, e)
                    }
                    saveToLocalStorage={() =>
                        saveToLocalStorage(
                            imgItem,
                            isImgSaved,
                            setIsImgSaved,
                            storage,
                            setStorage
                        )
                    }
                    handleImageItem={(item) => setImgItem(item)}
                    handleIsView={() => setIsViewImg(!isViewImg)}
                    storage={storage}
                    imgs={isFiltered ? storage : data}
                    imgItem={imgItem}
                />
            )}
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
