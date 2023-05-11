export const returnState = (state) => {
    if(state){
        if(state === "WestVirginia") return "West Virginia"
        else if(state === "SouthDakota")return "South Dakota"
        else if(state === "SouthCarolina")return "South Carolina"
        else if(state === "RhodeIsland")return "Rhode Island"
        else if(state === "NorthDakota")return "North Dakota"
        else if(state === "NorthCarolina")return "North Carolina"
        else if(state === "NewYork")return "New York"
        else if(state === "NewMexico")return "New Mexico"
        else if(state === "NewJersey")return "New Jersey"
        else if(state === "NewHampshire")return "New Hampshire"
        else return state
    }

}