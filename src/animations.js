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
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    },
  },
};

export const homeAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: { x: "-130%" },
  show: {
    x: "120%",
    transition: { ease: "easeOut", duration: 1.25 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", staggerChildren: 0.1, duration: 1 },
  },
};
