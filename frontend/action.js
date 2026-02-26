import {renderJoinCards} from "./dom.js";

export function getCard(type) {
    fetch('http://localhost:3050/join/'+type).then(response =>{

        return  response.json()
    }).then(data => {
        console.log( data)
        renderJoinCards(data);
    })
}