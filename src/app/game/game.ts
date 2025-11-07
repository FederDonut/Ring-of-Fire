import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameData } from '../../models/gameData';
import { Player } from '../player/player';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { GameInfo } from "../game-info/game-info";




@Component({
  selector: 'app-game',
  
  imports: [
    CommonModule,
    Player,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    GameInfo
],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements OnInit{
    pickCardAnimation = false;
    currentCard: string |undefined;
    
    game!: GameData; //game! = Non-Null Assertion Operator 
    imgPath: string = "./../../assets/img/cards/" 

    constructor(public dialog: MatDialog){}

    ngOnInit(): void{
      this.newGame();
    }

    newGame(){
      this.game = new GameData();
      console.log(this.game);

    }

    takeCard(){
      this.currentCard = this.game.stack.pop()
      console.log(this.currentCard)
      this.pickCardAnimation = true;
      
      

      setTimeout(()=>{
        if(this.currentCard){
          this.game.playedCards.push(this.currentCard);
          this.pickCardAnimation = true
          console.log('New Card:'+ this.currentCard);
          console.log('Game is',this.game.playedCards)
          this.game.currentPlayer ++;
          this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        }
        this.pickCardAnimation = false;
      },2000)
    }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer);

    dialogRef.afterClosed().subscribe(name => {
      console.log('The dialog was closed',name);
      if(name && name.length > 0){
        this.game.players.push(name);
      }
    });
  }
}
