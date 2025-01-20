import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
// import createMiddleware from "next-intl/middleware"
// import type { NextRequest } from "next/server"


// const handleI18nRouting = createMiddleware(routing);

// const authMiddleware = withAuth(
//   function onSuccess(req) {
//     return handleI18nRouting(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: "/signIn",
//     },
//   }
// );

// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${routing.locales.join("|")}))?(${publicPages
//       .flatMap((p) => (p === "/" ? ["", "/"] : p))
//       .join("|")})/?$`,
//     "i"
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return handleI18nRouting(req);
//   } else {
//     return (authMiddleware as any)(req);
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
const publicPages = ["/", "/signIn", "/library", "/universities", "/teachers"];

const locales = routing.locales

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
})

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(`^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`, "i")
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}

