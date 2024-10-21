using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using moviehub.Configuration.Dto;

namespace moviehub.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : moviehubAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
