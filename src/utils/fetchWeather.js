import cheerio from "cheerio";

export async function fetchWeatherForPlace(place) {
  const bomUrl = `http://www.bom.gov.au/places/${place}/`;

  const bomHtml = await fetch(bomUrl).then((response) => response.text());

  const $ = cheerio.load(bomHtml);

  const temperatureNow = $("li.airT").text();

  return {
    temperatureNow,
  };
}
