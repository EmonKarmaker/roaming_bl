import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import MicrosoftEntra from 'next-auth/providers/microsoft-entra-id'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    MicrosoftEntra({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  pages: {
    signIn: '/login',
    error:  '/login',
  },
  callbacks: {
    authorized({ auth: session }) {
      return !!session?.user
    },
    session({ session, token }) {
      if (token.sub) session.user.agentId = token.sub
      return session
    },
  },
})
