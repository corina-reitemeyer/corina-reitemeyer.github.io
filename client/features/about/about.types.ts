export default interface AboutData {
  values: Value[]
  roles?: Role[]
  process?: ProcessStep[]
}

interface Role {
  title?: string
  subtitle?: string
  description: string | string[]
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface Value {
  title: string
  description: string
}
