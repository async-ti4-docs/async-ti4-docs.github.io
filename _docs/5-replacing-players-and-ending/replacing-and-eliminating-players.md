---
layout: docs
title: "Replacing and eliminating players"
description: "How to replace players mid-game and what to do when eliminating one."
nav_order: 5.1
parent: Player changes, elimination and ending
---

## Replacing players 

Sometimes, a player just did not vibe with the ASync format enough, or life just happened, and they could not, or would not continue the game. We all understand that, and wish the player leaving all the best. But that leaves the players still left looking for a new player to fill in that gap. These commands will help you to conduct the replacement quickly and effectively.

The first step is actually not related to the bot. You need to find the replacement player. Go to `#finding-replacements` channel and create a post looking for a replacement. The post name should have the game name, the faction being replaced, a general idea of the format being played (TIGL, Absol, Discordant Stars, etc.). The post itself should go into details of any particularity of the game (like special rules or maps), and the situation the replacement player will find themselves in. It’s best to add the map of the game to the post as well (can be done through /show_game game_name:).

After you have found the replacement player, use this command:
`/game replace player: player2` Replace player with player2 in the game. Should be run in the game channel itself. 

## Eliminating players

Twilight Imperium is a cutthroat game at the worst of times. That includes elimination, something that has been baked into the rulebook. So across our 2000s games, there tends to be a few eliminations. When that happens, use this:

* `/game eliminate player1`: the command should get you most of the way, including the player from the bot and remove their components from the boards and players’ hands.
* `/role remove user`: role: to remove the game role from the eliminated players. The role is pbdX, with X being the game number.