# CRUD Supabase React

<div align="right">
  <strong>Language / Idioma:</strong>
  <a href="#english">🇺🇸 English</a> |
  <a href="#español">🇪🇸 Español</a>
</div>

---

<div id="english"></div>

## 🇺🇸 English

### Description

A modern React application with Supabase integration for user authentication and CRUD operations. This project implements a complete user management system with categories, featuring a clean architecture following Atomic Design principles.

### Features

- 🔐 **User Authentication** - Secure login and registration with Supabase
- 👥 **User Management** - Complete CRUD operations for users
- 📁 **Category Management** - CRUD operations for categories
- 🎨 **Theme Support** - Light and dark themes with styled-components
- 🔍 **Search Functionality** - Advanced search capabilities
- 📱 **Responsive Design** - Modern and intuitive UI
- 🧩 **Atomic Design** - Component architecture organized by atoms, molecules, and organisms

### Tech Stack

- **Frontend Framework:** React 18.2.0
- **Backend:** Supabase
- **Routing:** React Router DOM 6.9.0
- **Styling:** Styled Components 5.3.9
- **UI Components:** RSuite 5.60.0
- **Forms:** React Hook Form 7.51.4
- **Icons:** React Icons 4.8.0
- **Build Tool:** Vite 4.2.0

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd crud-supabase-react
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```env
VITE_APP_SUPABASE_URL=your_supabase_url
VITE_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # React components
│   ├── atomos/      # Atomic components
│   ├── moleculas/   # Molecular components
│   └── organismos/  # Organism components
├── context/         # React Context providers
├── pages/           # Page components
├── routers/         # Route configuration
├── styles/          # Theme and styling
├── supabase/        # Supabase configuration and CRUD operations
└── utils/           # Utility functions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Environment Variables

| Variable                     | Description                 |
| ---------------------------- | --------------------------- |
| `VITE_APP_SUPABASE_URL`      | Your Supabase project URL   |
| `VITE_APP_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is open source and available under the MIT License.

---

<div id="español"></div>

## 🇪🇸 Español

### Descripción

Una aplicación React moderna con integración de Supabase para autenticación de usuarios y operaciones CRUD. Este proyecto implementa un sistema completo de gestión de usuarios con categorías, presentando una arquitectura limpia siguiendo los principios de Atomic Design.

### Características

- 🔐 **Autenticación de Usuarios** - Inicio de sesión y registro seguro con Supabase
- 👥 **Gestión de Usuarios** - Operaciones CRUD completas para usuarios
- 📁 **Gestión de Categorías** - Operaciones CRUD para categorías
- 🎨 **Soporte de Temas** - Temas claro y oscuro con styled-components
- 🔍 **Funcionalidad de Búsqueda** - Capacidades de búsqueda avanzada
- 📱 **Diseño Responsivo** - Interfaz moderna e intuitiva
- 🧩 **Atomic Design** - Arquitectura de componentes organizada por átomos, moléculas y organismos

### Stack Tecnológico

- **Framework Frontend:** React 18.2.0
- **Backend:** Supabase
- **Enrutamiento:** React Router DOM 6.9.0
- **Estilos:** Styled Components 5.3.9
- **Componentes UI:** RSuite 5.60.0
- **Formularios:** React Hook Form 7.51.4
- **Iconos:** React Icons 4.8.0
- **Herramienta de Build:** Vite 4.2.0

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Cuenta y proyecto de Supabase

### Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd crud-supabase-react
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env` en el directorio raíz:

```env
VITE_APP_SUPABASE_URL=tu_url_de_supabase
VITE_APP_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

5. Abre tu navegador y navega a `http://localhost:5173`

### Estructura del Proyecto

```
src/
├── assets/           # Imágenes y recursos estáticos
├── components/       # Componentes React
│   ├── atomos/      # Componentes atómicos
│   ├── moleculas/   # Componentes moleculares
│   └── organismos/  # Componentes organismos
├── context/         # Proveedores de Context de React
├── pages/           # Componentes de página
├── routers/         # Configuración de rutas
├── styles/          # Tema y estilos
├── supabase/        # Configuración de Supabase y operaciones CRUD
└── utils/           # Funciones de utilidad
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza la construcción de producción

### Variables de Entorno

| Variable                     | Descripción                  |
| ---------------------------- | ---------------------------- |
| `VITE_APP_SUPABASE_URL`      | URL de tu proyecto Supabase  |
| `VITE_APP_SUPABASE_ANON_KEY` | Tu clave anónima de Supabase |

### Contribuciones

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

### Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

<div align="center">
  <p>Made with ❤️ using React and Supabase</p>
</div>
