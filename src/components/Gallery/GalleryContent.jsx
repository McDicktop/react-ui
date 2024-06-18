import PropTypes from "prop-types";

const GalleryContent = function ({ openViewImg, filter, imgs, storage }) {
    return (
        <div className="grid_gallery">
            {imgs.map((el, ind) => {
                return (
                    <div key={`index_${ind}`} className="image_gallery">
                        <img
                            src={el.image}
                            alt="image_view"
                            onClick={() => openViewImg(el)}
                        />
                        {!filter &&
                        storage.filter((item) => item.id === el.id).length ===
                            1 ? (
                            <div className="saved_mark"></div>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

GalleryContent.propTypes = {
    openViewImg: PropTypes.func.isRequired,
    filter: PropTypes.bool.isRequired,
    imgs: PropTypes.array.isRequired,
    storage: PropTypes.array.isRequired,
};

export default GalleryContent;
