﻿import { Component } from 'react'
import { DiscordButton } from './DiscordButton'
import { GitHubButton } from './GithubButton'

export class Header extends Component {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-end gap-4">
            <span className="text-6xl font-bold text-center text-teal-500">
              Not Even Close
            </span>
            <span className="font-bold text-center text-teal-500">
              {"by Ortemist-Zul'jin"}
            </span>
          </div>
          <div className="flex items-center">
            <DiscordButton href="https://discord.com/invite/Ykb6AbYHHZ" />
            <GitHubButton href="https://github.com/acornellier/not_even_close" />
          </div>
        </div>
        <span className="font-bold text-teal-500">
          Disclaimer: WIP! Expect errors and bugs. Only magic damage is
          supported.{' '}
        </span>
      </div>
    )
  }
}
