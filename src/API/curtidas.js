export const imgLike = (curtiu) => {
  if (curtiu) {
    return require("../../assets/img/s2-checked.png");
  } else {
    return require("../../assets/img/s2.png");
  }
};

export const curtirFoto = (curtiu, likes) => {
  let qnt = likes;
  if (curtiu) {
    qnt--;
  } else {
    qnt++;
  }
  return [!curtiu, qnt];
};
