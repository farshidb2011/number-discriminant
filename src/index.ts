
const SEPRATE_REGEX = /\B(?=(\d{3})+(?!\d))/g;

type NumType = number | string;

class InputError extends Error {
    constructor(message?: string) {
        super(message ?? 'Input number is not valid');
        this.name = 'InputError';
    }
}

function numberDiscriminator(num: NumType, char = ",") {

    char = char || "";
    num = num || 0;

    const format = (str:string) => str.replace(SEPRATE_REGEX, char);

    if (typeof num !== "number" && typeof num !== "string") {
        throw new InputError();
    }

    if (isNaN(Number(num))) {
        throw new InputError();
    }

    const arr = String(num).split('.');

    return !arr[1] ? format(arr[0]) : format(arr[0]) + '.' + arr[1];
}

export {
    numberDiscriminator
}
