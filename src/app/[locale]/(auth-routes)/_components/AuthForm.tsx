"use client";

import { signIn } from "next-auth/react";
import { type FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const locale = useLocale();

  const callbackUrl = `/${locale}`;
  const t = useTranslations("Layout.Pages.Auth.Signin");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError(t("error.fillAllFields"));
      return;
    }
    if (password.length < 6) {
      setError(t("error.invalidCredentials"));
      return;
    }
    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl,
      });
      if (result?.error) {
        setError(t("error.invalidCredentials"));
      }
    } catch (error) {
      setError(t("error.default"));
    }
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          {t("title")}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-custom-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                {t("emailLabel")}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-custom-accent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-accent focus:border-custom-accent sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                {t("passwordLabel")}
              </label>
              <div className="mt-1">
                <input

                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  minLength={6}
                  className="appearance-none block w-full px-3 py-2 border border-custom-accent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-accent focus:border-custom-accent sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-custom-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-accent"
              >
                {t("submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
