export const drawerWidth = 400;

const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
})

const longEnUSFormatterTime = new Intl.DateTimeFormat('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
    hour: 'numeric',
    minute: 'numeric'
})

export function formatDate(inputDate, showTime){
    let date = new Date(inputDate)
    const dayOfMonth = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    if (showTime) {
        return longEnUSFormatterTime.format(new Date(year, month, dayOfMonth, hours, minutes))
    } else {
        return longEnUSFormatter.format(new Date(year, month, dayOfMonth))
    }
}