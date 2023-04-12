import Head from "next/head";
import { Section } from "../components/Section";
import Image from "next/image";
import { AdultsIcon } from "../components/icons/AdultsIcon";

const Adults = () => {
  return (
    <>
      <Head>
        <title>Секция для взрослых</title>
        <meta name="description" content="Секция для взрослых" />
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
        <div className="mb-4 grid gap-6 md:grid-cols-1">
          <Section className="relative mt-16">
            <AdultsIcon className="absolute -top-20 right-0 w-32 fill-primary md:-top-14 md:w-20" />
            <h3 className="text-white">
              <div className="font-semibold">
                Самостоятельные, групповые, персональные тренировки для взрослых
                (14+)
              </div>
              <div className="hidden lg:block">
                Для тех, кто предпочитает заниматься без тренера, подойдут
                самостоятельные тренировки. В зале присутствует дежурный тренер,
                который, при необходимости, проведет инструктаж, подскажет
                особенности трасс, упражнения, ответит на все вопросы.
              </div>
            </h3>
          </Section>
        </div>
        <div className=" mb-4 grid gap-4 md:grid-cols-2">
          <Section className="bg-opacity-20">
            <h3 className=" mb-4 font-semibold">Самостоятельные</h3>
            <p>
              Для тех, кто предпочитает заниматься без тренера, подойдут
              самостоятельные тренировки. В зале присутствует дежурный тренер,
              который, при необходимости, проведет инструктаж, подскажет
              особенности трасс, упражнения, ответит на все вопросы.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className=" mb-4 font-semibold">Семейные тренировки.</h3>
            <p>
              Семьи, которые хотят тренироваться вместе, могут выбрать
              самостоятельные семейные тренировки. В зале присутствует дежурный
              тренер, который проведёт инструктаж, может помочь в выборе трасс,
              упражнений и ответить на все вопросы.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className=" mb-4 font-semibold">Группы с тренером.</h3>
            <p>
              Для тех, кто хочет заниматься с тренером, подойдут тренировки в
              группе. Тренер проведёт совместную разминку, даст задания на
              скалодроме, будет следить за пролазами, техникой, а также даст
              упражнения на ОФП и растяжку.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className=" mb-4 font-semibold">Персональные тренировки.</h3>
            <p>
              Для тех, кому нужны индивидуальные занятия, подойдут персональные
              тренировки. Тренер проведёт разминку, даст задания на скалодроме,
              будет следить за пролазами, техникой, даст упражнения на ОФП и
              растяжку.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className="font-semibold">Курс «BOULDERING».</h3>
            <p className="mb-4">
              Данный курс разработан нашими тренерами для желающих повысить свой
              уровень лазания, научиться тренироваться самостоятельно, уметь
              «читать» трассы, улучшить технику.
            </p>
            <h3 className="font-semibold">Курс «Подготовка к скалам».</h3>
            <p className="mb-4">
              Данный курс разработан нашими специалистами для желающих
              подготовиться к лазанию на естественном рельефе. Проводится
              несколько раз в год перед скальным сезоном на нашем скалодроме. В
              курс входит совместная поездка на скалы.
            </p>
          </Section>
          <Section className="bg-opacity-20">
            <h3 className=" mb-4 font-semibold">Фестивали</h3>
            <p>
              Фестивали в формате соревнований проводятся трижды в год. Февраль,
              июль, ноябрь. Мы проводим такие мероприятия для того, чтобы все
              желающие могли попробовать свои силы, оценить результат,
              пообщаться, познакомится с другими спортсменами, получить новый
              спортивный опыт.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Adults;
