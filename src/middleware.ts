import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const publicPages = ["/", "/signIn", "/library", "/universities", "/teachers"];

const { locales, defaultLocale } = routing;
const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/signIn",
    },
  }
);

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  const locale = req.cookies.get("NEXT_LOCALE")?.value || defaultLocale;
  const isLoggedIn =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  const redirectUrl = new URL(`/${locale}`, req.nextUrl.origin);


  if (isLoggedIn && req.nextUrl.pathname === `/${locale}/signIn`) {
    return NextResponse.redirect(redirectUrl);
  }

  if (isPublicPage) {
    return handleI18nRouting(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
