---
layout: docs
title: "Game setup"
description: "After the channels and roles are created, the next step is to set up the game."
nav_order: 2.3
parent: Getting started
---

Originally, this step was done with commands, but thanks to the tireless work of our developers, it can now be mostly done with buttons (at least for standard games).

## Milty draft

If you are someone who enjoys Milty draft, you only need to run the command `/milty` setup, and the bot will present you with a nice in-house draft that you can utilize to conduct your draft.

![](/assets/images/getting-started/1-game-setup.png)

![](/assets/images/getting-started/2-game-setup.png)

When you have set up the draft parameters to your liking, you can start the draft by pressing Start Milty Draft. Below is how the draft setup usually looks like.

![](/assets/images/getting-started/3-game-setup.png)

## Standard game commands

If you are looking for something more out of the box, the below commands should help you get there. These should be run in the `pbdX-bot-map-updates` thread and are explained here:

* `/game setup`: used to set up the game, with options explained below (not all need to be set):
    * `player_count_for_map` defines the size of the map for the bot (between 2 and 30), default 6.
    * `vp_count` sets the victory track to the desired target of victory points (typically 10, 12, or 14). 
    * `sc_count_for_map` sets the amount of Strategy Card each player will pick in the Strategy Phase, default 1.
    * `max_so_count` is the maximum number of Secret Objectives the player can hold (this number will be dynamically changed in-game if relevant abilities increase it, like The Obsidian relic). Default 3.
    * `game_custom_name` is the silly name you gave your game that will appear above the score track on the map (can be the same as the name on pbdX-name-of-the-game channel). This is where you should also note any special variants (such as 4-4-4) you’re playing with to remind players and spectators. 
    * `is_tigl_game` is to mark the game as TIGL. _Default False_.
    * `auto_ping` sets a timer to ping the active player if it is still their turn after x hours. Input the number of hours between each ping. 0 means it’s off. Minimum 1. Default 36.
    ![](/assets/images/getting-started/4-game-setup.png)

* `/game weird_game_setup` This is the one stop shop for all of you homebrew enthusiasts here. Just run it and choose the ideal mode for your game. Now with Age of Exploration and Minor Factions!
    * `community_mode` allows anyone, including players not added to the game, to make changes to the game. This is not recommended as a general use and was created to support the community game where dozens of people control the same faction together. _Default False_.
    * `fow_mode` is used for the Fog of War variant. _Default False_.
    * `base_game_mode` is used when you want to play without the Prophecy of Kings expansions or the Codices. _Default False_.
    * `miltymod_mode` is a homebrew made by Milty, only compatible with Base Game. And not to be confused with Milty Draft. _Default False_.
    * `absol_mode` is used to replace the relic and agenda decks with the Absol version. _Default False_.
    * `discordant_stars_mode` is used to include the factions from the Discordant Star fan expansion in the game. _Default False_.
    * `age_of_exploration_mode` enables the Age of Exploration scenario revealed by Dane. _Default False_.
    * `minor_factions_mode` enables the Minor Factions scenario revealed by Dane. _Default False_.
    * `beta_test_mode` is for the devs to test new features. Advisable to keep default. _Default False_. 
    * `extra_secret_mode` will allow each player to start with 2 Secret Objectives. _Default False_.

* `/map add_tile_list {mapString}`: {mapString} is the numerical TTS / TTPG map string. The bot will draw the map, add the frontier tokens, the Custodian token, and the Wormhole nexus (in the locked status).

>Tips: If you used the wrong strings and the map came out not like you wanted, you can just run the command again to reset the map. It will erase the old map like it was never there.

* `/game set_order`: Set the speaker order of the game. The first player listed should be the R1 Speaker and will occupy the 12:00 (uppermost) position on the map.
(This can be done by clicking the button shown in the channel at the noted time, but it’s still useful to know the command behind it).

* `/player setup`: used to set up a faction, color, and Home System position to a player. Options below:
    * `faction` should be self-explanatory.
    * `color` can be chosen from the table below. Please take note of color clashing and visibility when choosing colors. A few are missing, and the developers are working on a color-blind mode.
    * `hs_tile_position` is used to specify where the player’s HS tile goes. Standard starting positions  for a 6-player game are 301, 304, 307, 310, 313, and 316, corresponding to the players’ position in the Speaker order. 
    * `player` is used when you are setting up for another player. If this is not chosen, the set up will be done for yourself.
    * `speaker` set to _True_ to identify the player as the first Speaker. Usually set for the player in the 301 position.
    (This can be done by clicking the button shown in the channel at the noted time, but it’s still useful to know the command behind it).

* `/player change_color color`: If after setup, you don’t like your color (maybe because someone set it up for you), you can use this command to easily change it. Below are the available colors:
![](/assets/images/getting-started/5-game-setup.png)

* `/game set_deck`: If you are using a normal Base game + PoK, this command will not be necessary. It should only be used in case you are using a homebrew that includes changes in one or more of these decks: 
    * `ac_deck` (Action Cards)
    * `relic_deck`
    * `exploration_decks`
    * `technology_deck`
    * `so_deck` (Secret Objectives)
    * `s1_public_deck` (Stage 1 Public Objectives)
    * `s2_public_deck`
    * `agenda_deck`
    * `strategy_card_set`

Choosing starting technologies: There will be a button for players that needs to choose their starting Technologies in the Actions channel:
![](/assets/images/getting-started/6-game-setup.png)

>Tip: If button doesn’t appear, `/tech tech_add` can be used instead. Remember to set the Technology deck in case you are using a non-standard Technology deck before adding tech.

* `/player add_alliance_member faction_or_color`: Specific for Alliance variant. Used to identify your alliance partner, and has various effects on the game, like unlocking both of your Commander and adding their Commander to your player area, etc.

After the map is created with /add_tile_list, the bot will prompt to deal out 2 Secret Objectives to all players with a button. Remember to only press it after all players have been set up and chose their starting Technologies (if applicable). 

After all players have discarded one SO, the bot will prompt again to reveal 2 Public Objectives and ping the Speaker to choose Strategy Card. That is when the game officially begins!
![](/assets/images/getting-started/7-game-setup.png)
