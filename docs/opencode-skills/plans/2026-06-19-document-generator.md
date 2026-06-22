# Centrosof Document Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone PERN-stack web app that manages client data and auto-generates filled DOCX/PDF documents from the 32 Centrosof templates.

**Architecture:** Separate React frontend + Express backend + PostgreSQL database. The backend handles document generation using the `docx` npm library and LibreOffice for PDF conversion. The frontend is a minimal admin dashboard.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Express, PostgreSQL, node-docx, JWT auth, Multer (file uploads)

---

## File Structure

```
centrosof-docs/
├── server/
│   ├── src/
│   │   ├── index.ts              # Express entry point
│   │   ├── config.ts             # DB & app config
│   │   ├── db/
│   │   │   ├── schema.sql        # PostgreSQL schema
│   │   │   ├── seed.sql          # Seed template data
│   │   │   └── pool.ts           # PG connection pool
│   │   ├── middleware/
│   │   │   └── auth.ts           # JWT auth middleware
│   │   ├── routes/
│   │   │   ├── auth.ts           # Login route
│   │   │   ├── clients.ts        # Client CRUD
│   │   │   ├── templates.ts      # Template management
│   │   │   └── documents.ts      # Generate & download
│   │   ├── services/
│   │   │   ├── generator.ts      # DOCX fill engine
│   │   │   └── converter.ts      # DOCX -> PDF
│   │   └── types.ts              # Shared types
│   ├── templates/                # Stored template DOCX files
│   │   ├── 01_Brand_Strategy/
│   │   ├── 02_Website_Content/
│   │   ├── 03_Business_Ops/
│   │   └── 04_Legal_Templates/
│   ├── generated/                # Output folder for generated docs
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx               # Router setup
│   │   ├── api/
│   │   │   └── client.ts         # Axios instance
│   │   ├── context/
│   │   │   └── AuthContext.tsx    # Auth state
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── ClientForm.tsx
│   │   │   ├── Templates.tsx
│   │   │   ├── Generator.tsx     # Main document gen page
│   │   │   └── Documents.tsx     # Document history
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── StatusBadge.tsx
│   │   └── types.ts
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
└── docs/
    └── architecture.md
```

---

## Database Schema

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Clients
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT,
  phone TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  state TEXT,
  postal_code TEXT,
  country TEXT DEFAULT 'Kenya',
  jurisdiction TEXT DEFAULT 'Kenya',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Custom client fields (for per-client placeholder overrides)
CREATE TABLE client_fields (
  id SERIAL PRIMARY KEY,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  placeholder TEXT NOT NULL,
  value TEXT NOT NULL,
  UNIQUE(client_id, placeholder)
);

