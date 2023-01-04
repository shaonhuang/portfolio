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
      <p className="handwriting text-2xl">Contact</p>
      <ul className="flex flex-col text-base items-start">
        <li key="email">
          <span>Email:</span>
          <a
            href=""
            target="_blank"
            rel="me noreferrer"
            className="text-base "
          >
            {siteConfig.author.email}
          </a>
        </li>
        <li key="github">
          <span>Github:</span>
          <a
            href="{siteConfig.links.github}"
            target="_blank"
            rel="me noreferrer"
            className="text-base "
          >
            {siteConfig.links.github}
          </a>
        </li>
        <li key="blog">
          <span>Blog:</span>
          <a
            href="{siteConfig.url}"
            target="_blank"
            rel="me noreferrer"
            className="text-base"
          >
            {siteConfig.url}
          </a>
        </li>
        <li key="twitter">
          <span>Twitter:</span>
          <a
            href="{`https://twitter.com/`+siteConfig.twitter.handle}"
            target="_blank"
            rel="me noreferrer"
            className="text-base"
          >
            {siteConfig.twitter.handle}
          </a>
        </li>
        {/* https://twitter.com/yukuaihuang */}
      </ul>
    </section>
  );
};
