function pitagoras(a, b, c) {
    let x = [a, b, c];
    x.sort((p, q) => p - q);
    if (x[0] * x[0] + x[1] * x[1] === x[2] * x[2]) {
        console.log("Tak, to trójka pitagorejska");
    } else {
        console.log("Nie, to nie trójka pitagorejska");
    }
}

function petla(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let wiersz = "";
        for (let j = 1; j <= n; j++) {
            wiersz += (i * j) + " ";
        }
        console.log(wiersz.trim());
    }
}

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function choinka(h) {
    for (let i = 1; i <= h; i++) {
        let wiersz = "";
        for (let j = 1; j <= i; j++) {
            wiersz += "*";
        }
        console.log(wiersz);
    }
}

function choinkaNoca(h) {
    let szerokosc = 2 * (h - 1) - 1;
    console.log("*".repeat(szerokosc));
    for (let i = h - 2; i >= 1; i--) {
        let spacje = szerokosc - 2 * i;
        console.log("*".repeat(i) + " ".repeat(spacje) + "*".repeat(i));
    }
    console.log("*".repeat(szerokosc));
}

function poleProstokat(a, b) {
    return a * b;
}

function poleTrapez(a, b, h) {
    return (a + b) * h / 2;
}

function poleRownoleglobok(a, h) {
    return a * h;
}

function poleTrojkat(a, h) {
    return a * h / 2;
}

function pola(figura, p1, p2, p3) {
    let wynik;
    switch (figura) {
        case "prostokat":
            wynik = poleProstokat(p1, p2);
            break;
        case "trapez":
            wynik = poleTrapez(p1, p2, p3);
            break;
        case "rownoleglobok":
            wynik = poleRownoleglobok(p1, p2);
            break;
        case "trojkat":
            wynik = poleTrojkat(p1, p2);
            break;
        default:
            wynik = "Nie znam takiej figury";
    }
    console.log(wynik);
}