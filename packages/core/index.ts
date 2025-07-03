import { makeInstaller } from '@songxy-element/utils'

import components from './components'

import '@songxy-element/theme/index.css'

const installer = makeInstaller(components)

export * from './components'
export default installer