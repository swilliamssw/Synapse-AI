import {
  clerkMiddleware,
  type ClerkMiddlewareAuth,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in*", "/sign-up*"],
  afterAuth(auth, req) {
    const { pathname } = req.nextUrl;

    // If user is authenticated and trying to access public routes, redirect to AI page
    if (
      auth.userId &&
      (pathname === "/" ||
        pathname.startsWith("/sign-in") ||
        pathname.startsWith("/sign-up"))
    ) {
      const aiUrl = new URL("/ai", req.url);
      return NextResponse.redirect(aiUrl);
    }

    // If user is not authenticated and trying to access protected routes, redirect to sign-in
    if (!auth.userId && pathname.startsWith("/ai")) {
      const signInUrl = new URL("/sign-in", req.url);
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
