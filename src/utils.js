export const getImageUrl = (path) => {
    const url = new URL(`assets/${path}`, import.meta.url).href;
    console.log(url);
    return url;
}