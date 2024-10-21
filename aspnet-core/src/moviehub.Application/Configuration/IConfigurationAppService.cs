using System.Threading.Tasks;
using moviehub.Configuration.Dto;

namespace moviehub.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
