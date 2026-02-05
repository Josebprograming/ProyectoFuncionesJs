# ProyectoFuncionesJs
Proyecto demo para funciones aritméticas, operaciones con arreglos y objetos
# Aplicación de Consola - Funciones JavaScript

## 📋 Descripción General

Esta es una aplicación web interactiva que demuestra el uso de funciones en JavaScript a través de un sistema de menús. La aplicación permite realizar operaciones aritméticas, trabajar con arreglos y manipular objetos, mostrando todos los resultados en la consola del navegador.

---

## 🚀 Cómo Iniciar

1. Abre el archivo `index.html` en tu navegador
2. Haz clic en el botón **"Ejecutar Funciones"**
3. Se mostrará un mensaje de bienvenida seguido del menú principal
4. Selecciona una opción del menú y sigue las instrucciones en los prompts

> **Nota:** Abre la consola del navegador (F12 o Ctrl+Shift+I) para ver los resultados de las operaciones

---

## 📊 Estructura del Menú Principal

```
MENÚ PRINCIPAL
1. Operaciones Aritméticas
2. Operaciones con Arreglos
3. Operaciones con Objetos
4. Terminar Aplicación
```

---

## 🔢 Operaciones Aritméticas

### Paso a Paso: Acceder a Operaciones Aritméticas

1. Haz clic en el botón "Ejecutar Funciones"
2. En el menú principal, selecciona **opción 1** (Operaciones Aritméticas)
3. Se mostrará un submenú con 6 opciones matemáticas

---

### 1️⃣ Suma

**Pasos:**
1. Selecciona opción **1** en el menú de operaciones aritméticas
2. Ingresa el primer número en el prompt
3. Ingresa el segundo número en el siguiente prompt
4. El resultado se mostrará en un alert y en la consola

**Ejemplo:**
```javascript
Primer número: 10
Segundo número: 5
Resultado: 10 + 5 = 15
```

---

### 2️⃣ Resta

**Pasos:**
1. Selecciona opción **2** en el menú de operaciones aritméticas
2. Ingresa el primer número (minuendo)
3. Ingresa el segundo número (sustraendo)
4. El resultado se mostrará en un alert y en la consola

**Ejemplo:**
```javascript
Primer número: 20
Segundo número: 7
Resultado: 20 - 7 = 13
```

---

### 3️⃣ Multiplicación

**Pasos:**
1. Selecciona opción **3** en el menú de operaciones aritméticas
2. Ingresa el primer número
3. Ingresa el segundo número
4. El resultado se mostrará en un alert y en la consola

**Ejemplo:**
```javascript
Primer número: 6
Segundo número: 8
Resultado: 6 × 8 = 48
```

---

### 4️⃣ División

**Pasos:**
1. Selecciona opción **4** en el menú de operaciones aritméticas
2. Ingresa el dividendo (número a dividir)
3. Ingresa el divisor (número por el que se divide)
4. El resultado se mostrará en un alert y en la consola

**⚠️ Validaciones para la división:**
- No se permiten números negativos
- No se puede dividir por cero

**Ejemplo:**
```javascript
Dividendo: 20
Divisor: 4
Resultado: 20 ÷ 4 = 5
```

**Mensajes en caso de errrores:**
- Si ingresas números negativos: "Error: No se permiten números negativos en la división."
- Si divides por cero: "Error: No se puede dividir por cero."

---

### 5️⃣ Potenciación

**Pasos:**
1. Selecciona opción **5** en el menú de operaciones aritméticas
2. Ingresa la base
3. Ingresa el exponente
4. El resultado se mostrará en un alert y en la consola

**Ejemplo:**
```javascript
Base: 2
Exponente: 3
Resultado: 2^3 = 8
```

---

### 6️⃣ Valor Absoluto

**Pasos:**
1. Selecciona opción **6** en el menú de operaciones aritméticas
2. Ingresa un número (positivo o negativo)
3. El resultado se mostrará en un alert y en la consola

**Ejemplo:**
```javascript
Número: -15
Resultado: |-15| = 15
```

---

### 7️⃣ Volver al Menú Anterior

Selecciona opción **7** para regresar al menú principal.

---

## 📦 Operaciones con Arreglos

### Paso a Paso: Acceder a Operaciones con Arreglos

1. Haz clic en el botón "Ejecutar Funciones"
2. En el menú principal, selecciona **opción 2** (Operaciones con Arreglos)
3. Se mostrará un submenú con 10 opciones para trabajar con arreglos

> **Importante:** Los arreglos se almacenan en una variable global durante la sesión

---

### 1️⃣ Crear Arreglo

**Pasos:**
1. Selecciona opción **1**
2. Ingresa la cantidad de elementos que deseas crear
3. Ingresa cada elemento cuando se te solicite
4. El arreglo se mostrará en la consola

