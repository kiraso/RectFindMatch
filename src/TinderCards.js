import { SwipeableDrawer } from '@material-ui/core'
import React,{useState} from 'react'
import "./TinderCards.css"
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon musk",
            url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fbusiness-figure%2Felon-musk&psig=AOvVaw1Aovh-cu2QVCfnkMFXqktW&ust=1604999186740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiMqYKO9ewCFQAAAAAdAAAAABAM"
        },  
        {
            name: "Jeff Bezoz",
            url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffortune.com%2F2020%2F02%2F05%2Fjeff-bezos-amazon-stock-net-worth-2%2F&psig=AOvVaw1Ra5BWTJc89-cyxIuvZaWb&ust=1604999716763000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiJ5f-P9ewCFQAAAAAdAAAAABAD"
        }
    ])
    return (
        <div className="tinderCards">
            <div className="tinderCard__cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={CharacterData.name}
                    preventSwipe={"up","down"}
                    onSwipe={ (div) => swiped(dir,character.name) }
                    onCardLeftScreen = {() => outOfFrame(character.name)}>
                      
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
