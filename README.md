Instalación de Librerías
Axios:npm install axios

ng-idle (bn-ng-idle):
npm install @ng-idle/core @ng-idle/keepalive

crypto-js:
npm install crypto-js

ngx-spinner:
npm install ngx-spinner

Angular Material:
ng add @angular/material

Configuración del Archivo environment
En el archivo environment.ts, actualiza las rutas con la IP o la URL local:
 direcurl: 'http://localhost:8000/'  // O reemplaza con tu IP si es necesario

Vistas del Proyecto
Vista para ingresar una URL:

Limitada a 18 caracteres.
Validación de CURP incluida.
Vista para agregar un municipio:

Formulario sencillo para ingresar los datos del municipio.
Vista de citas:

Listado de citas con un modal para la eliminación de las mismas.
Ejecución del Proyecto Angular
Para levantar el proyecto Angular, ejecuta:
ng serve --host 0.0.0.0

Notas Adicionales
Asegúrate de que las rutas y configuraciones en el archivo environment.ts estén correctamente apuntando a tu API Laravel.
Verifica que todas las dependencias estén correctamente instaladas antes de ejecutar ng serve.
Si hay algún problema con la instalación de librerías o configuración del entorno, revisa los logs de error para solucionar posibles conflictos.
