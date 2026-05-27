// type UserRole = "admin" | "editor" | "viewer";
enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}
const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

console.log(canEdit(UserRole.Admin));
