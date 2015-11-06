
if (!Date.unow) {
    (function () {
        var uniq = 0;
        Date.unow = function () {
            uniq++;
            return Date.now() + (uniq % 5000);
        };
    })();
}
