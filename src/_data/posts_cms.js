// my thanks to https://jamesdoc.com/blog/2022/11ty-airtable/
// also see https://www.11ty.dev/docs/plugins/fetch/

require("dotenv").config();
const { AssetCache } = require("@11ty/eleventy-fetch");
const Airtable = require("airtable");

const assetCacheId = "airtableCMS";
const airtableCMSTable = "tblmqQWaZIUXXIkD5";

var base = new Airtable({ apiKey: process.env.mykey }).base(
  process.env.mybase
);

module.exports = () => {
  let asset = new AssetCache(assetCacheId);

  // Cache the data in 11ty for one day
  if (asset.isCacheValid("10s")) {
    console.log("Serving airtable data from the cache…");
    return asset.getCachedValue();
  }

  // The 11ty cache is cold… so we need to talk to Airtable
  return new Promise((resolve, reject) => {
    const allRecords = [];

    base(airtableCMSTable)
      .select({
      maxRecords: 1000,
      fields: ["artwork_title", "date_painted", "description", "media", "dimensions", "url_name", "image_url", "image_height", "image_width", "portfolio_size", "tags", "go_live"], // if any field names change in airtable we need to change them here and also in the sections/macro.njk file book_covers_all_api
      filterByFormula: "{go_live}=1",
      sort: [{field: "date_painted", direction: "desc"}]
    })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(record => {
            allRecords.push({
              id: record._rawJson.id,
              ...record._rawJson.fields
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err + "airtable api link problem");
          } else {
            asset.save(allRecords , "json");
            resolve(allRecords);
          }
        },
      );
  });
};