**Ejemplo:**
```javascript
Cantidad: 3
Elemento 1: manzana
Elemento 2: banana
Elemento 3: naranja
Consola: Arreglo creado: ["manzana", "banana", "naranja"]
```

---

### 2️⃣ Crear Arreglo de Números

**Pasos:**
1. Selecciona opción **2**
2. Ingresa la cantidad de números
3. Ingresa solo números (sin letras)
4. El arreglo de números se mostrará en la consola

**Validación:** Solo acepta números. Si ingresas un valor no numérico, la operación se cancela.

**Ejemplo:**
```javascript
Cantidad: 4
Número 1: 10
Número 2: 25
Número 3: 30
Número 4: 15
Consola: Arreglo de números creado: [10, 25, 30, 15]
```

---

### 3️⃣ Crear Arreglo de Strings

**Pasos:**
1. Selecciona opción **3**
2. Ingresa la cantidad de strings
3. Ingresa cada texto cuando se te solicite
4. El arreglo de strings se mostrará en la consola

**Ejemplo:**
```javascript
Cantidad: 3
Texto 1: JavaScript
Texto 2: HTML
Texto 3: CSS
Consola: Arreglo de strings creado: ["JavaScript", "HTML", "CSS"]
```

---

### 4️⃣ Eliminar el Último Valor

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **4**
3. El último elemento se eliminará y se mostrará en la consola

**Ejemplo:**
```javascript
Arreglo antes: [10, 20, 30, 40]
Último elemento eliminado: 40
Arreglo después: [10, 20, 30]
```

---

### 5️⃣ Eliminar el Primer Valor

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **5**
3. El primer elemento se eliminará y se mostrará en la consola

**Ejemplo:**
```javascript
Arreglo antes: [10, 20, 30, 40]
Primer elemento eliminado: 10
Arreglo después: [20, 30, 40]
```

---

### 6️⃣ Realizar Unión de Arreglos

**Pasos:**
1. Primero, debes tener un arreglo creado (será el primer arreglo)
2. Selecciona opción **6**
3. Ingresa la cantidad de elementos para el segundo arreglo
4. Ingresa cada elemento del segundo arreglo
5. Se mostrará la unión de ambos arreglos en la consola

**Ejemplo:**
```javascript
Primer arreglo: [1, 2, 3]
Cantidad para segundo arreglo: 2
Elemento 1: 4
Elemento 2: 5
Segundo arreglo: [4, 5]
Arreglo unido: [1, 2, 3, 4, 5]
```

---

### 7️⃣ Recorrer Arreglo

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **7**
3. Se mostrará cada elemento del arreglo con su índice en la consola

**Ejemplo:**
```javascript
Arreglo: ["Juan", "María", "Pedro"]
Consola:
  Índice 0: Juan
  Índice 1: María
  Índice 2: Pedro
```

---

### 8️⃣ Mostrar Longitud del Arreglo

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **8**
3. Se mostrará la cantidad de elementos en un alert y en la consola

**Ejemplo:**
```javascript
Arreglo: [5, 10, 15, 20, 25]
Resultado: Longitud = 5
```

---

### 9️⃣ Buscar Parcial

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **9**
3. Ingresa el texto que deseas buscar (se buscan coincidencias parciales)
4. Se mostrará los elementos que contienen el texto en la consola

**Ejemplo:**
```javascript
Arreglo: ["JavaScript", "TypeScript", "Python", "Java"]
Buscar: "Script"
Resultados: ["JavaScript", "TypeScript"]
```

---

### 🔟 Buscar Absoluto

**Pasos:**
1. Primero, debes tener un arreglo creado
2. Selecciona opción **10**
3. Ingresa el valor exacto que deseas buscar
4. Se mostrará el índice del elemento encontrado o un mensaje de no encontrado

**Ejemplo:**
```javascript
Arreglo: [10, 20, 30, 40]
Buscar: 30
Resultado: Encontrado en índice 2
```

---

### 1️⃣1️⃣ Volver al Menú Anterior

Selecciona opción **11** para regresar al menú principal.

---

## 🗂️ Operaciones con Objetos

### Paso a Paso: Acceder a Operaciones con Objetos

1. Haz clic en el botón "Ejecutar Funciones"
2. En el menú principal, selecciona **opción 3** (Operaciones con Objetos)
3. Se mostrará un submenú con 8 opciones para trabajar con objetos

> **Importante:** Los objetos se almacenan en una variable global durante la sesión

---

### 1️⃣ Crear Objeto

**Pasos:**
1. Selecciona opción **1**
2. Ingresa la cantidad de propiedades que deseas crear
3. Para cada propiedad, ingresa el nombre (clave) y su valor
4. El objeto se mostrará en la consola

**Ejemplo:**
```javascript
Cantidad: 2
Propiedad 1: nombre
Valor: Juan
Propiedad 2: edad
Valor: 25
Consola: {nombre: "Juan", edad: "25"}
```

