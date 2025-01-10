const express = require("express");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const router = express.Router();
const username = process.env.ONET_USERNAME;
const password = process.env.ONET_PASSWORD;
const authHeader =
  "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

router.get("/careers", async (req, res) => {
  const answers = req.query.answers;

  try {

    console.log("Getting careers for answers:", answers);

    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers=${answers}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err)
        return res.status(500).json({ error: "Failed to parse XML response" });
      res.json(result);
    });
  } catch (error) {
    console.error("Error fetching ONET data:", error);
    res.status(500).json({ error: "Failed to fetch careers" });
  }
});

router.get("/results", async (req, res) => {
  const answers = req.query.answers;

  try {
    console.log("Getting riasec values for answers:", answers);
    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/results?answers=${answers}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err)
        return res.status(500).json({ error: "Failed to parse XML response" });
      res.json(result);
    });
  } catch (error) {
    console.error("Error fetching ONET data:", error);
    res.status(500).json({ error: "Failed to fetch careers" });
  }
});

router.get("/careers/:code", async (req, res) => {
  const code = req.params.code;
  console.log(`Getting information for career ${code}`);
  try {
    const url = `https://services.onetcenter.org/ws/mnm/careers/${code}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err)
        return res.status(500).json({ error: "Failed to parse XML response" });
      res.json(result);
    });
  } catch (error) {
    console.error("Error fetching career details:", error);
    res.status(500).json({ error: "Failed to fetch career details" });
  }
});

router.get(
  "/careers/:code/:resourceTitle",

  async (req, res) => {
    const code = req.params.code;
    const resourceTitle = req.params.resourceTitle;
    const title = resourceTitle.toLowerCase();
    console.log(`calling api for ${resourceTitle}`);
    try {
      const url = `https://services.onetcenter.org/ws/mnm/careers/${code}/${title}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`API request failed with status: ${response.status}`);
      const xmlText = await response.text();

      xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ error: "Failed to parse XML response" });
        res.json(result);
      });
    } catch (error) {
      console.error("Error fetching career details:", error);
      res.status(500).json({ error: "Failed to fetch career details" });
    }
  }
);

router.get(
  "/industry/:industryCode",

  async (req, res) => {
    const industryCode = req.params.industryCode;

    console.log(`call api for industry ${industryCode}`);
    try {
      const url = `https://services.onetcenter.org/ws/mnm/browse/${industryCode}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`API request failed with status: ${response.status}`);
      const xmlText = await response.text();

      xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ error: "Failed to parse XML response" });
        res.json(result);
      });
    } catch (error) {
      console.error("Error fetching career details:", error);
      res.status(500).json({ error: "Failed to fetch career details" });
    }
  }
);

const careerVideos = require("../../models/CareerVideo");
router.get("/careerVideos/:careerCode", async (req, res) => {
  const { careerCode } = req.params;

  try {
    console.log("getting yt career link for", careerCode);
    const career = await careerVideos.findOne({
      parentONetCode: careerCode, // Ensure the query matches the schema
    });

    if (!career) {
      return res.status(404).json({ message: "career not available" });
    }

    res.status(200).json({ youtubeVideoPage: career.youtubeEmbedCode });
  } catch (error) {
    console.error("Error fetching career video:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get(
  "/search/:searchItem",

  async (req, res) => {
    const searchItem = req.params.searchItem;

    console.log(`call for search item ${searchItem}`);
    try {
      const url = `https://services.onetcenter.org/ws/mnm/search?keyword=${searchItem}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`API request failed with status: ${response.status}`);
      const xmlText = await response.text();

      xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ error: "Failed to parse XML response" });
        res.json(result);
      });
    } catch (error) {
      console.error("Error fetching career details:", error);
      res.status(500).json({ error: "Failed to fetch career details" });
    }
  }
);

module.exports = router;
