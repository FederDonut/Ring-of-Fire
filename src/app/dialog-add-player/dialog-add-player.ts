import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-add-player',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    
  ],
  templateUrl: './dialog-add-player.html',
  styleUrl: './dialog-add-player.scss',
})
export class DialogAddPlayer implements OnInit {
  name:string ="";
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayer>);
  
  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
