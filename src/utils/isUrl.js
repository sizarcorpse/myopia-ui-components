export const isWebsiteUrl = (url) => {
  const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  const regex = new RegExp(expression);

  if (url.match(regex)) {
    return url;
  } else {
    new Error("url not valid");
  }
};

export const isPhotoUrl = (url) => {
  const expression = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  const regex = new RegExp(expression);

  if (url.match(regex)) {
    return url;
  } else {
    new Error("url not valid");
  }
};
