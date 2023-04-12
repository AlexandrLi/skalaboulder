import Head from "next/head";
import Image from "next/image";
import { KidsIcon } from "../components/icons/KidsIcon";
import { Section } from "../components/Section";

const Kids = () => {
  return (
    <>
      <Head>
        <title>Детская секция</title>
        <meta name="description" content="Детская секция Boulder Monkey" />
      </Head>
      <main className="px-3 text-primary">
        <section className="mb-5">
          <div className="relative h-[175px] w-full">
            <Image
              className="rounded-xl object-cover object-center"
              src="/kids-banner.JPG"
              alt="баннер"
              fill
              priority
            />
          </div>
        </section>
        <div className="mb-4 grid gap-6 md:grid-cols-2">
          <section className="text-sm">
            <h1 className="mb-4 font-semibold">
              Детская секция Boulder Monkey представлена группами,
              ориентированными на разный возраст (от 5 до 16 лет).
            </h1>
            <p className="mb-4">
              Наши тренировки направлены на гармоничное развитие детей и
              подростков. Помимо лазания на скалодроме, мы преподаем общую
              физическую подготовку, а также готовим ребят к соревнованиям. У
              нас большое и дружное сообщество. Мы прививаем детям любовь к
              спорту и природе, выезжаем на скалы, проводим фестивали и
              праздничные мероприятия.
            </p>
            <p>
              С детьми занимаются профессиональные тренеры, которые найдут
              индивидуальный подход к каждому ребёнку. 
            </p>
          </section>
          <section>
            <h2 className="mb-4 pr-32 pt-6 text-lg font-semibold md:pr-0 md:pt-0">
              Какую пользу получат ваши дети?
            </h2>
            <Section className="relative">
              <KidsIcon className="absolute -top-20 right-0 w-32 fill-primary md:-top-14 md:w-20" />
              <ul className="ml-4 list-disc space-y-1 text-white lg:columns-2">
                <li>Укрепление здоровья</li>
                <li>Работа всех групп мышц</li>
                <li>Победа над страхами и неуверенностью</li>
                <li>Новые друзья</li>
                <li>Расширение кругозора</li>
                <li>Приобщение к природе</li>
                <li>Совместная семейная активность</li>
                <li>Развитие координации, гибкости, выносливости</li>
              </ul>
            </Section>
          </section>
        </div>
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <Section className="bg-opacity-20">
            <h3 className="mb-4 font-semibold">
              Дети дошкольного возраста (5 - 6 лет)
            </h3>
            <p>
              Тренировки направлены на общую физическую подготовку и обучение
              базовым навыкам скалолазания.
            </p>
            <p>
              Занятия проводятся с одним из родителей или самостоятельно в
              зависимости от группы. В программу тренировки входит разминка,
              лазание на скалодроме, ОФП , растяжка, игры.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className="mb-4 font-semibold">
              Дети среднего возраста (7 - 10 лет)
            </h3>
            <p>
              Дети занимаются в группе с тренером. Каждая тренировка проводится
              по специальной программе, учитывая возрастные особенности и
              уровень подготовки детей. В занятие входит разминка всего тела,
              упражнения на скалодроме, ОФП, растяжка, игры.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className="mb-4 font-semibold">Старшая группа (10 - 16 лет)</h3>
            <p>
              Тренировки для подростков в группе с тренером. Уровень подготовки:
              от новичков до спортсменов. В занятие входит разминка, лазание на
              скалодроме, ОФП, растяжка. 
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className="mb-4 font-semibold">Семейные тренировки</h3>
            <p className="mb-4">
              Данный вид тренировок даёт возможность детям тренироваться вместе
              с родителями. На тренировках присутствует дежурный тренер, который
              подскажет трассы, упражнения, если необходимо.
            </p>
            <h3 className="mb-4 font-semibold">Группы выходного дня</h3>
            <p>
              Данные группы созданы для тех детей, которые могут посещать
              скалодром только на выходных. Занятия проходят с тренером по
              специальной программе. В тренировку входит разминка, лазание на
              скалодроме, растяжка, ОФП, игры.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Kids;
