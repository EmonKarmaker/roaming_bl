# Roaming Bangladesh — B2B Travel Marketplace Login

A pixel-accurate Next.js conversion of the Figma login design for the Roaming Bangladesh B2B travel platform. Includes a fully responsive two-panel layout, functional tab switcher, and real OAuth SSO (Google + Microsoft) via NextAuth v5 (Auth.js), with stubbed email/password and OTP flows.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | NextAuth v5 (Auth.js) |
| Font | Archivo (Google Fonts, weights 400/500/600/700) |
| Icons | lucide-react, custom SVG exports |

---

## Features

- **Two-panel desktop layout** — hero panel (57 %) + login card (43 %), proportionally responsive
- **Email / OTP tab switcher** with active underline indicator
- **Password show/hide** toggle (eye icon)
- **Remember me** checkbox
- **Inline validation** and stubbed Sign In (friendly error, no real email auth yet)
- **Real OAuth SSO** — Google and Microsoft via NextAuth v5
- **Partners bar** — airline logos + accreditation badges, evenly distributed
- **Figma-accurate** colors, typography (Archivo), spacing, and component sizes

---

## Project Structure

```
roaming_bl/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx          # Login page — composes HeroPanel + LoginCard
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts              # NextAuth catch-all route handler
│   ├── globals.css               # Tailwind v4 @import + @theme design tokens
│   └── layout.tsx                # Root layout — Archivo font, metadata
├── components/
│   ├── auth/
│   │   ├── LoginCard.tsx         # Right panel — language selector, form card
│   │   ├── LoginTabs.tsx         # Email / OTP tab switcher
│   │   ├── EmailLoginForm.tsx    # Email + password form (stubbed)
│   │   ├── OtpLoginForm.tsx      # Phone + OTP form (stubbed)
│   │   └── SsoButtons.tsx        # Google + Microsoft OAuth buttons
│   ├── layout/
│   │   ├── HeroPanel.tsx         # Left panel — hero image, logo, features
│   │   └── FeatureList.tsx       # Four feature rows with SVG icons
│   ├── partners/
│   │   ├── AirlinePartners.tsx   # Airline logo row
│   │   └── Accreditations.tsx    # Accreditation badge row
│   └── ui/
│       ├── FormInput.tsx         # Labeled input with icon + password toggle
│       ├── PrimaryButton.tsx     # Primary / outline button variants
│       ├── Checkbox.tsx          # Styled checkbox with label
│       └── LanguageSelector.tsx  # Language pill (top-right of login card)
├── lib/
│   └── auth.ts                   # NextAuth config — Google + Microsoft providers
├── public/
│   ├── images/
│   │   ├── hero.png              # Hero background photo
│   │   ├── rb-white.svg          # Roaming Bangladesh white wordmark
│   │   ├── airlines/             # Airline SVG logos
│   │   └── accreditations/       # Accreditation SVG badges
│   └── icons/
│       ├── feature-airlines.svg
│       ├── feature-hotels.svg
│       ├── feature-visa.svg
│       ├── feature-support.svg
│       └── phone-otp.svg
├── .env.example                  # Environment variable template
├── tailwind.config.ts            # Tailwind v3-style config (reference only)
└── middleware.ts                 # Auth middleware (route protection)
```

---

## Prerequisites

- **Node.js 18+**
- **npm** (comes with Node)

---

## Local Setup

```bash
# 1. Clone the repository
git clone <repo-url>

# 2. Enter the project directory
cd roaming_bl

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Open .env.local and fill in the values (see Environment Variables below)

# 5. Start the development server
npm run dev

# 6. Open the login page
# http://localhost:3000/login
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill each value:

| Variable | Description | Where to get it |
|---|---|---|
| `AUTH_SECRET` | Random secret used to sign JWTs and cookies | Run `npx auth secret` and paste the output |
| `GOOGLE_CLIENT_ID` | OAuth 2.0 client ID for Google | [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 client secret for Google | Same as above |
| `AUTH_MICROSOFT_ENTRA_ID_ID` | Azure AD application (client) ID | [Azure Portal](https://portal.azure.com/) → App registrations |
| `AUTH_MICROSOFT_ENTRA_ID_SECRET` | Azure AD client secret value | Azure Portal → App registrations → Certificates & secrets |
| `AUTH_MICROSOFT_ENTRA_ID_ISSUER` | Tenant-specific issuer URL | `https://login.microsoftonline.com/<tenant-id>/v2.0` |

---

## OAuth App Setup

### Google

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**
2. Create an **OAuth 2.0 Client ID** (Web application)
3. Add authorised redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
4. Copy the **Client ID** and **Client Secret** into `.env.local`

### Microsoft (Entra ID / Azure AD)

1. Go to [Azure Portal](https://portal.azure.com/) → **Microsoft Entra ID** → **App registrations** → **New registration**
2. Set the redirect URI (platform: Web):
   ```
   http://localhost:3000/api/auth/callback/microsoft-entra-id
   ```
3. Under **Certificates & secrets**, create a new client secret
4. Copy the **Application (client) ID**, **Secret value**, and set the issuer to:
   ```
   https://login.microsoftonline.com/<your-tenant-id>/v2.0
   ```

For production deployments, add your production domain as an additional redirect URI in both consoles.

---

## Deployment (Vercel)

1. Push the repository to GitHub
2. Import the project in the [Vercel dashboard](https://vercel.com/new)
3. Add all environment variables from `.env.example` in **Project Settings → Environment Variables**
4. Deploy — Vercel auto-detects Next.js and configures the build

For OAuth to work in production, add the production callback URLs to both Google Cloud Console and Azure Portal:
```
https://<your-domain>/api/auth/callback/google
https://<your-domain>/api/auth/callback/microsoft-entra-id
```

---

## Design Fidelity

The UI is a pixel-accurate conversion of the Figma file **Roaming-BL** (node `1:1045`).

| Token | Value |
|---|---|
| Brand primary (purple) | `#371A9A` |
| Brand button (navy) | `#040264` |
| Brand deepest (dark navy) | `#022359` |
| Ink heading | `#3B2963` |
| Ink body | `#5B4198` |
| Ink muted | `#9991B3` |
| Input border | `#DED9EA` |
| Font | Archivo (400 / 500 / 600 / 700) |

All SVG assets (logos, icons, accreditation badges) are exported directly from the Figma file.
