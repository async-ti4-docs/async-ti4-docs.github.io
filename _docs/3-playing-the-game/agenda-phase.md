---
layout: docs
title: "Agenda phase"
description: "How to play the Agenda phase."
nav_order: 3.4
parent: Playing the game
---

The process is similar to a normal game. When a player has taken the Custodians, the Agenda phase will be automatically unlocked after the Status Phase.

1. The process starts with the players revealing an Agenda through the bot, then each player will be privately asked in their cards info to decide on Whens and then Afters, and all Afters will be queued to play after everyone has passed on Whens, and all Whens/Afters will be queued in Speaker order. 
>Note: By default, if you queue an After and someone before you in speaker order also queued an After, your queued After will be cancelled. There is a button when queueing to override this default. 

    * By default, if you pass on Whens/Afters you will not be re-asked to pass later if someone else plays a When/After. There is a button after passing on Whens/Afters to override this default. 
    * If someone plays your Political Secret PN, all of your queued Whens/Afters will be cancelled and you will be automatically passed on them (though you can still use Keleres rider). 
    * If someone Quashes or Vetoes the agenda, all of your queued Whens/Afters will be cancelled.
    * If at any point you are impatient with this process, or the new process bugs out, there remain a few options:
        * Firstly, you can always play ACs/PNs normally, they are only queued if you play them via the queue process. 
        * Second, there remains the button in the public actions channel to "Skip waiting and start the voting" that can be used if things go wrong. 

2. When you decide on Whens/Afters, either to queue or to pass on them, the bot will state in the public channel how many players it is still waiting on. 

3. After all the players have played their When/Afters and/or responded no more When/Afters, the bot will ping the player to the left of Speaker (or the Argent Flight player with Zeal ability) to start the votes. The player will choose how many votes they want to spend for that Agenda and on which result, then choose the planets to exhaust. If the player has played a Rider card, or they have spent all their votes (none of their planets are readied), they are automatically skipped.

>Tip: The vote numbers are actually separated from planet influence values in the bot. First choose the number of votes you want to spend, including any from abilities (Xxcha commander, Hacan commander) and techs (Predictive Intelligence), and then choose the planets you want to exhaust. If you make a mistake, you can use the buttons to remove your vote and vote again (remember to ready your planets first).

4. After all players have voted, if there is a tie, the Speaker will be prompted to choose the result. If there were dissenting votes (or if it was an Elect Player agenda), the bot will prompt the players to play Bribery, Deadly Plot, and/or Confounding/Confusing Legal Texts. The bot will also give you the choice to resolve the Agenda according to the voted result (including adding the Agenda to the map if a law passed, with the elected result), or manually (choosing a different result due to the above cards). 

>Note: Some Agenda results are not automated. In those cases, you can ask in `#bot-questions-and-feedback` channel or use the commands noted in the Troubleshooting section to update the map accordingly.

5. Finally, the bot will prompt you to flip the next Agenda or move on to Strategy Phase. As it cannot track how many Agenda has been revealed (and some effects muddle this, like the Veto AC and Quash), you must keep track of how many agendas have been voted on in order to know which button to select.
