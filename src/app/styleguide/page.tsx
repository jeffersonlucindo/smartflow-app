"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Sun, Moon, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

function ColorSwatch({ name, variable, hex }: { name: string; variable: string; hex: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-16 h-16 rounded-lg border shadow-sm"
        style={{ backgroundColor: hex }}
      />
      <span className="text-xs font-medium text-center">{name}</span>
      <span className="text-[10px] text-muted-foreground font-mono">{hex}</span>
    </div>
  )
}

function ColorRow({ label, bgVar, fgVar, bgHex, fgHex }: {
  label: string
  bgVar: string
  fgVar: string
  bgHex: string
  fgHex: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-32 text-sm font-medium">{label}</div>
      <div
        className="flex-1 rounded-lg border px-4 py-3 text-sm"
        style={{ backgroundColor: bgHex, color: fgHex }}
      >
        {label} text on {label} background
      </div>
      <div className="text-xs text-muted-foreground font-mono w-40">
        {bgVar}<br />{fgVar}
      </div>
    </div>
  )
}

export default function StyleguidePage() {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const primaryScale = [
    { name: "50", hex: "#ecfdf5" },
    { name: "100", hex: "#d1fae5" },
    { name: "200", hex: "#a7f3d0" },
    { name: "300", hex: "#6ee7b7" },
    { name: "400", hex: "#34d399" },
    { name: "500", hex: "#10b981" },
    { name: "600", hex: "#059669" },
    { name: "700", hex: "#047857" },
    { name: "800", hex: "#065f46" },
    { name: "900", hex: "#064e3b" },
  ]

  const greyScale = [
    { name: "50", hex: "#f8fafc" },
    { name: "100", hex: "#f1f5f9" },
    { name: "200", hex: "#e2e8f0" },
    { name: "300", hex: "#cbd5e1" },
    { name: "400", hex: "#94a3b8" },
    { name: "500", hex: "#64748b" },
    { name: "600", hex: "#475569" },
    { name: "700", hex: "#334155" },
    { name: "800", hex: "#1e293b" },
    { name: "900", hex: "#0f172a" },
  ]

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Design Tokens</h1>
          <p className="text-muted-foreground mt-1">
            Sistema de design do Smart Flow Nutrition
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={toggleDark}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* ========== COLORS ========== */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Colors</h2>

        {/* Theme Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme Colors</h3>
          <div className="space-y-3">
            <ColorRow label="Background" bgVar="--background" fgVar="--foreground" bgHex="#f8fafc" fgHex="#0f172a" />
            <ColorRow label="Card" bgVar="--card" fgVar="--card-foreground" bgHex="#ffffff" fgHex="#0f172a" />
            <ColorRow label="Primary" bgVar="--primary" fgVar="--primary-foreground" bgHex="#10b981" fgHex="#ffffff" />
            <ColorRow label="Secondary" bgVar="--secondary" fgVar="--secondary-foreground" bgHex="#f1f5f9" fgHex="#1e293b" />
            <ColorRow label="Muted" bgVar="--muted" fgVar="--muted-foreground" bgHex="#f1f5f9" fgHex="#64748b" />
            <ColorRow label="Accent" bgVar="--accent" fgVar="--accent-foreground" bgHex="#ecfdf5" fgHex="#065f46" />
            <ColorRow label="Destructive" bgVar="--destructive" fgVar="--destructive-foreground" bgHex="#ef4444" fgHex="#ffffff" />
          </div>
        </div>

        {/* Primary Scale */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Primary Scale (Emerald)</h3>
          <div className="flex gap-3 flex-wrap">
            {primaryScale.map((c) => (
              <ColorSwatch key={c.name} name={c.name} variable={`--primary-${c.name}`} hex={c.hex} />
            ))}
          </div>
        </div>

        {/* Grey Scale */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Grey Scale (Slate)</h3>
          <div className="flex gap-3 flex-wrap">
            {greyScale.map((c) => (
              <ColorSwatch key={c.name} name={c.name} variable={`--grey-${c.name}`} hex={c.hex} />
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Semantic Colors</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2 text-center">
              <div className="h-16 rounded-lg bg-success flex items-center justify-center text-success-foreground text-sm font-medium">
                Success
              </div>
              <span className="text-xs text-muted-foreground font-mono">#10b981</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-16 rounded-lg bg-warning flex items-center justify-center text-warning-foreground text-sm font-medium">
                Warning
              </div>
              <span className="text-xs text-muted-foreground font-mono">#f59e0b</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-16 rounded-lg bg-destructive flex items-center justify-center text-destructive-foreground text-sm font-medium">
                Error
              </div>
              <span className="text-xs text-muted-foreground font-mono">#ef4444</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-16 rounded-lg bg-info flex items-center justify-center text-info-foreground text-sm font-medium">
                Info
              </div>
              <span className="text-xs text-muted-foreground font-mono">#3b82f6</span>
            </div>
          </div>
        </div>

        {/* Chart Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Chart Colors</h3>
          <div className="flex gap-3">
            <ColorSwatch name="Chart 1" variable="--chart-1" hex="#10b981" />
            <ColorSwatch name="Chart 2" variable="--chart-2" hex="#3b82f6" />
            <ColorSwatch name="Chart 3" variable="--chart-3" hex="#8b5cf6" />
            <ColorSwatch name="Chart 4" variable="--chart-4" hex="#f59e0b" />
            <ColorSwatch name="Chart 5" variable="--chart-5" hex="#ef4444" />
          </div>
        </div>
      </section>

      {/* ========== TYPOGRAPHY ========== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Typography</h2>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-mono mb-4">Font: Inter (Google Fonts)</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Headings</h3>
            <div className="space-y-4 border rounded-lg p-6">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">4xl</span>
                <p className="text-4xl font-bold">Smart Flow Nutrition</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">3xl</span>
                <p className="text-3xl font-bold">Dashboard</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">2xl</span>
                <p className="text-2xl font-semibold">Pacientes</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">xl</span>
                <p className="text-xl font-semibold">Lista de Pacientes</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">lg</span>
                <p className="text-lg font-medium">Consultas Hoje</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Body Text</h3>
            <div className="space-y-4 border rounded-lg p-6">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">base</span>
                <p className="text-base">Gerencie seus pacientes e consultas de forma eficiente.</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">sm</span>
                <p className="text-sm">Visão geral do seu consultório</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">xs</span>
                <p className="text-xs">+12% vs. mês anterior</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-16 font-mono">muted</span>
                <p className="text-sm text-muted-foreground">6 pacientes encontrados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BORDER RADIUS ========== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Border Radius</h2>
        <div className="flex gap-6 items-end">
          {[
            { name: "sm", label: "4px", className: "rounded-sm" },
            { name: "md", label: "6px", className: "rounded-md" },
            { name: "lg", label: "8px", className: "rounded-lg" },
            { name: "xl", label: "12px", className: "rounded-xl" },
            { name: "full", label: "9999px", className: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div className={`w-20 h-20 bg-primary ${r.className}`} />
              <span className="text-sm font-medium">{r.name}</span>
              <span className="text-xs text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SHADOWS ========== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Shadows</h2>
        <div className="flex gap-6 items-end">
          {[
            { name: "sm", className: "shadow-sm" },
            { name: "default", className: "shadow" },
            { name: "md", className: "shadow-md" },
            { name: "lg", className: "shadow-lg" },
            { name: "xl", className: "shadow-xl" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div className={`w-20 h-20 bg-card rounded-lg border ${s.className}`} />
              <span className="text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== COMPONENTS ========== */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Components</h2>

        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Sun className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Card</h3>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Pacientes Ativos</CardTitle>
                <CardDescription>Total de pacientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">248</p>
                <p className="text-xs text-muted-foreground mt-1">+12% vs. mês anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Consultas Hoje</CardTitle>
                <CardDescription>Agendamentos do dia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-xs text-muted-foreground mt-1">+3 agendadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IMC Médio</CardTitle>
                <CardDescription>Média dos pacientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">24.3</p>
                <p className="text-xs text-muted-foreground mt-1">-0.8 redução média</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Badge</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-success text-success-foreground hover:bg-success/80">Ativo</Badge>
            <Badge className="bg-destructive text-destructive-foreground">Inativo</Badge>
            <Badge className="bg-primary text-primary-foreground">Emagrecimento</Badge>
            <Badge className="bg-info text-info-foreground">Ganho de Massa</Badge>
            <Badge className="bg-warning text-warning-foreground">Manutenção</Badge>
            <Badge variant="secondary">Saúde Metabólica</Badge>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Alert</h3>
          <div className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>
                Você tem 3 novas consultas agendadas para hoje.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>
                Não foi possível salvar as alterações. Tente novamente.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Radio Group */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Radio Group</h3>
          <Card>
            <CardContent className="pt-6">
              <RadioGroup defaultValue="emagrecimento">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="emagrecimento" id="r1" />
                  <label htmlFor="r1" className="text-sm">Emagrecimento</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ganho-massa" id="r2" />
                  <label htmlFor="r2" className="text-sm">Ganho de Massa</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manutencao" id="r3" />
                  <label htmlFor="r3" className="text-sm">Manutenção</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="saude-metabolica" id="r4" />
                  <label htmlFor="r4" className="text-sm">Saúde Metabólica</label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ========== SIDEBAR COLORS ========== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Sidebar</h2>
        <div className="space-y-3">
          <ColorRow label="Sidebar" bgVar="--sidebar" fgVar="--sidebar-foreground" bgHex="#ffffff" fgHex="#334155" />
          <ColorRow label="Sidebar Primary" bgVar="--sidebar-primary" fgVar="--sidebar-primary-foreground" bgHex="#10b981" fgHex="#ffffff" />
          <ColorRow label="Sidebar Accent" bgVar="--sidebar-accent" fgVar="--sidebar-accent-foreground" bgHex="#ecfdf5" fgHex="#065f46" />
        </div>
      </section>
    </div>
  )
}
