using Abp.Authorization;
using moviehub.Authorization.Roles;
using moviehub.Authorization.Users;

namespace moviehub.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
