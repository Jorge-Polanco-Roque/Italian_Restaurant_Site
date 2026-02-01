# Bella Italia - Sitio Web Restaurante Italiano

## Descripción del Proyecto
Sitio web completo para el restaurante italiano "Bella Italia" con diseño minimalista, moderno y elegante inspirado en la estética italiana.

## Tecnologías Utilizadas
- **React 19.2.0** - Biblioteca de UI (última versión)
- **Vite 7.3.1** - Build tool y dev server ultra-rápido
- **React Router DOM 7.13.0** - Navegación entre páginas
- **CSS3** - Estilos personalizados sin frameworks adicionales

## Estructura del Proyecto
```
bella-italia/
├── src/
│   ├── assets/          # Imágenes del restaurante
│   │   ├── logo.png     # Logo del restaurante
│   │   ├── pizza.avif   # Imagen de pizza
│   │   ├── lasana.jpg   # Imagen de lasaña
│   │   ├── pasta.avif   # Imagen de pasta
│   │   └── vino.jpg     # Imagen de vino
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx   # Barra de navegación con logo y menú
│   │   └── Navbar.css   # Estilos del navbar
│   ├── pages/          # Páginas principales
│   │   ├── Home.jsx    # Página de inicio
│   │   ├── Home.css    # Estilos de Home
│   │   ├── Menu.jsx    # Página de menú con filtros
│   │   ├── Menu.css    # Estilos de Menu
│   │   ├── Contact.jsx # Página de contacto con formulario
│   │   └── Contact.css # Estilos de Contact
│   ├── App.jsx         # Componente principal con React Router
│   ├── App.css         # Estilos de App
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales y sistema de diseño
├── package.json
├── vite.config.js
└── index.html
```

## Sistema de Diseño

### Paleta de Colores
- **Verde Oliva**: `#2D4A3E` - Color principal, evoca la naturaleza italiana
- **Terracota**: `#D4725C` - Color secundario, representa la tierra toscana
- **Dorado**: `#C9A961` - Color de acento, elegancia y sofisticación
- **Crema**: `#FFF8F0` - Fondo cálido y acogedor
- **Blanco**: `#FFFFFF` - Superficies limpias y minimalistas

### Tipografía
- **Títulos**: Cormorant Garamond (serif elegante)
- **Cuerpo**: Montserrat (sans-serif moderna y legible)

### Principios de Diseño
1. **Minimalismo**: Espacios blancos generosos, diseño limpio
2. **Elegancia**: Tipografía serif para títulos, transiciones suaves
3. **Calidez**: Paleta de colores tierra inspirada en Italia
4. **Funcionalidad**: Todos los botones y elementos son completamente funcionales

## Secciones del Sitio

### 1. Home (Inicio)
- Hero section con logo prominente y animaciones
- Mensaje de bienvenida elegante
- Galería de 4 platos destacados con cards interactivas
- Sección "Sobre Nosotros" con historia del restaurante
- Call-to-action para reservas con gradiente

### 2. Menú
- Hero banner con gradiente oliva-terracota
- Filtros interactivos por categoría (Todos, Pizzas, Pastas, Bebidas)
- Grid responsivo de platos (12 items)
- Cards con imágenes, descripciones y precios en euros
- Hover effects en cards
- CTA para reservar mesa al final

### 3. Contacto
- Hero banner con gradiente
- Layout de 2 columnas: Info + Formulario
- Información completa: dirección, teléfono, email, horarios
- Enlaces a redes sociales
- Formulario funcional con validación
- Campos: nombre, email, teléfono, fecha, hora, personas, comentarios
- Mensajes de éxito/error
- Diseño responsive

## Características Técnicas

### Navegación
- React Router DOM v6 para SPA (Single Page Application)
- Navbar sticky con logo (sin texto redundante)
- Indicador visual de página activa
- Navegación fluida entre páginas
- URLs semánticas (/, /menu, /contact)
- Botón "Reservar Mesa" en navbar

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px
- Grid adaptativo con CSS Grid
- Navbar se reorganiza en móvil
- Formulario de contacto cambia a columna única
- Tipografía escalable según viewport

### Funcionalidad Interactiva
- Filtros de menú por categoría con estado React (useState)
- Formulario de contacto con:
  - Validación de campos requeridos
  - Manejo de estado del formulario
  - Mensajes de éxito/error
  - Auto-limpieza después de envío
- Animaciones CSS (fadeIn, fadeInDown, fadeInUp, float)
- Hover effects en cards, botones y enlaces
- Transiciones suaves (0.3s ease)

### Optimizaciones
- Lazy loading de imágenes (loading="lazy")
- Variables CSS para reutilización
- Fuentes Google Fonts optimizadas
- Imágenes en formato AVIF para mejor compresión
- Box-shadow y transforms con GPU acceleration
- Smooth scroll behavior
- Sin dependencias CSS externas (vanilla CSS)

## Comandos de Desarrollo

### Instalación
```bash
cd bella-italia
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre el navegador en `http://localhost:4000`

**Nota**: El servidor está configurado para usar el **puerto 4000** (no el puerto por defecto 5173 de Vite)

### Build para Producción
```bash
npm run build
```

### Preview de Producción
```bash
npm run preview
```

## Estado del Proyecto

