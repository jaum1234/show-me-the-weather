import moment from "moment";

export const formatDate = (date?: string): string | void => {
    
    const actualDate = date ? date : new Date();
    const formatedDate = moment(actualDate).format('DD/MM/YYYY');

    return formatedDate;
}