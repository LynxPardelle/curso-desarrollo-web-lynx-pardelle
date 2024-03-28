import { afterRender, AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public shortcuts: string[] = [
    'CTRL + S = Guardar',
    'CTRL + C = Copiar',
    'CTRL + V = Pegar',
    'CTRL + Z = Deshacer Cambios',
    'CTRL + SHIFT + Z = Rehacer Cambios',
    'CTRL + SHIFT + A = Crear comentario',
    'CTRL + SHIFT + F = Formatear el documento',
    'SHIFT + Flechas = Seleccionar',
    'ALT + Flechas arriba o abajo = Subir o bajar toda la línea',
    'CTRL + L = Seleccionar toda la línea',
    'CTRL + F = Buscar',
    'CTRL + D = Duplica la línea de código',
    'CTRL + SHIFT + D = Elimina la línea',
    'CTRL + ALT + Flechas arriba o abajo = Agrega cursores arriba o abajo.',
    '[ALT] + click = Crear cursores nuevos por cada click en diferentes lados.',
    'CTRL + F = Abrir el buscador',
  ];
  constructor(private _befService: NgxBootstrapExpandedFeaturesService) {
    afterRender(() => {
      if (!this._befService) {
        this._befService = new NgxBootstrapExpandedFeaturesService();
      }
      this.cssCreate();
    });
  }
  cssCreate() {
    this._befService.cssCreate();
  }
}
