---
layout: docs
title: "Channels, roles, and how to use them"
description: "Learn how to use the various channels and roles in Discord."
nav_order: 2.2
parent: Getting started
---

## Channels of a new game

After you (or someone else) clicked the button to create the game, 2 things will happen:
* A new role is created: It’s named pbdX (where X is the number of the game) and the bot will give everyone in the game this role. You can ping this role @pbd### to notify the players in your game of something.
* 2 channels will be created in the Discord server: `pbdX-name-of-the-game` and `pbdX-actions` (with the threads `pbdX-bot-map-updates` and `Cards-Info-pbdX-player`). 

![](/assets/images/getting-started/1-channel-roles.png)

## pbdX-name-of-the-game 

The first channel is the tabletalk channel. 

This channel is open for conversation of any type, as you would over the table while playing the game. For most games, this is where deal making and negotiation happens, alongside jokes, small talk, memes, and bad jokes. Some groups/players like to start threads for particular conversations (such as a trade card activation or specific bi-lateral discussions) because often there are several conversations happening at the same time, and though they’re all public, not everyone is necessarily involved in all conversations. This is particularly relevant for games where no secret conversations are allowed, which is common in asynchronous play. There can be lots of public negotiations happening between players that don’t involve everyone. 

![](/assets/images/getting-started/2-channel-roles.png)

Posts in the tabletalk channel are **_not_** actions in the game - this channel is where you can discuss your intended actions or engage in potential negotiations without cluttering the actions channel.

## pbdX-actions 

This channel is used to play the game. 

What this means is that this is the interface where you interact with the components of the bot (the buttons), and should be kept clear of chatters and map generation. Despite the sophistication of the buttons, mistakes are frequent. Depending on the game and groups, certain take backs may or may not be allowed. When mistakes happen, the player is encouraged to explain the mistake and the fix in actions, and conduct the actual fix commands in the pbdX-bot-map-updates thread.

This brings us to the various threads related to the game in the pbdX-actions channel:

![](/assets/images/getting-started/3-channel-roles.png)

### pbdX-bot-map-updates

Where the map of the game is generated. If you must do a command that is not included in the original buttons, or to fix a mistake, you should do it here, and include a description of your fix in the main Action channel. Many manual commands generate a map.  Keeping these commands in bot-map-updates prevents clutter in the main actions channel.

![](/assets/images/getting-started/4-channel-roles.png)

>Tip: If you cannot see the map clearly when you open it, you can click on it, and in a corner, you can find an option to “Open in Browser” to open it in your browser for a higher quality image. You can also use the Website View button to go to the website holding the map.

### Cards-Info-pbdX-player

At the start of the game, the Cards-Info-pbdX-player thread will be created with a button for you to set you or someone else as one of the factions in the game. Later, when you are set up, it will be populated with all the relevant information related to your faction (abilities, leaders, units, etc.). 

This thread also contains your faction’s secret information, i.e., Promissory Notes, Secret Objectives, and Action Cards. You can also do tasks related to those cards from here, like playing or discarding AC and SO, and also modifying your units and transactions. The result of those actions will be posted to the main Action channel. 

>Tip: The bot uses a system of random numbering to identify your cards. Everytime you show any of your cards to another player, that card’s ID number is shuffled. These ID numbers are useful when you need to perform some fixes that require commands.

Also, thanks to improvements, you can now adjust various settings in your Cards Info thread, as you can see below:

![](/assets/images/getting-started/5-channel-roles.png)

![](/assets/images/getting-started/6-channel-roles.png)

When clicking on “Change Player Settings”:
    
![](/assets/images/getting-started/7-channel-roles.png)

## pbdX-round-Y-strategycard

Due to the nature of async, players may not be able to follow the secondary of Strategy Cards in real time. It’s standard for the active player to end turn before everyone has reacted to an SC, although there are certainly exceptions. When an SC is played, a separate thread is automatically created. This allows players to follow whenever they are online, and it keeps the relevant info in a central location. 

Of course, if any of the players want the secondary to be done in sequence, they can ping the whole group to make their desire known. 

>Please note that the order these threads are created are not reflected in how they appear in your thread list, and you need to follow them according to the order the SC are played.

![](/assets/images/getting-started/8-channel-roles.png)
