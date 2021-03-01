export const navAnim = {
  show: {
    x: "100%",
    transition: { duration: 0.75 },
  },
  hide: {
    x: "-80%",
    transition: { duration: 0.75 },
  },
};

export const pageAnim = {
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
  hide: {
    opacity: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};
