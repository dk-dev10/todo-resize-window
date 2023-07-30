export const limitationWidth = (e, offset, max, min) => {
  let res = e.clientX - offset;

  // Ограничиваем перемещение элемента внутри родительского контейнера
  if (res < 0) {
    res = 0;
  } else if (res + e.target.offsetWidth > max) {
    res = max - e.target.offsetWidth;
  } else if (res + e.target.offsetWidth < min) {
    res = min - e.target.offsetWidth
  }

  return res;
}
