import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  
  constructor(private router: Router){}
  newGame(){
    //Start Game
    this.router.navigateByUrl('/game');
  }

}
