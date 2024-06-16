const GalleryContent = function (props) {
    console.log(props.storage);
    return (
        <div className="grid_gallery">
            {props.imgs.map((el, ind) => {
                return (
                    <div key={`index_${ind}`} className="image_gallery">
                        <img
                            src={el.image}
                            alt="image_view"
                            onClick={() => props.openViewImg(el)}
                        />
                        {!props.filter &&
                        props.storage.filter((item) => item.id === el.id)
                            .length === 1 ? (
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

export default GalleryContent;
