import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  value: string = '';                                      // Initialisieren der leeren Variable als Platzhalter
  abholAdresseStr: string = '';                            // Initialisieren der Variable für die Straße des Spenders
  abholAdressePLZ : string = '';                           // Initialisieren der Variable für die Postleitzahl des Spenders
  geschaeftsstellePLZ: string = '55252';                   // Initialisieren der Variable für die Postleitzahl der Geschäftsstelle, damit diese nacher verglichen werden kann
  geschaeftsstelleOrt: string = 'Wiesbaden';               // Initialisieren der Variable für den Ort der Geschäftsstelle
  geschaeftsstelleStr: string = 'Wiesbadener Str. 101';    // Initialisieren der Variable für die Straße der Geschäftsstelle
  selectedGebiet: string = '';                             // Speichert das ausgewählte Gebiet
  selectedKleidung: string = '';                           // Speichert das ausgewählte Gebiet

 

  // Kleidungsarten String Array, für die Auswahl der Kleidungsarten
  kleidungsArten: string[] = ['','Anzug', 'Jacke', 'Kleid', 'Hose', 'T-Shirt', 'Pullover', 'Sonstige'];
  // Kriesengebiet String Array, für die Auswahl der Kriesengebiete
  kGebiet: string[] = ['','Äthiopien', 'Jemen','Sudan', 'Syrien', 'Ukraine'];



  // Form group für die Kleiderauswahl
  kleidungForm = new FormGroup({
    selectedKleidung: new FormControl(''),  // Der Initale Wert wurde mit absicht frei gelassen
    
  });

  // Form group für die Kriesengebietsauswahl
  kriGebiet = new FormGroup({
    selectedGebiet: new FormControl(''),    // Der Initale Wert wurde mit absicht frei gelassen
  });



  // Diese Methoden wird für das Dropdown Menü benötigt
  onKleidungChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedKleidung = selectElement.value;
    console.log('Ausgewählte Kleidung:', this.selectedKleidung);
  }
  
  
  onGebietChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedGebiet = selectElement.value;
    console.log('Ausgewähltes Gebiet:', this.selectedGebiet);
  }
  
   
  // onInput Befehle zum Auslesen des jeweiligen Werts, welcher eingegeben wird
  onInputKleidung(event: Event): void {
    const inputElementKleidung = event.target as HTMLInputElement;
    this.selectedKleidung  = inputElementKleidung.value;
  }

  onInputGebiet(event: Event): void {
    const inputElementGebiet = event.target as HTMLInputElement;
    this.selectedGebiet = inputElementGebiet.value;
  }

  onInputPLZ(event: Event): void {
    const inputElementPLZ = event.target as HTMLInputElement;
    this.abholAdressePLZ = inputElementPLZ.value;
  }

  onInputStr(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.abholAdresseStr = inputElement.value;
  }

  // Kontrolle der Postleitzahl 

  checkPLZ(geschaeftsstellePLZ: string, abholAdressePLZ: string): boolean {
    
    if(abholAdressePLZ.length === 5){                                                       //If-Kontrolle ob die Postleitzahl die Länge 5 besitzt(Alle Postleitzahlen Deutschlands sind fünfstellig)

    return geschaeftsstellePLZ.substring(0,2) === abholAdressePLZ.substring(0,2);           //Kontrolle ob die ersten beiden Ziffern, mit der Postleitzahl der Geschäftsstelle übereinstimmen.
  }
    return false;                                                                           //Wenn die Postleitzahl nicht exakt 5 ist, wird false ausgegeben
  }

  

  // Diese Methode wird aufgerufen, wenn der Nutzer das Formular absendet
  submitForm() {
    
    this.addNewFormular(this.selectedKleidung, this.selectedGebiet, this.abholAdressePLZ, this.abholAdresseStr);
  }

  // Methode, um die aktuellen Werte zu lesen
  addNewFormular(selectedKleidung: string, selectedGebiet: string, abholAdressePLZ: string, abholAdresseStr: string): void {
    this.selectedKleidung = selectedKleidung;
    this.selectedGebiet = selectedGebiet;
    this.abholAdressePLZ = abholAdressePLZ;
    this.abholAdresseStr = abholAdresseStr;
  }

  constructor() {
  }
  
}
  
  
  


  
    
  





