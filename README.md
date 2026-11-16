# Portafolio personal

Sitio web personal de Johan Carrasco, Ingeniero de Software de Rancagua, Chile. Presenta su experiencia, proyectos, tecnologías y datos de contacto en una interfaz clara y adaptable a distintos dispositivos.

## Contenido

- Presentación profesional y ubicación.
- Experiencia en desarrollo de aplicaciones web.
- Proyectos y tecnologías principales.
- Formulario de contacto, enlaces a redes profesionales y descarga del CV.
- Modo claro y oscuro, navegación responsive e imágenes optimizadas.

## Tecnologías

- Astro (sitio estático con islas de React).
- React 19 y TypeScript.
- Tailwind CSS.
- Lucide y TheSVG para iconos.
- Oxlint para validación del código.

## Desarrollo local

Requisitos: Node.js y pnpm.

```bash
pnpm install
pnpm dev
```

Otros comandos disponibles:

```bash
pnpm build    # Compila la aplicación para producción
pnpm lint     # Ejecuta el análisis estático
pnpm preview  # Sirve la compilación localmente
```

## Configurar el formulario de contacto

El formulario envía mensajes mediante [Web3Forms](https://web3forms.com/), sin un servidor de correo propio.

1. Crea una clave de acceso para el correo receptor en Web3Forms y completa la verificación que indique el servicio. El correo publicado en este portafolio es `johandev21@gmail.com`; el destinatario real del formulario lo determina la clave de Web3Forms.
2. Copia `.env.example` a `.env.local` y reemplaza el valor de `WEB3FORMS_ACCESS_KEY` por la clave de acceso del formulario.
3. Inicia o reinicia `pnpm dev`. Envía un mensaje de prueba desde Contacto y comprueba su recepción, incluida la carpeta de spam.
4. En el alojamiento, configura la misma variable antes de compilar y vuelve a desplegar el sitio. Astro incorpora su valor en la compilación estática.

La clave de acceso del formulario es pública por diseño de Web3Forms. No uses una API key privada de administración ni credenciales de Gmail en esta variable. `.env.local` está excluido de Git.

Astro expone únicamente esta variable mediante su esquema de entorno público y `astro:env/client`, sin requerir un prefijo. `PUBLIC_WEB3FORMS_ACCESS_KEY` sigue siendo compatible como alternativa; si ambas tienen un valor no vacío, se utiliza `WEB3FORMS_ACCESS_KEY`.

Si falta la clave o falla el envío, el formulario conserva el mensaje y ofrece abrir el cliente de correo como alternativa.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/johandev21/)
- [GitHub](https://github.com/johandev21)
- [Descargar CV](src/assets/johan-carrasco-cv.pdf)
- [johandev21@gmail.com](mailto:johandev21@gmail.com)
