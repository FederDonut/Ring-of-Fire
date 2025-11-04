import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameData } from '../../models/gameData';


@Component({
  selector: 'app-game',
  
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements OnInit{
    pickCardAnimation = false;
    game!: GameData; //game! = Non-Null Assertion Operator 

    ngOnInit(): void{
      this.newGame();
    }

    newGame(){
      this.game = new GameData();
      console.log(this.game);

    }

    takeCard(){
      this.pickCardAnimation = true;
    }
}
