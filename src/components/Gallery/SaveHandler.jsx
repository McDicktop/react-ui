const SavedHandler = function (props) {
    return (
        <div className="buttons_wrapper">
            <input
                ref={props.inputRef}
                type="checkbox"
                id="check"
                className="saved"
                onClick={() => props.filter()}
            />
            <label htmlFor="check">{props.checkboxText}</label>
            <button
                className="saved_img"
                onClick={() => props.handleClearStorage()}
            >
                {props.buttonText}
            </button>
        </div>
    );
};

export default SavedHandler;
