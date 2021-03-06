export default function parentHasClass (element, className) {
  while (element) {
    if (element.classList.contains(className)) {
      return true
    }
    element = element.offsetParent
  }

  return false
}
