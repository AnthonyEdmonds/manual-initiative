Hooks.on('createCombatant', function (combatant, data, uid) {
    combatant.update({
        initiative: -1,
    });
});
