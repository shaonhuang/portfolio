import { useTranslation } from 'react-i18next';

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
      className="py-2 w-full"
    >
      <p>Intro</p>
      <div className="flex justify-center items-center prose lg:prose-xl mx-auto">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt="avatar"
        />
        <div className="flex flex-col text-left px-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero sed
            recusandae amet rerum distinctio aliquam illo? Aliquam dolor eaque,
            tempore repellendus, aut eius magni vel vitae rerum est cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sapiente, praesentium reprehenderit sed sequi ratione laboriosam
            quam, animi minima voluptatibus magnam ullam a repellendus expedita,
            perferendis possimus corrupti! Perspiciatis, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            optio ut odio delectus culpa. Iure omnis ipsa sint tenetur odio
            neque non ex, animi accusantium quos itaque quae, optio illum?
          </p>
        </div>
      </div>
    </section>
  );
};
