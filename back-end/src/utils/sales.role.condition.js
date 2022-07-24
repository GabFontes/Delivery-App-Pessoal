const checkRole = (id, role) => {
  if (role === 'seller') {
    return {
      where: { sellerId: id },
    };
  }
  return {
    where: { userId: id },
  };
};

module.exports = checkRole;