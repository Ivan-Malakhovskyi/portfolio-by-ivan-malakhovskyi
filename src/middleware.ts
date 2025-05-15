import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|uk)/:path*"],
};
