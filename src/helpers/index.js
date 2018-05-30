export function stripNonAlphanumerics(str) {
    let primalArray = str.replace(/[^a-zA-Z0-9]/gi, ' ').split(' ')
    let cleanArray = primalArray.filter( word => {return word.length > 0})
    return cleanArray.join(' ')
}

export function capitalize(str) {
    let primalArray = str.split(' ')
    let capitalizeArray = primalArray.map(word => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    })
    return capitalizeArray.join(' ')
}

export function checkDoubleName(name, allNames) {
    let isExist = false
    for (let i=0; i<allNames.length; i++) {
        if (name === allNames[i]) {
            isExist = true
            return {title: name, isExist}
        }
    }
    return {title: null, isExist}
}