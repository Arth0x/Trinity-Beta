

require("copters")
require('Planet')

// listen for the event where a unit is destroyed
Events.on(PlayEvent, event => {
    // display toast on top of screen when the unit was a player
    const myDialog = new BaseDialog("Dialog Title");
        // Add "go back" button
        myDialog.addCloseButton();
        // Add text to the main content
        myDialog.cont.add("gemme lait gneaux qui");
        // Show dialog
        myDialog.show();
})
// listen for the event where a unit is destroyed
Events.on(UnitDestroyEvent, event => {
    // display toast on top of screen when the unit was a player
    if(event.unit.isPlayer()){
        Vars.ui.hudfrag.showToast("Death. Is this the ultimate gift?");
    }
})

