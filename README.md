# Task Manager SPA
## Descripción
Aplicación web SPA para gestión de tareas. Permite registrarse, iniciar sesión, crear tareas, verlas, marcarlas como completadas y eliminarlas.
La aplicación usa Firebase Authentication para autenticación y Cloud Firestore para guardar las tareas de cada usuario.
## URL de producción
https://task-manager-spa-phi.vercel.app
## Repositorio
https://github.com/DalilaMiglio/task-manager-spa
## Tecnologías
- React
- TypeScript
- Vite
- Firebase Authentication
- Cloud Firestore
- React Router
- Vercel
- GitHub
## Organización del código
El proyecto está organizado por capas:
```txt
src/
├── components
├── pages
├── services
├── hooks
├── routes
├── types
├── features
├── utils
Decisiones arquitectónicas
Se separó el código por responsabilidades para que sea más mantenible:
* components: componentes reutilizables.
* pages: vistas principales.
* services: conexión con Firebase y Firestore.
* hooks: lógica reutilizable de autenticación.
* routes: rutas privadas.
* types: tipos de TypeScript.
Firestore guarda cada tarea con un userId, por lo que cada usuario solo puede ver sus propias tareas.
Instalación
npm install
npm run dev
npm run build
Variables de entorno
Crear un archivo .env con:
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
SES_FROM_EMAIL=
Flujo de envío de emails
El proyecto fue preparado para enviar un resumen de tareas mediante una Vercel Function y AWS SES.
Flujo esperado:
1. El usuario solicita enviar el resumen.
2. El frontend llama a una función serverless de Vercel.
3. La función usa AWS SES.
4. AWS SES envía el email.
5. Las credenciales se manejan como variables de entorno y no se exponen en el frontend.
Estado de AWS SES
La integración con AWS SES quedó planteada a nivel de arquitectura y variables de entorno.
Durante la configuración, la cuenta AWS quedó suspendida por un problema externo de autenticación/facturación, por lo que no fue posible validar el envío real de emails en producción.
Deploy
La aplicación está desplegada en Vercel:
https://task-manager-spa-phi.vercel.app
Uso de IA
La IA fue utilizada como apoyo durante el desarrollo para:
* Organizar la estructura del proyecto.
* Corregir errores de TypeScript.
* Entender errores de Firebase y Vercel.
* Mejorar el README.
* Guiar el proceso de deploy.
* Aplicar buenas prácticas de separación por capas.
Fue más efectiva al interpretar errores, explicar pasos técnicos y ayudar a mantener una estructura ordenada.
Buenas prácticas aplicadas
* Uso de TypeScript.
* Separación por capas.
* Variables de entorno.
* No subir .env al repositorio.
* Rutas privadas.
* Persistencia en Firestore.
* Deploy en Vercel.
* Commits descriptivos.