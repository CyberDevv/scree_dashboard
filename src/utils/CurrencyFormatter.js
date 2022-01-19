const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
});

export const CurrentcyFormatter = (ctx) => {
   return formatter.format(ctx);
};

export default CurrentcyFormatter;
