function Bubble() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow", true); // Color update with white border

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red", true); // Color update with white border
                div_update(divs[j + 1], div_sizes[j + 1], "red", true); // Color update with white border

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red", true); // Height update with white border
                div_update(divs[j + 1], div_sizes[j + 1], "red", true); // Height update with white border
            }
            div_update(divs[j], div_sizes[j], "", true); // Color update with white border
        }
        div_update(divs[j], div_sizes[j], "green", true); // Color update with white border
    }
    div_update(divs[0], div_sizes[0], "green", true); // Color update with white border

    enable_buttons();
}
