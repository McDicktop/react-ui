import { useRef } from "react";

const ComponentRef = function () {
    const inputref = useRef();

    function handleChange() {
        console.log(inputref.current.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="name"
                ref={inputref}
                onChange={(e) => {
                    handleChange();
                }}
            />
        </>
    );
};

export default ComponentRef;
