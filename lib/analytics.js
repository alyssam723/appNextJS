export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-2Y5GBDD286', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}