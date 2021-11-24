function bouncer(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (!Boolean(arr[index])) {
            arr.splice(index, 1);
            index--;
        }
    }

    return arr;
}

bouncer([7, "ate", "", false, 9]);