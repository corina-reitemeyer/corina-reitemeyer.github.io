export default interface AboutData {
  roles: Role[]
  process: ProcessStep[]
  values: Value[]
}

interface Role {
  title: string
  company: string
  description: string
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
