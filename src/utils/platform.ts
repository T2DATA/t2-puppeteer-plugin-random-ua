import { sample } from "../utils/helper"

const windows = () => {
    const model = "Windows NT "
    const etc = ["WOW64", "Win64; x64"]
    const ver = ["10.0", "6." + sample(["0", "1", "2", "3"])]
    let version = sample(ver)
    if (version === "10.0" || Boolean(sample([0, 1]))) {
        version += "; " + sample(etc)
    }
    return model + version
}

const macos = () => {
    const model = "Macintosh; Intel Mac OS X 10_"
    let majorVersion = sample([10, 11, 12, 13, 14])
    let minorVersion
    if (majorVersion !== 14) {
        minorVersion = sample([1, 2, 3, 4, 5, 6])
    } else {
        minorVersion = sample([1, 2])
    }
    return `${model}${majorVersion}_${minorVersion}`
}

const linux = () => {
    const ver = ["x86_64", "i686", "i686 on x86_64"]
    const model = "X11; Linux "
    return model + sample(ver)
}

const getRandomOs = () => {
    const os = [windows(), macos(), linux()]
    return sample(os)
}

export default getRandomOs
