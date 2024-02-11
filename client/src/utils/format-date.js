export function getFormattedCurrentDate() {
    // Get formatted date
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    let formattedMonth = ''

    switch (month) {
        case 0: formattedMonth = 'January'; break;
        case 1: formattedMonth = 'February'; break;
        case 2: formattedMonth = 'March'; break;
        case 3: formattedMonth = 'April'; break;
        case 4: formattedMonth = 'May'; break;
        case 5: formattedMonth = 'June'; break;
        case 6: formattedMonth = 'July'; break;
        case 7: formattedMonth = 'August'; break;
        case 8: formattedMonth = 'September'; break;
        case 9: formattedMonth = 'October'; break;
        case 10: formattedMonth = 'November'; break;
        case 11: formattedMonth = 'December'; break;
    }

    return `${formattedMonth} ${day}, ${year}`
}