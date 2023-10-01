function tabuada() {
    let num = document.getElementById("valtab")
    let sel = document.getElementById("seltab")
        if (num.value.length == 0 ) {
            window.alert("Something went wrong, please check the number!")
        } else {
            sel.innerHTML = ""
            let n = Number(num.value)
                for (let i = 1; i <= 10; i++) {
                    let item = document.createElement("option")
                    item.textContent = `${n} x ${i} = ${n*i}`
                    sel.appendChild(item)
                }
        }
}
