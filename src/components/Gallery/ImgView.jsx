const ImgView = function (props) {
    let index = props.imgs.findIndex((el) => el.id === props.imgItem.id);

    return (
        <div className="view_gallery" onClick={(e) => props.closeViewImg(e)}>
            <div className="img_container">
                <img
                    className="img_style"
                    src={props.imgItem.image}
                    alt="image"
                />

                <button
                    className="img_btn"
                    id="closeBtn"
                    onClick={() => {
                        props.handleIsView();
                        document.body.classList.toggle("scroll_disable");
                    }}
                ></button>

                {index > 0 && (
                    <button
                        className="img_btn"
                        id="leftBtn"
                        onClick={() =>
                            props.handleImageItem(props.imgs[index - 1])
                        }
                    ></button>
                )}

                {index < props.imgs.length - 1 && (
                    <button
                        className="img_btn"
                        id="rightBtn"
                        onClick={() =>
                            props.handleImageItem(props.imgs[index + 1])
                        }
                    ></button>
                )}

                <div className="img_description">
                    <p>{props.imgItem.name}</p>
                    <p>
                        {props.imgItem.city} - {props.imgItem.country}
                    </p>
                </div>

                <div className="buttons_wrapper">
                    <button
                        disabled={
                            props.storage.filter(
                                (el) => el.id === props.imgItem.id
                            ).length === 1
                        }
                        className="save_btn btn"
                        id="saveBtn"
                        onClick={() => props.saveToLocalStorage()}
                    >
                        {props.storage.filter(
                            (el) => el.id === props.imgItem.id
                        ).length === 1
                            ? "Saved"
                            : "Save"}
                    </button>

                    <button
                        className="cancel_btn btn"
                        id="cancelBtn"
                        onClick={() => {
                            props.handleIsView();
                            document.body.classList.toggle("scroll_disable");
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImgView;
