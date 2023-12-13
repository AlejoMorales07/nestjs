export class WhatsAppAPIReq {
  messaging_product: string
  to: string
  type: 'text' | 'reaction' | 'image' | 'audio' | 'document' | 'sticker' | 'video' | 'location' | /* 'contacts' |  'interactive'  | */ 'template'
  text?: Text
  reaction?: string
  image?: Multimedia
  audio?: Multimedia
  document?: Multimedia
  sticker?: Multimedia
  video?: Multimedia
  location?: Location
  template?: Template
}

export class Text {
  preview_url: boolean
  body: string
}

export class Reaction {
  message_id: string
  emoji: string
}

export class Multimedia {
  link?: string
  id?: string
}

export class Location {
  latitude: number
  longitude: number
  name: string
  address: string
}

export class Interactive {
  type: 'button' | 'catalog_message' | 'list' | 'product' | 'product_list' | 'flow'
  action: Action
  header?: any
  body?: any
  footer?: any
}

export class Action {
  button?: string
  buttons?: Button[]
  catalog_id?: string
  product_id?: string
  product_retailer_id?: string
  sections?: Section[]
  mode?: 'draft' | 'published'
  flow_message_version?: string
  flow_token?: string
  flow_id?: string
  flow_cta?: string
  flow_action?: 'navigate' | 'data_exchange'
  flow_action_payload?: string
}

export class Button {
  type: string
  title: string
  id: string
}

export class Section {}

export class FlowActionPayload {
  screen: string
  data?: object
}

export class Template {
  name: string
  language: Language
  components: Component[]
}

export class Component {
  type: string
  parameters: Parameter[]
}

export class Parameter {
  type: string
  text: string
}

export class Language {
  code: string
}
