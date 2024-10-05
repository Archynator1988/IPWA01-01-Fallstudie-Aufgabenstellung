import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
//Dient dazu, die Daten des DataService in lesbarer Form darzustellen.
export class ConfirmationComponent implements OnInit{
  formularDetailsKleidung: string = '';
  formularDetailsGebiet: string = '';
  formularDetailsPLZ: string = '';
  formularDetailsStrasse: string = ''; 
//----------------------------------------------------------------------
  //formatiert, sodass sie im Frontend direkt verwendet werden können.
  constructor(private ds: DataService) {
    this.formularDetailsKleidung = `Kleidung: ${this.ds.selectedKleidung}`;
    this.formularDetailsGebiet = `Gebiet: ${this.ds.selectedGebiet}`;
    this.formularDetailsPLZ = `PLZ: ${this.ds.abholAdressePLZ}`;
    this.formularDetailsStrasse = `Straße: ${this.ds.abholAdresseStr}`;
  }
  

  //Aktuelle Uhrzeit und Datum Darstellung
  aktuelleUhrzeit: string = '';
  aktuellesDatum: string = '';

  ngOnInit(): void {
    this.updateTime();
    this.updateDate();
  }

  updateTime(): void {
    const now = new Date();
    this.aktuelleUhrzeit = now.toLocaleTimeString(); // Aktuelle Uhrzeit im lokalen Format
  }

  updateDate(): void {
    const now = new Date();
    this.aktuellesDatum = now.toLocaleDateString(); // Gibt das aktuelle Datum im lokalen Format zurück
  }
}
  