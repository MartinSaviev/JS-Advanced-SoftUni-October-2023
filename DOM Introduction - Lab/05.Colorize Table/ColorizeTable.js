function colorize() {

    let colorTable = document.querySelectorAll('table tr:nth-child(2n+0)')
    
    for (const element of colorTable) {
        element.style.backgroundColor = 'Teal'
    }
    
}