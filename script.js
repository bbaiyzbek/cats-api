const image = document.querySelector('.image')
const likeBtn = document.querySelector('.like')
const dislike = document.querySelector('.dislike')


async function fetchHandle() {
    try {
        const response = await fetch(' https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        image.src = data[0].url;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

likeBtn.addEventListener('click', () => {
    fetchHandle()
})

dislike.addEventListener('click', () => {
    fetchHandle()
})
