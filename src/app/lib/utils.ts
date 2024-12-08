export const getImageUrl = (url: string | undefined): string => {
  if (!url) return "/placeholder-image.jpg";
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
};
