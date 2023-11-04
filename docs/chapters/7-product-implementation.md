### Software Configuration Management

#### Software Development Environment Configuration

En el desarrollo de nuestro proyecto, hemos seleccionado el IDE de Visual Studio Code (<https://code.visualstudio.com/>) como la herramienta principal para la creación tanto de la aplicación móvil como del backend. Cada uno de estos componentes será desarrollado en lenguajes específicos, que detallaremos a continuación. Adicionalmente elegimos Visual Studio Code debido a que Wokwi ofrece una integración para ejecutar el simulador de forma local.

Para el desarrollo de la aplicación de prueba de concepto, hemos optado por el uso del framework Flutter (https://flutter.dev), el cual se basa en el lenguaje de programación Dart.

En el ámbito del backend, hemos elegido Cloudflare Workers (<https://workers.cloudflare.com/>) como nuestra herramienta de desarrollo. Esta elección se debe a su infraestructura generosa y gratuita.

Para la simulación de dispositivos IoT, hemos empleado Wokwi (<https://wokwi.com/>), una plataforma que nos permite acceder a un simulador completo de diversas placas y componentes directamente desde el navegador.

Además, como parte de nuestras herramientas de desarrollo en la nube (SaaS), confiamos en GitHub (<https://github.com/>) para la colaboración de código y aprovechamos GitHub Actions para la implementación continua y la entrega continua (CI/CD). También, contamos con LucidChart (<https://www.lucidchart.com>), Miro (<https://miro.com/>), Excalidraw (<https://excalidraw.com/>) y Structurizr (<https://structurizr.com/>) para la creación de diversos diagramas. Por último, utilizamos Figma (<https://www.figma.com/>) para la elaboración de nuestros diseños de interfaz de usuario, incluyendo wireframes, maquetas y prototipos.

#### Source Code Management

Hemos optado por emplear GitHub para gestionar y mantener un registro de las diferentes versiones de nuestro proyecto en desarrollo. Para ello, hemos creado una organización denominada NexGenius, que contiene todos los repositorios necesarios. Puedes encontrar estos repositorios en <https://github.com/nexgeniusupc/>.

En cuanto a la simulación de IoT que realizamos en Wokwi, es importante destacar que el código correspondiente no se gestiona mediante control de versiones. Esto se debe a que Wokwi es una plataforma en la nube dedicada a la simulación de dispositivos IoT, y no requiere control de versiones en el sentido tradicional. Para acceder a nuestra simulación, puedes visitar el siguiente enlace: <https://wokwi.com/projects/380426650740225025.>

Además, a continuación, proporcionamos los enlaces pertinentes a los repositorios de cada una de las soluciones implementadas en nuestro proyecto:

!include (../repositories.md)

#### Source Code Style Guide & Conventions

En cuanto a las convenciones para el control de versiones, utilizaremos Conventional Commits (<https://www.conventionalcommits.org/en/v1.0.0/>) tanto para la creación de ramas (aplicando `<type>/<title>`) como para la creación de commits (`<type>`(optional scope): `<description>`). Como, por ejemplo:

- Rama: feat/main-component
- Commit: feat: added main component template

Con respecto a la creación de ramas, se utilizarán feature branches siguiendo el modelo de GitHub Flow, con la nomenclatura mencionada previamente. Nuestra rama principal será la rama develop, la cual contendrá nuestra versión de la aplicación que se encuentra en producción. Todas las feature branches se realizarán a esta rama. Asimismo, tendremos una rama main para hacer el seguimiento del código desplegado en producción. A esta rama se realizarán los hotfixes, de ser necesarios.

#### Software Deployment Configuration

Para el despliegue de nuevas versiones de nuestra aplicación móvil, utilizaremos un repositorio privado de F-Droid (<https://f-droid.org/>), así como la publicación de APKs en GitHub Releases (<https://github.com/nexgeniusupc/plantguard-mobile/releases>).

Para el despliegue del backend, hemos realizado una integración con GitHub Actions la cual nos permite realizar despliegues automáticos con cada commit que sea enviado a las ramas main y develop. Estos harán despliegue a nuestros entornos de producción y staging respectivamente. Esta configuración puede ser visualizada en el siguiente enlace: <https://github.com/nexgeniusupc/plantguard-api/actions>.

### Solution Implementation

#### Sprint 1

##### Sprint Planning 1

Para este primer sprint, decidimos sentar las bases de la aplicación, empezando por la autenticación y la vinculación de dispositivos IoT (en este caso simulados en Wokwi) con una cuenta. Esto servirá para, en siguientes sprints, implementar funcionalidades que dependan de los datos que el dispositivo IoT pueda recopilar.

##### Sprint Backlog 1

| User Stories | User Stories | Work-Item / Task | Work-Item / Task | Work-Item / Task | Work-Item / Task | Work-Item / Task |
| Id | Title | Id | Title | Description | Estimation | Status |
| ------------ | ----------------------------------------- | -----------------| -----------------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| US01 | Recopilación de datos de temperatura | PG01 | Setup y utilización inicial para que la app móvil recopile los datos de la temperatura. | Realizar configuración y lógica preliminar para la recopilación de los datos de temperatura. | 4 hours | Done |
| US04 | Recomendaciones de falta de agua | PG02 | Setup y utilización inicial para que la app móvil haga recomendaciones sobre la falta de agua. | Realizar configuración y lógica preliminar para las recomendaciones de falta de agua. | 4 hours | Done |
| US10 | Consejos para la elección de plantas | PG03 | Setup y utilización inicial para que la app móvil de consejos sobre elecciones de plantas. | Realizar configuración y lógica preliminar para los consejos de elección de plantas. | 4 hours | Done |
| US11 | Sugerencias de nutrientes y fertilizantes | PG04 | Setup y utilización inicial para que la app móvil sugiera nutrientes y fertilizantes. | Realizar configuración y lógica preliminar para las sugerencias de nutrientes y fertilizantes. | 4 hours | Done |

##### Development Evidence for Sprint Review

###### Mobile App

El código de este prototipo preliminar desarrollado en Flutter se encuentra alojado en un repositorio en GitHub en el enlace: (<https://github.com/nexgeniusupc/plantguard-mobile>)

Asimismo, en este repositorio se encuentra la evidencia de los principales commits realizados para cumplir con los objetivos y tareas relacionados a esta primera iteración.

| Branch  | Commit id | Commit message                           | Committed on (date) |
| ------- | --------- | ---------------------------------------- | ------------------- |
| develop | 9b4adf4   | feat: device pairing UI                  | 03/11/2023          |
| develop | 6a0f015   | feat: added plant details view           | 03/11/2023          |
| develop | f649951   | feat: added initial auth logic and views | 03/11/2023          |
| develop | 06a48a4   | feat: added home view                    | 02/11/2023          |

###### Backend

El código de este nuestra api implementada para su consumo mediante la mobile app está desarrollado en TypeScript, se encuentra alojado en un repositorio en GitHub en el enlace: (<https://github.com/nexgeniusupc/plantguard-api>)

Asimismo, en este repositorio se encuentra la evidencia de los principales commits realizados para cumplir con los objetivos y tareas relacionados a esta primera iteración.

| Branch  | Commit id | Commit message                                               | Committed on (date) |
| ------- | --------- | ------------------------------------------------------------ | ------------------- |
| develop | f5cfdc0   | feat(devices): added initial impl of device registry service | 04/11/2023          |
| develop | 2964522   | feat(devices): added initial impl of pairing service         | 04/11/2023          |
| develop | 7054f51   | feat(devices): added full (untested) devices service         | 03/11/2023          |
| develop | c22a7b9   | feat(auth): added initial impl of auth service               | 29/10/2023          |

##### Execution Evidence for Sprint Review

##### Services Documentation Evidence for Sprint Review

##### Software Deployment Evidence for Sprint Review

Utilizamos Cloudflare Workers para poder desplegar automáticamente el backend con cada cambio realizado por los miembros del equipo. Esta plataforma se integra con el repositorio de GitHub a través de GitHub Actions para detectar los cambios y generar despliegues para las ramas main y develop, siendo los entornos de producción y staging respectivamente. El enlace de la versión de producción es el siguiente: <https://plantguard-api.dalbitresb.com>.

##### Team Collaboration Insights during Sprint

Para esta primera entrega, los miembros del equipo colaboramos en conjunto para realizar las tareas establecidas y propiciar los primeros acercamientos a la solución completa, tanto a nivel de nuestro backend como el desarrollo de la aplicación móvil. En los repositorios podemos encontrar las principales contribuciones de cada miembro, así como en el presente informe se evidencia la colaboración e integración continua para otorgar la mayor calidad y el mejor esfuerzo en nuestra solución.

![Insights network](../static/insights-sprint-1.jpeg)

<!--
### Validation Interviews

 #### Diseño de Entrevistas

#### Registro de Entrevistas

#### Evaluaciones según heurísticas

### Video About-the-Product -->
