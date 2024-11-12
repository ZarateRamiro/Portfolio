import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Importa el proveedor de HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()  // Asegúrate de que HttpClient esté correctamente registrado
  ]
}).catch((err) => console.error(err));