
// Add support for kind 30000
const handleNostrList = (event) => {
  if (event.kind === 30000) {
    const profiles = parseList(event.content);
    updateAutocompleteTabs(profiles);
  }
};

