import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  standalone: true,
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player implements OnInit{

  @Input() name!:string;
  @Input() playerActive:boolean = false;


  ngOnInit(): void {
      
  }
}
