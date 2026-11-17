# Task Manager SPA

Aplicación web para gestionar tareas personales, desarrollada con React, TypeScript y Firebase.

**[Abrir demo](https://task-manager-spa-phi.vercel.app)** · **[Ver código](https://github.com/DalilaMiglio/task-manager-spa)**

## Qué permite hacer

- Registrarse e iniciar sesión con Firebase Authentication.
- Acceder a las vistas privadas mediante React Router.
- Crear tareas con título y descripción.
- Consultar las tareas asociadas al usuario autenticado.
- Marcar tareas como completadas o pendientes y eliminarlas.
- Guardar los datos en Cloud Firestore.

## Mi aporte

Proyecto individual de formación en desarrollo web. Implementé la interfaz en React y TypeScript, la autenticación, las rutas protegidas y la capa de servicios para las operaciones de tareas en Firestore.

## Tecnologías

React, TypeScript, Vite, React Router, Firebase Authentication, Cloud Firestore y Vercel.

## Ejecutar en local

Requiere Node.js y npm compatibles con las versiones de Vite y TypeScript declaradas en `package.json`.

```bash
git clone https://github.com/DalilaMiglio/task-manager-spa.git
cd task-manager-spa
npm ci
cp .env.example .env
```

Completar en `.env` la configuración de una aplicación web de Firebase:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Habilitar Authentication y crear una base de datos de Cloud Firestore en el proyecto Firebase. Si se utiliza Google como proveedor de acceso, habilitarlo y configurar los dominios autorizados.

```bash
npm run dev
```

Abrir la dirección local que indique Vite.

## Organización del código

```text
src/
├── components/   # Formulario y lista de tareas
├── hooks/        # Autenticación
├── pages/        # Registro, acceso y gestión de tareas
├── routes/       # Protección de rutas
├── services/     # Firebase y operaciones de datos
├── types/        # Tipos de TypeScript
├── App.tsx
└── main.tsx
```

La capa `services/taskService.ts` centraliza las operaciones de creación, consulta, actualización y eliminación. Las consultas filtran por `userId`.

El filtrado de la interfaz no sustituye las reglas de seguridad de Firestore. En cada entorno deben configurarse reglas que validen la identidad del usuario y la propiedad de los documentos.

## Comprobaciones disponibles

```bash
npm run lint
npm run build
npm run preview
```

- `lint`: revisión estática con ESLint.
- `build`: comprobación de TypeScript y compilación con Vite.
- `preview`: vista local del resultado compilado.

Para una comprobación funcional manual: registrar un usuario, iniciar sesión, crear una tarea, cambiar su estado, eliminarla y verificar la persistencia al volver a ingresar.

## Estado y límites

El núcleo implementado es la gestión de tareas con autenticación y persistencia.

**Correo con AWS SES:** se diseñó como una ampliación futura. La configuración de ejemplo incluye variables AWS, pero este repositorio no contiene una función de envío de correo desplegable. El envío en producción no fue validado. Esas variables no son necesarias para ejecutar el CRUD y no deben exponerse al frontend mediante el prefijo `VITE_`.

**Pruebas automatizadas:** las dependencias de Vitest están declaradas, pero el archivo actual bajo `tests/` no constituye una suite de pruebas ejecutable y no hay un script `test` en `package.json`. No se declara cobertura de pruebas.

## Aprendizajes

- Autenticación y navegación privada en una SPA.
- Modelado de tareas por usuario en Firestore.
- Separación entre componentes, páginas y servicios.
- Configuración mediante variables de entorno y despliegue en Vercel.

## Uso de IA

Utilicé IA como apoyo para comprender errores, organizar el proyecto y revisar documentación. El código y sus decisiones deben poder explicarse y comprobarse de forma independiente.

