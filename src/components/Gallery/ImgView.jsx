import PropTypes from 'prop-types';

const ImgView = function ({ closeViewImg, saveToLocalStorage, handleImageItem, handleIsView, storage, imgs, imgItem }) {
    let index = imgs.findIndex((el) => el.id === imgItem.id);

    return (
        <div className="view_gallery" onClick={(e) => closeViewImg(e)}>
            <div className="img_container">
                <img
                    className="img_style"
                    src={imgItem.image}
                    alt="image"
                />

                <button
                    className="img_btn"
                    id="closeBtn"
                    onClick={() => {
                        handleIsView();
                        document.body.classList.toggle("scroll_disable");
                    }}
                ></button>

                {index > 0 && (
                    <button
                        className="img_btn"
                        id="leftBtn"
                        onClick={() =>
                            handleImageItem(imgs[index - 1])
                        }
                    ></button>
                )}

                {index < imgs.length - 1 && (
                    <button
                        className="img_btn"
                        id="rightBtn"
                        onClick={() =>
                            handleImageItem(imgs[index + 1])
                        }
                    ></button>
                )}

                <div className="img_description">
                    <p>{imgItem.name}</p>
                    <p>
                        {imgItem.city} - {imgItem.country}
                    </p>
                </div>

                <div className="buttons_wrapper">
                    <button
                        disabled={
                            storage.filter(
                                (el) => el.id === imgItem.id
                            ).length === 1
                        }
                        className="save_btn btn"
                        id="saveBtn"
                        onClick={() => saveToLocalStorage()}
                    >
                        {storage.filter(
                            (el) => el.id === imgItem.id
                        ).length === 1
                            ? "Saved"
                            : "Save"}
                    </button>

                    <button
                        className="cancel_btn btn"
                        id="cancelBtn"
                        onClick={() => {
                            handleIsView();
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

ImgView.propTypes = {
    closeViewImg: PropTypes.func.isRequired,
    saveToLocalStorage: PropTypes.func.isRequired,
    handleImageItem: PropTypes.func.isRequired,
    handleIsView: PropTypes.func.isRequired,
    storage: PropTypes.array.isRequired,
    imgs: PropTypes.array.isRequired,
    imgItem: PropTypes.object.isRequired
}

export default ImgView;