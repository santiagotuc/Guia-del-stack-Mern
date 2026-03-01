export const TEMPLATES = [
  // ==========================================
  // ⚛️ FASE 1: REACT (Conceptos y Setup)
  // ==========================================

  {
    id: "react-intro",
    stack: "react",
    title: "0. ¿Qué es React?",
    desc: "React es una biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario. Su enfoque principal es la construcción de 'Componentes' reutilizables y el uso de un Virtual DOM para actualizar la pantalla de forma extremadamente rápida sin recargar la página.",
    keywords: ["definicion", "que es", "teoria", "virtual dom", "componentes"],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: En entrevistas, destaca que React es 'declarativo' (le dices qué quieres mostrar, no cómo hacerlo paso a paso) y basado en 'componentes'.",
      },
    ],
  },

  {
    id: "react-init-vite",
    stack: "react",
    title: "1. Inicializar Proyecto React (Vite)",
    desc: "Crear un proyecto React desde cero usando Vite. Es el estándar actual, mucho más rápido que Create React App gracias a su empaquetado optimizado.",
    keywords: ["instalar", "vite", "inicio", "crear", "npm", "setup"],
    steps: [
      "Abre la terminal donde quieras crear tu proyecto.",
      "Ejecuta el comando de creación y sigue las instrucciones (elige React y JavaScript).",
      "Entra a la carpeta creada, instala las dependencias y arranca el servidor.",
    ],
    codes: [
      `npm create vite@latest mi-proyecto -- --template react\ncd mi-proyecto\nnpm install\nnpm run dev`,
    ],
    alerts: [
      {
        type: "ok",
        msg: "Vite ya te configura automáticamente el archivo .gitignore, ¡así que no subirás la pesada carpeta node_modules a GitHub!",
      },
    ],
  },

  {
    id: "react-clean-folder",
    stack: "react",
    title: "2. Estructura de Carpetas Limpia",
    desc: "Organización recomendada dentro de la carpeta 'src' para escalar tu aplicación de forma profesional.",
    keywords: [
      "carpetas",
      "estructura",
      "arquitectura",
      "limpio",
      "src",
      "organización",
    ],
    codes: [
      `src/\n ├── assets/      # Imágenes, iconos, fuentes\n ├── components/  # Componentes reutilizables (Botones, Tarjetas)\n ├── context/     # Estados globales (Context API)\n ├── hooks/       # Custom hooks (ej: useFetch)\n ├── pages/       # Vistas completas de la app (Home, Login)\n ├── services/    # Llamadas a la API (fetch/axios)\n ├── utils/       # Funciones de ayuda y formateadores\n ├── App.jsx      # Componente raíz\n └── main.jsx     # Punto de entrada de React`,
    ],
  },

  {
    id: "react-use-state",
    stack: "react",
    title: "3. ¿Qué es un Estado? (useState)",
    desc: "El Estado es la 'memoria' de un componente. Es una variable especial que, cuando cambia su valor, le avisa a React que debe volver a renderizar (dibujar) esa parte de la pantalla para mostrar el nuevo dato.",
    keywords: ["estado", "usestate", "memoria", "hook", "variables", "render"],
    codes: [
      `import { useState } from 'react';\n\nfunction Contador() {\n  // variable (contador), función para modificarla (setContador), valor inicial (0)\n  const [contador, setContador] = useState(0);\n\n  return (\n    <div>\n      <p>Has hecho clic {contador} veces</p>\n      <button onClick={() => setContador(contador + 1)}>\n        Incrementar\n      </button>\n    </div>\n  );\n}`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Nunca modifiques el estado directamente (ej: contador = 1). Usa SIEMPRE la función actualizadora (setContador) para que React se entere del cambio.",
      },
    ],
  },

  {
    id: "react-use-effect",
    stack: "react",
    title: "4. Efectos Secundarios (useEffect)",
    desc: "Un 'efecto secundario' es cualquier operación que interactúa con el mundo exterior al componente (ej: hacer una petición a una API, suscripciones, timers). useEffect permite sincronizar el componente con sistemas externos.",
    keywords: ["useeffect", "efectos", "api", "fetch", "ciclo de vida", "hook"],
    codes: [
      `import { useState, useEffect } from 'react';\n\nfunction Usuarios() {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    // Este código se ejecuta DESPUÉS de que el componente se dibuja\n    fetch('https://api.ejemplo.com/users')\n      .then(res => res.json())\n      .then(datos => setData(datos));\n      \n    // El array vacío [] al final significa: "Ejecuta esto SOLO UNA VEZ al montar el componente"\n  }, []); \n\n  return <div>{data.length} usuarios cargados</div>;\n}`,
    ],
  },

  {
    id: "react-error-render",
    stack: "react",
    title: "5. Error: Too many re-renders",
    desc: "El famoso error de bucle infinito. Ocurre al ejecutar una función de estado directamente al renderizar en lugar de pasarla como referencia (ej: en un onClick).",
    keywords: ["error", "loop", "infinito", "re-render", "onclick", "fallo"],
    codes: [
      `// ❌ INCORRECTO (Ejecuta la función inmediatamente y causa bucle):\n<button onClick={setContador(contador + 1)}>Cliquear</button>\n\n// ✅ CORRECTO (Pasa una función flecha que espera el clic):\n<button onClick={() => setContador(contador + 1)}>Cliquear</button>`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Si ves 'Maximum update depth exceeded' en la consola, revisa tus onClick y useEffect. Seguramente estás actualizando un estado sin una condición o sin una arrow function.",
      },
    ],
  },

  {
    id: "react-19-use",
    stack: "react",
    title: "6. Novedad React 19: Hook use()",
    desc: "Te permite leer Promesas (como un fetch) o Contextos directamente en el render, reemplazando a useEffect para cargar datos.",
    keywords: ["use", "react 19", "promesa", "fetch", "suspense", "novedad"],
    steps: [
      "Importar 'use' y 'Suspense' de react.",
      "Crear la Promesa fuera del componente (o pasarla como prop).",
      "Envolver el componente en un <Suspense>.",
    ],
    codes: [
      `import { use, Suspense } from "react";\n\nconst fetchUsuarios = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());\n\nfunction ListaUsuarios() {\n  const usuarios = use(fetchUsuarios);\n  return <ul>{usuarios.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}\n\nexport default function App() {\n  return (\n    <Suspense fallback={<p>Cargando usuarios...</p>}>\n      <ListaUsuarios />\n    </Suspense>\n  );\n}`,
    ],
  },

  {
    id: "react-19-actions",
    stack: "react",
    title: "7. Novedad React 19: Actions",
    desc: "Manejo nativo de formularios asíncronos con useActionState. Ya no necesitas e.preventDefault() ni múltiples estados para el 'loading'.",
    keywords: ["actions", "formularios", "react 19", "useactionstate"],
    codes: [
      `import { useActionState } from "react";\n\nasync function actualizarNombre(estadoAnterior, formData) {\n  const nombre = formData.get("nombre");\n  await new Promise(resolve => setTimeout(resolve, 1500));\n  return \`¡Guardado: \${nombre}!\`;\n}\n\nexport default function Perfil() {\n  const [mensaje, formAction, isPending] = useActionState(actualizarNombre, null);\n\n  return (\n    <form action={formAction}>\n      <input name="nombre" placeholder="Nombre" required />\n      <button disabled={isPending}>{isPending ? "Guardando..." : "Actualizar"}</button>\n      {mensaje && <p>{mensaje}</p>}\n    </form>\n  );\n}`,
    ],
  },
  {
    id: "react-target-blank-security",
    stack: "react",
    title: "8. Seguridad en Enlaces (noopener)",
    desc: "Explicación de por qué siempre debes acompañar target='_blank' con rel='noopener noreferrer'. Protege tu aplicación de ataques cortando el vínculo entre la pestaña original y la nueva.",
    keywords: [
      "seguridad",
      "enlaces",
      "target",
      "blank",
      "noopener",
      "noreferrer",
    ],
    codes: [
      `// ❌ Inseguro (React te dará un warning)\n<a href="https://github.com" target="_blank">\n  Mi GitHub\n</a>\n\n// ✅ Seguro y profesional\n<a \n  href="https://github.com" \n  target="_blank" \n  rel="noopener noreferrer"\n>\n  Mi GitHub\n</a>`,
    ],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: 'noopener' evita que la nueva pestaña secuestre el objeto 'window.opener' de tu sitio, previniendo ataques de Phishing (Tabnabbing).",
      },
    ],
  },

  {
    id: "react-virtual-dom",
    stack: "react",
    title: "9. Teoría: ¿Qué es el Virtual DOM?",
    desc: "Es el 'secreto' de la velocidad de React. Es una copia ligera del DOM real (la estructura de tu web). Cuando un estado cambia, React actualiza este Virtual DOM primero, compara las diferencias con la versión anterior (proceso llamado 'Diffing') y luego actualiza en el DOM real ÚNICAMENTE la parte que cambió, en lugar de recargar toda la página.",
    keywords: [
      "virtual dom",
      "teoria",
      "rendimiento",
      "diffing",
      "reconciliacion",
      "entrevista",
    ],
    alerts: [
      {
        type: "ok",
        msg: "Tip de Entrevista: Menciona que este proceso de comparar el Virtual DOM antiguo con el nuevo y actualizar el DOM real se llama 'Reconciliación' (Reconciliation).",
      },
    ],
  },

  {
    id: "react-context-api",
    stack: "react",
    title: "10. Estado Global (Context API)",
    desc: "Sirve para compartir estados (como el usuario logueado o el tema oscuro/claro) entre muchos componentes sin tener que pasar 'props' de un componente a otro nivel por nivel (evita el 'Prop Drilling').",
    keywords: [
      "context",
      "estado global",
      "usecontext",
      "prop drilling",
      "provider",
    ],
    steps: [
      "1. Crear el Contexto (createContext).",
      "2. Crear un Provider que envuelva a los componentes que necesitarán los datos.",
      "3. Consumir el contexto en cualquier componente hijo usando useContext().",
    ],
    codes: [
      `// 1. Crear y exportar el Contexto (ThemeContext.jsx)\nimport { createContext, useState } from 'react';\n\nexport const ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [tema, setTema] = useState('oscuro');\n  return (\n    <ThemeContext.Provider value={{ tema, setTema }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}`,
      `// 2. Usarlo en un componente hijo (Boton.jsx)\nimport { useContext } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nfunction Boton() {\n  const { tema, setTema } = useContext(ThemeContext);\n  return (\n    <button onClick={() => setTema(tema === 'oscuro' ? 'claro' : 'oscuro')}>\n      Tema actual: {tema}\n    </button>\n  );\n}`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Context API es genial para datos que no cambian constantemente. Si tienes datos que cambian muchas veces por segundo, es mejor usar gestores como Zustand o Redux por rendimiento.",
      },
    ],
  },

  // ==========================================
  // 🟩 FASE 2: NODE.JS & EXPRESS (Backend)
  // ==========================================

  {
    id: "node-intro",
    stack: "node",
    title: "11. Teoría: ¿Qué es Node.js?",
    desc: "Node.js NO es un lenguaje ni un framework. Es un 'Entorno de Ejecución' (Runtime Environment) que te permite ejecutar código JavaScript fuera del navegador (es decir, en un servidor o en tu computadora).",
    keywords: [
      "definicion",
      "que es node",
      "entorno",
      "v8",
      "backend",
      "teoria",
    ],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: Node.js está construido sobre el motor V8 de Google Chrome. Su mayor ventaja es que es 'asíncrono y no bloqueante', ideal para manejar miles de conexiones simultáneas.",
      },
    ],
  },

  {
    id: "express-intro",
    stack: "express",
    title: "12. Teoría: ¿Qué es Express?",
    desc: "Express es el framework de backend más popular para Node.js. Facilita enormemente la creación de servidores web y el manejo de rutas (endpoints) (ej: GET, POST) en comparación con usar Node.js puro.",
    keywords: ["definicion", "que es express", "framework", "teoria"],
    steps: [
      "1. Inicializar Node: npm init -y",
      "2. Instalar Express: npm install express",
    ],
    codes: [`npm init -y\nnpm install express`],
  },

  {
    id: "node-env",
    stack: "node",
    title: "13. Variables de Entorno (.env)",
    desc: "Oculta contraseñas, puertos y URIs de bases de datos. Si subes contraseñas a GitHub, los bots pueden robarlas en segundos.",
    keywords: ["env", "dotenv", "seguridad", "variables", "process.env"],
    steps: [
      "1. Instalar dotenv: npm install dotenv",
      "2. Crear archivo .env en la raíz",
      "3. Importarlo en tu servidor",
    ],
    codes: [
      `# En archivo .env\nPORT=4000\nMONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/miapp`,
      `// En server.js\nimport 'dotenv/config'; \nconsole.log(process.env.PORT);`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "El archivo .env JAMÁS se sube a GitHub. Debe estar listado dentro de tu archivo .gitignore siempre.",
      },
    ],
  },

  {
    id: "express-setup-pro",
    stack: "express",
    title: "14. Servidor Express Profesional",
    desc: "Estructura moderna preparada para conectar con el Frontend (React) usando CORS y JSON.",
    keywords: ["express", "servidor", "cors", "app", "backend", "arquitectura"],
    steps: ["Instalar dependencias: npm install express cors dotenv"],
    codes: [
      `import express from 'express';\nimport cors from 'cors';\nimport 'dotenv/config';\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middlewares (Intermediarios)\napp.use(cors()); // Permite peticiones del Frontend\napp.use(express.json()); // Permite leer req.body en formato JSON\n\napp.get('/api/health', (req, res) => res.json({ status: 'API Online 🚀' }));\n\napp.listen(PORT, () => console.log(\`Servidor en puerto \${PORT}\`));`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Error EADDRINUSE: Significa que el puerto (ej: 3000) ya está siendo usado. Cambia el puerto en tu .env o cierra la terminal que quedó abierta.",
      },
    ],
  },

  {
    id: "express-post",
    stack: "express",
    title: "15. Ruta POST y Error req.body",
    desc: "Crea un endpoint para recibir datos del frontend (ej: el envío de un formulario de registro).",
    keywords: ["express", "post", "ruta", "body", "req.body", "crear"],
    codes: [
      `app.post('/api/usuarios', (req, res) => {\n  const { nombre, email } = req.body;\n  \n  // Validación simple\n  if (!nombre || !email) {\n    return res.status(400).json({ error: 'Faltan datos' });\n  }\n  \n  res.status(201).json({ mensaje: 'Usuario guardado', data: { nombre, email } });\n});`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Error 'Cannot destructure property of req.body as it is undefined': Ocurre porque olvidaste escribir 'app.use(express.json())' antes de tus rutas.",
      },
    ],
  },

  {
    id: "express-architecture",
    stack: "express",
    title: "16. Teoría: Arquitectura Limpia (MVC)",
    desc: "Separar tu código en capas (Rutas, Controladores y Modelos) hace que tu backend sea escalable y fácil de mantener. Evita tener un archivo 'server.js' gigante de 1000 líneas.",
    keywords: [
      "mvc",
      "arquitectura",
      "controladores",
      "rutas",
      "limpio",
      "patron",
      "teoria",
    ],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: Menciona en entrevistas el principio de 'Responsabilidad Única'. Las Rutas solo dirigen el tráfico, los Controladores ejecutan la lógica de negocio, y los Modelos hablan con la base de datos.",
      },
    ],
  },

  {
    id: "express-router-modular",
    stack: "express",
    title: "17. Modularidad: Archivo de Rutas",
    desc: "Usa express.Router() para agrupar todas las rutas de una entidad (ej: usuarios) en un solo archivo. Aquí NO va la lógica, solo se define el método HTTP (GET, POST) y se llama al Controlador.",
    keywords: ["router", "rutas", "express", "separar", "modular", "endpoints"],
    codes: [
      `// 1. En routes/usuarios.routes.js\nimport { Router } from 'express';\nimport { getUsuarios, crearUsuario } from '../controllers/usuarios.controller.js';\n\nconst router = Router();\n\n// Solo definimos LA RUTA y EL CONTROLADOR que la maneja\nrouter.get('/', getUsuarios);\nrouter.post('/', crearUsuario);\n\nexport default router;`,
      `// 2. En tu archivo principal: server.js\nimport rutasUsuarios from './routes/usuarios.routes.js';\n\n// Conectar el router a una ruta base\napp.use('/api/usuarios', rutasUsuarios);`,
    ],
    alerts: [
      {
        type: "ok",
        msg: "Ventaja: Si el frontend hace un fetch a 'http://localhost:3000/api/usuarios', Express sabe automáticamente que debe ir a buscar dentro de 'usuarios.routes.js'.",
      },
    ],
  },

  {
    id: "express-controllers",
    stack: "express",
    title: "18. Modularidad: Controladores",
    desc: "El controlador es la función que contiene la 'lógica de negocio'. Aquí es donde validas datos, hablas con la base de datos y devuelves la respuesta (res.json) al frontend.",
    keywords: ["controladores", "logica", "req", "res", "modular", "separar"],
    codes: [
      `// En controllers/usuarios.controller.js\n\nexport const getUsuarios = async (req, res) => {\n  // Aquí iría la consulta a MongoDB: const usuarios = await Usuario.find();\n  res.status(200).json({ msg: "Lista de todos los usuarios enviada" });\n};\n\nexport const crearUsuario = async (req, res) => {\n  const { nombre, email } = req.body;\n  \n  if(!nombre) return res.status(400).json({ error: "Falta el nombre" });\n\n  // Aquí iría el guardado en MongoDB: await nuevoUsuario.save();\n  res.status(201).json({ msg: \`Usuario \${nombre} creado con éxito\` });\n};`,
    ],
  },
  // ==========================================
  // 🍃 FASE 3: MONGODB & MONGOOSE (Base de Datos)
  // ==========================================

  {
    id: "mongo-intro",
    stack: "mongo",
    title: "19. Teoría: ¿Qué es MongoDB y Mongoose?",
    desc: "MongoDB es una base de datos NoSQL. A diferencia de SQL (tablas y filas), guarda la información en 'Documentos' similares a objetos JSON. Mongoose es una librería (un ODM) que nos ayuda a conectar Node.js con MongoDB y a darle una estructura estricta a esos documentos.",
    keywords: [
      "definicion",
      "nosql",
      "bson",
      "mongoose",
      "base de datos",
      "odm",
      "teoria",
    ],
    steps: ["Instalar mongoose en tu proyecto backend: npm install mongoose"],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: En entrevistas, explica que usas Mongoose porque MongoDB por defecto es 'schemaless' (sin esquema fijo), y Mongoose te permite validar los datos antes de guardarlos para evitar inconsistencias.",
      },
    ],
  },

  {
    id: "mongo-connect",
    stack: "mongo",
    title: "20. Conexión a MongoDB Atlas",
    desc: "Plantilla para conectar tu backend a la nube de MongoDB usando Mongoose. Esta función se suele llamar dentro de tu 'server.js' antes de arrancar el servidor.",
    keywords: ["mongo", "mongoose", "conexion", "connect", "atlas", "nube"],
    codes: [
      `// En config/db.js (o database.js)\nimport mongoose from 'mongoose';\n\nexport const conectarDB = async () => {\n  try {\n    // process.env.MONGO_URI viene de tu archivo .env\n    await mongoose.connect(process.env.MONGO_URI);\n    console.log('✅ Base de datos MongoDB conectada');\n  } catch (error) {\n    console.error('❌ Error de conexión:', error.message);\n    process.exit(1); // Detiene la aplicación si falla la DB\n  }\n};`,
      `// En tu server.js\nimport { conectarDB } from './config/db.js';\n\nconectarDB(); // Llamas a la función antes de app.listen()`,
    ],
  },

  {
    id: "mongo-schema",
    stack: "mongo",
    title: "21. Definir un Modelo (Schema)",
    desc: "Crea la estructura estricta para los documentos que guardarás en una colección. Un Modelo es como el 'molde' para crear nuevos registros.",
    keywords: ["mongo", "mongoose", "schema", "esquema", "modelo", "coleccion"],
    codes: [
      `// En models/Usuario.js\nimport mongoose from 'mongoose';\n\nconst usuarioSchema = new mongoose.Schema({\n  nombre: {\n    type: String,\n    required: true,\n    trim: true // Quita espacios al inicio y final\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true // No pueden existir dos emails iguales\n  },\n  rol: {\n    type: String,\n    enum: ['USER', 'ADMIN'], // Solo acepta estos dos valores\n    default: 'USER'\n  }\n}, {\n  timestamps: true // Agrega automáticamente createdAt y updatedAt\n});\n\n// Si el modelo ya existe lo usa, sino lo crea\nconst Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);\nexport default Usuario;`,
    ],
  },

  {
    id: "mongo-crud-create-read",
    stack: "mongo",
    title: "22. CRUD: Crear y Leer (Mongoose)",
    desc: "Cómo guardar un nuevo documento en la base de datos (POST) y cómo obtener todos los documentos (GET) desde tus controladores.",
    keywords: [
      "crud",
      "crear",
      "leer",
      "find",
      "save",
      "post",
      "get",
      "controlador",
    ],
    codes: [
      `import Usuario from '../models/Usuario.js';\n\n// 🟢 LEER (GET)\nexport const getUsuarios = async (req, res) => {\n  try {\n    const usuarios = await Usuario.find(); // Trae todos los registros\n    res.json(usuarios);\n  } catch (error) {\n    res.status(500).json({ error: 'Error al obtener usuarios' });\n  }\n};\n\n// 🟢 CREAR (POST)\nexport const crearUsuario = async (req, res) => {\n  try {\n    const nuevoUsuario = new Usuario(req.body);\n    const usuarioGuardado = await nuevoUsuario.save(); // Guarda en MongoDB\n    res.status(201).json(usuarioGuardado);\n  } catch (error) {\n    res.status(400).json({ error: 'Error al crear el usuario' });\n  }\n};`,
    ],
  },

  {
    id: "mongo-crud-update-delete",
    stack: "mongo",
    title: "23. CRUD: Actualizar y Borrar",
    desc: "Cómo buscar un documento por su ID para modificar sus datos (PUT/PATCH) o para eliminarlo definitivamente (DELETE).",
    keywords: [
      "crud",
      "actualizar",
      "borrar",
      "put",
      "delete",
      "findByIdAndUpdate",
      "findByIdAndDelete",
    ],
    codes: [
      `import Usuario from '../models/Usuario.js';\n\n// 🟠 ACTUALIZAR (PUT)\nexport const actualizarUsuario = async (req, res) => {\n  try {\n    const { id } = req.params; // Viene de la URL: /api/usuarios/12345\n    \n    // { new: true } es para que devuelva el documento YA actualizado\n    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });\n    \n    if (!usuarioActualizado) return res.status(404).json({ error: 'No encontrado' });\n    res.json(usuarioActualizado);\n  } catch (error) {\n    res.status(400).json({ error: 'Error al actualizar' });\n  }\n};\n\n// 🔴 BORRAR (DELETE)\nexport const borrarUsuario = async (req, res) => {\n  try {\n    const { id } = req.params;\n    const usuarioBorrado = await Usuario.findByIdAndDelete(id);\n    \n    if (!usuarioBorrado) return res.status(404).json({ error: 'No encontrado' });\n    res.json({ mensaje: 'Usuario eliminado correctamente' });\n  } catch (error) {\n    res.status(400).json({ error: 'Error al borrar' });\n  }\n};`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Error 'Cast to ObjectId failed': Ocurre cuando intentas buscar un documento pero el ID que le pasas por la URL no tiene el formato válido de 24 caracteres de MongoDB.",
      },
    ],
  },
  // ==========================================
  // 🔐 FASE 4: AUTENTICACIÓN (Bcrypt & JWT)
  // ==========================================

  {
    id: "auth-bcrypt",
    stack: "node",
    title: "24. Seguridad: Encriptar Contraseñas (Bcrypt)",
    desc: "NUNCA debes guardar contraseñas en texto plano en tu base de datos. Si un atacante entra, robará todo. Usamos bcryptjs para transformar '123456' en un 'hash' indescifrable.",
    keywords: [
      "seguridad",
      "bcrypt",
      "hash",
      "password",
      "contraseña",
      "encriptar",
    ],
    steps: ["Instalar paquete: npm install bcryptjs"],
    codes: [
      `import bcrypt from 'bcryptjs';\n\n// 🟢 Al CREAR el usuario (Registro)\nconst encriptarPassword = async (passwordPlano) => {\n  const salt = await bcrypt.genSalt(10); // Nivel de seguridad (10 es el estándar)\n  const passwordHasheado = await bcrypt.hash(passwordPlano, salt);\n  return passwordHasheado;\n  // Guarda este 'passwordHasheado' en tu base de datos MongoDB\n};\n\n// 🟢 Al LOGUEAR al usuario (Login)\nconst verificarPassword = async (passwordIngresado, passwordEnBD) => {\n  // Compara la contraseña que escribió el usuario con el hash guardado\n  const esCorrecto = await bcrypt.compare(passwordIngresado, passwordEnBD);\n  return esCorrecto; // Devuelve true o false\n};`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Dato vital: Bcrypt es de un solo sentido. Puedes convertir una contraseña en Hash, pero NO puedes convertir el Hash de vuelta a la contraseña original. Solo puedes compararlos.",
      },
    ],
  },

  {
    id: "auth-jwt-intro",
    stack: "node",
    title: "25. Teoría: ¿Qué es JWT?",
    desc: "JSON Web Token (JWT) es un estándar para la autenticación sin estado (Stateless). Cuando el usuario hace login con éxito, el servidor le entrega un 'pase VIP' (el Token). El cliente (React) guarda este token y lo envía en cada petición futura para demostrar quién es, sin que el servidor tenga que buscarlo en la base de datos a cada rato.",
    keywords: ["jwt", "token", "autenticacion", "login", "teoria"],
    steps: [
      "Instalar paquete: npm install jsonwebtoken",
      "Agregar una clave secreta en tu archivo .env: JWT_SECRET=MiSuperClaveSecreta123",
    ],
  },

  {
    id: "auth-jwt-login",
    stack: "express",
    title: "26. Generar JWT (Controlador Login)",
    desc: "La función que valida el email y la contraseña, y si todo está bien, 'firma' un token y se lo envía al frontend.",
    keywords: ["login", "jwt", "sign", "token", "auth", "controlador"],
    codes: [
      `import bcrypt from 'bcryptjs';\nimport jwt from 'jsonwebtoken';\nimport Usuario from '../models/Usuario.js';\n\nexport const login = async (req, res) => {\n  const { email, password } = req.body;\n\n  try {\n    // 1. Verificar si el usuario existe\n    const usuario = await Usuario.findOne({ email });\n    if (!usuario) return res.status(400).json({ error: 'Credenciales inválidas' });\n\n    // 2. Verificar la contraseña\n    const passwordValido = await bcrypt.compare(password, usuario.password);\n    if (!passwordValido) return res.status(400).json({ error: 'Credenciales inválidas' });\n\n    // 3. Generar el JWT (El payload es la info pública que viaja en el token)\n    const payload = { id: usuario._id, rol: usuario.rol };\n    const token = jwt.sign(payload, process.env.JWT_SECRET, {\n      expiresIn: '1d' // El token expira en 1 día\n    });\n\n    // 4. Enviar el token al frontend\n    res.json({ mensaje: 'Login exitoso', token });\n\n  } catch (error) {\n    res.status(500).json({ error: 'Error en el servidor' });\n  }\n};`,
    ],
    alerts: [
      {
        type: "info",
        msg: "Por seguridad, el mensaje de error debe ser genérico ('Credenciales inválidas'). Si dices 'Contraseña incorrecta', un atacante sabrá que el email sí existe en tu base de datos.",
      },
    ],
  },

  {
    id: "auth-middleware",
    stack: "express",
    title: "27. Middleware para Proteger Rutas",
    desc: "Un 'guardia de seguridad' que pones en las rutas que requieren inicio de sesión (ej: /api/perfil). Extrae el token, comprueba si es válido, y si lo es, deja pasar la petición.",
    keywords: ["middleware", "proteger", "rutas", "jwt", "verify", "headers"],
    codes: [
      `// En middlewares/authMiddleware.js\nimport jwt from 'jsonwebtoken';\n\nexport const verificarToken = (req, res, next) => {\n  // El token suele venir en los headers bajo la clave 'Authorization' como 'Bearer <token>'\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1]; // Extraemos solo el token\n\n  if (!token) {\n    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });\n  }\n\n  try {\n    // Si el token es válido, extrae los datos (ej: el id del usuario)\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.usuario = decoded; // Guardamos la info en la request para usarla en el controlador\n    \n    next(); // Deja pasar a la ruta\n  } catch (error) {\n    res.status(403).json({ error: 'Token inválido o expirado' });\n  }\n};`,
      `// 🟢 CÓMO USARLO EN TUS RUTAS (routes/usuarios.routes.js)\nimport { Router } from 'express';\nimport { obtenerPerfil } from '../controllers/usuarios.controller.js';\nimport { verificarToken } from '../middlewares/authMiddleware.js';\n\nconst router = Router();\n\n// Agregas verificarToken ANTES de tu controlador\nrouter.get('/perfil', verificarToken, obtenerPerfil);\n\nexport default router;`,
    ],
  },
  // ==========================================
  // 🔗 FASE 5: INTEGRACIÓN FRONTEND (React + Auth)
  // ==========================================

  {
    id: "react-auth-context",
    stack: "react",
    title: "28. Estado Global de Sesión (AuthContext)",
    desc: "Para saber si el usuario está logueado en cualquier parte de la app (ej: para ocultar el botón de 'Login' en el Header), creamos un Contexto dedicado a la autenticación.",
    keywords: ["context", "authcontext", "sesion", "estado", "login", "global"],
    codes: [
      `import { createContext, useState, useEffect } from 'react';\n\nexport const AuthContext = createContext();\n\nexport const AuthProvider = ({ children }) => {\n  const [token, setToken] = useState(null);\n  const [cargando, setCargando] = useState(true);\n\n  // Al cargar la app, revisamos si ya había un token guardado en el navegador\n  useEffect(() => {\n    const tokenGuardado = localStorage.getItem('token');\n    if (tokenGuardado) setToken(tokenGuardado);\n    setCargando(false);\n  }, []);\n\n  // Función para cerrar sesión\n  const logout = () => {\n    localStorage.removeItem('token');\n    setToken(null);\n  };\n\n  return (\n    <AuthContext.Provider value={{ token, setToken, logout, cargando }}>\n      {children}\n    </AuthContext.Provider>\n  );\n};`,
    ],
  },

  {
    id: "react-login-fetch",
    stack: "react",
    title: "29. Petición de Login y LocalStorage",
    desc: "Cómo enviar los datos del formulario al backend, recibir el JWT si el login es correcto, y guardarlo en el almacenamiento local del navegador (LocalStorage).",
    keywords: ["fetch", "login", "localstorage", "post", "token", "guardar"],
    codes: [
      `import { useContext, useState } from 'react';\nimport { AuthContext } from '../context/AuthContext';\n\nexport default function LoginForm() {\n  const { setToken } = useContext(AuthContext);\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n\n  const manejarSubmit = async (e) => {\n    e.preventDefault();\n    \n    const res = await fetch('http://localhost:3000/api/auth/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ email, password })\n    });\n    \n    const data = await res.json();\n\n    if (res.ok) {\n      // 1. Guardamos el token en el navegador para que no se borre al recargar\n      localStorage.setItem('token', data.token);\n      // 2. Actualizamos el estado global para que toda la app sepa que entramos\n      setToken(data.token);\n      alert('¡Bienvenido!');\n    } else {\n      alert(data.error); // Ej: "Credenciales inválidas"\n    }\n  };\n\n  // ... return <form onSubmit={manejarSubmit}> ...\n}`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Seguridad: LocalStorage es accesible mediante JavaScript. En aplicaciones bancarias o ultra seguras, el token se guarda en 'HttpOnly Cookies', pero para el 90% de los proyectos freelance, LocalStorage es el estándar inicial.",
      },
    ],
  },

  {
    id: "react-fetch-protected",
    stack: "react",
    title: "30. Consumir API Protegida (Enviar Token)",
    desc: "Cómo pedirle datos al backend en una ruta protegida. Debes enviar el token dentro de las cabeceras (Headers) de tu petición fetch para demostrar quién eres.",
    keywords: [
      "fetch",
      "get",
      "headers",
      "authorization",
      "bearer",
      "token",
      "api",
    ],
    codes: [
      `const obtenerPerfilUsuario = async () => {\n  // 1. Recuperamos el token de donde lo guardamos\n  const token = localStorage.getItem('token');\n\n  if (!token) return console.error("No estás logueado");\n\n  // 2. Hacemos la petición enviando el token\n  const res = await fetch('http://localhost:3000/api/usuarios/perfil', {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      // ¡Esta es la clave! El formato estándar es "Bearer " + el token\n      'Authorization': \`Bearer \${token}\` \n    }\n  });\n\n  const data = await res.json();\n  \n  if (res.ok) {\n    console.log("Datos del usuario:", data);\n  } else {\n    console.error("Error o token expirado:", data.error);\n  }\n};`,
    ],
  },

  {
    id: "react-protected-route",
    stack: "react",
    title: "31. Rutas Privadas (React Router DOM)",
    desc: "Cómo evitar que un usuario sin sesión entre a páginas como el '/dashboard'. Creamos un componente envoltorio que revisa si hay token antes de mostrar la página.",
    keywords: [
      "router",
      "rutas privadas",
      "protected route",
      "navigate",
      "redirect",
      "seguridad",
    ],
    steps: [
      "Instalar React Router: npm install react-router-dom",
      "Crear el componente RutaPrivada",
      "Envolver tus páginas sensibles con este componente en tu App.jsx",
    ],
    codes: [
      `// 1. Componente RutaPrivada.jsx\nimport { useContext } from 'react';\nimport { Navigate } from 'react-router-dom';\nimport { AuthContext } from '../context/AuthContext';\n\nexport default function RutaPrivada({ children }) {\n  const { token, cargando } = useContext(AuthContext);\n\n  if (cargando) return <p>Cargando...</p>;\n\n  // Si no hay token, lo mandamos de una patada a la página de login\n  if (!token) {\n    return <Navigate to="/login" replace />;\n  }\n\n  // Si hay token, renderiza la página que intentaba ver\n  return children;\n}`,
      `// 2. En tu App.jsx o Router principal\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport RutaPrivada from './components/RutaPrivada';\nimport Dashboard from './pages/Dashboard';\nimport Login from './pages/Login';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/login" element={<Login />} />\n        \n        {/* Esta ruta ahora está protegida */}\n        <Route \n          path="/dashboard" \n          element={\n            <RutaPrivada>\n              <Dashboard />\n            </RutaPrivada>\n          } \n        />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
    ],
  },
  // ==========================================
  // 🚀 FASE 6: REACT AVANZADO Y UI
  // ==========================================

  {
    id: "react-custom-hook-fetch",
    stack: "react",
    title: "32. Custom Hook Reutilizable (useFetch)",
    desc: "En lugar de escribir estados de 'cargando', 'error' y 'datos' en cada componente que hace una petición a la API, creamos un Hook personalizado para reciclar esa lógica en toda la app.",
    keywords: [
      "custom hook",
      "usefetch",
      "reutilizar",
      "fetch",
      "api",
      "optimizar",
      "limpio",
    ],
    codes: [
      `// En hooks/useFetch.js\nimport { useState, useEffect } from 'react';\n\nexport const useFetch = (url) => {\n  const [data, setData] = useState(null);\n  const [cargando, setCargando] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const res = await fetch(url);\n        if (!res.ok) throw new Error('Error en la petición');\n        const json = await res.json();\n        setData(json);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setCargando(false);\n      }\n    };\n    fetchData();\n  }, [url]); // Se vuelve a ejecutar si la URL cambia\n\n  return { data, cargando, error };\n};`,
      `// 🟢 CÓMO USARLO EN CUALQUIER COMPONENTE\nimport { useFetch } from '../hooks/useFetch';\n\nexport default function ListaUsuarios() {\n  const { data, cargando, error } = useFetch('https://api.tudominio.com/usuarios');\n\n  if (cargando) return <p>Cargando usuarios...</p>;\n  if (error) return <p>Hubo un error: {error}</p>;\n\n  return <ul>{data.map(u => <li key={u.id}>{u.nombre}</li>)}</ul>;\n}`,
    ],
  },

  {
    id: "react-tailwind-setup",
    stack: "react",
    title: "33. Configuración: Tailwind CSS (Vite)",
    desc: "Tailwind CSS es el framework de estilos más demandado del mercado. Permite maquetar rapidísimo usando clases de utilidad directamente en el JSX.",
    keywords: [
      "tailwind",
      "css",
      "vite",
      "instalar",
      "configuracion",
      "estilos",
    ],
    steps: [
      "1. Instalar dependencias en la terminal.",
      "2. Inicializar el archivo de configuración (tailwind.config.js).",
      "3. Configurar las rutas en tailwind.config.js.",
      "4. Agregar las directivas a tu archivo index.css principal.",
    ],
    codes: [
      `npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`,
      `// En tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nexport default {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}", // Le dice a Tailwind dónde buscar tus clases\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`,
      `/* En tu archivo src/index.css (borra todo lo anterior y pon esto) */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;`,
    ],
    alerts: [
      {
        type: "ok",
        msg: "Una vez configurado, puedes usar clases como <div className='flex items-center justify-between p-4 bg-blue-500 rounded-lg'> sin escribir una sola línea de CSS tradicional.",
      },
    ],
  },

  // ==========================================
  // 🛠️ FASE 7: BACKEND AVANZADO (Validaciones y Archivos)
  // ==========================================

  {
    id: "node-zod-validation",
    stack: "node",
    title: "34. Validación Estricta con Zod",
    desc: "Antes de guardar algo en la Base de Datos o procesar un login, debes validar que el frontend te envió los datos correctos (ej: que el email sea un email real, que la contraseña tenga 8 caracteres). Zod es la herramienta moderna para esto.",
    keywords: [
      "zod",
      "validacion",
      "esquema",
      "seguridad",
      "middlewares",
      "errores",
    ],
    steps: ["Instalar Zod: npm install zod"],
    codes: [
      `// 1. En schemas/auth.schema.js\nimport { z } from 'zod';\n\nexport const registroSchema = z.object({\n  nombre: z.string({ required_error: "El nombre es requerido" }).min(3, "Mínimo 3 letras"),\n  email: z.string({ required_error: "Email requerido" }).email("Email no válido"),\n  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")\n});`,
      `// 2. En middlewares/validarSchema.js\nexport const validarSchema = (schema) => (req, res, next) => {\n  try {\n    schema.parse(req.body); // Si los datos no cumplen las reglas, lanza un error\n    next(); // Si todo está bien, pasa al controlador\n  } catch (error) {\n    return res.status(400).json({ errores: error.errors.map(err => err.message) });\n  }\n};`,
      `// 3. En tus rutas (routes/auth.routes.js)\nimport { validarSchema } from '../middlewares/validarSchema.js';\nimport { registroSchema } from '../schemas/auth.schema.js';\n\n// ¡El middleware filtra los datos antes de que lleguen a la lógica pesada!\nrouter.post('/registro', validarSchema(registroSchema), registrarUsuario);`,
    ],
  },

  {
    id: "express-multer-upload",
    stack: "express",
    title: "35. Subida de Archivos/Imágenes (Multer)",
    desc: "Node.js no sabe leer archivos (como fotos de perfil o PDFs) por defecto cuando vienen de un formulario Frontend. Multer es el middleware encargado de procesar archivos 'multipart/form-data'.",
    keywords: [
      "multer",
      "archivos",
      "imagenes",
      "upload",
      "subida",
      "multipart",
    ],
    steps: [
      "Instalar Multer: npm install multer",
      "Crear una carpeta 'uploads' en la raíz de tu backend.",
    ],
    codes: [
      `// En middlewares/multer.js\nimport multer from 'multer';\nimport path from 'path';\n\n// Configuramos DÓNDE se guardan y con QUÉ NOMBRE\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/'); // Carpeta de destino\n  },\n  filename: (req, file, cb) => {\n    // Renombramos: id-unico + extensión original (ej: 1654321-foto.jpg)\n    cb(null, Date.now() + path.extname(file.originalname));\n  }\n});\n\n// Filtro opcional: solo aceptar imágenes\nconst fileFilter = (req, file, cb) => {\n  if (file.mimetype.startsWith('image/')) {\n    cb(null, true);\n  } else {\n    cb(new Error('Solo se permiten imágenes'), false);\n  }\n};\n\nexport const upload = multer({ storage, fileFilter });`,
      `// 🟢 CÓMO USARLO EN TUS RUTAS\nimport { Router } from 'express';\nimport { upload } from '../middlewares/multer.js';\n\nconst router = Router();\n\n// 'avatar' es el nombre del campo (name) en el <input type="file"> del frontend\nrouter.post('/subir-foto', upload.single('avatar'), (req, res) => {\n  if (!req.file) return res.status(400).json({ error: 'Falta el archivo' });\n  \n  res.json({\n    mensaje: 'Archivo subido con éxito',\n    ruta: \`/uploads/\${req.file.filename}\`\n  });\n});\n\nexport default router;`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Recuerda hacer estática la carpeta 'uploads' en tu server.js (app.use('/uploads', express.static('uploads'))) para que el frontend pueda ver las imágenes mediante su URL.",
      },
    ],
  },

  // ==========================================
  // 🐙 FASE 8: GIT (Primeros pasos)
  // ==========================================

  {
    id: "git-init-repo",
    stack: "git",
    title: "36. Git: Subir proyecto por primera vez",
    desc: "Los pasos exactos para conectar tu código local con un repositorio vacío recién creado en GitHub. Es el puente inicial antes de poder hacer tus commits diarios.",
    keywords: [
      "git",
      "github",
      "init",
      "remote",
      "origin",
      "primera vez",
      "subir",
      "repositorio",
    ],
    steps: [
      "1. Crea un repositorio vacío en GitHub (sin README ni .gitignore).",
      "2. Abre la terminal en la carpeta de tu proyecto local.",
      "3. Inicializa Git, prepara los archivos y haz el primer commit.",
      "4. Conecta tu carpeta local con la URL de GitHub y empuja el código.",
    ],
    codes: [
      `git init\ngit add .\ngit commit -m "🎉 commit inicial"\ngit branch -M main\ngit remote add origin https://github.com/TU-USUARIO/TU-REPO.git\ngit push -u origin main`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "El comando 'git remote add origin' solo se hace UNA vez en la vida del proyecto. Después de esto, para guardar cambios solo usarás add, commit y push.",
      },
    ],
  },
  // ==========================================
  // 🌍 FASE 8: GIT Y DESPLIEGUE (Producción)
  // ==========================================

  {
    id: "git-basics",
    stack: "git", // Puedes agregarle un iconito o color nuevo a este stack en tu CSS
    title: "37. Git: Guardar tu progreso (Commits)",
    desc: "Comandos esenciales para no perder nunca tu código. Un 'commit' es como un punto de guardado en un videojuego. Acostúmbrate a hacer uno cada vez que termines una función nueva.",
    keywords: [
      "git",
      "github",
      "commit",
      "push",
      "add",
      "guardar",
      "repositorio",
    ],
    steps: [
      "1. git add . (Prepara todos los archivos modificados)",
      "2. git commit -m 'feat: descripción clara' (Crea el punto de guardado)",
      "3. git push origin main (Sube los cambios a la nube de GitHub)",
    ],
    codes: [
      `git add .\ngit commit -m "feat: agregada validación de login con Zod"\ngit push origin main`,
    ],
    alerts: [
      {
        type: "info",
        msg: "Buenas prácticas: Usa prefijos en tus commits. 'feat:' para nuevas características, 'fix:' para arreglar errores, y 'docs:' para documentación.",
      },
    ],
  },

  {
    id: "deploy-vercel",
    stack: "react",
    title: "38. Despliegue Frontend: Vercel",
    desc: "Vercel es la plataforma ideal y gratuita para subir tu aplicación React/Vite a internet. Se conecta directo a tu GitHub y se actualiza solo cada vez que haces un 'git push'.",
    keywords: [
      "deploy",
      "vercel",
      "frontend",
      "produccion",
      "subir",
      "react",
      "vite",
    ],
    steps: [
      "1. Sube tu código a un repositorio público o privado en GitHub.",
      "2. Entra a vercel.com y vincula tu cuenta de GitHub.",
      "3. Dale a 'Add New Project' y selecciona tu repositorio.",
      "4. Vercel detecta automáticamente que es Vite. Si usas variables de entorno (.env) en React (ej: VITE_API_URL), agrégalas en el apartado 'Environment Variables'.",
      "5. Haz clic en 'Deploy'.",
    ],
  },

  {
    id: "deploy-render",
    stack: "node",
    title: "39. Despliegue Backend: Render",
    desc: "Render.com es una excelente alternativa gratuita para subir tu servidor Node.js/Express. Solo necesitas configurar correctamente tu package.json.",
    keywords: [
      "deploy",
      "render",
      "backend",
      "produccion",
      "subir",
      "node",
      "express",
    ],
    steps: [
      "1. En Render, crea un nuevo 'Web Service' conectado a tu GitHub.",
      "2. Build Command: npm install",
      "3. Start Command: npm start",
      "4. IMPORTANTE: Ve a 'Environment' y pega todas las variables de tu archivo .env (MONGO_URI, JWT_SECRET, PORT, etc.).",
    ],
    codes: [
      `// En tu package.json, Render necesita un script de inicio claro:\n"scripts": {\n  "start": "node server.js",\n  "dev": "nodemon server.js"\n}`,
    ],
    alerts: [
      {
        type: "warn",
        msg: "Limitación: Los servidores gratuitos de Render se 'duermen' tras 15 minutos sin recibir peticiones. La primera petición que reciban después de ese tiempo tardará unos 50 segundos en responder mientras el servidor 'despierta'.",
      },
    ],
  },

  {
    id: "express-cors-prod",
    stack: "express",
    title: "40. Seguridad: CORS en Producción",
    desc: "Cuando subes tu proyecto a internet, tu Frontend (Vercel) y tu Backend (Render) tendrán URLs distintas. Debes configurar CORS para que tu backend bloquee peticiones extrañas y solo acepte las de tu frontend.",
    keywords: [
      "cors",
      "produccion",
      "seguridad",
      "deploy",
      "express",
      "bloqueo",
    ],
    codes: [
      `import cors from 'cors';\n\n// La URL que te dio Vercel al subir tu React\nconst urlsPermitidas = ['https://emuna-frontend.vercel.app']; \n\nconst corsOptions = {\n  origin: function (origin, callback) {\n    // Permitimos peticiones sin origen (como Postman en desarrollo) o si están en la lista\n    if (!origin || urlsPermitidas.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('No permitido por CORS'));\n    }\n  },\n  credentials: true // Necesario si manejas cookies o tokens muy estrictos\n};\n\napp.use(cors(corsOptions));`,
    ],
  },
  // ==========================================
  // 🧪 FASE 9: TESTING (Asegurando la calidad)
  // ==========================================

  {
    id: "testing-intro",
    stack: "node", // Puedes usar un icono de probeta o Jest
    title: "41. Teoría: ¿Por qué y con qué testear?",
    desc: "El testing automatizado consiste en escribir código que prueba tu propio código. Los 'Test Unitarios' prueban una sola función aislada, mientras que los 'Test de Integración' prueban cómo interactúan varias partes (ej: Frontend con Backend).",
    keywords: [
      "test",
      "jest",
      "unitario",
      "integracion",
      "qa",
      "calidad",
      "teoria",
    ],
    alerts: [
      {
        type: "info",
        msg: "Lenguaje Técnico: En el ecosistema MERN, el estándar indiscutible de la industria es usar 'Jest' como motor de pruebas, junto con 'React Testing Library' para el Frontend y 'Supertest' para el Backend.",
      },
    ],
  },

  {
    id: "testing-react-jest",
    stack: "react",
    title: "42. Test Básico en React (Jest + RTL)",
    desc: "Cómo comprobar que un componente se dibuja correctamente en la pantalla sin tener que abrir el navegador. Vite permite configurar 'Vitest' (que es idéntico a Jest pero más rápido).",
    keywords: ["react", "test", "jest", "vitest", "rtl", "render", "screen"],
    codes: [
      `// En src/components/Boton.test.jsx\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport Boton from './Boton';\n\ntest('El botón debe cambiar de texto al hacer clic', async () => {\n  // 1. Renderizamos el componente en un DOM virtual\n  render(<Boton />);\n  \n  // 2. Buscamos el elemento en la pantalla\n  const boton = screen.getByRole('button', { name: /hacer clic/i });\n  \n  // 3. Simulamos que el usuario hace clic\n  await userEvent.click(boton);\n  \n  // 4. Afirmamos (Expect) el resultado esperado\n  expect(boton).toHaveTextContent('¡Clickeado!');\n});`,
    ],
  },

  {
    id: "testing-backend-supertest",
    stack: "express",
    title: "43. Test de Rutas Express (Supertest)",
    desc: "Permite simular peticiones HTTP (GET, POST) a tu servidor Express sin tener que levantarlo realmente en un puerto. Es ideal para probar que tus rutas devuelven el estado 200 o 400 correcto.",
    keywords: [
      "express",
      "test",
      "jest",
      "supertest",
      "rutas",
      "endpoint",
      "http",
    ],
    steps: ["Instalar dependencias: npm install -D jest supertest"],
    codes: [
      `// En tests/usuarios.test.js\nimport request from 'supertest';\nimport app from '../server.js'; // Tu app de Express (sin el app.listen)\n\ndescribe('Pruebas sobre la API de Usuarios', () => {\n\n  test('GET /api/usuarios debe devolver un status 200 y un array', async () => {\n    const response = await request(app).get('/api/usuarios');\n    \n    expect(response.statusCode).toBe(200);\n    expect(Array.isArray(response.body)).toBeTruthy();\n  });\n\n  test('POST /api/usuarios sin datos debe devolver error 400', async () => {\n    const response = await request(app).post('/api/usuarios').send({});\n    \n    expect(response.statusCode).toBe(400);\n    expect(response.body.error).toBeDefined();\n  });\n\n});`,
    ],
  },

  // ==========================================
  // 🎯 FASE 10: ARQUITECTURA Y SOLUCIONES AVANZADAS
  // ==========================================

  {
    id: "node-advanced-streaming",
    stack: "node",
    title: "44. Solución: Endpoint de Video Streaming (Estilo YouTube)",
    desc: "Problema: Enviar un video entero usando res.sendFile satura la RAM del servidor y obliga al cliente a esperar la descarga total. Solución: Usar el estándar HTTP 206 (Partial Content) y 'Streams' para enviar el video en pequeños fragmentos (chunks) a medida que el reproductor lo solicita.",
    keywords: [
      "solucion",
      "streaming",
      "video",
      "fs",
      "createReadStream",
      "206",
      "partial content",
      "rendimiento",
      "optimizacion",
    ],
    codes: [
      `import fs from 'fs';\nimport path from 'path';\n\napp.get('/video', (req, res) => {\n  // 1. Verificamos que el cliente envíe el header 'Range' (ej: bytes=0-)\n  const range = req.headers.range;\n  if (!range) return res.status(400).send("Falta el header Range");\n\n  const videoPath = path.join(__dirname, 'videos', 'sample.mp4');\n  const videoSize = fs.statSync(videoPath).size;\n\n  // 2. Calculamos qué fragmento de video enviar\n  const CHUNK_SIZE = 10 ** 6; // 1MB (Enviamos de a 1 Mega)\n  const start = Number(range.replace(/\\D/g, ""));\n  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);\n  const contentLength = end - start + 1;\n\n  // 3. Headers estrictos del estándar HTTP 206 para streaming\n  const headers = {\n    "Content-Range": \`bytes \${start}-\${end}/\${videoSize}\`,\n    "Accept-Ranges": "bytes",\n    "Content-Length": contentLength,\n    "Content-Type": "video/mp4",\n  };\n\n  // 4. Respondemos con 206 (Contenido Parcial) y abrimos el Stream\n  res.writeHead(206, headers);\n  const videoStream = fs.createReadStream(videoPath, { start, end });\n  videoStream.pipe(res);\n});`,
    ],
    alerts: [
      {
        type: "info",
        msg: "Nota de Arquitectura: Al usar fs.createReadStream().pipe(res), Node.js gestiona la memoria de forma ultra eficiente, transmitiendo el archivo directamente a la respuesta de red sin cargarlo todo en la RAM.",
      },
    ],
  },

  {
    id: "node-architecture-event-loop",
    stack: "node",
    title: "45. Arquitectura: El Event Loop bajo el capó",
    desc: "Fundamento crítico del rendimiento. Node.js se ejecuta en un solo hilo (Single-Threaded). Para manejar miles de conexiones concurrentes sin bloquearse, delega las tareas pesadas de I/O (leer archivos, consultar BD) al sistema operativo mediante la librería 'libuv'.",
    keywords: [
      "arquitectura",
      "teoria",
      "event loop",
      "hilos",
      "asincrono",
      "libuv",
      "rendimiento",
    ],
    steps: [
      "1. Call Stack: Ejecuta el código JavaScript síncrono de forma inmediata.",
      "2. Tareas pesadas (ej: consultas a la base de datos) se derivan a 'libuv' (que maneja múltiples hilos en segundo plano).",
      "3. Callback Queue: Cuando la tarea de fondo termina, la función de respuesta (callback) pasa a esta cola de espera.",
      "4. Event Loop: Monitorea constantemente. Si el Call Stack está vacío, sube la función de la cola al Stack para ejecutarla.",
    ],
    alerts: [
      {
        type: "warn",
        msg: "Fallo común en producción: Bloquear el Event Loop ejecutando procesos matemáticos complejos o bucles masivos de forma síncrona. Esto congela el servidor para todos los usuarios simultáneamente.",
      },
    ],
  },
];
