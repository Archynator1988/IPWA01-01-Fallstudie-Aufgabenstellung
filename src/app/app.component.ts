import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormularComponent } from "./formular/formular.component";
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent, FormularComponent, RouterModule, CommonModule, ConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kleiderspenden-Registrierung';
}
