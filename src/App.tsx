import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Layout from './components/Layout';
import { Contact } from './sections/Contact';
import { Intro } from './sections/Intro';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import Timeline from './sections/Timeline';
//FIXME: fix any
function App() {
  const scrollRef = useRef<any>([]);
  const [currentIndex, setCurrentIndex] = useState(new Set([0]));
  const observeRef = (ref: HTMLElement, index: number) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setCurrentIndex((prev: Set<number>) => new Set([...prev, index]));
        } else {
          setCurrentIndex(
            (prev: Set<number>) => new Set([...prev].filter((x) => x !== index))
          );
        }
      });
    });
    io.observe(ref);
  };
  useEffect(() => {
    scrollRef.current.forEach(observeRef);
  }, []);
  const { t, i18n } = useTranslation();
  function handleClick(lang: string) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          type="button"
          onClick={() => handleClick('en')}
          className="btn btn-primary m-4"
        >
          English
        </button>
        <button
          type="button"
          onClick={() => handleClick('zh')}
          className="btn btn-danger m-4"
        >
          中文
        </button>
        <div className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          laborum, inventore earum mollitia libero alias repellat in deleniti
          eum, ullam maiores? Cupiditate, similique omnis nam animi commodi
          possimus. Ea, ut?
        </div>
        <div>{t('greeting')}</div>
        <LeftArrow />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout ref={scrollRef} currentIndex={currentIndex}>
        <div className="flex flex-col flex-col items-center">
          <Intro scrollRef={scrollRef} />
          <Contact scrollRef={scrollRef} />
          <Skills scrollRef={scrollRef} />
          <Projects scrollRef={scrollRef} />
          <Timeline scrollRef={scrollRef} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
