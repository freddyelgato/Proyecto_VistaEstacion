PROYECTO VISTA DE DENUNCIAS – REACT NATIVE CON EXPO

Este proyecto corresponde a una vista móvil desarrollada con React Native y Expo,
cuyo objetivo es mostrar una interfaz de seguimiento y control de denuncias,
basada en un diseño previo (Figma).

La aplicación presenta estadísticas, buscador, filtros y tarjetas de denuncias,
utilizando estilos modernos y responsivos con NativeWind (Tailwind CSS).

--------------------------------------------------

CREACIÓN DEL PROYECTO

El proyecto fue creado desde cero utilizando el siguiente comando:

npx rn-new --nativewind

Este comando genera una aplicación React Native con Expo e integración directa
de NativeWind para el manejo de estilos.

--------------------------------------------------

TECNOLOGÍAS UTILIZADAS

- React Native
- Expo
- TypeScript
- NativeWind (Tailwind CSS)
- Expo Vector Icons
- Node.js

--------------------------------------------------

ESTRUCTURA DEL PROYECTO

my-expo-app/
|
|-- components/
|   |-- Header.tsx
|   |-- StatsCard.tsx
|   |-- SearchBar.tsx
|   |-- FilterTabs.tsx
|   |-- DenunciaCard.tsx
|
|-- screens/
|   |-- DenunciasScreen.tsx
|
|-- App.tsx
|-- tailwind.config.js
|-- package.json
|-- README.md

components/: contiene los componentes reutilizables de la interfaz.
screens/: contiene la vista principal que integra todos los componentes.
App.tsx: punto de entrada de la aplicación.

--------------------------------------------------

EJECUCIÓN DEL PROYECTO

1. Instalar dependencias:

npm install

2. Ejecutar el proyecto:

npx expo start

3. Escanear el código QR con la aplicación Expo Go
   desde un dispositivo móvil Android o iOS.

--------------------------------------------------

CAPTURAS DE LA APLICACIÓN

Vista principal de la aplicación:

https://res.cloudinary.com/dpi6hn3kz/image/upload/v1768940682/959bda08-b674-429d-b123-0a59ba8126a2_dsc32e.jpg

Ejecución del proyecto con Expo (QR):

https://res.cloudinary.com/dpi6hn3kz/image/upload/v1768940682/Capturaiiui_zpe5dd.png

--------------------------------------------------

FUNCIONALIDADES

- Visualización de estadísticas de denuncias
- Barra de búsqueda
- Filtros por estado (Todas, Pendientes, Resueltas)
- Tarjetas informativas de denuncias
- Diseño moderno y responsivo

--------------------------------------------------

AUTOR

Fredy Moreira
Proyecto académico – React Native con Expo
