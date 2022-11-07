export type ImagesProps = {
  alternativeText: string
  url: string
}
export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImagesProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImagesProps
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
}
