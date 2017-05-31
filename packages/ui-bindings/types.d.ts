import { Component } from 'react'

declare interface HoCFactory { (el: Component<P, S>): Component<any, any> }
