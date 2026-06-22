// src/header.js
import initHeader from "../bin/header/v1/commands/header/template/v2/initHeader.js";

(async () => {
    window.KSHeaderVersion = "v1.2";

    window.KSHeader = initHeader;
})();