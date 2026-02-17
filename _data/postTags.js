module.exports = function(collections) {
  const tagSet = new Set();

  if (!collections.posts) return [];

  collections.posts.forEach(item => {
    if (!item.data.tags) return;

    item.data.tags.forEach(tag => {
      if (tag !== "posts") {
        tagSet.add(tag);
      }
    });
  });

  return [...tagSet].sort();
};
