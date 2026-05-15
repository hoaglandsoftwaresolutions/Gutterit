import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
};

export function Seo({
  title,
  description,
  canonical,
  ogImage = "https://gutter-itllc.com/images/hero/hero-main.jpg",
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
