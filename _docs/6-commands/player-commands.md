---
layout: docs
title: "Player commands"
description: "Commands to use with the bot, to fix an issue or override something."
nav_order: 6.2
parent: Commands
---

## Player interaction commands

Commands that interact with the players status and stats.

* `/player stats:`  
Is used to update various stats that the player has.
    * cc: Update number of CC. Format X/Y/Z (set the CC numbers of Tactics to X, Fleet to Y, and Strategy to Z) or +X/-Y/+Z (change the CC numbers by that amount). Note that 0 alone will set your CC number in that slot to 0. To update no change, the number should be +0.
    * tactical_cc: Update number of CC in Tactics. Can be X (set) or +X (change by that amount).
    * fleet_cc: Update number of CC in Fleet supply. Can be X (set) or +X (change by that amount).
    * strategy_cc: Update number of CC in Strategy. Can be X (set) or +X (change by that amount).
    * trade_goods: Update number of Trade Goods you have. Can be X (set) or +X (change by that amount).
    * commodities: Update number of Commodities. Can be X (set) or +X (change by that amount).  
    >Note that if you add or set more than your Commodity limit, it will default to the limit.
    commodities_total: Update your Commodity limit. Can only be X (set).
    * strategy_card: Update the Strategy Card you hold. Can only be from 1 to 8. Can only be used when you hold no Strategy Card. 
    * passed: Update your pass status. Yes is passed, No is not passed.
    * speaker: Update your Speaker status. Yes means you now hold the Speaker token, No is not holding it.
    * dummy: Update the Dummy status. Dummy players will be ignored for all game effects, including turns change, voting, and various others. Usually used to set a bot as a player to hold down something, but you don’t want the turn to come to them. Yes means the player is a Dummy, No means not.
    * player: used to update for other players. Default to the player running the command.
    * faction_or_color: same as above, but just a different identifier.

* `/player send_tg trade_goods: faction_or_color:`   
Used to send TG from you to another player.
* `/player send_commodities commodities: faction_or_color:`  
Used to send Commodities from you to another player. The Commodity will flip to TG at the receiving player’s side, so it is also useful for flipping your own Commodities when you get washed.

* `/player turn_end`
* `/player pass`

### Strategy card commands 

Used to play and unplay Strategy Cards. Not used much anymore thanks to the button, but can be helpful (`/player sc_unpick`, in case you mess up your pick). The reason the last 3 require SC identification is due to 3 and 4-player games, where you have more than 1 SC.
faction_or_color: used to play and unplay SC of other players
* `/player sc_pick strategy_card:`
* `/player sc_unpick strategy_card:`
* `/player sc_play strategy_card:`
* `/player sc_unplay strategy_card:`

>Tip: You can use `/player turn_end player:(player before you in initiative order)` to trigger your turn beginning, allowing the buttons to generate again, in case you made some mistakes and have fixed it.

Outside of these, we also have the commands `/player setup:`, `/player change_color color:`, `/player speaker:` that were explained in the setting up game section. They can also be done outside of that timing.