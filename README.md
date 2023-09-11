# Helix Eye

Helix Eye is a server-side rendering (SSR) engine designed to facilitate the development of SSR apps. As an example, this project utilizes an existing repository from Platzi, named [Helix Eye](https://github.com/platzi/helix-eye-custom-SSR), showcasing a collection of galaxies sourced directly from the NASA API.

## Copyright

This project is a fork of [Platzi's Helix Eye Custom SSR](https://github.com/platzi/helix-eye-custom-SSR), wherein the application that originally ran on the client is now adapted to run on the server.

## Dependencies

Although this project is a TypeScript-based server-side rendered application, Next.js is intentionally omitted to serve primarily as a learning resource for understanding SSR fundamentals. The project utilizes:

- Express (server)
- TypeScript
- Styled Components (Styles)

You can install all dependencies for this project using npm or yarn.

## Why SSR?

Server-side rendering offers an alternative to client-side rendering and is widely adopted in contemporary frontend development. SSR involves rendering the app on the server first, providing a faster initial response. Files are subsequently executed as CSS or JS on the client side.

### When to use SSR?

Consider SSR for:

- Applications with complex routing
- High-performance requirements
- Pages prioritizing SEO
- Enhanced client-side security

## Main Changes

A new folder named `server/` resides within the `src/` directory. It encompasses server configuration and rendering processes. In addition to the standard webpack configuration for the client, a dedicated configuration file for the server is introduced.

The routing system employs StaticRouter instead of react-router-dom. The server-side app performs pre-fetching and injects data obtained from the API to minimize client-side data fetching.

Styles are configured to function within an SSR app, as detailed in the Styled Components documentation. Essentially, a new style instance is created, wrapping the entire app, collecting styles, and generating tags.

## How It Works

The system operates through a hydration process. React, instead of creating a root (createRoot), hydrates previously rendered components with updated information and interactions.

The server initially renders a mockup, found in `src/server/render/template.tsx`, providing the first HTML ready for client consumption. Once JavaScript is loaded, hydration takes place.

A stream must be created, encompassing styles, the server router, and the app with all its JavaScript. This stream, detailed in `src/server/index.tsx`, along with initial props (such as pre-fetched data) and style tags, is passed and injected into `template.tsx`.

This encapsulates the core logic of a server-side rendered app, with some concepts omitted for brevity, especially those pertaining to more extensive projects such as security measures.

## Commands

The scripts play a crucial role in the engine's operation. They automate the creation of the `dist/` folder with the necessary files and configure webpack accordingly. In the `package.json`, you'll find the following scripts:

- `npm run build-client`
- `npm run build-server`
- `npm run build` (executes the previous two)
- `npm run build-dev`
- `npm run dev`
- `npm start`

**Note:** Ensure that you specify the working environment (development or production) in the `.env` file.
