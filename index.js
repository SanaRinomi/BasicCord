const {Client, Nodes: { CommandNode, DataNode}, Events: {Event}} = require("framecord");

class BasicCord extends Client {
    get Base() { return this._base; }

    constructor(token, prefix = "!", name = "BasicBot", description = "A Basic Discord bot written with BasicCord", tags = [], nsfw = false) {
        super(token, {name, description, prefix: ""});
        this._base = new DataNode(prefix,  {name, description, tags, nsfw});

        this.registerNode(this._base);
        this.events.addEvent(new Event("command.nodeNotCommand"));

        this.login();
    }

    addCommand(command, response, mentionUser = false, data = {
        name: "",
        desc: "",
        tags: [],
        nsfw: false
    }) {
        let Command = new CommandNode(command, (cli, command, msg) => {
            if(mentionUser) msg.reply(typeof response === "string" ? response : response(cli, command, msg));
            else msg.channel.send(typeof response === "string" ? response : response(cli, command, msg));
        }, data);

        this._base.addChild(Command);
        return Command;
    }

    addExitCommand(userID, command = "exit") {
        let Exit = new CommandNode("exit", (cli, command, msg) => {
            if (msg.author.id === userID)
                msg.reply("See you later!").then(() => {
                    cli.exit();
                });
            else
                msg.reply("You don't have permission to do this");
        });

        this._base.addChild(Exit);
        return Exit;
    }
}

module.exports = BasicCord;