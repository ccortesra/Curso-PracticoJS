
function StringToList(string) {
    let new_array = string.trim().split(" ")
    for (i = 0; i < new_array.length;i++) {
        new_array[i] = parseInt(new_array[i])
    }
    return new_array
}

// Calculate Mean ---------------------------------------------------------------------

function Mean(array) {
    let sumList = 0
    const arraylength = array.length
    for (i = 0; i < arraylength;i++) {
        sumList += array[i]
    }
    const mean = sumList/arraylength
    return mean
}

function CalculateMean() {
    const input = document.getElementById("ArrayNumbers");
    const result = document.getElementById("MeanResult");

    const value = input.value;
    const array = StringToList(value);
    const mean = Mean(array);
    result.innerHTML = `${mean}`;
}
 

// ------------------------------------------------------------------------------------------
// Calculate Median -------------------------------------------------------------------------

function Median(array) {
    array.sort(function(a,b) {return a - b});
    const long = array.length
    if ((long % 2) == 0) {
        median = (array[parseInt(long/2)] + array[parseInt(long/2)-1])/2
        return median   
    }
    else {
        return array[parseInt(long/2)]
    }
}

function CalculateMedian() {
    const input = document.getElementById("ArrayNumbers2");
    const result = document.getElementById("MedianResult");

    const value = input.value;
    const array = StringToList(value);
    const median = Median(array);
    result.innerHTML = `${median}`;
}
 

// ------------------------------------------------------------------------------------------
// Calculate Mode ---------------------------------------------------------------------------

function Mode(array) {
    const count = {};
    array.map(
        function (elemento){
            if (count[elemento]){
                count[elemento] += 1;
            } else {
                count[elemento] = 1;
            }
        }
    )

    const count_list = Object.entries(count);
    count_list.sort(
        function (a,b) {
            return a[1] - b[1];
        }
    )

    return count_list[(count_list.length) - 1][0];
}

function CalculateMode() {
    const input = document.getElementById("ArrayNumbers3");
    const result = document.getElementById("ModeResult");
    const value = input.value;
    const array = StringToList(value);
    const mode = Mode(array);
    result.innerHTML = `${mode}`;
}