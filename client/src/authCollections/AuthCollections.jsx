import React from 'react'
import './AuthCollections.css'
import Button from '@mui/material/Button';

const categories = [
    {
        id: 1,
        save: false,
        title: 'חגי ישראל',
        img: "https://media.istockphoto.com/photos/mature-woman-with-cat-and-dog-at-home-hugging-and-cuddling-animals-picture-id1275350376?b=1&k=20&m=1275350376&s=170667a&w=0&h=MLelUDjcoMmJMUKHBFRfVhtUXE1Ydpg9YMdfoJZ-St8="
    },
    {
        id: 2,
        save: false,
        title: 'יום השואה והגבורה',
        img: "https://media.istockphoto.com/photos/super-cute-dog-and-cat-best-friends-picture-id1299012664?b=1&k=20&m=1299012664&s=170667a&w=0&h=zqCl3zz7-qNFffEqaDKcCSkit-EF0MvsfpJu84jrK64="
    },
    {
        id: 3,
        save: false,
        title: 'תיעוד גיבורה',
        img: "https://media.istockphoto.com/photos/best-friends-picture-id583689556?b=1&k=20&m=583689556&s=170667a&w=0&h=LOb2nhhRDd0Tt3lJADEhuXjNWohmEfXUK0XlJPNfO7c="
    },
    {
        id: 4,
        save: false,
        title: 'משלחות לפולין',
        img: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },
    {
        id: 5,
        save: false,
        title: 'אחר (אוספת נושא חדש)',
        img: "https://images.unsplash.com/photo-1628214460051-cb2102d028a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 6,
        save: false,
        title: 'Hero 6',
        img: "https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc="
    },
    {
        id: 7,
        save: false,
        title: 'Hero 7',
        img: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },

]
function AuthCollections() {

    const handleSelect = (id) => {
        console.log('category.id', id)
    }

    return (
        <div className="AuthCollections">
            <table>
                <div className='navigation'>
                    <Button variant="text">Text</Button>
                </div>
                {categories.map(category => (
                    <div
                        onClick={() => handleSelect(category.id)}
                        key={category.id}
                        className="categoryCard"
                    >
                        <img className="titleImg" src={category.img} alt={category.title} />
                        <div className="titleText">
                            <h6>{category.title}</h6>
                        </div>

                    </div>
                ))}
            </table>
        </div>
    )
}

export default AuthCollections
