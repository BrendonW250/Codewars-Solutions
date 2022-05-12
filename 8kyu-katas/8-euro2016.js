
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."




function uefaEuro2016(teams, scores){

    for (let i=0; i<teams.length; i++){
        for (let j=0; j<scores.length; j++){
            if (scores[j] > scores[j+1]){
                return 'At match ' + teams[i] + ' - ' + teams[i+1] + ', ' + teams[i] + ' won!'
            }else if(scores[j] < scores[j+1]){
                return 'At match ' + teams[i] + ' - ' + teams[i+1] + ', ' + teams[i+1] + ' won!'
            }else if(scores[j] == scores[j+1]){
                return 'At match ' + teams[i] + ' - ' + teams[i+1] + ', ' + 'teams played for draw.'
            }
        }
    }
}

// uefaEuro2016(['U.S.A', 'Jamaiaca'], [0,2])