var easy = {};

easy.eval = function (str) {
    arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (typeof easy.action[arr[i]] !== 'undefined') {
            console.log(easy.action[arr[i]](arr, i));
        }
    }
};

easy.action = {};

easy.action.is = function (arr, i) {
    if (typeof arr[i-1] !== 'undefined') {
        return window[arr[i-1]] = arr[i+i];
    } else {
        return window[arr[i+1]] === arr[i+2];
    }
};

easy.action.are = easy.action.is;
