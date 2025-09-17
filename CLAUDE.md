# Claude Code Instructions for Matt.buzz Portfolio

## Project Context
This is a modern React portfolio built with Framer motion components. Always reference the project documentation when working on this codebase.

## Required Reading Before Any Code Changes
**ALWAYS read these files first** when working on components or architecture:

1. **ARCHITECTURE.md** - Understand the component hierarchy and design patterns
2. **COMPONENTS.md** - Check component relationships and dependencies
3. **DEVELOPMENT.md** - Follow established development workflows and patterns
4. **CHUNKS.md** - Reference for all chunk files and their purposes

## Component Development Rules

### Before Modifying Any Component:
1. Read COMPONENTS.md to understand the component's role and dependencies
2. Check ARCHITECTURE.md for the overall system design
3. Follow patterns established in DEVELOPMENT.md
4. Understand which chunks are involved (reference CHUNKS.md)

### Framer Component Preservation:
- **NEVER replace Framer motion components** with plain React/HTML
- **ALWAYS preserve** React.forwardRef structure
- **ALWAYS maintain** useVariantState and motion.div patterns
- **ALWAYS keep** existing animation variants and transitions

### Code Style:
- Follow existing patterns from other chunks
- Use CSS-in-JS with withCSS for responsive styles
- Maintain responsive breakpoints: Desktop (1440px+), Tablet (700-1024px), Mobile (0-699px)
- Use theme-aware CSS custom properties (--token-*)

## Development Workflow

### Adding New Features:
1. Check DEVELOPMENT.md for feature development patterns
2. Study similar existing components in COMPONENTS.md
3. Follow the component architecture from ARCHITECTURE.md
4. Test across all responsive breakpoints

### Debugging Issues:
1. Reference ARCHITECTURE.md for data flow patterns
2. Check COMPONENTS.md for component dependencies
3. Use development tools listed in DEVELOPMENT.md

## File Organization Rules
- Chunk files are in `/framer/chunks/` with descriptive names
- Main components are in `/framer/*.jsx`
- Custom components go in `/components/`
- Utilities go in `/utils/`

## Testing Requirements
Always test changes across:
- All responsive breakpoints (Desktop/Tablet/Mobile)
- Light and dark themes
- Animation performance (60fps target)
- Cross-browser compatibility

## Documentation Updates
When making significant changes:
- Update relevant .md files if architecture changes
- Maintain JSDoc comments for new functions
- Keep CHUNKS.md updated if chunk functionality changes

---

**Remember: This codebase uses Framer motion components with a specific architecture. Always preserve the existing patterns and refer to the documentation before making changes.**