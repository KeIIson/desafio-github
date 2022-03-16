(() => {
  const user = {
    name: "Kellson",
    lastName: "Souza"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();