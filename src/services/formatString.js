export function ellipisName(str) {
  return str && `*${str.substr(1)}`;
}

export function ellipisPID(tel) {
  return tel && tel.replace(/^(\d{4})\d+(\d{4})$/, (match, $1, $2) => `${$1}****${$2}`);
}
