module.exports = {
    
    get_emoji: (status) => {
      
      if (status == true) {
        return `<span for="img" aria-label="check">✅</span>`;
      } else {
        return `<span for="img" aria-label="exclamation">❗</span>`;
      }
    },

    format_time: (date) => {
      return date.toLocaleString(undefined, {
        weekday: 'short',
        day:    'numeric',
        month:  'numeric',
        year:   'numeric',
        hour:   '2-digit',
        minute: '2-digit',
    });
    },
    if_eq: (arg1, arg2) => {
      console.log(arg1, arg2);
      return arg1 == arg2;
    },


  };