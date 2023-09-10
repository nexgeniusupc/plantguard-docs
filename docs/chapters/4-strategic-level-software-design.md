### Strategic-Level Attribute-Driven Design

#### Design Purpose

El objetivo que buscamos con la propuesta de arquitectura es maximizar la mantenibilidad del sistema, reduciendo los tiempos de desarrollo y los problemas generados, sin reducir la calidad del código y manteniendo el nivel de _downtime_ del sistema al mínimo.

#### Attribute-Driven Design Inputs

##### Primary Functionality (Primary User Stories)

Las siguientes historias de usuario (US) son aquellas que se deben priorizar para ofrecerle al usuario una funcionalidad óptima del sistema. De esa manera, la experiencia será provechosa para nuestro segmento objetivo. Asimismo, estas US son del tipo funcional, core del negocio y las que demuestran el valor agregado que queremos otorgar a nuestros usuarios. Gracias a estas, se podrá crear un producto mínimo viable (MVP) y, por ende, brindar solución a la problemática planteada al inicio del proyecto.

<!-- prettier-ignore-start -->
| ID    | User                                  | Priority | Epic |
| ----- | ------------------------------------- | -------- | ---- |
| US03  | Agricultores caseros                  | High     | EP01 |
| Title | Recopilación de datos de pH del suelo                 |||
| **Description**                                              ||||
| Como usuario, quiero que se recopile la métrica de pH del suelo para llevar un control preciso de la tierra en la que se encuentra la planta ||||
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
| ID    | User                                  | Priority | Epic |
| ----- | ------------------------------------- | -------- | ---- |
| US04  | Agricultores caseros                  | High     | EP02 |
| Title | Recomendaciones de falta de agua                      |||
| **Description**                                              ||||
| Como usuario, quiero que la aplicación me recomiende en qué momento debo regar la planta para mantener un bienestar completo de esta ||||
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
| ID    | User                                  | Priority | Epic |
| ----- | ------------------------------------- | -------- | ---- |
| US07  | Agricultores caseros                  | High     | EP03 |
| Title | Sincronización multi-dispositivo                      |||
| **Description**                                              ||||
| Como usuario, quiero tener acceso a los datos recopilados desde cualquiera de mis dispositivos, ya sea en mis teléfonos o en una computadora desde la web para estar al tanto de la planta en todo momento ||||
<!-- prettier-ignore-end -->

##### Quality attribute Scenarios

Presentamos ciertos escenarios que satisfagan los atributos de calidad destacados en nuestras tácticas.

###### Disponibilidad

**Scenario**: En condiciones óptimas, el sistema debe estar disponible al uso las 24 horas del día, los 7 días de la semana para los usuarios.

| Element          | Statement                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Stimulus         | Monitorear los parámetros de su planta                                                         |
| Stimulus Source  | Agricultor casero                                                                              |
| Environment      | Dashboard de la plataforma                                                                     |
| Artifact         | Aplicación móvil de PlantGuard                                                                 |
| Response         | Puede acceder a los gráficos y recomendaciones generados por el sistema                        |
| Response Measure | Está accediendo a la medianoche de un sábado y el sistema está activo sin inconveniente alguno |

**Scenario**: Los usuarios pueden acceder desde el navegador web o la aplicación móvil de diversos dispositivos sin afectar el comportamiento o rendimiento de la aplicación.

| Element          | Statement                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Stimulus         | Encontrar cuál es la hora próxima para regar las plantas                                                 |
| Stimulus Source  | Agricultor casero                                                                                        |
| Environment      | Sección de notificaciones de la plataforma                                                               |
| Artifact         | Aplicación web o móvil de PlantGuard                                                                     |
| Response         | Puede ver sus notificaciones que el sistema ha generado para recomendarle cuándo regar las planta        |
| Response Measure | La plataforma responde con total normalidad y se ajusta adecuadamente al tipo de dispositivo del usuario |

###### Seguridad

**Scenario**: Visualización de los datos recopilados por los dispositivos IoT solo por el dueño del dispositivo

| Element          | Statement                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Stimulus         | Acceso a la información histórica de los datos recopilados                                                            |
| Stimulus Source  | Agricultor casero                                                                                                     |
| Environment      | Sección de historial de datos de la plataforma                                                                        |
| Artifact         | Aplicación web o móvil de PlantGuard                                                                                  |
| Response         | Visualiza los datos históricos, acompañados de gráficos y análisis estadísticos, recopilados por sus dispositivos     |
| Response Measure | Puede ver solo los datos recopilados por sus dispositivos, sin acceso alguno a los de otros usuarios en la plataforma |

##### Constraints

