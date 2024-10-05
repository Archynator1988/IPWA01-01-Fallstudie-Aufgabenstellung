import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';         
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
  



export class FormularComponent implements OnInit {

  constructor (public ds: DataService){
  }
  ngOnInit(): void {
  
  }
}
