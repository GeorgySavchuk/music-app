import * as dayjs from "dayjs";

export const getWelcomeMessage = (userName: string = "") : string => {
    const hour: number = dayjs().hour();
    let welcomeMessage: string = '';
    if (hour > 5 && hour < 12) {
        welcomeMessage = `Доброе утро${userName && `,${userName}`}`
    } else if (hour >= 12 && hour < 18) {
        welcomeMessage = `Добрый день${userName && `,${userName}`}`
    } else {
        welcomeMessage = `Добрый вечер${userName && `,${userName}`}`
    }
    return welcomeMessage;
}