import { useTranslation } from 'react-i18next';
import ProfileImg from '../assets/profile.jpg';
export default Text;
export const Intro = ({
  scrollRef,
}: {
  scrollRef: {
    current: Array<HTMLElement>;
  };
}) => {
  const { t } = useTranslation();
  return (
    <section
      ref={(cur: HTMLElement) => {
        if (cur) {
          scrollRef.current[0] = cur;
        }
      }}
      className="py-2 w-full flex gap-2 flex-wrap"
    >
      {/* <SectionTitle title="Intro"></SectionTitle> */}
      <div className="prose lg:prose-xl mx-auto flex px-5 flex-wrap">
        <img
          src={ProfileImg}
          alt="avatar"
          className="max-w-xs h-fit rounded-lg shadow-xl dark:shadow-gray-800 m-auto"
        />
        <p className="text-left m-0 py-6 px-2">
          我叫黄宇快，即将2022年毕业于数字媒体技术专业后，我将开始作为一名前端开发者参加工作。
          <br />
          作为一名前端开发者，我特别欣赏那些别具一格的网站，并且我最大的爱好就是收集这些网站，以便于在我构思自己的作品时能带给我启发。我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。
        </p>
      </div>
    </section>
  );
};
