
import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Irene",
            url:"https://i.pinimg.com/originals/35/d3/ef/35d3ef8311e88ea0e75038ca895e18fb.jpg"
        },  
        {
            name: "Sunmi",
            url:"https://i.pinimg.com/originals/70/16/d3/7016d31990510295c9339e87996f8cc4.jpg"
        }
    ])

    const swiped = (direction,nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={CharacterData.name}
                    preventSwipe={"up","down"}
                    onSwipe={ (dir) => swiped(dir,person.name) }
                    onCardLeftScreen = {() => outOfFrame(person.name)}>
                    <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                    >
                        
                <h3>{person.name}</h3>
                    </div>
                    </TinderCard>

                    
                ))}
            </div>

            {/* {people.map((person) => (
                <h1>{person.name}</h1>
            ))} */}
        </div>
    )
}

export default TinderCards
