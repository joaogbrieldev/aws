const SkillRepository = require("../repositories/skillRepository");
const SkillService = require("../services/skillService");

async function createInstance() {
  const skillRepository = new SkillRepository();
  const skillService = new SkillService({ repository: skillRepository });
  return skillService;
}

module.exports = { createInstance };
