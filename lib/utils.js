
exports.pad = function pad (str, width) {
  var len = Math.max(0, width - str.length)
  return str + Array(len + 1).join(' ')
}

exports.deref = function deref (c, abbrevs, cmdList) {
  if (!c) return ''
  if (c.match(/[A-Z]/)) c = c.replace(/([A-Z])/g, function (m) {
    return "-" + m.toLowerCase()
  })
  var a = abbrevs[c]
  var cmd = cmdList.filter(function (c) {
    return c.alias === a
  })[0]
  if (cmd) a = cmd.name
  return a
}
