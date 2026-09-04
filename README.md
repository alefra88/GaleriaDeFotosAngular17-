# 📸 Galería de Fotos 

**Reto 3 - Módulo de Programación Web Multiplataforma**

Este proyecto es una aplicación web de una sola página (SPA) desarrollada en **Angular**. Su objetivo es demostrar la creación y comunicación de múltiples componentes independientes, el manejo del estado global de la aplicación y la renderización dinámica de interfaces basadas en datos.

## 🚀 Estructura de Componentes

La aplicación se divide en tres componentes principales apoyados por un servicio central:

1. **Galería Principal (`GaleriaComponent`):** Muestra la colección de imágenes en una cuadrícula responsiva. Implementa el control de estado vacío (cuando no hay fotos) y lista dinámicamente el arreglo de datos.
2. **Modal de Carga (`CargaFotosComponent`):** Un formulario flotante que permite registrar nuevas fotografías capturando su URL, título, descripción y metadatos de categoría.
3. **Visor de Detalles (`FotoDetalleComponent`):** Una vista expandida que reacciona a la foto seleccionada, mostrando información condicional de los metadatos fotográficos dependiendo de la categoría elegida (Retrato, Paisaje, Macro, Estándar).

## 🛠️ Tecnologías y Modernización del Código

Este proyecto fue desarrollado utilizando el estándar moderno de Angular (v17+), empleando **Standalone Components** y **Tailwind CSS**. 

**Justificación Técnica (Modernización de Directivas):**
Para cumplir con los objetivos de visualización de datos de la rúbrica, se optó por implementar el nuevo **Control de Flujo Integrado** en lugar de las directivas estructurales tradicionales:
* **`@if` (Reemplazo de `*ngIf`):** Utilizado en la Galería para alternar entre el mensaje "No hay fotos disponibles" y la cuadrícula de imágenes, así como para renderizar condicionalmente los componentes modales.
* **`@for` (Reemplazo de `*ngFor`):** Utilizado para iterar sobre el arreglo de fotografías en el componente principal, mejorando el rendimiento de renderizado.
* **`@switch` (Reemplazo de `*ngSwitch`):** Implementado en el visor de detalles para renderizar dinámicamente diferentes explicaciones técnicas basadas en el metadato `tipo` de la fotografía seleccionada.

**Data Binding y Estado:**
* **Bidireccional (Two-Way Binding):** Implementado con `[(ngModel)]` en el componente de carga para sincronizar el formulario con el objeto temporal de TypeScript en tiempo real.
* **Unidireccional (Property Binding):** Utilizado mediante interpolación `{{ }}` y corchetes `[src]` para proyectar los datos de las imágenes hacia el HTML.
* **Reactividad con Signals:** El estado global (lista de fotos, foto seleccionada y estado de modales) se administra en el servicio `GaleriaService` mediante `signal()`, eliminando la necesidad de emitir eventos complejos entre componentes y mejorando drásticamente el rendimiento.

## 💻 Instrucciones de Ejecución

Para correr este proyecto en un entorno local:

1. Clona o descarga el repositorio.
2. Abre una terminal en la carpeta raíz del proyecto (`GaleriaFotos`).
3. Instala las dependencias necesarias:
   ```bash
   npm install