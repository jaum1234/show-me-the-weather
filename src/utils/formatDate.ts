import moment, { Moment } from "moment";

export const formatDate = (date: Date, daysToAdd?: number): string => {
    let formatedDate: Moment= moment(date);

    if (daysToAdd) {
        formatedDate.add(daysToAdd, 'days');
    }

    return formatedDate.format('DD/MM/YYYY');
}