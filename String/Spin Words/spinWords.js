function spinWords(string) {
    let stringArray = string
        .split(" ")
        .map(element => {
            if (element.length >= 5) {
            return element.split("").reverse().join("");
            } else {
                return element;
            }
        })
        .join(" ");
    return stringArray;
}

export default spinWords;