export function validateEmptyInput(input: string): boolean {
  if (!input?.trim()) {
    return false
  }

  return true
}

export function validateAllInputs(arrayInputs: string[]): boolean {
  let validate = true

  for (let i = 0; i < arrayInputs.length; i++) {
    if (!validateEmptyInput(arrayInputs[i])) {
      validate = false
    }
  }

  return validate
}
