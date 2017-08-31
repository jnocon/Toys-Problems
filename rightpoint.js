// for rightpoint app

let rightpoint = => () {
    
    let numArr = []
    let count = 0

    while (count < 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            numArr.push('rightpoint')
            count++
        } else if (count % 5 === 0) {
            numArr.push('point')
            count++
        } else if (count %3 === 0) {
            numArr.push('right')
            count++
        } else {
            numArr.push(count)
            count++
        }
    }

    console.log(numArr.tostring())
}
