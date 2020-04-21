# BasicCord
Making Discord bots simple.

This project uses FrameCord. It extends FrameCord's client to make it easier for beginners and simple projects.

Use `npm i -s basiccord` in your project to get started!

# Creating a Bot

To get started with BasicCord is very simple! Just follow the example to setup your client:

```javascript
const BasicCord = require("basiccord");

const Client = new BasicCord("Discord token");
```
It's that simple!

Now, you can add a bit more info to it.
For example, by default the prefix is `!`. To change it we only need to do `new BasicCord("Discord token", "another prefix")`.

Here's what you can pass to BasicCord. `new BasicCord(token, prefix, name, description, tags, nsfw)`.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| token | Discord token | `null` |
| prefix | Bot prefix | String: `!` |
| name | Bot name |  String: `BasicBot` |
| description | Bot description | String: `A Basic Discord bot written with BasicCord` |
| tags | Bot tags | Array: `[]` |
| nsfw | If NSFW | Boolean: `false` |

# Adding commands
Adding basic commands to BasicCord is really simple.
Using BasicCord's `addCommand()` function, we can quickly add new commands to our bot.

The command uses a instantiated version of BasicCord.
It accepts 4 variables, 2 of which are only necesary.

The function is: `Client.addCommand(command, response, mentionUser, data)`. `command` and `response` are the necesary ones.
Data is going to be an object with `name`. `description`, `tags` and `nsfw` like with our client.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| command | Command ID | `null` |
| response | Response string or a function that returns a string or discordjs embed | `null` |
| mentionUser | If it mentions the user that called the command |  Boolean: `false` |
| data | Data object | Obj: `{name: "", description: "", tags: [], nsfw: false}` |

## Example
```javascript
const BasicCord = require("basiccord");

const Client = new BasicCord("Discord token");
Client.addCommand("hi", "Hello!", true);
```

## Exit Command
There's also a function to add an exit command, which requires you user ID to function.
This will add the command `exit` that will only close the bot if the user ID of the caller matches the one that you passed.

```javascript
const BasicCord = require("basiccord");

const Client = new BasicCord("Discord token");
Client.addExitCommand("User ID");
```