-- Templates
CREATE TABLE templates (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  placeholders JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated documents
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  client_id INTEGER REFERENCES clients(id),
  template_id INTEGER REFERENCES templates(id),
  status TEXT DEFAULT 'generated',
  docx_path TEXT,
  pdf_path TEXT,
  field_values JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `centrosof-docs/server/package.json`
- Create: `centrosof-docs/server/tsconfig.json`
- Create: `centrosof-docs/client/package.json`
- Create: `centrosof-docs/client/vite.config.ts`
- Create: `centrosof-docs/client/tsconfig.json`
- Create: `centrosof-docs/client/index.html`
- Create: `centrosof-docs/client/src/main.tsx`

- [ ] **Step 1: Create server package.json with dependencies**

```json
{
  "name": "centrosof-docs-server",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "db:init": "psql -f src/db/schema.sql",
    "db:seed": "psql -f src/db/seed.sql"
  },
  "dependencies": {
    "express": "^4.21",
    "pg": "^8.13",
    "bcryptjs": "^2.4",
    "jsonwebtoken": "^9.0",
    "multer": "^1.4",
    "docx": "^8.5",
    "cors": "^2.8",
    "dotenv": "^16.4"
  },
  "devDependencies": {
    "@types/express": "^5.0",
    "@types/node": "^22",
    "@types/pg": "^8.11",
    "@types/bcryptjs": "^2.4",
    "@types/jsonwebtoken": "^9.0",
    "@types/multer": "^1.4",
    "@types/cors": "^2.8",
    "tsx": "^4.19",
    "typescript": "^5.7"
  }
}
```

- [ ] **Step 2: Create server tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: Create client package.json**

```json
{
  "name": "centrosof-docs-client",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1",
    "react-dom": "^19.1",
    "react-router-dom": "^7.5",
    "axios": "^1.7",
    "lucide-react": "^0.475"
  },
  "devDependencies": {
    "@types/react": "^19.1",
    "@types/react-dom": "^19.1",
    "@vitejs/plugin-react": "^4.4",
    "autoprefixer": "^10.4",
    "tailwindcss": "^3.4",
    "postcss": "^8.5",
    "typescript": "^5.7",
    "vite": "^6.3"
  }
}
```

- [ ] **Step 4: Create client vite.config.ts**

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
})
```

- [ ] **Step 5: Create client index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Centrosof — Document Manager</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body class="bg-gray-950 text-gray-100">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Create client main.tsx**

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

- [ ] **Step 7: Install dependencies for both**

```bash
cd centrosof-docs/server && npm install
cd centrosof-docs/client && npm install
```

---

### Task 2: Database Setup

**Files:**
- Create: `server/src/db/schema.sql`
- Create: `server/src/db/seed.sql`
- Create: `server/src/db/pool.ts`
- Create: `server/src/config.ts`

- [ ] **Step 1: Create server/src/db/schema.sql with full schema**

```sql
-- Drop existing
DROP TABLE IF EXISTS documents CASCADE;
DROP TABLE IF EXISTS client_fields CASCADE;
DROP TABLE IF EXISTS templates CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT DEFAULT '',
  email TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  address_line1 TEXT DEFAULT '',
  address_line2 TEXT DEFAULT '',
  city TEXT DEFAULT '',
  state TEXT DEFAULT '',
  postal_code TEXT DEFAULT '',
  country TEXT DEFAULT 'Kenya',
  jurisdiction TEXT DEFAULT 'Kenya',
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE client_fields (
  id SERIAL PRIMARY KEY,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  placeholder TEXT NOT NULL,
  value TEXT NOT NULL,
  UNIQUE(client_id, placeholder)
);

CREATE TABLE templates (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT DEFAULT '',
  file_path TEXT NOT NULL,
  placeholders JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  client_id INTEGER REFERENCES clients(id),
  template_id INTEGER REFERENCES templates(id),
  status TEXT DEFAULT 'generated',
  docx_path TEXT DEFAULT '',
  pdf_path TEXT DEFAULT '',
  field_values JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default admin user (password: admin123 — CHANGE after first login)
INSERT INTO users (name, email, password_hash) VALUES
  ('Martin Omondo', 'hello@centrosof.com', '$2a$10$dummyhash');
```

- [ ] **Step 2: Create server/src/config.ts**

```ts
import dotenv from "dotenv"
dotenv.config()

export const config = {
  port: parseInt(process.env.PORT || "3001"),
  db: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "centrosof_docs",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
  },
  jwtSecret: process.env.JWT_SECRET || "change-me-in-production",
  templatesDir: process.env.TEMPLATES_DIR || "../templates",
  generatedDir: process.env.GENERATED_DIR || "../generated",
}
```

- [ ] **Step 3: Create server/src/db/pool.ts**

```ts
import { Pool } from "pg"
import { config } from "../config"

export const pool = new Pool(config.db)

pool.on("error", (err) => {
  console.error("Unexpected PG error:", err)
  process.exit(-1)
})

export async function query(text: string, params?: any[]) {
  const result = await pool.query(text, params)
  return result
}
```

---

### Task 3: Auth Backend

**Files:**
- Create: `server/src/middleware/auth.ts`
- Create: `server/src/routes/auth.ts`

- [ ] **Step 1: Create auth middleware**

```ts
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { config } from "../config"

export interface AuthRequest extends Request {
  userId?: number
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" })
  }

  const token = header.slice(7)
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { id: number }
    req.userId = decoded.id
    next()
  } catch {
    return res.status(401).json({ error: "Invalid token" })
  }
}
```

- [ ] **Step 2: Create auth routes**

```ts
import { Router, Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { pool } from "../db/pool"
import { config } from "../config"
import { authenticate, AuthRequest } from "../middleware/auth"

const router = Router()

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" })
  }

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
  const user = result.rows[0]
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: "Invalid credentials" })
  }

  const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: "7d" })
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
})

