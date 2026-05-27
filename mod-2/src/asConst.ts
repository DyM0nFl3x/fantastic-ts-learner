const userRole = {
  Admin: "admin",
  viewer: "viewer",
  Editor: "editor",
} as const;

const getUser = (role: (typeof userRole)[keyof typeof userRole]) => {

  if (role === userRole.Admin || userRole.Editor) {
    return true;
  } else return false;
};

console.log(getUser("admin"))


/**
============================================================================================================================================
‖ Title: topic Name                                                   |       Description: some short text about                           ‖
‖                                                                     |                                                                    ‖
‖——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————‖
‖                                                                     |                                                                    ‖
‖                                                                     |  More details about this note:_                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖<                                                                   >|                                                                    ‖
‖                                                                     |                                                                    ‖
‖                           Big Image                                 |                                                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖                                                                     |                                                                    ‖
‖---------------------------------------------------------------------|                                                                    ‖
‖                ‖                ‖                 |                 |                                                                    ‖
‖                ‖                ‖                 |                 |                                                                    ‖
‖ short img view ‖ short img view ‖ short img view  | short img view  |                                                                    ‖
‖                ‖                ‖                 |                 |                                                                    ‖
‖ _______________|________________|_________________|_________________|                                                                    ‖
‖                                                                                                                                          ‖
‖    Taka:                                                                                                                                 ‖
============================================================================================================================================
*/
