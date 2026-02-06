export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
    ],
  },
  {
    title: "Components",
    items: [
      // Forms
      { name: "Button", href: "/styleguide/components/button" },
      { name: "Input", href: "/styleguide/components/input" },
      { name: "Label", href: "/styleguide/components/label" },
      { name: "Textarea", href: "/styleguide/components/textarea" },
      { name: "Select", href: "/styleguide/components/select" },
      { name: "Switch", href: "/styleguide/components/switch" },
      { name: "Radio Group", href: "/styleguide/components/radio-group" },
      { name: "Form", href: "/styleguide/components/form" },

      // Layout
      { name: "Card", href: "/styleguide/components/card" },
      { name: "Separator", href: "/styleguide/components/separator" },
      { name: "Tabs", href: "/styleguide/components/tabs" },
      { name: "Accordion", href: "/styleguide/components/accordion" },
      { name: "Scroll Area", href: "/styleguide/components/scroll-area" },

      // Feedback
      { name: "Badge", href: "/styleguide/components/badge" },
      { name: "Progress", href: "/styleguide/components/progress" },
      { name: "Toast", href: "/styleguide/components/toast" },

      // Overlay
      { name: "Dialog", href: "/styleguide/components/dialog" },
      { name: "Dropdown Menu", href: "/styleguide/components/dropdown-menu" },
      { name: "Popover", href: "/styleguide/components/popover" },

      // Data Display
      { name: "Table", href: "/styleguide/components/table" },
      { name: "Data Table", href: "/styleguide/components/data-table" },
      { name: "Calendar", href: "/styleguide/components/calendar" },
      { name: "Avatar", href: "/styleguide/components/avatar" },
    ],
  },
]
