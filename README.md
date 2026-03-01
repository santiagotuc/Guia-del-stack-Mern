# 🚀 Guía del Stack MERN - Biblioteca de Soluciones

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Una Single Page Application (SPA) diseñada para centralizar, organizar y buscar rápidamente fragmentos de código, configuraciones y soluciones arquitectónicas del ecosistema **MERN** (MongoDB, Express, React, Node.js).

🔗 **[Ver la aplicación en vivo (Vercel)](https://guia-del-stack-mern.vercel.app/)**

## 🎯 El Propósito del Proyecto

Como Full Stack Developer, noté que gran parte del tiempo de desarrollo se invierte en reescribir configuraciones base o buscar cómo resolver problemas arquitectónicos ya superados en el pasado.

Construí esta herramienta como un **"Segundo Cerebro"**. Contiene más de 45 plantillas que abarcan desde lo esencial (inicializar un proyecto con Vite o crear un CRUD) hasta temas avanzados como:

- **Seguridad:** Encriptación con Bcrypt y middlewares para JWT.
- **Arquitectura Node.js:** Entendimiento del Event Loop y optimización de memoria.
- **Rendimiento:** Creación de endpoints de Video Streaming (HTTP 206 Partial Content) eficientes usando `fs.createReadStream`.
- **Testing:** Configuración de Jest y Supertest.

## ✨ Características Principales

- **Búsqueda Inteligente:** Filtra en tiempo real por título, descripción o palabras clave (keywords) gracias a una lógica optimizada con `useMemo` en React.
- **Categorización por Stack:** Filtros rápidos para aislar soluciones de React, Node, Express, MongoDB o comandos de Git.
- **Syntax Highlighting:** Bloques de código con resaltado de sintaxis (estilo VS Code Dark+) usando `react-syntax-highlighter`.
- **Portapapeles:** Copia de código a un clic usando la API nativa del navegador.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19, Vite.
- **Estilos:** CSS Modules puros con variables nativas para un diseño responsivo y modo oscuro por defecto.
- **Deploy:** Vercel (CI/CD automático desde la rama main).

## 🚀 Instalación y Uso Local

Si deseas correr este proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone (https://github.com/santiagotuc/Guia-del-stack-Mern.git)

   ```

2. Entra al directorio:

cd TU-NOMBRE-DE-REPO

3. Instala las dependencias:

npm install

4. Inicia el servidor de desarrollo:

npm run dev

Desarrollado con ☕ y código limpio por Santiago Emmanuel Molina.
