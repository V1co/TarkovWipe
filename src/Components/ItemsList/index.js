import { Container } from './styles/itemslist'
import { React, useState } from 'react'
import Item from '../Item/index'
import earlyQuestsData from "../../earlyQuestsData.json"
import allQuestsData from "../../allQuestsData.json"
import { useQuantity } from "../../Hooks/useQuantity";
import Counter from "../Counter"

export default function ItemsList() {
    const quantity = useQuantity;
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            {allQuestsData.map(item => {
                console.log(`compare: ${isCompleted}`)
                    return(
                        <>
                            <Container isCompleted={isCompleted}>
                                <Item>
                                    <Item.ImageWrapper>
                                        <Item.Image src={item.img}/>
                                    </Item.ImageWrapper>
                                    <Item.Tracker>
                                        <Counter quantity={quantity} neededValue={item.quest} setIsCompleted={setIsCompleted} />
                                    </Item.Tracker>
                                </Item>
                            </Container> 
                        </>
                    )
                })
            }
        </div>
    )
}

/*

            <Container>
                <Item>
                    <Item.Image src={}/>
                    <Item.Tracker>
                        <Item.Button></Item.Button>
                        <Item.Button></Item.Button>
                    </Item.Tracker>
                </Item>
            </Container>



<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {
        QuestData.map(q =>
        <div style={{display: "flex", flexDirection: "column", margin: "10px", backgroundColor: "#0a0a0a", justifyContent: "center", width: "120px", height: "200px"}}>
          <div style={{maxWidth: "64px", alignSelf: "center", marginBottom: "10px"}}>
            {<img src={q.icon} style={{width:"100%", maxHeight:"130px"}} alt={q.unid}/>}
          </div>
          <div className="buttons">
            <Counter quantity={quantity} neededValue={q.quest} />
          </div>
        </div>
        )
      }
*/