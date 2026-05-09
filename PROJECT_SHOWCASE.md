# Alpha IA - Project Showcase & Engineering Standards

Este documento consolida los principios de ingeniería, metodologías y tecnologías aplicadas durante el desarrollo de la plataforma de gestión de suscripciones **Alpha IA**. Sirve como testimonio de las buenas prácticas implementadas y como guía arquitectónica de alto nivel.

---

## 1. Arquitectura Hexagonal (Clean Architecture)

El proyecto fue diseñado desde cero utilizando **Arquitectura Hexagonal** (Puertos y Adaptadores), garantizando un sistema altamente mantenible, escalable y tolerante a cambios tecnológicos.

- **Capa de Dominio (El Corazón)**: Contiene las reglas de negocio puras (`Plan`, `Subscription`). Es 100% agnóstica a frameworks o bases de datos. Todo el comportamiento (como `isExpired()` o `hasFeature()`) reside aquí.
- **Capa de Aplicación (Los Casos de Uso)**: Orquesta el flujo de datos. Define los "Puertos" (interfaces) que la infraestructura debe implementar, aplicando el principio de **Inversión de Dependencias (SOLID)**.
- **Capa de Infraestructura (Los Adaptadores)**: Implementa los detalles técnicos (NestJS, Mongoose, Swagger). Gracias a los `Mappers` y `Presenters`, el Dominio nunca se contamina con detalles de base de datos o HTTP.

---

## 2. Metodologías Aplicadas

### TDD (Test-Driven Development) y Pruebas Unitarias
El desarrollo del comportamiento core se acompañó de pruebas unitarias usando **Jest**. Los Casos de Uso (`SubscribeCustomer`, `CreatePlan`) cuentan con un 100% de cobertura en su lógica, permitiendo refactorizar con confianza.

### SDD (Specification-Driven Development) / API-First
El desarrollo fue guiado por un contrato **OpenAPI (`openapi.yaml`)** predefinido. 
- Los DTOs de entrada y `Presenters` de salida se diseñaron estrictamente para cumplir con este contrato.
- Esto garantiza que el Frontend o los consumidores de la API reciban exactamente lo que esperan, independientemente de cómo se estructure la base de datos interna.

### Manejo de Errores Desacoplado
Implementación de un **Global Exception Filter**. Las capas internas lanzan excepciones de negocio semánticas (ej. `PlanNotFoundException`). El filtro atrapa estos errores en la frontera del sistema y los traduce limpiamente a respuestas HTTP estructuradas (ej. `404 Not Found`), evitando exponer detalles técnicos al cliente.

---

## 3. Stack Tecnológico

| Tecnología | Propósito dentro del Proyecto |
| :--- | :--- |
| **TypeScript** | Lenguaje principal. Aporta tipado estático fuerte, crucial para modelar el Dominio de forma segura. |
| **NestJS** | Framework backend. Provee el ecosistema base, la Inyección de Dependencias, Módulos y Controladores. |
| **Mongoose / MongoDB** | Capa de persistencia (NoSQL). Oculto detrás de repositorios implementados en infraestructura. |
| **Jest** | Framework de testing para asegurar la fiabilidad de los Casos de Uso. |
| **Swagger UI** | Generación automática y visual de la documentación interactiva de la API. |
| **Docker & Compose** | Contenerización del entorno para asegurar reproducibilidad entre desarrollo y producción. |

---

## 4. Hitos y Logros Clave

1. **Aislamiento Total del Dominio**: Se logró que ninguna dependencia de NPM (salvo utilidades puras) penetre la carpeta `src/domain`.
2. **Mapeo Bidireccional**: Implementación de `Mappers` (Dominio ↔ DB) y `Presenters` (Dominio ↔ HTTP), aislando los modelos de base de datos de las respuestas del cliente.
3. **Persistencia Dinámica**: Uso de estrategias como `upsert` en repositorios MongoDB para mantener la consistencia de IDs generados en el dominio.
4. **Documentación Viva**: Integración de decoradores de Swagger (`@ApiProperty`, `@ApiResponse`) directamente en los DTOs y Controladores, asegurando que la documentación nunca se desactualice respecto al código.
5. **Estandarización**: Creación de un documento `ARCHITECTURE.md` que funciona como "Biblia" del proyecto, guiando futuras integraciones bajo las mismas reglas estrictas.

---

*Desarrollado con un enfoque inflexible en la calidad del código, la mantenibilidad y los patrones de diseño modernos.*
