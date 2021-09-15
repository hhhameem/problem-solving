function mutation(arr) {
    let bool;
    for (let index = 0; index < arr[1].length; index++) {
        if (arr[0].toLowerCase().indexOf(arr[1][index].toLowerCase()) >= 0) {
            bool = true;
        } else {
            return false;
        }
    }
    return bool;
}


mutation(["hello", "hey"]);