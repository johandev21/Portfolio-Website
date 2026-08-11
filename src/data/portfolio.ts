import type { PortfolioData, Technology } from "../types";

const projectIcons = [
  { name: "NestJS", icon: "nestjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Zod", icon: "zod" },
  { name: "React", icon: "react" },
  { name: "TanStack Query", icon: "tanstack-query" },
  { name: "Next.js", icon: "nextjs" },
  { name: "shadcn", icon: "shadcn" },
] satisfies Technology[];

const sampleMarkdown = `## Contexto del Proyecto

Insight nace de la necesidad de centralizar métricas complejas en un entorno visualmente limpio e intuitivo. En las plataformas tradicionales, los usuarios ejecutivos suelen perderse entre tablas densas y dashboards recargados que dificultan la extracción rápida de conclusiones estratégicas.

Para abordar esta problemática, diseñamos una arquitectura orientada a la claridad visual y la velocidad de respuesta. El sistema recopila datos operativos en tiempo real desde múltiples orígenes de eventos y los consolida en paneles adaptativos.

### Objetivos Principales

El desarrollo se estructuró en torno a tres pilares fundamentales que guiaron las decisiones de diseño e ingeniería desde el primer momento.

1. **Reducción de Latencia**: Lograr tiempos de renderizado por debajo de los 100ms incluso en consultas de grandes volúmenes de datos.
2. **Interfaz Adaptativa**: Permitir a usuarios no técnicos personalizar widgets y filtros mediante un flujo intuitivo.
3. **Escalabilidad**: Mantener la estabilidad del servidor ante picos repentinos de tráfico de datos en tiempo real.

## Arquitectura del Sistema

La solución adopta un patrón monorepo modular impulsado por NestJS en la capa de servidor y Next.js en la capa de cliente. Esta separación clara de responsabilidades garantiza la reusabilidad de tipos y schemas de datos mediante TypeScript y Zod.

En el backend, implementamos un pipeline de procesamiento asíncrono que ingiere los eventos entrantes y los almacena en PostgreSQL con índices optimizados para consultas temporales.

\`\`\`ts
// Ejemplo de validación del evento con Zod
const EventSchema = z.object({
  id: z.string().uuid(),
  timestamp: z.date(),
  metric: z.string(),
  value: z.number(),
});
\`\`\`

### Gestión de Estado en Cliente

En el cliente, utilizamos TanStack Query para gestionar el cacheo reactivo y la invalidación inteligente de consultas. Esto evita peticiones redundantes y asegura que la UI refleje el estado más reciente del servidor sin sobrecargar la red.

La combinación de componentes de UI minimalistas inspirados en shadcn con la flexibilidad de Tailwind CSS nos permitió construir una interfaz moderna, responsiva y accesible.

> "La simplicidad no es la ausencia de desorden, sino la presencia de propósito claro en cada elemento."

## Rendimiento y Optimización

Durante las pruebas de estrés, identificamos cuellos de botella en la renderización de listas largas de eventos. Para resolverlo, implementamos virtualización de listas y lazy loading de componentes pesados.

Adicionalmente, se configuró compresión de respuestas y estrategias de cache en borde (CDN), logrando un puntaje sobresaliente en las auditorías de rendimiento de Lighthouse.

- **FCP (First Contentful Paint)**: 0.8s
- **LCP (Largest Contentful Paint)**: 1.2s
- **CLS (Cumulative Layout Shift)**: 0.01

## Seguridad y Control de Acceso

La seguridad fue un requerimiento transversal en todo el desarrollo. Implementamos autenticación mediante Tokens JWT con rotación automática y control de acceso basado en roles (RBAC).

Cada petición al servidor es auditada en logs estructurados para permitir un rastreo detallado de acciones administrativas y cambios de configuración dentro de la plataforma.

## Despliegue e Infraestructura

El despliegue automatizado se gestiona mediante pipelines de integración continua (CI/CD) que ejecutan suites de pruebas unitarias y de integración antes de cada lanzamiento a producción.

La aplicación corre en contenedores Docker orquestados, lo que facilita el escalado horizontal automático según la demanda de los usuarios.

## Próximos Pasos

Continuamos trabajando en la expansión de las capacidades analíticas de Insight. La próxima fase del proyecto contempla la integración de modelos predictivos para anticipar tendencias operativas.

Asimismo, planeamos añadir soporte para alertas personalizadas mediante webhooks y notificaciones en tiempo real a plataformas de comunicación.`;

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hola, soy",
    name: "Johan Carrasco",
    location: "Rancagua, Chile",
    description:
      "Ingeniero de Software enfocado en desarrollar aplicaciones web escalables y confiables de extremo a extremo. Con experiencia llevando proyectos a producción, priorizando la calidad, la mantenibilidad y una sólida experiencia de usuario.",
  },
  experience: [
    {
      title: "Practica de Ingeniería de Software",
      company: "Hospital Dr. Franco Ravera Zunino",
      start: "Enero 2026",
      end: "Marzo 2026",
      bullets: [
        "Participé en el diseño y desarrollo de una aplicación web para producción para el departamento de Relación Asistencial Docente (RAD), reemplazando un flujo de trabajo manual basado en Excel por un sistema centralizado con control de acceso por roles.",
        "Contribuí al desarrollo del proyecto desde sus primeras etapas hasta su despliegue en producción, trabajando en un equipo de cinco integrantes.",
        "Diseñé la arquitectura de datos y desarrollé los módulos principales del sistema.",
        "Implementé autenticación, autorización por roles y validaciones de datos de extremo a extremo.",
        "Colaboré con el personal del hospital para transformar procesos operativos en soluciones de software.",
      ],
    },
  ],
  projects: [
    {
      slug: "insight",
      title: "Insight",
      subtitle: "Convierte datos en decisiones accionables.",
      description:
        "Plataforma web de analítica avanzada orientada a la toma de decisiones. Centraliza datos dispersos en paneles interactivos que responden en tiempo real a las necesidades del negocio.",
      detailsMarkdown: sampleMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/insight",
      githubUrl: "https://github.com/johandev21/insight",
      icons: [...projectIcons],
      sections: [
        {
          title: "Visión General y Contexto",
          content:
            "El objetivo de Insight es eliminar la fricción al analizar grandes conjuntos de datos. Permite a los usuarios crear vistas personalizadas sin requerir conocimientos técnicos complejos.",
        },
      ],
      media: [
        {
          type: "video",
          title: "Demostración de flujo interactivo",
          caption: "Demostración en video del panel en vivo con actualización en tiempo real",
        },
        {
          type: "image",
          title: "Vista de métricas generales",
          caption: "Tablero ejecutivo con gráficos de rendimiento y agregaciones",
        },
        {
          type: "image",
          title: "Configuración de filtros",
          caption: "Interfaz de filtrado avanzado por rangos y categorías",
        },
      ],
    },
    {
      slug: "gridly",
      title: "Gridly",
      subtitle: "Organiza datos con rapidez y claridad.",
      description:
        "Sistema interactivo de tablas de datos enfocado en la manipulación rápida de información masiva con mínima sobrecarga visual.",
      detailsMarkdown: sampleMarkdown,
      year: "2026",
      role: "Desarrollo Frontend",
      liveUrl: "https://example.com/gridly",
      githubUrl: "https://github.com/johandev21/gridly",
      icons: [...projectIcons],
      sections: [
        {
          title: "Manipulación de Datos Eficiente",
          content:
            "Gridly permite realizar búsquedas instantáneas, reordenamiento de columnas y edición en celda garantizando un rendimiento constante incluso con miles de registros.",
        },
      ],
      media: [
        {
          type: "video",
          title: "Vista previa de interacción",
          caption: "Video corto demostrando edición masiva y navegación por teclado",
        },
        {
          type: "image",
          title: "Captura de tabla extendida",
          caption: "Vista de cuadrícula con grupos y columnas personalizadas",
        },
      ],
    },
    {
      slug: "metrichub",
      title: "MetricHub",
      subtitle: "Visualiza indicadores desde un solo lugar.",
      description:
        "Panel centralizado de monitoreo distribuido para alertas e indicadores críticos de infraestructura y servicios web.",
      detailsMarkdown: sampleMarkdown,
      year: "2025",
      role: "Arquitectura & Backend",
      liveUrl: "https://example.com/metrichub",
      githubUrl: "https://github.com/johandev21/metrichub",
      icons: [...projectIcons],
      sections: [
        {
          title: "Monitoreo en Tiempo Real",
          content:
            "Agrega logs y métricas de rendimiento procedentes de múltiples servidores reduciendo el tiempo de respuesta ante incidentes.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Panel principal de servidores",
          caption: "Indicadores de CPU, memoria y tasa de peticiones",
        },
        {
          type: "video",
          title: "Simulación de alerta en directo",
          caption: "Video demostrativo de detección automática de anomalías",
        },
      ],
    },
    {
      slug: "clouddesk",
      title: "CloudDesk",
      subtitle: "Espacio de trabajo centralizado en la nube.",
      description:
        "Entorno digital para gestión colaborativa de documentos y permisos en equipos distribuidos.",
      detailsMarkdown: sampleMarkdown,
      year: "2025",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/clouddesk",
      githubUrl: "https://github.com/johandev21/clouddesk",
      icons: [...projectIcons],
      sections: [
        {
          title: "Gestión Documental",
          content:
            "Organización estructurada de carpetas con control de acceso específico por usuario y nivel de autorización.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Explorador de archivos",
          caption: "Interfaz de navegación por carpetas y vista previa de documentos",
        },
      ],
    },
  ],
  techCategories: [
    {
      label: "Backend y Base de Datos",
      technologies: [
        { name: "NestJS", icon: "nestjs" },
        { name: "Django", icon: "django" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "Prisma", icon: "prisma" },
        { name: "Drizzle", icon: "drizzle" },
      ],
    },
    {
      label: "Frontend",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "shadcn", icon: "shadcn" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
    {
      label: "Lenguajes",
      technologies: [
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
  ],
  contact: {
    social: [
      { icon: "linkedin", href: "https://www.linkedin.com/in/johandev21/" },
      { icon: "github", href: "https://github.com/johandev21" },
    ],
    buttons: [
      { icon: "mail", label: "Correo" },
      { icon: "cv", label: "CV" },
    ],
    email: "johandev21@gmail.com",
    placeholder:
      "Un puesto, un proyecto, una idea o simplemente un saludo. Cuéntame qué tienes en mente.",
    helperText: "Todos los mensajes llegan directamente a mi correo",
  },
};
