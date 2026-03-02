# 🧠 Plataforma Inteligente de Mantenimiento Predictivo

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)

---

## 📖 Descripción General

La **Plataforma Inteligente de Mantenimiento Predictivo** es un sistema backend desarrollado con Node.js y NestJS, cuyo objetivo es modelar una arquitectura escalable para la gestión de procesos de mantenimiento industrial aplicando patrones de diseño orientados a buenas prácticas de ingeniería de software.

El proyecto nace como iniciativa académica para demostrar la aplicación práctica de patrones de diseño vistos en clase, asegurando bajo acoplamiento, alta cohesión y escalabilidad futura.

---

## 🎯 Objetivos del Proyecto

- Aplicar correctamente patrones de diseño en un entorno real.
- Diseñar una arquitectura modular y escalable.
- Implementar buenas prácticas de desarrollo backend.
- Preparar una base sólida para futuras ampliaciones como:
  - Integración con sensores IoT.
  - Análisis predictivo con datos históricos.
  - Gestión avanzada de activos industriales.

---

## 🏗️ Arquitectura del Sistema

El sistema está desarrollado bajo el enfoque modular de NestJS, siguiendo principios SOLID y separación clara de responsabilidades.

### 📌 Patrones de Diseño Implementados

#### 🔹 Factory Method
Permite la creación flexible de objetos relacionados con los procesos de mantenimiento sin depender directamente de clases concretas.  
Beneficios:
- Reduce el acoplamiento.
- Facilita la extensión del sistema.
- Permite agregar nuevos tipos de mantenimiento sin modificar código existente.

#### 🔹 Singleton
Garantiza la existencia de una única instancia en componentes que requieren control centralizado dentro del sistema, asegurando consistencia y control global.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución.
- **NestJS** – Framework backend modular.
- **TypeScript** – Tipado estático y mayor mantenibilidad.
- **ESLint** – Control de calidad de código.
- **Prettier** – Formateo automático de código.

---

