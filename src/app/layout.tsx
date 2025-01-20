import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");
  return {
    title: t("title"),
    description: t("description"),
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
