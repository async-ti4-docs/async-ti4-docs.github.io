---
layout: docs
title: "Commands"
description: "Commands to use with the bot, to fix an issue or override something."
nav_order: 7.2
parent: Commands
---

## Common commands

* `/milty:`  
Setup Set up a Milty draft

* `/game undo undo_to_before_command: confirm:`  
A powerful command, used to undo back to one of the last 10 button presses or commands. Should always be used in the pbdX-bot-map-updates thread. For commands that are too far late, it is better just to change the board state to how it should be, and not roll back a specific action.

* `/show_game`  
Draw the map according to the latest information. Now replaced by the Show map button, but still useful for its options:
    * game_name: Draw the map of the specified game (pbdX). Default to the game that is run in the channel  this command is typed in.
    * display_type: Various options for displaying the map (full map and player areas, map only, player area only). We encourage you to try it out to see what fits best for your situation.

* `/cards_info`  
Resend all info on your Action Cards, Secret Objectives, and Promissory Notes to your Cards Info thread. Now replaced by the Cards Info Button, but still useful for its options.
    * long_pn_display: longer display for PN
    * dm_card_info: send as DM

* `/search:`  
Various commands that can provide useful information (Description of Technologies, Action Cards, Objectives, etc.). You can just type `/search` in #bot-spam-zone channel to test it out.

## Add and remove commands

Commands that add and remove components from the board.

* `/move_units tile_name: unit_names: tile_name_to: unit_names_to:`   
One of the most used commands in the game before the implementation of the buttons. Like what it says on the tins, it’s used to move units. Details on how to use it can be pulled by using the /help how_to_move_units command.
    * faction_or_color: used to move units of other players, if not added, default to the player that use the command
    * cc_use: decide if the bot will place a CC on that tile or not, and if yes, from where, default to CC from Tactics
    * priority_no_damage: decide if the movement should prioritize undamaged units to move, default to True
    * no_mapgen: decide if the bot will generate a map for this command, default to generating the map

* `/add_units tile_name: unit_names:`  
Add units to a tile. Some of the options are different from /move_units:
    * cc_use: decide if the bot will place a CC on that tile or not, and if yes, from where, default to No CC use.
    * sling_relay: also exhaust the Sling Relay tech or not. Default to no.

* `/remove_units tile_name: unit_names:`  
Remove units from a tile. Options also similar to /add_units (except the Sling Relay option).

>Tip: The `/move_units` command is actually just a combination of `/add_units` and `/remove_units`, the units are not actually moved. So you can use this to put more or less units in the destination than what was moved, or to “replace” a unit (remember to set cc_use to No). This also means that if there is an error in one part of the command, it still tries to fulfill as much as possible, i.e. add units at the destination but does not remove units from the beginning.

* `/add_sustain_damage tile_name: unit_names:`  
Add ‘damaged’ status to units on the map. The tile_name and unit_names are used similar to `/add_units` or `/remove_units`. Please note that if there is an error in the command, and the bot cannot find the stated units, no ‘damage’ symbol will be added.
    * faction_or_color: used to update for other players
    * no_mapgen: decide if the bot will generate a map for this command, default to generating the map
* `/remove_sustain_damage tile_name: unit_names:`  
Remove the ‘damaged’ status from units on the map. The tile_name and unit_names are used similar to `/add_units` or `/remove_units`. Please note that if there is an error in the command, and the bot cannot find the stated units, no ‘damage’ symbol will be added.
    * faction_or_color: used to update for other players
    * no_mapgen: decide if the bot will generate a map for this command, default to generating the map

* `/add_token token: tile_name:`  
Add a token (Sleeper token, Gamma wormhole token, etc.) to a tile
    * planet: Attach to a specific planet in that tile

* `/remove_token token: tile_name:`  
Remove an existing token on a tile.
    * planet: Remove from a specific planet in that tile

* `/add_frontier_tokens confirm:`  
Add frontier tokens to all available spaces on the map. Usually used for Empyrean Hero or map set up. To add for a specific tile, use `/add_token`.

* `/add_cc tile_name:`   
Similar to `/add_token`, adds CC to tiles 
    * cc_use: Choose where to take the CC (Tactics or Reinforcements). If not added, default to reinforcements.
    * faction_or_color: used to add CC of other players, if not added, default to the player that uses the command.

* `/remove_cc tile_name:`  
Similar to `/remove_token`, removes CC from tiles 
    * faction_or_color: used to add/remove CC of other players, if not added, default to the player that uses the command.

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