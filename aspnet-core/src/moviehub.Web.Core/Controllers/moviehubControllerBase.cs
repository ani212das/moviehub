using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace moviehub.Controllers
{
    public abstract class moviehubControllerBase: AbpController
    {
        protected moviehubControllerBase()
        {
            LocalizationSourceName = moviehubConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
