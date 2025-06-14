
export function shuffle(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var random = Math.floor(Math.random() * i);
        return [array[i], array[random]] = [array[random], array[i]];
    }
}