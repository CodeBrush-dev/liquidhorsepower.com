// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.liquidhorsepower.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.liquidhorsepower.com/","title_tag":"Octane Booster & Engine Performance | Liquid Horsepower","meta_description":"Manhattan Oil Products for better engine performance, fuel mileage, and combustion improvement on street and track with premium gasoline enhancers."},{"page_url":"https://www.liquidhorsepower.com/octane-boosters","title_tag":"Octane Booster Fuel Treatment | Liquid Horsepower","meta_description":"Octane Booster fuel treatment for combustion improvement, fuel mileage, ethanol protection and cleaner carburetors. Maximize engine performance with Manhattan Oil Products."},{"page_url":"https://www.liquidhorsepower.com/history","title_tag":"Engine Performance Legacy | Liquid Horsepower","meta_description":"Discover the history of Manhattan Oil Products and Liquid Horsepower, proven gasoline enhancers praised by racers for lasting engine performance gains."},{"page_url":"https://www.liquidhorsepower.com/contact","title_tag":"Contact Manhattan Oil Products | Liquid Horsepower","meta_description":"Contact Manhattan Oil Products and Liquid Horsepower for questions about octane booster, fuel treatment, gasoline enhancers and engine performance solutions."},{"page_url":"https://www.liquidhorsepower.com/shop","title_tag":"Octane Booster Fuel Treatment Store | Liquid Horsepower","meta_description":"Shop octane booster fuel treatment from Manhattan Oil Products. Improve combustion, fuel mileage and engine performance with premium gasoline enhancers."}],"keywords":["octane booster","fuel treatment","engine performance","combustion improvement","fuel mileage","carburetor cleaner","ethanol protection","motor oil supplement","gasoline enhancer","manhattan oil products"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.liquidhorsepower.com/#organization",
  "name": "Liquid Horsepower",
  "alternateName": "Manhattan Oil & Liquid Horsepower",
  "url": "https://www.liquidhorsepower.com/",
  "image": [
    "https://static.wixstatic.com/media/909af2_f5c5e8c47ebe424dbdc82cb453712239~mv2.jpg/v1/crop/x_486,y_0,w_2544,h_504/fill/w_979,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ManhattanOilHeaderUpdate.jpg",
    "https://static.wixstatic.com/media/909af2_6d94e093d2a0458c902c6c7fa4eac677~mv2_d_2720_3520_s_4_2.png/v1/fill/w_109,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LHP-Header.png"
  ],
  "logo": "https://static.wixstatic.com/media/909af2_6d94e093d2a0458c902c6c7fa4eac677~mv2_d_2720_3520_s_4_2.png/v1/fill/w_109,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LHP-Header.png",
  "description": "Liquid Horsepower, by Manhattan Oil, produces high-performance octane booster fuel treatments that improve combustion efficiency, power, fuel mileage, and drive train longevity for street and track gasoline engines.",
  "email": "info@manhattanoil.com",
  "telephone": "+1-310-372-9041",
  "faxNumber": "+1-888-389-9198",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "301 Main Plaza #346",
    "addressLocality": "New Braunfels",
    "addressRegion": "TX",
    "postalCode": "78130",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.liquidhorsepower.com/octane-boosters",
    "https://www.liquidhorsepower.com/history",
    "https://www.liquidhorsepower.com/contact",
    "https://www.liquidhorsepower.com/shop",
    "http://LittleRedFireTruck.com",
    "http://HemiUnderGlass.com",
    "http://LittleRedWagonWheelstander.com"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Liquid Horsepower",
    "logo": "https://static.wixstatic.com/media/909af2_6d94e093d2a0458c902c6c7fa4eac677~mv2_d_2720_3520_s_4_2.png/v1/fill/w_109,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LHP-Header.png"
  },
  "knowsAbout": [
    "octane booster fuel treatment",
    "high performance gasoline additives",
    "combustion efficiency",
    "motorcycle octane booster",
    "automotive fuel system cleaners"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Liquid Horsepower Octane Booster Fuel Treatment",
    "url": "https://www.liquidhorsepower.com/shop",
    "itemListElement": [
      {
        "@type": "Product",
        "@id": "https://www.liquidhorsepower.com/shop#30-gallon-treatment",
        "name": "6oz 30 Gallon Treatment Octane Booster Fuel Treatment",
        "description": "Super concentrated Liquid Horsepower octane booster fuel treatment for up to 30 gallons of gasoline, formulated to improve combustion, power, fuel mileage, and keep fuel fresh during storage.",
        "brand": {
          "@type": "Brand",
          "name": "Liquid Horsepower"
        },
        "url": "https://www.liquidhorsepower.com/shop",
        "offers": {
          "@type": "Offer",
          "price": "17.95",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.liquidhorsepower.com/shop"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.liquidhorsepower.com/shop#5-gallon-treatment",
        "name": "1oz 5 Gallon Treatment Octane Booster Fuel Treatment",
        "description": "Single-application Liquid Horsepower octane booster fuel treatment for up to 5 gallons of gasoline, designed to increase octane effect and improve engine responsiveness and smoothness.",
        "brand": {
          "@type": "Brand",
          "name": "Liquid Horsepower"
        },
        "url": "https://www.liquidhorsepower.com/shop",
        "offers": {
          "@type": "Offer",
          "price": "4.95",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.liquidhorsepower.com/shop"
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
