export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const address = query.address;
  const apiKey = useRuntimeConfig().googleMapsApiKey;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  if (!address) {
    throw createError({
      statusCode: 400,
      statusMessage: "Address is required",
    });
  }

  try {
    const response = await $fetch(url);
    return response;
  } catch (error: any) {
    console.error("Error fetching Google Maps API:", error);
    throw createError({
      status: 500,
      statusMessage: "Failed to fetch position",
      cause: error,
    });
  }
});
