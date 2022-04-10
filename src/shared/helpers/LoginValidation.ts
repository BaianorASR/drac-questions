/* eslint-disable security/detect-unsafe-regex */
type TValidations = {
  name?: string;
  email?: string;
};

export const validations = ({ name, email }: TValidations) => {
  const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const MIN_LENGTH = 3;
  if (name && email) {
    return !(regex.test(email) && name.length >= MIN_LENGTH);
  }
  return true;
};
