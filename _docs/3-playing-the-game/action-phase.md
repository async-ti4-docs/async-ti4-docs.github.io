---
layout: docs
title: "Action phase"
description: "How to play the Action phase."
nav_order: 3.2
parent: Playing the game
---

Like a normal TI game, there are 3 types of actions: Tactical, Strategic, and Component. 

The option to pass won’t present itself until you have played your Strategy Card (SC). 
>Note: After you perform an action, the bot will always present you with an option to perform another action, even if you are incapable of doing so (i.e., you do not have the 'Fleet Logistics' Technology). 

![](/assets/images/playing-the-game/1-action-phase.png)
![](/assets/images/playing-the-game/2-action-phase.png)

## Tactical action

All steps of a Tactical Action are followed and are almost fully automated by the buttons: 
1. Activating the system 
2. Moving units
3. Combat
4. Landing/invasion
5. Exploration
6. Production

![](/assets/images/playing-the-game/3-action-phase.png)

### Combat 
If there is combat, the bot will create a dedicated combat thread where the 2 players can roll using the buttons. 
* 'Anti-Fighter Barrage' is managed inside the thread. 
* 'Bombardment' is managed outside the thread (because Bombardment can be done without combat). * 'Space Cannon Offense' and 'Defense' are managed both inside and outside, depending on the situation (due to PDS II).

Still, a lot of the combat abilities have not been automated yet, so you will need to keep vigilance to do things manually with commands when necessary.

After rolling, the bot offers options to assign hits, use special abilities (i.e. Technology Singularity, Edict, etc.), and retreat (but it cannot recognize eligible systems to retreat to yet).

>Tip: Simple way to use the `/roll` command: `/roll roll_command:Xd10hvY + Ad10hvB` (Where `X` and `A` are the number of ships of their respective types, and `Y` and `B` are their combat values. This means X d10 (10 sided die) hits versus Y.). 

>Example:
>`roll roll_command: 2d10hv5` = 2 d10 (10 sided die) hits versus 5. Meaning "Roll 2 10 sided dice, hitting on 5s."

![](/assets/images/playing-the-game/4-action-phase.png)

## Strategic action

The bot will create a thread where the players can choose to follow or not by using the buttons. 

The standard procedure is that if you are done with your Primary, you should end turn, and let the others follow the secondary in their own time. Players that responded (either follow or not) will have their faction symbol displayed outside the thread. When it’s the other players’ turn, they are pinged to respond to those SC that they missed in their down time. They must respond to the SC by the order they are resolved, and before they actually take their turn.

>Tip: Sometimes it’s appropriate to wait for everyone to follow; if you play Warfare and then Fleet Logistics into a home system, obviously that player has the opportunity to follow Warfare first.  Sometimes you may add a window for Coup - during a late game Imperial play against a Yssaril who Mageoned Coup from you earlier in the game, you can add your own reaction window.  Use your best judgment!  

![](/assets/images/playing-the-game/5-action-phase.png)
![](/assets/images/playing-the-game/6-action-phase.png)

## Component action

All of the POK and Codices Component Actions have been coded into the bot. Most won’t be automatic, but you can almost always resolve it by using the existing tools in the Troubleshooting section. Please also note that your Component actions from your AC are not counted in the number on the button to avoid revealing hidden info, so you will have to keep those in mind.