module.exports = {
    
    get_emoji: () => {
      
      if (task.status == true) {
        return `<span for="img" aria-label="check">✅</span>`;
      } else {
        return `<span for="img" aria-label="exclamation">❗</span>`;
      }
    },

  };