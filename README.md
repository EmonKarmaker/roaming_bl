# Roaming Bangladesh — B2B Travel Marketplace Login

A pixel-accurate Next.js conversion of a Figma login design for **Roaming Bangladesh**, a B2B travel marketplace. Features functional authentication: a stubbed email/password flow plus real Google and Microsoft OAuth via NextAuth.

---

## 🔗 Live Demo

| Platform | Link |
|----------|------|
| **Web (Desktop)** | https://roaming-bl.vercel.app/login |
| **Mobile** | Open the same link on a phone — responsive single-column layout below 1024px |

**Repository:** https://github.com/EmonKarmaker/roaming_bl

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Auth | NextAuth v5 (Auth.js) — Google + Microsoft Entra ID |
| Font | Archivo (`next/font/google`) |
| Icons | lucide-react + custom exported SVGs |
| Hosting | Vercel |

---

## ✨ Features

- Pixel-accurate two-panel desktop login matching the Figma design
- Responsive single-column mobile layout
- Email / OTP login tab switcher
- Password show / hide toggle
- Remember-me checkbox with inline validation
- Stubbed email/password sign-in (loading + response states)
- Real Google & Microsoft OAuth sign-in
- Airline partners & accreditations bar with real logos

---

## 📁 Project Structure

```
roaming_bl/
├── app/
│   ├── (auth)/login/page.tsx       # Login page (hero + card + partners)
│   ├── (dashboard)/                # Protected dashboard stub
│   ├── api/auth/[...nextauth]/     # NextAuth route handler
│   ├── layout.tsx                  # Root layout + Archivo font
│   └── page.tsx                    # Redirects to /login
├── components/
│   ├── auth/                       # LoginCard, LoginTabs, Email/OtpForm, SsoButtons
│   ├── layout/                     # HeroPanel, FeatureList
│   ├── partners/                   # AirlinePartners, Accreditations
│   └── ui/                         # FormInput, PrimaryButton, Checkbox, LanguageSelector
├── lib/
│   └── auth.ts                     # NextAuth config (Google + Microsoft)
├── public/
│   ├── images/                     # Hero, airline & accreditation logos, rb-white
│   └── icons/                      # Feature + UI SVG icons
└── middleware.ts                   # Route protection
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repo
git clone https://github.com/EmonKarmaker/roaming_bl.git

# 2. Enter the folder
cd roaming_bl

# 3. Install dependencies
npm install

# 4. Create your env file, then fill in the values (see below)
copy .env.example .env.local

# 5. Start the dev server
npm run dev
```

Then open **http://localhost:3000/login**

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and fill in each value:

| Variable | Where to get it |
|----------|-----------------|
| `AUTH_SECRET` | Run `npx auth secret` |
| `GOOGLE_CLIENT_ID` | Google Cloud Console → Credentials → OAuth client |
| `GOOGLE_CLIENT_SECRET` | Same as above |
| `AUTH_MICROSOFT_ENTRA_ID_ID` | Azure Portal → Entra ID → App registrations |
| `AUTH_MICROSOFT_ENTRA_ID_SECRET` | Azure → App → Certificates & secrets |
| `AUTH_MICROSOFT_ENTRA_ID_ISSUER` | `https://login.microsoftonline.com/<tenant-id>/v2.0` |

> ⚠️ **Never commit `.env.local`** — it is gitignored.

---

## 🔐 OAuth Redirect URIs

Register these callback URLs in the Google and Azure dashboards.

**Local development:**

```
Google:     http://localhost:3000/api/auth/callback/google
Microsoft:  http://localhost:3000/api/auth/callback/microsoft-entra-id
```

**Production:**

```
Google:     https://roaming-bl.vercel.app/api/auth/callback/google
Microsoft:  https://roaming-bl.vercel.app/api/auth/callback/microsoft-entra-id
```

---

## ☁️ Deployment

Deployed on **Vercel**. Pushing to the `master` branch automatically triggers a new deployment.

1. Add all environment variables in the Vercel dashboard → **Settings → Environment Variables**
2. Also set `AUTH_URL=https://roaming-bl.vercel.app`
3. Push to `master` → Vercel rebuilds automatically (~1 min)

---

## 🎨 Design Fidelity

Converted pixel-accurately from the Figma source.

| Token | Value |
|-------|-------|
| Brand purple | `#371A9A` |
| Button navy | `#040264` |
| Heading text | `#3B2963` |
| Font | Archivo (weights 400 / 500 / 600 / 700) |

Hero image, logos, and feature icons were exported directly from the Figma file.