### Completado ✅
- [x] Inicialización del proyecto con Vite
- [x] Estructura de carpetas completa
- [x] Instalación de dependencias (React Router DOM)
- [x] Assets copiados al proyecto
- [x] Sistema de diseño CSS completo (variables, colores, tipografía)
- [x] Componente Navbar con navegación activa
- [x] Página Home con hero, featured dishes, about, CTA
- [x] Página Menú con filtros interactivos
- [x] Página Contacto con formulario funcional
- [x] React Router configurado con 3 rutas
- [x] Funcionalidad de todos los botones y enlaces
- [x] Diseño responsive para móvil, tablet y desktop
- [x] Animaciones y transiciones CSS
- [x] Servidor de desarrollo funcionando
- [x] Configuración de puerto personalizado (4000)
- [x] Documentación completa actualizada
- [x] Solución de problemas de cache y configuración

### Servidor Activo 🚀
**URL**: `http://localhost:4000`
**Estado**: Configurado y listo para usar
**Puerto personalizado**: 4000 (configurado en vite.config.js y package.json)

## Características Destacadas

### Componentes Implementados
1. **Navbar.jsx**: Barra de navegación sticky con:
   - Logo del restaurante (sin texto redundante)
   - Menú de navegación (Inicio, Menú, Contacto)
   - Botón "Reservar Mesa"
   - Indicador visual de página activa
   - Responsive con reorganización en móvil

2. **Home.jsx**: Página de inicio con:
   - Hero section animado con logo y mensajes
   - Grid de 4 platos destacados
   - Sección "Sobre Nosotros" con features
   - CTA final con gradiente

3. **Menu.jsx**: Página de menú con:
   - 12 platos en total
   - Filtros por categoría (Todos, Pizzas, Pastas, Bebidas)
   - Cards interactivas con precios
   - Estado React para filtrado dinámico

4. **Contact.jsx**: Formulario de contacto con:
   - Información del restaurante
   - Formulario con 7 campos
   - Validación de datos
   - Mensajes de feedback
   - Layout de 2 columnas

### Sistema de Diseño CSS
- **Variables CSS**: 20+ variables personalizadas
- **Paleta**: 6 colores temáticos italianos
- **Tipografías**: Google Fonts (2 familias)
- **Grid System**: Responsive con CSS Grid
- **Utilidades**: Clases helper para spacing y layout
- **Animaciones**: 4 keyframes personalizados
- **Botones**: 3 variantes (primary, secondary, outline)

## Notas Técnicas
- **Vite 7.3.1** como build tool (más rápido que CRA)
- **React 19.2.0** con hooks modernos (useState, useLocation)
- **React Router DOM v7.13.0** para enrutamiento avanzado
- **CSS vanilla** sin frameworks (menor bundle size)
- Fuentes Google Fonts cargadas desde CDN
- Imágenes AVIF para mejor compresión
- Logo optimizado y sin texto redundante en navbar
- Scroll suave con CSS (`scroll-behavior: smooth`)

## Configuración del Servidor de Desarrollo

El proyecto usa **puerto personalizado 4000** en lugar del puerto por defecto de Vite (5173).

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    strictPort: true,  // Falla si el puerto 4000 está ocupado
  },
})
```

### package.json
```json
{
  "scripts": {
    "dev": "vite --port 4000",  // Flag explícito de puerto
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Importante**: El puerto 4000 está configurado tanto en `vite.config.js` como en el script `dev` de `package.json` para garantizar consistencia. Si necesitas cambiar el puerto, debes modificarlo en ambos archivos.

## Solución de Problemas Comunes

### Problema: El servidor arranca en puerto 5173 en lugar de 4000
**Causa**: Cache de la terminal o procesos zombies de Vite
**Solución**:
1. Cierra completamente la terminal y abre una nueva
2. O ejecuta: `pkill -9 node` para matar todos los procesos Node
3. Limpia el cache de npm: `npm cache clean --force`
4. Limpia el cache de Vite: `rm -rf node_modules/.vite`

### Problema: "Port 4000 is already in use"
**Solución**:
1. Encuentra el proceso: `lsof -i :4000`
2. Mátalo: `kill -9 <PID>`
3. O cambia el puerto en vite.config.js y package.json

## Gestión del Proyecto con Claude Code

### Archivos de Configuración

**CLAUDE.md** (este archivo)
- Ubicación: Raíz del proyecto
- Propósito: Instrucciones y contexto para Claude Code
- Se versiona en Git para compartir con el equipo

**.claude/settings.local.json**
- Ubicación: `.claude/` (no versionado en Git)
- Propósito: Permisos automáticos para comandos
- Ejemplo:
```json
{
  "permissions": {
    "allow": [
      "Bash(npm install)",
      "Bash(npm run dev:*)",
      "Read(//Users/A1064331/**)"
    ]
  }
}
```

### Lecciones Aprendidas

1. **Cache de Terminal**: Cuando cambies archivos de configuración (package.json, vite.config.js), cierra y reabre la terminal para aplicar los cambios
2. **Doble Configuración de Puerto**: Configurar el puerto tanto en vite.config.js como en el script npm garantiza consistencia
3. **Procesos Zombies**: Usar `pkill -9 node` para limpiar procesos en background que puedan causar conflictos
4. **Limpieza de Cache**: `npm cache clean --force` y `rm -rf node_modules/.vite` resuelven muchos problemas

## Próximos Pasos (Opcional)
1. ✨ Agregar modo oscuro
2. 🌐 Internacionalización (ES/EN)
3. 📱 Progressive Web App (PWA)
4. 🔍 SEO avanzado con React Helmet
5. 📊 Analytics con Google Analytics
6. 🗺️ Integrar Google Maps en página de contacto
7. 📧 Backend para formulario de contacto (Node.js/Express)
8. 🎬 Más animaciones con Framer Motion
9. 🖼️ Galería de imágenes del restaurante
10. ⭐ Sección de testimonios/reseñas
