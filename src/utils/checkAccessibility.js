export default async function checkAccessibility(url) {
    const res = await fetch(
        url,
        {
            method: 'HEAD',
        }
    );

    return res.ok;
}