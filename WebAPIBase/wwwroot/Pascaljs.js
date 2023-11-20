window.onload = function () {
    console.log("Oldal betöltve...");
    initPascal(10);
}

var initPascal = function (n) {

    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < n; sor++) {

        var ujsordiv = document.createElement('div');
        ujsordiv.classList.add('sor');
        pascalDiv.appendChild(ujsordiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            let a = faktor(sor) / (faktor(oszlop) * faktor(sor-oszlop));
            ujElemDiv.innerText = a;
            ujsordiv.appendChild(ujElemDiv);
        }
    }
}

var faktor = function (n) {

    er = 1;

    for (var i = 1; i <= n; i++) {
        er *= i;
    }

    return er;
}