# CSS Modules

![css modules logo](images/css-modules-logo.png)

## ¿Qué es?



Según el [repositorio](https://github.com/css-modules/css-modules), *CSS modules* son:

​     **Archivos CSS en los que los nombres de las clases y los nombres de las animaciones tienen un alcance local de forma predeterminada.**

Por lo tanto, *CSS modules* no son una especificación oficial ni una implementación en el navegador, sino más bien un proceso en un paso de compilación (con la ayuda de Webpack , Gulp, Rollup, Parcel o Browserify) que cambia los nombres de clase y los selectores que se van a definir.



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

