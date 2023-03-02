const sorting = (arr) => {
    for (i = 0; i < arr.length; i++){
        let result = arr.map((x,i) => x * (i +1));
        result.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
});
        return result
    }
}

let first = [23, 2, 3, 4, 5]

console.log(sorting(first))