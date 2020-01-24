import React, { Component } from "react";
// json data
import cards from "./components/TileCard/cards.json";
// game board
import GameBoard from "./components/GameBoard";
// header
import Title from "./components/Title";    
import Header from "./components/Header"                                           
// tiles
import TileCard from "./components/TileCard";
// footer



//--------------------------------------
  
   //--------------------------------------
    class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
          cards: cards,
          topScore: 0,
          score: 0,
        };
        this.checkIfClicked = this.checkIfClicked.bind(this);
      }


      checkIfClicked = (id) => {
        let clickedCard = this.state.cards.filter(card => card.id === id)[0];
        let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
        if(!clickedCard.clicked){
          clickedCard.clicked = true;
          cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
          this.setState({
            cards: cardsCopy,
            score: this.state.score + 1,
            topScore: (this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore),
          });
        }
        else {
      
          let resetCardsCopy = cardsCopy.map((card) => {
            return {
              id: card.id,
              image: card.image,
              clicked: false,
            }
          });
          this.setState({
            cards: resetCardsCopy,
            currentScore: 0,
          });
        } 
      }
      
      
      render() {
        return (
          <GameBoard>
            <Title>Clicky Game</Title>
            <Header 
              score = {this.state.score}
              topScore = {this.state.topScore}
              />
            {this.state.cards.map(card => (
              <TileCard
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />         
              ))}
          </GameBoard>
        );
      }
    }
    
    export default App;
    
    
    
 