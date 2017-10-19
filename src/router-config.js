import React from 'react'
import { Home, About, NotFound } from './Components'

export const routes = [
   {
      'path':'/',
      'component': Home,
      'exact': true
   },
   {
      'path':'/about',
      'component': About
   },
   {
      'path':'*',
      'component': NotFound
   }
]