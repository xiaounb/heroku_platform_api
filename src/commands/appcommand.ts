/* eslint-disable no-console */

// note that we are using @heroku-cli/command instead of @oclif/command
// this inherits from @oclif/command but extends it with Heroku-specific functionality
import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class AppCommand extends Command {
  static description = 'say hi to an app'

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true}),
  }

  async run() {
    const {flags} = this.parse(AppCommand)
    const response = await this.heroku.get<Heroku.App>(`/apps/${flags.app}`)
    const app = response.body
    console.log(app)
  }
}
