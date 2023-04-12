import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import { AdultsIcon } from "~/components/icons/AdultsIcon";
import { KidsIcon } from "~/components/icons/KidsIcon";
import { MountainsIcon } from "~/components/icons/MountainsIcon";
import { Section } from "~/components/Section";
import { PHONE_NUMBER } from "~/pages/_app";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skalaboulder</title>
        <meta name="description" content="Боулдеринг зал в Алматы" />
      </Head>
      <main className="px-3 text-white">
        <section className="mb-5 h-[385px] rounded-md bg-[url('/main-banner.jpg')] bg-cover bg-right">
          <div className="flex h-full w-full flex-col rounded-md bg-secondary/50 p-4 md:p-8">
            <div>
              <h1 className="mb-4 text-xl md:text-5xl">
                Чем интересен боулдеринг или тренировки в нашем зале
              </h1>
              <p className="mb-10 text-base md:text-xl">
                Здесь вы найдете трассы любой категории сложности, как для
                новичков, так и для профессионалов. Все наши тренировочные
                программы направлены на оздоровление и гармоничное
                совершенствование
              </p>
            </div>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="mt-auto w-full cursor-pointer rounded-md bg-[#333] p-3 text-center font-semibold md:mt-auto md:w-1/2 lg:w-1/3"
            >
              Записаться в Skala Boulder
            </a>
          </div>
        </section>
        <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <SectionPanel
            title="Спортивно-оздоровительная секция для детей и подростков."
            href="/kids"
            icon={<KidsIcon className="fill-white opacity-40" />}
            listItems={[
              "Младшая группа",
              "Средняя группа",
              "Старшая группа (подростки)",
            ]}
            description="Наши тренировки направлены на гармоничное развитие детей и подростков. Помимо лазания на скалодроме, мы преподаем общую физическую подготовку, а также готовим ребят к соревнованиям. У нас большое и дружное сообщество. Мы прививаем детям любовь к спорту и природе, выезжаем на скалы, проводим фестивали и праздничные мероприятия."
          />
          <SectionPanel
            title="Самостоятельные, групповые и персональные тренировки для всех желающих."
            href="/adults"
            icon={<AdultsIcon className="fill-white opacity-40" />}
            listItems={[
              "Самостоятельные тренировки",
              "Персональные тренировки",
              "Групповые тренировки",
              "Обучающие курсы",
            ]}
            description="Для тех, кто предпочитает заниматься без тренера, подойдут самостоятельные тренировки. В зале присутствует дежурный тренер, который, при необходимости, проведет инструктаж, подскажет особенности трасс, упражнения, ответит на все вопросы."
          />
          <SectionPanel
            title="Выезды на естественный рельеф в окрестностях Алматы."
            href="/mountains"
            icon={<MountainsIcon className="fill-white opacity-40" />}
            listItems={[
              "Выезды на скалы дети",
              "Выезды на скалы взрослые",
              "Обучающие курсы: подготовка к скалам",
            ]}
            description="Наши тренировки направлены на гармоничное развитие детей и подростков. Помимо лазания на скалодроме, мы преподаем общую физическую подготовку, а также готовим ребят к соревнованиям. У нас большое и дружное сообщество. Мы прививаем детям любовь к спорту и природе, выезжаем на скалы, проводим фестивали."
          />
        </div>
        <section className="mb-5 h-[250px] rounded-md bg-[url('/trainers-banner.jpeg')] bg-cover bg-center md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <div className="flex h-full w-full items-end rounded-md bg-primary/40 p-4 md:items-start">
            <h2 className="text-base md:text-3xl">
              Сердце и душа зала - это наши профессиональные и приветливые
              тренеры.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

type SectionPanelProps = {
  title: string;
  href: string;
  listItems: Array<string>;
  description: ReactNode;
  icon: ReactNode;
};

const SectionPanel: React.FC<SectionPanelProps> = ({
  title,
  href,
  listItems,
  description,
  icon,
}) => {
  return (
    <Section className="flex flex-col">
      <h2 className="mb-4 font-semibold">{title}</h2>
      <div className="mb-6 flex items-center">
        <ul className="ml-4 flex-1 list-disc space-y-1">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="relative  w-[90px] md:hidden lg:block">{icon}</div>
      </div>
      <p className="mb-4 hidden lg:block">{description}</p>
      <Link href={href} className="mt-auto underline underline-offset-2">
        Подробнее
      </Link>
    </Section>
  );
};
