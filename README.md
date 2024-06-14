# Plataforma de Cursos con Inteligencia Artificial

Este proyecto consiste en una plataforma de cursos en línea impulsada por inteligencia artificial para recomendación de contenido personalizado.

## Características principales

- Recomendación de cursos personalizados mediante inteligencia artificial.
- Catálogo de cursos con búsqueda y filtros.
- Perfiles de usuario con historial de cursos y preferencias.

## Tecnologías utilizadas

- TypeScript
- Node.js
- Express
- React
- FastAPI (para el servidor de IA en Python)
- GEMINI (modelo de inteligencia artificial)

## Instalación

### Backend (TS, Node, Express)

1. **Clona el repositorio:** 

   ```bash
   git clone https://github.com/DevMentorIA/Dev_MentorAI.git
   ```

2. **Navega al directorio del backend:** 

   ```bash
   cd server
   ```

3. **Instala las dependencias:** 

   ```bash
   npm install
   ```

4. **Inicia el servidor:** 

   ```bash
   npm run dev
   ```

### Servidor de IA (Python, FastAPI)

1. **Instala Python si no lo tienes instalado en tu sistema:** 

   ```bash
   cd server AI
   ```

2. **Instala un entorno virtual:** 

   ```bash
   pip install virtualenv 
   ```

3. **Inicia el entorno virtual:** 

   ```bash
   virtualenv env 
   ```

4. **Instala las dependencias:** 

   ```bash
   pip install -r requirement.txt
   ```

5. **Dentro de la carpeta crea un archivo llamado "clave.py" y declara la variable "clave" con tu API de Gemini.**

6. **Inicia el servidor con uvicorn:** 

   ```bash
   uvicorn main:app --reload
   ```

### Servidor del Cliente (REACT)
1. **Instalar las dependencias**
   ```cd client
   npm install
   ```
2. **Iniciar el servidor de React-Vite (puerto default 5173)**
   ```npm run dev
   ```