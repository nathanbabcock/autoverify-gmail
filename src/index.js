// todo: import from configs.json later
const AutoVerifyConfigs = [
  {
    "url": "https://oam.wellsfargo.com/oam/access/receiver/",
    "inputSelector": "input#otp",
    "emailSubject": "Your Wells Fargo Advanced Access code",
    "codePrefix": "Advanced Access code:",
    "codeLength": 6
  },
  {
    "url": "https://play.zeedz.io/signin",
    "inputSelector": "input[placeholder='Enter magic code here']",
    "emailSubject": "Sign-in to Zeedz",
    "codePrefix": "Secret Magic Code",
    "codeLength": 6
  }
]


/**
 * Find the configs that matches this page, if any.
 * todo: if the config list every grows to thousands of entries (e.g. with crowdsourced contributions)...
 * todo: ...a more efficient search algorithm would be preferable.
 */
function findMatchingConfig() {
  return AutoVerifyConfigs.find(config => window.location.href.startsWith(config.url))
}

/**
 * Scan the gmail inbox for the subject line.
 * @param {string} emailSubject
 * @returns {HTMLElement} the subject line element
 */
function findSubjectLine(emailSubject) {
  return Array.from(document.querySelectorAll('span'))
    .filter(el => el.textContent.trim() === emailSubject.trim())
    .at(0)
}

/**
 * Scan an email body for a verification code.
 * @param {string} emailBody the `textContent` of the email body
 * @param {string} codePrefix the line of text immediately preceding the verification code (ignoring whitespace)
 * @param {number} codeLength the length of the verification code
 * @returns {string} the verification code
 * @throws {Error} if the code prefix is not found
 */
function findVerificationCode(emailBody, codePrefix, codeLength) {
  const codeIndex = emailBody.indexOf(codePrefix) + codePrefix.length
  if (codeIndex === -1) throw new Error(`Could not find code prefix "${codePrefix}"`)
  return emailBody.substring(codeIndex).trim().substring(0, codeLength)
}

function queryInputElement(config) {
  return document.querySelector(config.inputSelector)
}

/** Entrypoint injected into every page (clientside) by a Chrome extension. */
function main() {
  const config = findMatchingConfig()
  if (!config) return

  let inputElement = queryInputElement(config)
  if (inputElement) {
    // todo: open gmail tab and select it
    // todo: inject gmail script
    // todo: scan incoming emails for subject line
    // todo: click on subject line to open email
    // todo: extract verification code from email body
    // todo: send verification code back up to extension context
    // todo: delete the email
    // todo: close the tab
    // todo: focus back on the original tab (default behavior?)
    // todo: paste the verification code into the input element
    // todo: submit the form (enter keypress or form.submit())
  } else {
    // todo: mutation observer to watch for input element to appear
  }
}
