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

  public plan = {
    metas: [
      {
        title: 'Blog Genérico',
        caracteristicas: [
          {
            caracteristica: 'Poder manipular artículos',
          },
          {
            caracteristica: 'Poder configurar el sitio',
          },
        ],
        objetivos: [
          {
            objetivo: 'Tener la planeación del proyecto',
            tareas: [
              {
                tarea:
                  'Definir el objetivo del proyecto(Propuesta del proyecto)',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea: 'Definir las características del proyecto',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea: 'Definir los procesos del desarrollo del proyecto',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea:
                  'Definir los pasos de los procesos del desarrollo del proyecto',
                hecho: true,
                etapa: 'acabado',
              },
            ],
          },
          {
            objetivo: 'Tener el diseño del proyecto',
            tareas: [
              {
                tarea: 'Análisis de los requerimientos',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea: 'Análisis de competidores',
                hecho: false,
                etapa: 'cancelado',
              },
              {
                tarea: 'Diseño de la base de datos',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea: 'Diseño de la interfaz',
                hecho: false,
                etapa: 'cancelado',
              },
              {
                tarea: 'Inventario de las páginas',
                hecho: true,
                etapa: 'acabado',
              },
              {
                tarea: 'Matriz de pruebas',
                hecho: false,
                etapa: 'no empezado',
              },
            ],
          },
          {
            objetivo: 'Tener el código del proyecto',
            tareas: [
              {
                tarea: 'Crear el repositorio',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea:
                  'Crear la estructura del proyecto(carpetas y archivos) Frontend',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Implementar el diseño de la aplicación',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea:
                  'Crear la estructura del proyecto(carpetas y archivos) Backend',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea:
                  'Crear los CRUDs(Create Read Update Delete) de los modelos de las bases de datos',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Integración de la API',
                hecho: false,
                etapa: 'no empezado',
              },
            ],
          },
          {
            objetivo: 'Tener la configuración del servidor del proyecto',
            tareas: [
              {
                tarea: 'Configurar el servidor',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Configurar la base de datos',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Cargar y lanzar la aplicación en el servidor',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Configurar el dominio (DNS, Domain, SSL)',
                hecho: false,
                etapa: 'no empezado',
              },
            ],
          },
          {
            objetivo: 'Hacer las pruebas del proyecto',
            tareas: [
              {
                tarea: 'Ejecutar la matriz de pruebas',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Ajustes a la aplicación',
                hecho: false,
                etapa: 'no empezado',
              },
              {
                tarea: 'Seguimiento de la matriz de pruebas',
                hecho: false,
                etapa: 'no empezado',
              },
            ],
          },
          {
            objetivo: 'Lanzar el producto',
          },
        ],
      },
    ],
  };
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
