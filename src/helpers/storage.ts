export const getLocalStorage = () => {
  const storage = localStorage.getItem('ranking');
  return storage ? JSON.parse(storage) : [];
};

export type TUser = {
  name: string;
  picture: string;
  score: number;
  assertions: number;
};

export const setLocalStorage = (user: TUser) => {
  const storage = getLocalStorage();
  localStorage.setItem('ranking', JSON.stringify([...storage, user]));
};
