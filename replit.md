# Overview

Finmei is a Next.js-based web application built with React 18 and styled using Tailwind CSS. The project uses Supabase as its backend-as-a-service solution for authentication, database, and real-time functionality. The application appears to be a financial management or fintech tool, suggested by the "finmei" name and emerald/green color scheme commonly associated with financial applications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 14 with App Router
- The application uses the modern App Router pattern (indicated by the `app/` directory structure)
- React 18.2.0 provides the foundation with support for concurrent features and modern React patterns
- Server Components are available by default in Next.js 14's App Router

**Styling Approach**: Tailwind CSS utility-first framework
- Tailwind CSS 3.3.3 configured with PostCSS and Autoprefixer
- Custom design system defined in globals.css with CSS variables for brand colors (emerald theme)
- Google Fonts integration (Inter for body text, Poppins for headings) for professional typography
- Custom utility classes for reusable components (e.g., `.btn-primary`, `.bg-gradient-hero`)

**Design Philosophy**: 
- Clean, minimal aesthetic with smooth scrolling and font smoothing enabled
- Green/emerald color palette suggesting financial/growth themes
- Responsive container system with max-width of 1100px
- Gradient backgrounds for visual depth

## Backend Architecture

**Backend-as-a-Service**: Supabase
- Supabase JS client (v2.74.0) handles all backend interactions
- Provides authentication, PostgreSQL database, real-time subscriptions, and storage
- No custom backend server required - leverages Supabase's managed infrastructure

**Rationale**: Using Supabase eliminates the need for:
- Custom authentication implementation
- Database hosting and management
- API endpoint creation for basic CRUD operations
- Real-time infrastructure setup

This approach allows rapid development while maintaining scalability and security.

## Development Environment

**Port Configuration**: Custom port 5000 with network binding to 0.0.0.0
- Enables access from external networks (useful for Replit environment)
- Consistent port across development and production start commands

**Build Process**: 
- Standard Next.js build pipeline
- React Strict Mode enabled for development best practices
- PostCSS processing for Tailwind CSS optimization

## Data Architecture

**Database**: Supabase PostgreSQL (managed)
- Schema details not present in repository but managed through Supabase dashboard or migrations
- Row Level Security (RLS) policies likely configured through Supabase

**State Management**: 
- No explicit state management library (Redux, Zustand) detected
- Likely uses React hooks and Next.js's built-in features for state

# External Dependencies

## Primary Services

**Supabase** (v2.74.0)
- Authentication and user management
- PostgreSQL database hosting
- Real-time subscriptions
- File storage capabilities
- Auto-generated REST and GraphQL APIs

## Styling & UI

**Tailwind CSS** (v3.3.3)
- Utility-first CSS framework
- Configured with PostCSS and Autoprefixer for browser compatibility

**Google Fonts**
- Inter font family (weights: 400, 600, 700) - primary body text
- Poppins font family (weights: 600, 700) - headings and emphasis

## Framework & Runtime

**Next.js** (v14.0.0)
- React framework with App Router
- Server-side rendering and static site generation
- API routes capability (if needed)

**React** (v18.2.0)
- UI library with concurrent features
- React DOM for web rendering

## Build Tools

**PostCSS** (v8.4.31) - CSS processing
**Autoprefixer** (v10.4.16) - CSS vendor prefixing