export interface ProjectType {
  technos: AllowedBadgeLabel[]
  title: string
  description: string[]
  img: string
  link: string
  gitLink: string
}

export type AllowedBadgeLabel =
  | 'api platform'
  | 'docker'
  | 'javascript'
  | 'next js'
  | 'php'
  | 'react js'
  | 'symfony'
  | 'tailwind'
  | 'typescript'
  | 'vite';
