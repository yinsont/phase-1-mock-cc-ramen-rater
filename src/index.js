// write your code here
fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        renderRamen(data)
    })


body = document.querySelector('body')
// console.log(body)

function renderRamen(ramens){
    ramens.forEach(function(ramen){ //each individual ramen
        // console.log(ramen)
        //for each ramen, put a picture of it on the menu
        let menu = document.querySelector('#ramen-menu')
        // console.log(menu)
        let img = document.createElement('img')
        img.src = ramen.image
        img.addEventListener('click', ramenInfo = () => {
            // console.log(ramen.name)
            // let ramenDetails = document.querySelector('#ramen-detail')
            // console.log(ramenDetails)
            document.querySelector('.detail-image').src = ramen.image
            document.querySelector('.name').textContent = ramen.name
            document.querySelector('.restaurant').textContent = ramen.restaurant
            document.querySelector('#rating-display').textContent = ramen.rating
            document.querySelector('#comment-display').textContent = ramen.comment
           
        })

        
        menu.append(img)
        // console.log(menu)
    })
let form = document.querySelector('#new-ramen')
    console.log(form)
    form.addEventListener('submit', newRamen = (e) => {
        e.preventDefault()
        console.log('it works')
        // console.log(e.target.name.value)
        let ramen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        }
        renderRamen(ramen)
    })
}
