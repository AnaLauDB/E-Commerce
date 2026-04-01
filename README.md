# React E-Commerce - Tech Shop

Plataforma de comercio electrónico moderna para la venta de productos de tecnología. Construida con React, Vite y Context API para gestión de estado global.

## 🎯 Características

- **Catálogo de Productos**: Visualización de productos de tecnología con imagen, descripción y precio
- **Carrito de Compras**: Agregar, eliminar y ajustar cantidades de productos
- **Sistema de Filtros**: Filtrar por categoría y precio mínimo en tiempo real
- **Gestión de Estado Global**: Contextos separados para carrito y filtros
- **Interfaz Moderna**: Diseño elegante con gradientes, animaciones suaves y scroll personalizado
- **Responsive**: Optimizado para dispositivos de diferentes tamaños
- **Reducer Pattern**: Lógica centralizada del carrito mediante useReducer

## 🚀 Tecnologías Utilizadas

- **React 18**: Librería para construir interfaces de usuario
- **Vite**: Herramienta de build rápida y moderna
- **Context API**: Gestión de estado global (Carrito y Filtros)
- **useReducer**: Manejo de lógica compleja en el carrito
- **CSS3**: Estilos con gradientes y animaciones personalizadas
- **ESLint**: Linting y control de calidad de código

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx
│   ├── Products.jsx     # Catálogo de productos
│   ├── Cart.jsx         # Carrito de compras
│   ├── Filters.jsx      # Filtros de búsqueda
│   ├── Footer.jsx
│   ├── Icons.jsx        # Iconos SVG
│   └── *.css            # Estilos de componentes
├── context/             # Contextos globales
│   ├── cart.jsx         # CartProvider y CartContext
│   └── filsters.jsx     # FiltersProvider y FiltersContext
├── hooks/               # Hooks personalizados
│   ├── useCart.js       # Hook para acceder al carrito
│   └── useFilters.js    # Hook para acceder a filtros
├── reducers/            # Reducers para useReducer
│   └── cart.js          # Lógica del carrito
├── mocks/               # Datos de ejemplo
│   └── products.json    # Catálogo de productos
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/AnaLauDB/E-Commerce.git
cd E-Commerce
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📋 Comandos Disponibles

```bash
# Servidor de desarrollo con HMR
npm run dev

# Compilar para producción
npm run build

# Obtener una vista previa del build
npm run preview

# Ejecutar linter
npm run lint
```

## 💡 Funcionalidades Principales

### Carrito de Compras
- Agregar productos al carrito
- Aumentar o disminuir cantidades
- Eliminar productos
- Limpiar todo el carrito
- Visualización con scroll personalizado

### Filtros
- Filtrar por rango de precio
- Filtrar por categoría
- Actualización en tiempo real del catálogo

### Estado Global
- Context API para carrito y filtros
- Reducer pattern para lógica compleja
- Hooks personalizados para fácil acceso

## 🎨 Estilos y Animaciones

- Gradientes modernos en azul y cian
- Animaciones suave al pasar el mouse
- Efectos de elevación en tarjetas de productos
- Scrollbar personalizado con tema de la tienda
- Animación de deslizamiento para el carrito
- Transiciones suaves en botones

## 👨‍💻 Autor

Ana Lau - [@AnaLauDB](https://github.com/AnaLauDB)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir qué te gustaría cambiar.

---

**Nota**: Este es un proyecto educativo desarrollado como práctica de React, Context API y patrones de gestión de estado.
