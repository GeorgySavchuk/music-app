import compose from 'compose-function'
import {reduxProvider} from './reduxProvider.tsx'
import {routingProvider} from './routingProvider.tsx'
export const withProviders = compose(reduxProvider, routingProvider)