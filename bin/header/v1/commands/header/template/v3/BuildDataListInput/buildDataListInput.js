export const buildDataListInput = ({
    inLabel = "",
    inName = "",
    inList = "",
    inSource = "",
    inValue = "------"
} = {}) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center space-x-4";

    const label = document.createElement("label");
    label.className = "w-24 text-sm font-medium";
    label.textContent = inLabel;

    const input = document.createElement("input");
    input.className = "flex-1 border rounded px-3 py-2";
    input.name = inName;
    input.setAttribute("list", inList);
    input.dataset.dataListFillName = inName;
    input.dataset.dataListSource = inSource;
    input.value = inValue;

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};
