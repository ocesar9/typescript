export default function contador(arr) {
    return arr.reduce((acc, atual) => {
        if (acc[atual]) {
            acc[atual] += 1;
        }
        else {
            acc[atual] = 1;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=contador.js.map