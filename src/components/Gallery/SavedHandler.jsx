import PropTypes from "prop-types";

const SavedHandler = function ({
    handleClearStorage,
    filter,
    inputRef,
    checkboxText = "Checkbox",
    buttonText = "Button",
}) {
    return (
        <div className="buttons_wrapper">
            <div style={{ width: "85.91px" }}></div>
            <div className="check_wrapper">
                <input
                    ref={inputRef}
                    type="checkbox"
                    id="check"
                    className="saved"
                    onClick={() => filter()}
                />
                <label htmlFor="check">{checkboxText}</label>
            </div>
            <button className="saved_img" onClick={() => handleClearStorage()}>
                {buttonText}
            </button>
        </div>
    );
};

SavedHandler.propTypes = {
    handleClearStorage: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
    checkboxText: PropTypes.string,
    buttonText: PropTypes.string,
};

export default SavedHandler;
