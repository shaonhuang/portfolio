import { useTranslation } from 'react-i18next';
import siteConfig from '../site.config.js';
function Text() {
  const { t } = useTranslation();

  return <p>{t('text')}</p>;
}
// TODO: a tag function need to be fixed
export default Text;

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
      <ul>
        <li key="email">
          email:{' '}
          <a href="" target="_blank" rel="me noreferrer">
            {siteConfig.author.email}
          </a>
        </li>
        <li key="github">
          Github:{' '}
          <a
            href="{siteConfig.links.github}"
            target="_blank"
            rel="me noreferrer"
          >
            {siteConfig.links.github}
          </a>
        </li>
        <li key="blog">
          Blog:{' '}
          <a href="{siteConfig.url}" target="_blank" rel="me noreferrer">
            {siteConfig.url}
          </a>
        </li>
        <li key="twitter">
          Twitter:{' '}
          <a
            href="{`https://twitter.com/`+siteConfig.twitter.handle}"
            target="_blank"
            rel="me noreferrer"
          >
            {siteConfig.twitter.handle}
          </a>
        </li>
        {/* https://twitter.com/yukuaihuang */}
      </ul>
    </section>
  );
};
