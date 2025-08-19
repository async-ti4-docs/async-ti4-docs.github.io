---
layout: docs
title: "Creating a game"
description: "How to create a game in Discord."
nav_order: 2.1
parent: Getting started
---

## Start a new game

The first option is to start your own game. This is encouraged even for new async players, since the easiest way to learn about the bot is to play a game yourself and try it out.

1. Go to [#making-new-games <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://discord.com/channels/943410040369479690/1064017530391379998) channel and create a post. 
![](/assets/images/getting-started/create-game.gif)
2. Include a brief description of what you want in a game, i.e., you want people from a specific timezone, or you want this to be a learning-the-bot game. There are no hard requirements for this.
![](/assets/images/getting-started/1-start-new-game.png)
3. Add tags to the post with the type of game you want. The tags in Discord are below:
    - **Casual** / **Competitive** – Self-explanatory. Competitive games often include the **TIGL** tag.  
    - **6p** / **7p** / **8p** – Supported player counts (3–8 work too). For **2p** or **9p+**, ask in `#bot-questions-and-feedback`.  
    - **10vp** / **12vp** / **14vp** – Victory Point totals (bot supports any VP).  
    - Type of draft:
        - **Milty** – Randomized set of slices and factions; players snake draft slice, faction, or speaker (see [milty.shenanigans.be <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://milty.shenanigans.be/)).  
        - **Bag Draft** – Each player drafts from a bag of faction, tiles, and speaker position, passing until complete. Not automated; ask in `#bot-questions-and-feedback`.  
    - **Franken** – Factions split into draftable components (abilities, techs, fleets, etc.); similar to bag draft. See `#franken`.  
    - Game speeds:
        - **SuperFast** – Moves at all waking hours.  
        - **DecentlyFast** – Multiple moves daily, frequent secondary passing.  
        - **ChillPace** – Roughly once daily.  
        - **SlowBurn** – Very casual pace.  
    - **Alliance** – Variant from Codex II (*Affinity*). See [wiki <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://twilight-imperium.fandom.com/wiki/Alliance_Game_Variant).  
    - **FogOfWar** – Hidden-information variant. Ask for an invite in [#general-chat <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://discord.com/channels/943410040369479690/1025083568839471165).  
    - **No Whispers** – No private chats; all diplomacy in tabletalk channel.  
    - **TIGL** – *TI Global League*, competitive play. Run `/help what_is_tigl`.  
    - **DS** – *Discordant Stars*, expansion adding factions. See [#discordant-stars-talk <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://discord.com/channels/943410040369479690/1168522933283598437).  
    - **Absol** – Popular homebrew: new Agenda/Relic decks, tech and Mech rebalance. See [#generic-homebrew <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://discord.com/channels/943410040369479690/1370477581094224003).  
3. If your game is open to other players (i.e., not a private prearranged game) Mention `@LFG` in your post to notify users looking for a game.
4. As people join, update your post with who is playing. This lets others know how many slots are free, and players that they are confirmed.
5. When you have players, use `/game create_game_button` command, filling in the player list and a fun game name. This creates a button with the necessary information, and provides the relevant server invite link right away (if any players are not in that server yet). The will create a Create Game button that you can press to launch the game. Check if all players are in the list, then press it and create the game.
![](/assets/images/getting-started/2-start-new-game.png)

## Join a newly created game

The second option is of course joining one of the newly created games looking for players. If you’re looking for a game, you can get the `@LFG` role by going to the [#get-roles-like-lfg <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://discord.com/channels/943410040369479690/947312278246658108) channel (in “WELCOME! GET INTO A GAME!” section of the server) and click on the corresponding icon to get the LFG roles.  You’ll be pinged when there are new open games starting. 


## Game cap

In an effort to prevent the number of abandoned games, there is a cap on how many games a player can be in at the same time. This cap is equal to the number of games that a player has completed, plus three. 

_Example: A new player who hasn't finished a game will have a cap of 3 games. A player who has completed 30 games, has a cap of 33 in progress games._