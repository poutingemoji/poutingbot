import Game from "../../base/Game";
export default class StartCommand extends Game {
  constructor(client) {
    super(client, {
      name: "start",
      group: "user_info",
      memberName: "start",
      description: "Start your adventure.",
      throttling: {
        usages: 1,
        duration: 60,
      },
    });
  }

  async run(msg) {
    this.replacePlayer(msg.author.id)

    return msg.say(
      this.buildEmbed({ title: "ya", color: "#c362cb" }, { author: msg.author })
    );
  }
}