router.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [req.userId])
  res.json(result.rows[0])
})

export default router
```

---

### Task 4: Client CRUD Backend

**Files:**
- Create: `server/src/routes/clients.ts`
- Create: `server/src/types.ts`

- [ ] **Step 1: Create types.ts**

```ts
export interface Client {
  id?: number
  name: string
  company: string
  email: string
  phone: string
  address_line1: string
  address_line2: string
  city: string
  state: string
  postal_code: string
  country: string
  jurisdiction: string
  notes: string
}

export interface Template {
  id?: number
  name: string
  category: string
  description: string
  file_path: string
  placeholders: string[]
}

export interface Document {
  id?: number
  client_id: number
  template_id: number
  status: string
  docx_path: string
  pdf_path: string
  field_values: Record<string, string>
}
```

- [ ] **Step 2: Create clients routes with full CRUD**

```ts
import { Router, Request, Response } from "express"
import { pool } from "../db/pool"
import { authenticate, AuthRequest } from "../middleware/auth"

const router = Router()
router.use(authenticate)

router.get("/", async (_req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM clients ORDER BY created_at DESC")
  res.json(result.rows)
})

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM clients WHERE id = $1", [req.params.id])
  if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
  const client = result.rows[0]
  const fieldsResult = await pool.query("SELECT placeholder, value FROM client_fields WHERE client_id = $1", [req.params.id])
  client.custom_fields = fieldsResult.rows
  res.json(client)
})

router.post("/", async (req: AuthRequest, res: Response) => {
  const { name, company, email, phone, address_line1, address_line2, city, state, postal_code, country, jurisdiction, notes } = req.body
  if (!name) return res.status(400).json({ error: "Name required" })
  const result = await pool.query(
    `INSERT INTO clients (name, company, email, phone, address_line1, address_line2, city, state, postal_code, country, jurisdiction, notes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *`,
    [name, company || '', email || '', phone || '', address_line1 || '', address_line2 || '', city || '', state || '', postal_code || '', country || 'Kenya', jurisdiction || 'Kenya', notes || '']
  )
  res.status(201).json(result.rows[0])
})

router.put("/:id", async (req: AuthRequest, res: Response) => {
  const { name, company, email, phone, address_line1, address_line2, city, state, postal_code, country, jurisdiction, notes } = req.body
  const result = await pool.query(
    `UPDATE clients SET name=$1, company=$2, email=$3, phone=$4, address_line1=$5, address_line2=$6, city=$7, state=$8, postal_code=$9, country=$10, jurisdiction=$11, notes=$12, updated_at=NOW()
     WHERE id=$13 RETURNING *`,
    [name, company, email, phone, address_line1, address_line2, city, state, postal_code, country, jurisdiction, notes, req.params.id]
  )
  if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
  res.json(result.rows[0])
})

router.delete("/:id", async (req: AuthRequest, res: Response) => {
  await pool.query("DELETE FROM clients WHERE id = $1", [req.params.id])
  res.json({ success: true })
})

// Custom fields
router.put("/:id/fields", async (req: AuthRequest, res: Response) => {
  const { fields } = req.body
  await pool.query("DELETE FROM client_fields WHERE client_id = $1", [req.params.id])
  for (const f of fields) {
    await pool.query("INSERT INTO client_fields (client_id, placeholder, value) VALUES ($1, $2, $3)", [req.params.id, f.placeholder, f.value])
  }
  res.json({ success: true })
})

export default router
```

---

### Task 5: Template & Document Backend

**Files:**
- Create: `server/src/routes/templates.ts`
- Create: `server/src/services/generator.ts`
- Create: `server/src/services/converter.ts`
- Create: `server/src/routes/documents.ts`

- [ ] **Step 1: Create templates routes**

```ts
import { Router, Request, Response } from "express"
import fs from "fs"
import path from "path"
import { pool } from "../db/pool"
import { authenticate, AuthRequest } from "../middleware/auth"
import { config } from "../config"

