import { buildDataListInput } from "../../BuildDataListInput/buildDataListInput.js";

class KsDataListInput extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        const { wrapper, input } = buildDataListInput({
            inLabel: this.getAttribute("label") || "",
            inName: this.getAttribute("name") || "",
            inList: this.getAttribute("list") || "",
            inSource: this.getAttribute("source") || "",
            inValue: this.getAttribute("ksInValue") || "------"
        });

        input.addEventListener("change", event => {
            this.onChange?.(event.target.value);
        });

        this.appendChild(wrapper);
    }
}

customElements.define("ks-datalist-input", KsDataListInput);

export default KsDataListInput;
