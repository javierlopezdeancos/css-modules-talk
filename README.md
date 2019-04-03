# CSS Modules

![css modules logo](images/css-modules-logo.png)

## ¿Qué es?



Según el [repositorio](https://github.com/css-modules/css-modules), *CSS modules* son:

​     **Archivos CSS en los que los nombres de las clases y los nombres de las animaciones tienen un alcance local de forma predeterminada.**

Por lo tanto, *CSS modules* no es una especificación oficial ni una implementación en el navegador, sino más bien un proceso en un paso de compilación (con la ayuda de Webpack , Gulp, Rollup, Parcel o Browserify) que cambia los nombres de clase y los selectores que se van a definir.



```html
<button class="button">common button</button>
```



`button.css`

```css
.button {
  	text-transform: uppercase;
	font-size: 16px;
	font-weight: 600;
	border-radius: 0;
	padding: 20px 60px;
	border: none;
}
```



`button.js React`

```javascript
import styles from "./button.css";

element.innerHTML = 
  `<button class="${styles.button}">
     common button
   </button>`;
```



Y el código generado sería:



`html`

```html
<button class="_styles__button_309571057">
  COMMON BUTTON
</button>
```

`css`

```css
._styles__button_309571057 {
  background-color: red;
}
```





![common buttonn](images/common-button.png)





## ¿Qué problema resuelve?



 ### "El scope global en CSS"

El escope global en CSS 



* ¿Alguna vez os habéis sentido tentados por la falta de tiempo o recursos para simplemente escribir CSS lo más rápido posible, sin considerar qué más podría afectar? 
* ¿Alguna vez has añadido reglas en la parte inferior de una hoja de estilo, con la intención de organizarse pero nunca hacerlo? 
* ¿Alguna vez te has topado con estilos en los que no estabas completamente seguro de lo que hacían o si estaban siendo utilizados? 
* ¿Alguna vez te has preguntado si podrías deshacerte de algunos estilos sin romper algo? 
* ¿Alguna vez os preguntsteis si los estilos dependían de otras estilos? 
* ¿Algun vez sobreescribisteis estilos en otra parte?



Con los módulos CSS y el concepto de ámbito local por defecto, se evitan estos problema.



## ¿Cómo lo resuelve?



Con *CSS modules*, es una garantía de que todos los estilos de un componente: 

- Viven en un solo lugar

- Solo se aplican a ese componente y nada más. 

- Inyección de dependencias.

  

## ¿Cómo funciona?





## Composición vs Herencia



### Composición



#### CSS Modules



```css
.button {
  color: green;
  background: red;
}

.buttonPrimary {
  composes: button;
  color: yellow;
}
```

Puede haber múltiples reglas de composición, pero las reglas de composición deben estar antes que otras reglas. La ampliación funciona solo para los selectores de ámbito local y solo si el selector es un solo nombre de clase. Cuando un nombre de clase compone otro nombre de clase, el Módulo CSS exporta ambos nombres de clase para la clase local. Esto puede agregar hasta varios nombres de clase.

Es posible componer múltiples clases con composiciones: `button buttonPrimary;`.



## Preprocesadores





## Integración con bundlers





## Ejemplo a maquetar



Vamos  a maquetar con *CSS modules* tres componentes  `btnPrimary`, `btnSecondary` `btnOutline`



Para esto vamos a definir el proceso por pasos:



1. Identificar definir e implementar las variables de tema en un archivo theme.css

2. Identificar las propiedades comunes entre todos los componentes e implementar sus reglas de estilo en un cuatro componente commun a todos `btnBase` que constará de los archivos `btnBase.js` y `btnBase.css`

   

   Propiedades a conocer:

   * `padding: 20px 60px` 

   * `font-size: 16px`

   * `font-weight: 600`

   

​       ![common button imagen](images/common-button.png)



3. Implementar un componente `btnPrimary`  en el que Compondremos las reglas definias para el componente `btnBase` añadiendo sus propiedades propias. el componente `btnPrimary` constará de los ficheros `btnPrimary.css` y `btnPrimary.js`

   

   Propiedades a conocer:

   - `color: red` 

   - `background: pink`



​       ![primary button imagen](images/primary-button.png)



4. Implementar un componente `btnSecondary`  en el que Compondremos las reglas definias para el componente `btnBase` añadiendo sus propiedades propias. el componente `btnSecondary` constará de los ficheros `btnSecondary.css` y `btnSecondary.js`

   

   Propiedades a conocer:

   - `color: white  `
   - `background: #00aaff`

   

​       ![secondary button imagen](images/secondary-button.png)



5. Implementar un componente `btnOutline`  en el que Compondremos las reglas definias para el componente `btnBase` añadiendo sus propiedades propias. el componente `btnOutline` constará de los ficheros `btnOutline.css` y `btnOutline.js`

   

   Propiedades a conocer:

   - `color: #00aaff` 
   - `boder: 3px solid #00aaff`
   - `background: transparent`

   

​       ![outline button imagen](images/outline-button.png)