Algunas posibles restricciones o limitaciones que podrían aplicarse a esta plataforma IoT podrían ser:

- Disponibilidad: el sistema debe estar disponible en todo momento, así los usuarios cuentan con acceso completo a sus datos y son capaces de mantenerse al tanto del bienestar de sus plantas gracias a las notificaciones generadas por la plataforma.
- Seguridad: el sistema debe proteger los datos de los usuarios, teniendo en consideración la seguridad mínima de los datos a través de procesos de encriptación de datos en transporte y en reposo, así como el control de acceso a los datos que le corresponden a cada usuario.
- Facilidad de uso: el sistema debe ser fácil de usar para todas las edades de nuestro segmento objetivo, ya que tenemos usuarios desde 18 años a más. Debe tener una interfaz intuitiva y fácil de navegar para que los usuarios puedan encontrar lo que están buscando.
- Costo: el sistema y el dispositivo IoT debe ser rentable para que los usuarios comunes tengan acceso a estos beneficios de forma razonable.

#### Architectural Drivers Backlog

En esta sección, se presenta el conjunto de Architectural Drivers que ha sido acordado por el equipo. Estos drivers han resultado de un proceso iterativo llevado a cabo durante el Quality Attribute Workshop. El Architectural Drivers Backlog abarca tanto los Functional Drivers seleccionados como los Quality Attribute Drivers seleccionados, además de todas las Constraints identificadas. La sección comienza con una breve introducción que resume el proceso que el equipo ha seguido para llegar a esta versión del backlog. A continuación, se presenta el Architectural Drivers Backlog, donde se enumeran todos los drivers. Se priorizan primero aquellos que poseen una alta importancia para los Stakeholders y un alto impacto en la Complexity Técnica de la Arquitectura.

| Driver ID | Título del Driver         | Descripción                                                                                                                        | Importancia para Stakeholders | Impacto en Architecture Technical Complexity |
| --------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------- |
| 1         | Seguridad de Datos        | Garantizar la seguridad de los datos de los usuarios mediante cifrado y autenticación robustos.                                    | High                          | High                                         |
| 2         | Escalabilidad             | Asegurar que la aplicación pueda manejar un aumento significativo en la carga de trabajo a medida que crece el número de usuarios. | High                          | Medium                                       |
| 3         | Usabilidad de la Interfaz | Mejorar la usabilidad de la interfaz de usuario para que sea intuitiva y fácil de usar.                                            | Medium                        | Low                                          |
| 4         | Tiempo de Respuesta       | Optimizar el tiempo de respuesta de la aplicación para garantizar una experiencia de usuario fluida.                               | High                          | High                                         |
| 5         | Disponibilidad Continua   | Mantener una alta disponibilidad del sistema, minimizando el tiempo de inactividad no planificado.                                 | High                          | High                                         |

#### Architectural Design Decisions

En esta sección, se detallan las decisiones de diseño arquitectónico que surgieron del proceso iterativo del Quality Attribute Workshop. Cada iteración se enfocó en Drivers específicos, considerando tácticas y patrones de diseño para abordar los requerimientos de calidad identificados.

| Driver ID | Título de Driver          | Patterns                          | Pro                                                      | Con                                                 |
| --------- | ------------------------- | --------------------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| 1         | Seguridad de Datos        | Cifrado Robusto                   | Proporciona un alto nivel de seguridad                   | Aumenta la complejidad técnica                      |
| ^^        | ^^                        | Autenticación de Dos Factores     | Refuerza la autenticación de usuarios                    | Introduce una experiencia adicional para el usuario |
| ^^        | ^^                        | Control de Acceso Basado en Roles | Ofrece control granular sobre el acceso a los datos      | Requiere una gestión más compleja de roles          |
| 2         | Escalabilidad             | Escalabilidad Horizontal          | Permite agregar recursos fácilmente                      | Requiere gestión de clústeres                       |
| ^^        | ^^                        | Escalabilidad Vertical            | Escala recursos en una sola instancia                    | Limitado en escalabilidad                           |
| ^^        | ^^                        | Escalabilidad de Microservicios   | Facilita la escalabilidad independiente                  | Introduce complejidad de gestión                    |
| 3         | Usabilidad de la Interfaz | Diseño Centrado en el Usuario     | Enfoque en las necesidades del usuario                   | APuede requerir investigación de usuarios           |
| ^^        | ^^                        | Interfaz Minimalista              | Simplifica la navegación                                 | Puede limitar la información visible                |
| ^^        | ^^                        | Retroalimentación en Tiempo Real  | Información instantánea para el usuario                  | Requiere actualizaciones constantes                 |
| 4         | Tiempo de Respuesta       | Caché de Datos                    | Acelera el acceso a datos frecuentemente utilizados      | Requiere gestión de caché                           |
| ^^        | ^^                        | Paralelización de Procesos        | Aumenta la eficiencia al procesar tareas simultáneamente | Puede requerir sincronización                       |
| ^^        | ^^                        | Compresión de Datos               | Reduce el ancho de banda necesario                       | Puede aumentar la carga de CPU                      |
| 5         | Seguridad de Datos        | Redundancia de Servidores         | Asegura disponibilidad en caso falle el hardware         | Requiere inversión en hardware adicional            |
| ^^        | ^^                        | Balanceo de Carga                 | Distribuye la carga para evitar sobrecarga en servidores | Puede requerir configuración constante              |
| ^^        | ^^                        | Monitorización en Tiempo Real     | Permite la detección temprana de problemas               | Requiere recursos de monitoreo                      |

