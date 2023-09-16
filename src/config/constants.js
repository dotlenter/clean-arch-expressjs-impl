const userStatus = ["active", "inactive", "blocked", "blacklisted", "deleted"];

const roles = ["user", "manager", "admin"];

const roleRights = new Map();

roleRights.set(roles[0], ["getDocuments"]);

roleRights.set(roles[1], ["getDocuments", "getUsers", "manageUsers"]);

roleRights.set(roles[1], [
  "***god***",
  "getDocuments",
  "getUsers",
  "manageUsers",
  "analytics",
  "crash",
  "reports",
]);

module.exports = {
  roles,
  userStatus,
};
