"use strict";

/**
 * See warrior.js for more on classes.
 */
module.exports = {
  name: "shitposter",
  description: "I wanna be spicy!",
  abilityTable: {
    5: { spells: ["fireball"] },
  },

  setupPlayer: (state, player) => {
    const mana = state.AttributeFactory.create("mana", 100);
    player.addAttribute(mana);
    player.prompt =
      "[ %health.current%/%health.max% <b>hp</b> %mana.current%/%mana.max% <b>mana</b> ]";
  },
};
