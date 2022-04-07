# curso platzi parte practica "Curso Profesional de React Hooks" profesor "Oscar Barajas Tavares"

este curso empieza en el video 14

# clase 14

### instalacion

comezamos inicializando el git y escribiendo el .gitignore
luego inicializamos npm con npm init, y rellenamos lo clasico.
luego instalmos las depenendecias para crear un proyecto de React (no usaremso create-react-app) todo a manito.

```bash
npm install react react-dom
```

luego creamos las estructura de carpetas para nuestro proyecto.

# clase 15

instalar webpack, webpack-dev-server, y babel

webpack para compilar los archivos js, con sus plugins para enlazar y copiar automaticamente el html.
y babel para tener las ultimas funcionalidad de javascript.

```bash
npm install webpack webpack-cli webpack-dev-server -D
npm install html-webpack-plugin html-loader -D
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D
```

# clase 16, configurar webpack, babel

creamos el objeto webpack.config.js, configuraremos el proyecto, que archivos tiene que detectar, las reglas, que plugins usar..

con lo hecho en esta clase, se va a poder ejecutar npm start, e iniciar un servidor de desarrollo.
El cual tomara todos los .js y .jsx de src, los compilara a la version mas compatible con babel, y enlazara el html con el js. poniendolo en dist/

# clase 17 configurar webpack css

configuracion de webpack para enlazar css.

```bash
npm install css-loader mini-css-extract-plugin -D
```
