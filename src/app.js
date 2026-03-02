 const handleKind30000 = require('./handlers/kind30000'); // Existing code... app.use('/api/events', (req, res) => {
  const event = req.body;
  if (event.kind === 30000) {
    handleKind30000(event);
    res.status(200).send('Handled kind 30000 event');
  } else {
    // Handle other events
  }
}); 
