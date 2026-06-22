import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/header.js",
            name: "KSVerticalComp",
            formats: ["umd"],
            fileName: () => `${templateVersion}/KSVerticalComp.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};