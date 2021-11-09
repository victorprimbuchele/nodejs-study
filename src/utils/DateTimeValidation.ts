import moment from "moment";

class DateTimeValidation {
  async validate(date: string) {
    const dateFormatted = moment(date, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm Z"
    );

    const dateValidated = moment(dateFormatted).isSameOrAfter(Date.now());
    if (!dateValidated) {
      throw new Error("Data Inválida");
    }
    const dateParsed = new Date(dateFormatted).toISOString();
    return dateParsed;
  }
}

export const datatimeValidation = new DateTimeValidation();
