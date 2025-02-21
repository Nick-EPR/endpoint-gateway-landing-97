
import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Attribute = "class" | "data-theme"

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: Attribute | Attribute[];
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  )
}

export const ThemeContext = createContext<{
  theme?: string
  setTheme: (theme: string) => void
}>({
  setTheme: () => null,
})
