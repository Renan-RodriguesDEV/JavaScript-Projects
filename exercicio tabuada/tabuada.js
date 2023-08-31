function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("tab")
    if (num.value.length == 0) {
        window.alert('nao fode')
    }
    else {
        // metedo while
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = " "

        while (c <= 10) {
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}

