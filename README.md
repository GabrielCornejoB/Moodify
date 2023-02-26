# **Moodify**
Moodify es una aplicación móvil hibrida que busca brindar acompañamiento a usuarios que no sepan manejar muy bien sus emociones, en esta pueden expresar como se sienten y recibir consejos/estrategias que pueden ayudarlos con su estado de animo.

Si desea ver más información acerca de Moodify, como pueden ser los wireframes manuales, los usuarios identificados, y demás; puede encontrarla en *[Planeación Moodify](Moodify.pdf)*, y si desea acceder a Moodify a probar la aplicación, ingresar al siguiente link: [Moodify](https://gabrielcornejob.github.io/Moodify/home).

NOTA: La aplicación fue realizada para la resolución 360px x 740px

A continuación se encuentran los vinculos a las distintas secciones de este README:

[**Integrantes y responsabilidades**](#integrantes-y-responsabilidades)

[**Frameworks y herramientas utilizadas**](#frameworks-y-herramientas)

[**Criterios de evaluación**](#criterios-de-evaluación)

[**Secciones Moodify**](#secciones-moodify)
  
---

## **Integrantes y responsabilidades**

El equipo está conformado por:

* Juan José Duque Gonzalez
* Gabriel Sebastián Cornejo Botero

Juan José realizo las vistas de: info, help, flujo de sad, flujo de bored. Gabriel realizó las vistas de: menu, flujo de angry, flujo de happy.

Por flujo, se refiere a todas las vistas que involucran a una de las opciones del menú principal.

---

## **Frameworks y herramientas**

Para desarrollar Moodify usamos el Framework ***Angular*** en su versión 15, este framework está hecho con *TypeScript* y sirve para realizar aplicaciones web de tipo SPA (Single Page Application). Angular es un framework de desarrollo basado en *componentes*, estos permiten desarrollar aplicaciones escalables y facilitar muchas funcionalidades, además cuenta con un gran número de librerías ya incorporadas.

Además de Angular, usamos ***SASS*** como nuestro precompilador de CSS, una gran ventaja es que al crear el proyecto de Angular, te permite seleccionar SASS como hoja de estilos, por lo que no hay que usar ningún bundler o utilizar comandos adicionales, facilitando el uso de este precompilador.

Como editor de texto utilizamos ***Visual Studio Code*** y como sistema de control de versiones utilizamos ***GitHub***.

---

## **Criterios de evaluación**

A continuación se presentarán los criterios de evaluación pedidos y la forma en que los cumplimos/solucionamos:

### **1. La estructura base del proyecto evidencia el uso de sass y de clases parciales**
Como fue mencionado anteriormente, utilizamos sass como precompilador de css, ya que angular permite facilmente incorporar sass. En cuanto a las clases parciales, como Angular es un framework basado en componentes, cada componente tiene su propia hoja de estilos y su propio archivo de comportamiento, lo que permite mantener un mayor orden en el proyecto y permite una facil escalabilidad.

### **2. Uso correcto de gulp, para automatizar las funciones de minificación de los archivos sass e integración y optimización del código JavaScript**
Como fue mencionado en la clase, gulp está deprecado, se planteó el uso de Parcel, pero este no es compatible con Angular, y existen muchos otros bundlers de este estilo pero no es muy popular usarlos con Angular.

Esto se debe a que cuando se inicia un proyecto de Angular, este cubre por si solo la mayoría de funciones de estos bundlers (integración distintos archivos sass y js, live server, etc...), por lo que el uso de estos no es realmente necesario, y puede llegar a ser contraproducente. Un bundler podría ser util en versiones muy antiguas de Angular en la que este se llamaba AngularJS, pero no es el caso para este proyecto.

### **3. Uso de repositorio, uso de .gitignore, uso de README.md**
Para este proyecto usamos este repositorio donde estás leyendo el readme, en este decidimos usar ramas para mantener un mayor orden del proyecto, la rama *mura* es la rama en la que el integrante Juan José Duque realizó su parte y en la rama *corne* es en la que el integrante Gabriel Cornejo realizó lo que le correspondía.

El archivo .gitignore fue utilizado para no subir al repositorio los modulos de angular y otros archivos que no son relevantes.

Y el archivo .readme fue utilizado para realizar esta explicación y para enseñar información acerca de Moodify.

### **4. La aplicación no requiere internet para funcionar**
Moodify en esta versión no requiere de recursos externos o APIs de internet para funcionar, como aún no se está usando el framework Capacitor para generar una aplicación como tal, esta será desplegada en Github pages.

Los recursos de multimedia (imagenes y videos) fueron descargados localmente, por lo que tampoco se requeriría acceder a ellos buscandolos en la web, la desventaja de esto es que aumenta el tamaño en MB del proyecto.

### **5. Entrega puntual del proyecto**
Este proyecto fue entregado puntualmente el 26 de febrero de 2023.

### **6. La aplicación refleja lo planteado en el prototipo creado en la unidad anterior**
El desarrollo de Moodify refleja lo planteado en el [Figma](https://www.figma.com/file/ng3IoOqj0M4xIsQkFFias0/Moodify?node-id=0%3A1&t=EgZX5n1d2hetwqth-1) donde se realizó el prototipado, este Figma recibió algunos cambios pero mínimos.

### **7. La aplicación funciona correctamente y está completa**
Moodify funciona con todas las funcionalidades que fueron planteadas en el prototipado, todas las vistas están completas y fue desplegada en github pages

---

## **Secciones Moodify**

Moodify se divide en 4 flujos principales: Enojo, Tristeza, Aburrimiento, Alegría. Para cada una de estos se busca aconsejar e intentar mejorar el estado de animo del usuario.

Una vez el usuario seleccione una de las 4 opciones en el menú principal, se le llevará por una serie de pasos que debe seguir, por ejemplo en el de Enojo se le llevará por una serie de estrategias/actividades que puede realizar para aprender a controlar su enojo, o en la sección de Alegría se intenta felicitar al usuario por su estado de animo y se le aconseja que intente repartir este sentimiento con las personas que lo rodean.

Si deseas ver todos los flujos, ingresa a Moodify.


