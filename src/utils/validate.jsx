// export const validateEmail = (value) => /^.+@.+\..+$/.test(value);

// export const validateName = (value) => {
//     if (value.length === 0) return false;

//     return value
//         .split("")
//         .every((char) => /[a-zA-Z0-9-'`]/.test(char) === true);
// };

// export const validatePass = (value) => {
//     const contLetters = /^.*[a-z]+.*$/,
//         contCapitalLetters = /^.*[A-Z]+.*$/,
//         contDigit = /^.*[0-9]+.*$/,
//         minimum8Chars = /^.{8,}$/;

//     if (
//         contLetters.test(value) &&
//         contCapitalLetters.test(value) &&
//         contDigit.test(value) &&
//         minimum8Chars.test(value)
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// };

export function validateEmail(arg) {
    return typeof arg === "string" && /^.+@.+\..+$/.test(arg);
}

export function validateName(arg) {
    return typeof arg === "string" && /^[a-zA-Zа-яА-Я'-]+$/.test(arg);
}

export function validatePass(arg) {
    const letters = /^.*[a-z]+.*$/,
        capitalLetters = /^.*[A-Z]+.*$/,
        digit = /^.*[0-9]+.*$/,
        min8Chars = /^.{8,20}$/;

    // if (
    //     letters.test(arg) &&
    //     capitalLetters.test(arg) &&
    //     digit.test(arg) &&
    //     min8Chars.test(arg)
    // ) {
    //     return true;
    // } else {
    //     return false;
    // }

    return (
        letters.test(arg) &&
        capitalLetters.test(arg) &&
        digit.test(arg) &&
        min8Chars.test(arg)
    );
}
