class ClientValidation {
  validate(name: string) {
    const formattedName = name.trim();

    if (formattedName.length > 5) {
      return formattedName;
    } else {
      throw "Nome inválido!";
    }
  }
}

export const clientValidation = new ClientValidation();
