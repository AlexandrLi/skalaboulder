import {Section} from "~/components/Section";

const Schedule = () => {

    return (
        <main className="px-3">
            <section>
                <h2 className="pr-32 pt-6 text-lg font-semibold text-primary">Расписание и цены</h2>
                <Section>
                    <TrainingPrice description="1 Тренировка" price={1000}/>
                </Section>
                <Section intent="secondary">
                    <TrainingPrice description="1 Тренировка" price={11000}/>
                    <TrainingPrice description="8 Тренировок" price={20000}/>
                    <TrainingPrice description="12 Тренировок" price={27000}/>
                    <TrainingPrice description="16 Тренировок" price={32000}/>
                    <TrainingPrice description="24 Тренировки" price={48000}/>
                    <div className="text-center">
                        Все абонементы действительны 5 недель
                    </div>
                </Section>
            </section>

            <section>
                <section>
                    <h3>Family Team</h3>
                    <TeamMember
                        description="Группа для детей и взрослых с тренером"
                        ageGroup="от 5 лет и старше"
                        schedule={[{days: "Понедельник, Среда, Пятница", hours: "7:30 - 09:00"}]}
                        name="Виктория Ларионова-Пучкова"
                        phone="+7 777 316 0001"
                        photo=""
                    />
                </section>
                <section>
                    <h3>Средняя группа</h3>
                    <TeamMember
                        description="Группа для детей и подростков с тренером"
                        ageGroup="от 8 до 13 лет"
                        schedule={[{days: "Понедельник, Среда, Пятница", hours: "9:30 - 11:15"}]}
                        name="Олеся Грязнова"
                        photo=""
                    />
                    <TeamMember
                        description="Группа для детей с тренером"
                        ageGroup="от 7 до 10 лет"
                        schedule={[{days: "Вторник, Четверг, Суббота", hours: "16:00 - 17:30"}]}
                        name="Денис Жендинский"
                        photo=""
                    />
                    <TeamMember
                        description="Группа для детей и подростков с тренером"
                        ageGroup="от 10 до 13 лет"
                        schedule={[{days: "Понедельник, Среда, Пятница", hours: "16:00 - 17:30"}]}
                        name="Эрик Ларионов"
                        photo=""
                    />
                </section>
                <section>
                    <h3>Старшая группа</h3>
                    <TeamMember
                        description="Группа для подростков с тренером"
                        ageGroup="от 12 до 16 лет"
                        schedule={[
                            {days: "Понедельник, Среда, Пятница", hours: "17:00 - 18:30"},
                            {days: "Вторник, Четверг", hours: "17:00 - 18:30"}
                        ]}
                        name="Максим Добрянский"
                        photo=""
                    />
                </section>
                <section>
                    <h3>Группы выходного дня</h3>
                    <TeamMember
                        description="Группа для детей и подростков с тренером"
                        ageGroup="от 5 до 13 лет"
                        schedule={[{days: "Суббота", hours: "12:00 - 13:30"}]}
                        name="Эрик Ларинов"
                        photo=""
                    />
                    <TeamMember
                        description="Группа для детей и подростков с тренером"
                        ageGroup="от 5 до 13 лет"
                        schedule={[{days: "Воскресенье", hours: "09:00 - 10:30"}]}
                        name="Олеся Пигарева"
                        photo=""
                    />
                </section>
                <section>
                    <h3>Семейные тренировки</h3>
                    <section>
                        <div>
                            <p>Родители с детьми тренируются самостоятельно</p>
                            <p><span>Возраст:</span> <span>5+ лет</span></p>
                        </div>
                        <div>
                            <h4>По будням</h4>
                            <div>
                                <div>По Вторникам и Четвергам</div>
                                <div>9:30 - 12: 00</div>
                            </div>
                        </div>
                        <div>
                            <h4>По выходным</h4>
                            <div>
                                <div>Суббота</div>
                                <div>9:30 - 12:00</div>
                                <div>14:00 - 16:00</div>
                            </div>
                            <div>
                                <div>Воскресенье</div>
                                <div>9:30 - 12:00</div>
                                <div>14:00 - 16:00</div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}

type TrainingPriceProps = {
    description: string
    price: number
}

const TrainingPrice = (trainingData: TrainingPriceProps) => {
    return (
        <div className="grid grid-cols-3 items-center gap-5">
            <p>{trainingData.description}</p>
            <hr/>
            <p>{trainingData.price}</p>
        </div>
    )
}

type TeamMemberProps = {
    description: string,
    ageGroup: string,
    schedule: ScheduleSlot[]
    name: string,
    phone?: string
    photo: string
}

type ScheduleSlot = {
    days: string,
    hours: string
}

const defaultPhone: string = "+7 707 738 0907";
const TeamMember = (member: TeamMemberProps) => {
    return (
        <section>
            <div>{member.description}</div>
            <div>{member.ageGroup}</div>
            <div>{member.name}</div>
            <div>{member.phone ? member.phone : defaultPhone}</div>
        </section>
    )
}

export default Schedule;