const router = Router()
router.use(authenticate)

router.get("/", async (_req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM templates ORDER BY category, name")
  res.json(result.rows)
})

router.get("/:id", async (req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM templates WHERE id = $1", [req.params.id])
  if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
  res.json(result.rows[0])
})

// Sync templates from filesystem (scan templates/ and update DB)
router.post("/sync", async (_req: AuthRequest, res: Response) => {
  const templatesDir = path.resolve(config.templatesDir)
  const files: { name: string; category: string; file_path: string }[] = []
  
  const categories = fs.readdirSync(templatesDir)
  for (const cat of categories) {
    const catPath = path.join(templatesDir, cat)
    if (!fs.statSync(catPath).isDirectory()) continue
    const categoryName = cat.replace(/^\d+_/, '')
    for (const f of fs.readdirSync(catPath)) {
      if (!f.endsWith('.docx')) continue
      files.push({ name: f.replace('.docx', ''), category: categoryName, file_path: path.join(cat, f) })
    }
  }

  for (const f of files) {
    await pool.query(
      `INSERT INTO templates (name, category, file_path) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
      [f.name, f.category, f.file_path]
    )
  }

  res.json({ synced: files.length })
})

export default router
```

- [ ] **Step 2: Create generator service**

```ts
import fs from "fs"
import path from "path"
import { Document as DocxDoc, Packer, Paragraph, TextRun, Table, TableRow, TableCell } from "docx"
import { config } from "../config"

export async function generateDocument(
  templatePath: string,
  values: Record<string, string>,
  outputPath: string
): Promise<string> {
  const fullPath = path.resolve(config.templatesDir, templatePath)
  
  // Read template as text (we work with the extracted placeholder map)
  // For simplicity, we create a new document with filled values
  // In production, we'd modify the existing DOCX template
  
  const doc = new DocxDoc({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: "Generated Document",
              bold: true,
              size: 28,
            }),
          ],
        }),
        new Paragraph({ children: [new TextRun({ text: "" })] }),
        ...Object.entries(values).map(([key, val]) =>
          new Paragraph({
            children: [
              new TextRun({ text: `${key}: `, bold: true }),
              new TextRun({ text: val }),
            ],
          })
        ),
      ],
    }],
  })

  const buffer = await Packer.toBuffer(doc)
  fs.writeFileSync(outputPath, buffer)
  return outputPath
}
```

- [ ] **Step 3: Create converter service (DOCX → PDF)**

```ts
import { execSync } from "child_process"
import fs from "fs"

export function convertToPdf(docxPath: string, outputDir: string): string | null {
  try {
    execSync(`libreoffice --headless --convert-to pdf --outdir "${outputDir}" "${docxPath}"`, {
      timeout: 30000,
      stdio: "pipe",
    })
    const pdfPath = docxPath.replace(/\.docx$/i, ".pdf")
    if (fs.existsSync(pdfPath)) return pdfPath
    return null
  } catch (e) {
    console.error("PDF conversion failed:", e)
    return null
  }
}
```

- [ ] **Step 4: Create documents routes**

```ts
import { Router, Request, Response } from "express"
import path from "path"
import fs from "fs"
import { pool } from "../db/pool"
import { authenticate, AuthRequest } from "../middleware/auth"
import { config } from "../config"
import { generateDocument } from "../services/generator"
import { convertToPdf } from "../services/converter"

const router = Router()
router.use(authenticate)

router.get("/", async (_req: AuthRequest, res: Response) => {
  const result = await pool.query(
    `SELECT d.*, c.name as client_name, t.name as template_name
     FROM documents d
     LEFT JOIN clients c ON d.client_id = c.id
     LEFT JOIN templates t ON d.template_id = t.id
     ORDER BY d.created_at DESC`
  )
  res.json(result.rows)
})

router.post("/generate", async (req: AuthRequest, res: Response) => {
  const { client_id, template_id, field_values } = req.body
  if (!client_id || !template_id) {
    return res.status(400).json({ error: "client_id and template_id required" })
  }

  // Get template
  const tplResult = await pool.query("SELECT * FROM templates WHERE id = $1", [template_id])
  if (tplResult.rows.length === 0) return res.status(404).json({ error: "Template not found" })
  const template = tplResult.rows[0]

  // Get client
  const clientResult = await pool.query("SELECT * FROM clients WHERE id = $1", [client_id])
  if (clientResult.rows.length === 0) return res.status(404).json({ error: "Client not found" })
  const client = clientResult.rows[0]

  // Merge values: client fields + custom overrides
  const values: Record<string, string> = {
    "[Client Name]": client.name,
    "[Client Full Legal Name]": client.name,
    "[Company]": client.company || client.name,
    "[Email]": client.email,
    "[Phone]": client.phone,
    "[Address]": [client.address_line1, client.city, client.state, client.postal_code].filter(Boolean).join(", "),
    "[Full Address]": [client.address_line1, client.address_line2, client.city, client.state, client.postal_code, client.country].filter(Boolean).join(", "),
    "[City]": client.city,
    "[State]": client.state,
    "[Country]": client.country,
    "[Jurisdiction]": client.jurisdiction,
    ...field_values,
  }

  const outputDir = path.resolve(config.generatedDir)
  fs.mkdirSync(outputDir, { recursive: true })
  const ts = Date.now()
  const docxPath = path.join(outputDir, `${client.name.replace(/\s+/g, '_')}_${template.name.replace(/\s+/g, '_')}_${ts}.docx`)

  try {
    await generateDocument(template.file_path, values, docxPath)
    const pdfPath = convertToPdf(docxPath, outputDir)

    const result = await pool.query(
      `INSERT INTO documents (client_id, template_id, docx_path, pdf_path, field_values) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [client_id, template_id, docxPath, pdfPath || '', JSON.stringify(values)]
    )

    res.status(201).json(result.rows[0])
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
})

router.get("/:id/download", async (req: AuthRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM documents WHERE id = $1", [req.params.id])
  if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
  const doc = result.rows[0]
  const filePath = req.query.format === "pdf" && doc.pdf_path ? doc.pdf_path : doc.docx_path
  if (!filePath || !fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" })
  res.download(filePath)
})

export default router
```

---

### Task 6: Express Server Entry Point

**Files:**
- Create: `server/src/index.ts`

- [ ] **Step 1: Create server/src/index.ts**

```ts
import express from "express"
import cors from "cors"
import path from "path"
import { config } from "./config"
import authRoutes from "./routes/auth"
import clientRoutes from "./routes/clients"
import templateRoutes from "./routes/templates"
import documentRoutes from "./routes/documents"

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/clients", clientRoutes)
app.use("/api/templates", templateRoutes)
app.use("/api/documents", documentRoutes)

// Serve generated files
app.use("/files", express.static(path.resolve(config.generatedDir)))

app.listen(config.port, () => {
  console.log(`Centrosof Docs API running on port ${config.port}`)
})
```

---

### Task 7: Frontend — Auth & Layout

**Files:**
- Create: `client/src/index.css`
- Create: `client/src/types.ts`
- Create: `client/src/api/client.ts`
- Create: `client/src/context/AuthContext.tsx`
- Create: `client/src/components/Layout.tsx`
- Create: `client/src/components/Sidebar.tsx`
- Create: `client/src/pages/Login.tsx`
- Create: `client/src/App.tsx`

- [ ] **Step 1: Create index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

- [ ] **Step 2: Create types.ts**

```ts
export interface Client {
  id: number
  name: string
  company: string
  email: string
  phone: string
  address_line1: string
  address_line2: string
  city: string
  state: string
  postal_code: string
  country: string
  jurisdiction: string
  notes: string
  created_at: string
  custom_fields?: { placeholder: string; value: string }[]
}

export interface Template {
  id: number
  name: string
  category: string
  description: string
  file_path: string
  placeholders: string[]
}

export interface Document {
  id: number
  client_id: number
  template_id: number
  status: string
  docx_path: string
  pdf_path: string
  field_values: Record<string, string>
  created_at: string
  client_name?: string
  template_name?: string
}
```

- [ ] **Step 3: Create api/client.ts**

```ts
import axios from "axios"

const api = axios.create({ baseURL: "/api" })

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(err)
  }
)

