"use strict";

/**
 * This example definition of a class file is a guideline. The class system is
 * left intentionally vague so as to not be too opinionated. Class files are
 * assumed to be js files instead of blank yaml files just to future proof the
 * bundle-loading of class files in case someone wants extra functionality in
 * their classes.
 */
module.exports = {
  name: "skeeter",
  description: "I dunno!",

  abilityTable: {
    3: { skills: ["rend"] },
    5: { skills: ["lunge"] },
    7: { skills: ["shieldblock"] },
    10: { skills: ["secondwind"] },
  },

  setupPlayer: (state, player) => {
    const energy = state.AttributeFactory.create("energy", 100);
    player.addAttribute(energy);
    player.prompt =
      "[ %health.current%/%health.max% <b>hp</b> %energy.current%/%energy.max% <b>energy</b> ]";
  },
};
