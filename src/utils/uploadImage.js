export default async function uploadImage(image) {
    const data = new FormData();

    data.append('file', image);
    data.append('upload_preset', 'bxmfzgbg');
    const res = await fetch(
        'https://api.cloudinary.com/v1_1/ilia844/image/upload',
        {
            method: 'POST',
            body: data,
        }
    );
    const file = await res.json();

    window.localStorage.setItem('image', file.secure_url);
    window.localStorage.setItem('notesList', JSON.stringify([]));

    return file.secure_url;
};