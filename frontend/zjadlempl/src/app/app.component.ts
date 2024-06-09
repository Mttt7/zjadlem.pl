import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgxSonnerToaster],
})
export class AppComponent {
  title = 'zjadlempl';

  ngOnInit() {
    console.log(process.env['NG_SERVER_URL']);
  }
}