---

### 2️⃣ Agregar Propiedad

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **2**
3. Ingresa el nombre de la nueva propiedad
4. Ingresa el valor de esa propiedad
5. El objeto actualizado se mostrará en la consola

**Ejemplo:**
```javascript
Objeto antes: {nombre: "Juan", edad: "25"}
Nueva propiedad: ciudad
Valor: Madrid
Objeto después: {nombre: "Juan", edad: "25", ciudad: "Madrid"}
```

---

### 3️⃣ Eliminar Propiedad

**Pasos:**
1. Primero, debes tener un objeto creado con propiedades
2. Selecciona opción **3**
3. Se mostrará la lista de propiedades disponibles
4. Ingresa el nombre exacto de la propiedad a eliminar
5. El objeto actualizado se mostrará en la consola

**Ejemplo:**
```javascript
Propiedades disponibles: nombre, edad, ciudad
Propiedad a eliminar: edad
Objeto después: {nombre: "Juan", ciudad: "Madrid"}
```

---

### 4️⃣ Mostrar Todas las Propiedades

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **4**
3. Se mostrará una lista de todas las propiedades en la consola y un alert

**Ejemplo:**
```javascript
Objeto: {nombre: "Juan", edad: "25", ciudad: "Madrid"}
Resultado: nombre, edad, ciudad
```

---

### 5️⃣ Recorrer Propiedades

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **5**
3. Se mostrarán todas las propiedades y sus valores en la consola

**Ejemplo:**
```javascript
Objeto: {nombre: "Juan", edad: "25", ciudad: "Madrid"}
Consola:
  nombre: Juan
  edad: 25
  ciudad: Madrid
```

---

### 6️⃣ Buscar Propiedad

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **6**
3. Ingresa el nombre exacto de la propiedad
4. Se mostrará el valor si existe, o un mensaje de no encontrado

**Ejemplo:**
```javascript
Objeto: {nombre: "Juan", edad: "25"}
Buscar: nombre
Resultado: Propiedad encontrada: nombre = Juan
```

---

### 7️⃣ Mostrar Valores

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **7**
3. Se mostrará una lista de todos los valores en la consola y un alert

**Ejemplo:**
```javascript
Objeto: {nombre: "Juan", edad: "25", ciudad: "Madrid"}
Resultado: Juan, 25, Madrid
```

---

### 8️⃣ Contar Propiedades

**Pasos:**
1. Primero, debes tener un objeto creado
2. Selecciona opción **8**
3. Se mostrará la cantidad total de propiedades

**Ejemplo:**
```javascript
Objeto: {nombre: "Juan", edad: "25", ciudad: "Madrid"}
Resultado: El objeto tiene 3 propiedad(es)
```

---

### 9️⃣ Volver al Menú Anterior

Selecciona opción **9** para regresar al menú principal.

---

## 💡 Consejos Útiles

1. **Abre la Consola:** Presiona F12 o Ctrl+Shift+I para ver los resultados detallados
2. **Lee los Mensajes:** Los prompts te indicarán exactamente qué debes ingresar
3. **Manejo de Errores:** La aplicación valida los datos y muestra mensajes de error claros
4. **Variables Globales:** Los arreglos y objetos creados persisten durante toda la sesión
5. **Vuelve Atrás:** Siempre puedes usar la opción "Volver" para regresar al menú anterior

---

## ⚙️ Validaciones Importantes

- **División:** No acepta números negativos ni divisiones por cero
- **Arreglos de Números:** Solo acepta valores numéricos
- **Arreglos de Strings:** Acepta cualquier texto
- **Búsqueda Parcial:** No distingue mayúsculas/minúsculas
- **Búsqueda Absoluta:** Busca coincidencias exactas
- **Propiedades:** Deben ingresarse con nombres válidos

---

## 📱 Estructura de Archivos

```
Proyecto Modulo 4/
├── index.html      (Estructura HTML)
├── styles.css      (Estilos de la aplicación)
├── main.js         (Funciones y lógica)
└── README.md       (Este archivo)
```

---

## 🎯 Resumen Rápido

| Sección | Operaciones | Cantidad |
|---------|------------|----------|
| Aritméticas | Suma, Resta, Multiplicación, División, Potenciación, Valor Absoluto | 6 |
| Arreglos | Crear, Eliminar, Unir, Recorrer, Buscar, Contar | 10 |
| Objetos | Crear, Agregar, Eliminar, Buscar, Recorrer, Contar | 8 |

---

## 📝 Notas Finales

- Esta aplicación es educativa y demuestra conceptos fundamentales de JavaScript
- Todos los resultados se muestran en la consola del navegador
- Los datos se capturan a través de prompts
- La aplicación valida los datos ingresados para evitar errores
s
