import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-confirmation-local',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './confirmation-local.component.html',
  styleUrl: './confirmation-local.component.scss'
})
//Dient dazu, die Daten des DataService in lesbarer Form darzustellen.
export class ConfirmationLocalComponent {
  formularDetailsKleidung: string = '';
  formularDetailsGebiet: string = '';
  geschaeftsstellePLZ: string = '';
  geschaeftsstelleStr: string = '';
//----------------------------------------------------------------------
  //Formatiert, sodass sie im Frontend direkt verwendet werden können.
  constructor(private ds: DataService) {
    this.formularDetailsKleidung = `Kleidung: ${this.ds.selectedKleidung}`;
    this.formularDetailsGebiet = `Gebiet: ${this.ds.selectedGebiet}`;
    this.geschaeftsstellePLZ= `PLZ: ${this.ds.geschaeftsstellePLZ}`;
    this.geschaeftsstelleStr = `Straße: ${this.ds.geschaeftsstelleStr}`;
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
