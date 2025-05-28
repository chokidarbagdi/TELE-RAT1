const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7857111415:AAGk4dlMpIGvqw2AtnJ2P4Wwks5G7h-lGew',
  id: isNaN(parsedId) ? 6159868847 : parsedId // replace 12345.. with your telegram chat id
};