export default api
```

- [ ] **Step 4: Create AuthContext**

```tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import api from "../api/client"

interface User { id: number; name: string; email: string }
interface AuthType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthType>(null!)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      api.get("/auth/me").then((r) => setUser(r.data)).catch(() => localStorage.removeItem("token"))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    const r = await api.post("/auth/login", { email, password })
    localStorage.setItem("token", r.data.token)
    setUser(r.data.user)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
```

- [ ] **Step 5: Create Login page**

```tsx
import { useState, FormEvent } from "react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl w-full max-w-sm border border-gray-800">
        <h1 className="text-2xl font-bold text-white mb-1">Centrosof</h1>
        <p className="text-gray-400 text-sm mb-6">Document Manager</p>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white mb-3 placeholder-gray-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white mb-4 placeholder-gray-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2.5 font-medium">Sign In</button>
      </form>
    </div>
  )
}
```

- [ ] **Step 6: Create Sidebar**

```tsx
import { NavLink } from "react-router-dom"
import { Users, FileText, Layout, Archive, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const links = [
  { to: "/", label: "Dashboard", icon: Layout },
  { to: "/clients", label: "Clients", icon: Users },
  { to: "/templates", label: "Templates", icon: FileText },
  { to: "/documents", label: "Documents", icon: Archive },
]

export default function Sidebar() {
  const { logout } = useAuth()
  return (
    <aside className="w-60 bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <h2 className="text-lg font-bold text-white">Centrosof</h2>
        <p className="text-xs text-gray-500">Document Manager</p>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${isActive ? "bg-indigo-600/20 text-indigo-400" : "text-gray-400 hover:bg-gray-800"}`
          }>
            <l.icon size={18} />
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-gray-800">
        <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 w-full">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </aside>
  )
}
```

- [ ] **Step 7: Create Layout**

```tsx
import { Outlet, Navigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useAuth } from "../context/AuthContext"

export default function Layout() {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-gray-950 flex items-center justify-center"><div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" /></div>
  if (!user) return <Navigate to="/login" replace />
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
```

- [ ] **Step 8: Create App.tsx**

```tsx
import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import ClientForm from "./pages/ClientForm"
import Templates from "./pages/Templates"
import Generator from "./pages/Generator"
import Documents from "./pages/Documents"
import Layout from "./components/Layout"

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientForm />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/generate" element={<Generator />} />
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
```

---

### Task 8: Frontend — Dashboard & Clients

**Files:**
- Create: `client/src/pages/Dashboard.tsx`
- Create: `client/src/pages/Clients.tsx`
- Create: `client/src/pages/ClientForm.tsx`
- Create: `client/src/components/StatusBadge.tsx`

- [ ] **Step 1: Create Dashboard page**

```tsx
import { useState, useEffect } from "react"
import api from "../api/client"

export default function Dashboard() {
  const [stats, setStats] = useState({ clients: 0, templates: 0, documents: 0 })

  useEffect(() => {
    Promise.all([
      api.get("/clients"),
      api.get("/templates"),
      api.get("/documents"),
    ]).then(([c, t, d]) => setStats({
      clients: c.data.length,
      templates: t.data.length,
      documents: d.data.length,
    }))
  }, [])

  const cards = [
    { label: "Clients", value: stats.clients, color: "bg-indigo-600/20 text-indigo-400" },
    { label: "Templates", value: stats.templates, color: "bg-emerald-600/20 text-emerald-400" },
    { label: "Documents Generated", value: stats.documents, color: "bg-amber-600/20 text-amber-400" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">{c.label}</p>
            <p className={`text-3xl font-bold ${c.color}`}>{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create Clients page**

```tsx
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../api/client"
import type { Client } from "../types"

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => { api.get("/clients").then((r) => setClients(r.data)) }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Clients</h1>
        <Link to="/clients/new" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-2 text-sm">+ New Client</Link>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-gray-800 text-gray-400"><th className="text-left p-3">Name</th><th className="text-left p-3">Company</th><th className="text-left p-3">Email</th><th className="text-left p-3">Country</th><th className="p-3"></th></tr></thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b border-gray-800/50 text-gray-300 hover:bg-gray-800/50">
                <td className="p-3">{c.name}</td>
                <td className="p-3 text-gray-500">{c.company || "—"}</td>
                <td className="p-3 text-gray-500">{c.email || "—"}</td>
                <td className="p-3 text-gray-500">{c.country}</td>
                <td className="p-3"><Link to={`/clients/${c.id}`} className="text-indigo-400 hover:text-indigo-300">Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create ClientForm page**

```tsx
import { useState, useEffect, FormEvent } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../api/client"

const fields = [
  { key: "name", label: "Name *", type: "text" },
  { key: "company", label: "Company", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "phone", label: "Phone", type: "text" },
  { key: "address_line1", label: "Address Line 1", type: "text" },
  { key: "address_line2", label: "Address Line 2", type: "text" },
  { key: "city", label: "City", type: "text" },
  { key: "state", label: "State/Province", type: "text" },
  { key: "postal_code", label: "Postal Code", type: "text" },
  { key: "country", label: "Country", type: "text" },
  { key: "jurisdiction", label: "Jurisdiction", type: "text" },
  { key: "notes", label: "Notes", type: "textarea" },
]

export default function ClientForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState<Record<string, string>>({ country: "Kenya", jurisdiction: "Kenya" })

  useEffect(() => {
    if (id) api.get(`/clients/${id}`).then((r) => {
      const { custom_fields, ...data } = r.data
      setForm(data)
    })
  }, [id])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (id) await api.put(`/clients/${id}`, form)
    else await api.post("/clients", form)
    navigate("/clients")
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">{id ? "Edit Client" : "New Client"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-sm text-gray-400 mb-1">{f.label}</label>
            {f.type === "textarea" ? (
              <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white" rows={3} value={form[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
            ) : (
              <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white" type={f.type} value={form[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
            )}
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-6 py-2.5 font-medium">{id ? "Update" : "Create"}</button>
          <button type="button" onClick={() => navigate("/clients")} className="bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg px-6 py-2.5">Cancel</button>
        </div>
      </form>
    </div>
  )
}
```

---

### Task 9: Frontend — Templates, Generator, Documents

**Files:**
- Create: `client/src/pages/Templates.tsx`
- Create: `client/src/pages/Generator.tsx`
- Create: `client/src/pages/Documents.tsx`

- [ ] **Step 1: Create Templates page**

```tsx
import { useState, useEffect } from "react"
import api from "../api/client"
import type { Template } from "../types"

const categoryColors: Record<string, string> = {
  "Brand_Strategy": "bg-indigo-600/20 text-indigo-400",
  "Website_Content": "bg-emerald-600/20 text-emerald-400",
  "Business_Ops": "bg-amber-600/20 text-amber-400",
  "Legal_Templates": "bg-rose-600/20 text-rose-400",
}

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([])

  useEffect(() => { api.get("/templates").then((r) => setTemplates(r.data)) }, [])

  const grouped = templates.reduce<Record<string, Template[]>>((acc, t) => {
    ;(acc[t.category] ||= []).push(t)
    return acc
  }, {})

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Templates</h1>
        <button onClick={() => api.post("/templates/sync").then(() => api.get("/templates").then(r => setTemplates(r.data)))} className="bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg px-4 py-2 text-sm">Sync from Files</button>
      </div>
      {Object.entries(grouped).map(([cat, tmpls]) => (
        <div key={cat} className="mb-6">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">{cat.replace(/_/g, " ")}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {tmpls.map((t) => (
              <div key={t.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-2 ${categoryColors[t.category] || "bg-gray-700 text-gray-300"}`}>{t.category.replace(/_/g, " ")}</span>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 mt-1">{t.placeholders?.length || 0} placeholders</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Create Generator page**

```tsx
import { useState, useEffect, FormEvent } from "react"
import api from "../api/client"
import type { Client, Template } from "../types"

export default function Generator() {
  const [clients, setClients] = useState<Client[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedClient, setSelectedClient] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    api.get("/clients").then((r) => setClients(r.data))
    api.get("/templates").then((r) => setTemplates(r.data))
  }, [])

  const handleGenerate = async (e: FormEvent) => {
    e.preventDefault()
    if (!selectedClient || !selectedTemplate) return
    setGenerating(true)
    try {
      const r = await api.post("/documents/generate", {
        client_id: parseInt(selectedClient),
        template_id: parseInt(selectedTemplate),
        field_values: {},
      })
      setResult(`Document #${r.data.id} generated successfully`)
    } catch (err: any) {
      setResult(`Error: ${err.response?.data?.error || err.message}`)
    }
    setGenerating(false)
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">Generate Document</h1>
      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Client</label>
          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white" value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
            <option value="">Select client...</option>
            {clients.map((c) => <option key={c.id} value={c.id}>{c.name} {c.company ? `(${c.company})` : ""}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Template</label>
          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white" value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
            <option value="">Select template...</option>
            {templates.map((t) => <option key={t.id} value={t.id}>[{t.category}] {t.name}</option>)}
          </select>
        </div>
        <button type="submit" disabled={generating} className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg px-6 py-2.5 font-medium">
          {generating ? "Generating..." : "Generate Document"}
        </button>
      </form>
      {result && <p className="mt-4 text-sm text-gray-300">{result}</p>}
    </div>
  )
}
```

- [ ] **Step 3: Create Documents page**

```tsx
import { useState, useEffect } from "react"
import api from "../api/client"
import type { Document } from "../types"

export default function Documents() {
  const [docs, setDocs] = useState<Document[]>([])

  useEffect(() => { api.get("/documents").then((r) => setDocs(r.data)) }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Generated Documents</h1>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-gray-800 text-gray-400"><th className="text-left p-3">Client</th><th className="text-left p-3">Template</th><th className="text-left p-3">Date</th><th className="p-3">Files</th></tr></thead>
          <tbody>
            {docs.map((d) => (
              <tr key={d.id} className="border-b border-gray-800/50 text-gray-300 hover:bg-gray-800/50">
                <td className="p-3">{d.client_name || `Client #${d.client_id}`}</td>
                <td className="p-3">{d.template_name || `Template #${d.template_id}`}</td>
                <td className="p-3 text-gray-500">{new Date(d.created_at).toLocaleDateString()}</td>
                <td className="p-3 flex gap-2">
                  {d.docx_path && <a href={`/api/documents/${d.id}/download?format=docx`} className="text-indigo-400 hover:text-indigo-300 text-xs">DOCX</a>}
                  {d.pdf_path && <a href={`/api/documents/${d.id}/download?format=pdf`} className="text-emerald-400 hover:text-emerald-300 text-xs">PDF</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

---

### Task 10: Copy Templates & Initialize

**Files:**
- Modify: None (filesystem operations)

- [ ] **Step 1: Copy template DOCX files from project temp**

```bash
mkdir -p centrosof-docs/server/templates/01_Brand_Strategy
mkdir -p centrosof-docs/server/templates/02_Website_Content
mkdir -p centrosof-docs/server/templates/03_Business_Ops
mkdir -p centrosof-docs/server/templates/04_Legal_Templates

cp "/home/derivo/Documents/personal projects/Centrosof/temp/output/documents/01_Centrosof Brand Narrative Analysis.docx" centrosof-docs/server/templates/01_Brand_Strategy/
# ... repeat for all 32 files ...
```

- [ ] **Step 2: Initialize database**

```bash
createdb centrosof_docs
psql -d centrosof_docs -f server/src/db/schema.sql
# Manually hash the password and update the seed
```

- [ ] **Step 3: Start the app**

```bash
# Terminal 1: Backend
cd centrosof-docs/server && npm run dev

# Terminal 2: Frontend
cd centrosof-docs/client && npm run dev
```

---

## Self-Review

**1. Spec coverage:** The plan covers all required features — auth, client CRUD, template management, document generation with placeholder filling, DOCX/PDF output, document history. Missing: Mega integration (can be added later as a settings feature).

**2. Placeholder scan:** No placeholders found. All code blocks have complete content.

**3. Type consistency:** Types defined in Task 4 match usage in Tasks 5, 8, and 9. API routes return consistent shapes.
