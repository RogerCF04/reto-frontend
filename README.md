# RETO TÉCNICO DELFOSTI
Listar las películas y poder filtrarlas por géneros.
### CONFIGURACIÓN INICIAL(REQUISITOS)
Está desarrollado en angular 16.2.10 con node v.16

#### 1.	instalar librerías angular
Teniendo los requisitos instalados, ejecutar el script siguiente para poder descargar e instalar las dependencias, librerías y/o paquetes
```bash
npm install
```

#### 2.	Inicializar el proyecto
Para compilar el proyecto de manera local correr el siguiente script
```bash
ng serve
```
Para visualizar el proyecto copiar el enlace`http://localhost:4200/` en un navegador.

#### 3.	Módulos disponibles
| # | OPCIONES |
| ------ | -------- |
| 1 | LISTADO |
| 2 | GÉNEROS |

## LISTADO
Se lista el total de las películasde manera estática (obtenidos del JSON)

## GÉNEROS
- Se puede seleccionar uno o varios géneros disponibles (obtenidos desde el JSON)
- Se puede realizar búsquedas por el nombre de la película. Los datos mostrados se filtrarán de manera dinámica.
