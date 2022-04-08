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

# clase 17 webpack agregar preprocesadores css

hay 3 preprocesadores mas populares, veremos lo necesario para configurar cada uno:

para cualquiera de los tres hay que instalar sus dependencias:

```bash
npm install sass-loader node-sass -D
npm install less less-loader -D
npm install stylus stylus-loader -D
```

luego para configurarlos todos son iguales:
dentro de webpack en la seccion de rules hay que agregar su regla:

```js
// sass
{
	test: /\.scss$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'sass-loader'
	]
}
// less
{
	test: /\.less$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'less-loader'
	]
}
// stylus
{
	test: /\.styl$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'stylus-loader'
	]
}
```

curso recomendado:
https://platzi.com/cursos/preprocesadores/

# clase 18 garantizar desarrollo seguro.

utilizaremos un linter para que nos advierta de errores en el codigo y un formateador para que quede legible el codigo.

```bash
npm install -g eslint
npm install eslint @babel/eslint-parser eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
npm install prettier eslint-plugin-prettier eslint-config-prettier -D
```

## Nota babel-eslint deprecated

una de las cosas que se instalo babel-eslint esta deprecated, y hay que cambiarlo a uno nuevo.

https://tjaddison.com/blog/2021/03/updating-babel-eslint-to-babeleslint-parser-for-react-apps/

se modifico los pasos para que sea transparente.

## formatear al guardar archivo Prettier.

necesitamos instalar el plugin esbenp.prettier-vscode

y entrar a los settings de vscode, y configurar el formateado al guardar "format on save"
y configurar el formateador por defecto a prettier.

tambien se modifico npm start, para que formate el codigo y luego ejecute.