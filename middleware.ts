
// Docs: https://clerk.com/docs/upgrade-guides/core-2/nextjs#new-middleware-architecture

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
// const isAdminRoute = createRouteMatcher(['/admin(.*)'])

// TODO Check for public routes
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/verify-email', '/'])



export default clerkMiddleware((auth, req) => {
//   // Restrict admin route to users with specific role
//   if (isAdminRoute(req)) auth().protect({ role: 'org:admin' })

  // Restrict if not public route
  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}