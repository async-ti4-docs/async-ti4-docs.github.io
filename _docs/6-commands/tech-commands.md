---
layout: docs
title: "Tech commands"
description: "Commands to use with the bot, to fix an issue or override something."
nav_order: 6.3
parent: Commands
---

## Technology commands

Commands that interact with technologies.

* `/tech add tech:`  
Used to add tech. Has options for up to 4 techs, so it’s a quick way if you want to replace several techs.
    * faction_or_color: used to add tech of other players, if not specified, default to the player that uses the command.
* `/tech remove tech:`   
Used to remove tech. Has options for up to 4 techs, so it’s a quick way if you want to replace several techs.
    * faction_or_color: used to remove tech of other players, if not specified, default to the player that uses the command.

* `/tech ready tech:`  
Used to ready tech. Also has options for up to 4 techs. 
    * faction_or_color: used to ready tech of other players, if not specified, default to the player that uses the command.
    >Note that this command can be used to exhaust even techs that cannot be exhausted, and will not return an error if the tech in question is already ready (or exhausted).
* `/tech exhaust tech:`  
Used to exhaust tech. Also has options for up to 4 techs. 
    * faction_or_color: used to ready/exhaust tech of other players, if not specified, default to the player that uses the command.
    >Note that this command can be used to exhaust even techs that cannot be exhausted, and will not return an error if the tech in question is already ready (or exhausted).