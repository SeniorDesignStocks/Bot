module.exports = function filter(cb) {
  return (message) => {
    if (message.type !== 'DEFAULT') {
      console.log('non-default message');
      console.log(message);

      return {};
    }

    return cb({
      user: message.author.username,
      channel: message.channel.name,
      content: message.content,
    });
  }
}
