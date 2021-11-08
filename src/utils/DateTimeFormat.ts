import moment from "moment";

class DateTimeFormat {
  async execute(date: string) {
    const dateFormatted = moment(date, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm Z"
    );
    const dateParsed = new Date(dateFormatted).toISOString();
    return dateParsed;
  }
}

export const datatimeFormat = new DateTimeFormat();