#### Quality Attribute Scenario Refinements

En esta sección, se detallan los escenarios refinados para los atributos de calidad priorizados. Comenzaremos con una introducción que resumirá las principales decisiones tomadas durante el Quality Attribute Workshop y luego presentaremos los escenarios refinados en orden de prioridad.

| Scenario Refinement for Scenario 1 | Gestión de Usuarios                                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Escenario(s)                       | Registro de nuevos usuarios.                                                                                         |
| Objetivos de Negocio               | Aumentar la base de usuarios registrados en un 20%.                                                                  |
| Atributos de Calidad Relevantes    | Usabilidad, Rendimiento.                                                                                             |
| Estímulo                           | Un nuevo usuario completa el formulario de registro en la aplicación.                                                |
| Fuente del Estímulo                | Usuario.                                                                                                             |
| Entorno                            | Aplicación web de registro de usuarios.                                                                              |
| Artefacto                          | Base de datos de usuarios.                                                                                           |
| Respuesta                          | El sistema procesa el formulario de registro y almacena la información en la base de datos.                          |
| Medida de la Respuesta             | El tiempo de registro promedio es de menos de 2 minutos.                                                             |
| Preguntas                          | ¿El formulario de registro es intuitivo para los usuarios? ¿La base de datos de usuarios se actualiza correctamente? |
| Problemas                          | Posible aumento en la carga del servidor durante picos de registro.                                                  |

hidden {.table-separator}

| Scenario Refinement for Scenario 2 | Acceso a Datos Críticos                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Escenario(s)                       | Consulta de información crítica en la base de datos.                                                                       |
| Objetivos de Negocio               | Garantizar un acceso rápido y preciso a datos críticos para la toma de decisiones.                                         |
| Atributos de Calidad Relevantes    | Rendimiento, Seguridad.                                                                                                    |
| Estímulo                           | Un usuario autorizado solicita una consulta a la base de datos de información crítica.                                     |
| Fuente del Estímulo                | Usuario autorizado.                                                                                                        |
| Entorno                            | Aplicación de informes en línea.                                                                                           |
| Artefacto                          | Base de datos de información crítica.                                                                                      |
| Respuesta                          | El sistema ejecuta la consulta y muestra los resultados al usuario.                                                        |
| Medida de la Respuesta             | El tiempo de respuesta promedio es de menos de 1 segundo, y solo los usuarios autorizados pueden acceder a la información. |
| Preguntas                          | ¿El sistema mantiene la integridad de los datos críticos? ¿Se controla adecuadamente el acceso de los usuarios?            |
| Problemas                          | Posible sobrecarga del servidor durante consultas intensivas.                                                              |

### Strategic-Level Domain-Driven Design

#### EventStorming

El equipo colaboró efectivamente para explorar y definir las principales ideas que conforman el proceso de creación del EventStorming. Primero, nos organizamos para recapitular los principales procesos y eventos que ocurren en nuestro sistema, es así que fuimos realizando el procesos del event storming, conformado por los pasos indicados por Khononov (2021) en el libro _Learning Domain-Driven Design_, los cuales son 10 y se indican a continuación:

##### Step 1: Unstructured Exploration

![EventStorming Step 1](../static/eventstorming-step-1.jpg)

##### Step 2: Timelines

![EventStorming Step 2.1](../static/eventstorming-step-2.jpg)
![EventStorming Step 2.2](../static/eventstorming-step-2-2.jpg)

##### Step 3: Pain points

![EventStorming Step 3](../static/eventstorming-step-3.jpg)

##### Step 4: Pivotal points

![EventStorming Step 4](../static/eventstorming-step-4.jpg)

##### Step 5: Commands

![EventStorming Step 5](../static/eventstorming-step-5.jpg)

##### Step 6: Policies

![EventStorming Step 6](../static/eventstorming-step-6.jpg)

