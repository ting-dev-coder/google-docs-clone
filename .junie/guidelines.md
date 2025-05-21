# Google Docs Clone - Project Guidelines

This document outlines the best practices and coding standards for the Google Docs Clone project.

## Project Structure

- **src/app**: Contains Next.js App Router pages and layouts
  - Use the App Router directory structure for routing
  - Place page-specific components in their respective page directories
  - Use layout.tsx for shared layouts
  - Use page.tsx for page content
  - Use "use client" directive for client-side components

- **src/components**: Contains reusable UI components
  - **ui**: Contains UI components (likely using Shadcn UI)
  - Keep components small and focused on a single responsibility
  - Create component-specific types/interfaces in the same file

- **src/hooks**: Contains custom React hooks
  - Prefix hook names with "use" (e.g., useCustomHook)
  - Keep hooks focused on a single piece of functionality

- **src/lib**: Contains utility functions and libraries
  - Keep utility functions small and focused
  - Export utility functions individually

- **src/stores**: Contains state management logic
  - Use Zustand for state management
  - Define interfaces for state and actions
  - Keep stores focused on specific domains

## Component Guidelines

- Use functional components with arrow function syntax
- Use TypeScript interfaces for component props
- Use destructuring for props
- Use the "use client" directive for client-side components
- Keep components small and focused
- Use composition to build complex components
- Use meaningful component and prop names

```typescript
// Example component structure
interface ButtonProps {
  onClick: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

function Button({ onClick, isActive, icon: Icon }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={cn("base-styles", isActive && "active-styles")}
    >
      <Icon className="icon-styles" />
    </button>
  );
}
```

## State Management

- Use Zustand for global state management
- Define TypeScript interfaces for state and actions
- Keep state minimal and focused
- Use React's built-in state management (useState, useReducer) for component-local state

```typescript
// Example Zustand store
interface ExampleState {
  data: DataType | null;
  setData: (data: DataType | null) => void;
}

export const useExampleStore = create<ExampleState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
```

## Styling

- Use Tailwind CSS for styling
- Use the `cn` utility function to conditionally apply classes
- Use semantic class names
- Follow a mobile-first approach
- Use Tailwind's color palette and spacing system
- Use consistent spacing and sizing

```typescript
// Example of using cn utility
<div className={cn(
  "base-styles",
  condition && "conditional-styles",
  "responsive-styles"
)}>
```

## TypeScript

- Use TypeScript for type safety
- Define interfaces for component props
- Define types for complex data structures
- Use type inference where appropriate
- Use optional properties with the `?` operator
- Use union types for variables that can have multiple types

```typescript
// Example TypeScript usage
interface User {
  id: string;
  name: string;
  email?: string; // Optional property
  role: 'admin' | 'user'; // Union type
}
```

## Imports and Exports

- Use aliased imports with `@/` prefix
- Group imports by type (React, components, utilities, types)
- Use named exports for utilities and components
- Use default exports for page components

```typescript
// Example import organization
import { useState, useEffect } from "react";
import { SomeComponent } from "@/components/ui/some-component";
import { cn } from "@/lib/utils";
import { useExampleStore } from "@/stores/use-example-store";
import type { SomeType } from "@/types";
```

## Comments and Documentation

- Use JSDoc comments for functions and components
- Use inline comments for complex logic
- Use TODO comments for future implementations
- Keep comments up-to-date with code changes

## Error Handling

- Use try/catch blocks for error-prone operations
- Provide meaningful error messages
- Handle edge cases gracefully
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators

## Testing

- Write tests for critical functionality
- Use Jest and React Testing Library
- Test components in isolation
- Mock external dependencies

## Performance

- Use React.memo for expensive components
- Use useMemo and useCallback for expensive calculations and callbacks
- Avoid unnecessary re-renders
- Optimize images and assets
- Use code splitting with dynamic imports

## Accessibility

- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation works
- Maintain appropriate color contrast
- Test with screen readers

## Git Workflow

- Use descriptive branch names
- Write meaningful commit messages
- Keep commits focused on a single change
- Create pull requests for code reviews
- Resolve merge conflicts promptly

## Deployment

- Use Vercel for deployment
- Set up CI/CD pipelines
- Use environment variables for configuration
- Test in staging environment before production