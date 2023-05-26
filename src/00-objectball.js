function gameObject(){
    return {home:{
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez": {
                "number" : 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
            "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            },
        }
    },
    away:{
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15, 
                "slamDunks": 10,
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            },
        }

}
}
}
function numPointsScored(playersName){
//     if (gameObject()["home"]["players"][playersName]){
//         return gameObject()["home"]["players"][playersName]["points"];
//     }
// else {return gameObject()["away"]["players"][playersName]["points"];}
return allPlayers()[playersName]["points"]

}
function shoeSize(playersName){
//     if (gameObject()["home"]["players"][playersName]){
//         return gameObject()["home"]["players"][playersName]["shoe"];
//     }
// else {return gameObject()["away"]["players"][playersName]["shoe"];}
return allPlayers()[playersName]["shoe"]
}
function teamColors(teamName){
    if (gameObject()["home"]["teamName"] === teamName){
        return gameObject()["home"]["colors"];
    }
else {return gameObject()["away"]["colors"];}
}
function teamNames(){
   const homeTeam = gameObject()["home"]["teamName"]
   const awayTeam = gameObject()["away"]["teamName"]
   const bothTeams = [homeTeam, awayTeam]
   return bothTeams
}
function playerNumbers(teamName){
    const tempEmpty = []
    if (gameObject()["home"]["teamName"] === teamName){
        for (const key in gameObject()["home"]["players"]){
            tempEmpty.push(gameObject()["home"]["players"][key]["number"])
        }
    }
    else 
        for (const key in gameObject()["away"]["players"]){
            tempEmpty.push(gameObject()["away"]["players"][key]["number"])
        }
    console.log(tempEmpty)
}
// console.log (playerNumbers("Charlotte Hornets"))
function allPlayers(){
    const homePlayers = gameObject()["home"]["players"]
    const awayPlayers = gameObject()["away"]["players"]
    return {...homePlayers, ...awayPlayers}
}

function playerStats(playersName){
// debugger
return allPlayers()[playersName]
}
function bigShoeRebounds(){
    let biggestShoe = 0
    let rebound = 0
   for (const playerName in allPlayers()){
    if (allPlayers()[playerName]["shoe"] > biggestShoe){
        biggestShoe = allPlayers()[playerName]["shoe"]
        rebound = allPlayers()[playerName]["rebounds"]
    // console.log (allPlayers()[playerName]["shoe"])
   }
}
return rebound 
}
function mostPointsScored(){
    let point = 0 
    for (const playerName in allPlayers()){
        if (allPlayers()[playerName]["points"] > point){
            point = allPlayers()[playerName]["points"]
        }
    }
    return point
}
function homeTeamPlayers(){
    const homeTeam = gameObject()["home"]["players"]
    return homeTeam
}
function awayTeamPlayers(){
    const awayTeam = gameObject()["away"]["players"]
    return awayTeam
}

function winningTeam(){
    let homePoints = 0 
    let awayPoints = 0
    for (const playerName in homeTeamPlayers()){
      homePoints += homeTeamPlayers()[playerName]["points"]
    }
    for (const playerName in awayTeamPlayers()){
        awayPoints += awayTeamPlayers()[playerName]["points"]
    }
    if (homePoints > awayPoints){
        return gameObject()["home"]["teamName"]
    } else {
        return gameObject()["away"]["teamName"]
    }
}
function playerWithLongestName(){
    let playerNameLength = 0
    let longestName
    for (const playerName in allPlayers()){
      if (playerName.length >= playerNameLength){
        longestName = playerName 
      }
    }
    return longestName 
}
function doesLongNameStealATon(){
    let steals = 0
    for (const playerName in allPlayers()){
        if (allPlayers()[playerName]["steals"] > steals){
        steals = allPlayers()[playerName]["steals"]
        }
    }
    if (steals == allPlayers()[playerWithLongestName()]["steals"]){
        return true
    } else return false 
}
