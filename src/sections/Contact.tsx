import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

import siteConfig from '../site.config';
function Text() {
  const { t } = useTranslation();

  return <p>{t('text')}</p>;
}
// TODO: a tag function need to be fixed
export default Text;
const contactData = [
  {
    media: 'Email',
    link: `mailto:${siteConfig.author.email}`,
    url: siteConfig.author.email,
  },
  {
    media: 'Github',
    link: siteConfig.links.github,
    url: siteConfig.links.github,
  },
  { media: 'Blog', link: siteConfig.url, url: siteConfig.url },
  {
    media: 'Twitter',
    link: `https://twitter.com/${siteConfig.twitter.handle}`,
    url: siteConfig.twitter.handle,
  },
];
const isUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const Contact = ({
  scrollRef,
}: {
  scrollRef: {
    current: Array<HTMLElement>;
  };
}) => {
  return (
    <section
      ref={(cur: HTMLElement) => {
        if (cur) {
          scrollRef.current[1] = cur;
        }
      }}
    >
      <SectionTitle title="Contact" />
      <table className="prose lg:prose-xl text-left w-auto">
        <tbody>
          {contactData
            .map((item, id) => (
              <tr key={id}>
                <th>{item.media}:</th>
                <td>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="me noreferrer"
                    className="whitespace-nowrap"
                  >
                    {isUrl(item.url)
                      ? item.url.replace(/^https?:\/\//, '')
                      : item.url}
                  </a>
                </td>
              </tr>
            ))
            .reduce((acc: JSX.Element[], p) => [...acc, p], [])}
        </tbody>
      </table>
    </section>
  );
};
