# Overview

This is a full-stack web application built with React (Vite) on the frontend and Express.js on the backend. The application uses a modern TypeScript stack with shadcn/ui components for the UI layer. The project includes a PostgreSQL database integration through Drizzle ORM, though currently only basic user schema is implemented. The application also serves a static HTML file at the root route, suggesting a hybrid approach to content delivery.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**UI Component Library**: shadcn/ui (New York style variant) - A comprehensive collection of Radix UI primitives with Tailwind CSS styling. All components are locally available in the codebase rather than installed as npm packages, allowing for full customization.

**Styling**: Tailwind CSS with custom design tokens including:
- CSS variables for theming (light/dark mode support)
- Custom color palette using HSL values
- Neutral base color scheme
- Custom border radius values (9px, 6px, 3px)
- Hover and active elevation effects for interactive elements

**Routing**: Wouter - A lightweight client-side routing library. Currently configured with a catch-all 404 page, ready for additional routes to be added.

**State Management**: TanStack Query (React Query) v5 for server state management with custom configuration:
- Disabled automatic refetching on window focus
- Infinite stale time for cached data
- Custom query function supporting 401 unauthorized handling
- Centralized API request helper with fetch-based implementation

**Form Handling**: React Hook Form with Zod resolvers for type-safe form validation.

## Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: Uses `tsx` for TypeScript execution in development, with `esbuild` for production builds bundling all server code into a single ESM module.

**Request Logging**: Custom middleware that logs all API requests with timing, method, path, status code, and response preview (truncated to 80 characters).

**Static File Serving**: 
- Serves a legacy static HTML file (`index.html`) at the root route
- In development: Uses Vite middleware for HMR and asset serving
- In production: Serves pre-built static files from `dist/public`

**Session Management**: Basic session infrastructure configured with `connect-pg-simple` for PostgreSQL-backed sessions (implementation incomplete).

## Data Layer

**ORM**: Drizzle ORM v0.39+ configured for PostgreSQL with:
- Schema-first approach with TypeScript types
- Zod schema integration for runtime validation
- Migration support (output to `./migrations` directory)

**Database Schema**: Currently minimal with only a users table containing:
- UUID primary key (auto-generated)
- Username (unique, not null)
- Password (not null)

**Data Access Pattern**: In-memory storage implementation (`MemStorage`) currently active, providing a basic CRUD interface for users. This serves as a placeholder/testing layer before PostgreSQL integration is fully activated.

**Design Decision**: The application is architected to support PostgreSQL but currently uses in-memory storage, allowing development to proceed without database provisioning. The storage interface abstraction enables easy switching between implementations.

## External Dependencies

**Database**: 
- PostgreSQL via `@neondatabase/serverless` driver
- Requires `DATABASE_URL` environment variable
- Note: Database provisioning is mentioned in config but not yet enforced at runtime

**UI Libraries**:
- Radix UI - Complete set of accessible component primitives (@radix-ui/react-*)
- Lucide React - Icon library
- Embla Carousel - Carousel/slider functionality
- Recharts - Charting library (via chart.tsx component)
- cmdk - Command menu component
- Vaul - Drawer component
- react-day-picker - Date picker functionality
- input-otp - OTP input component

**Utility Libraries**:
- clsx & tailwind-merge - Conditional class name handling
- class-variance-authority - Component variant styling
- date-fns - Date manipulation
- nanoid - Unique ID generation

**Build Tools**:
- Vite - Frontend build tool and dev server
- esbuild - Server-side bundling for production
- TypeScript - Type checking
- Tailwind CSS - Utility-first CSS framework
- PostCSS with Autoprefixer - CSS processing

**Replit Integration**:
- `@replit/vite-plugin-runtime-error-modal` - Enhanced error display
- `@replit/vite-plugin-cartographer` - Development tooling (dev only)
- `@replit/vite-plugin-dev-banner` - Development banner (dev only)

**External Assets**: The root `index.html` file loads external resources from CDNs:
- Google Fonts (Nunito Sans, Sono, Nerko One)
- SweetAlert2 - Alert/modal library
- TypeIt - Typing animation library
- Font Awesome - Icon library
- External stylesheet from feeldreams.github.io