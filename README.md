# Pruebas Unitarias con Jasmine - Proyecto Angular

Proyecto de pruebas unitarias exhaustivas implementando una amplia variedad de **Matchers de Jasmine** para la validación de componentes Angular y elementos HTML.

## 📊 Resumen del Proyecto

- **Cobertura de Código:** 100%
- **Framework de Testing:** Jasmine + Karma
- **Componentes Testeados:** App, Header, Footer

## 🎯 Matchers de Jasmine Implementados

Este proyecto demuestra el uso de múltiples matchers de Jasmine para realizar pruebas exhaustivas:

### Matchers de Igualdad y Comparación

- **`toBe()`** - Comparación estricta (===)
- **`toEqual()`** - Comparación profunda de objetos
- **`toBeTruthy()`** - Verifica valores verdaderos
- **`toBeFalsy()`** - Verifica valores falsos

### Matchers de Existencia

- **`toBeDefined()`** - Verifica que una variable está definida
- **`toBeUndefined()`** - Verifica que una variable no está definida
- **`toBeNull()`** - Verifica valores nulos
- **`not.toBeNull()`** - Verifica valores no nulos

### Matchers de Contenido

- **`toContain()`** - Verifica que un string o array contiene un valor
- **`not.toContain()`** - Verifica que NO contiene un valor

### Matchers de Expresiones Regulares

- **`toMatch()`** - Verifica coincidencia con patrón regex
- **`not.toMatch()`** - Verifica NO coincidencia con patrón

### Matchers Numéricos

- **`toBeGreaterThan()`** - Mayor que
- **`toBeLessThan()`** - Menor que
- **`toBeGreaterThanOrEqual()`** - Mayor o igual que
- **`toBeLessThanOrEqual()`** - Menor o igual que

### Matchers de Tipo

- **`toBeInstanceOf()`** - Verifica instancia de una clase
- **`jasmine.any()`** - Verifica tipo de dato

### Matchers de Arrays

- **`jasmine.arrayContaining()`** - Verifica elementos en array

## 📁 Estructura de Pruebas

### App Component

```typescript
src / app / app.spec.ts;
```

**Cubre:**

- ✅ Creación e instanciación del componente
- ✅ Integración de componentes Header y Footer
- ✅ Galería de equipos (4 tarjetas con imágenes)
- ✅ Validación de atributos HTML (src, alt, href, target)
- ✅ Sección de recursos con links externos
- ✅ Estructura DOM y orden de elementos
- ✅ Validación de unicidad (sin duplicados)
- ✅ Expresiones regulares para URLs

### Header Component

```typescript
src / app / components / header / header.spec.ts;
```

**Cubre:**

- ✅ Renderizado del elemento `<header>`
- ✅ Título principal `<h1>` con texto "Pruebas Unitarias"
- ✅ Subtítulo con clase `.subtitle`
- ✅ Estructura DOM (orden de elementos)
- ✅ Validación de longitud de strings
- ✅ Expresiones regulares para capitalización
- ✅ Clases CSS y atributos

### Footer Component

```typescript
src / app / components / footer / footer.spec.ts;
```

**Cubre:**

- ✅ Renderizado del elemento `<footer>`
- ✅ Texto de copyright con símbolo ©
- ✅ Año actual (2025)
- ✅ Nombre del autor
- ✅ Formato de texto con separador
- ✅ Parsing y división de strings
- ✅ Validación de caracteres especiales
- ✅ Pruebas negativas (elementos ausentes)

## 🚀 Comandos

### Ejecutar todas las pruebas

```bash
ng test
```

### Ejecutar pruebas con cobertura

```bash
ng test --code-coverage
```

### Ejecutar pruebas sin watch mode

```bash
ng test --no-watch
```

### Ver reporte de cobertura

```bash
open coverage/pruebas-unitarias/index.html
```

## 📈 Resultados de Cobertura

```
Statements   : 100% ( 10/10 )
Branches     : 100% ( 1/1 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 7/7 )
```

## 🔍 Ejemplos de Uso de Matchers

### Pruebas de Elementos HTML

```typescript
it('should have exactly one header element', () => {
  const headers = compiled.querySelectorAll('header');
  expect(headers.length).toBe(1);
  expect(headers.length).not.toBeGreaterThan(1);
});
```

### Pruebas de Contenido

```typescript
it('should render h1 element with title text', () => {
  const h1 = compiled.querySelector('h1');
  expect(h1?.textContent).toBe('Pruebas Unitarias');
  expect(h1?.textContent).toContain('Pruebas');
  expect(h1?.textContent).toMatch(/Pruebas Unitarias/);
});
```

### Pruebas Numéricas

```typescript
it('should have text with correct length', () => {
  const text = element?.textContent || '';
  expect(text.length).toBeGreaterThan(10);
  expect(text.length).toBeLessThan(30);
  expect(text.length).toBeGreaterThanOrEqual(17);
});
```

### Pruebas de Arrays

```typescript
it('should have all expected team names', () => {
  const names = Array.from(teamNames).map((el) => el.textContent);
  expect(names).toEqual(['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG']);
  expect(names).toContain('Arsenal');
});
```

### Pruebas con RegEx

```typescript
it('should have valid URLs', () => {
  const href = link.getAttribute('href') || '';
  expect(href).toMatch(/^https:\/\//);
  expect(href).toMatch(/\.(io|dev)\//);
});
```

## 🛠️ Tecnologías

- **Angular** 20.3.12
- **Jasmine** - Framework de testing
- **Karma** - Test runner
- **TypeScript** - Lenguaje de programación

## 📚 Recursos de Testing

- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Runner](https://karma-runner.github.io/)
- [Angular Testing Guide](https://angular.dev/guide/testing)

## 👨‍💻 Autor

Luis Sagnay
