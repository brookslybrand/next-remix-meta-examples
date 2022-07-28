interface OgTagsArgs {
  pageTitle: string;
  ogImage: string;
  pageDescription?: string;
  pathname?: string;
}

const BASE_URL = "https://my-cool-site.com";

export function buildOgTags({
  ogImage,
  pageDescription,
  pageTitle,
  pathname,
}: OgTagsArgs) {
  const url = `${BASE_URL}${pathname}`;
  const ogTags = [
    {
      name: "title",
      content: pageTitle,
    },
    {
      name: "description",
      content: pageDescription,
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:description",
      content: pageDescription,
    },
    {
      property: "og:image",
      content: ogImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: pageTitle,
    },
    {
      name: "twitter:site",
      content: "@brookslybrand",
    },
    {
      name: "twitter:url",
      content: url,
    },
    {
      name: "twitter:image",
      content: ogImage,
    },
  ];

  return ogTags.filter((tag) => Boolean(tag.content));
}
