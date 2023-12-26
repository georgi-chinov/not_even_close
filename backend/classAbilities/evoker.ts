import { Ability } from '../ability'

export const inherentResistanceAugPres: Ability = {
  name: 'Inherent Resistance',
  dr: 0.04,
  onByDefault: true,
  spellId: 375544,
  iconName: 'inv_misc_rubysanctum1',
}

export const inherentResistanceDev: Ability = {
  ...inherentResistanceAugPres,
  dr: 0.08,
}

export const obsidianScales: Ability = {
  name: 'Obsidian Scales',
  dr: 0.3,
  spellId: 363916,
  iconName: 'inv_artifact_dragonscales',
  wowheadLink: 'https://www.wowhead.com/spell=363916/obsidian-scales',
}

export const twinGuardian: Ability = {
  name: 'Twin Guardian (Rescue)',
  healthIncrease: 0.3,
  spellId: 370888,
  iconName: 'ability_skyreach_shielded',
  wowheadLink: 'https://www.wowhead.com/spell=370888/twin-guardian',
}

export const evokerAugPresAbilities = [
  inherentResistanceAugPres,
  obsidianScales,
  twinGuardian,
]
export const evokerDevAbilities = [
  inherentResistanceDev,
  obsidianScales,
  twinGuardian,
]
