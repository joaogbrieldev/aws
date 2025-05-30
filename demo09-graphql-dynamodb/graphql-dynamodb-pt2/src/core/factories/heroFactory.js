const HeroRepository = require("../repositories/heroRepository");
const HeroService = require("../services/heroService");

async function createInstance() {
  const heroRepository = new HeroRepository();
  const heroService = new HeroService({ repository: heroRepository });
  return heroService;
}

module.exports = { createInstance };
