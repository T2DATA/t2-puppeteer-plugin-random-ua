import { sample } from "./helper"
import { chromeVersions, firefoxVersions, operaVersion } from "../constant"

const chrome = () => {
    const model =
        "Mozilla/5.0 (%PLAT%) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%VER% Safari/537.36"
    return model.replace("%VER%", sample(chromeVersions))
}

const firefox = () => {
    const model = "Mozilla/5.0 (%PLAT%; rv:%VER%) Gecko/20100101 Firefox/%VER%"
    return model.replace("%VER%", sample(firefoxVersions))
}

const opera = () => {
    const model =
        "Mozilla/5.0 (%PLAT%) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%CVER% Safari/537.36 OPR/%OVER%"
    return model
        .replace("%OVER%", sample(operaVersion))
        .replace("%CVER%", sample(chromeVersions))
}

const getRandomBrowser = () => {
    const os = [chrome(), firefox(), opera()]
    return sample(os)
}

export default getRandomBrowser
