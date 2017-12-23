import React, { Component } from 'react';
import axios from 'axios';

import Game from './Game';

class Today extends Component {

    constructor () {
        super();

        this.state = {
            games: []
        }
    }

    getGames() {
        axios.get('https://raw.githubusercontent.com/JGrishey/hockeyelo-data/master/data/today.json')
            .then((response) => {
                this.setState({
                    games: response.data
                })
            }).catch((error) => {
                console.error(error);
            })
    }


    componentWillMount () {
        this.getGames();
    }

    render() {
        const myRe = /\s(\w+)$/
        let logos = {
            "Pittsburgh Penguins": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/1200px-Pittsburgh_Penguins_logo_%282016%29.svg.png",
            "Washington Capitals": "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Washington_Caps_Alternate.svg/1280px-Washington_Caps_Alternate.svg.png",
            "Nashville Predators": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Nashville_Predators_Logo_%282011%29.svg/1200px-Nashville_Predators_Logo_%282011%29.svg.png",
            "Anaheim Ducks": "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Anaheim_Ducks.svg/1200px-Anaheim_Ducks.svg.png",
            "New York Rangers": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/330px-New_York_Rangers.svg.png",
            "New York Islanders": "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NewYorkIslandersOld.svg/1024px-NewYorkIslandersOld.svg.png",
            "Arizona Coyotes": "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Arizona_Coyotes.svg/330px-Arizona_Coyotes.svg.png",
            "Vegas Golden Knights": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Vegas_Golden_Knights_logo.svg/756px-Vegas_Golden_Knights_logo.svg.png",
            "Boston Bruins": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/330px-Boston_Bruins.svg.png",
            "Buffalo Sabres": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Buffalo_Sabres_Logo.svg/512px-Buffalo_Sabres_Logo.svg.png",
            "Carolina Hurricanes": "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Carolina_Hurricanes.svg/330px-Carolina_Hurricanes.svg.png",
            "Chicago Blackhawks": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Chicago_Blackhawks_logo.svg/330px-Chicago_Blackhawks_logo.svg.png",
            "Colorado Avalanche": "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/330px-Colorado_Avalanche_logo.svg.png",
            "Dallas Stars": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Dallas_Stars_logo_%282013%29.svg/330px-Dallas_Stars_logo_%282013%29.svg.png",
            "Detroit Red Wings": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/330px-Detroit_Red_Wings_logo.svg.png",
            "Edmonton Oilers": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/330px-Logo_Edmonton_Oilers.svg.png",
            "Florida Panthers": "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Florida_Panthers_2016_logo.svg/330px-Florida_Panthers_2016_logo.svg.png",
            "Minnesota Wild": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Minnesota_Wild.svg/330px-Minnesota_Wild.svg.png",
            "New Jersey Devils": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/330px-New_Jersey_Devils_logo.svg.png",
            "Philadelphia Flyers": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Philadelphia_Flyers.svg/330px-Philadelphia_Flyers.svg.png",
            "St. Louis Blues": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/St._Louis_Blues_logo.svg/330px-St._Louis_Blues_logo.svg.png",
            "Tampa Bay Lightning": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/330px-Tampa_Bay_Lightning_Logo_2011.svg.png",
            "Toronto Maple Leafs": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/330px-Toronto_Maple_Leafs_2016_logo.svg.png",
            "Winnipeg Jets": "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/330px-Winnipeg_Jets_Logo_2011.svg.png",
            "San Jose Sharks": "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/330px-SanJoseSharksLogo.svg.png",
            "Columbus Blue Jackets": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/330px-Columbus_Blue_Jackets_logo.svg.png",
            "Ottawa Senators": "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Ottawa_Senators.svg/330px-Ottawa_Senators.svg.png",
            "Montr\u00e9al Canadiens": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/330px-Montreal_Canadiens.svg.png",
            "Los Angeles Kings": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Los_Angeles_Kings_Logo_%282011%29.svg/330px-Los_Angeles_Kings_Logo_%282011%29.svg.png",
            "Calgary Flames": "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Calgary_Flames_Logo.svg/330px-Calgary_Flames_Logo.svg.png",
            "Vancouver Canucks": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/330px-Vancouver_Canucks_logo.svg.png"
        }

        return (
            <div>
                <h2 className="text-center mt-2">Today's games</h2>
                <div className="flex-games">
                    {this.state.games.map((game) => {
                        const home = myRe.exec(game.homeTeam)[0]
                        const away = myRe.exec(game.awayTeam)[0]

                        return (
                            <Game
                                home={home}
                                away={away}
                                homeProb={game.homeProb}
                                awayProb={game.awayProb}
                                homeTeamLogo={logos[game.homeTeam]}
                                awayTeamLogo={logos[game.awayTeam]}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Today;