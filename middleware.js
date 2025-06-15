import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request });
  const isAuth = !!token;
  const isAdmin = token?.role === "ADMIN";
  const isEmployee = token?.role === "TECHNICIAN" || token?.role === "CLEANING";
  const path = request.nextUrl.pathname;

  // Public routes
  if (path === "/" || path.startsWith("/about") || path.startsWith("/services") || 
      path.startsWith("/projects") || path.startsWith("/contact") ||
      path.startsWith("/login") || path.startsWith("/register") || 
      path.startsWith("/api/public")) {
    return NextResponse.next();
  }

  // Auth routes protection
  if (!isAuth && (path.startsWith("/admin") || path.startsWith("/employee") || path.startsWith("/api/private"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin routes protection
  if (path.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Employee routes protection
  if (path.startsWith("/employee") && !isEmployee) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};