##### Step 7: Read models

![EventStorming Step 7](../static/eventstorming-step-7.jpg)

##### Step 8: External systems

![EventStorming Step 8](../static/eventstorming-step-8.jpg)

##### Step 9: Aggregates

![EventStorming Step 9](../static/eventstorming-step-9.jpg)

##### Step 10: Bounded context

![EventStorming Step 10](../static/eventstorming-step-10-general-view.jpg)

#### Candidate Context Discovery

En esta sección, identificamos mediante la técnica de _start-with-value_ los contextos candidatos al profundo análisis de su funcionamiento. Esto debido a que representan la lógica principal o modelo de negocio. Ambos son lo suficientemente autoexplicativos según los eventos que los componen, además definen de manera precisa cada etapa del proceso que buscamos los usuarios sigan al usar nuestro sistema. Estos _bounded context_ son los que conforman nuestro sistema.

![Candidate Context Discovery](../static/candidate-context-discovery.jpg)

#### Domain Message Flows Modeling

En este apartado, evidenciamos el correcto flujo de procesos ocurridos durante el uso de nuestro sistema, la interconexión e interacción entre los bounded contexts planteados y los elementos que los conforman para cumplir con el escenario ideal planteado:

![Domain Message Flows Modeling](../static/domain-message-flows-modeling.jpg)

#### Bounded Context Canvases

De igual manera que en las secciones previas, definimos los canvases de los dos _bounded contexts_ más relevantes en nuestro sistema. En estos, describimos a profundidad el contenido establecido en el Event Storming.

![Bounded Context Canvas 1](../static/bounded-context-canvas-1.jpg)

![Bounded Context Canvas 2](../static/bounded-context-canvas-2.jpg)

#### Context Mapping

![Context Mapping](../static/context-mapping.jpg)

Según la interacción entre nuestros bounded context definidos en el sistema que participan en conjunto, presentamos este diagrama de mapa de contexto bajo los siguientes fundamentos: proponemos un patron de colaboración entre el _Users Bounded Context_ y el _Payments Bounded Context_, con una relación **upstream** por el lado de _Users_ y **downstream** por el lado de _Payments_. Esto debido a que el _Payment Bounded Context_ extraerá los datos del usuario e información del _Users Bounded Context_, para obtener los datos de pago del usuario. Por otro lado se establece la misma relación entre _Users_ y _Plant Management_, ya que este último depende de la información que le proporcione el _bounded context_ inicial. Además, se establece una relación de **partners** entre _Plant Management_ y _Plants Data Analysis_, ya que ambos _bounded context_ tienen dependencias entre sí para actualizar los datos constantemente. Finalmente, se evidencia una relación **upstream** entre _IoT Assets Management_ con _Plant Data Analysis_, ya que esta depende de la información enviada por los sensores instalados en cada una de las plantas de nuestros usuarios.

### Software Architecture

#### Software Architecture System Landscape Diagram

En este diagrama, exploramos las reglas de negocio en el más alto nivel, dando un vistazo a cómo impactan las diversas restricciones de nuestro modelo y su influencia en la toma de decisiones arquitectónicas a nivel de software.

Se decidió utilizar Firebase Cloud Messaging (<https://firebase.google.com/docs/cloud-messaging/>) como sistema de notificaciones debido a la fácil integración de uso para el envío confiable de notificaciones.

![System Landscape Diagram](../static/system-landscape-diagram.excalidraw.svg)

#### Software Architecture Context Level Diagrams

Introduciéndonos al modelo C4, este primer diagrama de contexto nos ayuda a visualizar y entender cómo nuestro sistema interactúa con los principales agentes externos involucrados en el negocio, como por ejemplo los usuarios que vendrían a ser los jardineros así como sistema de terceros como Firebase Cloud Messaging.

![System Context Diagram](../static/system-context-diagram.excalidraw.svg)

#### Software Architecture Container Level Diagrams

Si nos adentramos un nivel más, este diagrama de contenedores nos da un vistazo acercado y enfocado a lo que contiene nuestra solución de software. Aquí es donde visualizamos por primera vez la aparición de nuestros bounded context y denotamos cómo interactúan entre sí.

![System Container Diagram](../static/system-container-diagram.excalidraw.svg)

#### Software Architecture Deployment Diagrams

Este diagrama nos muestra y ayuda a entender la ejecución de arquitectura del sistema y conocer qué entornos de ejecución usaremos, tomando en cuenta las tecnologías a la vanguardia hoy por hoy y las mejores decisiones arquitectónicas respecto a la solución.

![System Deployment Diagram](../static/system-deployment-diagram.excalidraw.svg)
