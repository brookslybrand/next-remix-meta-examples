import Head from "next/head";
import { useRouter } from "next/router";

import { DESCRIPTION, TITLE, OG_IMAGE } from "../constants/meta";
import { buildOgTags } from "../utils/og-tags";

export interface PageProps {
  children: React.ReactNode;
  title?: boolean | string;
  description?: string;
  image?: string;
}

export default function Page(props: PageProps) {
  const {
    children,
    title = TITLE,
    description = DESCRIPTION,
    image = OG_IMAGE,
  } = props;

  const pageDescription = description ?? DESCRIPTION;

  const { pathname } = useRouter();

  const pageTitle = title
    ? `${title} | Awesome Marketplace`
    : "Awesome Marketplace";

  const metaTags = buildOgTags({
    pageTitle,
    pageDescription,
    pathname,
    ogImage: image,
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {metaTags.map((tag) =>
          tag.content ? (
            <meta
              name={tag.name}
              property={tag.property}
              content={tag.content}
              key={tag?.name ?? tag?.property}
            />
          ) : null
        )}

        <meta property="og:type" content="website" />

        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}
