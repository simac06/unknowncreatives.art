export const getImageUrl = (url: string | undefined): string => {
  if (!url) return "/placeholder-image.jpg";

  // Determine the base API URL
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || // Use custom API URL if defined
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000"); // Default to localhost for development

  return `${baseUrl}${url}`;
};
